function dv(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function hv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Df={exports:{}},ul={},Mf={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps=Symbol.for("react.element"),pv=Symbol.for("react.portal"),fv=Symbol.for("react.fragment"),mv=Symbol.for("react.strict_mode"),gv=Symbol.for("react.profiler"),vv=Symbol.for("react.provider"),yv=Symbol.for("react.context"),bv=Symbol.for("react.forward_ref"),wv=Symbol.for("react.suspense"),xv=Symbol.for("react.memo"),_v=Symbol.for("react.lazy"),yh=Symbol.iterator;function kv(e){return e===null||typeof e!="object"?null:(e=yh&&e[yh]||e["@@iterator"],typeof e=="function"?e:null)}var Ff={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bf=Object.assign,Uf={};function Ui(e,t,r){this.props=e,this.context=t,this.refs=Uf,this.updater=r||Ff}Ui.prototype.isReactComponent={};Ui.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ui.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vf(){}Vf.prototype=Ui.prototype;function Qu(e,t,r){this.props=e,this.context=t,this.refs=Uf,this.updater=r||Ff}var Zu=Qu.prototype=new Vf;Zu.constructor=Qu;Bf(Zu,Ui.prototype);Zu.isPureReactComponent=!0;var bh=Array.isArray,jf=Object.prototype.hasOwnProperty,Ju={current:null},Hf={key:!0,ref:!0,__self:!0,__source:!0};function Wf(e,t,r){var n,i={},o=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)jf.call(t,n)&&!Hf.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:ps,type:e,key:o,ref:s,props:i,_owner:Ju.current}}function Cv(e,t){return{$$typeof:ps,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ed(e){return typeof e=="object"&&e!==null&&e.$$typeof===ps}function Sv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var wh=/\/+/g;function ql(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sv(""+e.key):t.toString(36)}function oa(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ps:case pv:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+ql(s,0):n,bh(i)?(r="",e!=null&&(r=e.replace(wh,"$&/")+"/"),oa(i,t,r,"",function(u){return u})):i!=null&&(ed(i)&&(i=Cv(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(wh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",bh(e))for(var l=0;l<e.length;l++){o=e[l];var a=n+ql(o,l);s+=oa(o,t,r,a,i)}else if(a=kv(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=n+ql(o,l++),s+=oa(o,t,r,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ns(e,t,r){if(e==null)return e;var n=[],i=0;return oa(e,n,"","",function(o){return t.call(r,o,i++)}),n}function $v(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var dt={current:null},sa={transition:null},Ev={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:sa,ReactCurrentOwner:Ju};X.Children={map:Ns,forEach:function(e,t,r){Ns(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Ns(e,function(){t++}),t},toArray:function(e){return Ns(e,function(t){return t})||[]},only:function(e){if(!ed(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Ui;X.Fragment=fv;X.Profiler=gv;X.PureComponent=Qu;X.StrictMode=mv;X.Suspense=wv;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev;X.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Bf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ju.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)jf.call(t,a)&&!Hf.hasOwnProperty(a)&&(n[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)n.children=r;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:ps,type:e.type,key:i,ref:o,props:n,_owner:s}};X.createContext=function(e){return e={$$typeof:yv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vv,_context:e},e.Consumer=e};X.createElement=Wf;X.createFactory=function(e){var t=Wf.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:bv,render:e}};X.isValidElement=ed;X.lazy=function(e){return{$$typeof:_v,_payload:{_status:-1,_result:e},_init:$v}};X.memo=function(e,t){return{$$typeof:xv,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=sa.transition;sa.transition={};try{e()}finally{sa.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return dt.current.useCallback(e,t)};X.useContext=function(e){return dt.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return dt.current.useDeferredValue(e)};X.useEffect=function(e,t){return dt.current.useEffect(e,t)};X.useId=function(){return dt.current.useId()};X.useImperativeHandle=function(e,t,r){return dt.current.useImperativeHandle(e,t,r)};X.useInsertionEffect=function(e,t){return dt.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return dt.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return dt.current.useMemo(e,t)};X.useReducer=function(e,t,r){return dt.current.useReducer(e,t,r)};X.useRef=function(e){return dt.current.useRef(e)};X.useState=function(e){return dt.current.useState(e)};X.useSyncExternalStore=function(e,t,r){return dt.current.useSyncExternalStore(e,t,r)};X.useTransition=function(){return dt.current.useTransition()};X.version="18.2.0";Mf.exports=X;var O=Mf.exports;const Kf=hv(O),M=dv({__proto__:null,default:Kf},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv=O,Av=Symbol.for("react.element"),Tv=Symbol.for("react.fragment"),Pv=Object.prototype.hasOwnProperty,Ov=zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lv={key:!0,ref:!0,__self:!0,__source:!0};function Gf(e,t,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Pv.call(t,n)&&!Lv.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Av,type:e,key:o,ref:s,props:i,_owner:Ov.current}}ul.Fragment=Tv;ul.jsx=Gf;ul.jsxs=Gf;Df.exports=ul;var H=Df.exports,Fc={},qf={exports:{}},Rt={},Yf={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,G){var Y=N.length;N.push(G);e:for(;0<Y;){var Ae=Y-1>>>1,We=N[Ae];if(0<i(We,G))N[Ae]=G,N[Y]=We,Y=Ae;else break e}}function r(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var G=N[0],Y=N.pop();if(Y!==G){N[0]=Y;e:for(var Ae=0,We=N.length,Ls=We>>>1;Ae<Ls;){var _n=2*(Ae+1)-1,Gl=N[_n],kn=_n+1,Is=N[kn];if(0>i(Gl,Y))kn<We&&0>i(Is,Gl)?(N[Ae]=Is,N[kn]=Y,Ae=kn):(N[Ae]=Gl,N[_n]=Y,Ae=_n);else if(kn<We&&0>i(Is,Y))N[Ae]=Is,N[kn]=Y,Ae=kn;else break e}}return G}function i(N,G){var Y=N.sortIndex-G.sortIndex;return Y!==0?Y:N.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],p=1,d=null,h=3,g=!1,v=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(N){for(var G=r(u);G!==null;){if(G.callback===null)n(u);else if(G.startTime<=N)n(u),G.sortIndex=G.expirationTime,t(a,G);else break;G=r(u)}}function x(N){if(y=!1,w(N),!v)if(r(a)!==null)v=!0,St(_);else{var G=r(u);G!==null&&Ji(x,G.startTime-N)}}function _(N,G){v=!1,y&&(y=!1,b(z),z=-1),g=!0;var Y=h;try{for(w(G),d=r(a);d!==null&&(!(d.expirationTime>G)||N&&!W());){var Ae=d.callback;if(typeof Ae=="function"){d.callback=null,h=d.priorityLevel;var We=Ae(d.expirationTime<=G);G=e.unstable_now(),typeof We=="function"?d.callback=We:d===r(a)&&n(a),w(G)}else n(a);d=r(a)}if(d!==null)var Ls=!0;else{var _n=r(u);_n!==null&&Ji(x,_n.startTime-G),Ls=!1}return Ls}finally{d=null,h=Y,g=!1}}var C=!1,S=null,z=-1,P=5,$=-1;function W(){return!(e.unstable_now()-$<P)}function me(){if(S!==null){var N=e.unstable_now();$=N;var G=!0;try{G=S(!0,N)}finally{G?oe():(C=!1,S=null)}}else C=!1}var oe;if(typeof m=="function")oe=function(){m(me)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,He=Pe.port2;Pe.port1.onmessage=me,oe=function(){He.postMessage(null)}}else oe=function(){k(me,0)};function St(N){S=N,C||(C=!0,oe())}function Ji(N,G){z=k(function(){N(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,St(_))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(a)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var Y=h;h=G;try{return N()}finally{h=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Y=h;h=N;try{return G()}finally{h=Y}},e.unstable_scheduleCallback=function(N,G,Y){var Ae=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Ae+Y:Ae):Y=Ae,N){case 1:var We=-1;break;case 2:We=250;break;case 5:We=1073741823;break;case 4:We=1e4;break;default:We=5e3}return We=Y+We,N={id:p++,callback:G,priorityLevel:N,startTime:Y,expirationTime:We,sortIndex:-1},Y>Ae?(N.sortIndex=Y,t(u,N),r(a)===null&&N===r(u)&&(y?(b(z),z=-1):y=!0,Ji(x,Y-Ae))):(N.sortIndex=We,t(a,N),v||g||(v=!0,St(_))),N},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(N){var G=h;return function(){var Y=h;h=G;try{return N.apply(this,arguments)}finally{h=Y}}}})(Xf);Yf.exports=Xf;var Iv=Yf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf=O,Nt=Iv;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zf=new Set,Bo={};function Hn(e,t){zi(e,t),zi(e+"Capture",t)}function zi(e,t){for(Bo[e]=t,e=0;e<t.length;e++)Zf.add(t[e])}var Or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=Object.prototype.hasOwnProperty,Nv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xh={},_h={};function Rv(e){return Bc.call(_h,e)?!0:Bc.call(xh,e)?!1:Nv.test(e)?_h[e]=!0:(xh[e]=!0,!1)}function Dv(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mv(e,t,r,n){if(t===null||typeof t>"u"||Dv(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,r,n,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var td=/[\-:]([a-z])/g;function rd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(td,rd);Je[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(td,rd);Je[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(td,rd);Je[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function nd(e,t,r,n){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mv(t,r,i,n)&&(r=null),n||i===null?Rv(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Dr=Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rs=Symbol.for("react.element"),oi=Symbol.for("react.portal"),si=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),Uc=Symbol.for("react.profiler"),Jf=Symbol.for("react.provider"),em=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),jc=Symbol.for("react.suspense_list"),sd=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),tm=Symbol.for("react.offscreen"),kh=Symbol.iterator;function eo(e){return e===null||typeof e!="object"?null:(e=kh&&e[kh]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,Yl;function bo(e){if(Yl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Yl=t&&t[1]||""}return`
`+Yl+e}var Xl=!1;function Ql(e,t){if(!e||Xl)return"";Xl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Xl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?bo(e):""}function Fv(e){switch(e.tag){case 5:return bo(e.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function Hc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case si:return"Fragment";case oi:return"Portal";case Uc:return"Profiler";case id:return"StrictMode";case Vc:return"Suspense";case jc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case em:return(e.displayName||"Context")+".Consumer";case Jf:return(e._context.displayName||"Context")+".Provider";case od:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sd:return t=e.displayName||null,t!==null?t:Hc(e.type)||"Memo";case Hr:t=e._payload,e=e._init;try{return Hc(e(t))}catch{}}return null}function Bv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hc(t);case 8:return t===id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uv(e){var t=rm(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ds(e){e._valueTracker||(e._valueTracker=Uv(e))}function nm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=rm(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Sa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wc(e,t){var r=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ch(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=cn(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function im(e,t){t=t.checked,t!=null&&nd(e,"checked",t,!1)}function Kc(e,t){im(e,t);var r=cn(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gc(e,t.type,r):t.hasOwnProperty("defaultValue")&&Gc(e,t.type,cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sh(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Gc(e,t,r){(t!=="number"||Sa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var wo=Array.isArray;function yi(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+cn(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $h(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(A(92));if(wo(r)){if(1<r.length)throw Error(A(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:cn(r)}}function om(e,t){var r=cn(t.value),n=cn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Eh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ms,am=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ms=Ms||document.createElement("div"),Ms.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ms.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Uo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vv=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(e){Vv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ko[t]=ko[e]})});function lm(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ko.hasOwnProperty(e)&&ko[e]?(""+t).trim():t+"px"}function cm(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=lm(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var jv=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xc(e,t){if(t){if(jv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Qc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zc=null;function ad(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jc=null,bi=null,wi=null;function zh(e){if(e=gs(e)){if(typeof Jc!="function")throw Error(A(280));var t=e.stateNode;t&&(t=ml(t),Jc(e.stateNode,e.type,t))}}function um(e){bi?wi?wi.push(e):wi=[e]:bi=e}function dm(){if(bi){var e=bi,t=wi;if(wi=bi=null,zh(e),t)for(e=0;e<t.length;e++)zh(t[e])}}function hm(e,t){return e(t)}function pm(){}var Zl=!1;function fm(e,t,r){if(Zl)return e(t,r);Zl=!0;try{return hm(e,t,r)}finally{Zl=!1,(bi!==null||wi!==null)&&(pm(),dm())}}function Vo(e,t){var r=e.stateNode;if(r===null)return null;var n=ml(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(A(231,t,typeof r));return r}var eu=!1;if(Or)try{var to={};Object.defineProperty(to,"passive",{get:function(){eu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{eu=!1}function Hv(e,t,r,n,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(p){this.onError(p)}}var Co=!1,$a=null,Ea=!1,tu=null,Wv={onError:function(e){Co=!0,$a=e}};function Kv(e,t,r,n,i,o,s,l,a){Co=!1,$a=null,Hv.apply(Wv,arguments)}function Gv(e,t,r,n,i,o,s,l,a){if(Kv.apply(this,arguments),Co){if(Co){var u=$a;Co=!1,$a=null}else throw Error(A(198));Ea||(Ea=!0,tu=u)}}function Wn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function mm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ah(e){if(Wn(e)!==e)throw Error(A(188))}function qv(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(A(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Ah(i),e;if(o===n)return Ah(i),t;o=o.sibling}throw Error(A(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s)throw Error(A(189))}}if(r.alternate!==n)throw Error(A(190))}if(r.tag!==3)throw Error(A(188));return r.stateNode.current===r?e:t}function gm(e){return e=qv(e),e!==null?vm(e):null}function vm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vm(e);if(t!==null)return t;e=e.sibling}return null}var ym=Nt.unstable_scheduleCallback,Th=Nt.unstable_cancelCallback,Yv=Nt.unstable_shouldYield,Xv=Nt.unstable_requestPaint,Te=Nt.unstable_now,Qv=Nt.unstable_getCurrentPriorityLevel,ld=Nt.unstable_ImmediatePriority,bm=Nt.unstable_UserBlockingPriority,za=Nt.unstable_NormalPriority,Zv=Nt.unstable_LowPriority,wm=Nt.unstable_IdlePriority,dl=null,wr=null;function Jv(e){if(wr&&typeof wr.onCommitFiberRoot=="function")try{wr.onCommitFiberRoot(dl,e,void 0,(e.current.flags&128)===128)}catch{}}var ir=Math.clz32?Math.clz32:ry,ey=Math.log,ty=Math.LN2;function ry(e){return e>>>=0,e===0?32:31-(ey(e)/ty|0)|0}var Fs=64,Bs=4194304;function xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Aa(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?n=xo(l):(o&=s,o!==0&&(n=xo(o)))}else s=r&~i,s!==0?n=xo(s):o!==0&&(n=xo(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-ir(t),i=1<<r,n|=e[r],t&=~i;return n}function ny(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iy(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ir(o),l=1<<s,a=i[s];a===-1?(!(l&r)||l&n)&&(i[s]=ny(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function ru(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xm(){var e=Fs;return Fs<<=1,!(Fs&4194240)&&(Fs=64),e}function Jl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function fs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ir(t),e[t]=r}function oy(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-ir(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function cd(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ir(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ce=0;function _m(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var km,ud,Cm,Sm,$m,nu=!1,Us=[],Jr=null,en=null,tn=null,jo=new Map,Ho=new Map,Kr=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ph(e,t){switch(e){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(t.pointerId)}}function ro(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=gs(t),t!==null&&ud(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ay(e,t,r,n,i){switch(t){case"focusin":return Jr=ro(Jr,e,t,r,n,i),!0;case"dragenter":return en=ro(en,e,t,r,n,i),!0;case"mouseover":return tn=ro(tn,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return jo.set(o,ro(jo.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Ho.set(o,ro(Ho.get(o)||null,e,t,r,n,i)),!0}return!1}function Em(e){var t=An(e.target);if(t!==null){var r=Wn(t);if(r!==null){if(t=r.tag,t===13){if(t=mm(r),t!==null){e.blockedOn=t,$m(e.priority,function(){Cm(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function aa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=iu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Zc=n,r.target.dispatchEvent(n),Zc=null}else return t=gs(r),t!==null&&ud(t),e.blockedOn=r,!1;t.shift()}return!0}function Oh(e,t,r){aa(e)&&r.delete(t)}function ly(){nu=!1,Jr!==null&&aa(Jr)&&(Jr=null),en!==null&&aa(en)&&(en=null),tn!==null&&aa(tn)&&(tn=null),jo.forEach(Oh),Ho.forEach(Oh)}function no(e,t){e.blockedOn===t&&(e.blockedOn=null,nu||(nu=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,ly)))}function Wo(e){function t(i){return no(i,e)}if(0<Us.length){no(Us[0],e);for(var r=1;r<Us.length;r++){var n=Us[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Jr!==null&&no(Jr,e),en!==null&&no(en,e),tn!==null&&no(tn,e),jo.forEach(t),Ho.forEach(t),r=0;r<Kr.length;r++)n=Kr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Kr.length&&(r=Kr[0],r.blockedOn===null);)Em(r),r.blockedOn===null&&Kr.shift()}var xi=Dr.ReactCurrentBatchConfig,Ta=!0;function cy(e,t,r,n){var i=ce,o=xi.transition;xi.transition=null;try{ce=1,dd(e,t,r,n)}finally{ce=i,xi.transition=o}}function uy(e,t,r,n){var i=ce,o=xi.transition;xi.transition=null;try{ce=4,dd(e,t,r,n)}finally{ce=i,xi.transition=o}}function dd(e,t,r,n){if(Ta){var i=iu(e,t,r,n);if(i===null)cc(e,t,n,Pa,r),Ph(e,n);else if(ay(i,e,t,r,n))n.stopPropagation();else if(Ph(e,n),t&4&&-1<sy.indexOf(e)){for(;i!==null;){var o=gs(i);if(o!==null&&km(o),o=iu(e,t,r,n),o===null&&cc(e,t,n,Pa,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else cc(e,t,n,null,r)}}var Pa=null;function iu(e,t,r,n){if(Pa=null,e=ad(n),e=An(e),e!==null)if(t=Wn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=mm(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pa=e,null}function zm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qv()){case ld:return 1;case bm:return 4;case za:case Zv:return 16;case wm:return 536870912;default:return 16}default:return 16}}var Yr=null,hd=null,la=null;function Am(){if(la)return la;var e,t=hd,r=t.length,n,i="value"in Yr?Yr.value:Yr.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===i[o-n];n++);return la=i.slice(e,1<n?1-n:void 0)}function ca(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vs(){return!0}function Lh(){return!1}function Dt(e){function t(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Vs:Lh,this.isPropagationStopped=Lh,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),t}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=Dt(Vi),ms=ke({},Vi,{view:0,detail:0}),dy=Dt(ms),ec,tc,io,hl=ke({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(ec=e.screenX-io.screenX,tc=e.screenY-io.screenY):tc=ec=0,io=e),ec)},movementY:function(e){return"movementY"in e?e.movementY:tc}}),Ih=Dt(hl),hy=ke({},hl,{dataTransfer:0}),py=Dt(hy),fy=ke({},ms,{relatedTarget:0}),rc=Dt(fy),my=ke({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),gy=Dt(my),vy=ke({},Vi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yy=Dt(vy),by=ke({},Vi,{data:0}),Nh=Dt(by),wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ky(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_y[e])?!!t[e]:!1}function fd(){return ky}var Cy=ke({},ms,{key:function(e){if(e.key){var t=wy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ca(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(e){return e.type==="keypress"?ca(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ca(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sy=Dt(Cy),$y=ke({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=Dt($y),Ey=ke({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),zy=Dt(Ey),Ay=ke({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ty=Dt(Ay),Py=ke({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Oy=Dt(Py),Ly=[9,13,27,32],md=Or&&"CompositionEvent"in window,So=null;Or&&"documentMode"in document&&(So=document.documentMode);var Iy=Or&&"TextEvent"in window&&!So,Tm=Or&&(!md||So&&8<So&&11>=So),Dh=String.fromCharCode(32),Mh=!1;function Pm(e,t){switch(e){case"keyup":return Ly.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Om(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ai=!1;function Ny(e,t){switch(e){case"compositionend":return Om(t);case"keypress":return t.which!==32?null:(Mh=!0,Dh);case"textInput":return e=t.data,e===Dh&&Mh?null:e;default:return null}}function Ry(e,t){if(ai)return e==="compositionend"||!md&&Pm(e,t)?(e=Am(),la=hd=Yr=null,ai=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tm&&t.locale!=="ko"?null:t.data;default:return null}}var Dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dy[e.type]:t==="textarea"}function Lm(e,t,r,n){um(n),t=Oa(t,"onChange"),0<t.length&&(r=new pd("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var $o=null,Ko=null;function My(e){Hm(e,0)}function pl(e){var t=ui(e);if(nm(t))return e}function Fy(e,t){if(e==="change")return t}var Im=!1;if(Or){var nc;if(Or){var ic="oninput"in document;if(!ic){var Bh=document.createElement("div");Bh.setAttribute("oninput","return;"),ic=typeof Bh.oninput=="function"}nc=ic}else nc=!1;Im=nc&&(!document.documentMode||9<document.documentMode)}function Uh(){$o&&($o.detachEvent("onpropertychange",Nm),Ko=$o=null)}function Nm(e){if(e.propertyName==="value"&&pl(Ko)){var t=[];Lm(t,Ko,e,ad(e)),fm(My,t)}}function By(e,t,r){e==="focusin"?(Uh(),$o=t,Ko=r,$o.attachEvent("onpropertychange",Nm)):e==="focusout"&&Uh()}function Uy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(Ko)}function Vy(e,t){if(e==="click")return pl(t)}function jy(e,t){if(e==="input"||e==="change")return pl(t)}function Hy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sr=typeof Object.is=="function"?Object.is:Hy;function Go(e,t){if(sr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Bc.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function Vh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jh(e,t){var r=Vh(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Vh(r)}}function Rm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dm(){for(var e=window,t=Sa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Sa(e.document)}return t}function gd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wy(e){var t=Dm(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Rm(r.ownerDocument.documentElement,r)){if(n!==null&&gd(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=jh(r,o);var s=jh(r,n);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ky=Or&&"documentMode"in document&&11>=document.documentMode,li=null,ou=null,Eo=null,su=!1;function Hh(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;su||li==null||li!==Sa(n)||(n=li,"selectionStart"in n&&gd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Eo&&Go(Eo,n)||(Eo=n,n=Oa(ou,"onSelect"),0<n.length&&(t=new pd("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=li)))}function js(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ci={animationend:js("Animation","AnimationEnd"),animationiteration:js("Animation","AnimationIteration"),animationstart:js("Animation","AnimationStart"),transitionend:js("Transition","TransitionEnd")},oc={},Mm={};Or&&(Mm=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function fl(e){if(oc[e])return oc[e];if(!ci[e])return e;var t=ci[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Mm)return oc[e]=t[r];return e}var Fm=fl("animationend"),Bm=fl("animationiteration"),Um=fl("animationstart"),Vm=fl("transitionend"),jm=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){jm.set(e,t),Hn(t,[e])}for(var sc=0;sc<Wh.length;sc++){var ac=Wh[sc],Gy=ac.toLowerCase(),qy=ac[0].toUpperCase()+ac.slice(1);mn(Gy,"on"+qy)}mn(Fm,"onAnimationEnd");mn(Bm,"onAnimationIteration");mn(Um,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Vm,"onTransitionEnd");zi("onMouseEnter",["mouseout","mouseover"]);zi("onMouseLeave",["mouseout","mouseover"]);zi("onPointerEnter",["pointerout","pointerover"]);zi("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function Kh(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Gv(n,t,void 0,e),e.currentTarget=null}function Hm(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Kh(i,l,u),o=a}else for(s=0;s<n.length;s++){if(l=n[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Kh(i,l,u),o=a}}}if(Ea)throw e=tu,Ea=!1,tu=null,e}function pe(e,t){var r=t[du];r===void 0&&(r=t[du]=new Set);var n=e+"__bubble";r.has(n)||(Wm(t,e,2,!1),r.add(n))}function lc(e,t,r){var n=0;t&&(n|=4),Wm(r,e,n,t)}var Hs="_reactListening"+Math.random().toString(36).slice(2);function qo(e){if(!e[Hs]){e[Hs]=!0,Zf.forEach(function(r){r!=="selectionchange"&&(Yy.has(r)||lc(r,!1,e),lc(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hs]||(t[Hs]=!0,lc("selectionchange",!1,t))}}function Wm(e,t,r,n){switch(zm(t)){case 1:var i=cy;break;case 4:i=uy;break;default:i=dd}r=i.bind(null,t,r,e),i=void 0,!eu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function cc(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=An(l),s===null)return;if(a=s.tag,a===5||a===6){n=o=s;continue e}l=l.parentNode}}n=n.return}fm(function(){var u=o,p=ad(r),d=[];e:{var h=jm.get(e);if(h!==void 0){var g=pd,v=e;switch(e){case"keypress":if(ca(r)===0)break e;case"keydown":case"keyup":g=Sy;break;case"focusin":v="focus",g=rc;break;case"focusout":v="blur",g=rc;break;case"beforeblur":case"afterblur":g=rc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=zy;break;case Fm:case Bm:case Um:g=gy;break;case Vm:g=Ty;break;case"scroll":g=dy;break;case"wheel":g=Oy;break;case"copy":case"cut":case"paste":g=yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Rh}var y=(t&4)!==0,k=!y&&e==="scroll",b=y?h!==null?h+"Capture":null:h;y=[];for(var m=u,w;m!==null;){w=m;var x=w.stateNode;if(w.tag===5&&x!==null&&(w=x,b!==null&&(x=Vo(m,b),x!=null&&y.push(Yo(m,x,w)))),k)break;m=m.return}0<y.length&&(h=new g(h,v,null,r,p),d.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&r!==Zc&&(v=r.relatedTarget||r.fromElement)&&(An(v)||v[Lr]))break e;if((g||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=r.relatedTarget||r.toElement,g=u,v=v?An(v):null,v!==null&&(k=Wn(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Ih,x="onMouseLeave",b="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=Rh,x="onPointerLeave",b="onPointerEnter",m="pointer"),k=g==null?h:ui(g),w=v==null?h:ui(v),h=new y(x,m+"leave",g,r,p),h.target=k,h.relatedTarget=w,x=null,An(p)===u&&(y=new y(b,m+"enter",v,r,p),y.target=w,y.relatedTarget=k,x=y),k=x,g&&v)t:{for(y=g,b=v,m=0,w=y;w;w=Xn(w))m++;for(w=0,x=b;x;x=Xn(x))w++;for(;0<m-w;)y=Xn(y),m--;for(;0<w-m;)b=Xn(b),w--;for(;m--;){if(y===b||b!==null&&y===b.alternate)break t;y=Xn(y),b=Xn(b)}y=null}else y=null;g!==null&&Gh(d,h,g,y,!1),v!==null&&k!==null&&Gh(d,k,v,y,!0)}}e:{if(h=u?ui(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var _=Fy;else if(Fh(h))if(Im)_=jy;else{_=Uy;var C=By}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=Vy);if(_&&(_=_(e,u))){Lm(d,_,r,p);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Gc(h,"number",h.value)}switch(C=u?ui(u):window,e){case"focusin":(Fh(C)||C.contentEditable==="true")&&(li=C,ou=u,Eo=null);break;case"focusout":Eo=ou=li=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Hh(d,r,p);break;case"selectionchange":if(Ky)break;case"keydown":case"keyup":Hh(d,r,p)}var S;if(md)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else ai?Pm(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(Tm&&r.locale!=="ko"&&(ai||z!=="onCompositionStart"?z==="onCompositionEnd"&&ai&&(S=Am()):(Yr=p,hd="value"in Yr?Yr.value:Yr.textContent,ai=!0)),C=Oa(u,z),0<C.length&&(z=new Nh(z,e,null,r,p),d.push({event:z,listeners:C}),S?z.data=S:(S=Om(r),S!==null&&(z.data=S)))),(S=Iy?Ny(e,r):Ry(e,r))&&(u=Oa(u,"onBeforeInput"),0<u.length&&(p=new Nh("onBeforeInput","beforeinput",null,r,p),d.push({event:p,listeners:u}),p.data=S))}Hm(d,t)})}function Yo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Oa(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vo(e,r),o!=null&&n.unshift(Yo(e,o,i)),o=Vo(e,t),o!=null&&n.push(Yo(e,o,i))),e=e.return}return n}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gh(e,t,r,n,i){for(var o=t._reactName,s=[];r!==null&&r!==n;){var l=r,a=l.alternate,u=l.stateNode;if(a!==null&&a===n)break;l.tag===5&&u!==null&&(l=u,i?(a=Vo(r,o),a!=null&&s.unshift(Yo(r,a,l))):i||(a=Vo(r,o),a!=null&&s.push(Yo(r,a,l)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var Xy=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function qh(e){return(typeof e=="string"?e:""+e).replace(Xy,`
`).replace(Qy,"")}function Ws(e,t,r){if(t=qh(t),qh(e)!==t&&r)throw Error(A(425))}function La(){}var au=null,lu=null;function cu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uu=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(e){return Yh.resolve(null).then(e).catch(eb)}:uu;function eb(e){setTimeout(function(){throw e})}function uc(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Wo(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Wo(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ji=Math.random().toString(36).slice(2),yr="__reactFiber$"+ji,Xo="__reactProps$"+ji,Lr="__reactContainer$"+ji,du="__reactEvents$"+ji,tb="__reactListeners$"+ji,rb="__reactHandles$"+ji;function An(e){var t=e[yr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Lr]||r[yr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Xh(e);e!==null;){if(r=e[yr])return r;e=Xh(e)}return t}e=r,r=e.parentNode}return null}function gs(e){return e=e[yr]||e[Lr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ui(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function ml(e){return e[Xo]||null}var hu=[],di=-1;function gn(e){return{current:e}}function fe(e){0>di||(e.current=hu[di],hu[di]=null,di--)}function he(e,t){di++,hu[di]=e.current,e.current=t}var un={},st=gn(un),gt=gn(!1),Rn=un;function Ai(e,t){var r=e.type.contextTypes;if(!r)return un;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function vt(e){return e=e.childContextTypes,e!=null}function Ia(){fe(gt),fe(st)}function Qh(e,t,r){if(st.current!==un)throw Error(A(168));he(st,t),he(gt,r)}function Km(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(A(108,Bv(e)||"Unknown",i));return ke({},r,n)}function Na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,Rn=st.current,he(st,e),he(gt,gt.current),!0}function Zh(e,t,r){var n=e.stateNode;if(!n)throw Error(A(169));r?(e=Km(e,t,Rn),n.__reactInternalMemoizedMergedChildContext=e,fe(gt),fe(st),he(st,e)):fe(gt),he(gt,r)}var Er=null,gl=!1,dc=!1;function Gm(e){Er===null?Er=[e]:Er.push(e)}function nb(e){gl=!0,Gm(e)}function vn(){if(!dc&&Er!==null){dc=!0;var e=0,t=ce;try{var r=Er;for(ce=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Er=null,gl=!1}catch(i){throw Er!==null&&(Er=Er.slice(e+1)),ym(ld,vn),i}finally{ce=t,dc=!1}}return null}var hi=[],pi=0,Ra=null,Da=0,Bt=[],Ut=0,Dn=null,zr=1,Ar="";function Sn(e,t){hi[pi++]=Da,hi[pi++]=Ra,Ra=e,Da=t}function qm(e,t,r){Bt[Ut++]=zr,Bt[Ut++]=Ar,Bt[Ut++]=Dn,Dn=e;var n=zr;e=Ar;var i=32-ir(n)-1;n&=~(1<<i),r+=1;var o=32-ir(t)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,zr=1<<32-ir(t)+i|r<<i|n,Ar=o+e}else zr=1<<o|r<<i|n,Ar=e}function vd(e){e.return!==null&&(Sn(e,1),qm(e,1,0))}function yd(e){for(;e===Ra;)Ra=hi[--pi],hi[pi]=null,Da=hi[--pi],hi[pi]=null;for(;e===Dn;)Dn=Bt[--Ut],Bt[Ut]=null,Ar=Bt[--Ut],Bt[Ut]=null,zr=Bt[--Ut],Bt[Ut]=null}var Ot=null,Tt=null,ve=!1,nr=null;function Ym(e,t){var r=Vt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Jh(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ot=e,Tt=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ot=e,Tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Dn!==null?{id:zr,overflow:Ar}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Vt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ot=e,Tt=null,!0):!1;default:return!1}}function pu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fu(e){if(ve){var t=Tt;if(t){var r=t;if(!Jh(e,t)){if(pu(e))throw Error(A(418));t=rn(r.nextSibling);var n=Ot;t&&Jh(e,t)?Ym(n,r):(e.flags=e.flags&-4097|2,ve=!1,Ot=e)}}else{if(pu(e))throw Error(A(418));e.flags=e.flags&-4097|2,ve=!1,Ot=e}}}function ep(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ot=e}function Ks(e){if(e!==Ot)return!1;if(!ve)return ep(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!cu(e.type,e.memoizedProps)),t&&(t=Tt)){if(pu(e))throw Xm(),Error(A(418));for(;t;)Ym(e,t),t=rn(t.nextSibling)}if(ep(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Tt=rn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Tt=null}}else Tt=Ot?rn(e.stateNode.nextSibling):null;return!0}function Xm(){for(var e=Tt;e;)e=rn(e.nextSibling)}function Ti(){Tt=Ot=null,ve=!1}function bd(e){nr===null?nr=[e]:nr.push(e)}var ib=Dr.ReactCurrentBatchConfig;function tr(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Ma=gn(null),Fa=null,fi=null,wd=null;function xd(){wd=fi=Fa=null}function _d(e){var t=Ma.current;fe(Ma),e._currentValue=t}function mu(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function _i(e,t){Fa=e,wd=fi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(mt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(wd!==e)if(e={context:e,memoizedValue:t,next:null},fi===null){if(Fa===null)throw Error(A(308));fi=e,Fa.dependencies={lanes:0,firstContext:e}}else fi=fi.next=e;return t}var Tn=null;function kd(e){Tn===null?Tn=[e]:Tn.push(e)}function Qm(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,kd(t)):(r.next=i.next,i.next=r),t.interleaved=r,Ir(e,n)}function Ir(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Wr=!1;function Cd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,J&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Ir(e,r)}return i=n.interleaved,i===null?(t.next=t,kd(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ir(e,r)}function ua(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,cd(e,r)}}function tp(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ba(e,t,r,n){var i=e.updateQueue;Wr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=a))}if(o!==null){var d=i.baseState;s=0,p=u=a=null,l=o;do{var h=l.lane,g=l.eventTime;if((n&h)===h){p!==null&&(p=p.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,y=l;switch(h=t,g=r,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(g,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,d,h):v,h==null)break e;d=ke({},d,h);break e;case 2:Wr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=g,a=d):p=p.next=g,s|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(p===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Fn|=s,e.lanes=s,e.memoizedState=d}}function rp(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(A(191,i));i.call(n)}}}var Jm=new Qf.Component().refs;function gu(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ke({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var vl={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ct(),i=sn(e),o=Tr(n,i);o.payload=t,r!=null&&(o.callback=r),t=nn(e,o,i),t!==null&&(or(t,e,i,n),ua(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ct(),i=sn(e),o=Tr(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=nn(e,o,i),t!==null&&(or(t,e,i,n),ua(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ct(),n=sn(e),i=Tr(r,n);i.tag=2,t!=null&&(i.callback=t),t=nn(e,i,n),t!==null&&(or(t,e,n,r),ua(t,e,n))}};function np(e,t,r,n,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!Go(r,n)||!Go(i,o):!0}function e0(e,t,r){var n=!1,i=un,o=t.contextType;return typeof o=="object"&&o!==null?o=Ht(o):(i=vt(t)?Rn:st.current,n=t.contextTypes,o=(n=n!=null)?Ai(e,i):un),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vl,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ip(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&vl.enqueueReplaceState(t,t.state,null)}function vu(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=Jm,Cd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ht(o):(o=vt(t)?Rn:st.current,i.context=Ai(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(gu(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&vl.enqueueReplaceState(i,i.state,null),Ba(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function oo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(A(309));var n=r.stateNode}if(!n)throw Error(A(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===Jm&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!r._owner)throw Error(A(290,e))}return e}function Gs(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function op(e){var t=e._init;return t(e._payload)}function t0(e){function t(b,m){if(e){var w=b.deletions;w===null?(b.deletions=[m],b.flags|=16):w.push(m)}}function r(b,m){if(!e)return null;for(;m!==null;)t(b,m),m=m.sibling;return null}function n(b,m){for(b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function i(b,m){return b=an(b,m),b.index=0,b.sibling=null,b}function o(b,m,w){return b.index=w,e?(w=b.alternate,w!==null?(w=w.index,w<m?(b.flags|=2,m):w):(b.flags|=2,m)):(b.flags|=1048576,m)}function s(b){return e&&b.alternate===null&&(b.flags|=2),b}function l(b,m,w,x){return m===null||m.tag!==6?(m=yc(w,b.mode,x),m.return=b,m):(m=i(m,w),m.return=b,m)}function a(b,m,w,x){var _=w.type;return _===si?p(b,m,w.props.children,x,w.key):m!==null&&(m.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Hr&&op(_)===m.type)?(x=i(m,w.props),x.ref=oo(b,m,w),x.return=b,x):(x=ga(w.type,w.key,w.props,null,b.mode,x),x.ref=oo(b,m,w),x.return=b,x)}function u(b,m,w,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=bc(w,b.mode,x),m.return=b,m):(m=i(m,w.children||[]),m.return=b,m)}function p(b,m,w,x,_){return m===null||m.tag!==7?(m=Nn(w,b.mode,x,_),m.return=b,m):(m=i(m,w),m.return=b,m)}function d(b,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=yc(""+m,b.mode,w),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Rs:return w=ga(m.type,m.key,m.props,null,b.mode,w),w.ref=oo(b,null,m),w.return=b,w;case oi:return m=bc(m,b.mode,w),m.return=b,m;case Hr:var x=m._init;return d(b,x(m._payload),w)}if(wo(m)||eo(m))return m=Nn(m,b.mode,w,null),m.return=b,m;Gs(b,m)}return null}function h(b,m,w,x){var _=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return _!==null?null:l(b,m,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Rs:return w.key===_?a(b,m,w,x):null;case oi:return w.key===_?u(b,m,w,x):null;case Hr:return _=w._init,h(b,m,_(w._payload),x)}if(wo(w)||eo(w))return _!==null?null:p(b,m,w,x,null);Gs(b,w)}return null}function g(b,m,w,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return b=b.get(w)||null,l(m,b,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Rs:return b=b.get(x.key===null?w:x.key)||null,a(m,b,x,_);case oi:return b=b.get(x.key===null?w:x.key)||null,u(m,b,x,_);case Hr:var C=x._init;return g(b,m,w,C(x._payload),_)}if(wo(x)||eo(x))return b=b.get(w)||null,p(m,b,x,_,null);Gs(m,x)}return null}function v(b,m,w,x){for(var _=null,C=null,S=m,z=m=0,P=null;S!==null&&z<w.length;z++){S.index>z?(P=S,S=null):P=S.sibling;var $=h(b,S,w[z],x);if($===null){S===null&&(S=P);break}e&&S&&$.alternate===null&&t(b,S),m=o($,m,z),C===null?_=$:C.sibling=$,C=$,S=P}if(z===w.length)return r(b,S),ve&&Sn(b,z),_;if(S===null){for(;z<w.length;z++)S=d(b,w[z],x),S!==null&&(m=o(S,m,z),C===null?_=S:C.sibling=S,C=S);return ve&&Sn(b,z),_}for(S=n(b,S);z<w.length;z++)P=g(S,b,z,w[z],x),P!==null&&(e&&P.alternate!==null&&S.delete(P.key===null?z:P.key),m=o(P,m,z),C===null?_=P:C.sibling=P,C=P);return e&&S.forEach(function(W){return t(b,W)}),ve&&Sn(b,z),_}function y(b,m,w,x){var _=eo(w);if(typeof _!="function")throw Error(A(150));if(w=_.call(w),w==null)throw Error(A(151));for(var C=_=null,S=m,z=m=0,P=null,$=w.next();S!==null&&!$.done;z++,$=w.next()){S.index>z?(P=S,S=null):P=S.sibling;var W=h(b,S,$.value,x);if(W===null){S===null&&(S=P);break}e&&S&&W.alternate===null&&t(b,S),m=o(W,m,z),C===null?_=W:C.sibling=W,C=W,S=P}if($.done)return r(b,S),ve&&Sn(b,z),_;if(S===null){for(;!$.done;z++,$=w.next())$=d(b,$.value,x),$!==null&&(m=o($,m,z),C===null?_=$:C.sibling=$,C=$);return ve&&Sn(b,z),_}for(S=n(b,S);!$.done;z++,$=w.next())$=g(S,b,z,$.value,x),$!==null&&(e&&$.alternate!==null&&S.delete($.key===null?z:$.key),m=o($,m,z),C===null?_=$:C.sibling=$,C=$);return e&&S.forEach(function(me){return t(b,me)}),ve&&Sn(b,z),_}function k(b,m,w,x){if(typeof w=="object"&&w!==null&&w.type===si&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Rs:e:{for(var _=w.key,C=m;C!==null;){if(C.key===_){if(_=w.type,_===si){if(C.tag===7){r(b,C.sibling),m=i(C,w.props.children),m.return=b,b=m;break e}}else if(C.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Hr&&op(_)===C.type){r(b,C.sibling),m=i(C,w.props),m.ref=oo(b,C,w),m.return=b,b=m;break e}r(b,C);break}else t(b,C);C=C.sibling}w.type===si?(m=Nn(w.props.children,b.mode,x,w.key),m.return=b,b=m):(x=ga(w.type,w.key,w.props,null,b.mode,x),x.ref=oo(b,m,w),x.return=b,b=x)}return s(b);case oi:e:{for(C=w.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){r(b,m.sibling),m=i(m,w.children||[]),m.return=b,b=m;break e}else{r(b,m);break}else t(b,m);m=m.sibling}m=bc(w,b.mode,x),m.return=b,b=m}return s(b);case Hr:return C=w._init,k(b,m,C(w._payload),x)}if(wo(w))return v(b,m,w,x);if(eo(w))return y(b,m,w,x);Gs(b,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(r(b,m.sibling),m=i(m,w),m.return=b,b=m):(r(b,m),m=yc(w,b.mode,x),m.return=b,b=m),s(b)):r(b,m)}return k}var Pi=t0(!0),r0=t0(!1),vs={},xr=gn(vs),Qo=gn(vs),Zo=gn(vs);function Pn(e){if(e===vs)throw Error(A(174));return e}function Sd(e,t){switch(he(Zo,t),he(Qo,e),he(xr,vs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yc(t,e)}fe(xr),he(xr,t)}function Oi(){fe(xr),fe(Qo),fe(Zo)}function n0(e){Pn(Zo.current);var t=Pn(xr.current),r=Yc(t,e.type);t!==r&&(he(Qo,e),he(xr,r))}function $d(e){Qo.current===e&&(fe(xr),fe(Qo))}var xe=gn(0);function Ua(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hc=[];function Ed(){for(var e=0;e<hc.length;e++)hc[e]._workInProgressVersionPrimary=null;hc.length=0}var da=Dr.ReactCurrentDispatcher,pc=Dr.ReactCurrentBatchConfig,Mn=0,_e=null,Me=null,Ke=null,Va=!1,zo=!1,Jo=0,ob=0;function rt(){throw Error(A(321))}function zd(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!sr(e[r],t[r]))return!1;return!0}function Ad(e,t,r,n,i,o){if(Mn=o,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,da.current=e===null||e.memoizedState===null?cb:ub,e=r(n,i),zo){o=0;do{if(zo=!1,Jo=0,25<=o)throw Error(A(301));o+=1,Ke=Me=null,t.updateQueue=null,da.current=db,e=r(n,i)}while(zo)}if(da.current=ja,t=Me!==null&&Me.next!==null,Mn=0,Ke=Me=_e=null,Va=!1,t)throw Error(A(300));return e}function Td(){var e=Jo!==0;return Jo=0,e}function fr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?_e.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Wt(){if(Me===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ke===null?_e.memoizedState:Ke.next;if(t!==null)Ke=t,Me=e;else{if(e===null)throw Error(A(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ke===null?_e.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function es(e,t){return typeof t=="function"?t(e):t}function fc(e){var t=Wt(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var n=Me,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=s=null,a=null,u=o;do{var p=u.lane;if((Mn&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,s=n):a=a.next=d,_e.lanes|=p,Fn|=p}u=u.next}while(u!==null&&u!==o);a===null?s=n:a.next=l,sr(n,t.memoizedState)||(mt=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=a,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,_e.lanes|=o,Fn|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function mc(e){var t=Wt(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);sr(o,t.memoizedState)||(mt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function i0(){}function o0(e,t){var r=_e,n=Wt(),i=t(),o=!sr(n.memoizedState,i);if(o&&(n.memoizedState=i,mt=!0),n=n.queue,Pd(l0.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,ts(9,a0.bind(null,r,n,i,t),void 0,null),Ge===null)throw Error(A(349));Mn&30||s0(r,t,i)}return i}function s0(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function a0(e,t,r,n){t.value=r,t.getSnapshot=n,c0(t)&&u0(e)}function l0(e,t,r){return r(function(){c0(t)&&u0(e)})}function c0(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!sr(e,r)}catch{return!0}}function u0(e){var t=Ir(e,1);t!==null&&or(t,e,1,-1)}function sp(e){var t=fr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:e},t.queue=e,e=e.dispatch=lb.bind(null,_e,e),[t.memoizedState,e]}function ts(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function d0(){return Wt().memoizedState}function ha(e,t,r,n){var i=fr();_e.flags|=e,i.memoizedState=ts(1|t,r,void 0,n===void 0?null:n)}function yl(e,t,r,n){var i=Wt();n=n===void 0?null:n;var o=void 0;if(Me!==null){var s=Me.memoizedState;if(o=s.destroy,n!==null&&zd(n,s.deps)){i.memoizedState=ts(t,r,o,n);return}}_e.flags|=e,i.memoizedState=ts(1|t,r,o,n)}function ap(e,t){return ha(8390656,8,e,t)}function Pd(e,t){return yl(2048,8,e,t)}function h0(e,t){return yl(4,2,e,t)}function p0(e,t){return yl(4,4,e,t)}function f0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function m0(e,t,r){return r=r!=null?r.concat([e]):null,yl(4,4,f0.bind(null,t,e),r)}function Od(){}function g0(e,t){var r=Wt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&zd(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function v0(e,t){var r=Wt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&zd(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function y0(e,t,r){return Mn&21?(sr(r,t)||(r=xm(),_e.lanes|=r,Fn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,mt=!0),e.memoizedState=r)}function sb(e,t){var r=ce;ce=r!==0&&4>r?r:4,e(!0);var n=pc.transition;pc.transition={};try{e(!1),t()}finally{ce=r,pc.transition=n}}function b0(){return Wt().memoizedState}function ab(e,t,r){var n=sn(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},w0(e))x0(t,r);else if(r=Qm(e,t,r,n),r!==null){var i=ct();or(r,e,n,i),_0(r,t,n)}}function lb(e,t,r){var n=sn(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(w0(e))x0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,r);if(i.hasEagerState=!0,i.eagerState=l,sr(l,s)){var a=t.interleaved;a===null?(i.next=i,kd(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}r=Qm(e,t,i,n),r!==null&&(i=ct(),or(r,e,n,i),_0(r,t,n))}}function w0(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function x0(e,t){zo=Va=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function _0(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,cd(e,r)}}var ja={readContext:Ht,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},cb={readContext:Ht,useCallback:function(e,t){return fr().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:ap,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ha(4194308,4,f0.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ha(4194308,4,e,t)},useInsertionEffect:function(e,t){return ha(4,2,e,t)},useMemo:function(e,t){var r=fr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=fr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ab.bind(null,_e,e),[n.memoizedState,e]},useRef:function(e){var t=fr();return e={current:e},t.memoizedState=e},useState:sp,useDebugValue:Od,useDeferredValue:function(e){return fr().memoizedState=e},useTransition:function(){var e=sp(!1),t=e[0];return e=sb.bind(null,e[1]),fr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=_e,i=fr();if(ve){if(r===void 0)throw Error(A(407));r=r()}else{if(r=t(),Ge===null)throw Error(A(349));Mn&30||s0(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,ap(l0.bind(null,n,o,e),[e]),n.flags|=2048,ts(9,a0.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=fr(),t=Ge.identifierPrefix;if(ve){var r=Ar,n=zr;r=(n&~(1<<32-ir(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Jo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=ob++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ub={readContext:Ht,useCallback:g0,useContext:Ht,useEffect:Pd,useImperativeHandle:m0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:fc,useRef:d0,useState:function(){return fc(es)},useDebugValue:Od,useDeferredValue:function(e){var t=Wt();return y0(t,Me.memoizedState,e)},useTransition:function(){var e=fc(es)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:i0,useSyncExternalStore:o0,useId:b0,unstable_isNewReconciler:!1},db={readContext:Ht,useCallback:g0,useContext:Ht,useEffect:Pd,useImperativeHandle:m0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:mc,useRef:d0,useState:function(){return mc(es)},useDebugValue:Od,useDeferredValue:function(e){var t=Wt();return Me===null?t.memoizedState=e:y0(t,Me.memoizedState,e)},useTransition:function(){var e=mc(es)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:i0,useSyncExternalStore:o0,useId:b0,unstable_isNewReconciler:!1};function Li(e,t){try{var r="",n=t;do r+=Fv(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function gc(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function yu(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var hb=typeof WeakMap=="function"?WeakMap:Map;function k0(e,t,r){r=Tr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Wa||(Wa=!0,zu=n),yu(e,t)},r}function C0(e,t,r){r=Tr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){yu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){yu(e,t),typeof n!="function"&&(on===null?on=new Set([this]):on.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function lp(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new hb;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=$b.bind(null,e,t,r),t.then(e,e))}function cp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function up(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Tr(-1,1),t.tag=2,nn(r,t,1))),r.lanes|=1),e)}var pb=Dr.ReactCurrentOwner,mt=!1;function lt(e,t,r,n){t.child=e===null?r0(t,null,r,n):Pi(t,e.child,r,n)}function dp(e,t,r,n,i){r=r.render;var o=t.ref;return _i(t,i),n=Ad(e,t,r,n,o,i),r=Td(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nr(e,t,i)):(ve&&r&&vd(t),t.flags|=1,lt(e,t,n,i),t.child)}function hp(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Bd(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,S0(e,t,o,n,i)):(e=ga(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:Go,r(s,n)&&e.ref===t.ref)return Nr(e,t,i)}return t.flags|=1,e=an(o,n),e.ref=t.ref,e.return=t,t.child=e}function S0(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(Go(o,n)&&e.ref===t.ref)if(mt=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(mt=!0);else return t.lanes=e.lanes,Nr(e,t,i)}return bu(e,t,r,n,i)}function $0(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(gi,Et),Et|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(gi,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,he(gi,Et),Et|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,he(gi,Et),Et|=n;return lt(e,t,i,r),t.child}function E0(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function bu(e,t,r,n,i){var o=vt(r)?Rn:st.current;return o=Ai(t,o),_i(t,i),r=Ad(e,t,r,n,o,i),n=Td(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nr(e,t,i)):(ve&&n&&vd(t),t.flags|=1,lt(e,t,r,i),t.child)}function pp(e,t,r,n,i){if(vt(r)){var o=!0;Na(t)}else o=!1;if(_i(t,i),t.stateNode===null)pa(e,t),e0(t,r,n),vu(t,r,n,i),n=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=vt(r)?Rn:st.current,u=Ai(t,u));var p=r.getDerivedStateFromProps,d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||a!==u)&&ip(t,s,n,u),Wr=!1;var h=t.memoizedState;s.state=h,Ba(t,n,s,i),a=t.memoizedState,l!==n||h!==a||gt.current||Wr?(typeof p=="function"&&(gu(t,r,p,n),a=t.memoizedState),(l=Wr||np(t,r,l,n,h,a,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=a),s.props=n,s.state=a,s.context=u,n=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Zm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tr(t.type,l),s.props=u,d=t.pendingProps,h=s.context,a=r.contextType,typeof a=="object"&&a!==null?a=Ht(a):(a=vt(r)?Rn:st.current,a=Ai(t,a));var g=r.getDerivedStateFromProps;(p=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||h!==a)&&ip(t,s,n,a),Wr=!1,h=t.memoizedState,s.state=h,Ba(t,n,s,i);var v=t.memoizedState;l!==d||h!==v||gt.current||Wr?(typeof g=="function"&&(gu(t,r,g,n),v=t.memoizedState),(u=Wr||np(t,r,u,n,h,v,a)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,v,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),s.props=n,s.state=v,s.context=a,n=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return wu(e,t,r,n,o,i)}function wu(e,t,r,n,i,o){E0(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return i&&Zh(t,r,!1),Nr(e,t,o);n=t.stateNode,pb.current=t;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=Pi(t,e.child,null,o),t.child=Pi(t,null,l,o)):lt(e,t,l,o),t.memoizedState=n.state,i&&Zh(t,r,!0),t.child}function z0(e){var t=e.stateNode;t.pendingContext?Qh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qh(e,t.context,!1),Sd(e,t.containerInfo)}function fp(e,t,r,n,i){return Ti(),bd(i),t.flags|=256,lt(e,t,r,n),t.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function _u(e){return{baseLanes:e,cachePool:null,transitions:null}}function A0(e,t,r){var n=t.pendingProps,i=xe.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(xe,i&1),e===null)return fu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,o?(n=t.mode,o=t.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=xl(s,n,0,null),e=Nn(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=_u(r),t.memoizedState=xu,e):Ld(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return fb(e,t,s,n,l,i,r);if(o){o=n.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:n.children};return!(s&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=a,t.deletions=null):(n=an(i,a),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=an(l,o):(o=Nn(o,s,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,s=e.child.memoizedState,s=s===null?_u(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,t.memoizedState=xu,n}return o=e.child,e=o.sibling,n=an(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Ld(e,t){return t=xl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qs(e,t,r,n){return n!==null&&bd(n),Pi(t,e.child,null,r),e=Ld(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fb(e,t,r,n,i,o,s){if(r)return t.flags&256?(t.flags&=-257,n=gc(Error(A(422))),qs(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=xl({mode:"visible",children:n.children},i,0,null),o=Nn(o,i,s,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Pi(t,e.child,null,s),t.child.memoizedState=_u(s),t.memoizedState=xu,o);if(!(t.mode&1))return qs(e,t,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(A(419)),n=gc(o,n,void 0),qs(e,t,s,n)}if(l=(s&e.childLanes)!==0,mt||l){if(n=Ge,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ir(e,i),or(n,e,i,-1))}return Fd(),n=gc(Error(A(421))),qs(e,t,s,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Eb.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Tt=rn(i.nextSibling),Ot=t,ve=!0,nr=null,e!==null&&(Bt[Ut++]=zr,Bt[Ut++]=Ar,Bt[Ut++]=Dn,zr=e.id,Ar=e.overflow,Dn=t),t=Ld(t,n.children),t.flags|=4096,t)}function mp(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),mu(e.return,t,r)}function vc(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function T0(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(lt(e,t,n.children,r),n=xe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mp(e,r,t);else if(e.tag===19)mp(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(he(xe,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Ua(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),vc(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ua(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}vc(t,!0,r,null,o);break;case"together":vc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,r=an(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=an(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function mb(e,t,r){switch(t.tag){case 3:z0(t),Ti();break;case 5:n0(t);break;case 1:vt(t.type)&&Na(t);break;case 4:Sd(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;he(Ma,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(he(xe,xe.current&1),t.flags|=128,null):r&t.child.childLanes?A0(e,t,r):(he(xe,xe.current&1),e=Nr(e,t,r),e!==null?e.sibling:null);he(xe,xe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return T0(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(xe,xe.current),n)break;return null;case 22:case 23:return t.lanes=0,$0(e,t,r)}return Nr(e,t,r)}var P0,ku,O0,L0;P0=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ku=function(){};O0=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Pn(xr.current);var o=null;switch(r){case"input":i=Wc(e,i),n=Wc(e,n),o=[];break;case"select":i=ke({},i,{value:void 0}),n=ke({},n,{value:void 0}),o=[];break;case"textarea":i=qc(e,i),n=qc(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=La)}Xc(r,n);var s;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var a=n[u];if(l=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(r||(r={}),r[s]=a[s])}else r||(o||(o=[]),o.push(u,r)),r=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&pe("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};L0=function(e,t,r,n){r!==n&&(t.flags|=4)};function so(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function gb(e,t,r){var n=t.pendingProps;switch(yd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return vt(t.type)&&Ia(),nt(t),null;case 3:return n=t.stateNode,Oi(),fe(gt),fe(st),Ed(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ks(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nr!==null&&(Pu(nr),nr=null))),ku(e,t),nt(t),null;case 5:$d(t);var i=Pn(Zo.current);if(r=t.type,e!==null&&t.stateNode!=null)O0(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(A(166));return nt(t),null}if(e=Pn(xr.current),Ks(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[yr]=t,n[Xo]=o,e=(t.mode&1)!==0,r){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(i=0;i<_o.length;i++)pe(_o[i],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":Ch(n,o),pe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},pe("invalid",n);break;case"textarea":$h(n,o),pe("invalid",n)}Xc(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ws(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ws(n.textContent,l,e),i=["children",""+l]):Bo.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&pe("scroll",n)}switch(r){case"input":Ds(n),Sh(n,o,!0);break;case"textarea":Ds(n),Eh(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=La)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sm(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[yr]=t,e[Xo]=n,P0(e,t,!1,!1),t.stateNode=e;e:{switch(s=Qc(r,n),r){case"dialog":pe("cancel",e),pe("close",e),i=n;break;case"iframe":case"object":case"embed":pe("load",e),i=n;break;case"video":case"audio":for(i=0;i<_o.length;i++)pe(_o[i],e);i=n;break;case"source":pe("error",e),i=n;break;case"img":case"image":case"link":pe("error",e),pe("load",e),i=n;break;case"details":pe("toggle",e),i=n;break;case"input":Ch(e,n),i=Wc(e,n),pe("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=ke({},n,{value:void 0}),pe("invalid",e);break;case"textarea":$h(e,n),i=qc(e,n),pe("invalid",e);break;default:i=n}Xc(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?cm(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&am(e,a)):o==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&Uo(e,a):typeof a=="number"&&Uo(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bo.hasOwnProperty(o)?a!=null&&o==="onScroll"&&pe("scroll",e):a!=null&&nd(e,o,a,s))}switch(r){case"input":Ds(e),Sh(e,n,!1);break;case"textarea":Ds(e),Eh(e);break;case"option":n.value!=null&&e.setAttribute("value",""+cn(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?yi(e,!!n.multiple,o,!1):n.defaultValue!=null&&yi(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=La)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)L0(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(A(166));if(r=Pn(Zo.current),Pn(xr.current),Ks(t)){if(n=t.stateNode,r=t.memoizedProps,n[yr]=t,(o=n.nodeValue!==r)&&(e=Ot,e!==null))switch(e.tag){case 3:Ws(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ws(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[yr]=t,t.stateNode=n}return nt(t),null;case 13:if(fe(xe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&Tt!==null&&t.mode&1&&!(t.flags&128))Xm(),Ti(),t.flags|=98560,o=!1;else if(o=Ks(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[yr]=t}else Ti(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),o=!1}else nr!==null&&(Pu(nr),nr=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||xe.current&1?Fe===0&&(Fe=3):Fd())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return Oi(),ku(e,t),e===null&&qo(t.stateNode.containerInfo),nt(t),null;case 10:return _d(t.type._context),nt(t),null;case 17:return vt(t.type)&&Ia(),nt(t),null;case 19:if(fe(xe),o=t.memoizedState,o===null)return nt(t),null;if(n=(t.flags&128)!==0,s=o.rendering,s===null)if(n)so(o,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ua(e),s!==null){for(t.flags|=128,so(o,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return he(xe,xe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>Ii&&(t.flags|=128,n=!0,so(o,!1),t.lanes=4194304)}else{if(!n)if(e=Ua(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),so(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ve)return nt(t),null}else 2*Te()-o.renderingStartTime>Ii&&r!==1073741824&&(t.flags|=128,n=!0,so(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(r=o.last,r!==null?r.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,r=xe.current,he(xe,n?r&1|2:r&1),t):(nt(t),null);case 22:case 23:return Md(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Et&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function vb(e,t){switch(yd(t),t.tag){case 1:return vt(t.type)&&Ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Oi(),fe(gt),fe(st),Ed(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $d(t),null;case 13:if(fe(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(xe),null;case 4:return Oi(),null;case 10:return _d(t.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var Ys=!1,ot=!1,yb=typeof WeakSet=="function"?WeakSet:Set,I=null;function mi(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){$e(e,t,n)}else r.current=null}function Cu(e,t,r){try{r()}catch(n){$e(e,t,n)}}var gp=!1;function bb(e,t){if(au=Ta,e=Dm(),gd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,l=-1,a=-1,u=0,p=0,d=e,h=null;t:for(;;){for(var g;d!==r||i!==0&&d.nodeType!==3||(l=s+i),d!==o||n!==0&&d.nodeType!==3||(a=s+n),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===e)break t;if(h===r&&++u===i&&(l=s),h===o&&++p===n&&(a=s),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}r=l===-1||a===-1?null:{start:l,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(lu={focusedElem:e,selectionRange:r},Ta=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,k=v.memoizedState,b=t.stateNode,m=b.getSnapshotBeforeUpdate(t.elementType===t.type?y:tr(t.type,y),k);b.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(x){$e(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return v=gp,gp=!1,v}function Ao(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Cu(t,r,o)}i=i.next}while(i!==n)}}function bl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Su(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function I0(e){var t=e.alternate;t!==null&&(e.alternate=null,I0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yr],delete t[Xo],delete t[du],delete t[tb],delete t[rb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function N0(e){return e.tag===5||e.tag===3||e.tag===4}function vp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||N0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $u(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=La));else if(n!==4&&(e=e.child,e!==null))for($u(e,t,r),e=e.sibling;e!==null;)$u(e,t,r),e=e.sibling}function Eu(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Eu(e,t,r),e=e.sibling;e!==null;)Eu(e,t,r),e=e.sibling}var Ye=null,rr=!1;function jr(e,t,r){for(r=r.child;r!==null;)R0(e,t,r),r=r.sibling}function R0(e,t,r){if(wr&&typeof wr.onCommitFiberUnmount=="function")try{wr.onCommitFiberUnmount(dl,r)}catch{}switch(r.tag){case 5:ot||mi(r,t);case 6:var n=Ye,i=rr;Ye=null,jr(e,t,r),Ye=n,rr=i,Ye!==null&&(rr?(e=Ye,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ye.removeChild(r.stateNode));break;case 18:Ye!==null&&(rr?(e=Ye,r=r.stateNode,e.nodeType===8?uc(e.parentNode,r):e.nodeType===1&&uc(e,r),Wo(e)):uc(Ye,r.stateNode));break;case 4:n=Ye,i=rr,Ye=r.stateNode.containerInfo,rr=!0,jr(e,t,r),Ye=n,rr=i;break;case 0:case 11:case 14:case 15:if(!ot&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Cu(r,t,s),i=i.next}while(i!==n)}jr(e,t,r);break;case 1:if(!ot&&(mi(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){$e(r,t,l)}jr(e,t,r);break;case 21:jr(e,t,r);break;case 22:r.mode&1?(ot=(n=ot)||r.memoizedState!==null,jr(e,t,r),ot=n):jr(e,t,r);break;default:jr(e,t,r)}}function yp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new yb),t.forEach(function(n){var i=zb.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Jt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ye=l.stateNode,rr=!1;break e;case 3:Ye=l.stateNode.containerInfo,rr=!0;break e;case 4:Ye=l.stateNode.containerInfo,rr=!0;break e}l=l.return}if(Ye===null)throw Error(A(160));R0(o,s,i),Ye=null,rr=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){$e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)D0(t,e),t=t.sibling}function D0(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Jt(t,e),pr(e),n&4){try{Ao(3,e,e.return),bl(3,e)}catch(y){$e(e,e.return,y)}try{Ao(5,e,e.return)}catch(y){$e(e,e.return,y)}}break;case 1:Jt(t,e),pr(e),n&512&&r!==null&&mi(r,r.return);break;case 5:if(Jt(t,e),pr(e),n&512&&r!==null&&mi(r,r.return),e.flags&32){var i=e.stateNode;try{Uo(i,"")}catch(y){$e(e,e.return,y)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=r!==null?r.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&im(i,o),Qc(l,s);var u=Qc(l,o);for(s=0;s<a.length;s+=2){var p=a[s],d=a[s+1];p==="style"?cm(i,d):p==="dangerouslySetInnerHTML"?am(i,d):p==="children"?Uo(i,d):nd(i,p,d,u)}switch(l){case"input":Kc(i,o);break;case"textarea":om(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?yi(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?yi(i,!!o.multiple,o.defaultValue,!0):yi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xo]=o}catch(y){$e(e,e.return,y)}}break;case 6:if(Jt(t,e),pr(e),n&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){$e(e,e.return,y)}}break;case 3:if(Jt(t,e),pr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Wo(t.containerInfo)}catch(y){$e(e,e.return,y)}break;case 4:Jt(t,e),pr(e);break;case 13:Jt(t,e),pr(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Rd=Te())),n&4&&yp(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(ot=(u=ot)||p,Jt(t,e),ot=u):Jt(t,e),pr(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(I=e,p=e.child;p!==null;){for(d=I=p;I!==null;){switch(h=I,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ao(4,h,h.return);break;case 1:mi(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){$e(n,r,y)}}break;case 5:mi(h,h.return);break;case 22:if(h.memoizedState!==null){wp(d);continue}}g!==null?(g.return=h,I=g):wp(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,a=d.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=lm("display",s))}catch(y){$e(e,e.return,y)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){$e(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Jt(t,e),pr(e),n&4&&yp(e);break;case 21:break;default:Jt(t,e),pr(e)}}function pr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(N0(r)){var n=r;break e}r=r.return}throw Error(A(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Uo(i,""),n.flags&=-33);var o=vp(e);Eu(e,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,l=vp(e);$u(e,l,s);break;default:throw Error(A(161))}}catch(a){$e(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wb(e,t,r){I=e,M0(e)}function M0(e,t,r){for(var n=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||Ys;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ot;l=Ys;var u=ot;if(Ys=s,(ot=a)&&!u)for(I=i;I!==null;)s=I,a=s.child,s.tag===22&&s.memoizedState!==null?xp(i):a!==null?(a.return=s,I=a):xp(i);for(;o!==null;)I=o,M0(o),o=o.sibling;I=i,Ys=l,ot=u}bp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):bp(e)}}function bp(e){for(;I!==null;){var t=I;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||bl(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ot)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:tr(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&rp(t,o,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}rp(t,s,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Wo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ot||t.flags&512&&Su(t)}catch(h){$e(t,t.return,h)}}if(t===e){I=null;break}if(r=t.sibling,r!==null){r.return=t.return,I=r;break}I=t.return}}function wp(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var r=t.sibling;if(r!==null){r.return=t.return,I=r;break}I=t.return}}function xp(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{bl(4,t)}catch(a){$e(t,r,a)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(a){$e(t,i,a)}}var o=t.return;try{Su(t)}catch(a){$e(t,o,a)}break;case 5:var s=t.return;try{Su(t)}catch(a){$e(t,s,a)}}}catch(a){$e(t,t.return,a)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var xb=Math.ceil,Ha=Dr.ReactCurrentDispatcher,Id=Dr.ReactCurrentOwner,jt=Dr.ReactCurrentBatchConfig,J=0,Ge=null,Le=null,Qe=0,Et=0,gi=gn(0),Fe=0,rs=null,Fn=0,wl=0,Nd=0,To=null,ft=null,Rd=0,Ii=1/0,$r=null,Wa=!1,zu=null,on=null,Xs=!1,Xr=null,Ka=0,Po=0,Au=null,fa=-1,ma=0;function ct(){return J&6?Te():fa!==-1?fa:fa=Te()}function sn(e){return e.mode&1?J&2&&Qe!==0?Qe&-Qe:ib.transition!==null?(ma===0&&(ma=xm()),ma):(e=ce,e!==0||(e=window.event,e=e===void 0?16:zm(e.type)),e):1}function or(e,t,r,n){if(50<Po)throw Po=0,Au=null,Error(A(185));fs(e,r,n),(!(J&2)||e!==Ge)&&(e===Ge&&(!(J&2)&&(wl|=r),Fe===4&&Gr(e,Qe)),yt(e,n),r===1&&J===0&&!(t.mode&1)&&(Ii=Te()+500,gl&&vn()))}function yt(e,t){var r=e.callbackNode;iy(e,t);var n=Aa(e,e===Ge?Qe:0);if(n===0)r!==null&&Th(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Th(r),t===1)e.tag===0?nb(_p.bind(null,e)):Gm(_p.bind(null,e)),Jy(function(){!(J&6)&&vn()}),r=null;else{switch(_m(n)){case 1:r=ld;break;case 4:r=bm;break;case 16:r=za;break;case 536870912:r=wm;break;default:r=za}r=K0(r,F0.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function F0(e,t){if(fa=-1,ma=0,J&6)throw Error(A(327));var r=e.callbackNode;if(ki()&&e.callbackNode!==r)return null;var n=Aa(e,e===Ge?Qe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ga(e,n);else{t=n;var i=J;J|=2;var o=U0();(Ge!==e||Qe!==t)&&($r=null,Ii=Te()+500,In(e,t));do try{Cb();break}catch(l){B0(e,l)}while(1);xd(),Ha.current=o,J=i,Le!==null?t=0:(Ge=null,Qe=0,t=Fe)}if(t!==0){if(t===2&&(i=ru(e),i!==0&&(n=i,t=Tu(e,i))),t===1)throw r=rs,In(e,0),Gr(e,n),yt(e,Te()),r;if(t===6)Gr(e,n);else{if(i=e.current.alternate,!(n&30)&&!_b(i)&&(t=Ga(e,n),t===2&&(o=ru(e),o!==0&&(n=o,t=Tu(e,o))),t===1))throw r=rs,In(e,0),Gr(e,n),yt(e,Te()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(A(345));case 2:$n(e,ft,$r);break;case 3:if(Gr(e,n),(n&130023424)===n&&(t=Rd+500-Te(),10<t)){if(Aa(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){ct(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=uu($n.bind(null,e,ft,$r),t);break}$n(e,ft,$r);break;case 4:if(Gr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-ir(n);o=1<<s,s=t[s],s>i&&(i=s),n&=~o}if(n=i,n=Te()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*xb(n/1960))-n,10<n){e.timeoutHandle=uu($n.bind(null,e,ft,$r),n);break}$n(e,ft,$r);break;case 5:$n(e,ft,$r);break;default:throw Error(A(329))}}}return yt(e,Te()),e.callbackNode===r?F0.bind(null,e):null}function Tu(e,t){var r=To;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=Ga(e,t),e!==2&&(t=ft,ft=r,t!==null&&Pu(t)),e}function Pu(e){ft===null?ft=e:ft.push.apply(ft,e)}function _b(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gr(e,t){for(t&=~Nd,t&=~wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ir(t),n=1<<r;e[r]=-1,t&=~n}}function _p(e){if(J&6)throw Error(A(327));ki();var t=Aa(e,0);if(!(t&1))return yt(e,Te()),null;var r=Ga(e,t);if(e.tag!==0&&r===2){var n=ru(e);n!==0&&(t=n,r=Tu(e,n))}if(r===1)throw r=rs,In(e,0),Gr(e,t),yt(e,Te()),r;if(r===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,ft,$r),yt(e,Te()),null}function Dd(e,t){var r=J;J|=1;try{return e(t)}finally{J=r,J===0&&(Ii=Te()+500,gl&&vn())}}function Bn(e){Xr!==null&&Xr.tag===0&&!(J&6)&&ki();var t=J;J|=1;var r=jt.transition,n=ce;try{if(jt.transition=null,ce=1,e)return e()}finally{ce=n,jt.transition=r,J=t,!(J&6)&&vn()}}function Md(){Et=gi.current,fe(gi)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Zy(r)),Le!==null)for(r=Le.return;r!==null;){var n=r;switch(yd(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ia();break;case 3:Oi(),fe(gt),fe(st),Ed();break;case 5:$d(n);break;case 4:Oi();break;case 13:fe(xe);break;case 19:fe(xe);break;case 10:_d(n.type._context);break;case 22:case 23:Md()}r=r.return}if(Ge=e,Le=e=an(e.current,null),Qe=Et=t,Fe=0,rs=null,Nd=wl=Fn=0,ft=To=null,Tn!==null){for(t=0;t<Tn.length;t++)if(r=Tn[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}Tn=null}return e}function B0(e,t){do{var r=Le;try{if(xd(),da.current=ja,Va){for(var n=_e.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Va=!1}if(Mn=0,Ke=Me=_e=null,zo=!1,Jo=0,Id.current=null,r===null||r.return===null){Fe=1,rs=t,Le=null;break}e:{var o=e,s=r.return,l=r,a=t;if(t=Qe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=l,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=cp(s);if(g!==null){g.flags&=-257,up(g,s,l,o,t),g.mode&1&&lp(o,u,t),t=g,a=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(a),t.updateQueue=y}else v.add(a);break e}else{if(!(t&1)){lp(o,u,t),Fd();break e}a=Error(A(426))}}else if(ve&&l.mode&1){var k=cp(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),up(k,s,l,o,t),bd(Li(a,l));break e}}o=a=Li(a,l),Fe!==4&&(Fe=2),To===null?To=[o]:To.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var b=k0(o,a,t);tp(o,b);break e;case 1:l=a;var m=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(on===null||!on.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=C0(o,l,t);tp(o,x);break e}}o=o.return}while(o!==null)}j0(r)}catch(_){t=_,Le===r&&r!==null&&(Le=r=r.return);continue}break}while(1)}function U0(){var e=Ha.current;return Ha.current=ja,e===null?ja:e}function Fd(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ge===null||!(Fn&268435455)&&!(wl&268435455)||Gr(Ge,Qe)}function Ga(e,t){var r=J;J|=2;var n=U0();(Ge!==e||Qe!==t)&&($r=null,In(e,t));do try{kb();break}catch(i){B0(e,i)}while(1);if(xd(),J=r,Ha.current=n,Le!==null)throw Error(A(261));return Ge=null,Qe=0,Fe}function kb(){for(;Le!==null;)V0(Le)}function Cb(){for(;Le!==null&&!Yv();)V0(Le)}function V0(e){var t=W0(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?j0(e):Le=t,Id.current=null}function j0(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=vb(r,t),r!==null){r.flags&=32767,Le=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Le=null;return}}else if(r=gb(r,t,Et),r!==null){Le=r;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Fe===0&&(Fe=5)}function $n(e,t,r){var n=ce,i=jt.transition;try{jt.transition=null,ce=1,Sb(e,t,r,n)}finally{jt.transition=i,ce=n}return null}function Sb(e,t,r,n){do ki();while(Xr!==null);if(J&6)throw Error(A(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(oy(e,o),e===Ge&&(Le=Ge=null,Qe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Xs||(Xs=!0,K0(za,function(){return ki(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=jt.transition,jt.transition=null;var s=ce;ce=1;var l=J;J|=4,Id.current=null,bb(e,r),D0(r,e),Wy(lu),Ta=!!au,lu=au=null,e.current=r,wb(r),Xv(),J=l,ce=s,jt.transition=o}else e.current=r;if(Xs&&(Xs=!1,Xr=e,Ka=i),o=e.pendingLanes,o===0&&(on=null),Jv(r.stateNode),yt(e,Te()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Wa)throw Wa=!1,e=zu,zu=null,e;return Ka&1&&e.tag!==0&&ki(),o=e.pendingLanes,o&1?e===Au?Po++:(Po=0,Au=e):Po=0,vn(),null}function ki(){if(Xr!==null){var e=_m(Ka),t=jt.transition,r=ce;try{if(jt.transition=null,ce=16>e?16:e,Xr===null)var n=!1;else{if(e=Xr,Xr=null,Ka=0,J&6)throw Error(A(331));var i=J;for(J|=4,I=e.current;I!==null;){var o=I,s=o.child;if(I.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(I=u;I!==null;){var p=I;switch(p.tag){case 0:case 11:case 15:Ao(8,p,o)}var d=p.child;if(d!==null)d.return=p,I=d;else for(;I!==null;){p=I;var h=p.sibling,g=p.return;if(I0(p),p===u){I=null;break}if(h!==null){h.return=g,I=h;break}I=g}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}I=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ao(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,I=b;break e}I=o.return}}var m=e.current;for(I=m;I!==null;){s=I;var w=s.child;if(s.subtreeFlags&2064&&w!==null)w.return=s,I=w;else e:for(s=m;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bl(9,l)}}catch(_){$e(l,l.return,_)}if(l===s){I=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,I=x;break e}I=l.return}}if(J=i,vn(),wr&&typeof wr.onPostCommitFiberRoot=="function")try{wr.onPostCommitFiberRoot(dl,e)}catch{}n=!0}return n}finally{ce=r,jt.transition=t}}return!1}function kp(e,t,r){t=Li(r,t),t=k0(e,t,1),e=nn(e,t,1),t=ct(),e!==null&&(fs(e,1,t),yt(e,t))}function $e(e,t,r){if(e.tag===3)kp(e,e,r);else for(;t!==null;){if(t.tag===3){kp(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(on===null||!on.has(n))){e=Li(r,e),e=C0(t,e,1),t=nn(t,e,1),e=ct(),t!==null&&(fs(t,1,e),yt(t,e));break}}t=t.return}}function $b(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ct(),e.pingedLanes|=e.suspendedLanes&r,Ge===e&&(Qe&r)===r&&(Fe===4||Fe===3&&(Qe&130023424)===Qe&&500>Te()-Rd?In(e,0):Nd|=r),yt(e,t)}function H0(e,t){t===0&&(e.mode&1?(t=Bs,Bs<<=1,!(Bs&130023424)&&(Bs=4194304)):t=1);var r=ct();e=Ir(e,t),e!==null&&(fs(e,t,r),yt(e,r))}function Eb(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),H0(e,r)}function zb(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(A(314))}n!==null&&n.delete(t),H0(e,r)}var W0;W0=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||gt.current)mt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return mt=!1,mb(e,t,r);mt=!!(e.flags&131072)}else mt=!1,ve&&t.flags&1048576&&qm(t,Da,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;pa(e,t),e=t.pendingProps;var i=Ai(t,st.current);_i(t,r),i=Ad(null,t,n,e,i,r);var o=Td();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(n)?(o=!0,Na(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cd(t),i.updater=vl,t.stateNode=i,i._reactInternals=t,vu(t,n,e,r),t=wu(null,t,n,!0,o,r)):(t.tag=0,ve&&o&&vd(t),lt(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(pa(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Tb(n),e=tr(n,e),i){case 0:t=bu(null,t,n,e,r);break e;case 1:t=pp(null,t,n,e,r);break e;case 11:t=dp(null,t,n,e,r);break e;case 14:t=hp(null,t,n,tr(n.type,e),r);break e}throw Error(A(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:tr(n,i),bu(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:tr(n,i),pp(e,t,n,i,r);case 3:e:{if(z0(t),e===null)throw Error(A(387));n=t.pendingProps,o=t.memoizedState,i=o.element,Zm(e,t),Ba(t,n,null,r);var s=t.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Li(Error(A(423)),t),t=fp(e,t,n,r,i);break e}else if(n!==i){i=Li(Error(A(424)),t),t=fp(e,t,n,r,i);break e}else for(Tt=rn(t.stateNode.containerInfo.firstChild),Ot=t,ve=!0,nr=null,r=r0(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ti(),n===i){t=Nr(e,t,r);break e}lt(e,t,n,r)}t=t.child}return t;case 5:return n0(t),e===null&&fu(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,cu(n,i)?s=null:o!==null&&cu(n,o)&&(t.flags|=32),E0(e,t),lt(e,t,s,r),t.child;case 6:return e===null&&fu(t),null;case 13:return A0(e,t,r);case 4:return Sd(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Pi(t,null,n,r):lt(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:tr(n,i),dp(e,t,n,i,r);case 7:return lt(e,t,t.pendingProps,r),t.child;case 8:return lt(e,t,t.pendingProps.children,r),t.child;case 12:return lt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,he(Ma,n._currentValue),n._currentValue=s,o!==null)if(sr(o.value,s)){if(o.children===i.children&&!gt.current){t=Nr(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===n){if(o.tag===1){a=Tr(-1,r&-r),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),mu(o.return,r,t),l.lanes|=r;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(A(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),mu(s,r,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}lt(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,_i(t,r),i=Ht(i),n=n(i),t.flags|=1,lt(e,t,n,r),t.child;case 14:return n=t.type,i=tr(n,t.pendingProps),i=tr(n.type,i),hp(e,t,n,i,r);case 15:return S0(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:tr(n,i),pa(e,t),t.tag=1,vt(n)?(e=!0,Na(t)):e=!1,_i(t,r),e0(t,n,i),vu(t,n,i,r),wu(null,t,n,!0,e,r);case 19:return T0(e,t,r);case 22:return $0(e,t,r)}throw Error(A(156,t.tag))};function K0(e,t){return ym(e,t)}function Ab(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,r,n){return new Ab(e,t,r,n)}function Bd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tb(e){if(typeof e=="function")return Bd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===od)return 11;if(e===sd)return 14}return 2}function an(e,t){var r=e.alternate;return r===null?(r=Vt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ga(e,t,r,n,i,o){var s=2;if(n=e,typeof e=="function")Bd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case si:return Nn(r.children,i,o,t);case id:s=8,i|=8;break;case Uc:return e=Vt(12,r,t,i|2),e.elementType=Uc,e.lanes=o,e;case Vc:return e=Vt(13,r,t,i),e.elementType=Vc,e.lanes=o,e;case jc:return e=Vt(19,r,t,i),e.elementType=jc,e.lanes=o,e;case tm:return xl(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jf:s=10;break e;case em:s=9;break e;case od:s=11;break e;case sd:s=14;break e;case Hr:s=16,n=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Vt(s,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Nn(e,t,r,n){return e=Vt(7,e,n,t),e.lanes=r,e}function xl(e,t,r,n){return e=Vt(22,e,n,t),e.elementType=tm,e.lanes=r,e.stateNode={isHidden:!1},e}function yc(e,t,r){return e=Vt(6,e,null,t),e.lanes=r,e}function bc(e,t,r){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pb(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ud(e,t,r,n,i,o,s,l,a){return e=new Pb(e,t,r,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Vt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cd(o),e}function Ob(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oi,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function G0(e){if(!e)return un;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var r=e.type;if(vt(r))return Km(e,r,t)}return t}function q0(e,t,r,n,i,o,s,l,a){return e=Ud(r,n,!0,e,i,o,s,l,a),e.context=G0(null),r=e.current,n=ct(),i=sn(r),o=Tr(n,i),o.callback=t??null,nn(r,o,i),e.current.lanes=i,fs(e,i,n),yt(e,n),e}function _l(e,t,r,n){var i=t.current,o=ct(),s=sn(i);return r=G0(r),t.context===null?t.context=r:t.pendingContext=r,t=Tr(o,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=nn(i,t,s),e!==null&&(or(e,i,s,o),ua(e,i,s)),s}function qa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Vd(e,t){Cp(e,t),(e=e.alternate)&&Cp(e,t)}function Lb(){return null}var Y0=typeof reportError=="function"?reportError:function(e){console.error(e)};function jd(e){this._internalRoot=e}kl.prototype.render=jd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));_l(e,t,null,null)};kl.prototype.unmount=jd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){_l(null,e,null,null)}),t[Lr]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sm();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Kr.length&&t!==0&&t<Kr[r].priority;r++);Kr.splice(r,0,e),r===0&&Em(e)}};function Hd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function Ib(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=qa(s);o.call(u)}}var s=q0(t,n,e,0,null,!1,!1,"",Sp);return e._reactRootContainer=s,e[Lr]=s.current,qo(e.nodeType===8?e.parentNode:e),Bn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var u=qa(a);l.call(u)}}var a=Ud(e,0,!1,null,null,!1,!1,"",Sp);return e._reactRootContainer=a,e[Lr]=a.current,qo(e.nodeType===8?e.parentNode:e),Bn(function(){_l(t,a,r,n)}),a}function Sl(e,t,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=qa(s);l.call(a)}}_l(t,s,e,i)}else s=Ib(r,t,e,i,n);return qa(s)}km=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=xo(t.pendingLanes);r!==0&&(cd(t,r|1),yt(t,Te()),!(J&6)&&(Ii=Te()+500,vn()))}break;case 13:Bn(function(){var n=Ir(e,1);if(n!==null){var i=ct();or(n,e,1,i)}}),Vd(e,1)}};ud=function(e){if(e.tag===13){var t=Ir(e,134217728);if(t!==null){var r=ct();or(t,e,134217728,r)}Vd(e,134217728)}};Cm=function(e){if(e.tag===13){var t=sn(e),r=Ir(e,t);if(r!==null){var n=ct();or(r,e,t,n)}Vd(e,t)}};Sm=function(){return ce};$m=function(e,t){var r=ce;try{return ce=e,t()}finally{ce=r}};Jc=function(e,t,r){switch(t){case"input":if(Kc(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=ml(n);if(!i)throw Error(A(90));nm(n),Kc(n,i)}}}break;case"textarea":om(e,r);break;case"select":t=r.value,t!=null&&yi(e,!!r.multiple,t,!1)}};hm=Dd;pm=Bn;var Nb={usingClientEntryPoint:!1,Events:[gs,ui,ml,um,dm,Dd]},ao={findFiberByHostInstance:An,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Rb={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gm(e),e===null?null:e.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||Lb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{dl=Qs.inject(Rb),wr=Qs}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nb;Rt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(t))throw Error(A(200));return Ob(e,t,null,r)};Rt.createRoot=function(e,t){if(!Hd(e))throw Error(A(299));var r=!1,n="",i=Y0;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ud(e,1,!1,null,null,r,!1,n,i),e[Lr]=t.current,qo(e.nodeType===8?e.parentNode:e),new jd(t)};Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=gm(t),e=e===null?null:e.stateNode,e};Rt.flushSync=function(e){return Bn(e)};Rt.hydrate=function(e,t,r){if(!Cl(t))throw Error(A(200));return Sl(null,e,t,!0,r)};Rt.hydrateRoot=function(e,t,r){if(!Hd(e))throw Error(A(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=Y0;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=q0(t,null,e,1,r??null,i,!1,o,s),e[Lr]=t.current,qo(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new kl(t)};Rt.render=function(e,t,r){if(!Cl(t))throw Error(A(200));return Sl(null,e,t,!1,r)};Rt.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(A(40));return e._reactRootContainer?(Bn(function(){Sl(null,null,e,!1,function(){e._reactRootContainer=null,e[Lr]=null})}),!0):!1};Rt.unstable_batchedUpdates=Dd;Rt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Cl(r))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Sl(e,t,r,!1,n)};Rt.version="18.2.0-next-9e3b772b8-20220608";function X0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X0)}catch(e){console.error(e)}}X0(),qf.exports=Rt;var Db=qf.exports,$p=Db;Fc.createRoot=$p.createRoot,Fc.hydrateRoot=$p.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ns(){return ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ns.apply(this,arguments)}var Qr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qr||(Qr={}));const Ep="popstate";function Mb(e){e===void 0&&(e={});function t(n,i){let{pathname:o,search:s,hash:l}=n.location;return Ou("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:Ya(i)}return Bb(t,r,null,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Fb(){return Math.random().toString(36).substr(2,8)}function zp(e,t){return{usr:e.state,key:e.key,idx:t}}function Ou(e,t,r,n){return r===void 0&&(r=null),ns({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hi(t):t,{state:r,key:t&&t.key||n||Fb()})}function Ya(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Hi(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Bb(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,s=i.history,l=Qr.Pop,a=null,u=p();u==null&&(u=0,s.replaceState(ns({},s.state,{idx:u}),""));function p(){return(s.state||{idx:null}).idx}function d(){l=Qr.Pop;let k=p(),b=k==null?null:k-u;u=k,a&&a({action:l,location:y.location,delta:b})}function h(k,b){l=Qr.Push;let m=Ou(y.location,k,b);r&&r(m,k),u=p()+1;let w=zp(m,u),x=y.createHref(m);try{s.pushState(w,"",x)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(x)}o&&a&&a({action:l,location:y.location,delta:1})}function g(k,b){l=Qr.Replace;let m=Ou(y.location,k,b);r&&r(m,k),u=p();let w=zp(m,u),x=y.createHref(m);s.replaceState(w,"",x),o&&a&&a({action:l,location:y.location,delta:0})}function v(k){let b=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof k=="string"?k:Ya(k);return Ne(b,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,b)}let y={get action(){return l},get location(){return e(i,s)},listen(k){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Ep,d),a=k,()=>{i.removeEventListener(Ep,d),a=null}},createHref(k){return t(i,k)},createURL:v,encodeLocation(k){let b=v(k);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:h,replace:g,go(k){return s.go(k)}};return y}var Ap;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ap||(Ap={}));function Ub(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?Hi(t):t,i=Kd(n.pathname||"/",r);if(i==null)return null;let o=Q0(e);Vb(o);let s=null;for(let l=0;s==null&&l<o.length;++l)s=Qb(o[l],e1(i));return s}function Q0(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(o,s,l)=>{let a={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};a.relativePath.startsWith("/")&&(Ne(a.relativePath.startsWith(n),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(n.length));let u=ln([n,a.relativePath]),p=r.concat(a);o.children&&o.children.length>0&&(Ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Q0(o.children,t,p,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Yb(u,o.index),routesMeta:p})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let a of Z0(o.path))i(o,s,a)}),t}function Z0(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let s=Z0(n.join("/")),l=[];return l.push(...s.map(a=>a===""?o:[o,a].join("/"))),i&&l.push(...s),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function Vb(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Xb(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const jb=/^:\w+$/,Hb=3,Wb=2,Kb=1,Gb=10,qb=-2,Tp=e=>e==="*";function Yb(e,t){let r=e.split("/"),n=r.length;return r.some(Tp)&&(n+=qb),t&&(n+=Wb),r.filter(i=>!Tp(i)).reduce((i,o)=>i+(jb.test(o)?Hb:o===""?Kb:Gb),n)}function Xb(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function Qb(e,t){let{routesMeta:r}=e,n={},i="/",o=[];for(let s=0;s<r.length;++s){let l=r[s],a=s===r.length-1,u=i==="/"?t:t.slice(i.length)||"/",p=Zb({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!p)return null;Object.assign(n,p.params);let d=l.route;o.push({params:n,pathname:ln([i,p.pathname]),pathnameBase:i1(ln([i,p.pathnameBase])),route:d}),p.pathnameBase!=="/"&&(i=ln([i,p.pathnameBase]))}return o}function Zb(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Jb(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((u,p,d)=>{if(p==="*"){let h=l[d]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[p]=t1(l[d]||"",p),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Jb(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Wd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,l)=>(n.push(l),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function e1(e){try{return decodeURI(e)}catch(t){return Wd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function t1(e,t){try{return decodeURIComponent(e)}catch(r){return Wd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Kd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function r1(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?Hi(e):e;return{pathname:r?r.startsWith("/")?r:n1(r,t):t,search:o1(n),hash:s1(i)}}function n1(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function wc(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function J0(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function eg(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=Hi(e):(i=ns({},e),Ne(!i.pathname||!i.pathname.includes("?"),wc("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),wc("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),wc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(n||s==null)l=r;else{let d=t.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let a=r1(i,l),u=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&r.endsWith("/");return!a.pathname.endsWith("/")&&(u||p)&&(a.pathname+="/"),a}const ln=e=>e.join("/").replace(/\/\/+/g,"/"),i1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),o1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,s1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function a1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const tg=["post","put","patch","delete"];new Set(tg);const l1=["get",...tg];new Set(l1);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Xa.apply(this,arguments)}const Gd=O.createContext(null),c1=O.createContext(null),Wi=O.createContext(null),$l=O.createContext(null),yn=O.createContext({outlet:null,matches:[],isDataRoute:!1}),rg=O.createContext(null);function u1(e,t){let{relative:r}=t===void 0?{}:t;ys()||Ne(!1);let{basename:n,navigator:i}=O.useContext(Wi),{hash:o,pathname:s,search:l}=ig(e,{relative:r}),a=s;return n!=="/"&&(a=s==="/"?n:ln([n,s])),i.createHref({pathname:a,search:l,hash:o})}function ys(){return O.useContext($l)!=null}function El(){return ys()||Ne(!1),O.useContext($l).location}function ng(e){O.useContext(Wi).static||O.useLayoutEffect(e)}function d1(){let{isDataRoute:e}=O.useContext(yn);return e?$1():h1()}function h1(){ys()||Ne(!1);let e=O.useContext(Gd),{basename:t,navigator:r}=O.useContext(Wi),{matches:n}=O.useContext(yn),{pathname:i}=El(),o=JSON.stringify(J0(n).map(a=>a.pathnameBase)),s=O.useRef(!1);return ng(()=>{s.current=!0}),O.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){r.go(a);return}let p=eg(a,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:ln([t,p.pathname])),(u.replace?r.replace:r.push)(p,u.state,u)},[t,r,o,i,e])}const p1=O.createContext(null);function f1(e){let t=O.useContext(yn).outlet;return t&&O.createElement(p1.Provider,{value:e},t)}function ig(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=O.useContext(yn),{pathname:i}=El(),o=JSON.stringify(J0(n).map(s=>s.pathnameBase));return O.useMemo(()=>eg(e,JSON.parse(o),i,r==="path"),[e,o,i,r])}function m1(e,t){return g1(e,t)}function g1(e,t,r){ys()||Ne(!1);let{navigator:n}=O.useContext(Wi),{matches:i}=O.useContext(yn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let a=El(),u;if(t){var p;let y=typeof t=="string"?Hi(t):t;l==="/"||(p=y.pathname)!=null&&p.startsWith(l)||Ne(!1),u=y}else u=a;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",g=Ub(e,{pathname:h}),v=x1(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:ln([l,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:ln([l,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r);return t&&v?O.createElement($l.Provider,{value:{location:Xa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qr.Pop}},v):v}function v1(){let e=S1(),t=a1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),r?O.createElement("pre",{style:i},r):null,o)}const y1=O.createElement(v1,null);class b1 extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?O.createElement(yn.Provider,{value:this.props.routeContext},O.createElement(rg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function w1(e){let{routeContext:t,match:r,children:n}=e,i=O.useContext(Gd);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),O.createElement(yn.Provider,{value:t},n)}function x1(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var i;if((i=r)!=null&&i.errors)e=r.matches;else return null}let o=e,s=(n=r)==null?void 0:n.errors;if(s!=null){let l=o.findIndex(a=>a.route.id&&(s==null?void 0:s[a.route.id]));l>=0||Ne(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,a,u)=>{let p=a.route.id?s==null?void 0:s[a.route.id]:null,d=null;r&&(d=a.route.errorElement||y1);let h=t.concat(o.slice(0,u+1)),g=()=>{let v;return p?v=d:a.route.Component?v=O.createElement(a.route.Component,null):a.route.element?v=a.route.element:v=l,O.createElement(w1,{match:a,routeContext:{outlet:l,matches:h,isDataRoute:r!=null},children:v})};return r&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?O.createElement(b1,{location:r.location,revalidation:r.revalidation,component:d,error:p,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var og=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(og||{}),Qa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qa||{});function _1(e){let t=O.useContext(Gd);return t||Ne(!1),t}function k1(e){let t=O.useContext(c1);return t||Ne(!1),t}function C1(e){let t=O.useContext(yn);return t||Ne(!1),t}function sg(e){let t=C1(),r=t.matches[t.matches.length-1];return r.route.id||Ne(!1),r.route.id}function S1(){var e;let t=O.useContext(rg),r=k1(Qa.UseRouteError),n=sg(Qa.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function $1(){let{router:e}=_1(og.UseNavigateStable),t=sg(Qa.UseNavigateStable),r=O.useRef(!1);return ng(()=>{r.current=!0}),O.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Xa({fromRouteId:t},o)))},[e,t])}function E1(e){return f1(e.context)}function ag(e){Ne(!1)}function z1(e){let{basename:t="/",children:r=null,location:n,navigationType:i=Qr.Pop,navigator:o,static:s=!1}=e;ys()&&Ne(!1);let l=t.replace(/^\/*/,"/"),a=O.useMemo(()=>({basename:l,navigator:o,static:s}),[l,o,s]);typeof n=="string"&&(n=Hi(n));let{pathname:u="/",search:p="",hash:d="",state:h=null,key:g="default"}=n,v=O.useMemo(()=>{let y=Kd(u,l);return y==null?null:{location:{pathname:y,search:p,hash:d,state:h,key:g},navigationType:i}},[l,u,p,d,h,g,i]);return v==null?null:O.createElement(Wi.Provider,{value:a},O.createElement($l.Provider,{children:r,value:v}))}function A1(e){let{children:t,location:r}=e;return m1(Lu(t),r)}new Promise(()=>{});function Lu(e,t){t===void 0&&(t=[]);let r=[];return O.Children.forEach(e,(n,i)=>{if(!O.isValidElement(n))return;let o=[...t,i];if(n.type===O.Fragment){r.push.apply(r,Lu(n.props.children,o));return}n.type!==ag&&Ne(!1),!n.props.index||!n.props.children||Ne(!1);let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Lu(n.props.children,o)),r.push(s)}),r}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Iu(){return Iu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Iu.apply(this,arguments)}function T1(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function P1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function O1(e,t){return e.button===0&&(!t||t==="_self")&&!P1(e)}const L1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],I1="startTransition",Pp=M[I1];function N1(e){let{basename:t,children:r,future:n,window:i}=e,o=O.useRef();o.current==null&&(o.current=Mb({window:i,v5Compat:!0}));let s=o.current,[l,a]=O.useState({action:s.action,location:s.location}),{v7_startTransition:u}=n||{},p=O.useCallback(d=>{u&&Pp?Pp(()=>a(d)):a(d)},[a,u]);return O.useLayoutEffect(()=>s.listen(p),[s,p]),O.createElement(z1,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:s})}const R1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",D1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M1=O.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:o,replace:s,state:l,target:a,to:u,preventScrollReset:p}=t,d=T1(t,L1),{basename:h}=O.useContext(Wi),g,v=!1;if(typeof u=="string"&&D1.test(u)&&(g=u,R1))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),x=Kd(w.pathname,h);w.origin===m.origin&&x!=null?u=x+w.search+w.hash:v=!0}catch{}let y=u1(u,{relative:i}),k=F1(u,{replace:s,state:l,target:a,preventScrollReset:p,relative:i});function b(m){n&&n(m),m.defaultPrevented||k(m)}return O.createElement("a",Iu({},d,{href:g||y,onClick:v||o?n:b,ref:r,target:a}))});var Op;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Op||(Op={}));var Lp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lp||(Lp={}));function F1(e,t){let{target:r,replace:n,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,l=d1(),a=El(),u=ig(e,{relative:s});return O.useCallback(p=>{if(O1(p,r)){p.preventDefault();let d=n!==void 0?n:Ya(a)===Ya(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:s})}},[a,l,u,n,i,r,e,o,s])}const B1={black:"#000",white:"#fff"},is=B1,U1={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Qn=U1,V1={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Zn=V1,j1={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Jn=j1,H1={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},ei=H1,W1={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},ti=W1,K1={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},lo=K1,G1={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},q1=G1;function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q.apply(this,arguments)}function En(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function lg(e){if(!En(e))return e;const t={};return Object.keys(e).forEach(r=>{t[r]=lg(e[r])}),t}function Pr(e,t,r={clone:!0}){const n=r.clone?q({},e):e;return En(e)&&En(t)&&Object.keys(t).forEach(i=>{i!=="__proto__"&&(En(t[i])&&i in e&&En(e[i])?n[i]=Pr(e[i],t[i],r):r.clone?n[i]=En(t[i])?lg(t[i]):t[i]:n[i]=t[i])}),n}function Ni(e){let t="https://mui.com/production-error/?code="+e;for(let r=1;r<arguments.length;r+=1)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function Oo(e){if(typeof e!="string")throw new Error(Ni(7));return e.charAt(0).toUpperCase()+e.slice(1)}function cg(e,t){const r=q({},t);return Object.keys(e).forEach(n=>{if(n.toString().match(/^(components|slots)$/))r[n]=q({},e[n],r[n]);else if(n.toString().match(/^(componentsProps|slotProps)$/)){const i=e[n]||{},o=t[n];r[n]={},!o||!Object.keys(o)?r[n]=i:!i||!Object.keys(i)?r[n]=o:(r[n]=q({},o),Object.keys(i).forEach(s=>{r[n][s]=cg(i[s],o[s])}))}else r[n]===void 0&&(r[n]=e[n])}),r}function Y1(e,t,r=void 0){const n={};return Object.keys(e).forEach(i=>{n[i]=e[i].reduce((o,s)=>{if(s){const l=t(s);l!==""&&o.push(l),r&&r[s]&&o.push(r[s])}return o},[]).join(" ")}),n}const Ip=e=>e,X1=()=>{let e=Ip;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Ip}}},Q1=X1(),Z1=Q1,J1={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function ug(e,t,r="Mui"){const n=J1[t];return n?`${r}-${n}`:`${Z1.generate(e)}-${t}`}function ew(e,t,r="Mui"){const n={};return t.forEach(i=>{n[i]=ug(e,i,r)}),n}const qd="$$material";function Cr(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function dg(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var tw=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,rw=dg(function(e){return tw.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function nw(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function iw(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var ow=function(){function e(r){var n=this;this._insertTag=function(i){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,o),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(iw(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=nw(i);try{o.insertRule(n,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),it="-ms-",Za="-moz-",te="-webkit-",hg="comm",Yd="rule",Xd="decl",sw="@import",pg="@keyframes",aw="@layer",lw=Math.abs,zl=String.fromCharCode,cw=Object.assign;function uw(e,t){return Xe(e,0)^45?(((t<<2^Xe(e,0))<<2^Xe(e,1))<<2^Xe(e,2))<<2^Xe(e,3):0}function fg(e){return e.trim()}function dw(e,t){return(e=t.exec(e))?e[0]:e}function re(e,t,r){return e.replace(t,r)}function Nu(e,t){return e.indexOf(t)}function Xe(e,t){return e.charCodeAt(t)|0}function os(e,t,r){return e.slice(t,r)}function mr(e){return e.length}function Qd(e){return e.length}function Zs(e,t){return t.push(e),e}function hw(e,t){return e.map(t).join("")}var Al=1,Ri=1,mg=0,bt=0,Oe=0,Ki="";function Tl(e,t,r,n,i,o,s){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:Al,column:Ri,length:s,return:""}}function co(e,t){return cw(Tl("",null,null,"",null,null,0),e,{length:-e.length},t)}function pw(){return Oe}function fw(){return Oe=bt>0?Xe(Ki,--bt):0,Ri--,Oe===10&&(Ri=1,Al--),Oe}function Lt(){return Oe=bt<mg?Xe(Ki,bt++):0,Ri++,Oe===10&&(Ri=1,Al++),Oe}function _r(){return Xe(Ki,bt)}function va(){return bt}function bs(e,t){return os(Ki,e,t)}function ss(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gg(e){return Al=Ri=1,mg=mr(Ki=e),bt=0,[]}function vg(e){return Ki="",e}function ya(e){return fg(bs(bt-1,Ru(e===91?e+2:e===40?e+1:e)))}function mw(e){for(;(Oe=_r())&&Oe<33;)Lt();return ss(e)>2||ss(Oe)>3?"":" "}function gw(e,t){for(;--t&&Lt()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return bs(e,va()+(t<6&&_r()==32&&Lt()==32))}function Ru(e){for(;Lt();)switch(Oe){case e:return bt;case 34:case 39:e!==34&&e!==39&&Ru(Oe);break;case 40:e===41&&Ru(e);break;case 92:Lt();break}return bt}function vw(e,t){for(;Lt()&&e+Oe!==47+10;)if(e+Oe===42+42&&_r()===47)break;return"/*"+bs(t,bt-1)+"*"+zl(e===47?e:Lt())}function yw(e){for(;!ss(_r());)Lt();return bs(e,bt)}function bw(e){return vg(ba("",null,null,null,[""],e=gg(e),0,[0],e))}function ba(e,t,r,n,i,o,s,l,a){for(var u=0,p=0,d=s,h=0,g=0,v=0,y=1,k=1,b=1,m=0,w="",x=i,_=o,C=n,S=w;k;)switch(v=m,m=Lt()){case 40:if(v!=108&&Xe(S,d-1)==58){Nu(S+=re(ya(m),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:S+=ya(m);break;case 9:case 10:case 13:case 32:S+=mw(v);break;case 92:S+=gw(va()-1,7);continue;case 47:switch(_r()){case 42:case 47:Zs(ww(vw(Lt(),va()),t,r),a);break;default:S+="/"}break;case 123*y:l[u++]=mr(S)*b;case 125*y:case 59:case 0:switch(m){case 0:case 125:k=0;case 59+p:b==-1&&(S=re(S,/\f/g,"")),g>0&&mr(S)-d&&Zs(g>32?Rp(S+";",n,r,d-1):Rp(re(S," ","")+";",n,r,d-2),a);break;case 59:S+=";";default:if(Zs(C=Np(S,t,r,u,p,i,l,w,x=[],_=[],d),o),m===123)if(p===0)ba(S,t,C,C,x,o,d,l,_);else switch(h===99&&Xe(S,3)===110?100:h){case 100:case 108:case 109:case 115:ba(e,C,C,n&&Zs(Np(e,C,C,0,0,i,l,w,i,x=[],d),_),i,_,d,l,n?x:_);break;default:ba(S,C,C,C,[""],_,0,l,_)}}u=p=g=0,y=b=1,w=S="",d=s;break;case 58:d=1+mr(S),g=v;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&fw()==125)continue}switch(S+=zl(m),m*y){case 38:b=p>0?1:(S+="\f",-1);break;case 44:l[u++]=(mr(S)-1)*b,b=1;break;case 64:_r()===45&&(S+=ya(Lt())),h=_r(),p=d=mr(w=S+=yw(va())),m++;break;case 45:v===45&&mr(S)==2&&(y=0)}}return o}function Np(e,t,r,n,i,o,s,l,a,u,p){for(var d=i-1,h=i===0?o:[""],g=Qd(h),v=0,y=0,k=0;v<n;++v)for(var b=0,m=os(e,d+1,d=lw(y=s[v])),w=e;b<g;++b)(w=fg(y>0?h[b]+" "+m:re(m,/&\f/g,h[b])))&&(a[k++]=w);return Tl(e,t,r,i===0?Yd:l,a,u,p)}function ww(e,t,r){return Tl(e,t,r,hg,zl(pw()),os(e,2,-2),0)}function Rp(e,t,r,n){return Tl(e,t,r,Xd,os(e,0,n),os(e,n+1,-1),n)}function Ci(e,t){for(var r="",n=Qd(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function xw(e,t,r,n){switch(e.type){case aw:if(e.children.length)break;case sw:case Xd:return e.return=e.return||e.value;case hg:return"";case pg:return e.return=e.value+"{"+Ci(e.children,n)+"}";case Yd:e.value=e.props.join(",")}return mr(r=Ci(e.children,n))?e.return=e.value+"{"+r+"}":""}function _w(e){var t=Qd(e);return function(r,n,i,o){for(var s="",l=0;l<t;l++)s+=e[l](r,n,i,o)||"";return s}}function kw(e){return function(t){t.root||(t=t.return)&&e(t)}}var Cw=function(t,r,n){for(var i=0,o=0;i=o,o=_r(),i===38&&o===12&&(r[n]=1),!ss(o);)Lt();return bs(t,bt)},Sw=function(t,r){var n=-1,i=44;do switch(ss(i)){case 0:i===38&&_r()===12&&(r[n]=1),t[n]+=Cw(bt-1,r,n);break;case 2:t[n]+=ya(i);break;case 4:if(i===44){t[++n]=_r()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=zl(i)}while(i=Lt());return t},$w=function(t,r){return vg(Sw(gg(t),r))},Dp=new WeakMap,Ew=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!Dp.get(n))&&!i){Dp.set(t,!0);for(var o=[],s=$w(r,o),l=n.props,a=0,u=0;a<s.length;a++)for(var p=0;p<l.length;p++,u++)t.props[u]=o[a]?s[a].replace(/&\f/g,l[p]):l[p]+" "+s[a]}}},zw=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function yg(e,t){switch(uw(e,t)){case 5103:return te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return te+e+Za+e+it+e+e;case 6828:case 4268:return te+e+it+e+e;case 6165:return te+e+it+"flex-"+e+e;case 5187:return te+e+re(e,/(\w+).+(:[^]+)/,te+"box-$1$2"+it+"flex-$1$2")+e;case 5443:return te+e+it+"flex-item-"+re(e,/flex-|-self/,"")+e;case 4675:return te+e+it+"flex-line-pack"+re(e,/align-content|flex-|-self/,"")+e;case 5548:return te+e+it+re(e,"shrink","negative")+e;case 5292:return te+e+it+re(e,"basis","preferred-size")+e;case 6060:return te+"box-"+re(e,"-grow","")+te+e+it+re(e,"grow","positive")+e;case 4554:return te+re(e,/([^-])(transform)/g,"$1"+te+"$2")+e;case 6187:return re(re(re(e,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),e,"")+e;case 5495:case 3959:return re(e,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return re(re(e,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+it+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+e+e;case 4095:case 3583:case 4068:case 2532:return re(e,/(.+)-inline(.+)/,te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mr(e)-1-t>6)switch(Xe(e,t+1)){case 109:if(Xe(e,t+4)!==45)break;case 102:return re(e,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+Za+(Xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Nu(e,"stretch")?yg(re(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Xe(e,t+1)!==115)break;case 6444:switch(Xe(e,mr(e)-3-(~Nu(e,"!important")&&10))){case 107:return re(e,":",":"+te)+e;case 101:return re(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+te+(Xe(e,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+it+"$2box$3")+e}break;case 5936:switch(Xe(e,t+11)){case 114:return te+e+it+re(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return te+e+it+re(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return te+e+it+re(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return te+e+it+e+e}return e}var Aw=function(t,r,n,i){if(t.length>-1&&!t.return)switch(t.type){case Xd:t.return=yg(t.value,t.length);break;case pg:return Ci([co(t,{value:re(t.value,"@","@"+te)})],i);case Yd:if(t.length)return hw(t.props,function(o){switch(dw(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ci([co(t,{props:[re(o,/:(read-\w+)/,":"+Za+"$1")]})],i);case"::placeholder":return Ci([co(t,{props:[re(o,/:(plac\w+)/,":"+te+"input-$1")]}),co(t,{props:[re(o,/:(plac\w+)/,":"+Za+"$1")]}),co(t,{props:[re(o,/:(plac\w+)/,it+"input-$1")]})],i)}return""})}},Tw=[Aw],Pw=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(y){var k=y.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||Tw,o={},s,l=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(y){for(var k=y.getAttribute("data-emotion").split(" "),b=1;b<k.length;b++)o[k[b]]=!0;l.push(y)});var a,u=[Ew,zw];{var p,d=[xw,kw(function(y){p.insert(y)})],h=_w(u.concat(i,d)),g=function(k){return Ci(bw(k),h)};a=function(k,b,m,w){p=m,g(k?k+"{"+b.styles+"}":b.styles),w&&(v.inserted[b.name]=!0)}}var v={key:r,sheet:new ow({key:r,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return v.sheet.hydrate(l),v},Ow=!0;function Lw(e,t,r){var n="";return r.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):n+=i+" "}),n}var bg=function(t,r,n){var i=t.key+"-"+r.name;(n===!1||Ow===!1)&&t.registered[i]===void 0&&(t.registered[i]=r.styles)},Iw=function(t,r,n){bg(t,r,n);var i=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var o=r;do t.insert(r===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Nw(e){for(var t=0,r,n=0,i=e.length;i>=4;++n,i-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Rw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dw=/[A-Z]|^ms/g,Mw=/_EMO_([^_]+?)_([^]*?)_EMO_/g,wg=function(t){return t.charCodeAt(1)===45},Mp=function(t){return t!=null&&typeof t!="boolean"},xc=dg(function(e){return wg(e)?e:e.replace(Dw,"-$&").toLowerCase()}),Fp=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(Mw,function(n,i,o){return gr={name:i,styles:o,next:gr},i})}return Rw[t]!==1&&!wg(t)&&typeof r=="number"&&r!==0?r+"px":r};function as(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return gr={name:r.name,styles:r.styles,next:gr},r.name;if(r.styles!==void 0){var n=r.next;if(n!==void 0)for(;n!==void 0;)gr={name:n.name,styles:n.styles,next:gr},n=n.next;var i=r.styles+";";return i}return Fw(e,t,r)}case"function":{if(e!==void 0){var o=gr,s=r(e);return gr=o,as(e,t,s)}break}}if(t==null)return r;var l=t[r];return l!==void 0?l:r}function Fw(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=as(e,t,r[i])+";";else for(var o in r){var s=r[o];if(typeof s!="object")t!=null&&t[s]!==void 0?n+=o+"{"+t[s]+"}":Mp(s)&&(n+=xc(o)+":"+Fp(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)Mp(s[l])&&(n+=xc(o)+":"+Fp(o,s[l])+";");else{var a=as(e,t,s);switch(o){case"animation":case"animationName":{n+=xc(o)+":"+a+";";break}default:n+=o+"{"+a+"}"}}}return n}var Bp=/label:\s*([^\s;\n{]+)\s*(;|$)/g,gr,Bw=function(t,r,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";gr=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=as(n,r,s)):o+=s[0];for(var l=1;l<t.length;l++)o+=as(n,r,t[l]),i&&(o+=s[l]);Bp.lastIndex=0;for(var a="",u;(u=Bp.exec(o))!==null;)a+="-"+u[1];var p=Nw(o)+a;return{name:p,styles:o,next:gr}},Uw=function(t){return t()},Vw=M["useInsertionEffect"]?M["useInsertionEffect"]:!1,jw=Vw||Uw,xg=O.createContext(typeof HTMLElement<"u"?Pw({key:"css"}):null);xg.Provider;var Hw=function(t){return O.forwardRef(function(r,n){var i=O.useContext(xg);return t(r,i,n)})},_g=O.createContext({}),Ww=rw,Kw=function(t){return t!=="theme"},Up=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Ww:Kw},Vp=function(t,r,n){var i;if(r){var o=r.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&n&&(i=t.__emotion_forwardProp),i},Gw=function(t){var r=t.cache,n=t.serialized,i=t.isStringTag;return bg(r,n,i),jw(function(){return Iw(r,n,i)}),null},qw=function e(t,r){var n=t.__emotion_real===t,i=n&&t.__emotion_base||t,o,s;r!==void 0&&(o=r.label,s=r.target);var l=Vp(t,r,n),a=l||Up(i),u=!a("as");return function(){var p=arguments,d=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),p[0]==null||p[0].raw===void 0)d.push.apply(d,p);else{d.push(p[0][0]);for(var h=p.length,g=1;g<h;g++)d.push(p[g],p[0][g])}var v=Hw(function(y,k,b){var m=u&&y.as||i,w="",x=[],_=y;if(y.theme==null){_={};for(var C in y)_[C]=y[C];_.theme=O.useContext(_g)}typeof y.className=="string"?w=Lw(k.registered,x,y.className):y.className!=null&&(w=y.className+" ");var S=Bw(d.concat(x),k.registered,_);w+=k.key+"-"+S.name,s!==void 0&&(w+=" "+s);var z=u&&l===void 0?Up(m):a,P={};for(var $ in y)u&&$==="as"||z($)&&(P[$]=y[$]);return P.className=w,P.ref=b,O.createElement(O.Fragment,null,O.createElement(Gw,{cache:k,serialized:S,isStringTag:typeof m=="string"}),O.createElement(m,P))});return v.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=i,v.__emotion_styles=d,v.__emotion_forwardProp=l,Object.defineProperty(v,"toString",{value:function(){return"."+s}}),v.withComponent=function(y,k){return e(y,q({},r,k,{shouldForwardProp:Vp(v,k,!0)})).apply(void 0,d)},v}},Yw=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Du=qw.bind();Yw.forEach(function(e){Du[e]=Du(e)});/**
 * @mui/styled-engine v5.14.7
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Xw(e,t){return Du(e,t)}const Qw=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},Zw=["values","unit","step"],Jw=e=>{const t=Object.keys(e).map(r=>({key:r,val:e[r]}))||[];return t.sort((r,n)=>r.val-n.val),t.reduce((r,n)=>q({},r,{[n.key]:n.val}),{})};function ex(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:n=5}=e,i=Cr(e,Zw),o=Jw(t),s=Object.keys(o);function l(h){return`@media (min-width:${typeof t[h]=="number"?t[h]:h}${r})`}function a(h){return`@media (max-width:${(typeof t[h]=="number"?t[h]:h)-n/100}${r})`}function u(h,g){const v=s.indexOf(g);return`@media (min-width:${typeof t[h]=="number"?t[h]:h}${r}) and (max-width:${(v!==-1&&typeof t[s[v]]=="number"?t[s[v]]:g)-n/100}${r})`}function p(h){return s.indexOf(h)+1<s.length?u(h,s[s.indexOf(h)+1]):l(h)}function d(h){const g=s.indexOf(h);return g===0?l(s[1]):g===s.length-1?a(s[g]):u(h,s[s.indexOf(h)+1]).replace("@media","@media not all and")}return q({keys:s,values:o,up:l,down:a,between:u,only:p,not:d,unit:r},i)}const tx={borderRadius:4},rx=tx;function Lo(e,t){return t?Pr(e,t,{clone:!1}):e}const Zd={xs:0,sm:600,md:900,lg:1200,xl:1536},jp={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Zd[e]}px)`};function Kt(e,t,r){const n=e.theme||{};if(Array.isArray(t)){const o=n.breakpoints||jp;return t.reduce((s,l,a)=>(s[o.up(o.keys[a])]=r(t[a]),s),{})}if(typeof t=="object"){const o=n.breakpoints||jp;return Object.keys(t).reduce((s,l)=>{if(Object.keys(o.values||Zd).indexOf(l)!==-1){const a=o.up(l);s[a]=r(t[l],l)}else{const a=l;s[a]=t[a]}return s},{})}return r(t)}function nx(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((n,i)=>{const o=e.up(i);return n[o]={},n},{}))||{}}function ix(e,t){return e.reduce((r,n)=>{const i=r[n];return(!i||Object.keys(i).length===0)&&delete r[n],r},t)}function ox(e,t){if(typeof e!="object")return{};const r={},n=Object.keys(t);return Array.isArray(e)?n.forEach((i,o)=>{o<e.length&&(r[i]=!0)}):n.forEach(i=>{e[i]!=null&&(r[i]=!0)}),r}function Pl({values:e,breakpoints:t,base:r}){const n=r||ox(e,t),i=Object.keys(n);if(i.length===0)return e;let o;return i.reduce((s,l,a)=>(Array.isArray(e)?(s[l]=e[a]!=null?e[a]:e[o],o=a):typeof e=="object"?(s[l]=e[l]!=null?e[l]:e[o],o=l):s[l]=e,s),{})}function Ol(e,t,r=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&r){const n=`vars.${t}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,e);if(n!=null)return n}return t.split(".").reduce((n,i)=>n&&n[i]!=null?n[i]:null,e)}function Ja(e,t,r,n=r){let i;return typeof e=="function"?i=e(r):Array.isArray(e)?i=e[r]||n:i=Ol(e,r)||n,t&&(i=t(i,n,e)),i}function se(e){const{prop:t,cssProperty:r=e.prop,themeKey:n,transform:i}=e,o=s=>{if(s[t]==null)return null;const l=s[t],a=s.theme,u=Ol(a,n)||{};return Kt(s,l,d=>{let h=Ja(u,i,d);return d===h&&typeof d=="string"&&(h=Ja(u,i,`${t}${d==="default"?"":Oo(d)}`,d)),r===!1?h:{[r]:h}})};return o.propTypes={},o.filterProps=[t],o}function sx(e){const t={};return r=>(t[r]===void 0&&(t[r]=e(r)),t[r])}const ax={m:"margin",p:"padding"},lx={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Hp={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},cx=sx(e=>{if(e.length>2)if(Hp[e])e=Hp[e];else return[e];const[t,r]=e.split(""),n=ax[t],i=lx[r]||"";return Array.isArray(i)?i.map(o=>n+o):[n+i]}),Jd=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],eh=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Jd,...eh];function ws(e,t,r,n){var i;const o=(i=Ol(e,t,!1))!=null?i:r;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function kg(e){return ws(e,"spacing",8)}function xs(e,t){if(typeof t=="string"||t==null)return t;const r=Math.abs(t),n=e(r);return t>=0?n:typeof n=="number"?-n:`-${n}`}function ux(e,t){return r=>e.reduce((n,i)=>(n[i]=xs(t,r),n),{})}function dx(e,t,r,n){if(t.indexOf(r)===-1)return null;const i=cx(r),o=ux(i,n),s=e[r];return Kt(e,s,o)}function Cg(e,t){const r=kg(e.theme);return Object.keys(e).map(n=>dx(e,t,n,r)).reduce(Lo,{})}function Ce(e){return Cg(e,Jd)}Ce.propTypes={};Ce.filterProps=Jd;function Se(e){return Cg(e,eh)}Se.propTypes={};Se.filterProps=eh;function hx(e=8){if(e.mui)return e;const t=kg({spacing:e}),r=(...n)=>(n.length===0?[1]:n).map(o=>{const s=t(o);return typeof s=="number"?`${s}px`:s}).join(" ");return r.mui=!0,r}function Ll(...e){const t=e.reduce((n,i)=>(i.filterProps.forEach(o=>{n[o]=i}),n),{}),r=n=>Object.keys(n).reduce((i,o)=>t[o]?Lo(i,t[o](n)):i,{});return r.propTypes={},r.filterProps=e.reduce((n,i)=>n.concat(i.filterProps),[]),r}function br(e){return typeof e!="number"?e:`${e}px solid`}const px=se({prop:"border",themeKey:"borders",transform:br}),fx=se({prop:"borderTop",themeKey:"borders",transform:br}),mx=se({prop:"borderRight",themeKey:"borders",transform:br}),gx=se({prop:"borderBottom",themeKey:"borders",transform:br}),vx=se({prop:"borderLeft",themeKey:"borders",transform:br}),yx=se({prop:"borderColor",themeKey:"palette"}),bx=se({prop:"borderTopColor",themeKey:"palette"}),wx=se({prop:"borderRightColor",themeKey:"palette"}),xx=se({prop:"borderBottomColor",themeKey:"palette"}),_x=se({prop:"borderLeftColor",themeKey:"palette"}),Il=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=ws(e.theme,"shape.borderRadius",4),r=n=>({borderRadius:xs(t,n)});return Kt(e,e.borderRadius,r)}return null};Il.propTypes={};Il.filterProps=["borderRadius"];Ll(px,fx,mx,gx,vx,yx,bx,wx,xx,_x,Il);const Nl=e=>{if(e.gap!==void 0&&e.gap!==null){const t=ws(e.theme,"spacing",8),r=n=>({gap:xs(t,n)});return Kt(e,e.gap,r)}return null};Nl.propTypes={};Nl.filterProps=["gap"];const Rl=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=ws(e.theme,"spacing",8),r=n=>({columnGap:xs(t,n)});return Kt(e,e.columnGap,r)}return null};Rl.propTypes={};Rl.filterProps=["columnGap"];const Dl=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=ws(e.theme,"spacing",8),r=n=>({rowGap:xs(t,n)});return Kt(e,e.rowGap,r)}return null};Dl.propTypes={};Dl.filterProps=["rowGap"];const kx=se({prop:"gridColumn"}),Cx=se({prop:"gridRow"}),Sx=se({prop:"gridAutoFlow"}),$x=se({prop:"gridAutoColumns"}),Ex=se({prop:"gridAutoRows"}),zx=se({prop:"gridTemplateColumns"}),Ax=se({prop:"gridTemplateRows"}),Tx=se({prop:"gridTemplateAreas"}),Px=se({prop:"gridArea"});Ll(Nl,Rl,Dl,kx,Cx,Sx,$x,Ex,zx,Ax,Tx,Px);function Si(e,t){return t==="grey"?t:e}const Ox=se({prop:"color",themeKey:"palette",transform:Si}),Lx=se({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Si}),Ix=se({prop:"backgroundColor",themeKey:"palette",transform:Si});Ll(Ox,Lx,Ix);function At(e){return e<=1&&e!==0?`${e*100}%`:e}const Nx=se({prop:"width",transform:At}),th=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=r=>{var n;return{maxWidth:((n=e.theme)==null||(n=n.breakpoints)==null||(n=n.values)==null?void 0:n[r])||Zd[r]||At(r)}};return Kt(e,e.maxWidth,t)}return null};th.filterProps=["maxWidth"];const Rx=se({prop:"minWidth",transform:At}),Dx=se({prop:"height",transform:At}),Mx=se({prop:"maxHeight",transform:At}),Fx=se({prop:"minHeight",transform:At});se({prop:"size",cssProperty:"width",transform:At});se({prop:"size",cssProperty:"height",transform:At});const Bx=se({prop:"boxSizing"});Ll(Nx,th,Rx,Dx,Mx,Fx,Bx);const Ux={border:{themeKey:"borders",transform:br},borderTop:{themeKey:"borders",transform:br},borderRight:{themeKey:"borders",transform:br},borderBottom:{themeKey:"borders",transform:br},borderLeft:{themeKey:"borders",transform:br},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Il},color:{themeKey:"palette",transform:Si},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Si},backgroundColor:{themeKey:"palette",transform:Si},p:{style:Se},pt:{style:Se},pr:{style:Se},pb:{style:Se},pl:{style:Se},px:{style:Se},py:{style:Se},padding:{style:Se},paddingTop:{style:Se},paddingRight:{style:Se},paddingBottom:{style:Se},paddingLeft:{style:Se},paddingX:{style:Se},paddingY:{style:Se},paddingInline:{style:Se},paddingInlineStart:{style:Se},paddingInlineEnd:{style:Se},paddingBlock:{style:Se},paddingBlockStart:{style:Se},paddingBlockEnd:{style:Se},m:{style:Ce},mt:{style:Ce},mr:{style:Ce},mb:{style:Ce},ml:{style:Ce},mx:{style:Ce},my:{style:Ce},margin:{style:Ce},marginTop:{style:Ce},marginRight:{style:Ce},marginBottom:{style:Ce},marginLeft:{style:Ce},marginX:{style:Ce},marginY:{style:Ce},marginInline:{style:Ce},marginInlineStart:{style:Ce},marginInlineEnd:{style:Ce},marginBlock:{style:Ce},marginBlockStart:{style:Ce},marginBlockEnd:{style:Ce},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Nl},rowGap:{style:Dl},columnGap:{style:Rl},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:At},maxWidth:{style:th},minWidth:{transform:At},height:{transform:At},maxHeight:{transform:At},minHeight:{transform:At},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Ml=Ux;function Vx(...e){const t=e.reduce((n,i)=>n.concat(Object.keys(i)),[]),r=new Set(t);return e.every(n=>r.size===Object.keys(n).length)}function jx(e,t){return typeof e=="function"?e(t):e}function Hx(){function e(r,n,i,o){const s={[r]:n,theme:i},l=o[r];if(!l)return{[r]:n};const{cssProperty:a=r,themeKey:u,transform:p,style:d}=l;if(n==null)return null;if(u==="typography"&&n==="inherit")return{[r]:n};const h=Ol(i,u)||{};return d?d(s):Kt(s,n,v=>{let y=Ja(h,p,v);return v===y&&typeof v=="string"&&(y=Ja(h,p,`${r}${v==="default"?"":Oo(v)}`,v)),a===!1?y:{[a]:y}})}function t(r){var n;const{sx:i,theme:o={}}=r||{};if(!i)return null;const s=(n=o.unstable_sxConfig)!=null?n:Ml;function l(a){let u=a;if(typeof a=="function")u=a(o);else if(typeof a!="object")return a;if(!u)return null;const p=nx(o.breakpoints),d=Object.keys(p);let h=p;return Object.keys(u).forEach(g=>{const v=jx(u[g],o);if(v!=null)if(typeof v=="object")if(s[g])h=Lo(h,e(g,v,o,s));else{const y=Kt({theme:o},v,k=>({[g]:k}));Vx(y,v)?h[g]=t({sx:v,theme:o}):h=Lo(h,y)}else h=Lo(h,e(g,v,o,s))}),ix(d,h)}return Array.isArray(i)?i.map(l):l(i)}return t}const Sg=Hx();Sg.filterProps=["sx"];const rh=Sg,Wx=["breakpoints","palette","spacing","shape"];function nh(e={},...t){const{breakpoints:r={},palette:n={},spacing:i,shape:o={}}=e,s=Cr(e,Wx),l=ex(r),a=hx(i);let u=Pr({breakpoints:l,direction:"ltr",components:{},palette:q({mode:"light"},n),spacing:a,shape:q({},rx,o)},s);return u=t.reduce((p,d)=>Pr(p,d),u),u.unstable_sxConfig=q({},Ml,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(d){return rh({sx:d,theme:this})},u}function Kx(e){return Object.keys(e).length===0}function Gx(e=null){const t=O.useContext(_g);return!t||Kx(t)?e:t}const qx=nh();function $g(e=qx){return Gx(e)}const Yx=["sx"],Xx=e=>{var t,r;const n={systemProps:{},otherProps:{}},i=(t=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?t:Ml;return Object.keys(e).forEach(o=>{i[o]?n.systemProps[o]=e[o]:n.otherProps[o]=e[o]}),n};function Qx(e){const{sx:t}=e,r=Cr(e,Yx),{systemProps:n,otherProps:i}=Xx(r);let o;return Array.isArray(t)?o=[n,...t]:typeof t=="function"?o=(...s)=>{const l=t(...s);return En(l)?q({},n,l):n}:o=q({},n,t),q({},i,{sx:o})}function Eg(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Eg(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function Zx(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=Eg(e))&&(n&&(n+=" "),n+=t);return n}const Jx=["variant"];function Wp(e){return e.length===0}function zg(e){const{variant:t}=e,r=Cr(e,Jx);let n=t||"";return Object.keys(r).sort().forEach(i=>{i==="color"?n+=Wp(n)?e[i]:Oo(e[i]):n+=`${Wp(n)?i:Oo(i)}${Oo(e[i].toString())}`}),n}const e_=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function t_(e){return Object.keys(e).length===0}function r_(e){return typeof e=="string"&&e.charCodeAt(0)>96}const n_=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,i_=(e,t)=>{let r=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(r=t.components[e].variants);const n={};return r.forEach(i=>{const o=zg(i.props);n[o]=i.style}),n},o_=(e,t,r,n)=>{var i;const{ownerState:o={}}=e,s=[],l=r==null||(i=r.components)==null||(i=i[n])==null?void 0:i.variants;return l&&l.forEach(a=>{let u=!0;Object.keys(a.props).forEach(p=>{o[p]!==a.props[p]&&e[p]!==a.props[p]&&(u=!1)}),u&&s.push(t[zg(a.props)])}),s};function wa(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const s_=nh(),a_=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function uo({defaultTheme:e,theme:t,themeId:r}){return t_(t)?e:t[r]||t}function l_(e){return e?(t,r)=>r[e]:null}function c_(e={}){const{themeId:t,defaultTheme:r=s_,rootShouldForwardProp:n=wa,slotShouldForwardProp:i=wa}=e,o=s=>rh(q({},s,{theme:uo(q({},s,{defaultTheme:r,themeId:t}))}));return o.__mui_systemSx=!0,(s,l={})=>{Qw(s,x=>x.filter(_=>!(_!=null&&_.__mui_systemSx)));const{name:a,slot:u,skipVariantsResolver:p,skipSx:d,overridesResolver:h=l_(a_(u))}=l,g=Cr(l,e_),v=p!==void 0?p:u&&u!=="Root"&&u!=="root"||!1,y=d||!1;let k,b=wa;u==="Root"||u==="root"?b=n:u?b=i:r_(s)&&(b=void 0);const m=Xw(s,q({shouldForwardProp:b,label:k},g)),w=(x,..._)=>{const C=_?_.map($=>typeof $=="function"&&$.__emotion_real!==$?W=>$(q({},W,{theme:uo(q({},W,{defaultTheme:r,themeId:t}))})):$):[];let S=x;a&&h&&C.push($=>{const W=uo(q({},$,{defaultTheme:r,themeId:t})),me=n_(a,W);if(me){const oe={};return Object.entries(me).forEach(([Pe,He])=>{oe[Pe]=typeof He=="function"?He(q({},$,{theme:W})):He}),h($,oe)}return null}),a&&!v&&C.push($=>{const W=uo(q({},$,{defaultTheme:r,themeId:t}));return o_($,i_(a,W),W,a)}),y||C.push(o);const z=C.length-_.length;if(Array.isArray(x)&&z>0){const $=new Array(z).fill("");S=[...x,...$],S.raw=[...x.raw,...$]}else typeof x=="function"&&x.__emotion_real!==x&&(S=$=>x(q({},$,{theme:uo(q({},$,{defaultTheme:r,themeId:t}))})));const P=m(S,...C);return s.muiName&&(P.muiName=s.muiName),P};return m.withConfig&&(w.withConfig=m.withConfig),w}}function u_(e){const{theme:t,name:r,props:n}=e;return!t||!t.components||!t.components[r]||!t.components[r].defaultProps?n:cg(t.components[r].defaultProps,n)}function d_({props:e,name:t,defaultTheme:r,themeId:n}){let i=$g(r);return n&&(i=i[n]||i),u_({theme:i,name:t,props:e})}function Ag(e,t=0,r=1){return Math.min(Math.max(t,e),r)}function h_(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&r[0].length===1&&(r=r.map(n=>n+n)),r?`rgb${r.length===4?"a":""}(${r.map((n,i)=>i<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function Di(e){if(e.type)return e;if(e.charAt(0)==="#")return Di(h_(e));const t=e.indexOf("("),r=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error(Ni(9,e));let n=e.substring(t+1,e.length-1),i;if(r==="color"){if(n=n.split(" "),i=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(Ni(10,i))}else n=n.split(",");return n=n.map(o=>parseFloat(o)),{type:r,values:n,colorSpace:i}}function ih(e){const{type:t,colorSpace:r}=e;let{values:n}=e;return t.indexOf("rgb")!==-1?n=n.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),t.indexOf("color")!==-1?n=`${r} ${n.join(" ")}`:n=`${n.join(", ")}`,`${t}(${n})`}function p_(e){e=Di(e);const{values:t}=e,r=t[0],n=t[1]/100,i=t[2]/100,o=n*Math.min(i,1-i),s=(u,p=(u+r/30)%12)=>i-o*Math.max(Math.min(p-3,9-p,1),-1);let l="rgb";const a=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(l+="a",a.push(t[3])),ih({type:l,values:a})}function Kp(e){e=Di(e);let t=e.type==="hsl"||e.type==="hsla"?Di(p_(e)).values:e.values;return t=t.map(r=>(e.type!=="color"&&(r/=255),r<=.03928?r/12.92:((r+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function f_(e,t){const r=Kp(e),n=Kp(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}function m_(e,t){if(e=Di(e),t=Ag(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let r=0;r<3;r+=1)e.values[r]*=1-t;return ih(e)}function g_(e,t){if(e=Di(e),t=Ag(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(e.type.indexOf("color")!==-1)for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return ih(e)}function v_(e,t){return q({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const y_=["mode","contrastThreshold","tonalOffset"],Gp={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:is.white,default:is.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},_c={text:{primary:is.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:is.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function qp(e,t,r,n){const i=n.light||n,o=n.dark||n*1.5;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:t==="light"?e.light=g_(e.main,i):t==="dark"&&(e.dark=m_(e.main,o)))}function b_(e="light"){return e==="dark"?{main:Jn[200],light:Jn[50],dark:Jn[400]}:{main:Jn[700],light:Jn[400],dark:Jn[800]}}function w_(e="light"){return e==="dark"?{main:Zn[200],light:Zn[50],dark:Zn[400]}:{main:Zn[500],light:Zn[300],dark:Zn[700]}}function x_(e="light"){return e==="dark"?{main:Qn[500],light:Qn[300],dark:Qn[700]}:{main:Qn[700],light:Qn[400],dark:Qn[800]}}function __(e="light"){return e==="dark"?{main:ei[400],light:ei[300],dark:ei[700]}:{main:ei[700],light:ei[500],dark:ei[900]}}function k_(e="light"){return e==="dark"?{main:ti[400],light:ti[300],dark:ti[700]}:{main:ti[800],light:ti[500],dark:ti[900]}}function C_(e="light"){return e==="dark"?{main:lo[400],light:lo[300],dark:lo[700]}:{main:"#ed6c02",light:lo[500],dark:lo[900]}}function S_(e){const{mode:t="light",contrastThreshold:r=3,tonalOffset:n=.2}=e,i=Cr(e,y_),o=e.primary||b_(t),s=e.secondary||w_(t),l=e.error||x_(t),a=e.info||__(t),u=e.success||k_(t),p=e.warning||C_(t);function d(y){return f_(y,_c.text.primary)>=r?_c.text.primary:Gp.text.primary}const h=({color:y,name:k,mainShade:b=500,lightShade:m=300,darkShade:w=700})=>{if(y=q({},y),!y.main&&y[b]&&(y.main=y[b]),!y.hasOwnProperty("main"))throw new Error(Ni(11,k?` (${k})`:"",b));if(typeof y.main!="string")throw new Error(Ni(12,k?` (${k})`:"",JSON.stringify(y.main)));return qp(y,"light",m,n),qp(y,"dark",w,n),y.contrastText||(y.contrastText=d(y.main)),y},g={dark:_c,light:Gp};return Pr(q({common:q({},is),mode:t,primary:h({color:o,name:"primary"}),secondary:h({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:h({color:l,name:"error"}),warning:h({color:p,name:"warning"}),info:h({color:a,name:"info"}),success:h({color:u,name:"success"}),grey:q1,contrastThreshold:r,getContrastText:d,augmentColor:h,tonalOffset:n},g[t]),i)}const $_=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function E_(e){return Math.round(e*1e5)/1e5}const Yp={textTransform:"uppercase"},Xp='"Roboto", "Helvetica", "Arial", sans-serif';function z_(e,t){const r=typeof t=="function"?t(e):t,{fontFamily:n=Xp,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:l=500,fontWeightBold:a=700,htmlFontSize:u=16,allVariants:p,pxToRem:d}=r,h=Cr(r,$_),g=i/14,v=d||(b=>`${b/u*g}rem`),y=(b,m,w,x,_)=>q({fontFamily:n,fontWeight:b,fontSize:v(m),lineHeight:w},n===Xp?{letterSpacing:`${E_(x/m)}em`}:{},_,p),k={h1:y(o,96,1.167,-1.5),h2:y(o,60,1.2,-.5),h3:y(s,48,1.167,0),h4:y(s,34,1.235,.25),h5:y(s,24,1.334,0),h6:y(l,20,1.6,.15),subtitle1:y(s,16,1.75,.15),subtitle2:y(l,14,1.57,.1),body1:y(s,16,1.5,.15),body2:y(s,14,1.43,.15),button:y(l,14,1.75,.4,Yp),caption:y(s,12,1.66,.4),overline:y(s,12,2.66,1,Yp),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Pr(q({htmlFontSize:u,pxToRem:v,fontFamily:n,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:l,fontWeightBold:a},k),h,{clone:!1})}const A_=.2,T_=.14,P_=.12;function ge(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${A_})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${T_})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${P_})`].join(",")}const O_=["none",ge(0,2,1,-1,0,1,1,0,0,1,3,0),ge(0,3,1,-2,0,2,2,0,0,1,5,0),ge(0,3,3,-2,0,3,4,0,0,1,8,0),ge(0,2,4,-1,0,4,5,0,0,1,10,0),ge(0,3,5,-1,0,5,8,0,0,1,14,0),ge(0,3,5,-1,0,6,10,0,0,1,18,0),ge(0,4,5,-2,0,7,10,1,0,2,16,1),ge(0,5,5,-3,0,8,10,1,0,3,14,2),ge(0,5,6,-3,0,9,12,1,0,3,16,2),ge(0,6,6,-3,0,10,14,1,0,4,18,3),ge(0,6,7,-4,0,11,15,1,0,4,20,3),ge(0,7,8,-4,0,12,17,2,0,5,22,4),ge(0,7,8,-4,0,13,19,2,0,5,24,4),ge(0,7,9,-4,0,14,21,2,0,5,26,4),ge(0,8,9,-5,0,15,22,2,0,6,28,5),ge(0,8,10,-5,0,16,24,2,0,6,30,5),ge(0,8,11,-5,0,17,26,2,0,6,32,5),ge(0,9,11,-5,0,18,28,2,0,7,34,6),ge(0,9,12,-6,0,19,29,2,0,7,36,6),ge(0,10,13,-6,0,20,31,3,0,8,38,7),ge(0,10,13,-6,0,21,33,3,0,8,40,7),ge(0,10,14,-6,0,22,35,3,0,8,42,7),ge(0,11,14,-7,0,23,36,3,0,9,44,8),ge(0,11,15,-7,0,24,38,3,0,9,46,8)],L_=O_,I_=["duration","easing","delay"],N_={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},R_={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Qp(e){return`${Math.round(e)}ms`}function D_(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function M_(e){const t=q({},N_,e.easing),r=q({},R_,e.duration);return q({getAutoHeightDuration:D_,create:(i=["all"],o={})=>{const{duration:s=r.standard,easing:l=t.easeInOut,delay:a=0}=o;return Cr(o,I_),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof s=="string"?s:Qp(s)} ${l} ${typeof a=="string"?a:Qp(a)}`).join(",")}},e,{easing:t,duration:r})}const F_={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},B_=F_,U_=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function V_(e={},...t){const{mixins:r={},palette:n={},transitions:i={},typography:o={}}=e,s=Cr(e,U_);if(e.vars)throw new Error(Ni(18));const l=S_(n),a=nh(e);let u=Pr(a,{mixins:v_(a.breakpoints,r),palette:l,shadows:L_.slice(),typography:z_(l,o),transitions:M_(i),zIndex:q({},B_)});return u=Pr(u,s),u=t.reduce((p,d)=>Pr(p,d),u),u.unstable_sxConfig=q({},Ml,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(d){return rh({sx:d,theme:this})},u}const j_=V_(),oh=j_;function H_(){const e=$g(oh);return e[qd]||e}function W_({props:e,name:t}){return d_({props:e,name:t,defaultTheme:oh,themeId:qd})}const K_=e=>wa(e)&&e!=="classes",G_=c_({themeId:qd,defaultTheme:oh,rootShouldForwardProp:K_}),q_=G_,dn=Math.min,zt=Math.max,el=Math.round,Js=Math.floor,hn=e=>({x:e,y:e}),Y_={left:"right",right:"left",bottom:"top",top:"bottom"},X_={start:"end",end:"start"};function Mu(e,t,r){return zt(e,dn(t,r))}function Gi(e,t){return typeof e=="function"?e(t):e}function pn(e){return e.split("-")[0]}function qi(e){return e.split("-")[1]}function Tg(e){return e==="x"?"y":"x"}function sh(e){return e==="y"?"height":"width"}function _s(e){return["top","bottom"].includes(pn(e))?"y":"x"}function ah(e){return Tg(_s(e))}function Q_(e,t,r){r===void 0&&(r=!1);const n=qi(e),i=ah(e),o=sh(i);let s=i==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=tl(s)),[s,tl(s)]}function Z_(e){const t=tl(e);return[Fu(e),t,Fu(t)]}function Fu(e){return e.replace(/start|end/g,t=>X_[t])}function J_(e,t,r){const n=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return r?t?i:n:t?n:i;case"left":case"right":return t?o:s;default:return[]}}function e2(e,t,r,n){const i=qi(e);let o=J_(pn(e),r==="start",n);return i&&(o=o.map(s=>s+"-"+i),t&&(o=o.concat(o.map(Fu)))),o}function tl(e){return e.replace(/left|right|bottom|top/g,t=>Y_[t])}function t2(e){return{top:0,right:0,bottom:0,left:0,...e}}function Pg(e){return typeof e!="number"?t2(e):{top:e,right:e,bottom:e,left:e}}function rl(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Zp(e,t,r){let{reference:n,floating:i}=e;const o=_s(t),s=ah(t),l=sh(s),a=pn(t),u=o==="y",p=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,h=n[l]/2-i[l]/2;let g;switch(a){case"top":g={x:p,y:n.y-i.height};break;case"bottom":g={x:p,y:n.y+n.height};break;case"right":g={x:n.x+n.width,y:d};break;case"left":g={x:n.x-i.width,y:d};break;default:g={x:n.x,y:n.y}}switch(qi(t)){case"start":g[s]-=h*(r&&u?-1:1);break;case"end":g[s]+=h*(r&&u?-1:1);break}return g}const r2=async(e,t,r)=>{const{placement:n="bottom",strategy:i="absolute",middleware:o=[],platform:s}=r,l=o.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:p,y:d}=Zp(u,n,a),h=n,g={},v=0;for(let y=0;y<l.length;y++){const{name:k,fn:b}=l[y],{x:m,y:w,data:x,reset:_}=await b({x:p,y:d,initialPlacement:n,placement:h,strategy:i,middlewareData:g,rects:u,platform:s,elements:{reference:e,floating:t}});if(p=m??p,d=w??d,g={...g,[k]:{...g[k],...x}},_&&v<=50){v++,typeof _=="object"&&(_.placement&&(h=_.placement),_.rects&&(u=_.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):_.rects),{x:p,y:d}=Zp(u,h,a)),y=-1;continue}}return{x:p,y:d,placement:h,strategy:i,middlewareData:g}};async function lh(e,t){var r;t===void 0&&(t={});const{x:n,y:i,platform:o,rects:s,elements:l,strategy:a}=e,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:h=!1,padding:g=0}=Gi(t,e),v=Pg(g),k=l[h?d==="floating"?"reference":"floating":d],b=rl(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(k)))==null||r?k:k.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:u,rootBoundary:p,strategy:a})),m=d==="floating"?{...s.floating,x:n,y:i}:s.reference,w=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),x=await(o.isElement==null?void 0:o.isElement(w))?await(o.getScale==null?void 0:o.getScale(w))||{x:1,y:1}:{x:1,y:1},_=rl(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:m,offsetParent:w,strategy:a}):m);return{top:(b.top-_.top+v.top)/x.y,bottom:(_.bottom-b.bottom+v.bottom)/x.y,left:(b.left-_.left+v.left)/x.x,right:(_.right-b.right+v.right)/x.x}}const n2=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:i,rects:o,platform:s,elements:l}=t,{element:a,padding:u=0}=Gi(e,t)||{};if(a==null)return{};const p=Pg(u),d={x:r,y:n},h=ah(i),g=sh(h),v=await s.getDimensions(a),y=h==="y",k=y?"top":"left",b=y?"bottom":"right",m=y?"clientHeight":"clientWidth",w=o.reference[g]+o.reference[h]-d[h]-o.floating[g],x=d[h]-o.reference[h],_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let C=_?_[m]:0;(!C||!await(s.isElement==null?void 0:s.isElement(_)))&&(C=l.floating[m]||o.floating[g]);const S=w/2-x/2,z=C/2-v[g]/2-1,P=dn(p[k],z),$=dn(p[b],z),W=P,me=C-v[g]-$,oe=C/2-v[g]/2+S,Pe=Mu(W,oe,me),St=qi(i)!=null&&oe!=Pe&&o.reference[g]/2-(oe<W?P:$)-v[g]/2<0?oe<W?W-oe:me-oe:0;return{[h]:d[h]-St,data:{[h]:Pe,centerOffset:oe-Pe+St}}}}),i2=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r;const{placement:n,middlewareData:i,rects:o,initialPlacement:s,platform:l,elements:a}=t,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:d,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...y}=Gi(e,t),k=pn(n),b=pn(s)===s,m=await(l.isRTL==null?void 0:l.isRTL(a.floating)),w=d||(b||!v?[tl(s)]:Z_(s));!d&&g!=="none"&&w.push(...e2(s,v,g,m));const x=[s,...w],_=await lh(t,y),C=[];let S=((r=i.flip)==null?void 0:r.overflows)||[];if(u&&C.push(_[k]),p){const W=Q_(n,o,m);C.push(_[W[0]],_[W[1]])}if(S=[...S,{placement:n,overflows:C}],!C.every(W=>W<=0)){var z,P;const W=(((z=i.flip)==null?void 0:z.index)||0)+1,me=x[W];if(me)return{data:{index:W,overflows:S},reset:{placement:me}};let oe=(P=S.filter(Pe=>Pe.overflows[0]<=0).sort((Pe,He)=>Pe.overflows[1]-He.overflows[1])[0])==null?void 0:P.placement;if(!oe)switch(h){case"bestFit":{var $;const Pe=($=S.map(He=>[He.placement,He.overflows.filter(St=>St>0).reduce((St,Ji)=>St+Ji,0)]).sort((He,St)=>He[1]-St[1])[0])==null?void 0:$[0];Pe&&(oe=Pe);break}case"initialPlacement":oe=s;break}if(n!==oe)return{reset:{placement:oe}}}return{}}}};async function o2(e,t){const{placement:r,platform:n,elements:i}=e,o=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=pn(r),l=qi(r),a=_s(r)==="y",u=["left","top"].includes(s)?-1:1,p=o&&a?-1:1,d=Gi(t,e);let{mainAxis:h,crossAxis:g,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof v=="number"&&(g=l==="end"?v*-1:v),a?{x:g*p,y:h*u}:{x:h*u,y:g*p}}const s2=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:r,y:n}=t,i=await o2(t,e);return{x:r+i.x,y:n+i.y,data:i}}}},a2=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:i}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:l={fn:k=>{let{x:b,y:m}=k;return{x:b,y:m}}},...a}=Gi(e,t),u={x:r,y:n},p=await lh(t,a),d=_s(pn(i)),h=Tg(d);let g=u[h],v=u[d];if(o){const k=h==="y"?"top":"left",b=h==="y"?"bottom":"right",m=g+p[k],w=g-p[b];g=Mu(m,g,w)}if(s){const k=d==="y"?"top":"left",b=d==="y"?"bottom":"right",m=v+p[k],w=v-p[b];v=Mu(m,v,w)}const y=l.fn({...t,[h]:g,[d]:v});return{...y,data:{x:y.x-r,y:y.y-n}}}}},Jp=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:n,platform:i,elements:o}=t,{apply:s=()=>{},...l}=Gi(e,t),a=await lh(t,l),u=pn(r),p=qi(r),d=_s(r)==="y",{width:h,height:g}=n.floating;let v,y;u==="top"||u==="bottom"?(v=u,y=p===(await(i.isRTL==null?void 0:i.isRTL(o.floating))?"start":"end")?"left":"right"):(y=u,v=p==="end"?"top":"bottom");const k=g-a[v],b=h-a[y],m=!t.middlewareData.shift;let w=k,x=b;if(d){const C=h-a.left-a.right;x=p||m?dn(b,C):C}else{const C=g-a.top-a.bottom;w=p||m?dn(k,C):C}if(m&&!p){const C=zt(a.left,0),S=zt(a.right,0),z=zt(a.top,0),P=zt(a.bottom,0);d?x=h-2*(C!==0||S!==0?C+S:zt(a.left,a.right)):w=g-2*(z!==0||P!==0?z+P:zt(a.top,a.bottom))}await s({...t,availableWidth:x,availableHeight:w});const _=await i.getDimensions(o.floating);return h!==_.width||g!==_.height?{reset:{rects:!0}}:{}}}};function fn(e){return Og(e)?(e.nodeName||"").toLowerCase():"#document"}function It(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Mr(e){var t;return(t=(Og(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Og(e){return e instanceof Node||e instanceof It(e).Node}function Rr(e){return e instanceof Element||e instanceof It(e).Element}function kr(e){return e instanceof HTMLElement||e instanceof It(e).HTMLElement}function ef(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof It(e).ShadowRoot}function ks(e){const{overflow:t,overflowX:r,overflowY:n,display:i}=Gt(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(i)}function l2(e){return["table","td","th"].includes(fn(e))}function ch(e){const t=uh(),r=Gt(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function c2(e){let t=Mi(e);for(;kr(t)&&!Fl(t);){if(ch(t))return t;t=Mi(t)}return null}function uh(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Fl(e){return["html","body","#document"].includes(fn(e))}function Gt(e){return It(e).getComputedStyle(e)}function Bl(e){return Rr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Mi(e){if(fn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ef(e)&&e.host||Mr(e);return ef(t)?t.host:t}function Lg(e){const t=Mi(e);return Fl(t)?e.ownerDocument?e.ownerDocument.body:e.body:kr(t)&&ks(t)?t:Lg(t)}function nl(e,t){var r;t===void 0&&(t=[]);const n=Lg(e),i=n===((r=e.ownerDocument)==null?void 0:r.body),o=It(n);return i?t.concat(o,o.visualViewport||[],ks(n)?n:[]):t.concat(n,nl(n))}function Ig(e){const t=Gt(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=kr(e),o=i?e.offsetWidth:r,s=i?e.offsetHeight:n,l=el(r)!==o||el(n)!==s;return l&&(r=o,n=s),{width:r,height:n,$:l}}function dh(e){return Rr(e)?e:e.contextElement}function $i(e){const t=dh(e);if(!kr(t))return hn(1);const r=t.getBoundingClientRect(),{width:n,height:i,$:o}=Ig(t);let s=(o?el(r.width):r.width)/n,l=(o?el(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const u2=hn(0);function Ng(e){const t=It(e);return!uh()||!t.visualViewport?u2:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function d2(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==It(e)?!1:t}function Un(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),o=dh(e);let s=hn(1);t&&(n?Rr(n)&&(s=$i(n)):s=$i(e));const l=d2(o,r,n)?Ng(o):hn(0);let a=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,p=i.width/s.x,d=i.height/s.y;if(o){const h=It(o),g=n&&Rr(n)?It(n):n;let v=h.frameElement;for(;v&&n&&g!==h;){const y=$i(v),k=v.getBoundingClientRect(),b=Gt(v),m=k.left+(v.clientLeft+parseFloat(b.paddingLeft))*y.x,w=k.top+(v.clientTop+parseFloat(b.paddingTop))*y.y;a*=y.x,u*=y.y,p*=y.x,d*=y.y,a+=m,u+=w,v=It(v).frameElement}}return rl({width:p,height:d,x:a,y:u})}function h2(e){let{rect:t,offsetParent:r,strategy:n}=e;const i=kr(r),o=Mr(r);if(r===o)return t;let s={scrollLeft:0,scrollTop:0},l=hn(1);const a=hn(0);if((i||!i&&n!=="fixed")&&((fn(r)!=="body"||ks(o))&&(s=Bl(r)),kr(r))){const u=Un(r);l=$i(r),a.x=u.x+r.clientLeft,a.y=u.y+r.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-s.scrollLeft*l.x+a.x,y:t.y*l.y-s.scrollTop*l.y+a.y}}function p2(e){return Array.from(e.getClientRects())}function Rg(e){return Un(Mr(e)).left+Bl(e).scrollLeft}function f2(e){const t=Mr(e),r=Bl(e),n=e.ownerDocument.body,i=zt(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),o=zt(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-r.scrollLeft+Rg(e);const l=-r.scrollTop;return Gt(n).direction==="rtl"&&(s+=zt(t.clientWidth,n.clientWidth)-i),{width:i,height:o,x:s,y:l}}function m2(e,t){const r=It(e),n=Mr(e),i=r.visualViewport;let o=n.clientWidth,s=n.clientHeight,l=0,a=0;if(i){o=i.width,s=i.height;const u=uh();(!u||u&&t==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:o,height:s,x:l,y:a}}function g2(e,t){const r=Un(e,!0,t==="fixed"),n=r.top+e.clientTop,i=r.left+e.clientLeft,o=kr(e)?$i(e):hn(1),s=e.clientWidth*o.x,l=e.clientHeight*o.y,a=i*o.x,u=n*o.y;return{width:s,height:l,x:a,y:u}}function tf(e,t,r){let n;if(t==="viewport")n=m2(e,r);else if(t==="document")n=f2(Mr(e));else if(Rr(t))n=g2(t,r);else{const i=Ng(e);n={...t,x:t.x-i.x,y:t.y-i.y}}return rl(n)}function Dg(e,t){const r=Mi(e);return r===t||!Rr(r)||Fl(r)?!1:Gt(r).position==="fixed"||Dg(r,t)}function v2(e,t){const r=t.get(e);if(r)return r;let n=nl(e).filter(l=>Rr(l)&&fn(l)!=="body"),i=null;const o=Gt(e).position==="fixed";let s=o?Mi(e):e;for(;Rr(s)&&!Fl(s);){const l=Gt(s),a=ch(s);!a&&l.position==="fixed"&&(i=null),(o?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ks(s)&&!a&&Dg(e,s))?n=n.filter(p=>p!==s):i=l,s=Mi(s)}return t.set(e,n),n}function y2(e){let{element:t,boundary:r,rootBoundary:n,strategy:i}=e;const s=[...r==="clippingAncestors"?v2(t,this._c):[].concat(r),n],l=s[0],a=s.reduce((u,p)=>{const d=tf(t,p,i);return u.top=zt(d.top,u.top),u.right=dn(d.right,u.right),u.bottom=dn(d.bottom,u.bottom),u.left=zt(d.left,u.left),u},tf(t,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function b2(e){return Ig(e)}function w2(e,t,r){const n=kr(t),i=Mr(t),o=r==="fixed",s=Un(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const a=hn(0);if(n||!n&&!o)if((fn(t)!=="body"||ks(i))&&(l=Bl(t)),n){const u=Un(t,!0,o,t);a.x=u.x+t.clientLeft,a.y=u.y+t.clientTop}else i&&(a.x=Rg(i));return{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}function rf(e,t){return!kr(e)||Gt(e).position==="fixed"?null:t?t(e):e.offsetParent}function Mg(e,t){const r=It(e);if(!kr(e))return r;let n=rf(e,t);for(;n&&l2(n)&&Gt(n).position==="static";)n=rf(n,t);return n&&(fn(n)==="html"||fn(n)==="body"&&Gt(n).position==="static"&&!ch(n))?r:n||c2(e)||r}const x2=async function(e){let{reference:t,floating:r,strategy:n}=e;const i=this.getOffsetParent||Mg,o=this.getDimensions;return{reference:w2(t,await i(r),n),floating:{x:0,y:0,...await o(r)}}};function _2(e){return Gt(e).direction==="rtl"}const xa={convertOffsetParentRelativeRectToViewportRelativeRect:h2,getDocumentElement:Mr,getClippingRect:y2,getOffsetParent:Mg,getElementRects:x2,getClientRects:p2,getDimensions:b2,getScale:$i,isElement:Rr,isRTL:_2};function k2(e,t){let r=null,n;const i=Mr(e);function o(){clearTimeout(n),r&&r.disconnect(),r=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:u,top:p,width:d,height:h}=e.getBoundingClientRect();if(l||t(),!d||!h)return;const g=Js(p),v=Js(i.clientWidth-(u+d)),y=Js(i.clientHeight-(p+h)),k=Js(u),m={rootMargin:-g+"px "+-v+"px "+-y+"px "+-k+"px",threshold:zt(0,dn(1,a))||1};let w=!0;function x(_){const C=_[0].intersectionRatio;if(C!==a){if(!w)return s();C?s(!1,C):n=setTimeout(()=>{s(!1,1e-7)},100)}w=!1}try{r=new IntersectionObserver(x,{...m,root:i.ownerDocument})}catch{r=new IntersectionObserver(x,m)}r.observe(e)}return s(!0),o}function C2(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,u=dh(e),p=i||o?[...u?nl(u):[],...nl(t)]:[];p.forEach(b=>{i&&b.addEventListener("scroll",r,{passive:!0}),o&&b.addEventListener("resize",r)});const d=u&&l?k2(u,r):null;let h=-1,g=null;s&&(g=new ResizeObserver(b=>{let[m]=b;m&&m.target===u&&g&&(g.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{g&&g.observe(t)})),r()}),u&&!a&&g.observe(u),g.observe(t));let v,y=a?Un(e):null;a&&k();function k(){const b=Un(e);y&&(b.x!==y.x||b.y!==y.y||b.width!==y.width||b.height!==y.height)&&r(),y=b,v=requestAnimationFrame(k)}return r(),()=>{p.forEach(b=>{i&&b.removeEventListener("scroll",r),o&&b.removeEventListener("resize",r)}),d&&d(),g&&g.disconnect(),g=null,a&&cancelAnimationFrame(v)}}const S2=(e,t,r)=>{const n=new Map,i={platform:xa,...r},o={...i.platform,_c:n};return r2(e,t,{...i,platform:o})},$2=O.createContext(),nf=$2;function E2(e){return ug("MuiGrid",e)}const z2=[0,1,2,3,4,5,6,7,8,9,10],A2=["column-reverse","column","row-reverse","row"],T2=["nowrap","wrap-reverse","wrap"],ho=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],ls=ew("MuiGrid",["root","container","item","zeroMinWidth",...z2.map(e=>`spacing-xs-${e}`),...A2.map(e=>`direction-xs-${e}`),...T2.map(e=>`wrap-xs-${e}`),...ho.map(e=>`grid-xs-${e}`),...ho.map(e=>`grid-sm-${e}`),...ho.map(e=>`grid-md-${e}`),...ho.map(e=>`grid-lg-${e}`),...ho.map(e=>`grid-xl-${e}`)]),P2=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Ei(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function O2({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce((n,i)=>{let o={};if(t[i]&&(r=t[i]),!r)return n;if(r===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(r==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=Pl({values:t.columns,breakpoints:e.breakpoints.values}),l=typeof s=="object"?s[i]:s;if(l==null)return n;const a=`${Math.round(r/l*1e8)/1e6}%`;let u={};if(t.container&&t.item&&t.columnSpacing!==0){const p=e.spacing(t.columnSpacing);if(p!=="0px"){const d=`calc(${a} + ${Ei(p)})`;u={flexBasis:d,maxWidth:d}}}o=q({flexBasis:a,flexGrow:0,maxWidth:a},u)}return e.breakpoints.values[i]===0?Object.assign(n,o):n[e.breakpoints.up(i)]=o,n},{})}function L2({theme:e,ownerState:t}){const r=Pl({values:t.direction,breakpoints:e.breakpoints.values});return Kt({theme:e},r,n=>{const i={flexDirection:n};return n.indexOf("column")===0&&(i[`& > .${ls.item}`]={maxWidth:"none"}),i})}function Fg({breakpoints:e,values:t}){let r="";Object.keys(t).forEach(i=>{r===""&&t[i]!==0&&(r=i)});const n=Object.keys(e).sort((i,o)=>e[i]-e[o]);return n.slice(0,n.indexOf(r))}function I2({theme:e,ownerState:t}){const{container:r,rowSpacing:n}=t;let i={};if(r&&n!==0){const o=Pl({values:n,breakpoints:e.breakpoints.values});let s;typeof o=="object"&&(s=Fg({breakpoints:e.breakpoints.values,values:o})),i=Kt({theme:e},o,(l,a)=>{var u;const p=e.spacing(l);return p!=="0px"?{marginTop:`-${Ei(p)}`,[`& > .${ls.item}`]:{paddingTop:Ei(p)}}:(u=s)!=null&&u.includes(a)?{}:{marginTop:0,[`& > .${ls.item}`]:{paddingTop:0}}})}return i}function N2({theme:e,ownerState:t}){const{container:r,columnSpacing:n}=t;let i={};if(r&&n!==0){const o=Pl({values:n,breakpoints:e.breakpoints.values});let s;typeof o=="object"&&(s=Fg({breakpoints:e.breakpoints.values,values:o})),i=Kt({theme:e},o,(l,a)=>{var u;const p=e.spacing(l);return p!=="0px"?{width:`calc(100% + ${Ei(p)})`,marginLeft:`-${Ei(p)}`,[`& > .${ls.item}`]:{paddingLeft:Ei(p)}}:(u=s)!=null&&u.includes(a)?{}:{width:"100%",marginLeft:0,[`& > .${ls.item}`]:{paddingLeft:0}}})}return i}function R2(e,t,r={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[r[`spacing-xs-${String(e)}`]];const n=[];return t.forEach(i=>{const o=e[i];Number(o)>0&&n.push(r[`spacing-${i}-${String(o)}`])}),n}const D2=q_("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{container:n,direction:i,item:o,spacing:s,wrap:l,zeroMinWidth:a,breakpoints:u}=r;let p=[];n&&(p=R2(s,u,t));const d=[];return u.forEach(h=>{const g=r[h];g&&d.push(t[`grid-${h}-${String(g)}`])}),[t.root,n&&t.container,o&&t.item,a&&t.zeroMinWidth,...p,i!=="row"&&t[`direction-xs-${String(i)}`],l!=="wrap"&&t[`wrap-xs-${String(l)}`],...d]}})(({ownerState:e})=>q({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),L2,I2,N2,O2);function M2(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const r=[];return t.forEach(n=>{const i=e[n];if(Number(i)>0){const o=`spacing-${n}-${String(i)}`;r.push(o)}}),r}const F2=e=>{const{classes:t,container:r,direction:n,item:i,spacing:o,wrap:s,zeroMinWidth:l,breakpoints:a}=e;let u=[];r&&(u=M2(o,a));const p=[];a.forEach(h=>{const g=e[h];g&&p.push(`grid-${h}-${String(g)}`)});const d={root:["root",r&&"container",i&&"item",l&&"zeroMinWidth",...u,n!=="row"&&`direction-xs-${String(n)}`,s!=="wrap"&&`wrap-xs-${String(s)}`,...p]};return Y1(d,E2,t)},B2=O.forwardRef(function(t,r){const n=W_({props:t,name:"MuiGrid"}),{breakpoints:i}=H_(),o=Qx(n),{className:s,columns:l,columnSpacing:a,component:u="div",container:p=!1,direction:d="row",item:h=!1,rowSpacing:g,spacing:v=0,wrap:y="wrap",zeroMinWidth:k=!1}=o,b=Cr(o,P2),m=g||v,w=a||v,x=O.useContext(nf),_=p?l||12:x,C={},S=q({},b);i.keys.forEach($=>{b[$]!=null&&(C[$]=b[$],delete S[$])});const z=q({},o,{columns:_,container:p,direction:d,item:h,rowSpacing:m,columnSpacing:w,wrap:y,zeroMinWidth:k,spacing:v},C,{breakpoints:i.keys}),P=F2(z);return H.jsx(nf.Provider,{value:_,children:H.jsx(D2,q({ownerState:z,className:Zx(P.root,s),as:u,ref:r},S))})}),ri=B2;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _a=window,hh=_a.ShadowRoot&&(_a.ShadyCSS===void 0||_a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ph=Symbol(),of=new WeakMap;let Bg=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==ph)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(hh&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=of.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&of.set(r,t))}return t}toString(){return this.cssText}};const U2=e=>new Bg(typeof e=="string"?e:e+"",void 0,ph),B=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Bg(r,e,ph)},V2=(e,t)=>{hh?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),i=_a.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)})},sf=hh?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return U2(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kc;const il=window,af=il.trustedTypes,j2=af?af.emptyScript:"",lf=il.reactiveElementPolyfillSupport,cs={toAttribute(e,t){switch(t){case Boolean:e=e?j2:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ug=(e,t)=>t!==e&&(t==t||e==e),Cc={attribute:!0,type:String,converter:cs,reflect:!1,hasChanged:Ug},Bu="finalized";let ii=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const i=this._$Ep(n,r);i!==void 0&&(this._$Ev.set(i,n),t.push(i))}),t}static createProperty(t,r=Cc){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(i){const o=this[t];this[r]=i,this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Cc}static finalize(){if(this.hasOwnProperty(Bu))return!1;this[Bu]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of n)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(sf(i))}else t!==void 0&&r.push(sf(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return V2(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Cc){var i;const o=this.constructor._$Ep(t,n);if(o!==void 0&&n.reflect===!0){const s=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:cs).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(t,r){var n;const i=this.constructor,o=i._$Ev.get(t);if(o!==void 0&&this._$El!==o){const s=i.getPropertyOptions(o),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:cs;this._$El=o,this[o]=l.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let i=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Ug)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(n)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ii[Bu]=!0,ii.elementProperties=new Map,ii.elementStyles=[],ii.shadowRootOptions={mode:"open"},lf==null||lf({ReactiveElement:ii}),((kc=il.reactiveElementVersions)!==null&&kc!==void 0?kc:il.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sc;const ol=window,Fi=ol.trustedTypes,cf=Fi?Fi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Uu="$lit$",qr=`lit$${(Math.random()+"").slice(9)}$`,Vg="?"+qr,H2=`<${Vg}>`,Vn=document,us=()=>Vn.createComment(""),ds=e=>e===null||typeof e!="object"&&typeof e!="function",jg=Array.isArray,W2=e=>jg(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",$c=`[ 	
\f\r]`,po=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,uf=/-->/g,df=/>/g,Cn=RegExp(`>|${$c}(?:([^\\s"'>=/]+)(${$c}*=${$c}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hf=/'/g,pf=/"/g,Hg=/^(?:script|style|textarea|title)$/i,K2=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),E=K2(1),Pt=Symbol.for("lit-noChange"),ye=Symbol.for("lit-nothing"),ff=new WeakMap,On=Vn.createTreeWalker(Vn,129,null,!1);function Wg(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return cf!==void 0?cf.createHTML(t):t}const G2=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":"",s=po;for(let l=0;l<r;l++){const a=e[l];let u,p,d=-1,h=0;for(;h<a.length&&(s.lastIndex=h,p=s.exec(a),p!==null);)h=s.lastIndex,s===po?p[1]==="!--"?s=uf:p[1]!==void 0?s=df:p[2]!==void 0?(Hg.test(p[2])&&(i=RegExp("</"+p[2],"g")),s=Cn):p[3]!==void 0&&(s=Cn):s===Cn?p[0]===">"?(s=i??po,d=-1):p[1]===void 0?d=-2:(d=s.lastIndex-p[2].length,u=p[1],s=p[3]===void 0?Cn:p[3]==='"'?pf:hf):s===pf||s===hf?s=Cn:s===uf||s===df?s=po:(s=Cn,i=void 0);const g=s===Cn&&e[l+1].startsWith("/>")?" ":"";o+=s===po?a+H2:d>=0?(n.push(u),a.slice(0,d)+Uu+a.slice(d)+qr+g):a+qr+(d===-2?(n.push(void 0),l):g)}return[Wg(e,o+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class hs{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const l=t.length-1,a=this.parts,[u,p]=G2(t,r);if(this.el=hs.createElement(u,n),On.currentNode=this.el.content,r===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(i=On.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const h of i.getAttributeNames())if(h.endsWith(Uu)||h.startsWith(qr)){const g=p[s++];if(d.push(h),g!==void 0){const v=i.getAttribute(g.toLowerCase()+Uu).split(qr),y=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:y[2],strings:v,ctor:y[1]==="."?Y2:y[1]==="?"?Q2:y[1]==="@"?Z2:Ul})}else a.push({type:6,index:o})}for(const h of d)i.removeAttribute(h)}if(Hg.test(i.tagName)){const d=i.textContent.split(qr),h=d.length-1;if(h>0){i.textContent=Fi?Fi.emptyScript:"";for(let g=0;g<h;g++)i.append(d[g],us()),On.nextNode(),a.push({type:2,index:++o});i.append(d[h],us())}}}else if(i.nodeType===8)if(i.data===Vg)a.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(qr,d+1))!==-1;)a.push({type:7,index:o}),d+=qr.length-1}o++}}static createElement(t,r){const n=Vn.createElement("template");return n.innerHTML=t,n}}function Bi(e,t,r=e,n){var i,o,s,l;if(t===Pt)return t;let a=n!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[n]:r._$Cl;const u=ds(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),u===void 0?a=void 0:(a=new u(e),a._$AT(e,r,n)),n!==void 0?((s=(l=r)._$Co)!==null&&s!==void 0?s:l._$Co=[])[n]=a:r._$Cl=a),a!==void 0&&(t=Bi(e,a._$AS(e,t.values),a,n)),t}class q2{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:i}=this._$AD,o=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Vn).importNode(n,!0);On.currentNode=o;let s=On.nextNode(),l=0,a=0,u=i[0];for(;u!==void 0;){if(l===u.index){let p;u.type===2?p=new Cs(s,s.nextSibling,this,t):u.type===1?p=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(p=new J2(s,this,t)),this._$AV.push(p),u=i[++a]}l!==(u==null?void 0:u.index)&&(s=On.nextNode(),l++)}return On.currentNode=Vn,o}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Cs{constructor(t,r,n,i){var o;this.type=2,this._$AH=ye,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Bi(this,t,r),ds(t)?t===ye||t==null||t===""?(this._$AH!==ye&&this._$AR(),this._$AH=ye):t!==this._$AH&&t!==Pt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):W2(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==ye&&ds(this._$AH)?this._$AA.nextSibling.data=t:this.$(Vn.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=hs.createElement(Wg(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.v(n);else{const s=new q2(o,this),l=s.u(this.options);s.v(n),this.$(l),this._$AH=s}}_$AC(t){let r=ff.get(t.strings);return r===void 0&&ff.set(t.strings,r=new hs(t)),r}T(t){jg(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new Cs(this.k(us()),this.k(us()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Ul{constructor(t,r,n,i,o){this.type=1,this._$AH=ye,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ye}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)t=Bi(this,t,r,0),s=!ds(t)||t!==this._$AH&&t!==Pt,s&&(this._$AH=t);else{const l=t;let a,u;for(t=o[0],a=0;a<o.length-1;a++)u=Bi(this,l[n+a],r,a),u===Pt&&(u=this._$AH[a]),s||(s=!ds(u)||u!==this._$AH[a]),u===ye?t=ye:t!==ye&&(t+=(u??"")+o[a+1]),this._$AH[a]=u}s&&!i&&this.j(t)}j(t){t===ye?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let Y2=class extends Ul{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ye?void 0:t}};const X2=Fi?Fi.emptyScript:"";class Q2 extends Ul{constructor(){super(...arguments),this.type=4}j(t){t&&t!==ye?this.element.setAttribute(this.name,X2):this.element.removeAttribute(this.name)}}class Z2 extends Ul{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){var n;if((t=(n=Bi(this,t,r,0))!==null&&n!==void 0?n:ye)===Pt)return;const i=this._$AH,o=t===ye&&i!==ye||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==ye&&(i===ye||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class J2{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Bi(this,t)}}const mf=ol.litHtmlPolyfillSupport;mf==null||mf(hs,Cs),((Sc=ol.litHtmlVersions)!==null&&Sc!==void 0?Sc:ol.litHtmlVersions=[]).push("2.8.0");const ek=(e,t,r)=>{var n,i;const o=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=o._$litPart$;if(s===void 0){const l=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=s=new Cs(t.insertBefore(us(),l),l,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ec,zc;let Io=class extends ii{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ek(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Pt}};Io.finalized=!0,Io._$litElement$=!0,(Ec=globalThis.litElementHydrateSupport)===null||Ec===void 0||Ec.call(globalThis,{LitElement:Io});const gf=globalThis.litElementPolyfillSupport;gf==null||gf({LitElement:Io});((zc=globalThis.litElementVersions)!==null&&zc!==void 0?zc:globalThis.litElementVersions=[]).push("3.3.3");var U=B`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,tk=B`
  ${U}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,rk=B`
  ${U}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,nk=B`
  ${U}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Vu="";function ju(e){Vu=e}function ik(e=""){if(!Vu){const t=[...document.getElementsByTagName("script")],r=t.find(n=>n.hasAttribute("data-shoelace"));if(r)ju(r.getAttribute("data-shoelace"));else{const n=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let i="";n&&(i=n.getAttribute("src")),ju(i.split("/").slice(0,-1).join("/"))}}return Vu.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var ok={name:"default",resolver:e=>ik(`assets/icons/${e}.svg`)},sk=ok,vf={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16" part="svg">
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},ak={name:"system",resolver:e=>e in vf?`data:image/svg+xml,${encodeURIComponent(vf[e])}`:""},lk=ak,ck=[sk,lk],Hu=[];function uk(e){Hu.push(e)}function dk(e){Hu=Hu.filter(t=>t!==e)}function yf(e){return ck.find(t=>t.name===e)}var Kg=Object.defineProperty,hk=Object.defineProperties,pk=Object.getOwnPropertyDescriptor,fk=Object.getOwnPropertyDescriptors,bf=Object.getOwnPropertySymbols,mk=Object.prototype.hasOwnProperty,gk=Object.prototype.propertyIsEnumerable,wf=(e,t,r)=>t in e?Kg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Fr=(e,t)=>{for(var r in t||(t={}))mk.call(t,r)&&wf(e,r,t[r]);if(bf)for(var r of bf(t))gk.call(t,r)&&wf(e,r,t[r]);return e},Ss=(e,t)=>hk(e,fk(t)),c=(e,t,r,n)=>{for(var i=n>1?void 0:n?pk(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&Kg(t,r,i),i};function T(e,t){const r=Fr({waitUntilFirstUpdate:!1},t);return(n,i)=>{const{update:o}=n,s=Array.isArray(e)?e:[e];n.update=function(l){s.forEach(a=>{const u=a;if(l.has(u)){const p=l.get(u),d=this[u];p!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](p,d)}}),o.call(this,l)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vk=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},yk=(e,t,r)=>{t.constructor.createProperty(r,e)};function f(e){return(t,r)=>r!==void 0?yk(e,t,r):vk(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(e){return f({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fh=({finisher:e,descriptor:t})=>(r,n)=>{var i;if(n===void 0){const o=(i=r.originalKey)!==null&&i!==void 0?i:r.key,s=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:{...r,key:o};return e!=null&&(s.finisher=function(l){e(l,o)}),s}{const o=r.constructor;t!==void 0&&Object.defineProperty(r,n,t(n)),e==null||e(o,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gg(e){return fh({finisher:(t,r)=>{Object.assign(t.prototype[r],e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(e,t){return fh({descriptor:r=>{const n={get(){var i,o;return(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const i=typeof r=="symbol"?Symbol():"__"+r;n.get=function(){var o,s;return this[i]===void 0&&(this[i]=(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&s!==void 0?s:null),this[i]}}return n}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bk(e){return fh({descriptor:t=>({async get(){var r;return await this.updateComplete,(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ac;((Ac=window.HTMLSlotElement)===null||Ac===void 0?void 0:Ac.prototype.assignedElements)!=null;var R=class extends Io{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,Fr({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const n=customElements.get(e);if(!n){customElements.define(e,class extends t{},r);return}let i=" (unknown version)",o=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in n&&n.version&&(o=" v"+n.version),!(i&&o&&i===o)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${o} has already been registered.`)}};R.version="2.8.0";R.dependencies={};c([f()],R.prototype,"dir",2);c([f()],R.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wk=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,qg=e=>e.strings===void 0,xk={},_k=(e,t=xk)=>e._$AH=t;var fo=Symbol(),ea=Symbol(),Tc,Pc=new Map,ue=class extends R{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let n;if(t!=null&&t.spriteSheet)return E`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return n.status===410?fo:ea}catch{return ea}try{const i=document.createElement("div");i.innerHTML=await n.text();const o=i.firstElementChild;if(((r=o==null?void 0:o.tagName)==null?void 0:r.toLowerCase())!=="svg")return fo;Tc||(Tc=new DOMParser);const l=Tc.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):fo}catch{return fo}}connectedCallback(){super.connectedCallback(),uk(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),dk(this)}getUrl(){const e=yf(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=yf(this.library),r=this.getUrl();if(!r){this.svg=null;return}let n=Pc.get(r);if(n||(n=this.resolveIcon(r,t),Pc.set(r,n)),!this.initialRender)return;const i=await n;if(i===ea&&Pc.delete(r),r===this.getUrl()){if(wk(i)){this.svg=i;return}switch(i){case ea:case fo:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=t==null?void 0:t.mutator)==null||e.call(t,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ue.styles=nk;c([j()],ue.prototype,"svg",2);c([f({reflect:!0})],ue.prototype,"name",2);c([f()],ue.prototype,"src",2);c([f()],ue.prototype,"label",2);c([f({reflect:!0})],ue.prototype,"library",2);c([T("label")],ue.prototype,"handleLabelChange",1);c([T(["name","src","library"])],ue.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},$s=e=>(...t)=>({_$litDirective$:e,values:t});let Es=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=$s(class extends Es{constructor(e){var t;if(super(e),e.type!==vr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((r=this.nt)===null||r===void 0)&&r.has(o))&&this.it.add(o);return this.render(t)}const i=e.element.classList;this.it.forEach(o=>{o in t||(i.remove(o),this.it.delete(o))});for(const o in t){const s=!!t[o];s===this.it.has(o)||!((n=this.nt)===null||n===void 0)&&n.has(o)||(s?(i.add(o),this.it.add(o)):(i.remove(o),this.it.delete(o)))}return Pt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yg=Symbol.for(""),kk=e=>{if((e==null?void 0:e.r)===Yg)return e==null?void 0:e._$litStatic$},sl=(e,...t)=>({_$litStatic$:t.reduce((r,n,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[i+1],e[0]),r:Yg}),xf=new Map,Ck=e=>(t,...r)=>{const n=r.length;let i,o;const s=[],l=[];let a,u=0,p=!1;for(;u<n;){for(a=t[u];u<n&&(o=r[u],(i=kk(o))!==void 0);)a+=i+t[++u],p=!0;u!==n&&l.push(o),s.push(a),u++}if(u===n&&s.push(t[n]),p){const d=s.join("$$lit$$");(t=xf.get(d))===void 0&&(s.raw=s,xf.set(d,t=s)),r=l}return e(t,...r)},No=Ck(E);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=e=>e??ye;var Re=class extends R{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?sl`a`:sl`button`;return No`
      <${t}
        part="base"
        class=${V({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${D(e?void 0:this.disabled)}
        type=${D(e?void 0:"button")}
        href=${D(e?this.href:void 0)}
        target=${D(e?this.target:void 0)}
        download=${D(e?this.download:void 0)}
        rel=${D(e&&this.target?"noreferrer noopener":void 0)}
        role=${D(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${D(this.name)}
          library=${D(this.library)}
          src=${D(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Re.styles=rk;Re.dependencies={"sl-icon":ue};c([L(".icon-button")],Re.prototype,"button",2);c([j()],Re.prototype,"hasFocus",2);c([f()],Re.prototype,"name",2);c([f()],Re.prototype,"library",2);c([f()],Re.prototype,"src",2);c([f()],Re.prototype,"href",2);c([f()],Re.prototype,"target",2);c([f()],Re.prototype,"download",2);c([f()],Re.prototype,"label",2);c([f({type:Boolean,reflect:!0})],Re.prototype,"disabled",2);const Wu=new Set,Sk=new MutationObserver(Zg),vi=new Map;let Xg=document.documentElement.dir||"ltr",Qg=document.documentElement.lang||navigator.language,zn;Sk.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function $k(...e){e.map(t=>{const r=t.$code.toLowerCase();vi.has(r)?vi.set(r,Object.assign(Object.assign({},vi.get(r)),t)):vi.set(r,t),zn||(zn=t)}),Zg()}function Zg(){Xg=document.documentElement.dir||"ltr",Qg=document.documentElement.lang||navigator.language,[...Wu.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Ek=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Wu.add(this.host)}hostDisconnected(){Wu.delete(this.host)}dir(){return`${this.host.dir||Xg}`.toLowerCase()}lang(){return`${this.host.lang||Qg}`.toLowerCase()}getTranslationData(t){var r,n;const i=new Intl.Locale(t),o=i==null?void 0:i.language.toLowerCase(),s=(n=(r=i==null?void 0:i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&n!==void 0?n:"",l=vi.get(`${o}-${s}`),a=vi.get(o);return{locale:i,language:o,region:s,primary:l,secondary:a}}exists(t,r){var n;const{primary:i,secondary:o}=this.getTranslationData((n=r.lang)!==null&&n!==void 0?n:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||o&&o[t]||r.includeFallback&&zn&&zn[t])}term(t,...r){const{primary:n,secondary:i}=this.getTranslationData(this.lang());let o;if(n&&n[t])o=n[t];else if(i&&i[t])o=i[t];else if(zn&&zn[t])o=zn[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...r):o}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(t,r)}};var ne=class extends Ek{},Br=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return E`
      <span
        part="base"
        class=${V({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?E`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Br.styles=tk;Br.dependencies={"sl-icon-button":Re};c([f({reflect:!0})],Br.prototype,"variant",2);c([f({reflect:!0})],Br.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Br.prototype,"pill",2);c([f({type:Boolean})],Br.prototype,"removable",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zk=new Set(["children","localName","ref","style","className"]),_f=new WeakMap,Ak=(e,t,r,n,i)=>{const o=i==null?void 0:i[t];o===void 0||r===n?(e[t]=r,r==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):((s,l,a)=>{let u=_f.get(s);u===void 0&&_f.set(s,u=new Map);let p=u.get(l);a!==void 0?p===void 0?(u.set(l,p={handleEvent:a}),s.addEventListener(l,p)):p.handleEvent=a:p!==void 0&&(u.delete(l),s.removeEventListener(l,p))})(e,o,r)},F=({react:e,tagName:t,elementClass:r,events:n,displayName:i})=>{const o=new Set(Object.keys(n??{})),s=e.forwardRef((l,a)=>{const u=e.useRef(null),p=e.useRef(null),d={},h={};for(const[g,v]of Object.entries(l))zk.has(g)?d[g==="className"?"class":g]=v:o.has(g)||g in r.prototype?h[g]=v:d[g]=v;return e.useLayoutEffect(()=>{if(p.current!==null){for(const g in h)Ak(p.current,g,l[g],u.current?u.current[g]:void 0,n);u.current=l}}),e.useLayoutEffect(()=>{var g;(g=p.current)===null||g===void 0||g.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:g=>{p.current=g,typeof a=="function"?a(g):a!==null&&(a.current=g)}})});return s.displayName=i??r.name,s};var Tk="sl-tag";Br.define("sl-tag");F({tagName:Tk,elementClass:Br,react:M,events:{onSlRemove:"sl-remove"},displayName:"SlTag"});var Pk=B`
  ${U}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Ok=0,Yi=class extends R{constructor(){super(...arguments),this.attrId=++Ok,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return E`
      <slot
        part="base"
        class=${V({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Yi.styles=Pk;c([f({reflect:!0})],Yi.prototype,"name",2);c([f({type:Boolean,reflect:!0})],Yi.prototype,"active",2);c([T("active")],Yi.prototype,"handleActiveChange",1);var Lk="sl-tab-panel";Yi.define("sl-tab-panel");F({tagName:Lk,elementClass:Yi,react:M,events:{},displayName:"SlTabPanel"});var Ik=B`
  ${U}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
  }
`,Nk=B`
  ${U}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;function Jg(e){return Rk(e)}function Oc(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Rk(e){for(let t=e;t;t=Oc(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Oc(e);t;t=Oc(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||r.filter!=="none"||t.tagName==="BODY"))return t}return null}function Dk(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var ae=class extends R{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Dk(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=C2(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[s2({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Jp({apply:({rects:r})=>{const n=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=n?`${r.reference.width}px`:"",this.popup.style.height=i?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(i2({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(a2({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Jp({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:n})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${n}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(n2({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>xa.getOffsetParent(r,Jg):xa.getOffsetParent;S2(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Ss(Fr({},xa),{getOffsetParent:t})}).then(({x:r,y:n,middlewareData:i,placement:o})=>{const s=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${r}px`,top:`${n}px`}),this.arrow){const a=i.arrow.x,u=i.arrow.y;let p="",d="",h="",g="";if(this.arrowPlacement==="start"){const v=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=s?v:"",g=s?"":v}else if(this.arrowPlacement==="end"){const v=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=s?"":v,g=s?v:"",h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof a=="number"?`${a}px`:"",p=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:p,right:d,bottom:h,left:g,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return E`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${V({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?E`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ae.styles=Nk;c([L(".popup")],ae.prototype,"popup",2);c([L(".popup__arrow")],ae.prototype,"arrowEl",2);c([f()],ae.prototype,"anchor",2);c([f({type:Boolean,reflect:!0})],ae.prototype,"active",2);c([f({reflect:!0})],ae.prototype,"placement",2);c([f({reflect:!0})],ae.prototype,"strategy",2);c([f({type:Number})],ae.prototype,"distance",2);c([f({type:Number})],ae.prototype,"skidding",2);c([f({type:Boolean})],ae.prototype,"arrow",2);c([f({attribute:"arrow-placement"})],ae.prototype,"arrowPlacement",2);c([f({attribute:"arrow-padding",type:Number})],ae.prototype,"arrowPadding",2);c([f({type:Boolean})],ae.prototype,"flip",2);c([f({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],ae.prototype,"flipFallbackPlacements",2);c([f({attribute:"flip-fallback-strategy"})],ae.prototype,"flipFallbackStrategy",2);c([f({type:Object})],ae.prototype,"flipBoundary",2);c([f({attribute:"flip-padding",type:Number})],ae.prototype,"flipPadding",2);c([f({type:Boolean})],ae.prototype,"shift",2);c([f({type:Object})],ae.prototype,"shiftBoundary",2);c([f({attribute:"shift-padding",type:Number})],ae.prototype,"shiftPadding",2);c([f({attribute:"auto-size"})],ae.prototype,"autoSize",2);c([f()],ae.prototype,"sync",2);c([f({type:Object})],ae.prototype,"autoSizeBoundary",2);c([f({attribute:"auto-size-padding",type:Number})],ae.prototype,"autoSizePadding",2);var ev=new Map,Mk=new WeakMap;function Fk(e){return e??{keyframes:[],options:{duration:0}}}function kf(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function le(e,t){ev.set(e,Fk(t))}function be(e,t,r){const n=Mk.get(e);if(n!=null&&n[t])return kf(n[t],r.dir);const i=ev.get(t);return i?kf(i,r.dir):{keyframes:[],options:{duration:0}}}function ut(e,t){return new Promise(r=>{function n(i){i.target===e&&(e.removeEventListener(t,n),r())}e.addEventListener(t,n)})}function Ee(e,t,r){return new Promise(n=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,Ss(Fr({},r),{duration:mh()?0:r.duration}));i.addEventListener("cancel",n,{once:!0}),i.addEventListener("finish",n,{once:!0})})}function Cf(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function mh(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ie(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const n=requestAnimationFrame(r);t.addEventListener("cancel",()=>n,{once:!0}),t.addEventListener("finish",()=>n,{once:!0}),t.cancel()})))}function al(e,t){return e.map(r=>Ss(Fr({},r),{height:r.height==="auto"?`${t}px`:r.height}))}var Be=class extends R{constructor(){super(),this.localize=new ne(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Cf(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Cf(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await Ie(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=be(this,"tooltip.show",{dir:this.localize.dir()});await Ee(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await Ie(this.body);const{keyframes:e,options:t}=be(this,"tooltip.hide",{dir:this.localize.dir()});await Ee(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ut(this,"sl-after-hide")}render(){return E`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${V({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Be.styles=Ik;Be.dependencies={"sl-popup":ae};c([L("slot:not([name])")],Be.prototype,"defaultSlot",2);c([L(".tooltip__body")],Be.prototype,"body",2);c([L("sl-popup")],Be.prototype,"popup",2);c([f()],Be.prototype,"content",2);c([f()],Be.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],Be.prototype,"disabled",2);c([f({type:Number})],Be.prototype,"distance",2);c([f({type:Boolean,reflect:!0})],Be.prototype,"open",2);c([f({type:Number})],Be.prototype,"skidding",2);c([f()],Be.prototype,"trigger",2);c([f({type:Boolean})],Be.prototype,"hoist",2);c([T("open",{waitUntilFirstUpdate:!0})],Be.prototype,"handleOpenChange",1);c([T(["content","distance","hoist","placement","skidding"])],Be.prototype,"handleOptionsChange",1);c([T("disabled")],Be.prototype,"handleDisabledChange",1);le("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});le("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var Bk="sl-tooltip";Be.define("sl-tooltip");F({tagName:Bk,elementClass:Be,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"});var zs=B`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Uk=B`
  ${U}
  ${zs}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Kn=(e="value")=>(t,r)=>{const n=t.constructor,i=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(o,s,l){var a;const u=n.getPropertyOptions(e),p=typeof u.attribute=="string"?u.attribute:e;if(o===p){const d=u.converter||cs,g=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:cs.fromAttribute)(l,u.type);this[e]!==g&&(this[r]=g)}i.call(this,o,s,l)}},mo=new WeakMap,go=new WeakMap,Lc=new WeakSet,ta=new WeakMap,Ur=class{constructor(e,t){this.handleFormData=r=>{const n=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";!n&&!s&&typeof i=="string"&&i.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(l=>{r.formData.append(i,l.toString())}):r.formData.append(i,o.toString()))},this.handleFormSubmit=r=>{var n;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((n=mo.get(this.form))==null||n.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!i&&!o(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ta.set(this.host,[])},this.handleInteraction=r=>{const n=ta.get(this.host);n.includes(r.type)||n.push(r.type),n.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const n of r)if(typeof n.reportValidity=="function"&&!n.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Fr({form:r=>{if(r.hasAttribute("form")&&r.getAttribute("form")!==""){const n=r.getRootNode(),i=r.getAttribute("form");if(i)return n.getElementById(i)}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var n;return(n=r.disabled)!=null?n:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,n)=>r.value=n,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),ta.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ta.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,mo.has(this.form)?mo.get(this.form).add(this.host):mo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),go.has(this.form)||(go.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=mo.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),go.has(this.form)&&(this.form.reportValidity=go.get(this.form),go.delete(this.form))),this.form=void 0}setUserInteracted(e,t){t?Lc.add(e):Lc.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(n=>{t.hasAttribute(n)&&r.setAttribute(n,t.getAttribute(n))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!Lc.has(t),n=!!t.required;t.toggleAttribute("data-required",n),t.toggleAttribute("data-optional",!n),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Vl=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Vk=Object.freeze(Ss(Fr({},Vl),{valid:!1,valueMissing:!0})),jk=Object.freeze(Ss(Fr({},Vl),{valid:!1,customError:!0})),Mt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const n=r.target;(this.slotNames.includes("[default]")&&!n.name||n.name&&this.slotNames.includes(n.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Hk(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(n=>{n.nodeType===Node.TEXT_NODE&&(r+=n.textContent)}),r}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jn=$s(class extends Es{constructor(e){if(super(e),e.type!==vr.PROPERTY&&e.type!==vr.ATTRIBUTE&&e.type!==vr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!qg(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Pt||t===ye)return t;const r=e.element,n=e.name;if(e.type===vr.PROPERTY){if(t===r[n])return Pt}else if(e.type===vr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(n))return Pt}else if(e.type===vr.ATTRIBUTE&&r.getAttribute(n)===t+"")return Pt;return _k(e),t}});var ee=class extends R{constructor(){super(...arguments),this.formControlController=new Ur(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Mt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,n){this.input.setRangeText(e,t,r,n),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t;return E`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${D(this.name)}
              .value=${jn(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${D(this.placeholder)}
              rows=${D(this.rows)}
              minlength=${D(this.minlength)}
              maxlength=${D(this.maxlength)}
              autocapitalize=${D(this.autocapitalize)}
              autocorrect=${D(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${D(this.spellcheck)}
              enterkeyhint=${D(this.enterkeyhint)}
              inputmode=${D(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ee.styles=Uk;c([L(".textarea__control")],ee.prototype,"input",2);c([j()],ee.prototype,"hasFocus",2);c([f()],ee.prototype,"title",2);c([f()],ee.prototype,"name",2);c([f()],ee.prototype,"value",2);c([f({reflect:!0})],ee.prototype,"size",2);c([f({type:Boolean,reflect:!0})],ee.prototype,"filled",2);c([f()],ee.prototype,"label",2);c([f({attribute:"help-text"})],ee.prototype,"helpText",2);c([f()],ee.prototype,"placeholder",2);c([f({type:Number})],ee.prototype,"rows",2);c([f()],ee.prototype,"resize",2);c([f({type:Boolean,reflect:!0})],ee.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],ee.prototype,"readonly",2);c([f({reflect:!0})],ee.prototype,"form",2);c([f({type:Boolean,reflect:!0})],ee.prototype,"required",2);c([f({type:Number})],ee.prototype,"minlength",2);c([f({type:Number})],ee.prototype,"maxlength",2);c([f()],ee.prototype,"autocapitalize",2);c([f()],ee.prototype,"autocorrect",2);c([f()],ee.prototype,"autocomplete",2);c([f({type:Boolean})],ee.prototype,"autofocus",2);c([f()],ee.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],ee.prototype,"spellcheck",2);c([f()],ee.prototype,"inputmode",2);c([Kn()],ee.prototype,"defaultValue",2);c([T("disabled",{waitUntilFirstUpdate:!0})],ee.prototype,"handleDisabledChange",1);c([T("rows",{waitUntilFirstUpdate:!0})],ee.prototype,"handleRowsChange",1);c([T("value",{waitUntilFirstUpdate:!0})],ee.prototype,"handleValueChange",1);var Wk="sl-textarea";ee.define("sl-textarea");F({tagName:Wk,elementClass:ee,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"});var Kk=B`
  ${U}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Gk=B`
  ${U}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Ue=class extends R{constructor(){super(...arguments),this.formControlController=new Ur(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return E`
      <label
        part="base"
        class=${V({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${D(this.value)}
          .indeterminate=${jn(this.indeterminate)}
          .checked=${jn(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?E`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?E`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};Ue.styles=Gk;Ue.dependencies={"sl-icon":ue};c([L('input[type="checkbox"]')],Ue.prototype,"input",2);c([j()],Ue.prototype,"hasFocus",2);c([f()],Ue.prototype,"title",2);c([f()],Ue.prototype,"name",2);c([f()],Ue.prototype,"value",2);c([f({reflect:!0})],Ue.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Ue.prototype,"checked",2);c([f({type:Boolean,reflect:!0})],Ue.prototype,"indeterminate",2);c([Kn("checked")],Ue.prototype,"defaultChecked",2);c([f({reflect:!0})],Ue.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Ue.prototype,"required",2);c([T("disabled",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleDisabledChange",1);c([T(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Ue.prototype,"handleStateChange",1);var qk=B`
  ${U}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,As=class extends R{constructor(){super(...arguments),this.localize=new ne(this)}render(){return E`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};As.styles=qk;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Sf(e,t,r){return e?t():r==null?void 0:r()}var Ku=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Ie(this.childrenContainer);const{keyframes:e,options:t}=be(this,"tree-item.collapse",{dir:this.localize.dir()});await Ee(this.childrenContainer,al(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&Ku.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Ie(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:t}=be(this,"tree-item.expand",{dir:this.localize.dir()});await Ee(this.childrenContainer,al(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(t=>Ku.isTreeItem(t)&&(e||!t.disabled)):[]}render(){const e=this.localize.dir()==="rtl",t=!this.loading&&(!this.isLeaf||this.lazy);return E`
      <div
        part="base"
        class="${V({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":t,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${V({"tree-item__expand-button":!0,"tree-item__expand-button--visible":t})}
            aria-hidden="true"
          >
            ${Sf(this.loading,()=>E` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Sf(this.selectable,()=>E`
                <sl-checkbox
                  part="checkbox"
                  exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                  class="tree-item__checkbox"
                  ?disabled="${this.disabled}"
                  ?checked="${jn(this.selected)}"
                  ?indeterminate="${this.indeterminate}"
                  tabindex="-1"
                ></sl-checkbox>
              `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}},de=Ku;de.styles=Kk;de.dependencies={"sl-checkbox":Ue,"sl-icon":ue,"sl-spinner":As};c([j()],de.prototype,"indeterminate",2);c([j()],de.prototype,"isLeaf",2);c([j()],de.prototype,"loading",2);c([j()],de.prototype,"selectable",2);c([f({type:Boolean,reflect:!0})],de.prototype,"expanded",2);c([f({type:Boolean,reflect:!0})],de.prototype,"selected",2);c([f({type:Boolean,reflect:!0})],de.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],de.prototype,"lazy",2);c([L("slot:not([name])")],de.prototype,"defaultSlot",2);c([L("slot[name=children]")],de.prototype,"childrenSlot",2);c([L(".tree-item__item")],de.prototype,"itemElement",2);c([L(".tree-item__children")],de.prototype,"childrenContainer",2);c([L(".tree-item__expand-button slot")],de.prototype,"expandButtonSlot",2);c([T("loading",{waitUntilFirstUpdate:!0})],de.prototype,"handleLoadingChange",1);c([T("disabled")],de.prototype,"handleDisabledChange",1);c([T("selected")],de.prototype,"handleSelectedChange",1);c([T("expanded",{waitUntilFirstUpdate:!0})],de.prototype,"handleExpandedChange",1);c([T("expanded",{waitUntilFirstUpdate:!0})],de.prototype,"handleExpandAnimation",1);c([T("lazy",{waitUntilFirstUpdate:!0})],de.prototype,"handleLazyChange",1);le("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});le("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var Yk=B`
  ${U}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function De(e,t,r){const n=i=>Object.is(i,-0)?0:i;return e<t?n(t):e>r?n(r):n(e)}function $f(e,t=!1){function r(o){const s=o.getChildrenItems({includeDisabled:!1});if(s.length){const l=s.every(u=>u.selected),a=s.every(u=>!u.selected&&!u.indeterminate);o.selected=l,o.indeterminate=!l&&!a}}function n(o){const s=o.parentElement;de.isTreeItem(s)&&(r(s),n(s))}function i(o){for(const s of o.getChildrenItems())s.selected=t?o.selected||s.selected:!s.disabled&&o.selected,i(s);t&&r(o)}i(e),n(e)}var bn=class extends R{constructor(){super(),this.selection="single",this.localize=new ne(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`);r===null?e.append(this.getExpandButtonIcon(t)):r.hasAttribute("data-default")&&r.replaceWith(this.getExpandButtonIcon(t))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(de.isTreeItem),n=[...t.removedNodes].filter(de.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&n.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),de.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const n=r.cloneNode(!0);return[n,...n.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),n.setAttribute("data-default",""),n.slot=`${e}-icon`,n}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),$f(e);else if(this.selection==="single"||e.isLeaf){const n=this.getAllTreeItems();for(const i of n)i.selected=i===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(n=>!t.includes(n)))&&Promise.all(r.map(n=>n.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(i=>{var o;return["input","textarea"].includes((o=i==null?void 0:i.tagName)==null?void 0:o.toLowerCase())}))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",n=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const i=t.findIndex(a=>a.matches(":focus")),o=t[i],s=a=>{const u=t[De(a,0,t.length-1)];this.focusItem(u)},l=a=>{o.expanded=a};e.key==="ArrowDown"?s(i+1):e.key==="ArrowUp"?s(i-1):r&&e.key==="ArrowRight"||n&&e.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?s(i+1):l(!0):r&&e.key==="ArrowLeft"||n&&e.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?s(i-1):l(!1):e.key==="Home"?s(0):e.key==="End"?s(t.length-1):(e.key==="Enter"||e.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),n=e.composedPath().some(i=>{var o;return(o=i==null?void 0:i.classList)==null?void 0:o.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(n?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>$f(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var n;if(r.disabled)return!1;const i=(n=r.parentElement)==null?void 0:n.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||t.has(i))&&t.add(r),!t.has(r)})}render(){return E`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};bn.styles=Yk;c([L("slot:not([name])")],bn.prototype,"defaultSlot",2);c([L("slot[name=expand-icon]")],bn.prototype,"expandedIconSlot",2);c([L("slot[name=collapse-icon]")],bn.prototype,"collapsedIconSlot",2);c([f()],bn.prototype,"selection",2);c([T("selection")],bn.prototype,"handleSelectionChange",1);var Xk="sl-tree";bn.define("sl-tree");F({tagName:Xk,elementClass:bn,react:M,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var Qk="sl-tree-item";de.define("sl-tree-item");F({tagName:Qk,elementClass:de,react:M,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var Zk=B`
  ${U}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,jl=class extends R{render(){return E` <slot></slot> `}};jl.styles=Zk;var Jk="sl-visually-hidden";jl.define("sl-visually-hidden");F({tagName:Jk,elementClass:jl,react:M,events:{},displayName:"SlVisuallyHidden"});var eC=B`
  ${U}
  ${zs}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function tC(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Gu=new Set;function rC(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Ro(e){if(Gu.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=rC();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Do(e){Gu.delete(e),Gu.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function qu(e,t,r="vertical",n="smooth"){const i=tC(e,t),o=i.top+t.scrollTop,s=i.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,u=t.scrollTop,p=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<l?t.scrollTo({left:s,behavior:n}):s+e.clientWidth>a&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:n})),(r==="vertical"||r==="both")&&(o<u?t.scrollTo({top:o,behavior:n}):o+e.clientHeight>p&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:n}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Yu=class extends Es{constructor(t){if(super(t),this.et=ye,t.type!==vr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ye||t==null)return this.ft=void 0,this.et=t;if(t===Pt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Yu.directiveName="unsafeHTML",Yu.resultType=1;const ka=$s(Yu);var Q=class extends R{constructor(){super(...arguments),this.formControlController=new Ur(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Mt(this,"help-text","label"),this.localize=new ne(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>E`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,r=t.closest(".select__clear")!==null,n=t.closest("sl-icon-button")!==null;if(!(r||n)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.getAllOptions(),o=i.indexOf(this.currentOption);let s=Math.max(0,o);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(s=o+1,s>i.length-1&&(s=0)):e.key==="ArrowUp"?(s=o-1,s<0&&(s=i.length-1)):e.key==="Home"?s=0:e.key==="End"&&(s=i.length-1),this.setCurrentOption(i[s])}if(e.key.length===1||e.key==="Backspace"){const i=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const o of i)if(o.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const r=e.composedPath().some(n=>n instanceof Element&&n.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const r=e.target.closest("sl-option"),n=this.value;r&&!r.disabled&&(this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],r=[];customElements.get("sl-option")?(e.forEach(n=>r.push(n.value)),this.setSelectedOptions(e.filter(n=>t.includes(n.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(n=>n.selected=!1),r.length&&r.forEach(n=>n.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r,n;this.selectedOptions=this.getAllOptions().filter(i=>i.selected),this.multiple?(this.value=this.selectedOptions.map(i=>i.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(n=(r=this.selectedOptions[0])==null?void 0:r.getTextLabel())!=null?n:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(e,t);return E`<div @sl-remove=${n=>this.handleTagRemove(n,e)}>
          ${typeof r=="string"?ka(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return E`<sl-tag>+${this.selectedOptions.length-t}</sl-tag>`;return E``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Ie(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=be(this,"select.show",{dir:this.localize.dir()});await Ee(this.popup.popup,e,t),this.currentOption&&qu(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ie(this);const{keyframes:e,options:t}=be(this,"select.hide",{dir:this.localize.dir()});await Ee(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ut(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ut(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value.length===0;return E`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${V({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?E`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${i?E`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Q.styles=eC;Q.dependencies={"sl-icon":ue,"sl-popup":ae,"sl-tag":Br};c([L(".select")],Q.prototype,"popup",2);c([L(".select__combobox")],Q.prototype,"combobox",2);c([L(".select__display-input")],Q.prototype,"displayInput",2);c([L(".select__value-input")],Q.prototype,"valueInput",2);c([L(".select__listbox")],Q.prototype,"listbox",2);c([j()],Q.prototype,"hasFocus",2);c([j()],Q.prototype,"displayLabel",2);c([j()],Q.prototype,"currentOption",2);c([j()],Q.prototype,"selectedOptions",2);c([f()],Q.prototype,"name",2);c([f({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],Q.prototype,"value",2);c([Kn()],Q.prototype,"defaultValue",2);c([f({reflect:!0})],Q.prototype,"size",2);c([f()],Q.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],Q.prototype,"multiple",2);c([f({attribute:"max-options-visible",type:Number})],Q.prototype,"maxOptionsVisible",2);c([f({type:Boolean,reflect:!0})],Q.prototype,"disabled",2);c([f({type:Boolean})],Q.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],Q.prototype,"open",2);c([f({type:Boolean})],Q.prototype,"hoist",2);c([f({type:Boolean,reflect:!0})],Q.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],Q.prototype,"pill",2);c([f()],Q.prototype,"label",2);c([f({reflect:!0})],Q.prototype,"placement",2);c([f({attribute:"help-text"})],Q.prototype,"helpText",2);c([f({reflect:!0})],Q.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Q.prototype,"required",2);c([f()],Q.prototype,"getTag",2);c([T("disabled",{waitUntilFirstUpdate:!0})],Q.prototype,"handleDisabledChange",1);c([T("value",{waitUntilFirstUpdate:!0})],Q.prototype,"handleValueChange",1);c([T("open",{waitUntilFirstUpdate:!0})],Q.prototype,"handleOpenChange",1);le("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});le("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var nC="sl-select";Q.define("sl-select");F({tagName:nC,elementClass:Q,react:M,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"});var iC=B`
  ${U}

  :host {
    display: contents;
  }
`,Ts=class extends R{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return E` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ts.styles=iC;c([f({type:Boolean,reflect:!0})],Ts.prototype,"disabled",2);c([T("disabled",{waitUntilFirstUpdate:!0})],Ts.prototype,"handleDisabledChange",1);var oC="sl-resize-observer";Ts.define("sl-resize-observer");F({tagName:oC,elementClass:Ts,react:M,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var sC=B`
  ${U}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Mo(e,t){function r(i){const o=e.getBoundingClientRect(),s=e.ownerDocument.defaultView,l=o.left+s.pageXOffset,a=o.top+s.pageYOffset,u=i.pageX-l,p=i.pageY-a;t!=null&&t.onMove&&t.onMove(u,p)}function n(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",n),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",n),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}var wt=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Mo(this,{onMove:(r,n)=>{let i=this.vertical?n:r;this.primary==="end"&&(i=this.size-i),this.snap&&this.snap.split(" ").forEach(s=>{let l;s.endsWith("%")?l=this.size*(parseFloat(s)/100):l=parseFloat(s),t&&!this.vertical&&(l=this.size-l),i>=l-this.snapThreshold&&i<=l+this.snapThreshold&&(i=l)}),this.position=De(this.pixelsToPercentage(i),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=De(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",n=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${n} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${n}`:r&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${n}`:this.style[e]=`${n} var(--divider-width) ${i}`,this.style[t]="",E`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${D(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};wt.styles=sC;c([L(".divider")],wt.prototype,"divider",2);c([f({type:Number,reflect:!0})],wt.prototype,"position",2);c([f({attribute:"position-in-pixels",type:Number})],wt.prototype,"positionInPixels",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"vertical",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);c([f()],wt.prototype,"primary",2);c([f()],wt.prototype,"snap",2);c([f({type:Number,attribute:"snap-threshold"})],wt.prototype,"snapThreshold",2);c([T("position")],wt.prototype,"handlePositionChange",1);c([T("positionInPixels")],wt.prototype,"handlePositionInPixelsChange",1);c([T("vertical")],wt.prototype,"handleVerticalChange",1);var aC="sl-split-panel";wt.define("sl-split-panel");F({tagName:aC,elementClass:wt,react:M,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var lC=B`
  ${U}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,at=class extends R{constructor(){super(...arguments),this.formControlController=new Ur(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return E`
      <label
        part="base"
        class=${V({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${D(this.value)}
          .checked=${jn(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <slot part="label" class="switch__label"></slot>
      </label>
    `}};at.styles=lC;c([L('input[type="checkbox"]')],at.prototype,"input",2);c([j()],at.prototype,"hasFocus",2);c([f()],at.prototype,"title",2);c([f()],at.prototype,"name",2);c([f()],at.prototype,"value",2);c([f({reflect:!0})],at.prototype,"size",2);c([f({type:Boolean,reflect:!0})],at.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],at.prototype,"checked",2);c([Kn("checked")],at.prototype,"defaultChecked",2);c([f({reflect:!0})],at.prototype,"form",2);c([f({type:Boolean,reflect:!0})],at.prototype,"required",2);c([T("checked",{waitUntilFirstUpdate:!0})],at.prototype,"handleCheckedChange",1);c([T("disabled",{waitUntilFirstUpdate:!0})],at.prototype,"handleDisabledChange",1);var cC="sl-switch";at.define("sl-switch");F({tagName:cC,elementClass:at,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var uC=B`
  ${U}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Hl=class extends R{constructor(){super(...arguments),this.effect="none"}render(){return E`
      <div
        part="base"
        class=${V({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Hl.styles=uC;c([f()],Hl.prototype,"effect",2);var dC="sl-skeleton";Hl.define("sl-skeleton");F({tagName:dC,elementClass:Hl,react:M,events:{},displayName:"SlSkeleton"});var hC="sl-spinner";As.define("sl-spinner");F({tagName:hC,elementClass:As,react:M,events:{},displayName:"SlSpinner"});var pC=B`
  ${U}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,xt=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,n)=>{var i;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),n.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(s=>s.matches(":focus")),o=this.localize.dir()==="rtl";if((i==null?void 0:i.tagName.toLowerCase())==="sl-tab"){let s=this.tabs.indexOf(i);e.key==="Home"?s=0:e.key==="End"?s=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?s--:(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&s++,s<0&&(s=this.tabs.length-1),s>this.tabs.length-1&&(s=0),this.tabs[s].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[s],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&qu(this.tabs[s],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Fr({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(n=>n.active=n===this.activeTab),this.panels.forEach(n=>{var i;return n.active=n.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&qu(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,n=this.localize.dir()==="rtl",i=this.getAllTabs(),s=i.slice(0,i.indexOf(e)).reduce((l,a)=>({left:l.left+a.clientWidth,top:l.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=n?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${s.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return E`
      <div
        part="base"
        class=${V({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?E`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?E`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};xt.styles=pC;xt.dependencies={"sl-icon-button":Re};c([L(".tab-group")],xt.prototype,"tabGroup",2);c([L(".tab-group__body")],xt.prototype,"body",2);c([L(".tab-group__nav")],xt.prototype,"nav",2);c([L(".tab-group__indicator")],xt.prototype,"indicator",2);c([j()],xt.prototype,"hasScrollControls",2);c([f()],xt.prototype,"placement",2);c([f()],xt.prototype,"activation",2);c([f({attribute:"no-scroll-controls",type:Boolean})],xt.prototype,"noScrollControls",2);c([T("noScrollControls",{waitUntilFirstUpdate:!0})],xt.prototype,"updateScrollControls",1);c([T("placement",{waitUntilFirstUpdate:!0})],xt.prototype,"syncIndicator",1);var fC="sl-tab-group";xt.define("sl-tab-group");F({tagName:fC,elementClass:xt,react:M,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"});var mC=B`
  ${U}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,gC=0,ar=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.attrId=++gC,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,E`
      <div
        part="base"
        class=${V({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?E`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};ar.styles=mC;ar.dependencies={"sl-icon-button":Re};c([L(".tab")],ar.prototype,"tab",2);c([f({reflect:!0})],ar.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],ar.prototype,"active",2);c([f({type:Boolean})],ar.prototype,"closable",2);c([f({type:Boolean,reflect:!0})],ar.prototype,"disabled",2);c([T("active")],ar.prototype,"handleActiveChange",1);c([T("disabled")],ar.prototype,"handleDisabledChange",1);var vC="sl-tab";ar.define("sl-tab");F({tagName:vC,elementClass:ar,react:M,events:{onSlClose:"sl-close"},displayName:"SlTab"});var yC=B`
  ${U}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
`,Gn=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,n=r-this.value/100*r;this.indicatorOffset=`${n}px`}}render(){return E`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Gn.styles=yC;c([L(".progress-ring__indicator")],Gn.prototype,"indicator",2);c([j()],Gn.prototype,"indicatorOffset",2);c([f({type:Number,reflect:!0})],Gn.prototype,"value",2);c([f()],Gn.prototype,"label",2);var bC="sl-progress-ring";Gn.define("sl-progress-ring");F({tagName:bC,elementClass:Gn,react:M,events:{},displayName:"SlProgressRing"});var tv=B`
  ${U}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,wC=B`
  ${tv}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,qt=class extends R{constructor(){super(...arguments),this.hasSlotController=new Mt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return No`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${V({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${D(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};qt.styles=wC;c([L(".button")],qt.prototype,"input",2);c([L(".hidden-input")],qt.prototype,"hiddenInput",2);c([j()],qt.prototype,"hasFocus",2);c([f({type:Boolean,reflect:!0})],qt.prototype,"checked",2);c([f()],qt.prototype,"value",2);c([f({type:Boolean,reflect:!0})],qt.prototype,"disabled",2);c([f({reflect:!0})],qt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],qt.prototype,"pill",2);c([T("disabled",{waitUntilFirstUpdate:!0})],qt.prototype,"handleDisabledChange",1);var xC="sl-radio-button";qt.define("sl-radio-button");F({tagName:xC,elementClass:qt,react:M,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var _C=B`
  ${U}

  :host {
    display: inline-block;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rv="important",kC=" !"+rv,pt=$s(class extends Es{constructor(e){var t;if(super(e),e.type!==vr.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const n=e[r];return n==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ht===void 0){this.ht=new Set;for(const n in t)this.ht.add(n);return this.render(t)}this.ht.forEach(n=>{t[n]==null&&(this.ht.delete(n),n.includes("-")?r.removeProperty(n):r[n]="")});for(const n in t){const i=t[n];if(i!=null){this.ht.add(n);const o=typeof i=="string"&&i.endsWith(kC);n.includes("-")||o?r.setProperty(n,o?i.slice(0,-11):i,o?rv:""):r[n]=i}}return Pt}});let nv=null;class iv{}iv.render=function(e,t){nv(e,t)};self.QrCreator=iv;(function(e){function t(l,a,u,p){var d={},h=e(u,a);h.u(l),h.J(),p=p||0;var g=h.h(),v=h.h()+2*p;return d.text=l,d.level=a,d.version=u,d.O=v,d.a=function(y,k){return y-=p,k-=p,0>y||y>=g||0>k||k>=g?!1:h.a(y,k)},d}function r(l,a,u,p,d,h,g,v,y,k){function b(m,w,x,_,C,S,z){m?(l.lineTo(w+S,x+z),l.arcTo(w,x,_,C,h)):l.lineTo(w,x)}g?l.moveTo(a+h,u):l.moveTo(a,u),b(v,p,u,p,d,-h,0),b(y,p,d,a,d,0,-h),b(k,a,d,a,u,h,0),b(g,a,u,p,u,0,h)}function n(l,a,u,p,d,h,g,v,y,k){function b(m,w,x,_){l.moveTo(m+x,w),l.lineTo(m,w),l.lineTo(m,w+_),l.arcTo(m,w,m+x,w,h)}g&&b(a,u,h,h),v&&b(p,u,-h,h),y&&b(p,d,-h,-h),k&&b(a,d,h,-h)}function i(l,a){var u=a.fill;if(typeof u=="string")l.fillStyle=u;else{var p=u.type,d=u.colorStops;if(u=u.position.map(g=>Math.round(g*a.size)),p==="linear-gradient")var h=l.createLinearGradient.apply(l,u);else if(p==="radial-gradient")h=l.createRadialGradient.apply(l,u);else throw Error("Unsupported fill");d.forEach(([g,v])=>{h.addColorStop(g,v)}),l.fillStyle=h}}function o(l,a){e:{var u=a.text,p=a.v,d=a.N,h=a.K,g=a.P;for(d=Math.max(1,d||1),h=Math.min(40,h||40);d<=h;d+=1)try{var v=t(u,p,d,g);break e}catch{}v=void 0}if(!v)return null;for(u=l.getContext("2d"),a.background&&(u.fillStyle=a.background,u.fillRect(a.left,a.top,a.size,a.size)),p=v.O,h=a.size/p,u.beginPath(),g=0;g<p;g+=1)for(d=0;d<p;d+=1){var y=u,k=a.left+d*h,b=a.top+g*h,m=g,w=d,x=v.a,_=k+h,C=b+h,S=m-1,z=m+1,P=w-1,$=w+1,W=Math.floor(Math.min(.5,Math.max(0,a.R))*h),me=x(m,w),oe=x(S,P),Pe=x(S,w);S=x(S,$);var He=x(m,$);$=x(z,$),w=x(z,w),z=x(z,P),m=x(m,P),k=Math.round(k),b=Math.round(b),_=Math.round(_),C=Math.round(C),me?r(y,k,b,_,C,W,!Pe&&!m,!Pe&&!He,!w&&!He,!w&&!m):n(y,k,b,_,C,W,Pe&&m&&oe,Pe&&He&&S,w&&He&&$,w&&m&&z)}return i(u,a),u.fill(),l}var s={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};nv=function(l,a){var u={};Object.assign(u,s,l),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,a instanceof HTMLCanvasElement?((a.width!==u.size||a.height!==u.size)&&(a.width=u.size,a.height=u.size),a.getContext("2d").clearRect(0,0,a.width,a.height),o(a,u)):(l=document.createElement("canvas"),l.width=u.size,l.height=u.size,u=o(l,u),a.appendChild(u))}})(function(){function e(a){var u=r.s(a);return{S:function(){return 4},b:function(){return u.length},write:function(p){for(var d=0;d<u.length;d+=1)p.put(u[d],8)}}}function t(){var a=[],u=0,p={B:function(){return a},c:function(d){return(a[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,h){for(var g=0;g<h;g+=1)p.m((d>>>h-g-1&1)==1)},f:function(){return u},m:function(d){var h=Math.floor(u/8);a.length<=h&&a.push(0),d&&(a[h]|=128>>>u%8),u+=1}};return p}function r(a,u){function p(m,w){for(var x=-1;7>=x;x+=1)if(!(-1>=m+x||v<=m+x))for(var _=-1;7>=_;_+=1)-1>=w+_||v<=w+_||(g[m+x][w+_]=0<=x&&6>=x&&(_==0||_==6)||0<=_&&6>=_&&(x==0||x==6)||2<=x&&4>=x&&2<=_&&4>=_)}function d(m,w){for(var x=v=4*a+17,_=Array(x),C=0;C<x;C+=1){_[C]=Array(x);for(var S=0;S<x;S+=1)_[C][S]=null}for(g=_,p(0,0),p(v-7,0),p(0,v-7),x=o.G(a),_=0;_<x.length;_+=1)for(C=0;C<x.length;C+=1){S=x[_];var z=x[C];if(g[S][z]==null)for(var P=-2;2>=P;P+=1)for(var $=-2;2>=$;$+=1)g[S+P][z+$]=P==-2||P==2||$==-2||$==2||P==0&&$==0}for(x=8;x<v-8;x+=1)g[x][6]==null&&(g[x][6]=x%2==0);for(x=8;x<v-8;x+=1)g[6][x]==null&&(g[6][x]=x%2==0);for(x=o.w(h<<3|w),_=0;15>_;_+=1)C=!m&&(x>>_&1)==1,g[6>_?_:8>_?_+1:v-15+_][8]=C,g[8][8>_?v-_-1:9>_?15-_:14-_]=C;if(g[v-8][8]=!m,7<=a){for(x=o.A(a),_=0;18>_;_+=1)C=!m&&(x>>_&1)==1,g[Math.floor(_/3)][_%3+v-8-3]=C;for(_=0;18>_;_+=1)C=!m&&(x>>_&1)==1,g[_%3+v-8-3][Math.floor(_/3)]=C}if(y==null){for(m=l.I(a,h),x=t(),_=0;_<k.length;_+=1)C=k[_],x.put(4,4),x.put(C.b(),o.f(4,a)),C.write(x);for(_=C=0;_<m.length;_+=1)C+=m[_].j;if(x.f()>8*C)throw Error("code length overflow. ("+x.f()+">"+8*C+")");for(x.f()+4<=8*C&&x.put(0,4);x.f()%8!=0;)x.m(!1);for(;!(x.f()>=8*C)&&(x.put(236,8),!(x.f()>=8*C));)x.put(17,8);var W=0;for(C=_=0,S=Array(m.length),z=Array(m.length),P=0;P<m.length;P+=1){var me=m[P].j,oe=m[P].o-me;for(_=Math.max(_,me),C=Math.max(C,oe),S[P]=Array(me),$=0;$<S[P].length;$+=1)S[P][$]=255&x.B()[$+W];for(W+=me,$=o.C(oe),me=n(S[P],$.b()-1).l($),z[P]=Array($.b()-1),$=0;$<z[P].length;$+=1)oe=$+me.b()-z[P].length,z[P][$]=0<=oe?me.c(oe):0}for($=x=0;$<m.length;$+=1)x+=m[$].o;for(x=Array(x),$=W=0;$<_;$+=1)for(P=0;P<m.length;P+=1)$<S[P].length&&(x[W]=S[P][$],W+=1);for($=0;$<C;$+=1)for(P=0;P<m.length;P+=1)$<z[P].length&&(x[W]=z[P][$],W+=1);y=x}for(m=y,x=-1,_=v-1,C=7,S=0,w=o.F(w),z=v-1;0<z;z-=2)for(z==6&&--z;;){for(P=0;2>P;P+=1)g[_][z-P]==null&&($=!1,S<m.length&&($=(m[S]>>>C&1)==1),w(_,z-P)&&($=!$),g[_][z-P]=$,--C,C==-1&&(S+=1,C=7));if(_+=x,0>_||v<=_){_-=x,x=-x;break}}}var h=i[u],g=null,v=0,y=null,k=[],b={u:function(m){m=e(m),k.push(m),y=null},a:function(m,w){if(0>m||v<=m||0>w||v<=w)throw Error(m+","+w);return g[m][w]},h:function(){return v},J:function(){for(var m=0,w=0,x=0;8>x;x+=1){d(!0,x);var _=o.D(b);(x==0||m>_)&&(m=_,w=x)}d(!1,w)}};return b}function n(a,u){if(typeof a.length>"u")throw Error(a.length+"/"+u);var p=function(){for(var h=0;h<a.length&&a[h]==0;)h+=1;for(var g=Array(a.length-h+u),v=0;v<a.length-h;v+=1)g[v]=a[v+h];return g}(),d={c:function(h){return p[h]},b:function(){return p.length},multiply:function(h){for(var g=Array(d.b()+h.b()-1),v=0;v<d.b();v+=1)for(var y=0;y<h.b();y+=1)g[v+y]^=s.i(s.g(d.c(v))+s.g(h.c(y)));return n(g,0)},l:function(h){if(0>d.b()-h.b())return d;for(var g=s.g(d.c(0))-s.g(h.c(0)),v=Array(d.b()),y=0;y<d.b();y+=1)v[y]=d.c(y);for(y=0;y<h.b();y+=1)v[y]^=s.i(s.g(h.c(y))+g);return n(v,0).l(h)}};return d}r.s=function(a){for(var u=[],p=0;p<a.length;p++){var d=a.charCodeAt(p);128>d?u.push(d):2048>d?u.push(192|d>>6,128|d&63):55296>d||57344<=d?u.push(224|d>>12,128|d>>6&63,128|d&63):(p++,d=65536+((d&1023)<<10|a.charCodeAt(p)&1023),u.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return u};var i={L:1,M:0,Q:3,H:2},o=function(){function a(d){for(var h=0;d!=0;)h+=1,d>>>=1;return h}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],p={w:function(d){for(var h=d<<10;0<=a(h)-a(1335);)h^=1335<<a(h)-a(1335);return(d<<10|h)^21522},A:function(d){for(var h=d<<12;0<=a(h)-a(7973);)h^=7973<<a(h)-a(7973);return d<<12|h},G:function(d){return u[d-1]},F:function(d){switch(d){case 0:return function(h,g){return(h+g)%2==0};case 1:return function(h){return h%2==0};case 2:return function(h,g){return g%3==0};case 3:return function(h,g){return(h+g)%3==0};case 4:return function(h,g){return(Math.floor(h/2)+Math.floor(g/3))%2==0};case 5:return function(h,g){return h*g%2+h*g%3==0};case 6:return function(h,g){return(h*g%2+h*g%3)%2==0};case 7:return function(h,g){return(h*g%3+(h+g)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var h=n([1],0),g=0;g<d;g+=1)h=h.multiply(n([1,s.i(g)],0));return h},f:function(d,h){if(d!=4||1>h||40<h)throw Error("mode: "+d+"; type: "+h);return 10>h?8:16},D:function(d){for(var h=d.h(),g=0,v=0;v<h;v+=1)for(var y=0;y<h;y+=1){for(var k=0,b=d.a(v,y),m=-1;1>=m;m+=1)if(!(0>v+m||h<=v+m))for(var w=-1;1>=w;w+=1)0>y+w||h<=y+w||(m!=0||w!=0)&&b==d.a(v+m,y+w)&&(k+=1);5<k&&(g+=3+k-5)}for(v=0;v<h-1;v+=1)for(y=0;y<h-1;y+=1)k=0,d.a(v,y)&&(k+=1),d.a(v+1,y)&&(k+=1),d.a(v,y+1)&&(k+=1),d.a(v+1,y+1)&&(k+=1),(k==0||k==4)&&(g+=3);for(v=0;v<h;v+=1)for(y=0;y<h-6;y+=1)d.a(v,y)&&!d.a(v,y+1)&&d.a(v,y+2)&&d.a(v,y+3)&&d.a(v,y+4)&&!d.a(v,y+5)&&d.a(v,y+6)&&(g+=40);for(y=0;y<h;y+=1)for(v=0;v<h-6;v+=1)d.a(v,y)&&!d.a(v+1,y)&&d.a(v+2,y)&&d.a(v+3,y)&&d.a(v+4,y)&&!d.a(v+5,y)&&d.a(v+6,y)&&(g+=40);for(y=k=0;y<h;y+=1)for(v=0;v<h;v+=1)d.a(v,y)&&(k+=1);return g+=Math.abs(100*k/h/h-50)/5*10}};return p}(),s=function(){for(var a=Array(256),u=Array(256),p=0;8>p;p+=1)a[p]=1<<p;for(p=8;256>p;p+=1)a[p]=a[p-4]^a[p-5]^a[p-6]^a[p-8];for(p=0;255>p;p+=1)u[a[p]]=p;return{g:function(d){if(1>d)throw Error("glog("+d+")");return u[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return a[d]}}}(),l=function(){function a(d,h){switch(h){case i.L:return u[4*(d-1)];case i.M:return u[4*(d-1)+1];case i.Q:return u[4*(d-1)+2];case i.H:return u[4*(d-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],p={I:function(d,h){var g=a(d,h);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+h);d=g.length/3,h=[];for(var v=0;v<d;v+=1)for(var y=g[3*v],k=g[3*v+1],b=g[3*v+2],m=0;m<y;m+=1){var w=b,x={};x.o=k,x.j=w,h.push(x)}return h}};return p}();return r}());const CC=QrCreator;var Yt=class extends R{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&CC.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return E`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${pt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Yt.styles=_C;c([L("canvas")],Yt.prototype,"canvas",2);c([f()],Yt.prototype,"value",2);c([f()],Yt.prototype,"label",2);c([f({type:Number})],Yt.prototype,"size",2);c([f()],Yt.prototype,"fill",2);c([f()],Yt.prototype,"background",2);c([f({type:Number})],Yt.prototype,"radius",2);c([f({attribute:"error-correction"})],Yt.prototype,"errorCorrection",2);c([T(["background","errorCorrection","fill","radius","size","value"])],Yt.prototype,"generate",1);var SC="sl-qr-code";Yt.define("sl-qr-code");F({tagName:SC,elementClass:Yt,react:M,events:{},displayName:"SlQrCode"});var $C=B`
  ${U}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`,lr=class extends R{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return E`
      <span
        part="base"
        class=${V({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?E` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};lr.styles=$C;lr.dependencies={"sl-icon":ue};c([j()],lr.prototype,"checked",2);c([j()],lr.prototype,"hasFocus",2);c([f()],lr.prototype,"value",2);c([f({reflect:!0})],lr.prototype,"size",2);c([f({type:Boolean,reflect:!0})],lr.prototype,"disabled",2);c([T("checked")],lr.prototype,"handleCheckedChange",1);c([T("disabled",{waitUntilFirstUpdate:!0})],lr.prototype,"handleDisabledChange",1);var EC="sl-radio";lr.define("sl-radio");F({tagName:EC,elementClass:lr,react:M,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var zC=B`
  ${U}
  ${zs}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,AC=B`
  ${U}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,wn=class extends R{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=vo(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=vo(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=vo(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=vo(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),n=vo(t);n&&(n.classList.add("sl-button-group__button"),n.classList.toggle("sl-button-group__button--first",r===0),n.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),n.classList.toggle("sl-button-group__button--last",r===e.length-1),n.classList.toggle("sl-button-group__button--radio",n.tagName.toLowerCase()==="sl-radio-button"))})}render(){return E`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};wn.styles=AC;c([L("slot")],wn.prototype,"defaultSlot",2);c([j()],wn.prototype,"disableRole",2);c([f()],wn.prototype,"label",2);function vo(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var qe=class extends R{constructor(){super(...arguments),this.formControlController=new Ur(this),this.hasSlotController=new Mt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?jk:e?Vk:Vl}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),n=this.value;t.disabled||(this.value=t.value,r.forEach(i=>i.checked=i===t),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(l=>!l.disabled),n=(t=r.find(l=>l.checked))!=null?t:r[0],i=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,o=this.value;let s=r.indexOf(n)+i;s<0&&(s=r.length-1),s>r.length-1&&(s=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=r[s].value,r[s].checked=!0,this.hasButtonGroup?r[s].shadowRoot.querySelector("button").focus():(r[s].tabIndex=0,r[s].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(n=>n.checked)||e[0];r&&r.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async n=>{await n.updateComplete,n.checked=n.value===this.value,n.size=this.size})),this.hasButtonGroup=r.some(n=>n.tagName.toLowerCase()==="sl-radio-button"),!r.some(n=>n.checked))if(this.hasButtonGroup){const n=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");n&&(n.tabIndex=0)}else r[0].tabIndex=0;if(this.hasButtonGroup){const n=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");n&&(n.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,i=E`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return E`
      <fieldset
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":n})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?E`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${i}
                </sl-button-group>
              `:i}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};qe.styles=zC;qe.dependencies={"sl-button-group":wn};c([L("slot:not([name])")],qe.prototype,"defaultSlot",2);c([L(".radio-group__validation-input")],qe.prototype,"validationInput",2);c([j()],qe.prototype,"hasButtonGroup",2);c([j()],qe.prototype,"errorMessage",2);c([j()],qe.prototype,"defaultValue",2);c([f()],qe.prototype,"label",2);c([f({attribute:"help-text"})],qe.prototype,"helpText",2);c([f()],qe.prototype,"name",2);c([f({reflect:!0})],qe.prototype,"value",2);c([f({reflect:!0})],qe.prototype,"size",2);c([f({reflect:!0})],qe.prototype,"form",2);c([f({type:Boolean,reflect:!0})],qe.prototype,"required",2);c([T("size",{waitUntilFirstUpdate:!0})],qe.prototype,"handleSizeChange",1);c([T("value")],qe.prototype,"handleValueChange",1);var TC="sl-radio-group";qe.define("sl-radio-group");F({tagName:TC,elementClass:qe,react:M,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var PC=B`
  ${U}
  ${zs}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,we=class extends R{constructor(){super(...arguments),this.formControlController=new Ur(this),this.hasSlotController=new Mt(this,"help-text","label"),this.localize=new ne(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,n=getComputedStyle(this.input).getPropertyValue("--thumb-size"),i=this.localize.dir()==="rtl",o=t*e;if(i){const s=`${t-o}px + ${e} * ${n}`;this.output.style.translate=`calc((${s} - ${r/2}px - ${n} / 2))`}else{const s=`${o}px - ${e} * ${n}`;this.output.style.translate=`calc(${s} - ${r/2}px + ${n} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t;return E`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${D(this.name)}
              ?disabled=${this.disabled}
              min=${D(this.min)}
              max=${D(this.max)}
              step=${D(this.step)}
              .value=${jn(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?E`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};we.styles=PC;c([L(".range__control")],we.prototype,"input",2);c([L(".range__tooltip")],we.prototype,"output",2);c([j()],we.prototype,"hasFocus",2);c([j()],we.prototype,"hasTooltip",2);c([f()],we.prototype,"title",2);c([f()],we.prototype,"name",2);c([f({type:Number})],we.prototype,"value",2);c([f()],we.prototype,"label",2);c([f({attribute:"help-text"})],we.prototype,"helpText",2);c([f({type:Boolean,reflect:!0})],we.prototype,"disabled",2);c([f({type:Number})],we.prototype,"min",2);c([f({type:Number})],we.prototype,"max",2);c([f({type:Number})],we.prototype,"step",2);c([f()],we.prototype,"tooltip",2);c([f({attribute:!1})],we.prototype,"tooltipFormatter",2);c([f({reflect:!0})],we.prototype,"form",2);c([Kn()],we.prototype,"defaultValue",2);c([Gg({passive:!0})],we.prototype,"handleThumbDragStart",1);c([T("value",{waitUntilFirstUpdate:!0})],we.prototype,"handleValueChange",1);c([T("disabled",{waitUntilFirstUpdate:!0})],we.prototype,"handleDisabledChange",1);c([T("hasTooltip",{waitUntilFirstUpdate:!0})],we.prototype,"syncRange",1);var OC="sl-range";we.define("sl-range");F({tagName:OC,elementClass:we,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var LC=B`
  ${U}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`,et=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:n,width:i}=this.rating.getBoundingClientRect(),o=t?this.roundToPrecision((n-e)/i*this.max,this.precision):this.roundToPrecision((e-r)/i*this.max,this.precision);return De(o,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",n=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const i=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-i),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const i=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+i),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==n&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,E`
      <div
        part="base"
        class=${V({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(n=>r>n&&r<n+1?E`
                <span
                  class=${V({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===n+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${pt({clipPath:e?`inset(0 ${(r-n)*100}% 0 0)`:`inset(0 0 0 ${(r-n)*100}%)`})}
                  >
                    ${ka(this.getSymbol(n+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${pt({clipPath:e?`inset(0 0 0 ${100-(r-n)*100}%)`:`inset(0 ${100-(r-n)*100}% 0 0)`})}
                  >
                    ${ka(this.getSymbol(n+1))}
                  </div>
                </span>
              `:E`
              <span
                class=${V({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===n+1,"rating__symbol--active":r>=n+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${ka(this.getSymbol(n+1))}
              </span>
            `)}
        </span>
      </div>
    `}};et.styles=LC;et.dependencies={"sl-icon":ue};c([L(".rating")],et.prototype,"rating",2);c([j()],et.prototype,"hoverValue",2);c([j()],et.prototype,"isHovering",2);c([f()],et.prototype,"label",2);c([f({type:Number})],et.prototype,"value",2);c([f({type:Number})],et.prototype,"max",2);c([f({type:Number})],et.prototype,"precision",2);c([f({type:Boolean,reflect:!0})],et.prototype,"readonly",2);c([f({type:Boolean,reflect:!0})],et.prototype,"disabled",2);c([f()],et.prototype,"getSymbol",2);c([Gg({passive:!0})],et.prototype,"handleTouchMove",1);c([T("hoverValue")],et.prototype,"handleHoverValueChange",1);c([T("isHovering")],et.prototype,"handleIsHoveringChange",1);var IC="sl-rating";et.define("sl-rating");F({tagName:IC,elementClass:et,react:M,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"});var NC=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Vr=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:n,value:i}=NC.find(o=>Math.abs(r)<o.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/i),n,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;n==="minute"?o=ra("second"):n==="hour"?o=ra("minute"):n==="day"?o=ra("hour"):o=ra("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return E` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};c([j()],Vr.prototype,"isoTime",2);c([j()],Vr.prototype,"relativeTime",2);c([j()],Vr.prototype,"titleTime",2);c([f()],Vr.prototype,"date",2);c([f()],Vr.prototype,"format",2);c([f()],Vr.prototype,"numeric",2);c([f({type:Boolean})],Vr.prototype,"sync",2);function ra(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}var RC="sl-relative-time";Vr.define("sl-relative-time");F({tagName:RC,elementClass:Vr,react:M,events:{},displayName:"SlRelativeTime"});var DC=B`
  ${U}
  ${zs}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,K=class extends R{constructor(){super(...arguments),this.formControlController=new Ur(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Mt(this,"help-text","label"),this.localize=new ne(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,n){this.input.setRangeText(e,t,r,n),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly,o=i&&(typeof this.value=="number"||this.value.length>0);return E`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${D(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${D(this.placeholder)}
              minlength=${D(this.minlength)}
              maxlength=${D(this.maxlength)}
              min=${D(this.min)}
              max=${D(this.max)}
              step=${D(this.step)}
              .value=${jn(this.value)}
              autocapitalize=${D(this.autocapitalize)}
              autocomplete=${D(this.autocomplete)}
              autocorrect=${D(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${D(this.pattern)}
              enterkeyhint=${D(this.enterkeyhint)}
              inputmode=${D(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?E`
                  <button
                    part="clear-button"
                    class=${V({input__clear:!0,"input__clear--visible":o})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?E`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?E`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:E`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};K.styles=DC;K.dependencies={"sl-icon":ue};c([L(".input__control")],K.prototype,"input",2);c([j()],K.prototype,"hasFocus",2);c([f()],K.prototype,"title",2);c([f({reflect:!0})],K.prototype,"type",2);c([f()],K.prototype,"name",2);c([f()],K.prototype,"value",2);c([Kn()],K.prototype,"defaultValue",2);c([f({reflect:!0})],K.prototype,"size",2);c([f({type:Boolean,reflect:!0})],K.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],K.prototype,"pill",2);c([f()],K.prototype,"label",2);c([f({attribute:"help-text"})],K.prototype,"helpText",2);c([f({type:Boolean})],K.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],K.prototype,"disabled",2);c([f()],K.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],K.prototype,"readonly",2);c([f({attribute:"password-toggle",type:Boolean})],K.prototype,"passwordToggle",2);c([f({attribute:"password-visible",type:Boolean})],K.prototype,"passwordVisible",2);c([f({attribute:"no-spin-buttons",type:Boolean})],K.prototype,"noSpinButtons",2);c([f({reflect:!0})],K.prototype,"form",2);c([f({type:Boolean,reflect:!0})],K.prototype,"required",2);c([f()],K.prototype,"pattern",2);c([f({type:Number})],K.prototype,"minlength",2);c([f({type:Number})],K.prototype,"maxlength",2);c([f()],K.prototype,"min",2);c([f()],K.prototype,"max",2);c([f()],K.prototype,"step",2);c([f()],K.prototype,"autocapitalize",2);c([f()],K.prototype,"autocorrect",2);c([f()],K.prototype,"autocomplete",2);c([f({type:Boolean})],K.prototype,"autofocus",2);c([f()],K.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],K.prototype,"spellcheck",2);c([f()],K.prototype,"inputmode",2);c([T("disabled",{waitUntilFirstUpdate:!0})],K.prototype,"handleDisabledChange",1);c([T("step",{waitUntilFirstUpdate:!0})],K.prototype,"handleStepChange",1);c([T("value",{waitUntilFirstUpdate:!0})],K.prototype,"handleValueChange",1);var MC="sl-input";K.define("sl-input");F({tagName:MC,elementClass:K,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"});var FC=B`
  ${U}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`,gh=class extends R{render(){return E` <slot part="base" class="menu-label"></slot> `}};gh.styles=FC;var BC="sl-menu-label";gh.define("sl-menu-label");F({tagName:BC,elementClass:gh,react:M,events:{},displayName:"SlMenuLabel"});var UC=B`
  ${U}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fo=(e,t)=>{var r,n;const i=e._$AN;if(i===void 0)return!1;for(const o of i)(n=(r=o)._$AO)===null||n===void 0||n.call(r,t,!1),Fo(o,t);return!0},ll=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},ov=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),HC(t)}};function VC(e){this._$AN!==void 0?(ll(this),this._$AM=e,ov(this)):this._$AM=e}function jC(e,t=!1,r=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let o=r;o<n.length;o++)Fo(n[o],!1),ll(n[o]);else n!=null&&(Fo(n,!1),ll(n));else Fo(this,e)}const HC=e=>{var t,r,n,i;e.type==vr.CHILD&&((t=(n=e)._$AP)!==null&&t!==void 0||(n._$AP=jC),(r=(i=e)._$AQ)!==null&&r!==void 0||(i._$AQ=VC))};class WC extends Es{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,n){super._$AT(t,r,n),ov(this),this.isConnected=t._$AU}_$AO(t,r=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)===null||n===void 0||n.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),r&&(Fo(this,t),ll(this))}setValue(t){if(qg(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const KC=()=>new GC;let GC=class{};const Ic=new WeakMap,qC=$s(class extends WC{render(e){return ye}update(e,[t]){var r;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=(r=e.options)===null||r===void 0?void 0:r.host,this.ot(this.lt=e.element)),ye}ot(e){var t;if(typeof this.G=="function"){const r=(t=this.dt)!==null&&t!==void 0?t:globalThis;let n=Ic.get(r);n===void 0&&(n=new WeakMap,Ic.set(r,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,r;return typeof this.G=="function"?(t=Ic.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.G):(r=this.G)===null||r===void 0?void 0:r.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var YC=class{constructor(e,t,r){this.popupRef=KC(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=n=>{switch(n.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":n.target!==this.host&&(n.preventDefault(),n.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(n);break}},this.handleClick=n=>{var i;n.target===this.host?(n.preventDefault(),n.stopPropagation()):n.target instanceof Element&&(n.target.tagName==="sl-menu-item"||(i=n.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=n=>{n.relatedTarget&&n.relatedTarget instanceof Element&&this.host.contains(n.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=n=>{n.stopPropagation()},(this.host=e).addController(this),this.hasSlotController=t,this.localize=r}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(const n of t.assignedElements())if(r=n.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let n=1;n!==r.length;++n)r[n].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),n=["padding-top","border-top-width","margin-top"].reduce((i,o)=>{var s;const l=(s=t.get(o))!=null?s:new CSSUnitValue(0,"px"),u=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return i-u.value},0);this.skidding=n}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?E`
      <sl-popup
        ${qC(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:E` <slot name="submenu" hidden></slot> `}},XC=B`
  ${U}

  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,_t=class extends R{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new ne(this),this.hasSlotController=new Mt(this,"submenu"),this.submenuController=new YC(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Hk(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return E`
      <div
        id="anchor"
        part="base"
        class=${V({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `}};_t.styles=XC;_t.dependencies={"sl-icon":ue,"sl-popup":ae};c([L("slot:not([name])")],_t.prototype,"defaultSlot",2);c([L(".menu-item")],_t.prototype,"menuItem",2);c([f()],_t.prototype,"type",2);c([f({type:Boolean,reflect:!0})],_t.prototype,"checked",2);c([f()],_t.prototype,"value",2);c([f({type:Boolean,reflect:!0})],_t.prototype,"disabled",2);c([T("checked")],_t.prototype,"handleCheckedChange",1);c([T("disabled")],_t.prototype,"handleDisabledChange",1);c([T("type")],_t.prototype,"handleTypeChange",1);var Wl=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){if(!(e.target instanceof _t))return;const t=e.target;t.type==="checkbox"&&(t.checked=!t.checked),this.emit("sl-select",{detail:{item:t}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let n=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?n++:e.key==="ArrowUp"?n--:e.key==="Home"?n=0:e.key==="End"&&(n=t.length-1),n<0&&(n=t.length-1),n>t.length-1&&(n=0),this.setCurrentItem(t[n]),t[n].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return E`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Wl.styles=UC;c([L("slot")],Wl.prototype,"defaultSlot",2);var QC="sl-menu";Wl.define("sl-menu");F({tagName:QC,elementClass:Wl,react:M,events:{onSlSelect:"sl-select"},displayName:"SlMenu"});var ZC="sl-menu-item";_t.define("sl-menu-item");F({tagName:ZC,elementClass:_t,react:M,events:{},displayName:"SlMenuItem"});var JC="sl-popup";ae.define("sl-popup");F({tagName:JC,elementClass:ae,react:M,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var eS=B`
  ${U}

  :host {
    display: contents;
  }
`,cr=class extends R{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return E` <slot></slot> `}};cr.styles=eS;c([f({reflect:!0})],cr.prototype,"attr",2);c([f({attribute:"attr-old-value",type:Boolean,reflect:!0})],cr.prototype,"attrOldValue",2);c([f({attribute:"char-data",type:Boolean,reflect:!0})],cr.prototype,"charData",2);c([f({attribute:"char-data-old-value",type:Boolean,reflect:!0})],cr.prototype,"charDataOldValue",2);c([f({attribute:"child-list",type:Boolean,reflect:!0})],cr.prototype,"childList",2);c([f({type:Boolean,reflect:!0})],cr.prototype,"disabled",2);c([T("disabled")],cr.prototype,"handleDisabledChange",1);c([T("attr",{waitUntilFirstUpdate:!0}),T("attr-old-value",{waitUntilFirstUpdate:!0}),T("char-data",{waitUntilFirstUpdate:!0}),T("char-data-old-value",{waitUntilFirstUpdate:!0}),T("childList",{waitUntilFirstUpdate:!0})],cr.prototype,"handleChange",1);var tS="sl-mutation-observer";cr.define("sl-mutation-observer");F({tagName:tS,elementClass:cr,react:M,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});var rS=B`
  ${U}

  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Ft=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return E`
      <div
        part="base"
        class=${V({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Ft.styles=rS;Ft.dependencies={"sl-icon":ue};c([L(".option__label")],Ft.prototype,"defaultSlot",2);c([j()],Ft.prototype,"current",2);c([j()],Ft.prototype,"selected",2);c([j()],Ft.prototype,"hasHover",2);c([f({reflect:!0})],Ft.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2);c([T("disabled")],Ft.prototype,"handleDisabledChange",1);c([T("selected")],Ft.prototype,"handleSelectedChange",1);c([T("value")],Ft.prototype,"handleValueChange",1);var nS="sl-option";Ft.define("sl-option");F({tagName:nS,elementClass:Ft,react:M,events:{},displayName:"SlOption"});var iS=B`
  ${U}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Xi=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return E`
      <div
        part="base"
        class=${V({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${D(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${pt({width:`${this.value}%`})}>
          ${this.indeterminate?"":E` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Xi.styles=iS;c([f({type:Number,reflect:!0})],Xi.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Xi.prototype,"indeterminate",2);c([f()],Xi.prototype,"label",2);var oS="sl-progress-bar";Xi.define("sl-progress-bar");F({tagName:oS,elementClass:Xi,react:M,events:{},displayName:"SlProgressBar"});var sS=B`
  ${U}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function aS(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null&&Jg(e)===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function lS(e){var t,r;const n=Ca(e),i=(t=n[0])!=null?t:null,o=(r=n[n.length-1])!=null?r:null;return{start:i,end:o}}function Ca(e){const t=[];function r(n){if(n instanceof Element){if(n.hasAttribute("inert"))return;!t.includes(n)&&aS(n)&&t.push(n);const i=o=>{var s;return((s=o.getRootNode({composed:!0}))==null?void 0:s.host)!==e};n instanceof HTMLSlotElement&&i(n)&&n.assignedElements({flatten:!0}).forEach(o=>{r(o)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&r(n.shadowRoot)}[...n.children].forEach(i=>r(i))}return r(e),t}var tt=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,n,i;const o=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(i=(n=document.activeElement)==null?void 0:n.shadowRoot)==null?void 0:i.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),n=r[0],i=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(n),n.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(n=>lS(n).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ut(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Ie(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=be(this,"dropdown.show",{dir:this.localize.dir()});await Ee(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ie(this);const{keyframes:e,options:t}=be(this,"dropdown.hide",{dir:this.localize.dir()});await Ee(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return E`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${V({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};tt.styles=sS;tt.dependencies={"sl-popup":ae};c([L(".dropdown")],tt.prototype,"popup",2);c([L(".dropdown__trigger")],tt.prototype,"trigger",2);c([L(".dropdown__panel")],tt.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],tt.prototype,"open",2);c([f({reflect:!0})],tt.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);c([f({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],tt.prototype,"stayOpenOnSelect",2);c([f({attribute:!1})],tt.prototype,"containingElement",2);c([f({type:Number})],tt.prototype,"distance",2);c([f({type:Number})],tt.prototype,"skidding",2);c([f({type:Boolean})],tt.prototype,"hoist",2);c([T("open",{waitUntilFirstUpdate:!0})],tt.prototype,"handleOpenChange",1);le("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});le("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var cS="sl-dropdown";tt.define("sl-dropdown");F({tagName:cS,elementClass:tt,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"});var Ps=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,n=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),i=r[n]+this.unit,o=parseFloat((this.value/Math.pow(1e3,n)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}};c([f({type:Number})],Ps.prototype,"value",2);c([f()],Ps.prototype,"unit",2);c([f()],Ps.prototype,"display",2);var uS="sl-format-bytes";Ps.define("sl-format-bytes");F({tagName:uS,elementClass:Ps,react:M,events:{},displayName:"SlFormatBytes"});var kt=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return E`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};c([f()],kt.prototype,"date",2);c([f()],kt.prototype,"weekday",2);c([f()],kt.prototype,"era",2);c([f()],kt.prototype,"year",2);c([f()],kt.prototype,"month",2);c([f()],kt.prototype,"day",2);c([f()],kt.prototype,"hour",2);c([f()],kt.prototype,"minute",2);c([f()],kt.prototype,"second",2);c([f({attribute:"time-zone-name"})],kt.prototype,"timeZoneName",2);c([f({attribute:"time-zone"})],kt.prototype,"timeZone",2);c([f({attribute:"hour-format"})],kt.prototype,"hourFormat",2);var dS="sl-format-date";kt.define("sl-format-date");F({tagName:dS,elementClass:kt,react:M,events:{},displayName:"SlFormatDate"});var Xt=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([f({type:Number})],Xt.prototype,"value",2);c([f()],Xt.prototype,"type",2);c([f({attribute:"no-grouping",type:Boolean})],Xt.prototype,"noGrouping",2);c([f()],Xt.prototype,"currency",2);c([f({attribute:"currency-display"})],Xt.prototype,"currencyDisplay",2);c([f({attribute:"minimum-integer-digits",type:Number})],Xt.prototype,"minimumIntegerDigits",2);c([f({attribute:"minimum-fraction-digits",type:Number})],Xt.prototype,"minimumFractionDigits",2);c([f({attribute:"maximum-fraction-digits",type:Number})],Xt.prototype,"maximumFractionDigits",2);c([f({attribute:"minimum-significant-digits",type:Number})],Xt.prototype,"minimumSignificantDigits",2);c([f({attribute:"maximum-significant-digits",type:Number})],Xt.prototype,"maximumSignificantDigits",2);var hS="sl-format-number";Xt.define("sl-format-number");F({tagName:hS,elementClass:Xt,react:M,events:{},displayName:"SlFormatNumber"});var pS="sl-icon";ue.define("sl-icon");var fS=F({tagName:pS,elementClass:ue,react:M,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),cl=fS,mS=B`
  ${U}

  :host {
    display: block;
  }
`,Nc=new Map;function gS(e,t="cors"){const r=Nc.get(e);if(r!==void 0)return Promise.resolve(r);const n=fetch(e,{mode:t}).then(async i=>{const o={ok:i.ok,status:i.status,html:await i.text()};return Nc.set(e,o),o});return Nc.set(e,n),n}var qn=class extends R{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await gS(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return E`<slot></slot>`}};qn.styles=mS;c([f()],qn.prototype,"src",2);c([f()],qn.prototype,"mode",2);c([f({attribute:"allow-scripts",type:Boolean})],qn.prototype,"allowScripts",2);c([T("src")],qn.prototype,"handleSrcChange",1);var vS="sl-include";qn.define("sl-include");F({tagName:vS,elementClass:qn,react:M,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var yS="sl-icon-button";Re.define("sl-icon-button");var bS=F({tagName:yS,elementClass:Re,react:M,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"}),wS=bS,xS=B`
  ${U}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,xn=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),Mo(this.base,{onMove:n=>{this.position=parseFloat(De(n/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const n=e.shiftKey?10:1;let i=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(i-=n),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(i+=n),e.key==="Home"&&(i=0),e.key==="End"&&(i=100),i=De(i,0,100),this.position=i}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return E`
      <div
        part="base"
        id="image-comparer"
        class=${V({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${pt({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${pt({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};xn.styles=xS;xn.scopedElement={"sl-icon":ue};c([L(".image-comparer")],xn.prototype,"base",2);c([L(".image-comparer__handle")],xn.prototype,"handle",2);c([f({type:Number,reflect:!0})],xn.prototype,"position",2);c([T("position",{waitUntilFirstUpdate:!0})],xn.prototype,"handlePositionChange",1);var _S="sl-image-comparer";xn.define("sl-image-comparer");F({tagName:_S,elementClass:xn,react:M,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var kS=B`
  ${U}

  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Kl=class extends R{static isCarouselItem(e){return e instanceof Element&&e.getAttribute("aria-roledescription")==="slide"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return E` <slot></slot> `}};Kl.styles=kS;var CS="sl-carousel-item";Kl.define("sl-carousel-item");F({tagName:CS,elementClass:Kl,react:M,events:{},displayName:"SlCarouselItem"});var SS="sl-checkbox";Ue.define("sl-checkbox");F({tagName:SS,elementClass:Ue,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"});var $S=B`
  ${U}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ie=class extends R{constructor(){super(...arguments),this.formControlController=new Ur(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Mt(this,"[default]","prefix","suffix"),this.localize=new ne(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Vl}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?sl`a`:sl`button`;return No`
      <${t}
        part="base"
        class=${V({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${D(e?void 0:this.disabled)}
        type=${D(e?void 0:this.type)}
        title=${this.title}
        name=${D(e?void 0:this.name)}
        value=${D(e?void 0:this.value)}
        href=${D(e?this.href:void 0)}
        target=${D(e?this.target:void 0)}
        download=${D(e?this.download:void 0)}
        rel=${D(e?this.rel:void 0)}
        role=${D(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?No` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?No`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};ie.styles=tv;ie.dependencies={"sl-icon":ue,"sl-spinner":As};c([L(".button")],ie.prototype,"button",2);c([j()],ie.prototype,"hasFocus",2);c([j()],ie.prototype,"invalid",2);c([f()],ie.prototype,"title",2);c([f({reflect:!0})],ie.prototype,"variant",2);c([f({reflect:!0})],ie.prototype,"size",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"caret",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"outline",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"circle",2);c([f()],ie.prototype,"type",2);c([f()],ie.prototype,"name",2);c([f()],ie.prototype,"value",2);c([f()],ie.prototype,"href",2);c([f()],ie.prototype,"target",2);c([f()],ie.prototype,"rel",2);c([f()],ie.prototype,"download",2);c([f()],ie.prototype,"form",2);c([f({attribute:"formaction"})],ie.prototype,"formAction",2);c([f({attribute:"formenctype"})],ie.prototype,"formEnctype",2);c([f({attribute:"formmethod"})],ie.prototype,"formMethod",2);c([f({attribute:"formnovalidate",type:Boolean})],ie.prototype,"formNoValidate",2);c([f({attribute:"formtarget"})],ie.prototype,"formTarget",2);c([T("disabled",{waitUntilFirstUpdate:!0})],ie.prototype,"handleDisabledChange",1);function Ze(e,t){ES(e)&&(e="100%");var r=zS(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function na(e){return Math.min(1,Math.max(0,e))}function ES(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function zS(e){return typeof e=="string"&&e.indexOf("%")!==-1}function sv(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function ia(e){return e<=1?"".concat(Number(e)*100,"%"):e}function Ln(e){return e.length===1?"0"+e:String(e)}function AS(e,t,r){return{r:Ze(e,255)*255,g:Ze(t,255)*255,b:Ze(r,255)*255}}function Ef(e,t,r){e=Ze(e,255),t=Ze(t,255),r=Ze(r,255);var n=Math.max(e,t,r),i=Math.min(e,t,r),o=0,s=0,l=(n+i)/2;if(n===i)s=0,o=0;else{var a=n-i;switch(s=l>.5?a/(2-n-i):a/(n+i),n){case e:o=(t-r)/a+(t<r?6:0);break;case t:o=(r-e)/a+2;break;case r:o=(e-t)/a+4;break}o/=6}return{h:o,s,l}}function Rc(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function TS(e,t,r){var n,i,o;if(e=Ze(e,360),t=Ze(t,100),r=Ze(r,100),t===0)i=r,o=r,n=r;else{var s=r<.5?r*(1+t):r+t-r*t,l=2*r-s;n=Rc(l,s,e+1/3),i=Rc(l,s,e),o=Rc(l,s,e-1/3)}return{r:n*255,g:i*255,b:o*255}}function zf(e,t,r){e=Ze(e,255),t=Ze(t,255),r=Ze(r,255);var n=Math.max(e,t,r),i=Math.min(e,t,r),o=0,s=n,l=n-i,a=n===0?0:l/n;if(n===i)o=0;else{switch(n){case e:o=(t-r)/l+(t<r?6:0);break;case t:o=(r-e)/l+2;break;case r:o=(e-t)/l+4;break}o/=6}return{h:o,s:a,v:s}}function PS(e,t,r){e=Ze(e,360)*6,t=Ze(t,100),r=Ze(r,100);var n=Math.floor(e),i=e-n,o=r*(1-t),s=r*(1-i*t),l=r*(1-(1-i)*t),a=n%6,u=[r,s,o,o,l,r][a],p=[l,r,r,s,o,o][a],d=[o,o,l,r,r,s][a];return{r:u*255,g:p*255,b:d*255}}function Af(e,t,r,n){var i=[Ln(Math.round(e).toString(16)),Ln(Math.round(t).toString(16)),Ln(Math.round(r).toString(16))];return n&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function OS(e,t,r,n,i){var o=[Ln(Math.round(e).toString(16)),Ln(Math.round(t).toString(16)),Ln(Math.round(r).toString(16)),Ln(LS(n))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function LS(e){return Math.round(parseFloat(e)*255).toString(16)}function Tf(e){return $t(e)/255}function $t(e){return parseInt(e,16)}function IS(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var Xu={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function NS(e){var t={r:0,g:0,b:0},r=1,n=null,i=null,o=null,s=!1,l=!1;return typeof e=="string"&&(e=MS(e)),typeof e=="object"&&(Sr(e.r)&&Sr(e.g)&&Sr(e.b)?(t=AS(e.r,e.g,e.b),s=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Sr(e.h)&&Sr(e.s)&&Sr(e.v)?(n=ia(e.s),i=ia(e.v),t=PS(e.h,n,i),s=!0,l="hsv"):Sr(e.h)&&Sr(e.s)&&Sr(e.l)&&(n=ia(e.s),o=ia(e.l),t=TS(e.h,n,o),s=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=sv(r),{ok:s,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}var RS="[-\\+]?\\d+%?",DS="[-\\+]?\\d*\\.\\d+%?",Zr="(?:".concat(DS,")|(?:").concat(RS,")"),Dc="[\\s|\\(]+(".concat(Zr,")[,|\\s]+(").concat(Zr,")[,|\\s]+(").concat(Zr,")\\s*\\)?"),Mc="[\\s|\\(]+(".concat(Zr,")[,|\\s]+(").concat(Zr,")[,|\\s]+(").concat(Zr,")[,|\\s]+(").concat(Zr,")\\s*\\)?"),er={CSS_UNIT:new RegExp(Zr),rgb:new RegExp("rgb"+Dc),rgba:new RegExp("rgba"+Mc),hsl:new RegExp("hsl"+Dc),hsla:new RegExp("hsla"+Mc),hsv:new RegExp("hsv"+Dc),hsva:new RegExp("hsva"+Mc),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function MS(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(Xu[e])e=Xu[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r=er.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=er.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=er.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=er.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=er.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=er.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=er.hex8.exec(e),r?{r:$t(r[1]),g:$t(r[2]),b:$t(r[3]),a:Tf(r[4]),format:t?"name":"hex8"}:(r=er.hex6.exec(e),r?{r:$t(r[1]),g:$t(r[2]),b:$t(r[3]),format:t?"name":"hex"}:(r=er.hex4.exec(e),r?{r:$t(r[1]+r[1]),g:$t(r[2]+r[2]),b:$t(r[3]+r[3]),a:Tf(r[4]+r[4]),format:t?"name":"hex8"}:(r=er.hex3.exec(e),r?{r:$t(r[1]+r[1]),g:$t(r[2]+r[2]),b:$t(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function Sr(e){return!!er.CSS_UNIT.exec(String(e))}var Pf=function(){function e(t,r){t===void 0&&(t=""),r===void 0&&(r={});var n;if(t instanceof e)return t;typeof t=="number"&&(t=IS(t)),this.originalInput=t;var i=NS(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=(n=r.format)!==null&&n!==void 0?n:i.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),r,n,i,o=t.r/255,s=t.g/255,l=t.b/255;return o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),s<=.03928?n=s/12.92:n=Math.pow((s+.055)/1.055,2.4),l<=.03928?i=l/12.92:i=Math.pow((l+.055)/1.055,2.4),.2126*r+.7152*n+.0722*i},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=sv(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=zf(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=zf(this.r,this.g,this.b),r=Math.round(t.h*360),n=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?"hsv(".concat(r,", ").concat(n,"%, ").concat(i,"%)"):"hsva(".concat(r,", ").concat(n,"%, ").concat(i,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=Ef(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=Ef(this.r,this.g,this.b),r=Math.round(t.h*360),n=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?"hsl(".concat(r,", ").concat(n,"%, ").concat(i,"%)"):"hsla(".concat(r,", ").concat(n,"%, ").concat(i,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),Af(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),OS(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),r=Math.round(this.g),n=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(r,", ").concat(n,")"):"rgba(".concat(t,", ").concat(r,", ").concat(n,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(r){return"".concat(Math.round(Ze(r,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(r){return Math.round(Ze(r,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+Af(this.r,this.g,this.b,!1),r=0,n=Object.entries(Xu);r<n.length;r++){var i=n[r],o=i[0],s=i[1];if(t===s)return o}return!1},e.prototype.toString=function(t){var r=!!t;t=t??this.format;var n=!1,i=this.a<1&&this.a>=0,o=!r&&i&&(t.startsWith("hex")||t==="name");return o?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(n=this.toRgbString()),t==="prgb"&&(n=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(n=this.toHexString()),t==="hex3"&&(n=this.toHexString(!0)),t==="hex4"&&(n=this.toHex8String(!0)),t==="hex8"&&(n=this.toHex8String()),t==="name"&&(n=this.toName()),t==="hsl"&&(n=this.toHslString()),t==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l+=t/100,r.l=na(r.l),new e(r)},e.prototype.brighten=function(t){t===void 0&&(t=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new e(r)},e.prototype.darken=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l-=t/100,r.l=na(r.l),new e(r)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s-=t/100,r.s=na(r.s),new e(r)},e.prototype.saturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s+=t/100,r.s=na(r.s),new e(r)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var r=this.toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,new e(r)},e.prototype.mix=function(t,r){r===void 0&&(r=50);var n=this.toRgb(),i=new e(t).toRgb(),o=r/100,s={r:(i.r-n.r)*o+n.r,g:(i.g-n.g)*o+n.g,b:(i.b-n.b)*o+n.b,a:(i.a-n.a)*o+n.a};return new e(s)},e.prototype.analogous=function(t,r){t===void 0&&(t=6),r===void 0&&(r=30);var n=this.toHsl(),i=360/r,o=[this];for(n.h=(n.h-(i*t>>1)+720)%360;--t;)n.h=(n.h+i)%360,o.push(new e(n));return o},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var r=this.toHsv(),n=r.h,i=r.s,o=r.v,s=[],l=1/t;t--;)s.push(new e({h:n,s:i,v:o})),o=(o+l)%1;return s},e.prototype.splitcomplement=function(){var t=this.toHsl(),r=t.h;return[this,new e({h:(r+72)%360,s:t.s,l:t.l}),new e({h:(r+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var r=this.toRgb(),n=new e(t).toRgb(),i=r.a+n.a*(1-r.a);return new e({r:(r.r*r.a+n.r*n.a*(1-r.a))/i,g:(r.g*r.a+n.g*n.a*(1-r.a))/i,b:(r.b*r.a+n.b*n.a*(1-r.a))/i,a:i})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var r=this.toHsl(),n=r.h,i=[this],o=360/t,s=1;s<t;s++)i.push(new e({h:(n+s*o)%360,s:r.s,l:r.l}));return i},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}(),Of="EyeDropper"in window,Z=class extends R{constructor(){super(),this.formControlController=new Ur(this),this.isSafeValue=!1,this.localize=new ne(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();let i=this.value;r.focus(),e.preventDefault(),Mo(t,{onMove:o=>{this.alpha=De(o/n*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();let i=this.value;r.focus(),e.preventDefault(),Mo(t,{onMove:o=>{this.hue=De(o/n*360,0,360),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:n,height:i}=t.getBoundingClientRect();let o=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Mo(t,{onMove:(s,l)=>{this.saturation=De(s/n*100,0,100),this.brightness=De(100-l/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=De(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=De(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=De(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=De(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=De(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=De(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=De(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=De(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new Pf(e);if(!t.isValid)return null;const r=t.toHsl(),n={h:r.h,s:r.s*100,l:r.l*100,a:r.a},i=t.toRgb(),o=t.toHexString(),s=t.toHex8String(),l=t.toHsv(),a={h:l.h,s:l.s*100,v:l.v*100,a:l.a};return{hsl:{h:n.h,s:n.s,l:n.l,string:this.setLetterCase(`hsl(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%)`)},hsla:{h:n.h,s:n.s,l:n.l,a:n.a,string:this.setLetterCase(`hsla(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${n.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${i.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(s)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Of)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,n=100){const i=new Pf(`hsva(${e}, ${t}, ${r}, ${n/100})`);return i.isValid?i.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(i=>i.trim()!==""),n=E`
      <div
        part="base"
        class=${V({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?E`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${pt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${V({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${pt({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${D(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${pt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${D(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?E`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${pt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${pt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${D(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${pt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":E`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Of?E`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${r.length>0?E`
              <div part="swatches" class="color-picker__swatches">
                ${r.map(i=>{const o=this.parseColor(i);return o?E`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${D(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${i}
                      @click=${()=>this.selectSwatch(i)}
                      @keydown=${s=>!this.disabled&&s.key==="Enter"&&this.setColor(o.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${pt({backgroundColor:o.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${i}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?n:E`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${V({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${pt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${n}
      </sl-dropdown>
    `}};Z.styles=$S;Z.dependencies={"sl-button-group":wn,"sl-button":ie,"sl-dropdown":tt,"sl-icon":ue,"sl-input":K,"sl-visually-hidden":jl};c([L('[part~="base"]')],Z.prototype,"base",2);c([L('[part~="input"]')],Z.prototype,"input",2);c([L(".color-dropdown")],Z.prototype,"dropdown",2);c([L('[part~="preview"]')],Z.prototype,"previewButton",2);c([L('[part~="trigger"]')],Z.prototype,"trigger",2);c([j()],Z.prototype,"hasFocus",2);c([j()],Z.prototype,"isDraggingGridHandle",2);c([j()],Z.prototype,"isEmpty",2);c([j()],Z.prototype,"inputValue",2);c([j()],Z.prototype,"hue",2);c([j()],Z.prototype,"saturation",2);c([j()],Z.prototype,"brightness",2);c([j()],Z.prototype,"alpha",2);c([f()],Z.prototype,"value",2);c([Kn()],Z.prototype,"defaultValue",2);c([f()],Z.prototype,"label",2);c([f()],Z.prototype,"format",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"inline",2);c([f({reflect:!0})],Z.prototype,"size",2);c([f({attribute:"no-format-toggle",type:Boolean})],Z.prototype,"noFormatToggle",2);c([f()],Z.prototype,"name",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);c([f({type:Boolean})],Z.prototype,"hoist",2);c([f({type:Boolean})],Z.prototype,"opacity",2);c([f({type:Boolean})],Z.prototype,"uppercase",2);c([f()],Z.prototype,"swatches",2);c([f({reflect:!0})],Z.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"required",2);c([T("format",{waitUntilFirstUpdate:!0})],Z.prototype,"handleFormatChange",1);c([T("opacity",{waitUntilFirstUpdate:!0})],Z.prototype,"handleOpacityChange",1);c([T("value")],Z.prototype,"handleValueChange",1);var FS="sl-color-picker";Z.define("sl-color-picker");F({tagName:FS,elementClass:Z,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var BS=B`
  ${U}

  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Ve=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),r=this.from.includes("."),n=this.from.includes("[")&&this.from.includes("]");let i=this.from,o="";r?[i,o]=this.from.trim().split("."):n&&([i,o]=this.from.trim().replace(/\]$/,"").split("["));const s="getElementById"in t?t.getElementById(i):null;s?n?e=s.getAttribute(o)||"":r?e=s[o]||"":e=s.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),n=this.errorLabel||this.localize.term("error"),i=e==="success"?this.successIcon:this.errorIcon,o=be(this,"copy.in",{dir:"ltr"}),s=be(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?r:n,await this.copyIcon.animate(s.keyframes,s.options).finished,this.copyIcon.hidden=!0,this.status=e,i.hidden=!1,await i.animate(o.keyframes,o.options).finished,setTimeout(async()=>{await i.animate(s.keyframes,s.options).finished,i.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(o.keyframes,o.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return E`
      <sl-tooltip
        class=${V({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base
          base__popup:tooltip__base__popup
          base__arrow:tooltip__base__arrow
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Ve.styles=BS;Ve.dependencies={"sl-icon":ue,"sl-tooltip":Be};c([L('slot[name="copy-icon"]')],Ve.prototype,"copyIcon",2);c([L('slot[name="success-icon"]')],Ve.prototype,"successIcon",2);c([L('slot[name="error-icon"]')],Ve.prototype,"errorIcon",2);c([L("sl-tooltip")],Ve.prototype,"tooltip",2);c([j()],Ve.prototype,"isCopying",2);c([j()],Ve.prototype,"status",2);c([f()],Ve.prototype,"value",2);c([f()],Ve.prototype,"from",2);c([f({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2);c([f({attribute:"copy-label"})],Ve.prototype,"copyLabel",2);c([f({attribute:"success-label"})],Ve.prototype,"successLabel",2);c([f({attribute:"error-label"})],Ve.prototype,"errorLabel",2);c([f({attribute:"feedback-duration",type:Number})],Ve.prototype,"feedbackDuration",2);c([f({attribute:"tooltip-placement"})],Ve.prototype,"tooltipPlacement",2);c([f({type:Boolean})],Ve.prototype,"hoist",2);le("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});le("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var US="sl-copy-button";Ve.define("sl-copy-button");F({tagName:US,elementClass:Ve,react:M,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"});var VS=B`
  ${U}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Qt=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Ie(this.body);const{keyframes:t,options:r}=be(this,"details.show",{dir:this.localize.dir()});await Ee(this.body,al(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Ie(this.body);const{keyframes:t,options:r}=be(this,"details.hide",{dir:this.localize.dir()});await Ee(this.body,al(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,ut(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ut(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return E`
      <details
        part="base"
        class=${V({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Qt.styles=VS;Qt.dependencies={"sl-icon":ue};c([L(".details")],Qt.prototype,"details",2);c([L(".details__header")],Qt.prototype,"header",2);c([L(".details__body")],Qt.prototype,"body",2);c([L(".details__expand-icon-slot")],Qt.prototype,"expandIconSlot",2);c([f({type:Boolean,reflect:!0})],Qt.prototype,"open",2);c([f()],Qt.prototype,"summary",2);c([f({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);c([T("open",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleOpenChange",1);le("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});le("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var jS="sl-details";Qt.define("sl-details");F({tagName:jS,elementClass:Qt,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});function*av(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*av(e.shadowRoot.activeElement)))}var yo=[],lv=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=t=>{var r;if(t.key!=="Tab")return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const n=Ca(this.element),i=n[0];let o=this.startElementAlreadyFocused(i)?0:this.currentFocusIndex;if(o===-1){this.currentFocus=i,this.currentFocus.focus({preventScroll:!0});return}const s=this.tabDirection==="forward"?1:-1;o+s>=n.length?o=0:this.currentFocusIndex+s<0?o=n.length-1:o+=s,this.currentFocus=n[o],(r=this.currentFocus)==null||r.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){yo.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){yo=yo.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return yo[yo.length-1]===this.element}checkFocus(){if(this.isActive()){const e=Ca(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],n=this.tabDirection==="forward"?t:r;typeof(n==null?void 0:n.focus)=="function"&&(this.currentFocus=n,n.focus({preventScroll:!0}))}}}get currentFocusIndex(){return Ca(this.element).findIndex(e=>e===this.currentFocus)}startElementAlreadyFocused(e){for(const t of av())if(e===t)return!0;return!1}},HS=B`
  ${U}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,ur=class extends R{constructor(){super(...arguments),this.hasSlotController=new Mt(this,"footer"),this.localize=new ne(this),this.modal=new lv(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ro(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Do(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=be(this,"dialog.denyClose",{dir:this.localize.dir()});Ee(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ro(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ie(this.dialog),Ie(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=be(this,"dialog.show",{dir:this.localize.dir()}),r=be(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Ee(this.panel,t.keyframes,t.options),Ee(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Ie(this.dialog),Ie(this.overlay)]);const e=be(this,"dialog.hide",{dir:this.localize.dir()}),t=be(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ee(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Ee(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Do(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ut(this,"sl-after-hide")}render(){return E`
      <div
        part="base"
        class=${V({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${D(this.noHeader?this.label:void 0)}
          aria-labelledby=${D(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":E`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ur.styles=HS;ur.dependencies={"sl-icon-button":Re};c([L(".dialog")],ur.prototype,"dialog",2);c([L(".dialog__panel")],ur.prototype,"panel",2);c([L(".dialog__overlay")],ur.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],ur.prototype,"open",2);c([f({reflect:!0})],ur.prototype,"label",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],ur.prototype,"noHeader",2);c([T("open",{waitUntilFirstUpdate:!0})],ur.prototype,"handleOpenChange",1);le("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});le("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});le("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});le("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});le("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var WS="sl-dialog";ur.define("sl-dialog");F({tagName:WS,elementClass:ur,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"});var KS=B`
  ${U}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Os=class extends R{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Os.styles=KS;c([f({type:Boolean,reflect:!0})],Os.prototype,"vertical",2);c([T("vertical")],Os.prototype,"handleVerticalChange",1);var GS="sl-divider";Os.define("sl-divider");F({tagName:GS,elementClass:Os,react:M,events:{},displayName:"SlDivider"});var qS=B`
  ${U}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function Lf(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Ct=class extends R{constructor(){super(...arguments),this.hasSlotController=new Mt(this,"footer"),this.localize=new ne(this),this.modal=new lv(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ro(this)))}disconnectedCallback(){super.disconnectedCallback(),Do(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=be(this,"drawer.denyClose",{dir:this.localize.dir()});Ee(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ro(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ie(this.drawer),Ie(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=be(this,`drawer.show${Lf(this.placement)}`,{dir:this.localize.dir()}),r=be(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Ee(this.panel,t.keyframes,t.options),Ee(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Do(this)),await Promise.all([Ie(this.drawer),Ie(this.overlay)]);const e=be(this,`drawer.hide${Lf(this.placement)}`,{dir:this.localize.dir()}),t=be(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ee(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Ee(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ro(this)),this.open&&this.contained&&(this.modal.deactivate(),Do(this))}async show(){if(!this.open)return this.open=!0,ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ut(this,"sl-after-hide")}render(){return E`
      <div
        part="base"
        class=${V({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${D(this.noHeader?this.label:void 0)}
          aria-labelledby=${D(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":E`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Ct.styles=qS;Ct.dependencies={"sl-icon-button":Re};c([L(".drawer")],Ct.prototype,"drawer",2);c([L(".drawer__panel")],Ct.prototype,"panel",2);c([L(".drawer__overlay")],Ct.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],Ct.prototype,"open",2);c([f({reflect:!0})],Ct.prototype,"label",2);c([f({reflect:!0})],Ct.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],Ct.prototype,"contained",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],Ct.prototype,"noHeader",2);c([T("open",{waitUntilFirstUpdate:!0})],Ct.prototype,"handleOpenChange",1);c([T("contained",{waitUntilFirstUpdate:!0})],Ct.prototype,"handleNoModalChange",1);le("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});le("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});le("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});le("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});le("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});le("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});le("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});le("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});le("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});le("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});le("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var YS="sl-drawer";Ct.define("sl-drawer");F({tagName:YS,elementClass:Ct,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"});var XS=B`
  ${U}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,dr=class extends R{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=E`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=E``;return this.initials?t=E`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=E`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,E`
      <div
        part="base"
        class=${V({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};dr.styles=XS;dr.dependencies={"sl-icon":ue};c([j()],dr.prototype,"hasError",2);c([f()],dr.prototype,"image",2);c([f()],dr.prototype,"label",2);c([f()],dr.prototype,"initials",2);c([f()],dr.prototype,"loading",2);c([f({reflect:!0})],dr.prototype,"shape",2);c([T("image")],dr.prototype,"handleImageChange",1);var QS="sl-avatar";dr.define("sl-avatar");F({tagName:QS,elementClass:dr,react:M,events:{},displayName:"SlAvatar"});var ZS=B`
  ${U}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Qi=class extends R{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return E`
      <span
        part="base"
        class=${V({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Qi.styles=ZS;c([f({reflect:!0})],Qi.prototype,"variant",2);c([f({type:Boolean,reflect:!0})],Qi.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],Qi.prototype,"pulse",2);var JS="sl-badge";Qi.define("sl-badge");F({tagName:JS,elementClass:Qi,react:M,events:{},displayName:"SlBadge"});var e5=B`
  ${U}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Yn=class extends R{constructor(){super(...arguments),this.localize=new ne(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const n=t.querySelector('[slot="separator"]');n===null?t.append(this.getSeparator()):n.hasAttribute("data-default")&&n.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),E`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Yn.styles=e5;Yn.dependencies={"sl-icon":ue};c([L("slot")],Yn.prototype,"defaultSlot",2);c([L('slot[name="separator"]')],Yn.prototype,"separatorSlot",2);c([f()],Yn.prototype,"label",2);var t5="sl-breadcrumb";Yn.define("sl-breadcrumb");F({tagName:t5,elementClass:Yn,react:M,events:{},displayName:"SlBreadcrumb"});var r5="sl-button";ie.define("sl-button");F({tagName:r5,elementClass:ie,react:M,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"});var n5="sl-button-group";wn.define("sl-button-group");F({tagName:n5,elementClass:wn,react:M,events:{},displayName:"SlButtonGroup"});var i5=B`
  ${U}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
  }
`,Zi=class extends R{constructor(){super(...arguments),this.hasSlotController=new Mt(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return E`
      <div
        part="base"
        class=${V({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?E`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${D(this.target?this.target:void 0)}"
                rel=${D(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:E`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Zi.styles=i5;c([f()],Zi.prototype,"href",2);c([f()],Zi.prototype,"target",2);c([f()],Zi.prototype,"rel",2);var o5="sl-breadcrumb-item";Zi.define("sl-breadcrumb-item");F({tagName:o5,elementClass:Zi,react:M,events:{},displayName:"SlBreadcrumbItem"});var s5=B`
  ${U}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,vh=class extends R{constructor(){super(...arguments),this.hasSlotController=new Mt(this,"footer","header","image")}render(){return E`
      <div
        part="base"
        class=${V({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};vh.styles=s5;var a5="sl-card";vh.define("sl-card");F({tagName:a5,elementClass:vh,react:M,events:{},displayName:"SlCard"});var l5=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},c5=B`
  ${U}

  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,If=Symbol(),u5=e=>(t,r,n)=>{const i=n.value;n.value=function(...o){clearTimeout(this[If]),this[If]=window.setTimeout(()=>{i.apply(this,o)},e)}},cv=class{constructor(e){this.pointers=new Set,this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate()),this.handleScrollEnd()},this.handlePointerDown=t=>{if(t.pointerType==="touch")return;this.pointers.add(t.pointerId),this.mouseDragging&&!this.dragging&&t.button===0&&(t.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=t=>{const r=this.host.scrollContainer,n=!!t.movementX||!!t.movementY;!this.dragging&&n?(r.setPointerCapture(t.pointerId),this.handleDragStart()):r.hasPointerCapture(t.pointerId)&&this.handleDrag(t)},this.handlePointerUp=t=>{this.pointers.delete(t.pointerId),this.host.scrollContainer.releasePointerCapture(t.pointerId),this.pointers.size===0&&this.handleDragEnd()},this.handleTouchEnd=t=>{for(const r of t.changedTouches)this.pointers.delete(r.identifier)},this.handleTouchStart=t=>{for(const r of t.touches)this.pointers.add(r.identifier)},this.host=e,e.addController(this)}async hostConnected(){const e=this.host;await e.updateComplete;const t=e.scrollContainer;t.addEventListener("scroll",this.handleScroll,{passive:!0}),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerUp),t.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),t.addEventListener("touchend",this.handleTouchEnd)}hostDisconnected(){const t=this.host.scrollContainer;t.removeEventListener("scroll",this.handleScroll),t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointercancel",this.handlePointerUp),t.removeEventListener("touchstart",this.handleTouchStart),t.removeEventListener("touchend",this.handleTouchEnd)}handleScrollEnd(){this.pointers.size?this.handleScrollEnd():(this.scrolling=!1,this.host.scrollContainer.dispatchEvent(new CustomEvent("scrollend",{bubbles:!1,cancelable:!1})),this.host.requestUpdate())}handleDragStart(){const e=this.host;this.dragging=!0,e.scrollContainer.style.setProperty("scroll-snap-type","unset"),e.requestUpdate()}handleDrag(e){this.host.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY})}async handleDragEnd(){const e=this.host,t=e.scrollContainer;t.removeEventListener("pointermove",this.handlePointerMove),this.dragging=!1;const r=t.scrollLeft,n=t.scrollTop;t.style.removeProperty("scroll-snap-type");const i=t.scrollLeft,o=t.scrollTop;t.style.setProperty("scroll-snap-type","unset"),t.scrollTo({left:r,top:n,behavior:"auto"}),t.scrollTo({left:i,top:o,behavior:mh()?"auto":"smooth"}),this.scrolling&&await ut(t,"scrollend"),t.style.removeProperty("scroll-snap-type"),e.requestUpdate()}};c([u5(100)],cv.prototype,"handleScrollEnd",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*d5(e,t){if(e!==void 0){let r=0;for(const n of e)yield t(n,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*h5(e,t,r=1){const n=t===void 0?0:e;t!=null||(t=e);for(let i=n;r>0?i<t:t<i;i+=r)yield i}var ze=class extends R{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new l5(this,()=>this.next()),this.scrollController=new cv(this),this.slides=this.getElementsByTagName("sl-carousel-item"),this.intersectionObserverEntries=new Map,this.localize=new ne(this),this.handleSlotChange=e=>{e.some(r=>[...r.addedNodes,...r.removedNodes].some(n=>Kl.isCarouselItem(n)&&!n.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver(t=>{t.forEach(r=>{this.intersectionObserverEntries.set(r.target,r);const n=r.target;n.toggleAttribute("inert",!r.isIntersecting),n.classList.toggle("--in-view",r.isIntersecting),n.setAttribute("aria-hidden",r.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!1})}getPageCount(){return Math.ceil(this.getSlides().length/this.slidesPerPage)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerPage)}getSlides({excludeClones:e=!0}={}){return[...this.slides].filter(t=>!e||!t.hasAttribute("data-clone"))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",n=t.closest('[part~="pagination-item"]')!==null,i=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",o=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),o&&this.previous(),i&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),n&&this.updateComplete.then(()=>{var s;const l=(s=this.shadowRoot)==null?void 0:s.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleScrollEnd(){const e=this.getSlides(),r=[...this.intersectionObserverEntries.values()].find(n=>n.isIntersecting);if(this.loop&&(r!=null&&r.target.hasAttribute("data-clone"))){const n=Number(r.target.getAttribute("data-clone"));this.goToSlide(n,"auto");return}r&&(this.activeSlide=e.indexOf(r.target))}initializeSlides(){const e=this.getSlides(),t=this.intersectionObserver;if(this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((r,n)=>{t.unobserve(r),r.classList.remove("--in-view"),r.classList.remove("--is-active"),r.setAttribute("aria-label",this.localize.term("slideNum",n+1)),r.hasAttribute("data-clone")&&r.remove()}),this.loop){const r=this.slidesPerPage,n=e.slice(-r),i=e.slice(0,r);n.reverse().forEach((o,s)=>{const l=o.cloneNode(!0);l.setAttribute("data-clone",String(e.length-s-1)),this.prepend(l)}),i.forEach((o,s)=>{const l=o.cloneNode(!0);l.setAttribute("data-clone",String(s)),this.append(l)})}this.getSlides({excludeClones:!1}).forEach(r=>{t.observe(r)}),this.goToSlide(this.activeSlide,"auto")}handelSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}handleSlidesPerMoveChange(){const e=this.getSlides({excludeClones:!1}),t=this.slidesPerMove;e.forEach((r,n)=>{Math.abs(n-t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(e="smooth"){let t=this.activeSlide||this.activeSlide-this.slidesPerMove,r=!1;for(;!r&&t>0;)t-=1,r=Math.abs(t-this.slidesPerMove)%this.slidesPerMove===0;this.goToSlide(t,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:n,scrollContainer:i}=this,o=this.getSlides(),s=this.getSlides({excludeClones:!1}),l=(e+o.length)%o.length;this.activeSlide=l;const a=De(e+(n?r:0),0,s.length-1),u=s[a],p=i.getBoundingClientRect(),d=u.getBoundingClientRect();i.scrollTo({left:d.left-p.left+i.scrollLeft,top:d.top-p.top+i.scrollTop,behavior:mh()?"auto":t})}render(){const{scrollController:e,slidesPerPage:t}=this,r=this.getPageCount(),n=this.getCurrentPage(),i=this.loop||n>0,o=this.loop||n<r-1,s=this.localize.dir()==="ltr";return E`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${V({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical"})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?E`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${V({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!i})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?"false":"true"}"
                  @click=${i?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${s?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${V({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!o})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${s?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?E`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${d5(h5(r),l=>{const a=l===n;return E`
                    <button
                      part="pagination-item ${a?"pagination-item--active":""}"
                      class="${V({"carousel__pagination-item":!0,"carousel__pagination-item--active":a})}"
                      role="tab"
                      aria-selected="${a?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,r)}"
                      tabindex=${a?"0":"-1"}
                      @click=${()=>this.goToSlide(l*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};ze.styles=c5;ze.dependencies={"sl-icon":ue};c([f({type:Boolean,reflect:!0})],ze.prototype,"loop",2);c([f({type:Boolean,reflect:!0})],ze.prototype,"navigation",2);c([f({type:Boolean,reflect:!0})],ze.prototype,"pagination",2);c([f({type:Boolean,reflect:!0})],ze.prototype,"autoplay",2);c([f({type:Number,attribute:"autoplay-interval"})],ze.prototype,"autoplayInterval",2);c([f({type:Number,attribute:"slides-per-page"})],ze.prototype,"slidesPerPage",2);c([f({type:Number,attribute:"slides-per-move"})],ze.prototype,"slidesPerMove",2);c([f()],ze.prototype,"orientation",2);c([f({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ze.prototype,"mouseDragging",2);c([L("slot:not([name])")],ze.prototype,"defaultSlot",2);c([L(".carousel__slides")],ze.prototype,"scrollContainer",2);c([L(".carousel__pagination")],ze.prototype,"paginationContainer",2);c([j()],ze.prototype,"activeSlide",2);c([T("loop",{waitUntilFirstUpdate:!0}),T("slidesPerPage",{waitUntilFirstUpdate:!0})],ze.prototype,"initializeSlides",1);c([T("activeSlide")],ze.prototype,"handelSlideChange",1);c([T("slidesPerMove")],ze.prototype,"handleSlidesPerMoveChange",1);c([T("autoplay")],ze.prototype,"handleAutoplayChange",1);c([T("mouseDragging")],ze.prototype,"handleMouseDraggingChange",1);var p5="sl-carousel";ze.define("sl-carousel");F({tagName:p5,elementClass:ze,react:M,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"});var f5=B`
  ${U}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,ni=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),hr=class extends R{constructor(){super(...arguments),this.hasSlotController=new Mt(this,"icon","suffix"),this.localize=new ne(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Ie(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=be(this,"alert.show",{dir:this.localize.dir()});await Ee(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Ie(this.base);const{keyframes:e,options:t}=be(this,"alert.hide",{dir:this.localize.dir()});await Ee(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ut(this,"sl-after-hide")}async toast(){return new Promise(e=>{ni.parentElement===null&&document.body.append(ni),ni.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ni.removeChild(this),e(),ni.querySelector("sl-alert")===null&&ni.remove()},{once:!0})})}render(){return E`
      <div
        part="base"
        class=${V({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?E`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};hr.styles=f5;hr.dependencies={"sl-icon-button":Re};c([L('[part~="base"]')],hr.prototype,"base",2);c([f({type:Boolean,reflect:!0})],hr.prototype,"open",2);c([f({type:Boolean,reflect:!0})],hr.prototype,"closable",2);c([f({reflect:!0})],hr.prototype,"variant",2);c([f({type:Number})],hr.prototype,"duration",2);c([T("open",{waitUntilFirstUpdate:!0})],hr.prototype,"handleOpenChange",1);c([T("duration")],hr.prototype,"handleDurationChange",1);le("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});le("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var m5="sl-alert";hr.define("sl-alert");F({tagName:m5,elementClass:hr,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"});var g5=B`
  ${U}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Zt=class extends R{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return E`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?E`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Zt.styles=g5;Zt.dependencies={"sl-icon":ue};c([L(".animated-image__animated")],Zt.prototype,"animatedImage",2);c([j()],Zt.prototype,"frozenFrame",2);c([j()],Zt.prototype,"isLoaded",2);c([f()],Zt.prototype,"src",2);c([f()],Zt.prototype,"alt",2);c([f({type:Boolean,reflect:!0})],Zt.prototype,"play",2);c([T("play",{waitUntilFirstUpdate:!0})],Zt.prototype,"handlePlayChange",1);c([T("src")],Zt.prototype,"handleSrcChange",1);var v5="sl-animated-image";Zt.define("sl-animated-image");F({tagName:v5,elementClass:Zt,react:M,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});var y5=B`
  ${U}

  :host {
    display: contents;
  }
`;const b5=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],w5=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],x5=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],_5=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],k5=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],C5=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],S5=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],$5=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],E5=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],z5=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],A5=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],T5=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],P5=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],O5=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],L5=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],I5=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],N5=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],R5=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],D5=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],M5=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],F5=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],B5=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],U5=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],V5=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],j5=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],H5=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],W5=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],K5=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],G5=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],q5=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Y5=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],X5=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Q5=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Z5=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],J5=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],e$=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],t$=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],r$=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],n$=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],i$=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],o$=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],s$=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],a$=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],l$=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],c$=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],u$=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],d$=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],h$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],p$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],f$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],m$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],g$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],v$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],y$=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],b$=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],w$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],x$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],_$=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],k$=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],C$=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],S$=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],$$=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],E$=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],z$=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],A$=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],T$=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],P$=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],O$=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],L$=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],I$=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],N$=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],R$=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],D$=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],M$=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],F$=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],B$=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],U$=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],V$=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],j$=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],H$=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],W$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],K$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],G$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],q$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Y$=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],X$=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Q$=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Z$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],J$=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],e3=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],t3=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],r3=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],n3=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],i3=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],o3=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],s3=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],a3=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],l3=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],uv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},c3=Object.freeze(Object.defineProperty({__proto__:null,backInDown:O5,backInLeft:L5,backInRight:I5,backInUp:N5,backOutDown:R5,backOutLeft:D5,backOutRight:M5,backOutUp:F5,bounce:b5,bounceIn:B5,bounceInDown:U5,bounceInLeft:V5,bounceInRight:j5,bounceInUp:H5,bounceOut:W5,bounceOutDown:K5,bounceOutLeft:G5,bounceOutRight:q5,bounceOutUp:Y5,easings:uv,fadeIn:X5,fadeInBottomLeft:Q5,fadeInBottomRight:Z5,fadeInDown:J5,fadeInDownBig:e$,fadeInLeft:t$,fadeInLeftBig:r$,fadeInRight:n$,fadeInRightBig:i$,fadeInTopLeft:o$,fadeInTopRight:s$,fadeInUp:a$,fadeInUpBig:l$,fadeOut:c$,fadeOutBottomLeft:u$,fadeOutBottomRight:d$,fadeOutDown:h$,fadeOutDownBig:p$,fadeOutLeft:f$,fadeOutLeftBig:m$,fadeOutRight:g$,fadeOutRightBig:v$,fadeOutTopLeft:y$,fadeOutTopRight:b$,fadeOutUp:w$,fadeOutUpBig:x$,flash:w5,flip:_$,flipInX:k$,flipInY:C$,flipOutX:S$,flipOutY:$$,headShake:x5,heartBeat:_5,hinge:Y$,jackInTheBox:X$,jello:k5,lightSpeedInLeft:E$,lightSpeedInRight:z$,lightSpeedOutLeft:A$,lightSpeedOutRight:T$,pulse:C5,rollIn:Q$,rollOut:Z$,rotateIn:P$,rotateInDownLeft:O$,rotateInDownRight:L$,rotateInUpLeft:I$,rotateInUpRight:N$,rotateOut:R$,rotateOutDownLeft:D$,rotateOutDownRight:M$,rotateOutUpLeft:F$,rotateOutUpRight:B$,rubberBand:S5,shake:$5,shakeX:E5,shakeY:z5,slideInDown:U$,slideInLeft:V$,slideInRight:j$,slideInUp:H$,slideOutDown:W$,slideOutLeft:K$,slideOutRight:G$,slideOutUp:q$,swing:A5,tada:T5,wobble:P5,zoomIn:J$,zoomInDown:e3,zoomInLeft:t3,zoomInRight:r3,zoomInUp:n3,zoomOut:i3,zoomOutDown:o3,zoomOutLeft:s3,zoomOutRight:a3,zoomOutUp:l3},Symbol.toStringTag,{value:"Module"}));var je=class extends R{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=uv[this.easing])!=null?e:this.easing,n=(t=this.keyframes)!=null?t:c3[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!n?!1:(this.destroyAnimation(),this.animation=o.animate(n,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return E` <slot @slotchange=${this.handleSlotChange}></slot> `}};je.styles=y5;c([bk("slot")],je.prototype,"defaultSlot",2);c([f()],je.prototype,"name",2);c([f({type:Boolean,reflect:!0})],je.prototype,"play",2);c([f({type:Number})],je.prototype,"delay",2);c([f()],je.prototype,"direction",2);c([f({type:Number})],je.prototype,"duration",2);c([f()],je.prototype,"easing",2);c([f({attribute:"end-delay",type:Number})],je.prototype,"endDelay",2);c([f()],je.prototype,"fill",2);c([f({type:Number})],je.prototype,"iterations",2);c([f({attribute:"iteration-start",type:Number})],je.prototype,"iterationStart",2);c([f({attribute:!1})],je.prototype,"keyframes",2);c([f({attribute:"playback-rate",type:Number})],je.prototype,"playbackRate",2);c([T(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],je.prototype,"handleAnimationChange",1);c([T("play")],je.prototype,"handlePlayChange",1);c([T("playbackRate")],je.prototype,"handlePlaybackRateChange",1);var u3="sl-animation";je.define("sl-animation");F({tagName:u3,elementClass:je,react:M,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"});var d3={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};$k(d3);function Nf(e){const{backgroundColor:t,iconBackgroundColor:r,mainText:n,subText:i="",height:o="200px",iconName:s="shop"}=e;return H.jsxs("div",{className:"card",style:{backgroundColor:t,height:o},children:[H.jsxs("div",{className:"card-icons",children:[H.jsx("div",{className:"left-icon",style:{backgroundColor:r},children:H.jsx(cl,{name:s})}),H.jsx("div",{className:"right-icon",style:{backgroundColor:r},children:H.jsx(cl,{name:"three-dots"})})]}),H.jsxs("div",{className:"card-content",children:[H.jsx("h1",{children:n}),H.jsx("h4",{children:i})]})]})}function h3(){return H.jsx("header",{className:"navbar",children:H.jsxs("div",{className:"main-item navbar-item",children:[H.jsxs(M1,{to:"",children:[H.jsx(cl,{name:"cart4"}),"Dashboard"]}),H.jsx("div",{className:"menu-list-button",children:H.jsx(wS,{name:"list"})})]})})}function Rf(e){const{backgroundColor:t,iconBackgroundColor:r,mainText:n,subText:i="",textColor:o="#ffffff",iconName:s="shop"}=e;return H.jsxs("div",{className:"mini-card",style:{backgroundColor:t,color:o},children:[H.jsx("div",{className:"mini-card-icon",style:{backgroundColor:r},children:H.jsx(cl,{name:s})}),H.jsxs("div",{className:"mini-card-content",children:[H.jsx("p",{className:"value",children:n}),H.jsx("p",{className:"sub-value",children:i})]})]})}function p3(){return H.jsxs(H.Fragment,{children:[H.jsx(ri,{container:!0,spacing:2,children:H.jsx(ri,{item:!0,xs:12,children:H.jsx(h3,{})})}),H.jsx("div",{className:"content",children:H.jsxs(ri,{container:!0,spacing:1,children:[H.jsx(ri,{item:!0,xs:12,sm:12,md:6,lg:4,children:H.jsx(Nf,{mainText:"1000",subText:"Total Items",backgroundColor:"#602786",iconBackgroundColor:"#562f6f"})}),H.jsx(ri,{item:!0,xs:12,sm:12,md:6,lg:4,children:H.jsx(Nf,{mainText:"R1000",subText:"Price Of Current Shopping List",backgroundColor:"#3b5fe2",iconBackgroundColor:"#2f48a2",iconName:"wallet2"})}),H.jsxs(ri,{item:!0,xs:12,sm:12,md:6,lg:4,children:[H.jsx(Rf,{backgroundColor:"#3b5fe2",iconBackgroundColor:"#2f48a2",mainText:"R1000",subText:"Budget Remaining",iconName:"wallet2"}),H.jsx(Rf,{backgroundColor:"#ffffff",iconBackgroundColor:"#FFC107",mainText:"R1000",subText:"Average Item Price",textColor:"#000000",iconName:"cash-stack"})]})]})})]})}function f3(){const e="/shopping";return H.jsx(A1,{children:H.jsx(ag,{path:`${e}/dashboard/`,element:H.jsx(p3,{})})})}ju("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.8.0/cdn/");function m3(){return H.jsxs("div",{className:"App",children:[H.jsx(f3,{}),H.jsx(E1,{})]})}Fc.createRoot(document.getElementById("root")).render(H.jsx(Kf.StrictMode,{children:H.jsx(N1,{children:H.jsx(m3,{})})}));
