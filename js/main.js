/* eslint no-empty: "off"*/
import mergeWith from 'lodash.mergewith';
import ObjectView from './object/object-view';
import MapSetView from './object/map-set-view';
import ArrayView from './array/array-view';
import FunctionView from './function/function-view';
import PrimitiveView from './primitive/primitive-view';
import {getElement, customizer, checkObjectisPrototype} from './utils';
import {Mode, ViewType} from './enums';

const DEFAULT_MAX_FIELDS_IN_HEAD = 5;

const TypedArray = Object.getPrototypeOf(Int8Array);

/**
 * Console
 * @class
 */
export default class Console {
  /**
   * Initialize console into container
   * @param {HTMLElement} container — console container
   * @param {{}} params — parameters
   * @param {number} params.minFieldsToExpand — min number of fields in obj to expand
   * @param {number} params.maxFieldsInHead — max number of preview fields inside head
   * @param {number} params.expandDepth — level of depth to expand
   * @param {Env} params.env — environment
   **/
  constructor(container, params = {}) {
    if (!container) {
      throw new Error(`Console is not inited!`);
    } else if (!(container instanceof HTMLElement)) {
      throw new TypeError(`HTML element must be passed as container`);
    }
    this._views = new Map();
    this._container = container;
    this.params = {
      object: this._parseParams(ViewType.OBJECT, mergeWith({}, params.common, params.object, customizer)),
      array: this._parseParams(ViewType.ARRAY, mergeWith({}, params.common, params.array, customizer)),
      function: this._parseParams(ViewType.FUNCTION, mergeWith({}, params.common, params.function, customizer)),
      env: params.env
    };
  }

  _parseParams(viewType, paramsObject = {}) {
    // Set this._expandDepth and this._minFieldsToExpand only if expandDepth provided and > 0

    paramsObject.expandDepth = (
      typeof paramsObject.expandDepth === `number` &&
      paramsObject.expandDepth > 0
    ) ? paramsObject.expandDepth : 0;


    paramsObject.minFieldsToExpand = (
      typeof paramsObject.minFieldsToExpand === `number` &&
      paramsObject.minFieldsToExpand > 0
    ) ? paramsObject.minFieldsToExpand : 0;

    paramsObject.maxFieldsToExpand = (
      typeof paramsObject.maxFieldsToExpand === `number` &&
      paramsObject.maxFieldsToExpand > 0
    ) ? paramsObject.maxFieldsToExpand : Number.POSITIVE_INFINITY;

    paramsObject.maxFieldsInHead = (
      typeof paramsObject.maxFieldsInHead === `number` &&
      paramsObject.maxFieldsInHead > 0
    ) ? paramsObject.maxFieldsInHead : DEFAULT_MAX_FIELDS_IN_HEAD;

    if (!Array.isArray(paramsObject.excludeProperties)) {
      paramsObject.excludeProperties = [];
    }
    if (!Array.isArray(paramsObject.exclude)) {
      paramsObject.exclude = [];
    } else {
      const availableTypes = [];
      for (let key in ViewType) {
        if (ViewType.hasOwnProperty(key)) {
          const type = ViewType[key];
          availableTypes.push(type);
        }
      }
      if (!paramsObject.exclude.every((type) => availableTypes.includes(type))) {
        throw new Error(`Provided type to exclude is not in available types`);
      }
    }

    paramsObject.showGetters = typeof paramsObject.showGetters === `boolean` ?
      paramsObject.showGetters : true;

    paramsObject.countEntriesWithoutKeys = typeof paramsObject.countEntriesWithoutKeys === `boolean` ?
      paramsObject.countEntriesWithoutKeys : false;

    return paramsObject;
  }

  /**
   * Subscribe on log event fired
   * @abstract
   **/
  onlog() {}

  /**
   * Subscribe on logHTML event fired
   * @abstract
   **/
  onlogHTML() {}

  /**
   * Subscribe on dir event fired
   * @abstract
   **/
  ondir() {}

  /**
   * Subscribe on error event fired
   * @abstract
   **/
  onerror() {}

  /**
   * Equivalent to console.log
   * Push rest of arguments into container
   */
  log(...rest) {
    this._container.appendChild(this._getRowEl(rest, Mode.LOG));
    this.onlog();
  }

  logHTML(...rest) {
    this._container.appendChild(this._getRowEl(rest, Mode.LOG_HTML));
    this.onlogHTML();
  }

  /**
   * Equivalent to console.error
   * Push single value into conainer
   * @param {*} val — value
   */
  error(val) {
    const el = getElement(`<div class="console__row console__row--error"></div>`);
    el.appendChild(this.createTypedView(val, Mode.ERROR).el);
    this._container.appendChild(el);
    this.onerror();
  }

  /**
   * Equivalent to console.dir
   * Push single value into conainer
   * @param {*} val — value
   */
  dir(val) {
    const el = getElement(`<div class="console__row"></div>`);
    el.appendChild(this.createTypedView(val, Mode.DIR).el);
    this._container.appendChild(el);
    this.ondir();
  }

  /**
   * Clean container
   */
  clean() {
    this._container.innerHTML = ``;
  }

  createTypedView(val, mode, depth, parentView, propKey) {
    const params = {val, mode, depth, parentView, type: typeof val, propKey};
    switch (params.type) {
      case `function`:
        return new FunctionView(params, this);
      case `object`:
        if (val !== null) {
          let view;
          const stringTag = Object.prototype.toString.call(val);
          const stringTagName = stringTag.substring(8, stringTag.length - 1);

          const objectIsPrototype = checkObjectisPrototype(val);
          if (stringTagName !== `Object` && (
            Array.isArray(val) || (
              !objectIsPrototype && (
                val instanceof HTMLCollection ||
                val instanceof NodeList ||
                val instanceof DOMTokenList ||
                val instanceof TypedArray ||
                stringTagName === `Arguments`
              )
            )
          )) {
            view = new ArrayView(params, this);
          } else if (!objectIsPrototype && (val instanceof Map || val instanceof Set)) {
            view = new MapSetView(params, this);
          } else {
            view = new ObjectView(params, this);
          }
          view.stringTagName = stringTagName;
          return view;
        } else {
          return new PrimitiveView(params, this);
        }
      default:
        return new PrimitiveView(params, this);
    }
  }

  _getRowEl(entries, mode) {
    const el = getElement(`<div class="console__row"></div>`);
    entries.forEach((val) => {
      el.appendChild(this.createTypedView(val, mode).el);
    });
    return el;
  }

  /**
   * get innerHTML of container
   */
  get sourceLog() {
    return this._container.innerHTML;
  }

  /**
   * Extend console
   * @param {{}} consoleObject
   * @return {{}} extended console
   */
  extend(consoleObject) {
    consoleObject.log = this.log.bind(this);
    consoleObject.logHTML = this.logHTML.bind(this);
    consoleObject.info = this.log.bind(this);

    consoleObject.error = this.error.bind(this);
    consoleObject.warn = this.error.bind(this);

    consoleObject.dir = this.dir.bind(this);
    return consoleObject;
  }
}
