(self["webpackChunkback"] = self["webpackChunkback"] || []).push([[4512],{

/***/ 3108:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={655:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var o=r(609),n=r.n(o)()((function(e){return e[1]}));n.push([e.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}",""]);const i=n},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(n[c]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&n[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},62:(e,t,r)=>{"use strict";var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),c=[];function a(e){for(var t=-1,r=0;r<c.length;r++)if(c[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},o=[],n=0;n<e.length;n++){var i=e[n],s=t.base?i[0]+t.base:i[0],l=r[s]||0,d="".concat(s," ").concat(l);r[s]=l+1;var u=a(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:d,updater:k(p,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var n=r.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,r,o){var n=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,n);else{var i=document.createTextNode(n),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,r){var o=r.css,n=r.media,i=r.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var b=null,h=0;function k(e,t){var r,o,n;if(t.singleton){var i=h++;r=b||(b=l(t)),o=p.bind(null,r,i,!1),n=p.bind(null,r,i,!0)}else r=l(t),o=f.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<r.length;o++){var n=a(r[o]);c[n].references--}for(var i=s(e,t),l=0;l<r.length;l++){var d=a(r[l]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}r=i}}}},704:(e,t,r)=>{e.exports=r(79)("./src/core.js")},492:(e,t,r)=>{e.exports=r(79)("./src/engine.js")},273:(e,t,r)=>{e.exports=r(79)("./src/ui.js")},209:(e,t,r)=>{e.exports=r(79)("./src/utils.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var o={};(()=>{"use strict";r.r(o),r.d(o,{ClassicEditor:()=>A});var e=r(273),t=r(492),n=r(209);class i extends e.EditorUI{constructor(t,r){super(t),this.view=r,this._toolbarConfig=(0,e.normalizeToolbarConfig)(t.config.get("toolbar")),this._elementReplacer=new n.ElementReplacer}get element(){return this.view.element}init(e){const t=this.editor,r=this.view,o=t.editing.view,n=r.editable,i=o.document.getRoot();n.name=i.rootName,r.render();const c=n.element;this.setEditableElement(n.name,c),r.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(c),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",(({top:e})=>e||0)),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,r=e.editing.view,o=r.document.getRoot(),n=e.sourceElement,i=e.config.get("placeholder")||n&&"textarea"===n.tagName.toLowerCase()&&n.getAttribute("placeholder");i&&(0,t.enablePlaceholder)({view:r,element:o,text:i,isDirectHost:!1,keepOnFocus:!0})}}var c=r(62),a=r.n(c),s=r(655),l={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};a()(s.Z,l);s.Z.locals;class d extends e.BoxedEditorUIView{constructor(t,r,o={}){super(t),this.stickyPanel=new e.StickyPanelView(t),this.toolbar=new e.ToolbarView(t,{shouldGroupWhenFull:o.shouldToolbarGroupWhenFull}),this.editable=new e.InlineEditableUIView(t,r)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}var u=r(704);const p=function(e){return null!=e&&"object"==typeof e};const f="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g;var b="object"==typeof self&&self&&self.Object===Object&&self;const h=(f||b||Function("return this")()).Symbol;var k=Object.prototype,v=k.hasOwnProperty,m=k.toString,y=h?h.toStringTag:void 0;const g=function(e){var t=v.call(e,y),r=e[y];try{e[y]=void 0;var o=!0}catch(e){}var n=m.call(e);return o&&(t?e[y]=r:delete e[y]),n};var _=Object.prototype.toString;const w=function(e){return _.call(e)};var j="[object Null]",O="[object Undefined]",x=h?h.toStringTag:void 0;const E=function(e){return null==e?void 0===e?O:j:x&&x in Object(e)?g(e):w(e)};const T=function(e,t){return function(r){return e(t(r))}}(Object.getPrototypeOf,Object);var S="[object Object]",C=Function.prototype,P=Object.prototype,F=C.toString,M=P.hasOwnProperty,R=F.call(Object);const D=function(e){if(!p(e)||E(e)!=S)return!1;var t=T(e);if(null===t)return!0;var r=M.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&F.call(r)==R};const N=function(e){return p(e)&&1===e.nodeType&&!D(e)};class A extends((0,u.DataApiMixin)((0,u.ElementApiMixin)(u.Editor))){constructor(e,t={}){if(!I(e)&&void 0!==t.initialData)throw new n.CKEditorError("editor-create-initial-data",null);super(t),void 0===this.config.get("initialData")&&this.config.set("initialData",function(e){return I(e)?(0,n.getDataFromElement)(e):e}(e)),I(e)&&(this.sourceElement=e),this.model.document.createRoot();const r=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=new d(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:r});this.ui=new i(this,o),(0,u.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise((r=>{const o=new this(e,t);r(o.initPlugins().then((()=>o.ui.init(I(e)?e:null))).then((()=>o.data.init(o.config.get("initialData")))).then((()=>o.fire("ready"))).then((()=>o)))}))}}function I(e){return N(e)}})(),(window.CKEditor5=window.CKEditor5||{}).editorClassic=o})();

/***/ }),

/***/ 72757:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t,e){ true?module.exports=e(__webpack_require__(67294)):0}(self,(t=>(()=>{var e={703:(t,e,r)=>{"use strict";var o=r(414);function n(){}function i(){}i.resetWarningCache=n,t.exports=function(){function t(t,e,r,n,i,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},697:(t,e,r)=>{t.exports=r(703)()},414:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:e=>{"use strict";e.exports=t}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";o.r(n),o.d(n,{CKEditor:()=>Ho,CKEditorContext:()=>Bo});var t=o(787),e=o.n(t),r=o(697),i=o.n(r);const s=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};const a="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g;var c="object"==typeof self&&self&&self.Object===Object&&self;const u=a||c||Function("return this")();const h=function(){return u.Date.now()};var d=/\s/;const l=function(t){for(var e=t.length;e--&&d.test(t.charAt(e)););return e};var p=/^\s+/;const f=function(t){return t?t.slice(0,l(t)+1).replace(p,""):t};const _=u.Symbol;var y=Object.prototype,g=y.hasOwnProperty,b=y.toString,v=_?_.toStringTag:void 0;const m=function(t){var e=g.call(t,v),r=t[v];try{t[v]=void 0;var o=!0}catch(t){}var n=b.call(t);return o&&(e?t[v]=r:delete t[v]),n};var j=Object.prototype.toString;const w=function(t){return j.call(t)};var x="[object Null]",E="[object Undefined]",O=_?_.toStringTag:void 0;const C=function(t){return null==t?void 0===t?E:x:O&&O in Object(t)?m(t):w(t)};const P=function(t){return null!=t&&"object"==typeof t};var A="[object Symbol]";const T=function(t){return"symbol"==typeof t||P(t)&&C(t)==A};var S=NaN,W=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,I=/^0o[0-7]+$/i,D=parseInt;const z=function(t){if("number"==typeof t)return t;if(T(t))return S;if(s(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=s(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=f(t);var r=R.test(t);return r||I.test(t)?D(t.slice(2),r?2:8):W.test(t)?S:+t};var M="Expected a function",U=Math.max,F=Math.min;const N=function(t,e,r){var o,n,i,a,c,u,d=0,l=!1,p=!1,f=!0;if("function"!=typeof t)throw new TypeError(M);function _(e){var r=o,i=n;return o=n=void 0,d=e,a=t.apply(i,r)}function y(t){var r=t-u;return void 0===u||r>=e||r<0||p&&t-d>=i}function g(){var t=h();if(y(t))return b(t);c=setTimeout(g,function(t){var r=e-(t-u);return p?F(r,i-(t-d)):r}(t))}function b(t){return c=void 0,f&&o?_(t):(o=n=void 0,a)}function v(){var t=h(),r=y(t);if(o=arguments,n=this,u=t,r){if(void 0===c)return function(t){return d=t,c=setTimeout(g,e),l?_(t):a}(u);if(p)return clearTimeout(c),c=setTimeout(g,e),_(u)}return void 0===c&&(c=setTimeout(g,e)),a}return e=z(e)||0,s(r)&&(l=!!r.leading,i=(p="maxWait"in r)?U(z(r.maxWait)||0,e):i,f="trailing"in r?!!r.trailing:f),v.cancel=function(){void 0!==c&&clearTimeout(c),d=0,o=u=n=c=void 0},v.flush=function(){return void 0===c?a:b(h())},v};var q="Expected a function";const k=function(t,e,r){var o=!0,n=!0;if("function"!=typeof t)throw new TypeError(q);return s(r)&&(o="leading"in r?!!r.leading:o,n="trailing"in r?!!r.trailing:n),N(t,e,{leading:o,maxWait:e,trailing:n})};const L=function(){this.__data__=[],this.size=0};const B=function(t,e){return t===e||t!=t&&e!=e};const $=function(t,e){for(var r=t.length;r--;)if(B(t[r][0],e))return r;return-1};var H=Array.prototype.splice;const V=function(t){var e=this.__data__,r=$(e,t);return!(r<0)&&(r==e.length-1?e.pop():H.call(e,r,1),--this.size,!0)};const K=function(t){var e=this.__data__,r=$(e,t);return r<0?void 0:e[r][1]};const Q=function(t){return $(this.__data__,t)>-1};const G=function(t,e){var r=this.__data__,o=$(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this};function Y(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}Y.prototype.clear=L,Y.prototype.delete=V,Y.prototype.get=K,Y.prototype.has=Q,Y.prototype.set=G;const J=Y;const X=function(){this.__data__=new J,this.size=0};const Z=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};const tt=function(t){return this.__data__.get(t)};const et=function(t){return this.__data__.has(t)};var rt="[object AsyncFunction]",ot="[object Function]",nt="[object GeneratorFunction]",it="[object Proxy]";const st=function(t){if(!s(t))return!1;var e=C(t);return e==ot||e==nt||e==rt||e==it};const at=u["__core-js_shared__"];var ct=function(){var t=/[^.]+$/.exec(at&&at.keys&&at.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();const ut=function(t){return!!ct&&ct in t};var ht=Function.prototype.toString;const dt=function(t){if(null!=t){try{return ht.call(t)}catch(t){}try{return t+""}catch(t){}}return""};var lt=/^\[object .+?Constructor\]$/,pt=Function.prototype,ft=Object.prototype,_t=pt.toString,yt=ft.hasOwnProperty,gt=RegExp("^"+_t.call(yt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const bt=function(t){return!(!s(t)||ut(t))&&(st(t)?gt:lt).test(dt(t))};const vt=function(t,e){return null==t?void 0:t[e]};const mt=function(t,e){var r=vt(t,e);return bt(r)?r:void 0};const jt=mt(u,"Map");const wt=mt(Object,"create");const xt=function(){this.__data__=wt?wt(null):{},this.size=0};const Et=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var Ot="__lodash_hash_undefined__",Ct=Object.prototype.hasOwnProperty;const Pt=function(t){var e=this.__data__;if(wt){var r=e[t];return r===Ot?void 0:r}return Ct.call(e,t)?e[t]:void 0};var At=Object.prototype.hasOwnProperty;const Tt=function(t){var e=this.__data__;return wt?void 0!==e[t]:At.call(e,t)};var St="__lodash_hash_undefined__";const Wt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=wt&&void 0===e?St:e,this};function Rt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}Rt.prototype.clear=xt,Rt.prototype.delete=Et,Rt.prototype.get=Pt,Rt.prototype.has=Tt,Rt.prototype.set=Wt;const It=Rt;const Dt=function(){this.size=0,this.__data__={hash:new It,map:new(jt||J),string:new It}};const zt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};const Mt=function(t,e){var r=t.__data__;return zt(e)?r["string"==typeof e?"string":"hash"]:r.map};const Ut=function(t){var e=Mt(this,t).delete(t);return this.size-=e?1:0,e};const Ft=function(t){return Mt(this,t).get(t)};const Nt=function(t){return Mt(this,t).has(t)};const qt=function(t,e){var r=Mt(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this};function kt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}kt.prototype.clear=Dt,kt.prototype.delete=Ut,kt.prototype.get=Ft,kt.prototype.has=Nt,kt.prototype.set=qt;const Lt=kt;var Bt=200;const $t=function(t,e){var r=this.__data__;if(r instanceof J){var o=r.__data__;if(!jt||o.length<Bt-1)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new Lt(o)}return r.set(t,e),this.size=r.size,this};function Ht(t){var e=this.__data__=new J(t);this.size=e.size}Ht.prototype.clear=X,Ht.prototype.delete=Z,Ht.prototype.get=tt,Ht.prototype.has=et,Ht.prototype.set=$t;const Vt=Ht;const Kt=function(t,e){for(var r=-1,o=null==t?0:t.length;++r<o&&!1!==e(t[r],r,t););return t};const Qt=function(){try{var t=mt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();const Gt=function(t,e,r){"__proto__"==e&&Qt?Qt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r};var Yt=Object.prototype.hasOwnProperty;const Jt=function(t,e,r){var o=t[e];Yt.call(t,e)&&B(o,r)&&(void 0!==r||e in t)||Gt(t,e,r)};const Xt=function(t,e,r,o){var n=!r;r||(r={});for(var i=-1,s=e.length;++i<s;){var a=e[i],c=o?o(r[a],t[a],a,r,t):void 0;void 0===c&&(c=t[a]),n?Gt(r,a,c):Jt(r,a,c)}return r};const Zt=function(t,e){for(var r=-1,o=Array(t);++r<t;)o[r]=e(r);return o};var te="[object Arguments]";const ee=function(t){return P(t)&&C(t)==te};var re=Object.prototype,oe=re.hasOwnProperty,ne=re.propertyIsEnumerable;const ie=ee(function(){return arguments}())?ee:function(t){return P(t)&&oe.call(t,"callee")&&!ne.call(t,"callee")};const se=Array.isArray;const ae=function(){return!1};var ce= true&&exports&&!exports.nodeType&&exports,ue=ce&&"object"=="object"&&module&&!module.nodeType&&module,he=ue&&ue.exports===ce?u.Buffer:void 0;const de=(he?he.isBuffer:void 0)||ae;var le=9007199254740991,pe=/^(?:0|[1-9]\d*)$/;const fe=function(t,e){var r=typeof t;return!!(e=null==e?le:e)&&("number"==r||"symbol"!=r&&pe.test(t))&&t>-1&&t%1==0&&t<e};var _e=9007199254740991;const ye=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=_e};var ge={};ge["[object Float32Array]"]=ge["[object Float64Array]"]=ge["[object Int8Array]"]=ge["[object Int16Array]"]=ge["[object Int32Array]"]=ge["[object Uint8Array]"]=ge["[object Uint8ClampedArray]"]=ge["[object Uint16Array]"]=ge["[object Uint32Array]"]=!0,ge["[object Arguments]"]=ge["[object Array]"]=ge["[object ArrayBuffer]"]=ge["[object Boolean]"]=ge["[object DataView]"]=ge["[object Date]"]=ge["[object Error]"]=ge["[object Function]"]=ge["[object Map]"]=ge["[object Number]"]=ge["[object Object]"]=ge["[object RegExp]"]=ge["[object Set]"]=ge["[object String]"]=ge["[object WeakMap]"]=!1;const be=function(t){return P(t)&&ye(t.length)&&!!ge[C(t)]};const ve=function(t){return function(e){return t(e)}};var me= true&&exports&&!exports.nodeType&&exports,je=me&&"object"=="object"&&module&&!module.nodeType&&module,we=je&&je.exports===me&&a.process;const xe=function(){try{var t=je&&je.require&&je.require("util").types;return t||we&&we.binding&&we.binding("util")}catch(t){}}();var Ee=xe&&xe.isTypedArray;const Oe=Ee?ve(Ee):be;var Ce=Object.prototype.hasOwnProperty;const Pe=function(t,e){var r=se(t),o=!r&&ie(t),n=!r&&!o&&de(t),i=!r&&!o&&!n&&Oe(t),s=r||o||n||i,a=s?Zt(t.length,String):[],c=a.length;for(var u in t)!e&&!Ce.call(t,u)||s&&("length"==u||n&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||fe(u,c))||a.push(u);return a};var Ae=Object.prototype;const Te=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Ae)};const Se=function(t,e){return function(r){return t(e(r))}};const We=Se(Object.keys,Object);var Re=Object.prototype.hasOwnProperty;const Ie=function(t){if(!Te(t))return We(t);var e=[];for(var r in Object(t))Re.call(t,r)&&"constructor"!=r&&e.push(r);return e};const De=function(t){return null!=t&&ye(t.length)&&!st(t)};const ze=function(t){return De(t)?Pe(t):Ie(t)};const Me=function(t,e){return t&&Xt(e,ze(e),t)};const Ue=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e};var Fe=Object.prototype.hasOwnProperty;const Ne=function(t){if(!s(t))return Ue(t);var e=Te(t),r=[];for(var o in t)("constructor"!=o||!e&&Fe.call(t,o))&&r.push(o);return r};const qe=function(t){return De(t)?Pe(t,!0):Ne(t)};const ke=function(t,e){return t&&Xt(e,qe(e),t)};var Le= true&&exports&&!exports.nodeType&&exports,Be=Le&&"object"=="object"&&module&&!module.nodeType&&module,$e=Be&&Be.exports===Le?u.Buffer:void 0,He=$e?$e.allocUnsafe:void 0;const Ve=function(t,e){if(e)return t.slice();var r=t.length,o=He?He(r):new t.constructor(r);return t.copy(o),o};const Ke=function(t,e){var r=-1,o=t.length;for(e||(e=Array(o));++r<o;)e[r]=t[r];return e};const Qe=function(t,e){for(var r=-1,o=null==t?0:t.length,n=0,i=[];++r<o;){var s=t[r];e(s,r,t)&&(i[n++]=s)}return i};const Ge=function(){return[]};var Ye=Object.prototype.propertyIsEnumerable,Je=Object.getOwnPropertySymbols;const Xe=Je?function(t){return null==t?[]:(t=Object(t),Qe(Je(t),(function(e){return Ye.call(t,e)})))}:Ge;const Ze=function(t,e){return Xt(t,Xe(t),e)};const tr=function(t,e){for(var r=-1,o=e.length,n=t.length;++r<o;)t[n+r]=e[r];return t};const er=Se(Object.getPrototypeOf,Object);const rr=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)tr(e,Xe(t)),t=er(t);return e}:Ge;const or=function(t,e){return Xt(t,rr(t),e)};const nr=function(t,e,r){var o=e(t);return se(t)?o:tr(o,r(t))};const ir=function(t){return nr(t,ze,Xe)};const sr=function(t){return nr(t,qe,rr)};const ar=mt(u,"DataView");const cr=mt(u,"Promise");const ur=mt(u,"Set");const hr=mt(u,"WeakMap");var dr="[object Map]",lr="[object Promise]",pr="[object Set]",fr="[object WeakMap]",_r="[object DataView]",yr=dt(ar),gr=dt(jt),br=dt(cr),vr=dt(ur),mr=dt(hr),jr=C;(ar&&jr(new ar(new ArrayBuffer(1)))!=_r||jt&&jr(new jt)!=dr||cr&&jr(cr.resolve())!=lr||ur&&jr(new ur)!=pr||hr&&jr(new hr)!=fr)&&(jr=function(t){var e=C(t),r="[object Object]"==e?t.constructor:void 0,o=r?dt(r):"";if(o)switch(o){case yr:return _r;case gr:return dr;case br:return lr;case vr:return pr;case mr:return fr}return e});const wr=jr;var xr=Object.prototype.hasOwnProperty;const Er=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&xr.call(t,"index")&&(r.index=t.index,r.input=t.input),r};const Or=u.Uint8Array;const Cr=function(t){var e=new t.constructor(t.byteLength);return new Or(e).set(new Or(t)),e};const Pr=function(t,e){var r=e?Cr(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)};var Ar=/\w*$/;const Tr=function(t){var e=new t.constructor(t.source,Ar.exec(t));return e.lastIndex=t.lastIndex,e};var Sr=_?_.prototype:void 0,Wr=Sr?Sr.valueOf:void 0;const Rr=function(t){return Wr?Object(Wr.call(t)):{}};const Ir=function(t,e){var r=e?Cr(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var Dr="[object Boolean]",zr="[object Date]",Mr="[object Map]",Ur="[object Number]",Fr="[object RegExp]",Nr="[object Set]",qr="[object String]",kr="[object Symbol]",Lr="[object ArrayBuffer]",Br="[object DataView]",$r="[object Float32Array]",Hr="[object Float64Array]",Vr="[object Int8Array]",Kr="[object Int16Array]",Qr="[object Int32Array]",Gr="[object Uint8Array]",Yr="[object Uint8ClampedArray]",Jr="[object Uint16Array]",Xr="[object Uint32Array]";const Zr=function(t,e,r){var o=t.constructor;switch(e){case Lr:return Cr(t);case Dr:case zr:return new o(+t);case Br:return Pr(t,r);case $r:case Hr:case Vr:case Kr:case Qr:case Gr:case Yr:case Jr:case Xr:return Ir(t,r);case Mr:return new o;case Ur:case qr:return new o(t);case Fr:return Tr(t);case Nr:return new o;case kr:return Rr(t)}};var to=Object.create;const eo=function(){function t(){}return function(e){if(!s(e))return{};if(to)return to(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const ro=function(t){return"function"!=typeof t.constructor||Te(t)?{}:eo(er(t))};var oo="[object Map]";const no=function(t){return P(t)&&wr(t)==oo};var io=xe&&xe.isMap;const so=io?ve(io):no;var ao="[object Set]";const co=function(t){return P(t)&&wr(t)==ao};var uo=xe&&xe.isSet;const ho=uo?ve(uo):co;var lo=1,po=2,fo=4,_o="[object Arguments]",yo="[object Function]",go="[object GeneratorFunction]",bo="[object Object]",vo={};vo[_o]=vo["[object Array]"]=vo["[object ArrayBuffer]"]=vo["[object DataView]"]=vo["[object Boolean]"]=vo["[object Date]"]=vo["[object Float32Array]"]=vo["[object Float64Array]"]=vo["[object Int8Array]"]=vo["[object Int16Array]"]=vo["[object Int32Array]"]=vo["[object Map]"]=vo["[object Number]"]=vo[bo]=vo["[object RegExp]"]=vo["[object Set]"]=vo["[object String]"]=vo["[object Symbol]"]=vo["[object Uint8Array]"]=vo["[object Uint8ClampedArray]"]=vo["[object Uint16Array]"]=vo["[object Uint32Array]"]=!0,vo["[object Error]"]=vo[yo]=vo["[object WeakMap]"]=!1;const mo=function t(e,r,o,n,i,a){var c,u=r&lo,h=r&po,d=r&fo;if(o&&(c=i?o(e,n,i,a):o(e)),void 0!==c)return c;if(!s(e))return e;var l=se(e);if(l){if(c=Er(e),!u)return Ke(e,c)}else{var p=wr(e),f=p==yo||p==go;if(de(e))return Ve(e,u);if(p==bo||p==_o||f&&!i){if(c=h||f?{}:ro(e),!u)return h?or(e,ke(c,e)):Ze(e,Me(c,e))}else{if(!vo[p])return i?e:{};c=Zr(e,p,u)}}a||(a=new Vt);var _=a.get(e);if(_)return _;a.set(e,c),ho(e)?e.forEach((function(n){c.add(t(n,r,o,n,e,a))})):so(e)&&e.forEach((function(n,i){c.set(i,t(n,r,o,i,e,a))}));var y=l?void 0:(d?h?sr:ir:h?qe:ze)(e);return Kt(y||e,(function(n,i){y&&(n=e[i=n]),Jt(c,i,t(n,r,o,i,e,a))})),c};var jo=1,wo=4;const xo=function(t,e){return mo(t,jo|wo,e="function"==typeof e?e:void 0)};var Eo="[object Object]",Oo=Function.prototype,Co=Object.prototype,Po=Oo.toString,Ao=Co.hasOwnProperty,To=Po.call(Object);const So=function(t){if(!P(t)||C(t)!=Eo)return!1;var e=er(t);if(null===e)return!0;var r=Ao.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&Po.call(r)==To};const Wo=function(t){return P(t)&&1===t.nodeType&&!So(t)};function Ro(t,e=new Set){const r=[t],o=new Set;let n=0;for(;r.length>n;){const t=r[n++];if(!(o.has(t)||Io(t)||e.has(t)))if(o.add(t),t[Symbol.iterator])try{for(const e of t)r.push(e)}catch(t){}else for(const e in t)"defaultValue"!==e&&r.push(t[e])}return o}function Io(t){const e=Object.prototype.toString.call(t),r=typeof t;return"number"===r||"boolean"===r||"string"===r||"symbol"===r||"function"===r||"[object Date]"===e||"[object RegExp]"===e||"[object Module]"===e||null==t||!0===t._watchdogExcluded||t instanceof EventTarget||t instanceof Event}function Do(t,e,r=new Set){if(t===e&&("object"==typeof(o=t)&&null!==o))return!0;var o;const n=Ro(t,r),i=Ro(e,r);for(const t of n)if(i.has(t))return!0;return!1}class zo{constructor(t){if(this.crashes=[],this.state="initializing",this._crashNumberLimit="number"==typeof t.crashNumberLimit?t.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod="number"==typeof t.minimumNonErrorTimePeriod?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const e=t.error||t.reason;e instanceof Error&&this._handleError(e,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter((t=>t!==e))}_fire(t,...e){const r=this._listeners[t]||[];for(const t of r)t.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e.filename,lineno:e.lineno,colno:e.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&void 0!==t.context&&null!==t.context&&"ready"===this.state&&this._isErrorComingFromThisItem(t)}_shouldRestart(){if(this.crashes.length<=this._crashNumberLimit)return!0;return(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}class Mo extends zo{constructor(t,e={}){super(e),this._editor=null,this._throttledSave=k(this._save.bind(this),"number"==typeof e.saveInterval?e.saveInterval:5e3),this._creator=(e,r)=>t.create(e,r),this._destructor=t=>t.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then((()=>(this.state="initializing",this._fire("stateChange"),this._destroy()))).catch((t=>{console.error("An error happened during the editor destroying.",t)})).then((()=>{if("string"==typeof this._elementOrData)return this.create(this._data,this._config,this._config.context);{const t=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,t,t.context)}})).then((()=>{this._fire("restart")}))}create(t=this._elementOrData,e=this._config,r){return Promise.resolve().then((()=>(super._startErrorHandling(),this._elementOrData=t,this._config=this._cloneEditorConfiguration(e)||{},this._config.context=r,this._creator(t,this._config)))).then((t=>{this._editor=t,t.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=t.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")}))}destroy(){return Promise.resolve().then((()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())))}_destroy(){return Promise.resolve().then((()=>{this._stopErrorHandling(),this._throttledSave.flush();const t=this._editor;return this._editor=null,t.model.document.off("change:data",this._throttledSave),this._destructor(t)}))}_save(){const t=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=t}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t={};for(const e of this._editor.model.document.getRootNames())t[e]=this._editor.data.get({rootName:e});return t}_isErrorComingFromThisItem(t){return Do(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return xo(t,((t,e)=>Wo(t)||"context"===e?t:void 0))}}const Uo=new Array(256).fill("").map(((t,e)=>("0"+e.toString(16)).slice(-2)));const Fo=Symbol("MainQueueId");class No extends zo{constructor(t,e={}){super(e),this._watchdogs=new Map,this._watchdogConfig=e,this._context=null,this._contextProps=new Set,this._actionQueues=new qo,this._creator=e=>t.create(e),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty((()=>{"initializing"===this.state&&(this.state="ready",this._fire("stateChange"))}))}get context(){return this._context}create(t={}){return this._actionQueues.enqueue(Fo,(()=>(this._contextConfig=t,this._create())))}getItem(t){return this._getWatchdog(t)._item}getItemState(t){return this._getWatchdog(t).state}add(t){const e=ko(t);return Promise.all(e.map((t=>this._actionQueues.enqueue(t.id,(()=>{if("destroyed"===this.state)throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let e;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if("editor"===t.type)return e=new Mo(this._watchdogConfig),e.setCreator(t.creator),e._setExcludedProperties(this._contextProps),t.destructor&&e.setDestructor(t.destructor),this._watchdogs.set(t.id,e),e.on("error",((r,{error:o,causesRestart:n})=>{this._fire("itemError",{itemId:t.id,error:o}),n&&this._actionQueues.enqueue(t.id,(()=>new Promise((r=>{e.on("restart",function o(){e.off("restart",o),this._fire("itemRestart",{itemId:t.id}),r()}.bind(this))}))))})),e.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))))}remove(t){const e=ko(t);return Promise.all(e.map((t=>this._actionQueues.enqueue(t,(()=>{const e=this._getWatchdog(t);return this._watchdogs.delete(t),e.destroy()})))))}destroy(){return this._actionQueues.enqueue(Fo,(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())))}_restart(){return this._actionQueues.enqueue(Fo,(()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch((t=>{console.error("An error happened during destroying the context or items.",t)})).then((()=>this._create())).then((()=>this._fire("restart"))))))}_create(){return Promise.resolve().then((()=>(this._startErrorHandling(),this._creator(this._contextConfig)))).then((t=>(this._context=t,this._contextProps=Ro(this._context),Promise.all(Array.from(this._watchdogs.values()).map((t=>(t._setExcludedProperties(this._contextProps),t.create(void 0,void 0,this._context))))))))}_destroy(){return Promise.resolve().then((()=>{this._stopErrorHandling();const t=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map((t=>t.destroy()))).then((()=>this._destructor(t)))}))}_getWatchdog(t){const e=this._watchdogs.get(t);if(!e)throw new Error(`Item with the given id was not registered: ${t}.`);return e}_isErrorComingFromThisItem(t){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(t))return!1;return Do(this._context,t.context)}}class qo{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._actions=new WeakMap,this._lastActionId=0,this._activeActions=0}onEmpty(t){this._onEmptyCallbacks.push(t)}enqueue(t,e){const r=t===Fo;this._activeActions++,this._queues.get(t)||this._queues.set(t,Promise.resolve());const o=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(Fo),this._queues.get(t)])).then(e),n=o.catch((()=>{}));return this._queues.set(t,n),o.finally((()=>{this._activeActions--,this._queues.get(t)===n&&0===this._activeActions&&this._onEmptyCallbacks.forEach((t=>t()))}))}}function ko(t){return Array.isArray(t)?t:[t]}const Lo=e().createContext("contextWatchdog");class Bo extends e().Component{constructor(t,e){super(t,e),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}async shouldComponentUpdate(t){return t.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(t.config)),t.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(t.config),!0):this.props.children!==t.children}render(){return e().createElement(Lo.Provider,{value:this.contextWatchdog},this.props.children)}async componentWillUnmount(){await this._destroyContext()}async _initializeContextWatchdog(t){this.contextWatchdog=new No(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",((t,e)=>{this.props.onError(e.error,{phase:"runtime",willContextRestart:e.causesRestart})})),this.contextWatchdog.on("stateChange",(()=>{"ready"===this.contextWatchdog.state&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)})),await this.contextWatchdog.create(t).catch((t=>{this.props.onError(t,{phase:"initialization",willContextRestart:!1})}))}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Bo.defaultProps={isLayoutReady:!0,onError:(t,e)=>console.error(t,e)},Bo.propTypes={id:i().string,isLayoutReady:i().bool,context:i().func,watchdogConfig:i().object,config:i().object,onReady:i().func,onError:i().func};const $o="Lock from React integration (@ckeditor/ckeditor5-react)";class Ho extends e().Component{constructor(t){super(t),this.editorDestructionInProgress=null,this.domContainer=e().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:r}=window;if(r){const[t]=r.split(".").map(Number);t<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(t){return!!this.editor&&(t.id!==this.props.id||(this._shouldUpdateEditor(t)&&this.editor.setData(t.data),"disabled"in t&&(t.disabled?this.editor.enableReadOnlyMode($o):this.editor.disableReadOnlyMode($o)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return e().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof No?this.watchdog=new Vo(this.context):this.watchdog=new Ho._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator(((t,e)=>this._createEditor(t,e))),this.watchdog.on("error",((t,{error:e,causesRestart:r})=>{this.props.onError(e,{phase:"runtime",willEditorRestart:r})})),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch((t=>this.props.onError(t,{phase:"initialization",willEditorRestart:!1}))))}_createEditor(t,e){return this.props.editor.create(t,e).then((t=>{"disabled"in this.props&&this.props.disabled&&t.enableReadOnlyMode($o);const e=t.model.document,r=t.editing.view.document;return e.on("change:data",(e=>{this.props.onChange&&this.props.onChange(e,t)})),r.on("focus",(e=>{this.props.onFocus&&this.props.onFocus(e,t)})),r.on("blur",(e=>{this.props.onBlur&&this.props.onBlur(e,t)})),setTimeout((()=>{this.props.onReady&&this.props.onReady(t)})),t}))}async _destroyEditor(){this.editorDestructionInProgress=new Promise((t=>{setTimeout((()=>{this.watchdog?this.watchdog.destroy().then((()=>{this.watchdog=null,t()})):t()}))}))}_shouldUpdateEditor(t){return this.props.data!==t.data&&this.editor.getData()!==t.data}_getConfig(){return this.props.data&&this.props.config.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...this.props.config,initialData:this.props.config.initialData||this.props.data||""}}}class Vo{constructor(t){this._contextWatchdog=t,this._id=function(){const t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+Uo[t>>0&255]+Uo[t>>8&255]+Uo[t>>16&255]+Uo[t>>24&255]+Uo[e>>0&255]+Uo[e>>8&255]+Uo[e>>16&255]+Uo[e>>24&255]+Uo[r>>0&255]+Uo[r>>8&255]+Uo[r>>16&255]+Uo[r>>24&255]+Uo[o>>0&255]+Uo[o>>8&255]+Uo[o>>16&255]+Uo[o>>24&255]}()}setCreator(t){this._creator=t}create(t,e){return this._contextWatchdog.add({sourceElementOrData:t,config:e,creator:this._creator,id:this._id,type:"editor"})}on(t,e){this._contextWatchdog.on("itemError",((t,{itemId:r,causesRestart:o,error:n})=>{r===this._id&&e(null,{error:n,causesRestart:o})}))}destroy(){return"ready"===this._contextWatchdog.state?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}Ho.contextType=Lo,Ho.propTypes={editor:i().func.isRequired,data:i().string,config:i().object,watchdogConfig:i().object,onChange:i().func,onReady:i().func,onFocus:i().func,onBlur:i().func,onError:i().func,disabled:i().bool,onInit:(t,e)=>{if(t[e])return new Error('The "onInit" property is not supported anymore by the CKEditor component. Use the "onReady" property instead.')}},Ho.defaultProps={config:{},onError:(t,e)=>console.error(t,e)},Ho._EditorWatchdog=Mo})(),n})()));
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ 34512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Input)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(88972);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js
var ckeditor = __webpack_require__(72757);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(77197);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(95586);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(50361);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
// EXTERNAL MODULE: ./node_modules/@_sh/strapi-plugin-ckeditor/admin/src/components/Input/CKEditor/configs/index.js + 7 modules
var CKEditor_configs = __webpack_require__(39642);
// EXTERNAL MODULE: ./node_modules/@_sh/strapi-plugin-ckeditor/admin/src/utils/pluginId.js
var pluginId = __webpack_require__(95046);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
;// CONCATENATED MODULE: ./node_modules/@_sh/strapi-plugin-ckeditor/admin/src/components/Input/CKEditor/configuration.js




const importLang = async (config, language) => {
  if (!language)
    return;
  const { plugins: configPlugins = [] } = config;
  const configPluginNames = [...configPlugins.map((p) => p.pluginName)];
  const plugins = [
    { name: "DocumentList", module: "ckeditor5-list" },
    { name: "TextPartLanguage", module: "ckeditor5-language" },
    { name: "Alignment", module: "ckeditor5-alignment" },
    { name: "Autosave", module: "ckeditor5-autosave" },
    { name: "BlockQuote", module: "ckeditor5-block-quote" },
    { name: "CodeBlock", module: "ckeditor5-code-block" },
    { name: "Heading", module: "ckeditor5-heading" },
    { name: "HtmlEmbed", module: "ckeditor5-html-embed" },
    { name: "GeneralHtmlSupport", module: "ckeditor5-html-support" },
    { name: "HorizontalLine", module: "ckeditor5-horizontal-line" },
    { name: "MediaEmbed", module: "ckeditor5-media-embed" },
    { name: "Image", module: "ckeditor5-image" },
    { name: "Indent", module: "ckeditor5-indent" },
    { name: "Link", module: "ckeditor5-link" },
    { name: "RemoveFormat", module: "ckeditor5-remove-format" },
    { name: "Table", module: "ckeditor5-table" },
    { name: "WordCount", module: "ckeditor5-word-count" },
    { name: "FindAndReplace", module: "ckeditor5-find-and-replace" },
    { name: "SpecialCharacters", module: "ckeditor5-special-characters" },
    { name: "PageBreak", module: "ckeditor5-page-break" },
    { name: "SourceEditing", module: "ckeditor5-source-editing" },
    { name: "Highlight", module: "ckeditor5-highlight" },
    { name: "Style", module: "ckeditor5-style" }
  ];
  const basicStylesPlugin = [
    "Bold",
    "Code",
    "Italic",
    "Strikethrough",
    "Subscript",
    "Superscript",
    "Underline"
  ];
  const fontPlugin = ["FontBackgroundColor", "FontColor", "FontFamily", "FontSize"];
  const listPlugin = ["List", "DocumentList"];
  await Promise.all(
    plugins.filter(({ name }) => configPluginNames.includes(name)).map(
      async ({ module }) => await __webpack_require__(74060)(`./${module}/build/translations/${language}.js`).catch(() => null)
    )
  );
  if (configPluginNames.some((p) => basicStylesPlugin.includes(p)))
    await __webpack_require__(98996)(`./${language}.js`).catch(() => null);
  if (configPluginNames.some((p) => listPlugin.includes(p)))
    await __webpack_require__(44042)(`./${language}.js`).catch(() => null);
  if (configPluginNames.some((p) => fontPlugin.includes(p)))
    await __webpack_require__(42940)(`./${language}.js`).catch(() => null);
};
const setLanguage = async (config) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const languageContent = params["plugins[i18n][locale]"];
  const preferedLanguage = helper_plugin_esm/* auth */.I8.getUserInfo().preferedLanguage;
  const { ui = preferedLanguage || "en", content, textPartLanguage, ignorei18n } = config.language || {};
  if (languageContent) {
    const locale = languageContent.split("-")[0];
    config.language = {
      ui: typeof config.language === "string" ? config.language : ui,
      content: ignorei18n ? content : locale,
      textPartLanguage
    };
    await importLang(config, config.language.ui);
    await importLang(config, config.language.content);
  } else if (typeof config.language === "object") {
    await importLang(config, config.language.ui);
    await importLang(config, config.language.content);
  } else if (typeof config.language === "string") {
    await importLang(config, config.language);
  } else {
    config.language = preferedLanguage;
    await importLang(config, preferedLanguage);
  }
};
const getCurrentConfig = (presetName) => {
  const { configs: userConfigs, configsOverwrite: overwrite } = globalThis.CKEditorConfig || {};
  let configs;
  if (overwrite) {
    configs = userConfigs;
  } else {
    configs = CKEditor_configs/* default */.Z;
    if (userConfigs) {
      Object.keys(userConfigs).map((cfgName) => {
        if (CKEditor_configs/* default */.Z.hasOwnProperty(cfgName)) {
          configs[cfgName].fields = { ...CKEditor_configs/* default */.Z[cfgName].field, ...userConfigs[cfgName].field };
          configs[cfgName].styles = userConfigs[cfgName].styles || CKEditor_configs/* default */.Z[cfgName].styles;
          configs[cfgName].editorConfig = { ...CKEditor_configs/* default */.Z[cfgName].editorConfig, ...userConfigs[cfgName].editorConfig };
        } else {
          configs[cfgName] = userConfigs[cfgName];
        }
      });
    }
  }
  const clonedConfig = cloneDeep_default()(configs[presetName]);
  return clonedConfig;
};
const setPlugins = (config, { responsiveDimensions }, toggleMediaLib) => {
  const configPluginNames = config.editorConfig?.plugins ? [...config.editorConfig.plugins.map((p) => p.pluginName)] : [];
  if (configPluginNames.includes("StrapiMediaLib")) {
    config.editorConfig.strapiMediaLib = { toggle: toggleMediaLib };
  }
  if (configPluginNames.includes("StrapiUploadAdapter")) {
    config.editorConfig.strapiUploadAdapter = {
      uploadUrl: `${strapi.backendURL}/upload`,
      headers: { Authorization: "Bearer " + helper_plugin_esm/* auth */.I8.getToken() },
      backendUrl: strapi.backendURL,
      responsive: responsiveDimensions
    };
  }
  if (configPluginNames.includes("WordCount")) {
    config.editorConfig.WordCountPlugin = true;
  }
};
const requestConfig = (key) => (0,helper_plugin_esm/* request */.WY)(`/${(pluginId_default())}/config/${key}`, { method: "GET" });
const getConfiguration = async (presetName, toggleMediaLib) => {
  const currentConfig = getCurrentConfig(presetName);
  const uploadPluginConfig = await requestConfig("upload");
  setPlugins(currentConfig, uploadPluginConfig, toggleMediaLib);
  await setLanguage(currentConfig.editorConfig);
  return { currentConfig, uploadPluginConfig };
};

;// CONCATENATED MODULE: ./node_modules/@_sh/strapi-plugin-ckeditor/admin/src/components/Input/CKEditor/theme/common.js

const common = (0,styled_components_browser_esm/* css */.iv)`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
  }

  
  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }


    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: .8em;
      margin-bottom: .4em
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: .2em;
      margin-bottom: var(--ck-spacing-large)
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea{
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;
    
    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir=rtl]{
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div{
      justify-content: flex-start;
      & > .ck-word-count {
          & > div:first-child{
            order: 2;
          }
          & > div:last-child{
            order: 1;
          }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./node_modules/@_sh/strapi-plugin-ckeditor/admin/src/components/Input/CKEditor/theme/light.js

const light = (0,styled_components_browser_esm/* css */.iv)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #F0F0FF !important;

    .ck .ck-color-picker-save {
      & > svg {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(209, 89%, 33%);
  }
`;

;// CONCATENATED MODULE: ./node_modules/@_sh/strapi-plugin-ckeditor/admin/src/components/Input/CKEditor/theme/dark.js

const dark = (0,styled_components_browser_esm/* css */.iv)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;

    .ck .ck-color-picker > svg {
      color: #ffffff !important;
    }
    .ck .ck-color-picker-save {
      & > svg {
        stroke: #ffffff !important;
      }
      & > svg > #primary,
      #primary-2 {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(216, 100%, 75%);
  }

`;

;// CONCATENATED MODULE: ./node_modules/@_sh/strapi-plugin-ckeditor/admin/src/components/Input/CKEditor/theme/additional.js

const additional = (0,styled_components_browser_esm/* css */.iv)`

/* --- expanding --- */

.ck.ck-editor__main .ck-blurred {
    max-height: 200px;
  }
.ck.ck-editor__main .ck-focused {
  	max-height: 700px;
  }

/* --- color-grid --- */

.ck.ck-color-ui-dropdown {
	--ck-color-grid-tile-size: 22px !important;
}
.ck.ck-color-grid__tile{
	width:auto;
}
.ck.ck-color-ui-dropdown .ck-color-grid {
	grid-gap: 2px;
}
.ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
	border-radius: 2px;
}
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:hover:not(.ck-disabled),
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:focus:not(.ck-disabled) {
	z-index: 1;
	transform: scale(1.1);
	border-radius: 2px;
}

/* --- color-picker --- */

.ck[dir=rtl] .ck-color-input{
  margin: 0 8px 8px 0 !important;
  padding: 3px 5px 0 0 !important;
}

.ck .ck-color-input{
  margin: 0 0 8px 8px ;
  padding: 3px 0 0 6px;
  border-radius:2px ;
  font-size:.77rem !important;
  width: 58px !important;
}
.ck .ck-color-picker{
  margin: 0 3px 8px 3px;
  border-radius:2px !important;
  width: 27px !important;
}
.ck .ck-color-picker-save{
  margin: 0 0 8px 0;
  border-radius:2px !important;
  width:27px !important;
}


/* ---- Style feature config ------------------------------------------------------ */

:root {
	--ck-georgia-serif-font-stack: Georgia,Times,Times New Roman,serif;
}

.ck-content h1.document-title {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 50px;
	font-weight: bold;
	border: 0;
}

.ck-content h2.document-subtitle {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 20px;
	font-weight: bold;
	color: #d1d1d1;
	letter-spacing: 10px;
}

.ck-content p.callout {
	--border-color: #e91e1e;
	padding: 1.2em 2em;
	border: 1px solid var(--border-color);
	border-left: 10px solid var(--border-color);
	background: #fff9fb;
	border-radius: 5px;
	margin: 1.5em 2em;
	box-shadow: 5px 5px 0 #ffe6ef;
}

.ck-content blockquote.side-quote {
	font-family: var(--ck-georgia-serif-font-stack);
	font-style: normal;
	float: right;
	width: 35%;
	position: relative;
	border: 0;
	overflow: visible;
	z-index: 1;
	margin-left: 1em;
}

.ck-content blockquote.side-quote::before {
	content: "“";
	position: absolute;
	top: -37px;
	left: -10px;
	display: block;
	font-size: 200px;
	color: #e7e7e7;
	z-index: -1;
	line-height: 1;
}

.ck-content blockquote.side-quote p {
	font-size: 2em;
	line-height: 1;
}

.ck-content blockquote.side-quote p:last-child:not(:first-child) {
	font-size: 1.3em;
	text-align: right;
	color: #555;
}

.ck-content span.needs-clarification {
	outline: 1px dashed #c8a24b;
	background: #ffe19c;
	border-radius: 2px;
	position: relative;
}

.ck-content span.needs-clarification::after {
	content: "?";
	display: inline-block;
	color: #fff;
	background: #3b3b3b;
	font-size: 12px;
	vertical-align: super;
	width: 12px;
	height: 12px;
	line-height: 12px;
	border-radius: 10px;
	text-align: center;
	position: absolute;
	right: -6px;
	top: -6px;
	font-weight: bold;
	letter-spacing: initial;
}

.ck-content span.wide-spacing {
	letter-spacing: 0.3em;
}

.ck-content span.small-caps {
	font-variant: small-caps;
}

.ck-content span.spoiler {
	background: #000;
	color: #000;
}

.ck-content span.spoiler:hover {
	background: #000;
	color: #fff;
}

.ck-content pre.stylish-code {
	border-color: transparent;
	margin-left: 2em;
	margin-right: 2em;
	border-radius: 10px;
}

.ck-content pre.stylish-code::before {
	content: "";
	display: block;
	height: 13px;
	background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
	margin-bottom: 8px;
	background-repeat: no-repeat;
}

.ck-content pre.stylish-code-dark,
.ck-content pre.stylish-code-bright {
	padding: 1em;
}

.ck-content pre.stylish-code-dark {
	background: #272822;
	box-shadow: 5px 5px 0 #0000001f;
	color: white;
}

.ck-content pre.stylish-code-dark code {
	color: white;
}

.ck-content pre.stylish-code-bright {
	background: #dddfe0;
	color: #000;
	box-shadow: 5px 5px 0 #b3b3b3;
}

.ck-content pre.stylish-code-bright code {
	color: #222;
}

`;

;// CONCATENATED MODULE: ./node_modules/@_sh/strapi-plugin-ckeditor/admin/src/components/Input/CKEditor/theme/index.js




const baseTheme = {
  common: common,
  light: light,
  dark: dark,
  additional: additional
};
/* harmony default export */ const CKEditor_theme = (baseTheme);

;// CONCATENATED MODULE: ./node_modules/@_sh/strapi-plugin-ckeditor/admin/src/components/Input/CKEditor/styling.js


const getGlobalStyling = () => {
  const variant = localStorage.getItem("STRAPI_THEME") || "light";
  const { theme: userTheme, themeOverwrite: overwrite } = globalThis.CKEditorConfig || {};
  const theme = overwrite ? userTheme : { ...CKEditor_theme, ...userTheme };
  return (0,styled_components_browser_esm/* createGlobalStyle */.vJ)`
       ${theme.common}
       ${theme[variant]}
       ${theme.additional}
   `;
};

;// CONCATENATED MODULE: ./node_modules/@_sh/strapi-plugin-ckeditor/admin/src/components/Input/MediaLib/index.js



const MediaLib = ({ isOpen, onChange, onToggle, editor, uploadConfig: { responsiveDimensions } }) => {
  const { components } = (0,helper_plugin_esm/* useLibrary */.yX)();
  const MediaLibraryDialog = components["media-library"];
  const handleChangeAssets = (assets) => {
    let newValue = "";
    assets.map(({ name, url, alt, formats, mime }) => {
      if (mime.includes("image")) {
        if (formats && responsiveDimensions) {
          let set = "";
          let keys = Object.keys(formats).sort((a, b) => formats[a].width - formats[b].width);
          keys.map((k) => set += (0,helper_plugin_esm/* prefixFileUrlWithBackendUrl */.CR)(formats[k].url) + ` ${formats[k].width}w,`);
          newValue += `<img src="${url}" alt="${alt}" width="${formats[keys[keys.length - 1]].width}px" srcset="${set}" />`;
        } else {
          newValue += `<img src="${url}" alt="${alt}" />`;
        }
      } else if (mime.includes("application/pdf")) {
        newValue = `<a href="${(0,helper_plugin_esm/* prefixFileUrlWithBackendUrl */.CR)(url)}" download="${name}">${name || "Download PDF"}</a>`;
      }
    });
    const viewFragment = editor.data.processor.toView(newValue);
    const modelFragment = editor.data.toModel(viewFragment);
    editor.model.insertContent(modelFragment);
    onToggle();
  };
  const handleSelectAssets = (files) => {
    const formattedFiles = files.map((f) => ({
      name: f.name,
      alt: f.alternativeText || f.name,
      url: (0,helper_plugin_esm/* prefixFileUrlWithBackendUrl */.CR)(f.url),
      mime: f.mime,
      formats: f.formats
    }));
    handleChangeAssets(formattedFiles);
  };
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(
    MediaLibraryDialog,
    {
      onClose: onToggle,
      onSelectAssets: handleSelectAssets
    }
  );
};
MediaLib.defaultProps = {
  isOpen: false,
  onChange: () => {
  },
  onToggle: () => {
  }
};
MediaLib.propTypes = {
  isOpen: (prop_types_default()).bool,
  onChange: (prop_types_default()).func,
  onToggle: (prop_types_default()).func
};
/* harmony default export */ const Input_MediaLib = (MediaLib);

// EXTERNAL MODULE: ./node_modules/ckeditor5/build/ckeditor5-dll.js
var ckeditor5_dll = __webpack_require__(77868);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-editor-classic/build/editor-classic.js
var editor_classic = __webpack_require__(3108);
;// CONCATENATED MODULE: ./node_modules/@_sh/strapi-plugin-ckeditor/admin/src/components/Input/CKEditor/index.js










const GlobalStyling = getGlobalStyling();
const Wrapper = (0,styled_components_browser_esm/* default */.ZP)("div")`${({ editorStyles }) => editorStyles}`;
const Editor = ({ onChange, name, value, disabled, preset, maxLength }) => {
  const [editorInstance, setEditorInstance] = (0,react.useState)(false);
  const [mediaLibVisible, setMediaLibVisible] = (0,react.useState)(false);
  const [uploadPluginConfig, setUploadPluginConfig] = (0,react.useState)(null);
  const [config, setConfig] = (0,react.useState)(null);
  const [lengthMax, setLengthMax] = (0,react.useState)(false);
  const wordCounter = (0,react.useRef)(null);
  const handleToggleMediaLib = () => setMediaLibVisible((prev) => !prev);
  const handleCounter = (number) => number > maxLength ? setLengthMax(true) : setLengthMax(false);
  (0,react.useEffect)(() => {
    (async () => {
      const { currentConfig, uploadPluginConfig: uploadPluginConfig2 } = await getConfiguration(preset, handleToggleMediaLib);
      setConfig(currentConfig);
      setUploadPluginConfig(uploadPluginConfig2);
    })();
  }, []);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, config && /* @__PURE__ */ react.createElement(GlobalStyling, null), /* @__PURE__ */ react.createElement(Wrapper, { editorStyles: config?.styles }, !config && /* @__PURE__ */ react.createElement(LoaderBox, { hasRadius: true, background: "neutral100" }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, "Loading...")), config && /* @__PURE__ */ react.createElement(
    ckeditor.CKEditor,
    {
      editor: window.CKEditor5.editorClassic.ClassicEditor,
      config: config?.editorConfig,
      disabled,
      data: value,
      onReady: (editor) => {
        if (config.editorConfig.WordCountPlugin) {
          const wordCountPlugin = editor.plugins.get("WordCount");
          wordCountPlugin.on("update", (evt, stats) => handleCounter(stats.characters));
          const wordCountWrapper = wordCounter.current;
          wordCountWrapper?.appendChild(wordCountPlugin.wordCountContainer);
        }
        if (editor.plugins.has("ImageUploadEditing")) {
          editor.plugins.get("ImageUploadEditing").on("uploadComplete", (evt, { data, imageElement }) => editor.model.change((writer) => writer.setAttribute("alt", data.alt, imageElement)));
        }
        setEditorInstance(editor);
      },
      onChange: (event, editor) => {
        const data = editor.getData();
        onChange({ target: { name, value: data } });
      }
    }
  ), config && config.editorConfig.WordCountPlugin && /* @__PURE__ */ react.createElement(
    CounterLoaderBox,
    {
      color: lengthMax ? "danger500" : "neutral400",
      ref: wordCounter
    },
    !editorInstance && /* @__PURE__ */ react.createElement(Loader/* Loader */.a, { small: true }, "Loading...")
  ), uploadPluginConfig && /* @__PURE__ */ react.createElement(Input_MediaLib, { isOpen: mediaLibVisible, onToggle: handleToggleMediaLib, editor: editorInstance, uploadConfig: uploadPluginConfig })));
};
Editor.defaultProps = {
  value: "",
  disabled: false
};
Editor.propTypes = {
  onChange: (prop_types_default()).func.isRequired,
  name: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).string,
  disabled: (prop_types_default()).bool
};
const CounterLoaderBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  display:flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  `;
const LoaderBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  display:flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  `;
/* harmony default export */ const CKEditor = (Editor);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js
var FieldLabel = __webpack_require__(64777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldHint.js
var FieldHint = __webpack_require__(63428);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
;// CONCATENATED MODULE: ./node_modules/@_sh/strapi-plugin-ckeditor/admin/src/components/Input/index.js






const Wysiwyg = ({ name, attribute, onChange, value, intlLabel, labelAction, disabled, error, description, required }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { preset, maxLengthCharacters, ...options } = attribute.options;
  return /* @__PURE__ */ react.createElement(Field/* Field */.g, { name, id: name, error, hint: description && formatMessage(description) }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 1 }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, { action: labelAction, required }, formatMessage(intlLabel)), /* @__PURE__ */ react.createElement(CKEditor, { disabled, name, onChange, value, preset, maxLength: maxLengthCharacters }), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null)));
};
Wysiwyg.defaultProps = {
  description: null,
  disabled: false,
  error: null,
  labelAction: null,
  required: false,
  value: ""
};
Wysiwyg.propTypes = {
  intlLabel: (prop_types_default()).object.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  attribute: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  description: (prop_types_default()).object,
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  labelAction: (prop_types_default()).object,
  required: (prop_types_default()).bool,
  value: (prop_types_default()).string
};
/* harmony default export */ const Input = (Wysiwyg);


/***/ })

}]);