!function(){"use strict";var r=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),n=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},o=function(){function e(){s(this,e)}return t(e,[{key:"render",value:function(){return r(this.template)}},{key:"bind",value:function(){}},{key:"template",get:function(){}},{key:"el",get:function(){return this._el||(this._el=this.render(),this.bind(this._el)),this._el}}]),e}(),h="log",i="dir",c="preview",p="prop",d="error",u={FUNCTION:"function",OBJECT:"object",ARRAY:"array",PRIMITIVE:"primitive"},_=function(e,t,n){return void 0===n?e.classList.toggle(t):n?(e.classList.add(t),!0):(e.classList.remove(t),!1)},v=function(e){function i(e,t){s(this,i);var n=l(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return e.parentView&&(n._parentView=e.parentView,n._rootViewType=e.parentView._rootViewType),n._viewType=null,n._console=t,n._value=e.val,n._mode=e.mode,n._type=e.type,n._isOpened=!1,n._currentDepth="number"==typeof e.depth?e.depth:1,n._templateParams={},n}return n(i,o),t(i,[{key:"afterRender",value:function(){}},{key:"bind",value:function(){this._templateParams.onlyWrapper||(this._headEl=this.el.querySelector(".item__head"),this._headContentEl=this._headEl.querySelector(".item__head-content"),this._headInfoEl=this._headEl.querySelector(".item__head-info"),this._templateParams.withHeadContentlength&&(this._headContentLengthEl=this._headEl.querySelector(".item__head-content-length")),this._contentEl=this.el.querySelector(".item__content")),this.afterRender()}},{key:"toggleHeadContentBraced",value:function(e){return _(this._headContentEl,"entry-container--braced",e)}},{key:"toggleHeadContentOversized",value:function(e){return _(this._headContentEl,"entry-container--oversize",e)}},{key:"toggleInfoShowed",value:function(e){return _(this._headInfoEl,"item__head-info--show",e)}},{key:"toggleContentLengthShowed",value:function(e){return _(this._headContentLengthEl,"item__head-content-length--show",e)}},{key:"toggleHeadContentShowed",value:function(e){return _(this._headContentEl,"item__head-content--show",e)}},{key:"toggleContentShowed",value:function(e){return _(this.el,"item--show-content",e)}},{key:"toggleError",value:function(e){return _(this.el,d,e)}},{key:"_setCursorPointer",value:function(e){return _(this._headEl,"item__head--pointer",e)}},{key:"_toggleContent",value:function(){this.toggleContentShowed(),0===this._contentEl.childElementCount&&this._contentEl.appendChild(this.createContent(this.value,!1).fragment)}},{key:"_hideContent",value:function(){this._proxiedContentEl.style.display="none"}},{key:"_additionHeadClickHandler",value:function(){}},{key:"_setHeadClickHandler",value:function(){var t=this;this._setCursorPointer(),this._headEl.addEventListener("click",function(e){e.preventDefault(),t._toggleContent(),t._additionHeadClickHandler()})}},{key:"template",get:function(){return'<div class="console__item item item--'+this._viewType+'">  <div class="item__head">    <span class="item__head-info"></span>    '+(this._templateParams.withHeadContentlength?'<span class="item__head-content-length">'+this.value.length+"</span>":"")+'    <div class="item__head-content entry-container entry-container--head entry-container--'+this._viewType+'"></div>  </div>  <div class="item__content entry-container entry-container--'+this._viewType+'"></div></div>'}},{key:"value",get:function(){return this._value}},{key:"mode",get:function(){return this._mode}},{key:"nextNestingLevel",get:function(){return this._currentDepth+1}},{key:"_isAutoExpandNeeded",get:function(){if(!this._isAutoExpandNeededProxied){var e=!1;this._parentView&&this._parentView._isAutoExpandNeeded?e=!0:Object.keys(this.value).length>=this._console.params[this._rootViewType].minFieldsToExpand&&(e=!0),null!==this._viewType&&this._currentDepth<=this._console.params[this._rootViewType].expandDepth&&e&&!this._console.params[this._rootViewType].exclude.includes(this._viewType)&&(this._isAutoExpandNeededProxied=!0)}return this._isAutoExpandNeededProxied}}],[{key:"createEntryEl",value:function(e,t,n){var i=r('<span class="entry-container__entry">  '+(n?"":'<span class="entry-container__key">'+e+"</span>")+'<span class="entry-container__value-container"></span></span>');return i.querySelector(".entry-container__value-container").appendChild(t),i}}]),i}(),f=function(e){function r(e,t){s(this,r);var n=l(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));n._viewType=u.OBJECT,e.parentView||(n._rootViewType=n._viewType);var i=Object.prototype.toString.call(n.value);return n._stringTagName=i.substring(8,i.length-1),n._constructorName=n.value.constructor.name,n}return n(r,v),t(r,[{key:"afterRender",value:function(){var e=this._getHeadContent(),t=e.elOrStr,n=e.isShowConstructor,i=e.isHeadContentShowed,r=e.isBraced,o=e.isOpeningDisabled,a=e.isOversized,s=e.isStringified,l=e.headContentClassName;l&&this._headContentEl.classList.add(l),r&&this.toggleHeadContentBraced(),a&&this.toggleHeadContentOversized(),"Object"===this._constructorName&&"Object"!==this._stringTagName?this._headInfoEl.textContent=this._stringTagName:this._headInfoEl.textContent=this._constructorName,n&&this.toggleInfoShowed(),i&&(t instanceof HTMLElement||t instanceof DocumentFragment?this._headContentEl.appendChild(t):this._headContentEl.innerHTML=t,this.toggleHeadContentShowed()),this._mode!==h&&(this._mode!==d||this._parentView||s)||this._headEl.classList.add("item__head--italic"),this._mode===d&&s&&this.toggleError(),this._mode!==c&&(o||(this._isAutoExpandNeeded&&this._toggleContent(),this._setHeadClickHandler()))}},{key:"_getHeadContent",value:function(){return this._mode===i?this._getHeadDirContent():this._mode===h||this._mode===p||this._mode===d?this._getHeadLogContent():this._mode===c?this._getHeadPreviewContent():""}},{key:"_getHeadPreviewContent",value:function(){return"Object"===this._stringTagName?{elOrStr:"...",isShowConstructor:!1,isHeadContentShowed:!0,isBraced:!0}:this._getHeadDirContent()}},{key:"_getHeadLogContent",value:function(){var e=void 0,t=!1,n=!0,i=!1,r=!1,o=!1,a=void 0;if(this.value instanceof HTMLElement&&Object.getPrototypeOf(this.value).constructor!==HTMLElement)return this._getHeadDirContent();if(this.value instanceof Error)n=!1,e=this.value.toString(),o=!0;else if(this.value instanceof Number){e=this._console.createTypedView(Number.parseInt(this.value,10),c,this.nextNestingLevel,this).el,t=!0}else if(this.value instanceof String){e=this._console.createTypedView(this.value.toString(),c,this.nextNestingLevel,this).el,t=!0}else if(this.value instanceof Date)e=this.value.toString(),o=!0,n=!1;else if(this.value instanceof RegExp)e="/"+this.value.source+"/"+this.value.flags,a="regexp",i=!0,n=!1;else{var s=this.createContent(this.value,!0);e=s.fragment,r=s.isOversized,"Object"===this._stringTagName&&"Object"===this._constructorName||(t=!0)}return{elOrStr:e,isShowConstructor:t,isHeadContentShowed:!0,isBraced:n,isOpeningDisabled:i,isOversized:r,isStringified:o,headContentClassName:a}}},{key:"_getHeadDirContent",value:function(){var e=void 0,t=!1,n=!0;if(this.value instanceof HTMLElement){var i=this.value.tagName.toLowerCase();i+=this.value.id,this.value.classList.length&&(i+="."+Array.prototype.join.call(this.value.classList,".")),e=i}else this.value instanceof Date?e=this.value.toString():this.value instanceof RegExp?e="/"+this.value.source+"/"+this.value.flags:this.value instanceof Error?e=this.value.toString():(e=this.value,t=!0,n=!1);return{elOrStr:e,isShowConstructor:t,isHeadContentShowed:n,isBraced:!1}}},{key:"createContent",value:function(e,t){var n=document.createDocumentFragment(),i=new Set;for(var r in e)if(!t||e.hasOwnProperty(r)){if(t&&i.size===this._console.params[this._viewType].maxFieldsInHead)return{fragment:n,isOversized:!0};try{var o=e[r];n.appendChild(this._createObjectEntryEl(r,o,t)),i.add(r)}catch(e){}}var a=Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)),s=!0,l=!1,h=void 0;try{for(var c,d=a[Symbol.iterator]();!(s=(c=d.next()).done);s=!0){var u=c.value;if(!i.has(u)){if(t&&i.size===this._console.params[this._viewType].maxFieldsInHead)return{fragment:n,isOversized:!0};try{var _=e[u];n.appendChild(this._createObjectEntryEl(u,_,t)),i.add(u)}catch(e){}}}}catch(e){l=!0,h=e}finally{try{!s&&d.return&&d.return()}finally{if(l)throw h}}return{fragment:n,isOversized:!1}}},{key:"_createObjectEntryEl",value:function(e,t,n){var i=this._console.createTypedView(t,n?c:p,this.nextNestingLevel,this);return r.createEntryEl(e.toString(),i.el)}}]),r}(),y=function(e){function o(e,t){s(this,o);var n=l(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t));return n._viewType=u.ARRAY,e.parentView||(n._rootViewType=n._viewType),n._templateParams.withHeadContentlength=!0,n}return n(o,v),t(o,[{key:"afterRender",value:function(){var e=this._getHeadContent(),t=e.isShowConstructor,n=e.isHeadContentShowed,i=e.isShowLength;this.toggleHeadContentBraced(),this._headInfoEl.textContent=this.value.constructor.name,t&&this.toggleInfoShowed(),n&&(this.toggleHeadContentShowed(),this._headContentEl.appendChild(this.createContent(this.value,!0).fragment)),i&&this.toggleContentLengthShowed(),(this._mode===h||this._mode===d&&!this._parentView)&&this._headEl.classList.add("item__head--italic"),this._mode!==c&&(this._isAutoExpandNeeded&&this._toggleContent(),this._setHeadClickHandler())}},{key:"_additionHeadClickHandler",value:function(){this._mode===p&&(this.toggleInfoShowed(),this.toggleHeadContentShowed(),this.value.length<=1&&this.toggleContentLengthShowed())}},{key:"_getHeadContent",value:function(){var e=!1,t=!0,n=1<this.value.length;return this._mode===i?(t=!1,n=e=!0):this._mode===c&&(t=!1,n=e=!0),{isShowConstructor:e,isHeadContentShowed:t,isShowLength:n}}},{key:"createContent",value:function(e,t){var n=Object.keys(e),i=new Set,r=document.createDocumentFragment(),o=!0,a=!1,s=void 0;try{for(var l,h=n[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var c=l.value;i.add(c);var d=e[c];r.appendChild(this._createArrayEntryEl(c,d,t))}}catch(e){a=!0,s=e}finally{try{!o&&h.return&&h.return()}finally{if(a)throw s}}var u=!0,_=!1,p=void 0;try{for(var v,f=Object.getOwnPropertyNames(e)[Symbol.iterator]();!(u=(v=f.next()).done);u=!0){var y=v.value;if(!i.has(y)&&(!t||-1!==n.indexOf(y))){d=e[y];r.appendChild(this._createArrayEntryEl(y,d,t))}}}catch(e){_=!0,p=e}finally{try{!u&&f.return&&f.return()}finally{if(_)throw p}}return{fragment:r}}},{key:"_createArrayEntryEl",value:function(e,t,n){var i=Number.isNaN(Number.parseInt(e,10)),r=this._console.createTypedView(t,n?c:p,this.nextNestingLevel,this);return o.createEntryEl(e.toString(),r.el,n?!i:n)}}]),o}(),m="plain",g="arrow",w="class",C=function(e){function _(e,t){s(this,_);var n=l(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,e,t));return n._viewType=u.FUNCTION,e.parentView||(n._rootViewType=n._viewType),n._fnType=_.checkFnType(n.value),n}return n(_,v),t(_,[{key:"afterRender",value:function(){switch(this._headEl.classList.add("item__head--italic"),this._headInfoEl.classList.add("item__head-info--function"),this._fnType){case w:this._headInfoEl.textContent="class";break;case m:case g:this._headInfoEl.textContent="f"}var e=!1;switch(this._fnType!==g&&(e=!0),this._mode){case p:this._headContentEl.innerHTML=this._getHeadPropMarkup();break;case i:this._headContentEl.innerHTML=this._getHeadDirMarkup();break;case h:case d:this._headContentEl.innerHTML=this._getHeadLogMarkup();break;case c:e=!0}e&&this.toggleInfoShowed(),this._mode!==c&&this.toggleHeadContentShowed(),this._mode!==i&&this._mode!==p||(this._isAutoExpandNeeded&&this._toggleContent(),this._setHeadClickHandler())}},{key:"_getHeadPropMarkup",value:function(){var e=this.parseFunction(this.value),t=e.name,n=e.params,i=e.lines.join("\n"),r="<span>"+(t||"")+(this._fnType!==w?"("+n.join(", ")+")":"")+(this._fnType===g?" => ":" ");return this._fnType!==w&&(r+=""+(i.length<=43?i:"{...}")),r+="</span>"}},{key:"_getHeadDirMarkup",value:function(){var e=this.parseFunction(this.value),t=e.name,n=e.params;return(t||"")+(this._fnType===m?"("+n.join(", ")+")":"")+(this._fnType===g?"()":"")}},{key:"_getHeadLogMarkup",value:function(){var e=this.parseFunction(this.value),t=e.name,n=e.params,i=e.lines;return"<pre>"+(t&&this._fnType!==g?t+" ":"")+(this._fnType!==w?"("+n.join(", ")+")":"")+(this._fnType===g?" => ":" ")+i.join("\n")+"</pre>"}},{key:"parseParams",value:function(e){var t=e.indexOf("("),n=e.indexOf(")"),i=e.substring(t+1,n).trim();return i?i.split(",").map(function(e){return e.trim()}):[]}},{key:"parseName",value:function(e){var t=void 0;this._fnType===w?t="{":this._fnType===m&&(t="(");var n=void 0,i=new RegExp("(?:class|function)\\s+(\\w+)\\s*(?:\\"+t+")").exec(e);return null!==i&&(n=i[1]),n}},{key:"parseBody",value:function(e){var t=e.indexOf("{"),n=e.lastIndexOf("}"),i=e.substring(t,n+1).trim();return i?i.split("\n"):[]}},{key:"parseFunction",value:function(e){var t=void 0;return"string"!=typeof e&&(t=e.toString()),{name:e.name,params:this.parseParams(t),lines:this.parseBody(t)}}},{key:"createContent",value:function(e){var t=document.createDocumentFragment(),n=Object.keys(e).concat(["name","prototype","length","__proto__"]),i=!0,r=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var l=a.value,h=void 0;try{var c=e[l];if(void 0===c)continue;h=c}catch(e){continue}var d=this._console.createTypedView(h,p,this.nextNestingLevel,this),u=_.createEntryEl(l.toString(),d.el);t.appendChild(u)}}catch(e){r=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}return{fragment:t}}}],[{key:"checkFnType",value:function(e){var t=e.toString(),n=t.indexOf("("),i=t.indexOf("class"),r=t.indexOf("=>");return-1!==i&&i<n?w:-1!==r&&n<r?g:m}}]),_}(),E=function(e){function i(e,t){s(this,i);var n=l(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e,t));return n._viewType=u.PRIMITIVE,n}return n(i,v),t(i,[{key:"bind",value:function(){var t=this;this._mode===p&&"string"===this._type&&this.el.addEventListener("click",function(e){e.preventDefault(),t.el.classList.toggle("string--nowrap")})}},{key:"escapeHtml",value:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}},{key:"template",get:function(){var e=this._type,t=this.value,n="";switch("string"!==e&&"symbol"!==e||("symbol"===e&&(t=t.toString()),t=this.escapeHtml(t)),e){case"undefined":case"null":case"boolean":n='<div class="console__item item item--primitive '+e+'">'+t+"</div>";break;case"number":n=Number.isNaN(t)?'<div class="console__item item item--primitive NaN">NaN</div>':t===1/0||t===-1/0?'<div class="console__item item item--primitive number">'+(t===-1/0?"-":"")+"Infinity</div>":'<div class="console__item item item--primitive '+e+'">'+t+"</div>";break;case"string":var i=void 0;i=this._mode===c&&100<t.length?t.substr(0,50)+"..."+t.substr(-50):t,n='<pre class="console__item item item--primitive string '+(this._mode===p||this._mode===c?"string--nowrap":"")+" "+(this._mode===p?"pointer":"")+" "+(this._mode===d?""+this._mode:"")+'">'+i+"</pre>";break;case"symbol":n='<div class="console__item item item--primitive symbol">'+t+"</div>";break;case"object":if(null===t){n='<div class="console__item item item--primitive null">'+t+"</div>";break}}return n}}]),i}(),b=function(){function n(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(s(this,n),!e)throw new Error("Console is not inited!");this._container=e,this.params={object:this._parseParams(t.object,"object"),array:this._parseParams(t.array,"array"),function:this._parseParams(t.function,"function")}}return t(n,[{key:"_parseParams",value:function(e,t){if(e?("number"==typeof e.expandDepth&&0<e.expandDepth&&(e.minFieldsToExpand="number"==typeof e.minFieldsToExpand&&0<e.minFieldsToExpand?e.minFieldsToExpand:0),e.maxFieldsInHead="number"==typeof e.maxFieldsInHead&&0<e.maxFieldsInHead?e.maxFieldsInHead:5):(e={},"object"===t&&(e.maxFieldsInHead=5)),Array.isArray(e.exclude)){var n=[];for(var i in u)if(u.hasOwnProperty(i)){var r=u[i];n.push(r)}if(!e.exclude.every(function(e){return n.includes(e)}))throw new Error("Provided type to exclude is not in available types")}else e.exclude=[];return e}},{key:"onlog",value:function(){}},{key:"ondir",value:function(){}},{key:"onerror",value:function(){}},{key:"log",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._container.appendChild(this._getRowEl(t,h)),this.onlog()}},{key:"error",value:function(e){var t=r('<div class="console__row console__row--error"></div>');t.appendChild(this.createTypedView(e,d).el),this._container.appendChild(t),this.onerror()}},{key:"dir",value:function(e){var t=r('<div class="console__row"></div>');t.appendChild(this.createTypedView(e,i).el),this._container.appendChild(t),this.ondir()}},{key:"clean",value:function(){this._container.innerHTML=""}},{key:"createTypedView",value:function(e,t,n,i){var r={val:e,mode:t,depth:n,parentView:i,type:void 0===e?"undefined":a(e)},o=void 0;switch(r.type){case"function":o=new C(r,this);break;case"object":o=null!==e?Array.isArray(e)?new y(r,this):new f(r,this):new E(r,this);break;default:o=new E(r,this)}return o}},{key:"_getRowEl",value:function(e,t){var n=this,i=r('<div class="console__row"></div>');return e.forEach(function(e){i.appendChild(n.createTypedView(e,t).el)}),i}},{key:"extend",value:function(e){return e.log=this.log.bind(this),e.info=this.log.bind(this),e.error=this.error.bind(this),e.warn=this.error.bind(this),e.dir=this.dir.bind(this),e}},{key:"sourceLog",get:function(){return this._container.innerHTML}}]),n}(),k=[],e=function(e){k.push(e.error)};window.addEventListener("error",e),window.console.warn=e,window.console.error=e;var T=[],H=function(){T.push.apply(T,arguments)},S=[];window.console.info=H,window.console.log=H,window.console.dir=function(e){S.push(e)};window.addEventListener("DOMContentLoaded",function(){var e;!function(){var e=window.document.createElement("div");e.classList.add("console");var t=new b(e);window.document.body.appendChild(e),t.extend(window.console),k.forEach(function(e){t.error(e)}),T.forEach(function(e){t.log(e)}),S.forEach(function(e){t.dir(e)}),window.addEventListener("error",function(e){t.error(e.error)})}(),(e=window.document.createElement("link")).rel="stylesheet",e.href="//htmlacademy.github.io/console.js/css/style.min.css",window.document.head.appendChild(e)})}();
//# sourceMappingURL=index-silent.js.map
