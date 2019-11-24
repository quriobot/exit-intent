function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function unwrapExports(e){return e&&e.__esModule?e.default:e}function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}function getRawTag(e){var t=hasOwnProperty.call(e,symToStringTag$1),n=e[symToStringTag$1];try{e[symToStringTag$1]=void 0;var o=!0}catch(e){}var r=nativeObjectToString.call(e);return o&&(t?e[symToStringTag$1]=n:delete e[symToStringTag$1]),r}function objectToString(e){return nativeObjectToString$1.call(e)}function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(e)?_getRawTag(e):_objectToString(e)}function isObjectLike(e){return null!=e&&"object"==typeof e}function isSymbol(e){return"symbol"==typeof e||isObjectLike_1(e)&&_baseGetTag(e)==symbolTag}function toNumber(e){if("number"==typeof e)return e;if(isSymbol_1(e))return NAN;if(isObject_1(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject_1(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var n=reIsBinary.test(e);return n||reIsOctal.test(e)?freeParseInt(e.slice(2),n?2:8):reIsBadHex.test(e)?NAN:+e}function debounce(e,t,n){function o(t){var n=c,o=d;return c=d=void 0,b=t,v=e.apply(o,n)}function r(e){return b=e,m=setTimeout(l,t),h?o(e):v}function i(e){var n=e-b,o=t-(e-p);return g?nativeMin(o,f-n):o}function a(e){var n=e-p,o=e-b;return void 0===p||n>=t||n<0||g&&o>=f}function l(){var e=now_1();if(a(e))return u(e);m=setTimeout(l,i(e))}function u(e){return m=void 0,y&&c?o(e):(c=d=void 0,v)}function s(){var e=now_1(),n=a(e);if(c=arguments,d=this,p=e,n){if(void 0===m)return r(p);if(g)return m=setTimeout(l,t),o(p)}return void 0===m&&(m=setTimeout(l,t)),v}var c,d,f,v,m,p,b=0,h=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT$1);return t=toNumber_1(t)||0,isObject_1(n)&&(h=!!n.leading,f=(g="maxWait"in n)?nativeMax(toNumber_1(n.maxWait)||0,t):f,y="trailing"in n?!!n.trailing:y),s.cancel=function(){void 0!==m&&clearTimeout(m),b=0,c=p=d=m=void 0},s.flush=function(){return void 0===m?v:u(now_1())},s}function throttle(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);return isObject_1(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),debounce_1(e,t,{leading:o,maxWait:t,trailing:r})}function addWheelListener(e,t,n){_addWheelListener(e,support,t,n),"DOMMouseScroll"==support&&_addWheelListener(e,"MozMousePixelScroll",t,n)}function removeWheelListener(e,t,n){_removeWheelListener(e,support,t,n),"DOMMouseScroll"==support&&_removeWheelListener(e,"MozMousePixelScroll",t,n)}function _addWheelListener(e,t,n,o){e[_addEventListener](prefix+t,"wheel"==support?n:function(e){!e&&(e=window.event);var t={originalEvent:e,target:e.target||e.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==e.type?0:1,deltaX:0,deltaY:0,deltaZ:0,clientX:e.clientX,clientY:e.clientY,preventDefault:function(){e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){e.stopImmediatePropagation&&e.stopImmediatePropagation()}};return"mousewheel"==support?(t.deltaY=-.025*e.wheelDelta,e.wheelDeltaX&&(t.deltaX=-.025*e.wheelDeltaX)):t.deltaY=e.detail,n(t)},o||!1)}function _removeWheelListener(e,t,n,o){e[_removeEventListener](prefix+t,n,o||!1)}function detectEventModel(e,t){e&&e.addEventListener?(_addEventListener="addEventListener",_removeEventListener="removeEventListener"):(_addEventListener="attachEvent",_removeEventListener="detachEvent",prefix="on"),support=t?"onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll":"wheel"}function ExitIntent(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=_extends({},{debug:!1,maxDisplays:99999,eventThrottle:200,showAfterInactiveSecondsDesktop:60,showAfterInactiveSecondsMobile:40,showAgainAfterSeconds:10,onExitIntent:function(){}},e),n=function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];if(t.debug){var r;(r=console).log.apply(r,["[exit-intent-mobile]"].concat(n))}},o=0,r=throttle_1(function(){o<t.maxDisplays&&(n("display onExitIntent",++o),t.onExitIntent(),o>=t.maxDisplays&&d())},1e3*t.showAgainAfterSeconds,{trailing:!1}),i=void 0;isDesktop&&(n("register mouseleave for desktop"),i=document.body.addEventListener("mouseleave",throttle_1(function(){n("mouseleave"),r()},t.eventThrottle),!1));var a=isDesktop?t.showAfterInactiveSecondsDesktop:t.showAfterInactiveSecondsMobile;n("timeoutOnDevice",a);var l=void 0,u=function(){void 0!==a?(void 0!==l&&(n("clearTimeout()"),window.clearTimeout(l)),l=window.setTimeout(function(){n("display after timeout"),r()},1e3*a)):n("display disabled")};u();var s=[],c=function(e,o){n("registering event for restartTimer",e,o);var r=o.addEventListener(e,throttle_1(function(e){n("throttled listener",e),u()},t.eventThrottle),!1);return s.push({event:e,listener:r,target:o}),r};isDesktop&&(c("scroll",window),c("mousemove",window),addWheelListener_1(window,function(e){throttle_1(function(e){n("throttled wheel listener",e),u()},t.eventThrottle)})),isTouchDevice&&(c("touchstart",document.body),c("touchend",document.body),c("touchmove",document.body));var d=function(){n("removeEvents",o),i&&(document.body.removeEventListener("mouseleave",i),removeWheelListener_1(window,function(){n("removeWheelListener")})),s.forEach(function(e){var t=e.event,n=e.listener;e.target.removeEventListener(t,n)})};return d}var isObject_1=isObject,commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},freeGlobal="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=_freeGlobal||freeSelf||Function("return this")(),_root=root,now=function(){return _root.Date.now()},now_1=now,Symbol$1=_root.Symbol,_Symbol=Symbol$1,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag$1=_Symbol?_Symbol.toStringTag:void 0,_getRawTag=getRawTag,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString,_objectToString=objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=_Symbol?_Symbol.toStringTag:void 0,_baseGetTag=baseGetTag,isObjectLike_1=isObjectLike,symbolTag="[object Symbol]",isSymbol_1=isSymbol,NAN=NaN,reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt,toNumber_1=toNumber,FUNC_ERROR_TEXT$1="Expected a function",nativeMax=Math.max,nativeMin=Math.min,debounce_1=debounce,FUNC_ERROR_TEXT="Expected a function",throttle_1=throttle,build=createCommonjsModule(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return!("undefined"==typeof window||!("ontouchstart"in window||window.DocumentTouch&&"undefined"!=typeof document&&document instanceof window.DocumentTouch))||!("undefined"==typeof navigator||!navigator.maxTouchPoints&&!navigator.msMaxTouchPoints)},e.exports=t.default}),isTouchDevice=unwrapExports(build),wheel=addWheelListener,addWheelListener_1=addWheelListener,removeWheelListener_1=removeWheelListener,prefix="",_addEventListener,_removeEventListener,support;detectEventModel("undefined"!=typeof window&&window,"undefined"!=typeof document&&document),wheel.addWheelListener=addWheelListener_1,wheel.removeWheelListener=removeWheelListener_1;var asyncGenerator=function(){function e(e){this.value=e}function t(t){function n(r,i){try{var a=t[r](i),l=a.value;l instanceof e?Promise.resolve(l.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":r.resolve({value:t,done:!0});break;case"throw":r.reject(t);break;default:r.resolve({value:t,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(e,t){return new Promise(function(o,a){var l={key:e,arg:t,resolve:o,reject:a,next:null};i?i=i.next=l:(r=i=l,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)},{wrap:function(e){return function(){return new t(e.apply(this,arguments))}},await:function(t){return new e(t)}}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},isDesktop=!isTouchDevice();export default ExitIntent;
