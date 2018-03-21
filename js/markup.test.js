!function(){"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),n=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},i=function(){function e(){o(this,e)}return t(e,[{key:"render",value:function(){return P(this.template)}},{key:"bind",value:function(){}},{key:"template",get:function(){}},{key:"el",get:function(){return this._el||(this._el=this.render(),this.bind(this._el)),this._el}}]),e}(),a="log",h="dir",y="preview",g="prop",c="error",u="console__item-head",l="console__item_pointer",_="console__item-head_show",d="console__item-head_braced",v="console__item-head-info",f="console__item-head-elements",b="console__item-head-elements_show",k="console__item-content-container",m="console__item-content-container_show",p="console__item-head-elements-length",C="console__item-head-elements-length_show",E=function(e){function s(e,t,n){o(this,s);var i=r(this,(s.__proto__||Object.getPrototypeOf(s)).call(this));return i._value=e,i._type=t,i._isPrimitive=n,i._isOpened=!1,i}return n(s,i),t(s,[{key:"_getHeadErrorContent",value:function(){return{elOrStr:"<pre>"+this._value.stack+"</pre>",isShowConstructor:!1,isShowElements:!0}}},{key:"_toggleContent",value:function(){this._proxiedContentEl||(this._proxiedContentEl=P('<div class="console__item-content"></div>'),this._proxiedContentEl.appendChild(this.createContent(this.value,!1)),this._contentContainerEl.appendChild(this._proxiedContentEl)),this._contentContainerEl.classList.toggle(m)}},{key:"_hideContent",value:function(){this._proxiedContentEl.style.display="none"}},{key:"_additionHeadClickHandler",value:function(){}},{key:"_setHeadClickHandler",value:function(e){var t=this;this._setCursorPointer(),e.addEventListener("click",function(e){e.preventDefault(),t._toggleContent(),t._additionHeadClickHandler()})}},{key:"_setCursorPointer",value:function(){this.el.classList.add(l)}},{key:"value",get:function(){return this._value}},{key:"type",get:function(){return this._type}},{key:"isPrimitive",get:function(){return this._isPrimitive}}],[{key:"createEntryEl",value:function(e,t,n){var i=P('<span class="entry-container__entry">  '+(n?"":'<span class="entry-container__key">'+e+"</span>")+'<span class="entry-container__value-container"></span></span>');return i.querySelector(".entry-container__value-container").appendChild(t),i}}]),s}(),S=function(e){function p(e,t){o(this,p);var n=r(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,e,"object",!1));return n._mode=t,n._entries=new Map,n._isOpened=!1,n}return n(p,E),t(p,[{key:"bind",value:function(){var e=this.el.querySelector("."+u),t=e.querySelector("."+f),n=e.querySelector("."+v);this._contentContainerEl=this.el.querySelector("."+k);var i=this._getHeadContent(),s=i.elOrStr,o=i.isShowConstructor,r=i.isShowElements,a=i.isBraced,l=i.isOpeningDisabled;a&&e.classList.add(d),o&&n.classList.add(_),r&&(s instanceof HTMLElement||s instanceof DocumentFragment?t.appendChild(s):t.innerHTML=s,t.classList.add(b)),this._mode!==y&&this._mode!==c&&(l||this._setHeadClickHandler(e))}},{key:"_getHeadContent",value:function(){return this._mode===h?this._getHeadDirContent():this._mode===a||this._mode===g?this._getHeadLogContent():this._mode===y?this._getHeadPreviewContent():this._mode===c?this._getHeadErrorContent():""}},{key:"_getHeadPreviewContent",value:function(){return"[object Object]"===Object.prototype.toString.call(this.value)?{elOrStr:"...",isShowConstructor:!1,isShowElements:!0,isBraced:!0}:this._getHeadDirContent()}},{key:"_getHeadLogContent",value:function(){var e=void 0,t=!1,n=!0,i=!1;if(this.value instanceof HTMLElement)return this._getHeadDirContent();if(this.value instanceof Error)n=!1,e=this.value.stack;else if(this.value instanceof Number){e=T(Number.parseInt(this.value,10),y).el,t=!0}else if(this.value instanceof String){e=T(this.value.toString(),y).el,t=!0}else this.value instanceof Date?(e=this.value.toString(),n=!1):this.value instanceof RegExp?(e="/"+this.value.source+"/"+this.value.flags,i=!0,n=!1):(e=this.createContent(this.value,!0),this.value.constructor!==Object&&(t=!0));return{elOrStr:e,isShowConstructor:t,isShowElements:!0,isBraced:n,isOpeningDisabled:i}}},{key:"_getHeadDirContent",value:function(){var e=void 0,t=!1,n=!0;if(this.value instanceof HTMLElement){var i=this.value.tagName.toLowerCase();i+=this.value.id,this.value.classList.length&&(i+="."+Array.prototype.join.call(this.value.classList,".")),e=i}else this.value instanceof Date?e=this.value.toString():this.value instanceof RegExp?e="/"+this.value.source+"/"+this.value.flags:this.value instanceof Error?e=this.value.stack:(e=this.value,t=!0,n=!1);return{elOrStr:e,isShowConstructor:t,isShowElements:n,isBraced:!1}}},{key:"createContent",value:function(e,t){var n=document.createDocumentFragment(),i=new Set;for(var s in e){i.add(s);var o=e[s],r=T(o,t?y:g),a=p.createEntryEl(s,r.el);n.appendChild(a)}var l=!0,c=!1,u=void 0;try{for(var _,h=Object.getOwnPropertyNames(e)[Symbol.iterator]();!(l=(_=h.next()).done);l=!0){var d=_.value;if(!i.has(d)){var v=e[d],f=T(v,t?y:g),m=p.createEntryEl(d,f.el);n.appendChild(m)}}}catch(e){c=!0,u=e}finally{try{!l&&h.return&&h.return()}finally{if(c)throw u}}return n}},{key:"template",get:function(){return'<div class="console__item console__item_object '+(this._mode===c?""+this._mode:"")+'">  <div class="'+u+'">\n    <span class="'+v+'">'+this.value.constructor.name+'</span>\n    <div class="'+f+' entry-container entry-container_head"></div>\n  </div>\n  <div class="'+k+' entry-container"></div>\n</div>'}}]),p}(),w=function(e){function m(e,t){o(this,m);var n=r(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,e,"array",!1));return n._mode=t,n._elements=new Map,n._isOpened=!1,n}return n(m,E),t(m,[{key:"bind",value:function(){this._contentContainerEl=this.el.querySelector("."+k),this.headEl=this.el.querySelector("."+u),this.headInfoEl=this.headEl.querySelector("."+v),this.headElementsEl=this.headEl.querySelector("."+f),this.headElementsLengthEl=this.headEl.querySelector("."+p);var e=this._getHeadContent(),t=e.isShowConstructor,n=e.isShowElements,i=e.isShowLength;t&&this._toggleConstructor(this.headInfoEl,!0),n&&(this.headElementsEl.appendChild(this.createContent(this.value,!0)),this._toggleHeadElements(this.headElementsEl,!0)),i&&this._toggleLength(this.headElementsLengthEl,!0),this._mode!==y&&this._setHeadClickHandler(this.headEl)}},{key:"_additionHeadClickHandler",value:function(){this._mode===g&&(this._toggleConstructor(),this._toggleHeadElements())}},{key:"_toggleConstructor",value:function(){this.headInfoEl.classList.toggle(_)}},{key:"_toggleLength",value:function(){this.headElementsLengthEl.classList.toggle(C)}},{key:"_toggleHeadElements",value:function(){this.headElementsEl.classList.toggle(b)}},{key:"_getHeadContent",value:function(){var e=!1,t=!0,n=1<this.value.length;if(this._mode===h)e=!0,t=!1;else if(this._mode===y)t=!1,n=e=!0;else if(this._mode===c)return this._getHeadErrorContent();return{isShowConstructor:e,isShowElements:t,isShowLength:n}}},{key:"createContent",value:function(e,t){var n=Object.getOwnPropertyNames(e),i=Object.keys(e),s=document.createDocumentFragment(),o=!0,r=!1,a=void 0;try{for(var l,c=n[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){var u=l.value,_=e[u],h=i.indexOf(u),d=Number.isNaN(Number.parseInt(u,10));if(!t||-1!==h){var v=T(_,t?y:g),f=m.createEntryEl(u,v.el,t?!d:t);s.appendChild(f)}}}catch(e){r=!0,a=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw a}}return s}},{key:"template",get:function(){return'<div class="console__item console__item_array">\n  <div class="'+u+'">\n    <span class="'+v+'">'+this.value.constructor.name+'</span>\n    <span class="'+p+'">'+this.value.length+'</span>\n    <div class="'+f+' entry-container entry-container_head"></div>\n  </div>\n  <div class="'+k+' entry-container"></div>\n</div>'}}]),m}(),L="plain",H="arrow",O="class",x=function(e){function _(e,t){o(this,_);var n=r(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,e,"function",!1));return n._mode=t,n._isOpened=!1,n._fnType=_.checkFnType(e),n}return n(_,E),t(_,[{key:"bind",value:function(){if(this._mode===h||this._mode===g){this._contentContainerEl=this.el.querySelector("."+k);var e=this.el.querySelector("."+u);this._setHeadClickHandler(e)}}},{key:"_getHeadPropMarkup",value:function(){var e=this.parseFunction(this.value),t=e.name,n=e.params,i=e.lines.join("\n"),s="<span>"+(this._fnType===O?"class ":"")+(this._fnType===L?"f ":"")+(t||"")+(this._fnType!==O?"("+n.join(", ")+")":"")+(this._fnType===H?" => ":" ");return this._fnType!==O&&(s+="{"+(i.length<=43?i:"...")+"}"),s+="</span>"}},{key:"_getHeadDirMarkup",value:function(){var e=this.parseFunction(this.value),t=e.name,n=e.params;return"  <span>  "+(this._fnType===O?"class ":"")+"  "+(this._fnType===L?"f ":"")+"  "+(t||"")+"  "+(this._fnType!==O?"("+n.join(", ")+")":"")+"</span>"}},{key:"_getLogMarkup",value:function(){return"<pre>"+this.value.toString()+"</pre>"}},{key:"parseParams",value:function(e){var t=e.indexOf("("),n=e.indexOf(")"),i=e.substring(t+1,n).trim();return i?i.split(",").map(function(e){return e.trim()}):[]}},{key:"parseName",value:function(e){var t=void 0;this._fnType===O?t="{":this._fnType===L&&(t="(");var n=void 0,i=new RegExp("(?:class|function)\\s+(\\w+)\\s*(?:\\"+t+")").exec(e);return null!==i&&(n=i[1]),n}},{key:"parseBody",value:function(e){var t=e.indexOf("{"),n=e.lastIndexOf("}"),i=e.substring(t+1,n).trim();return i?i.split("\n").map(function(e){return e.trim()}):[]}},{key:"parseFunction",value:function(e){var t=void 0;return"string"!=typeof e&&(t=e.toString()),{name:e.name,params:this.parseParams(t),lines:this.parseBody(t)}}},{key:"createContent",value:function(e){var t=document.createDocumentFragment(),n=!0,i=!1,s=void 0;try{for(var o,r=["name","prototype","caller","arguments","length","__proto__"][Symbol.iterator]();!(n=(o=r.next()).done);n=!0){var a=o.value,l=void 0;try{l=e[a]}catch(e){continue}var c=T(l,h),u=_.createEntryEl(a,c.el);t.appendChild(u)}}catch(e){i=!0,s=e}finally{try{!n&&r.return&&r.return()}finally{if(i)throw s}}return t}},{key:"template",get:function(){var e='<div class="console__item console__item_function">';switch(this._mode){case y:e+="f";break;case g:e+='<div class="'+u+'">'+this._getHeadPropMarkup()+'</div><div class="'+k+' entry-container"></div>';break;case h:e+='<div class="'+u+'">'+this._getHeadDirMarkup()+'</div><div class="'+k+' entry-container"></div>';break;case a:e+=this._getLogMarkup()}return e+="</div>"}}],[{key:"checkFnType",value:function(e){var t=e.toString(),n=t.indexOf("("),i=t.indexOf("class"),s=t.indexOf("=>");return-1!==i&&i<n?O:-1!==s&&n<s?H:L}}]),_}(),N="string_collapsed",j=function(e){function s(e,t,n){o(this,s);var i=r(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e,n,!0));return i._mode=t,i}return n(s,E),t(s,[{key:"bind",value:function(){var t=this;this._mode===g&&"string"===this.type&&(this._setCursorPointer(),this.el.addEventListener("click",function(e){e.preventDefault(),t.el.classList.toggle(N)}))}},{key:"escapeHtml",value:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}},{key:"template",get:function(){var e=this.type,t=this.value,n="";switch("string"!==e&&"symbol"!==e||("symbol"===e&&(t=t.toString()),t=this.escapeHtml(t)),e){case"undefined":case"null":case"boolean":n='<div class="console__item console__item_primitive '+e+'">'+t+"</div>";break;case"number":n=Number.isNaN(t)?'<div class="console__item console__item_primitive NaN">NaN</div>':t===1/0||t===-1/0?'<div class="console__item console__item_primitive number">'+(t===-1/0?"-":"")+"Infinity</div>":'<div class="console__item console__item_primitive '+e+'">'+t+"</div>";break;case"string":n='<pre class="console__item console__item_primitive string '+(this._mode===g?N:"")+'">'+t+"</pre>";break;case"symbol":n='<div class="console__item console__item_primitive symbol">'+t+"</div>";break;case"object":if(null===t){n='<div class="console__item console__item_primitive null">'+t+"</div>";break}}return n}}]),s}(),P=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},T=function(e,t){var n=void 0,i=void 0===e?"undefined":s(e);switch(i){case"function":n=new x(e,t);break;case"object":n=null!==e?Array.isArray(e)?new w(e,t):new S(e,t):new j(e,t,i);break;default:n=new j(e,t,i)}return n},D="Here is console log",q="\n  Here is console log\n  sdadsda\nasddsd",M=Symbol("sym");describe("Check primitives: ",function(){var t=a;it('any primitive has class "console__item_primitive"',function(){var e=[T(D,t).el,T(123,t).el,T(M,t).el,T(NaN,t).el,T(null,t).el,T(!0,t).el,T(void 0,t).el];assert(e.every(function(e){return e.classList.contains("console__item_primitive")}))}),it("string",function(){var e=T(D,t).el;assert(e.classList.contains("console__item_primitive")&&e.classList.contains("string")&&e.textContent===D)}),it("string prop mode",function(){var e=T(D,g).el;assert(e.classList.contains("console__item_primitive")&&e.classList.contains("string")&&e.classList.contains("string_collapsed")&&e.textContent===D)}),it("multiline string",function(){var e=T(q,t).el;assert(e.classList.contains("console__item_primitive")&&e.classList.contains("string")&&q.includes(e.textContent))}),it("number",function(){var e=T(123,t).el;assert(e.classList.contains("console__item_primitive")&&e.classList.contains("number")&&e.textContent===123..toString())}),it("symbol",function(){var e=T(M,t).el;assert(e.classList.contains("console__item_primitive")&&e.classList.contains("symbol")&&e.textContent===M.toString())}),it("NaN",function(){var e=T(NaN,t).el;assert(e.classList.contains("console__item_primitive")&&e.classList.contains("NaN")&&"NaN"===e.textContent)}),it("null",function(){var e=T(null,t).el;assert(e.classList.contains("console__item_primitive")&&e.classList.contains("null")&&"null"===e.textContent)}),it("boolean",function(){var e=T(!0,t).el;assert(e.classList.contains("console__item_primitive")&&e.classList.contains("boolean")&&"true"===e.textContent)}),it("undefined",function(){var e=T(void 0,t).el;assert(e.classList.contains("console__item_primitive")&&e.classList.contains("undefined")&&"undefined"===e.textContent)})})}();
//# sourceMappingURL=markup.test.js.map
