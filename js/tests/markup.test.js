(function () {
'use strict';

const getElement = (htmlMarkup) => {
  const div = document.createElement(`div`);
  div.innerHTML = htmlMarkup;
  return div.firstElementChild;
};

class AbstractView {
  constructor() {}

  /**
   * @abstract
   * @return {string}
   */
  get template() {}

  get el() {
    if (!this._el) {
      this._el = this.render();
      this.bind(this._el);
    }
    return this._el;
  }

  render() {
    return getElement(this.template);
  }

  bind() {}
}

const Mode = {
  LOG: `log`,
  DIR: `dir`,
  PREVIEW: `preview`,
  PROP: `prop`,
  ERROR: `error`
};

const ViewType = {
  FUNCTION: `function`,
  OBJECT: `object`,
  ARRAY: `array`,
  PRIMITIVE: `primitive`
};

const toggleMiddleware = (el, className, isEnable) => {
  if (typeof isEnable === `undefined`) {
    return el.classList.toggle(className);
  }
  if (isEnable) {
    el.classList.add(className);
    return true;
  } else {
    el.classList.remove(className);
    return false;
  }
};

class TypeView extends AbstractView {
  constructor(params, cons) {
    super();
    if (params.parentView) {
      this._parentView = params.parentView;
      this._rootViewType = params.parentView._rootViewType;
    }
    this._viewType = null;
    this._console = cons;
    this._value = params.val;
    this._mode = params.mode;
    this._type = params.type;
    this._isOpened = false;
    this._currentDepth = typeof params.depth === `number` ? params.depth : 1;
    this._templateParams = {};
  }

  get template() {
    return `\
<div class="console__item item item--${this._viewType}">\
  <div class="item__head">\
    <span class="item__head-info"></span>\
    ${this._templateParams.withHeadContentlength ? `<span class="item__head-content-length">${this.value.length}</span>` : ``}\
    <div class="item__head-content entry-container entry-container--head entry-container--${this._viewType}"></div>\
  </div>\
  <div class="item__content entry-container entry-container--${this._viewType}"></div>\
</div>`;
  }

  afterRender() {}

  bind() {
    if (!this._templateParams.onlyWrapper) {
      this._headEl = this.el.querySelector(`.item__head`);
      this._headContentEl = this._headEl.querySelector(`.item__head-content`);
      this._headInfoEl = this._headEl.querySelector(`.item__head-info`);
      if (this._templateParams.withHeadContentlength) {
        this._headContentLengthEl = this._headEl.querySelector(`.item__head-content-length`);
      }

      this._contentEl = this.el.querySelector(`.item__content`);
    }
    this.afterRender();
  }

  toggleHeadContentBraced(isEnable) {
    return toggleMiddleware(this._headContentEl, `entry-container--braced`, isEnable);
  }

  toggleHeadContentOversized(isEnable) {
    return toggleMiddleware(this._headContentEl, `entry-container--oversize`, isEnable);
  }

  toggleInfoShowed(isEnable) {
    return toggleMiddleware(this._headInfoEl, `item__head-info--show`, isEnable);
  }

  toggleContentLengthShowed(isEnable) {
    return toggleMiddleware(this._headContentLengthEl, `item__head-content-length--show`, isEnable);
  }

  toggleHeadContentShowed(isEnable) {
    return toggleMiddleware(this._headContentEl, `item__head-content--show`, isEnable);
  }

  toggleContentShowed(isEnable) {
    return toggleMiddleware(this.el, `item--show-content`, isEnable);
  }

  toggleError(isEnable) {
    return toggleMiddleware(this.el, Mode.ERROR, isEnable);
  }

  _setCursorPointer(isEnable) {
    return toggleMiddleware(this._headEl, `item__head--pointer`, isEnable);
  }

  get value() {
    return this._value;
  }

  get mode() {
    return this._mode;
  }

  get nextNestingLevel() {
    return this._currentDepth + 1;
  }

  get _isAutoExpandNeeded() {
    if (!this._isAutoExpandNeededProxied) {
      let rootFieldsMoreThanNeed = false;
      if (this._parentView && this._parentView._isAutoExpandNeeded) {
        rootFieldsMoreThanNeed = true;
      } else if (Object.keys(this.value).length >= // Object.getOwnPropertyNames
      this._console.params[this._rootViewType].minFieldsToExpand) {
        rootFieldsMoreThanNeed = true;
      }
      if (this._viewType !== null &&
      this._currentDepth <= this._console.params[this._rootViewType].expandDepth &&
      rootFieldsMoreThanNeed &&
      !this._console.params[this._rootViewType].exclude.includes(this._viewType)) {
        this._isAutoExpandNeededProxied = true;
      }
    }
    return this._isAutoExpandNeededProxied;
  }

  _toggleContent() {
    this.toggleContentShowed();
    if (this._contentEl.childElementCount === 0) {
      this._contentEl.appendChild(this.createContent(this.value, false).fragment);
    }
  }

  _hideContent() {
    this._proxiedContentEl.style.display = `none`;
  }

  _additionHeadClickHandler() {}

  _setHeadClickHandler() {
    this._setCursorPointer();
    this._headEl.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this._toggleContent();
      this._additionHeadClickHandler();
    });
  }

  static createEntryEl(index, valueEl, withoutKey) {
    const entryEl = getElement(`\
<span class="entry-container__entry">\
  ${withoutKey ? `` : `<span class="entry-container__key">${index}</span>`}<span class="entry-container__value-container"></span>\
</span>`);
    const valueContEl = entryEl.querySelector(`.entry-container__value-container`);
    valueContEl.appendChild(valueEl);

    return entryEl;
  }
}

/* eslint guard-for-in: "off"*/
/* eslint no-empty: "off"*/
class ObjectView extends TypeView {
  constructor(params, cons) {
    super(params, cons);
    this._viewType = ViewType.OBJECT;
    if (!params.parentView) {
      this._rootViewType = this._viewType;
    }
    const stringTag = Object.prototype.toString.call(this.value);
    this._stringTagName = stringTag.substring(8, stringTag.length - 1);
    this._constructorName = this.value.constructor.name;
  }

  afterRender() {
    const {
      elOrStr,
      isShowConstructor,
      isHeadContentShowed,
      isBraced,
      isOpeningDisabled,
      isOversized,
      isStringified,
      headContentClassName
    } = this._getHeadContent();

    if (headContentClassName) {
      this._headContentEl.classList.add(headContentClassName);
    }
    if (isBraced) {
      this.toggleHeadContentBraced();
    }
    if (isOversized) {
      this.toggleHeadContentOversized();
    }

    if (this._constructorName === `Object` && this._stringTagName !== `Object`) {
      this._headInfoEl.textContent = this._stringTagName;
    } else {
      this._headInfoEl.textContent = this._constructorName;
    }
    if (isShowConstructor) {
      this.toggleInfoShowed();
    }

    if (isHeadContentShowed) {
      if (elOrStr instanceof HTMLElement || elOrStr instanceof DocumentFragment) {
        this._headContentEl.appendChild(elOrStr);
      } else {
        this._headContentEl.innerHTML = elOrStr;
      }
      this.toggleHeadContentShowed();
    }

    if (this._mode === Mode.LOG || this._mode === Mode.ERROR && !this._parentView && !isStringified) {
      this._headEl.classList.add(`item__head--italic`);
    }

    if (this._mode === Mode.ERROR && isStringified) {
      this.toggleError();
    }

    if (this._mode === Mode.PREVIEW) {
      return;
    }
    if (!isOpeningDisabled) {
      if (this._isAutoExpandNeeded) {
        this._toggleContent();
      }
      this._setHeadClickHandler();
    }
  }

  _getHeadContent() {
    if (this._mode === Mode.DIR) {
      return this._getHeadDirContent();
    } else if (this._mode === Mode.LOG || this._mode === Mode.PROP || this._mode === Mode.ERROR) {
      return this._getHeadLogContent();
    } else if (this._mode === Mode.PREVIEW) {
      return this._getHeadPreviewContent();
    }
    return ``;
  }

  _getHeadPreviewContent() {
    if (this._stringTagName === `Object`) {
      return {
        elOrStr: `...`,
        isShowConstructor: false,
        isHeadContentShowed: true,
        isBraced: true
      };
    }
    return this._getHeadDirContent();
  }

  _getHeadLogContent() {
    let val;
    let isShowConstructor = false;
    let isBraced = true;
    let isOpeningDisabled = false;
    let isOversized = false;
    let isStringified = false;
    let headContentClassName;

    if (this.value instanceof HTMLElement && Object.getPrototypeOf(this.value).constructor !== HTMLElement) {
      return this._getHeadDirContent();
    } else if (this.value instanceof Error) {
      isBraced = false;
      val = this.value.toString();
      isStringified = true;
    } else if (this.value instanceof Number) {
      const view = this._console.createTypedView(Number.parseInt(this.value, 10), Mode.PREVIEW, this.nextNestingLevel, this);
      val = view.el;
      isShowConstructor = true;
    } else if (this.value instanceof String) {
      const view = this._console.createTypedView(this.value.toString(), Mode.PREVIEW, this.nextNestingLevel, this);
      val = view.el;
      isShowConstructor = true;
    } else if (this.value instanceof Date) {
      val = this.value.toString();
      isStringified = true;
      isBraced = false;
    } else if (this.value instanceof RegExp) {
      val = `/${this.value.source}/${this.value.flags}`;
      headContentClassName = `regexp`;
      isOpeningDisabled = true;
      isBraced = false;
    } else {
      const obj = this.createContent(this.value, true);
      val = obj.fragment;
      isOversized = obj.isOversized;
      if (this._stringTagName !== `Object` || this._constructorName !== `Object`) {
        isShowConstructor = true;
      }
    }
    return {
      elOrStr: val,
      isShowConstructor,
      isHeadContentShowed: true,
      isBraced,
      isOpeningDisabled,
      isOversized,
      isStringified,
      headContentClassName
    };
  }

  _getHeadDirContent() {
    let val;
    let isShowConstructor = false;
    let isHeadContentShowed = true;
    let isBraced = false;
    if (this.value instanceof HTMLElement) {
      let str = this.value.tagName.toLowerCase();
      str += this.value.id;
      if (this.value.classList.length) {
        str += `.` + Array.prototype.join.call(this.value.classList, `.`);
      }
      val = str;
    } else if (this.value instanceof Date) {
      val = this.value.toString();
    } else if (this.value instanceof RegExp) {
      val = `/${this.value.source}/${this.value.flags}`;
    } else if (this.value instanceof Error) {
      val = this.value.toString();
    } else {
      val = this.value;
      isShowConstructor = true;
      isHeadContentShowed = false;
    }
    return {
      elOrStr: val,
      isShowConstructor,
      isHeadContentShowed,
      isBraced
    };
  }

  createContent(obj, isPreview) {
    const fragment = document.createDocumentFragment();
    const addedKeys = new Set();
    // TODO: Добавить счётчик, чтобы больше 5 значений не добавлялось
    for (let key in obj) {
      if (isPreview && !obj.hasOwnProperty(key)) { // Перечисляемые свои
        continue;
      }
      if (isPreview && addedKeys.size === this._console.params[this._viewType].maxFieldsInHead) {
        return {
          fragment,
          isOversized: true
        };
      }
      try {
        const val = obj[key];
        fragment.appendChild(this._createObjectEntryEl(key, val, isPreview));
        addedKeys.add(key);
      } catch (err) {}
    }
    const ownPropertyNamesAndSymbols = Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
    for (let key of ownPropertyNamesAndSymbols) { // Неперечисляемые свои
      if (addedKeys.has(key)) {
        continue;
      }
      if (isPreview && addedKeys.size === this._console.params[this._viewType].maxFieldsInHead) {
        return {
          fragment,
          isOversized: true
        };
      }
      try {
        const val = obj[key];
        fragment.appendChild(this._createObjectEntryEl(key, val, isPreview));
        addedKeys.add(key);
      } catch (err) {}
    }
    return {
      fragment,
      isOversized: false
    };
  }

  _createObjectEntryEl(key, val, isPreview) {
    const view = this._console.createTypedView(val, isPreview ? Mode.PREVIEW : Mode.PROP, this.nextNestingLevel, this);
    return ObjectView.createEntryEl(key.toString(), view.el);
  }
}

class ArrayView extends TypeView {
  constructor(params, cons) {
    super(params, cons);
    this._viewType = ViewType.ARRAY;
    if (!params.parentView) {
      this._rootViewType = this._viewType;
    }

    this._templateParams.withHeadContentlength = true;
  }

  afterRender() {
    const {isShowConstructor, isHeadContentShowed, isShowLength} = this._getHeadContent();
    this.toggleHeadContentBraced();
    this._headInfoEl.textContent = this.value.constructor.name;
    if (isShowConstructor) {
      this.toggleInfoShowed();
    }
    if (isHeadContentShowed) {
      this.toggleHeadContentShowed();
      this._headContentEl.appendChild(this.createContent(this.value, true).fragment);
    }
    if (isShowLength) {
      this.toggleContentLengthShowed();
    }
    if (this._mode === Mode.LOG || this._mode === Mode.ERROR && !this._parentView) {
      this._headEl.classList.add(`item__head--italic`);
    }
    if (this._mode === Mode.PREVIEW) {
      return;
    }
    if (this._isAutoExpandNeeded) {
      this._toggleContent();
    }
    this._setHeadClickHandler();
  }

  _additionHeadClickHandler() {
    if (this._mode === Mode.PROP) {
      this.toggleInfoShowed();
      this.toggleHeadContentShowed();

      if (this.value.length <= 1) {
        this.toggleContentLengthShowed();
      }
    }
  }

  _getHeadContent() {
    let isShowConstructor = false;
    let isHeadContentShowed = true;
    let isShowLength = this.value.length > 1;
    if (this._mode === Mode.DIR) {
      isShowConstructor = true;
      isHeadContentShowed = false;
      isShowLength = true;
    } else if (this._mode === Mode.PREVIEW) {
      isShowConstructor = true;
      isHeadContentShowed = false;
      isShowLength = true;
    }
    return {
      isShowConstructor,
      isHeadContentShowed,
      isShowLength
    };
  }

  createContent(arr, isPreview) {
    const keys = Object.keys(arr);
    const addedKeys = new Set();
    const fragment = document.createDocumentFragment();
    for (let key of keys) {
      addedKeys.add(key);
      const val = arr[key];
      fragment.appendChild(this._createArrayEntryEl(key, val, isPreview));
    }
    for (let key of Object.getOwnPropertyNames(arr)) {
      if (addedKeys.has(key)) {
        continue;
      }
      if (isPreview && keys.indexOf(key) === -1) {
        continue;
      }
      const val = arr[key];
      fragment.appendChild(this._createArrayEntryEl(key, val, isPreview));
    }
    return {fragment};
  }

  _createArrayEntryEl(key, val, isPreview) {
    const isKeyNaN = Number.isNaN(Number.parseInt(key, 10));
    const view = this._console.createTypedView(val, isPreview ? Mode.PREVIEW : Mode.PROP, this.nextNestingLevel, this);
    return ArrayView.createEntryEl(key.toString(), view.el, isPreview ? !isKeyNaN : isPreview);
  }
}

const MAX_PREVIEW_FN_BODY_LENGTH = 43;

const FnType = {
  PLAIN: `plain`,
  ARROW: `arrow`,
  CLASS: `class`
};

// arguments, caller, length, name, prototype, __proto__, [[FunctionLocation]], [[Scopes]]

// if .caller not accessed — не выводим
// if prototype undefined — не выводим
// name — если неименованная — получает имя переменной, в которую записана
// если именнованная — то имя ф-ии

class FunctionView extends TypeView {
  constructor(params, cons) {
    super(params, cons);
    this._viewType = ViewType.FUNCTION;
    if (!params.parentView) {
      this._rootViewType = this._viewType;
    }
    this._fnType = FunctionView.checkFnType(this.value);
  }

  afterRender() {
    this._headEl.classList.add(`item__head--italic`);
    this._headInfoEl.classList.add(`item__head-info--function`);
    switch (this._fnType) {
      case FnType.CLASS:
        this._headInfoEl.textContent = `class`;
        break;
      case FnType.PLAIN:
      case FnType.ARROW:
        this._headInfoEl.textContent = `f`;
        break;
    }
    let isShowInfo = false;
    if (this._fnType !== FnType.ARROW) {
      isShowInfo = true;
    }
    switch (this._mode) {
      case Mode.PROP:
        this._headContentEl.innerHTML = this._getHeadPropMarkup();
        break;
      case Mode.DIR:
        this._headContentEl.innerHTML = this._getHeadDirMarkup();
        break;
      case Mode.LOG:
      case Mode.ERROR:
        this._headContentEl.innerHTML = this._getHeadLogMarkup();
        break;
      case Mode.PREVIEW:
        isShowInfo = true;
        break;
    }
    if (isShowInfo) {
      this.toggleInfoShowed();
    }

    if (this._mode !== Mode.PREVIEW) {
      this.toggleHeadContentShowed();
    }

    if (this._mode !== Mode.DIR && this._mode !== Mode.PROP) {
      return;
    }

    if (this._isAutoExpandNeeded) {
      this._toggleContent();
    }
    this._setHeadClickHandler();
  }

  _getHeadPropMarkup() {
    const {name, params, lines} = this.parseFunction(this.value);
    const joinedLines = lines.join(`\n`);

    let markup = `\
<span>\
${name ? name : ``}\
${this._fnType !== FnType.CLASS ? `(${params.join(`, `)})` : ``}\
${this._fnType === FnType.ARROW ? ` => ` : ` `}`;
    if (this._fnType !== FnType.CLASS) {
      markup += `${joinedLines.length <= MAX_PREVIEW_FN_BODY_LENGTH ? joinedLines : `{...}`}`;
    }
    markup += `</span>`;
    return markup;
  }

  _getHeadDirMarkup() {
    const {name, params} = this.parseFunction(this.value);

    let markup = `\
${name ? name : ``}\
${this._fnType === FnType.PLAIN ? `(${params.join(`, `)})` : ``}\
${this._fnType === FnType.ARROW ? `()` : ``}`;
    return markup;
  }

  _getHeadLogMarkup() {
    const {name, params, lines} = this.parseFunction(this.value);
    return `\
<pre>\
${name && this._fnType !== FnType.ARROW ? `${name} ` : ``}\
${this._fnType !== FnType.CLASS ? `(${params.join(`, `)})` : ``}\
${this._fnType === FnType.ARROW ? ` => ` : ` `}${lines.join(`\n`)}\
</pre>`;
  }

  parseParams(funString) {
    const paramsStart = funString.indexOf(`(`);
    const paramsEnd = funString.indexOf(`)`);

    const paramsContent = funString.substring(paramsStart + 1, paramsEnd).trim();

    return paramsContent ? paramsContent.split(`,`).map((it) => it.trim()) : [];
  }

  parseName(funString) {
    let endingChar;
    if (this._fnType === FnType.CLASS) {
      endingChar = `{`;
    } else if (this._fnType === FnType.PLAIN) {
      endingChar = `(`;
    }
    let name;
    const re = new RegExp(`(?:class|function)\\s+(\\w+)\\s*(?:\\${endingChar})`);
    const ex = re.exec(funString);
    if (ex !== null) {
      name = ex[1];
    }
    return name;
  }

  parseBody(funString) {
    const bodyStart = funString.indexOf(`{`);
    const bodyEnd = funString.lastIndexOf(`}`);

    const bodyContent = funString.substring(bodyStart, bodyEnd + 1).trim();

    if (!bodyContent) {
      return [];
    }

    return bodyContent.split(`\n`);
  }

  parseFunction(fnOrString) {
    let str;
    if (typeof fnOrString !== `string`) {
      str = fnOrString.toString();
    }
    return {
      name: fnOrString.name, // this.parseName(str),
      params: this.parseParams(str),
      lines: this.parseBody(str)
    };
  }

  createContent(fn) {
    const fragment = document.createDocumentFragment();
    const fnKeys = [`name`, `prototype`, `length`, `__proto__`];
    const keys = Object.keys(fn).concat(fnKeys);
    for (let key of keys) {
      let value;
      try {
        const tempValue = fn[key];
        if (typeof tempValue !== `undefined`) {
          value = tempValue;
        } else {
          continue;
        }
      } catch (err) {
        continue;
      }
      const view = this._console.createTypedView(value, Mode.PROP, this.nextNestingLevel, this);
      const entryEl = FunctionView.createEntryEl(key.toString(), view.el);
      fragment.appendChild(entryEl);
    }
    return {fragment};
  }

  static checkFnType(fn) {
    let str = fn.toString();
    const firstParenthesisIndex = str.indexOf(`(`);

    const classIndex = str.indexOf(`class`);
    const arrowIndex = str.indexOf(`=>`);
    if (classIndex !== -1 && classIndex < firstParenthesisIndex) {
      return FnType.CLASS;
    } else if (arrowIndex !== -1 && arrowIndex > firstParenthesisIndex) {
      return FnType.ARROW;
    }
    return FnType.PLAIN;
  }
}

class PrimitiveView extends TypeView {
  constructor(params, cons) {
    super(params, cons);
    this._viewType = ViewType.PRIMITIVE;
  }

  get template() {
    const type = this._type;
    let value = this.value;
    let html = ``;
    if (type === `string` || type === `symbol`) {
      if (type === `symbol`) {
        value = value.toString();
      }
      value = this.escapeHtml(value);
    }
    switch (type) {
      case `undefined`:
      case `null`:
      case `boolean`:
        html = `<div class="console__item item item--primitive ${type}">${value}</div>`;
        break;

      case `number`:
        if (Number.isNaN(value)) {
          html = `<div class="console__item item item--primitive NaN">NaN</div>`;
        } else if ((value === Infinity || value === -Infinity)) {
          html = `<div class="console__item item item--primitive number">${(value === -Infinity ? `-` : ``)}Infinity</div>`;
        } else {
          html = `<div class="console__item item item--primitive ${type}">${value}</div>`;
        }
        break;

      case `string`:
        let str;
        if (this._mode === Mode.PREVIEW && value.length > 100) {
          str = `${value.substr(0, 50)}...${value.substr(-50)}`;
        } else {
          str = value;
        }
        html = `<pre class="console__item item item--primitive string ${this._mode === Mode.PROP || this._mode === Mode.PREVIEW ? `string--nowrap` : ``} ${this._mode === Mode.PROP ? `pointer` : ``} ${this._mode === Mode.ERROR ? `${this._mode}` : ``}">${str}</pre>`;
        break;
      case `symbol`:
        html = `<div class="console__item item item--primitive symbol">${value}</div>`;
        break;

      case `object`:
        if (value === null) {
          html = `<div class="console__item item item--primitive null">${value}</div>`;
          break;
        }
    }
    return html;
  }

  bind() {
    if (this._mode === Mode.PROP && this._type === `string`) {
      this.el.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this.el.classList.toggle(`string--nowrap`);
      });
    }
  }

  escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, `&amp;`)
        .replace(/</g, `&lt;`)
        .replace(/>/g, `&gt;`)
        .replace(/"/g, `&quot;`)
        .replace(/'/g, `&#039;`);
  }
}

const MAX_HEAD_ELEMENTS_LENGTH = 5;

/**
 * Console
 * @class
 */
class Console {
  /**
   * Initialize console into container
   * @param {HTMLElement} container — console container
   * @param {{}} params — parameters
   * @property {number} params.minFieldsToExpand — min number of fields in obj to expand
   * @property {number} params.maxFieldsInHead — max number of preview fields inside head
   * @property {number} params.expandDepth — level of depth to expand
   **/
  constructor(container, params = {}) {
    if (!container) {
      throw new Error(`Console is not inited!`);
    }
    this._container = container;
    this.params = {
      object: this._parseParams(params.object, `object`),
      array: this._parseParams(params.array, `array`),
      function: this._parseParams(params.function, `function`)
    };
  }

  _parseParams(paramsObject, paramName) {
    if (paramsObject) {
      // Set this._expandDepth and this._minFieldsToExpand only if expandDepth provided and > 0
      if (typeof paramsObject.expandDepth === `number` &&
      paramsObject.expandDepth > 0) {

        paramsObject.minFieldsToExpand = (
          typeof paramsObject.minFieldsToExpand === `number` &&
          paramsObject.minFieldsToExpand > 0
        ) ? paramsObject.minFieldsToExpand : 0;
      }

      paramsObject.maxFieldsInHead = (
        typeof paramsObject.maxFieldsInHead === `number` &&
        paramsObject.maxFieldsInHead > 0
      ) ? paramsObject.maxFieldsInHead : MAX_HEAD_ELEMENTS_LENGTH;
    } else {
      paramsObject = {};
      if (paramName === `object`) {
        paramsObject.maxFieldsInHead = MAX_HEAD_ELEMENTS_LENGTH;
      }
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
    return paramsObject;
  }

  /**
   * Subscribe on log event fired
   * @abstract
   **/
  onlog() {}

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

  createTypedView(val, mode, depth, parentView) {
    const params = {val, mode, depth, parentView, type: typeof val};
    let view;
    switch (params.type) {
      case `function`:
        view = new FunctionView(params, this);
        break;
      case `object`:
        if (val !== null) {
          if (Array.isArray(val)) {
            view = new ArrayView(params, this);
          } else {
            view = new ObjectView(params, this);
          }
        } else {
          view = new PrimitiveView(params, this);
        }
        break;
      default:
        view = new PrimitiveView(params, this);
        break;
    }
    return view;
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
    consoleObject.info = this.log.bind(this);

    consoleObject.error = this.error.bind(this);
    consoleObject.warn = this.error.bind(this);

    consoleObject.dir = this.dir.bind(this);
    return consoleObject;
  }
}

/* eslint no-undefined: 0 */

// import FunctionView from '../function/function-view';
// declare consts here
//
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// arr2.test = 123;
// const nestedArr = [1, 2, ``, [1, 2, ``]];
const str1 = `Here is console log`;
const str2 = `
  Here is console log
  sdadsda
asddsd`;
const primitiveNumber = 123;
// const currYearText = `current year: `;
// const currYearDate = (new Date()).getFullYear();
//
// const arr3 = [
//   {key1: `value1`},
//   {key2: `value2`}
// ];
//
// class Person {
//   constructor(val) {
//     if (val === 123) {
//       this._bar = val;
//     }
//   }
// }
//
// const arrowFn1 = (bar = 123) => {return 123;};
// const arrowFn2 = (bar = 123) => {`sssssssssssssssssssssssssssssssssssssssss`};
// const arrowFn3 = (bar = 123) => {`sssssssssssssssssssssssssssssssssssssssssss`};
// function plainFn (bar456 = 123) {return 123;}
// const exprFn = function (bar1 = 123) {return 123;}
// const exprNamedFn = function named (bar2 = 123) {return 123;}
//
// const num = new Number(1)
// const date = new Date();
// const str = new String(`qwe`);
//
// const div = document.querySelector(`div`);
//
// const kot = {
//   cat: {
//     name: `Сергей Сергеевич`,
//     kittens: [{
//       name: `Иван Васильич`,
//       kittens: [
//         {name: `Пётр Иванович`}
//       ]
//     }]
//   }
// };
//
// class Cat {
//   constructor(name, age = 0, male = true) {
//     this.name = name;
//     this.age = age;
//     this.male = male;
//   }
//
//   eat(food) {
//     return `${this.name} ate ${food}`;
//   }
//
//   meow() {
//     return `Мяу!`;
//   }
// }
//
// const o1 = {};
// o1.b = {o1: o1};
// const o2 = {oo: 1, b: ``, arr1, arr2, nestedArr, e: {b: 1}, o1};
// const o3 = {Person, arrowFn1, arrowFn2, arrowFn3, plainFn, exprFn, exprNamedFn};
// const o4 = {num, str};
//
// const cat = new Cat(`Keks`, 2);
// const err = new Error(`new Error`);
// const errObjPlain = new Error(o3);
// const errNum = new Error(num);
// const typeErr = new TypeError(`new TypeError`);
// const int8Arr = new Int8Array();
// const reConstr = new RegExp(`regexpConstr`);
// const reLiteral = /reLiteral/;
const sym = Symbol(`sym`);
// const ab = new ArrayBuffer();

describe(`Check primitives: `, () => {
  const defaultMode = Mode.LOG;
  const cons = new Console(document.body);
  after(() => {
    document.body.innerHTML = ``;
  });
  it(`any primitive has class "item--primitive"`, () => {
    const primitiveEls = [
      cons.createTypedView(str1, defaultMode).el,
      cons.createTypedView(primitiveNumber, defaultMode).el,
      cons.createTypedView(sym, defaultMode).el,
      cons.createTypedView(NaN, defaultMode).el,
      cons.createTypedView(null, defaultMode).el,
      cons.createTypedView(true, defaultMode).el,
      cons.createTypedView(undefined, defaultMode).el
    ];
    assert(primitiveEls.every((el) => {
      return el.classList.contains(`item--primitive`);
    }));
  });
  it(`string`, () => {
    const el = cons.createTypedView(str1, defaultMode).el;
    assert(
        el.classList.contains(`item--primitive`) &&
        el.classList.contains(`string`) &&
        el.textContent === str1
    );
  });
  it(`string in prop mode should contain string--nowrap`, () => {
    const el = cons.createTypedView(str1, Mode.PROP).el;
    assert(
        el.classList.contains(`item--primitive`) &&
        el.classList.contains(`string`) &&
        el.classList.contains(`string--nowrap`) &&
        el.textContent === str1
    );
  });
  it(`string in preview mode should contain string--nowrap`, () => {
    const el = cons.createTypedView(str1, Mode.PREVIEW).el;
    assert(
        el.classList.contains(`item--primitive`) &&
        el.classList.contains(`string`) &&
        el.classList.contains(`string--nowrap`) &&
        el.textContent === str1
    );
  });
  it(`multiline string`, () => {
    const el = cons.createTypedView(str2, defaultMode).el;
    assert(
        el.classList.contains(`item--primitive`) &&
        el.classList.contains(`string`) &&
        str2.includes(el.textContent)
    );
  });
  it(`number`, () => {
    const el = cons.createTypedView(primitiveNumber, defaultMode).el;
    assert(
        el.classList.contains(`item--primitive`) &&
        el.classList.contains(`number`) &&
        el.textContent === primitiveNumber.toString()
    );
  });
  it(`symbol`, () => {
    const el = cons.createTypedView(sym, defaultMode).el;
    assert(
        el.classList.contains(`item--primitive`) &&
        el.classList.contains(`symbol`) &&
        el.textContent === sym.toString()
    );
  });
  it(`NaN`, () => {
    const el = cons.createTypedView(NaN, defaultMode).el;
    assert(
        el.classList.contains(`item--primitive`) &&
        el.classList.contains(`NaN`) &&
        el.textContent === `NaN`
    );
  });
  it(`null`, () => {
    const el = cons.createTypedView(null, defaultMode).el;
    assert(
        el.classList.contains(`item--primitive`) &&
        el.classList.contains(`null`) &&
        el.textContent === `null`
    );
  });
  it(`boolean`, () => {
    const el = cons.createTypedView(true, defaultMode).el;
    assert(
        el.classList.contains(`item--primitive`) &&
        el.classList.contains(`boolean`) &&
        el.textContent === `true`
    );
  });
  it(`undefined`, () => {
    const el = cons.createTypedView(undefined, defaultMode).el;
    assert(
        el.classList.contains(`item--primitive`) &&
        el.classList.contains(`undefined`) &&
        el.textContent === `undefined`
    );
  });
});

// describe(`Check functions: `, () => {
// const cons = new Console(document.body);
// after(() => {
//   document.body.innerHTML = ``;
// });
//   const fnEls = [
//     cons.createTypedView(arrowFn1, Mode.PREVIEW).el,
//     cons.createTypedView(plainFn, Mode.PREVIEW).el,
//     cons.createTypedView(exprFn, Mode.PREVIEW).el,
//     cons.createTypedView(exprNamedFn, Mode.PREVIEW).el,
//     cons.createTypedView(Person, Mode.PREVIEW).el
//   ];
//   it(`any function has class "item_function"`, () => {
//     assert(fnEls.every((el) => {
//       return el.classList.contains(`item_function`);
//     }));
//   });
//   it(`any function in preview === "f"`, () => {
//     assert(fnEls.every((el) => {
//       return el.textContent === `f`;
//     }));
//   });
//   it(`class dir and prop`, () => {
//     const classEls = [
//       cons.createTypedView(Person, Mode.DIR).el,
//       cons.createTypedView(Person, Mode.PROP).el
//     ];
//     assert(classEls.every((el) => {
//       return el.textContent.startsWith(`class ${Person.name}`);
//     }));
//   });
// });

}());

//# sourceMappingURL=markup.test.js.map
