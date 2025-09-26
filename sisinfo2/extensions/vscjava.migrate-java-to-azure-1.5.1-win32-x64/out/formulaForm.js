/*! For license information please see formulaForm.js.LICENSE.txt */
(()=>{"use strict";var e={5338:(e,t,n)=>{var o=n(40961);t.H=o.createRoot,o.hydrateRoot},15287:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator,f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var _=y.prototype=new b;_.constructor=y,v(_,g.prototype),_.isPureReactComponent=!0;var x=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,o){var r,i={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,r)&&!C.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=o;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:n,type:e,key:s,ref:a,props:i,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,r,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case o:l=!0}}if(l)return s=s(l=e),e=""===i?"."+$(l,0):i,x(s)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),I(s,t,r,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(l=0,i=""===i?".":i+":",x(e))for(var c=0;c<e.length;c++){var d=i+$(a=e[c],c);l+=I(a,t,r,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(a=e.next()).done;)l+=I(a=a.value,t,r,d=i+$(a,c++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,n){if(null==e)return e;var o=[],r=0;return I(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},A={transition:null},N={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:A,ReactCurrentOwner:k};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=r,t.Profiler=s,t.PureComponent=y,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.act=L,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=v({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)w.call(t,c)&&!C.hasOwnProperty(c)&&(r[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)r.children=o;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:n,type:e.type,key:i,ref:s,props:r,_owner:a}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,n){return z.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,n){return z.current.useReducer(e,t,n)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return z.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return z.current.useTransition()},t.version="18.3.1"},21020:(e,t,n)=>{var o=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,i={},c=null,d=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,o)&&!l.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},22551:(e,t,n)=>{var o=n(96540),r=n(69982);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(a[e]=t,e=0;e<t.length;e++)s.add(t[e])}var d=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),u=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},f={};function v(e,t,n,o,r,i,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){m[e]=new v(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];m[t]=new v(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){m[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){m[e]=new v(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){m[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){m[e]=new v(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){m[e]=new v(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){m[e]=new v(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){m[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)}));var g=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,t,n,o){var r=m.hasOwnProperty(t)?m[t]:null;(null!==r?0!==r.type:o||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,o){if(null==t||function(e,t,n,o){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,o))return!0;if(o)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,r,o)&&(n=null),o||null===r?function(e){return!!u.call(f,e)||!u.call(p,e)&&(h.test(e)?f[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=null===n?3!==r.type&&"":n:(t=r.attributeName,o=r.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(r=r.type)||4===r&&!0===n?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(g,b);m[t]=new v(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(g,b);m[t]=new v(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(g,b);m[t]=new v(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){m[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)})),m.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){m[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)}));var _=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,x=Symbol.for("react.element"),w=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),P=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var A=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var N=Symbol.iterator;function L(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=N&&e[N]||e["@@iterator"])?e:null}var T,B=Object.assign;function D(e){if(void 0===T)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);T=t&&t[1]||""}return"\n"+T+e}var M=!1;function F(e,t){if(!e||M)return"";M=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var o=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){o=e}e.call(t.prototype)}else{try{throw Error()}catch(e){o=e}e()}}catch(t){if(t&&o&&"string"==typeof t.stack){for(var r=t.stack.split("\n"),i=o.stack.split("\n"),s=r.length-1,a=i.length-1;1<=s&&0<=a&&r[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==i[a]){if(1!==s||1!==a)do{if(s--,0>--a||r[s]!==i[a]){var l="\n"+r[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=s&&0<=a);break}}}finally{M=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function V(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return F(e.type,!1);case 11:return F(e.type.render,!1);case 1:return F(e.type,!0);default:return""}}function j(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case k:return"Fragment";case w:return"Portal";case S:return"Profiler";case C:return"StrictMode";case I:return"Suspense";case O:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case $:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case R:return null!==(t=e.displayName||null)?t:j(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return j(e(t))}catch(e){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return j(t);case 8:return t===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function q(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function W(e){e._valueTracker||(e._valueTracker=function(e){var t=q(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){o=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(e){o=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=q(e)?e.checked?"true":"false":e.value),(e=o)!==n&&(t.setValue(e),!0)}function Q(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Y(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,o=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=H(t.value),o=t.type;if(null!=n)"number"===o?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===o||"reset"===o)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!("submit"!==o&&"reset"!==o||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,r=0;r<e.length;r++){if(e[r].value===n)return e[r].selected=!0,void(o&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function oe(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function re(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ie(e,t){var n=H(t.value),o=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=o&&(e.defaultValue=""+o)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ae(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ae(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction((function(){return e(t,n)}))}:e}((function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function ue(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pe=["Webkit","ms","Moz","O"];function fe(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ve(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var o=0===n.indexOf("--"),r=fe(n,t[n],o);"float"===n&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}Object.keys(he).forEach((function(e){pe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]}))}));var me=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ge(e,t){if(t){if(me[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(i(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function _e(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var xe=null,we=null,ke=null;function Ce(e){if(e=yr(e)){if("function"!=typeof xe)throw Error(i(280));var t=e.stateNode;t&&(t=xr(t),xe(e.stateNode,e.type,t))}}function Se(e){we?ke?ke.push(e):ke=[e]:we=e}function Ee(){if(we){var e=we,t=ke;if(ke=we=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Pe(e,t){return e(t)}function $e(){}var Ie=!1;function Oe(e,t,n){if(Ie)return e(t,n);Ie=!0;try{return Pe(e,t,n)}finally{Ie=!1,(null!==we||null!==ke)&&($e(),Ee())}}function Re(e,t){var n=e.stateNode;if(null===n)return null;var o=xr(n);if(null===o)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(o=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!o;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(i(231,t,typeof n));return n}var ze=!1;if(d)try{var Ae={};Object.defineProperty(Ae,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Ae,Ae),window.removeEventListener("test",Ae,Ae)}catch(e){ze=!1}function Ne(e,t,n,o,r,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}var Le=!1,Te=null,Be=!1,De=null,Me={onError:function(e){Le=!0,Te=e}};function Fe(e,t,n,o,r,i,s,a,l){Le=!1,Te=null,Ne.apply(Me,arguments)}function Ve(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function je(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function Ue(e){if(Ve(e)!==e)throw Error(i(188))}function He(e){return e=function(e){var t=e.alternate;if(!t){if(null===(t=Ve(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(null===r)break;var s=r.alternate;if(null===s){if(null!==(o=r.return)){n=o;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ue(r),e;if(s===o)return Ue(r),t;s=s.sibling}throw Error(i(188))}if(n.return!==o.return)n=r,o=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,o=s;break}if(l===o){a=!0,o=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,o=r;break}if(l===o){a=!0,o=s,n=r;break}l=l.sibling}if(!a)throw Error(i(189))}}if(n.alternate!==o)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e),null!==e?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var We=r.unstable_scheduleCallback,Ke=r.unstable_cancelCallback,Qe=r.unstable_shouldYield,Ye=r.unstable_requestPaint,Ge=r.unstable_now,Xe=r.unstable_getCurrentPriorityLevel,Ze=r.unstable_ImmediatePriority,Je=r.unstable_UserBlockingPriority,et=r.unstable_NormalPriority,tt=r.unstable_LowPriority,nt=r.unstable_IdlePriority,ot=null,rt=null,it=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(st(e)/at|0)|0},st=Math.log,at=Math.LN2,lt=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ut(e,t){var n=e.pendingLanes;if(0===n)return 0;var o=0,r=e.suspendedLanes,i=e.pingedLanes,s=268435455&n;if(0!==s){var a=s&~r;0!==a?o=dt(a):0!=(i&=s)&&(o=dt(i))}else 0!=(s=n&~r)?o=dt(s):0!==i&&(o=dt(i));if(0===o)return 0;if(0!==t&&t!==o&&!(t&r)&&((r=o&-o)>=(i=t&-t)||16===r&&4194240&i))return t;if(4&o&&(o|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=o;0<t;)r=1<<(n=31-it(t)),o|=e[n],t&=~r;return o}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function pt(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ft(){var e=lt;return!(4194240&(lt<<=1))&&(lt=64),e}function vt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function gt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-it(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var bt=0;function yt(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var _t,xt,wt,kt,Ct,St=!1,Et=[],Pt=null,$t=null,It=null,Ot=new Map,Rt=new Map,zt=[],At="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Ot.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(t.pointerId)}}function Lt(e,t,n,o,r,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:i,targetContainers:[r]},null!==t&&null!==(t=yr(t))&&xt(t),e):(e.eventSystemFlags|=o,t=e.targetContainers,null!==r&&-1===t.indexOf(r)&&t.push(r),e)}function Tt(e){var t=br(e.target);if(null!==t){var n=Ve(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=je(n)))return e.blockedOn=t,void Ct(e.priority,(function(){wt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Bt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yr(n))&&xt(t),e.blockedOn=n,!1;var o=new(n=e.nativeEvent).constructor(n.type,n);ye=o,n.target.dispatchEvent(o),ye=null,t.shift()}return!0}function Dt(e,t,n){Bt(e)&&n.delete(t)}function Mt(){St=!1,null!==Pt&&Bt(Pt)&&(Pt=null),null!==$t&&Bt($t)&&($t=null),null!==It&&Bt(It)&&(It=null),Ot.forEach(Dt),Rt.forEach(Dt)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,St||(St=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Mt)))}function Vt(e){function t(t){return Ft(t,e)}if(0<Et.length){Ft(Et[0],e);for(var n=1;n<Et.length;n++){var o=Et[n];o.blockedOn===e&&(o.blockedOn=null)}}for(null!==Pt&&Ft(Pt,e),null!==$t&&Ft($t,e),null!==It&&Ft(It,e),Ot.forEach(t),Rt.forEach(t),n=0;n<zt.length;n++)(o=zt[n]).blockedOn===e&&(o.blockedOn=null);for(;0<zt.length&&null===(n=zt[0]).blockedOn;)Tt(n),null===n.blockedOn&&zt.shift()}var jt=_.ReactCurrentBatchConfig,Ut=!0;function Ht(e,t,n,o){var r=bt,i=jt.transition;jt.transition=null;try{bt=1,Wt(e,t,n,o)}finally{bt=r,jt.transition=i}}function qt(e,t,n,o){var r=bt,i=jt.transition;jt.transition=null;try{bt=4,Wt(e,t,n,o)}finally{bt=r,jt.transition=i}}function Wt(e,t,n,o){if(Ut){var r=Qt(e,t,n,o);if(null===r)Ho(e,t,o,Kt,n),Nt(e,o);else if(function(e,t,n,o,r){switch(t){case"focusin":return Pt=Lt(Pt,e,t,n,o,r),!0;case"dragenter":return $t=Lt($t,e,t,n,o,r),!0;case"mouseover":return It=Lt(It,e,t,n,o,r),!0;case"pointerover":var i=r.pointerId;return Ot.set(i,Lt(Ot.get(i)||null,e,t,n,o,r)),!0;case"gotpointercapture":return i=r.pointerId,Rt.set(i,Lt(Rt.get(i)||null,e,t,n,o,r)),!0}return!1}(r,e,t,n,o))o.stopPropagation();else if(Nt(e,o),4&t&&-1<At.indexOf(e)){for(;null!==r;){var i=yr(r);if(null!==i&&_t(i),null===(i=Qt(e,t,n,o))&&Ho(e,t,o,Kt,n),i===r)break;r=i}null!==r&&o.stopPropagation()}else Ho(e,t,o,null,n)}}var Kt=null;function Qt(e,t,n,o){if(Kt=null,null!==(e=br(e=_e(o))))if(null===(t=Ve(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=je(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kt=e,null}function Yt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ze:return 1;case Je:return 4;case et:case tt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Gt=null,Xt=null,Zt=null;function Jt(){if(Zt)return Zt;var e,t,n=Xt,o=n.length,r="value"in Gt?Gt.value:Gt.textContent,i=r.length;for(e=0;e<o&&n[e]===r[e];e++);var s=o-e;for(t=1;t<=s&&n[o-t]===r[i-t];t++);return Zt=r.slice(e,1<t?1-t:void 0)}function en(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function tn(){return!0}function nn(){return!1}function on(e){function t(t,n,o,r,i){for(var s in this._reactName=t,this._targetInst=o,this.type=n,this.nativeEvent=r,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(r):r[s]);return this.isDefaultPrevented=(null!=r.defaultPrevented?r.defaultPrevented:!1===r.returnValue)?tn:nn,this.isPropagationStopped=nn,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=tn)},persist:function(){},isPersistent:tn}),t}var rn,sn,an,ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(ln),dn=B({},ln,{view:0,detail:0}),un=on(dn),hn=B({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==an&&(an&&"mousemove"===e.type?(rn=e.screenX-an.screenX,sn=e.screenY-an.screenY):sn=rn=0,an=e),rn)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),pn=on(hn),fn=on(B({},hn,{dataTransfer:0})),vn=on(B({},dn,{relatedTarget:0})),mn=on(B({},ln,{animationName:0,elapsedTime:0,pseudoElement:0})),gn=B({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(gn),yn=on(B({},ln,{data:0})),_n={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=wn[e])&&!!t[e]}function Cn(){return kn}var Sn=B({},dn,{key:function(e){if(e.key){var t=_n[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=en(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?xn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?en(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?en(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),En=on(Sn),Pn=on(B({},hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),$n=on(B({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),In=on(B({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0})),On=B({},hn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rn=on(On),zn=[9,13,27,32],An=d&&"CompositionEvent"in window,Nn=null;d&&"documentMode"in document&&(Nn=document.documentMode);var Ln=d&&"TextEvent"in window&&!Nn,Tn=d&&(!An||Nn&&8<Nn&&11>=Nn),Bn=String.fromCharCode(32),Dn=!1;function Mn(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Vn=!1,jn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Un(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!jn[e.type]:"textarea"===t}function Hn(e,t,n,o){Se(o),0<(t=Wo(t,"onChange")).length&&(n=new cn("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var qn=null,Wn=null;function Kn(e){Do(e,0)}function Qn(e){if(K(_r(e)))return e}function Yn(e,t){if("change"===e)return t}var Gn=!1;if(d){var Xn;if(d){var Zn="oninput"in document;if(!Zn){var Jn=document.createElement("div");Jn.setAttribute("oninput","return;"),Zn="function"==typeof Jn.oninput}Xn=Zn}else Xn=!1;Gn=Xn&&(!document.documentMode||9<document.documentMode)}function eo(){qn&&(qn.detachEvent("onpropertychange",to),Wn=qn=null)}function to(e){if("value"===e.propertyName&&Qn(Wn)){var t=[];Hn(t,Wn,e,_e(e)),Oe(Kn,t)}}function no(e,t,n){"focusin"===e?(eo(),Wn=n,(qn=t).attachEvent("onpropertychange",to)):"focusout"===e&&eo()}function oo(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(Wn)}function ro(e,t){if("click"===e)return Qn(t)}function io(e,t){if("input"===e||"change"===e)return Qn(t)}var so="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function ao(e,t){if(so(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!u.call(t,r)||!so(e[r],t[r]))return!1}return!0}function lo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function co(e,t){var n,o=lo(e);for(e=0;o;){if(3===o.nodeType){if(n=e+o.textContent.length,e<=t&&n>=t)return{node:o,offset:t-e};e=n}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=lo(o)}}function uo(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?uo(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ho(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fo(e){var t=ho(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&uo(n.ownerDocument.documentElement,n)){if(null!==o&&po(n))if(t=o.start,void 0===(e=o.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(o.start,r);o=void 0===o.end?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=co(n,i);var s=co(n,o);r&&s&&(1!==e.rangeCount||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vo=d&&"documentMode"in document&&11>=document.documentMode,mo=null,go=null,bo=null,yo=!1;function _o(e,t,n){var o=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yo||null==mo||mo!==Q(o)||(o="selectionStart"in(o=mo)&&po(o)?{start:o.selectionStart,end:o.selectionEnd}:{anchorNode:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset},bo&&ao(bo,o)||(bo=o,0<(o=Wo(go,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=mo)))}function xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wo={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},ko={},Co={};function So(e){if(ko[e])return ko[e];if(!wo[e])return e;var t,n=wo[e];for(t in n)if(n.hasOwnProperty(t)&&t in Co)return ko[e]=n[t];return e}d&&(Co=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);var Eo=So("animationend"),Po=So("animationiteration"),$o=So("animationstart"),Io=So("transitionend"),Oo=new Map,Ro="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zo(e,t){Oo.set(e,t),l(t,[e])}for(var Ao=0;Ao<Ro.length;Ao++){var No=Ro[Ao];zo(No.toLowerCase(),"on"+(No[0].toUpperCase()+No.slice(1)))}zo(Eo,"onAnimationEnd"),zo(Po,"onAnimationIteration"),zo($o,"onAnimationStart"),zo("dblclick","onDoubleClick"),zo("focusin","onFocus"),zo("focusout","onBlur"),zo(Io,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),To=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function Bo(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,o,r,s,a,l,c){if(Fe.apply(this,arguments),Le){if(!Le)throw Error(i(198));var d=Te;Le=!1,Te=null,Be||(Be=!0,De=d)}}(o,t,void 0,e),e.currentTarget=null}function Do(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var s=o.length-1;0<=s;s--){var a=o[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&r.isPropagationStopped())break e;Bo(r,a,c),i=l}else for(s=0;s<o.length;s++){if(l=(a=o[s]).instance,c=a.currentTarget,a=a.listener,l!==i&&r.isPropagationStopped())break e;Bo(r,a,c),i=l}}}if(Be)throw e=De,Be=!1,De=null,e}function Mo(e,t){var n=t[vr];void 0===n&&(n=t[vr]=new Set);var o=e+"__bubble";n.has(o)||(Uo(t,e,2,!1),n.add(o))}function Fo(e,t,n){var o=0;t&&(o|=4),Uo(n,e,o,t)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function jo(e){if(!e[Vo]){e[Vo]=!0,s.forEach((function(t){"selectionchange"!==t&&(To.has(t)||Fo(t,!1,e),Fo(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Vo]||(t[Vo]=!0,Fo("selectionchange",!1,t))}}function Uo(e,t,n,o){switch(Yt(t)){case 1:var r=Ht;break;case 4:r=qt;break;default:r=Wt}n=r.bind(null,t,n,e),r=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(r=!0),o?void 0!==r?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):void 0!==r?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Ho(e,t,n,o,r){var i=o;if(!(1&t||2&t||null===o))e:for(;;){if(null===o)return;var s=o.tag;if(3===s||4===s){var a=o.stateNode.containerInfo;if(a===r||8===a.nodeType&&a.parentNode===r)break;if(4===s)for(s=o.return;null!==s;){var l=s.tag;if((3===l||4===l)&&((l=s.stateNode.containerInfo)===r||8===l.nodeType&&l.parentNode===r))return;s=s.return}for(;null!==a;){if(null===(s=br(a)))return;if(5===(l=s.tag)||6===l){o=i=s;continue e}a=a.parentNode}}o=o.return}Oe((function(){var o=i,r=_e(n),s=[];e:{var a=Oo.get(e);if(void 0!==a){var l=cn,c=e;switch(e){case"keypress":if(0===en(n))break e;case"keydown":case"keyup":l=En;break;case"focusin":c="focus",l=vn;break;case"focusout":c="blur",l=vn;break;case"beforeblur":case"afterblur":l=vn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=fn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=$n;break;case Eo:case Po:case $o:l=mn;break;case Io:l=In;break;case"scroll":l=un;break;case"wheel":l=Rn;break;case"copy":case"cut":case"paste":l=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Pn}var d=!!(4&t),u=!d&&"scroll"===e,h=d?null!==a?a+"Capture":null:a;d=[];for(var p,f=o;null!==f;){var v=(p=f).stateNode;if(5===p.tag&&null!==v&&(p=v,null!==h&&null!=(v=Re(f,h))&&d.push(qo(f,v,p))),u)break;f=f.return}0<d.length&&(a=new l(a,c,null,n,r),s.push({event:a,listeners:d}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===ye||!(c=n.relatedTarget||n.fromElement)||!br(c)&&!c[fr])&&(l||a)&&(a=r.window===r?r:(a=r.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=o,null!==(c=(c=n.relatedTarget||n.toElement)?br(c):null)&&(c!==(u=Ve(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=o),l!==c)){if(d=pn,v="onMouseLeave",h="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(d=Pn,v="onPointerLeave",h="onPointerEnter",f="pointer"),u=null==l?a:_r(l),p=null==c?a:_r(c),(a=new d(v,f+"leave",l,n,r)).target=u,a.relatedTarget=p,v=null,br(r)===o&&((d=new d(h,f+"enter",c,n,r)).target=p,d.relatedTarget=u,v=d),u=v,l&&c)e:{for(h=c,f=0,p=d=l;p;p=Ko(p))f++;for(p=0,v=h;v;v=Ko(v))p++;for(;0<f-p;)d=Ko(d),f--;for(;0<p-f;)h=Ko(h),p--;for(;f--;){if(d===h||null!==h&&d===h.alternate)break e;d=Ko(d),h=Ko(h)}d=null}else d=null;null!==l&&Qo(s,a,l,d,!1),null!==c&&null!==u&&Qo(s,u,c,d,!0)}if("select"===(l=(a=o?_r(o):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var m=Yn;else if(Un(a))if(Gn)m=io;else{m=oo;var g=no}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(m=ro);switch(m&&(m=m(e,o))?Hn(s,m,n,r):(g&&g(e,a,o),"focusout"===e&&(g=a._wrapperState)&&g.controlled&&"number"===a.type&&ee(a,"number",a.value)),g=o?_r(o):window,e){case"focusin":(Un(g)||"true"===g.contentEditable)&&(mo=g,go=o,bo=null);break;case"focusout":bo=go=mo=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,_o(s,n,r);break;case"selectionchange":if(vo)break;case"keydown":case"keyup":_o(s,n,r)}var b;if(An)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Vn?Mn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Tn&&"ko"!==n.locale&&(Vn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Vn&&(b=Jt()):(Xt="value"in(Gt=r)?Gt.value:Gt.textContent,Vn=!0)),0<(g=Wo(o,y)).length&&(y=new yn(y,e,null,n,r),s.push({event:y,listeners:g}),(b||null!==(b=Fn(n)))&&(y.data=b))),(b=Ln?function(e,t){switch(e){case"compositionend":return Fn(t);case"keypress":return 32!==t.which?null:(Dn=!0,Bn);case"textInput":return(e=t.data)===Bn&&Dn?null:e;default:return null}}(e,n):function(e,t){if(Vn)return"compositionend"===e||!An&&Mn(e,t)?(e=Jt(),Zt=Xt=Gt=null,Vn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tn&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(o=Wo(o,"onBeforeInput")).length&&(r=new yn("onBeforeInput","beforeinput",null,n,r),s.push({event:r,listeners:o}),r.data=b)}Do(s,t)}))}function qo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wo(e,t){for(var n=t+"Capture",o=[];null!==e;){var r=e,i=r.stateNode;5===r.tag&&null!==i&&(r=i,null!=(i=Re(e,n))&&o.unshift(qo(e,i,r)),null!=(i=Re(e,t))&&o.push(qo(e,i,r))),e=e.return}return o}function Ko(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qo(e,t,n,o,r){for(var i=t._reactName,s=[];null!==n&&n!==o;){var a=n,l=a.alternate,c=a.stateNode;if(null!==l&&l===o)break;5===a.tag&&null!==c&&(a=c,r?null!=(l=Re(n,i))&&s.unshift(qo(n,l,a)):r||null!=(l=Re(n,i))&&s.push(qo(n,l,a))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}var Yo=/\r\n?/g,Go=/\u0000|\uFFFD/g;function Xo(e){return("string"==typeof e?e:""+e).replace(Yo,"\n").replace(Go,"")}function Zo(e,t,n){if(t=Xo(t),Xo(e)!==t&&n)throw Error(i(425))}function Jo(){}var er=null,tr=null;function nr(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var or="function"==typeof setTimeout?setTimeout:void 0,rr="function"==typeof clearTimeout?clearTimeout:void 0,ir="function"==typeof Promise?Promise:void 0,sr="function"==typeof queueMicrotask?queueMicrotask:void 0!==ir?function(e){return ir.resolve(null).then(e).catch(ar)}:or;function ar(e){setTimeout((function(){throw e}))}function lr(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===o)return e.removeChild(r),void Vt(t);o--}else"$"!==n&&"$?"!==n&&"$!"!==n||o++;n=r}while(n);Vt(t)}function cr(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function dr(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),hr="__reactFiber$"+ur,pr="__reactProps$"+ur,fr="__reactContainer$"+ur,vr="__reactEvents$"+ur,mr="__reactListeners$"+ur,gr="__reactHandles$"+ur;function br(e){var t=e[hr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fr]||n[hr]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=dr(e);null!==e;){if(n=e[hr])return n;e=dr(e)}return t}n=(e=n).parentNode}return null}function yr(e){return!(e=e[hr]||e[fr])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function _r(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function xr(e){return e[pr]||null}var wr=[],kr=-1;function Cr(e){return{current:e}}function Sr(e){0>kr||(e.current=wr[kr],wr[kr]=null,kr--)}function Er(e,t){kr++,wr[kr]=e.current,e.current=t}var Pr={},$r=Cr(Pr),Ir=Cr(!1),Or=Pr;function Rr(e,t){var n=e.type.contextTypes;if(!n)return Pr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r,i={};for(r in n)i[r]=t[r];return o&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function zr(e){return null!=e.childContextTypes}function Ar(){Sr(Ir),Sr($r)}function Nr(e,t,n){if($r.current!==Pr)throw Error(i(168));Er($r,t),Er(Ir,n)}function Lr(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,"function"!=typeof o.getChildContext)return n;for(var r in o=o.getChildContext())if(!(r in t))throw Error(i(108,U(e)||"Unknown",r));return B({},n,o)}function Tr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pr,Or=$r.current,Er($r,e),Er(Ir,Ir.current),!0}function Br(e,t,n){var o=e.stateNode;if(!o)throw Error(i(169));n?(e=Lr(e,t,Or),o.__reactInternalMemoizedMergedChildContext=e,Sr(Ir),Sr($r),Er($r,e)):Sr(Ir),Er(Ir,n)}var Dr=null,Mr=!1,Fr=!1;function Vr(e){null===Dr?Dr=[e]:Dr.push(e)}function jr(){if(!Fr&&null!==Dr){Fr=!0;var e=0,t=bt;try{var n=Dr;for(bt=1;e<n.length;e++){var o=n[e];do{o=o(!0)}while(null!==o)}Dr=null,Mr=!1}catch(t){throw null!==Dr&&(Dr=Dr.slice(e+1)),We(Ze,jr),t}finally{bt=t,Fr=!1}}return null}var Ur=[],Hr=0,qr=null,Wr=0,Kr=[],Qr=0,Yr=null,Gr=1,Xr="";function Zr(e,t){Ur[Hr++]=Wr,Ur[Hr++]=qr,qr=e,Wr=t}function Jr(e,t,n){Kr[Qr++]=Gr,Kr[Qr++]=Xr,Kr[Qr++]=Yr,Yr=e;var o=Gr;e=Xr;var r=32-it(o)-1;o&=~(1<<r),n+=1;var i=32-it(t)+r;if(30<i){var s=r-r%5;i=(o&(1<<s)-1).toString(32),o>>=s,r-=s,Gr=1<<32-it(t)+r|n<<r|o,Xr=i+e}else Gr=1<<i|n<<r|o,Xr=e}function ei(e){null!==e.return&&(Zr(e,1),Jr(e,1,0))}function ti(e){for(;e===qr;)qr=Ur[--Hr],Ur[Hr]=null,Wr=Ur[--Hr],Ur[Hr]=null;for(;e===Yr;)Yr=Kr[--Qr],Kr[Qr]=null,Xr=Kr[--Qr],Kr[Qr]=null,Gr=Kr[--Qr],Kr[Qr]=null}var ni=null,oi=null,ri=!1,ii=null;function si(e,t){var n=Oc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ai(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,oi=cr(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Yr?{id:Gr,overflow:Xr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Oc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ni=e,oi=null,!0);default:return!1}}function li(e){return!(!(1&e.mode)||128&e.flags)}function ci(e){if(ri){var t=oi;if(t){var n=t;if(!ai(e,t)){if(li(e))throw Error(i(418));t=cr(n.nextSibling);var o=ni;t&&ai(e,t)?si(o,n):(e.flags=-4097&e.flags|2,ri=!1,ni=e)}}else{if(li(e))throw Error(i(418));e.flags=-4097&e.flags|2,ri=!1,ni=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function ui(e){if(e!==ni)return!1;if(!ri)return di(e),ri=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!nr(e.type,e.memoizedProps)),t&&(t=oi)){if(li(e))throw hi(),Error(i(418));for(;t;)si(e,t),t=cr(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oi=cr(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oi=null}}else oi=ni?cr(e.stateNode.nextSibling):null;return!0}function hi(){for(var e=oi;e;)e=cr(e.nextSibling)}function pi(){oi=ni=null,ri=!1}function fi(e){null===ii?ii=[e]:ii.push(e)}var vi=_.ReactCurrentBatchConfig;function mi(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var o=n.stateNode}if(!o)throw Error(i(147,e));var r=o,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:(t=function(e){var t=r.refs;null===e?delete t[s]:t[s]=e},t._stringRef=s,t)}if("string"!=typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function gi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bi(e){return(0,e._init)(e._payload)}function yi(e){function t(t,n){if(e){var o=t.deletions;null===o?(t.deletions=[n],t.flags|=16):o.push(n)}}function n(n,o){if(!e)return null;for(;null!==o;)t(n,o),o=o.sibling;return null}function o(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function r(e,t){return(e=zc(e,t)).index=0,e.sibling=null,e}function s(t,n,o){return t.index=o,e?null!==(o=t.alternate)?(o=o.index)<n?(t.flags|=2,n):o:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,o){return null===t||6!==t.tag?((t=Tc(n,e.mode,o)).return=e,t):((t=r(t,n)).return=e,t)}function c(e,t,n,o){var i=n.type;return i===k?u(e,t,n.props.children,o,n.key):null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===z&&bi(i)===t.type)?((o=r(t,n.props)).ref=mi(e,t,n),o.return=e,o):((o=Ac(n.type,n.key,n.props,null,e.mode,o)).ref=mi(e,t,n),o.return=e,o)}function d(e,t,n,o){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Bc(n,e.mode,o)).return=e,t):((t=r(t,n.children||[])).return=e,t)}function u(e,t,n,o,i){return null===t||7!==t.tag?((t=Nc(n,e.mode,o,i)).return=e,t):((t=r(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Tc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case x:return(n=Ac(t.type,t.key,t.props,null,e.mode,n)).ref=mi(e,null,t),n.return=e,n;case w:return(t=Bc(t,e.mode,n)).return=e,t;case z:return h(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Nc(t,e.mode,n,null)).return=e,t;gi(e,t)}return null}function p(e,t,n,o){var r=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==r?null:l(e,t,""+n,o);if("object"==typeof n&&null!==n){switch(n.$$typeof){case x:return n.key===r?c(e,t,n,o):null;case w:return n.key===r?d(e,t,n,o):null;case z:return p(e,t,(r=n._init)(n._payload),o)}if(te(n)||L(n))return null!==r?null:u(e,t,n,o,null);gi(e,n)}return null}function f(e,t,n,o,r){if("string"==typeof o&&""!==o||"number"==typeof o)return l(t,e=e.get(n)||null,""+o,r);if("object"==typeof o&&null!==o){switch(o.$$typeof){case x:return c(t,e=e.get(null===o.key?n:o.key)||null,o,r);case w:return d(t,e=e.get(null===o.key?n:o.key)||null,o,r);case z:return f(e,t,n,(0,o._init)(o._payload),r)}if(te(o)||L(o))return u(t,e=e.get(n)||null,o,r,null);gi(t,o)}return null}function v(r,i,a,l){for(var c=null,d=null,u=i,v=i=0,m=null;null!==u&&v<a.length;v++){u.index>v?(m=u,u=null):m=u.sibling;var g=p(r,u,a[v],l);if(null===g){null===u&&(u=m);break}e&&u&&null===g.alternate&&t(r,u),i=s(g,i,v),null===d?c=g:d.sibling=g,d=g,u=m}if(v===a.length)return n(r,u),ri&&Zr(r,v),c;if(null===u){for(;v<a.length;v++)null!==(u=h(r,a[v],l))&&(i=s(u,i,v),null===d?c=u:d.sibling=u,d=u);return ri&&Zr(r,v),c}for(u=o(r,u);v<a.length;v++)null!==(m=f(u,r,v,a[v],l))&&(e&&null!==m.alternate&&u.delete(null===m.key?v:m.key),i=s(m,i,v),null===d?c=m:d.sibling=m,d=m);return e&&u.forEach((function(e){return t(r,e)})),ri&&Zr(r,v),c}function m(r,a,l,c){var d=L(l);if("function"!=typeof d)throw Error(i(150));if(null==(l=d.call(l)))throw Error(i(151));for(var u=d=null,v=a,m=a=0,g=null,b=l.next();null!==v&&!b.done;m++,b=l.next()){v.index>m?(g=v,v=null):g=v.sibling;var y=p(r,v,b.value,c);if(null===y){null===v&&(v=g);break}e&&v&&null===y.alternate&&t(r,v),a=s(y,a,m),null===u?d=y:u.sibling=y,u=y,v=g}if(b.done)return n(r,v),ri&&Zr(r,m),d;if(null===v){for(;!b.done;m++,b=l.next())null!==(b=h(r,b.value,c))&&(a=s(b,a,m),null===u?d=b:u.sibling=b,u=b);return ri&&Zr(r,m),d}for(v=o(r,v);!b.done;m++,b=l.next())null!==(b=f(v,r,m,b.value,c))&&(e&&null!==b.alternate&&v.delete(null===b.key?m:b.key),a=s(b,a,m),null===u?d=b:u.sibling=b,u=b);return e&&v.forEach((function(e){return t(r,e)})),ri&&Zr(r,m),d}return function e(o,i,s,l){if("object"==typeof s&&null!==s&&s.type===k&&null===s.key&&(s=s.props.children),"object"==typeof s&&null!==s){switch(s.$$typeof){case x:e:{for(var c=s.key,d=i;null!==d;){if(d.key===c){if((c=s.type)===k){if(7===d.tag){n(o,d.sibling),(i=r(d,s.props.children)).return=o,o=i;break e}}else if(d.elementType===c||"object"==typeof c&&null!==c&&c.$$typeof===z&&bi(c)===d.type){n(o,d.sibling),(i=r(d,s.props)).ref=mi(o,d,s),i.return=o,o=i;break e}n(o,d);break}t(o,d),d=d.sibling}s.type===k?((i=Nc(s.props.children,o.mode,l,s.key)).return=o,o=i):((l=Ac(s.type,s.key,s.props,null,o.mode,l)).ref=mi(o,i,s),l.return=o,o=l)}return a(o);case w:e:{for(d=s.key;null!==i;){if(i.key===d){if(4===i.tag&&i.stateNode.containerInfo===s.containerInfo&&i.stateNode.implementation===s.implementation){n(o,i.sibling),(i=r(i,s.children||[])).return=o,o=i;break e}n(o,i);break}t(o,i),i=i.sibling}(i=Bc(s,o.mode,l)).return=o,o=i}return a(o);case z:return e(o,i,(d=s._init)(s._payload),l)}if(te(s))return v(o,i,s,l);if(L(s))return m(o,i,s,l);gi(o,s)}return"string"==typeof s&&""!==s||"number"==typeof s?(s=""+s,null!==i&&6===i.tag?(n(o,i.sibling),(i=r(i,s)).return=o,o=i):(n(o,i),(i=Tc(s,o.mode,l)).return=o,o=i),a(o)):n(o,i)}}var _i=yi(!0),xi=yi(!1),wi=Cr(null),ki=null,Ci=null,Si=null;function Ei(){Si=Ci=ki=null}function Pi(e){var t=wi.current;Sr(wi),e._currentValue=t}function $i(e,t,n){for(;null!==e;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==o&&(o.childLanes|=t)):null!==o&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Ii(e,t){ki=e,Si=Ci=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(!!(e.lanes&t)&&(ba=!0),e.firstContext=null)}function Oi(e){var t=e._currentValue;if(Si!==e)if(e={context:e,memoizedValue:t,next:null},null===Ci){if(null===ki)throw Error(i(308));Ci=e,ki.dependencies={lanes:0,firstContext:e}}else Ci=Ci.next=e;return t}var Ri=null;function zi(e){null===Ri?Ri=[e]:Ri.push(e)}function Ai(e,t,n,o){var r=t.interleaved;return null===r?(n.next=n,zi(t)):(n.next=r.next,r.next=n),t.interleaved=n,Ni(e,o)}function Ni(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Li=!1;function Ti(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Di(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mi(e,t,n){var o=e.updateQueue;if(null===o)return null;if(o=o.shared,2&Pl){var r=o.pending;return null===r?t.next=t:(t.next=r.next,r.next=t),o.pending=t,Ni(e,n)}return null===(r=o.interleaved)?(t.next=t,zi(o)):(t.next=r.next,r.next=t),o.interleaved=t,Ni(e,n)}function Fi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var o=t.lanes;n|=o&=e.pendingLanes,t.lanes=n,gt(e,n)}}function Vi(e,t){var n=e.updateQueue,o=e.alternate;if(null!==o&&n===(o=o.updateQueue)){var r=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?r=i=s:i=i.next=s,n=n.next}while(null!==n);null===i?r=i=t:i=i.next=t}else r=i=t;return n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:o.shared,effects:o.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ji(e,t,n,o){var r=e.updateQueue;Li=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(null!==a){r.shared.pending=null;var l=a,c=l.next;l.next=null,null===s?i=c:s.next=c,s=l;var d=e.alternate;null!==d&&(a=(d=d.updateQueue).lastBaseUpdate)!==s&&(null===a?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l)}if(null!==i){var u=r.baseState;for(s=0,d=c=l=null,a=i;;){var h=a.lane,p=a.eventTime;if((o&h)===h){null!==d&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var f=e,v=a;switch(h=t,p=n,v.tag){case 1:if("function"==typeof(f=v.payload)){u=f.call(p,u,h);break e}u=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null==(h="function"==typeof(f=v.payload)?f.call(p,u,h):f))break e;u=B({},u,h);break e;case 2:Li=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(h=r.effects)?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===d?(c=d=p,l=u):d=d.next=p,s|=h;if(null===(a=a.next)){if(null===(a=r.shared.pending))break;a=(h=a).next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}if(null===d&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,null!==(t=r.shared.interleaved)){r=t;do{s|=r.lane,r=r.next}while(r!==t)}else null===i&&(r.shared.lanes=0);Ll|=s,e.lanes=s,e.memoizedState=u}}function Ui(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(null!==r){if(o.callback=null,o=n,"function"!=typeof r)throw Error(i(191,r));r.call(o)}}}var Hi={},qi=Cr(Hi),Wi=Cr(Hi),Ki=Cr(Hi);function Qi(e){if(e===Hi)throw Error(i(174));return e}function Yi(e,t){switch(Er(Ki,t),Er(Wi,e),Er(qi,Hi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Sr(qi),Er(qi,t)}function Gi(){Sr(qi),Sr(Wi),Sr(Ki)}function Xi(e){Qi(Ki.current);var t=Qi(qi.current),n=le(t,e.type);t!==n&&(Er(Wi,e),Er(qi,n))}function Zi(e){Wi.current===e&&(Sr(qi),Sr(Wi))}var Ji=Cr(0);function es(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ts=[];function ns(){for(var e=0;e<ts.length;e++)ts[e]._workInProgressVersionPrimary=null;ts.length=0}var os=_.ReactCurrentDispatcher,rs=_.ReactCurrentBatchConfig,is=0,ss=null,as=null,ls=null,cs=!1,ds=!1,us=0,hs=0;function ps(){throw Error(i(321))}function fs(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!so(e[n],t[n]))return!1;return!0}function vs(e,t,n,o,r,s){if(is=s,ss=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,os.current=null===e||null===e.memoizedState?Zs:Js,e=n(o,r),ds){s=0;do{if(ds=!1,us=0,25<=s)throw Error(i(301));s+=1,ls=as=null,t.updateQueue=null,os.current=ea,e=n(o,r)}while(ds)}if(os.current=Xs,t=null!==as&&null!==as.next,is=0,ls=as=ss=null,cs=!1,t)throw Error(i(300));return e}function ms(){var e=0!==us;return us=0,e}function gs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ls?ss.memoizedState=ls=e:ls=ls.next=e,ls}function bs(){if(null===as){var e=ss.alternate;e=null!==e?e.memoizedState:null}else e=as.next;var t=null===ls?ss.memoizedState:ls.next;if(null!==t)ls=t,as=e;else{if(null===e)throw Error(i(310));e={memoizedState:(as=e).memoizedState,baseState:as.baseState,baseQueue:as.baseQueue,queue:as.queue,next:null},null===ls?ss.memoizedState=ls=e:ls=ls.next=e}return ls}function ys(e,t){return"function"==typeof t?t(e):t}function _s(e){var t=bs(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var o=as,r=o.baseQueue,s=n.pending;if(null!==s){if(null!==r){var a=r.next;r.next=s.next,s.next=a}o.baseQueue=r=s,n.pending=null}if(null!==r){s=r.next,o=o.baseState;var l=a=null,c=null,d=s;do{var u=d.lane;if((is&u)===u)null!==c&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var h={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};null===c?(l=c=h,a=o):c=c.next=h,ss.lanes|=u,Ll|=u}d=d.next}while(null!==d&&d!==s);null===c?a=o:c.next=l,so(o,t.memoizedState)||(ba=!0),t.memoizedState=o,t.baseState=a,t.baseQueue=c,n.lastRenderedState=o}if(null!==(e=n.interleaved)){r=e;do{s=r.lane,ss.lanes|=s,Ll|=s,r=r.next}while(r!==e)}else null===r&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xs(e){var t=bs(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,s=t.memoizedState;if(null!==r){n.pending=null;var a=r=r.next;do{s=e(s,a.action),a=a.next}while(a!==r);so(s,t.memoizedState)||(ba=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function ws(){}function ks(e,t){var n=ss,o=bs(),r=t(),s=!so(o.memoizedState,r);if(s&&(o.memoizedState=r,ba=!0),o=o.queue,Ls(Es.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||null!==ls&&1&ls.memoizedState.tag){if(n.flags|=2048,Os(9,Ss.bind(null,n,o,r,t),void 0,null),null===$l)throw Error(i(349));30&is||Cs(n,t,r)}return r}function Cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ss.updateQueue)?(t={lastEffect:null,stores:null},ss.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ss(e,t,n,o){t.value=n,t.getSnapshot=o,Ps(t)&&$s(e)}function Es(e,t,n){return n((function(){Ps(t)&&$s(e)}))}function Ps(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!so(e,n)}catch(e){return!0}}function $s(e){var t=Ni(e,1);null!==t&&tc(t,e,1,-1)}function Is(e){var t=gs();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:e},t.queue=e,e=e.dispatch=Ks.bind(null,ss,e),[t.memoizedState,e]}function Os(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},null===(t=ss.updateQueue)?(t={lastEffect:null,stores:null},ss.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function Rs(){return bs().memoizedState}function zs(e,t,n,o){var r=gs();ss.flags|=e,r.memoizedState=Os(1|t,n,void 0,void 0===o?null:o)}function As(e,t,n,o){var r=bs();o=void 0===o?null:o;var i=void 0;if(null!==as){var s=as.memoizedState;if(i=s.destroy,null!==o&&fs(o,s.deps))return void(r.memoizedState=Os(t,n,i,o))}ss.flags|=e,r.memoizedState=Os(1|t,n,i,o)}function Ns(e,t){return zs(8390656,8,e,t)}function Ls(e,t){return As(2048,8,e,t)}function Ts(e,t){return As(4,2,e,t)}function Bs(e,t){return As(4,4,e,t)}function Ds(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ms(e,t,n){return n=null!=n?n.concat([e]):null,As(4,4,Ds.bind(null,t,e),n)}function Fs(){}function Vs(e,t){var n=bs();t=void 0===t?null:t;var o=n.memoizedState;return null!==o&&null!==t&&fs(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function js(e,t){var n=bs();t=void 0===t?null:t;var o=n.memoizedState;return null!==o&&null!==t&&fs(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Us(e,t,n){return 21&is?(so(n,t)||(n=ft(),ss.lanes|=n,Ll|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ba=!0),e.memoizedState=n)}function Hs(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var o=rs.transition;rs.transition={};try{e(!1),t()}finally{bt=n,rs.transition=o}}function qs(){return bs().memoizedState}function Ws(e,t,n){var o=ec(e);n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Qs(e)?Ys(t,n):null!==(n=Ai(e,t,n,o))&&(tc(n,e,o,Jl()),Gs(n,t,o))}function Ks(e,t,n){var o=ec(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qs(e))Ys(t,r);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var s=t.lastRenderedState,a=i(s,n);if(r.hasEagerState=!0,r.eagerState=a,so(a,s)){var l=t.interleaved;return null===l?(r.next=r,zi(t)):(r.next=l.next,l.next=r),void(t.interleaved=r)}}catch(e){}null!==(n=Ai(e,t,r,o))&&(tc(n,e,o,r=Jl()),Gs(n,t,o))}}function Qs(e){var t=e.alternate;return e===ss||null!==t&&t===ss}function Ys(e,t){ds=cs=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gs(e,t,n){if(4194240&n){var o=t.lanes;n|=o&=e.pendingLanes,t.lanes=n,gt(e,n)}}var Xs={readContext:Oi,useCallback:ps,useContext:ps,useEffect:ps,useImperativeHandle:ps,useInsertionEffect:ps,useLayoutEffect:ps,useMemo:ps,useReducer:ps,useRef:ps,useState:ps,useDebugValue:ps,useDeferredValue:ps,useTransition:ps,useMutableSource:ps,useSyncExternalStore:ps,useId:ps,unstable_isNewReconciler:!1},Zs={readContext:Oi,useCallback:function(e,t){return gs().memoizedState=[e,void 0===t?null:t],e},useContext:Oi,useEffect:Ns,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,zs(4194308,4,Ds.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zs(4194308,4,e,t)},useInsertionEffect:function(e,t){return zs(4,2,e,t)},useMemo:function(e,t){var n=gs();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=gs();return t=void 0!==n?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Ws.bind(null,ss,e),[o.memoizedState,e]},useRef:function(e){return e={current:e},gs().memoizedState=e},useState:Is,useDebugValue:Fs,useDeferredValue:function(e){return gs().memoizedState=e},useTransition:function(){var e=Is(!1),t=e[0];return e=Hs.bind(null,e[1]),gs().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=ss,r=gs();if(ri){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===$l)throw Error(i(349));30&is||Cs(o,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Ns(Es.bind(null,o,s,e),[e]),o.flags|=2048,Os(9,Ss.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=gs(),t=$l.identifierPrefix;if(ri){var n=Xr;t=":"+t+"R"+(n=(Gr&~(1<<32-it(Gr)-1)).toString(32)+n),0<(n=us++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=hs++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Js={readContext:Oi,useCallback:Vs,useContext:Oi,useEffect:Ls,useImperativeHandle:Ms,useInsertionEffect:Ts,useLayoutEffect:Bs,useMemo:js,useReducer:_s,useRef:Rs,useState:function(){return _s(ys)},useDebugValue:Fs,useDeferredValue:function(e){return Us(bs(),as.memoizedState,e)},useTransition:function(){return[_s(ys)[0],bs().memoizedState]},useMutableSource:ws,useSyncExternalStore:ks,useId:qs,unstable_isNewReconciler:!1},ea={readContext:Oi,useCallback:Vs,useContext:Oi,useEffect:Ls,useImperativeHandle:Ms,useInsertionEffect:Ts,useLayoutEffect:Bs,useMemo:js,useReducer:xs,useRef:Rs,useState:function(){return xs(ys)},useDebugValue:Fs,useDeferredValue:function(e){var t=bs();return null===as?t.memoizedState=e:Us(t,as.memoizedState,e)},useTransition:function(){return[xs(ys)[0],bs().memoizedState]},useMutableSource:ws,useSyncExternalStore:ks,useId:qs,unstable_isNewReconciler:!1};function ta(e,t){if(e&&e.defaultProps){for(var n in t=B({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function na(e,t,n,o){n=null==(n=n(o,t=e.memoizedState))?t:B({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var oa={isMounted:function(e){return!!(e=e._reactInternals)&&Ve(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Jl(),r=ec(e),i=Di(o,r);i.payload=t,null!=n&&(i.callback=n),null!==(t=Mi(e,i,r))&&(tc(t,e,r,o),Fi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Jl(),r=ec(e),i=Di(o,r);i.tag=1,i.payload=t,null!=n&&(i.callback=n),null!==(t=Mi(e,i,r))&&(tc(t,e,r,o),Fi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Jl(),o=ec(e),r=Di(n,o);r.tag=2,null!=t&&(r.callback=t),null!==(t=Mi(e,r,o))&&(tc(t,e,o,n),Fi(t,e,o))}};function ra(e,t,n,o,r,i,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(o,i,s):!(t.prototype&&t.prototype.isPureReactComponent&&ao(n,o)&&ao(r,i))}function ia(e,t,n){var o=!1,r=Pr,i=t.contextType;return"object"==typeof i&&null!==i?i=Oi(i):(r=zr(t)?Or:$r.current,i=(o=null!=(o=t.contextTypes))?Rr(e,r):Pr),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=oa,e.stateNode=t,t._reactInternals=e,o&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function sa(e,t,n,o){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,o),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&oa.enqueueReplaceState(t,t.state,null)}function aa(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Ti(e);var i=t.contextType;"object"==typeof i&&null!==i?r.context=Oi(i):(i=zr(t)?Or:$r.current,r.context=Rr(e,i)),r.state=e.memoizedState,"function"==typeof(i=t.getDerivedStateFromProps)&&(na(e,t,i,n),r.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof r.getSnapshotBeforeUpdate||"function"!=typeof r.UNSAFE_componentWillMount&&"function"!=typeof r.componentWillMount||(t=r.state,"function"==typeof r.componentWillMount&&r.componentWillMount(),"function"==typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),t!==r.state&&oa.enqueueReplaceState(r,r.state,null),ji(e,n,r,o),r.state=e.memoizedState),"function"==typeof r.componentDidMount&&(e.flags|=4194308)}function la(e,t){try{var n="",o=t;do{n+=V(o),o=o.return}while(o);var r=n}catch(e){r="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:r,digest:null}}function ca(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function da(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var ua="function"==typeof WeakMap?WeakMap:Map;function ha(e,t,n){(n=Di(-1,n)).tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Ul||(Ul=!0,Hl=o),da(0,t)},n}function pa(e,t,n){(n=Di(-1,n)).tag=3;var o=e.type.getDerivedStateFromError;if("function"==typeof o){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){da(0,t)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){da(0,t),"function"!=typeof o&&(null===ql?ql=new Set([this]):ql.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function fa(e,t,n){var o=e.pingCache;if(null===o){o=e.pingCache=new ua;var r=new Set;o.set(t,r)}else void 0===(r=o.get(t))&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function va(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function ma(e,t,n,o,r){return 1&e.mode?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Di(-1,1)).tag=2,Mi(n,t,1))),n.lanes|=1),e)}var ga=_.ReactCurrentOwner,ba=!1;function ya(e,t,n,o){t.child=null===e?xi(t,null,n,o):_i(t,e.child,n,o)}function _a(e,t,n,o,r){n=n.render;var i=t.ref;return Ii(t,r),o=vs(e,t,n,o,i,r),n=ms(),null===e||ba?(ri&&n&&ei(t),t.flags|=1,ya(e,t,o,r),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Ua(e,t,r))}function xa(e,t,n,o,r){if(null===e){var i=n.type;return"function"!=typeof i||Rc(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ac(n.type,null,o,t,t.mode,r)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,wa(e,t,i,o,r))}if(i=e.child,!(e.lanes&r)){var s=i.memoizedProps;if((n=null!==(n=n.compare)?n:ao)(s,o)&&e.ref===t.ref)return Ua(e,t,r)}return t.flags|=1,(e=zc(i,o)).ref=t.ref,e.return=t,t.child=e}function wa(e,t,n,o,r){if(null!==e){var i=e.memoizedProps;if(ao(i,o)&&e.ref===t.ref){if(ba=!1,t.pendingProps=o=i,!(e.lanes&r))return t.lanes=e.lanes,Ua(e,t,r);131072&e.flags&&(ba=!0)}}return Sa(e,t,n,o,r)}function ka(e,t,n){var o=t.pendingProps,r=o.children,i=null!==e?e.memoizedState:null;if("hidden"===o.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Er(zl,Rl),Rl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=null!==i?i.baseLanes:n,Er(zl,Rl),Rl|=o}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Er(zl,Rl),Rl|=n;else null!==i?(o=i.baseLanes|n,t.memoizedState=null):o=n,Er(zl,Rl),Rl|=o;return ya(e,t,r,n),t.child}function Ca(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sa(e,t,n,o,r){var i=zr(n)?Or:$r.current;return i=Rr(t,i),Ii(t,r),n=vs(e,t,n,o,i,r),o=ms(),null===e||ba?(ri&&o&&ei(t),t.flags|=1,ya(e,t,n,r),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Ua(e,t,r))}function Ea(e,t,n,o,r){if(zr(n)){var i=!0;Tr(t)}else i=!1;if(Ii(t,r),null===t.stateNode)ja(e,t),ia(t,n,o),aa(t,n,o,r),o=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;c="object"==typeof c&&null!==c?Oi(c):Rr(t,c=zr(n)?Or:$r.current);var d=n.getDerivedStateFromProps,u="function"==typeof d||"function"==typeof s.getSnapshotBeforeUpdate;u||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==o||l!==c)&&sa(t,s,o,c),Li=!1;var h=t.memoizedState;s.state=h,ji(t,o,s,r),l=t.memoizedState,a!==o||h!==l||Ir.current||Li?("function"==typeof d&&(na(t,n,d,o),l=t.memoizedState),(a=Li||ra(t,n,a,o,h,l,c))?(u||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.flags|=4194308)):("function"==typeof s.componentDidMount&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),s.props=o,s.state=l,s.context=c,o=a):("function"==typeof s.componentDidMount&&(t.flags|=4194308),o=!1)}else{s=t.stateNode,Bi(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ta(t.type,a),s.props=c,u=t.pendingProps,h=s.context,l="object"==typeof(l=n.contextType)&&null!==l?Oi(l):Rr(t,l=zr(n)?Or:$r.current);var p=n.getDerivedStateFromProps;(d="function"==typeof p||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==u||h!==l)&&sa(t,s,o,l),Li=!1,h=t.memoizedState,s.state=h,ji(t,o,s,r);var f=t.memoizedState;a!==u||h!==f||Ir.current||Li?("function"==typeof p&&(na(t,n,p,o),f=t.memoizedState),(c=Li||ra(t,n,c,o,h,f,l)||!1)?(d||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(o,f,l),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(o,f,l)),"function"==typeof s.componentDidUpdate&&(t.flags|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=f),s.props=o,s.state=f,s.context=l,o=c):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),o=!1)}return Pa(e,t,n,o,i,r)}function Pa(e,t,n,o,r,i){Ca(e,t);var s=!!(128&t.flags);if(!o&&!s)return r&&Br(t,n,!1),Ua(e,t,i);o=t.stateNode,ga.current=t;var a=s&&"function"!=typeof n.getDerivedStateFromError?null:o.render();return t.flags|=1,null!==e&&s?(t.child=_i(t,e.child,null,i),t.child=_i(t,null,a,i)):ya(e,t,a,i),t.memoizedState=o.state,r&&Br(t,n,!0),t.child}function $a(e){var t=e.stateNode;t.pendingContext?Nr(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Nr(0,t.context,!1),Yi(e,t.containerInfo)}function Ia(e,t,n,o,r){return pi(),fi(r),t.flags|=256,ya(e,t,n,o),t.child}var Oa,Ra,za,Aa,Na={dehydrated:null,treeContext:null,retryLane:0};function La(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ta(e,t,n){var o,r=t.pendingProps,s=Ji.current,a=!1,l=!!(128&t.flags);if((o=l)||(o=(null===e||null!==e.memoizedState)&&!!(2&s)),o?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Er(Ji,1&s),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},1&r||null===a?a=Lc(l,r,0,null):(a.childLanes=0,a.pendingProps=l),e=Nc(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=La(n),t.memoizedState=Na,e):Ba(t,l));if(null!==(s=e.memoizedState)&&null!==(o=s.dehydrated))return function(e,t,n,o,r,s,a){if(n)return 256&t.flags?(t.flags&=-257,Da(e,t,a,o=ca(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=o.fallback,r=t.mode,o=Lc({mode:"visible",children:o.children},r,0,null),(s=Nc(s,r,a,null)).flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,1&t.mode&&_i(t,e.child,null,a),t.child.memoizedState=La(a),t.memoizedState=Na,s);if(!(1&t.mode))return Da(e,t,a,null);if("$!"===r.data){if(o=r.nextSibling&&r.nextSibling.dataset)var l=o.dgst;return o=l,Da(e,t,a,o=ca(s=Error(i(419)),o,void 0))}if(l=!!(a&e.childLanes),ba||l){if(null!==(o=$l)){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}0!==(r=r&(o.suspendedLanes|a)?0:r)&&r!==s.retryLane&&(s.retryLane=r,Ni(e,r),tc(o,e,r,-1))}return fc(),Da(e,t,a,o=ca(Error(i(421))))}return"$?"===r.data?(t.flags|=128,t.child=e.child,t=Ec.bind(null,e),r._reactRetry=t,null):(e=s.treeContext,oi=cr(r.nextSibling),ni=t,ri=!0,ii=null,null!==e&&(Kr[Qr++]=Gr,Kr[Qr++]=Xr,Kr[Qr++]=Yr,Gr=e.id,Xr=e.overflow,Yr=t),(t=Ba(t,o.children)).flags|=4096,t)}(e,t,l,r,o,s,n);if(a){a=r.fallback,l=t.mode,o=(s=e.child).sibling;var c={mode:"hidden",children:r.children};return 1&l||t.child===s?(r=zc(s,c)).subtreeFlags=14680064&s.subtreeFlags:((r=t.child).childLanes=0,r.pendingProps=c,t.deletions=null),null!==o?a=zc(o,a):(a=Nc(a,l,n,null)).flags|=2,a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=null===(l=e.child.memoizedState)?La(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=Na,r}return e=(a=e.child).sibling,r=zc(a,{mode:"visible",children:r.children}),!(1&t.mode)&&(r.lanes=n),r.return=t,r.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ba(e,t){return(t=Lc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Da(e,t,n,o){return null!==o&&fi(o),_i(t,e.child,null,n),(e=Ba(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ma(e,t,n){e.lanes|=t;var o=e.alternate;null!==o&&(o.lanes|=t),$i(e.return,t,n)}function Fa(e,t,n,o,r){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=n,i.tailMode=r)}function Va(e,t,n){var o=t.pendingProps,r=o.revealOrder,i=o.tail;if(ya(e,t,o.children,n),2&(o=Ji.current))o=1&o|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ma(e,n,t);else if(19===e.tag)Ma(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Er(Ji,o),1&t.mode)switch(r){case"forwards":for(n=t.child,r=null;null!==n;)null!==(e=n.alternate)&&null===es(e)&&(r=n),n=n.sibling;null===(n=r)?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Fa(t,!1,r,n,i);break;case"backwards":for(n=null,r=t.child,t.child=null;null!==r;){if(null!==(e=r.alternate)&&null===es(e)){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Fa(t,!0,n,null,i);break;case"together":Fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function ja(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ua(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ll|=t.lanes,!(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=zc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=zc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ha(e,t){if(!ri)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;null!==n;)null!==n.alternate&&(o=n),n=n.sibling;null===o?t||null===e.tail?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qa(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;null!==r;)n|=r.lanes|r.childLanes,o|=14680064&r.subtreeFlags,o|=14680064&r.flags,r.return=e,r=r.sibling;else for(r=e.child;null!==r;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Wa(e,t,n){var o=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qa(t),null;case 1:case 17:return zr(t.type)&&Ar(),qa(t),null;case 3:return o=t.stateNode,Gi(),Sr(Ir),Sr($r),ns(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),null!==e&&null!==e.child||(ui(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==ii&&(ic(ii),ii=null))),Ra(e,t),qa(t),null;case 5:Zi(t);var r=Qi(Ki.current);if(n=t.type,null!==e&&null!=t.stateNode)za(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(null===t.stateNode)throw Error(i(166));return qa(t),null}if(e=Qi(qi.current),ui(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[hr]=t,o[pr]=s,e=!!(1&t.mode),n){case"dialog":Mo("cancel",o),Mo("close",o);break;case"iframe":case"object":case"embed":Mo("load",o);break;case"video":case"audio":for(r=0;r<Lo.length;r++)Mo(Lo[r],o);break;case"source":Mo("error",o);break;case"img":case"image":case"link":Mo("error",o),Mo("load",o);break;case"details":Mo("toggle",o);break;case"input":G(o,s),Mo("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},Mo("invalid",o);break;case"textarea":re(o,s),Mo("invalid",o)}for(var l in ge(n,s),r=null,s)if(s.hasOwnProperty(l)){var c=s[l];"children"===l?"string"==typeof c?o.textContent!==c&&(!0!==s.suppressHydrationWarning&&Zo(o.textContent,c,e),r=["children",c]):"number"==typeof c&&o.textContent!==""+c&&(!0!==s.suppressHydrationWarning&&Zo(o.textContent,c,e),r=["children",""+c]):a.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Mo("scroll",o)}switch(n){case"input":W(o),J(o,s,!0);break;case"textarea":W(o),se(o);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(o.onclick=Jo)}o=r,t.updateQueue=o,null!==o&&(t.flags|=4)}else{l=9===r.nodeType?r:r.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ae(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof o.is?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),"select"===n&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[hr]=t,e[pr]=o,Oa(e,t,!1,!1),t.stateNode=e;e:{switch(l=be(n,o),n){case"dialog":Mo("cancel",e),Mo("close",e),r=o;break;case"iframe":case"object":case"embed":Mo("load",e),r=o;break;case"video":case"audio":for(r=0;r<Lo.length;r++)Mo(Lo[r],e);r=o;break;case"source":Mo("error",e),r=o;break;case"img":case"image":case"link":Mo("error",e),Mo("load",e),r=o;break;case"details":Mo("toggle",e),r=o;break;case"input":G(e,o),r=Y(e,o),Mo("invalid",e);break;case"option":default:r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=B({},o,{value:void 0}),Mo("invalid",e);break;case"textarea":re(e,o),r=oe(e,o),Mo("invalid",e)}for(s in ge(n,r),c=r)if(c.hasOwnProperty(s)){var d=c[s];"style"===s?ve(e,d):"dangerouslySetInnerHTML"===s?null!=(d=d?d.__html:void 0)&&de(e,d):"children"===s?"string"==typeof d?("textarea"!==n||""!==d)&&ue(e,d):"number"==typeof d&&ue(e,""+d):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(a.hasOwnProperty(s)?null!=d&&"onScroll"===s&&Mo("scroll",e):null!=d&&y(e,s,d,l))}switch(n){case"input":W(e),J(e,o,!1);break;case"textarea":W(e),se(e);break;case"option":null!=o.value&&e.setAttribute("value",""+H(o.value));break;case"select":e.multiple=!!o.multiple,null!=(s=o.value)?ne(e,!!o.multiple,s,!1):null!=o.defaultValue&&ne(e,!!o.multiple,o.defaultValue,!0);break;default:"function"==typeof r.onClick&&(e.onclick=Jo)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return qa(t),null;case 6:if(e&&null!=t.stateNode)Aa(e,t,e.memoizedProps,o);else{if("string"!=typeof o&&null===t.stateNode)throw Error(i(166));if(n=Qi(Ki.current),Qi(qi.current),ui(t)){if(o=t.stateNode,n=t.memoizedProps,o[hr]=t,(s=o.nodeValue!==n)&&null!==(e=ni))switch(e.tag){case 3:Zo(o.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zo(o.nodeValue,n,!!(1&e.mode))}s&&(t.flags|=4)}else(o=(9===n.nodeType?n:n.ownerDocument).createTextNode(o))[hr]=t,t.stateNode=o}return qa(t),null;case 13:if(Sr(Ji),o=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ri&&null!==oi&&1&t.mode&&!(128&t.flags))hi(),pi(),t.flags|=98560,s=!1;else if(s=ui(t),null!==o&&null!==o.dehydrated){if(null===e){if(!s)throw Error(i(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(i(317));s[hr]=t}else pi(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qa(t),s=!1}else null!==ii&&(ic(ii),ii=null),s=!0;if(!s)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((o=null!==o)!=(null!==e&&null!==e.memoizedState)&&o&&(t.child.flags|=8192,1&t.mode&&(null===e||1&Ji.current?0===Al&&(Al=3):fc())),null!==t.updateQueue&&(t.flags|=4),qa(t),null);case 4:return Gi(),Ra(e,t),null===e&&jo(t.stateNode.containerInfo),qa(t),null;case 10:return Pi(t.type._context),qa(t),null;case 19:if(Sr(Ji),null===(s=t.memoizedState))return qa(t),null;if(o=!!(128&t.flags),null===(l=s.rendering))if(o)Ha(s,!1);else{if(0!==Al||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(l=es(e))){for(t.flags|=128,Ha(s,!1),null!==(o=l.updateQueue)&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;null!==n;)e=o,(s=n).flags&=14680066,null===(l=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Er(Ji,1&Ji.current|2),t.child}e=e.sibling}null!==s.tail&&Ge()>Vl&&(t.flags|=128,o=!0,Ha(s,!1),t.lanes=4194304)}else{if(!o)if(null!==(e=es(l))){if(t.flags|=128,o=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Ha(s,!0),null===s.tail&&"hidden"===s.tailMode&&!l.alternate&&!ri)return qa(t),null}else 2*Ge()-s.renderingStartTime>Vl&&1073741824!==n&&(t.flags|=128,o=!0,Ha(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=s.last)?n.sibling=l:t.child=l,s.last=l)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ge(),t.sibling=null,n=Ji.current,Er(Ji,o?1&n|2:1&n),t):(qa(t),null);case 22:case 23:return dc(),o=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==o&&(t.flags|=8192),o&&1&t.mode?!!(1073741824&Rl)&&(qa(t),6&t.subtreeFlags&&(t.flags|=8192)):qa(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Ka(e,t){switch(ti(t),t.tag){case 1:return zr(t.type)&&Ar(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Gi(),Sr(Ir),Sr($r),ns(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(Sr(Ji),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));pi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Sr(Ji),null;case 4:return Gi(),null;case 10:return Pi(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Oa=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ra=function(){},za=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,Qi(qi.current);var i,s=null;switch(n){case"input":r=Y(e,r),o=Y(e,o),s=[];break;case"select":r=B({},r,{value:void 0}),o=B({},o,{value:void 0}),s=[];break;case"textarea":r=oe(e,r),o=oe(e,o),s=[];break;default:"function"!=typeof r.onClick&&"function"==typeof o.onClick&&(e.onclick=Jo)}for(d in ge(n,o),n=null,r)if(!o.hasOwnProperty(d)&&r.hasOwnProperty(d)&&null!=r[d])if("style"===d){var l=r[d];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==d&&"children"!==d&&"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(a.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in o){var c=o[d];if(l=null!=r?r[d]:void 0,o.hasOwnProperty(d)&&c!==l&&(null!=c||null!=l))if("style"===d)if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(s||(s=[]),s.push(d,n)),n=c;else"dangerouslySetInnerHTML"===d?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(s=s||[]).push(d,c)):"children"===d?"string"!=typeof c&&"number"!=typeof c||(s=s||[]).push(d,""+c):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&(a.hasOwnProperty(d)?(null!=c&&"onScroll"===d&&Mo("scroll",e),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}},Aa=function(e,t,n,o){n!==o&&(t.flags|=4)};var Qa=!1,Ya=!1,Ga="function"==typeof WeakSet?WeakSet:Set,Xa=null;function Za(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){kc(e,t,n)}else n.current=null}function Ja(e,t,n){try{n()}catch(n){kc(e,t,n)}}var el=!1;function tl(e,t,n){var o=t.updateQueue;if(null!==(o=null!==o?o.lastEffect:null)){var r=o=o.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,void 0!==i&&Ja(t,n,i)}r=r.next}while(r!==o)}}function nl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function ol(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function rl(e){var t=e.alternate;null!==t&&(e.alternate=null,rl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(t=e.stateNode)&&(delete t[hr],delete t[pr],delete t[vr],delete t[mr],delete t[gr]),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function il(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||il(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function al(e,t,n){var o=e.tag;if(5===o||6===o)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Jo));else if(4!==o&&null!==(e=e.child))for(al(e,t,n),e=e.sibling;null!==e;)al(e,t,n),e=e.sibling}function ll(e,t,n){var o=e.tag;if(5===o||6===o)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==o&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}var cl=null,dl=!1;function ul(e,t,n){for(n=n.child;null!==n;)hl(e,t,n),n=n.sibling}function hl(e,t,n){if(rt&&"function"==typeof rt.onCommitFiberUnmount)try{rt.onCommitFiberUnmount(ot,n)}catch(e){}switch(n.tag){case 5:Ya||Za(n,t);case 6:var o=cl,r=dl;cl=null,ul(e,t,n),dl=r,null!==(cl=o)&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cl.removeChild(n.stateNode));break;case 18:null!==cl&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?lr(e.parentNode,n):1===e.nodeType&&lr(e,n),Vt(e)):lr(cl,n.stateNode));break;case 4:o=cl,r=dl,cl=n.stateNode.containerInfo,dl=!0,ul(e,t,n),cl=o,dl=r;break;case 0:case 11:case 14:case 15:if(!Ya&&null!==(o=n.updateQueue)&&null!==(o=o.lastEffect)){r=o=o.next;do{var i=r,s=i.destroy;i=i.tag,void 0!==s&&(2&i||4&i)&&Ja(n,t,s),r=r.next}while(r!==o)}ul(e,t,n);break;case 1:if(!Ya&&(Za(n,t),"function"==typeof(o=n.stateNode).componentWillUnmount))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(e){kc(n,t,e)}ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:1&n.mode?(Ya=(o=Ya)||null!==n.memoizedState,ul(e,t,n),Ya=o):ul(e,t,n);break;default:ul(e,t,n)}}function pl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Ga),t.forEach((function(t){var o=Pc.bind(null,e,t);n.has(t)||(n.add(t),t.then(o,o))}))}}function fl(e,t){var n=t.deletions;if(null!==n)for(var o=0;o<n.length;o++){var r=n[o];try{var s=e,a=t,l=a;e:for(;null!==l;){switch(l.tag){case 5:cl=l.stateNode,dl=!1;break e;case 3:case 4:cl=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===cl)throw Error(i(160));hl(s,a,r),cl=null,dl=!1;var c=r.alternate;null!==c&&(c.return=null),r.return=null}catch(e){kc(r,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)vl(t,e),t=t.sibling}function vl(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fl(t,e),ml(e),4&o){try{tl(3,e,e.return),nl(3,e)}catch(t){kc(e,e.return,t)}try{tl(5,e,e.return)}catch(t){kc(e,e.return,t)}}break;case 1:fl(t,e),ml(e),512&o&&null!==n&&Za(n,n.return);break;case 5:if(fl(t,e),ml(e),512&o&&null!==n&&Za(n,n.return),32&e.flags){var r=e.stateNode;try{ue(r,"")}catch(t){kc(e,e.return,t)}}if(4&o&&null!=(r=e.stateNode)){var s=e.memoizedProps,a=null!==n?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===s.type&&null!=s.name&&X(r,s),be(l,a);var d=be(l,s);for(a=0;a<c.length;a+=2){var u=c[a],h=c[a+1];"style"===u?ve(r,h):"dangerouslySetInnerHTML"===u?de(r,h):"children"===u?ue(r,h):y(r,u,h,d)}switch(l){case"input":Z(r,s);break;case"textarea":ie(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?ne(r,!!s.multiple,f,!1):p!==!!s.multiple&&(null!=s.defaultValue?ne(r,!!s.multiple,s.defaultValue,!0):ne(r,!!s.multiple,s.multiple?[]:"",!1))}r[pr]=s}catch(t){kc(e,e.return,t)}}break;case 6:if(fl(t,e),ml(e),4&o){if(null===e.stateNode)throw Error(i(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(t){kc(e,e.return,t)}}break;case 3:if(fl(t,e),ml(e),4&o&&null!==n&&n.memoizedState.isDehydrated)try{Vt(t.containerInfo)}catch(t){kc(e,e.return,t)}break;case 4:default:fl(t,e),ml(e);break;case 13:fl(t,e),ml(e),8192&(r=e.child).flags&&(s=null!==r.memoizedState,r.stateNode.isHidden=s,!s||null!==r.alternate&&null!==r.alternate.memoizedState||(Fl=Ge())),4&o&&pl(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(Ya=(d=Ya)||u,fl(t,e),Ya=d):fl(t,e),ml(e),8192&o){if(d=null!==e.memoizedState,(e.stateNode.isHidden=d)&&!u&&1&e.mode)for(Xa=e,u=e.child;null!==u;){for(h=Xa=u;null!==Xa;){switch(f=(p=Xa).child,p.tag){case 0:case 11:case 14:case 15:tl(4,p,p.return);break;case 1:Za(p,p.return);var v=p.stateNode;if("function"==typeof v.componentWillUnmount){o=p,n=p.return;try{t=o,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(e){kc(o,n,e)}}break;case 5:Za(p,p.return);break;case 22:if(null!==p.memoizedState){_l(h);continue}}null!==f?(f.return=p,Xa=f):_l(h)}u=u.sibling}e:for(u=null,h=e;;){if(5===h.tag){if(null===u){u=h;try{r=h.stateNode,d?"function"==typeof(s=r.style).setProperty?s.setProperty("display","none","important"):s.display="none":(l=h.stateNode,a=null!=(c=h.memoizedProps.style)&&c.hasOwnProperty("display")?c.display:null,l.style.display=fe("display",a))}catch(t){kc(e,e.return,t)}}}else if(6===h.tag){if(null===u)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(t){kc(e,e.return,t)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:fl(t,e),ml(e),4&o&&pl(e);case 21:}}function ml(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(il(n)){var o=n;break e}n=n.return}throw Error(i(160))}switch(o.tag){case 5:var r=o.stateNode;32&o.flags&&(ue(r,""),o.flags&=-33),ll(e,sl(e),r);break;case 3:case 4:var s=o.stateNode.containerInfo;al(e,sl(e),s);break;default:throw Error(i(161))}}catch(t){kc(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function gl(e,t,n){Xa=e,bl(e,t,n)}function bl(e,t,n){for(var o=!!(1&e.mode);null!==Xa;){var r=Xa,i=r.child;if(22===r.tag&&o){var s=null!==r.memoizedState||Qa;if(!s){var a=r.alternate,l=null!==a&&null!==a.memoizedState||Ya;a=Qa;var c=Ya;if(Qa=s,(Ya=l)&&!c)for(Xa=r;null!==Xa;)l=(s=Xa).child,22===s.tag&&null!==s.memoizedState?xl(r):null!==l?(l.return=s,Xa=l):xl(r);for(;null!==i;)Xa=i,bl(i,t,n),i=i.sibling;Xa=r,Qa=a,Ya=c}yl(e)}else 8772&r.subtreeFlags&&null!==i?(i.return=r,Xa=i):yl(e)}}function yl(e){for(;null!==Xa;){var t=Xa;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Ya||nl(5,t);break;case 1:var o=t.stateNode;if(4&t.flags&&!Ya)if(null===n)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:ta(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Ui(t,s,o);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ui(t,a,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var d=t.alternate;if(null!==d){var u=d.memoizedState;if(null!==u){var h=u.dehydrated;null!==h&&Vt(h)}}}break;default:throw Error(i(163))}Ya||512&t.flags&&ol(t)}catch(e){kc(t,t.return,e)}}if(t===e){Xa=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xa=n;break}Xa=t.return}}function _l(e){for(;null!==Xa;){var t=Xa;if(t===e){Xa=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xa=n;break}Xa=t.return}}function xl(e){for(;null!==Xa;){var t=Xa;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{nl(4,t)}catch(e){kc(t,n,e)}break;case 1:var o=t.stateNode;if("function"==typeof o.componentDidMount){var r=t.return;try{o.componentDidMount()}catch(e){kc(t,r,e)}}var i=t.return;try{ol(t)}catch(e){kc(t,i,e)}break;case 5:var s=t.return;try{ol(t)}catch(e){kc(t,s,e)}}}catch(e){kc(t,t.return,e)}if(t===e){Xa=null;break}var a=t.sibling;if(null!==a){a.return=t.return,Xa=a;break}Xa=t.return}}var wl,kl=Math.ceil,Cl=_.ReactCurrentDispatcher,Sl=_.ReactCurrentOwner,El=_.ReactCurrentBatchConfig,Pl=0,$l=null,Il=null,Ol=0,Rl=0,zl=Cr(0),Al=0,Nl=null,Ll=0,Tl=0,Bl=0,Dl=null,Ml=null,Fl=0,Vl=1/0,jl=null,Ul=!1,Hl=null,ql=null,Wl=!1,Kl=null,Ql=0,Yl=0,Gl=null,Xl=-1,Zl=0;function Jl(){return 6&Pl?Ge():-1!==Xl?Xl:Xl=Ge()}function ec(e){return 1&e.mode?2&Pl&&0!==Ol?Ol&-Ol:null!==vi.transition?(0===Zl&&(Zl=ft()),Zl):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Yt(e.type):1}function tc(e,t,n,o){if(50<Yl)throw Yl=0,Gl=null,Error(i(185));mt(e,n,o),2&Pl&&e===$l||(e===$l&&(!(2&Pl)&&(Tl|=n),4===Al&&sc(e,Ol)),nc(e,o),1===n&&0===Pl&&!(1&t.mode)&&(Vl=Ge()+500,Mr&&jr()))}function nc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-it(i),a=1<<s,l=r[s];-1===l?a&n&&!(a&o)||(r[s]=ht(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}(e,t);var o=ut(e,e===$l?Ol:0);if(0===o)null!==n&&Ke(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(null!=n&&Ke(n),1===t)0===e.tag?function(e){Mr=!0,Vr(e)}(ac.bind(null,e)):Vr(ac.bind(null,e)),sr((function(){!(6&Pl)&&jr()})),n=null;else{switch(yt(o)){case 1:n=Ze;break;case 4:n=Je;break;case 16:default:n=et;break;case 536870912:n=nt}n=$c(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Xl=-1,Zl=0,6&Pl)throw Error(i(327));var n=e.callbackNode;if(xc()&&e.callbackNode!==n)return null;var o=ut(e,e===$l?Ol:0);if(0===o)return null;if(30&o||o&e.expiredLanes||t)t=vc(e,o);else{t=o;var r=Pl;Pl|=2;var s=pc();for($l===e&&Ol===t||(jl=null,Vl=Ge()+500,uc(e,t));;)try{gc();break}catch(t){hc(e,t)}Ei(),Cl.current=s,Pl=r,null!==Il?t=0:($l=null,Ol=0,t=Al)}if(0!==t){if(2===t&&0!==(r=pt(e))&&(o=r,t=rc(e,r)),1===t)throw n=Nl,uc(e,0),sc(e,o),nc(e,Ge()),n;if(6===t)sc(e,o);else{if(r=e.current.alternate,!(30&o||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var o=0;o<n.length;o++){var r=n[o],i=r.getSnapshot;r=r.value;try{if(!so(i(),r))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(r)||(t=vc(e,o),2===t&&(s=pt(e),0!==s&&(o=s,t=rc(e,s))),1!==t)))throw n=Nl,uc(e,0),sc(e,o),nc(e,Ge()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(i(345));case 2:case 5:_c(e,Ml,jl);break;case 3:if(sc(e,o),(130023424&o)===o&&10<(t=Fl+500-Ge())){if(0!==ut(e,0))break;if(((r=e.suspendedLanes)&o)!==o){Jl(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=or(_c.bind(null,e,Ml,jl),t);break}_c(e,Ml,jl);break;case 4:if(sc(e,o),(4194240&o)===o)break;for(t=e.eventTimes,r=-1;0<o;){var a=31-it(o);s=1<<a,(a=t[a])>r&&(r=a),o&=~s}if(o=r,10<(o=(120>(o=Ge()-o)?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*kl(o/1960))-o)){e.timeoutHandle=or(_c.bind(null,e,Ml,jl),o);break}_c(e,Ml,jl);break;default:throw Error(i(329))}}}return nc(e,Ge()),e.callbackNode===n?oc.bind(null,e):null}function rc(e,t){var n=Dl;return e.current.memoizedState.isDehydrated&&(uc(e,t).flags|=256),2!==(e=vc(e,t))&&(t=Ml,Ml=n,null!==t&&ic(t)),e}function ic(e){null===Ml?Ml=e:Ml.push.apply(Ml,e)}function sc(e,t){for(t&=~Bl,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),o=1<<n;e[n]=-1,t&=~o}}function ac(e){if(6&Pl)throw Error(i(327));xc();var t=ut(e,0);if(!(1&t))return nc(e,Ge()),null;var n=vc(e,t);if(0!==e.tag&&2===n){var o=pt(e);0!==o&&(t=o,n=rc(e,o))}if(1===n)throw n=Nl,uc(e,0),sc(e,t),nc(e,Ge()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_c(e,Ml,jl),nc(e,Ge()),null}function lc(e,t){var n=Pl;Pl|=1;try{return e(t)}finally{0===(Pl=n)&&(Vl=Ge()+500,Mr&&jr())}}function cc(e){null!==Kl&&0===Kl.tag&&!(6&Pl)&&xc();var t=Pl;Pl|=1;var n=El.transition,o=bt;try{if(El.transition=null,bt=1,e)return e()}finally{bt=o,El.transition=n,!(6&(Pl=t))&&jr()}}function dc(){Rl=zl.current,Sr(zl)}function uc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rr(n)),null!==Il)for(n=Il.return;null!==n;){var o=n;switch(ti(o),o.tag){case 1:null!=(o=o.type.childContextTypes)&&Ar();break;case 3:Gi(),Sr(Ir),Sr($r),ns();break;case 5:Zi(o);break;case 4:Gi();break;case 13:case 19:Sr(Ji);break;case 10:Pi(o.type._context);break;case 22:case 23:dc()}n=n.return}if($l=e,Il=e=zc(e.current,null),Ol=Rl=t,Al=0,Nl=null,Bl=Tl=Ll=0,Ml=Dl=null,null!==Ri){for(t=0;t<Ri.length;t++)if(null!==(o=(n=Ri[t]).interleaved)){n.interleaved=null;var r=o.next,i=n.pending;if(null!==i){var s=i.next;i.next=r,o.next=s}n.pending=o}Ri=null}return e}function hc(e,t){for(;;){var n=Il;try{if(Ei(),os.current=Xs,cs){for(var o=ss.memoizedState;null!==o;){var r=o.queue;null!==r&&(r.pending=null),o=o.next}cs=!1}if(is=0,ls=as=ss=null,ds=!1,us=0,Sl.current=null,null===n||null===n.return){Al=1,Nl=t,Il=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=Ol,l.flags|=32768,null!==c&&"object"==typeof c&&"function"==typeof c.then){var d=c,u=l,h=u.tag;if(!(1&u.mode||0!==h&&11!==h&&15!==h)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=va(a);if(null!==f){f.flags&=-257,ma(f,a,l,0,t),1&f.mode&&fa(s,d,t),c=d;var v=(t=f).updateQueue;if(null===v){var m=new Set;m.add(c),t.updateQueue=m}else v.add(c);break e}if(!(1&t)){fa(s,d,t),fc();break e}c=Error(i(426))}else if(ri&&1&l.mode){var g=va(a);if(null!==g){!(65536&g.flags)&&(g.flags|=256),ma(g,a,l,0,t),fi(la(c,l));break e}}s=c=la(c,l),4!==Al&&(Al=2),null===Dl?Dl=[s]:Dl.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,Vi(s,ha(0,c,t));break e;case 1:l=c;var b=s.type,y=s.stateNode;if(!(128&s.flags||"function"!=typeof b.getDerivedStateFromError&&(null===y||"function"!=typeof y.componentDidCatch||null!==ql&&ql.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t,Vi(s,pa(s,l,t));break e}}s=s.return}while(null!==s)}yc(n)}catch(e){t=e,Il===n&&null!==n&&(Il=n=n.return);continue}break}}function pc(){var e=Cl.current;return Cl.current=Xs,null===e?Xs:e}function fc(){0!==Al&&3!==Al&&2!==Al||(Al=4),null===$l||!(268435455&Ll)&&!(268435455&Tl)||sc($l,Ol)}function vc(e,t){var n=Pl;Pl|=2;var o=pc();for($l===e&&Ol===t||(jl=null,uc(e,t));;)try{mc();break}catch(t){hc(e,t)}if(Ei(),Pl=n,Cl.current=o,null!==Il)throw Error(i(261));return $l=null,Ol=0,Al}function mc(){for(;null!==Il;)bc(Il)}function gc(){for(;null!==Il&&!Qe();)bc(Il)}function bc(e){var t=wl(e.alternate,e,Rl);e.memoizedProps=e.pendingProps,null===t?yc(e):Il=t,Sl.current=null}function yc(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Ka(n,t)))return n.flags&=32767,void(Il=n);if(null===e)return Al=6,void(Il=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Wa(n,t,Rl)))return void(Il=n);if(null!==(t=t.sibling))return void(Il=t);Il=t=e}while(null!==t);0===Al&&(Al=5)}function _c(e,t,n){var o=bt,r=El.transition;try{El.transition=null,bt=1,function(e,t,n,o){do{xc()}while(null!==Kl);if(6&Pl)throw Error(i(327));n=e.finishedWork;var r=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-it(n),i=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~i}}(e,s),e===$l&&(Il=$l=null,Ol=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||Wl||(Wl=!0,$c(et,(function(){return xc(),null}))),s=!!(15990&n.flags),15990&n.subtreeFlags||s){s=El.transition,El.transition=null;var a=bt;bt=1;var l=Pl;Pl|=4,Sl.current=null,function(e,t){if(er=Ut,po(e=ho())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var o=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(o&&0!==o.rangeCount){n=o.anchorNode;var r=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch(e){n=null;break e}var a=0,l=-1,c=-1,d=0,u=0,h=e,p=null;t:for(;;){for(var f;h!==n||0!==r&&3!==h.nodeType||(l=a+r),h!==s||0!==o&&3!==h.nodeType||(c=a+o),3===h.nodeType&&(a+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===n&&++d===r&&(l=a),p===s&&++u===o&&(c=a),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(tr={focusedElem:e,selectionRange:n},Ut=!1,Xa=t;null!==Xa;)if(e=(t=Xa).child,1028&t.subtreeFlags&&null!==e)e.return=t,Xa=e;else for(;null!==Xa;){t=Xa;try{var v=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==v){var m=v.memoizedProps,g=v.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?m:ta(t.type,m),g);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=t.stateNode.containerInfo;1===_.nodeType?_.textContent="":9===_.nodeType&&_.documentElement&&_.removeChild(_.documentElement);break;default:throw Error(i(163))}}catch(e){kc(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,Xa=e;break}Xa=t.return}v=el,el=!1}(e,n),vl(n,e),fo(tr),Ut=!!er,tr=er=null,e.current=n,gl(n,e,r),Ye(),Pl=l,bt=a,El.transition=s}else e.current=n;if(Wl&&(Wl=!1,Kl=e,Ql=r),0===(s=e.pendingLanes)&&(ql=null),function(e){if(rt&&"function"==typeof rt.onCommitFiberRoot)try{rt.onCommitFiberRoot(ot,e,void 0,!(128&~e.current.flags))}catch(e){}}(n.stateNode),nc(e,Ge()),null!==t)for(o=e.onRecoverableError,n=0;n<t.length;n++)o((r=t[n]).value,{componentStack:r.stack,digest:r.digest});if(Ul)throw Ul=!1,e=Hl,Hl=null,e;!!(1&Ql)&&0!==e.tag&&xc(),1&(s=e.pendingLanes)?e===Gl?Yl++:(Yl=0,Gl=e):Yl=0,jr()}(e,t,n,o)}finally{El.transition=r,bt=o}return null}function xc(){if(null!==Kl){var e=yt(Ql),t=El.transition,n=bt;try{if(El.transition=null,bt=16>e?16:e,null===Kl)var o=!1;else{if(e=Kl,Kl=null,Ql=0,6&Pl)throw Error(i(331));var r=Pl;for(Pl|=4,Xa=e.current;null!==Xa;){var s=Xa,a=s.child;if(16&Xa.flags){var l=s.deletions;if(null!==l){for(var c=0;c<l.length;c++){var d=l[c];for(Xa=d;null!==Xa;){var u=Xa;switch(u.tag){case 0:case 11:case 15:tl(8,u,s)}var h=u.child;if(null!==h)h.return=u,Xa=h;else for(;null!==Xa;){var p=(u=Xa).sibling,f=u.return;if(rl(u),u===d){Xa=null;break}if(null!==p){p.return=f,Xa=p;break}Xa=f}}}var v=s.alternate;if(null!==v){var m=v.child;if(null!==m){v.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Xa=s}}if(2064&s.subtreeFlags&&null!==a)a.return=s,Xa=a;else e:for(;null!==Xa;){if(2048&(s=Xa).flags)switch(s.tag){case 0:case 11:case 15:tl(9,s,s.return)}var b=s.sibling;if(null!==b){b.return=s.return,Xa=b;break e}Xa=s.return}}var y=e.current;for(Xa=y;null!==Xa;){var _=(a=Xa).child;if(2064&a.subtreeFlags&&null!==_)_.return=a,Xa=_;else e:for(a=y;null!==Xa;){if(2048&(l=Xa).flags)try{switch(l.tag){case 0:case 11:case 15:nl(9,l)}}catch(e){kc(l,l.return,e)}if(l===a){Xa=null;break e}var x=l.sibling;if(null!==x){x.return=l.return,Xa=x;break e}Xa=l.return}}if(Pl=r,jr(),rt&&"function"==typeof rt.onPostCommitFiberRoot)try{rt.onPostCommitFiberRoot(ot,e)}catch(e){}o=!0}return o}finally{bt=n,El.transition=t}}return!1}function wc(e,t,n){e=Mi(e,t=ha(0,t=la(n,t),1),1),t=Jl(),null!==e&&(mt(e,1,t),nc(e,t))}function kc(e,t,n){if(3===e.tag)wc(e,e,n);else for(;null!==t;){if(3===t.tag){wc(t,e,n);break}if(1===t.tag){var o=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof o.componentDidCatch&&(null===ql||!ql.has(o))){t=Mi(t,e=pa(t,e=la(n,e),1),1),e=Jl(),null!==t&&(mt(t,1,e),nc(t,e));break}}t=t.return}}function Cc(e,t,n){var o=e.pingCache;null!==o&&o.delete(t),t=Jl(),e.pingedLanes|=e.suspendedLanes&n,$l===e&&(Ol&n)===n&&(4===Al||3===Al&&(130023424&Ol)===Ol&&500>Ge()-Fl?uc(e,0):Bl|=n),nc(e,t)}function Sc(e,t){0===t&&(1&e.mode?(t=ct,!(130023424&(ct<<=1))&&(ct=4194304)):t=1);var n=Jl();null!==(e=Ni(e,t))&&(mt(e,t,n),nc(e,n))}function Ec(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Sc(e,n)}function Pc(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;null!==r&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(i(314))}null!==o&&o.delete(t),Sc(e,n)}function $c(e,t){return We(e,t)}function Ic(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oc(e,t,n,o){return new Ic(e,t,n,o)}function Rc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function zc(e,t){var n=e.alternate;return null===n?((n=Oc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ac(e,t,n,o,r,s){var a=2;if(o=e,"function"==typeof e)Rc(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case k:return Nc(n.children,r,s,t);case C:a=8,r|=8;break;case S:return(e=Oc(12,n,t,2|r)).elementType=S,e.lanes=s,e;case I:return(e=Oc(13,n,t,r)).elementType=I,e.lanes=s,e;case O:return(e=Oc(19,n,t,r)).elementType=O,e.lanes=s,e;case A:return Lc(n,r,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case E:a=10;break e;case P:a=9;break e;case $:a=11;break e;case R:a=14;break e;case z:a=16,o=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Oc(a,n,t,r)).elementType=e,t.type=o,t.lanes=s,t}function Nc(e,t,n,o){return(e=Oc(7,e,o,t)).lanes=n,e}function Lc(e,t,n,o){return(e=Oc(22,e,o,t)).elementType=A,e.lanes=n,e.stateNode={isHidden:!1},e}function Tc(e,t,n){return(e=Oc(6,e,null,t)).lanes=n,e}function Bc(e,t,n){return(t=Oc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dc(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vt(0),this.expirationTimes=vt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vt(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Mc(e,t,n,o,r,i,s,a,l){return e=new Dc(e,t,n,a,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Oc(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ti(i),e}function Fc(e){if(!e)return Pr;e:{if(Ve(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(zr(n))return Lr(e,n,t)}return t}function Vc(e,t,n,o,r,i,s,a,l){return(e=Mc(n,o,!0,e,0,i,0,a,l)).context=Fc(null),n=e.current,(i=Di(o=Jl(),r=ec(n))).callback=null!=t?t:null,Mi(n,i,r),e.current.lanes=r,mt(e,r,o),nc(e,o),e}function jc(e,t,n,o){var r=t.current,i=Jl(),s=ec(r);return n=Fc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Di(i,s)).payload={element:e},null!==(o=void 0===o?null:o)&&(t.callback=o),null!==(e=Mi(r,t,s))&&(tc(e,r,s,i),Fi(e,r,s)),s}function Uc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function qc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}wl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ir.current)ba=!0;else{if(!(e.lanes&n||128&t.flags))return ba=!1,function(e,t,n){switch(t.tag){case 3:$a(t),pi();break;case 5:Xi(t);break;case 1:zr(t.type)&&Tr(t);break;case 4:Yi(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;Er(wi,o._currentValue),o._currentValue=r;break;case 13:if(null!==(o=t.memoizedState))return null!==o.dehydrated?(Er(Ji,1&Ji.current),t.flags|=128,null):n&t.child.childLanes?Ta(e,t,n):(Er(Ji,1&Ji.current),null!==(e=Ua(e,t,n))?e.sibling:null);Er(Ji,1&Ji.current);break;case 19:if(o=!!(n&t.childLanes),128&e.flags){if(o)return Va(e,t,n);t.flags|=128}if(null!==(r=t.memoizedState)&&(r.rendering=null,r.tail=null,r.lastEffect=null),Er(Ji,Ji.current),o)break;return null;case 22:case 23:return t.lanes=0,ka(e,t,n)}return Ua(e,t,n)}(e,t,n);ba=!!(131072&e.flags)}else ba=!1,ri&&1048576&t.flags&&Jr(t,Wr,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;ja(e,t),e=t.pendingProps;var r=Rr(t,$r.current);Ii(t,n),r=vs(null,t,o,e,r,n);var s=ms();return t.flags|=1,"object"==typeof r&&null!==r&&"function"==typeof r.render&&void 0===r.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zr(o)?(s=!0,Tr(t)):s=!1,t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null,Ti(t),r.updater=oa,t.stateNode=r,r._reactInternals=t,aa(t,o,e,n),t=Pa(null,t,o,!0,s,n)):(t.tag=0,ri&&s&&ei(t),ya(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(ja(e,t),e=t.pendingProps,o=(r=o._init)(o._payload),t.type=o,r=t.tag=function(e){if("function"==typeof e)return Rc(e)?1:0;if(null!=e){if((e=e.$$typeof)===$)return 11;if(e===R)return 14}return 2}(o),e=ta(o,e),r){case 0:t=Sa(null,t,o,e,n);break e;case 1:t=Ea(null,t,o,e,n);break e;case 11:t=_a(null,t,o,e,n);break e;case 14:t=xa(null,t,o,ta(o.type,e),n);break e}throw Error(i(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,Sa(e,t,o,r=t.elementType===o?r:ta(o,r),n);case 1:return o=t.type,r=t.pendingProps,Ea(e,t,o,r=t.elementType===o?r:ta(o,r),n);case 3:e:{if($a(t),null===e)throw Error(i(387));o=t.pendingProps,r=(s=t.memoizedState).element,Bi(e,t),ji(t,o,null,n);var a=t.memoizedState;if(o=a.element,s.isDehydrated){if(s={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Ia(e,t,o,n,r=la(Error(i(423)),t));break e}if(o!==r){t=Ia(e,t,o,n,r=la(Error(i(424)),t));break e}for(oi=cr(t.stateNode.containerInfo.firstChild),ni=t,ri=!0,ii=null,n=xi(t,null,o,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pi(),o===r){t=Ua(e,t,n);break e}ya(e,t,o,n)}t=t.child}return t;case 5:return Xi(t),null===e&&ci(t),o=t.type,r=t.pendingProps,s=null!==e?e.memoizedProps:null,a=r.children,nr(o,r)?a=null:null!==s&&nr(o,s)&&(t.flags|=32),Ca(e,t),ya(e,t,a,n),t.child;case 6:return null===e&&ci(t),null;case 13:return Ta(e,t,n);case 4:return Yi(t,t.stateNode.containerInfo),o=t.pendingProps,null===e?t.child=_i(t,null,o,n):ya(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,_a(e,t,o,r=t.elementType===o?r:ta(o,r),n);case 7:return ya(e,t,t.pendingProps,n),t.child;case 8:case 12:return ya(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,s=t.memoizedProps,a=r.value,Er(wi,o._currentValue),o._currentValue=a,null!==s)if(so(s.value,a)){if(s.children===r.children&&!Ir.current){t=Ua(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var l=s.dependencies;if(null!==l){a=s.child;for(var c=l.firstContext;null!==c;){if(c.context===o){if(1===s.tag){(c=Di(-1,n&-n)).tag=2;var d=s.updateQueue;if(null!==d){var u=(d=d.shared).pending;null===u?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=n,null!==(c=s.alternate)&&(c.lanes|=n),$i(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===s.tag)a=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(a=s.return))throw Error(i(341));a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),$i(a,n,t),a=s.sibling}else a=s.child;if(null!==a)a.return=s;else for(a=s;null!==a;){if(a===t){a=null;break}if(null!==(s=a.sibling)){s.return=a.return,a=s;break}a=a.return}s=a}ya(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,Ii(t,n),o=o(r=Oi(r)),t.flags|=1,ya(e,t,o,n),t.child;case 14:return r=ta(o=t.type,t.pendingProps),xa(e,t,o,r=ta(o.type,r),n);case 15:return wa(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:ta(o,r),ja(e,t),t.tag=1,zr(o)?(e=!0,Tr(t)):e=!1,Ii(t,n),ia(t,o,r),aa(t,o,r,n),Pa(null,t,o,!0,e,n);case 19:return Va(e,t,n);case 22:return ka(e,t,n)}throw Error(i(156,t.tag))};var Wc="function"==typeof reportError?reportError:function(e){console.error(e)};function Kc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function Zc(e,t,n,o,r){var i=n._reactRootContainer;if(i){var s=i;if("function"==typeof r){var a=r;r=function(){var e=Uc(s);a.call(e)}}jc(t,s,e,r)}else s=function(e,t,n,o,r){if(r){if("function"==typeof o){var i=o;o=function(){var e=Uc(s);i.call(e)}}var s=Vc(t,o,e,0,null,!1,0,"",Xc);return e._reactRootContainer=s,e[fr]=s.current,jo(8===e.nodeType?e.parentNode:e),cc(),s}for(;r=e.lastChild;)e.removeChild(r);if("function"==typeof o){var a=o;o=function(){var e=Uc(l);a.call(e)}}var l=Mc(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=l,e[fr]=l.current,jo(8===e.nodeType?e.parentNode:e),cc((function(){jc(t,l,n,o)})),l}(n,t,e,r,o);return Uc(s)}Qc.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));jc(e,t,null,null)},Qc.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cc((function(){jc(null,e,null,null)})),t[fr]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&0!==t&&t<zt[n].priority;n++);zt.splice(n,0,e),0===n&&Tt(e)}},_t=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(gt(t,1|n),nc(t,Ge()),!(6&Pl)&&(Vl=Ge()+500,jr()))}break;case 13:cc((function(){var t=Ni(e,1);if(null!==t){var n=Jl();tc(t,e,1,n)}})),qc(e,1)}},xt=function(e){if(13===e.tag){var t=Ni(e,134217728);null!==t&&tc(t,e,134217728,Jl()),qc(e,134217728)}},wt=function(e){if(13===e.tag){var t=ec(e),n=Ni(e,t);null!==n&&tc(n,e,t,Jl()),qc(e,t)}},kt=function(){return bt},Ct=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},xe=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=xr(o);if(!r)throw Error(i(90));K(o),Z(o,r)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=lc,$e=cc;var Jc={usingClientEntryPoint:!1,Events:[yr,_r,xr,Se,Ee,lc]},ed={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},td={bundleType:ed.bundleType,version:ed.version,rendererPackageName:ed.rendererPackageName,rendererConfig:ed.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:ed.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var nd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nd.isDisabled&&nd.supportsFiber)try{ot=nd.inject(td),rt=nd}catch(e){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jc,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yc(t))throw Error(i(200));return function(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:w,key:null==o?null:""+o,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Yc(e))throw Error(i(299));var n=!1,o="",r=Wc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(o=t.identifierPrefix),void 0!==t.onRecoverableError&&(r=t.onRecoverableError)),t=Mc(e,1,!1,null,0,n,0,o,r),e[fr]=t.current,jo(8===e.nodeType?e.parentNode:e),new Kc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return cc(e)},t.hydrate=function(e,t,n){if(!Gc(t))throw Error(i(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(i(405));var o=null!=n&&n.hydratedSources||null,r=!1,s="",a=Wc;if(null!=n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=Vc(t,null,e,1,null!=n?n:null,r,0,s,a),e[fr]=t.current,jo(e),o)for(e=0;e<o.length;e++)r=(r=(n=o[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Qc(t)},t.render=function(e,t,n){if(!Gc(t))throw Error(i(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gc(e))throw Error(i(40));return!!e._reactRootContainer&&(cc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[fr]=null}))})),!0)},t.unstable_batchedUpdates=lc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Gc(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Zc(e,t,n,!1,o)},t.version="18.3.1-next-f1338f8080-20240426"},29844:(e,t)=>{function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var o=n-1>>>1,r=e[o];if(!(0<i(r,t)))break e;e[o]=t,e[n]=r,n=o}}function o(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var o=0,r=e.length,s=r>>>1;o<s;){var a=2*(o+1)-1,l=e[a],c=a+1,d=e[c];if(0>i(l,n))c<r&&0>i(d,l)?(e[o]=d,e[c]=n,o=c):(e[o]=l,e[a]=n,o=a);else{if(!(c<r&&0>i(d,n)))break e;e[o]=d,e[c]=n,o=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],d=[],u=1,h=null,p=3,f=!1,v=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,b="function"==typeof clearTimeout?clearTimeout:null,y="undefined"!=typeof setImmediate?setImmediate:null;function _(e){for(var t=o(d);null!==t;){if(null===t.callback)r(d);else{if(!(t.startTime<=e))break;r(d),t.sortIndex=t.expirationTime,n(c,t)}t=o(d)}}function x(e){if(m=!1,_(e),!v)if(null!==o(c))v=!0,A(w);else{var t=o(d);null!==t&&N(x,t.startTime-e)}}function w(e,n){v=!1,m&&(m=!1,b(E),E=-1),f=!0;var i=p;try{for(_(n),h=o(c);null!==h&&(!(h.expirationTime>n)||e&&!I());){var s=h.callback;if("function"==typeof s){h.callback=null,p=h.priorityLevel;var a=s(h.expirationTime<=n);n=t.unstable_now(),"function"==typeof a?h.callback=a:h===o(c)&&r(c),_(n)}else r(c);h=o(c)}if(null!==h)var l=!0;else{var u=o(d);null!==u&&N(x,u.startTime-n),l=!1}return l}finally{h=null,p=i,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,C=!1,S=null,E=-1,P=5,$=-1;function I(){return!(t.unstable_now()-$<P)}function O(){if(null!==S){var e=t.unstable_now();$=e;var n=!0;try{n=S(!0,e)}finally{n?k():(C=!1,S=null)}}else C=!1}if("function"==typeof y)k=function(){y(O)};else if("undefined"!=typeof MessageChannel){var R=new MessageChannel,z=R.port2;R.port1.onmessage=O,k=function(){z.postMessage(null)}}else k=function(){g(O,0)};function A(e){S=e,C||(C=!0,k())}function N(e,n){E=g((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){v||f||(v=!0,A(w))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return o(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,r,i){var s=t.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?s+i:s,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return e={id:u++,callback:r,priorityLevel:e,startTime:i,expirationTime:a=i+a,sortIndex:-1},i>s?(e.sortIndex=i,n(d,e),null===o(c)&&e===o(d)&&(m?(b(E),E=-1):m=!0,N(x,i-s))):(e.sortIndex=a,n(c,e),v||f||(v=!0,A(w))),e},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},40961:(e,t,n)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(22551)},69982:(e,t,n)=>{e.exports=n(29844)},74848:(e,t,n)=>{e.exports=n(21020)},96540:(e,t,n)=>{e.exports=n(15287)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}var o=n(74848),r=n(5338),i=n(96540);const s=new Set(["children","localName","ref","style","className"]),a=new WeakMap,l=(e,t,n,o,r)=>{const i=r?.[t];void 0===i?(e[t]=n,null==n&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==o&&((e,t,n)=>{let o=a.get(e);void 0===o&&a.set(e,o=new Map);let r=o.get(t);void 0!==n?void 0===r?(o.set(t,r={handleEvent:n}),e.addEventListener(t,r)):r.handleEvent=n:void 0!==r&&(o.delete(t),e.removeEventListener(t,r))})(e,i,n)},c=({react:e,tagName:t,elementClass:n,events:o,displayName:r})=>{const i=new Set(Object.keys(o??{})),a=e.forwardRef(((r,a)=>{const c=e.useRef(new Map),d=e.useRef(null),u={},h={};for(const[e,t]of Object.entries(r))s.has(e)?u["className"===e?"class":e]=t:i.has(e)||e in n.prototype?h[e]=t:u[e]=t;return e.useLayoutEffect((()=>{if(null===d.current)return;const e=new Map;for(const t in h)l(d.current,t,r[t],c.current.get(t),o),c.current.delete(t),e.set(t,r[t]);for(const[e,t]of c.current)l(d.current,e,void 0,t,o);c.current=e})),e.useLayoutEffect((()=>{d.current?.removeAttribute("defer-hydration")}),[]),u.suppressHydrationWarning=!0,e.createElement(t,{...u,ref:e.useCallback((e=>{d.current=e,"function"==typeof a?a(e):null!==a&&(a.current=e)}),[a])})}));return a.displayName=r??n.name,a},d=globalThis,u=d.ShadowRoot&&(void 0===d.ShadyCSS||d.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,h=Symbol(),p=new WeakMap;class f{constructor(e,t,n){if(this._$cssResult$=!0,n!==h)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(u&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=p.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&p.set(t,e))}return e}toString(){return this.cssText}}const v=e=>new f("string"==typeof e?e:e+"",void 0,h),m=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1]),e[0]);return new f(n,e,h)},g=u?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return v(t)})(e):e,{is:b,defineProperty:y,getOwnPropertyDescriptor:_,getOwnPropertyNames:x,getOwnPropertySymbols:w,getPrototypeOf:k}=Object,C=globalThis,S=C.trustedTypes,E=S?S.emptyScript:"",P=C.reactiveElementPolyfillSupport,$=(e,t)=>e,I={toAttribute(e,t){switch(t){case Boolean:e=e?E:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},O=(e,t)=>!b(e,t),R={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:O};Symbol.metadata??=Symbol("metadata"),C.litPropertyMetadata??=new WeakMap;class z extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=R){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&y(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:r}=_(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const i=o?.call(this);r?.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??R}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const e=k(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const e=this.properties,t=[...x(e),...w(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(g(e))}else void 0!==e&&t.push(g(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(u)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of t){const t=document.createElement("style"),o=d.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=n.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const r=(void 0!==n.converter?.toAttribute?n.converter:I).toAttribute(t,n.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:I;this._$Em=o,this[o]=r.fromAttribute(t,e.type)??this._$Ej?.get(o)??null,this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){const o=this.constructor,r=this[e];if(n??=o.getPropertyOptions(e),!((n.hasChanged??O)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:r},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==r||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e){const{wrapped:e}=n,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,n,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}}z.elementStyles=[],z.shadowRootOptions={mode:"open"},z[$("elementProperties")]=new Map,z[$("finalized")]=new Map,P?.({ReactiveElement:z}),(C.reactiveElementVersions??=[]).push("2.1.0");const A=globalThis,N=A.trustedTypes,L=N?N.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+B,M=`<${D}>`,F=document,V=()=>F.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,H=e=>U(e)||"function"==typeof e?.[Symbol.iterator],q="[ \t\n\f\r]",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,Q=/>/g,Y=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,X=/"/g,Z=/^(?:script|style|textarea|title)$/i,J=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),ee=J(1),te=(J(2),J(3),Symbol.for("lit-noChange")),ne=Symbol.for("lit-nothing"),oe=new WeakMap,re=F.createTreeWalker(F,129);function ie(e,t){if(!U(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==L?L.createHTML(t):t}const se=(e,t)=>{const n=e.length-1,o=[];let r,i=2===t?"<svg>":3===t?"<math>":"",s=W;for(let t=0;t<n;t++){const n=e[t];let a,l,c=-1,d=0;for(;d<n.length&&(s.lastIndex=d,l=s.exec(n),null!==l);)d=s.lastIndex,s===W?"!--"===l[1]?s=K:void 0!==l[1]?s=Q:void 0!==l[2]?(Z.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=Y):void 0!==l[3]&&(s=Y):s===Y?">"===l[0]?(s=r??W,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?Y:'"'===l[3]?X:G):s===X||s===G?s=Y:s===K||s===Q?s=W:(s=Y,r=void 0);const u=s===Y&&e[t+1].startsWith("/>")?" ":"";i+=s===W?n+M:c>=0?(o.push(a),n.slice(0,c)+T+n.slice(c)+B+u):n+B+(-2===c?t:u)}return[ie(e,i+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class ae{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,i=0;const s=e.length-1,a=this.parts,[l,c]=se(e,t);if(this.el=ae.createElement(l,n),re.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=re.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(T)){const t=c[i++],n=o.getAttribute(e).split(B),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:r,name:s[2],strings:n,ctor:"."===s[1]?he:"?"===s[1]?pe:"@"===s[1]?fe:ue}),o.removeAttribute(e)}else e.startsWith(B)&&(a.push({type:6,index:r}),o.removeAttribute(e));if(Z.test(o.tagName)){const e=o.textContent.split(B),t=e.length-1;if(t>0){o.textContent=N?N.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],V()),re.nextNode(),a.push({type:2,index:++r});o.append(e[t],V())}}}else if(8===o.nodeType)if(o.data===D)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(B,e+1));)a.push({type:7,index:r}),e+=B.length-1}r++}}static createElement(e,t){const n=F.createElement("template");return n.innerHTML=e,n}}function le(e,t,n=e,o){if(t===te)return t;let r=void 0!==o?n._$Co?.[o]:n._$Cl;const i=j(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(e),r._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=r:n._$Cl=r),void 0!==r&&(t=le(e,r._$AS(e,t.values),r,o)),t}class ce{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??F).importNode(t,!0);re.currentNode=o;let r=re.nextNode(),i=0,s=0,a=n[0];for(;void 0!==a;){if(i===a.index){let t;2===a.type?t=new de(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new ve(r,this,e)),this._$AV.push(t),a=n[++s]}i!==a?.index&&(r=re.nextNode(),i++)}return re.currentNode=F,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class de{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=ne,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=le(this,e,t),j(e)?e===ne||null==e||""===e?(this._$AH!==ne&&this._$AR(),this._$AH=ne):e!==this._$AH&&e!==te&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):H(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ne&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=ae.createElement(ie(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new ce(o,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=oe.get(e.strings);return void 0===t&&oe.set(e.strings,t=new ae(e)),t}k(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const r of e)o===t.length?t.push(n=new de(this.O(V()),this.O(V()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ue{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,r){this.type=1,this._$AH=ne,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ne}_$AI(e,t=this,n,o){const r=this.strings;let i=!1;if(void 0===r)e=le(this,e,t,0),i=!j(e)||e!==this._$AH&&e!==te,i&&(this._$AH=e);else{const o=e;let s,a;for(e=r[0],s=0;s<r.length-1;s++)a=le(this,o[n+s],t,s),a===te&&(a=this._$AH[s]),i||=!j(a)||a!==this._$AH[s],a===ne?e=ne:e!==ne&&(e+=(a??"")+r[s+1]),this._$AH[s]=a}i&&!o&&this.j(e)}j(e){e===ne?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class he extends ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ne?void 0:e}}class pe extends ue{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ne)}}class fe extends ue{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){if((e=le(this,e,t,0)??ne)===te)return;const n=this._$AH,o=e===ne&&n!==ne||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==ne&&(n===ne||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ve{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){le(this,e)}}const me={M:T,P:B,A:D,C:1,L:se,R:ce,D:H,V:le,I:de,H:ue,N:pe,U:fe,B:he,F:ve},ge=A.litHtmlPolyfillSupport;ge?.(ae,de),(A.litHtmlVersions??=[]).push("3.3.0");const be=(e,t,n)=>{const o=n?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=n?.renderBefore??null;o._$litPart$=r=new de(t.insertBefore(V(),e),e,void 0,n??{})}return r._$AI(e),r},ye=globalThis;class _e extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=be(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return te}}_e._$litElement$=!0,_e.finalized=!0,ye.litElementHydrateSupport?.({LitElement:_e});const xe=ye.litElementPolyfillSupport;xe?.({LitElement:_e}),(ye.litElementVersions??=[]).push("4.2.0");const we={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:O},ke=(e=we,t,n)=>{const{kind:o,metadata:r}=n;let i=globalThis.litPropertyMetadata.get(r);if(void 0===i&&globalThis.litPropertyMetadata.set(r,i=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),"accessor"===o){const{name:o}=n;return{set(n){const r=t.get.call(this);t.set.call(this,n),this.requestUpdate(o,r,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=n;return function(n){const r=this[o];t.call(this,n),this.requestUpdate(o,r,e)}}throw Error("Unsupported decorator location: "+o)};function Ce(e){return(t,n)=>"object"==typeof n?ke(e,t,n):((e,t,n)=>{const o=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),o?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function Se(e){return Ce({...e,state:!0,attribute:!1})}const Ee=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,n),n);function Pe(e,t){return(n,o,r)=>{const i=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?n:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ee(n,o,{get(){let n=e.call(this);return void 0===n&&(n=i(this),(null!==n||this.hasUpdated)&&t.call(this,n)),n}})}return Ee(n,o,{get(){return i(this)}})}}let $e;function Ie(e){return(t,n)=>{const{slot:o,selector:r}=e??{},i="slot"+(o?`[name=${o}]`:":not([name])");return Ee(t,n,{get(){const t=this.renderRoot?.querySelector(i),n=t?.assignedElements(e)??[];return void 0===r?n:n.filter((e=>e.matches(r)))}})}}const Oe="1.16.1",Re="__vscodeElements_disableRegistryWarning__";class ze extends _e{get version(){return Oe}}const Ae=e=>t=>{if(!customElements.get(e))return void customElements.define(e,t);if(Re in window)return;const n=document.createElement(e),o=n?.version;let r="";o?o!==Oe?(r+="is already registered by a different version of VSCode Elements. ",r+=`This version is "${Oe}", while the other one is "${o}".`):r+="is already registered by the same version of VSCode Elements. ":(console.warn(e,"is already registered by an unknown custom element handler class."),r+="is already registered by an unknown custom element handler class."),console.warn(`[VSCode Elements] ${e} ${r}\nTo suppress this warning, set window.${Re} to true`)},Ne=m`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`;function Le(){return navigator.userAgent.indexOf("Linux")>-1?'system-ui, "Ubuntu", "Droid Sans", sans-serif':navigator.userAgent.indexOf("Mac")>-1?"-apple-system, BlinkMacSystemFont, sans-serif":navigator.userAgent.indexOf("Windows")>-1?'"Segoe WPC", "Segoe UI", sans-serif':"sans-serif"}const Te=[Ne,m`
    :host {
      background-color: var(--vscode-badge-background, #616161);
      border: 1px solid var(--vscode-contrastBorder, transparent);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      font-family: var(--vscode-font-family, ${v(Le())});
      font-size: 11px;
      font-weight: 400;
      line-height: 14px;
      min-width: 18px;
      padding: 2px 3px;
      text-align: center;
      white-space: nowrap;
    }

    :host([variant='counter']) {
      border-radius: 11px;
      line-height: 11px;
      min-height: 18px;
      min-width: 18px;
      padding: 3px 6px;
    }

    :host([variant='activity-bar-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 20px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      font-size: 9px;
      font-weight: 600;
      line-height: 16px;
      padding: 0 4px;
    }

    :host([variant='tab-header-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 10px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      line-height: 10px;
      min-height: 16px;
      min-width: 16px;
      padding: 3px 5px;
    }
  `];var Be=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let De=class extends ze{constructor(){super(...arguments),this.variant="default"}render(){return ee` <slot></slot> `}};De.styles=Te,Be([Ce({reflect:!0})],De.prototype,"variant",void 0),De=Be([Ae("vscode-badge")],De),c({tagName:"vscode-badge",elementClass:De,react:i,displayName:"VscodeBadge"});const Me=e=>(...t)=>({_$litDirective$:e,values:t});class Fe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Ve=Me(class extends Fe{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const n=e.element.classList;for(const e of this.st)e in t||(n.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return te}}),je=e=>e??ne,Ue=Me(class extends Fe{constructor(e){if(super(e),this._prevProperties={},3!==e.type||"style"!==e.name)throw new Error("The `stylePropertyMap` directive must be used in the `style` property")}update(e,[t]){return Object.entries(t).forEach((([t,n])=>{this._prevProperties[t]!==n&&(t.startsWith("--")?e.element.style.setProperty(t,n):e.element.style[t]=n,this._prevProperties[t]=n)})),te}render(e){return te}}),He=[Ne,m`
    :host {
      color: var(--vscode-icon-foreground, #cccccc);
      display: inline-block;
    }

    .codicon[class*='codicon-'] {
      display: block;
    }

    .icon,
    .button {
      background-color: transparent;
      display: block;
      padding: 0;
    }

    .button {
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      color: currentColor;
      cursor: pointer;
      padding: 2px;
    }

    .button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
    }

    .button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    .button:focus {
      outline: none;
    }

    .button:focus-visible {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    @keyframes icon-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation-name: icon-spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `];var qe,We=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Ke=qe=class extends ze{constructor(){super(...arguments),this.label="",this.name="",this.size=16,this.spin=!1,this.spinDuration=1.5,this.actionIcon=!1,this._onButtonClick=e=>{this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}}))}}connectedCallback(){super.connectedCallback();const{href:e,nonce:t}=this._getStylesheetConfig();qe.stylesheetHref=e,qe.nonce=t}_getStylesheetConfig(){const e=document.getElementById("vscode-codicon-stylesheet"),t=e?.getAttribute("href")||void 0,n=e?.nonce||void 0;if(!e){let e="[VSCode Elements] To use the Icon component, the codicons.css file must be included in the page with the id `vscode-codicon-stylesheet`! ";e+="See https://vscode-elements.github.io/components/icon/ for more details.",console.warn(e)}return{nonce:n,href:t}}render(){const{stylesheetHref:e,nonce:t}=qe,n=ee`<span
      class=${Ve({codicon:!0,["codicon-"+this.name]:!0,spin:this.spin})}
      .style=${Ue({animationDuration:String(this.spinDuration)+"s",fontSize:this.size+"px",height:this.size+"px",width:this.size+"px"})}
    ></span>`,o=this.actionIcon?ee` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${n}
        </button>`:ee` <span class="icon" aria-hidden="true" role="presentation"
          >${n}</span
        >`;return ee`
      <link
        rel="stylesheet"
        href=${je(e)}
        nonce=${je(t)}
      >
      ${o}
    `}};Ke.styles=He,Ke.stylesheetHref="",Ke.nonce="",We([Ce()],Ke.prototype,"label",void 0),We([Ce({type:String})],Ke.prototype,"name",void 0),We([Ce({type:Number})],Ke.prototype,"size",void 0),We([Ce({type:Boolean,reflect:!0})],Ke.prototype,"spin",void 0),We([Ce({type:Number,attribute:"spin-duration"})],Ke.prototype,"spinDuration",void 0),We([Ce({type:Boolean,reflect:!0,attribute:"action-icon"})],Ke.prototype,"actionIcon",void 0),Ke=qe=We([Ae("vscode-icon")],Ke);const Qe=[Ne,m`
    :host {
      background-color: var(--vscode-button-background, #0078d4);
      border-color: var(--vscode-button-border, transparent);
      border-style: solid;
      border-radius: 2px;
      border-width: 1px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      display: inline-flex;
      font-family: var(--vscode-font-family, ${v(Le())});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 22px;
      overflow: hidden;
      padding: 0;
      user-select: none;
      white-space: nowrap;
    }

    :host([secondary]) {
      color: var(--vscode-button-secondaryForeground, #cccccc);
      background-color: var(--vscode-button-secondaryBackground, #313131);
      border-color: var(
        --vscode-button-border,
        var(--vscode-button-secondaryBackground, rgba(255, 255, 255, 0.07))
      );
    }

    :host([disabled]) {
      cursor: default;
      opacity: 0.4;
      pointer-events: none;
    }

    :host(:hover) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([disabled]:hover) {
      background-color: var(--vscode-button-background, #0078d4);
    }

    :host([secondary]:hover) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:hover) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host(:focus),
    :host(:active) {
      outline: none;
    }

    :host(:focus) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: 2px;
    }

    :host([disabled]:focus) {
      background-color: var(--vscode-button-background, #0078d4);
      outline: 0;
    }

    :host([secondary]:focus) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:focus) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    ::slotted(*) {
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
    }

    ::slotted(*:first-child) {
      margin-left: 0;
    }

    ::slotted(*:last-child) {
      margin-right: 0;
    }

    ::slotted(vscode-icon) {
      color: inherit;
    }

    .wrapper {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 100%;
      padding: 1px 13px;
    }

    :host(:empty) .wrapper,
    :host([icon-only]) .wrapper {
      min-height: 24px;
      min-width: 16px;
      padding: 1px 5px;
    }

    slot {
      align-items: center;
      display: flex;
      height: 100%;
    }

    .icon,
    .icon-after {
      color: inherit;
      display: block;
    }

    :host(:not(:empty)) .icon {
      margin-right: 3px;
    }

    :host(:not(:empty)) .icon-after,
    :host([icon]) .icon-after {
      margin-left: 3px;
    }

    .divider {
      display: var(--divider-display, none);
      background-color: transparent;
      padding: 4px 0;
      box-sizing: border-box;
    }

    :host(:hover) .divider,
    :host(:focus) .divider {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([secondary]) .divider {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host([secondary]:hover) .divider,
    :host([secondary]:focus) .divider {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    .divider > div {
      background-color: var(
        --vscode-button-separator,
        rgba(255, 255, 255, 0.4)
      );
      height: 100%;
      width: 1px;
      margin: 0;
    }

    :host([secondary]) .divider > div {
      background-color: var(--vscode-button-secondaryForeground, #cccccc);
      opacity: 0.4;
    }
  `];var Ye=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Ge=class extends ze{get form(){return this._internals.form}constructor(){super(),this.autofocus=!1,this.tabIndex=0,this.secondary=!1,this.role="button",this.disabled=!1,this.icon="",this.iconSpin=!1,this.iconAfter="",this.iconAfterSpin=!1,this.focused=!1,this.name=void 0,this.iconOnly=!1,this.type="button",this.value="",this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this)),this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.autofocus&&(this.tabIndex<0&&(this.tabIndex=0),this.updateComplete.then((()=>{this.focus(),this.requestUpdate()}))),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}update(e){super.update(e),e.has("value")&&this._internals.setFormValue(this.value),e.has("disabled")&&(this.disabled?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):this.tabIndex=this._prevTabindex)}_executeAction(){"submit"===this.type&&this._internals.form&&this._internals.form.requestSubmit(),"reset"===this.type&&this._internals.form&&this._internals.form.reset()}_handleKeyDown(e){if(("Enter"===e.key||" "===e.key)&&!this.hasAttribute("disabled")){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:new MouseEvent("click")}}));const e=new MouseEvent("click",{bubbles:!0,cancelable:!0});e.synthetic=!0,this.dispatchEvent(e),this._executeAction()}}_handleClick(e){e.synthetic||this.hasAttribute("disabled")||(this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}})),this._executeAction())}render(){const e=""!==this.icon,t=""!==this.iconAfter,n={wrapper:!0,"has-icon-before":e,"has-icon-after":t,"icon-only":this.iconOnly},o=e?ee`<vscode-icon
          name=${this.icon}
          ?spin=${this.iconSpin}
          spin-duration=${je(this.iconSpinDuration)}
          class="icon"
        ></vscode-icon>`:ne,r=t?ee`<vscode-icon
          name=${this.iconAfter}
          ?spin=${this.iconAfterSpin}
          spin-duration=${je(this.iconAfterSpinDuration)}
          class="icon-after"
        ></vscode-icon>`:ne;return ee`
      <span class=${Ve(n)}>
        ${o}
        <slot></slot>
        ${r}
      </span>
      <div class="divider"><div></div></div>
    `}};Ge.styles=Qe,Ge.formAssociated=!0,Ye([Ce({type:Boolean,reflect:!0})],Ge.prototype,"autofocus",void 0),Ye([Ce({type:Number,reflect:!0})],Ge.prototype,"tabIndex",void 0),Ye([Ce({type:Boolean,reflect:!0})],Ge.prototype,"secondary",void 0),Ye([Ce({reflect:!0})],Ge.prototype,"role",void 0),Ye([Ce({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),Ye([Ce()],Ge.prototype,"icon",void 0),Ye([Ce({type:Boolean,reflect:!0,attribute:"icon-spin"})],Ge.prototype,"iconSpin",void 0),Ye([Ce({type:Number,reflect:!0,attribute:"icon-spin-duration"})],Ge.prototype,"iconSpinDuration",void 0),Ye([Ce({attribute:"icon-after"})],Ge.prototype,"iconAfter",void 0),Ye([Ce({type:Boolean,reflect:!0,attribute:"icon-after-spin"})],Ge.prototype,"iconAfterSpin",void 0),Ye([Ce({type:Number,reflect:!0,attribute:"icon-after-spin-duration"})],Ge.prototype,"iconAfterSpinDuration",void 0),Ye([Ce({type:Boolean,reflect:!0})],Ge.prototype,"focused",void 0),Ye([Ce({type:String,reflect:!0})],Ge.prototype,"name",void 0),Ye([Ce({type:Boolean,reflect:!0,attribute:"icon-only"})],Ge.prototype,"iconOnly",void 0),Ye([Ce({reflect:!0})],Ge.prototype,"type",void 0),Ye([Ce()],Ge.prototype,"value",void 0),Ge=Ye([Ae("vscode-button")],Ge);const Xe=c({tagName:"vscode-button",elementClass:Ge,react:i,displayName:"VscodeButton"});class Ze extends ze{constructor(){super(),this.focused=!1,this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1}}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"disabled"===e&&this.hasAttribute("disabled")?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):"disabled"!==e||this.hasAttribute("disabled")||(this.tabIndex=this._prevTabindex)}}!function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);i>3&&s&&Object.defineProperty(t,n,s)}([Ce({type:Boolean,reflect:!0})],Ze.prototype,"focused",void 0);const Je=e=>{class t extends e{constructor(){super(...arguments),this._label="",this._slottedText=""}set label(e){this._label=e,""===this._slottedText&&this.setAttribute("aria-label",e)}get label(){return this._label}_handleSlotChange(){this._slottedText=this.textContent?this.textContent.trim():"",""!==this._slottedText&&this.setAttribute("aria-label",this._slottedText)}_renderLabelAttribute(){return""===this._slottedText?ee`<span class="label-attr">${this._label}</span>`:ee`${ne}`}}return function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);i>3&&s&&Object.defineProperty(t,n,s)}([Ce()],t.prototype,"label",null),t},et=[m`
    :host {
      color: var(--vscode-foreground, #cccccc);
      display: inline-block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
    }

    :host(:focus) {
      outline: none;
    }

    :host([disabled]) {
      opacity: 0.4;
    }

    .wrapper {
      cursor: pointer;
      display: block;
      font-size: var(--vscode-font-size, 13px);
      margin-bottom: 4px;
      margin-top: 4px;
      min-height: 18px;
      position: relative;
      user-select: none;
    }

    :host([disabled]) .wrapper {
      cursor: default;
    }

    input {
      position: absolute;
      height: 1px;
      left: 9px;
      margin: 0;
      top: 17px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap;
    }

    .icon {
      align-items: center;
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      background-size: 16px;
      border: 1px solid var(--vscode-settings-checkboxBorder, #3c3c3c);
      box-sizing: border-box;
      color: var(--vscode-settings-checkboxForeground, #cccccc);
      display: flex;
      height: 18px;
      justify-content: center;
      left: 0;
      margin-left: 0;
      margin-right: 9px;
      padding: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 18px;
    }

    .icon.before-empty-label {
      margin-right: 0;
    }

    .label {
      cursor: pointer;
      display: block;
      min-height: 18px;
      min-width: 18px;
    }

    .label-inner {
      display: block;
      opacity: 0.9;
      padding-left: 27px;
    }

    .label-inner.empty {
      padding-left: 0;
    }

    :host([disabled]) .label {
      cursor: default;
    }
  `],tt=[Ne,et,m`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 3px;
    }

    .indeterminate-icon {
      background-color: currentColor;
      position: absolute;
      height: 1px;
      width: 12px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var nt=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let ot=class extends(Je(Ze)){set checked(e){this._checked=e,this._manageRequired(),this.requestUpdate()}get checked(){return this._checked}set required(e){this._required=e,this._manageRequired(),this.requestUpdate()}get required(){return this._required}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.autofocus=!1,this._checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name=void 0,this.value="",this.disabled=!1,this.indeterminate=!1,this._required=!1,this.type="checkbox",this._handleClick=e=>{e.preventDefault(),this.disabled||this._toggleState()},this._handleKeyDown=e=>{this.disabled||"Enter"!==e.key&&" "!==e.key||(e.preventDefault()," "===e.key&&this._toggleState(),"Enter"===e.key&&this._internals.form?.requestSubmit())},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.updateComplete.then((()=>{this._manageRequired(),this._setActualFormValue()}))}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeyDown)}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=this.checked?"true":"false")}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(e,t){e&&(this.checked=!0)}_setActualFormValue(){let e="";e=this.checked?this.value?this.value:"on":null,this._internals.setFormValue(e)}_toggleState(){this.checked=!this.checked,this.indeterminate=!1,this._setActualFormValue(),this._manageRequired(),this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_manageRequired(){!this.checked&&this.required?this._internals.setValidity({valueMissing:!0},"Please check this box if you want to proceed.",this._inputEl??void 0):this._internals.setValidity({})}render(){const e=Ve({icon:!0,checked:this.checked,indeterminate:this.indeterminate}),t=Ve({"label-inner":!0}),n=ee`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="check-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
      />
    </svg>`,o=this.checked&&!this.indeterminate?n:ne,r=this.indeterminate?ee`<span class="indeterminate-icon"></span>`:ne;return ee`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="checkbox"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
        >
        <div class=${e}>${r}${o}</div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${t}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};ot.styles=tt,ot.formAssociated=!0,ot.shadowRootOptions={..._e.shadowRootOptions,delegatesFocus:!0},nt([Ce({type:Boolean,reflect:!0})],ot.prototype,"autofocus",void 0),nt([Ce({type:Boolean,reflect:!0})],ot.prototype,"checked",null),nt([Ce({type:Boolean,reflect:!0,attribute:"default-checked"})],ot.prototype,"defaultChecked",void 0),nt([Ce({type:Boolean,reflect:!0})],ot.prototype,"invalid",void 0),nt([Ce({reflect:!0})],ot.prototype,"name",void 0),nt([Ce()],ot.prototype,"value",void 0),nt([Ce({type:Boolean,reflect:!0})],ot.prototype,"disabled",void 0),nt([Ce({type:Boolean,reflect:!0})],ot.prototype,"indeterminate",void 0),nt([Ce({type:Boolean,reflect:!0})],ot.prototype,"required",null),nt([Ce()],ot.prototype,"type",void 0),nt([Pe("#input")],ot.prototype,"_inputEl",void 0),ot=nt([Ae("vscode-checkbox")],ot),c({tagName:"vscode-checkbox",elementClass:ot,react:i,displayName:"VscodeCheckbox",events:{onChange:"change"}});const rt=[Ne,m`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-checkbox) {
      margin-right: 20px;
    }

    ::slotted(vscode-checkbox:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox:last-child) {
      margin-bottom: 0;
    }
  `];var it=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let st=class extends ze{constructor(){super(...arguments),this.role="group",this.variant="horizontal"}render(){return ee`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};st.styles=rt,it([Ce({reflect:!0})],st.prototype,"role",void 0),it([Ce({reflect:!0})],st.prototype,"variant",void 0),st=it([Ae("vscode-checkbox-group")],st),c({tagName:"vscode-checkbox-group",elementClass:st,react:i,displayName:"VscodeCheckboxGroup"});const at=[Ne,m`
    .collapsible {
      background-color: var(--vscode-sideBar-background, #181818);
    }

    .collapsible-header {
      align-items: center;
      background-color: var(--vscode-sideBarSectionHeader-background, #181818);
      cursor: pointer;
      display: flex;
      height: 22px;
      line-height: 22px;
      user-select: none;
    }

    .collapsible-header:focus {
      opacity: 1;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
      outline-color: var(--vscode-focusBorder, #0078d4);
    }

    .title {
      color: var(--vscode-sideBarTitle-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: 11px;
      font-weight: 700;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .title .description {
      font-weight: 400;
      margin-left: 10px;
      text-transform: none;
      opacity: 0.6;
    }

    .header-icon {
      color: var(--vscode-icon-foreground, #cccccc);
      display: block;
      flex-shrink: 0;
      margin: 0 3px;
    }

    .collapsible.open .header-icon {
      transform: rotate(90deg);
    }

    .header-slots {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: auto;
      margin-right: 4px;
    }

    .actions {
      display: none;
    }

    .collapsible.open .actions {
      display: block;
    }

    .header-slots slot {
      display: flex;
      max-height: 22px;
      overflow: hidden;
    }

    .header-slots slot::slotted(div) {
      align-items: center;
      display: flex;
    }

    .collapsible-body {
      display: none;
      overflow: hidden;
    }

    .collapsible.open .collapsible-body {
      display: block;
    }
  `];var lt=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let ct=class extends ze{constructor(){super(...arguments),this.title="",this.description="",this.open=!1}_emitToggleEvent(){this.dispatchEvent(new CustomEvent("vsc-collapsible-toggle",{detail:{open:this.open}}))}_onHeaderClick(){this.open=!this.open,this._emitToggleEvent()}_onHeaderKeyDown(e){"Enter"===e.key&&(this.open=!this.open,this._emitToggleEvent())}render(){const e=Ve({collapsible:!0,open:this.open}),t=ee`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="header-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
      />
    </svg>`,n=this.description?ee`<span class="description">${this.description}</span>`:ne;return ee`
      <div class=${e}>
        <div
          class="collapsible-header"
          tabindex="0"
          title=${this.title}
          @click=${this._onHeaderClick}
          @keydown=${this._onHeaderKeyDown}
        >
          ${t}
          <h3 class="title">${this.title}${n}</h3>
          <div class="header-slots">
            <div class="actions"><slot name="actions"></slot></div>
            <div class="decorations"><slot name="decorations"></slot></div>
          </div>
        </div>
        <div class="collapsible-body" part="body">
          <slot></slot>
        </div>
      </div>
    `}};ct.styles=at,lt([Ce({type:String})],ct.prototype,"title",void 0),lt([Ce()],ct.prototype,"description",void 0),lt([Ce({type:Boolean,reflect:!0})],ct.prototype,"open",void 0),ct=lt([Ae("vscode-collapsible")],ct),c({tagName:"vscode-collapsible",elementClass:ct,react:i,displayName:"VscodeCollapsible"});const dt=[Ne,m`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      outline: none;
      position: relative;
    }

    .context-menu-item {
      background-color: var(--vscode-menu-background, #1f1f1f);
      color: var(--vscode-menu-foreground, #cccccc);
      display: flex;
      user-select: none;
      white-space: nowrap;
    }

    .ruler {
      border-bottom: 1px solid var(--vscode-menu-separatorBackground, #454545);
      display: block;
      margin: 0 0 4px;
      padding-top: 4px;
      width: 100%;
    }

    .context-menu-item a {
      align-items: center;
      border-color: transparent;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-menu-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex: 1 1 auto;
      height: 2em;
      margin-left: 4px;
      margin-right: 4px;
      outline: none;
      position: relative;
      text-decoration: inherit;
    }

    :host([selected]) .context-menu-item a {
      background-color: var(--vscode-menu-selectionBackground, #0078d4);
      border-color: var(--vscode-menu-selectionBorder, transparent);
      color: var(--vscode-menu-selectionForeground, #ffffff);
    }

    .label {
      background: none;
      display: flex;
      flex: 1 1 auto;
      font-size: 12px;
      line-height: 1;
      padding: 0 22px;
      text-decoration: none;
    }

    .keybinding {
      display: block;
      flex: 2 1 auto;
      line-height: 1;
      padding: 0 22px;
      text-align: right;
    }
  `];var ut=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let ht=class extends ze{constructor(){super(...arguments),this.label="",this.keybinding="",this.value="",this.separator=!1,this.tabindex=0}onItemClick(){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{label:this.label,keybinding:this.keybinding,value:this.value||this.label,separator:this.separator,tabindex:this.tabindex},bubbles:!0,composed:!0}))}render(){return ee`
      ${this.separator?ee`
            <div class="context-menu-item separator">
              <span class="ruler"></span>
            </div>
          `:ee`
            <div class="context-menu-item">
              <a @click=${this.onItemClick}>
                ${this.label?ee`<span class="label">${this.label}</span>`:ne}
                ${this.keybinding?ee`<span class="keybinding">${this.keybinding}</span>`:ne}
              </a>
            </div>
          `}
    `}};ht.styles=dt,ut([Ce({type:String})],ht.prototype,"label",void 0),ut([Ce({type:String})],ht.prototype,"keybinding",void 0),ut([Ce({type:String})],ht.prototype,"value",void 0),ut([Ce({type:Boolean,reflect:!0})],ht.prototype,"separator",void 0),ut([Ce({type:Number})],ht.prototype,"tabindex",void 0),ht=ut([Ae("vscode-context-menu-item")],ht);const pt=[Ne,m`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      position: relative;
    }

    .context-menu {
      background-color: var(--vscode-menu-background, #1f1f1f);
      border-color: var(--vscode-menu-border, #454545);
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      box-shadow: 0 2px 8px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.36));
      color: var(--vscode-menu-foreground, #cccccc);
      padding: 4px 0;
      white-space: nowrap;
    }

    .context-menu:focus {
      outline: 0;
    }
  `];var ft=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let vt=class extends ze{set data(e){this._data=e;const t=[];e.forEach(((e,n)=>{e.separator||t.push(n)})),this._clickableItemIndexes=t}get data(){return this._data}set show(e){this._show=e,this._selectedClickableItemIndex=-1,e&&this.updateComplete.then((()=>{this._wrapperEl&&this._wrapperEl.focus(),requestAnimationFrame((()=>{document.addEventListener("click",this._onClickOutsideBound,{once:!0})}))}))}get show(){return this._show}constructor(){super(),this.preventClose=!1,this.tabIndex=0,this._selectedClickableItemIndex=-1,this._show=!1,this._data=[],this._clickableItemIndexes=[],this._onClickOutsideBound=this._onClickOutside.bind(this),this.addEventListener("keydown",this._onKeyDown)}_onClickOutside(e){e.composedPath().includes(this)||(this.show=!1)}_onKeyDown(e){const{key:t}=e;switch("ArrowUp"!==t&&"ArrowDown"!==t&&"Escape"!==t&&"Enter"!==t||e.preventDefault(),t){case"ArrowUp":this._handleArrowUp();break;case"ArrowDown":this._handleArrowDown();break;case"Escape":this._handleEscape();break;case"Enter":this._handleEnter()}}_handleArrowUp(){0===this._selectedClickableItemIndex?this._selectedClickableItemIndex=this._clickableItemIndexes.length-1:this._selectedClickableItemIndex-=1}_handleArrowDown(){this._selectedClickableItemIndex+1<this._clickableItemIndexes.length?this._selectedClickableItemIndex+=1:this._selectedClickableItemIndex=0}_handleEscape(){this.show=!1,document.removeEventListener("click",this._onClickOutsideBound)}_dispatchSelectEvent(e){const{keybinding:t,label:n,value:o,separator:r,tabindex:i}=e;this.dispatchEvent(new CustomEvent("vsc-context-menu-select",{detail:{keybinding:t,label:n,separator:r,tabindex:i,value:o}}))}_dispatchLegacySelectEvent(e){const{keybinding:t,label:n,value:o,separator:r,tabindex:i}=e,s={keybinding:t,label:n,value:o,separator:r,tabindex:i};this.dispatchEvent(new CustomEvent("vsc-select",{detail:s,bubbles:!0,composed:!0}))}_handleEnter(){if(-1===this._selectedClickableItemIndex)return;const e=this._clickableItemIndexes[this._selectedClickableItemIndex],t=this._wrapperEl.querySelectorAll("vscode-context-menu-item")[e];this._dispatchLegacySelectEvent(t),this._dispatchSelectEvent(t),this.preventClose||(this.show=!1,document.removeEventListener("click",this._onClickOutsideBound))}_onItemClick(e){const t=e.currentTarget;this._dispatchLegacySelectEvent(t),this._dispatchSelectEvent(t),this.preventClose||(this.show=!1)}_onItemMouseOver(e){const t=e.target,n=t.dataset.index?+t.dataset.index:-1,o=this._clickableItemIndexes.findIndex((e=>e===n));-1!==o&&(this._selectedClickableItemIndex=o)}_onItemMouseOut(){this._selectedClickableItemIndex=-1}render(){if(!this._show)return ee`${ne}`;const e=this._clickableItemIndexes[this._selectedClickableItemIndex];return ee`
      <div class="context-menu" tabindex="0">
        ${this.data?this.data.map((({label:t="",keybinding:n="",value:o="",separator:r=!1,tabindex:i=0},s)=>ee`
                <vscode-context-menu-item
                  label=${t}
                  keybinding=${n}
                  value=${o}
                  ?separator=${r}
                  ?selected=${s===e}
                  tabindex=${i}
                  @vsc-click=${this._onItemClick}
                  @mouseover=${this._onItemMouseOver}
                  @mouseout=${this._onItemMouseOut}
                  data-index=${s}
                ></vscode-context-menu-item>
              `)):ee`<slot></slot>`}
      </div>
    `}};vt.styles=pt,ft([Ce({type:Array,attribute:!1})],vt.prototype,"data",null),ft([Ce({type:Boolean,reflect:!0,attribute:"prevent-close"})],vt.prototype,"preventClose",void 0),ft([Ce({type:Boolean,reflect:!0})],vt.prototype,"show",null),ft([Ce({type:Number,reflect:!0})],vt.prototype,"tabIndex",void 0),ft([Se()],vt.prototype,"_selectedClickableItemIndex",void 0),ft([Se()],vt.prototype,"_show",void 0),ft([Pe(".context-menu")],vt.prototype,"_wrapperEl",void 0),vt=ft([Ae("vscode-context-menu")],vt),c({tagName:"vscode-context-menu",elementClass:vt,react:i,displayName:"VscodeContextMenu",events:{onVscContextMenuSelect:"vsc-context-menu-select"}}),c({tagName:"vscode-context-menu-item",elementClass:ht,react:i,displayName:"VscodeContextMenuItem"});const mt=[Ne,m`
    :host {
      background-color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 1px;
      margin-bottom: 10px;
      margin-top: 10px;
      opacity: 0.4;
    }
  `];var gt=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let bt=class extends ze{constructor(){super(...arguments),this.role="separator"}render(){return ee``}};bt.styles=mt,gt([Ce({reflect:!0})],bt.prototype,"role",void 0),bt=gt([Ae("vscode-divider")],bt),c({tagName:"vscode-divider",elementClass:bt,react:i,displayName:"VscodeDivider"});const yt=[Ne,m`
    :host {
      display: block;
      max-width: 727px;
    }
  `];var _t,xt=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};!function(e){e.HORIZONTAL="horizontal",e.VERTICAL="vertical"}(_t||(_t={}));const wt=e=>"vscode-checkbox"===e.tagName.toLocaleLowerCase(),kt=e=>"vscode-radio"===e.tagName.toLocaleLowerCase();let Ct=class extends ze{constructor(){super(...arguments),this.breakpoint=490,this._responsive=!1,this._firstUpdateComplete=!1,this._resizeObserverCallbackBound=this._resizeObserverCallback.bind(this)}set responsive(e){this._responsive=e,this._firstUpdateComplete&&(e?this._activateResponsiveLayout():this._deactivateResizeObserver())}get responsive(){return this._responsive}get data(){return this._collectFormData()}_collectFormData(){const e=["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select","vscode-checkbox","vscode-radio"].join(","),t=this.querySelectorAll(e),n={};return t.forEach((e=>{if(!e.hasAttribute("name"))return;const t=e.getAttribute("name");t&&(wt(e)&&e.checked?n[t]=Array.isArray(n[t])?[...n[t],e.value]:[e.value]:"vscode-multi-select"===e.tagName.toLocaleLowerCase()?n[t]=e.value:wt(e)&&!e.checked?n[t]=Array.isArray(n[t])?n[t]:[]:kt(e)&&e.checked||["vscode-textfield","vscode-textarea"].includes(e.tagName.toLocaleLowerCase())||(e=>"vscode-single-select"===e.tagName.toLocaleLowerCase())(e)?n[t]=e.value:kt(e)&&!e.checked&&(n[t]=n[t]?n[t]:""))})),n}_toggleCompactLayout(e){this._assignedFormGroups.forEach((t=>{t.dataset.originalVariant||(t.dataset.originalVariant=t.variant);const n=t.dataset.originalVariant;e===_t.VERTICAL&&"horizontal"===n?t.variant="vertical":t.variant=n,t.querySelectorAll("vscode-checkbox-group, vscode-radio-group").forEach((t=>{t.dataset.originalVariant||(t.dataset.originalVariant=t.variant);const n=t.dataset.originalVariant;e===_t.HORIZONTAL&&n===_t.HORIZONTAL?t.variant="horizontal":t.variant="vertical"}))}))}_resizeObserverCallback(e){let t=0;for(const n of e)t=n.contentRect.width;const n=t<this.breakpoint?_t.VERTICAL:_t.HORIZONTAL;n!==this._currentFormGroupLayout&&(this._toggleCompactLayout(n),this._currentFormGroupLayout=n)}_activateResponsiveLayout(){this._resizeObserver=new ResizeObserver(this._resizeObserverCallbackBound),this._resizeObserver.observe(this._wrapperElement)}_deactivateResizeObserver(){this._resizeObserver?.disconnect(),this._resizeObserver=null}firstUpdated(){this._firstUpdateComplete=!0,this._responsive&&this._activateResponsiveLayout()}render(){return ee`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Ct.styles=yt,xt([Ce({type:Boolean,reflect:!0})],Ct.prototype,"responsive",null),xt([Ce({type:Number})],Ct.prototype,"breakpoint",void 0),xt([Ce({type:Object})],Ct.prototype,"data",null),xt([Pe(".wrapper")],Ct.prototype,"_wrapperElement",void 0),xt([Ie({selector:"vscode-form-group"})],Ct.prototype,"_assignedFormGroups",void 0),Ct=xt([Ae("vscode-form-container")],Ct);const St=c({tagName:"vscode-form-container",elementClass:Ct,react:i,displayName:"VscodeFormContainer"}),Et=[Ne,m`
    :host {
      --label-right-margin: 14px;
      --label-width: 150px;

      display: block;
      margin: 15px 0;
    }

    :host([variant='settings-group']) {
      margin: 0;
      padding: 12px 14px 18px;
      max-width: 727px;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper,
    :host([variant='settings-group']) .wrapper {
      display: block;
    }

    :host([variant='horizontal']) ::slotted(vscode-checkbox-group),
    :host([variant='horizontal']) ::slotted(vscode-radio-group) {
      width: calc(100% - calc(var(--label-width) + var(--label-right-margin)));
    }

    :host([variant='horizontal']) ::slotted(vscode-label) {
      margin-right: var(--label-right-margin);
      text-align: right;
      width: var(--label-width);
    }

    :host([variant='settings-group']) ::slotted(vscode-label) {
      height: 18px;
      line-height: 18px;
      margin-bottom: 4px;
      margin-right: 0;
      padding: 0;
    }

    ::slotted(vscode-form-helper) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-form-helper),
    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      display: block;
      margin-left: 0;
    }

    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      margin-bottom: 0;
      margin-top: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-label),
    :host([variant='settings-group']) ::slotted(vscode-label) {
      display: block;
      margin-left: 0;
      text-align: left;
    }

    :host([variant='settings-group']) ::slotted(vscode-inputbox),
    :host([variant='settings-group']) ::slotted(vscode-textfield),
    :host([variant='settings-group']) ::slotted(vscode-textarea),
    :host([variant='settings-group']) ::slotted(vscode-single-select),
    :host([variant='settings-group']) ::slotted(vscode-multi-select) {
      margin-top: 9px;
    }

    ::slotted(vscode-button:first-child) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-button) {
      margin-left: 0;
    }

    ::slotted(vscode-button) {
      margin-right: 4px;
    }
  `];var Pt=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let $t=class extends ze{constructor(){super(...arguments),this.variant="horizontal"}render(){return ee`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};$t.styles=Et,Pt([Ce({reflect:!0})],$t.prototype,"variant",void 0),$t=Pt([Ae("vscode-form-group")],$t);const It=c({tagName:"vscode-form-group",elementClass:$t,react:i,displayName:"VscodeFormGroup"}),Ot=[Ne,m`
    :host {
      display: block;
      line-height: 1.4em;
      margin-bottom: 4px;
      margin-top: 4px;
      max-width: 720px;
      opacity: 0.9;
    }

    :host([vertical]) {
      margin-left: 0;
    }
  `];const Rt=new CSSStyleSheet;Rt.replaceSync("\n  vscode-form-helper * {\n    margin: 0;\n  }\n\n  vscode-form-helper *:not(:last-child) {\n    margin-bottom: 8px;\n  }\n");let zt=class extends ze{constructor(){super(),this._injectLightDOMStyles()}_injectLightDOMStyles(){const e=document.adoptedStyleSheets.find((e=>e===Rt));e||document.adoptedStyleSheets.push(Rt)}render(){return ee`<slot></slot>`}};zt.styles=Ot,zt=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}([Ae("vscode-form-helper")],zt);const At=c({tagName:"vscode-form-helper",elementClass:zt,react:i,displayName:"VscodeFormHelper"}),Nt=c({tagName:"vscode-icon",elementClass:Ke,react:i,displayName:"VscodeIcon"});let Lt=0;const Tt=(e="")=>(Lt++,`${e}${Lt}`),Bt=[Ne,m`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-radio) {
      margin-right: 20px;
    }

    ::slotted(vscode-radio:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-radio) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-radio:last-child) {
      margin-bottom: 0;
    }
  `];var Dt=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Mt=class extends ze{constructor(){super(...arguments),this.variant="horizontal",this.role="radiogroup",this._focusedRadio=-1,this._checkedRadio=-1,this._firstContentLoaded=!1,this._onKeyDownBound=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeyDownBound)}_uncheckPreviousChecked(e,t){-1!==e&&(this._radios[e].checked=!1),-1!==t&&(this._radios[t].tabIndex=-1)}_afterCheck(){this._focusedRadio=this._checkedRadio,this._radios[this._checkedRadio].checked=!0,this._radios[this._checkedRadio].tabIndex=0,this._radios[this._checkedRadio].focus()}_checkPrev(){const e=this._radios.findIndex((e=>e.checked)),t=this._radios.findIndex((e=>e.focused)),n=-1!==t?t:e;this._uncheckPreviousChecked(e,t),this._checkedRadio=-1===n?this._radios.length-1:n-1>=0?n-1:this._radios.length-1,this._afterCheck()}_checkNext(){const e=this._radios.findIndex((e=>e.checked)),t=this._radios.findIndex((e=>e.focused)),n=-1!==t?t:e;this._uncheckPreviousChecked(e,t),-1===n?this._checkedRadio=0:n+1<this._radios.length?this._checkedRadio=n+1:this._checkedRadio=0,this._afterCheck()}_onKeyDown(e){const{key:t}=e;["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(t)&&e.preventDefault(),"ArrowRight"!==t&&"ArrowDown"!==t||this._checkNext(),"ArrowLeft"!==t&&"ArrowUp"!==t||this._checkPrev()}_onChange(e){const t=this._radios.findIndex((t=>t===e.target));-1!==t&&(-1!==this._focusedRadio&&(this._radios[this._focusedRadio].tabIndex=-1),-1!==this._checkedRadio&&this._checkedRadio!==t&&(this._radios[this._checkedRadio].checked=!1),this._focusedRadio=t,this._checkedRadio=t,this._radios[t].tabIndex=0)}_onSlotChange(){if(!this._firstContentLoaded){const e=this._radios.findIndex((e=>e.autofocus));e>-1&&(this._focusedRadio=e),this._firstContentLoaded=!0}this._radios.forEach(((e,t)=>{this._focusedRadio>-1?e.tabIndex=t===this._focusedRadio?0:-1:e.tabIndex=0===t?0:-1}))}render(){return ee`
      <div class="wrapper">
        <slot
          @slotchange=${this._onSlotChange}
          @vsc-change=${this._onChange}
        ></slot>
      </div>
    `}};Mt.styles=Bt,Dt([Ce({reflect:!0})],Mt.prototype,"variant",void 0),Dt([Ce({reflect:!0})],Mt.prototype,"role",void 0),Dt([Ie({selector:"vscode-radio"})],Mt.prototype,"_radios",void 0),Dt([Se()],Mt.prototype,"_focusedRadio",void 0),Dt([Se()],Mt.prototype,"_checkedRadio",void 0),Mt=Dt([Ae("vscode-radio-group")],Mt);const Ft=[Ne,m`
    :host {
      display: inline-block;
      height: 40px;
      position: relative;
      width: 320px;
    }

    :host([cols]) {
      width: auto;
    }

    :host([rows]) {
      height: auto;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      inset: 0 0 auto 0;
      height: 6px;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    textarea {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(--vscode-settings-textInputBorder, transparent);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 100%;
      width: 100%;
    }

    :host([cols]) textarea {
      width: auto;
    }

    :host([rows]) textarea {
      height: auto;
    }

    :host([invalid]) textarea,
    :host(:invalid) textarea {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    textarea.monospace {
      background-color: var(--vscode-editor-background, #1f1f1f);
      color: var(--vscode-editor-foreground, #cccccc);
      font-family: var(--vscode-editor-font-family, monospace);
      font-size: var(--vscode-editor-font-size, 14px);
      font-weight: var(--vscode-editor-font-weight, normal);
    }

    .textarea.monospace::placeholder {
      color: var(
        --vscode-editor-inlineValuesForeground,
        rgba(255, 255, 255, 0.5)
      );
    }

    textarea.cursor-pointer {
      cursor: pointer;
    }

    textarea:focus {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    textarea::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    textarea::-webkit-scrollbar-track {
      background-color: transparent;
    }

    textarea::-webkit-scrollbar {
      width: 14px;
    }

    textarea::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    textarea:hover::-webkit-scrollbar-thumb {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
    }

    textarea::-webkit-scrollbar-thumb:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    textarea::-webkit-scrollbar-thumb:active {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    textarea::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    textarea::-webkit-resizer {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJxjYMAOZuIQZ5j5//9/rJJESczEKYGsG6cEXgAAsEEefMxkua4AAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      background-position: right bottom;
    }
  `];var Vt=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let jt=class extends ze{set value(e){this._value=e,this._internals.setFormValue(e)}get value(){return this._value}get wrappedElement(){return this._textareaEl}get form(){return this._internals.form}get type(){return"textarea"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.invalid=!1,this.label="",this.maxLength=void 0,this.minLength=void 0,this.rows=void 0,this.cols=void 0,this.name=void 0,this.placeholder=void 0,this.readonly=!1,this.resize="none",this.required=!1,this.spellcheck=!1,this.monospace=!1,this._value="",this._textareaPointerCursor=!1,this._shadow=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._textareaEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._textareaEl.value)}))}updated(e){const t=["maxLength","minLength","required"];for(const n of e.keys())if(t.includes(String(n))){this.updateComplete.then((()=>{this._setValidityFromInput()}));break}}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,t){this.updateComplete.then((()=>{this._value=e}))}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_setValidityFromInput(){this._internals.setValidity(this._textareaEl.validity,this._textareaEl.validationMessage,this._textareaEl)}_dataChanged(){this._value=this._textareaEl.value,this._internals.setFormValue(this._textareaEl.value)}_handleChange(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:e}}))}_handleInput(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:e.data,originalEvent:e}}))}_handleMouseMove(e){if(this._textareaEl.clientHeight>=this._textareaEl.scrollHeight)return void(this._textareaPointerCursor=!1);const t=this._textareaEl.getBoundingClientRect(),n=e.clientX;this._textareaPointerCursor=n>=t.left+t.width-14-2}_handleScroll(){this._shadow=this._textareaEl.scrollTop>0}render(){return ee`
      <div
        class=${Ve({shadow:!0,visible:this._shadow})}
      ></div>
      <textarea
        autocomplete=${je(this.autocomplete)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        id="textarea"
        class=${Ve({monospace:this.monospace,"cursor-pointer":this._textareaPointerCursor})}
        maxlength=${je(this.maxLength)}
        minlength=${je(this.minLength)}
        rows=${je(this.rows)}
        cols=${je(this.cols)}
        name=${je(this.name)}
        placeholder=${je(this.placeholder)}
        ?readonly=${this.readonly}
        .style=${Ue({resize:this.resize})}
        ?required=${this.required}
        spellcheck=${this.spellcheck}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @mousemove=${this._handleMouseMove}
        @scroll=${this._handleScroll}
        .value=${this._value}
      ></textarea>
    `}};jt.styles=Ft,jt.formAssociated=!0,jt.shadowRootOptions={..._e.shadowRootOptions,delegatesFocus:!0},Vt([Ce()],jt.prototype,"autocomplete",void 0),Vt([Ce({type:Boolean,reflect:!0})],jt.prototype,"autofocus",void 0),Vt([Ce({attribute:"default-value"})],jt.prototype,"defaultValue",void 0),Vt([Ce({type:Boolean,reflect:!0})],jt.prototype,"disabled",void 0),Vt([Ce({type:Boolean,reflect:!0})],jt.prototype,"invalid",void 0),Vt([Ce({attribute:!1})],jt.prototype,"label",void 0),Vt([Ce({type:Number})],jt.prototype,"maxLength",void 0),Vt([Ce({type:Number})],jt.prototype,"minLength",void 0),Vt([Ce({type:Number})],jt.prototype,"rows",void 0),Vt([Ce({type:Number})],jt.prototype,"cols",void 0),Vt([Ce()],jt.prototype,"name",void 0),Vt([Ce()],jt.prototype,"placeholder",void 0),Vt([Ce({type:Boolean,reflect:!0})],jt.prototype,"readonly",void 0),Vt([Ce()],jt.prototype,"resize",void 0),Vt([Ce({type:Boolean,reflect:!0})],jt.prototype,"required",void 0),Vt([Ce({type:Boolean})],jt.prototype,"spellcheck",void 0),Vt([Ce({type:Boolean,reflect:!0})],jt.prototype,"monospace",void 0),Vt([Ce()],jt.prototype,"value",null),Vt([Pe("#textarea")],jt.prototype,"_textareaEl",void 0),Vt([Se()],jt.prototype,"_value",void 0),Vt([Se()],jt.prototype,"_textareaPointerCursor",void 0),Vt([Se()],jt.prototype,"_shadow",void 0),jt=Vt([Ae("vscode-textarea")],jt);const Ut=v(Le()),Ht=[Ne,m`
    :host {
      align-items: center;
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(
        --vscode-settings-textInputBorder,
        var(--vscode-settings-textInputBackground, #3c3c3c)
      );
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: inline-flex;
      max-width: 100%;
      position: relative;
      width: 320px;
    }

    :host([focused]) {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    :host([invalid]),
    :host(:invalid) {
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    :host([invalid]) input,
    :host(:invalid) input {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
    }

    ::slotted([slot='content-before']) {
      display: block;
      margin-left: 2px;
    }

    ::slotted([slot='content-after']) {
      display: block;
      margin-right: 2px;
    }

    slot[name='content-before'],
    slot[name='content-after'] {
      align-items: center;
      display: flex;
    }

    input {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border: 0;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, ${Ut});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 18px;
      outline: none;
      padding-bottom: 3px;
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 3px;
      width: 100%;
    }

    input:read-only:not([type='file']) {
      cursor: not-allowed;
    }

    input::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    input[type='file'] {
      line-height: 24px;
      padding-bottom: 0;
      padding-left: 2px;
      padding-top: 0;
    }

    input[type='file']::file-selector-button {
      background-color: var(--vscode-button-background, #0078d4);
      border: 0;
      border-radius: 2px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      font-family: var(--vscode-font-family, ${Ut});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 20px;
      padding: 0 14px;
    }

    input[type='file']::file-selector-button:hover {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }
  `];var qt=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Wt=class extends ze{set type(e){this._type=["color","date","datetime-local","email","file","month","number","password","search","tel","text","time","url","week"].includes(e)?e:"text"}get type(){return this._type}set value(e){"file"!==this.type&&(this._value=e,this._internals.setFormValue(e)),this.updateComplete.then((()=>{this._setValidityFromInput()}))}get value(){return this._value}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._setValidityFromInput(),this._internals.checkValidity()}reportValidity(){return this._setValidityFromInput(),this._internals.reportValidity()}get wrappedElement(){return this._inputEl}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.focused=!1,this.invalid=!1,this.label="",this.max=void 0,this.maxLength=void 0,this.min=void 0,this.minLength=void 0,this.multiple=!1,this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.step=void 0,this._value="",this._type="text",this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._inputEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._inputEl.value)}))}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),["max","maxlength","min","minlength","pattern","required","step"].includes(e)&&this.updateComplete.then((()=>{this._setValidityFromInput()}))}formResetCallback(){this.value=this.defaultValue,this.requestUpdate()}formStateRestoreCallback(e,t){this.value=e}_dataChanged(){if(this._value=this._inputEl.value,"file"===this.type&&this._inputEl.files)for(const e of this._inputEl.files)this._internals.setFormValue(e);else this._internals.setFormValue(this._inputEl.value)}_setValidityFromInput(){this._inputEl&&this._internals.setValidity(this._inputEl.validity,this._inputEl.validationMessage,this._inputEl)}_onInput(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:e.data,originalEvent:e}}))}_onChange(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:e}}))}_onFocus(){this.focused=!0}_onBlur(){this.focused=!1}_onKeyDown(e){"Enter"===e.key&&this._internals.form&&this._internals.form?.requestSubmit()}render(){return ee`
      <slot name="content-before"></slot>
      <input
        id="input"
        type=${this.type}
        ?autofocus=${this.autofocus}
        autocomplete=${je(this.autocomplete)}
        aria-label=${this.label}
        ?disabled=${this.disabled}
        max=${je(this.max)}
        maxlength=${je(this.maxLength)}
        min=${je(this.min)}
        minlength=${je(this.minLength)}
        ?multiple=${this.multiple}
        name=${je(this.name)}
        pattern=${je(this.pattern)}
        placeholder=${je(this.placeholder)}
        ?readonly=${this.readonly}
        ?required=${this.required}
        step=${je(this.step)}
        .value=${this._value}
        @blur=${this._onBlur}
        @change=${this._onChange}
        @focus=${this._onFocus}
        @input=${this._onInput}
        @keydown=${this._onKeyDown}
      >
      <slot name="content-after"></slot>
    `}};Wt.styles=Ht,Wt.formAssociated=!0,Wt.shadowRootOptions={..._e.shadowRootOptions,delegatesFocus:!0},qt([Ce()],Wt.prototype,"autocomplete",void 0),qt([Ce({type:Boolean,reflect:!0})],Wt.prototype,"autofocus",void 0),qt([Ce({attribute:"default-value"})],Wt.prototype,"defaultValue",void 0),qt([Ce({type:Boolean,reflect:!0})],Wt.prototype,"disabled",void 0),qt([Ce({type:Boolean,reflect:!0})],Wt.prototype,"focused",void 0),qt([Ce({type:Boolean,reflect:!0})],Wt.prototype,"invalid",void 0),qt([Ce({attribute:!1})],Wt.prototype,"label",void 0),qt([Ce({type:Number})],Wt.prototype,"max",void 0),qt([Ce({type:Number})],Wt.prototype,"maxLength",void 0),qt([Ce({type:Number})],Wt.prototype,"min",void 0),qt([Ce({type:Number})],Wt.prototype,"minLength",void 0),qt([Ce({type:Boolean,reflect:!0})],Wt.prototype,"multiple",void 0),qt([Ce({reflect:!0})],Wt.prototype,"name",void 0),qt([Ce()],Wt.prototype,"pattern",void 0),qt([Ce()],Wt.prototype,"placeholder",void 0),qt([Ce({type:Boolean,reflect:!0})],Wt.prototype,"readonly",void 0),qt([Ce({type:Boolean,reflect:!0})],Wt.prototype,"required",void 0),qt([Ce({type:Number})],Wt.prototype,"step",void 0),qt([Ce({reflect:!0})],Wt.prototype,"type",null),qt([Ce()],Wt.prototype,"value",null),qt([Pe("#input")],Wt.prototype,"_inputEl",void 0),qt([Se()],Wt.prototype,"_value",void 0),qt([Se()],Wt.prototype,"_type",void 0),Wt=qt([Ae("vscode-textfield")],Wt);const Kt=[Ne,m`
    :host {
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: 600;
      line-height: ${16/13};
      cursor: default;
      display: block;
      padding: 5px 0;
    }

    .wrapper {
      display: block;
    }

    .wrapper.required:after {
      content: ' *';
    }

    ::slotted(.normal) {
      font-weight: normal;
    }

    ::slotted(.lightened) {
      color: var(--vscode-foreground, #cccccc);
      opacity: 0.9;
    }
  `];var Qt=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Yt=class extends ze{constructor(){super(...arguments),this.required=!1,this._id="",this._htmlFor="",this._connected=!1}set htmlFor(e){this._htmlFor=e,this.setAttribute("for",e),this._connected&&this._connectWithTarget()}get htmlFor(){return this._htmlFor}set id(e){this._id=e}get id(){return this._id}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n)}connectedCallback(){super.connectedCallback(),this._connected=!0,""===this._id&&(this._id=Tt("vscode-label-"),this.setAttribute("id",this._id)),this._connectWithTarget()}_getTarget(){let e=null;if(this._htmlFor){const t=this.getRootNode({composed:!1});t&&(e=t.querySelector(`#${this._htmlFor}`))}return e}async _connectWithTarget(){await this.updateComplete;const e=this._getTarget();(e instanceof Mt||e instanceof st)&&e.setAttribute("aria-labelledby",this._id);let t="";this.textContent&&(t=this.textContent.trim()),(e instanceof Wt||e instanceof jt)&&(e.label=t)}_handleClick(){const e=this._getTarget();e&&"focus"in e&&e.focus()}render(){return ee`
      <label
        class=${Ve({wrapper:!0,required:this.required})}
        @click=${this._handleClick}
        ><slot></slot
      ></label>
    `}};Yt.styles=Kt,Qt([Ce({reflect:!0,attribute:"for"})],Yt.prototype,"htmlFor",null),Qt([Ce()],Yt.prototype,"id",null),Qt([Ce({type:Boolean,reflect:!0})],Yt.prototype,"required",void 0),Yt=Qt([Ae("vscode-label")],Yt);const Gt=c({tagName:"vscode-label",elementClass:Yt,react:i,displayName:"VscodeLabel"}),Xt=ee`
  <span class="icon">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
      />
    </svg>
  </span>
`,{I:Zt}=me,Jt=()=>document.createComment(""),en=(e,t,n)=>{const o=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===n){const t=o.insertBefore(Jt(),r),i=o.insertBefore(Jt(),r);n=new Zt(t,i,e,e.options)}else{const t=n._$AB.nextSibling,i=n._$AM,s=i!==e;if(s){let t;n._$AQ?.(e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==i._$AU&&n._$AP(t)}if(t!==r||s){let e=n._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,r),e=t}}}return n},tn=(e,t,n=e)=>(e._$AI(t,n),e),nn={},on=e=>{e._$AP?.(!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const e=t.nextSibling;t.remove(),t=e}},rn=(e,t,n)=>{const o=new Map;for(let r=t;r<=n;r++)o.set(e[r],r);return o},sn=Me(class extends Fe{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let o;void 0===n?n=t:void 0!==t&&(o=t);const r=[],i=[];let s=0;for(const t of e)r[s]=o?o(t,s):s,i[s]=n(t,s),s++;return{values:i,keys:r}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,o]){const r=(e=>e._$AH)(e),{values:i,keys:s}=this.dt(t,n,o);if(!Array.isArray(r))return this.ut=s,i;const a=this.ut??=[],l=[];let c,d,u=0,h=r.length-1,p=0,f=i.length-1;for(;u<=h&&p<=f;)if(null===r[u])u++;else if(null===r[h])h--;else if(a[u]===s[p])l[p]=tn(r[u],i[p]),u++,p++;else if(a[h]===s[f])l[f]=tn(r[h],i[f]),h--,f--;else if(a[u]===s[f])l[f]=tn(r[u],i[f]),en(e,l[f+1],r[u]),u++,f--;else if(a[h]===s[p])l[p]=tn(r[h],i[p]),en(e,r[u],r[h]),h--,p++;else if(void 0===c&&(c=rn(s,p,f),d=rn(a,u,h)),c.has(a[u]))if(c.has(a[h])){const t=d.get(s[p]),n=void 0!==t?r[t]:null;if(null===n){const t=en(e,r[u]);tn(t,i[p]),l[p]=t}else l[p]=tn(n,i[p]),en(e,r[u],n),r[t]=null;p++}else on(r[h]),h--;else on(r[u]),u++;for(;p<=f;){const t=en(e,l[f+1]);tn(t,i[p]),l[p++]=t}for(;u<=h;){const e=r[u++];null!==e&&on(e)}return this.ut=s,((e,t=nn)=>{e._$AH=t})(e,l),te}}),an=Ne;var ln=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let cn=class extends ze{constructor(){super(...arguments),this.description="",this.selected=!1,this.disabled=!1,this._initialized=!1,this._handleSlotChange=()=>{this._initialized&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._initialized=!0}))}willUpdate(e){this._initialized&&(e.has("description")||e.has("value")||e.has("selected")||e.has("disabled"))&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}render(){return ee`<slot @slotchange=${this._handleSlotChange}></slot>`}};cn.styles=an,ln([Ce({type:String})],cn.prototype,"value",void 0),ln([Ce({type:String})],cn.prototype,"description",void 0),ln([Ce({type:Boolean,reflect:!0})],cn.prototype,"selected",void 0),ln([Ce({type:Boolean,reflect:!0})],cn.prototype,"disabled",void 0),cn=ln([Ae("vscode-option")],cn);const dn=e=>{const t=[];return" "===e?(t.push(ee`&nbsp;`),t):(0===e.indexOf(" ")&&t.push(ee`&nbsp;`),t.push(ee`${e.trimStart().trimEnd()}`),e.lastIndexOf(" ")===e.length-1&&t.push(ee`&nbsp;`),t)};function un(e,t){let n=0;if(t<0||!e[t]||!e[t+1])return n;for(let o=t+1;o<e.length;o++)if(!e[o].disabled){n=o;break}return n}function hn(e,t){let n=0;if(t<0||!e[t]||!e[t-1])return n;for(let o=t-1;o>=0;o--)if(!e[o].disabled){n=o;break}return n}var pn=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};const fn=22;class vn extends ze{set disabled(e){this._disabled=e,this.ariaDisabled=e?"true":"false",!0===e?(this._originalTabIndex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this._originalTabIndex??0,this._originalTabIndex=void 0),this.requestUpdate()}get disabled(){return this._disabled}set filter(e){["contains","fuzzy","startsWith","startsWithPerTerm"].includes(e)?this._filter=e:(this._filter="fuzzy",console.warn(`[VSCode Webview Elements] Invalid filter: "${e}", fallback to default. Valid values are: "contains", "fuzzy", "startsWith", "startsWithPerm".`,this))}get filter(){return this._filter}set options(e){this._options=e.map(((e,t)=>({...e,index:t})))}get options(){return this._options.map((({label:e,value:t,description:n,selected:o,disabled:r})=>({label:e,value:t,description:n,selected:o,disabled:r})))}constructor(){super(),this.ariaExpanded="false",this.creatable=!1,this.combobox=!1,this.invalid=!1,this.focused=!1,this.open=!1,this.position="below",this.tabIndex=0,this._firstUpdateCompleted=!1,this._activeIndex=-1,this._currentDescription="",this._filter="fuzzy",this._filterPattern="",this._selectedIndex=-1,this._selectedIndexes=[],this._options=[],this._value="",this._values=[],this._listScrollTop=0,this._isPlaceholderOptionActive=!1,this._isBeingFiltered=!1,this._multiple=!1,this._valueOptionIndexMap={},this._isHoverForbidden=!1,this._disabled=!1,this._originalTabIndex=void 0,this._onClickOutside=e=>{-1===e.composedPath().findIndex((e=>e===this))&&(this._toggleDropdown(!1),window.removeEventListener("click",this._onClickOutside))},this._onMouseMove=()=>{this._isHoverForbidden=!1,window.removeEventListener("mousemove",this._onMouseMove)},this._onComponentKeyDown=e=>{[" ","ArrowUp","ArrowDown","Escape"].includes(e.key)&&(e.stopPropagation(),e.preventDefault()),"Enter"===e.key&&this._onEnterKeyDown(e)," "===e.key&&this._onSpaceKeyDown(),"Escape"===e.key&&this._toggleDropdown(!1),"ArrowUp"===e.key&&this._onArrowUpKeyDown(),"ArrowDown"===e.key&&this._onArrowDownKeyDown()},this._onComponentFocus=()=>{this.focused=!0},this._onComponentBlur=()=>{this.focused=!1},this.addEventListener("vsc-option-state-change",(e=>{e.stopPropagation(),this._setStateFromSlottedElements(),this.requestUpdate()}))}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onComponentKeyDown),this.addEventListener("focus",this._onComponentFocus),this.addEventListener("blur",this._onComponentBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onComponentKeyDown),this.removeEventListener("focus",this._onComponentFocus),this.removeEventListener("blur",this._onComponentBlur)}firstUpdated(e){this._firstUpdateCompleted=!0}willUpdate(e){e.has("required")&&this._firstUpdateCompleted&&this._manageRequired()}get _filteredOptions(){return this.combobox&&""!==this._filterPattern?((e,t,n)=>{const o=[];return e.forEach((e=>{let r;switch(n){case"startsWithPerTerm":r=((e,t)=>{const n={match:!1,ranges:[]},o=e.toLowerCase(),r=t.toLowerCase(),i=o.split(" ");let s=0;return i.forEach(((t,o)=>{if(o>0&&(s+=i[o-1].length+1),n.match)return;const a=t.indexOf(r),l=r.length;0===a&&(n.match=!0,n.ranges.push([s+a,Math.min(s+a+l,e.length)]))})),n})(e.label,t);break;case"startsWith":r=((e,t)=>{const n={match:!1,ranges:[]};return 0===e.toLowerCase().indexOf(t.toLowerCase())&&(n.match=!0,n.ranges=[[0,t.length]]),n})(e.label,t);break;case"contains":r=((e,t)=>{const n={match:!1,ranges:[]},o=e.toLowerCase().indexOf(t.toLowerCase());return o>-1&&(n.match=!0,n.ranges=[[o,o+t.length]]),n})(e.label,t);break;default:r=((e,t)=>{const n={match:!1,ranges:[]};let o=0,r=0;const i=t.length-1,s=e.toLowerCase(),a=t.toLowerCase();for(let e=0;e<=i;e++){if(r=s.indexOf(a[e],o),-1===r)return{match:!1,ranges:[]};n.match=!0,n.ranges.push([r,r+1]),o=r+1}return n})(e.label,t)}r.match&&o.push({...e,ranges:r.ranges})})),o})(this._options,this._filterPattern,this._filter):this._options}get _currentOptions(){return this.combobox?this._filteredOptions:this._options}get _isSuggestedOptionVisible(){if(!this.combobox||!this.creatable)return!1;const e=void 0!==this._valueOptionIndexMap[this._filterPattern],t=this._filterPattern.length>0;return!e&&t}_manageRequired(){}_setStateFromSlottedElements(){const e=[];let t=0;const n=this._assignedOptions??[],o=[],r=[];this._valueOptionIndexMap={},n.forEach(((n,i)=>{const{innerText:s,description:a,disabled:l}=n,c="string"==typeof n.value?n.value:s.trim(),d=n.selected??!1,u={label:s.trim(),value:c,description:a,selected:d,index:t,disabled:l};t=e.push(u),d&&!this._multiple&&(this._activeIndex=i),d&&(o.push(e.length-1),r.push(c)),this._valueOptionIndexMap[u.value]=u.index})),this._options=e,o.length>0&&(this._selectedIndex=o[0],this._selectedIndexes=o,this._value=r[0],this._values=r),this._multiple||this.combobox||0!==o.length||(this._selectedIndex=this._options.length>0?0:-1)}async _toggleDropdown(e){this.open=e,this.ariaExpanded=String(e),e&&!this._multiple&&(this._activeIndex=this._selectedIndex),!e||this._multiple||this.combobox||(this._activeIndex=this._selectedIndex,this._activeIndex>9&&(await this.updateComplete,this._listElement.scrollTop=Math.floor(this._activeIndex*fn))),e?window.addEventListener("click",this._onClickOutside):window.removeEventListener("click",this._onClickOutside)}_createSuggestedOption(){const e=this._options.length,t=document.createElement("vscode-option");return t.value=this._filterPattern,be(this._filterPattern,t),this.appendChild(t),e}_dispatchChangeEvent(){this._multiple?this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndexes:this._selectedIndexes,value:this._values}})):this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndex:this._selectedIndex,value:this._value}})),this.dispatchEvent(new Event("change")),this.dispatchEvent(new Event("input"))}async _createAndSelectSuggestedOption(){}_onFaceClick(){this._toggleDropdown(!this.open),this._multiple&&(this._activeIndex=0)}_toggleComboboxDropdown(){this._filterPattern="",this._toggleDropdown(!this.open),this._multiple&&(this._activeIndex=-1)}_onComboboxButtonClick(){this._toggleComboboxDropdown()}_onComboboxButtonKeyDown(e){"Enter"===e.key&&this._toggleComboboxDropdown()}_onOptionMouseOver(e){if(this._isHoverForbidden)return;const t=e.target;t.matches(".option")&&(t.matches(".placeholder")?(this._isPlaceholderOptionActive=!0,this._activeIndex=-1):(this._isPlaceholderOptionActive=!1,this._activeIndex=Number(this.combobox?t.dataset.filteredIndex:t.dataset.index)))}_onPlaceholderOptionMouseOut(){this._isPlaceholderOptionActive=!1}_onNoOptionsClick(e){e.stopPropagation()}_onEnterKeyDown(e){if(this._isBeingFiltered=!1,e?.composedPath&&e.composedPath().find((e=>!!e.matches&&e.matches("vscode-button.button-accept"))))return;const t=this.combobox?this._filteredOptions:this._options,n=!this.open;this._toggleDropdown(n),this._multiple||n||this._selectedIndex===this._activeIndex||(this._selectedIndex=this._activeIndex>-1?t[this._activeIndex].index:-1,this._value=this._selectedIndex>-1?this._options[this._selectedIndex].value:"",this._dispatchChangeEvent()),this.combobox&&(this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(this._multiple||n||(this._selectedIndex=this._activeIndex>-1?this._filteredOptions[this._activeIndex].index:-1),!this._multiple&&n&&this.updateComplete.then((()=>{this._scrollActiveElementToTop()})))),this._multiple&&n&&(this._activeIndex=0)}_onSpaceKeyDown(){if(this.open){if(this.open&&this._multiple&&this._activeIndex>-1){const e=this.combobox?this._filteredOptions:this._options,t=e[this._activeIndex],n=[];this._options[t.index].selected=!t.selected,e.forEach((({index:e})=>{const{selected:t}=this._options[e];t&&n.push(e)})),this._selectedIndexes=n}}else this._toggleDropdown(!0)}_scrollActiveElementToTop(){this._listElement.scrollTop=Math.floor(this._activeIndex*fn)}async _adjustOptionListScrollPos(e,t){let n=this.combobox?this._filteredOptions.length:this._options.length;if(this._isSuggestedOptionVisible&&(n+=1),n<=10)return;this._isHoverForbidden=!0,window.addEventListener("mousemove",this._onMouseMove);const o=this._listElement.scrollTop,r=t*fn,i=r>=o&&r<=o+220-fn;"down"===e&&(i||(this._listElement.scrollTop=t*fn-198)),"up"===e&&(i||(this._listElement.scrollTop=Math.floor(this._activeIndex*fn)))}_onArrowUpKeyDown(){if(this.open){if(this._activeIndex<=0&&(!this.combobox||!this.creatable))return;if(this._isPlaceholderOptionActive){const e=this._currentOptions.length-1;this._activeIndex=e,this._isPlaceholderOptionActive=!1}else{const e=hn(this.combobox?this._filteredOptions:this._options,this._activeIndex);e>-1&&(this._activeIndex=e,this._adjustOptionListScrollPos("up",e))}}}_onArrowDownKeyDown(){let e=this.combobox?this._filteredOptions.length:this._options.length;const t=this.combobox?this._filteredOptions:this._options,n=this._isSuggestedOptionVisible;if(n&&(e+=1),this.open){if(this._isPlaceholderOptionActive&&-1===this._activeIndex)return;if(n&&this._activeIndex===e-2)this._isPlaceholderOptionActive=!0,this._adjustOptionListScrollPos("down",e-1),this._activeIndex=-1;else if(this._activeIndex<e-1){const e=un(t,this._activeIndex);e>-1&&(this._activeIndex=e,this._adjustOptionListScrollPos("down",e))}}}_onSlotChange(){this._setStateFromSlottedElements(),this.requestUpdate()}_onComboboxInputFocus(e){e.target.select(),this._isBeingFiltered=!1,this._filterPattern=""}_onComboboxInputBlur(){this._isBeingFiltered=!1}_onComboboxInputInput(e){this._isBeingFiltered=!0,this._filterPattern=e.target.value,this._activeIndex=-1,this._toggleDropdown(!0)}_onComboboxInputClick(){this._isBeingFiltered=""!==this._filterPattern,this._toggleDropdown(!0)}_onOptionClick(e){this._isBeingFiltered=!1}_renderOptions(){const e=this.combobox?this._filteredOptions:this._options;return ee`
      <ul
        class="options"
        @click=${this._onOptionClick}
        @mouseover=${this._onOptionMouseOver}
      >
        ${sn(e,(e=>e.index),((e,t)=>{const n={active:t===this._activeIndex&&!e.disabled,disabled:e.disabled,option:!0,selected:e.selected},o={"checkbox-icon":!0,checked:e.selected},r=e.ranges?.length?((e,t)=>{const n=[],o=t.length;return o<1?ee`${e}`:(t.forEach(((r,i)=>{const s=e.substring(r[0],r[1]);0===i&&0!==r[0]&&n.push(...dn(e.substring(0,t[0][0]))),i>0&&i<o&&r[0]-t[i-1][1]!=0&&n.push(...dn(e.substring(t[i-1][1],r[0]))),n.push(ee`<b>${dn(s)}</b>`),i===o-1&&r[1]<e.length&&n.push(...dn(e.substring(r[1],e.length)))})),n)})(e.label,e.ranges??[]):e.label;return ee`
              <li
                class=${Ve(n)}
                data-index=${e.index}
                data-filtered-index=${t}
              >
                ${this._multiple?ee`<span class=${Ve(o)}></span
                      ><span class="option-label">${r}</span>`:r}
              </li>
            `}))}
        ${this._renderPlaceholderOption(e.length<1)}
      </ul>
    `}_renderPlaceholderOption(e){return this.combobox?this._valueOptionIndexMap[this._filterPattern]?ne:this.creatable&&this._filterPattern.length>0?ee`<li
        class=${Ve({option:!0,placeholder:!0,active:this._isPlaceholderOptionActive})}
        @mouseout=${this._onPlaceholderOptionMouseOut}
      >
        Add "${this._filterPattern}"
      </li>`:e?ee`<li class="no-options" @click=${this._onNoOptionsClick}>
            No options
          </li>`:ne:ne}_renderDescription(){if(!this._options[this._activeIndex])return ne;const{description:e}=this._options[this._activeIndex];return e?ee`<div class="description">${e}</div>`:ne}_renderSelectFace(){return ee`${ne}`}_renderMultiSelectLabel(){switch(this._selectedIndexes.length){case 0:return ee`<span class="select-face-badge no-item"
          >No items selected</span
        >`;case 1:return ee`<span class="select-face-badge">1 item selected</span>`;default:return ee`<span class="select-face-badge"
          >${this._selectedIndexes.length} items selected</span
        >`}}_renderComboboxFace(){let e="";return e=this._isBeingFiltered?this._filterPattern:this._selectedIndex>-1?this._options[this._selectedIndex]?.label??"":"",ee`
      <div class="combobox-face face">
        ${this._multiple?this._renderMultiSelectLabel():ne}
        <input
          class="combobox-input"
          spellcheck="false"
          type="text"
          autocomplete="off"
          .value=${e}
          @focus=${this._onComboboxInputFocus}
          @blur=${this._onComboboxInputBlur}
          @input=${this._onComboboxInputInput}
          @click=${this._onComboboxInputClick}
        >
        <button
          class="combobox-button"
          type="button"
          @click=${this._onComboboxButtonClick}
          @keydown=${this._onComboboxButtonKeyDown}
        >
          ${Xt}
        </button>
      </div>
    `}_renderDropdownControls(){return ee`${ne}`}_renderDropdown(){const e=Ve({dropdown:!0,multiple:this._multiple});return ee`
      <div class=${e}>
        ${"above"===this.position?this._renderDescription():ne}
        ${this._renderOptions()} ${this._renderDropdownControls()}
        ${"below"===this.position?this._renderDescription():ne}
      </div>
    `}render(){return ee`
      <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
      ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
      ${this.open?this._renderDropdown():ne}
    `}}pn([Ce({type:String,reflect:!0,attribute:"aria-expanded"})],vn.prototype,"ariaExpanded",void 0),pn([Ce({type:Boolean,reflect:!0})],vn.prototype,"creatable",void 0),pn([Ce({type:Boolean,reflect:!0})],vn.prototype,"combobox",void 0),pn([Ce({type:Boolean,reflect:!0})],vn.prototype,"disabled",null),pn([Ce({type:Boolean,reflect:!0})],vn.prototype,"invalid",void 0),pn([Ce()],vn.prototype,"filter",null),pn([Ce({type:Boolean,reflect:!0})],vn.prototype,"focused",void 0),pn([Ce({type:Boolean,reflect:!0})],vn.prototype,"open",void 0),pn([Ce({type:Array})],vn.prototype,"options",null),pn([Ce({reflect:!0})],vn.prototype,"position",void 0),pn([Ce({type:Number,attribute:!0,reflect:!0})],vn.prototype,"tabIndex",void 0),pn([Ie({flatten:!0,selector:"vscode-option"})],vn.prototype,"_assignedOptions",void 0),pn([Se()],vn.prototype,"_activeIndex",void 0),pn([Se()],vn.prototype,"_currentDescription",void 0),pn([Se()],vn.prototype,"_filter",void 0),pn([Se()],vn.prototype,"_filteredOptions",null),pn([Se()],vn.prototype,"_filterPattern",void 0),pn([Se()],vn.prototype,"_selectedIndex",void 0),pn([Se()],vn.prototype,"_selectedIndexes",void 0),pn([Se()],vn.prototype,"_options",void 0),pn([Se()],vn.prototype,"_value",void 0),pn([Se()],vn.prototype,"_values",void 0),pn([Se()],vn.prototype,"_listScrollTop",void 0),pn([Se()],vn.prototype,"_isPlaceholderOptionActive",void 0),pn([Se()],vn.prototype,"_isBeingFiltered",void 0),pn([Pe(".options")],vn.prototype,"_listElement",void 0);const mn=[Ne,m`
    :host {
      display: inline-block;
      max-width: 100%;
      outline: none;
      position: relative;
      width: 320px;
    }

    .main-slot {
      display: none;
    }

    .select-face,
    .combobox-face {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-dropdownForeground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      position: relative;
      user-select: none;
      width: 100%;
    }

    :host([invalid]) .select-face,
    :host(:invalid) .select-face,
    :host([invalid]) .combobox-face,
    :host(:invalid) .combobox-face {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .select-face {
      cursor: pointer;
      display: block;
      padding: 3px 4px;
    }

    .select-face .text {
      display: block;
      height: 18px;
      overflow: hidden;
    }

    .select-face.multiselect {
      padding: 0;
    }

    .select-face-badge {
      background-color: var(--vscode-badge-background, #616161);
      border-radius: 2px;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      flex-shrink: 0;
      font-size: 11px;
      line-height: 16px;
      margin: 2px;
      padding: 2px 3px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .select-face-badge.no-item {
      background-color: transparent;
      color: inherit;
    }

    .combobox-face {
      display: flex;
    }

    :host(:focus) .select-face,
    :host(:focus) .combobox-face,
    :host([focused]) .select-face,
    :host([focused]) .combobox-face {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    .combobox-input {
      background-color: transparent;
      box-sizing: border-box;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      line-height: 16px;
      padding: 4px;
      width: 100%;
    }

    .combobox-input:focus {
      outline: none;
    }

    .combobox-button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 2px;
      box-sizing: content-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex-shrink: 0;
      height: 16px;
      justify-content: center;
      margin: 1px 1px 0 0;
      padding: 3px;
      width: 22px;
    }

    .combobox-button:hover,
    .combobox-button:focus-visible {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    .combobox-button:focus-visible {
      outline: none;
    }

    .icon {
      color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 14px;
      pointer-events: none;
      width: 14px;
    }

    .select-face .icon {
      position: absolute;
      right: 6px;
      top: 5px;
    }

    .icon svg {
      color: var(--vscode-foreground, #cccccc);
      height: 100%;
      width: 100%;
    }

    .dropdown {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownListBorder, #454545);
      border-radius: 0 0 3px 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      left: 0;
      padding-bottom: 2px;
      position: absolute;
      top: 100%;
      width: 100%;
      z-index: var(--dropdown-z-index, 2);
    }

    :host([position='above']) .dropdown {
      border-radius: 3px 3px 0 0;
      bottom: 26px;
      padding-bottom: 0;
      padding-top: 2px;
      top: auto;
    }

    :host(:focus) .dropdown,
    :host([focused]) .dropdown {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    .options {
      box-sizing: border-box;
      cursor: pointer;
      list-style: none;
      margin: 0;
      max-height: 222px;
      overflow: auto;
      padding: 1px;
    }

    .option {
      align-items: center;
      box-sizing: border-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 22px;
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      padding: 1px 3px;
      user-select: none;
      outline-color: transparent;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
    }

    .option b {
      color: var(--vscode-list-highlightForeground, #2aaaff);
    }

    .option.active b {
      color: var(--vscode-list-focusHighlightForeground, #2aaaff);
    }

    .option:not(.disabled):hover {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      color: var(--vscode-list-hoverForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option:hover,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option:hover {
      outline-style: dotted;
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-width: 1px;
    }

    .option.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .option.active,
    .option.active:hover {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
      outline-style: solid;
      outline-width: 1px;
    }

    .no-options {
      align-items: center;
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      color: var(--vscode-foreground, #cccccc);
      cursor: default;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      opacity: 0.85;
      padding: 1px 3px;
      user-select: none;
    }

    .placeholder {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .placeholder span {
      font-weight: bold;
    }

    .placeholder:not(.disabled):hover {
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option.active,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option.active:hover {
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-style: dashed;
    }

    .option-label {
      display: block;
      pointer-events: none;
      width: 100%;
    }

    .dropdown.multiple .option.selected {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      outline-color: var(--vscode-list-hoverBackground, #2a2d2e);
    }

    .dropdown.multiple .option.selected.active {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
    }

    .checkbox-icon {
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      border: 1px solid currentColor;
      border-radius: 2px;
      box-sizing: border-box;
      height: 14px;
      margin-right: 5px;
      overflow: hidden;
      position: relative;
      width: 14px;
    }

    .checkbox-icon.checked:before,
    .checkbox-icon.checked:after {
      content: '';
      display: block;
      height: 5px;
      position: absolute;
      transform: rotate(-45deg);
      width: 10px;
    }

    .checkbox-icon.checked:before {
      background-color: var(--vscode-foreground, #cccccc);
      left: 1px;
      top: 2.5px;
    }

    .checkbox-icon.checked:after {
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      left: 1px;
      top: -0.5px;
    }

    .dropdown-controls {
      display: flex;
      justify-content: flex-end;
      padding: 4px;
    }

    .dropdown-controls :not(:last-child) {
      margin-right: 4px;
    }

    .action-icon {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      padding: 0;
      width: 24px;
    }

    .action-icon:focus {
      outline: none;
    }

    .action-icon:focus-visible {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }

    .description {
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-style: solid;
      border-width: 1px 0 0;
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.3;
      padding: 6px 4px;
      word-wrap: break-word;
    }

    :host([position='above']) .description {
      border-width: 0 0 1px;
    }
  `],gn=mn;var bn=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let yn=class extends vn{set selectedIndexes(e){const t=[];e.forEach((e=>{void 0!==this._options[e]&&(t.includes(e)||(this._options[e].selected=!0,t.push(e)))})),this._selectedIndexes=t}get selectedIndexes(){return this._selectedIndexes}set value(e){const t=Array.isArray(e)?e.map((e=>String(e))):[String(e)];this._values=[],this._selectedIndexes.forEach((e=>{this._options[e].selected=!1})),this._selectedIndexes=[],t.forEach((e=>{"number"==typeof this._valueOptionIndexMap[e]&&(this._selectedIndexes.push(this._valueOptionIndexMap[e]),this._options[this._valueOptionIndexMap[e]].selected=!0,this._values.push(e))})),this._selectedIndexes.length>0?this._requestedValueToSetLater=[]:this._requestedValueToSetLater=Array.isArray(e)?e:[e],this._setFormValue(),this._manageRequired()}get value(){return this._values}get form(){return this._internals.form}get type(){return"select-multiple"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.defaultValue=[],this.required=!1,this.name=void 0,this._requestedValueToSetLater=[],this._onOptionClick=e=>{const t=e.composedPath().find((e=>"matches"in e&&e.matches("li.option")));if(!t)return;if(t.classList.contains("placeholder"))return void this._createAndSelectSuggestedOption();const n=Number(t.dataset.index);if(this._options[n]){if(this._options[n].disabled)return;this._options[n].selected=!this._options[n].selected}this._selectedIndexes=[],this._values=[],this._options.forEach((e=>{e.selected&&(this._selectedIndexes.push(e.index),this._values.push(e.value))})),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()},this._multiple=!0,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._setDefaultValue(),this._manageRequired()}))}formResetCallback(){this.updateComplete.then((()=>{this.value=this.defaultValue}))}formStateRestoreCallback(e,t){const n=Array.from(e.entries()).map((e=>String(e[1])));this.updateComplete.then((()=>{this.value=n}))}_setDefaultValue(){if(Array.isArray(this.defaultValue)&&this.defaultValue.length>0){const e=this.defaultValue.map((e=>String(e)));this.value=e}}_manageRequired(){const{value:e}=this;0===e.length&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._faceElement):this._internals.setValidity({})}_setFormValue(){const e=new FormData;this._values.forEach((t=>{e.append(this.name??"",t)})),this._internals.setFormValue(e)}async _createAndSelectSuggestedOption(){super._createAndSelectSuggestedOption();const e=this._createSuggestedOption();await this.updateComplete,this.selectedIndexes=[...this.selectedIndexes,e],this._dispatchChangeEvent();const t=new CustomEvent("vsc-multi-select-create-option",{detail:{value:this._options[e]?.value??""}});this.dispatchEvent(t),this._toggleDropdown(!1),this._isPlaceholderOptionActive=!1}_onSlotChange(){super._onSlotChange(),this._requestedValueToSetLater.length>0&&this.options.forEach(((e,t)=>{this._requestedValueToSetLater.includes(e.value)&&(this._selectedIndexes.push(t),this._values.push(e.value),this._options[t].selected=!0,this._requestedValueToSetLater=this._requestedValueToSetLater.filter((t=>t!==e.value)))}))}_onMultiAcceptClick(){this._toggleDropdown(!1)}_onMultiDeselectAllClick(){this._selectedIndexes=[],this._values=[],this._options=this._options.map((e=>({...e,selected:!1}))),this._manageRequired(),this._dispatchChangeEvent()}_onMultiSelectAllClick(){this._selectedIndexes=[],this._values=[],this._options=this._options.map((e=>({...e,selected:!0}))),this._options.forEach(((e,t)=>{this._selectedIndexes.push(t),this._values.push(e.value),this._dispatchChangeEvent()})),this._setFormValue(),this._manageRequired()}_renderLabel(){switch(this._selectedIndexes.length){case 0:return ee`<span class="select-face-badge no-item"
          >No items selected</span
        >`;case 1:return ee`<span class="select-face-badge">1 item selected</span>`;default:return ee`<span class="select-face-badge"
          >${this._selectedIndexes.length} items selected</span
        >`}}_renderSelectFace(){return ee`
      <div
        class="select-face face multiselect"
        @click=${this._onFaceClick}
        tabindex=${this.tabIndex>-1?0:-1}
      >
        ${this._renderLabel()} ${Xt}
      </div>
    `}_renderDropdownControls(){return this._filteredOptions.length>0?ee`
          <div class="dropdown-controls">
            <button
              type="button"
              @click=${this._onMultiSelectAllClick}
              title="Select all"
              class="action-icon"
              id="select-all"
            >
              <vscode-icon name="checklist"></vscode-icon>
            </button>
            <button
              type="button"
              @click=${this._onMultiDeselectAllClick}
              title="Deselect all"
              class="action-icon"
              id="select-none"
            >
              <vscode-icon name="clear-all"></vscode-icon>
            </button>
            <vscode-button
              class="button-accept"
              @click=${this._onMultiAcceptClick}
              >OK</vscode-button
            >
          </div>
        `:ee`${ne}`}};yn.styles=gn,yn.shadowRootOptions={..._e.shadowRootOptions,delegatesFocus:!0},yn.formAssociated=!0,bn([Ce({type:Array,attribute:"default-value"})],yn.prototype,"defaultValue",void 0),bn([Ce({type:Boolean,reflect:!0})],yn.prototype,"required",void 0),bn([Ce({reflect:!0})],yn.prototype,"name",void 0),bn([Ce({type:Array,attribute:!1})],yn.prototype,"selectedIndexes",null),bn([Ce({type:Array})],yn.prototype,"value",null),bn([Pe(".face")],yn.prototype,"_faceElement",void 0),yn=bn([Ae("vscode-multi-select")],yn),c({tagName:"vscode-multi-select",elementClass:yn,react:i,displayName:"VscodeMultiSelect",events:{onChange:"change",onInvalid:"invalid",onVscMultiSelectCreateOption:"vsc-multi-select-create-option"}}),c({tagName:"vscode-option",elementClass:cn,react:i,displayName:"VscodeOption"});const _n=[Ne,m`
    :host {
      align-items: center;
      display: block;
      height: 28px;
      margin: 0;
      outline: none;
      width: 28px;
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke: transparent;
      stroke-width: 2px;
    }

    .indeterminate-indicator-1 {
      fill: none;
      stroke: var(--vscode-progressBar-background, #0078d4);
      stroke-width: 2px;
      stroke-linecap: square;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `];var xn=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let wn=class extends ze{constructor(){super(...arguments),this.ariaLabel="Loading",this.ariaLive="assertive",this.role="alert"}render(){return ee`<svg class="progress" part="progress" viewBox="0 0 16 16">
      <circle
        class="background"
        part="background"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
      <circle
        class="indeterminate-indicator-1"
        part="indeterminate-indicator-1"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
    </svg>`}};wn.styles=_n,xn([Ce({reflect:!0,attribute:"aria-label"})],wn.prototype,"ariaLabel",void 0),xn([Ce({reflect:!0,attribute:"aria-live"})],wn.prototype,"ariaLive",void 0),xn([Ce({reflect:!0})],wn.prototype,"role",void 0),wn=xn([Ae("vscode-progress-ring")],wn),c({tagName:"vscode-progress-ring",elementClass:wn,react:i,displayName:"VscodeProgressRing"});const kn=[Ne,et,m`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 9px;
    }

    .icon.checked:before {
      background-color: currentColor;
      border-radius: 4px;
      content: '';
      height: 8px;
      left: 50%;
      margin: -4px 0 0 -4px;
      position: absolute;
      top: 50%;
      width: 8px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var Cn=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Sn=class extends(Je(Ze)){constructor(){super(),this.autofocus=!1,this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name="",this.value="",this.disabled=!1,this.required=!1,this.role="radio",this.tabIndex=0,this._slottedText="",this.type="radio",this._handleClick=()=>{this.disabled||this.checked||(this._checkButton(),this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0})))},this._handleKeyDown=e=>{this.disabled||"Enter"!==e.key&&" "!==e.key||(e.preventDefault()," "!==e.key||this.checked||(this.checked=!0,this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0}))),"Enter"===e.key&&this._internals.form?.requestSubmit())},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("click",this._handleClick),this._handleValueChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeyDown),this.removeEventListener("click",this._handleClick)}update(e){super.update(e),e.has("checked")&&this._handleValueChange(),e.has("required")&&this._handleValueChange()}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formResetCallback(){this._getRadios().forEach((e=>{e.checked=e.defaultChecked})),this.updateComplete.then((()=>{this._handleValueChange()}))}formStateRestoreCallback(e,t){this.value===e&&""!==e&&(this.checked=!0)}_dispatchCustomEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_getRadios(){const e=this.getRootNode({composed:!0});if(!e)return[];const t=e.querySelectorAll(`vscode-radio[name="${this.name}"]`);return Array.from(t)}_uncheckOthers(e){e.forEach((e=>{e!==this&&(e.checked=!1)}))}_checkButton(){const e=this._getRadios();this.checked=!0,e.forEach((e=>{e!==this&&(e.checked=!1)}))}setComponentValidity(e){e?this._internals.setValidity({}):this._internals.setValidity({valueMissing:!0},"Please select one of these options.",this._inputEl)}_setGroupValidity(e,t){this.updateComplete.then((()=>{e.forEach((e=>{e.setComponentValidity(t)}))}))}_setActualFormValue(){let e="";e=this.checked?this.value?this.value:"on":null,this._internals.setFormValue(e)}_handleValueChange(){const e=this._getRadios(),t=e.some((e=>e.required));if(this._setActualFormValue(),this.checked)this._uncheckOthers(e),this._setGroupValidity(e,!0);else{const n=!!e.find((e=>e.checked)),o=t&&!n;this._setGroupValidity(e,!o)}}render(){const e=Ve({icon:!0,checked:this.checked}),t=Ve({"label-inner":!0,"is-slot-empty":""===this._slottedText});return ee`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="radio"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
          tabindex=${this.tabIndex}
        >
        <div class=${e}></div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${t}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};Sn.styles=kn,Sn.formAssociated=!0,Sn.shadowRootOptions={..._e.shadowRootOptions,delegatesFocus:!0},Cn([Ce({type:Boolean,reflect:!0})],Sn.prototype,"autofocus",void 0),Cn([Ce({type:Boolean,reflect:!0})],Sn.prototype,"checked",void 0),Cn([Ce({type:Boolean,reflect:!0,attribute:"default-checked"})],Sn.prototype,"defaultChecked",void 0),Cn([Ce({type:Boolean,reflect:!0})],Sn.prototype,"invalid",void 0),Cn([Ce({reflect:!0})],Sn.prototype,"name",void 0),Cn([Ce()],Sn.prototype,"value",void 0),Cn([Ce({type:Boolean,reflect:!0})],Sn.prototype,"disabled",void 0),Cn([Ce({type:Boolean,reflect:!0})],Sn.prototype,"required",void 0),Cn([Ce({reflect:!0})],Sn.prototype,"role",void 0),Cn([Ce({type:Number,reflect:!0})],Sn.prototype,"tabIndex",void 0),Cn([Se()],Sn.prototype,"_slottedText",void 0),Cn([Pe("#input")],Sn.prototype,"_inputEl",void 0),Cn([Ce()],Sn.prototype,"type",void 0),Sn=Cn([Ae("vscode-radio")],Sn),c({tagName:"vscode-radio",elementClass:Sn,react:i,displayName:"VscodeRadio",events:{onChange:"change",onInvalid:"invalid"}}),c({tagName:"vscode-radio-group",elementClass:Mt,react:i,displayName:"VscodeRadioGroup",events:{onChange:"change"}});const En=[Ne,m`
    :host {
      display: block;
      position: relative;
    }

    .scrollable-container {
      height: 100%;
      overflow: auto;
    }

    .scrollable-container::-webkit-scrollbar {
      cursor: default;
      width: 0;
    }

    .scrollable-container {
      scrollbar-width: none;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      height: 3px;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    .scrollbar-track {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 10px;
      z-index: 100;
    }

    .scrollbar-track.hidden {
      display: none;
    }

    .scrollbar-thumb {
      background-color: transparent;
      min-height: var(--min-thumb-height, 20px);
      opacity: 0;
      position: absolute;
      right: 0;
      width: 10px;
    }

    .scrollbar-thumb.visible {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 1;
      transition: opacity 100ms;
    }

    .scrollbar-thumb.fade {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 0;
      transition: opacity 800ms;
    }

    .scrollbar-thumb.visible:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    .scrollbar-thumb.visible.active,
    .scrollbar-thumb.visible.active:hover {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    .prevent-interaction {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 99;
    }

    .content {
      overflow: hidden;
    }
  `];var Pn=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let $n=class extends ze{constructor(){super(...arguments),this.shadow=!0,this.scrolled=!1,this._isDragging=!1,this._thumbHeight=0,this._thumbY=0,this._thumbVisible=!1,this._thumbFade=!1,this._thumbActive=!1,this._scrollThumbStartY=0,this._mouseStartY=0,this._scrollbarVisible=!0,this._scrollbarTrackZ=0,this._resizeObserverCallback=()=>{this._updateScrollbar()},this._onSlotChange=()=>{this._zIndexFix()},this._onScrollThumbMouseMoveBound=this._onScrollThumbMouseMove.bind(this),this._onScrollThumbMouseUpBound=this._onScrollThumbMouseUp.bind(this),this._onComponentMouseOverBound=this._onComponentMouseOver.bind(this),this._onComponentMouseOutBound=this._onComponentMouseOut.bind(this)}set scrollPos(e){this._scrollableContainer.scrollTop=e}get scrollPos(){return this._scrollableContainer?this._scrollableContainer.scrollTop:0}get scrollMax(){return this._scrollableContainer?this._scrollableContainer.scrollHeight:0}connectedCallback(){super.connectedCallback(),this._hostResizeObserver=new ResizeObserver(this._resizeObserverCallback),this._contentResizeObserver=new ResizeObserver(this._resizeObserverCallback),this.requestUpdate(),this.updateComplete.then((()=>{this._scrollableContainer.addEventListener("scroll",this._onScrollableContainerScroll.bind(this)),this._hostResizeObserver.observe(this),this._contentResizeObserver.observe(this._contentElement)})),this.addEventListener("mouseover",this._onComponentMouseOverBound),this.addEventListener("mouseout",this._onComponentMouseOutBound)}disconnectedCallback(){super.disconnectedCallback(),this._hostResizeObserver.unobserve(this),this._hostResizeObserver.disconnect(),this._contentResizeObserver.unobserve(this._contentElement),this._contentResizeObserver.disconnect(),this.removeEventListener("mouseover",this._onComponentMouseOverBound),this.removeEventListener("mouseout",this._onComponentMouseOutBound)}_updateScrollbar(){const e=this.getBoundingClientRect(),t=this._contentElement.getBoundingClientRect();e.height>=t.height?this._scrollbarVisible=!1:(this._scrollbarVisible=!0,this._thumbHeight=e.height*(e.height/t.height)),this.requestUpdate()}_zIndexFix(){let e=0;this._assignedElements.forEach((t=>{if("style"in t){const n=window.getComputedStyle(t).zIndex;/([0-9-])+/g.test(n)&&(e=Number(n)>e?Number(n):e)}})),this._scrollbarTrackZ=e+1,this.requestUpdate()}_onScrollThumbMouseDown(e){const t=this.getBoundingClientRect(),n=this._scrollThumbElement.getBoundingClientRect();this._mouseStartY=e.screenY,this._scrollThumbStartY=n.top-t.top,this._isDragging=!0,this._thumbActive=!0,document.addEventListener("mousemove",this._onScrollThumbMouseMoveBound),document.addEventListener("mouseup",this._onScrollThumbMouseUpBound)}_onScrollThumbMouseMove(e){const t=this._scrollThumbStartY+(e.screenY-this._mouseStartY);let n=0;const o=this.getBoundingClientRect().height,r=this._scrollThumbElement.getBoundingClientRect().height,i=this._contentElement.getBoundingClientRect().height;n=t<0?0:t>o-r?o-r:t,this._thumbY=n,this._scrollableContainer.scrollTop=n/(o-r)*(i-o)}_onScrollThumbMouseUp(e){this._isDragging=!1,this._thumbActive=!1;const t=this.getBoundingClientRect(),{x:n,y:o,width:r,height:i}=t,{pageX:s,pageY:a}=e;(s>n+r||s<n||a>o+i||a<o)&&(this._thumbFade=!0,this._thumbVisible=!1),document.removeEventListener("mousemove",this._onScrollThumbMouseMoveBound),document.removeEventListener("mouseup",this._onScrollThumbMouseUpBound)}_onScrollableContainerScroll(){const e=this._scrollableContainer.scrollTop;this.scrolled=e>0;const t=this.getBoundingClientRect().height,n=this._scrollThumbElement.getBoundingClientRect().height,o=e/(this._contentElement.getBoundingClientRect().height-t);this._thumbY=o*(t-n)}_onComponentMouseOver(){this._thumbVisible=!0,this._thumbFade=!1}_onComponentMouseOut(){this._thumbActive||(this._thumbVisible=!1,this._thumbFade=!0)}render(){return ee`
      <div
        class="scrollable-container"
        .style=${Ue({userSelect:this._isDragging?"none":"auto"})}
      >
        <div
          class=${Ve({shadow:!0,visible:this.scrolled})}
          .style=${Ue({zIndex:String(this._scrollbarTrackZ)})}
        ></div>
        ${this._isDragging?ee`<div class="prevent-interaction"></div>`:ne}
        <div
          class=${Ve({"scrollbar-track":!0,hidden:!this._scrollbarVisible})}
        >
          <div
            class=${Ve({"scrollbar-thumb":!0,visible:this._thumbVisible,fade:this._thumbFade,active:this._thumbActive})}
            .style=${Ue({height:`${this._thumbHeight}px`,top:`${this._thumbY}px`})}
            @mousedown=${this._onScrollThumbMouseDown}
          ></div>
        </div>
        <div class="content">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
      </div>
    `}};$n.styles=En,Pn([Ce({type:Boolean,reflect:!0})],$n.prototype,"shadow",void 0),Pn([Ce({type:Boolean,reflect:!0})],$n.prototype,"scrolled",void 0),Pn([Ce({type:Number,attribute:"scroll-pos"})],$n.prototype,"scrollPos",null),Pn([Ce({type:Number,attribute:"scroll-max"})],$n.prototype,"scrollMax",null),Pn([Se()],$n.prototype,"_isDragging",void 0),Pn([Se()],$n.prototype,"_thumbHeight",void 0),Pn([Se()],$n.prototype,"_thumbY",void 0),Pn([Se()],$n.prototype,"_thumbVisible",void 0),Pn([Se()],$n.prototype,"_thumbFade",void 0),Pn([Se()],$n.prototype,"_thumbActive",void 0),Pn([Pe(".content")],$n.prototype,"_contentElement",void 0),Pn([Pe(".scrollbar-thumb",!0)],$n.prototype,"_scrollThumbElement",void 0),Pn([Pe(".scrollable-container")],$n.prototype,"_scrollableContainer",void 0),Pn([Ie()],$n.prototype,"_assignedElements",void 0),$n=Pn([Ae("vscode-scrollable")],$n),c({tagName:"vscode-scrollable",elementClass:$n,react:i,displayName:"VscodeScrollable"});const In=mn;var On=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Rn=class extends vn{set selectedIndex(e){this._selectedIndex=e,this._options[e]?(this._activeIndex=e,this._value=this._options[e].value,this._internals.setFormValue(this._value),this._manageRequired()):(this._value="",this._internals.setFormValue(""),this._manageRequired())}get selectedIndex(){return this._selectedIndex}set value(e){this._options[this._selectedIndex]&&(this._options[this._selectedIndex].selected=!1),this._selectedIndex=this._options.findIndex((t=>t.value===e)),this._selectedIndex>-1?(this._options[this._selectedIndex].selected=!0,this._value=e,this._requestedValueToSetLater=""):(this._value="",this._requestedValueToSetLater=e),this._internals.setFormValue(this._value),this._manageRequired()}get value(){return this._options[this._selectedIndex]?this._options[this._selectedIndex]?.value??"":""}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}updateInputValue(){if(!this.combobox)return;const e=this.renderRoot.querySelector(".combobox-input");e&&(e.value=this._options[this._selectedIndex]?this._options[this._selectedIndex].label:"")}constructor(){super(),this.defaultValue="",this.role="listbox",this.name=void 0,this.required=!1,this._requestedValueToSetLater="",this._multiple=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._manageRequired()}))}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,t){this.updateComplete.then((()=>{this.value=e}))}get type(){return"select-one"}get form(){return this._internals.form}async _createAndSelectSuggestedOption(){const e=this._createSuggestedOption();await this.updateComplete,this.selectedIndex=e,this._dispatchChangeEvent();const t=new CustomEvent("vsc-single-select-create-option",{detail:{value:this._options[e]?.value??""}});this.dispatchEvent(t),this._toggleDropdown(!1),this._isPlaceholderOptionActive=!1}_onSlotChange(){if(super._onSlotChange(),this._requestedValueToSetLater){const e=this._options.findIndex((e=>e.value===this._requestedValueToSetLater));e>0&&(this._selectedIndex=e,this._requestedValueToSetLater="")}this._selectedIndex>-1&&this._options.length>0?(this._internals.setFormValue(this._options[this._selectedIndex].value),this._manageRequired()):(this._internals.setFormValue(null),this._manageRequired())}_onArrowUpKeyDown(){if(super._onArrowUpKeyDown(),this.open||this._selectedIndex<=0)return;const e=hn(this.combobox?this._filteredOptions:this._options,this._activeIndex);this._filterPattern="",this._selectedIndex=e,this._activeIndex=e,this._value=e>-1?this._options[e].value:"",this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent()}_onArrowDownKeyDown(){if(super._onArrowDownKeyDown(),this.open||this._selectedIndex>=this._options.length-1)return;const e=un(this.combobox?this._filteredOptions:this._options,this._activeIndex);this._filterPattern="",this._selectedIndex=e,this._activeIndex=e,this._value=e>-1?this._options[e].value:"",this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent()}_onEnterKeyDown(e){super._onEnterKeyDown(e),this.updateInputValue(),this._internals.setFormValue(this._value),this._manageRequired()}_onOptionClick(e){super._onOptionClick(e);const t=e.composedPath().find((e=>{if("matches"in e)return e.matches("li.option")}));t&&!t.matches(".disabled")&&(t.classList.contains("placeholder")?this.creatable&&this._createAndSelectSuggestedOption():(this._selectedIndex=Number(t.dataset.index),this._value=this._options[this._selectedIndex].value,this._toggleDropdown(!1),this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent()))}_manageRequired(){const{value:e}=this;""===e&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._face):this._internals.setValidity({})}_renderSelectFace(){const e=this._options[this._selectedIndex]?.label??"";return ee`
      <div
        class="select-face face"
        @click=${this._onFaceClick}
        tabindex=${this.tabIndex>-1?0:-1}
      >
        <span class="text">${e}</span> ${Xt}
      </div>
    `}};Rn.styles=In,Rn.shadowRootOptions={..._e.shadowRootOptions,delegatesFocus:!0},Rn.formAssociated=!0,On([Ce({attribute:"default-value"})],Rn.prototype,"defaultValue",void 0),On([Ce({type:String,attribute:!0,reflect:!0})],Rn.prototype,"role",void 0),On([Ce({reflect:!0})],Rn.prototype,"name",void 0),On([Ce({type:Number,attribute:"selected-index"})],Rn.prototype,"selectedIndex",null),On([Ce({type:String})],Rn.prototype,"value",null),On([Ce({type:Boolean,reflect:!0})],Rn.prototype,"required",void 0),On([Pe(".face")],Rn.prototype,"_face",void 0),Rn=On([Ae("vscode-single-select")],Rn),c({tagName:"vscode-single-select",elementClass:Rn,react:i,displayName:"VscodeSingleSelect",events:{onChange:"change",onInvalid:"invalid",onVscSingleSelectCreateOption:"vsc-single-select-create-option"}});const zn=[Ne,m`
    :host {
      --separator-border: var(--vscode-editorWidget-border, #454545);

      border: 1px solid var(--vscode-editorWidget-border, #454545);
      display: block;
      overflow: hidden;
      position: relative;
    }

    ::slotted(*) {
      height: 100%;
      width: 100%;
    }

    ::slotted(vscode-split-layout) {
      border: 0;
    }

    .wrapper {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .wrapper.horizontal {
      flex-direction: column;
    }

    .start {
      box-sizing: border-box;
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start {
      border-right: 1px solid var(--separator-border);
    }

    :host([split='horizontal']) .start {
      border-bottom: 1px solid var(--separator-border);
    }

    .end {
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start,
    :host([split='vertical']) .end {
      height: 100%;
    }

    :host([split='horizontal']) .start,
    :host([split='horizontal']) .end {
      width: 100%;
    }

    .handle-overlay {
      display: none;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .handle-overlay.active {
      display: block;
    }

    .handle-overlay.split-vertical {
      cursor: ew-resize;
    }

    .handle-overlay.split-horizontal {
      cursor: ns-resize;
    }

    .handle {
      background-color: transparent;
      position: absolute;
      z-index: 2;
    }

    .handle.hover {
      transition: background-color 0.1s ease-out 0.3s;
      background-color: var(--vscode-sash-hoverBorder, #0078d4);
    }

    .handle.hide {
      background-color: transparent;
      transition: background-color 0.1s ease-out;
    }

    .handle.split-vertical {
      cursor: ew-resize;
      height: 100%;
    }

    .handle.split-horizontal {
      cursor: ns-resize;
      width: 100%;
    }
  `];var An,Nn=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};const Ln=e=>{if(!e)return{value:0,unit:"pixel"};let t,n;return e.endsWith("%")?(t="percent",n=+e.substring(0,e.length-1)):e.endsWith("px")?(t="pixel",n=+e.substring(0,e.length-2)):(t="pixel",n=+e),{unit:t,value:isNaN(n)?0:n}},Tn=(e,t)=>0===t?0:Math.min(100,e/t*100),Bn=(e,t)=>t*(e/100);let Dn=An=class extends ze{set split(e){this._split!==e&&(this._split=e,this.resetHandlePosition())}get split(){return this._split}set handlePosition(e){this._rawHandlePosition=e,this._handlePositionPropChanged()}get handlePosition(){return this._rawHandlePosition}set fixedPane(e){this._fixedPane=e,this._fixedPanePropChanged()}get fixedPane(){return this._fixedPane}constructor(){super(),this._split="vertical",this.resetOnDblClick=!1,this.handleSize=4,this.initialHandlePosition="50%",this._fixedPane="none",this._handlePosition=0,this._isDragActive=!1,this._hover=!1,this._hide=!1,this._boundRect=new DOMRect,this._handleOffset=0,this._wrapperObserved=!1,this._fixedPaneSize=0,this._handleResize=e=>{const t=e[0].contentRect,{width:n,height:o}=t;this._boundRect=t;const r="vertical"===this.split?n:o;"start"===this.fixedPane&&(this._handlePosition=this._fixedPaneSize),"end"===this.fixedPane&&(this._handlePosition=r-this._fixedPaneSize)},this._handleMouseUp=e=>{this._isDragActive=!1,e.target!==this&&(this._hover=!1,this._hide=!0),window.removeEventListener("mouseup",this._handleMouseUp),window.removeEventListener("mousemove",this._handleMouseMove);const{width:t,height:n}=this._boundRect,o="vertical"===this.split?t:n,r=Tn(this._handlePosition,o);this.dispatchEvent(new CustomEvent("vsc-split-layout-change",{detail:{position:this._handlePosition,positionInPercentage:r},composed:!0}))},this._handleMouseMove=e=>{const{clientX:t,clientY:n}=e,{left:o,top:r,height:i,width:s}=this._boundRect,a="vertical"===this.split,l=a?s:i,c=a?t-o:n-r;this._handlePosition=Math.max(0,Math.min(c-this._handleOffset+this.handleSize/2,l)),"start"===this.fixedPane&&(this._fixedPaneSize=this._handlePosition),"end"===this.fixedPane&&(this._fixedPaneSize=l-this._handlePosition)},this._resizeObserver=new ResizeObserver(this._handleResize)}resetHandlePosition(){if(!this._wrapperEl)return void(this._handlePosition=0);const{width:e,height:t}=this._wrapperEl.getBoundingClientRect(),n="vertical"===this.split?e:t,{value:o,unit:r}=Ln(this.initialHandlePosition??"50%");this._handlePosition="percent"===r?Bn(o,n):o}connectedCallback(){super.connectedCallback()}firstUpdated(e){"none"!==this.fixedPane&&(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0),this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:t,unit:n}=this.handlePosition?Ln(this.handlePosition):Ln(this.initialHandlePosition);this._setPosition(t,n),this._initFixedPane()}_handlePositionPropChanged(){if(this.handlePosition&&this._wrapperEl){this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:e,unit:t}=Ln(this.handlePosition);this._setPosition(e,t)}}_fixedPanePropChanged(){this._wrapperEl&&this._initFixedPane()}_initFixedPane(){if("none"===this.fixedPane)this._wrapperObserved&&(this._resizeObserver.unobserve(this._wrapperEl),this._wrapperObserved=!1);else{const{width:e,height:t}=this._boundRect,n="vertical"===this.split?e:t;this._fixedPaneSize="start"===this.fixedPane?this._handlePosition:n-this._handlePosition,this._wrapperObserved||(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0)}}_setPosition(e,t){const{width:n,height:o}=this._boundRect,r="vertical"===this.split?n:o;this._handlePosition="percent"===t?Bn(e,r):e}_handleMouseOver(){this._hover=!0,this._hide=!1}_handleMouseOut(e){1!==e.buttons&&(this._hover=!1,this._hide=!0)}_handleMouseDown(e){e.stopPropagation(),e.preventDefault(),this._boundRect=this._wrapperEl.getBoundingClientRect();const{left:t,top:n}=this._boundRect,{left:o,top:r}=this._handleEl.getBoundingClientRect(),i=e.clientX-t,s=e.clientY-n;"vertical"===this.split&&(this._handleOffset=i-(o-t)),"horizontal"===this.split&&(this._handleOffset=s-(r-n)),this._isDragActive=!0,window.addEventListener("mouseup",this._handleMouseUp),window.addEventListener("mousemove",this._handleMouseMove)}_handleDblClick(){this.resetOnDblClick&&this.resetHandlePosition()}_handleSlotChange(){[...this._nestedLayoutsAtStart,...this._nestedLayoutsAtEnd].forEach((e=>{e instanceof An&&e.resetHandlePosition()}))}render(){const{width:e,height:t}=this._boundRect,n="vertical"===this.split?e:t,o="none"!==this.fixedPane?`${this._handlePosition}px`:`${Tn(this._handlePosition,n)}%`;let r="";r="start"===this.fixedPane?`0 0 ${this._fixedPaneSize}px`:`1 1 ${Tn(this._handlePosition,n)}%`;let i="";i="end"===this.fixedPane?`0 0 ${this._fixedPaneSize}px`:`1 1 ${Tn(n-this._handlePosition,n)}%`;const s={left:"vertical"===this.split?o:"0",top:"vertical"===this.split?"0":o},a=this.handleSize??4;"vertical"===this.split&&(s.marginLeft=0-a/2+"px",s.width=`${a}px`),"horizontal"===this.split&&(s.height=`${a}px`,s.marginTop=0-a/2+"px");const l=Ve({"handle-overlay":!0,active:this._isDragActive,"split-vertical":"vertical"===this.split,"split-horizontal":"horizontal"===this.split}),c=Ve({handle:!0,hover:this._hover,hide:this._hide,"split-vertical":"vertical"===this.split,"split-horizontal":"horizontal"===this.split}),d={wrapper:!0,horizontal:"horizontal"===this.split};return ee`
      <div class=${Ve(d)}>
        <div class="start" .style=${Ue({flex:r})}>
          <slot name="start" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="end" .style=${Ue({flex:i})}>
          <slot name="end" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class=${l}></div>
        <div
          class=${c}
          .style=${Ue(s)}
          @mouseover=${this._handleMouseOver}
          @mouseout=${this._handleMouseOut}
          @mousedown=${this._handleMouseDown}
          @dblclick=${this._handleDblClick}
        ></div>
      </div>
    `}};Dn.styles=zn,Nn([Ce({reflect:!0})],Dn.prototype,"split",null),Nn([Ce({type:Boolean,reflect:!0,attribute:"reset-on-dbl-click"})],Dn.prototype,"resetOnDblClick",void 0),Nn([Ce({type:Number,reflect:!0,attribute:"handle-size"})],Dn.prototype,"handleSize",void 0),Nn([Ce({reflect:!0,attribute:"initial-handle-position"})],Dn.prototype,"initialHandlePosition",void 0),Nn([Ce({attribute:"handle-position"})],Dn.prototype,"handlePosition",null),Nn([Ce({attribute:"fixed-pane"})],Dn.prototype,"fixedPane",null),Nn([Se()],Dn.prototype,"_handlePosition",void 0),Nn([Se()],Dn.prototype,"_isDragActive",void 0),Nn([Se()],Dn.prototype,"_hover",void 0),Nn([Se()],Dn.prototype,"_hide",void 0),Nn([Pe(".wrapper")],Dn.prototype,"_wrapperEl",void 0),Nn([Pe(".handle")],Dn.prototype,"_handleEl",void 0),Nn([Ie({slot:"start",selector:"vscode-split-layout"})],Dn.prototype,"_nestedLayoutsAtStart",void 0),Nn([Ie({slot:"end",selector:"vscode-split-layout"})],Dn.prototype,"_nestedLayoutsAtEnd",void 0),Dn=An=Nn([Ae("vscode-split-layout")],Dn),c({tagName:"vscode-split-layout",elementClass:Dn,react:i,displayName:"VscodeSplitLayout",events:{onVscSplitLayoutChange:"vsc-split-layout-change"}});const Mn=[Ne,m`
    :host {
      border-bottom: 1px solid transparent;
      cursor: pointer;
      display: block;
      margin-bottom: -1px;
      overflow: hidden;
      padding: 7px 8px;
      text-overflow: ellipsis;
      user-select: none;
      white-space: nowrap;
    }

    :host([active]) {
      border-bottom-color: var(--vscode-panelTitle-activeForeground);
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) {
      border-bottom: 0;
      margin-bottom: 0;
      padding: 0;
    }

    :host(:focus-visible) {
      outline: none;
    }

    .wrapper {
      align-items: center;
      color: var(--vscode-foreground);
      display: flex;
      min-height: 20px;
      overflow: inherit;
      text-overflow: inherit;
      position: relative;
    }

    .wrapper.panel {
      color: var(--vscode-panelTitle-inactiveForeground);
    }

    .wrapper.panel.active,
    .wrapper.panel:hover {
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) .wrapper {
      display: flex;
      font-size: 11px;
      height: 31px;
      padding: 2px 10px;
      text-transform: uppercase;
    }

    .main {
      overflow: inherit;
      text-overflow: inherit;
    }

    .active-indicator {
      display: none;
    }

    .active-indicator.panel.active {
      border-top: 1px solid var(--vscode-panelTitle-activeBorder);
      bottom: 4px;
      display: block;
      left: 8px;
      pointer-events: none;
      position: absolute;
      right: 8px;
    }

    :host(:focus-visible) .wrapper {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host(:focus-visible) .wrapper.panel {
      outline-offset: -2px;
    }

    slot[name='content-before']::slotted(vscode-badge) {
      margin-right: 8px;
    }

    slot[name='content-after']::slotted(vscode-badge) {
      margin-left: 8px;
    }
  `];var Fn=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Vn=class extends ze{constructor(){super(...arguments),this.active=!1,this.ariaControls="",this.panel=!1,this.role="tab",this.tabId=-1}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),"active"===e){const e=null!==n;this.ariaSelected=e?"true":"false",this.tabIndex=e?0:-1}}render(){return ee`
      <div
        class=${Ve({wrapper:!0,active:this.active,panel:this.panel})}
      >
        <div class="before"><slot name="content-before"></slot></div>
        <div class="main"><slot></slot></div>
        <div class="after"><slot name="content-after"></slot></div>
        <span
          class=${Ve({"active-indicator":!0,active:this.active,panel:this.panel})}
        ></span>
      </div>
    `}};Vn.styles=Mn,Fn([Ce({type:Boolean,reflect:!0})],Vn.prototype,"active",void 0),Fn([Ce({reflect:!0,attribute:"aria-controls"})],Vn.prototype,"ariaControls",void 0),Fn([Ce({type:Boolean,reflect:!0})],Vn.prototype,"panel",void 0),Fn([Ce({reflect:!0})],Vn.prototype,"role",void 0),Fn([Ce({type:Number,reflect:!0,attribute:"tab-id"})],Vn.prototype,"tabId",void 0),Vn=Fn([Ae("vscode-tab-header")],Vn),c({tagName:"vscode-tab-header",elementClass:Vn,react:i,displayName:"VscTabHeader"});const jn=(e,t)=>"number"!=typeof e||Number.isNaN(e)?"string"==typeof e&&/^[0-9.]+$/.test(e)?Number(e)/t*100:"string"==typeof e&&/^[0-9.]+%$/.test(e)?Number(e.substring(0,e.length-1)):"string"==typeof e&&/^[0-9.]+px$/.test(e)?Number(e.substring(0,e.length-2))/t*100:null:e/t*100,Un=[Ne,m`
    :host {
      display: block;
      --vsc-row-even-background: transparent;
      --vsc-row-odd-background: transparent;
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 0;
      --vsc-row-display: table-row;
    }

    :host([bordered]),
    :host([bordered-rows]) {
      --vsc-row-border-bottom-width: 1px;
    }

    :host([compact]) {
      --vsc-row-display: block;
    }

    :host([bordered][compact]),
    :host([bordered-rows][compact]) {
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 1px;
    }

    :host([zebra]) {
      --vsc-row-even-background: var(--vscode-keybindingTable-rowsBackground);
    }

    :host([zebra-odd]) {
      --vsc-row-odd-background: var(--vscode-keybindingTable-rowsBackground);
    }

    ::slotted(vscode-table-row) {
      width: 100%;
    }

    .wrapper {
      height: 100%;
      max-width: 100%;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .wrapper.select-disabled {
      user-select: none;
    }

    .wrapper.resize-cursor {
      cursor: ew-resize;
    }

    .wrapper.compact-view .header-slot-wrapper {
      height: 0;
      overflow: hidden;
    }

    .scrollable {
      height: 100%;
    }

    .scrollable:before {
      background-color: transparent;
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
    }

    .wrapper:not(.compact-view) .scrollable:not([scrolled]):before {
      background-color: var(--vscode-editorGroup-border);
    }

    .sash {
      visibility: hidden;
    }

    :host([bordered-columns]) .sash,
    :host([bordered]) .sash {
      visibility: visible;
    }

    :host([resizable]) .wrapper:hover .sash {
      visibility: visible;
    }

    .sash {
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
    }

    .wrapper.compact-view .sash {
      display: none;
    }

    .sash.resizable {
      cursor: ew-resize;
    }

    .sash-visible {
      background-color: var(--vscode-editorGroup-border);
      height: 100%;
      position: absolute;
      top: 30px;
      width: 1px;
    }

    .sash.hover .sash-visible {
      background-color: var(--vscode-sash-hoverBorder);
      transition: background-color 50ms linear 300ms;
    }

    .sash .sash-clickable {
      background-color: transparent;
      height: 100%;
      left: -2px;
      position: absolute;
      width: 5px;
    }
  `];var Hn=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let qn=class extends ze{constructor(){super(...arguments),this.role="table",this.resizable=!1,this.responsive=!1,this.bordered=!1,this.borderedColumns=!1,this.borderedRows=!1,this.breakpoint=300,this.minColumnWidth="50px",this.delayedResizing=!1,this.compact=!1,this.zebra=!1,this.zebraOdd=!1,this._sashPositions=[],this._isDragging=!1,this._sashHovers=[],this._columns=[],this._activeSashElementIndex=-1,this._activeSashCursorOffset=0,this._componentX=0,this._componentH=0,this._componentW=0,this._headerCells=[],this._cellsOfFirstRow=[],this._prevHeaderHeight=0,this._prevComponentHeight=0,this._componentResizeObserverCallback=()=>{this._memoizeComponentDimensions(),this._updateResizeHandlersSize(),this.responsive&&this._toggleCompactView(),this._resizeTableBody()},this._headerResizeObserverCallback=()=>{this._updateResizeHandlersSize()},this._bodyResizeObserverCallback=()=>{this._resizeTableBody()},this._onResizingMouseMove=e=>{e.stopPropagation(),this._updateActiveSashPosition(e.pageX),this.delayedResizing?this._resizeColumns(!1):this._resizeColumns(!0)},this._onResizingMouseUp=e=>{this._resizeColumns(!0),this._updateActiveSashPosition(e.pageX),this._sashHovers[this._activeSashElementIndex]=!1,this._isDragging=!1,this._activeSashElementIndex=-1,document.removeEventListener("mousemove",this._onResizingMouseMove),document.removeEventListener("mouseup",this._onResizingMouseUp)}}set columns(e){this._columns=e,this.isConnected&&this._initDefaultColumnSizes()}get columns(){return this._columns}connectedCallback(){super.connectedCallback(),this._memoizeComponentDimensions(),this._initDefaultColumnSizes()}disconnectedCallback(){super.disconnectedCallback(),this._componentResizeObserver?.unobserve(this),this._componentResizeObserver?.disconnect(),this._bodyResizeObserver?.disconnect()}_px2Percent(e){return e/this._componentW*100}_percent2Px(e){return this._componentW*e/100}_memoizeComponentDimensions(){const e=this.getBoundingClientRect();this._componentH=e.height,this._componentW=e.width,this._componentX=e.x}_queryHeaderCells(){const e=this._assignedHeaderElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-header-cell")):[]}_getHeaderCells(){return this._headerCells.length||(this._headerCells=this._queryHeaderCells()),this._headerCells}_queryCellsOfFirstRow(){const e=this._assignedBodyElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-row:first-child vscode-table-cell")):[]}_getCellsOfFirstRow(){return this._cellsOfFirstRow.length||(this._cellsOfFirstRow=this._queryCellsOfFirstRow()),this._cellsOfFirstRow}_resizeTableBody(){let e=0,t=0;const n=this.getBoundingClientRect().height;this._assignedHeaderElements&&this._assignedHeaderElements.length&&(e=this._assignedHeaderElements[0].getBoundingClientRect().height),this._assignedBodyElements&&this._assignedBodyElements.length&&(t=this._assignedBodyElements[0].getBoundingClientRect().height);const o=t-e-n;this._scrollableElement.style.height=o>0?n-e+"px":"auto"}_initResizeObserver(){this._componentResizeObserver=new ResizeObserver(this._componentResizeObserverCallback),this._componentResizeObserver.observe(this),this._headerResizeObserver=new ResizeObserver(this._headerResizeObserverCallback),this._headerResizeObserver.observe(this._headerElement)}_calcColWidthPercentages(){const e=this._getHeaderCells().length;let t=this.columns.slice(0,e);const n=t.filter((e=>"auto"===e)).length+e-t.length;let o=100;if(t=t.map((e=>{const t=jn(e,this._componentW);return null===t?"auto":(o-=t,t)})),t.length<e)for(let n=t.length;n<e;n++)t.push("auto");return t=t.map((e=>"auto"===e?o/n:e)),t}_initHeaderCellSizes(e){this._getHeaderCells().forEach(((t,n)=>{t.style.width=`${e[n]}%`}))}_initBodyColumnSizes(e){this._getCellsOfFirstRow().forEach(((t,n)=>{t.style.width=`${e[n]}%`}))}_initSashes(e){const t=e.length;let n=0;this._sashPositions=[],e.forEach(((e,o)=>{if(o<t-1){const t=n+e;this._sashPositions.push(t),n=t}}))}_initDefaultColumnSizes(){const e=this._calcColWidthPercentages();this._initHeaderCellSizes(e),this._initBodyColumnSizes(e),this._initSashes(e)}_updateResizeHandlersSize(){const e=this._headerElement.getBoundingClientRect();if(e.height===this._prevHeaderHeight&&this._componentH===this._prevComponentHeight)return;this._prevHeaderHeight=e.height,this._prevComponentHeight=this._componentH;const t=this._componentH-e.height;this._sashVisibleElements.forEach((n=>{n.style.height=`${t}px`,n.style.top=`${e.height}px`}))}_applyCompactViewColumnLabels(){const e=this._getHeaderCells().map((e=>e.innerText));this.querySelectorAll("vscode-table-row").forEach((t=>{t.querySelectorAll("vscode-table-cell").forEach(((t,n)=>{t.columnLabel=e[n],t.compact=!0}))}))}_clearCompactViewColumnLabels(){this.querySelectorAll("vscode-table-cell").forEach((e=>{e.columnLabel="",e.compact=!1}))}_toggleCompactView(){const e=this.getBoundingClientRect().width<this.breakpoint;this.compact!==e&&(this.compact=e,e?this._applyCompactViewColumnLabels():this._clearCompactViewColumnLabels())}_onDefaultSlotChange(){this._assignedElements.forEach((e=>{"vscode-table-header"!==e.tagName.toLowerCase()?"vscode-table-body"!==e.tagName.toLowerCase()||(e.slot="body"):e.slot="header"}))}_onHeaderSlotChange(){this._headerCells=this._queryHeaderCells()}_onBodySlotChange(){if(this._initDefaultColumnSizes(),this._initResizeObserver(),this._updateResizeHandlersSize(),!this._bodyResizeObserver){const e=this._assignedBodyElements[0]??null;e&&(this._bodyResizeObserver=new ResizeObserver(this._bodyResizeObserverCallback),this._bodyResizeObserver.observe(e))}}_onSashMouseOver(e){if(this._isDragging)return;const t=e.currentTarget,n=Number(t.dataset.index);this._sashHovers[n]=!0,this.requestUpdate()}_onSashMouseOut(e){if(e.stopPropagation(),this._isDragging)return;const t=e.currentTarget,n=Number(t.dataset.index);this._sashHovers[n]=!1,this.requestUpdate()}_onSashMouseDown(e){e.stopPropagation();const{pageX:t,currentTarget:n}=e,o=n,r=Number(o.dataset.index),i=o.getBoundingClientRect().x;this._isDragging=!0,this._activeSashElementIndex=r,this._sashHovers[this._activeSashElementIndex]=!0,this._activeSashCursorOffset=this._px2Percent(t-i);const s=this._getHeaderCells();this._headerCellsToResize=[],this._headerCellsToResize.push(s[r]),s[r+1]&&(this._headerCellsToResize[1]=s[r+1]);const a=this._bodySlot.assignedElements()[0].querySelectorAll("vscode-table-row:first-child > vscode-table-cell");this._cellsToResize=[],this._cellsToResize.push(a[r]),a[r+1]&&this._cellsToResize.push(a[r+1]),document.addEventListener("mousemove",this._onResizingMouseMove),document.addEventListener("mouseup",this._onResizingMouseUp)}_updateActiveSashPosition(e){const{prevSashPos:t,nextSashPos:n}=this._getSashPositions();let o=jn(this.minColumnWidth,this._componentW);null===o&&(o=0);const r=t?t+o:o,i=n?n-o:100-o;let s=this._px2Percent(e-this._componentX-this._percent2Px(this._activeSashCursorOffset));s=Math.max(s,r),s=Math.min(s,i),this._sashPositions[this._activeSashElementIndex]=s,this.requestUpdate()}_getSashPositions(){return{sashPos:this._sashPositions[this._activeSashElementIndex],prevSashPos:this._sashPositions[this._activeSashElementIndex-1]||0,nextSashPos:this._sashPositions[this._activeSashElementIndex+1]||100}}_resizeColumns(e=!0){const{sashPos:t,prevSashPos:n,nextSashPos:o}=this._getSashPositions(),r=t-n+"%",i=o-t+"%";this._headerCellsToResize[0].style.width=r,this._headerCellsToResize[1]&&(this._headerCellsToResize[1].style.width=i),e&&(this._cellsToResize[0].style.width=r,this._cellsToResize[1]&&(this._cellsToResize[1].style.width=i))}render(){const e=this._sashPositions.map(((e,t)=>{const n=Ve({sash:!0,hover:this._sashHovers[t],resizable:this.resizable}),o=`${e}%`;return this.resizable?ee`
            <div
              class=${n}
              data-index=${t}
              .style=${Ue({left:o})}
              @mousedown=${this._onSashMouseDown}
              @mouseover=${this._onSashMouseOver}
              @mouseout=${this._onSashMouseOut}
            >
              <div class="sash-visible"></div>
              <div class="sash-clickable"></div>
            </div>
          `:ee`<div
            class=${n}
            data-index=${t}
            .style=${Ue({left:o})}
          >
            <div class="sash-visible"></div>
          </div>`})),t=Ve({wrapper:!0,"select-disabled":this._isDragging,"resize-cursor":this._isDragging,"compact-view":this.compact});return ee`
      <div class=${t}>
        <div class="header">
          <slot name="caption"></slot>
          <div class="header-slot-wrapper">
            <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
          </div>
        </div>
        <vscode-scrollable class="scrollable">
          <div>
            <slot name="body" @slotchange=${this._onBodySlotChange}></slot>
          </div>
        </vscode-scrollable>
        ${e}
        <slot @slotchange=${this._onDefaultSlotChange}></slot>
      </div>
    `}};qn.styles=Un,Hn([Ce({reflect:!0})],qn.prototype,"role",void 0),Hn([Ce({type:Boolean,reflect:!0})],qn.prototype,"resizable",void 0),Hn([Ce({type:Boolean,reflect:!0})],qn.prototype,"responsive",void 0),Hn([Ce({type:Boolean,reflect:!0})],qn.prototype,"bordered",void 0),Hn([Ce({type:Boolean,reflect:!0,attribute:"bordered-columns"})],qn.prototype,"borderedColumns",void 0),Hn([Ce({type:Boolean,reflect:!0,attribute:"bordered-rows"})],qn.prototype,"borderedRows",void 0),Hn([Ce({type:Number})],qn.prototype,"breakpoint",void 0),Hn([Ce({type:Array})],qn.prototype,"columns",null),Hn([Ce({attribute:"min-column-width"})],qn.prototype,"minColumnWidth",void 0),Hn([Ce({type:Boolean,reflect:!0,attribute:"delayed-resizing"})],qn.prototype,"delayedResizing",void 0),Hn([Ce({type:Boolean,reflect:!0})],qn.prototype,"compact",void 0),Hn([Ce({type:Boolean,reflect:!0})],qn.prototype,"zebra",void 0),Hn([Ce({type:Boolean,reflect:!0,attribute:"zebra-odd"})],qn.prototype,"zebraOdd",void 0),Hn([Pe('slot[name="body"]')],qn.prototype,"_bodySlot",void 0),Hn([Pe(".header")],qn.prototype,"_headerElement",void 0),Hn([Pe(".scrollable")],qn.prototype,"_scrollableElement",void 0),Hn([(e,t)=>Ee(e,t,{get(){return(this.renderRoot??($e??=document.createDocumentFragment())).querySelectorAll(".sash-visible")}})],qn.prototype,"_sashVisibleElements",void 0),Hn([Ie({flatten:!0,selector:"vscode-table-header, vscode-table-body"})],qn.prototype,"_assignedElements",void 0),Hn([Ie({slot:"header",flatten:!0,selector:"vscode-table-header"})],qn.prototype,"_assignedHeaderElements",void 0),Hn([Ie({slot:"body",flatten:!0,selector:"vscode-table-body"})],qn.prototype,"_assignedBodyElements",void 0),Hn([Se()],qn.prototype,"_sashPositions",void 0),Hn([Se()],qn.prototype,"_isDragging",void 0),qn=Hn([Ae("vscode-table")],qn),c({tagName:"vscode-table",elementClass:qn,react:i,displayName:"VscodeTable"});const Wn=[Ne,m`
    :host {
      display: table;
      table-layout: fixed;
      width: 100%;
    }

    ::slotted(vscode-table-row:nth-child(even)) {
      background-color: var(--vsc-row-even-background);
    }

    ::slotted(vscode-table-row:nth-child(odd)) {
      background-color: var(--vsc-row-odd-background);
    }
  `];var Kn=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Qn=class extends ze{constructor(){super(...arguments),this.role="rowgroup"}render(){return ee` <slot></slot> `}};Qn.styles=Wn,Kn([Ce({reflect:!0})],Qn.prototype,"role",void 0),Qn=Kn([Ae("vscode-table-body")],Qn),c({tagName:"vscode-table-body",elementClass:Qn,react:i,displayName:"VscodeTableBody"});const Yn=[Ne,m`
    :host {
      border-bottom-color: var(--vscode-editorGroup-border);
      border-bottom-style: solid;
      border-bottom-width: var(--vsc-row-border-bottom-width);
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      height: 24px;
      overflow: hidden;
      padding-left: 10px;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: nowrap;
    }

    :host([compact]) {
      display: block;
      height: auto;
      padding-bottom: 5px;
      width: 100% !important;
    }

    :host([compact]:first-child) {
      padding-top: 10px;
    }

    :host([compact]:last-child) {
      padding-bottom: 10px;
    }

    .wrapper {
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }

    .column-label {
      font-weight: bold;
    }
  `];var Gn=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Xn=class extends ze{constructor(){super(...arguments),this.role="cell",this.columnLabel="",this.compact=!1}render(){const e=this.columnLabel?ee`<div class="column-label" role="presentation">
          ${this.columnLabel}
        </div>`:ne;return ee`
      <div class="wrapper">
        ${e}
        <slot></slot>
      </div>
    `}};Xn.styles=Yn,Gn([Ce({reflect:!0})],Xn.prototype,"role",void 0),Gn([Ce({attribute:"column-label"})],Xn.prototype,"columnLabel",void 0),Gn([Ce({type:Boolean,reflect:!0})],Xn.prototype,"compact",void 0),Xn=Gn([Ae("vscode-table-cell")],Xn),c({tagName:"vscode-table-cell",elementClass:Xn,react:i,displayName:"VscodeTableCell"});const Zn=[Ne,m`
    :host {
      background-color: var(--vscode-keybindingTable-headerBackground);
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  `];var Jn=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let eo=class extends ze{constructor(){super(...arguments),this.role="rowgroup"}render(){return ee` <slot></slot> `}};eo.styles=Zn,Jn([Ce({reflect:!0})],eo.prototype,"role",void 0),eo=Jn([Ae("vscode-table-header")],eo),c({tagName:"vscode-table-header",elementClass:eo,react:i,displayName:"VscodeTableHeader"});const to=[Ne,m`
    :host {
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: bold;
      line-height: 20px;
      overflow: hidden;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 0;
      padding-top: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .wrapper {
      box-sizing: inherit;
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }
  `];var no=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let oo=class extends ze{constructor(){super(...arguments),this.role="columnheader"}render(){return ee`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};oo.styles=to,no([Ce({reflect:!0})],oo.prototype,"role",void 0),oo=no([Ae("vscode-table-header-cell")],oo),c({tagName:"vscode-table-header-cell",elementClass:oo,react:i,displayName:"VscodeTableHeaderCell"});const ro=[Ne,m`
    :host {
      border-top-color: var(--vscode-editorGroup-border);
      border-top-style: solid;
      border-top-width: var(--vsc-row-border-top-width);
      display: var(--vsc-row-display);
      width: 100%;
    }
  `];var io=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let so=class extends ze{constructor(){super(...arguments),this.role="row"}render(){return ee` <slot></slot> `}};so.styles=ro,io([Ce({reflect:!0})],so.prototype,"role",void 0),so=io([Ae("vscode-table-row")],so),c({tagName:"vscode-table-row",elementClass:so,react:i,displayName:"VscodeTableRow"});const ao=[Ne,m`
    :host {
      display: block;
      overflow: hidden;
    }

    :host(:focus-visible) {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host([panel]) {
      background-color: var(--vscode-panel-background);
    }
  `];var lo=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let co=class extends ze{constructor(){super(...arguments),this.hidden=!1,this.ariaLabelledby="",this.panel=!1,this.role="tabpanel",this.tabIndex=0}render(){return ee` <slot></slot> `}};co.styles=ao,lo([Ce({type:Boolean,reflect:!0})],co.prototype,"hidden",void 0),lo([Ce({reflect:!0,attribute:"aria-labelledby"})],co.prototype,"ariaLabelledby",void 0),lo([Ce({type:Boolean,reflect:!0})],co.prototype,"panel",void 0),lo([Ce({reflect:!0})],co.prototype,"role",void 0),lo([Ce({type:Number,reflect:!0})],co.prototype,"tabIndex",void 0),co=lo([Ae("vscode-tab-panel")],co),c({tagName:"vscode-tab-panel",elementClass:co,react:i,displayName:"VscodeTabPanel"});const uo=[Ne,m`
    :host {
      display: block;
    }

    .header {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      width: 100%;
    }

    .header {
      border-bottom-color: var(--vscode-settings-headerBorder);
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    .header.panel {
      background-color: var(--vscode-panel-background);
      border-bottom-width: 0;
      box-sizing: border-box;
      padding-left: 8px;
      padding-right: 8px;
    }

    slot[name='addons'] {
      display: block;
      margin-left: auto;
    }
  `];var ho=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let po=class extends ze{constructor(){super(),this.panel=!1,this.role="tablist",this.selectedIndex=0,this._tabHeaders=[],this._tabPanels=[],this._componentId="",this._tabFocus=0,this._componentId=Tt()}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"selected-index"===e&&this._setActiveTab(),"panel"===e&&(this._tabHeaders.forEach((e=>e.panel=null!==n)),this._tabPanels.forEach((e=>e.panel=null!==n)))}_dispatchSelectEvent(){this.dispatchEvent(new CustomEvent("vsc-select",{detail:{selectedIndex:this.selectedIndex},composed:!0})),this.dispatchEvent(new CustomEvent("vsc-tabs-select",{detail:{selectedIndex:this.selectedIndex},composed:!0}))}_setActiveTab(){this._tabFocus=this.selectedIndex,this._tabPanels.forEach(((e,t)=>{e.hidden=t!==this.selectedIndex})),this._tabHeaders.forEach(((e,t)=>{e.active=t===this.selectedIndex}))}_focusPrevTab(){0===this._tabFocus?this._tabFocus=this._tabHeaders.length-1:this._tabFocus-=1}_focusNextTab(){this._tabFocus===this._tabHeaders.length-1?this._tabFocus=0:this._tabFocus+=1}_onHeaderKeyDown(e){"ArrowLeft"!==e.key&&"ArrowRight"!==e.key||(e.preventDefault(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","-1"),"ArrowLeft"===e.key?this._focusPrevTab():"ArrowRight"===e.key&&this._focusNextTab(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","0"),this._tabHeaders[this._tabFocus].focus()),"Enter"===e.key&&(e.preventDefault(),this.selectedIndex=this._tabFocus,this._dispatchSelectEvent())}_moveHeadersToHeaderSlot(){const e=this._mainSlotElements.filter((e=>e instanceof Vn));e.length>0&&e.forEach((e=>e.setAttribute("slot","header")))}_onMainSlotChange(){this._moveHeadersToHeaderSlot(),this._tabPanels=this._mainSlotElements.filter((e=>e instanceof co)),this._tabPanels.forEach(((e,t)=>{e.ariaLabelledby=`t${this._componentId}-h${t}`,e.id=`t${this._componentId}-p${t}`,e.panel=this.panel})),this._setActiveTab()}_onHeaderSlotChange(){this._tabHeaders=this._headerSlotElements.filter((e=>e instanceof Vn)),this._tabHeaders.forEach(((e,t)=>{e.tabId=t,e.id=`t${this._componentId}-h${t}`,e.ariaControls=`t${this._componentId}-p${t}`,e.panel=this.panel,e.active=t===this.selectedIndex}))}_onHeaderClick(e){const t=e.composedPath().find((e=>e instanceof Vn));t&&(this.selectedIndex=t.tabId,this._setActiveTab(),this._dispatchSelectEvent())}render(){return ee`
      <div
        class=${Ve({header:!0,panel:this.panel})}
        @click=${this._onHeaderClick}
        @keydown=${this._onHeaderKeyDown}
      >
        <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        <slot name="addons"></slot>
      </div>
      <slot @slotchange=${this._onMainSlotChange}></slot>
    `}};po.styles=uo,ho([Ce({type:Boolean,reflect:!0})],po.prototype,"panel",void 0),ho([Ce({reflect:!0})],po.prototype,"role",void 0),ho([Ce({type:Number,reflect:!0,attribute:"selected-index"})],po.prototype,"selectedIndex",void 0),ho([Ie({slot:"header"})],po.prototype,"_headerSlotElements",void 0),ho([Ie()],po.prototype,"_mainSlotElements",void 0),po=ho([Ae("vscode-tabs")],po),c({tagName:"vscode-tabs",elementClass:po,react:i,events:{onVscTabsSelect:"vsc-tabs-select"},displayName:"VscodeTabs"});const fo=c({tagName:"vscode-textarea",elementClass:jt,react:i,displayName:"VscodeTextarea",events:{onChange:"change",onInput:"input",onInvalid:"invalid"}}),vo=c({tagName:"vscode-textfield",elementClass:Wt,react:i,displayName:"VscodeTextfield",events:{onChange:"change",onInput:"input",onInvalid:"invalid"}}),mo=[Ne,m`
    :host {
      --hover-outline-color: transparent;
      --hover-outline-style: solid;
      --hover-outline-width: 0;
      --selected-outline-color: transparent;
      --selected-outline-style: solid;
      --selected-outline-width: 0;

      display: block;
      outline: none;
      user-select: none;
    }

    .wrapper {
      height: 100%;
    }

    li {
      list-style: none;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
    }

    ul {
      position: relative;
    }

    :host([indent-guides]) ul ul:before {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: var(--indent-guide-pos);
      top: 0;
      pointer-events: none;
      width: 1px;
      z-index: 1;
    }

    .contents {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      outline-offset: -1px;
      padding-right: 12px;
    }

    .multi .contents {
      align-items: flex-start;
    }

    .contents:hover {
      cursor: pointer;
    }

    .arrow-container {
      align-items: center;
      display: flex;
      height: 22px;
      justify-content: center;
      padding-left: 8px;
      padding-right: 6px;
      width: 16px;
    }

    .icon-arrow {
      color: currentColor;
      display: block;
    }

    .theme-icon {
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
    }

    .image-icon {
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: 16px;
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
      height: 22px;
      width: 16px;
    }

    .multi .contents .theme-icon {
      margin-top: 3px;
    }

    .text-content {
      display: flex;
      line-height: 22px;
    }

    .single .text-content {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .description {
      font-size: 0.9em;
      line-height: 22px;
      margin-left: 0.5em;
      opacity: 0.95;
      white-space: pre;
    }

    .actions {
      display: none;
    }

    .contents.selected > .actions,
    .contents.focused > .actions,
    .contents:hover > .actions {
      display: flex;
    }

    .decorations {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: 5px;
    }

    .filled-circle {
      margin-right: 3px;
      opacity: 0.4;
    }

    .decoration-text {
      font-size: 90%;
      font-weight: 600;
      margin-right: 3px;
      opacity: 0.75;
    }

    .filled-circle,
    .decoration-text {
      color: var(--color, currentColor);
    }

    .contents:hover .filled-circle,
    .contents:hover .decoration-text {
      color: var(--hover-color, var(--color));
    }

    .contents.focused .filled-circle,
    .contents.focused .decoration-text {
      color: var(--focused-color, var(--color));
    }

    .contents.selected .filled-circle,
    .contents.selected .decoration-text {
      color: var(--selected-color, var(--color));
    }

    /* Theme colors */
    :host(:focus) .wrapper.has-not-focused-item {
      outline: 1px solid var(--vscode-focusBorder);
    }

    :host(:focus) .contents.selected,
    :host(:focus) .contents.focused.selected {
      color: var(--vscode-list-activeSelectionForeground);
      background-color: var(--vscode-list-activeSelectionBackground);
    }

    :host(:focus) .contents.selected .icon-arrow,
    :host(:focus) .contents.selected.focused .icon-arrow,
    :host(:focus) .contents.selected .theme-icon,
    :host(:focus) .contents.selected.focused .theme-icon,
    :host(:focus) .contents.selected .action-icon,
    :host(:focus) .contents.selected.focused .action-icon {
      color: var(--vscode-list-activeSelectionIconForeground);
    }

    :host(:focus) .contents.focused {
      color: var(--vscode-list-focusForeground);
      background-color: var(--vscode-list-focusBackground);
    }

    :host(:focus) .contents.selected.focused {
      outline-color: var(
        --vscode-list-focusAndSelectionOutline,
        var(--vscode-list-focusOutline)
      );
    }

    .contents:hover {
      background-color: var(--vscode-list-hoverBackground);
      color: var(--vscode-list-hoverForeground);
    }

    .contents:hover,
    .contents.selected:hover {
      outline-color: var(--hover-outline-color);
      outline-style: var(--hover-outline-style);
      outline-width: var(--hover-outline-width);
    }

    .contents.selected,
    .contents.selected.focused {
      background-color: var(--vscode-list-inactiveSelectionBackground);
      color: var(--vscode-list-inactiveSelectionForeground);
    }

    .contents.selected,
    .contents.selected.focused {
      outline-color: var(--selected-outline-color);
      outline-style: var(--selected-outline-style);
      outline-width: var(--selected-outline-width);
    }

    .contents.selected .theme-icon {
      color: var(--vscode-list-inactiveSelectionIconForeground);
    }

    .contents.focused {
      background-color: var(--vscode-list-inactiveFocusBackground);
      outline: 1px dotted var(--vscode-list-inactiveFocusOutline);
    }

    :host(:focus) .contents.focused {
      outline: 1px solid var(--vscode-list-focusOutline);
    }

    :host([indent-guides]) ul ul:before {
      background-color: var(--vscode-tree-inactiveIndentGuidesStroke);
    }

    :host([indent-guides]) ul ul.has-active-item:before {
      background-color: var(--vscode-tree-indentGuidesStroke);
    }
  `];var go=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};const bo=(e,t=[])=>{const n=[];return e.forEach(((e,o)=>{const r=[...t,o],i={...e,path:r};e.subItems&&(i.subItems=bo(e.subItems,r)),n.push(i)})),n},yo=e=>!!(e.subItems&&Array.isArray(e.subItems)&&e?.subItems?.length>0);let _o=class extends ze{constructor(){super(...arguments),this.indent=8,this.arrows=!1,this.multiline=!1,this.tabindex=0,this.indentGuides=!1,this._data=[],this._selectedItem=null,this._focusedItem=null,this._selectedBranch=null,this._focusedBranch=null,this._handleComponentKeyDownBound=this._handleComponentKeyDown.bind(this)}set data(e){const t=this._data;this._data=bo(e),this.requestUpdate("data",t)}get data(){return this._data}closeAll(){this._closeSubTreeRecursively(this.data),this.requestUpdate()}deselectAll(){this._deselectItemsRecursively(this.data),this.requestUpdate()}getItemByPath(e){return this._getItemByPath(e)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleComponentKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleComponentKeyDownBound)}_getItemByPath(e){let t=this._data,n=null;return e.forEach(((o,r)=>{r===e.length-1?n=t[o]:t=t[o].subItems})),n}_handleActionClick(e){e.stopPropagation();const t=e.target,n=t.dataset.itemPath,o=t.dataset.index;let r=null,i="",s="";if(n){const e=n.split("/").map((e=>Number(e)));if(r=this._getItemByPath(e),r?.actions){const e=Number(o);r.actions[e]&&(i=r.actions[e].actionId)}r?.value&&(s=r.value)}this.dispatchEvent(new CustomEvent("vsc-run-action",{detail:{actionId:i,item:r,value:s}})),this.dispatchEvent(new CustomEvent("vsc-tree-action",{detail:{actionId:i,item:r,value:s}}))}_renderIconVariant(e){const{type:t,value:n}=e;return"themeicon"===t?ee`<vscode-icon name=${n} class="theme-icon"></vscode-icon>`:ee`<span
        class="image-icon"
        .style=${Ue({backgroundImage:`url(${n})`})}
      ></span>`}_renderIcon(e){const t={branch:{value:"folder",type:"themeicon"},open:{value:"folder-opened",type:"themeicon"},leaf:{value:"file",type:"themeicon"}};if(e.iconUrls)e.iconUrls.branch&&(t.branch={value:e.iconUrls.branch,type:"image"}),e.iconUrls.leaf&&(t.leaf={value:e.iconUrls.leaf,type:"image"}),e.iconUrls.open&&(t.open={value:e.iconUrls.open,type:"image"});else if("object"==typeof e.icons)e.icons.branch&&(t.branch={value:e.icons.branch,type:"themeicon"}),e.icons.leaf&&(t.leaf={value:e.icons.leaf,type:"themeicon"}),e.icons.open&&(t.open={value:e.icons.open,type:"themeicon"});else if(!e.icons)return ee`${ne}`;return yo(e)?e.open?this._renderIconVariant(t.open):this._renderIconVariant(t.branch):this._renderIconVariant(t.leaf)}_renderArrow(e){if(!this.arrows||!yo(e))return ee`${ne}`;const{open:t=!1}=e;return ee`
      <div class="arrow-container">
        <vscode-icon name=${t?"chevron-down":"chevron-right"} class="icon-arrow"></vscode-icon>
      </div>
    `}_renderActions(e){const t=[];return e.actions&&Array.isArray(e.actions)&&e.actions.forEach(((n,o)=>{if(n.icon){const r=ee`<vscode-icon
            name=${n.icon}
            action-icon
            title=${je(n.tooltip)}
            data-item-path=${je(e.path?.join("/"))}
            data-index=${o}
            class="action-icon"
            @click=${this._handleActionClick}
          ></vscode-icon>`;t.push(r)}})),t.length>0?ee`<div class="actions">${t}</div>`:ee`${ne}`}_renderDecorations(e){const t=[];return e.decorations&&Array.isArray(e.decorations)&&e.decorations.forEach((e=>{const{appearance:n="text",visibleWhen:o="always",content:r="",color:i="",focusedColor:s="",hoverColor:a="",selectedColor:l=""}=e,c=`visible-when-${o}`,d={};switch(i&&(d["--color"]=i),s&&(d["--focused-color"]=s),a&&(d["--hover-color"]=a),l&&(d["--selected-color"]=l),n){case"counter-badge":t.push(ee`<vscode-badge
                variant="counter"
                class=${["counter-badge",c].join(" ")}
                part="counter-badge-decoration"
                >${r}</vscode-badge
              >`);break;case"filled-circle":t.push(ee`<vscode-icon
                name="circle-filled"
                size="14"
                class=${["filled-circle",c].join(" ")}
                part="filled-circle-decoration"
                .style=${Ue(d)}
              ></vscode-icon>`);break;case"text":t.push(ee`<div
                class=${["decoration-text",c].join(" ")}
                part="caption-decoration"
                .style=${Ue(d)}
              >
                ${r}
              </div>`)}})),t.length>0?ee`<div class="decorations" part="decorations">
        ${t}
      </div>`:ee`${ne}`}_renderTreeItem(e,t){const{open:n=!1,label:o,description:r="",tooltip:i,selected:s=!1,focused:a=!1,subItems:l=[]}=e,{path:c,itemType:d,hasFocusedItem:u=!1,hasSelectedItem:h=!1}=t,p=["contents"],f=n?["open"]:[],v=(c.length-1)*this.indent,m=this.arrows&&"leaf"===d?30+v:v,g=this._renderArrow(e),b=this._renderIcon(e),y=this.arrows?v+16:v+3,_=n&&"branch"===d?ee`<ul
            .style=${Ue({"--indent-guide-pos":`${y}px`})}
            class=${Ve({"has-active-item":u||h})}
          >
            ${this._renderTree(l,c)}
          </ul>`:ne,x=r?ee`<span class="description" part="description">${r}</span>`:ne,w=this._renderActions(e),k=this._renderDecorations(e);return f.push(d),s&&p.push("selected"),a&&p.push("focused"),ee`
      <li data-path=${c.join("/")} class=${f.join(" ")}>
        <div
          class=${p.join(" ")}
          .style=${Ue({paddingLeft:`${m+3}px`})}
        >
          ${g}${b}<span
            class="text-content"
            part="text-content"
            title=${je(i)}
            >${o}${x}</span
          >
          ${w} ${k}
        </div>
        ${_}
      </li>
    `}_renderTree(e,t=[]){const n=[];return e?(e.forEach(((e,o)=>{const r=[...t,o],i=yo(e)?"branch":"leaf",{selected:s=!1,focused:a=!1,hasFocusedItem:l=!1,hasSelectedItem:c=!1}=e;s&&(this._selectedItem=e),a&&(this._focusedItem=e),n.push(this._renderTreeItem(e,{path:r,itemType:i,hasFocusedItem:l,hasSelectedItem:c}))})),n):ne}_selectItem(e){this._selectedItem&&(this._selectedItem.selected=!1),this._focusedItem&&(this._focusedItem.focused=!1),this._selectedItem=e,e.selected=!0,this._focusedItem=e,e.focused=!0,this._selectedBranch&&(this._selectedBranch.hasSelectedItem=!1);let t=null;if(e.path?.length&&e.path.length>1&&(t=this._getItemByPath(e.path.slice(0,-1))),yo(e))this._selectedBranch=e,e.hasSelectedItem=!0,e.open=!e.open,e.open?(this._selectedBranch=e,e.hasSelectedItem=!0):t&&(this._selectedBranch=t,t.hasSelectedItem=!0);else if(e.path?.length&&e.path.length>1){const t=this._getItemByPath(e.path.slice(0,-1));t&&(this._selectedBranch=t,t.hasSelectedItem=!0)}else this._selectedBranch=e,e.hasSelectedItem=!0;this._emitSelectEvent(this._selectedItem,this._selectedItem.path.join("/")),this.requestUpdate()}_focusItem(e){this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=e,e.focused=!0;const t=!!e?.subItems?.length;this._focusedBranch&&(this._focusedBranch.hasFocusedItem=!1);let n=null;e.path?.length&&e.path.length>1&&(n=this._getItemByPath(e.path.slice(0,-1))),t?e.open?(this._focusedBranch=e,e.hasFocusedItem=!0):!e.open&&n&&(this._focusedBranch=n,n.hasFocusedItem=!0):n&&(this._focusedBranch=n,n.hasFocusedItem=!0)}_closeSubTreeRecursively(e){e.forEach((e=>{e.open=!1,e.subItems&&e.subItems.length>0&&this._closeSubTreeRecursively(e.subItems)}))}_deselectItemsRecursively(e){e.forEach((e=>{e.selected&&(e.selected=!1),e.subItems&&e.subItems.length>0&&this._deselectItemsRecursively(e.subItems)}))}_emitSelectEvent(e,t){const{icons:n,label:o,open:r,value:i}=e,s={icons:n,itemType:yo(e)?"branch":"leaf",label:o,open:r||!1,value:i||o,path:t};this.dispatchEvent(new CustomEvent("vsc-select",{bubbles:!0,composed:!0,detail:s})),this.dispatchEvent(new CustomEvent("vsc-tree-select",{detail:s}))}_focusPrevItem(){if(!this._focusedItem)return void this._focusItem(this._data[0]);const{path:e}=this._focusedItem;if(e&&e?.length>0){const t=e[e.length-1],n=e.length>1;if(t>0){const n=[...e];n[n.length-1]=t-1;const o=this._getItemByPath(n);let r=o;if(o?.open&&o.subItems?.length){const{subItems:e}=o;r=e[e.length-1]}this._focusItem(r)}else if(n){const t=[...e];t.pop(),this._focusItem(this._getItemByPath(t))}}else this._focusItem(this._data[0])}_focusNextItem(){if(!this._focusedItem)return void this._focusItem(this._data[0]);const{path:e,open:t}=this._focusedItem;if(t&&Array.isArray(this._focusedItem.subItems)&&this._focusedItem.subItems.length>0)return void this._focusItem(this._focusedItem.subItems[0]);const n=[...e];n[n.length-1]+=1;let o=this._getItemByPath(n);o?this._focusItem(o):(n.pop(),n.length>0&&(n[n.length-1]+=1,o=this._getItemByPath(n),o&&this._focusItem(o)))}_handleClick(e){const t=e.composedPath().find((e=>e.tagName&&"LI"===e.tagName.toUpperCase()));if(t){const e=(t.dataset.path||"").split("/").map((e=>Number(e))),n=this._getItemByPath(e);this._selectItem(n)}else this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=null}_handleComponentKeyDown(e){const t=e.key;[" ","ArrowDown","ArrowUp","Enter","Escape"].includes(e.key)&&(e.stopPropagation(),e.preventDefault()),"Escape"===t&&(this._focusedItem=null),"ArrowUp"===t&&this._focusPrevItem(),"ArrowDown"===t&&this._focusNextItem(),"Enter"!==t&&" "!==t||this._focusedItem&&this._selectItem(this._focusedItem)}render(){const e=Ve({multi:this.multiline,single:!this.multiline,wrapper:!0,"has-not-focused-item":!this._focusedItem,"selection-none":!this._selectedItem,"selection-single":null!==this._selectedItem});return ee`
      <div @click=${this._handleClick} class=${e}>
        <ul>
          ${this._renderTree(this._data)}
        </ul>
      </div>
    `}};_o.styles=mo,go([Ce({type:Array,reflect:!1})],_o.prototype,"data",null),go([Ce({type:Number})],_o.prototype,"indent",void 0),go([Ce({type:Boolean,reflect:!0})],_o.prototype,"arrows",void 0),go([Ce({type:Boolean,reflect:!0})],_o.prototype,"multiline",void 0),go([Ce({type:Number,reflect:!0})],_o.prototype,"tabindex",void 0),go([Ce({type:Boolean,reflect:!0,attribute:"indent-guides"})],_o.prototype,"indentGuides",void 0),go([Se()],_o.prototype,"_selectedItem",void 0),go([Se()],_o.prototype,"_focusedItem",void 0),go([Se()],_o.prototype,"_selectedBranch",void 0),go([Se()],_o.prototype,"_focusedBranch",void 0),_o=go([Ae("vscode-tree")],_o),c({tagName:"vscode-tree",elementClass:_o,react:i,displayName:"VscodeTree",events:{onVscTreeAction:"vsc-tree-action",onVscTreeSelect:"vsc-tree-select"}});var xo=Object.defineProperty,wo=Object.defineProperties,ko=Object.getOwnPropertyDescriptors,Co=Object.getOwnPropertySymbols,So=Object.prototype.hasOwnProperty,Eo=Object.prototype.propertyIsEnumerable,Po=(e,t,n)=>t in e?xo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$o=(e,t)=>{for(var n in t||(t={}))So.call(t,n)&&Po(e,n,t[n]);if(Co)for(var n of Co(t))Eo.call(t,n)&&Po(e,n,t[n]);return e},Io=(e,t)=>wo(e,ko(t));const Oo=acquireVsCodeApi(),Ro=()=>{var e,t,n,r,s,a,l,c;const[d,u]=(0,i.useState)("view"),[h,p]=(0,i.useState)({name:"",description:"",codeLocation:{type:"textsearch",codePattern:"",filePattern:""},customPrompt:"",steps:[],metadata:{}}),[f,v]=(0,i.useState)(),[m,g]=(0,i.useState)(!1);(0,i.useEffect)((()=>(window.addEventListener("message",b),Oo.postMessage({type:"loadFormula"}),()=>{window.removeEventListener("message",b)})),[]);const b=e=>{var t,n;const o=e.data;"refreshFormula"===o.type&&(p(o.data.formula),v(o.data.formula),u(null!=(t=o.data.mode)?t:"view"),g(null!=(n=o.data.isMicrosoft)&&n))},y=()=>{f&&p(f),u("view")};return(0,o.jsx)(o.Fragment,{children:"edit"===d?m?(0,o.jsxs)("div",{className:"flex-container",children:[(0,o.jsxs)("div",{className:"sliding-area",children:[(0,o.jsx)("h2",{children:h.name}),(0,o.jsx)("p",{children:"This is a Microsoft task, it cannot be edited."})]}),(0,o.jsx)(It,{variant:"vertical",className:"fixed-area",children:(0,o.jsx)(Xe,{secondary:!0,onClick:y,children:"Close"})})]}):(0,o.jsxs)("form",{onSubmit:e=>{e.preventDefault(),e.stopPropagation(),Oo.postMessage({type:"saveFormula",data:h})},className:"flex-container",children:[(0,o.jsx)("h2",{children:h.name}),(0,o.jsxs)(St,{className:"sliding-area",onInvalid:e=>{e.preventDefault(),e.stopPropagation()},children:[(0,o.jsxs)(It,{variant:"vertical",className:"mt-0",children:[(0,o.jsx)(Gt,{className:"label",children:"Task Name"}),(0,o.jsx)(vo,{required:!0,style:{width:"100%"},type:"text",placeholder:"Give a name to this task",name:"name",value:h.name,onChange:e=>p(Io($o({},h),{name:e.target.value}))})]}),(0,o.jsxs)(It,{variant:"vertical",children:[(0,o.jsx)(Gt,{className:"label",children:"Description"}),(0,o.jsx)(fo,{rows:3,style:{width:"100%",height:"auto"},placeholder:"Describe this task",name:"description",value:null!=(e=h.description)?e:"",onChange:e=>p(Io($o({},h),{description:e.target.value}))})]}),(0,o.jsxs)(It,{variant:"vertical",children:[(0,o.jsx)(Gt,{className:"label",children:"Code Pattern"}),(0,o.jsx)(At,{children:'The code pattern is a regex pattern to search code lines, such as "RabbitListener|spring-rabbit"'}),(0,o.jsx)(vo,{required:!0,type:"text",style:{width:"100%"},placeholder:"Give the pattern to search code lines",name:"codePattern",value:(null==(t=h.codeLocation)?void 0:t.codePattern)||"",onChange:e=>p(Io($o({},h),{codeLocation:Io($o({},h.codeLocation),{codePattern:e.target.value})}))})]}),(0,o.jsxs)(It,{variant:"vertical",children:[(0,o.jsx)(Gt,{className:"label",children:"File Pattern"}),(0,o.jsxs)(At,{style:{maxWidth:"100%"},children:["The file pattern is a glob pattern to search code files, such as **/*.java, check the ",(0,o.jsx)("a",{href:"https://code.visualstudio.com/docs/editor/glob-patterns",target:"_blank",children:"VS Code documentation"})," for more details."]}),(0,o.jsx)(vo,{required:!0,type:"text",style:{width:"100%"},placeholder:"Give the pattern to search code files",name:"filePattern",value:(null==(n=h.codeLocation)?void 0:n.filePattern)||"",onChange:e=>p(Io($o({},h),{codeLocation:Io($o({},h.codeLocation),{filePattern:e.target.value})}))})]}),(0,o.jsxs)(It,{variant:"vertical",children:[(0,o.jsx)(Gt,{className:"label",children:"Custom Prompt"}),(0,o.jsx)(At,{children:'The general instruction to be used in the prompt, such as "Use camel case for variable names".'}),(0,o.jsx)(fo,{rows:3,style:{width:"100%",height:"auto"},placeholder:"Give the custom prompt",name:"customPrompt",value:h.customPrompt||"",onChange:e=>p(Io($o({},h),{customPrompt:e.target.value}))})]}),(0,o.jsx)(Gt,{className:"label",children:"Commits / Uncommitted Changes"}),null==(r=h.steps)?void 0:r.map(((e,t)=>(0,o.jsxs)(i.Fragment,{children:[(0,o.jsxs)("div",{className:"commit-title",children:["diff"===e.type?(0,o.jsx)(Nt,{size:16,style:{verticalAlign:"bottom"},name:"git-commit"}):""," ",e.description,h.steps.length>1?(0,o.jsx)(Xe,{style:{marginLeft:"auto"},title:"Click to delete this step",secondary:!0,onClick:()=>p(Io($o({},h),{steps:[...h.steps.slice(0,t),...h.steps.slice(t+1)]})),children:"Remove"}):""]}),(0,o.jsx)("pre",{children:e.content})]},t)))]}),(0,o.jsxs)(It,{variant:"vertical",className:"fixex-area",children:[(0,o.jsx)(Xe,{type:"submit",children:"Save"}),(0,o.jsx)(Xe,{secondary:!0,onClick:y,children:"Cancel"})]})]}):(0,o.jsxs)("div",{className:"flex-container",children:[(0,o.jsxs)("div",{className:"sliding-area",children:[(0,o.jsx)("h2",{children:h.name}),(0,o.jsx)("p",{children:null!=(s=h.description)?s:""}),(0,o.jsxs)(Gt,{className:"label",children:["Code Pattern",(0,o.jsx)(Nt,{className:"help-icon",size:16,name:"info",title:'Code pattern is a regex pattern to search code lines, such as "RabbitListener|spring-rabbit"'})]}),(0,o.jsx)("div",{className:"mb-2",children:(null==(a=h.codeLocation)?void 0:a.codePattern)||"(Empty)"}),(0,o.jsxs)(Gt,{className:"label",children:["File Pattern",(0,o.jsx)(Nt,{className:"help-icon",size:16,name:"info",title:"File pattern is a glob pattern to search code files, such as **/*.java"})]}),(0,o.jsx)("div",{className:"mb-2",children:(null==(l=h.codeLocation)?void 0:l.filePattern)||"(Empty)"}),!m&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(Gt,{className:"label",children:["Custom Prompt",(0,o.jsx)(Nt,{className:"help-icon",size:16,name:"info",title:'The general instruction to be used in the prompt, such as "Use camel case for variable names".'})]}),(0,o.jsx)("p",{className:"mt-0",children:h.customPrompt||"(Empty)"}),(0,o.jsx)(Gt,{className:"label",children:"Commits / Uncommitted Changes"}),null==(c=h.steps)?void 0:c.map(((e,t)=>(0,o.jsxs)(i.Fragment,{children:[(0,o.jsxs)("div",{className:"commit-title",children:["diff"===e.type?(0,o.jsx)(Nt,{size:16,style:{verticalAlign:"bottom"},name:"git-commit"}):"",e.description]}),(0,o.jsx)("pre",{children:e.content})]},t)))]})]}),(0,o.jsxs)(It,{variant:"vertical",className:"fixed-area",children:[(0,o.jsxs)(Xe,{onClick:()=>{Oo.postMessage({type:"runFormula",data:h})},children:[(0,o.jsx)(Nt,{name:"play",size:14,style:{marginRight:"4px"}}),"Run"]}),!m&&(0,o.jsx)(Xe,{secondary:!0,onClick:()=>u("edit"),style:{verticalAlign:"bottom"},children:"Edit"})]})]})})},zo=document.getElementById("root");(0,r.H)(zo).render((0,o.jsx)(Ro,{})),module.exports={}})();