!function(){"use strict";var Fe="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e,i=(function(e,t){var i="__lodash_hash_undefined__",r=9007199254740991,n="[object Arguments]",o="[object AsyncFunction]",a="[object Function]",s="[object GeneratorFunction]",l="[object Null]",E="[object Object]",c="[object Proxy]",u="[object Undefined]",d=/^\[object .+?Constructor\]$/,h=/^(?:0|[1-9]\d*)$/,_={};_["[object Float32Array]"]=_["[object Float64Array]"]=_["[object Int8Array]"]=_["[object Int16Array]"]=_["[object Int32Array]"]=_["[object Uint8Array]"]=_["[object Uint8ClampedArray]"]=_["[object Uint16Array]"]=_["[object Uint32Array]"]=!0,_[n]=_["[object Array]"]=_["[object ArrayBuffer]"]=_["[object Boolean]"]=_["[object DataView]"]=_["[object Date]"]=_["[object Error]"]=_[a]=_["[object Map]"]=_["[object Number]"]=_[E]=_["[object RegExp]"]=_["[object Set]"]=_["[object String]"]=_["[object WeakMap]"]=!1;var f="object"==typeof Fe&&Fe&&Fe.Object===Object&&Fe,p="object"==typeof self&&self&&self.Object===Object&&self,v=f||p||Function("return this")(),y=t&&!t.nodeType&&t,g=y&&e&&!e.nodeType&&e,m=g&&g.exports===y,w=m&&f.process,b=function(){try{return w&&w.binding&&w.binding("util")}catch(e){}}(),k=b&&b.isTypedArray;function C(e,t){return"__proto__"==t?void 0:e[t]}var O,j,S,T=Array.prototype,x=Function.prototype,H=Object.prototype,P=v["__core-js_shared__"],A=x.toString,L=H.hasOwnProperty,N=(O=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"",D=H.toString,I=A.call(Object),M=RegExp("^"+A.call(L).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),V=m?v.Buffer:void 0,F=v.Symbol,z=v.Uint8Array,K=V?V.allocUnsafe:void 0,B=(j=Object.getPrototypeOf,S=Object,function(e){return j(S(e))}),R=Object.create,U=H.propertyIsEnumerable,q=T.splice,$=F?F.toStringTag:void 0,Y=function(){try{var e=ye(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),J=V?V.isBuffer:void 0,G=Math.max,W=Date.now,Q=ye(v,"Map"),X=ye(Object,"create"),Z=function(){function n(){}return function(e){if(!Pe(e))return{};if(R)return R(e);n.prototype=e;var t=new n;return n.prototype=void 0,t}}();function ee(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function ie(e){var t=this.__data__=new te(e);this.size=t.size}function re(e,t){var n=je(e),i=!n&&Oe(e),r=!n&&!i&&Te(e),o=!n&&!i&&!r&&Ne(e),a=n||i||r||o,s=a?function(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}(e.length,String):[],l=s.length;for(var c in e)!t&&!L.call(e,c)||a&&("length"==c||r&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ge(c,l))||s.push(c);return s}function oe(e,t,n){(void 0===n||Ce(e[t],n))&&(void 0!==n||t in e)||se(e,t,n)}function ae(e,t){for(var n=e.length;n--;)if(Ce(e[n][0],t))return n;return-1}function se(e,t,n){"__proto__"==t&&Y?Y(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}ee.prototype.clear=function(){this.__data__=X?X(null):{},this.size=0},ee.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ee.prototype.get=function(e){var t=this.__data__;if(X){var n=t[e];return n===i?void 0:n}return L.call(t,e)?t[e]:void 0},ee.prototype.has=function(e){var t=this.__data__;return X?void 0!==t[e]:L.call(t,e)},ee.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=X&&void 0===t?i:t,this},te.prototype.clear=function(){this.__data__=[],this.size=0},te.prototype.delete=function(e){var t=this.__data__,n=ae(t,e);return!(n<0||(n==t.length-1?t.pop():q.call(t,n,1),--this.size,0))},te.prototype.get=function(e){var t=this.__data__,n=ae(t,e);return n<0?void 0:t[n][1]},te.prototype.has=function(e){return-1<ae(this.__data__,e)},te.prototype.set=function(e,t){var n=this.__data__,i=ae(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this},ne.prototype.clear=function(){this.size=0,this.__data__={hash:new ee,map:new(Q||te),string:new ee}},ne.prototype.delete=function(e){var t=ve(this,e).delete(e);return this.size-=t?1:0,t},ne.prototype.get=function(e){return ve(this,e).get(e)},ne.prototype.has=function(e){return ve(this,e).has(e)},ne.prototype.set=function(e,t){var n=ve(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this},ie.prototype.clear=function(){this.__data__=new te,this.size=0},ie.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},ie.prototype.get=function(e){return this.__data__.get(e)},ie.prototype.has=function(e){return this.__data__.has(e)},ie.prototype.set=function(e,t){var n=this.__data__;if(n instanceof te){var i=n.__data__;if(!Q||i.length<199)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new ne(i)}return n.set(e,t),this.size=n.size,this};var le,ce=function(e,t,n){for(var i=-1,r=Object(e),o=n(e),a=o.length;a--;){var s=o[le?a:++i];if(!1===t(r[s],s,r))break}return e};function ue(e){return null==e?void 0===e?u:l:$&&$ in Object(e)?function(e){var t=L.call(e,$),n=e[$];try{var i=!(e[$]=void 0)}catch(e){}var r=D.call(e);i&&(t?e[$]=n:delete e[$]);return r}(e):(t=e,D.call(t));var t}function de(e){return Ae(e)&&ue(e)==n}function he(e){return!(!Pe(e)||(t=e,N&&N in t))&&(xe(e)?M:d).test(function(e){if(null!=e){try{return A.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function _e(e){if(!Pe(e))return function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}(e);var t=me(e),n=[];for(var i in e)("constructor"!=i||!t&&L.call(e,i))&&n.push(i);return n}function fe(i,r,o,a,s){i!==r&&ce(r,function(e,t){if(Pe(e))s||(s=new ie),function(e,t,n,i,r,o,a){var s=C(e,n),l=C(t,n),c=a.get(l);if(c)return oe(e,n,c);var u=o?o(s,l,n+"",e,t,a):void 0,d=void 0===u;if(d){var h=je(l),_=!h&&Te(l),f=!h&&!_&&Ne(l);u=l,h||_||f?je(s)?u=s:Ae(b=s)&&Se(b)?u=function(e,t){var n=-1,i=e.length;t||(t=Array(i));for(;++n<i;)t[n]=e[n];return t}(s):_?u=function(e,t){if(t)return e.slice();var n=e.length,i=K?K(n):new e.constructor(n);return e.copy(i),i}(l,!(d=!1)):f?(y=l,g=!(d=!1)?(m=y.buffer,w=new m.constructor(m.byteLength),new z(w).set(new z(m)),w):y.buffer,u=new y.constructor(g,y.byteOffset,y.length)):u=[]:function(e){if(!Ae(e)||ue(e)!=E)return!1;var t=B(e);if(null===t)return!0;var n=L.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&A.call(n)==I}(l)||Oe(l)?Oe(u=s)?u=function(e,t,n,i){var r=!n;n||(n={});for(var o,a,s,l,c=-1,u=t.length;++c<u;){var d=t[c],h=i?i(n[d],e[d],d,n,e):void 0;void 0===h&&(h=e[d]),r?se(n,d,h):(s=h,l=(o=n)[a=d],L.call(o,a)&&Ce(l,s)&&(void 0!==s||a in o)||se(o,a,s))}return n}(v=s,De(v)):(!Pe(s)||i&&xe(s))&&(u="function"!=typeof(p=l).constructor||me(p)?{}:Z(B(p))):d=!1}var p;var v;var y,g,m,w;var b;d&&(a.set(l,u),r(u,l,i,o,a),a.delete(l));oe(e,n,u)}(i,r,t,o,fe,a,s);else{var n=a?a(C(i,t),e,t+"",i,r,s):void 0;void 0===n&&(n=e),oe(i,t,n)}},De)}function pe(e,t){return ke((o=e,s=Ve,a=G(void 0===(a=t)?o.length-1:a,0),function(){for(var e=arguments,t=-1,n=G(e.length-a,0),i=Array(n);++t<n;)i[t]=e[a+t];t=-1;for(var r=Array(a+1);++t<a;)r[t]=e[t];return r[a]=s(i),function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}(o,this,r)}),e+"");var o,a,s}function ve(e,t){var n,i,r=e.__data__;return("string"==(i=typeof(n=t))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==n:null===n)?r["string"==typeof t?"string":"hash"]:r.map}function ye(e,t){var n,i,r=(i=t,null==(n=e)?void 0:n[i]);return he(r)?r:void 0}function ge(e,t){var n=typeof e;return!!(t=null==t?r:t)&&("number"==n||"symbol"!=n&&h.test(e))&&-1<e&&e%1==0&&e<t}function me(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||H)}var we,be,Ee,ke=(we=Y?function(e,t){return Y(e,"toString",{configurable:!0,enumerable:!1,value:(n=t,function(){return n}),writable:!0});var n}:Ve,Ee=be=0,function(){var e=W(),t=16-(e-Ee);if(Ee=e,0<t){if(800<=++be)return arguments[0]}else be=0;return we.apply(void 0,arguments)});function Ce(e,t){return e===t||e!=e&&t!=t}var Oe=de(function(){return arguments}())?de:function(e){return Ae(e)&&L.call(e,"callee")&&!U.call(e,"callee")},je=Array.isArray;function Se(e){return null!=e&&He(e.length)&&!xe(e)}var Te=J||function(){return!1};function xe(e){if(!Pe(e))return!1;var t=ue(e);return t==a||t==s||t==o||t==c}function He(e){return"number"==typeof e&&-1<e&&e%1==0&&e<=r}function Pe(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function Ae(e){return null!=e&&"object"==typeof e}var Le,Ne=k?(Le=k,function(e){return Le(e)}):function(e){return Ae(e)&&He(e.length)&&!!_[ue(e)]};function De(e){return Se(e)?re(e,!0):_e(e)}var Ie,Me=(Ie=function(e,t,n,i){fe(e,t,n,i)},pe(function(e,t){var n=-1,i=t.length,r=1<i?t[i-1]:void 0,o=2<i?t[2]:void 0;for(r=3<Ie.length&&"function"==typeof r?(i--,r):void 0,o&&function(e,t,n){if(!Pe(n))return!1;var i=typeof t;return!!("number"==i?Se(n)&&ge(t,n.length):"string"==i&&t in n)&&Ce(n[t],e)}(t[0],t[1],o)&&(r=i<3?void 0:r,i=1),e=Object(e);++n<i;){var a=t[n];a&&Ie(e,a,n,r)}return e}));function Ve(e){return e}e.exports=Me}(e={exports:{}},e.exports),e.exports),g=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},r=function(e,t){if(Array.isArray(e))return e.concat(t)},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),n=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},c=function(){function e(){o(this,e)}return t(e,[{key:"_render",value:function(){return g(this.template)}},{key:"_bind",value:function(){}},{key:"template",get:function(){}},{key:"el",get:function(){return this._el||(this._el=this._render(),this._bind(this._el)),this._el}}]),e}(),u="log",d="dir",m="preview",w="prop",h="error",_="log-html",f={FUNCTION:"function",OBJECT:"object",ARRAY:"array",PRIMITIVE:"primitive"},p="test",v=function(e){function i(e,t){o(this,i);var n=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return e.parentView&&(n._parentView=e.parentView,n.rootView=e.parentView.rootView),n._console=t,n._value=e.val,n._mode=e.mode,n._type=e.type,n._propKey=e.propKey,n._currentDepth="number"==typeof e.depth?e.depth:1,n}return n(i,c),t(i,[{key:"_afterRender",value:function(){}},{key:"_bind",value:function(){if(!this.viewType)throw new Error("this.viewType must be specified");if(!this.rootView)throw new Error("this.rootView must be specified");this._headEl=this.el.querySelector(".head"),this._headContentEl=this.el.querySelector(".head__content"),this._infoEl=this.el.querySelector(".info"),this._contentEl=this.el.querySelector(".item__content"),this._afterRender()}},{key:"_getStateDescriptorsObject",value:function(){return{}}},{key:"_getStateCommonDescriptorsObject",value:function(){var t=this;return{set isShowInfo(e){t.toggleInfoShowed(e)},set isHeadContentShowed(e){t.toggleHeadContentShowed(e)},set isOpeningDisabled(e){t._mode!==m&&t._isOpeningDisabled!==e&&(t.togglePointer(!e),t._addOrRemoveHeadClickHandler(!e),t._state.isContentShowed=!e&&t.isAutoExpandNeeded,t._isOpeningDisabled=e)},get isOpeningDisabled(){return t._isOpeningDisabled},set isContentShowed(e){t.toggleArrowBottom(e),t._isContentShowed=t.toggleContentShowed(e),t._isContentShowed&&0===t._contentEl.childElementCount&&t._contentEl.appendChild(t.createContent(t._value,!1).fragment)},get isContentShowed(){return t._isContentShowed},set isOversized(e){t.toggleHeadContentOversized(e)}}}},{key:"toggleHeadContentBraced",value:function(e){return i.toggleMiddleware(this._headContentEl,"entry-container--braced",e)}},{key:"toggleHeadContentOversized",value:function(e){return i.toggleMiddleware(this._headContentEl,"entry-container--oversize",e)}},{key:"toggleInfoShowed",value:function(e){return!i.toggleMiddleware(this._infoEl,"hidden",!e)}},{key:"toggleHeadContentShowed",value:function(e){return!i.toggleMiddleware(this._headContentEl,"hidden",!e)}},{key:"toggleContentShowed",value:function(e){return!i.toggleMiddleware(this._contentEl,"hidden",!e)}},{key:"toggleError",value:function(e){return i.toggleMiddleware(this.el,h,e)}},{key:"toggleItalic",value:function(e){return i.toggleMiddleware(this._headEl,"italic",e)}},{key:"togglePointer",value:function(e){return i.toggleMiddleware(this._headEl,"item__head--pointer",e)}},{key:"toggleArrowBottom",value:function(e){return i.toggleMiddleware(this._headEl,"item__head--arrow-bottom",e)}},{key:"_getEntriesKeys",value:function(e){var t=this._value,n=Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)),i=new Set(n);if(this.isShowNotOwn)for(var r in t)e&&!t.hasOwnProperty(r)||i.add(r);if(e){var o=Object.getOwnPropertyDescriptors(t);for(var a in o)void 0!==Object.getOwnPropertyDescriptors(o[a]).get&&i.delete(a)}return this._console.params.env===p&&i.delete("should"),i}},{key:"_additionHeadClickHandler",value:function(){}},{key:"_headClickHandler",value:function(e){e.preventDefault(),this.toggleArrowBottom(),this._state.isContentShowed=!this._state.isContentShowed,this._additionHeadClickHandler()}},{key:"_addOrRemoveHeadClickHandler",value:function(e){this.__bindedHeadClickHandler||(this.__bindedHeadClickHandler=this._headClickHandler.bind(this)),e?this._headEl.addEventListener("click",this.__bindedHeadClickHandler):this._headEl.removeEventListener("click",this.__bindedHeadClickHandler)}},{key:"_createEntryEl",value:function(e){var t=e.key,n=e.el,i=e.withoutKey,r=e.keyElClass,o=e.getViewEl,a=g('<span class="entry-container__entry">'+(i?"":'<span class="entry-container__key '+(r||"")+'">'+t.toString()+"</span>")+'<span class="entry-container__value-container"></span></span>'),s=a.querySelector(".entry-container__value-container");if(n)s.appendChild(n);else{s.textContent="(...)",s.classList.add("entry-container__value-container--underscore");s.addEventListener("click",function e(){s.textContent="",s.classList.remove("entry-container__value-container--underscore");var t=void 0;try{t=o(),s.appendChild(t)}catch(e){s.textContent="[Exception: "+e.stack+"]"}s.removeEventListener("click",e)})}return a}},{key:"_createTypedEntryEl",value:function(e){var t=this,n=e.obj,i=e.key,r=e.mode,o=e.withoutKey,a=e.keyElClass,s=e.notCheckDescriptors,l=function(){var e=n[i];return t._console.createTypedView(e,r,t.nextNestingLevel,t,i).el},c=void 0;try{if(s)c=l();else{var u=Object.getOwnPropertyDescriptors(n);i in u&&u[i].get&&"__proto__"!==i||(c=l())}}catch(e){}return this._createEntryEl({key:i,el:c,withoutKey:o,keyElClass:a,getViewEl:l})}},{key:"_state",set:function(e){for(var t in this._viewState||(this._viewState={},Object.defineProperties(this._viewState,Object.getOwnPropertyDescriptors(this._getStateCommonDescriptorsObject())),Object.defineProperties(this._viewState,Object.getOwnPropertyDescriptors(this._getStateDescriptorsObject())),Object.seal(this._viewState)),e)this._viewState[t]=e[t]},get:function(){return this._viewState}},{key:"nextNestingLevel",get:function(){return this._currentDepth+1}},{key:"headContentEntriesKeys",get:function(){return this._headEntriesKeys||(this._headEntriesKeys=this._getEntriesKeys(!0)),this._headEntriesKeys}},{key:"contentEntriesKeys",get:function(){return this._entriesKeys||(this._entriesKeys=this._getEntriesKeys(!1)),this._entriesKeys}},{key:"isAutoExpandNeeded",get:function(){if(!this.isAutoExpandNeededProxied){this.isAutoExpandNeededProxied=!1;var e=this._console.params[this.rootView.viewType];if(this._currentDepth>e.expandDepth)return this.isAutoExpandNeededProxied;if(this._parentView)e.exclude.includes(this.viewType)||e.excludeProperties.includes(this._propKey)||!this._parentView.isAutoExpandNeeded||(this.isAutoExpandNeededProxied=!0);else{var t=this._getEntriesKeys(!1).size;e.maxFieldsToExpand>=t&&t>=e.minFieldsToExpand&&(this.isAutoExpandNeededProxied=!0)}}return this.isAutoExpandNeededProxied}}],[{key:"toggleMiddleware",value:function(e,t,n){return void 0===n?e.classList.toggle(t):n?(e.classList.add(t),!0):(e.classList.remove(t),!1)}}]),i}(),y=function(e){function r(e,t){o(this,r);var n=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));n.viewType=f.OBJECT,e.parentView||(n.rootView=n);var i=Object.prototype.toString.call(n._value);return n._stringTagName=i.substring(8,i.length-1),n._constructorName=n._value.constructor?n._value.constructor.name:null,n}return n(r,v),t(r,[{key:"_afterRender",value:function(){var e=this._getHeadContent(),t=e.elOrStr,n=e.stateParams,i=e.isShowNotOwn,r=e.headContentClassName;this._headContent=t,r&&this._headContentEl.classList.add(r),"Object"===this._constructorName&&"Object"!==this._stringTagName?this._infoEl.textContent=this._stringTagName:this._infoEl.textContent=this._constructorName,this.isShowNotOwn=i,this._state=n}},{key:"_getStateDescriptorsObject",value:function(){var t=this;return{set isShowInfo(e){t.toggleInfoShowed(e)},set isHeadContentShowed(e){t._headContentEl.innerHTML||(t._headContent instanceof HTMLElement||t._headContent instanceof DocumentFragment?t._headContentEl.appendChild(t._headContent):t._headContentEl.innerHTML=t._headContent),t.toggleHeadContentShowed(e)},set isBraced(e){t.toggleHeadContentBraced(e)},set isStringified(e){e||t._mode!==u&&t._mode!==_&&t._mode!==h||t._parentView||t.toggleItalic(e),e&&t._mode===h&&t.toggleError(e)}}}},{key:"_getHeadContent",value:function(){var e=void 0;return this._mode===d?e=this._getHeadDirContent():this._mode===u||this._mode===_||this._mode===w||this._mode===h?e=this._getHeadLogContent():this._mode===m&&(e=this._getHeadPreviewContent()),e}},{key:"_getHeadPreviewContent",value:function(){return"Object"===this._stringTagName?{elOrStr:"...",stateParams:{isShowInfo:!1,isHeadContentShowed:!0,isBraced:!0}}:this._getHeadDirContent()}},{key:"_getHeadLogContent",value:function(){var e=void 0,t=!1,n=!0,i=!1,r=!1,o=!1,a=void 0;if(this._value instanceof HTMLElement&&Object.getPrototypeOf(this._value).constructor!==HTMLElement)return this._getHeadDirContent();if(this._value instanceof Error)n=!1,e="<pre>"+this._value.stack+"</pre>",o=i=!0;else if(this._value instanceof Number){e=this._console.createTypedView(Number.parseInt(this._value,10),m,this.nextNestingLevel,this).el,t=!0}else if(this._value instanceof String){e=this._console.createTypedView(this._value.toString(),m,this.nextNestingLevel,this).el,t=!0}else if(this._value instanceof Date)e=this._value.toString(),n=!(o=!0);else if(this._value instanceof RegExp)e="/"+this._value.source+"/"+this._value.flags,a="regexp",n=!(i=!0);else{var s=this.createContent(this._value,!0);e=s.fragment,r=s.isOversized,"Object"===this._stringTagName&&"Object"===this._constructorName&&"__proto__"!==this._propKey||(t=!0)}return{elOrStr:e,headContentClassName:a,stateParams:{isShowInfo:t,isHeadContentShowed:"__proto__"!==this._propKey,isBraced:n,isOpeningDisabled:i,isOversized:r,isStringified:o}}}},{key:"_getHeadDirContent",value:function(){var e=void 0,t=!1,n=!0,i=!1;if(this._value instanceof HTMLElement){var r=this._value.tagName.toLowerCase();r+=this._value.id,this._value.classList.length&&(r+="."+Array.prototype.join.call(this._value.classList,".")),e=r,i=!0}else this._value instanceof Date?e=this._value.toString():this._value instanceof RegExp?e="/"+this._value.source+"/"+this._value.flags:this._value instanceof Error?e=this._value.toString():(e=this._value,n=!(t=!0));return{elOrStr:e,stateParams:{isShowInfo:t,isHeadContentShowed:n,isBraced:!1,isOpeningDisabled:!1},isShowNotOwn:i}}},{key:"createContent",value:function(e,t){var n=document.createDocumentFragment(),i=t?this.headContentEntriesKeys:this.contentEntriesKeys,r=!1,o=0,a=this._console.params[this.viewType].maxFieldsInHead,s=t?m:w,l=!0,c=!1,u=void 0;try{for(var d,h=i[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){var _=d.value;if(t&&o===a){r=!0;break}n.appendChild(this._createTypedEntryEl({obj:e,key:_,mode:s})),o++}}catch(e){c=!0,u=e}finally{try{!l&&h.return&&h.return()}finally{if(c)throw u}}return t||i.has("__proto__")||void 0===this._value.__proto__||n.appendChild(this._createTypedEntryEl({obj:e,key:"__proto__",mode:s,keyElClass:"grey",notCheckDescriptors:!0})),{fragment:n,isOversized:r}}},{key:"template",get:function(){return'<div class="console__item item item--'+this.viewType+'">  <div class="head item__head">    <span class="info head__info hidden"></span>    <div class="head__content entry-container entry-container--head entry-container--'+this.viewType+' hidden"></div>  </div>  <div class="item__content entry-container entry-container--'+this.viewType+' hidden"></div></div>'}}]),r}(),b=function(e){function i(e,t){o(this,i);var n=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e,t));return n.viewType=f.ARRAY,e.parentView||(n.rootView=n),n}return n(i,v),t(i,[{key:"_afterRender",value:function(){this._lengthEl=this.el.querySelector(".length"),this.toggleHeadContentBraced(),this._infoEl.textContent=this._value.constructor.name,this._state=this._getStateParams(),this._mode!==u&&this._mode!==_&&this._mode!==h||this._parentView||this.toggleItalic(!0)}},{key:"_getStateDescriptorsObject",value:function(){var r=this;return{set isHeadContentShowed(e){if(e&&0===r._headContentEl.childElementCount){var t=r.createContent(r._value,!0),n=t.fragment,i=t.isOversized;r._state.isOversized=i,r._headContentEl.appendChild(n)}r.toggleHeadContentShowed(e)},set isShowLength(e){r.toggleContentLengthShowed(e)}}}},{key:"toggleContentLengthShowed",value:function(e){return!v.toggleMiddleware(this._lengthEl,"hidden",!e)}},{key:"_additionHeadClickHandler",value:function(){this._mode===w&&"__proto__"!==this._propKey&&(this._state.isShowInfo=this._isContentShowed,this._state.isHeadContentShowed=!this._isContentShowed,this._state.isShowLength=this._isContentShowed||1<this._value.length)}},{key:"_getStateParams",value:function(){var e=!1,t=!0,n=1<this._value.length;return this._mode===d?n=!(t=!(e=!0)):this._mode===m?n=!(t=!(e=!0)):this._mode===w&&(t=!(e=!1),"__proto__"===this._propKey&&(n=!(t=!(e=!0)))),{isShowInfo:e,isHeadContentShowed:t,isShowLength:n,isOpeningDisabled:!1}}},{key:"createContent",value:function(e,t){var n=t?this.headContentEntriesKeys:this.contentEntriesKeys,i=document.createDocumentFragment();n.delete("length");for(var r=!1,o=0,a=this._console.params[this.viewType].maxFieldsInHead,s=t?m:w,l=0,c=e.length;l<c;l++){if(t&&o===a){r=!0;break}var u=l.toString();if(n.has(u))i.appendChild(this._createTypedEntryEl({obj:e,key:l,mode:s,withoutKey:t,notCheckDescriptors:!0})),n.delete(u),o++;else if(t){var d=this._createEntryEl({key:l,el:g("<span>empty</span>"),withoutKey:!0,keyElClass:"grey"});i.appendChild(d),o++}}var h=!0,_=!1,f=void 0;try{for(var p,v=n[Symbol.iterator]();!(h=(p=v.next()).done);h=!0){var y=p.value;if(t&&o===a){r=!0;break}i.appendChild(this._createTypedEntryEl({obj:e,key:y,mode:s,withoutKey:t})),o++}}catch(e){_=!0,f=e}finally{try{!h&&v.return&&v.return()}finally{if(_)throw f}}return t||(i.appendChild(this._createTypedEntryEl({obj:e,key:"length",mode:s,keyElClass:"grey",notCheckDescriptors:!0})),i.appendChild(this._createTypedEntryEl({obj:e,key:"__proto__",mode:s,keyElClass:"grey",notCheckDescriptors:!0}))),{fragment:i,isOversized:r}}},{key:"template",get:function(){return'<div class="console__item item item--'+this.viewType+'">  <div class="head item__head">    <span class="info head__info hidden"></span>    <span class="length head__length hidden">'+this._value.length+'</span>    <div class="head__content entry-container entry-container--head entry-container--'+this.viewType+' hidden"></div>  </div>  <div class="item__content entry-container entry-container--'+this.viewType+' hidden"></div></div>'}}]),i}(),E="plain",k="arrow",C="class",O=["arguments","caller","length","name","prototype","__proto__"],j=function(e){function i(e,t){o(this,i);var n=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e,t));return n.viewType=f.FUNCTION,e.parentView||(n.rootView=n),n._fnType=i.checkFnType(n._value),n}return n(i,v),t(i,[{key:"_afterRender",value:function(){var e=this,t={isOpeningDisabled:this._mode!==d&&this._mode!==w};this._state=t,this._mode!==u&&this._mode!==_||this._headContentEl.addEventListener("click",function(){e._headContentEl.classList.toggle("nowrap")})}},{key:"_getInfo",value:function(){var e="";switch(this._fnType){case C:e="class";break;case E:case k:e="f"}return e}},{key:"_getBody",value:function(){var e="";switch(this._mode){case w:e=this._getHeadPropMarkup();break;case d:e=this._getHeadDirMarkup();break;case u:case _:case h:e=this._getHeadLogMarkup()}return e}},{key:"_getHeadPropMarkup",value:function(){var e=this._parseBody(),t=this._parseParams(),n=e.map(function(e){return e.trim()}).join(" "),i=(this._value.name?this._value.name:"")+(this._fnType!==C?"("+t.join(", ")+")":"")+(this._fnType===k?" => ":" ");return this._fnType===k&&(i+=""+(n.length<=43?n:"{...}")),i}},{key:"_getHeadDirMarkup",value:function(){var e=this._parseParams();return(this._value.name?this._value.name:"")+(this._fnType===E?"("+e.join(", ")+")":"")+(this._fnType===k?"()":"")}},{key:"_getHeadLogMarkup",value:function(){var e=this._parseBody(),t=this._parseParams();return(this._value.name&&this._fnType!==k?this._value.name+" ":"")+(this._fnType!==C?"("+t.join(", ")+")":"")+(this._fnType===k?" => ":" ")+e.join("\n")}},{key:"_parseParams",value:function(){var e=this._value.toString(),t=e.indexOf("("),n=e.indexOf(")"),i=e.substring(t+1,n).trim();return i?i.split(",").map(function(e){return e.trim()}):[]}},{key:"_parseBody",value:function(){var e=this._value.toString().trim(),t=[];if(this._fnType===k){var n=e.indexOf("=>");e=e.substring(n+2)}var i=e.indexOf("{"),r=(e=e.substring(i)).split("\n"),o=r.shift(),a=r.filter(function(e){return 0!==e.length}).map(function(e){var t=/^\s+/.exec(e);return t&&t[0].hasOwnProperty("length")?t[0].length:0}),s=Math.min.apply(Math,l(a));return(t=r.map(function(e){return e.slice(s)})).unshift(o),t}},{key:"createContent",value:function(e){var t=document.createDocumentFragment(),n=this.contentEntriesKeys,i=!0,r=!1,o=void 0;try{for(var a,s=O[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var l=a.value;n.add(l)}}catch(e){r=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}var c=!0,u=!1,d=void 0;try{for(var h,_=n[Symbol.iterator]();!(c=(h=_.next()).done);c=!0){var f=h.value;t.appendChild(this._createTypedEntryEl({obj:e,key:f,mode:w,keyElClass:O.includes(f)?"grey":null}))}}catch(e){u=!0,d=e}finally{try{!c&&_.return&&_.return()}finally{if(u)throw d}}return{fragment:t}}},{key:"template",get:function(){var e=this._fnType!==k||this._mode===m,t=this._getBody(),n=this._console.params[this.viewType].nowrapOnLog;return'<div class="console__item item item--'+this.viewType+" "+(this._mode===h?"error":"")+'">  <div class="head item__head italic">    <pre class="head__content '+(n?"nowrap":"")+'"><span class="info info--function '+(e?"":"hidden")+'">'+this._getInfo()+"</span>"+(e&&t?" ":"")+this._getBody()+'</pre>  </div>  <div class="item__content entry-container entry-container--'+this.viewType+' hidden"></div></div>'}}],[{key:"checkFnType",value:function(e){var t=e.toString(),n=t.indexOf("("),i=t.indexOf("class"),r=t.indexOf("=>");return-1!==i&&(-1===n||i<n)?C:-1!==r&&n<r?k:E}}]),i}(),S=function(e){function i(e,t){o(this,i);var n=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e,t));return n.viewType=f.PRIMITIVE,n}return n(i,v),t(i,[{key:"_bind",value:function(){var t=this;this._mode===w&&"string"===this._type&&this.el.addEventListener("click",function(e){e.preventDefault(),t.el.classList.toggle("nowrap")})}},{key:"escapeHtml",value:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}},{key:"template",get:function(){var e=this._type,t=this._value,n="";switch("string"!==e&&"symbol"!==e||("symbol"===e&&(t=t.toString()),(this._parentView?this._parentView.mode!==_:this._mode!==_)&&(t=this.escapeHtml(t))),e){case"undefined":case"null":case"boolean":n='<div class="console__item item item--primitive '+e+'">'+t+"</div>";break;case"number":n=Number.isNaN(t)?'<div class="console__item item item--primitive NaN">NaN</div>':t===1/0||t===-1/0?'<div class="console__item item item--primitive number">'+(t===-1/0?"-":"")+"Infinity</div>":'<div class="console__item item item--primitive '+e+'">'+t+"</div>";break;case"string":var i=void 0;i=this._mode===m&&100<t.length?t.substr(0,50)+"..."+t.substr(-50):t,n='<pre class="console__item item item--primitive string '+(this._mode===w||this._mode===m?"nowrap":"")+" "+(this._mode===w?"pointer":"")+" "+(this._mode===h?""+this._mode:"")+'">'+i+"</pre>";break;case"symbol":n='<div class="console__item item item--primitive symbol">'+t+"</div>";break;case"object":if(null===t){n='<div class="console__item item item--primitive null">'+t+"</div>";break}}return n}}]),i}(),T=function(){function n(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(o(this,n),!e)throw new Error("Console is not inited!");if(!(e instanceof HTMLElement))throw new TypeError("HTML element must be passed as container");this._views=new Map,this._container=e,this.params={object:this._parseParams(i({},t.common,t.object,r)),array:this._parseParams(i({},t.common,t.array,r)),function:this._parseParams(i({},t.common,t.function,r)),env:t.env}}return t(n,[{key:"_parseParams",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if("number"==typeof e.expandDepth&&0<e.expandDepth&&(e.minFieldsToExpand="number"==typeof e.minFieldsToExpand&&0<e.minFieldsToExpand?e.minFieldsToExpand:0,e.maxFieldsToExpand="number"==typeof e.maxFieldsToExpand&&0<e.maxFieldsToExpand?e.maxFieldsToExpand:Number.POSITIVE_INFINITY),e.maxFieldsInHead="number"==typeof e.maxFieldsInHead&&0<e.maxFieldsInHead?e.maxFieldsInHead:Number.POSITIVE_INFINITY,Array.isArray(e.excludeProperties)||(e.excludeProperties=[]),Array.isArray(e.exclude)){var t=[];for(var n in f)if(f.hasOwnProperty(n)){var i=f[n];t.push(i)}if(!e.exclude.every(function(e){return t.includes(e)}))throw new Error("Provided type to exclude is not in available types")}else e.exclude=[];return e}},{key:"onlog",value:function(){}},{key:"onlogHTML",value:function(){}},{key:"ondir",value:function(){}},{key:"onerror",value:function(){}},{key:"log",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._container.appendChild(this._getRowEl(t,u)),this.onlog()}},{key:"logHTML",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._container.appendChild(this._getRowEl(t,_)),this.onlogHTML()}},{key:"error",value:function(e){var t=g('<div class="console__row console__row--error"></div>');t.appendChild(this.createTypedView(e,h).el),this._container.appendChild(t),this.onerror()}},{key:"dir",value:function(e){var t=g('<div class="console__row"></div>');t.appendChild(this.createTypedView(e,d).el),this._container.appendChild(t),this.ondir()}},{key:"clean",value:function(){this._container.innerHTML=""}},{key:"createTypedView",value:function(e,t,n,i,r){var o={val:e,mode:t,depth:n,parentView:i,type:void 0===e?"undefined":s(e),propKey:r},a=void 0;switch(o.type){case"function":a=new j(o,this);break;case"object":a=null!==e?Array.isArray(e)?new b(o,this):new y(o,this):new S(o,this);break;default:a=new S(o,this)}return a}},{key:"_getRowEl",value:function(e,t){var n=this,i=g('<div class="console__row"></div>');return e.forEach(function(e){i.appendChild(n.createTypedView(e,t).el)}),i}},{key:"extend",value:function(e){return e.log=this.log.bind(this),e.info=this.log.bind(this),e.error=this.error.bind(this),e.warn=this.error.bind(this),e.dir=this.dir.bind(this),e}},{key:"sourceLog",get:function(){return this._container.innerHTML}}]),n}(),x=[],H=function(e){x.push(e.error)};window.addEventListener("error",H),window.console.warn=H,window.console.error=H;var P=[],A=function(){P.push.apply(P,arguments)},L=[];window.console.info=A,window.console.log=A,window.console.dir=function(e){L.push(e)};window.addEventListener("DOMContentLoaded",function(){var e=window.document.createElement("link");e.rel="stylesheet",e.href="//htmlacademy.github.io/console.js/0.1.0/css/style.min.css",e.addEventListener("load",function(){!function(){var e=window.document.createElement("div");e.classList.add("console");var t=void 0;Array.isArray(window.jsConsolePresets)&&(t=i.apply(void 0,[{}].concat(l(window.jsConsolePresets.slice().reverse()),[r])));var n=new T(e,t);window.document.body.appendChild(e),n.extend(window.console),x.forEach(function(e){n.error(e)}),P.forEach(function(e){n.log(e)}),L.forEach(function(e){n.dir(e)}),window.addEventListener("error",function(e){n.error(e.error)})}()}),window.document.head.appendChild(e)})}();
//# sourceMappingURL=index-silent.js.map