!function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),n=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},i=function(){function e(){o(this,e)}return t(e,[{key:"render",value:function(){return N(this.template)}},{key:"bind",value:function(){}},{key:"template",get:function(){}},{key:"el",get:function(){return this._el||(this._el=this.render(),this.bind(this._el)),this._el}}]),e}(),s="log",d="dir",y="preview",g="prop",u="error",v="item-head",l="item_pointer",h="item-head_show",f="entry-container_braced",_="entry-container_oversize",b="item-head-info",k="item-head-elements",C="item-head-elements_show",E="item-content-container",c="item-content-container_show",m="item-head-elements-length",w="item-head-elements-length_show",S=function(e){function r(e,t,n){o(this,r);var i=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return i._value=e,i._type=t,i._isPrimitive=n,i._isOpened=!1,i}return n(r,i),t(r,[{key:"_getHeadErrorContent",value:function(){return{elOrStr:"<pre>"+this._value.stack+"</pre>",isShowConstructor:!1,isShowElements:!0}}},{key:"_toggleContent",value:function(){this._proxiedContentEl||(this._proxiedContentEl=N('<div class="console__item item-content"></div>'),this._proxiedContentEl.appendChild(this.createContent(this.value,!1).fragment),this._contentContainerEl.appendChild(this._proxiedContentEl)),this._contentContainerEl.classList.toggle(c)}},{key:"_hideContent",value:function(){this._proxiedContentEl.style.display="none"}},{key:"_additionHeadClickHandler",value:function(){}},{key:"_setHeadClickHandler",value:function(e){var t=this;this._setCursorPointer(),e.addEventListener("click",function(e){e.preventDefault(),t._toggleContent(),t._additionHeadClickHandler()})}},{key:"_setCursorPointer",value:function(){this.el.classList.add(l)}},{key:"value",get:function(){return this._value}},{key:"type",get:function(){return this._type}},{key:"isPrimitive",get:function(){return this._isPrimitive}}],[{key:"createEntryEl",value:function(e,t,n){var i=N('<span class="entry-container__entry">  '+(n?"":'<span class="entry-container__key">'+e+"</span>")+'<span class="entry-container__value-container"></span></span>');return i.querySelector(".entry-container__value-container").appendChild(t),i}}]),r}(),p=function(e){function m(e,t){o(this,m);var n=a(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,e,"object",!1));return n._mode=t,n._entries=new Map,n._isOpened=!1,n}return n(m,S),t(m,[{key:"bind",value:function(){var e=this.el.querySelector("."+v),t=e.querySelector("."+k),n=e.querySelector("."+b);this._contentContainerEl=this.el.querySelector("."+E);var i=this._getHeadContent(),r=i.elOrStr,o=i.isShowConstructor,a=i.isShowElements,s=i.isBraced,l=i.isOpeningDisabled,c=i.isOversize;s&&t.classList.add(f),c&&t.classList.add(_),o&&n.classList.add(h),a&&(r instanceof HTMLElement||r instanceof DocumentFragment?t.appendChild(r):t.innerHTML=r,t.classList.add(C)),this._mode!==y&&this._mode!==u&&(l||this._setHeadClickHandler(e))}},{key:"_getHeadContent",value:function(){return this._mode===d?this._getHeadDirContent():this._mode===s||this._mode===g?this._getHeadLogContent():this._mode===y?this._getHeadPreviewContent():this._mode===u?this._getHeadErrorContent():""}},{key:"_getHeadPreviewContent",value:function(){return"[object Object]"===Object.prototype.toString.call(this.value)?{elOrStr:"...",isShowConstructor:!1,isShowElements:!0,isBraced:!0}:this._getHeadDirContent()}},{key:"_getHeadLogContent",value:function(){var e=void 0,t=!1,n=!0,i=!1,r=!1;if(this.value instanceof HTMLElement)return this._getHeadDirContent();if(this.value instanceof Error)n=!1,e=this.value.stack;else if(this.value instanceof Number){e=D(Number.parseInt(this.value,10),y).el,t=!0}else if(this.value instanceof String){e=D(this.value.toString(),y).el,t=!0}else if(this.value instanceof Date)e=this.value.toString(),n=!1;else if(this.value instanceof RegExp)e="/"+this.value.source+"/"+this.value.flags,i=!0,n=!1;else{var o=this.createContent(this.value,!0);e=o.fragment,r=o.isOversize,this.value.constructor!==Object&&(t=!0)}return{elOrStr:e,isShowConstructor:t,isShowElements:!0,isBraced:n,isOpeningDisabled:i,isOversize:r}}},{key:"_getHeadDirContent",value:function(){var e=void 0,t=!1,n=!0;if(this.value instanceof HTMLElement){var i=this.value.tagName.toLowerCase();i+=this.value.id,this.value.classList.length&&(i+="."+Array.prototype.join.call(this.value.classList,".")),e=i}else this.value instanceof Date?e=this.value.toString():this.value instanceof RegExp?e="/"+this.value.source+"/"+this.value.flags:this.value instanceof Error?e=this.value.stack:(e=this.value,t=!0,n=!1);return{elOrStr:e,isShowConstructor:t,isShowElements:n,isBraced:!1}}},{key:"createContent",value:function(e,t){var n=document.createDocumentFragment(),i=new Set;for(var r in e){if(i.add(r),t&&5===i.size)return{fragment:n,isOversize:!0};var o=e[r],a=D(o,t?y:g),s=m.createEntryEl(r,a.el);n.appendChild(s)}var l=!0,c=!1,u=void 0;try{for(var h,d=Object.getOwnPropertyNames(e)[Symbol.iterator]();!(l=(h=d.next()).done);l=!0){var v=h.value;if(!i.has(v)){if(i.add(v),t&&5===i.size)return{fragment:n,isOversize:!0};var f=e[v],_=D(f,t?y:g),p=m.createEntryEl(v,_.el);n.appendChild(p)}}}catch(e){c=!0,u=e}finally{try{!l&&d.return&&d.return()}finally{if(c)throw u}}return{fragment:n,isOversize:!1}}},{key:"template",get:function(){return'<div class="console__item item item_object '+(this._mode===u?""+this._mode:"")+'">  <div class="'+v+'">\n    <span class="'+b+'">'+this.value.constructor.name+'</span>\n    <div class="'+k+' entry-container entry-container_head entry-container_type_object"></div>\n  </div>\n  <div class="'+E+' entry-container entry-container_type_object"></div>\n</div>'}}]),m}(),O=function(e){function p(e,t){o(this,p);var n=a(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,e,"array",!1));return n._mode=t,n._elements=new Map,n._isOpened=!1,n}return n(p,S),t(p,[{key:"bind",value:function(){this._contentContainerEl=this.el.querySelector("."+E),this.headEl=this.el.querySelector("."+v),this.headInfoEl=this.headEl.querySelector("."+b),this.headElementsEl=this.headEl.querySelector("."+k),this.headElementsLengthEl=this.headEl.querySelector("."+m);var e=this._getHeadContent(),t=e.isShowConstructor,n=e.isShowElements,i=e.isShowLength;t&&this._toggleConstructor(this.headInfoEl,!0),n&&(this.headElementsEl.appendChild(this.createContent(this.value,!0).fragment),this._toggleHeadElements(this.headElementsEl,!0)),i&&this._toggleLength(this.headElementsLengthEl,!0),this._mode!==y&&this._setHeadClickHandler(this.headEl)}},{key:"_additionHeadClickHandler",value:function(){this._mode===g&&(this._toggleConstructor(),this._toggleHeadElements())}},{key:"_toggleConstructor",value:function(){this.headInfoEl.classList.toggle(h)}},{key:"_toggleLength",value:function(){this.headElementsLengthEl.classList.toggle(w)}},{key:"_toggleHeadElements",value:function(){this.headElementsEl.classList.toggle(C)}},{key:"_getHeadContent",value:function(){var e=!1,t=!0,n=1<this.value.length;if(this._mode===d)e=!0,t=!1;else if(this._mode===y)t=!1,n=e=!0;else if(this._mode===u)return this._getHeadErrorContent();return{isShowConstructor:e,isShowElements:t,isShowLength:n}}},{key:"createContent",value:function(e,t){var n=Object.getOwnPropertyNames(e),i=Object.keys(e),r=document.createDocumentFragment(),o=!0,a=!1,s=void 0;try{for(var l,c=n[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){var u=l.value,h=e[u],d=i.indexOf(u),v=Number.isNaN(Number.parseInt(u,10));if(!t||-1!==d){var f=D(h,t?y:g),_=p.createEntryEl(u,f.el,t?!v:t);r.appendChild(_)}}}catch(e){a=!0,s=e}finally{try{!o&&c.return&&c.return()}finally{if(a)throw s}}return{fragment:r}}},{key:"template",get:function(){return'<div class="console__item item item_array">\n  <div class="'+v+'">\n    <span class="'+b+'">'+this.value.constructor.name+'</span>\n    <span class="'+m+'">'+this.value.length+'</span>\n    <div class="'+k+' entry-container entry-container_head entry-container_braced entry-container_type_array"></div>\n  </div>\n  <div class="'+E+' entry-container entry-container_type_array"></div>\n</div>'}}]),p}(),H="plain",L="arrow",j="class",x=function(e){function h(e,t){o(this,h);var n=a(this,(h.__proto__||Object.getPrototypeOf(h)).call(this,e,"function",!1));return n._mode=t,n._isOpened=!1,n._fnType=h.checkFnType(e),n}return n(h,S),t(h,[{key:"bind",value:function(){if(this._mode===d||this._mode===g){this._contentContainerEl=this.el.querySelector("."+E);var e=this.el.querySelector("."+v);this._setHeadClickHandler(e)}}},{key:"_getHeadPropMarkup",value:function(){var e=this.parseFunction(this.value),t=e.name,n=e.params,i=e.lines.join("\n"),r="<span>"+(this._fnType===j?"class ":"")+(this._fnType===H?"f ":"")+(t||"")+(this._fnType!==j?"("+n.join(", ")+")":"")+(this._fnType===L?" => ":" ");return this._fnType!==j&&(r+="{"+(i.length<=43?i:"...")+"}"),r+="</span>"}},{key:"_getHeadDirMarkup",value:function(){var e=this.parseFunction(this.value),t=e.name,n=e.params;return"  <span>  "+(this._fnType===j?"class ":"")+"  "+(this._fnType===H?"f ":"")+"  "+(t||"")+"  "+(this._fnType!==j?"("+n.join(", ")+")":"")+"</span>"}},{key:"_getLogMarkup",value:function(){return"<pre>"+this.value.toString()+"</pre>"}},{key:"parseParams",value:function(e){var t=e.indexOf("("),n=e.indexOf(")"),i=e.substring(t+1,n).trim();return i?i.split(",").map(function(e){return e.trim()}):[]}},{key:"parseName",value:function(e){var t=void 0;this._fnType===j?t="{":this._fnType===H&&(t="(");var n=void 0,i=new RegExp("(?:class|function)\\s+(\\w+)\\s*(?:\\"+t+")").exec(e);return null!==i&&(n=i[1]),n}},{key:"parseBody",value:function(e){var t=e.indexOf("{"),n=e.lastIndexOf("}"),i=e.substring(t+1,n).trim();return i?i.split("\n").map(function(e){return e.trim()}):[]}},{key:"parseFunction",value:function(e){var t=void 0;return"string"!=typeof e&&(t=e.toString()),{name:e.name,params:this.parseParams(t),lines:this.parseBody(t)}}},{key:"createContent",value:function(e){var t=document.createDocumentFragment(),n=!0,i=!1,r=void 0;try{for(var o,a=["name","prototype","caller","arguments","length","__proto__"][Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value,l=void 0;try{l=e[s]}catch(e){continue}var c=D(l,d),u=h.createEntryEl(s,c.el);t.appendChild(u)}}catch(e){i=!0,r=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw r}}return{fragment:t}}},{key:"template",get:function(){var e='<div class="console__item item item_function">';switch(this._mode){case y:e+="f";break;case g:e+='<div class="'+v+'">'+this._getHeadPropMarkup()+'</div><div class="'+E+' entry-container"></div>';break;case d:e+='<div class="'+v+'">'+this._getHeadDirMarkup()+'</div><div class="'+E+' entry-container"></div>';break;case s:e+=this._getLogMarkup()}return e+="</div>"}}],[{key:"checkFnType",value:function(e){var t=e.toString(),n=t.indexOf("("),i=t.indexOf("class"),r=t.indexOf("=>");return-1!==i&&i<n?j:-1!==r&&n<r?L:H}}]),h}(),P="string_collapsed",T=function(e){function r(e,t,n){o(this,r);var i=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,n,!0));return i._mode=t,i}return n(r,S),t(r,[{key:"bind",value:function(){var t=this;this._mode===g&&"string"===this.type&&(this._setCursorPointer(),this.el.addEventListener("click",function(e){e.preventDefault(),t.el.classList.toggle(P)}))}},{key:"escapeHtml",value:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}},{key:"template",get:function(){var e=this.type,t=this.value,n="";switch("string"!==e&&"symbol"!==e||("symbol"===e&&(t=t.toString()),t=this.escapeHtml(t)),e){case"undefined":case"null":case"boolean":n='<div class="console__item item item_primitive '+e+'">'+t+"</div>";break;case"number":n=Number.isNaN(t)?'<div class="console__item item item_primitive NaN">NaN</div>':t===1/0||t===-1/0?'<div class="console__item item item_primitive number">'+(t===-1/0?"-":"")+"Infinity</div>":'<div class="console__item item item_primitive '+e+'">'+t+"</div>";break;case"string":n='<pre class="console__item item item_primitive string '+(this._mode===g?P:"")+'">'+t+"</pre>";break;case"symbol":n='<div class="console__item item item_primitive symbol">'+t+"</div>";break;case"object":if(null===t){n='<div class="console__item item item_primitive null">'+t+"</div>";break}}return n}}]),r}(),N=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},D=function(e,t){var n=void 0,i=void 0===e?"undefined":r(e);switch(i){case"function":n=new x(e,t);break;case"object":n=null!==e?Array.isArray(e)?new O(e,t):new p(e,t):new T(e,t,i);break;default:n=new T(e,t,i)}return n},M="log",q="dir",z="error";window.jsConsole=function(a){if(!a)throw Error("Console is not inited!");var s={};return s.log=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var i,r,o;a.appendChild((i=t,r=M,o=N('<div class="console__row"></div>'),i.forEach(function(e){o.appendChild(D(e,r).el)}),o)),"function"==typeof s.onlog&&s.onlog(t)},s.error=function(e){var t=N('<div class="console__row"></div>');e instanceof Error?t.appendChild(D(e,z).el):t.appendChild(D(new Error(e),z).el),a.appendChild(t)},s.clean=function(){a.innerHTML=""},s.getLogSource=function(){return a.innerHTML},s.dir=function(e){var t=N('<div class="console__row"></div>');if(t.appendChild(D(e,q).el),a.appendChild(t),"function"==typeof s.onlog){for(var n=arguments.length,i=Array(1<n?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];s.onlog(i)}},s.extend=function(e){return e.log=s.log,e.info=s.log,e.error=s.error,e.warn=s.error,e.dir=s.dir,e},s}(document.querySelector(".console"))}();
//# sourceMappingURL=index.js.map
