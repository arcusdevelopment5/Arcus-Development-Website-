var wM=Object.create;var tx=Object.defineProperty;var CM=Object.getOwnPropertyDescriptor;var RM=Object.getOwnPropertyNames;var DM=Object.getPrototypeOf,NM=Object.prototype.hasOwnProperty;var Ya=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var UM=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of RM(t))!NM.call(e,a)&&a!==n&&tx(e,a,{get:()=>t[a],enumerable:!(i=CM(t,a))||i.enumerable});return e};var Ud=(e,t,n)=>(n=e!=null?wM(DM(e)):{},UM(t||!e||!e.__esModule?tx(n,"default",{value:e,enumerable:!0}):n,e));var dx=Ya(Gt=>{"use strict";var Od=Symbol.for("react.transitional.element"),LM=Symbol.for("react.portal"),IM=Symbol.for("react.fragment"),OM=Symbol.for("react.strict_mode"),PM=Symbol.for("react.profiler"),zM=Symbol.for("react.consumer"),BM=Symbol.for("react.context"),FM=Symbol.for("react.forward_ref"),VM=Symbol.for("react.suspense"),HM=Symbol.for("react.memo"),sx=Symbol.for("react.lazy"),GM=Symbol.for("react.activity"),kM=Symbol.for("react.view_transition"),ex=Symbol.iterator;function XM(e){return e===null||typeof e!="object"?null:(e=ex&&e[ex]||e["@@iterator"],typeof e=="function"?e:null)}var rx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ox=Object.assign,lx={};function Br(e,t,n){this.props=e,this.context=t,this.refs=lx,this.updater=n||rx}Br.prototype.isReactComponent={};Br.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Br.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cx(){}cx.prototype=Br.prototype;function Pd(e,t,n){this.props=e,this.context=t,this.refs=lx,this.updater=n||rx}var zd=Pd.prototype=new cx;zd.constructor=Pd;ox(zd,Br.prototype);zd.isPureReactComponent=!0;var nx=Array.isArray;function Id(){}var Ue={H:null,A:null,T:null,S:null},ux=Object.prototype.hasOwnProperty;function Bd(e,t,n){var i=n.ref;return{$$typeof:Od,type:e,key:t,ref:i!==void 0?i:null,props:n}}function WM(e,t){return Bd(e.type,t,e.props)}function Fd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Od}function qM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ix=/\/+/g;function Ld(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qM(""+e.key):t.toString(36)}function YM(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Id,Id):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function zr(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Od:case LM:r=!0;break;case sx:return r=e._init,zr(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Ld(e,0):i,nx(a)?(n="",r!=null&&(n=r.replace(ix,"$&/")+"/"),zr(a,t,n,"",function(c){return c})):a!=null&&(Fd(a)&&(a=WM(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(ix,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(nx(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Ld(i,l),r+=zr(i,t,n,s,a);else if(l=XM(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Ld(i,l++),r+=zr(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return zr(YM(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function tu(e,t,n){if(e==null)return e;var i=[],a=0;return zr(e,i,"","",function(s){return t.call(n,s,a++)}),i}function ZM(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ax=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function fx(e){var t=Ue.T,n={};n.types=t!==null?t.types:null,Ue.T=n;try{var i=e(),a=Ue.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Id,ax)}catch(s){ax(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ue.T=t}}function hx(e){var t=Ue.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else fx(hx.bind(null,e))}var JM={map:tu,forEach:function(e,t,n){tu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tu(e,function(){t++}),t},toArray:function(e){return tu(e,function(t){return t})||[]},only:function(e){if(!Fd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Gt.Activity=GM;Gt.Children=JM;Gt.Component=Br;Gt.Fragment=IM;Gt.Profiler=PM;Gt.PureComponent=Pd;Gt.StrictMode=OM;Gt.Suspense=VM;Gt.ViewTransition=kM;Gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ue;Gt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ue.H.useMemoCache(e)}};Gt.addTransitionType=hx;Gt.cache=function(e){return function(){return e.apply(null,arguments)}};Gt.cacheSignal=function(){return null};Gt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=ox({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!ux.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Bd(e.type,a,i)};Gt.createContext=function(e){return e={$$typeof:BM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:zM,_context:e},e};Gt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)ux.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Bd(e,s,a)};Gt.createRef=function(){return{current:null}};Gt.forwardRef=function(e){return{$$typeof:FM,render:e}};Gt.isValidElement=Fd;Gt.lazy=function(e){return{$$typeof:sx,_payload:{_status:-1,_result:e},_init:ZM}};Gt.memo=function(e,t){return{$$typeof:HM,type:e,compare:t===void 0?null:t}};Gt.startTransition=fx;Gt.unstable_useCacheRefresh=function(){return Ue.H.useCacheRefresh()};Gt.use=function(e){return Ue.H.use(e)};Gt.useActionState=function(e,t,n){return Ue.H.useActionState(e,t,n)};Gt.useCallback=function(e,t){return Ue.H.useCallback(e,t)};Gt.useContext=function(e){return Ue.H.useContext(e)};Gt.useDebugValue=function(){};Gt.useDeferredValue=function(e,t){return Ue.H.useDeferredValue(e,t)};Gt.useEffect=function(e,t){return Ue.H.useEffect(e,t)};Gt.useEffectEvent=function(e){return Ue.H.useEffectEvent(e)};Gt.useId=function(){return Ue.H.useId()};Gt.useImperativeHandle=function(e,t,n){return Ue.H.useImperativeHandle(e,t,n)};Gt.useInsertionEffect=function(e,t){return Ue.H.useInsertionEffect(e,t)};Gt.useLayoutEffect=function(e,t){return Ue.H.useLayoutEffect(e,t)};Gt.useMemo=function(e,t){return Ue.H.useMemo(e,t)};Gt.useOptimistic=function(e,t){return Ue.H.useOptimistic(e,t)};Gt.useReducer=function(e,t,n){return Ue.H.useReducer(e,t,n)};Gt.useRef=function(e){return Ue.H.useRef(e)};Gt.useState=function(e){return Ue.H.useState(e)};Gt.useSyncExternalStore=function(e,t,n){return Ue.H.useSyncExternalStore(e,t,n)};Gt.useTransition=function(){return Ue.H.useTransition()};Gt.version="19.3.1"});var gl=Ya((DD,px)=>{"use strict";px.exports=dx()});var Tx=Ya(ze=>{"use strict";function kd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,a=e[i];if(0<eu(a,t))e[i]=t,e[n]=a,n=i;else break t}}function Wi(e){return e.length===0?null:e[0]}function iu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,a=e.length,s=a>>>1;i<s;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>eu(o,n))l<a&&0>eu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<a&&0>eu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function eu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}ze.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(mx=performance,ze.unstable_now=function(){return mx.now()}):(Vd=Date,gx=Vd.now(),ze.unstable_now=function(){return Vd.now()-gx});var mx,Vd,gx,xa=[],Za=[],KM=1,_i=null,Tn=3,Xd=!1,xl=!1,vl=!1,Wd=!1,_x=typeof setTimeout=="function"?setTimeout:null,yx=typeof clearTimeout=="function"?clearTimeout:null,xx=typeof setImmediate<"u"?setImmediate:null;function nu(e){for(var t=Wi(Za);t!==null;){if(t.callback===null)iu(Za);else if(t.startTime<=e)iu(Za),t.sortIndex=t.expirationTime,kd(xa,t);else break;t=Wi(Za)}}function qd(e){if(vl=!1,nu(e),!xl)if(Wi(xa)!==null)xl=!0,Vr||(Vr=!0,Fr());else{var t=Wi(Za);t!==null&&Yd(qd,t.startTime-e)}}var Vr=!1,_l=-1,bx=5,Sx=-1;function Mx(){return Wd?!0:!(ze.unstable_now()-Sx<bx)}function Hd(){if(Wd=!1,Vr){var e=ze.unstable_now();Sx=e;var t=!0;try{t:{xl=!1,vl&&(vl=!1,yx(_l),_l=-1),Xd=!0;var n=Tn;try{e:{for(nu(e),_i=Wi(xa);_i!==null&&!(_i.expirationTime>e&&Mx());){var i=_i.callback;if(typeof i=="function"){_i.callback=null,Tn=_i.priorityLevel;var a=i(_i.expirationTime<=e);if(e=ze.unstable_now(),typeof a=="function"){_i.callback=a,nu(e),t=!0;break e}_i===Wi(xa)&&iu(xa),nu(e)}else iu(xa);_i=Wi(xa)}if(_i!==null)t=!0;else{var s=Wi(Za);s!==null&&Yd(qd,s.startTime-e),t=!1}}break t}finally{_i=null,Tn=n,Xd=!1}t=void 0}}finally{t?Fr():Vr=!1}}}var Fr;typeof xx=="function"?Fr=function(){xx(Hd)}:typeof MessageChannel<"u"?(Gd=new MessageChannel,vx=Gd.port2,Gd.port1.onmessage=Hd,Fr=function(){vx.postMessage(null)}):Fr=function(){_x(Hd,0)};var Gd,vx;function Yd(e,t){_l=_x(function(){e(ze.unstable_now())},t)}ze.unstable_IdlePriority=5;ze.unstable_ImmediatePriority=1;ze.unstable_LowPriority=4;ze.unstable_NormalPriority=3;ze.unstable_Profiling=null;ze.unstable_UserBlockingPriority=2;ze.unstable_cancelCallback=function(e){e.callback=null};ze.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):bx=0<e?Math.floor(1e3/e):5};ze.unstable_getCurrentPriorityLevel=function(){return Tn};ze.unstable_next=function(e){switch(Tn){case 1:case 2:case 3:var t=3;break;default:t=Tn}var n=Tn;Tn=t;try{return e()}finally{Tn=n}};ze.unstable_requestPaint=function(){Wd=!0};ze.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Tn;Tn=e;try{return t()}finally{Tn=n}};ze.unstable_scheduleCallback=function(e,t,n){var i=ze.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:KM++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,kd(Za,e),Wi(xa)===null&&e===Wi(Za)&&(vl?(yx(_l),_l=-1):vl=!0,Yd(qd,n-i))):(e.sortIndex=a,kd(xa,e),xl||Xd||(xl=!0,Vr||(Vr=!0,Fr()))),e};ze.unstable_shouldYield=Mx;ze.unstable_wrapCallback=function(e){var t=Tn;return function(){var n=Tn;Tn=t;try{return e.apply(this,arguments)}finally{Tn=n}}}});var Ax=Ya((UD,Ex)=>{"use strict";Ex.exports=Tx()});var Rx=Ya(En=>{"use strict";var QM=gl();function Cx(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ja(){}var Dn={d:{f:Ja,r:function(){throw Error(Cx(522))},D:Ja,C:Ja,L:Ja,m:Ja,X:Ja,S:Ja,M:Ja},p:0,findDOMNode:null},jM=Symbol.for("react.portal"),$M=Symbol.for("react.recoverable"),wx=Symbol.for("react.optimistic_key");function t3(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jM,key:i==null?null:i===wx?wx:""+i,children:e,containerInfo:t,implementation:n}}var yl=QM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function au(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Dn;En.browser=function(e){return{$$typeof:$M,_reason:e}};En.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Cx(299));return t3(e,t,null,n)};En.flushSync=function(e){var t=yl.T,n=Dn.p;try{if(yl.T=null,Dn.p=2,e)return e()}finally{yl.T=t,Dn.p=n,Dn.d.f()}};En.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Dn.d.C(e,t))};En.prefetchDNS=function(e){typeof e=="string"&&Dn.d.D(e)};En.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=au(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Dn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&Dn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};En.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=au(t.as,t.crossOrigin);Dn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Dn.d.M(e)};En.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=au(n,t.crossOrigin);Dn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};En.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=au(t.as,t.crossOrigin);Dn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Dn.d.m(e)};En.requestFormReset=function(e){Dn.d.r(e)};En.unstable_batchedUpdates=function(e,t){return e(t)};En.useFormState=function(e,t,n){return yl.H.useFormState(e,t,n)};En.useFormStatus=function(){return yl.H.useHostTransitionStatus()};En.version="19.3.1"});var Ux=Ya((ID,Nx)=>{"use strict";function Dx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dx)}catch(e){console.error(e)}}Dx(),Nx.exports=Rx()});var v1=Ya(Vf=>{"use strict";var sn=Ax(),x_=gl(),e3=Ux();function J(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function __(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lx(e){if(oc(e)!==e)throw Error(J(188))}function n3(e){var t=e.alternate;if(!t){if(t=oc(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Lx(a),e;if(s===i)return Lx(a),t;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function b_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b_(e),t!==null)return t;e=e.sibling}return null}function Wn(e,t,n,i,a,s){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,a,s)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Wn(e.child,t,n,i,a,s))return!0;e=e.sibling}return!1}function or(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function Ix(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function S_(e){var t=[null,null],n=or(e);return n===null||M_(t,e,n.child,{foundSelf:!1}),t}function M_(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&M_(e,t,n.child,i))return!0;n=n.sibling}return!1}function an(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(J(559))}}var Yr=null,Ep=null;function i3(e,t,n){return e===n?!0:e===t?(Yr=e,!0):!1}function a3(e,t,n){return e===n?(Ep=e,!1):e===t?(Ep!==null&&(Yr=e),!0):!1}function Ox(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Ap(e,t,n){for(var i=0,a=e;a;a=n(a))i++;a=0;for(var s=t;s;s=n(s))a++;for(;0<i-a;)e=n(e),i--;for(;0<a-i;)t=n(t),a--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Ne=Object.assign,s3=Symbol.for("react.element"),su=Symbol.for("react.transitional.element"),wl=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),T_=Symbol.for("react.strict_mode"),wp=Symbol.for("react.profiler"),E_=Symbol.for("react.consumer"),Qi=Symbol.for("react.context"),Pm=Symbol.for("react.forward_ref"),Cp=Symbol.for("react.suspense"),Rp=Symbol.for("react.suspense_list"),zm=Symbol.for("react.memo"),$a=Symbol.for("react.lazy");Symbol.for("react.scope");var Dp=Symbol.for("react.activity"),r3=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var o3=Symbol.for("react.memo_cache_sentinel"),Np=Symbol.for("react.view_transition"),l3=Symbol.for("react.recoverable"),Px=Symbol.iterator;function bl(e){return e===null||typeof e!="object"?null:(e=Px&&e[Px]||e["@@iterator"],typeof e=="function"?e:null)}var c3=Symbol.for("react.client.reference");function Up(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===c3?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zr:return"Fragment";case wp:return"Profiler";case T_:return"StrictMode";case Cp:return"Suspense";case Rp:return"SuspenseList";case Dp:return"Activity";case Np:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case wl:return"Portal";case Qi:return e.displayName||"Context";case E_:return(e._context.displayName||"Context")+".Consumer";case Pm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zm:return t=e.displayName||null,t!==null?t:Up(e.type)||"Memo";case $a:t=e._payload,e=e._init;try{return Up(e(t))}catch{}}return null}var Cl=Array.isArray,Vt=x_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Se=e3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Zs={pending:!1,data:null,method:null,action:null},Lp=[],Jr=-1;function aa(e){return{current:e}}function yn(e){0>Jr||(e.current=Lp[Jr],Lp[Jr]=null,Jr--)}function Oe(e,t){Jr++,Lp[Jr]=e.current,e.current=t}var ea=aa(null),Wl=aa(null),ls=aa(null),Wu=aa(null);function qu(e,t){switch(Oe(ls,t),Oe(Wl,e),Oe(ea,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Kv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Kv(t),e=Yb(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yn(ea),Oe(ea,e)}function go(){yn(ea),yn(Wl),yn(ls)}function Ip(e){var t=e.memoizedState;t!==null&&(Ao._currentValue=t.memoizedState,Oe(Wu,e)),t=ea.current;var n=Yb(t,e.type);t!==n&&(Oe(Wl,e),Oe(ea,n))}function Yu(e){Wl.current===e&&(yn(ea),yn(Wl)),Wu.current===e&&(yn(Wu),Ao._currentValue=Zs)}var Zd,zx;function Qa(e){if(Zd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zd=t&&t[1]||"",zx=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zd+e+zx}var Jd=!1;function Kd(e,t){if(!e||Jd)return"";Jd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(v){var h=v}Reflect.construct(e,[],d)}else{try{d.call()}catch(v){h=v}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(v){h=v}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(v){if(v&&h&&typeof v.stack=="string")return[v.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=a);break}}}finally{Jd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Qa(n):""}function u3(e,t){switch(e.tag){case 26:case 27:case 5:return Qa(e.type);case 16:return Qa("Lazy");case 13:return e.child!==t&&t!==null?Qa("Suspense Fallback"):Qa("Suspense");case 19:return Qa("SuspenseList");case 0:case 15:return Kd(e.type,!1);case 11:return Kd(e.type.render,!1);case 1:return Kd(e.type,!0);case 31:return Qa("Activity");case 30:return Qa("ViewTransition");default:return""}}function Bx(e){try{var t="",n=null;do t+=u3(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Op=Object.prototype.hasOwnProperty,Bm=sn.unstable_scheduleCallback,Qd=sn.unstable_cancelCallback,f3=sn.unstable_shouldYield,h3=sn.unstable_requestPaint,ri=sn.unstable_now,d3=sn.unstable_getCurrentPriorityLevel,A_=sn.unstable_ImmediatePriority,w_=sn.unstable_UserBlockingPriority,Zu=sn.unstable_NormalPriority,p3=sn.unstable_LowPriority,C_=sn.unstable_IdlePriority,m3=sn.log,g3=sn.unstable_setDisableYieldValue,lc=null,oi=null;function ns(e){if(typeof m3=="function"&&g3(e),oi&&typeof oi.setStrictMode=="function")try{oi.setStrictMode(lc,e)}catch{}}var li=Math.clz32?Math.clz32:_3,x3=Math.log,v3=Math.LN2;function _3(e){return e>>>=0,e===0?32:31-(x3(e)/v3|0)|0}var ru=256,ou=262144,lu=4194304;function ks(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bf(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=ks(i):(r&=o,r!==0?a=ks(r):n||(n=o&~e,n!==0&&(a=ks(n))))):(o=i&~s,o!==0?a=ks(o):r!==0?a=ks(r):n||(n=i&~e,n!==0&&(a=ks(n)))),a===0?0:t!==0&&t!==a&&(t&s)===0&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function cc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function R_(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-li(n),a=1<<i;t|=e[i],n&=~a}return t}function y3(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D_(){var e=lu;return lu<<=1,(lu&62914560)===0&&(lu=4194304),e}function jd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function uc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function b3(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-li(n),d=1<<f;o[f]=0,l[f]=-1;var h=c[f];if(h!==null)for(c[f]=null,f=0;f<h.length;f++){var p=h[f];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&N_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function N_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-li(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function U_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-li(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function L_(e,t){var n=t&-t;return n=(n&42)!==0?1:Fm(n),(n&(e.suspendedLanes|t))!==0?0:n}function Fm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function I_(){var e=Se.p;return e!==0?e:(e=window.event,e===void 0?32:m1(e.type))}function Fx(e,t){var n=Se.p;try{return Se.p=e,t()}finally{Se.p=n}}var Da=Math.random().toString(36).slice(2),vn="__reactFiber$"+Da,qn="__reactProps$"+Da,Ro="__reactContainer$"+Da,Vx="__reactEvents$"+Da,S3="__reactListeners$"+Da,M3="__reactHandles$"+Da,Hx="__reactResources$"+Da,fc="__reactMarker$"+Da,Ju="__reactLoad$"+Da;function Sf(e){delete e[vn],delete e[qn],delete e[S3],delete e[M3]}function qs(e){var t;if(t=e[vn])return t;for(var n=e.parentNode;n;){if(t=n[Ro]||n[vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=a_(e);e!==null;){if(n=e[vn])return n;e=a_(e)}return t}e=n,n=e.parentNode}return null}function Do(e){if(e=e[vn]||e[Ro]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Rl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(J(33))}function so(e){var t=e[Hx];return t||(t=e[Hx]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function fn(e){e[fc]=!0}function O_(e){e[Ju]=void 0}var P_=new Set,z_={};function lr(e,t){xo(e,t),xo(e+"Capture",t)}function xo(e,t){for(z_[e]=t,e=0;e<t.length;e++)P_.add(t[e])}var T3=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gx={},kx={};function E3(e){return Op.call(kx,e)?!0:Op.call(Gx,e)?!1:T3.test(e)?kx[e]=!0:(Gx[e]=!0,!1)}var _e=!1;function Xx(){var e=_e;return _e=!1,e}function Au(e,t,n){if(E3(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function cu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function va(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function ni(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function B_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function A3(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pp(e){if(!e._valueTracker){var t=B_(e)?"checked":"value";e._valueTracker=A3(e,t,""+e[t])}}function F_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=B_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var w3=/[\n"\\]/g;function Ti(e){return e.replace(w3,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zp(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ni(t)):e.value!==""+ni(t)&&(e.value=""+ni(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?$d(e,ni(e.value)):$d(e,ni(t)):n!=null?$d(e,ni(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ni(o):e.removeAttribute("name")}function V_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Pp(e);return}n=n!=null?""+ni(n):"",t=t!=null?""+ni(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Pp(e)}function $d(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function ro(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ni(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function H_(e,t,n){if(t!=null&&(t=""+ni(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ni(n):""}function G_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(J(92));if(Cl(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ni(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Pp(e)}function vo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var C3=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wx(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||C3.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function k_(e,t,n){if(t!=null&&typeof t!="object")throw Error(J(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",_e=!0);for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&(Wx(e,a,i),_e=!0)}else for(var s in t)t.hasOwnProperty(s)&&Wx(e,s,t[s])}function Hm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R3=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),D3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wu(e){return D3.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var Bp=null;function Gm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kr=null,oo=null;function qx(e){var t=Do(e);if(t&&(e=t.stateNode)){var n=e[qn]||null;t:switch(e=t.stateNode,t.type){case"input":if(zp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ti(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[qn]||null;if(!a)throw Error(J(90));zp(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&F_(i)}break t;case"textarea":H_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&ro(e,!!n.multiple,t,!1)}}}var tp=!1;function X_(e,t,n){if(tp)return e(t,n);tp=!0;try{var i=e(t);return i}finally{if(tp=!1,(Kr!==null||oo!==null)&&(Pf(),Kr&&(t=Kr,e=oo,oo=Kr=null,qx(t),e)))for(t=0;t<e.length;t++)qx(e[t])}}function ql(e,t){var n=e.stateNode;if(n===null)return null;var i=n[qn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var Ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fp=!1;if(Ta)try{Hr={},Object.defineProperty(Hr,"passive",{get:function(){Fp=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Fp=!1}var Hr,is=null,km=null,Cu=null;function W_(){if(Cu)return Cu;var e,t=km,n=t.length,i,a="value"in is?is.value:is.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return Cu=a.slice(e,1<i?1-i:void 0)}function Ru(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function uu(){return!0}function Yx(){return!1}function In(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uu:Yx,this.isPropagationStopped=Yx,this}return Ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uu)},persist:function(){},isPersistent:uu}),t}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mf=In(Ms),hc=Ne({},Ms,{view:0,detail:0}),N3=In(hc),ep,np,Sl,Tf=Ne({},hc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sl&&(Sl&&e.type==="mousemove"?(ep=e.screenX-Sl.screenX,np=e.screenY-Sl.screenY):np=ep=0,Sl=e),ep)},movementY:function(e){return"movementY"in e?e.movementY:np}}),Zx=In(Tf),U3=Ne({},Tf,{dataTransfer:0}),L3=In(U3),I3=Ne({},hc,{relatedTarget:0}),ip=In(I3),O3=Ne({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),P3=In(O3),z3=Ne({},Ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),B3=In(z3),F3=Ne({},Ms,{data:0}),Jx=In(F3),V3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=G3[e])?!!t[e]:!1}function Xm(){return k3}var X3=Ne({},hc,{key:function(e){if(e.key){var t=V3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ru(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?H3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xm,charCode:function(e){return e.type==="keypress"?Ru(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ru(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W3=In(X3),q3=Ne({},Tf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kx=In(q3),Y3=Ne({},Ms,{submitter:0}),Z3=In(Y3),J3=Ne({},hc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xm}),K3=In(J3),Q3=Ne({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),j3=In(Q3),$3=Ne({},Tf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tT=In($3),eT=Ne({},Ms,{newState:0,oldState:0,source:0}),nT=In(eT),iT=[9,13,27,32],Wm=Ta&&"CompositionEvent"in window,Ul=null;Ta&&"documentMode"in document&&(Ul=document.documentMode);var aT=Ta&&"TextEvent"in window&&!Ul,q_=Ta&&(!Wm||Ul&&8<Ul&&11>=Ul),Qx=" ",jx=!1;function Y_(e,t){switch(e){case"keyup":return iT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function sT(e,t){switch(e){case"compositionend":return Z_(t);case"keypress":return t.which!==32?null:(jx=!0,Qx);case"textInput":return e=t.data,e===Qx&&jx?null:e;default:return null}}function rT(e,t){if(Qr)return e==="compositionend"||!Wm&&Y_(e,t)?(e=W_(),Cu=km=is=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return q_&&t.locale!=="ko"?null:t.data;default:return null}}var oT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $x(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!oT[e.type]:t==="textarea"}function J_(e,t,n,i){Kr?oo?oo.push(i):oo=[i]:Kr=i,t=vf(t,"onChange"),0<t.length&&(n=new Mf("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ll=null,Yl=null;function lT(e){Xb(e,0)}function Ef(e){var t=Rl(e);if(F_(t))return e}function tv(e,t){if(e==="change")return t}var K_=!1;Ta&&(Ta?(hu="oninput"in document,hu||(ap=document.createElement("div"),ap.setAttribute("oninput","return;"),hu=typeof ap.oninput=="function"),fu=hu):fu=!1,K_=fu&&(!document.documentMode||9<document.documentMode));var fu,hu,ap;function ev(){Ll&&(Ll.detachEvent("onpropertychange",Q_),Yl=Ll=null)}function Q_(e){if(e.propertyName==="value"&&Ef(Yl)){var t=[];J_(t,Yl,e,Gm(e)),X_(lT,t)}}function cT(e,t,n){e==="focusin"?(ev(),Ll=t,Yl=n,Ll.attachEvent("onpropertychange",Q_)):e==="focusout"&&ev()}function uT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ef(Yl)}function fT(e,t){if(e==="click")return Ef(t)}function hT(e,t){if(e==="input"||e==="change")return Ef(t)}function dT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ui=typeof Object.is=="function"?Object.is:dT;function Zl(e,t){if(ui(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Op.call(t,a)||!ui(e[a],t[a]))return!1}return!0}function Vp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iv(e,t){var n=nv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=nv(n)}}function j_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?j_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vp(e.document)}return t}function qm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var pT=Ta&&"documentMode"in document&&11>=document.documentMode,jr=null,Hp=null,Il=null,Gp=!1;function av(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gp||jr==null||jr!==Vp(i)||(i=jr,"selectionStart"in i&&qm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Il&&Zl(Il,i)||(Il=i,i=vf(Hp,"onSelect"),0<i.length&&(t=new Mf("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=jr)))}function Hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $r={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionrun:Hs("Transition","TransitionRun"),transitionstart:Hs("Transition","TransitionStart"),transitioncancel:Hs("Transition","TransitionCancel"),transitionend:Hs("Transition","TransitionEnd")},sp={},ty={};Ta&&(ty=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function cr(e){if(sp[e])return sp[e];if(!$r[e])return e;var t=$r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ty)return sp[e]=t[n];return e}var ey=cr("animationend"),ny=cr("animationiteration"),iy=cr("animationstart"),mT=cr("transitionrun"),gT=cr("transitionstart"),xT=cr("transitioncancel"),ay=cr("transitionend"),sy=new Map,kp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kp.push("scrollEnd");function Fi(e,t){sy.set(e,t),lr(t,[e])}var vT=0;function Ea(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Bi.identifierPrefix;var n=vT++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function sv(e){if(e==null||typeof e=="string")return e;var t=null,n=mo;if(n!==null)for(var i=0;i<n.length;i++){var a=e[n[i]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function Na(e,t){return e=sv(e),t=sv(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Ku=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bi=[],to=0,Ym=0;function Af(){for(var e=to,t=Ym=to=0;t<e;){var n=bi[t];bi[t++]=null;var i=bi[t];bi[t++]=null;var a=bi[t];bi[t++]=null;var s=bi[t];if(bi[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&ry(n,a,s)}}function wf(e,t,n,i){bi[to++]=e,bi[to++]=t,bi[to++]=n,bi[to++]=i,Ym|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Zm(e,t,n,i){return wf(e,t,n,i),Qu(e)}function ur(e,t){return wf(e,null,null,t),Qu(e)}function ry(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-li(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Qu(e){if(50<Xl)throw Xl=0,Fu=null,Error(J(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var eo={};function _T(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,t,n,i){return new _T(e,t,n,i)}function Jm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sa(e,t){var n=e.alternate;return n===null?(n=kn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function oy(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Du(e,t,n,i,a,s){var r=0;if(i=e,typeof i=="function")Jm(i)&&(r=1);else if(typeof i=="string")r=WE(e,n,ea.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Dp:return e=kn(31,n,t,a),e.elementType=Dp,e.lanes=s,e;case Zr:return Js(n.children,a,s,t);case T_:r=8,a|=24;break;case wp:return e=kn(12,n,t,a|2),e.elementType=wp,e.lanes=s,e;case Cp:return e=kn(13,n,t,a),e.elementType=Cp,e.lanes=s,e;case Rp:return e=kn(19,n,t,a),e.elementType=Rp,e.lanes=s,e;case r3:case Np:return e=a|32,e=kn(30,n,t,e),e.elementType=Np,e.lanes=s,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Qi:r=10;break t;case E_:r=9;break t;case Pm:r=11;break t;case zm:r=14;break t;case $a:r=16,i=null;break t}r=29,n=Error(J(130,e===null?"null":typeof e,"")),i=null}return t=kn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function Js(e,t,n,i){return e=kn(7,e,i,t),e.lanes=n,e}function rp(e,t,n){return e=kn(6,e,null,t),e.lanes=n,e}function ly(e){var t=kn(18,null,null,0);return t.stateNode=e,t}function op(e,t,n){return t=kn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var rv=new WeakMap;function Ei(e,t){if(typeof e=="object"&&e!==null){var n=rv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Bx(t)},rv.set(e,t),t)}return{value:e,source:t,stack:Bx(t)}}var no=[],io=0,ju=null,Jl=0,Si=[],Mi=0,vs=null,$i=1,ta="";function ya(e,t){no[io++]=Jl,no[io++]=ju,ju=e,Jl=t}function cy(e,t,n){Si[Mi++]=$i,Si[Mi++]=ta,Si[Mi++]=vs,vs=e;var i=$i;e=ta;var a=32-li(i)-1;i&=~(1<<a),n+=1;var s=32-li(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,$i=1<<32-li(t)+a|n<<a|i,ta=s+e}else $i=1<<s|n<<a|i,ta=e}function Cf(e){e.return!==null&&(ya(e,1),cy(e,1,0))}function Km(e){for(;e===ju;)ju=no[--io],no[io]=null,Jl=no[--io],no[io]=null;for(;e===vs;)vs=Si[--Mi],Si[Mi]=null,ta=Si[--Mi],Si[Mi]=null,$i=Si[--Mi],Si[Mi]=null}function uy(e,t){Si[Mi++]=$i,Si[Mi++]=ta,Si[Mi++]=vs,$i=t.id,ta=t.overflow,vs=e}var hn=null,Ie=null,ee=!1,cs=null,Ai=!1,Xp=Error(J(519));function _s(e){var t=Error(J(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kl(Ei(t,e)),Xp}function ov(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[vn]=e,t[qn]=i,n){case"dialog":ae("cancel",t),ae("close",t);break;case"iframe":case"object":case"embed":ae("load",t);break;case"video":case"audio":for(n=0;n<tc.length;n++)ae(tc[n],t);break;case"source":ae("error",t);break;case"img":case"image":case"link":ae("error",t),ae("load",t);break;case"details":ae("toggle",t);break;case"input":ae("invalid",t),V_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ae("invalid",t);break;case"textarea":ae("invalid",t),G_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||qb(t.textContent,n)?(i.popover!=null&&(ae("beforetoggle",t),ae("toggle",t)),i.onScroll!=null&&ae("scroll",t),i.onScrollEnd!=null&&ae("scrollend",t),i.onClick!=null&&(t.onclick=ji),t=!0):t=!1,t||_s(e,!0)}function $u(e){for(hn=e.return;hn;)switch(hn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:hn=hn.return}}function Gr(e){if(e!==hn)return!1;if(!ee)return $u(e),ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Cm(e.type,e.memoizedProps)),n=!n),n&&Ie&&_s(e),$u(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ie=i_(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ie=i_(e)}else t===27?(t=Ie,Ts(e.type)?(e=Um,Um=null,Ie=e):Ie=t):Ie=hn?wi(e.stateNode.nextSibling):null;return!0}function $s(){Ie=hn=null,ee=!1}function lp(){var e=cs;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),cs=null),e}function Kl(e){cs===null?cs=[e]:cs.push(e)}var Wp=aa(null),fr=null,ba=null;function as(e,t,n){Oe(Wp,t._currentValue),t._currentValue=n}function Ma(e){e._currentValue=Wp.current,yn(Wp)}function Nu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function qp(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Nu(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(J(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Nu(r,n,e),r=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),Nu(a.return,n,e),r=a.child,r=r!==null?r.sibling:null):r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function tr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if((a.flags&524288)!==0)s=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=a.type;ui(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Wu.current){if(r=a.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}a=a.return}return e!==null&&qp(t,e,n,i),t.flags|=262144,e!==null}function tf(e){for(e=e.firstContext;e!==null;){if(!ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function er(e){fr=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _n(e){return fy(fr,e)}function du(e,t){return fr===null&&er(e),fy(e,t)}function fy(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ba===null){if(e===null)throw Error(J(308));ba=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ba=ba.next=t;return n}var yT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},bT=sn.unstable_scheduleCallback,ST=sn.unstable_NormalPriority,Je={$$typeof:Qi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qm(){return{controller:new yT,data:new Map,refCount:0}}function dc(e){e.refCount--,e.refCount===0&&bT(ST,function(){e.controller.abort()})}function lv(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Dl=null;function MT(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ol=null,Yp=0,nr=0,lo=null;function TT(e,t){if(Ol===null){var n=Ol=[];Yp=0,nr=E0(),lo={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Yp++,t.then(cv,cv),t}function cv(){if(--Yp===0&&(Dl=null,Ol!==null)){lo!==null&&(lo.status="fulfilled");var e=Ol;Ol=null,nr=0,lo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ET(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var uv=Vt.S;Vt.S=function(e,t){if(Rb=ri(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&TT(e,t),Dl!==null)for(var n=Mo;n!==null;)lv(n,Dl),n=n.next;if(n=e.types,n!==null){for(var i=Mo;i!==null;)lv(i,n),i=i.next;if(nr!==0){i=Dl,i===null&&(i=Dl=[]);for(var a=0;a<n.length;a++){var s=n[a];i.indexOf(s)===-1&&i.push(s)}}}uv!==null&&uv(e,t)};var Ks=aa(null);function jm(){var e=Ks.current;return e!==null?e:De.pooledCache}function Uu(e,t){t===null?Oe(Ks,Ks.current):Oe(Ks,t.pool)}function hy(){var e=jm();return e===null?null:{parent:Je._currentValue,pool:e}}var No=Error(J(460)),$m=Error(J(474)),Rf=Error(J(542)),ef={then:function(){}};function fv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dy(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ji,ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dv(e),e===void 0&&!("reason"in t)?Error(J(600)):e;default:if(typeof t.status=="string")t.then(ji,ji);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(J(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dv(e),e}throw Qs=t,No}}function Xs(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Qs=n,No):n}}var Qs=null;function hv(){if(Qs===null)throw Error(J(459));var e=Qs;return Qs=null,e}function dv(e){if(e===No||e===Rf)throw Error(J(483))}var co=null,Ql=0;function pu(e){var t=Ql;return Ql+=1,co===null&&(co=[]),dy(co,e,t)}function Ka(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function mu(e,t){throw t.$$typeof===s3?Error(J(525)):(e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function py(e){function t(u,g){if(e){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key===null?g.set(u.index,u):g.set(u.key,u),u=u.sibling;return g}function a(u,g){return u=Sa(u,g),u.index=0,u.sibling=null,u}function s(u,g,x){return u.index=x,e?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=134217730,g)):(u.flags|=1048576,g)}function r(u){return e&&u.alternate===null&&(u.flags|=134217730),u}function o(u,g,x,b){return g===null||g.tag!==6?(g=rp(x,u.mode,b),g.return=u,g):(g=a(g,x),g.return=u,g)}function l(u,g,x,b){var C=x.type;return C===Zr?(u=f(u,g,x.props.children,b,x.key),Ka(u,x),u):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$a&&Xs(C)===g.type)?(g=a(g,x.props),Ka(g,x),g.return=u,g):(g=Du(x.type,x.key,x.props,null,u.mode,b),Ka(g,x),g.return=u,g)}function c(u,g,x,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=op(x,u.mode,b),g.return=u,g):(g=a(g,x.children||[]),g.return=u,g)}function f(u,g,x,b,C){return g===null||g.tag!==7?(g=Js(x,u.mode,b,C),g.return=u,g):(g=a(g,x),g.return=u,g)}function d(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=rp(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case su:return x=Du(g.type,g.key,g.props,null,u.mode,x),Ka(x,g),x.return=u,x;case wl:return g=op(g,u.mode,x),g.return=u,g;case $a:return g=Xs(g),d(u,g,x)}if(Cl(g)||bl(g))return g=Js(g,u.mode,x,null),g.return=u,g;if(typeof g.then=="function")return d(u,pu(g),x);if(g.$$typeof===Qi)return d(u,du(u,g),x);mu(u,g)}return null}function h(u,g,x,b){var C=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return C!==null?null:o(u,g,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case su:return x.key===C?l(u,g,x,b):null;case wl:return x.key===C?c(u,g,x,b):null;case $a:return x=Xs(x),h(u,g,x,b)}if(Cl(x)||bl(x))return C!==null?null:f(u,g,x,b,null);if(typeof x.then=="function")return h(u,g,pu(x),b);if(x.$$typeof===Qi)return h(u,g,du(u,x),b);mu(u,x)}return null}function p(u,g,x,b,C){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return u=u.get(x)||null,o(g,u,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case su:return u=u.get(b.key===null?x:b.key)||null,l(g,u,b,C);case wl:return u=u.get(b.key===null?x:b.key)||null,c(g,u,b,C);case $a:return b=Xs(b),p(u,g,x,b,C)}if(Cl(b)||bl(b))return u=u.get(x)||null,f(g,u,b,C,null);if(typeof b.then=="function")return p(u,g,x,pu(b),C);if(b.$$typeof===Qi)return p(u,g,x,du(g,b),C);mu(g,b)}return null}function v(u,g,x,b){for(var C=null,T=null,A=g,N=g=0,E=null;A!==null&&N<x.length;N++){A.index>N?(E=A,A=null):E=A.sibling;var S=h(u,A,x[N],b);if(S===null){A===null&&(A=E);break}e&&A&&S.alternate===null&&t(u,A),g=s(S,g,N),T===null?C=S:T.sibling=S,T=S,A=E}if(N===x.length)return n(u,A),ee&&ya(u,N),C;if(A===null){for(;N<x.length;N++)A=d(u,x[N],b),A!==null&&(g=s(A,g,N),T===null?C=A:T.sibling=A,T=A);return ee&&ya(u,N),C}for(A=i(A);N<x.length;N++)E=p(A,u,N,x[N],b),E!==null&&(e&&(S=E.alternate,S!==null&&A.delete(S.key===null?N:S.key)),g=s(E,g,N),T===null?C=E:T.sibling=E,T=E);return e&&A.forEach(function(U){return t(u,U)}),ee&&ya(u,N),C}function y(u,g,x,b){if(x==null)throw Error(J(151));for(var C=null,T=null,A=g,N=g=0,E=null,S=x.next();A!==null&&!S.done;N++,S=x.next()){A.index>N?(E=A,A=null):E=A.sibling;var U=h(u,A,S.value,b);if(U===null){A===null&&(A=E);break}e&&A&&U.alternate===null&&t(u,A),g=s(U,g,N),T===null?C=U:T.sibling=U,T=U,A=E}if(S.done)return n(u,A),ee&&ya(u,N),C;if(A===null){for(;!S.done;N++,S=x.next())S=d(u,S.value,b),S!==null&&(g=s(S,g,N),T===null?C=S:T.sibling=S,T=S);return ee&&ya(u,N),C}for(A=i(A);!S.done;N++,S=x.next())S=p(A,u,N,S.value,b),S!==null&&(e&&(E=S.alternate,E!==null&&A.delete(E.key===null?N:E.key)),g=s(S,g,N),T===null?C=S:T.sibling=S,T=S);return e&&A.forEach(function(B){return t(u,B)}),ee&&ya(u,N),C}function m(u,g,x,b){if(typeof x=="object"&&x!==null&&x.type===Zr&&x.key===null&&x.props.ref===void 0&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case su:t:{for(var C=x.key;g!==null;){if(g.key===C){if(C=x.type,C===Zr){if(g.tag===7){n(u,g.sibling),b=a(g,x.props.children),Ka(b,x),b.return=u,u=b;break t}}else if(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$a&&Xs(C)===g.type){n(u,g.sibling),b=a(g,x.props),Ka(b,x),b.return=u,u=b;break t}n(u,g);break}else t(u,g);g=g.sibling}x.type===Zr?(b=Js(x.props.children,u.mode,b,x.key),Ka(b,x),b.return=u,u=b):(b=Du(x.type,x.key,x.props,null,u.mode,b),Ka(b,x),b.return=u,u=b)}return r(u);case wl:t:{for(C=x.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),b=a(g,x.children||[]),b.return=u,u=b;break t}else{n(u,g);break}else t(u,g);g=g.sibling}b=op(x,u.mode,b),b.return=u,u=b}return r(u);case $a:return x=Xs(x),m(u,g,x,b)}if(Cl(x))return v(u,g,x,b);if(bl(x)){if(C=bl(x),typeof C!="function")throw Error(J(150));return x=C.call(x),y(u,g,x,b)}if(typeof x.then=="function")return m(u,g,pu(x),b);if(x.$$typeof===Qi)return m(u,g,du(u,x),b);mu(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),b=a(g,x),b.return=u,u=b):(n(u,g),b=rp(x,u.mode,b),b.return=u,u=b),r(u)):n(u,g)}return function(u,g,x,b){try{Ql=0;var C=m(u,g,x,b);return co=null,C}catch(A){if(A===No||A===Rf)throw A;var T=kn(29,A,null,u.mode);return T.lanes=b,T.return=u,T}finally{}}}var ir=py(!0),my=py(!1),ts=!1;function t0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function us(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(be&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Qu(e),ry(e,null,n),t}return wf(e,i,t,n),Qu(e)}function Pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,U_(e,n)}}function cp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Jp=!1;function zl(){if(Jp){var e=lo;if(e!==null)throw e}}function Bl(e,t,n,i){Jp=!1;var a=e.updateQueue;ts=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=a.baseState;r=0,f=c=l=null,o=s;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(oe&h)===h:(i&h)===h){h!==0&&h===nr&&(Jp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,y=o;h=t;var m=n;switch(y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(m,d,h);break t}d=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break t;d=Ne({},d,h);break t;case 2:ts=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,r|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);f===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=f,s===null&&(a.shared.lanes=0),Ss|=r,e.lanes=r,e.memoizedState=d}}function gy(e,t){if(typeof e!="function")throw Error(J(191,e));e.call(t)}function xy(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)gy(n[e],t)}var ys=aa(null),nf=aa(0);function pv(e,t){e=Ra,Oe(nf,e),Oe(ys,t),Ra=e|t.baseLanes}function Kp(){Oe(nf,Ra),Oe(ys,ys.current)}function e0(){Ra=nf.current,yn(ys),yn(nf)}var Mn=aa(null),An=null;function hs(e){var t=e.alternate;Oe(bn,bn.current&1),Oe(Mn,e),An===null&&(t===null||ys.current!==null||t.memoizedState!==null)&&(An=e)}function Qp(e){Oe(bn,bn.current),Oe(Mn,e),An===null&&(An=e)}function vy(e){e.tag===22?(Oe(bn,bn.current),Oe(Mn,e),An===null&&(An=e)):ds()}function ds(){Oe(bn,bn.current),Oe(Mn,Mn.current)}function ii(e){yn(Mn),An===e&&(An=null),yn(bn)}var bn=aa(0);function jl(e,t){Oe(Mn,Mn.current),Oe(bn,t)}function n0(e){yn(bn),yn(Mn),An===e&&(An=null)}function af(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Nm(n)||R0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Aa=0,Kt=null,Re=null,Ze=null,sf=!1,uo=!1,ar=!1,rf=0,$l=0,fo=null,AT=0;function ke(){throw Error(J(321))}function i0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ui(e[n],t[n]))return!1;return!0}function a0(e,t,n,i,a,s){return Aa=s,Kt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vt.H=e===null||e.memoizedState===null?Jy:Ky,ar=!1,s=n(i,a),ar=!1,uo&&(s=yy(t,n,i,a)),_y(e),s}function _y(e){Vt.H=of;var t=Re!==null&&Re.next!==null;if(Aa=0,Ze=Re=Kt=null,sf=!1,$l=0,fo=null,t)throw Error(J(300));e===null||Ke||(e=e.dependencies,e!==null&&tf(e)&&(Ke=!0))}function yy(e,t,n,i){Kt=e;var a=0;do{if(uo&&(fo=null),$l=0,uo=!1,25<=a)throw Error(J(301));if(a+=1,Ze=Re=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Vt.H=IT,s=t(n,i)}while(uo);return s}function wT(){var e=Vt.H,t=e.useState()[0];return t=typeof t.then=="function"?pc(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(Kt.flags|=1024),t}function s0(){var e=rf!==0;return rf=0,e}function r0(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function o0(e){if(sf){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}sf=!1}Aa=0,Ze=Re=Kt=null,uo=!1,$l=rf=0,fo=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Kt.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Ye(){if(Re===null){var e=Kt.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Ze===null?Kt.memoizedState:Ze.next;if(t!==null)Ze=t,Re=e;else{if(e===null)throw Kt.alternate===null?Error(J(467)):Error(J(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ze===null?Kt.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Df(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pc(e){var t=$l;return $l+=1,fo===null&&(fo=[]),e=dy(fo,e,t),t=Kt,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,Vt.H=t===null||t.memoizedState===null?Jy:Ky),e}function Nf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pc(e);if(e.$$typeof===l3)return;if(e.$$typeof===Qi)return _n(e)}throw Error(J(438,String(e)))}function l0(e){var t=null,n=Kt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Kt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Df(),Kt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=o3;return t.index++,n}function wa(e,t){return typeof t=="function"?t(e):t}function Lu(e){var t=Ye();return c0(t,Re,e)}function c0(e,t,n){var i=e.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,f=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(oe&d)===d:(Aa&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===nr&&(f=!0);else if((Aa&h)===h){c=c.next,h===nr&&(f=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,Kt.lanes|=h,Ss|=h;d=c.action,ar&&n(s,d),s=c.hasEagerState?c.eagerState:n(s,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=s):l=l.next=h,Kt.lanes|=d,Ss|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!ui(s,e.memoizedState)&&(Ke=!0,f&&(n=lo,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function up(e){var t=Ye(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);ui(s,t.memoizedState)||(Ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function by(e,t,n){var i=Kt,a=Ye(),s=ee;if(s){if(n===void 0)throw Error(J(407));n=n()}else n=t();var r=!ui((Re||a).memoizedState,n);if(r&&(a.memoizedState=n,Ke=!0),a=a.queue,u0(Ty.bind(null,i,a,e),[e]),e=a.getSnapshot!==t||r||Ze!==null&&(Ze.memoizedState.tag&1)!==0,_o(e?9:8,{destroy:void 0},My.bind(null,i,a,n,t),null),e){if(i.flags|=2048,De===null)throw Error(J(349));s||(Aa&127)!==0||Sy(i,t,n)}return n}function Sy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Kt.updateQueue,t===null?(t=Df(),Kt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function My(e,t,n,i){t.value=n,t.getSnapshot=i,Ey(t)&&Ay(e)}function Ty(e,t,n){return n(function(){Ey(t)&&Ay(e)})}function Ey(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ui(e,n)}catch{return!0}}function Ay(e){var t=ur(e,2);t!==null&&Xn(t,e,2)}function jp(e){var t=Ln();if(typeof e=="function"){var n=e;if(e=n(),ar){ns(!0);try{n()}finally{ns(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},t}function wy(e,t,n,i){return e.baseState=n,c0(e,Re,typeof i=="function"?i:wa)}function CT(e,t,n,i,a){if(Lf(e))throw Error(J(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Vt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Cy(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Cy(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Vt.T,r={};r.types=s!==null?s.types:null,Vt.T=r;try{var o=n(a,i),l=Vt.S;l!==null&&l(r,o),mv(e,t,o)}catch(c){$p(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Vt.T=s}}else try{s=n(a,i),mv(e,t,s)}catch(c){$p(e,t,c)}}function mv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){gv(e,t,i)},function(i){return $p(e,t,i)}):gv(e,t,n)}function gv(e,t,n){t.status="fulfilled",t.value=n,Ry(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Cy(e,n)))}function $p(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Ry(t),t=t.next;while(t!==i)}e.action=null}function Ry(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Dy(e,t){return t}function xv(e,t){if(ee){var n=De.formState;if(n!==null){t:{var i=Kt;if(ee){if(Ie){e:{for(var a=Ie,s=Ai;a.nodeType!==8;){if(!s){a=null;break e}if(a=wi(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Ie=wi(a.nextSibling),i=a.data==="F!";break t}}_s(i)}i=!1}i&&(t=n[0])}}return n=Ln(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dy,lastRenderedState:t},n.queue=i,n=qy.bind(null,Kt,i),i.dispatch=n,i=jp(!1),s=p0.bind(null,Kt,!1,i.queue),i=Ln(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=CT.bind(null,Kt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function vv(e){var t=Ye();return Ny(t,Re,e)}function Ny(e,t,n){if(t=c0(e,t,Dy)[0],e=Lu(wa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=pc(t)}catch(r){throw r===No?Rf:r}else i=t;t=Ye();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Kt.flags|=2048,_o(9,{destroy:void 0},RT.bind(null,a,n),null)),[i,s,e]}function RT(e,t){e.action=t}function _v(e){var t=Ye(),n=Re;if(n!==null)return Ny(t,n,e);Ye(),t=t.memoizedState,n=Ye();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function _o(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Kt.updateQueue,t===null&&(t=Df(),Kt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Uy(){return Ye().memoizedState}function Iu(e,t,n,i){var a=Ln();Kt.flags|=e,a.memoizedState=_o(1|t,{destroy:void 0},n,i===void 0?null:i)}function Uf(e,t,n,i){var a=Ye();i=i===void 0?null:i;var s=a.memoizedState.inst;Re!==null&&i!==null&&i0(i,Re.memoizedState.deps)?a.memoizedState=_o(t,s,n,i):(Kt.flags|=e,a.memoizedState=_o(1|t,s,n,i))}function yv(e,t){Iu(8390656,8,e,t)}function u0(e,t){Uf(2048,8,e,t)}function DT(e){Kt.flags|=4;var t=Kt.updateQueue;if(t===null)t=Df(),Kt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ly(e){var t=Ye().memoizedState;return DT({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(J(440));return t.impl.apply(void 0,arguments)}}function Iy(e,t){return Uf(4,2,e,t)}function Oy(e,t){return Uf(4,4,e,t)}function Py(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zy(e,t,n){n=n!=null?n.concat([e]):null,Uf(4,4,Py.bind(null,t,e),n)}function f0(){}function By(e,t){var n=Ye();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&i0(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Fy(e,t){var n=Ye();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&i0(t,i[1]))return i[0];if(i=e(),ar){ns(!0);try{e()}finally{ns(!1)}}return n.memoizedState=[i,t],i}function h0(e,t,n){return n===void 0||(Aa&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Nb(),Kt.lanes|=e,Ss|=e,n)}function Vy(e,t,n,i){return ui(n,t)?n:ys.current!==null?(e=h0(e,n,i),ui(e,t)||(Ke=!0),e):(Aa&106)===0||(Aa&1073741824)!==0&&(oe&261930)===0?(Ke=!0,e.memoizedState=n):(e=Nb(),Kt.lanes|=e,Ss|=e,t)}function Hy(e,t,n,i,a){var s=Se.p;Se.p=s!==0&&8>s?s:8;var r=Vt.T,o={};o.types=r!==null?r.types:null,Vt.T=o,p0(e,!1,t,n);try{var l=a(),c=Vt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=ET(l,i);Fl(e,t,f,ci(e))}else Fl(e,t,i,ci(e))}catch(d){Fl(e,t,{then:function(){},status:"rejected",reason:d},ci())}finally{Se.p=s,r!==null&&o.types!==null&&(r.types=o.types),Vt.T=r}}function NT(){}function tm(e,t,n,i){if(e.tag!==5)throw Error(J(476));var a=Gy(e).queue;Hy(e,a,t,Zs,n===null?NT:function(){return ky(e),n(i)})}function Gy(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Zs,baseState:Zs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:Zs},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ky(e){var t=Gy(e);t.next===null&&(t=e.alternate.memoizedState),Fl(e,t.next.queue,{},ci())}function d0(){return _n(Ao)}function Xy(){return Ye().memoizedState}function Wy(){return Ye().memoizedState}function UT(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ci();e=us(n);var i=fs(t,e,n);i!==null&&(Xn(i,t,n),Pl(i,t,n)),t={cache:Qm()},e.payload=t;return}t=t.return}}function LT(e,t,n){var i=ci();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Lf(e)?Yy(t,n):(n=Zm(e,t,n,i),n!==null&&(Xn(n,e,i),Zy(n,t,i)))}function qy(e,t,n){var i=ci();Fl(e,t,n,i)}function Fl(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lf(e))Yy(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,ui(o,r))return wf(e,t,a,0),De===null&&Af(),!1}catch{}finally{}if(n=Zm(e,t,a,i),n!==null)return Xn(n,e,i),Zy(n,t,i),!0}return!1}function p0(e,t,n,i){if(i={lane:2,revertLane:E0(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Lf(e)){if(t)throw Error(J(479))}else t=Zm(e,n,i,2),t!==null&&Xn(t,e,2)}function Lf(e){var t=e.alternate;return e===Kt||t!==null&&t===Kt}function Yy(e,t){uo=sf=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zy(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,U_(e,n)}}var of={readContext:_n,use:Nf,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke,useEffectEvent:ke},Jy={readContext:_n,use:Nf,useCallback:function(e,t){return Ln().memoizedState=[e,t===void 0?null:t],e},useContext:_n,useEffect:yv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Iu(4194308,4,Py.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Iu(4194308,4,e,t)},useInsertionEffect:function(e,t){Iu(4,2,e,t)},useMemo:function(e,t){var n=Ln();t=t===void 0?null:t;var i=e();if(ar){ns(!0);try{e()}finally{ns(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Ln();if(n!==void 0){var a=n(t);if(ar){ns(!0);try{n(t)}finally{ns(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=LT.bind(null,Kt,e),[i.memoizedState,e]},useRef:function(e){var t=Ln();return e={current:e},t.memoizedState=e},useState:function(e){e=jp(e);var t=e.queue,n=qy.bind(null,Kt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:f0,useDeferredValue:function(e,t){var n=Ln();return h0(n,e,t)},useTransition:function(){var e=jp(!1);return e=Hy.bind(null,Kt,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Kt,a=Ln();if(ee){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),De===null)throw Error(J(349));(oe&127)!==0||Sy(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,yv(Ty.bind(null,i,s,e),[e]),i.flags|=2048,_o(9,{destroy:void 0},My.bind(null,i,s,n,t),null),n},useId:function(){var e=Ln(),t=De.identifierPrefix;if(ee){var n=ta,i=$i;n=(i&~(1<<32-li(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=rf++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=AT++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:d0,useFormState:xv,useActionState:xv,useOptimistic:function(e){var t=Ln();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=p0.bind(null,Kt,!0,n),n.dispatch=t,[e,t]},useMemoCache:l0,useCacheRefresh:function(){return Ln().memoizedState=UT.bind(null,Kt)},useEffectEvent:function(e){var t=Ln(),n={impl:e};return t.memoizedState=n,function(){if((be&2)!==0)throw Error(J(440));return n.impl.apply(void 0,arguments)}}},Ky={readContext:_n,use:Nf,useCallback:By,useContext:_n,useEffect:u0,useImperativeHandle:zy,useInsertionEffect:Iy,useLayoutEffect:Oy,useMemo:Fy,useReducer:Lu,useRef:Uy,useState:function(){return Lu(wa)},useDebugValue:f0,useDeferredValue:function(e,t){var n=Ye();return Vy(n,Re.memoizedState,e,t)},useTransition:function(){var e=Lu(wa)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:pc(e),t]},useSyncExternalStore:by,useId:Xy,useHostTransitionStatus:d0,useFormState:vv,useActionState:vv,useOptimistic:function(e,t){var n=Ye();return wy(n,Re,e,t)},useMemoCache:l0,useCacheRefresh:Wy,useEffectEvent:Ly},IT={readContext:_n,use:Nf,useCallback:By,useContext:_n,useEffect:u0,useImperativeHandle:zy,useInsertionEffect:Iy,useLayoutEffect:Oy,useMemo:Fy,useReducer:up,useRef:Uy,useState:function(){return up(wa)},useDebugValue:f0,useDeferredValue:function(e,t){var n=Ye();return Re===null?h0(n,e,t):Vy(n,Re.memoizedState,e,t)},useTransition:function(){var e=up(wa)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:pc(e),t]},useSyncExternalStore:by,useId:Xy,useHostTransitionStatus:d0,useFormState:_v,useActionState:_v,useOptimistic:function(e,t){var n=Ye();return Re!==null?wy(n,Re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:l0,useCacheRefresh:Wy,useEffectEvent:Ly};function fp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var em={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ci(),a=us(i);a.payload=t,n!=null&&(a.callback=n),t=fs(e,a,i),t!==null&&(Xn(t,e,i),Pl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ci(),a=us(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=fs(e,a,i),t!==null&&(Xn(t,e,i),Pl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ci(),i=us(n);i.tag=2,t!=null&&(i.callback=t),t=fs(e,i,n),t!==null&&(Xn(t,e,n),Pl(t,e,n))}};function bv(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Zl(n,i)||!Zl(a,s):!0}function Sv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&em.enqueueReplaceState(t,t.state,null)}function sr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ne({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Qy(e){Ku(e)}function jy(e){console.error(e)}function $y(e){Ku(e)}function lf(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Mv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function nm(e,t,n){return n=us(n),n.tag=3,n.payload={element:null},n.callback=function(){lf(e,t)},n}function tb(e){return e=us(e),e.tag=3,e}function eb(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){Mv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Mv(t,n,i),typeof a!="function"&&(ps===null?ps=new Set([this]):ps.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function OT(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&tr(t,n,a,!0),n=Mn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return An===null?gf():n.alternate===null&&Xe===0&&(Xe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===ef?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),vp(e,i,a)),!1;case 22:return n.flags|=65536,i===ef?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),vp(e,i,a)),!1}throw Error(J(435,n.tag))}return vp(e,i,a),gf(),!1}if(ee)return t=Mn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Xp&&(e=Error(J(422),{cause:i}),Kl(Ei(e,n)))):(i!==Xp&&(t=Error(J(423),{cause:i}),Kl(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Ei(i,n),a=nm(e.stateNode,i,a),cp(e,a),Xe!==4&&(Xe=2)),!1;var s=Error(J(520),{cause:i});if(s=Ei(s,n),kl===null?kl=[s]:kl.push(s),Xe!==4&&(Xe=2),t===null)return!0;i=Ei(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nm(n.stateNode,i,e),cp(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ps===null||!ps.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=tb(a),eb(a,e,n,i),cp(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var m0=Error(J(461)),Ke=!1;function nn(e,t,n,i){t.child=e===null?my(t,null,n,i):ir(t,e.child,n,i)}function Tv(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return er(t),i=a0(e,t,n,r,s,a),o=s0(),e!==null&&!Ke?(r0(e,t,a),Ca(e,t,a)):(ee&&o&&Cf(t),t.flags|=1,nn(e,t,i,a),t.child)}function Ev(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!Jm(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,nb(e,t,s,i,a)):(e=Du(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!x0(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zl,n(r,i)&&e.ref===t.ref)return Ca(e,t,a)}return t.flags|=1,e=Sa(s,i),e.ref=t.ref,e.return=t,t.child=e}function nb(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Zl(s,i)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=i=s,x0(e,a))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,Ca(e,t,a)}return im(e,t,n,i,a)}function ib(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return Av(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Uu(t,s!==null?s.cachePool:null),s!==null?pv(t,s):Kp(),vy(t);else return i=t.lanes=536870912,Av(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Uu(t,s.cachePool),pv(t,s),ds(),t.memoizedState=null):(e!==null&&Uu(t,null),Kp(),ds());return nn(e,t,a,n),t.child}function Vl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Av(e,t,n,i,a){var s=jm();return s=s===null?null:{parent:Je._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Uu(t,null),Kp(),vy(t),e!==null&&tr(e,t,i,!0),t.childLanes=a,null}function Ou(e,t){return t=If({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function wv(e,t,n){return ir(t,e.child,null,n),e=Ou(t,t.pendingProps),e.flags|=2,ii(t),t.memoizedState=null,e}function PT(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(i.mode==="hidden")return e=Ou(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Vl(null,e);if(Qp(t),(e=Ie)?(e=i1(e,Ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vs!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},n=ly(e),n.return=t,t.child=n,hn=t,Ie=null)):e=null,e===null)throw _s(t);return t.lanes=536870912,null}return Ou(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Qp(t),a)if(t.flags&256)t.flags&=-257,t=wv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(J(558));else if(Ke||tr(e,t,n,!1),a=(n&e.childLanes)!==0,Ke||a){if(ys.current===null){if(i=De,i!==null&&(r=L_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,ur(e,r),Xn(i,e,r),m0;gf()}t=wv(e,t,n)}else e=s.treeContext,Ie=wi(r.nextSibling),hn=t,ee=!0,cs=null,Ai=!1,e!==null&&uy(t,e),t=Ou(t,i),t.flags|=134221824;return t}return e=Sa(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function im(e,t,n,i,a){return er(t),n=a0(e,t,n,i,void 0,a),i=s0(),e!==null&&!Ke?(r0(e,t,a),Ca(e,t,a)):(ee&&i&&Cf(t),t.flags|=1,nn(e,t,n,a),t.child)}function Cv(e,t,n,i,a,s){return er(t),t.updateQueue=null,n=yy(t,i,n,a),_y(e),i=s0(),e!==null&&!Ke?(r0(e,t,s),Ca(e,t,s)):(ee&&i&&Cf(t),t.flags|=1,nn(e,t,n,s),t.child)}function Rv(e,t,n,i,a){if(er(t),t.stateNode===null){var s=eo,r=n.contextType;typeof r=="object"&&r!==null&&(s=_n(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=em,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},t0(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?_n(r):eo,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(fp(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&em.enqueueReplaceState(s,s.state,null),Bl(t,i,s,a),zl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=sr(n,o);s.props=l;var c=s.context,f=n.contextType;r=eo,typeof f=="object"&&f!==null&&(r=_n(f));var d=n.getDerivedStateFromProps;f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&Sv(t,s,i,r),ts=!1;var h=t.memoizedState;s.state=h,Bl(t,i,s,a),zl(),c=t.memoizedState,o||h!==c||ts?(typeof d=="function"&&(fp(t,n,d,i),c=t.memoizedState),(l=ts||bv(t,n,l,i,h,c,r))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Zp(e,t),r=t.memoizedProps,f=sr(n,r),s.props=f,d=t.pendingProps,h=s.context,c=n.contextType,l=eo,typeof c=="object"&&c!==null&&(l=_n(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||h!==l)&&Sv(t,s,i,l),ts=!1,h=t.memoizedState,s.state=h,Bl(t,i,s,a),zl();var p=t.memoizedState;r!==d||h!==p||ts||e!==null&&e.dependencies!==null&&tf(e.dependencies)?(typeof o=="function"&&(fp(t,n,o,i),p=t.memoizedState),(f=ts||bv(t,n,f,i,h,p,l)||e!==null&&e.dependencies!==null&&tf(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=f):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Xr(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=ir(t,e.child,null,a),t.child=ir(t,null,n,a)):nn(e,t,n,a),t.memoizedState=s.state,e=t.child):e=Ca(e,t,a),e}function Dv(e,t,n,i){return $s(),t.flags|=256,nn(e,t,n,i),t.child}var am={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sm(e){return{baseLanes:e,cachePool:hy()}}function rm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=si),e}function ab(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(bn.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(a?hs(t):ds(),(e=Ie)?(e=i1(e,Ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vs!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},n=ly(e),n.return=t,t.child=n,hn=t,Ie=null)):e=null,e===null)throw _s(t);return R0(e)?t.lanes=32:t.lanes=536870912,null}return s=i.children,i=i.fallback,a?(ds(),a=t.mode,s=If({mode:"hidden",children:s},a),i=Js(i,a,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,i=t.child,i.memoizedState=sm(n),i.childLanes=rm(e,r,n),t.memoizedState=am,Vl(null,i)):(hs(t),g0(t,s))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return zT(e,t,s,r,i,l,o,n)}return a?(ds(),a=i.fallback,s=t.mode,o=e.child,l=o.sibling,i=Sa(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?a=Sa(l,a):(a=Js(a,s,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,Vl(null,i),i=t.child,a=e.child.memoizedState,a===null?a=sm(n):(s=a.cachePool,s!==null?(o=Je._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=hy(),a={baseLanes:a.baseLanes|n,cachePool:s}),i.memoizedState=a,i.childLanes=rm(e,r,n),t.memoizedState=am,Vl(e.child,i)):(hs(t),n=e.child,e=n.sibling,n=Sa(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function g0(e,t){return t=If({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function If(e,t){return e=kn(22,e,null,t),e.lanes=0,e}function gu(e,t,n){return ir(t,e.child,null,n),e=g0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zT(e,t,n,i,a,s,r,o){if(n)return t.flags&256?(hs(t),t.flags&=-257,gu(e,t,o)):t.memoizedState!==null?(ds(),t.child=e.child,t.flags|=128,null):(ds(),s=a.fallback,r=t.mode,a=If({mode:"visible",children:a.children},r),s=Js(s,r,o,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,ir(t,e.child,null,o),a=t.child,a.memoizedState=sm(o),a.childLanes=rm(e,i,o),t.memoizedState=am,Vl(null,a));if(hs(t),R0(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(a=Error(J(419)),a.stack="",a.digest=i,Kl({value:a,source:null,stack:null})),gu(e,t,o)}if(Ke||tr(e,t,o,!1),i=(o&e.childLanes)!==0,Ke||i){if(ys.current!==null)return gu(e,t,o);if(i=De,i!==null&&(a=L_(i,o),a!==0&&a!==r.retryLane))throw r.retryLane=a,ur(e,a),Xn(i,e,a),m0;return Nm(s)||gf(),gu(e,t,o)}return Nm(s)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Ie=wi(s.nextSibling),hn=t,ee=!0,cs=null,Ai=!1,e!==null&&uy(t,e),t=g0(t,a.children),t.flags|=134221824,t)}function Nv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Nu(e.return,t,n)}function Uv(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&af(n)===null&&(t=e),e=e.sibling}return t}function xu(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function hp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function om(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=bn.current;if(t.flags&128)return jl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,jl(t,r),a==="backwards"&&e!==null?(hp(e),nn(e,t,i,n),hp(e)):nn(e,t,i,n),i=ee?Jl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nv(e,n,t);else if(e.tag===19)Nv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=Uv(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,hp(t)),xu(t,!0,a,null,s,i);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&af(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}xu(t,!0,n,null,s,i);break;case"together":xu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=Uv(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),xu(t,!1,a,n,s,i)}return t.child}function Lv(e,t,n){var i=t.pendingProps;return as(t,t.type,i.value),nn(e,t,i.children,n),t.child}function Ca(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ss|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(tr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=Sa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function x0(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&tf(e)))}function BT(e,t,n){switch(t.tag){case 3:qu(t,t.stateNode.containerInfo),as(t,Je,e.memoizedState.cache),$s();break;case 27:case 5:Ip(t);break;case 4:qu(t,t.stateNode.containerInfo);break;case 10:as(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qp(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return hs(t),t.flags|=128,null;i=tr(e,t,n,!1);var a=t.child.childLanes;return i||(n&a)!==0?ab(e,t,n):(hs(t),e=Ca(e,t,n),e!==null?e.sibling:null)}hs(t);break;case 19:if(t.flags&128)return om(e,t,n);if(a=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(tr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return om(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),jl(t,bn.current),i)break;return null;case 22:return t.lanes=0,ib(e,t,n,t.pendingProps);case 24:as(t,Je,e.memoizedState.cache)}return Ca(e,t,n)}function sb(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!x0(e,n)&&(t.flags&128)===0)return Ke=!1,BT(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,ee&&(t.flags&1048576)!==0&&cy(t,Jl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Xs(t.elementType),t.type=e,typeof e=="function")Jm(e)?(i=sr(e,i),t.tag=1,t=Rv(null,t,e,i,n)):(t.tag=0,t=im(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Pm){t.tag=11,t=Tv(null,t,e,i,n);break t}else if(a===zm){t.tag=14,t=Ev(null,t,e,i,n);break t}else if(a===Qi){t.tag=10,t.type=e,t=Lv(null,t,n);break t}}throw t=Up(e)||e,Error(J(306,t,""))}}return t;case 0:return im(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=sr(i,t.pendingProps),Rv(e,t,i,a,n);case 3:t:{if(qu(t,t.stateNode.containerInfo),e===null)throw Error(J(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Zp(e,t),Bl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,as(t,Je,i),i!==s.cache&&qp(t,[Je],n,!0),zl(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Dv(e,t,i,n);break t}else if(i!==a){a=Ei(Error(J(424)),t),Kl(a),t=Dv(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ie=wi(e.firstChild),hn=t,ee=!0,cs=null,Ai=!0,n=my(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if($s(),i===a){t=Ca(e,t,n);break t}nn(e,t,i,n)}t=t.child}return t;case 26:return Xr(e,t),e===null?(n=r_(t.type,null,t.pendingProps,null))?t.memoizedState=n:ee||(t.stateNode=Zb(t.type,t.pendingProps,ls.current,t)):t.memoizedState=r_(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ip(t),e===null&&ee&&(i=t.stateNode=a1(t.type,t.pendingProps,ls.current),hn=t,Ai=!0,a=Ie,Ts(t.type)?(Um=a,Ie=wi(i.firstChild)):Ie=a),nn(e,t,t.pendingProps.children,n),Xr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((a=i=Ie)&&(i=DE(i,t.type,t.pendingProps,Ai),i!==null?(t.stateNode=i,hn=t,Ie=wi(i.firstChild),Ai=!1,a=!0):a=!1),a||_s(t)),Ip(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,Cm(a,s)?i=null:r!==null&&Cm(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=a0(e,t,wT,null,null,n),Ao._currentValue=a),Xr(e,t),nn(e,t,i,n),t.child;case 6:return e===null&&ee&&((e=n=Ie)&&(n=NE(n,t.pendingProps,Ai),n!==null?(t.stateNode=n,hn=t,Ie=null,e=!0):e=!1),e||_s(t)),null;case 13:return ab(e,t,n);case 4:return qu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ir(t,null,i,n):nn(e,t,i,n),t.child;case 11:return Tv(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Xr(e,t),nn(e,t,i,n),t.child;case 8:return nn(e,t,t.pendingProps.children,n),t.child;case 12:return nn(e,t,t.pendingProps.children,n),t.child;case 10:return Lv(e,t,n);case 9:return a=t.type._context,i=t.pendingProps.children,er(t),a=_n(a),i=i(a),t.flags|=1,nn(e,t,i,n),t.child;case 14:return Ev(e,t,t.type,t.pendingProps,n);case 15:return nb(e,t,t.type,t.pendingProps,n);case 19:return om(e,t,n);case 31:return PT(e,t,n);case 22:return ib(e,t,n,t.pendingProps);case 24:return er(t),i=_n(Je),e===null?(a=jm(),a===null&&(a=De,s=Qm(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},t0(t),as(t,Je,a)):((e.lanes&n)!==0&&(Zp(e,t),Bl(t,null,null,n),zl()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),as(t,Je,i)):(i=s.cache,as(t,Je,i),i!==a.cache&&qp(t,[Je],n,!0))),nn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:ee&&Cf(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Xr(e,t),nn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}function _a(e){e.flags|=4}function dp(e,t,n,i,a){var s;if((s=(e.mode&32)!==0)&&(s=n===null?c_(t,i):c_(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),s){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Ib())e.flags|=8192;else throw Qs=ef,$m}else e.flags&=-16777217}function Iv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!l1(t))if(Ib())e.flags|=8192;else throw Qs=ef,$m}function vu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?D_():536870912,e.lanes|=t,yo|=t)}function Ml(e,t){if(!ee)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function FT(e,t,n){var i=t.pendingProps;switch(Km(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ma(Je),go(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gr(t)?_a(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lp())),Le(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(_a(t),s!==null?(Le(t),Iv(t,s)):(Le(t),dp(t,a,null,i,n))):s?s!==e.memoizedState?(_a(t),Le(t),Iv(t,s)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&_a(t),Le(t),dp(t,a,e,i,n)),null;case 27:if(Yu(t),n=ls.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_a(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Le(t),t.subtreeFlags&=-33554433,null}e=ea.current,Gr(t)?ov(t,e):(e=a1(a,i,n),t.stateNode=e,_a(t))}return Le(t),t.subtreeFlags&=-33554433,null;case 5:if(Yu(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_a(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Le(t),t.subtreeFlags&=-33554433,null}if(s=ea.current,Gr(t))ov(t,s);else{var r=nc(ls.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[vn]=t,s[qn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(Sn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&_a(t)}}return Le(t),t.subtreeFlags&=-33554433,dp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&_a(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(e=ls.current,Gr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=hn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[vn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||qb(e.nodeValue,n)),e||_s(t,!0)}else e=nc(e).createTextNode(i),e[vn]=t,t.stateNode=e}return Le(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Gr(t),n!==null){if(e===null){if(!i)throw Error(J(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(557));e[vn]=t}else $s(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else n=lp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ii(t),t):(ii(t),null);if((t.flags&128)!==0)throw Error(J(558))}return Le(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(J(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[vn]=t}else $s(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),a=!1}else a=lp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ii(t),t):(ii(t),null)}return ii(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vu(t,t.updateQueue),Le(t),null);case 4:return go(),e===null&&A0(t.stateNode.containerInfo),t.flags|=67108864,Le(t),null;case 10:return Ma(t.type),Le(t),null;case 19:if(n0(t),i=t.memoizedState,i===null)return Le(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Ml(i,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=af(e),s!==null){for(t.flags|=128,Ml(i,!1),e=s.updateQueue,t.updateQueue=e,vu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)oy(n,e),n=n.sibling;return jl(t,bn.current&1|2),ee&&ya(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ri()>pf&&(t.flags|=128,a=!0,Ml(i,!1),t.lanes=4194304)}else{if(!a)if(e=af(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,vu(t,e),Ml(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!s.alternate&&!ee)return Le(t),null}else 2*ri()-i.renderingStartTime>pf&&n!==536870912&&(t.flags|=128,a=!0,Ml(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ri(),e.sibling=null,s=bn.current,s=a?s&1|2:s&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||ee?jl(t,s):(n=s,Oe(Mn,t),Oe(bn,n),An===null&&(An=t)),ee&&ya(t,i.treeForkCount),e}return Le(t),null;case 22:case 23:return ii(t),e0(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&vu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&yn(Ks),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ma(Je),Le(t),null;case 25:return null;case 30:return t.flags|=33554432,Le(t),null}throw Error(J(156,t.tag))}function VT(e,t){switch(Km(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ma(Je),go(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Yu(t),null;case 31:if(t.memoizedState!==null){if(ii(t),t.alternate===null)throw Error(J(340));$s()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ii(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));$s()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return n0(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return go(),null;case 10:return Ma(t.type),null;case 22:case 23:return ii(t),e0(),e!==null&&yn(Ks),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ma(Je),null;case 25:return null;default:return null}}function rb(e,t){switch(Km(t),t.tag){case 3:Ma(Je),go();break;case 26:case 27:case 5:Yu(t);break;case 4:go();break;case 31:t.memoizedState!==null&&ii(t);break;case 13:ii(t);break;case 19:n0(t);break;case 10:Ma(t.type);break;case 22:case 23:ii(t),e0(),e!==null&&yn(Ks);break;case 24:Ma(Je)}}function mc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){we(t,t.return,o)}}function bs(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(f){we(a,l,f)}}}i=i.next}while(i!==s)}}catch(f){we(t,t.return,f)}}function ob(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{xy(t,n)}catch(i){we(e,e.return,i)}}}function lb(e,t,n){n.props=sr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){we(e,t,i)}}function Ji(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var a=e.stateNode,s=Ea(e.memoizedProps,a);(a.ref===null||a.ref.name!==s)&&(a.ref=jb(s)),i=a.ref;break;case 7:if(e.stateNode===null){var r=new fi(e);Wn(e.child,!1,CE,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){we(e,t,o)}}function xn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){we(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){we(e,t,a)}else n.current=null}function cf(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)n1(e.stateNode,t[n])}function Ov(e){for(var t=e.return;t!==null&&(_0(t)&&n1(e.stateNode,t.stateNode),!v0(t));)t=t.return}function Hl(e){for(var t=e.return;t!==null&&(_0(t)&&RE(e.stateNode,t.stateNode),!v0(t));)t=t.return}function v0(e){return e.tag===5||e.tag===3||e.tag===27}function _0(e){return e&&e.tag===7&&e.stateNode!==null}function lm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){we(e,e.return,a)}}function pp(e,t,n){try{var i=e.stateNode;uE(i,e.type,n,t),i[qn]=t}catch(a){we(e,e.return,a)}}function cb(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ts(e.type)||e.tag===4}function mp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||cb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ts(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cm(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji)),cf(e,i),_e=!0;else if(a!==4&&(a===27&&(cf(e,i),i=null,Ts(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(cm(e,t,n,i),e=e.sibling;e!==null;)cm(e,t,n,i),e=e.sibling}function uf(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),cf(e,i),_e=!0;else if(a!==4&&(a===27&&(cf(e,i),i=null,Ts(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(uf(e,t,n,i),e=e.sibling;e!==null;)uf(e,t,n,i),e=e.sibling}function ub(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Sn(t,i,n),t[vn]=e,t[qn]=n}catch(s){we(e,e.return,s)}}var ff=!1,ai=null;function Pv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(ff=!0)}var Ki=null;function zv(){var e=Ki;return Ki=null,e}var Gn=0;function Uo(e,t,n,i,a){return Gn=0,fb(e.child,t,n,i,a)}function fb(e,t,n,i,a){for(var s=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Rm(r);i.push(o),o.view&&(s=!0)}else s||Rm(r).view&&(s=!0);ff=!0,Jb(r,Gn===0?t:t+"_"+Gn,n),Gn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||fb(e.child,t,n,i,a)&&(s=!0));e=e.sibling}return s}function ia(e,t){for(;e!==null;)e.tag===5?Kb(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ia(e.child,t)),e=e.sibling}function Pu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Pu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(J(544));var n=t.name;t=Na(t.default,t.share),t!=="none"&&(Uo(e,n,t,null,!1)||ia(e.child,!1))}e=e.sibling}}function um(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,a=Ea(i,n),s=Na(i.default,n.paired?i.share:i.enter);s!=="none"?Uo(e,a,s,null,!1)?(Pu(e),n.paired||t||bo(e,i.onEnter)):ia(e.child,!1):Pu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)um(e,t),e=e.sibling;else Pu(e)}function fm(e){if(ai!==null&&ai.size!==0){var t=ai;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=t.get(i);if(a!==void 0){var s=Na(n.default,n.share);if(s!=="none"&&(Uo(e,i,s,null,!1)?(s=e.stateNode,a.paired=s,s.paired=a,bo(e,n.onShare)):ia(e.child,!1)),t.delete(i),t.size===0)break}}}fm(e)}e=e.sibling}}}function hm(e){if(e.tag===30){var t=e.memoizedProps,n=Ea(t,e.stateNode),i=ai!==null?ai.get(n):void 0,a=Na(t.default,i!==void 0?t.share:t.exit);a!=="none"&&(Uo(e,n,a,null,!1)?i!==void 0?(a=e.stateNode,i.paired=a,a.paired=i,ai.delete(n),bo(e,t.onShare)):bo(e,t.onExit):ia(e.child,!1)),ai!==null&&fm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)hm(e),e=e.sibling;else ai!==null&&fm(e)}function hb(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Ea(t,e.stateNode);t=Na(t.default,t.update),e.flags&=-5,t!=="none"&&Uo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&hb(e);e=e.sibling}}function dm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ia(e.child,!1))}dm(e)}e=e.sibling}}function zu(e){if(e.tag===30)e.stateNode.paired=null,ia(e.child,!1),dm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)zu(e),e=e.sibling;else dm(e)}function db(e){for(e=e.child;e!==null;)e.tag===30?ia(e.child,!1):(e.subtreeFlags&33554432)!==0&&db(e),e=e.sibling}function y0(e,t,n,i,a,s,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(s!==null&&Gn<s.length){var c=s[Gn],f=Rm(l);(c.view||f.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(f.clip)d=!0;else{d=c.rect;var h=f.rect;d=d.y!==h.y||d.x!==h.x||d.height!==h.height||d.width!==h.width}d&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Jb(l,Gn===0?n:n+"_"+Gn,a),o&&(e.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(l,Gn===0?i:i+"_"+Gn,t.memoizedProps)),Gn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:y0(e,t.child,n,i,a,s,r)&&(o=!0));t=t.sibling}return o}function pb(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,a=Ea(n,i),s=Na(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(gE)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Gn=0,a=y0(i,o,a,a,s,r,!1),(e.flags&4)!==0&&a&&(t||bo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&pb(e,t);e=e.sibling}}var cn=!1,Te=!1,qi=!1,gp=!1,Bv=typeof WeakSet=="function"?WeakSet:Set,un=null,Yi=!1,Nl=!1,hf=!1,pm=!1;function HT(e,t,n){if(e=e.containerInfo,Am=wo,e=$_(e),qm(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var s=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,d=0,h=e,p=null;e:for(;;){for(var v;h!==i||s!==0&&h.nodeType!==3||(l=o+s),h!==r||a!==0&&h.nodeType!==3||(c=o+a),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)p=h,h=v;for(;;){if(h===e)break e;if(p===i&&++f===s&&(l=o),p===r&&++d===a&&(c=o),(v=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(wm={focusedElem:e,selectionRange:i},wo=!1,n=(n&335544064)===n,un=t,t=n?9270:1024;un!==null;){if(e=un,n&&(i=e.deletions,i!==null))for(s=0;s<i.length;s++)n&&hm(i[s]);if(e.alternate===null&&(e.flags&2)!==0)n&&Pv(e),_u(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&hm(i),_u(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Pv(e),_u(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,un=i):(n&&hb(e),_u(n))}}ai=null}function _u(e){for(;un!==null;){var t=un,n=e,i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var s=t.stateNode;try{var r=sr(t.type,a);n=s.getSnapshotBeforeUpdate(r,i),s.__reactInternalSnapshotBeforeUpdate=n}catch(o){we(t,t.return,o)}}break;case 3:if((a&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)Dm(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Dm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Ea(i.memoizedProps,i.stateNode),a=t.memoizedProps,a=Na(a.default,a.update),a!=="none"&&Uo(i,n,a,i.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(J(163))}if(i=t.sibling,i!==null){i.return=t.return,un=i;break}un=t.return}}function mb(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Zi(e,n),i&4&&mc(5,n);break;case 1:if(Zi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){we(n,n.return,r)}else{var a=sr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){we(n,n.return,r)}}i&64&&ob(n),i&512&&Ji(n,n.return);break;case 3:if(Zi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{xy(e,t)}catch(r){we(n,n.return,r)}}break;case 27:t===null&&i&4&&ub(n);case 26:case 5:Zi(e,n),t===null&&i&4&&lm(n),i&512&&Ji(n,n.return);break;case 12:Zi(e,n);break;case 31:Zi(e,n),i&4&&_b(e,n);break;case 13:Zi(e,n),i&4&&yb(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=$T.bind(null,n),UE(e,n))));break;case 22:if(i=n.memoizedState!==null||cn,!i){var s=t!==null&&t.memoizedState!==null||Te;t=cn,a=Te,cn=i,(Te=s)&&!a?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Oi(e,n,i)):Zi(e,n),cn=t,Te=a}break;case 30:Zi(e,n),i&512&&Ji(n,n.return);break;case 7:i&512&&Ji(n,n.return);default:Zi(e,n)}}function mm(e,t){for(e=e.child;e!==null;)gb(e,t),e=e.sibling}function gb(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=e.stateNode,s=e.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null;a.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){we(e,e.return,l)}gm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,_e=!0}catch(l){we(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?t_(o,!0):t_(e.stateNode,!1)}catch(l){we(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&mm(e,t);break;default:mm(e,t)}}function gm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:gb(n,i);break t;case 22:n.memoizedState===null&&gm(n,i);break t;default:gm(n,i)}}e=e.sibling}}function xb(e){var t=e.alternate;t!==null&&(e.alternate=null,xb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Sf(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,Vn=!1;function Ii(e,t,n){for(n=n.child;n!==null;)vb(e,t,n),n=n.sibling}function vb(e,t,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 26:Te||xn(n,t),Ii(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Te&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Te||xn(n,t),Hl(n);var i=Be,a=Vn;Ts(n.type)&&(Be=n.stateNode,Vn=!1),Ii(e,t,n),s1(n.stateNode,n.type,n.memoizedProps),Be=i,Vn=a;break;case 5:Te||xn(n,t),Hl(n);case 6:if(n.tag===6&&Hl(n),i=Be,a=Vn,Be=null,Ii(e,t,n),Be=i,Vn=a,Be!==null)if(Vn)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(n.stateNode),_e=!0}catch(s){we(n,t,s)}else try{Be.removeChild(n.stateNode),_e=!0}catch(s){we(n,t,s)}break;case 18:Be!==null&&(Vn?(e=Be,$v(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Co(e)):$v(Be,n.stateNode));break;case 4:i=Be,a=Vn,Be=n.stateNode.containerInfo,Vn=!0,Ii(e,t,n),Be=i,Vn=a;break;case 0:case 11:case 14:case 15:bs(2,n,t),Te||bs(4,n,t),Ii(e,t,n);break;case 1:Te||(xn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&lb(n,t,i)),Ii(e,t,n);break;case 21:Ii(e,t,n);break;case 22:Te=(i=Te)||n.memoizedState!==null,Ii(e,t,n),Te=i;break;case 30:xn(n,t),Ii(e,t,n);break;case 7:Te||xn(n,t),Ii(e,t,n);break;default:Ii(e,t,n)}}function _b(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Co(e)}catch(n){we(t,t.return,n)}}}function yb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Co(e)}catch(n){we(t,t.return,n)}}function GT(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bv),t;default:throw Error(J(435,e.tag))}}function yu(e,t){var n=GT(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=tE.bind(null,e,i);i.then(a,a)}})}function Nn(e,t,n){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var s=i[a],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Ts(l.type)){Be=l.stateNode,Vn=!1;break t}break;case 5:Be=l.stateNode,Vn=!1;break t;case 3:case 4:Be=l.stateNode.containerInfo,Vn=!0;break t}l=l.return}if(Be===null)throw Error(J(160));vb(r,o,s),Be=null,Vn=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)bb(t,e,n),t=t.sibling}var Pi=null;function bb(e,t,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var s=0;s<i.length;s++){var r=i[s];r.ref.impl=r.nextImpl}Nn(t,e,n),Un(e),a&4&&(bs(3,e,e.return),mc(3,e),bs(5,e,e.return));break;case 1:Nn(t,e,n),Un(e),a&512&&(Te||i===null||xn(i,i.return)),a&64&&cn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(s=Pi,Nn(t,e,n),Un(e),a&512&&(Te||i===null||xn(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(cn)e.stateNode=Zb(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,a=s.ownerDocument||s;e:switch(t){case"title":i=a.getElementsByTagName("title")[0],(!i||i[fc]||i[vn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(t),a.head.insertBefore(i,a.querySelector("head > title"))),Sn(i,t,n),i[vn]=e,fn(i),t=i;break t;case"link":if(s=l_("link","href",a).get(t+(n.href||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(r,1);break e}}i=a.createElement(t),Sn(i,t,n),a.head.appendChild(i);break;case"meta":if(s=l_("meta","content",a).get(t+(n.content||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(r,1);break e}}i=a.createElement(t),Sn(i,t,n),a.head.appendChild(i);break;default:throw Error(J(468,t))}i[vn]=e,fn(i),t=i}e.stateNode=t}else cn||Lm(s,e.type,e.stateNode);else e.stateNode=o_(s,n,e.memoizedProps);else a!==n?(a===null?(t=i.stateNode,t===null||Te||t.parentNode.removeChild(t)):a.count--,n===null?cn||Lm(s,e.type,e.stateNode):o_(s,n,e.memoizedProps)):n===null&&e.stateNode!==null&&pp(e,e.memoizedProps,i.memoizedProps);break;case 27:Nn(t,e,n),Un(e),a&512&&(Te||i===null||xn(i,i.return)),i!==null&&a&4&&pp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(s=qi,qi=!1,Nn(t,e,n),qi=s,Un(e),a&512&&(Te||i===null||xn(i,i.return)),e.flags&32){t=e.stateNode;try{vo(t,""),_e=!0}catch(f){we(e,e.return,f)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,pp(e,t,i!==null?i.memoizedProps:t)),a&1024&&(gp=!0);break;case 6:if(Nn(t,e,n),Un(e),a&4){if(e.stateNode===null)throw Error(J(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,_e=!0}catch(f){we(e,e.return,f)}}break;case 3:if(_e=!1,Hu=null,s=Pi,Pi=ic(t.containerInfo),Nn(t,e,n),Pi=s,Un(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Co(t.containerInfo)}catch(f){we(e,e.return,f)}gp&&(gp=!1,Sb(e)),_e=!1;break;case 4:a=qi,qi=cn,i=Xx(),s=Pi,Pi=ic(e.stateNode.containerInfo),Nn(t,e,n),Un(e),Pi=s,_e&&Nl&&(hf=!0),_e=i,qi=a;break;case 12:Nn(t,e,n),Un(e);break;case 31:Nn(t,e,n),Un(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,yu(e,t)));break;case 13:Nn(t,e,n),Un(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Of=ri()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,yu(e,t)));break;case 22:s=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=cn,l=Te,c=qi;cn=o||s,qi=c||s,Te=l||r,Nn(t,e,n),Te=l,qi=c,cn=o,Un(e),a&8192&&(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,!s||i===null||r||cn||Te||(t=r||Te,n=cn,i=Te,cn=s||cn,Te=t,ja(e,2),cn=n,Te=i),!s&&qi||mm(e,s)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,yu(e,n))));break;case 19:Nn(t,e,n),Un(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,yu(e,t)));break;case 30:a&512&&(Te||i===null||xn(i,i.return)),a=Xx(),s=Nl,r=(n&335544064)===n,o=e.memoizedProps,Nl=r&&Na(o.default,o.update)!=="none",Nn(t,e,n),Un(e),r&&i!==null&&_e&&(e.flags|=4),Nl=s,_e=a;break;case 21:break;case 7:a&512&&(Te||i===null||xn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Nn(t,e,n),Un(e)}}function Un(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(cb(i)){n=i;break}i=i.return}i=null;for(var a=e.return;a!==null;){if(_0(a)){var s=a.stateNode;i===null?i=[s]:i.push(s)}if(v0(a))break;a=a.return}var r=i;if(n==null)throw Error(J(160));switch(n.tag){case 27:var o=n.stateNode,l=mp(e);uf(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(vo(c,""),n.flags&=-33);var f=mp(e);uf(e,f,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,h=mp(e);cm(e,h,d,r);break;default:throw Error(J(161))}}catch(p){we(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sb(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sb(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,wo=!0,t.reset(),wo=!1),e=e.sibling}}function kr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Mb(t,e),t=t.sibling;else pb(t,!1)}function Mb(e,t){var n=e.alternate;if(n===null)um(e,!1);else switch(e.tag){case 3:if(pm=Yi=!1,zv(),kr(t,e),!Yi&&!hf){if(e=Ki,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var a=e[i+1];Kb(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),pm=!0}Ki=null;break;case 5:kr(t,e);break;case 4:i=Yi,Yi=!1,kr(t,e),Yi&&(hf=!0),Yi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?um(e,!1):kr(t,e));break;case 30:i=Yi,a=zv(),Yi=!1,kr(t,e),Yi&&(e.flags|=4);var s=e.memoizedProps,r=e.stateNode;t=Ea(s,r),r=Ea(n.memoizedProps,r);var o=Na(s.default,s.update);o==="none"?t=!1:(s=n.memoizedState,n.memoizedState=null,n=e.child,Gn=0,t=y0(e,n,t,r,o,s,!0),Gn!==(s===null?0:s.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(bo(e,e.memoizedProps.onUpdate),Ki=a):a!==null&&(a.push.apply(a,Ki),Ki=a),Yi=(e.flags&32)!==0?!0:i;break;default:kr(t,e)}}function Zi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)mb(e,t.alternate,t),t=t.sibling}function ja(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:bs(4,n,n.return),ja(n,i);break;case 1:xn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&lb(n,n.return,a),ja(n,i);break;case 27:(i&2)!==0&&s1(n.stateNode,n.type,n.memoizedProps);case 5:xn(n,n.return),n.tag!==5&&n.tag!==27||Hl(n),ja(n,i);break;case 6:Hl(n);break;case 26:xn(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||Te||a.parentNode.removeChild(a),ja(n,i);break;case 22:n.memoizedState===null&&ja(n,i);break;case 30:xn(n,n.return),ja(n,i);break;case 7:xn(n,n.return);default:ja(n,i)}e=e.sibling}}function Oi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags,o=(n&1)!==0;switch(s.tag){case 0:case 11:case 15:Oi(a,s,n),mc(4,s);break;case 1:if(Oi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(f){we(i,i.return,f)}if(i=s,a=i.updateQueue,a!==null){var l=i.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)gy(c[a],l)}catch(f){we(i,i.return,f)}}o&&r&64&&ob(s),Ji(s,s.return);break;case 27:(n&2)!==0&&ub(s);case 5:s.tag!==5&&s.tag!==27||Ov(s),Oi(a,s,n),o&&i===null&&r&4&&lm(s),Ji(s,s.return);break;case 6:Ov(s);break;case 26:l=s.stateNode,s.memoizedState!==null||l===null||cn||Lm(ic(l.ownerDocument),s.type,l),Oi(a,s,n),o&&i===null&&r&4&&lm(s),Ji(s,s.return);break;case 12:Oi(a,s,n);break;case 31:Oi(a,s,n),o&&r&4&&_b(a,s);break;case 13:Oi(a,s,n),o&&r&4&&yb(a,s);break;case 22:s.memoizedState===null&&Oi(a,s,n),Ji(s,s.return);break;case 30:Oi(a,s,n),Ji(s,s.return);break;case 7:Ji(s,s.return);default:Oi(a,s,n)}t=t.sibling}}function b0(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&dc(n))}function S0(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&dc(e))}function yi(e,t,n,i){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)Tb(e,t,n,i),t=t.sibling;else a&&db(t)}function Tb(e,t,n,i){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&zu(t);var s=t.flags;switch(t.tag){case 0:case 11:case 15:yi(e,t,n,i),s&2048&&mc(9,t);break;case 1:yi(e,t,n,i);break;case 3:yi(e,t,n,i),a&&pm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),s&2048&&(s=null,t.alternate!==null&&(s=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==s&&(t.refCount++,s!=null&&dc(s)));break;case 12:if(s&2048){yi(e,t,n,i),s=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(c){we(t,t.return,c)}}else yi(e,t,n,i);break;case 31:yi(e,t,n,i);break;case 13:yi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&zu(o),r._visibility&2?yi(e,t,n,i):Gl(e,t)):(a&&o!==null&&o.memoizedState!==null&&zu(t),r._visibility&2?yi(e,t,n,i):(r._visibility|=2,Wr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),s&2048&&b0(o,t);break;case 24:yi(e,t,n,i),s&2048&&S0(t.alternate,t);break;case 30:a&&(s=t.alternate,s!==null&&(ia(s.child,!0),ia(t.child,!0))),yi(e,t,n,i);break;default:yi(e,t,n,i)}}function Wr(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Wr(s,r,o,l,a),mc(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Wr(s,r,o,l,a):Gl(s,r):(f._visibility|=2,Wr(s,r,o,l,a)),a&&c&2048&&b0(r.alternate,r);break;case 24:Wr(s,r,o,l,a),a&&c&2048&&S0(r.alternate,r);break;default:Wr(s,r,o,l,a)}t=t.sibling}}function Gl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Gl(n,i),a&2048&&b0(i.alternate,i);break;case 24:Gl(n,i),a&2048&&S0(i.alternate,i);break;default:Gl(n,i)}t=t.sibling}}var Ws=8192;function Gs(e,t,n){if(e.subtreeFlags&Ws)for(e=e.child;e!==null;)Eb(e,t,n),e=e.sibling}function Eb(e,t,n){switch(e.tag){case 26:Gs(e,t,n),e.flags&Ws&&(e.memoizedState!==null?qE(n,Pi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&u_(n,e)));break;case 5:Gs(e,t,n),e.flags&Ws&&(e=e.stateNode,(t&335544128)===t&&u_(n,e));break;case 3:case 4:var i=Pi;Pi=ic(e.stateNode.containerInfo),Gs(e,t,n),Pi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ws,Ws=16777216,Gs(e,t,n),Ws=i):Gs(e,t,n));break;case 30:if((e.flags&Ws)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var a=e.stateNode;a.paired=null,ai===null&&(ai=new Map),ai.set(i,a)}Gs(e,t,n);break;default:Gs(e,t,n)}}function Ab(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];un=i,Cb(i,e)}Ab(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wb(e),e=e.sibling}function wb(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&bs(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bu(e)):Tl(e);break;default:Tl(e)}}function Bu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];un=i,Cb(i,e)}Ab(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:bs(8,t,t.return),Bu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Bu(t));break;default:Bu(t)}e=e.sibling}}function Cb(e,t){for(;un!==null;){var n=un;switch(n.tag){case 0:case 11:case 15:bs(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:dc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,un=i;else t:for(n=e;un!==null;){i=un;var a=i.sibling,s=i.return;if(xb(i),i===n){un=null;break t}if(a!==null){a.return=s,un=a;break t}un=s}}}var kT={getCacheForType:function(e){var t=_n(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _n(Je).controller.signal}},XT=typeof WeakMap=="function"?WeakMap:Map,be=0,De=null,se=null,oe=0,Ee=0,ei=null,ss=!1,Lo=!1,M0=!1,Ra=0,Xe=0,Ss=0,js=0,df=0,si=0,yo=0,kl=null,Hn=null,xm=!1,Of=0,Rb=0,pf=1/0,mf=null,ps=null,Ve=0,Bi=null,rr=null,na=0,vm=0,_m=null,Db=null,ho=null,po=null,mo=null,Xl=0,Fu=null;function ci(){return(be&2)!==0&&oe!==0?oe&-oe:Vt.T!==null?E0():I_()}function Nb(){if(si===0)if((oe&536870912)===0||ee){var e=ou;ou<<=1,(ou&3932160)===0&&(ou=262144),si=e}else si=536870912;return e=Mn.current,e!==null&&(e.flags|=32),si}function bo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=jb(Ea(e.memoizedProps,n))),po===null&&(po=[]),po.push(t.bind(null,i))}}function Xn(e,t,n){(e===De&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(So(e,0),rs(e,oe,si,!1)),uc(e,n),((be&2)===0||e!==De)&&(e===De&&((be&2)===0&&(js|=n),Xe===4&&rs(e,oe,si,!1)),sa(e))}function Ub(e,t,n){if((be&6)!==0)throw Error(J(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||cc(e,t),a=i?YT(e,t):xp(e,t,!0),s=i;do{if(a===0){Lo&&!i&&rs(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!WT(n)){a=xp(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=kl;var l=o.current.memoizedState.isDehydrated;if(l&&(So(o,r).flags|=256),r=xp(o,r,!1),r!==2&&r!==6){if(M0&&!l){o.errorRecoveryDisabledLanes|=s,js|=s,a=4;break t}s=Hn,Hn=a,s!==null&&(Hn===null?Hn=s:Hn.push.apply(Hn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){So(e,0),rs(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(J(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:rs(i,t,si,!ss);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(J(329))}if((t&62914560)===t&&(a=Of+300-ri(),10<a)){if(rs(i,t,si,!ss),bf(i,0,!0)!==0)break t;na=t,i.timeoutHandle=w0(Fv.bind(null,i,n,Hn,mf,xm,t,si,js,yo,ss,s,"Throttled",-0,0),a);break t}Fv(i,n,Hn,mf,xm,t,si,js,yo,ss,s,null,-0,0)}}break}while(!0);sa(e)}function Fv(e,t,n,i,a,s,r,o,l,c,f,d,h,p){e.timeoutHandle=-1;var v=t.subtreeFlags,y=(s&335544064)===s;if(d=null,(y||v&8192||(v&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},ai=null,Eb(t,s,d),y&&(v=d,y=e.containerInfo,y=(y.nodeType===9?y:y.ownerDocument).__reactViewTransition,y!=null&&(v.count++,v.waitingForViewTransition=!0,v=ac.bind(v),y.finished.then(v,v))),v=(s&62914560)===s?Of-ri():(s&4194048)===s?Rb-ri():0,v=YE(d,v),v!==null)){na=s,e.cancelPendingCommit=v(Hv.bind(null,e,t,s,n,i,a,r,o,l,c,f,d,null,h,p)),rs(e,s,r,!c);return}Hv(e,t,s,n,i,a,r,o,l,c,f,d)}function WT(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!ui(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rs(e,t,n,i){t=R_(e,t),t&=~df,t&=~js,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-li(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&N_(e,n,t)}function Pf(){return(be&6)===0?(gc(0,!1),!1):!0}function T0(){if(se!==null){if(Ee===0)var e=se.return;else e=se,ba=fr=null,o0(e),co=null,Ql=0,e=se;for(;e!==null;)rb(e.alternate,e),e=e.return;se=null}}function So(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,dE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),na=0,T0(),De=e,se=n=Sa(e.current,null),oe=t,Ee=0,ei=null,ss=!1,Lo=cc(e,t),M0=!1,yo=si=df=js=Ss=Xe=0,Hn=kl=null,xm=!1,Ra=R_(e,t),Af(),n}function Lb(e,t){Kt=null,Vt.H=of,t===No||t===Rf?(t=hv(),Ee=3):t===$m?(t=hv(),Ee=4):Ee=t===m0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ei=t,se===null&&(Xe=1,lf(e,Ei(t,e.current)))}function Ib(){var e=Mn.current;return e===null?!0:(oe&4194048)===oe?An===null:(oe&62914560)===oe||(oe&536870912)!==0?e===An:!1}function Ob(){var e=Vt.H;return Vt.H=of,e===null?of:e}function Pb(){var e=Vt.A;return Vt.A=kT,e}function gf(){Xe=4,ss||(oe&4194048)!==oe&&Mn.current!==null||(Lo=!0),(Ss&134217727)===0&&(js&134217727)===0||De===null||rs(De,oe,si,!1)}function xp(e,t,n){var i=be;be|=2;var a=Ob(),s=Pb();(De!==e||oe!==t)&&(mf=null,So(e,t)),t=!1;var r=Xe;t:do try{if(Ee!==0&&se!==null){var o=se,l=ei;switch(Ee){case 8:T0(),r=6;break t;case 3:case 2:case 9:case 6:Mn.current===null&&(t=!0);var c=Ee;if(Ee=0,ei=null,ao(e,o,l,c),n&&Lo){r=0;break t}break;default:c=Ee,Ee=0,ei=null,ao(e,o,l,c)}}qT(),r=Xe;break}catch(f){Lb(e,f)}while(!0);return t&&e.shellSuspendCounter++,ba=fr=null,be=i,Vt.H=a,Vt.A=s,se===null&&(De=null,oe=0,Af()),r}function qT(){for(;se!==null;)zb(se)}function YT(e,t){var n=be;be|=2;var i=Ob(),a=Pb();De!==e||oe!==t?(mf=null,pf=ri()+500,So(e,t)):Lo=cc(e,t);t:do try{if(Ee!==0&&se!==null){t=se;var s=ei;e:switch(Ee){case 1:Ee=0,ei=null,ao(e,t,s,1);break;case 2:case 9:if(fv(s)){Ee=0,ei=null,Vv(t);break}t=function(){Ee!==2&&Ee!==9||De!==e||(Ee=7),sa(e)},s.then(t,t);break t;case 3:Ee=7;break t;case 4:Ee=5;break t;case 7:fv(s)?(Ee=0,ei=null,Vv(t)):(Ee=0,ei=null,ao(e,t,s,7));break;case 5:var r=null;switch(se.tag){case 26:r=se.memoizedState;case 5:case 27:var o=se;if(r?l1(r):o.stateNode.complete){Ee=0,ei=null;var l=o.sibling;if(l!==null)se=l;else{var c=o.return;c!==null?(se=c,zf(c)):se=null}break e}}Ee=0,ei=null,ao(e,t,s,5);break;case 6:Ee=0,ei=null,ao(e,t,s,6);break;case 8:T0(),Xe=6;break t;default:throw Error(J(462))}}ZT();break}catch(f){Lb(e,f)}while(!0);return ba=fr=null,Vt.H=i,Vt.A=a,be=n,se!==null?0:(De=null,oe=0,Af(),Xe)}function ZT(){for(;se!==null&&!f3();)zb(se)}function zb(e){var t=sb(e.alternate,e,Ra);e.memoizedProps=e.pendingProps,t===null?zf(e):se=t}function Vv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Cv(n,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=Cv(n,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:o0(t);var i=t;i===hn&&(ee?($u(i),i.tag===5&&i.stateNode!=null&&(Ie=i.stateNode)):($u(i),ee=!0));default:rb(n,t),t=se=oy(t,Ra),t=sb(n,t,Ra)}e.memoizedProps=e.pendingProps,t===null?zf(e):se=t}function ao(e,t,n,i){ba=fr=null,o0(t),co=null,Ql=0;var a=t.return;try{if(OT(e,a,t,n,oe)){Xe=1,lf(e,Ei(n,e.current)),se=null;return}}catch(s){if(a!==null)throw se=a,s;Xe=1,lf(e,Ei(n,e.current)),se=null;return}t.flags&32768?(ee||i===1?e=!0:Lo||(oe&536870912)!==0?e=!1:(ss=e=!0,(i===2||i===9||i===3||i===6)&&(i=Mn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Bb(t,e)):zf(t)}function zf(e){var t=e;do{if((t.flags&32768)!==0){Bb(t,ss);return}e=t.return;var n=FT(t.alternate,t,Ra);if(n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Xe===0&&(Xe=5)}function Bb(e,t){do{var n=VT(e.alternate,e);if(n!==null){n.flags&=32767,se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=n}while(e!==null);Xe=6,se=null}function Hv(e,t,n,i,a,s,r,o,l,c,f,d){e.cancelPendingCommit=null;do Bf();while(Ve!==0);if((be&6)!==0)throw Error(J(327));if(t!==null){if(t===e.current)throw Error(J(177));e===De&&(se=De=null,oe=0),rr=t,Bi=e,na=n,_m=a,Db=i,JT(e,t,n,r,o,l,d)}}function JT(e,t,n,i,a,s,r){var o=t.lanes|t.childLanes;if(vm=o,o|=Ym,b3(e,n,o,i,a,s),po=null,(n&335544064)===n?(mo=MT(e),i=10262):(mo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,eE(Zu,function(){return Mm(),null})):(e.callbackNode=null,e.callbackPriority=0),ff=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Vt.T,Vt.T=null,a=Se.p,Se.p=2,s=be,be|=4;try{HT(e,t,n)}finally{be=s,Se.p=a,Vt.T=i}}Ve=1,ff?ho=_E(r,e.containerInfo,mo,ym,bm,QT,Sm,Mm,KT,null,null):(ym(),bm(),Sm())}function KT(e){if(Ve!==0){var t=Bi.onRecoverableError;t(e,{componentStack:null})}}function QT(){Ve===3&&(Ve=0,Mb(rr,Bi),Ve=4)}function ym(){if(Ve===1){Ve=0;var e=Bi,t=rr,n=na,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Vt.T,Vt.T=null;var a=Se.p;Se.p=2;var s=be;be|=4;try{Nl=hf=!1,bb(t,e,n),n=wm;var r=$_(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&j_(o.ownerDocument.documentElement,o)){if(l!==null&&qm(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),v=o.textContent.length,y=Math.min(l.start,v),m=l.end===void 0?y:Math.min(l.end,v);!p.extend&&y>m&&(r=m,m=y,y=r);var u=iv(o,y),g=iv(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var x=d.createRange();x.setStart(u.node,u.offset),p.removeAllRanges(),y>m?(p.addRange(x),p.extend(g.node,g.offset)):(x.setEnd(g.node,g.offset),p.addRange(x))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var b=d[o];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}wo=!!Am,wm=Am=null}finally{be=s,Se.p=a,Vt.T=i}}e.current=t,Ve=2}}function bm(){if(Ve===2){Ve=0;var e=Bi,t=rr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Vt.T,Vt.T=null;var i=Se.p;Se.p=2;var a=be;be|=4;try{mb(e,t.alternate,t)}finally{be=a,Se.p=i,Vt.T=n}}Ve=3}}function Sm(){if(Ve===4||Ve===3){Ve=0;var e=ho;ho=null,h3();var t=Bi,n=rr,i=na,a=Db,s=(i&335544064)===i?10262:10256;if((n.subtreeFlags&s)!==0||(n.flags&s)!==0?Ve=5:(Ve=0,rr=Bi=null,Fb(t,t.pendingLanes)),s=t.pendingLanes,s===0&&(ps=null),Vm(i),n=n.stateNode,oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(lc,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=Vt.T,s=Se.p,Se.p=2,Vt.T=null;try{for(var r=t.onRecoverableError,o=0;o<a.length;o++){var l=a[o];r(l.value,{componentStack:l.stack})}}finally{Vt.T=n,Se.p=s}}if(a=po,r=mo,mo=null,a!==null&&(po=null,r===null&&(r=[]),e!==null))for(l=0;l<a.length;l++)n=(0,a[l])(r),n!==void 0&&e.finished.finally(n);(na&3)!==0&&Bf(),sa(t),s=t.pendingLanes,(i&261930)!==0&&(s&42)!==0?t===Fu?Xl++:(Xl=0,Fu=t):(Xl=0,Fu=null),gc(0,!1)}}function Fb(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,dc(t)))}function Bf(){return ho!==null&&(ho.skipTransition(),ho=null),ym(),bm(),Sm(),Mm()}function Mm(){if(Ve!==5)return!1;var e=Bi,t=vm;vm=0;var n=Vm(na),i=Vt.T,a=Se.p;try{Se.p=32>n?32:n,Vt.T=null,n=_m,_m=null;var s=Bi,r=na;if(Ve=0,rr=Bi=null,na=0,(be&6)!==0)throw Error(J(331));var o=be;if(be|=4,wb(s.current),Tb(s,s.current,r,n),be=o,gc(0,!1),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(lc,s)}catch{}return!0}finally{Se.p=a,Vt.T=i,Fb(e,t)}}function Gv(e,t,n){t=Ei(n,t),t=nm(e.stateNode,t,2),e=fs(e,t,2),e!==null&&(uc(e,2),sa(e))}function we(e,t,n){if(e.tag===3)Gv(e,e,n);else for(;t!==null;){if(t.tag===3){Gv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ps===null||!ps.has(i))){e=Ei(n,e),n=tb(2),i=fs(t,n,2),i!==null&&(eb(n,i,t,e),uc(i,2),sa(i));break}}t=t.return}}function vp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new XT;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(M0=!0,a.add(n),e=jT.bind(null,e,t,n),t.then(e,e))}function jT(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(oe&n)===n&&((Xe===4||Xe===3&&(oe&62914560)===oe&&300>ri()-Of)&&(be&2)===0?So(e,0):df|=n,yo===oe&&(yo=0)),sa(e)}function Vb(e,t){t===0&&(t=D_()),e=ur(e,t),e!==null&&(uc(e,t),sa(e))}function $T(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vb(e,n)}function tE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),Vb(e,n)}function eE(e,t){return Bm(e,t)}var Mo=null,qr=null,Tm=!1,xf=!1,_p=!1,os=0;function sa(e){e!==qr&&e.next===null&&(qr===null?Mo=qr=e:qr=qr.next=e),xf=!0,Tm||(Tm=!0,iE())}function gc(e,t){if(!_p&&xf){_p=!0;do for(var n=!1,i=Mo;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-li(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,kv(i,s))}else s=oe,s=bf(i,i===De?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||cc(i,s)||(n=!0,kv(i,s));i=i.next}while(n);_p=!1}}function nE(){Hb()}function Hb(){xf=Tm=!1;var e=0;os!==0&&hE()&&(e=os);for(var t=ri(),n=null,i=Mo;i!==null;){var a=i.next,s=Gb(i,t);s===0?(i.next=null,n===null?Mo=a:n.next=a,a===null&&(qr=n)):(n=i,(e!==0||(s&3)!==0)&&(xf=!0)),i=a}Ve!==0&&Ve!==5||gc(e,!1),os!==0&&(os=0)}function Gb(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-li(s),o=1<<r,l=a[r];l===-1?((o&n)===0||(o&i)!==0)&&(a[r]=y3(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=De,n=oe,n=bf(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Qd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||cc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Qd(i),Vm(n)){case 2:case 8:n=w_;break;case 32:n=Zu;break;case 268435456:n=C_;break;default:n=Zu}return i=kb.bind(null,e),n=Bm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Qd(i),e.callbackPriority=2,e.callbackNode=null,2}function kb(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bf()&&e.callbackNode!==n)return null;var i=oe;return i=bf(e,e===De?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Ub(e,i,t),Gb(e,ri()),e.callbackNode!=null&&e.callbackNode===n?kb.bind(null,e):null)}function kv(e,t){if(Bf())return null;Ub(e,t,!0)}function iE(){pE(function(){(be&6)!==0?Bm(A_,nE):Hb()})}function E0(){if(os===0){var e=nr;e===0&&(e=ru,ru<<=1,(ru&261888)===0&&(ru=256)),os=e}return os}function Xv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wu(e)}function aE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=Xv((a[qn]||null).action),r=i.submitter;r&&(t=(t=r[qn]||null)?Xv(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new Mf("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(os!==0){var l=new FormData(a,r);tm(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=new FormData(a,r),tm(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(bu=0;bu<kp.length;bu++)Su=kp[bu],Wv=Su.toLowerCase(),qv=Su[0].toUpperCase()+Su.slice(1),Fi(Wv,"on"+qv);var Su,Wv,qv,bu;Fi(ey,"onAnimationEnd");Fi(ny,"onAnimationIteration");Fi(iy,"onAnimationStart");Fi("dblclick","onDoubleClick");Fi("focusin","onFocus");Fi("focusout","onBlur");Fi(mT,"onTransitionRun");Fi(gT,"onTransitionStart");Fi(xT,"onTransitionCancel");Fi(ay,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tc));function Xb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){Ku(f)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){Ku(f)}a.currentTarget=null,s=l}}}}function ae(e,t){var n=t[Vx];n===void 0&&(n=t[Vx]=new Set);var i=e+"__bubble";n.has(i)||(Wb(t,e,2,!1),n.add(i))}function yp(e,t,n){var i=0;t&&(i|=4),Wb(n,e,i,t)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function A0(e){if(!e[Mu]){e[Mu]=!0,P_.forEach(function(n){n!=="selectionchange"&&(sE.has(n)||yp(n,!1,e),yp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mu]||(t[Mu]=!0,yp("selectionchange",!1,t))}}function Wb(e,t,n,i){switch(m1(t)){case 2:var a=QE;break;case 8:a=jE;break;default:a=L0}n=a.bind(null,t,n,e),a=void 0,!Fp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function bp(e,t,n,i,a){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=qs(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}X_(function(){var c=s,f=Gm(n),d=[];t:{var h=sy.get(e);if(h!==void 0){var p=Mf,v=e;switch(e){case"keypress":if(Ru(n)===0)break t;case"keydown":case"keyup":p=W3;break;case"focusin":v="focus",p=ip;break;case"focusout":v="blur",p=ip;break;case"beforeblur":case"afterblur":p=ip;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=L3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=K3;break;case ey:case ny:case iy:p=P3;break;case ay:p=j3;break;case"scroll":case"scrollend":p=N3;break;case"wheel":p=tT;break;case"copy":case"cut":case"paste":p=B3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Kx;break;case"submit":p=Z3;break;case"toggle":case"beforetoggle":p=nT}var y=(t&4)!==0,m=!y&&(e==="scroll"||e==="scrollend"),u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,x;g!==null;){var b=g;if(x=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||x===null||u===null||(b=ql(g,u),b!=null&&y.push(ec(g,b,x))),m)break;g=g.return}0<y.length&&(h=new p(h,v,null,n,f),d.push({event:h,listeners:y}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==Bp&&(v=n.relatedTarget||n.fromElement)&&(qs(v)||v[Ro]))break t;(h||p)&&(v=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=c,p=p?qs(p):null,p!==null&&(m=oc(p),y=p.tag,p!==m||y!==5&&y!==27&&y!==6)&&(p=null)):(h=null,p=c),h!==p&&(y=Zx,b="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(y=Kx,b="onPointerLeave",u="onPointerEnter",g="pointer"),m=h==null?v:Rl(h),x=p==null?v:Rl(p),v=new y(b,g+"leave",h,n,f),v.target=m,v.relatedTarget=x,b=null,qs(f)===c&&(y=new y(u,g+"enter",p,n,f),y.target=x,y.relatedTarget=m,b=y),m=b,y=h&&p?Ap(h,p,rE):null,h!==null&&Yv(d,v,h,y,!1),p!==null&&m!==null&&Yv(d,m,p,y,!0)))}t:{if(h=c?Rl(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=tv;else if($x(h))if(K_)C=hT;else{C=uT;var T=cT}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&Hm(c.elementType)&&(C=tv):C=fT;if(C&&(C=C(e,c))){J_(d,C,n,f);break t}T&&T(e,h,c)}switch(T=c?Rl(c):window,e){case"focusin":($x(T)||T.contentEditable==="true")&&(jr=T,Hp=c,Il=null);break;case"focusout":Il=Hp=jr=null;break;case"mousedown":Gp=!0;break;case"contextmenu":case"mouseup":case"dragend":Gp=!1,av(d,n,f);break;case"selectionchange":if(pT)break;case"keydown":case"keyup":av(d,n,f)}var A;if(Wm)t:{switch(e){case"compositionstart":var N="onCompositionStart";break t;case"compositionend":N="onCompositionEnd";break t;case"compositionupdate":N="onCompositionUpdate";break t}N=void 0}else Qr?Y_(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(q_&&n.locale!=="ko"&&(Qr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Qr&&(A=W_()):(is=f,km="value"in is?is.value:is.textContent,Qr=!0)),T=vf(c,N),0<T.length&&(N=new Jx(N,e,null,n,f),d.push({event:N,listeners:T}),A?N.data=A:(A=Z_(n),A!==null&&(N.data=A)))),(A=aT?sT(e,n):rT(e,n))&&(N=vf(c,"onBeforeInput"),0<N.length&&(T=new Jx("onBeforeInput","beforeinput",null,n,f),d.push({event:T,listeners:N}),T.data=A)),aE(d,e,c,n,f)}Xb(d,t)})}function ec(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vf(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=ql(e,n),a!=null&&i.unshift(ec(e,a,s)),a=ql(e,t),a!=null&&i.push(ec(e,a,s))),e.tag===3)return i;e=e.return}return[]}function rE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yv(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=ql(n,s),c!=null&&r.unshift(ec(n,c,l))):a||(c=ql(n,s),c!=null&&r.push(ec(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var oE=/\r\n?/g,lE=/\u0000|\uFFFD/g;function Zv(e){return(typeof e=="string"?e:""+e).replace(oE,`
`).replace(lE,"")}function qb(e,t){return t=Zv(t),Zv(e)===t}function Ae(e,t,n,i,a,s){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||vo(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&vo(e,""+i);else return;break;case"className":cu(e,"class",i);break;case"tabIndex":cu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":cu(e,n,i);break;case"style":k_(e,i,s);return;case"data":if(t!=="object"){cu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=wu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",a.name,a,null),Ae(e,t,"formEncType",a.formEncType,a,null),Ae(e,t,"formMethod",a.formMethod,a,null),Ae(e,t,"formTarget",a.formTarget,a,null)):(Ae(e,t,"encType",a.encType,a,null),Ae(e,t,"method",a.method,a,null),Ae(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=wu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ji);return;case"onScroll":i!=null&&ae("scroll",e);return;case"onScrollEnd":i!=null&&ae("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=wu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ae("beforetoggle",e),ae("toggle",e),Au(e,"popover",i);break;case"xlinkActuate":va(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":va(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":va(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":va(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":va(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":va(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":va(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":va(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":va(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Au(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=R3.get(n)||n,Au(e,n,i);else return}_e=!0}function Em(e,t,n,i,a,s){switch(n){case"style":k_(e,i,s);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")vo(e,i);else if(typeof i=="number"||typeof i=="bigint")vo(e,""+i);else return;break;case"onScroll":i!=null&&ae("scroll",e);return;case"onScrollEnd":i!=null&&ae("scrollend",e);return;case"onClick":i!=null&&(e.onclick=ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!z_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),s=n.slice(2,a?n.length-7:void 0),t=e[qn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(s,t,a),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(s,i,a);break t}_e=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Au(e,n,i)}return}_e=!0}function Sn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:Ae(e,t,s,r,n,null)}}a&&Ae(e,t,"srcSet",n.srcSet,n,null),i&&Ae(e,t,"src",n.src,n,null);return;case"input":ae("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":a=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":s=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(J(137,t));break;default:Ae(e,t,i,f,n,null)}}V_(e,s,o,l,c,r,a,!1);return;case"select":ae("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Ae(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?ro(e,!!i,t,!1):n!=null&&ro(e,!!i,n,!0);return;case"textarea":ae("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:Ae(e,t,r,o,n,null)}G_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ae(e,t,l,i,n,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(i=0;i<tc.length;i++)ae(tc[i],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:Ae(e,t,c,i,n,null)}return;default:if(Hm(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Em(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Ae(e,t,o,i,n,null))}var cE={};function uE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,f=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||Ae(e,t,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":p!==d&&(_e=!0),s=p;break;case"name":p!==d&&(_e=!0),a=p;break;case"checked":p!==d&&(_e=!0),c=p;break;case"defaultChecked":p!==d&&(_e=!0),f=p;break;case"value":p!==d&&(_e=!0),r=p;break;case"defaultValue":p!==d&&(_e=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(J(137,t));break;default:p!==d&&Ae(e,t,h,p,i,d)}}zp(e,r,o,l,c,f,s,a);return;case"select":p=r=o=h=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||Ae(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":s!==l&&(_e=!0),h=s;break;case"defaultValue":s!==l&&(_e=!0),o=s;break;case"multiple":s!==l&&(_e=!0),r=s;default:s!==l&&Ae(e,t,a,s,i,l)}t=o,n=r,i=p,h!=null?ro(e,!!n,h,!1):!!i!=!!n&&(t!=null?ro(e,!!n,t,!0):ro(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ae(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":a!==s&&(_e=!0),h=a;break;case"defaultValue":a!==s&&(_e=!0),p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(J(91));break;default:a!==s&&Ae(e,t,r,a,i,s)}H_(e,h,p);return;case"option":for(var v in n)if(h=n[v],n.hasOwnProperty(v)&&h!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:Ae(e,t,v,null,i,h)}for(l in i)if(h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":h!==p&&(_e=!0),e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:Ae(e,t,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)h=n[y],n.hasOwnProperty(y)&&h!=null&&!i.hasOwnProperty(y)&&Ae(e,t,y,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(J(137,t));break;default:Ae(e,t,c,h,i,p)}return;default:if(Hm(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Em(e,t,m,void 0,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h===void 0&&p===void 0||Em(e,t,f,h,i,p);return}}for(var u in n)h=n[u],n.hasOwnProperty(u)&&h!=null&&!i.hasOwnProperty(u)&&Ae(e,t,u,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||Ae(e,t,d,h,i,p)}function Jv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&Jv(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,d=l.initiatorType;f&&Jv(d)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Am=null,wm=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function Kv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yb(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zb(e,t,n,i){return n=nc(n).createElement(e),n[vn]=i,n[qn]=t,Sn(n,e,t),fn(n),n}function Cm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sp=null;function hE(){var e=window.event;return e&&e.type==="popstate"?e===Sp?!1:(Sp=e,!0):(Sp=null,!1)}var w0=typeof setTimeout=="function"?setTimeout:void 0,dE=typeof clearTimeout=="function"?clearTimeout:void 0,Qv=typeof Promise=="function"?Promise:void 0,jv=typeof requestAnimationFrame=="function"?requestAnimationFrame:w0,pE=typeof queueMicrotask=="function"?queueMicrotask:typeof Qv<"u"?function(e){return Qv.resolve(null).then(e).catch(mE)}:w0;function mE(e){setTimeout(function(){throw e})}function Ts(e){return e==="head"}function $v(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Co(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Tp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Tp(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[fc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Tp(e.ownerDocument.body);n=a}while(n);Co(t)}function t_(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Jb(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var a=i=0;a<t.length;a++){var s=t[a];0<s.width&&0<s.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Kb(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Qb(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Rm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return Qb(t,n,e)}function gE(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Qb(t,n,e)}function xE(e){return e.documentElement.clientHeight}function vE(e){this.addEventListener("load",e),this.addEventListener("error",e)}function _E(e,t,n,i,a,s,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var h=c.defaultView,p=h.navigation&&h.navigation.transition,v=c.fonts.status;i();var y=[];if(v==="loaded"&&(xE(c),c.fonts.status==="loading"&&y.push(c.fonts.ready)),v=y.length,e!==null)for(var m=e.suspenseyImages,u=0,g=0;g<m.length;g++){var x=m[g];if(!x.complete){var b=x.getBoundingClientRect();if(0<b.bottom&&0<b.right&&b.top<h.innerHeight&&b.left<h.innerWidth){if(u+=c1(x),u>Gu){y.length=v;break}x=new Promise(vE.bind(x)),y.push(x)}}}if(0<y.length)return h=Promise.race([Promise.all(y),new Promise(function(C){return setTimeout(C,500)})]).then(a,a),(p?Promise.allSettled([p.finished,h]):h).then(s,s);if(a(),p)return p.finished.then(s,s);s()},types:n});c.__reactViewTransition=f;var d=[];return f.ready.then(function(){for(var h=c.documentElement.getAnimations({subtree:!0}),p=0;p<h.length;p++){var v=h[p],y=v.effect,m=y.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(v),v=y.getKeyframes();for(var u=m=void 0,g=!0,x=0;x<v.length;x++){var b=v[x],C=b.width;if(m===void 0)m=C;else if(m!==C){g=!1;break}if(C=b.height,u===void 0)u=C;else if(u!==C){g=!1;break}delete b.width,delete b.height,b.transform==="none"&&delete b.transform}g&&m!==void 0&&u!==void 0&&(y.setKeyframes(v),g=getComputedStyle(y.target,y.pseudoElement),g.width!==m||g.height!==u)&&(g=v[0],g.width=m,g.height=u,g=v[v.length-1],g.width=m,g.height=u,y.setKeyframes(v))}}r()},function(h){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{if(typeof h=="object"&&h!==null)switch(h.name){case"InvalidStateError":(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null)}h!==null&&l(h)}finally{i(),a(),r()}}),f.finished.finally(function(){for(var h=0;h<d.length;h++)d[h].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),a(),r(),null}}function Ys(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Ys.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Ne({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Ys.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var s=n[a].effect;s!==null&&s.target===e&&s.pseudoElement===t&&i.push(n[a])}return i};Ys.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function jb(e){return{name:e,group:new Ys("group",e),imagePair:new Ys("image-pair",e),old:new Ys("old",e),new:new Ys("new",e)}}function fi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}fi.prototype.addEventListener=function(e,t,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if($b(s,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(a=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=To(n),s.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),Wn(this._fragmentFiber.child,!1,yE,e,o,i)}this._eventListeners=s}};function yE(e,t,n,i){return an(e).addEventListener(t,n,i),!1}fi.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=$b(i,e,t,n),t!==-1)){var a=i[t];n=a.attachedListener;var s=a.cleanup;a=To(a.optionsOrUseCapture),Wn(this._fragmentFiber.child,!1,bE,e,n,a),i.splice(t,1),s!==null&&s()}};function bE(e,t,n,i){return an(e).removeEventListener(t,n,i),!1}function To(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function e_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function $b(e,t,n,i){if(e.length===0)return-1;i=e_(i);for(var a=0;a<e.length;a++){var s=e[a];if(s.type===t&&s.listener===n&&e_(s.optionsOrUseCapture)===i)return a}return-1}fi.prototype.dispatchEvent=function(e){var t=or(this._fragmentFiber);if(t===null)return!0;t=an(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var s=n[a];i.addEventListener(s.type,s.attachedListener,To(s.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(a=0;a<n.length;a++)s=n[a],i.removeEventListener(s.type,s.attachedListener,To(s.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};fi.prototype.focus=function(e){Wn(this._fragmentFiber.child,!0,t1,e,void 0,void 0)};function t1(e,t){return e.tag===6?!1:(e=an(e),LE(e,t))}fi.prototype.focusLast=function(e){var t=[];Wn(this._fragmentFiber.child,!0,C0,t,void 0,void 0);for(var n=t.length-1;0<=n&&!t1(t[n],e);n--);};function C0(e,t){return t.push(e),!1}fi.prototype.blur=function(){var e=or(this._fragmentFiber);e!==null&&(e=an(e),e=nc(e).activeElement,e!==null&&Wn(this._fragmentFiber.child,!1,SE,e,void 0,void 0))};function SE(e,t){return e.tag===6?!1:(e=an(e),e===t||e.contains(t)?(t.blur(),!0):!1)}fi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Wn(this._fragmentFiber.child,!1,ME,e,void 0,void 0)};function ME(e,t){return e.tag===6||(e=an(e),t.observe(e)),!1}fi.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Wn(this._fragmentFiber.child,!1,TE,e,void 0,void 0);for(var n=t=0;n<zi.length;n++){var i=zi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):zi[t++]=i}zi.length=t}};function TE(e,t){return e.tag===6||(e=an(e),t.unobserve(e)),!1}var zi=[],Mp=!1;function EE(e,t,n){zi.push({fragmentInstance:e,observer:t,instance:n}),Mp||(Mp=!0,IE(function(){Mp=!1;var i=zi;zi=[];for(var a=0;a<i.length;a++){var s=i[a];s.observer.unobserve(s.instance)}}))}fi.prototype.getClientRects=function(){var e=[];return Wn(this._fragmentFiber.child,!1,AE,e,void 0,void 0),e};function AE(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=an(e),t.push.apply(t,e.getClientRects());return!1}fi.prototype.getRootNode=function(e){var t=or(this._fragmentFiber);return t===null?this:an(t).getRootNode(e)};fi.prototype.compareDocumentPosition=function(e){var t=or(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Wn(this._fragmentFiber.child,!1,C0,n,void 0,void 0);var i=an(t);if(n.length===0){if(n=i,Ix(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=i=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=S_(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=an(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=an(n[0]),a=an(n[n.length-1]);var s=Ix(this._fragmentFiber)?t.parentElement:i;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=s.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=a.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&s&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||s&&a===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!s&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||wE(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function wE(e,t,n,i,a){var s=qs(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!s)t:{for(;s!==null;){if(s.tag===7&&(s===t||s.alternate===t)){n=!0;break t}s=s.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=a.ownerDocument,a===s||a===s.documentElement||a===s.body;t:{for(s=t,t=or(t);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==t&&s.alternate!==t)){s=!0;break t}s=s.return}s=!1}return s}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!s)&&!(t=s===n)&&(t=Ap(n,s,Ox),t===null?t=!1:(Wn(t,!0,i3,s,n),s=Yr,Yr=null,t=s!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!s)&&!(t=s===i)&&(t=Ap(i,s,Ox),t===null?t=!1:(Wn(t,!0,a3,s,i),s=Yr,Ep=Yr=null,t=s!==null)),t):!1}function n_(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}fi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(J(566));var t=[];Wn(this._fragmentFiber.child,!1,C0,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=S_(this._fragmentFiber);if(i=n?i[1]||i[0]||or(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=an(i),n_(e,n);return}if(i=an(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var a=t[i];a.tag===6?(a=an(a),n_(a,n)):an(a).scrollIntoView(e),i+=n?-1:1}};function CE(e,t){return e=an(e),e1(e,t),!1}function e1(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function n1(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.addEventListener(a.type,a.attachedListener,To(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){for(var r=0,o=0;o<zi.length;o++){var l=zi[o];(l.fragmentInstance!==t||l.observer!==s||l.instance!==e)&&(zi[r++]=l)}zi.length=r,s.observe(e)}),e1(e,t))}function RE(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.removeEventListener(a.type,a.attachedListener,To(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){typeof s.rootMargin=="string"?EE(t,s,e):s.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Dm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Dm(n),Sf(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function DE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[fc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=wi(e.nextSibling),e===null)break}return null}function NE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=wi(e.nextSibling),e===null))return null;return e}function i1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wi(e.nextSibling),e===null))return null;return e}function Nm(e){return e.data==="$?"||e.data==="$~"}function R0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function UE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function wi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Um=null;function i_(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return wi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function a_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function LE(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function IE(e){jv(function(){jv(function(t){return e(t)})})}function a1(e,t,n){switch(t=nc(n),e){case"html":if(e=t.documentElement,!e)throw Error(J(452));return e;case"head":if(e=t.head,!e)throw Error(J(453));return e;case"body":if(e=t.body,!e)throw Error(J(454));return e;default:throw Error(J(451))}}function s1(e,t,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&Ae(e,t,i,null,cE,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ji&&(e.onclick=null),Sf(e)}function Tp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Sf(e)}var Ci=new Map,s_=new Set;function ic(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Ua=Se.d;Se.d={f:OE,r:PE,D:zE,C:BE,L:FE,m:VE,X:GE,S:HE,M:kE};function OE(){var e=Ua.f(),t=Pf();return e||t}function PE(e){var t=Do(e);t!==null&&t.tag===5&&t.type==="form"?ky(t):Ua.r(e)}var Io=typeof document>"u"?null:document;function r1(e,t,n){var i=Io;if(i&&typeof t=="string"&&t){var a=Ti(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),s_.has(a)||(s_.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Sn(t,"link",e),fn(t),i.head.appendChild(t)))}}function zE(e){Ua.D(e),r1("dns-prefetch",e,null)}function BE(e,t){Ua.C(e,t),r1("preconnect",e,t)}function FE(e,t,n){Ua.L(e,t,n);var i=Io;if(i&&e&&t){var a='link[rel="preload"][as="'+Ti(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ti(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ti(n.imageSizes)+'"]')):a+='[href="'+Ti(e)+'"]';var s=a;switch(t){case"style":s=Eo(e);break;case"script":s=Oo(e)}if(!(Ci.has(s)||(e=Ne({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ci.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(xc(s))||t==="script"&&i.querySelector(vc(s))))){var r=i.createElement("link");Sn(r,"link",e),t==="style"&&(r[Ju]=!0,r.onload=r.onerror=function(){O_(r)}),fn(r),i.head.appendChild(r)}}}function VE(e,t){Ua.m(e,t);var n=Io;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Ti(i)+'"][href="'+Ti(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Oo(e)}if(!Ci.has(s)&&(e=Ne({rel:"modulepreload",href:e},t),Ci.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(vc(s)))return}i=n.createElement("link"),Sn(i,"link",e),fn(i),n.head.appendChild(i)}}}function HE(e,t,n){Ua.S(e,t,n);var i=Io;if(i&&e){var a=so(i).hoistableStyles,s=Eo(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(xc(s)))o.loading=5;else{e=Ne({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ci.get(s))&&D0(e,n);var l=r=i.createElement("link");fn(l),Sn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Vu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function GE(e,t){Ua.X(e,t);var n=Io;if(n&&e){var i=so(n).hoistableScripts,a=Oo(e),s=i.get(a);s||(s=n.querySelector(vc(a)),s||(e=Ne({src:e,async:!0},t),(t=Ci.get(a))&&N0(e,t),s=n.createElement("script"),fn(s),Sn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function kE(e,t){Ua.M(e,t);var n=Io;if(n&&e){var i=so(n).hoistableScripts,a=Oo(e),s=i.get(a);s||(s=n.querySelector(vc(a)),s||(e=Ne({src:e,async:!0,type:"module"},t),(t=Ci.get(a))&&N0(e,t),s=n.createElement("script"),fn(s),Sn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function r_(e,t,n,i){var a=(a=ls.current)?ic(a):null;if(!a)throw Error(J(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Eo(n.href),t=so(a).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Eo(n.href);var s=so(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(xc(e)))?s._p||(r.instance=s,r.state.loading=5):(s=Ci.get(e),s||(s={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ci.set(e,s)),XE(a,e,s,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Oo(n),t=so(a).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,e))}}function Eo(e){return'href="'+Ti(e)+'"'}function xc(e){return'link[rel="stylesheet"]['+e+"]"}function o1(e){return Ne({},e,{"data-precedence":e.precedence,precedence:null})}function XE(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Ju]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Ju]=!0,t.onload=t.onerror=O_.bind(null,t),Sn(t,"link",n),fn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Oo(e){return'[src="'+Ti(e)+'"]'}function vc(e){return"script[async]"+e}function o_(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ti(n.href)+'"]');if(i)return t.instance=i,fn(i),i;var a=Ne({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),fn(i),Sn(i,"style",a),Vu(i,n.precedence,e),t.instance=i;case"stylesheet":a=Eo(n.href);var s=e.querySelector(xc(a));if(s)return t.state.loading|=4,t.instance=s,fn(s),s;i=o1(n),(a=Ci.get(a))&&D0(i,a),s=(e.ownerDocument||e).createElement("link"),fn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Sn(s,"link",i),t.state.loading|=4,Vu(s,n.precedence,e),t.instance=s;case"script":return s=Oo(n.src),(a=e.querySelector(vc(s)))?(t.instance=a,fn(a),a):(i=n,(a=Ci.get(s))&&(i=Ne({},n),N0(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),fn(a),Sn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Vu(i,n.precedence,e));return t.instance}function Vu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function D0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function N0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hu=null;function l_(e,t,n){if(Hu===null){var i=new Map,a=Hu=new Map;a.set(n,i)}else a=Hu,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[fc]||s[vn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function Lm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function WE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function c_(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function l1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function c1(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function u_(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=c1(t),e.suspenseyImages.push(t)),e=ZE.bind(e),t.decode().then(e,e))}function qE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Eo(i.href),s=t.querySelector(xc(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ac.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,fn(s);return}s=t.ownerDocument||t,i=o1(i),(a=Ci.get(a))&&D0(i,a),s=s.createElement("link"),fn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Sn(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ac.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Gu=0;function YE(e,t){return e.stylesheets&&e.count===0&&ku(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&ku(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Gu===0&&(Gu=62500*fE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ku(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Gu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function u1(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ku(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ac(){this.count--,u1(this)}function ZE(){this.imgCount--,u1(this)}var _f=null;function ku(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_f=new Map,t.forEach(JE,e),_f=null,ac.call(e))}function JE(e,t){if(!(t.state.loading&4)){var n=_f.get(e);if(n)var i=n.get(null);else{n=new Map,_f.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=ac.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ao={$$typeof:Qi,Provider:null,Consumer:null,_currentValue:Zs,_currentValue2:Zs,_threadCount:0};function KE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jd(0),this.hiddenUpdates=jd(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function f1(e,t,n,i,a,s,r,o,l,c,f,d){return e=new KE(e,t,n,r,l,c,f,d,o),t=1,s===!0&&(t|=24),s=kn(3,null,null,t),e.current=s,s.stateNode=e,t=Qm(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},t0(s),e}function h1(e){return e?(e=eo,e):eo}function d1(e,t,n,i,a,s){a=h1(a),i.context===null?i.context=a:i.pendingContext=a,i=us(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=fs(e,i,t),n!==null&&(Xn(n,e,t),Pl(n,e,t))}function f_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function U0(e,t){f_(e,t),(e=e.alternate)&&f_(e,t)}function p1(e){if(e.tag===13||e.tag===31){var t=ur(e,67108864);t!==null&&Xn(t,e,67108864),U0(e,67108864)}}function h_(e){if(e.tag===13||e.tag===31){var t=ci();t=Fm(t);var n=ur(e,t);n!==null&&Xn(n,e,t),U0(e,t)}}var wo=!0;function QE(e,t,n,i){var a=Vt.T;Vt.T=null;var s=Se.p;try{Se.p=2,L0(e,t,n,i)}finally{Se.p=s,Vt.T=a}}function jE(e,t,n,i){var a=Vt.T;Vt.T=null;var s=Se.p;try{Se.p=8,L0(e,t,n,i)}finally{Se.p=s,Vt.T=a}}function L0(e,t,n,i){if(wo){var a=Im(i);if(a===null)bp(e,t,i,yf,n),d_(e,i);else if(tA(a,e,t,n,i))i.stopPropagation();else if(d_(e,i),t&4&&-1<$E.indexOf(e)){for(;a!==null;){var s=Do(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ks(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-li(r);o.entanglements[1]|=l,r&=~l}sa(s),(be&6)===0&&(pf=ri()+500,gc(0,!1))}}break;case 31:case 13:o=ur(s,2),o!==null&&Xn(o,s,2),Pf(),U0(s,2)}if(s=Im(i),s===null&&bp(e,t,i,yf,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else bp(e,t,i,null,n)}}function Im(e){return e=Gm(e),I0(e)}var yf=null;function I0(e){if(yf=null,e=qs(e),e!==null){var t=oc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=__(t),e!==null)return e;e=null}else if(n===31){if(e=y_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return yf=e,null}function m1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(d3()){case A_:return 2;case w_:return 8;case Zu:case p3:return 32;case C_:return 268435456;default:return 32}default:return 32}}var Om=!1,ms=null,gs=null,xs=null,sc=new Map,rc=new Map,es=[],$E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function d_(e,t){switch(e){case"focusin":case"focusout":ms=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":xs=null;break;case"pointerover":case"pointerout":sc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rc.delete(t.pointerId)}}function El(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Do(t),t!==null&&p1(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function tA(e,t,n,i,a){switch(t){case"focusin":return ms=El(ms,e,t,n,i,a),!0;case"dragenter":return gs=El(gs,e,t,n,i,a),!0;case"mouseover":return xs=El(xs,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return sc.set(s,El(sc.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,rc.set(s,El(rc.get(s)||null,e,t,n,i,a)),!0}return!1}function g1(e){var t=qs(e.target);if(t!==null){var n=oc(t);if(n!==null){if(t=n.tag,t===13){if(t=__(n),t!==null){e.blockedOn=t,Fx(e.priority,function(){h_(n)});return}}else if(t===31){if(t=y_(n),t!==null){e.blockedOn=t,Fx(e.priority,function(){h_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Im(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Bp=i,n.target.dispatchEvent(i),Bp=null}else return t=Do(n),t!==null&&p1(t),e.blockedOn=n,!1;t.shift()}return!0}function p_(e,t,n){Xu(e)&&n.delete(t)}function eA(){Om=!1,ms!==null&&Xu(ms)&&(ms=null),gs!==null&&Xu(gs)&&(gs=null),xs!==null&&Xu(xs)&&(xs=null),sc.forEach(p_),rc.forEach(p_)}function Tu(e,t){e.blockedOn===t&&(e.blockedOn=null,Om||(Om=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,eA)))}var Eu=null;function m_(e){Eu!==e&&(Eu=e,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,function(){Eu===e&&(Eu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(I0(i||n)===null)continue;break}var s=Do(n);s!==null&&(e.splice(t,3),t-=3,tm(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Co(e){function t(l){return Tu(l,e)}ms!==null&&Tu(ms,e),gs!==null&&Tu(gs,e),xs!==null&&Tu(xs,e),sc.forEach(t),rc.forEach(t);for(var n=0;n<es.length;n++){var i=es[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<es.length&&(n=es[0],n.blockedOn===null);)g1(n),n.blockedOn===null&&es.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[qn]||null;if(typeof s=="function")r||m_(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[qn]||null)o=r.formAction;else if(I0(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),m_(n)}}}function x1(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function O0(e){this._internalRoot=e}Ff.prototype.render=O0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));var n=t.current,i=ci();d1(n,i,e,t,null,null)};Ff.prototype.unmount=O0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;d1(e.current,2,null,e,null,null),Pf(),t[Ro]=null}};function Ff(e){this._internalRoot=e}Ff.prototype.unstable_scheduleHydration=function(e){if(e){var t=I_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<es.length&&t!==0&&t<es[n].priority;n++);es.splice(n,0,e),n===0&&g1(e)}};var g_=x_.version;if(g_!=="19.3.1")throw Error(J(527,g_,"19.3.1"));Se.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=n3(t),e=e!==null?b_(e):null,e=e===null?null:e.stateNode,e};var nA={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Vt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Al=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Al.isDisabled&&Al.supportsFiber))try{lc=Al.inject(nA),oi=Al}catch{}var Al;Vf.createRoot=function(e,t){if(!v_(e))throw Error(J(299));var n=!1,i="",a=Qy,s=jy,r=$y;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=f1(e,1,!1,null,null,n,i,null,a,s,r,x1),e[Ro]=t.current,A0(e),new O0(t)};Vf.hydrateRoot=function(e,t,n){if(!v_(e))throw Error(J(299));var i=!1,a="",s=Qy,r=jy,o=$y,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=f1(e,1,!0,t,n??null,i,a,l,s,r,o,x1),t.context=h1(null),n=t.current,i=ci(),i=Fm(i),a=us(i),a.callback=null,fs(n,a,i),n=i,t.current.lanes=n,uc(t,n),sa(t),e[Ro]=t.current,A0(e),new Ff(t)};Vf.version="19.3.1"});var b1=Ya((PD,y1)=>{"use strict";function _1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_1)}catch(e){console.error(e)}}_1(),y1.exports=v1()});var Lt=Ud(gl(),1),dM=Ud(b1(),1);var ce=Ud(gl(),1);var F1=0,fg=1,V1=2;var hg=1,H1=2,fa=3,Fa=0,Pn=1,ha=2,da=0,vr=1,dg=2,pg=3,mg=4,G1=5,Us=100,k1=101,X1=102,W1=103,q1=104,Y1=200,Z1=201,J1=202,K1=203,rh=204,oh=205,Q1=206,j1=207,$1=208,tS=209,eS=210,nS=211,iS=212,aS=213,sS=214,Nh=0,Uh=1,Lh=2,_r=3,Ih=4,Oh=5,Ph=6,zh=7,gg=0,rS=1,oS=2,Ga=0,lS=1,cS=2,uS=3,fS=4,hS=5,dS=6,pS=7;var xg=300,Er=301,Ar=302,Bh=303,Fh=304,Vc=306,lh=1e3,mi=1001,ch=1002,Kn=1003,mS=1004;var Hc=1005;var On=1006,Vh=1007;var pa=1008;var Ni=1009,vg=1010,_g=1011,il=1012,Hh=1013,zs=1014,ma=1015,wr=1016,Gh=1017,kh=1018,al=1020,yg=35902,bg=35899,Sg=1021,Mg=1022,$n=1023,Jo=1026,sl=1027,Tg=1028,Xh=1029,Wh=1030,qh=1031;var Yh=1033,Gc=33776,kc=33777,Xc=33778,Wc=33779,Zh=35840,Jh=35841,Kh=35842,Qh=35843,jh=36196,$h=37492,td=37496,ed=37808,nd=37809,id=37810,ad=37811,sd=37812,rd=37813,od=37814,ld=37815,cd=37816,ud=37817,fd=37818,hd=37819,dd=37820,pd=37821,md=36492,gd=36494,xd=36495,vd=36283,_d=36284,yd=36285,bd=36286;var Tc=2300,uh=2301,sh=2302,sg=2400,rg=2401,og=2402;var gS=3200,xS=3201;var vS=0,_S=1,zn="",pi="srgb",yr="srgb-linear",Ec="linear",Ce="srgb";var gr=7680;var lg=519,yS=512,bS=513,SS=514,Eg=515,MS=516,TS=517,ES=518,AS=519,cg=35044,qc=35048;var Ag="300 es",ki=2e3,Ac=2001;function wg(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function wc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function wS(){let e=wc("canvas");return e.style.display="block",e}var S1={},Ko=null;function Cg(...e){let t="THREE."+e.shift();Ko?Ko("log",t,...e):console.log(t,...e)}function kt(...e){let t="THREE."+e.shift();Ko?Ko("warn",t,...e):console.warn(t,...e)}function re(...e){let t="THREE."+e.shift();Ko?Ko("error",t,...e):console.error(t,...e)}function Qo(...e){let t=e.join(" ");t in S1||(S1[t]=!0,kt(...e))}function CS(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var Va=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let a=i[t];if(a!==void 0){let s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var P0=Math.PI/180,fh=180/Math.PI;function Yc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[e&255]+wn[e>>8&255]+wn[e>>16&255]+wn[e>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[n&63|128]+wn[n>>8&255]+"-"+wn[n>>16&255]+wn[n>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function fe(e,t,n){return Math.max(t,Math.min(n,e))}function iA(e,t){return(e%t+t)%t}function z0(e,t,n){return(1-n)*e+n*t}function _c(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Yn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Me=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ha=class{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],f=i[a+2],d=i[a+3],h=s[r+0],p=s[r+1],v=s[r+2],y=s[r+3];if(o<=0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d;return}if(o>=1){t[n+0]=h,t[n+1]=p,t[n+2]=v,t[n+3]=y;return}if(d!==y||l!==h||c!==p||f!==v){let m=l*h+c*p+f*v+d*y;m<0&&(h=-h,p=-p,v=-v,y=-y,m=-m);let u=1-o;if(m<.9995){let g=Math.acos(m),x=Math.sin(g);u=Math.sin(u*g)/x,o=Math.sin(o*g)/x,l=l*u+h*o,c=c*u+p*o,f=f*u+v*o,d=d*u+y*o}else{l=l*u+h*o,c=c*u+p*o,f=f*u+v*o,d=d*u+y*o;let g=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=g,c*=g,f*=g,d*=g}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,s,r){let o=i[a],l=i[a+1],c=i[a+2],f=i[a+3],d=s[r],h=s[r+1],p=s[r+2],v=s[r+3];return t[n]=o*v+f*d+l*p-c*h,t[n+1]=l*v+f*h+c*d-o*p,t[n+2]=c*v+f*p+o*h-l*d,t[n+3]=f*v-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(a/2),d=o(s/2),h=l(i/2),p=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=h*f*d+c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d-h*p*v;break;case"YXZ":this._x=h*f*d+c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d+h*p*v;break;case"ZXY":this._x=h*f*d-c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d-h*p*v;break;case"ZYX":this._x=h*f*d-c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d+h*p*v;break;case"YZX":this._x=h*f*d+c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d-h*p*v;break;case"XZY":this._x=h*f*d-c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d+h*p*v;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+a*c-s*l,this._y=a*f+r*l+s*o-i*c,this._z=s*f+r*c+i*l-a*o,this._w=r*f-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(M1.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(M1.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),f=2*(o*n-s*a),d=2*(s*i-r*n);return this.x=n+l*c+r*d-o*f,this.y=i+l*f+o*c-s*d,this.z=a+l*d+s*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this.z=fe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this.z=fe(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return B0.copy(this).projectOnVector(t),this.sub(B0)}reflect(t){return this.sub(B0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},B0=new W,M1=new Ha,Qt=class e{constructor(t,n,i,a,s,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=a,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],v=i[8],y=a[0],m=a[3],u=a[6],g=a[1],x=a[4],b=a[7],C=a[2],T=a[5],A=a[8];return s[0]=r*y+o*g+l*C,s[3]=r*m+o*x+l*T,s[6]=r*u+o*b+l*A,s[1]=c*y+f*g+d*C,s[4]=c*m+f*x+d*T,s[7]=c*u+f*b+d*A,s[2]=h*y+p*g+v*C,s[5]=h*m+p*x+v*T,s[8]=h*u+p*b+v*A,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*s*f+i*o*l+a*s*c-a*r*l}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*r-o*c,h=o*l-f*s,p=c*s-r*l,v=n*d+i*h+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/v;return t[0]=d*y,t[1]=(a*c-f*i)*y,t[2]=(o*i-a*r)*y,t[3]=h*y,t[4]=(f*n-a*l)*y,t[5]=(a*s-o*n)*y,t[6]=p*y,t[7]=(i*l-c*n)*y,t[8]=(r*n-i*s)*y,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(F0.makeScale(t,n)),this}rotate(t){return this.premultiply(F0.makeRotation(-t)),this}translate(t,n){return this.premultiply(F0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},F0=new Qt,T1=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E1=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aA(){let e={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Ce&&(a.r=Ba(a.r),a.g=Ba(a.g),a.b=Ba(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ce&&(a.r=Zo(a.r),a.g=Zo(a.g),a.b=Zo(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===zn?Ec:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[yr]:{primaries:t,whitePoint:i,transfer:Ec,toXYZ:T1,fromXYZ:E1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:i,transfer:Ce,toXYZ:T1,fromXYZ:E1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),e}var ge=aA();function Ba(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Zo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Po,hh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Po===void 0&&(Po=wc("canvas")),Po.width=t.width,Po.height=t.height;let a=Po.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Po}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=wc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Ba(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ba(n[i]/255)*255):n[i]=Ba(n[i]);return{data:n,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sA=0,jo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sA++}),this.uuid=Yc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(V0(a[r].image)):s.push(V0(a[r]))}else s=V0(a);i.url=s}return n||(t.images[this.uuid]=i),i}};function V0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?hh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var rA=0,H0=new W,Qn=class e extends Va{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=mi,a=mi,s=On,r=pa,o=$n,l=Ni,c=e.DEFAULT_ANISOTROPY,f=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=Yc(),this.name="",this.source=new jo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(H0).x}get height(){return this.source.getSize(H0).y}get depth(){return this.source.getSize(H0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){kt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){kt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lh:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case ch:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lh:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case ch:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=xg;Qn.DEFAULT_ANISOTROPY=1;var We=class e{constructor(t=0,n=0,i=0,a=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s,l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],v=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,b=(p+1)/2,C=(u+1)/2,T=(f+h)/4,A=(d+y)/4,N=(v+m)/4;return x>b&&x>C?x<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(x),a=T/i,s=A/i):b>C?b<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(b),i=T/a,s=N/a):C<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(C),i=A/s,a=N/s),this.set(i,a,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-y)/g,this.z=(h-f)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this.z=fe(this.z,t.z,n.z),this.w=fe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this.z=fe(this.z,t,n),this.w=fe(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dh=class extends Va{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new We(0,0,t,n),this.scissorTest=!1,this.viewport=new We(0,0,t,n);let a={width:t,height:n,depth:i.depth},s=new Qn(a);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},t.textures[n].image);this.textures[n].source=new jo(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},la=class extends dh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Ls=class extends Qn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ph=class extends Qn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Is=class{constructor(t=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Vi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Vi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Vi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Vi):Vi.fromBufferAttribute(s,r),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hf.copy(i.boundingBox)),Hf.applyMatrix4(t.matrixWorld),this.union(Hf)}let a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yc),Gf.subVectors(this.max,yc),zo.subVectors(t.a,yc),Bo.subVectors(t.b,yc),Fo.subVectors(t.c,yc),Es.subVectors(Bo,zo),As.subVectors(Fo,Bo),hr.subVectors(zo,Fo);let n=[0,-Es.z,Es.y,0,-As.z,As.y,0,-hr.z,hr.y,Es.z,0,-Es.x,As.z,0,-As.x,hr.z,0,-hr.x,-Es.y,Es.x,0,-As.y,As.x,0,-hr.y,hr.x,0];return!G0(n,zo,Bo,Fo,Gf)||(n=[1,0,0,0,1,0,0,0,1],!G0(n,zo,Bo,Fo,Gf))?!1:(kf.crossVectors(Es,As),n=[kf.x,kf.y,kf.z],G0(n,zo,Bo,Fo,Gf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(La),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},La=[new W,new W,new W,new W,new W,new W,new W,new W],Vi=new W,Hf=new Is,zo=new W,Bo=new W,Fo=new W,Es=new W,As=new W,hr=new W,yc=new W,Gf=new W,kf=new W,dr=new W;function G0(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){dr.fromArray(e,s);let o=a.x*Math.abs(dr.x)+a.y*Math.abs(dr.y)+a.z*Math.abs(dr.z),l=t.dot(dr),c=n.dot(dr),f=i.dot(dr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var oA=new Is,bc=new W,k0=new W,$o=class{constructor(t=new W,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):oA.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bc.subVectors(t,this.center);let n=bc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(bc,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(k0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bc.copy(t.center).add(k0)),this.expandByPoint(bc.copy(t.center).sub(k0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ia=new W,X0=new W,Xf=new W,ws=new W,W0=new W,Wf=new W,q0=new W,mh=class{constructor(t=new W,n=new W(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ia)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ia.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ia.copy(this.origin).addScaledVector(this.direction,n),Ia.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){X0.copy(t).add(n).multiplyScalar(.5),Xf.copy(n).sub(t).normalize(),ws.copy(this.origin).sub(X0);let s=t.distanceTo(n)*.5,r=-this.direction.dot(Xf),o=ws.dot(this.direction),l=-ws.dot(Xf),c=ws.lengthSq(),f=Math.abs(1-r*r),d,h,p,v;if(f>0)if(d=r*l-o,h=r*o-l,v=s*f,d>=0)if(h>=-v)if(h<=v){let y=1/f;d*=y,h*=y,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-r*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(r*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=r>0?-s:s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(X0).addScaledVector(Xf,h),p}intersectSphere(t,n){Ia.subVectors(t.center,this.origin);let i=Ia.dot(this.direction),a=Ia.dot(Ia)-i*i,s=t.radius*t.radius;if(a>s)return null;let r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l,c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,a=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,a=(t.min.x-h.x)*c),f>=0?(s=(t.min.y-h.y)*f,r=(t.max.y-h.y)*f):(s=(t.max.y-h.y)*f,r=(t.min.y-h.y)*f),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Ia)!==null}intersectTriangle(t,n,i,a,s){W0.subVectors(n,t),Wf.subVectors(i,t),q0.crossVectors(W0,Wf);let r=this.direction.dot(q0),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ws.subVectors(this.origin,t);let l=o*this.direction.dot(Wf.crossVectors(ws,Wf));if(l<0)return null;let c=o*this.direction.dot(W0.cross(ws));if(c<0||l+c>r)return null;let f=-o*ws.dot(q0);return f<0?null:this.at(f/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rn=class e{constructor(t,n,i,a,s,r,o,l,c,f,d,h,p,v,y,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,f,d,h,p,v,y,m)}set(t,n,i,a,s,r,o,l,c,f,d,h,p,v,y,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=v,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,a=1/Vo.setFromMatrixColumn(t,0).length(),s=1/Vo.setFromMatrixColumn(t,1).length(),r=1/Vo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),f=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let h=r*f,p=r*d,v=o*f,y=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){let h=l*f,p=l*d,v=c*f,y=c*d;n[0]=h+y*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*f,n[9]=-o,n[2]=p*o-v,n[6]=y+h*o,n[10]=r*l}else if(t.order==="ZXY"){let h=l*f,p=l*d,v=c*f,y=c*d;n[0]=h-y*o,n[4]=-r*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*f,n[9]=y-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let h=r*f,p=r*d,v=o*f,y=o*d;n[0]=l*f,n[4]=v*c-p,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let h=r*l,p=r*c,v=o*l,y=o*c;n[0]=l*f,n[4]=y-h*d,n[8]=v*d+p,n[1]=d,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*d+v,n[10]=h-y*d}else if(t.order==="XZY"){let h=r*l,p=r*c,v=o*l,y=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+y,n[5]=r*f,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lA,t,cA)}lookAt(t,n,i){let a=this.elements;return hi.subVectors(t,n),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Cs.crossVectors(i,hi),Cs.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Cs.crossVectors(i,hi)),Cs.normalize(),qf.crossVectors(hi,Cs),a[0]=Cs.x,a[4]=qf.x,a[8]=hi.x,a[1]=Cs.y,a[5]=qf.y,a[9]=hi.y,a[2]=Cs.z,a[6]=qf.z,a[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],v=i[2],y=i[6],m=i[10],u=i[14],g=i[3],x=i[7],b=i[11],C=i[15],T=a[0],A=a[4],N=a[8],E=a[12],S=a[1],U=a[5],B=a[9],k=a[13],Y=a[2],$=a[6],Q=a[10],st=a[14],G=a[3],ot=a[7],ct=a[11],vt=a[15];return s[0]=r*T+o*S+l*Y+c*G,s[4]=r*A+o*U+l*$+c*ot,s[8]=r*N+o*B+l*Q+c*ct,s[12]=r*E+o*k+l*st+c*vt,s[1]=f*T+d*S+h*Y+p*G,s[5]=f*A+d*U+h*$+p*ot,s[9]=f*N+d*B+h*Q+p*ct,s[13]=f*E+d*k+h*st+p*vt,s[2]=v*T+y*S+m*Y+u*G,s[6]=v*A+y*U+m*$+u*ot,s[10]=v*N+y*B+m*Q+u*ct,s[14]=v*E+y*k+m*st+u*vt,s[3]=g*T+x*S+b*Y+C*G,s[7]=g*A+x*U+b*$+C*ot,s[11]=g*N+x*B+b*Q+C*ct,s[15]=g*E+x*k+b*st+C*vt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],p=t[14],v=t[3],y=t[7],m=t[11],u=t[15];return v*(+s*l*d-a*c*d-s*o*h+i*c*h+a*o*p-i*l*p)+y*(+n*l*p-n*c*h+s*r*h-a*r*p+a*c*f-s*l*f)+m*(+n*c*d-n*o*p-s*r*d+i*r*p+s*o*f-i*c*f)+u*(-a*o*f-n*l*d+n*o*h+a*r*d-i*r*h+i*l*f)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],p=t[11],v=t[12],y=t[13],m=t[14],u=t[15],g=d*m*c-y*h*c+y*l*p-o*m*p-d*l*u+o*h*u,x=v*h*c-f*m*c-v*l*p+r*m*p+f*l*u-r*h*u,b=f*y*c-v*d*c+v*o*p-r*y*p-f*o*u+r*d*u,C=v*d*l-f*y*l-v*o*h+r*y*h+f*o*m-r*d*m,T=n*g+i*x+a*b+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=g*A,t[1]=(y*h*s-d*m*s-y*a*p+i*m*p+d*a*u-i*h*u)*A,t[2]=(o*m*s-y*l*s+y*a*c-i*m*c-o*a*u+i*l*u)*A,t[3]=(d*l*s-o*h*s-d*a*c+i*h*c+o*a*p-i*l*p)*A,t[4]=x*A,t[5]=(f*m*s-v*h*s+v*a*p-n*m*p-f*a*u+n*h*u)*A,t[6]=(v*l*s-r*m*s-v*a*c+n*m*c+r*a*u-n*l*u)*A,t[7]=(r*h*s-f*l*s+f*a*c-n*h*c-r*a*p+n*l*p)*A,t[8]=b*A,t[9]=(v*d*s-f*y*s-v*i*p+n*y*p+f*i*u-n*d*u)*A,t[10]=(r*y*s-v*o*s+v*i*c-n*y*c-r*i*u+n*o*u)*A,t[11]=(f*o*s-r*d*s-f*i*c+n*d*c+r*i*p-n*o*p)*A,t[12]=C*A,t[13]=(f*y*a-v*d*a+v*i*h-n*y*h-f*i*m+n*d*m)*A,t[14]=(v*o*a-r*y*a-v*i*l+n*y*l+r*i*m-n*o*m)*A,t[15]=(r*d*a-f*o*a+f*i*l-n*d*l-r*i*h+n*o*h)*A,this}scale(t){let n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,f=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,f*o+i,f*l-a*r,0,c*l-a*o,f*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){let a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,f=r+r,d=o+o,h=s*c,p=s*f,v=s*d,y=r*f,m=r*d,u=o*d,g=l*c,x=l*f,b=l*d,C=i.x,T=i.y,A=i.z;return a[0]=(1-(y+u))*C,a[1]=(p+b)*C,a[2]=(v-x)*C,a[3]=0,a[4]=(p-b)*T,a[5]=(1-(h+u))*T,a[6]=(m+g)*T,a[7]=0,a[8]=(v+x)*A,a[9]=(m-g)*A,a[10]=(1-(h+y))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){let a=this.elements,s=Vo.set(a[0],a[1],a[2]).length(),r=Vo.set(a[4],a[5],a[6]).length(),o=Vo.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],Hi.copy(this);let c=1/s,f=1/r,d=1/o;return Hi.elements[0]*=c,Hi.elements[1]*=c,Hi.elements[2]*=c,Hi.elements[4]*=f,Hi.elements[5]*=f,Hi.elements[6]*=f,Hi.elements[8]*=d,Hi.elements[9]*=d,Hi.elements[10]*=d,n.setFromRotationMatrix(Hi),i.x=s,i.y=r,i.z=o,this}makePerspective(t,n,i,a,s,r,o=ki,l=!1){let c=this.elements,f=2*s/(n-t),d=2*s/(i-a),h=(n+t)/(n-t),p=(i+a)/(i-a),v,y;if(l)v=s/(r-s),y=r*s/(r-s);else if(o===ki)v=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(o===Ac)v=-r/(r-s),y=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=ki,l=!1){let c=this.elements,f=2/(n-t),d=2/(i-a),h=-(n+t)/(n-t),p=-(i+a)/(i-a),v,y;if(l)v=1/(r-s),y=r/(r-s);else if(o===ki)v=-2/(r-s),y=-(r+s)/(r-s);else if(o===Ac)v=-1/(r-s),y=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Vo=new W,Hi=new rn,lA=new W(0,0,0),cA=new W(1,1,1),Cs=new W,qf=new W,hi=new W,A1=new rn,w1=new Ha,ca=class e{constructor(t=0,n=0,i=0,a=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],f=a[9],d=a[2],h=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-fe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return A1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(A1,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return w1.setFromEuler(this),this.setFromQuaternion(w1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ca.DEFAULT_ORDER="XYZ";var Cc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},uA=0,C1=new W,Ho=new Ha,Oa=new rn,Yf=new W,Sc=new W,fA=new W,hA=new Ha,R1=new W(1,0,0),D1=new W(0,1,0),N1=new W(0,0,1),U1={type:"added"},dA={type:"removed"},Go={type:"childadded",child:null},Y0={type:"childremoved",child:null},Di=class e extends Va{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uA++}),this.uuid=Yc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new ca,i=new Ha,a=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new rn},normalMatrix:{value:new Qt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ho.setFromAxisAngle(t,n),this.quaternion.multiply(Ho),this}rotateOnWorldAxis(t,n){return Ho.setFromAxisAngle(t,n),this.quaternion.premultiply(Ho),this}rotateX(t){return this.rotateOnAxis(R1,t)}rotateY(t){return this.rotateOnAxis(D1,t)}rotateZ(t){return this.rotateOnAxis(N1,t)}translateOnAxis(t,n){return C1.copy(t).applyQuaternion(this.quaternion),this.position.add(C1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(R1,t)}translateY(t){return this.translateOnAxis(D1,t)}translateZ(t){return this.translateOnAxis(N1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oa.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Yf.copy(t):Yf.set(t,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Sc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oa.lookAt(Sc,Yf,this.up):Oa.lookAt(Yf,Sc,this.up),this.quaternion.setFromRotationMatrix(Oa),a&&(Oa.extractRotation(a.matrixWorld),Ho.setFromRotationMatrix(Oa),this.quaternion.premultiply(Ho.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(U1),Go.child=t,this.dispatchEvent(Go),Go.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(dA),Y0.child=t,this.dispatchEvent(Y0),Y0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(U1),Go.child=t,this.dispatchEvent(Go),Go.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sc,t,fA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sc,hA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),d=r(t.shapes),h=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}};Di.DEFAULT_UP=new W(0,1,0);Di.DEFAULT_MATRIX_AUTO_UPDATE=!0;Di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gi=new W,Pa=new W,Z0=new W,za=new W,ko=new W,Xo=new W,L1=new W,J0=new W,K0=new W,Q0=new W,j0=new We,$0=new We,tg=new We,Ns=class e{constructor(t=new W,n=new W,i=new W){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Gi.subVectors(t,n),a.cross(Gi);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){Gi.subVectors(a,n),Pa.subVectors(i,n),Z0.subVectors(t,n);let r=Gi.dot(Gi),o=Gi.dot(Pa),l=Gi.dot(Z0),c=Pa.dot(Pa),f=Pa.dot(Z0),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;let h=1/d,p=(c*l-o*f)*h,v=(r*f-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,za)===null?!1:za.x>=0&&za.y>=0&&za.x+za.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,za)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,za.x),l.addScaledVector(r,za.y),l.addScaledVector(o,za.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return j0.setScalar(0),$0.setScalar(0),tg.setScalar(0),j0.fromBufferAttribute(t,n),$0.fromBufferAttribute(t,i),tg.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(j0,s.x),r.addScaledVector($0,s.y),r.addScaledVector(tg,s.z),r}static isFrontFacing(t,n,i,a){return Gi.subVectors(i,n),Pa.subVectors(t,n),Gi.cross(Pa).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Pa.subVectors(this.a,this.b),Gi.cross(Pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return e.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,a=this.b,s=this.c,r,o;ko.subVectors(a,i),Xo.subVectors(s,i),J0.subVectors(t,i);let l=ko.dot(J0),c=Xo.dot(J0);if(l<=0&&c<=0)return n.copy(i);K0.subVectors(t,a);let f=ko.dot(K0),d=Xo.dot(K0);if(f>=0&&d<=f)return n.copy(a);let h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(ko,r);Q0.subVectors(t,s);let p=ko.dot(Q0),v=Xo.dot(Q0);if(v>=0&&p<=v)return n.copy(s);let y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Xo,o);let m=f*v-p*d;if(m<=0&&d-f>=0&&p-v>=0)return L1.subVectors(s,a),o=(d-f)/(d-f+(p-v)),n.copy(a).addScaledVector(L1,o);let u=1/(m+y+h);return r=y*u,o=h*u,n.copy(i).addScaledVector(ko,r).addScaledVector(Xo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},RS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},Zf={h:0,s:0,l:0};function eg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var le=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=ge.workingColorSpace){return this.r=t,this.g=n,this.b=i,ge.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=ge.workingColorSpace){if(t=iA(t,1),n=fe(n,0,1),i=fe(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=eg(r,s,t+1/3),this.g=eg(r,s,t),this.b=eg(r,s,t-1/3)}return ge.colorSpaceToWorking(this,a),this}setStyle(t,n=pi){function i(s){s!==void 0&&parseFloat(s)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:kt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=pi){let i=RS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}copyLinearToSRGB(t){return this.r=Zo(t.r),this.g=Zo(t.g),this.b=Zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return ge.workingToColorSpace(Cn.copy(this),t),Math.round(fe(Cn.r*255,0,255))*65536+Math.round(fe(Cn.g*255,0,255))*256+Math.round(fe(Cn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ge.workingColorSpace){ge.workingToColorSpace(Cn.copy(this),n);let i=Cn.r,a=Cn.g,s=Cn.b,r=Math.max(i,a,s),o=Math.min(i,a,s),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=f<=.5?d/(r+o):d/(2-r-o),r){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=ge.workingColorSpace){return ge.workingToColorSpace(Cn.copy(this),n),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=pi){ge.workingToColorSpace(Cn.copy(this),t);let n=Cn.r,i=Cn.g,a=Cn.b;return t!==pi?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Rs),this.setHSL(Rs.h+t,Rs.s+n,Rs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Rs),t.getHSL(Zf);let i=z0(Rs.h,Zf.h,n),a=z0(Rs.s,Zf.s,n),s=z0(Rs.l,Zf.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new le;le.NAMES=RS;var pA=0,br=class extends Va{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pA++}),this.uuid=Yc(),this.name="",this.type="Material",this.blending=vr,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=oh,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){kt(`Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){kt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==Fa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rh&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==Us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(n){let s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Rc=class extends br{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Qe=new W,Jf=new Me,mA=0,Jn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=cg,this.updateRanges=[],this.gpuType=ma,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jf.fromBufferAttribute(this,n),Jf.applyMatrix3(t),this.setXY(n,Jf.x,Jf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Qe.fromBufferAttribute(this,n),Qe.applyMatrix3(t),this.setXYZ(n,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Qe.fromBufferAttribute(this,n),Qe.applyMatrix4(t),this.setXYZ(n,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Qe.fromBufferAttribute(this,n),Qe.applyNormalMatrix(t),this.setXYZ(n,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Qe.fromBufferAttribute(this,n),Qe.transformDirection(t),this.setXYZ(n,Qe.x,Qe.y,Qe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=_c(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=_c(n,this.array)),n}setX(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=_c(n,this.array)),n}setY(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=_c(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=_c(n,this.array)),n}setW(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array),a=Yn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array),a=Yn(a,this.array),s=Yn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cg&&(t.usage=this.usage),t}};var Dc=class extends Jn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Nc=class extends Jn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var oa=class extends Jn{constructor(t,n,i){super(new Float32Array(t),n,i)}},gA=0,Ri=new rn,ng=new Di,Wo=new W,di=new Is,Mc=new Is,dn=new W,ua=class e extends Va{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=Yc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wg(t)?Nc:Dc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,n,i){return Ri.makeTranslation(t,n,i),this.applyMatrix4(Ri),this}scale(t,n,i){return Ri.makeScale(t,n,i),this.applyMatrix4(Ri),this}lookAt(t){return ng.lookAt(t),ng.updateMatrix(),this.applyMatrix4(ng.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wo).negate(),this.translate(Wo.x,Wo.y,Wo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,s=t.length;a<s;a++){let r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new oa(i,3))}else{let i=Math.min(t.length,n.count);for(let a=0;a<i;a++){let s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){let s=n[i];di.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let i=this.boundingSphere.center;if(di.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){let o=n[s];Mc.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(di.min,Mc.min),di.expandByPoint(dn),dn.addVectors(di.max,Mc.max),di.expandByPoint(dn)):(di.expandByPoint(Mc.min),di.expandByPoint(Mc.max))}di.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)dn.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(dn));if(n)for(let s=0,r=n.length;s<r;s++){let o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)dn.fromBufferAttribute(o,c),l&&(Wo.fromBufferAttribute(t,c),dn.add(Wo)),a=Math.max(a,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new W,l[N]=new W;let c=new W,f=new W,d=new W,h=new Me,p=new Me,v=new Me,y=new W,m=new W;function u(N,E,S){c.fromBufferAttribute(i,N),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,S),f.sub(c),d.sub(c),p.sub(h),v.sub(h);let U=1/(p.x*v.y-v.x*p.y);isFinite(U)&&(y.copy(f).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(U),o[N].add(y),o[E].add(y),o[S].add(y),l[N].add(m),l[E].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let N=0,E=g.length;N<E;++N){let S=g[N],U=S.start,B=S.count;for(let k=U,Y=U+B;k<Y;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let x=new W,b=new W,C=new W,T=new W;function A(N){C.fromBufferAttribute(a,N),T.copy(C);let E=o[N];x.copy(E),x.sub(C.multiplyScalar(C.dot(E))).normalize(),b.crossVectors(T,E);let U=b.dot(l[N])<0?-1:1;r.setXYZW(N,x.x,x.y,x.z,U)}for(let N=0,E=g.length;N<E;++N){let S=g[N],U=S.start,B=S.count;for(let k=U,Y=U+B;k<Y;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let a=new W,s=new W,r=new W,o=new W,l=new W,c=new W,f=new W,d=new W;if(t)for(let h=0,p=t.count;h<p;h+=3){let v=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),r.fromBufferAttribute(n,m),f.subVectors(r,s),d.subVectors(a,s),f.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)a.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),f.subVectors(r,s),d.subVectors(a,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)dn.fromBufferAttribute(t,n),dn.normalize(),t.setXYZ(n,dn.x,dn.y,dn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f),p=0,v=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*f;for(let u=0;u<f;u++)h[v++]=c[p++]}return new Jn(h,f,d)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,i);n.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){let h=c[f],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];f.push(p.toJSON(t.data))}f.length>0&&(a[l]=f,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let a=t.attributes;for(let c in a){let f=a[c];this.setAttribute(c,f.clone(n))}let s=t.morphAttributes;for(let c in s){let f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},I1=new rn,pr=new mh,Kf=new $o,O1=new W,Qf=new W,jf=new W,$f=new W,ig=new W,th=new W,P1=new W,eh=new W,gi=class extends Di{constructor(t=new ua,n=new Rc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){let i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);let o=this.morphTargetInfluences;if(s&&o){th.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let f=o[l],d=s[l];f!==0&&(ig.fromBufferAttribute(d,t),r?th.addScaledVector(ig,f):th.addScaledVector(ig.sub(n),f))}n.add(th)}return n}raycast(t,n){let i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kf.copy(i.boundingSphere),Kf.applyMatrix4(s),pr.copy(t.ray).recast(t.near),!(Kf.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Kf,O1)===null||pr.origin.distanceToSquared(O1)>(t.far-t.near)**2))&&(I1.copy(s).invert(),pr.copy(t.ray).applyMatrix4(I1),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,pr)))}_computeIntersections(t,n,i){let a,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,y=h.length;v<y;v++){let m=h[v],u=r[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=g,C=x;b<C;b+=3){let T=o.getX(b),A=o.getX(b+1),N=o.getX(b+2);a=nh(this,u,t,i,c,f,d,T,A,N),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{let v=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=v,u=y;m<u;m+=3){let g=o.getX(m),x=o.getX(m+1),b=o.getX(m+2);a=nh(this,r,t,i,c,f,d,g,x,b),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,y=h.length;v<y;v++){let m=h[v],u=r[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=g,C=x;b<C;b+=3){let T=b,A=b+1,N=b+2;a=nh(this,u,t,i,c,f,d,T,A,N),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{let v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,u=y;m<u;m+=3){let g=m,x=m+1,b=m+2;a=nh(this,r,t,i,c,f,d,g,x,b),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}};function xA(e,t,n,i,a,s,r,o){let l;if(t.side===Pn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Fa,o),l===null)return null;eh.copy(o),eh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(eh);return c<n.near||c>n.far?null:{distance:c,point:eh.clone(),object:e}}function nh(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Qf),e.getVertexPosition(l,jf),e.getVertexPosition(c,$f);let f=xA(e,t,n,i,Qf,jf,$f,P1);if(f){let d=new W;Ns.getBarycoord(P1,Qf,jf,$f,d),a&&(f.uv=Ns.getInterpolatedAttribute(a,o,l,c,d,new Me)),s&&(f.uv1=Ns.getInterpolatedAttribute(s,o,l,c,d,new Me)),r&&(f.normal=Ns.getInterpolatedAttribute(r,o,l,c,d,new W),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new W,materialIndex:0};Ns.getNormal(Qf,jf,$f,h.normal),f.face=h,f.barycoord=d}return f}var tl=class e extends ua{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};let o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],f=[],d=[],h=0,p=0;v("z","y","x",-1,-1,i,n,t,r,s,0),v("z","y","x",1,-1,i,n,-t,r,s,1),v("x","z","y",1,1,t,i,n,a,r,2),v("x","z","y",1,-1,t,i,-n,a,r,3),v("x","y","z",1,-1,t,n,i,a,s,4),v("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new oa(c,3)),this.setAttribute("normal",new oa(f,3)),this.setAttribute("uv",new oa(d,2));function v(y,m,u,g,x,b,C,T,A,N,E){let S=b/A,U=C/N,B=b/2,k=C/2,Y=T/2,$=A+1,Q=N+1,st=0,G=0,ot=new W;for(let ct=0;ct<Q;ct++){let vt=ct*U-k;for(let jt=0;jt<$;jt++){let ne=jt*S-B;ot[y]=ne*g,ot[m]=vt*x,ot[u]=Y,c.push(ot.x,ot.y,ot.z),ot[y]=0,ot[m]=0,ot[u]=T>0?1:-1,f.push(ot.x,ot.y,ot.z),d.push(jt/A),d.push(1-ct/N),st+=1}}for(let ct=0;ct<N;ct++)for(let vt=0;vt<A;vt++){let jt=h+vt+$*ct,ne=h+vt+$*(ct+1),Jt=h+(vt+1)+$*(ct+1),Yt=h+(vt+1)+$*ct;l.push(jt,ne,Yt),l.push(ne,Jt,Yt),G+=6}o.addGroup(p,G,E),p+=G,h+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function Rn(e){let t={};for(let n=0;n<e.length;n++){let i=Cr(e[n]);for(let a in i)t[a]=i[a]}return t}function vA(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Rg(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var DS={clone:Cr,merge:Rn},_A=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends br{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_A,this.fragmentShader=yA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=vA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Uc=class extends Di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ds=new W,z1=new Me,B1=new Me,Zn=class extends Uc{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=fh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(P0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fh*2*Math.atan(Math.tan(P0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z)}getViewSize(t,n){return this.getViewBounds(t,z1,B1),n.subVectors(B1,z1)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(P0*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},qo=-90,Yo=1,gh=class extends Di{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new Zn(qo,Yo,t,n);a.layers=this.layers,this.add(a);let s=new Zn(qo,Yo,t,n);s.layers=this.layers,this.add(s);let r=new Zn(qo,Yo,t,n);r.layers=this.layers,this.add(r);let o=new Zn(qo,Yo,t,n);o.layers=this.layers,this.add(o);let l=new Zn(qo,Yo,t,n);l.layers=this.layers,this.add(l);let c=new Zn(qo,Yo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(let c of n)this.remove(c);if(t===ki)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,s),t.setRenderTarget(i,1,a),t.render(n,r),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,a),t.render(n,f),t.setRenderTarget(d,h,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Lc=class extends Qn{constructor(t=[],n=Er,i,a,s,r,o,l,c,f){super(t,n,i,a,s,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xh=class extends la{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Lc(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new tl(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:da});s.uniforms.tEquirect.value=n;let r=new gi(a,s),o=n.minFilter;return n.minFilter===pa&&(n.minFilter=On),new gh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}},xr=class extends Di{constructor(){super(),this.isGroup=!0,this.type="Group"}},bA={type:"move"},el=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let y of t.hand.values()){let m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bA)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new xr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var Ic=class extends Di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var vh=class extends Qn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=Kn,f=Kn,d,h){super(null,r,o,l,c,f,a,s,d,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sr=class extends Jn{constructor(t,n,i,a=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var ag=new W,SA=new W,MA=new Qt,ra=class{constructor(t=new W(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let a=ag.subVectors(i,n).cross(SA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(ag),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||MA.getNormalMatrix(t),a=this.coplanarPoint(ag).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},mr=new $o,TA=new Me(.5,.5),ih=new W,Oc=class{constructor(t=new ra,n=new ra,i=new ra,a=new ra,s=new ra,r=new ra){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ki,i=!1){let a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],f=s[4],d=s[5],h=s[6],p=s[7],v=s[8],y=s[9],m=s[10],u=s[11],g=s[12],x=s[13],b=s[14],C=s[15];if(a[0].setComponents(c-r,p-f,u-v,C-g).normalize(),a[1].setComponents(c+r,p+f,u+v,C+g).normalize(),a[2].setComponents(c+o,p+d,u+y,C+x).normalize(),a[3].setComponents(c-o,p-d,u-y,C-x).normalize(),i)a[4].setComponents(l,h,m,b).normalize(),a[5].setComponents(c-l,p-h,u-m,C-b).normalize();else if(a[4].setComponents(c-l,p-h,u-m,C-b).normalize(),n===ki)a[5].setComponents(c+l,p+h,u+m,C+b).normalize();else if(n===Ac)a[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){mr.center.set(0,0,0);let n=TA.distanceTo(t.center);return mr.radius=.7071067811865476+n,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){let n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(ih.x=a.normal.x>0?t.max.x:t.min.x,ih.y=a.normal.y>0?t.max.y:t.min.y,ih.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(ih)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pc=class extends Qn{constructor(t,n,i=zs,a,s,r,o=Kn,l=Kn,c,f=Jo,d=1){if(f!==Jo&&f!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:d};super(h,a,s,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},zc=class extends Qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Mr=class e extends ua{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};let s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,f=l+1,d=t/o,h=n/l,p=[],v=[],y=[],m=[];for(let u=0;u<f;u++){let g=u*h-r;for(let x=0;x<c;x++){let b=x*d-s;v.push(b,-g,0),y.push(0,0,1),m.push(x/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){let x=g+c*u,b=g+c*(u+1),C=g+1+c*(u+1),T=g+1+c*u;p.push(x,b,T),p.push(b,C,T)}this.setIndex(p),this.setAttribute("position",new oa(v,3)),this.setAttribute("normal",new oa(y,3)),this.setAttribute("uv",new oa(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var _h=class extends br{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yh=class extends br{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ah(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function EA(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Tr=class{constructor(t,n,i,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],s=n[i-1];t:{e:{let r;n:{i:if(!(t<a)){for(let o=i+2;;){if(a===void 0){if(t<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=a,a=n[++i],t<a)break e}r=n.length;break n}if(!(t>=s)){let o=n[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=s,s=n[--i-1],t>=s)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(a=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,a)}return this.interpolate_(i,s,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,s=t*a;for(let r=0;r!==a;++r)n[r]=i[s+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bh=class extends Tr{constructor(t,n,i,a){super(t,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sg,endingEnd:sg}}intervalChanged_(t,n,i){let a=this.parameterPositions,s=t-2,r=t+1,o=a[s],l=a[r];if(o===void 0)switch(this.getSettings_().endingStart){case rg:s=t,o=2*n-i;break;case og:s=a.length-2,o=n+a[s]-a[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rg:r=t,l=2*i-n;break;case og:r=1,l=i+a[1]-a[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=s*f,this._offsetNext=r*f}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,v=(i-n)/(a-n),y=v*v,m=y*v,u=-h*m+2*h*y-h*v,g=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*v+1,x=(-1-p)*m+(1.5+p)*y+.5*v,b=p*m-p*y;for(let C=0;C!==o;++C)s[C]=u*r[f+C]+g*r[c+C]+x*r[l+C]+b*r[d+C];return s}},Sh=class extends Tr{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(a-n),d=1-f;for(let h=0;h!==o;++h)s[h]=r[c+h]*d+r[l+h]*f;return s}},Mh=class extends Tr{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t){return this.copySampleValue_(t-1)}},xi=class{constructor(t,n,i,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ah(n,this.TimeBufferType),this.values=ah(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:ah(t.times,Array),values:ah(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(i.interpolation=a)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Tc:n=this.InterpolantFactoryMethodDiscrete;break;case uh:n=this.InterpolantFactoryMethodLinear;break;case sh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return kt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tc;case this.InterpolantFactoryMethodLinear:return uh;case this.InterpolantFactoryMethodSmooth:return sh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=t}return this}trim(t,n){let i=this.times,a=i.length,s=0,r=a-1;for(;s!==a&&i[s]<t;)++s;for(;r!==-1&&i[r]>n;)--r;if(++r,s!==0||r!==a){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(re("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,a=this.values,s=i.length;s===0&&(re("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){re("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){re("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(a!==void 0&&EA(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){re("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===sh,s=t.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(a)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let v=0;v!==i;++v){let y=n[d+v];if(y!==n[h+v]||y!==n[p+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,h=r*i;for(let p=0;p!==i;++p)n[h+p]=n[d+p]}++r}}if(s>0){t[r]=t[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,t,n);return a.createInterpolant=this.createInterpolant,a}};xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=uh;var Os=class extends xi{constructor(t,n,i){super(t,n,i)}};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Tc;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Th=class extends xi{constructor(t,n,i,a){super(t,n,i,a)}};Th.prototype.ValueTypeName="color";var Eh=class extends xi{constructor(t,n,i,a){super(t,n,i,a)}};Eh.prototype.ValueTypeName="number";var Ah=class extends Tr{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),c=t*o;for(let f=c+o;c!==f;c+=4)Ha.slerpFlat(s,0,r,c-o,r,c,l);return s}},Bc=class extends xi{constructor(t,n,i,a){super(t,n,i,a)}InterpolantFactoryMethodLinear(t){return new Ah(this.times,this.values,this.getValueSize(),t)}};Bc.prototype.ValueTypeName="quaternion";Bc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ps=class extends xi{constructor(t,n,i){super(t,n,i)}};Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Tc;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var wh=class extends xi{constructor(t,n,i,a){super(t,n,i,a)}};wh.prototype.ValueTypeName="vector";var Ch=class{constructor(t,n,i){let a=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,s===!1&&a.onStart!==void 0&&a.onStart(f,r,o),s=!0},this.itemEnd=function(f){r++,a.onProgress!==void 0&&a.onProgress(f,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(f){a.onError!==void 0&&a.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){let d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},NS=new Ch,Rh=class{constructor(t){this.manager=t!==void 0?t:NS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(a,s){i.load(t,a,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Rh.DEFAULT_MATERIAL_NAME="__DEFAULT";var nl=class extends Uc{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Fc=class extends ua{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Dh=class extends Zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Dg="\\[\\]\\.:\\/",AA=new RegExp("["+Dg+"]","g"),Ng="[^"+Dg+"]",wA="[^"+Dg.replace("\\.","")+"]",CA=/((?:WC+[\/:])*)/.source.replace("WC",Ng),RA=/(WCOD+)?/.source.replace("WCOD",wA),DA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ng),NA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ng),UA=new RegExp("^"+CA+RA+DA+NA+"$"),LA=["material","materials","bones","map"],ug=class{constructor(t,n,i){let a=i||Pe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,a)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=i.length;a!==s;++a)i[a].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Pe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(AA,"")}static parseTrackName(t){let n=UA.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=i.nodeName.substring(a+1);LA.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)t[n++]=i[a]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,s=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[a];if(r===void 0){let c=n.nodeName;re("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=ug;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zD=new Float32Array(1);function Ug(e,t,n,i){let a=IA(i);switch(n){case Sg:return e*t;case Tg:return e*t/a.components*a.byteLength;case Xh:return e*t/a.components*a.byteLength;case Wh:return e*t*2/a.components*a.byteLength;case qh:return e*t*2/a.components*a.byteLength;case Mg:return e*t*3/a.components*a.byteLength;case $n:return e*t*4/a.components*a.byteLength;case Yh:return e*t*4/a.components*a.byteLength;case Gc:case kc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Xc:case Wc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jh:case Qh:return Math.max(e,16)*Math.max(t,8)/4;case Zh:case Kh:return Math.max(e,8)*Math.max(t,8)/2;case jh:case $h:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case td:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ed:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case nd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case id:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ad:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case sd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case rd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case od:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ld:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case cd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ud:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case fd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case hd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case dd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case pd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case md:case gd:case xd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case vd:case _d:return Math.ceil(e/4)*Math.ceil(t/4)*8;case yd:case bd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function IA(e){switch(e){case Ni:case vg:return{byteLength:1,components:1};case il:case _g:case wr:return{byteLength:2,components:1};case Gh:case kh:return{byteLength:2,components:4};case zs:case Hh:case ma:return{byteLength:4,components:1};case yg:case bg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function tM(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function PA(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let f=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,f);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){let v=d[h],y=d[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){let y=d[p];e.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var zA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,s2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,r2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,o2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,l2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d2="gl_FragColor = linearToOutputTexel( gl_FragColor );",p2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,g2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,x2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,R2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,D2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ew=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ow=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_w=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ew=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ww=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ow=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ww=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$w=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:zA,alphahash_pars_fragment:BA,alphamap_fragment:FA,alphamap_pars_fragment:VA,alphatest_fragment:HA,alphatest_pars_fragment:GA,aomap_fragment:kA,aomap_pars_fragment:XA,batching_pars_vertex:WA,batching_vertex:qA,begin_vertex:YA,beginnormal_vertex:ZA,bsdfs:JA,iridescence_fragment:KA,bumpmap_pars_fragment:QA,clipping_planes_fragment:jA,clipping_planes_pars_fragment:$A,clipping_planes_pars_vertex:t2,clipping_planes_vertex:e2,color_fragment:n2,color_pars_fragment:i2,color_pars_vertex:a2,color_vertex:s2,common:r2,cube_uv_reflection_fragment:o2,defaultnormal_vertex:l2,displacementmap_pars_vertex:c2,displacementmap_vertex:u2,emissivemap_fragment:f2,emissivemap_pars_fragment:h2,colorspace_fragment:d2,colorspace_pars_fragment:p2,envmap_fragment:m2,envmap_common_pars_fragment:g2,envmap_pars_fragment:x2,envmap_pars_vertex:v2,envmap_physical_pars_fragment:R2,envmap_vertex:_2,fog_vertex:y2,fog_pars_vertex:b2,fog_fragment:S2,fog_pars_fragment:M2,gradientmap_pars_fragment:T2,lightmap_pars_fragment:E2,lights_lambert_fragment:A2,lights_lambert_pars_fragment:w2,lights_pars_begin:C2,lights_toon_fragment:D2,lights_toon_pars_fragment:N2,lights_phong_fragment:U2,lights_phong_pars_fragment:L2,lights_physical_fragment:I2,lights_physical_pars_fragment:O2,lights_fragment_begin:P2,lights_fragment_maps:z2,lights_fragment_end:B2,logdepthbuf_fragment:F2,logdepthbuf_pars_fragment:V2,logdepthbuf_pars_vertex:H2,logdepthbuf_vertex:G2,map_fragment:k2,map_pars_fragment:X2,map_particle_fragment:W2,map_particle_pars_fragment:q2,metalnessmap_fragment:Y2,metalnessmap_pars_fragment:Z2,morphinstance_vertex:J2,morphcolor_vertex:K2,morphnormal_vertex:Q2,morphtarget_pars_vertex:j2,morphtarget_vertex:$2,normal_fragment_begin:tw,normal_fragment_maps:ew,normal_pars_fragment:nw,normal_pars_vertex:iw,normal_vertex:aw,normalmap_pars_fragment:sw,clearcoat_normal_fragment_begin:rw,clearcoat_normal_fragment_maps:ow,clearcoat_pars_fragment:lw,iridescence_pars_fragment:cw,opaque_fragment:uw,packing:fw,premultiplied_alpha_fragment:hw,project_vertex:dw,dithering_fragment:pw,dithering_pars_fragment:mw,roughnessmap_fragment:gw,roughnessmap_pars_fragment:xw,shadowmap_pars_fragment:vw,shadowmap_pars_vertex:_w,shadowmap_vertex:yw,shadowmask_pars_fragment:bw,skinbase_vertex:Sw,skinning_pars_vertex:Mw,skinning_vertex:Tw,skinnormal_vertex:Ew,specularmap_fragment:Aw,specularmap_pars_fragment:ww,tonemapping_fragment:Cw,tonemapping_pars_fragment:Rw,transmission_fragment:Dw,transmission_pars_fragment:Nw,uv_pars_fragment:Uw,uv_pars_vertex:Lw,uv_vertex:Iw,worldpos_vertex:Ow,background_vert:Pw,background_frag:zw,backgroundCube_vert:Bw,backgroundCube_frag:Fw,cube_vert:Vw,cube_frag:Hw,depth_vert:Gw,depth_frag:kw,distanceRGBA_vert:Xw,distanceRGBA_frag:Ww,equirect_vert:qw,equirect_frag:Yw,linedashed_vert:Zw,linedashed_frag:Jw,meshbasic_vert:Kw,meshbasic_frag:Qw,meshlambert_vert:jw,meshlambert_frag:$w,meshmatcap_vert:tC,meshmatcap_frag:eC,meshnormal_vert:nC,meshnormal_frag:iC,meshphong_vert:aC,meshphong_frag:sC,meshphysical_vert:rC,meshphysical_frag:oC,meshtoon_vert:lC,meshtoon_frag:cC,points_vert:uC,points_frag:fC,shadow_vert:hC,shadow_frag:dC,sprite_vert:pC,sprite_frag:mC},xt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},ga={basic:{uniforms:Rn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Rn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new le(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Rn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Rn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Rn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new le(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Rn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Rn([xt.points,xt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Rn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Rn([xt.common,xt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Rn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Rn([xt.sprite,xt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Rn([xt.common,xt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Rn([xt.lights,xt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ga.physical={uniforms:Rn([ga.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Sd={r:0,b:0,g:0},Rr=new ca,gC=new rn;function xC(e,t,n,i,a,s,r){let o=new le(0),l=s===!0?0:1,c,f,d=null,h=0,p=null;function v(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?n:t).get(b)),b}function y(x){let b=!1,C=v(x);C===null?u(o,l):C&&C.isColor&&(u(C,1),b=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(x,b){let C=v(b);C&&(C.isCubeTexture||C.mapping===Vc)?(f===void 0&&(f=new gi(new tl(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Cr(ga.backgroundCube.uniforms),vertexShader:ga.backgroundCube.vertexShader,fragmentShader:ga.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(f)),Rr.copy(b.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(gC.makeRotationFromEuler(Rr)),f.material.toneMapped=ge.getTransfer(C.colorSpace)!==Ce,(d!==C||h!==C.version||p!==e.toneMapping)&&(f.material.needsUpdate=!0,d=C,h=C.version,p=e.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new gi(new Mr(2,2),new jn({name:"BackgroundMaterial",uniforms:Cr(ga.background.uniforms),vertexShader:ga.background.vertexShader,fragmentShader:ga.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ge.getTransfer(C.colorSpace)!==Ce,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=C,h=C.version,p=e.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,b){x.getRGB(Sd,Rg(e)),i.buffers.color.setClear(Sd.r,Sd.g,Sd.b,b,r)}function g(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),l=b,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:y,addToRenderList:m,dispose:g}}function vC(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=h(null),s=a,r=!1;function o(S,U,B,k,Y){let $=!1,Q=d(k,B,U);s!==Q&&(s=Q,c(s.object)),$=p(S,k,B,Y),$&&v(S,k,B,Y),Y!==null&&t.update(Y,e.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,b(S,U,B,k),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return e.createVertexArray()}function c(S){return e.bindVertexArray(S)}function f(S){return e.deleteVertexArray(S)}function d(S,U,B){let k=B.wireframe===!0,Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let $=Y[U.id];$===void 0&&($={},Y[U.id]=$);let Q=$[k];return Q===void 0&&(Q=h(l()),$[k]=Q),Q}function h(S){let U=[],B=[],k=[];for(let Y=0;Y<n;Y++)U[Y]=0,B[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,U,B,k){let Y=s.attributes,$=U.attributes,Q=0,st=B.getAttributes();for(let G in st)if(st[G].location>=0){let ct=Y[G],vt=$[G];if(vt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),ct===void 0||ct.attribute!==vt||vt&&ct.data!==vt.data)return!0;Q++}return s.attributesNum!==Q||s.index!==k}function v(S,U,B,k){let Y={},$=U.attributes,Q=0,st=B.getAttributes();for(let G in st)if(st[G].location>=0){let ct=$[G];ct===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor));let vt={};vt.attribute=ct,ct&&ct.data&&(vt.data=ct.data),Y[G]=vt,Q++}s.attributes=Y,s.attributesNum=Q,s.index=k}function y(){let S=s.newAttributes;for(let U=0,B=S.length;U<B;U++)S[U]=0}function m(S){u(S,0)}function u(S,U){let B=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;B[S]=1,k[S]===0&&(e.enableVertexAttribArray(S),k[S]=1),Y[S]!==U&&(e.vertexAttribDivisor(S,U),Y[S]=U)}function g(){let S=s.newAttributes,U=s.enabledAttributes;for(let B=0,k=U.length;B<k;B++)U[B]!==S[B]&&(e.disableVertexAttribArray(B),U[B]=0)}function x(S,U,B,k,Y,$,Q){Q===!0?e.vertexAttribIPointer(S,U,B,Y,$):e.vertexAttribPointer(S,U,B,k,Y,$)}function b(S,U,B,k){y();let Y=k.attributes,$=B.getAttributes(),Q=U.defaultAttributeValues;for(let st in $){let G=$[st];if(G.location>=0){let ot=Y[st];if(ot===void 0&&(st==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),st==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){let ct=ot.normalized,vt=ot.itemSize,jt=t.get(ot);if(jt===void 0)continue;let ne=jt.buffer,Jt=jt.type,Yt=jt.bytesPerElement,Z=Jt===e.INT||Jt===e.UNSIGNED_INT||ot.gpuType===Hh;if(ot.isInterleavedBufferAttribute){let it=ot.data,lt=it.stride,Ut=ot.offset;if(it.isInstancedInterleavedBuffer){for(let gt=0;gt<G.locationSize;gt++)u(G.location+gt,it.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let gt=0;gt<G.locationSize;gt++)m(G.location+gt);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let gt=0;gt<G.locationSize;gt++)x(G.location+gt,vt/G.locationSize,Jt,ct,lt*Yt,(Ut+vt/G.locationSize*gt)*Yt,Z)}else{if(ot.isInstancedBufferAttribute){for(let it=0;it<G.locationSize;it++)u(G.location+it,ot.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let it=0;it<G.locationSize;it++)m(G.location+it);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let it=0;it<G.locationSize;it++)x(G.location+it,vt/G.locationSize,Jt,ct,vt*Yt,vt/G.locationSize*it*Yt,Z)}}else if(Q!==void 0){let ct=Q[st];if(ct!==void 0)switch(ct.length){case 2:e.vertexAttrib2fv(G.location,ct);break;case 3:e.vertexAttrib3fv(G.location,ct);break;case 4:e.vertexAttrib4fv(G.location,ct);break;default:e.vertexAttrib1fv(G.location,ct)}}}}g()}function C(){N();for(let S in i){let U=i[S];for(let B in U){let k=U[B];for(let Y in k)f(k[Y].object),delete k[Y];delete U[B]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;let U=i[S.id];for(let B in U){let k=U[B];for(let Y in k)f(k[Y].object),delete k[Y];delete U[B]}delete i[S.id]}function A(S){for(let U in i){let B=i[U];if(B[S.id]===void 0)continue;let k=B[S.id];for(let Y in k)f(k[Y].object),delete k[Y];delete B[S.id]}}function N(){E(),r=!0,s!==a&&(s=a,c(s.object))}function E(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function _C(e,t,n){let i;function a(c){i=c}function s(c,f){e.drawArrays(i,c,f),n.update(f,i,1)}function r(c,f,d){d!==0&&(e.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function o(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let v=0;v<d;v++)p+=f[v];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)r(c[v],f[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let v=0;for(let y=0;y<d;y++)v+=f[y]*h[y];n.update(v,i,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function yC(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(A){return!(A!==$n&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let N=A===wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ni&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ma&&!N)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(kt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,T=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:C,maxSamples:T}}function bC(e){let t=this,n=null,i=0,a=!1,s=!1,r=new ra,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||a;return a=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){let v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!a||v===null||v.length===0||s&&!m)s?f(null):c();else{let g=s?0:i,x=g*4,b=u.clippingState||null;l.value=b,b=f(v,h,x,p);for(let C=0;C!==x;++C)b[C]=n[C];u.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(d,h,p,v){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,v!==!0||m===null){let u=p+y*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,b=p;x!==y;++x,b+=4)r.copy(d[x]).applyMatrix4(g,o),r.normal.toArray(m,b),m[b+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function SC(e){let t=new WeakMap;function n(r,o){return o===Bh?r.mapping=Er:o===Fh&&(r.mapping=Ar),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===Bh||o===Fh)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new xh(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",a),n(c.texture,r.mapping)}else return null}}return r}function a(r){let o=r.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Bs=4,US=[.125,.215,.35,.446,.526,.582],Nr=20,MC=256,Zc=new nl,LS=new le,Lg=null,Ig=0,Og=0,Pg=!1,TC=new W,Td=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){let{size:r=256,position:o=TC}=s;Lg=this._renderer.getRenderTarget(),Ig=this._renderer.getActiveCubeFace(),Og=this._renderer.getActiveMipmapLevel(),Pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=PS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=OS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lg,Ig,Og),this._renderer.xr.enabled=Pg,t.scissorTest=!1,rl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Er||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lg=this._renderer.getRenderTarget(),Ig=this._renderer.getActiveCubeFace(),Og=this._renderer.getActiveMipmapLevel(),Pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:wr,format:$n,colorSpace:yr,depthBuffer:!1},a=IS(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=IS(t,n,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=EC(s)),this._blurMaterial=wC(s,t,n),this._ggxMaterial=AC(s,t,n)}return a}_compileMaterial(t){let n=new gi(new ua,t);this._renderer.compile(n,Zc)}_sceneToCubeUV(t,n,i,a,s){let l=new Zn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(LS),d.toneMapping=Ga,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gi(new tl,new Rc({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,u=!1,g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,u=!0):(m.color.copy(LS),u=!0);for(let x=0;x<6;x++){let b=x%3;b===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[x],s.y,s.z)):b===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[x]));let C=this._cubeSize;rl(a,b*C,x>2?C:0,C,C),d.setRenderTarget(a),u&&d.render(y,l),d.render(t,l)}d.toneMapping=p,d.autoClear=h,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,a=t.mapping===Er||t.mapping===Ar;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=PS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=OS());let s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Zc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){let a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),h=.05+c*.95,p=d*h,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-Bs?i-v+Bs:0),u=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=v-n,rl(s,m,u,3*y,2*y),a.setRenderTarget(s),a.render(o,Zc),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,rl(t,m,u,3*y,2*y),a.setRenderTarget(t),a.render(o,Zc)}_blur(t,n,i,a,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&re("blur direction must be either latitudinal or longitudinal!");let f=3,d=this._lodMeshes[a];d.material=c;let h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nr-1),y=s/v,m=isFinite(s)?1+Math.floor(f*y):Nr;m>Nr&&kt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nr}`);let u=[],g=0;for(let A=0;A<Nr;++A){let N=A/y,E=Math.exp(-N*N/2);u.push(E),A===0?g+=E:A<m&&(g+=2*E)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;let b=this._sizeLods[a],C=3*b*(a>x-Bs?a-x+Bs:0),T=4*(this._cubeSize-b);rl(n,C,T,3*b,2*b),l.setRenderTarget(n),l.render(d,Zc)}};function EC(e){let t=[],n=[],i=[],a=e,s=e-Bs+1+US.length;for(let r=0;r<s;r++){let o=Math.pow(2,a);t.push(o);let l=1/o;r>e-Bs?l=US[r-e+Bs-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,v=6,y=3,m=2,u=1,g=new Float32Array(y*v*p),x=new Float32Array(m*v*p),b=new Float32Array(u*v*p);for(let T=0;T<p;T++){let A=T%3*2/3-1,N=T>2?0:-1,E=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];g.set(E,y*v*T),x.set(h,m*v*T);let S=[T,T,T,T,T,T];b.set(S,u*v*T)}let C=new ua;C.setAttribute("position",new Jn(g,y)),C.setAttribute("uv",new Jn(x,m)),C.setAttribute("faceIndex",new Jn(b,u)),i.push(new gi(C,null)),a>Bs&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function IS(e,t,n){let i=new la(e,t,n);return i.texture.mapping=Vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function AC(e,t,n){return new jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ad(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function wC(e,t,n){let i=new Float32Array(Nr),a=new W(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function OS(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function PS(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Ad(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CC(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Bh||l===Fh,f=l===Er||l===Ar;if(c||f){let d=t.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Td(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||f&&p&&a(p)?(n===null&&(n=new Td(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function a(o){let l=0,c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function RC(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&Qo("WebGLRenderer: "+i+" extension not supported."),a}}}function DC(e,t,n,i){let a={},s=new WeakMap;function r(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",r),delete a[h.id];let p=s.get(h);p&&(t.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return a[h.id]===!0||(h.addEventListener("dispose",r),a[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,v=d.attributes.position,y=0;if(p!==null){let g=p.array;y=p.version;for(let x=0,b=g.length;x<b;x+=3){let C=g[x+0],T=g[x+1],A=g[x+2];h.push(C,T,T,A,A,C)}}else if(v!==void 0){let g=v.array;y=v.version;for(let x=0,b=g.length/3-1;x<b;x+=3){let C=x+0,T=x+1,A=x+2;h.push(C,T,T,A,A,C)}}else return;let m=new(wg(h)?Nc:Dc)(h,1);m.version=y;let u=s.get(d);u&&t.remove(u),s.set(d,m)}function f(d){let h=s.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function NC(e,t,n){let i;function a(h){i=h}let s,r;function o(h){s=h.type,r=h.bytesPerElement}function l(h,p){e.drawElements(i,p,s,h*r),n.update(p,i,1)}function c(h,p,v){v!==0&&(e.drawElementsInstanced(i,p,s,h*r,v),n.update(p,i,v))}function f(h,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];n.update(m,i,1)}function d(h,p,v,y){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/r,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,v);let u=0;for(let g=0;g<v;g++)u+=p[g]*y[g];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function UC(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:re("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function LC(e,t,n){let i=new WeakMap,a=new We;function s(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0,h=i.get(o);if(h===void 0||h.count!==d){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],x=0;p===!0&&(x=1),v===!0&&(x=2),y===!0&&(x=3);let b=o.attributes.position.count*x,C=1;b>t.maxTextureSize&&(C=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*C*4*d),A=new Ls(T,b,C,d);A.type=ma,A.needsUpdate=!0;let N=x*4;for(let S=0;S<d;S++){let U=m[S],B=u[S],k=g[S],Y=b*C*4*S;for(let $=0;$<U.count;$++){let Q=$*N;p===!0&&(a.fromBufferAttribute(U,$),T[Y+Q+0]=a.x,T[Y+Q+1]=a.y,T[Y+Q+2]=a.z,T[Y+Q+3]=0),v===!0&&(a.fromBufferAttribute(B,$),T[Y+Q+4]=a.x,T[Y+Q+5]=a.y,T[Y+Q+6]=a.z,T[Y+Q+7]=0),y===!0&&(a.fromBufferAttribute(k,$),T[Y+Q+8]=a.x,T[Y+Q+9]=a.y,T[Y+Q+10]=a.z,T[Y+Q+11]=k.itemSize===4?a.w:1)}}h={count:d,texture:A,size:new Me(b,C)},i.set(o,h),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function IC(e,t,n,i){let a=new WeakMap;function s(l){let c=i.render.frame,f=l.geometry,d=t.get(l,f);if(a.get(d)!==c&&(t.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return d}function r(){a=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}var eM=new Qn,zS=new Pc(1,1),nM=new Ls,iM=new ph,aM=new Lc,BS=[],FS=[],VS=new Float32Array(16),HS=new Float32Array(9),GS=new Float32Array(4);function ll(e,t,n){let i=e[0];if(i<=0||i>0)return e;let a=t*n,s=BS[a];if(s===void 0&&(s=new Float32Array(a),BS[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function on(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function ln(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function wd(e,t){let n=FS[t];n===void 0&&(n=new Int32Array(t),FS[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function OC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function PC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(on(n,t))return;e.uniform2fv(this.addr,t),ln(n,t)}}function zC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(on(n,t))return;e.uniform3fv(this.addr,t),ln(n,t)}}function BC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(on(n,t))return;e.uniform4fv(this.addr,t),ln(n,t)}}function FC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(on(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ln(n,t)}else{if(on(n,i))return;GS.set(i),e.uniformMatrix2fv(this.addr,!1,GS),ln(n,i)}}function VC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(on(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ln(n,t)}else{if(on(n,i))return;HS.set(i),e.uniformMatrix3fv(this.addr,!1,HS),ln(n,i)}}function HC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(on(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ln(n,t)}else{if(on(n,i))return;VS.set(i),e.uniformMatrix4fv(this.addr,!1,VS),ln(n,i)}}function GC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function kC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(on(n,t))return;e.uniform2iv(this.addr,t),ln(n,t)}}function XC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(on(n,t))return;e.uniform3iv(this.addr,t),ln(n,t)}}function WC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(on(n,t))return;e.uniform4iv(this.addr,t),ln(n,t)}}function qC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function YC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(on(n,t))return;e.uniform2uiv(this.addr,t),ln(n,t)}}function ZC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(on(n,t))return;e.uniform3uiv(this.addr,t),ln(n,t)}}function JC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(on(n,t))return;e.uniform4uiv(this.addr,t),ln(n,t)}}function KC(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(zS.compareFunction=Eg,s=zS):s=eM,n.setTexture2D(t||s,a)}function QC(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||iM,a)}function jC(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||aM,a)}function $C(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||nM,a)}function tR(e){switch(e){case 5126:return OC;case 35664:return PC;case 35665:return zC;case 35666:return BC;case 35674:return FC;case 35675:return VC;case 35676:return HC;case 5124:case 35670:return GC;case 35667:case 35671:return kC;case 35668:case 35672:return XC;case 35669:case 35673:return WC;case 5125:return qC;case 36294:return YC;case 36295:return ZC;case 36296:return JC;case 35678:case 36198:case 36298:case 36306:case 35682:return KC;case 35679:case 36299:case 36307:return QC;case 35680:case 36300:case 36308:case 36293:return jC;case 36289:case 36303:case 36311:case 36292:return $C}}function eR(e,t){e.uniform1fv(this.addr,t)}function nR(e,t){let n=ll(t,this.size,2);e.uniform2fv(this.addr,n)}function iR(e,t){let n=ll(t,this.size,3);e.uniform3fv(this.addr,n)}function aR(e,t){let n=ll(t,this.size,4);e.uniform4fv(this.addr,n)}function sR(e,t){let n=ll(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function rR(e,t){let n=ll(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function oR(e,t){let n=ll(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function lR(e,t){e.uniform1iv(this.addr,t)}function cR(e,t){e.uniform2iv(this.addr,t)}function uR(e,t){e.uniform3iv(this.addr,t)}function fR(e,t){e.uniform4iv(this.addr,t)}function hR(e,t){e.uniform1uiv(this.addr,t)}function dR(e,t){e.uniform2uiv(this.addr,t)}function pR(e,t){e.uniform3uiv(this.addr,t)}function mR(e,t){e.uniform4uiv(this.addr,t)}function gR(e,t,n){let i=this.cache,a=t.length,s=wd(n,a);on(i,s)||(e.uniform1iv(this.addr,s),ln(i,s));for(let r=0;r!==a;++r)n.setTexture2D(t[r]||eM,s[r])}function xR(e,t,n){let i=this.cache,a=t.length,s=wd(n,a);on(i,s)||(e.uniform1iv(this.addr,s),ln(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||iM,s[r])}function vR(e,t,n){let i=this.cache,a=t.length,s=wd(n,a);on(i,s)||(e.uniform1iv(this.addr,s),ln(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||aM,s[r])}function _R(e,t,n){let i=this.cache,a=t.length,s=wd(n,a);on(i,s)||(e.uniform1iv(this.addr,s),ln(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||nM,s[r])}function yR(e){switch(e){case 5126:return eR;case 35664:return nR;case 35665:return iR;case 35666:return aR;case 35674:return sR;case 35675:return rR;case 35676:return oR;case 5124:case 35670:return lR;case 35667:case 35671:return cR;case 35668:case 35672:return uR;case 35669:case 35673:return fR;case 5125:return hR;case 36294:return dR;case 36295:return pR;case 36296:return mR;case 35678:case 36198:case 36298:case 36306:case 35682:return gR;case 35679:case 36299:case 36307:return xR;case 35680:case 36300:case 36308:case 36293:return vR;case 36289:case 36303:case 36311:case 36292:return _R}}var Bg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tR(n.type)}},Fg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yR(n.type)}},Vg=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let a=this.seq;for(let s=0,r=a.length;s!==r;++s){let o=a[s];o.setValue(t,n[o.id],i)}}},zg=/(\w+)(\])?(\[|\.)?/g;function kS(e,t){e.seq.push(t),e.map[t.id]=t}function bR(e,t,n){let i=e.name,a=i.length;for(zg.lastIndex=0;;){let s=zg.exec(i),r=zg.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){kS(n,c===void 0?new Bg(o,e,t):new Fg(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Vg(o),kS(n,d)),n=d}}}var ol=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let s=t.getActiveUniform(n,a),r=t.getUniformLocation(n,s.name);bR(s,r,this)}}setValue(t,n,i,a){let s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){let a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){let o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){let i=[];for(let a=0,s=t.length;a!==s;++a){let r=t[a];r.id in n&&i.push(r)}return i}};function XS(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var SR=37297,MR=0;function TR(e,t){let n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var WS=new Qt;function ER(e){ge._getMatrix(WS,ge.workingColorSpace,e);let t=`mat3( ${WS.elements.map(n=>n.toFixed(4))} )`;switch(ge.getTransfer(e)){case Ec:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function qS(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+TR(e.getShaderSource(t),o)}else return s}function AR(e,t){let n=ER(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function wR(e,t){let n;switch(t){case lS:n="Linear";break;case cS:n="Reinhard";break;case uS:n="Cineon";break;case fS:n="ACESFilmic";break;case dS:n="AgX";break;case pS:n="Neutral";break;case hS:n="Custom";break;default:kt("WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Md=new W;function CR(){ge.getLuminanceCoefficients(Md);let e=Md.x.toFixed(4),t=Md.y.toFixed(4),n=Md.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jc).join(`
`)}function DR(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function NR(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let s=e.getActiveAttrib(t,a),r=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Jc(e){return e!==""}function YS(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ZS(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var UR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hg(e){return e.replace(UR,IR)}var LR=new Map;function IR(e,t){let n=te[t];if(n===void 0){let i=LR.get(t);if(i!==void 0)n=te[i],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Hg(n)}var OR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function JS(e){return e.replace(OR,PR)}function PR(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function KS(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zR(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===hg?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===H1?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===fa&&(t="SHADOWMAP_TYPE_VSM"),t}function BR(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Er:case Ar:t="ENVMAP_TYPE_CUBE";break;case Vc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function FR(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}function VR(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case gg:t="ENVMAP_BLENDING_MULTIPLY";break;case rS:t="ENVMAP_BLENDING_MIX";break;case oS:t="ENVMAP_BLENDING_ADD";break}return t}function HR(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function GR(e,t,n,i){let a=e.getContext(),s=n.defines,r=n.vertexShader,o=n.fragmentShader,l=zR(n),c=BR(n),f=FR(n),d=VR(n),h=HR(n),p=RR(n),v=DR(s),y=a.createProgram(),m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Jc).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Jc).join(`
`),u.length>0&&(u+=`
`)):(m=[KS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jc).join(`
`),u=[KS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ga?"#define TONE_MAPPING":"",n.toneMapping!==Ga?te.tonemapping_pars_fragment:"",n.toneMapping!==Ga?wR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,AR("linearToOutputTexel",n.outputColorSpace),CR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jc).join(`
`)),r=Hg(r),r=YS(r,n),r=ZS(r,n),o=Hg(o),o=YS(o,n),o=ZS(o,n),r=JS(r),o=JS(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Ag?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ag?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let x=g+m+r,b=g+u+o,C=XS(a,a.VERTEX_SHADER,x),T=XS(a,a.FRAGMENT_SHADER,b);a.attachShader(y,C),a.attachShader(y,T),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function A(U){if(e.debug.checkShaderErrors){let B=a.getProgramInfoLog(y)||"",k=a.getShaderInfoLog(C)||"",Y=a.getShaderInfoLog(T)||"",$=B.trim(),Q=k.trim(),st=Y.trim(),G=!0,ot=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,C,T);else{let ct=qS(a,C,"vertex"),vt=qS(a,T,"fragment");re("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+$+`
`+ct+`
`+vt)}else $!==""?kt("WebGLProgram: Program Info Log:",$):(Q===""||st==="")&&(ot=!1);ot&&(U.diagnostics={runnable:G,programLog:$,vertexShader:{log:Q,prefix:m},fragmentShader:{log:st,prefix:u}})}a.deleteShader(C),a.deleteShader(T),N=new ol(a,y),E=NR(a,y)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(y,SR)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MR++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var kR=0,Gg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new kg(t),n.set(t,i)),i}},kg=class{constructor(t){this.id=kR++,this.code=t,this.usedTimes=0}};function XR(e,t,n,i,a,s,r){let o=new Cc,l=new Gg,c=new Set,f=[],d=a.logarithmicDepthBuffer,h=a.vertexTextures,p=a.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,U,B,k){let Y=B.fog,$=k.geometry,Q=E.isMeshStandardMaterial?B.environment:null,st=(E.isMeshStandardMaterial?n:t).get(E.envMap||Q),G=st&&st.mapping===Vc?st.image.height:null,ot=v[E.type];E.precision!==null&&(p=a.getMaxPrecision(E.precision),p!==E.precision&&kt("WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,vt=ct!==void 0?ct.length:0,jt=0;$.morphAttributes.position!==void 0&&(jt=1),$.morphAttributes.normal!==void 0&&(jt=2),$.morphAttributes.color!==void 0&&(jt=3);let ne,Jt,Yt,Z;if(ot){let pe=ga[ot];ne=pe.vertexShader,Jt=pe.fragmentShader}else ne=E.vertexShader,Jt=E.fragmentShader,l.update(E),Yt=l.getVertexShaderID(E),Z=l.getFragmentShaderID(E);let it=e.getRenderTarget(),lt=e.state.buffers.depth.getReversed(),Ut=k.isInstancedMesh===!0,gt=k.isBatchedMesh===!0,Xt=!!E.map,He=!!E.matcap,Bt=!!st,de=!!E.aoMap,R=!!E.lightMap,Zt=!!E.bumpMap,Ht=!!E.normalMap,he=!!E.displacementMap,At=!!E.emissiveMap,Ft=!!E.metalnessMap,Mt=!!E.roughnessMap,bt=E.anisotropy>0,w=E.clearcoat>0,_=E.dispersion>0,P=E.iridescence>0,K=E.sheen>0,nt=E.transmission>0,F=bt&&!!E.anisotropyMap,Et=w&&!!E.clearcoatMap,pt=w&&!!E.clearcoatNormalMap,Tt=w&&!!E.clearcoatRoughnessMap,Nt=P&&!!E.iridescenceMap,at=P&&!!E.iridescenceThicknessMap,ft=K&&!!E.sheenColorMap,It=K&&!!E.sheenRoughnessMap,Dt=!!E.specularMap,_t=!!E.specularColorMap,Pt=!!E.specularIntensityMap,D=nt&&!!E.transmissionMap,dt=nt&&!!E.thicknessMap,ht=!!E.gradientMap,et=!!E.alphaMap,z=E.alphaTest>0,tt=!!E.alphaHash,Ct=!!E.extensions,zt=Ga;E.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(zt=e.toneMapping);let xe={shaderID:ot,shaderType:E.type,shaderName:E.name,vertexShader:ne,fragmentShader:Jt,defines:E.defines,customVertexShaderID:Yt,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:gt,batchingColor:gt&&k._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&k.instanceColor!==null,instancingMorph:Ut&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:it===null?e.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:yr,alphaToCoverage:!!E.alphaToCoverage,map:Xt,matcap:He,envMap:Bt,envMapMode:Bt&&st.mapping,envMapCubeUVHeight:G,aoMap:de,lightMap:R,bumpMap:Zt,normalMap:Ht,displacementMap:h&&he,emissiveMap:At,normalMapObjectSpace:Ht&&E.normalMapType===_S,normalMapTangentSpace:Ht&&E.normalMapType===vS,metalnessMap:Ft,roughnessMap:Mt,anisotropy:bt,anisotropyMap:F,clearcoat:w,clearcoatMap:Et,clearcoatNormalMap:pt,clearcoatRoughnessMap:Tt,dispersion:_,iridescence:P,iridescenceMap:Nt,iridescenceThicknessMap:at,sheen:K,sheenColorMap:ft,sheenRoughnessMap:It,specularMap:Dt,specularColorMap:_t,specularIntensityMap:Pt,transmission:nt,transmissionMap:D,thicknessMap:dt,gradientMap:ht,opaque:E.transparent===!1&&E.blending===vr&&E.alphaToCoverage===!1,alphaMap:et,alphaTest:z,alphaHash:tt,combine:E.combine,mapUv:Xt&&y(E.map.channel),aoMapUv:de&&y(E.aoMap.channel),lightMapUv:R&&y(E.lightMap.channel),bumpMapUv:Zt&&y(E.bumpMap.channel),normalMapUv:Ht&&y(E.normalMap.channel),displacementMapUv:he&&y(E.displacementMap.channel),emissiveMapUv:At&&y(E.emissiveMap.channel),metalnessMapUv:Ft&&y(E.metalnessMap.channel),roughnessMapUv:Mt&&y(E.roughnessMap.channel),anisotropyMapUv:F&&y(E.anisotropyMap.channel),clearcoatMapUv:Et&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:pt&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:at&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(E.sheenRoughnessMap.channel),specularMapUv:Dt&&y(E.specularMap.channel),specularColorMapUv:_t&&y(E.specularColorMap.channel),specularIntensityMapUv:Pt&&y(E.specularIntensityMap.channel),transmissionMapUv:D&&y(E.transmissionMap.channel),thicknessMapUv:dt&&y(E.thicknessMap.channel),alphaMapUv:et&&y(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ht||bt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(Xt||et),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:lt,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:jt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:zt,decodeVideoTexture:Xt&&E.map.isVideoTexture===!0&&ge.getTransfer(E.map.colorSpace)===Ce,decodeVideoTextureEmissive:At&&E.emissiveMap.isVideoTexture===!0&&ge.getTransfer(E.emissiveMap.colorSpace)===Ce,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ha,flipSided:E.side===Pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ct&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&E.extensions.multiDraw===!0||gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function u(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)S.push(U),S.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(g(S,E),x(S,E),S.push(e.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function g(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function b(E){let S=v[E.type],U;if(S){let B=ga[S];U=DS.clone(B.uniforms)}else U=E.uniforms;return U}function C(E,S){let U;for(let B=0,k=f.length;B<k;B++){let Y=f[B];if(Y.cacheKey===S){U=Y,++U.usedTimes;break}}return U===void 0&&(U=new GR(e,S,E,s),f.push(U)),U}function T(E){if(--E.usedTimes===0){let S=f.indexOf(E);f[S]=f[f.length-1],f.pop(),E.destroy()}}function A(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:b,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:f,dispose:N}}function WR(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function qR(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function QS(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function jS(){let e=[],t=0,n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(d,h,p,v,y,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:y,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=y,u.group=m),t++,u}function o(d,h,p,v,y,m){let u=r(d,h,p,v,y,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(d,h,p,v,y,m){let u=r(d,h,p,v,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||qR),i.length>1&&i.sort(h||QS),a.length>1&&a.sort(h||QS)}function f(){for(let d=t,h=e.length;d<h;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:f,sort:c}}function YR(){let e=new WeakMap;function t(i,a){let s=e.get(i),r;return s===void 0?(r=new jS,e.set(i,[r])):a>=s.length?(r=new jS,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function ZR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new W,color:new le};break;case"SpotLight":n={position:new W,direction:new W,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new le,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new le,groundColor:new le};break;case"RectAreaLight":n={color:new le,position:new W,halfWidth:new W,halfHeight:new W};break}return e[t.id]=n,n}}}function JR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var KR=0;function QR(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function jR(e){let t=new ZR,n=JR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);let a=new W,s=new rn,r=new rn;function o(c){let f=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,y=0,m=0,u=0,g=0,x=0,b=0,C=0,T=0,A=0;c.sort(QR);for(let E=0,S=c.length;E<S;E++){let U=c[E],B=U.color,k=U.intensity,Y=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=B.r*k,d+=B.g*k,h+=B.b*k;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(U.sh.coefficients[Q],k);A++}else if(U.isDirectionalLight){let Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let st=U.shadow,G=n.get(U);G.shadowIntensity=st.intensity,G.shadowBias=st.bias,G.shadowNormalBias=st.normalBias,G.shadowRadius=st.radius,G.shadowMapSize=st.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=U.shadow.matrix,g++}i.directional[p]=Q,p++}else if(U.isSpotLight){let Q=t.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(B).multiplyScalar(k),Q.distance=Y,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,i.spot[y]=Q;let st=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,st.updateMatrices(U),U.castShadow&&T++),i.spotLightMatrix[y]=st.matrix,U.castShadow){let G=n.get(U);G.shadowIntensity=st.intensity,G.shadowBias=st.bias,G.shadowNormalBias=st.normalBias,G.shadowRadius=st.radius,G.shadowMapSize=st.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=$,b++}y++}else if(U.isRectAreaLight){let Q=t.get(U);Q.color.copy(B).multiplyScalar(k),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=Q,m++}else if(U.isPointLight){let Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){let st=U.shadow,G=n.get(U);G.shadowIntensity=st.intensity,G.shadowBias=st.bias,G.shadowNormalBias=st.normalBias,G.shadowRadius=st.radius,G.shadowMapSize=st.mapSize,G.shadowCameraNear=st.camera.near,G.shadowCameraFar=st.camera.far,i.pointShadow[v]=G,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=U.shadow.matrix,x++}i.point[v]=Q,v++}else if(U.isHemisphereLight){let Q=t.get(U);Q.skyColor.copy(U.color).multiplyScalar(k),Q.groundColor.copy(U.groundColor).multiplyScalar(k),i.hemi[u]=Q,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;let N=i.hash;(N.directionalLength!==p||N.pointLength!==v||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==g||N.numPointShadows!==x||N.numSpotShadows!==b||N.numSpotMaps!==C||N.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=b+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,N.directionalLength=p,N.pointLength=v,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=g,N.numPointShadows=x,N.numSpotShadows=b,N.numSpotMaps=C,N.numLightProbes=A,i.version=KR++)}function l(c,f){let d=0,h=0,p=0,v=0,y=0,m=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){let x=c[u];if(x.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),d++}else if(x.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let b=i.rectArea[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),r.identity(),s.copy(x.matrixWorld),s.premultiply(m),r.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),v++}else if(x.isPointLight){let b=i.point[h];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){let b=i.hemi[y];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function $S(e){let t=new jR(e),n=[],i=[];function a(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function r(f){i.push(f)}function o(){t.setup(n)}function l(f){t.setupView(n,f)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function $R(e){let t=new WeakMap;function n(a,s=0){let r=t.get(a),o;return r===void 0?(o=new $S(e),t.set(a,[o])):s>=r.length?(o=new $S(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var tD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nD(e,t,n){let i=new Oc,a=new Me,s=new Me,r=new We,o=new _h({depthPacking:xS}),l=new yh,c={},f=n.maxTextureSize,d={[Fa]:Pn,[Pn]:Fa,[ha]:ha},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:tD,fragmentShader:eD}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let v=new ua;v.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new gi(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hg;let u=this.type;this.render=function(T,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let E=e.getRenderTarget(),S=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),B=e.state;B.setBlending(da),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=u!==fa&&this.type===fa,Y=u===fa&&this.type!==fa;for(let $=0,Q=T.length;$<Q;$++){let st=T[$],G=st.shadow;if(G===void 0){kt("WebGLShadowMap:",st,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);let ot=G.getFrameExtents();if(a.multiply(ot),s.copy(G.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/ot.x),a.x=s.x*ot.x,G.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/ot.y),a.y=s.y*ot.y,G.mapSize.y=s.y)),G.map===null||k===!0||Y===!0){let vt=this.type!==fa?{minFilter:Kn,magFilter:Kn}:{};G.map!==null&&G.map.dispose(),G.map=new la(a.x,a.y,vt),G.map.texture.name=st.name+".shadowMap",G.camera.updateProjectionMatrix()}e.setRenderTarget(G.map),e.clear();let ct=G.getViewportCount();for(let vt=0;vt<ct;vt++){let jt=G.getViewport(vt);r.set(s.x*jt.x,s.y*jt.y,s.x*jt.z,s.y*jt.w),B.viewport(r),G.updateMatrices(st,vt),i=G.getFrustum(),b(A,N,G.camera,st,this.type)}G.isPointLightShadow!==!0&&this.type===fa&&g(G,N),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,S,U)};function g(T,A){let N=t.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new la(a.x,a.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(A,null,N,h,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(A,null,N,p,y,null)}function x(T,A,N,E){let S=null,U=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)S=U;else if(S=N.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let B=S.uuid,k=A.uuid,Y=c[B];Y===void 0&&(Y={},c[B]=Y);let $=Y[k];$===void 0&&($=S.clone(),Y[k]=$,A.addEventListener("dispose",C)),S=$}if(S.visible=A.visible,S.wireframe=A.wireframe,E===fa?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=e.properties.get(S);B.light=N}return S}function b(T,A,N,E,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===fa)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);let k=t.update(T),Y=T.material;if(Array.isArray(Y)){let $=k.groups;for(let Q=0,st=$.length;Q<st;Q++){let G=$[Q],ot=Y[G.materialIndex];if(ot&&ot.visible){let ct=x(T,ot,E,S);T.onBeforeShadow(e,T,A,N,k,ct,G),e.renderBufferDirect(N,null,k,ct,T,G),T.onAfterShadow(e,T,A,N,k,ct,G)}}}else if(Y.visible){let $=x(T,Y,E,S);T.onBeforeShadow(e,T,A,N,k,$,null),e.renderBufferDirect(N,null,k,$,T,null),T.onAfterShadow(e,T,A,N,k,$,null)}}let B=T.children;for(let k=0,Y=B.length;k<Y;k++)b(B[k],A,N,E,S)}function C(T){T.target.removeEventListener("dispose",C);for(let N in c){let E=c[N],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}var iD={[Nh]:Uh,[Lh]:Ph,[Ih]:zh,[_r]:Oh,[Uh]:Nh,[Ph]:Lh,[zh]:Ih,[Oh]:_r};function aD(e,t){function n(){let D=!1,dt=new We,ht=null,et=new We(0,0,0,0);return{setMask:function(z){ht!==z&&!D&&(e.colorMask(z,z,z,z),ht=z)},setLocked:function(z){D=z},setClear:function(z,tt,Ct,zt,xe){xe===!0&&(z*=zt,tt*=zt,Ct*=zt),dt.set(z,tt,Ct,zt),et.equals(dt)===!1&&(e.clearColor(z,tt,Ct,zt),et.copy(dt))},reset:function(){D=!1,ht=null,et.set(-1,0,0,0)}}}function i(){let D=!1,dt=!1,ht=null,et=null,z=null;return{setReversed:function(tt){if(dt!==tt){let Ct=t.get("EXT_clip_control");tt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),dt=tt;let zt=z;z=null,this.setClear(zt)}},getReversed:function(){return dt},setTest:function(tt){tt?it(e.DEPTH_TEST):lt(e.DEPTH_TEST)},setMask:function(tt){ht!==tt&&!D&&(e.depthMask(tt),ht=tt)},setFunc:function(tt){if(dt&&(tt=iD[tt]),et!==tt){switch(tt){case Nh:e.depthFunc(e.NEVER);break;case Uh:e.depthFunc(e.ALWAYS);break;case Lh:e.depthFunc(e.LESS);break;case _r:e.depthFunc(e.LEQUAL);break;case Ih:e.depthFunc(e.EQUAL);break;case Oh:e.depthFunc(e.GEQUAL);break;case Ph:e.depthFunc(e.GREATER);break;case zh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}et=tt}},setLocked:function(tt){D=tt},setClear:function(tt){z!==tt&&(dt&&(tt=1-tt),e.clearDepth(tt),z=tt)},reset:function(){D=!1,ht=null,et=null,z=null,dt=!1}}}function a(){let D=!1,dt=null,ht=null,et=null,z=null,tt=null,Ct=null,zt=null,xe=null;return{setTest:function(pe){D||(pe?it(e.STENCIL_TEST):lt(e.STENCIL_TEST))},setMask:function(pe){dt!==pe&&!D&&(e.stencilMask(pe),dt=pe)},setFunc:function(pe,vi,ti){(ht!==pe||et!==vi||z!==ti)&&(e.stencilFunc(pe,vi,ti),ht=pe,et=vi,z=ti)},setOp:function(pe,vi,ti){(tt!==pe||Ct!==vi||zt!==ti)&&(e.stencilOp(pe,vi,ti),tt=pe,Ct=vi,zt=ti)},setLocked:function(pe){D=pe},setClear:function(pe){xe!==pe&&(e.clearStencil(pe),xe=pe)},reset:function(){D=!1,dt=null,ht=null,et=null,z=null,tt=null,Ct=null,zt=null,xe=null}}}let s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap,f={},d={},h=new WeakMap,p=[],v=null,y=!1,m=null,u=null,g=null,x=null,b=null,C=null,T=null,A=new le(0,0,0),N=0,E=!1,S=null,U=null,B=null,k=null,Y=null,$=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,st=0,G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(G)[1]),Q=st>=1):G.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Q=st>=2);let ot=null,ct={},vt=e.getParameter(e.SCISSOR_BOX),jt=e.getParameter(e.VIEWPORT),ne=new We().fromArray(vt),Jt=new We().fromArray(jt);function Yt(D,dt,ht,et){let z=new Uint8Array(4),tt=e.createTexture();e.bindTexture(D,tt),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ct=0;Ct<ht;Ct++)D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?e.texImage3D(dt,0,e.RGBA,1,1,et,0,e.RGBA,e.UNSIGNED_BYTE,z):e.texImage2D(dt+Ct,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,z);return tt}let Z={};Z[e.TEXTURE_2D]=Yt(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=Yt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[e.TEXTURE_2D_ARRAY]=Yt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Z[e.TEXTURE_3D]=Yt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),it(e.DEPTH_TEST),r.setFunc(_r),Zt(!1),Ht(fg),it(e.CULL_FACE),de(da);function it(D){f[D]!==!0&&(e.enable(D),f[D]=!0)}function lt(D){f[D]!==!1&&(e.disable(D),f[D]=!1)}function Ut(D,dt){return d[D]!==dt?(e.bindFramebuffer(D,dt),d[D]=dt,D===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=dt),D===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=dt),!0):!1}function gt(D,dt){let ht=p,et=!1;if(D){ht=h.get(dt),ht===void 0&&(ht=[],h.set(dt,ht));let z=D.textures;if(ht.length!==z.length||ht[0]!==e.COLOR_ATTACHMENT0){for(let tt=0,Ct=z.length;tt<Ct;tt++)ht[tt]=e.COLOR_ATTACHMENT0+tt;ht.length=z.length,et=!0}}else ht[0]!==e.BACK&&(ht[0]=e.BACK,et=!0);et&&e.drawBuffers(ht)}function Xt(D){return v!==D?(e.useProgram(D),v=D,!0):!1}let He={[Us]:e.FUNC_ADD,[k1]:e.FUNC_SUBTRACT,[X1]:e.FUNC_REVERSE_SUBTRACT};He[W1]=e.MIN,He[q1]=e.MAX;let Bt={[Y1]:e.ZERO,[Z1]:e.ONE,[J1]:e.SRC_COLOR,[rh]:e.SRC_ALPHA,[eS]:e.SRC_ALPHA_SATURATE,[$1]:e.DST_COLOR,[Q1]:e.DST_ALPHA,[K1]:e.ONE_MINUS_SRC_COLOR,[oh]:e.ONE_MINUS_SRC_ALPHA,[tS]:e.ONE_MINUS_DST_COLOR,[j1]:e.ONE_MINUS_DST_ALPHA,[nS]:e.CONSTANT_COLOR,[iS]:e.ONE_MINUS_CONSTANT_COLOR,[aS]:e.CONSTANT_ALPHA,[sS]:e.ONE_MINUS_CONSTANT_ALPHA};function de(D,dt,ht,et,z,tt,Ct,zt,xe,pe){if(D===da){y===!0&&(lt(e.BLEND),y=!1);return}if(y===!1&&(it(e.BLEND),y=!0),D!==G1){if(D!==m||pe!==E){if((u!==Us||b!==Us)&&(e.blendEquation(e.FUNC_ADD),u=Us,b=Us),pe)switch(D){case vr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case dg:e.blendFunc(e.ONE,e.ONE);break;case pg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case mg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:re("WebGLState: Invalid blending: ",D);break}else switch(D){case vr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case dg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case pg:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mg:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",D);break}g=null,x=null,C=null,T=null,A.set(0,0,0),N=0,m=D,E=pe}return}z=z||dt,tt=tt||ht,Ct=Ct||et,(dt!==u||z!==b)&&(e.blendEquationSeparate(He[dt],He[z]),u=dt,b=z),(ht!==g||et!==x||tt!==C||Ct!==T)&&(e.blendFuncSeparate(Bt[ht],Bt[et],Bt[tt],Bt[Ct]),g=ht,x=et,C=tt,T=Ct),(zt.equals(A)===!1||xe!==N)&&(e.blendColor(zt.r,zt.g,zt.b,xe),A.copy(zt),N=xe),m=D,E=!1}function R(D,dt){D.side===ha?lt(e.CULL_FACE):it(e.CULL_FACE);let ht=D.side===Pn;dt&&(ht=!ht),Zt(ht),D.blending===vr&&D.transparent===!1?de(da):de(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);let et=D.stencilWrite;o.setTest(et),et&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),At(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?it(e.SAMPLE_ALPHA_TO_COVERAGE):lt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(D){S!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),S=D)}function Ht(D){D!==F1?(it(e.CULL_FACE),D!==U&&(D===fg?e.cullFace(e.BACK):D===V1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):lt(e.CULL_FACE),U=D}function he(D){D!==B&&(Q&&e.lineWidth(D),B=D)}function At(D,dt,ht){D?(it(e.POLYGON_OFFSET_FILL),(k!==dt||Y!==ht)&&(e.polygonOffset(dt,ht),k=dt,Y=ht)):lt(e.POLYGON_OFFSET_FILL)}function Ft(D){D?it(e.SCISSOR_TEST):lt(e.SCISSOR_TEST)}function Mt(D){D===void 0&&(D=e.TEXTURE0+$-1),ot!==D&&(e.activeTexture(D),ot=D)}function bt(D,dt,ht){ht===void 0&&(ot===null?ht=e.TEXTURE0+$-1:ht=ot);let et=ct[ht];et===void 0&&(et={type:void 0,texture:void 0},ct[ht]=et),(et.type!==D||et.texture!==dt)&&(ot!==ht&&(e.activeTexture(ht),ot=ht),e.bindTexture(D,dt||Z[D]),et.type=D,et.texture=dt)}function w(){let D=ct[ot];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{e.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function K(){try{e.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function nt(){try{e.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function F(){try{e.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Et(){try{e.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function pt(){try{e.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Tt(){try{e.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function Nt(){try{e.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function at(){try{e.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ft(D){ne.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),ne.copy(D))}function It(D){Jt.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),Jt.copy(D))}function Dt(D,dt){let ht=c.get(dt);ht===void 0&&(ht=new WeakMap,c.set(dt,ht));let et=ht.get(D);et===void 0&&(et=e.getUniformBlockIndex(dt,D.name),ht.set(D,et))}function _t(D,dt){let et=c.get(dt).get(D);l.get(dt)!==et&&(e.uniformBlockBinding(dt,et,D.__bindingPointIndex),l.set(dt,et))}function Pt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},ot=null,ct={},d={},h=new WeakMap,p=[],v=null,y=!1,m=null,u=null,g=null,x=null,b=null,C=null,T=null,A=new le(0,0,0),N=0,E=!1,S=null,U=null,B=null,k=null,Y=null,ne.set(0,0,e.canvas.width,e.canvas.height),Jt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:it,disable:lt,bindFramebuffer:Ut,drawBuffers:gt,useProgram:Xt,setBlending:de,setMaterial:R,setFlipSided:Zt,setCullFace:Ht,setLineWidth:he,setPolygonOffset:At,setScissorTest:Ft,activeTexture:Mt,bindTexture:bt,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:P,texImage2D:Nt,texImage3D:at,updateUBOMapping:Dt,uniformBlockBinding:_t,texStorage2D:pt,texStorage3D:Tt,texSubImage2D:K,texSubImage3D:nt,compressedTexSubImage2D:F,compressedTexSubImage3D:Et,scissor:ft,viewport:It,reset:Pt}}function sD(e,t,n,i,a,s,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,f=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,_){return p?new OffscreenCanvas(w,_):wc("canvas")}function y(w,_,P){let K=1,nt=bt(w);if((nt.width>P||nt.height>P)&&(K=P/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let F=Math.floor(K*nt.width),Et=Math.floor(K*nt.height);d===void 0&&(d=v(F,Et));let pt=_?v(F,Et):d;return pt.width=F,pt.height=Et,pt.getContext("2d").drawImage(w,0,0,F,Et),kt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+F+"x"+Et+")."),pt}else return"data"in w&&kt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),w;return w}function m(w){return w.generateMipmaps}function u(w){e.generateMipmap(w)}function g(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(w,_,P,K,nt=!1){if(w!==null){if(e[w]!==void 0)return e[w];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let F=_;if(_===e.RED&&(P===e.FLOAT&&(F=e.R32F),P===e.HALF_FLOAT&&(F=e.R16F),P===e.UNSIGNED_BYTE&&(F=e.R8)),_===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(F=e.R8UI),P===e.UNSIGNED_SHORT&&(F=e.R16UI),P===e.UNSIGNED_INT&&(F=e.R32UI),P===e.BYTE&&(F=e.R8I),P===e.SHORT&&(F=e.R16I),P===e.INT&&(F=e.R32I)),_===e.RG&&(P===e.FLOAT&&(F=e.RG32F),P===e.HALF_FLOAT&&(F=e.RG16F),P===e.UNSIGNED_BYTE&&(F=e.RG8)),_===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(F=e.RG8UI),P===e.UNSIGNED_SHORT&&(F=e.RG16UI),P===e.UNSIGNED_INT&&(F=e.RG32UI),P===e.BYTE&&(F=e.RG8I),P===e.SHORT&&(F=e.RG16I),P===e.INT&&(F=e.RG32I)),_===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(F=e.RGB8UI),P===e.UNSIGNED_SHORT&&(F=e.RGB16UI),P===e.UNSIGNED_INT&&(F=e.RGB32UI),P===e.BYTE&&(F=e.RGB8I),P===e.SHORT&&(F=e.RGB16I),P===e.INT&&(F=e.RGB32I)),_===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),P===e.UNSIGNED_INT&&(F=e.RGBA32UI),P===e.BYTE&&(F=e.RGBA8I),P===e.SHORT&&(F=e.RGBA16I),P===e.INT&&(F=e.RGBA32I)),_===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(F=e.R11F_G11F_B10F)),_===e.RGBA){let Et=nt?Ec:ge.getTransfer(K);P===e.FLOAT&&(F=e.RGBA32F),P===e.HALF_FLOAT&&(F=e.RGBA16F),P===e.UNSIGNED_BYTE&&(F=Et===Ce?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function b(w,_){let P;return w?_===null||_===zs||_===al?P=e.DEPTH24_STENCIL8:_===ma?P=e.DEPTH32F_STENCIL8:_===il&&(P=e.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zs||_===al?P=e.DEPTH_COMPONENT24:_===ma?P=e.DEPTH_COMPONENT32F:_===il&&(P=e.DEPTH_COMPONENT16),P}function C(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Kn&&w.minFilter!==On?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function T(w){let _=w.target;_.removeEventListener("dispose",T),N(_),_.isVideoTexture&&f.delete(_)}function A(w){let _=w.target;_.removeEventListener("dispose",A),S(_)}function N(w){let _=i.get(w);if(_.__webglInit===void 0)return;let P=w.source,K=h.get(P);if(K){let nt=K[_.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(w),Object.keys(K).length===0&&h.delete(P)}i.remove(w)}function E(w){let _=i.get(w);e.deleteTexture(_.__webglTexture);let P=w.source,K=h.get(P);delete K[_.__cacheKey],r.memory.textures--}function S(w){let _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let nt=0;nt<_.__webglFramebuffer[K].length;nt++)e.deleteFramebuffer(_.__webglFramebuffer[K][nt]);else e.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)e.deleteFramebuffer(_.__webglFramebuffer[K]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let P=w.textures;for(let K=0,nt=P.length;K<nt;K++){let F=i.get(P[K]);F.__webglTexture&&(e.deleteTexture(F.__webglTexture),r.memory.textures--),i.remove(P[K])}i.remove(w)}let U=0;function B(){U=0}function k(){let w=U;return w>=a.maxTextures&&kt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),U+=1,w}function Y(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function $(w,_){let P=i.get(w);if(w.isVideoTexture&&Ft(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&P.__version!==w.version){let K=w.image;if(K===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(P,w,_);return}}else w.isExternalTexture&&(P.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+_)}function Q(w,_){let P=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&P.__version!==w.version){Z(P,w,_);return}else w.isExternalTexture&&(P.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+_)}function st(w,_){let P=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&P.__version!==w.version){Z(P,w,_);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+_)}function G(w,_){let P=i.get(w);if(w.version>0&&P.__version!==w.version){it(P,w,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+_)}let ot={[lh]:e.REPEAT,[mi]:e.CLAMP_TO_EDGE,[ch]:e.MIRRORED_REPEAT},ct={[Kn]:e.NEAREST,[mS]:e.NEAREST_MIPMAP_NEAREST,[Hc]:e.NEAREST_MIPMAP_LINEAR,[On]:e.LINEAR,[Vh]:e.LINEAR_MIPMAP_NEAREST,[pa]:e.LINEAR_MIPMAP_LINEAR},vt={[yS]:e.NEVER,[AS]:e.ALWAYS,[bS]:e.LESS,[Eg]:e.LEQUAL,[SS]:e.EQUAL,[ES]:e.GEQUAL,[MS]:e.GREATER,[TS]:e.NOTEQUAL};function jt(w,_){if(_.type===ma&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===On||_.magFilter===Vh||_.magFilter===Hc||_.magFilter===pa||_.minFilter===On||_.minFilter===Vh||_.minFilter===Hc||_.minFilter===pa)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,ot[_.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,ot[_.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,ot[_.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,ct[_.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,ct[_.minFilter]),_.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,vt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Kn||_.minFilter!==Hc&&_.minFilter!==pa||_.type===ma&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ne(w,_){let P=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",T));let K=_.source,nt=h.get(K);nt===void 0&&(nt={},h.set(K,nt));let F=Y(_);if(F!==w.__cacheKey){nt[F]===void 0&&(nt[F]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),nt[F].usedTimes++;let Et=nt[w.__cacheKey];Et!==void 0&&(nt[w.__cacheKey].usedTimes--,Et.usedTimes===0&&E(_)),w.__cacheKey=F,w.__webglTexture=nt[F].texture}return P}function Jt(w,_,P){return Math.floor(Math.floor(w/P)/_)}function Yt(w,_,P,K){let F=w.updateRanges;if(F.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,P,K,_.data);else{F.sort((at,ft)=>at.start-ft.start);let Et=0;for(let at=1;at<F.length;at++){let ft=F[Et],It=F[at],Dt=ft.start+ft.count,_t=Jt(It.start,_.width,4),Pt=Jt(ft.start,_.width,4);It.start<=Dt+1&&_t===Pt&&Jt(It.start+It.count-1,_.width,4)===_t?ft.count=Math.max(ft.count,It.start+It.count-ft.start):(++Et,F[Et]=It)}F.length=Et+1;let pt=e.getParameter(e.UNPACK_ROW_LENGTH),Tt=e.getParameter(e.UNPACK_SKIP_PIXELS),Nt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let at=0,ft=F.length;at<ft;at++){let It=F[at],Dt=Math.floor(It.start/4),_t=Math.ceil(It.count/4),Pt=Dt%_.width,D=Math.floor(Dt/_.width),dt=_t,ht=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Pt),e.pixelStorei(e.UNPACK_SKIP_ROWS,D),n.texSubImage2D(e.TEXTURE_2D,0,Pt,D,dt,ht,P,K,_.data)}w.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,pt),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(e.UNPACK_SKIP_ROWS,Nt)}}function Z(w,_,P){let K=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=e.TEXTURE_3D);let nt=ne(w,_),F=_.source;n.bindTexture(K,w.__webglTexture,e.TEXTURE0+P);let Et=i.get(F);if(F.version!==Et.__version||nt===!0){n.activeTexture(e.TEXTURE0+P);let pt=ge.getPrimaries(ge.workingColorSpace),Tt=_.colorSpace===zn?null:ge.getPrimaries(_.colorSpace),Nt=_.colorSpace===zn||pt===Tt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let at=y(_.image,!1,a.maxTextureSize);at=Mt(_,at);let ft=s.convert(_.format,_.colorSpace),It=s.convert(_.type),Dt=x(_.internalFormat,ft,It,_.colorSpace,_.isVideoTexture);jt(K,_);let _t,Pt=_.mipmaps,D=_.isVideoTexture!==!0,dt=Et.__version===void 0||nt===!0,ht=F.dataReady,et=C(_,at);if(_.isDepthTexture)Dt=b(_.format===sl,_.type),dt&&(D?n.texStorage2D(e.TEXTURE_2D,1,Dt,at.width,at.height):n.texImage2D(e.TEXTURE_2D,0,Dt,at.width,at.height,0,ft,It,null));else if(_.isDataTexture)if(Pt.length>0){D&&dt&&n.texStorage2D(e.TEXTURE_2D,et,Dt,Pt[0].width,Pt[0].height);for(let z=0,tt=Pt.length;z<tt;z++)_t=Pt[z],D?ht&&n.texSubImage2D(e.TEXTURE_2D,z,0,0,_t.width,_t.height,ft,It,_t.data):n.texImage2D(e.TEXTURE_2D,z,Dt,_t.width,_t.height,0,ft,It,_t.data);_.generateMipmaps=!1}else D?(dt&&n.texStorage2D(e.TEXTURE_2D,et,Dt,at.width,at.height),ht&&Yt(_,at,ft,It)):n.texImage2D(e.TEXTURE_2D,0,Dt,at.width,at.height,0,ft,It,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&dt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,et,Dt,Pt[0].width,Pt[0].height,at.depth);for(let z=0,tt=Pt.length;z<tt;z++)if(_t=Pt[z],_.format!==$n)if(ft!==null)if(D){if(ht)if(_.layerUpdates.size>0){let Ct=Ug(_t.width,_t.height,_.format,_.type);for(let zt of _.layerUpdates){let xe=_t.data.subarray(zt*Ct/_t.data.BYTES_PER_ELEMENT,(zt+1)*Ct/_t.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,zt,_t.width,_t.height,1,ft,xe)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,0,_t.width,_t.height,at.depth,ft,_t.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,z,Dt,_t.width,_t.height,at.depth,0,_t.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ht&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,0,_t.width,_t.height,at.depth,ft,It,_t.data):n.texImage3D(e.TEXTURE_2D_ARRAY,z,Dt,_t.width,_t.height,at.depth,0,ft,It,_t.data)}else{D&&dt&&n.texStorage2D(e.TEXTURE_2D,et,Dt,Pt[0].width,Pt[0].height);for(let z=0,tt=Pt.length;z<tt;z++)_t=Pt[z],_.format!==$n?ft!==null?D?ht&&n.compressedTexSubImage2D(e.TEXTURE_2D,z,0,0,_t.width,_t.height,ft,_t.data):n.compressedTexImage2D(e.TEXTURE_2D,z,Dt,_t.width,_t.height,0,_t.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ht&&n.texSubImage2D(e.TEXTURE_2D,z,0,0,_t.width,_t.height,ft,It,_t.data):n.texImage2D(e.TEXTURE_2D,z,Dt,_t.width,_t.height,0,ft,It,_t.data)}else if(_.isDataArrayTexture)if(D){if(dt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,et,Dt,at.width,at.height,at.depth),ht)if(_.layerUpdates.size>0){let z=Ug(at.width,at.height,_.format,_.type);for(let tt of _.layerUpdates){let Ct=at.data.subarray(tt*z/at.data.BYTES_PER_ELEMENT,(tt+1)*z/at.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,ft,It,Ct)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,ft,It,at.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Dt,at.width,at.height,at.depth,0,ft,It,at.data);else if(_.isData3DTexture)D?(dt&&n.texStorage3D(e.TEXTURE_3D,et,Dt,at.width,at.height,at.depth),ht&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,ft,It,at.data)):n.texImage3D(e.TEXTURE_3D,0,Dt,at.width,at.height,at.depth,0,ft,It,at.data);else if(_.isFramebufferTexture){if(dt)if(D)n.texStorage2D(e.TEXTURE_2D,et,Dt,at.width,at.height);else{let z=at.width,tt=at.height;for(let Ct=0;Ct<et;Ct++)n.texImage2D(e.TEXTURE_2D,Ct,Dt,z,tt,0,ft,It,null),z>>=1,tt>>=1}}else if(Pt.length>0){if(D&&dt){let z=bt(Pt[0]);n.texStorage2D(e.TEXTURE_2D,et,Dt,z.width,z.height)}for(let z=0,tt=Pt.length;z<tt;z++)_t=Pt[z],D?ht&&n.texSubImage2D(e.TEXTURE_2D,z,0,0,ft,It,_t):n.texImage2D(e.TEXTURE_2D,z,Dt,ft,It,_t);_.generateMipmaps=!1}else if(D){if(dt){let z=bt(at);n.texStorage2D(e.TEXTURE_2D,et,Dt,z.width,z.height)}ht&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,It,at)}else n.texImage2D(e.TEXTURE_2D,0,Dt,ft,It,at);m(_)&&u(K),Et.__version=F.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function it(w,_,P){if(_.image.length!==6)return;let K=ne(w,_),nt=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+P);let F=i.get(nt);if(nt.version!==F.__version||K===!0){n.activeTexture(e.TEXTURE0+P);let Et=ge.getPrimaries(ge.workingColorSpace),pt=_.colorSpace===zn?null:ge.getPrimaries(_.colorSpace),Tt=_.colorSpace===zn||Et===pt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Nt=_.isCompressedTexture||_.image[0].isCompressedTexture,at=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let tt=0;tt<6;tt++)!Nt&&!at?ft[tt]=y(_.image[tt],!0,a.maxCubemapSize):ft[tt]=at?_.image[tt].image:_.image[tt],ft[tt]=Mt(_,ft[tt]);let It=ft[0],Dt=s.convert(_.format,_.colorSpace),_t=s.convert(_.type),Pt=x(_.internalFormat,Dt,_t,_.colorSpace),D=_.isVideoTexture!==!0,dt=F.__version===void 0||K===!0,ht=nt.dataReady,et=C(_,It);jt(e.TEXTURE_CUBE_MAP,_);let z;if(Nt){D&&dt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,et,Pt,It.width,It.height);for(let tt=0;tt<6;tt++){z=ft[tt].mipmaps;for(let Ct=0;Ct<z.length;Ct++){let zt=z[Ct];_.format!==$n?Dt!==null?D?ht&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,0,0,zt.width,zt.height,Dt,zt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,Pt,zt.width,zt.height,0,zt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ht&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,0,0,zt.width,zt.height,Dt,_t,zt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,Pt,zt.width,zt.height,0,Dt,_t,zt.data)}}}else{if(z=_.mipmaps,D&&dt){z.length>0&&et++;let tt=bt(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,et,Pt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){D?ht&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ft[tt].width,ft[tt].height,Dt,_t,ft[tt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Pt,ft[tt].width,ft[tt].height,0,Dt,_t,ft[tt].data);for(let Ct=0;Ct<z.length;Ct++){let xe=z[Ct].image[tt].image;D?ht&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,0,0,xe.width,xe.height,Dt,_t,xe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,Pt,xe.width,xe.height,0,Dt,_t,xe.data)}}else{D?ht&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,_t,ft[tt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Pt,Dt,_t,ft[tt]);for(let Ct=0;Ct<z.length;Ct++){let zt=z[Ct];D?ht&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,0,0,Dt,_t,zt.image[tt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,Pt,Dt,_t,zt.image[tt])}}}m(_)&&u(e.TEXTURE_CUBE_MAP),F.__version=nt.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function lt(w,_,P,K,nt,F){let Et=s.convert(P.format,P.colorSpace),pt=s.convert(P.type),Tt=x(P.internalFormat,Et,pt,P.colorSpace),Nt=i.get(_),at=i.get(P);if(at.__renderTarget=_,!Nt.__hasExternalTextures){let ft=Math.max(1,_.width>>F),It=Math.max(1,_.height>>F);nt===e.TEXTURE_3D||nt===e.TEXTURE_2D_ARRAY?n.texImage3D(nt,F,Tt,ft,It,_.depth,0,Et,pt,null):n.texImage2D(nt,F,Tt,ft,It,0,Et,pt,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),At(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,nt,at.__webglTexture,0,he(_)):(nt===e.TEXTURE_2D||nt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,nt,at.__webglTexture,F),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ut(w,_,P){if(e.bindRenderbuffer(e.RENDERBUFFER,w),_.depthBuffer){let K=_.depthTexture,nt=K&&K.isDepthTexture?K.type:null,F=b(_.stencilBuffer,nt),Et=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pt=he(_);At(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,pt,F,_.width,_.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,pt,F,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,F,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Et,e.RENDERBUFFER,w)}else{let K=_.textures;for(let nt=0;nt<K.length;nt++){let F=K[nt],Et=s.convert(F.format,F.colorSpace),pt=s.convert(F.type),Tt=x(F.internalFormat,Et,pt,F.colorSpace),Nt=he(_);P&&At(_)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Nt,Tt,_.width,_.height):At(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Nt,Tt,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,Tt,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function gt(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);let nt=K.__webglTexture,F=he(_);if(_.depthTexture.format===Jo)At(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,nt,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,nt,0);else if(_.depthTexture.format===sl)At(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,nt,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Xt(w){let _=i.get(w),P=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let K=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){let nt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),_.__depthDisposeCallback=nt}_.__boundDepthTexture=K}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let K=w.texture.mipmaps;K&&K.length>0?gt(_.__webglFramebuffer[0],w):gt(_.__webglFramebuffer,w)}else if(P){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=e.createRenderbuffer(),Ut(_.__webglDepthbuffer[K],w,!1);else{let nt=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=_.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,F)}}else{let K=w.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Ut(_.__webglDepthbuffer,w,!1);else{let nt=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,F)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function He(w,_,P){let K=i.get(w);_!==void 0&&lt(K.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Xt(w)}function Bt(w){let _=w.texture,P=i.get(w),K=i.get(_);w.addEventListener("dispose",A);let nt=w.textures,F=w.isWebGLCubeRenderTarget===!0,Et=nt.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=_.version,r.memory.textures++),F){P.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[pt]=[];for(let Tt=0;Tt<_.mipmaps.length;Tt++)P.__webglFramebuffer[pt][Tt]=e.createFramebuffer()}else P.__webglFramebuffer[pt]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let pt=0;pt<_.mipmaps.length;pt++)P.__webglFramebuffer[pt]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(Et)for(let pt=0,Tt=nt.length;pt<Tt;pt++){let Nt=i.get(nt[pt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=e.createTexture(),r.memory.textures++)}if(w.samples>0&&At(w)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let pt=0;pt<nt.length;pt++){let Tt=nt[pt];P.__webglColorRenderbuffer[pt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[pt]);let Nt=s.convert(Tt.format,Tt.colorSpace),at=s.convert(Tt.type),ft=x(Tt.internalFormat,Nt,at,Tt.colorSpace,w.isXRRenderTarget===!0),It=he(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,It,ft,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.RENDERBUFFER,P.__webglColorRenderbuffer[pt])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Ut(P.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(F){n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),jt(e.TEXTURE_CUBE_MAP,_);for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)lt(P.__webglFramebuffer[pt][Tt],w,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt);else lt(P.__webglFramebuffer[pt],w,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(_)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Et){for(let pt=0,Tt=nt.length;pt<Tt;pt++){let Nt=nt[pt],at=i.get(Nt),ft=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ft=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,at.__webglTexture),jt(ft,Nt),lt(P.__webglFramebuffer,w,Nt,e.COLOR_ATTACHMENT0+pt,ft,0),m(Nt)&&u(ft)}n.unbindTexture()}else{let pt=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pt=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(pt,K.__webglTexture),jt(pt,_),_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)lt(P.__webglFramebuffer[Tt],w,_,e.COLOR_ATTACHMENT0,pt,Tt);else lt(P.__webglFramebuffer,w,_,e.COLOR_ATTACHMENT0,pt,0);m(_)&&u(pt),n.unbindTexture()}w.depthBuffer&&Xt(w)}function de(w){let _=w.textures;for(let P=0,K=_.length;P<K;P++){let nt=_[P];if(m(nt)){let F=g(w),Et=i.get(nt).__webglTexture;n.bindTexture(F,Et),u(F),n.unbindTexture()}}}let R=[],Zt=[];function Ht(w){if(w.samples>0){if(At(w)===!1){let _=w.textures,P=w.width,K=w.height,nt=e.COLOR_BUFFER_BIT,F=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Et=i.get(w),pt=_.length>1;if(pt)for(let Nt=0;Nt<_.length;Nt++)n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Nt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Nt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let Tt=w.texture.mipmaps;Tt&&Tt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Nt=0;Nt<_.length;Nt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(nt|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(nt|=e.STENCIL_BUFFER_BIT)),pt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Et.__webglColorRenderbuffer[Nt]);let at=i.get(_[Nt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,at,0)}e.blitFramebuffer(0,0,P,K,0,0,P,K,nt,e.NEAREST),l===!0&&(R.length=0,Zt.length=0,R.push(e.COLOR_ATTACHMENT0+Nt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(R.push(F),Zt.push(F),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Zt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,R))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),pt)for(let Nt=0;Nt<_.length;Nt++){n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Nt,e.RENDERBUFFER,Et.__webglColorRenderbuffer[Nt]);let at=i.get(_[Nt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Nt,e.TEXTURE_2D,at,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let _=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function he(w){return Math.min(a.maxSamples,w.samples)}function At(w){let _=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ft(w){let _=r.render.frame;f.get(w)!==_&&(f.set(w,_),w.update())}function Mt(w,_){let P=w.colorSpace,K=w.format,nt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||P!==yr&&P!==zn&&(ge.getTransfer(P)===Ce?(K!==$n||nt!==Ni)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",P)),_}function bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=st,this.setTextureCube=G,this.rebindTextures=He,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=At}function rD(e,t){function n(i,a=zn){let s,r=ge.getTransfer(a);if(i===Ni)return e.UNSIGNED_BYTE;if(i===Gh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===kh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===yg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===bg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===vg)return e.BYTE;if(i===_g)return e.SHORT;if(i===il)return e.UNSIGNED_SHORT;if(i===Hh)return e.INT;if(i===zs)return e.UNSIGNED_INT;if(i===ma)return e.FLOAT;if(i===wr)return e.HALF_FLOAT;if(i===Sg)return e.ALPHA;if(i===Mg)return e.RGB;if(i===$n)return e.RGBA;if(i===Jo)return e.DEPTH_COMPONENT;if(i===sl)return e.DEPTH_STENCIL;if(i===Tg)return e.RED;if(i===Xh)return e.RED_INTEGER;if(i===Wh)return e.RG;if(i===qh)return e.RG_INTEGER;if(i===Yh)return e.RGBA_INTEGER;if(i===Gc||i===kc||i===Xc||i===Wc)if(r===Ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zh||i===Jh||i===Kh||i===Qh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jh||i===$h||i===td)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jh||i===$h)return r===Ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===td)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ed||i===nd||i===id||i===ad||i===sd||i===rd||i===od||i===ld||i===cd||i===ud||i===fd||i===hd||i===dd||i===pd)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ed)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nd)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===id)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ad)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sd)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rd)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===od)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ld)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cd)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ud)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fd)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hd)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dd)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pd)return r===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===md||i===gd||i===xd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===md)return r===Ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vd||i===_d||i===yd||i===bd)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===vd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_d)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===al?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var oD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new zc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new jn({vertexShader:oD,fragmentShader:lD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new Mr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wg=class extends Va{constructor(t,n){super();let i=this,a=null,s=1,r=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,v=null,y=typeof XRWebGLBinding<"u",m=new Xg,u={},g=n.getContextAttributes(),x=null,b=null,C=[],T=[],A=new Me,N=null,E=new Zn;E.viewport=new We;let S=new Zn;S.viewport=new We;let U=[E,S],B=new Dh,k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=C[Z];return it===void 0&&(it=new el,C[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=C[Z];return it===void 0&&(it=new el,C[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=C[Z];return it===void 0&&(it=new el,C[Z]=it),it.getHandSpace()};function $(Z){let it=T.indexOf(Z.inputSource);if(it===-1)return;let lt=C[it];lt!==void 0&&(lt.update(Z.inputSource,Z.frame,c||r),lt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Q(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",Q),a.removeEventListener("inputsourceschange",st);for(let Z=0;Z<C.length;Z++){let it=T[Z];it!==null&&(T[Z]=null,C[Z].disconnect(it))}k=null,Y=null,m.reset();for(let Z in u)delete u[Z];t.setRenderTarget(x),p=null,h=null,d=null,a=null,b=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(a,n)),d},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(x=t.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",Q),a.addEventListener("inputsourceschange",st),g.xrCompatible!==!0&&await n.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,Ut=null,gt=null;g.depth&&(gt=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,lt=g.stencil?sl:Jo,Ut=g.stencil?al:zs);let Xt={colorFormat:n.RGBA8,depthFormat:gt,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Xt),a.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new la(h.textureWidth,h.textureHeight,{format:$n,type:Ni,depthTexture:new Pc(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let lt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,lt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new la(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Yt.setContext(a),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(Z){for(let it=0;it<Z.removed.length;it++){let lt=Z.removed[it],Ut=T.indexOf(lt);Ut>=0&&(T[Ut]=null,C[Ut].disconnect(lt))}for(let it=0;it<Z.added.length;it++){let lt=Z.added[it],Ut=T.indexOf(lt);if(Ut===-1){for(let Xt=0;Xt<C.length;Xt++)if(Xt>=T.length){T.push(lt),Ut=Xt;break}else if(T[Xt]===null){T[Xt]=lt,Ut=Xt;break}if(Ut===-1)break}let gt=C[Ut];gt&&gt.connect(lt)}}let G=new W,ot=new W;function ct(Z,it,lt){G.setFromMatrixPosition(it.matrixWorld),ot.setFromMatrixPosition(lt.matrixWorld);let Ut=G.distanceTo(ot),gt=it.projectionMatrix.elements,Xt=lt.projectionMatrix.elements,He=gt[14]/(gt[10]-1),Bt=gt[14]/(gt[10]+1),de=(gt[9]+1)/gt[5],R=(gt[9]-1)/gt[5],Zt=(gt[8]-1)/gt[0],Ht=(Xt[8]+1)/Xt[0],he=He*Zt,At=He*Ht,Ft=Ut/(-Zt+Ht),Mt=Ft*-Zt;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Mt),Z.translateZ(Ft),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),gt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let bt=He+Ft,w=Bt+Ft,_=he-Mt,P=At+(Ut-Mt),K=de*Bt/w*bt,nt=R*Bt/w*bt;Z.projectionMatrix.makePerspective(_,P,K,nt,bt,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function vt(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let it=Z.near,lt=Z.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(lt=m.depthFar)),B.near=S.near=E.near=it,B.far=S.far=E.far=lt,(k!==B.near||Y!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,Y=B.far),B.layers.mask=Z.layers.mask|6,E.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;let Ut=Z.parent,gt=B.cameras;vt(B,Ut);for(let Xt=0;Xt<gt.length;Xt++)vt(gt[Xt],Ut);gt.length===2?ct(B,E,S):B.projectionMatrix.copy(E.projectionMatrix),jt(Z,B,Ut)};function jt(Z,it,lt){lt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(lt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return u[Z]};let ne=null;function Jt(Z,it){if(f=it.getViewerPose(c||r),v=it,f!==null){let lt=f.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let Ut=!1;lt.length!==B.cameras.length&&(B.cameras.length=0,Ut=!0);for(let Bt=0;Bt<lt.length;Bt++){let de=lt[Bt],R=null;if(p!==null)R=p.getViewport(de);else{let Ht=d.getViewSubImage(h,de);R=Ht.viewport,Bt===0&&(t.setRenderTargetTextures(b,Ht.colorTexture,Ht.depthStencilTexture),t.setRenderTarget(b))}let Zt=U[Bt];Zt===void 0&&(Zt=new Zn,Zt.layers.enable(Bt),Zt.viewport=new We,U[Bt]=Zt),Zt.matrix.fromArray(de.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(de.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(R.x,R.y,R.width,R.height),Bt===0&&(B.matrix.copy(Zt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ut===!0&&B.cameras.push(Zt)}let gt=a.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Bt=d.getDepthInformation(lt[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,a.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let Bt=0;Bt<lt.length;Bt++){let de=lt[Bt].camera;if(de){let R=u[de];R||(R=new zc,u[de]=R);let Zt=d.getCameraImage(de);R.sourceTexture=Zt}}}}for(let lt=0;lt<C.length;lt++){let Ut=T[lt],gt=C[lt];Ut!==null&&gt!==void 0&&gt.update(Ut,it,c||r)}ne&&ne(Z,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),v=null}let Yt=new tM;Yt.setAnimationLoop(Jt),this.setAnimationLoop=function(Z){ne=Z},this.dispose=function(){}}},Dr=new ca,cD=new rn;function uD(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Rg(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,g,x,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,b)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Pn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Pn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let g=t.get(u),x=g.envMap,b=g.envMapRotation;x&&(m.envMap.value=x,Dr.copy(b),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),m.envMapRotation.value.setFromMatrix4(cD.makeRotationFromEuler(Dr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){let g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function fD(e,t,n,i){let a={},s={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){let b=x.program;i.uniformBlockBinding(g,b)}function c(g,x){let b=a[g.id];b===void 0&&(v(g),b=f(g),a[g.id]=b,g.addEventListener("dispose",m));let C=x.program;i.updateUBOMapping(g,C);let T=t.render.frame;s[g.id]!==T&&(h(g),s[g.id]=T)}function f(g){let x=d();g.__bindingPointIndex=x;let b=e.createBuffer(),C=g.__size,T=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,C,T),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,b),b}function d(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){let x=a[g.id],b=g.uniforms,C=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let T=0,A=b.length;T<A;T++){let N=Array.isArray(b[T])?b[T]:[b[T]];for(let E=0,S=N.length;E<S;E++){let U=N[E];if(p(U,T,E,C)===!0){let B=U.__offset,k=Array.isArray(U.value)?U.value:[U.value],Y=0;for(let $=0;$<k.length;$++){let Q=k[$],st=y(Q);typeof Q=="number"||typeof Q=="boolean"?(U.__data[0]=Q,e.bufferSubData(e.UNIFORM_BUFFER,B+Y,U.__data)):Q.isMatrix3?(U.__data[0]=Q.elements[0],U.__data[1]=Q.elements[1],U.__data[2]=Q.elements[2],U.__data[3]=0,U.__data[4]=Q.elements[3],U.__data[5]=Q.elements[4],U.__data[6]=Q.elements[5],U.__data[7]=0,U.__data[8]=Q.elements[6],U.__data[9]=Q.elements[7],U.__data[10]=Q.elements[8],U.__data[11]=0):(Q.toArray(U.__data,Y),Y+=st.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,x,b,C){let T=g.value,A=x+"_"+b;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let N=C[A];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return C[A]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function v(g){let x=g.uniforms,b=0,C=16;for(let A=0,N=x.length;A<N;A++){let E=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,U=E.length;S<U;S++){let B=E[S],k=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,$=k.length;Y<$;Y++){let Q=k[Y],st=y(Q),G=b%C,ot=G%st.boundary,ct=G+ot;b+=ot,ct!==0&&C-ct<st.storage&&(b+=C-ct),B.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=st.storage}}}let T=b%C;return T>0&&(b+=C-T),g.__size=b,g.__cache={},this}function y(g){let x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):kt("WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){let x=g.target;x.removeEventListener("dispose",m);let b=r.indexOf(x.__bindingPointIndex);r.splice(b,1),e.deleteBuffer(a[x.id]),delete a[x.id],delete s[x.id]}function u(){for(let g in a)e.deleteBuffer(a[g]);r=[],a={},s={}}return{bind:l,update:c,dispose:u}}var hD=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),ka=null;function dD(){return ka===null&&(ka=new vh(hD,32,32,Wh,wr),ka.minFilter=On,ka.magFilter=On,ka.wrapS=mi,ka.wrapT=mi,ka.generateMipmaps=!1,ka.needsUpdate=!0),ka}var Ed=class{constructor(t={}){let{canvas:n=wS(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let v=new Set([Yh,qh,Xh]),y=new Set([Ni,zs,il,al,Gh,kh]),m=new Uint32Array(4),u=new Int32Array(4),g=null,x=null,b=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,A=!1;this._outputColorSpace=pi;let N=0,E=0,S=null,U=-1,B=null,k=new We,Y=new We,$=null,Q=new le(0),st=0,G=n.width,ot=n.height,ct=1,vt=null,jt=null,ne=new We(0,0,G,ot),Jt=new We(0,0,G,ot),Yt=!1,Z=new Oc,it=!1,lt=!1,Ut=new rn,gt=new W,Xt=new We,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function de(){return S===null?ct:1}let R=i;function Zt(M,I){return n.getContext(M,I)}try{let M={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"181"}`),n.addEventListener("webglcontextlost",z,!1),n.addEventListener("webglcontextrestored",tt,!1),n.addEventListener("webglcontextcreationerror",Ct,!1),R===null){let I="webgl2";if(R=Zt(I,M),R===null)throw Zt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let Ht,he,At,Ft,Mt,bt,w,_,P,K,nt,F,Et,pt,Tt,Nt,at,ft,It,Dt,_t,Pt,D,dt;function ht(){Ht=new RC(R),Ht.init(),Pt=new rD(R,Ht),he=new yC(R,Ht,t,Pt),At=new aD(R,Ht),he.reversedDepthBuffer&&h&&At.buffers.depth.setReversed(!0),Ft=new UC(R),Mt=new WR,bt=new sD(R,Ht,At,Mt,he,Pt,Ft),w=new SC(T),_=new CC(T),P=new PA(R),D=new vC(R,P),K=new DC(R,P,Ft,D),nt=new IC(R,K,P,Ft),It=new LC(R,he,bt),Nt=new bC(Mt),F=new XR(T,w,_,Ht,he,D,Nt),Et=new uD(T,Mt),pt=new YR,Tt=new $R(Ht),ft=new xC(T,w,_,At,nt,p,l),at=new nD(T,nt,he),dt=new fD(R,Ft,he,At),Dt=new _C(R,Ht,Ft),_t=new NC(R,Ht,Ft),Ft.programs=F.programs,T.capabilities=he,T.extensions=Ht,T.properties=Mt,T.renderLists=pt,T.shadowMap=at,T.state=At,T.info=Ft}ht();let et=new Wg(T,R);this.xr=et,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let M=Ht.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ht.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(M){M!==void 0&&(ct=M,this.setSize(G,ot,!1))},this.getSize=function(M){return M.set(G,ot)},this.setSize=function(M,I,V=!0){if(et.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,ot=I,n.width=Math.floor(M*ct),n.height=Math.floor(I*ct),V===!0&&(n.style.width=M+"px",n.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(G*ct,ot*ct).floor()},this.setDrawingBufferSize=function(M,I,V){G=M,ot=I,ct=V,n.width=Math.floor(M*V),n.height=Math.floor(I*V),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(k)},this.getViewport=function(M){return M.copy(ne)},this.setViewport=function(M,I,V,H){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,I,V,H),At.viewport(k.copy(ne).multiplyScalar(ct).round())},this.getScissor=function(M){return M.copy(Jt)},this.setScissor=function(M,I,V,H){M.isVector4?Jt.set(M.x,M.y,M.z,M.w):Jt.set(M,I,V,H),At.scissor(Y.copy(Jt).multiplyScalar(ct).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(M){At.setScissorTest(Yt=M)},this.setOpaqueSort=function(M){vt=M},this.setTransparentSort=function(M){jt=M},this.getClearColor=function(M){return M.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,V=!0){let H=0;if(M){let O=!1;if(S!==null){let ut=S.texture.format;O=v.has(ut)}if(O){let ut=S.texture.type,yt=y.has(ut),wt=ft.getClearColor(),L=ft.getClearAlpha(),X=wt.r,j=wt.g,q=wt.b;yt?(m[0]=X,m[1]=j,m[2]=q,m[3]=L,R.clearBufferuiv(R.COLOR,0,m)):(u[0]=X,u[1]=j,u[2]=q,u[3]=L,R.clearBufferiv(R.COLOR,0,u))}else H|=R.COLOR_BUFFER_BIT}I&&(H|=R.DEPTH_BUFFER_BIT),V&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",z,!1),n.removeEventListener("webglcontextrestored",tt,!1),n.removeEventListener("webglcontextcreationerror",Ct,!1),ft.dispose(),pt.dispose(),Tt.dispose(),Mt.dispose(),w.dispose(),_.dispose(),nt.dispose(),D.dispose(),dt.dispose(),F.dispose(),et.dispose(),et.removeEventListener("sessionstart",Xa),et.removeEventListener("sessionend",Ur),Bn.stop()};function z(M){M.preventDefault(),Cg("WebGLRenderer: Context Lost."),A=!0}function tt(){Cg("WebGLRenderer: Context Restored."),A=!1;let M=Ft.autoReset,I=at.enabled,V=at.autoUpdate,H=at.needsUpdate,O=at.type;ht(),Ft.autoReset=M,at.enabled=I,at.autoUpdate=V,at.needsUpdate=H,at.type=O}function Ct(M){re("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function zt(M){let I=M.target;I.removeEventListener("dispose",zt),xe(I)}function xe(M){pe(M),Mt.remove(M)}function pe(M){let I=Mt.get(M).programs;I!==void 0&&(I.forEach(function(V){F.releaseProgram(V)}),M.isShaderMaterial&&F.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,V,H,O,ut){I===null&&(I=He);let yt=O.isMesh&&O.matrixWorld.determinant()<0,wt=Rd(M,I,V,H,O);At.setMaterial(H,yt);let L=V.index,X=1;if(H.wireframe===!0){if(L=K.getWireframeAttribute(V),L===void 0)return;X=2}let j=V.drawRange,q=V.attributes.position,rt=j.start*X,mt=(j.start+j.count)*X;ut!==null&&(rt=Math.max(rt,ut.start*X),mt=Math.min(mt,(ut.start+ut.count)*X)),L!==null?(rt=Math.max(rt,0),mt=Math.min(mt,L.count)):q!=null&&(rt=Math.max(rt,0),mt=Math.min(mt,q.count));let St=mt-rt;if(St<0||St===1/0)return;D.setup(O,H,wt,V,L);let Wt,qt=Dt;if(L!==null&&(Wt=P.get(L),qt=_t,qt.setIndex(Wt)),O.isMesh)H.wireframe===!0?(At.setLineWidth(H.wireframeLinewidth*de()),qt.setMode(R.LINES)):qt.setMode(R.TRIANGLES);else if(O.isLine){let Rt=H.linewidth;Rt===void 0&&(Rt=1),At.setLineWidth(Rt*de()),O.isLineSegments?qt.setMode(R.LINES):O.isLineLoop?qt.setMode(R.LINE_LOOP):qt.setMode(R.LINE_STRIP)}else O.isPoints?qt.setMode(R.POINTS):O.isSprite&&qt.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))qt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Rt=O._multiDrawStarts,ve=O._multiDrawCounts,$t=O._multiDrawCount,Ge=L?P.get(L).bytesPerElement:1,Fn=Mt.get(H).currentProgram.getUniforms();for(let me=0;me<$t;me++)Fn.setValue(R,"_gl_DrawID",me),qt.render(Rt[me]/Ge,ve[me])}else if(O.isInstancedMesh)qt.renderInstances(rt,St,O.count);else if(V.isInstancedBufferGeometry){let Rt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ve=Math.min(V.instanceCount,Rt);qt.renderInstances(rt,St,ve)}else qt.render(rt,St)};function vi(M,I,V){M.transparent===!0&&M.side===ha&&M.forceSinglePass===!1?(M.side=Pn,M.needsUpdate=!0,Xi(M,I,V),M.side=Fa,M.needsUpdate=!0,Xi(M,I,V),M.side=ha):Xi(M,I,V)}this.compile=function(M,I,V=null){V===null&&(V=M),x=Tt.get(V),x.init(I),C.push(x),V.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(x.pushLight(O),O.castShadow&&x.pushShadow(O))}),M!==V&&M.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(x.pushLight(O),O.castShadow&&x.pushShadow(O))}),x.setupLights();let H=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ut=O.material;if(ut)if(Array.isArray(ut))for(let yt=0;yt<ut.length;yt++){let wt=ut[yt];vi(wt,V,O),H.add(wt)}else vi(ut,V,O),H.add(ut)}),x=C.pop(),H},this.compileAsync=function(M,I,V=null){let H=this.compile(M,I,V);return new Promise(O=>{function ut(){if(H.forEach(function(yt){Mt.get(yt).currentProgram.isReady()&&H.delete(yt)}),H.size===0){O(M);return}setTimeout(ut,10)}Ht.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let ti=null;function hl(M){ti&&ti(M)}function Xa(){Bn.stop()}function Ur(){Bn.start()}let Bn=new tM;Bn.setAnimationLoop(hl),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(M){ti=M,et.setAnimationLoop(M),M===null?Bn.stop():Bn.start()},et.addEventListener("sessionstart",Xa),et.addEventListener("sessionend",Ur),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(I),I=et.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,I,S),x=Tt.get(M,C.length),x.init(I),C.push(x),Ut.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Z.setFromProjectionMatrix(Ut,ki,I.reversedDepth),lt=this.localClippingEnabled,it=Nt.init(this.clippingPlanes,lt),g=pt.get(M,b.length),g.init(),b.push(g),et.enabled===!0&&et.isPresenting===!0){let ut=T.xr.getDepthSensingMesh();ut!==null&&dl(ut,I,-1/0,T.sortObjects)}dl(M,I,0,T.sortObjects),g.finish(),T.sortObjects===!0&&g.sort(vt,jt),Bt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Bt&&ft.addToRenderList(g,M),this.info.render.frame++,it===!0&&Nt.beginShadows();let V=x.state.shadowsArray;at.render(V,M,I),it===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,O=g.transmissive;if(x.setupLights(),I.isArrayCamera){let ut=I.cameras;if(O.length>0)for(let yt=0,wt=ut.length;yt<wt;yt++){let L=ut[yt];Ui(H,O,M,L)}Bt&&ft.render(M);for(let yt=0,wt=ut.length;yt<wt;yt++){let L=ut[yt];mn(g,M,L,L.viewport)}}else O.length>0&&Ui(H,O,M,I),Bt&&ft.render(M),mn(g,M,I);S!==null&&E===0&&(bt.updateMultisampleRenderTarget(S),bt.updateRenderTargetMipmap(S)),M.isScene===!0&&M.onAfterRender(T,M,I),D.resetDefaultState(),U=-1,B=null,C.pop(),C.length>0?(x=C[C.length-1],it===!0&&Nt.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function dl(M,I,V,H){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)x.pushLight(M),M.castShadow&&x.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Z.intersectsSprite(M)){H&&Xt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ut);let yt=nt.update(M),wt=M.material;wt.visible&&g.push(M,yt,wt,V,Xt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Z.intersectsObject(M))){let yt=nt.update(M),wt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xt.copy(M.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Xt.copy(yt.boundingSphere.center)),Xt.applyMatrix4(M.matrixWorld).applyMatrix4(Ut)),Array.isArray(wt)){let L=yt.groups;for(let X=0,j=L.length;X<j;X++){let q=L[X],rt=wt[q.materialIndex];rt&&rt.visible&&g.push(M,yt,rt,V,Xt.z,q)}}else wt.visible&&g.push(M,yt,wt,V,Xt.z,null)}}let ut=M.children;for(let yt=0,wt=ut.length;yt<wt;yt++)dl(ut[yt],I,V,H)}function mn(M,I,V,H){let{opaque:O,transmissive:ut,transparent:yt}=M;x.setupLightsView(V),it===!0&&Nt.setGlobalState(T.clippingPlanes,V),H&&At.viewport(k.copy(H)),O.length>0&&Fs(O,I,V),ut.length>0&&Fs(ut,I,V),yt.length>0&&Fs(yt,I,V),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Ui(M,I,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[H.id]===void 0&&(x.state.transmissionRenderTarget[H.id]=new la(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?wr:Ni,minFilter:pa,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));let ut=x.state.transmissionRenderTarget[H.id],yt=H.viewport||k;ut.setSize(yt.z*T.transmissionResolutionScale,yt.w*T.transmissionResolutionScale);let wt=T.getRenderTarget(),L=T.getActiveCubeFace(),X=T.getActiveMipmapLevel();T.setRenderTarget(ut),T.getClearColor(Q),st=T.getClearAlpha(),st<1&&T.setClearColor(16777215,.5),T.clear(),Bt&&ft.render(V);let j=T.toneMapping;T.toneMapping=Ga;let q=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),x.setupLightsView(H),it===!0&&Nt.setGlobalState(T.clippingPlanes,H),Fs(M,V,H),bt.updateMultisampleRenderTarget(ut),bt.updateRenderTargetMipmap(ut),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let mt=0,St=I.length;mt<St;mt++){let Wt=I[mt],{object:qt,geometry:Rt,material:ve,group:$t}=Wt;if(ve.side===ha&&qt.layers.test(H.layers)){let Ge=ve.side;ve.side=Pn,ve.needsUpdate=!0,Wa(qt,V,H,Rt,ve,$t),ve.side=Ge,ve.needsUpdate=!0,rt=!0}}rt===!0&&(bt.updateMultisampleRenderTarget(ut),bt.updateRenderTargetMipmap(ut))}T.setRenderTarget(wt,L,X),T.setClearColor(Q,st),q!==void 0&&(H.viewport=q),T.toneMapping=j}function Fs(M,I,V){let H=I.isScene===!0?I.overrideMaterial:null;for(let O=0,ut=M.length;O<ut;O++){let yt=M[O],{object:wt,geometry:L,group:X}=yt,j=yt.material;j.allowOverride===!0&&H!==null&&(j=H),wt.layers.test(V.layers)&&Wa(wt,I,V,L,j,X)}}function Wa(M,I,V,H,O,ut){M.onBeforeRender(T,I,V,H,O,ut),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(T,I,V,H,M,ut),O.transparent===!0&&O.side===ha&&O.forceSinglePass===!1?(O.side=Pn,O.needsUpdate=!0,T.renderBufferDirect(V,I,H,O,M,ut),O.side=Fa,O.needsUpdate=!0,T.renderBufferDirect(V,I,H,O,M,ut),O.side=ha):T.renderBufferDirect(V,I,H,O,M,ut),M.onAfterRender(T,I,V,H,O,ut)}function Xi(M,I,V){I.isScene!==!0&&(I=He);let H=Mt.get(M),O=x.state.lights,ut=x.state.shadowsArray,yt=O.state.version,wt=F.getParameters(M,O.state,ut,I,V),L=F.getProgramCacheKey(wt),X=H.programs;H.environment=M.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(M.isMeshStandardMaterial?_:w).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,X===void 0&&(M.addEventListener("dispose",zt),X=new Map,H.programs=X);let j=X.get(L);if(j!==void 0){if(H.currentProgram===j&&H.lightsStateVersion===yt)return Ir(M,wt),j}else wt.uniforms=F.getUniforms(M),M.onBeforeCompile(wt,T),j=F.acquireProgram(wt,L),X.set(L,j),H.uniforms=wt.uniforms;let q=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(q.clippingPlanes=Nt.uniform),Ir(M,wt),H.needsLights=Dd(M),H.lightsStateVersion=yt,H.needsLights&&(q.ambientLightColor.value=O.state.ambient,q.lightProbe.value=O.state.probe,q.directionalLights.value=O.state.directional,q.directionalLightShadows.value=O.state.directionalShadow,q.spotLights.value=O.state.spot,q.spotLightShadows.value=O.state.spotShadow,q.rectAreaLights.value=O.state.rectArea,q.ltc_1.value=O.state.rectAreaLTC1,q.ltc_2.value=O.state.rectAreaLTC2,q.pointLights.value=O.state.point,q.pointLightShadows.value=O.state.pointShadow,q.hemisphereLights.value=O.state.hemi,q.directionalShadowMap.value=O.state.directionalShadowMap,q.directionalShadowMatrix.value=O.state.directionalShadowMatrix,q.spotShadowMap.value=O.state.spotShadowMap,q.spotLightMatrix.value=O.state.spotLightMatrix,q.spotLightMap.value=O.state.spotLightMap,q.pointShadowMap.value=O.state.pointShadowMap,q.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=j,H.uniformsList=null,j}function Lr(M){if(M.uniformsList===null){let I=M.currentProgram.getUniforms();M.uniformsList=ol.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Ir(M,I){let V=Mt.get(M);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Rd(M,I,V,H,O){I.isScene!==!0&&(I=He),bt.resetTextureUnits();let ut=I.fog,yt=H.isMeshStandardMaterial?I.environment:null,wt=S===null?T.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:yr,L=(H.isMeshStandardMaterial?_:w).get(H.envMap||yt),X=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,j=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),q=!!V.morphAttributes.position,rt=!!V.morphAttributes.normal,mt=!!V.morphAttributes.color,St=Ga;H.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(St=T.toneMapping);let Wt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,qt=Wt!==void 0?Wt.length:0,Rt=Mt.get(H),ve=x.state.lights;if(it===!0&&(lt===!0||M!==B)){let $e=M===B&&H.id===U;Nt.setState(H,M,$e)}let $t=!1;H.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ve.state.version||Rt.outputColorSpace!==wt||O.isBatchedMesh&&Rt.batching===!1||!O.isBatchedMesh&&Rt.batching===!0||O.isBatchedMesh&&Rt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Rt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Rt.instancing===!1||!O.isInstancedMesh&&Rt.instancing===!0||O.isSkinnedMesh&&Rt.skinning===!1||!O.isSkinnedMesh&&Rt.skinning===!0||O.isInstancedMesh&&Rt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Rt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Rt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Rt.instancingMorph===!1&&O.morphTexture!==null||Rt.envMap!==L||H.fog===!0&&Rt.fog!==ut||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Nt.numPlanes||Rt.numIntersection!==Nt.numIntersection)||Rt.vertexAlphas!==X||Rt.vertexTangents!==j||Rt.morphTargets!==q||Rt.morphNormals!==rt||Rt.morphColors!==mt||Rt.toneMapping!==St||Rt.morphTargetsCount!==qt)&&($t=!0):($t=!0,Rt.__version=H.version);let Ge=Rt.currentProgram;$t===!0&&(Ge=Xi(H,I,O));let Fn=!1,me=!1,ye=!1,ue=Ge.getUniforms(),qe=Rt.uniforms;if(At.useProgram(Ge.program)&&(Fn=!0,me=!0,ye=!0),H.id!==U&&(U=H.id,me=!0),Fn||B!==M){At.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ue.setValue(R,"projectionMatrix",M.projectionMatrix),ue.setValue(R,"viewMatrix",M.matrixWorldInverse);let tn=ue.map.cameraPosition;tn!==void 0&&tn.setValue(R,gt.setFromMatrixPosition(M.matrixWorld)),he.logarithmicDepthBuffer&&ue.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ue.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),B!==M&&(B=M,me=!0,ye=!0)}if(O.isSkinnedMesh){ue.setOptional(R,O,"bindMatrix"),ue.setOptional(R,O,"bindMatrixInverse");let $e=O.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ue.setValue(R,"boneTexture",$e.boneTexture,bt))}O.isBatchedMesh&&(ue.setOptional(R,O,"batchingTexture"),ue.setValue(R,"batchingTexture",O._matricesTexture,bt),ue.setOptional(R,O,"batchingIdTexture"),ue.setValue(R,"batchingIdTexture",O._indirectTexture,bt),ue.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&ue.setValue(R,"batchingColorTexture",O._colorsTexture,bt));let je=V.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&It.update(O,V,Ge),(me||Rt.receiveShadow!==O.receiveShadow)&&(Rt.receiveShadow=O.receiveShadow,ue.setValue(R,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(qe.envMap.value=L,qe.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(qe.envMapIntensity.value=I.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=dD()),me&&(ue.setValue(R,"toneMappingExposure",T.toneMappingExposure),Rt.needsLights&&Kc(qe,ye),ut&&H.fog===!0&&Et.refreshFogUniforms(qe,ut),Et.refreshMaterialUniforms(qe,H,ct,ot,x.state.transmissionRenderTarget[M.id]),ol.upload(R,Lr(Rt),qe,bt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ol.upload(R,Lr(Rt),qe,bt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ue.setValue(R,"center",O.center),ue.setValue(R,"modelViewMatrix",O.modelViewMatrix),ue.setValue(R,"normalMatrix",O.normalMatrix),ue.setValue(R,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let $e=H.uniformsGroups;for(let tn=0,qa=$e.length;tn<qa;tn++){let Li=$e[tn];dt.update(Li,Ge),dt.bind(Li,Ge)}}return Ge}function Kc(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Dd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(M,I,V){let H=Mt.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Mt.get(M.texture).__webglTexture=I,Mt.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){let V=Mt.get(M);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0};let Qc=R.createFramebuffer();this.setRenderTarget=function(M,I=0,V=0){S=M,N=I,E=V;let H=!0,O=null,ut=!1,yt=!1;if(M){let L=Mt.get(M);if(L.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(L.__webglFramebuffer===void 0)bt.setupRenderTarget(M);else if(L.__hasExternalTextures)bt.rebindTextures(M,Mt.get(M.texture).__webglTexture,Mt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let q=M.depthTexture;if(L.__boundDepthTexture!==q){if(q!==null&&Mt.has(q)&&(M.width!==q.image.width||M.height!==q.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");bt.setupDepthRenderbuffer(M)}}let X=M.texture;(X.isData3DTexture||X.isDataArrayTexture||X.isCompressedArrayTexture)&&(yt=!0);let j=Mt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(j[I])?O=j[I][V]:O=j[I],ut=!0):M.samples>0&&bt.useMultisampledRTT(M)===!1?O=Mt.get(M).__webglMultisampledFramebuffer:Array.isArray(j)?O=j[V]:O=j,k.copy(M.viewport),Y.copy(M.scissor),$=M.scissorTest}else k.copy(ne).multiplyScalar(ct).floor(),Y.copy(Jt).multiplyScalar(ct).floor(),$=Yt;if(V!==0&&(O=Qc),At.bindFramebuffer(R.FRAMEBUFFER,O)&&H&&At.drawBuffers(M,O),At.viewport(k),At.scissor(Y),At.setScissorTest($),ut){let L=Mt.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,L.__webglTexture,V)}else if(yt){let L=I;for(let X=0;X<M.textures.length;X++){let j=Mt.get(M.textures[X]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+X,j.__webglTexture,V,L)}}else if(M!==null&&V!==0){let L=Mt.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,L.__webglTexture,V)}U=-1},this.readRenderTargetPixels=function(M,I,V,H,O,ut,yt,wt=0){if(!(M&&M.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let L=Mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(L=L[yt]),L){At.bindFramebuffer(R.FRAMEBUFFER,L);try{let X=M.textures[wt],j=X.format,q=X.type;if(!he.textureFormatReadable(j)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(q)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-H&&V>=0&&V<=M.height-O&&(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+wt),R.readPixels(I,V,H,O,Pt.convert(j),Pt.convert(q),ut))}finally{let X=S!==null?Mt.get(S).__webglFramebuffer:null;At.bindFramebuffer(R.FRAMEBUFFER,X)}}},this.readRenderTargetPixelsAsync=async function(M,I,V,H,O,ut,yt,wt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let L=Mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(L=L[yt]),L)if(I>=0&&I<=M.width-H&&V>=0&&V<=M.height-O){At.bindFramebuffer(R.FRAMEBUFFER,L);let X=M.textures[wt],j=X.format,q=X.type;if(!he.textureFormatReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,rt),R.bufferData(R.PIXEL_PACK_BUFFER,ut.byteLength,R.STREAM_READ),M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+wt),R.readPixels(I,V,H,O,Pt.convert(j),Pt.convert(q),0);let mt=S!==null?Mt.get(S).__webglFramebuffer:null;At.bindFramebuffer(R.FRAMEBUFFER,mt);let St=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await CS(R,St,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,rt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ut),R.deleteBuffer(rt),R.deleteSync(St),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,V=0){let H=Math.pow(2,-V),O=Math.floor(M.image.width*H),ut=Math.floor(M.image.height*H),yt=I!==null?I.x:0,wt=I!==null?I.y:0;bt.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,yt,wt,O,ut),At.unbindTexture()};let jc=R.createFramebuffer(),Or=R.createFramebuffer();this.copyTextureToTexture=function(M,I,V=null,H=null,O=0,ut=null){ut===null&&(O!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=O,O=0):ut=0);let yt,wt,L,X,j,q,rt,mt,St,Wt=M.isCompressedTexture?M.mipmaps[ut]:M.image;if(V!==null)yt=V.max.x-V.min.x,wt=V.max.y-V.min.y,L=V.isBox3?V.max.z-V.min.z:1,X=V.min.x,j=V.min.y,q=V.isBox3?V.min.z:0;else{let je=Math.pow(2,-O);yt=Math.floor(Wt.width*je),wt=Math.floor(Wt.height*je),M.isDataArrayTexture?L=Wt.depth:M.isData3DTexture?L=Math.floor(Wt.depth*je):L=1,X=0,j=0,q=0}H!==null?(rt=H.x,mt=H.y,St=H.z):(rt=0,mt=0,St=0);let qt=Pt.convert(I.format),Rt=Pt.convert(I.type),ve;I.isData3DTexture?(bt.setTexture3D(I,0),ve=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(bt.setTexture2DArray(I,0),ve=R.TEXTURE_2D_ARRAY):(bt.setTexture2D(I,0),ve=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);let $t=R.getParameter(R.UNPACK_ROW_LENGTH),Ge=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Fn=R.getParameter(R.UNPACK_SKIP_PIXELS),me=R.getParameter(R.UNPACK_SKIP_ROWS),ye=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Wt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Wt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,X),R.pixelStorei(R.UNPACK_SKIP_ROWS,j),R.pixelStorei(R.UNPACK_SKIP_IMAGES,q);let ue=M.isDataArrayTexture||M.isData3DTexture,qe=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){let je=Mt.get(M),$e=Mt.get(I),tn=Mt.get(je.__renderTarget),qa=Mt.get($e.__renderTarget);At.bindFramebuffer(R.READ_FRAMEBUFFER,tn.__webglFramebuffer),At.bindFramebuffer(R.DRAW_FRAMEBUFFER,qa.__webglFramebuffer);for(let Li=0;Li<L;Li++)ue&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Mt.get(M).__webglTexture,O,q+Li),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Mt.get(I).__webglTexture,ut,St+Li)),R.blitFramebuffer(X,j,yt,wt,rt,mt,yt,wt,R.DEPTH_BUFFER_BIT,R.NEAREST);At.bindFramebuffer(R.READ_FRAMEBUFFER,null),At.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||Mt.has(M)){let je=Mt.get(M),$e=Mt.get(I);At.bindFramebuffer(R.READ_FRAMEBUFFER,jc),At.bindFramebuffer(R.DRAW_FRAMEBUFFER,Or);for(let tn=0;tn<L;tn++)ue?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,je.__webglTexture,O,q+tn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,je.__webglTexture,O),qe?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,$e.__webglTexture,ut,St+tn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,$e.__webglTexture,ut),O!==0?R.blitFramebuffer(X,j,yt,wt,rt,mt,yt,wt,R.COLOR_BUFFER_BIT,R.NEAREST):qe?R.copyTexSubImage3D(ve,ut,rt,mt,St+tn,X,j,yt,wt):R.copyTexSubImage2D(ve,ut,rt,mt,X,j,yt,wt);At.bindFramebuffer(R.READ_FRAMEBUFFER,null),At.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else qe?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(ve,ut,rt,mt,St,yt,wt,L,qt,Rt,Wt.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(ve,ut,rt,mt,St,yt,wt,L,qt,Wt.data):R.texSubImage3D(ve,ut,rt,mt,St,yt,wt,L,qt,Rt,Wt):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ut,rt,mt,yt,wt,qt,Rt,Wt.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ut,rt,mt,Wt.width,Wt.height,qt,Wt.data):R.texSubImage2D(R.TEXTURE_2D,ut,rt,mt,yt,wt,qt,Rt,Wt);R.pixelStorei(R.UNPACK_ROW_LENGTH,$t),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ge),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Fn),R.pixelStorei(R.UNPACK_SKIP_ROWS,me),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ye),ut===0&&I.generateMipmaps&&R.generateMipmap(ve),At.unbindTexture()},this.initRenderTarget=function(M){Mt.get(M).__webglFramebuffer===void 0&&bt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?bt.setTextureCube(M,0):M.isData3DTexture?bt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?bt.setTexture2DArray(M,0):bt.setTexture2D(M,0),At.unbindTexture()},this.resetState=function(){N=0,E=0,S=null,At.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),n.unpackColorSpace=ge._getUnpackColorSpace()}};var mD=(...e)=>e.filter(Boolean).join(" "),cl=48,Cd=32,gD=76,pn=Math.PI*2,sM=[{src:"https://pro.reactbits.dev/demo-media/abstract-rose-balance.webp",alt:"Tilted raspberry rounded rectangle and tangerine disc on a rose-pink field",title:"Rose balance",subtitle:"A bright point of balance"},{src:"https://pro.reactbits.dev/demo-media/abstract-violet-steps.webp",alt:"Three interlocking violet and pink stepped planes with an amber edge",title:"Violet steps",subtitle:"Three planes in rhythm"},{src:"https://pro.reactbits.dev/demo-media/abstract-fuchsia-wave.webp",alt:"Broad fuchsia S-shaped band with a coral gradient across deep plum",title:"Fuchsia wave",subtitle:"One continuous curve"},{src:"https://pro.reactbits.dev/demo-media/abstract-coral-fold.webp",alt:"Broad vermilion and orange folded plane over deep plum with fine grain",title:"Coral fold",subtitle:"A bold change of direction"},{src:"https://pro.reactbits.dev/demo-media/abstract-amber-loop.webp",alt:"Tilted golden-amber loop on a grainy raspberry-purple field",title:"Amber loop",subtitle:"Warmth around an open center"},{src:"https://pro.reactbits.dev/demo-media/abstract-pink-eclipse.webp",alt:"Coral-pink disc crossing a violet diagonal plane on a grainy purple field",title:"Pink eclipse",subtitle:"A disc across the diagonal"},{src:"https://pro.reactbits.dev/demo-media/abstract-plum-ribbon.webp",alt:"Intersecting pink and plum diagonal ribbons on a coral-magenta field",title:"Plum ribbon",subtitle:"Two ribbons, one crossing"},{src:"https://pro.reactbits.dev/demo-media/abstract-orchid-orbit.webp",alt:"Fuchsia ring and peach crescent on a grainy orchid-purple field",title:"Orchid orbit",subtitle:"Color in orbit"}],Fe=(e,t,n)=>Math.min(n,Math.max(t,e)),rM=(e,t,n)=>{let i=Fe((n-e)/(t-e),0,1);return i*i*(3-2*i)},ul=e=>((e+Math.PI)%pn+pn)%pn-Math.PI,xD=e=>{let t=window.matchMedia("(prefers-reduced-motion: reduce)");return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},vD=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,lM=e=>{let t=e.trim().replace("#","");if(!/^[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(t))return null;let n=t.length===3?t.replace(/./g,i=>i+i):t;return[0,2,4].map(i=>Number.parseInt(n.slice(i,i+2),16)/255)},_D=e=>{let t=lM(e);return t?.2126*t[0]+.7152*t[1]+.0722*t[2]>.6:!1},qg=(e,t,n,i,a,s)=>{let r=pn/Math.max(a,.02),o=Math.max(1,Math.ceil(i/(1/240))),l=i/o,c=t,f=e;for(let d=0;d<o;d++)c+=(r*r*(n-f)-2*s*r*c)*l,f+=c*l;return[f,c]},oM={position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},yD={position:"absolute",inset:0,touchAction:"pan-y",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none"},bD={position:"absolute",left:"50%",bottom:22,display:"flex",flexDirection:"column",alignItems:"center",gap:4,whiteSpace:"nowrap",textAlign:"center",pointerEvents:"none",opacity:0,transform:"translateX(-50%)",willChange:"opacity"},SD={fontSize:15,fontWeight:600,lineHeight:1.25,letterSpacing:"-0.01em"},MD={fontSize:13,lineHeight:1.4,opacity:.55},TD=`
attribute vec4 iRect;
attribute vec4 iLook;
attribute vec4 iShape;
uniform vec2 uView;
varying vec2 vLocal;
varying vec4 vRect;
varying vec4 vLook;
varying vec4 vShape;

void main() {
  float shadowReach = iShape.y > 0.001 ? iRect.w * 0.42 : 0.0;
  vec2 halfSize = iRect.zw + iLook.x * 1.4 + 2.0 + shadowReach;
  vec2 local = position.xy * halfSize;
  vec2 px = iRect.xy + local;
  gl_Position = vec4(px / uView * 2.0 - 1.0, 0.0, 1.0);
  vLocal = local;
  vRect = iRect;
  vLook = iLook;
  vShape = iShape;
}
`,ED=`
precision highp float;
precision highp sampler2DArray;

uniform sampler2DArray uImages;
uniform float uLayerSize;
uniform float uFade[${Cd}];
uniform vec3 uBackground;
uniform vec3 uPlaceholder;
uniform float uDpr;
varying vec2 vLocal;
varying vec4 vRect;
varying vec4 vLook;
varying vec4 vShape;

const vec2 DISC[8] = vec2[8](
  vec2(0.2500, 0.0000), vec2(-0.3193, 0.2925), vec2(0.0489, -0.5569), vec2(0.4024, 0.5249),
  vec2(-0.7385, -0.1306), vec2(0.6996, -0.4450), vec2(-0.2340, 0.8705), vec2(-0.4463, -0.8593)
);

float roundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  vec2 halfSize = vRect.zw;
  float radius = min(vShape.x, min(halfSize.x, halfSize.y));
  float blur = vLook.x;
  float alpha = vLook.y;
  int layer = int(vLook.z + 0.5);
  float soft = max(0.7 / uDpr, blur * 0.85);
  float sd = roundBox(vLocal, halfSize, radius);
  float coverage = 1.0 - smoothstep(-soft, soft, sd);

  vec2 uv = vLocal / (2.0 * halfSize);
  vec2 tuv = vec2(uv.x + 0.5, 0.5 - uv.y);
  vec2 gx = dFdx(tuv);
  vec2 gy = dFdy(tuv);
  vec3 color;
  if (blur < 0.45) {
    color = textureGrad(uImages, vec3(tuv, float(layer)), gx, gy).rgb;
  } else {
    vec2 reach = blur / (2.0 * halfSize);
    float texels = blur / (2.0 * halfSize.y) * uLayerSize;
    float lod = log2(max(texels * 0.55, 1.0));
    vec3 c = textureLod(uImages, vec3(tuv, float(layer)), lod).rgb;
    vec3 sum = c * c * 0.2;
    for (int k = 0; k < 8; k++) {
      vec3 s = textureLod(uImages, vec3(tuv + DISC[k] * reach * vec2(1.0, -1.0), float(layer)), lod).rgb;
      sum += s * s * 0.1;
    }
    color = sqrt(sum);
  }
  color = mix(uPlaceholder, color, uFade[layer]);
  color = mix(color, uBackground, vLook.w);

  vec4 result = vec4(color, 1.0) * coverage * alpha;
  if (vShape.y > 0.001) {
    float drop = halfSize.y * 0.1 + 2.0;
    float spread = halfSize.y * 0.22 + blur;
    float shadowDistance = roundBox(vLocal + vec2(0.0, drop), halfSize * vec2(0.9, 0.86), radius);
    float shade = vShape.y * (1.0 - smoothstep(-spread, spread, shadowDistance)) * alpha * 0.5;
    result += vec4(0.0, 0.0, 0.0, shade) * (1.0 - result.a);
  }
  if (result.a < 0.002) discard;
  gl_FragColor = result;
}
`,AD=(e,t,n,i,a,s,r)=>{let o=e.ownerDocument,l=o.defaultView??window,c=o.createElement("canvas");c.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block";let f;try{f=new Ed({canvas:c,alpha:!0,antialias:!1,premultipliedAlpha:!0,powerPreference:"high-performance"})}catch{return null}t.appendChild(c),f.setClearColor(0,0);let d=new Ic,h=new nl(-1,1,1,-1,-1,1),p=new Mr(2,2),v=new Fc;v.index=p.index,v.setAttribute("position",p.getAttribute("position"));let y=new Float32Array(cl*4),m=new Float32Array(cl*4),u=new Float32Array(cl*4),g=new Sr(y,4),x=new Sr(m,4),b=new Sr(u,4);g.setUsage(qc),x.setUsage(qc),b.setUsage(qc),v.setAttribute("iRect",g),v.setAttribute("iLook",x),v.setAttribute("iShape",b),v.instanceCount=0;let C=new le(0,0,0),T=new le(.5,.5,.5),A=new Array(Cd).fill(0),N=512,E=0,S=1,U=new Uint8Array(N*N*4),B=new Ls(U,N,N,1),k=o.createElement("canvas"),Y=k.getContext("2d",{willReadFrequently:!0}),$=new jn({uniforms:{uImages:{value:B},uLayerSize:{value:N},uFade:{value:A},uBackground:{value:C},uPlaceholder:{value:T},uDpr:{value:1},uView:{value:new Me(1,1)}},vertexShader:TD,fragmentShader:ED,transparent:!0,premultipliedAlpha:!0,depthTest:!1,depthWrite:!1}),Q=new gi(v,$);Q.frustumCulled=!1,d.add(Q);let st=Array.from({length:cl},()=>({alpha:1,phi:0,x:0,y:0,z:1,hw:0,hh:0,lift:0,order:0})),G=new Float64Array(cl),ot=[],ct={x:0,y:0,z:1,hw:0,hh:0},vt=[],jt="",ne="",Jt=0,Yt=0,Z=1,it=!1,lt=0,Ut=0,gt=null,Xt=0,He=.9,Bt=0,de=0,R=0,Zt=0,Ht=0,he=0,At=!1,Ft=null,Mt=null,bt=-1,w=-1,_=-1,P=0,K=-1,nt=!1,F=0,Et=0,pt=!1,Tt="waiting",Nt=0,at=0,ft=0,It=!1,Dt=0,_t=0,Pt=!1,D=!1,dt=!1,ht=-10,et=null,z={F:300,cx:0,cy:0,D:3.4,tilt:.4,roll:0,s:.34,aspect:1,zFront:2.4,zMin:2.4,zMax:4.4,frontHalf:40,key:""},tt=()=>performance.now()/1e3,Ct=()=>Math.max(Math.min(a.current.length,Cd),1),zt=()=>{let L=Math.round(i.current.count);return Fe(L>0?L:a.current.length,1,cl)},xe=L=>L%Ct(),pe=()=>{let L=i.current,X=zt(),j=Fe(Math.round(L.cluster),1,X),q=Math.ceil(X/j),rt=pn/X,mt=Fe(L.spread,.05,1);for(let St=0;St<X;St++){let Wt=Math.floor(St/j),qt=St%j,Rt=Math.min(j,X-Wt*j);G[St]=-(Wt/q*pn+(qt-(Rt-1)/2)*rt*mt)}return X},vi=(L,X)=>{let j=X>N*1.25;return E===L&&!j?!1:(N=E===0||j?X:N,E=L,U=new Uint8Array(N*N*4*L),B.dispose(),B=new Ls(U,N,N,L),B.format=$n,B.type=Ni,B.colorSpace=zn,B.minFilter=pa,B.magFilter=On,B.wrapS=mi,B.wrapT=mi,B.generateMipmaps=!0,B.anisotropy=Math.min(4,f.capabilities.getMaxAnisotropy()),B.needsUpdate=!0,$.uniforms.uImages.value=B,$.uniforms.uLayerSize.value=N,vt.forEach(q=>{q.drawn=!1,q.shown=!1}),!0)},ti=L=>{let X=vt[L];if(!X||!X.ready||X.drawn||!Y)return!1;let j=X.image,q=j.naturalWidth,rt=j.naturalHeight;if(!q||!rt)return!1;let mt=S,St=q,Wt=rt;q/rt>mt?St=rt*mt:Wt=q/mt,k.width=N,k.height=N;try{Y.drawImage(j,(q-St)/2,(rt-Wt)/2,St,Wt,0,0,N,N);let qt=Y.getImageData(0,0,N,N).data;U.set(qt,L*N*N*4)}catch{return!1}return X.drawn=!0,X.shown=!0,B.addLayerUpdate(L),B.needsUpdate=!0,!0},hl=()=>{let L=a.current.slice(0,Cd),X=L.map(q=>q.src).join("\0"),j=a.current.map(q=>`${q.title??q.alt}${q.subtitle??""}`).join("\0");j!==ne&&(ne=j,_=-1),X!==jt&&(jt=X,vt.forEach(q=>{q.image.onload=null}),vt=L.map(q=>{let rt=new Image;rt.crossOrigin="anonymous",rt.decoding="async";let mt={image:rt,ready:!1,drawn:!1,shown:!1,fade:0};return rt.onload=()=>{if(D)return;let St=()=>{D||mt.ready||(mt.ready=!0,mn())};rt.decode().then(St,St)},rt.src=q.src,mt}),E=0,A.fill(0))},Xa=()=>{let L=i.current,X=Math.round(e.clientWidth),j=Math.round(e.clientHeight);if(X<2||j<2)return it=!1,!1;let q=Math.min(l.devicePixelRatio||1,Math.max(L.dpr,.5));return it&&X===Jt&&j===Yt&&q===Z?!1:(it=!0,Jt=X,Yt=j,Z=q,f.setPixelRatio(Z),f.setSize(Jt,Yt,!1),!0)},Ur=()=>{let L=i.current.backgroundColor;if(lM(L))C.setStyle(L,zn);else{let j=e,q=!1;for(;j&&!q;){let rt=l.getComputedStyle(j).backgroundColor;rt&&rt!=="transparent"&&!/rgba\([^)]*,\s*0\)$/.test(rt)&&(C.setStyle(rt,zn),q=!0),j=j.parentElement}if(!q){let rt=new le;rt.setStyle(l.getComputedStyle(e).color||"#fff",zn),C.setHex(rt.r+rt.g+rt.b>1.5?657930:16777215,zn)}}let X=C.r*.2126+C.g*.7152+C.b*.0722>.6;T.copy(C).lerp(new le(X?0:16777215),.08)},Bn=(L,X,j)=>{let q=Math.sin(j),rt=Math.cos(j),mt=Math.sin(L),St=-z.D*q,Wt=Math.cos(L)-z.D*rt;if(X){let ye=Math.hypot(mt,St,Wt);mt-=mt/ye*X,St-=St/ye*X,Wt-=Wt/ye*X}let qt=-(St*q+Wt*rt),Rt=St*rt-Wt*q,ve=z.F/Math.max(qt,.05),$t=mt*ve,Ge=Rt*ve,Fn=Math.cos(z.roll),me=Math.sin(z.roll);return ct.x=z.cx+$t*Fn-Ge*me,ct.y=z.cy+$t*me+Ge*Fn,ct.z=qt,ct.hh=z.s*.5*ve,ct.hw=ct.hh*z.aspect,ct},dl=()=>{let L=i.current,X=L.captions?gD:0,j=[Jt,Yt,X,L.size,L.adaptiveLayout,zt(),L.aspect,L.tilt,L.roll,L.distance,L.scale].join("|");if(j===z.key)return;if(z.key=j,z.s=Fe(L.size,.08,1.2),z.aspect=Fe(L.aspect,.4,2.5),z.D=Math.max(Fe(L.distance,1.5,14),1.25+z.s),z.tilt=Fe(L.tilt,-80,80)*Math.PI/180,z.roll=Fe(L.roll,-90,90)*Math.PI/180,L.adaptiveLayout){let me=pn/Math.max(zt(),3),ye=z.D-Math.cos(z.tilt),ue=z.D-Math.cos(me)*Math.cos(z.tilt),qe=Math.sin(z.tilt)/ye*Math.sin(z.roll),je=tn=>(Math.sin(tn)*Math.cos(z.roll)+Math.cos(tn)*Math.sin(z.tilt)*Math.sin(z.roll))/ue,$e=Math.min(Math.abs(je(me)-qe),Math.abs(je(-me)-qe));z.s=$e*ye/(z.aspect*(.2+(1+ye/ue)/2))}z.F=1,z.cx=0,z.cy=0;let q=1/0,rt=-1/0,mt=1/0,St=-1/0,Wt=1/0,qt=-1/0;for(let me=0;me<96;me++){let ye=Bn(me/96*pn,0,z.tilt);q=Math.min(q,ye.x-ye.hw),rt=Math.max(rt,ye.x+ye.hw),mt=Math.min(mt,ye.y-ye.hh),St=Math.max(St,ye.y+ye.hh),Wt=Math.min(Wt,ye.z),qt=Math.max(qt,ye.z)}let Rt=Math.min(Jt,Yt)*.06+8,ve=Math.max(Jt-Rt*2,40),$t=Math.max(Yt-X-Rt*2,40),Ge=Fe((1.1-ve/$t)*.6,0,.4),Fn=Math.min(ve*(1+Ge)/(rt-q),$t/(St-mt));if(z.F=Fn*Fe(L.scale,.2,1.5),z.cx=Jt/2-z.F*((q+rt)/2),z.cy=X+(Yt-X)/2-z.F*((mt+St)/2),L.adaptiveLayout){let me=Bn(0,0,z.tilt).z,ye=Math.min(560,Math.max(340,Jt*.34),(Yt-140)*z.aspect);z.F=ye*me/(z.s*z.aspect),z.cx=0,z.cy=0;let ue=Bn(0,0,z.tilt),qe=ue.x,je=ue.y;z.cx=Jt/2-qe,z.cy=(Yt-X)/2+X-je}z.zMin=Wt,z.zMax=qt,z.zFront=Bn(0,0,z.tilt).z,z.frontHalf=Bn(0,0,z.tilt).hh,At||(Ht=z.zFront,At=!0)},mn=()=>{D||dt||!Pt||Dt||(Dt=requestAnimationFrame(Dd))},Ui=(L=2.4)=>{F=Math.max(F,tt()+L)},Fs=(L,X)=>{gt===null&&(Xt=Ut),gt=L,He=X,mn()},Wa=L=>{let X=zt(),j=0,q=1/0;for(let rt=0;rt<X;rt++){let mt=Math.abs(ul(G[rt]+L));mt<q&&(q=mt,j=rt)}return j},Xi=L=>{let X=pe(),j=(Math.round(L)%X+X)%X;Ft=j,r.onPick(xe(j));let q=gt??lt;Fs(q-ul(G[j]+q),i.current.reduced?.06:.95),Ui()},Lr=L=>{let X=pe(),j=Ft??Wa(gt??lt);Xi((j+(L>0?1:-1)+X)%X)},Ir=()=>{Ft=null,Ui(1.2),mn()},Rd=()=>{Tt="waiting",at=0,Ft=null,gt=null,Ut=0,Bt=0,mn()},Kc=(L,X)=>{let j=e.getBoundingClientRect(),q=L-j.left,rt=Yt-(X-j.top);for(let mt=ot.length-1;mt>=0;mt--){let St=st[ot[mt]];if(Math.abs(q-St.x)<=St.hw&&Math.abs(rt-St.y)<=St.hh)return ot[mt]}return null};function Dd(L){if(Dt=0,D||dt||!it&&(Xa(),!it))return;let X=i.current,j=_t&&L-_t<100?Math.min(Math.max((L-_t)/1e3,0),.05):1/60;_t=L;let q=tt(),rt=X.reduced,mt=!1;q-ht>1.2&&(ht=q,Ur()),Xa(),dl();let St=pe(),Wt=Math.max(vt.length,1),qt=Fe(X.aspect,.4,2.5);Math.abs(qt-S)>.001&&(S=qt,vt.forEach(Ot=>{Ot.drawn=!1}));let Rt=Math.max(z.frontHalf*2*Math.max(qt,1),1)*Z,ve=Fe(Math.ceil(Rt/128)*128,256,1024);vi(Wt,ve)&&(mt=!0);let $t=xe(Wa(lt)),Ge=!1;for(let Ot=0;Ot<vt.length&&!Ge;Ot++){let ie=($t+(Ot%2?-(Ot+1)/2:Ot/2)+vt.length*4)%vt.length,gn=vt[ie];gn&&gn.ready&&!gn.drawn&&(Ge=ti(ie))}Ge&&(mt=!0);let Fn=!0;for(let Ot=0;Ot<vt.length;Ot++){let ie=vt[Ot];ie.drawn||(Fn=!1),ie.shown&&ie.fade<1&&(ie.fade=rt||Tt!=="done"?1:Math.min(1,ie.fade+j/.45),mt=!0),A[Ot]=ie.shown?ie.fade:0}Tt==="waiting"&&(at||(at=q),mt=!0,(Fn||q-at>2.2)&&(lt=-G[Fe(s,0,St-1)],ft=lt,Ut=0,Bt=0,rt||!X.intro?Tt="done":(Tt="running",Nt=q)));let me=1,ye=1,ue=1;if(Tt==="running"){let Ot=q-Nt;ue=rM(0,.26,Ot),ye=rM(.16,.46,Ot);let ie=Fe((Ot-.22)/1.9,0,1);me=ie<.5?4*ie*ie*ie:1-Math.pow(-2*ie+2,3)/2,me=1-Math.pow(1-me,1.35),mt=!0,Ot>2.15&&(Tt="done",me=1,ye=1,ue=1,Ui(.4))}else Tt==="waiting"&&(ye=0,ue=0);let qe=X.speed*pn/60,je=!!et||X.pauseOnHover&&nt,$e=X.paused||X.held||rt||Tt!=="done",tn=je||Ft!==null||q<F,qa=$e||tn?0:1;if(Bt+=(qa-Bt)*(1-Math.exp(-j/(qa>Bt?1.1:.35))),Math.abs(qa-Bt)>.001?mt=!0:Bt=qa,pt&&q-Et>.16&&(pt=!1,gt!==null)){let Ot=Wa(gt);gt-=ul(G[Ot]+gt)}if(et&&et.moved)mt=!0;else if(gt!==null)[lt,Xt]=qg(lt,Xt,gt,j,rt?.06:He,.94),Ut=Xt,Math.abs(lt-gt)<1e-4&&Math.abs(Xt)<.001?(lt=gt,gt=null,Ut=0):mt=!0;else if(Tt==="done"){let Ot=qe*Bt;Ut+=(Ot-Ut)*(1-Math.exp(-j/.9)),Math.abs(Ut-Ot)<1e-5&&(Ut=Ot),lt+=Ut*j,(Math.abs(Ut)>1e-5||Math.abs(Ot)>1e-5)&&(mt=!0)}if(lt>1e4||lt<-1e4){let Ot=Math.round(lt/pn)*pn;lt-=Ot,gt!==null&&(gt-=Ot),et&&(et.theta-=Ot)}let Li=et&&et.moved?Zt:0;[de,R]=qg(de,R,Li,j,rt?.06:.75,.96),Math.abs(de-Li)<1e-4&&Math.abs(R)<1e-4?(de=Li,R=0):mt=!0;let pM=Fe(z.tilt+de*Math.PI/180,-1.45,1.45),mM=X.speed<0?-1:1,Nd=Fe(s,0,St-1),gM=Ft!==null&&Ft<St?Ft:-1;ot.length=0;for(let Ot=0;Ot<St;Ot++){let ie=st[Ot],gn=G[Ot]+lt,pl=0;if(Tt!=="done"){let jg=G[Ot]-G[Nd],$g=mM>0?(jg%pn+pn)%pn:-((-jg%pn+pn)%pn);gn=ft+G[Nd]+$g*me,pl=Math.abs($g)*1e-4*(1-me)}let ml=Ot===gM?.16:0;ie.lift+=(ml-ie.lift)*(rt?1:1-Math.exp(-j/.22)),Math.abs(ie.lift-ml)>1e-4?mt=!0:ie.lift=ml;let en=Bn(gn,ie.lift,pM),Qg=.94+.06*ue;ie.phi=gn,ie.x=en.x,ie.y=en.y,ie.z=en.z,ie.hw=en.hw*Qg,ie.hh=en.hh*Qg,ie.order=en.z+pl,ie.alpha=Ot===Nd?ue:ye,ot.push(Ot)}ot.sort((Ot,ie)=>st[ie].order-st[Ot].order);let Pr=Ft!==null&&Ft<St?Ft:Mt!==null&&Mt<St?Mt:-1;if(Pr<0&&(Pr=Wa(lt),bt>=0&&bt<St&&Pr!==bt)){let Ot=Math.abs(ul(st[bt].phi)),ie=Math.abs(ul(st[Pr].phi));Ot-ie<.04&&(Pr=bt)}bt=Pr;let Vs=xe(bt);Vs!==w&&Tt==="done"&&(w=Vs,r.onFeature(Vs));let Zg=Tt!=="done"?z.zFront:Ft!==null&&Ft<St?st[Ft].z:Mt!==null&&Mt<St?st[Mt].z:z.zFront;[Ht,he]=qg(Ht,he,Zg,j,rt?.04:.42,1),(Math.abs(Ht-Zg)>1e-4||Math.abs(he)>1e-4)&&(mt=!0);let xM=Fe(X.aperture,0,1),vM=Math.max((z.zMax-z.zMin)/z.zMax,.05),Jg=z.frontHalf*2,_M=xM*.17*Jg/vM,yM=Jg*.2,bM=Fe(X.haze,0,1),SM=Fe(X.shadow,0,1),MM=Math.max(X.radius,0),TM=Math.max(z.zMax-z.zMin,.001);for(let Ot=0;Ot<St;Ot++){let ie=ot[Ot],gn=st[ie],pl=Fe((gn.z-z.zMin)/TM,0,1),ml=Math.min(_M*Math.abs(gn.z-Ht)/gn.z,yM),en=Ot*4;y[en]=gn.x,y[en+1]=gn.y,y[en+2]=gn.hw,y[en+3]=gn.hh,m[en]=ml,m[en+1]=gn.alpha,m[en+2]=xe(ie)%Wt,m[en+3]=bM*Math.pow(pl,1.25)*.85,u[en]=MM*gn.hh/Math.max(z.frontHalf,1),u[en+1]=SM*(1-.55*pl),u[en+2]=0,u[en+3]=0}v.instanceCount=St,g.needsUpdate=!0,x.needsUpdate=!0,b.needsUpdate=!0;let Kg=$.uniforms;Kg.uView.value.set(Jt,Yt),Kg.uDpr.value=Z;let EM=Math.abs(Ut)>1.4||et!==null&&et.moved,AM=X.captions&&Tt==="done"&&!EM;if(_!==Vs&&P<.02){_=Vs;let Ot=a.current[Vs];n.title.textContent=Ot?Ot.title??Ot.alt:"",n.subtitle.textContent=Ot?.subtitle??"",n.subtitle.style.display=Ot?.subtitle?"":"none"}let $c=AM&&_===Vs?1:0;P+=($c-P)*(rt?1:1-Math.exp(-j/($c>P?.2:.09))),Math.abs($c-P)<.003?P=$c:mt=!0,Math.abs(P-K)>.002&&(K=P,n.caption.style.opacity=P.toFixed(3)),f.render(d,h),(mt||et||F>q&&Tt==="done")&&mn()}let Qc=L=>{let X=i.current;if(L.pointerType!=="touch"&&(nt=!0,!et)){let j=Kc(L.clientX,L.clientY);j!==Mt&&(Mt=j);let q=j!==null?"pointer":X.draggable?"grab":"";e.style.cursor!==q&&(e.style.cursor=q)}if(et&&et.id===L.pointerId){let j=L.clientX-et.x,q=et.y-L.clientY;if(!et.moved&&Math.hypot(j,q)>6&&X.draggable){et.moved=!0,gt=null,Ft=null,Mt=null,Ut=0,e.style.cursor="grabbing";try{t.setPointerCapture(L.pointerId)}catch{}}if(et.moved){let rt=Math.cos(z.roll),mt=Math.sin(z.roll),St=j*rt+q*mt,Wt=-j*mt+q*rt,qt=Math.max(z.F/Math.max(z.zFront,.1),20);lt=et.theta+St/qt,Zt=Fe(-Wt/5,-38,38);let Rt=performance.now();for(et.samples.push({t:Rt,v:lt});et.samples.length>2&&Rt-et.samples[0].t>110;)et.samples.shift()}}mn()},jc=L=>{!L.isPrimary||L.button>0||(It=!1,et={id:L.pointerId,x:L.clientX,y:L.clientY,theta:lt,moved:!1,samples:[{t:performance.now(),v:lt}]},Ui(),mn())},Or=L=>{if(!et||et.id!==L.pointerId)return;let X=et;et=null;try{t.hasPointerCapture(L.pointerId)&&t.releasePointerCapture(L.pointerId)}catch{}if(X.moved){It=!0;let j=performance.now(),q=X.samples.filter(St=>j-St.t<110),rt=0;if(q.length>1&&j-q[q.length-1].t<60){let St=Math.max((q[q.length-1].t-q[0].t)/1e3,.008333333333333333);rt=(q[q.length-1].v-q[0].v)/St}let mt=i.current;Ut=mt.reduced?0:Fe(rt,-5,5),gt=null,e.style.cursor=mt.draggable?"grab":"",Ui()}mn()},M=L=>{if(It){It=!1;return}let X=Kc(L.clientX,L.clientY);if(X===null){Ft!==null&&Ir();return}let j=Math.abs(ul(st[X].phi))<.06;X===Ft&&j?r.onSelect(xe(X)):Xi(X)},I=L=>{et&&et.id===L.pointerId||(nt=!1,Mt=null,e.style.cursor="",Ft!==null?(Ft=null,Ui(1.6)):Ui(.6),mn())},V=L=>{if(!i.current.wheel)return;L.preventDefault();let X=L.deltaMode===1?16:L.deltaMode===2?Yt:1,j=Fe((Math.abs(L.deltaX)>Math.abs(L.deltaY)?L.deltaX:L.deltaY)*X,-240,240),q=pe();Ft=null,Fs((gt??lt)+j/100*(pn/q),i.current.reduced?.06:.55),pt=!0,Et=tt(),Ui()},H=L=>{if(L.target===e)if(L.key==="ArrowRight"||L.key==="ArrowDown")L.preventDefault(),Lr(1);else if(L.key==="ArrowLeft"||L.key==="ArrowUp")L.preventDefault(),Lr(-1);else if(L.key==="Home")L.preventDefault(),Xi(0);else if(L.key==="End")L.preventDefault(),Xi(zt()-1);else if(L.key==="Enter"){L.preventDefault();let X=Ft??Wa(lt);r.onSelect(xe(X))}else L.key==="Escape"&&Ft!==null&&(L.preventDefault(),Ir())};t.addEventListener("pointerdown",jc),t.addEventListener("pointermove",Qc),t.addEventListener("pointerup",Or),t.addEventListener("pointercancel",Or),t.addEventListener("pointerleave",I),t.addEventListener("click",M),t.addEventListener("wheel",V,{passive:!1}),e.addEventListener("keydown",H);let O=new ResizeObserver(()=>{Xa()&&mn()});O.observe(e);let ut=typeof IntersectionObserver>"u"?null:new IntersectionObserver(([L])=>{Pt=L.isIntersecting,Pt?(_t=0,mn()):(Dt&&cancelAnimationFrame(Dt),Dt=0)},{rootMargin:"80px"});ut?ut.observe(e):Pt=!0;let yt=L=>{L.preventDefault(),dt=!0,Dt&&cancelAnimationFrame(Dt),Dt=0},wt=()=>{dt=!1,jt="",hl(),mn()};return c.addEventListener("webglcontextlost",yt),c.addEventListener("webglcontextrestored",wt),Xa(),Ur(),hl(),f.compile(d,h),mn(),{sync:()=>{Xa(),Ur(),hl(),z.key="",mn()},step:Lr,show:Xi,release:Ir,replay:Rd,destroy:()=>{D=!0,Dt&&cancelAnimationFrame(Dt),ut?.disconnect(),O.disconnect(),t.removeEventListener("pointerdown",jc),t.removeEventListener("pointermove",Qc),t.removeEventListener("pointerup",Or),t.removeEventListener("pointercancel",Or),t.removeEventListener("pointerleave",I),t.removeEventListener("click",M),t.removeEventListener("wheel",V),e.removeEventListener("keydown",H),e.style.cursor="",c.removeEventListener("webglcontextlost",yt),c.removeEventListener("webglcontextrestored",wt),vt.forEach(L=>{L.image.onload=null}),B.dispose(),$.dispose(),v.dispose(),p.dispose(),f.dispose(),f.getContext().isContextLost()||f.forceContextLoss(),c.remove()}}},cM=(0,ce.forwardRef)(function({items:t=sM,count:n=0,startIndex:i=0,aspect:a=1,size:s=.38,adaptiveLayout:r=!1,radius:o=14,tilt:l=14,roll:c=-24,distance:f=3.2,scale:d=1,cluster:h=1,spread:p=.6,speed:v=1.2,aperture:y=.45,haze:m=.3,shadow:u=.35,intro:g=!0,pauseOnHover:x=!0,draggable:b=!0,wheel:C=!0,captions:T=!0,backgroundColor:A="transparent",paused:N=!1,dpr:E=2,ariaLabel:S="Photo orbit. Point at a photo to focus on it, click to bring it forward, drag or scroll to turn the orbit.",onFocusChange:U,onSelect:B,className:k,style:Y},$){let Q=(0,ce.useRef)(null),st=(0,ce.useRef)(null),G=(0,ce.useRef)(null),ot=(0,ce.useRef)(null),ct=(0,ce.useRef)(null),vt=(0,ce.useRef)(null),jt=(0,ce.useSyncExternalStore)(xD,vD,()=>!1),ne=t.length?t:sM,Jt=(0,ce.useRef)(ne),[Yt]=(0,ce.useState)(()=>Math.max(Math.round(i),0)),[Z,it]=(0,ce.useState)(Yt%ne.length),[lt,Ut]=(0,ce.useState)(null),[gt,Xt]=(0,ce.useState)(!1),[He,Bt]=(0,ce.useState)(!1),de={count:n,aspect:a,size:s,adaptiveLayout:r,radius:o,tilt:l,roll:c,distance:f,scale:d,cluster:h,spread:p,speed:v,aperture:y,haze:m,shadow:u,intro:g,pauseOnHover:x,draggable:b,wheel:C,captions:T,backgroundColor:A,paused:N,dpr:E,reduced:jt,held:gt},R=(0,ce.useRef)(de),Zt=(0,ce.useRef)({onFocusChange:U,onSelect:B});(0,ce.useEffect)(()=>{R.current=de,Jt.current=ne,Zt.current={onFocusChange:U,onSelect:B},vt.current?.sync()}),(0,ce.useEffect)(()=>{let bt=Q.current,w=st.current,_=G.current,P=ot.current,K=ct.current;if(!bt||!w||!_||!P||!K)return;let nt=AD(bt,w,{caption:_,title:P,subtitle:K},R,Jt,Yt,{onFeature:F=>{it(F);let Et=Jt.current[F];Et&&Zt.current.onFocusChange?.(Et,F)},onPick:F=>Ut(F),onSelect:F=>{let Et=Jt.current[F];Et&&(Zt.current.onSelect?.(Et,F),Et.href&&window.location.assign(Et.href))}});if(!nt){let F=requestAnimationFrame(()=>Bt(!0));return()=>cancelAnimationFrame(F)}return vt.current=nt,()=>{nt.destroy(),vt.current=null}},[Yt]),(0,ce.useImperativeHandle)($,()=>({next:()=>vt.current?.step(1),previous:()=>vt.current?.step(-1),show:bt=>vt.current?.show(bt),release:()=>vt.current?.release(),replay:()=>vt.current?.replay()}),[]);let Ht=A.trim().toLowerCase(),he=Ht==="transparent"||Ht==="",At=!he&&_D(Ht),Ft=he?"currentColor":At?"#0a0a0a":"#fafafa",Mt=lt!==null?ne[lt]:void 0;return ce.default.createElement("div",{ref:Q,className:mD("arcus-spin-engine",k),style:{backgroundColor:he?void 0:A,color:Ft,...Y},role:"region","aria-roledescription":"carousel","aria-label":S,tabIndex:0,onKeyDown:bt=>{bt.key===" "&&bt.target===bt.currentTarget&&(bt.preventDefault(),Xt(w=>!w))}},ce.default.createElement("div",{ref:st,style:yD}),He?ce.default.createElement("div",{style:{position:"absolute",inset:"12% 8%",display:"flex",flexWrap:"wrap",alignContent:"center",justifyContent:"center",gap:12}},ne.slice(0,8).map((bt,w)=>ce.default.createElement("img",{key:`${bt.src}-${w}`,src:bt.src,alt:bt.alt,style:{width:96,height:96/a,objectFit:"cover",borderRadius:o}}))):null,ce.default.createElement("ul",{style:oM},ne.map((bt,w)=>ce.default.createElement("li",{key:`${bt.src}-${w}`,"aria-current":w===Z?"true":void 0},bt.title?`${bt.title}${bt.subtitle?`, ${bt.subtitle}`:""}`:bt.alt))),ce.default.createElement("div",{"aria-live":"polite",style:oM},Mt?Mt.title??Mt.alt:""),ce.default.createElement("div",{ref:G,"aria-hidden":"true",style:bD},ce.default.createElement("span",{ref:ot,style:SD}),ce.default.createElement("span",{ref:ct,style:MD})))});cM.displayName="SpinShutter";var uM=cM;var fM=[{id:"before",name:"\u03A0\u03C1\u03B9\u03BD",title:"\u0395\u03B4\u03CE \u03BE\u03B5\u03BA\u03AF\u03BD\u03B7\u03C3\u03B1\u03BD \u03CC\u03BB\u03B1.",desc:"\u039F \u03C7\u03CE\u03C1\u03BF\u03C2 \u03C3\u03C4\u03B7\u03BD \u03B1\u03C1\u03C7\u03B9\u03BA\u03AE \u03C4\u03BF\u03C5 \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7, \u03C0\u03C1\u03B9\u03BD \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD \u03B1\u03BD\u03B1\u03BA\u03B1\u03AF\u03BD\u03B9\u03C3\u03B7."},{id:"renders",name:"3D \u03BC\u03B5\u03BB\u03AD\u03C4\u03B7",title:"\u0397 \u03B9\u03B4\u03AD\u03B1 \u03C0\u03B1\u03AF\u03C1\u03BD\u03B5\u03B9 \u03BC\u03BF\u03C1\u03C6\u03AE.",desc:"\u03A4\u03C1\u03B9\u03C3\u03B4\u03B9\u03AC\u03C3\u03C4\u03B1\u03C4\u03B5\u03C2 \u03B1\u03C0\u03B5\u03B9\u03BA\u03BF\u03BD\u03AF\u03C3\u03B5\u03B9\u03C2 \u03C4\u03B7\u03C2 \u03C0\u03C1\u03CC\u03C4\u03B1\u03C3\u03B7\u03C2 \u2014 \u03CC\u03C7\u03B9 \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B5\u03C2 \u03C4\u03BF\u03C5 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF\u03C5 \u03AD\u03C1\u03B3\u03BF\u03C5."},{id:"after",name:"\u0391\u03C0\u03BF\u03C4\u03AD\u03BB\u03B5\u03C3\u03BC\u03B1",title:"\u03A4\u03C1\u03B5\u03B9\u03C2 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B5\u03C2. \u039C\u03B9\u03B1 \u03BD\u03AD\u03B1 \u03B1\u03C1\u03C7\u03AE.",desc:"\u03A0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AD\u03C2 \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B5\u03C2 \u03B1\u03C0\u03CC \u03C4\u03B9\u03C2 \u03C4\u03C1\u03B5\u03B9\u03C2 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03C9\u03BC\u03AD\u03BD\u03B5\u03C2 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B5\u03C2."}].map(e=>({...e,links:Array.from(document.querySelectorAll(`#${e.id} .gallery-open`))})),fl=[{id:"all",name:"\u038C\u03BB\u03B5\u03C2",title:"\u038C\u03BB\u03B7 \u03B7 \u03B4\u03B9\u03B1\u03B4\u03C1\u03BF\u03BC\u03AE \u03C4\u03BF\u03C5 \u03AD\u03C1\u03B3\u03BF\u03C5.",desc:"\u0391\u03C0\u03CC \u03C4\u03B7\u03BD \u03B1\u03C1\u03C7\u03B9\u03BA\u03AE \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7, \u03C3\u03C4\u03B7\u03BD 3D \u03BC\u03B5\u03BB\u03AD\u03C4\u03B7 \u03BA\u03B1\u03B9 \u03C3\u03C4\u03B9\u03C2 \u03C4\u03C1\u03B5\u03B9\u03C2 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03C9\u03BC\u03AD\u03BD\u03B5\u03C2 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B5\u03C2.",links:fM.flatMap(e=>e.links)},...fM],Yg=!1;try{let e=document.createElement("canvas").getContext("webgl2");Yg=!!e,e?.getExtension("WEBGL_lose_context")?.loseContext()}catch{}function wD(){let[e,t]=(0,Lt.useState)(0),[n,i]=(0,Lt.useState)(0),[a,s]=(0,Lt.useState)(!1),[r,o]=(0,Lt.useState)(!Yg),[l,c]=(0,Lt.useState)(!1),[f,d]=(0,Lt.useState)(!0),[h,p]=(0,Lt.useState)(!1),[v,y]=(0,Lt.useState)(document.documentElement.dataset.theme==="dark"),m=(0,Lt.useRef)(null),u=(0,Lt.useRef)(0);(0,Lt.useEffect)(()=>{let T=()=>y(document.documentElement.dataset.theme==="dark"),A=new MutationObserver(T);return A.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>A.disconnect()},[]),(0,Lt.useEffect)(()=>{let T=()=>document.documentElement.style.setProperty("--journey-viewport",`${document.documentElement.clientWidth}px`);return T(),window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]);let g=fl[e],x=g.links.map((T,A)=>({src:T.href,alt:T.dataset.caption||T.querySelector("img")?.alt||`${g.name} ${A+1}`,title:T.dataset.caption||T.querySelector("img")?.alt}));(0,Lt.useEffect)(()=>{let T=matchMedia("(max-width: 700px) and (pointer: coarse), (prefers-reduced-motion: reduce)"),A=()=>o(!Yg||T.matches);return A(),T.addEventListener("change",A),document.body.classList.add("journey-ready"),()=>T.removeEventListener("change",A)},[]),(0,Lt.useEffect)(()=>{let T=matchMedia("(prefers-reduced-motion: reduce)"),A=()=>p(T.matches);return A(),T.addEventListener("change",A),()=>T.removeEventListener("change",A)},[]),(0,Lt.useEffect)(()=>{if(!r||!f||a||h)return;let T=setInterval(()=>{document.hidden||i(A=>(A+1)%x.length)},5e3);return()=>clearInterval(T)},[r,f,a,h,e,x.length]),(0,Lt.useEffect)(()=>{document.body.classList.toggle("journey-all",l)},[l]);let b=T=>{t(T),i(0),s(!1)},C=T=>{i(A=>Math.max(0,Math.min(x.length-1,A+T))),s(!0)};return Lt.default.createElement(Lt.default.Fragment,null,Lt.default.createElement("div",{className:"journey-heading"},Lt.default.createElement("p",{className:"journey-eyebrow"},"\u0397 \u03BC\u03B5\u03C4\u03B1\u03BC\u03CC\u03C1\u03C6\u03C9\u03C3\u03B7 \u03C4\u03BF\u03C5 \u03C7\u03CE\u03C1\u03BF\u03C5"),Lt.default.createElement("h2",null,"\u0391\u03C0\u03CC \u03C4\u03BF \u03C0\u03C1\u03B9\u03BD, \u03C3\u03C4\u03BF \u03C3\u03AE\u03BC\u03B5\u03C1\u03B1."),Lt.default.createElement("p",null,"\u0391\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B5 \u03C4\u03B7\u03BD \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7 \u03C4\u03B7\u03C2 \u0391\u03B8\u03B1\u03BD\u03B1\u03C3\u03AF\u03BF\u03C5 \u0394\u03B9\u03AC\u03BA\u03BF\u03C5.")),Lt.default.createElement("div",{className:"journey-tabs",role:"tablist","aria-label":"\u03A3\u03C4\u03AC\u03B4\u03B9\u03B1 \u03AD\u03C1\u03B3\u03BF\u03C5"},fl.map((T,A)=>Lt.default.createElement("button",{id:`journey-tab-${A}`,role:"tab","aria-selected":e===A,"aria-controls":"journey-panel",key:T.id,onClick:()=>b(A),onKeyDown:N=>{if(N.key==="ArrowRight"||N.key==="ArrowLeft"){N.preventDefault();let E=(A+(N.key==="ArrowRight"?1:fl.length-1))%fl.length;b(E),document.getElementById(`journey-tab-${E}`)?.focus()}}},Lt.default.createElement("span",null,A===0?"\u221E":`0${A}`),T.name,Lt.default.createElement("small",null,T.links.length," \u03B5\u03B9\u03BA\u03CC\u03BD\u03B5\u03C2")))),Lt.default.createElement("div",{id:"journey-panel",role:"tabpanel","aria-labelledby":`journey-tab-${e}`},Lt.default.createElement("div",{className:"journey-window","data-renderer":r?"native":"spin-shutter-webgl",onKeyDown:T=>{T.key==="ArrowRight"&&(T.preventDefault(),C(1)),T.key==="ArrowLeft"&&(T.preventDefault(),C(-1)),T.key==="Escape"&&s(!1)}},!r&&Lt.default.createElement(uM,{key:e,ref:m,items:x,backgroundColor:v?"#121815":"#eeeae2",count:x.length,aspect:1.45,adaptiveLayout:!0,size:.46,radius:5,tilt:14,roll:0,distance:3.2,cluster:1,spread:1,intro:!0,aperture:.7,speed:12/x.length,paused:!f||a,pauseOnHover:!1,haze:0,shadow:.12,dpr:1.5,wheel:!1,captions:!1,onFocusChange:(T,A)=>{a||i(A)},onSelect:(T,A)=>{i(A),s(!0)},ariaLabel:`${g.name}: \u03C0\u03B5\u03C1\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03B9\u03BA\u03AE \u03C3\u03C5\u03BB\u03BB\u03BF\u03B3\u03AE \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03B9\u03CE\u03BD \u03BC\u03B5 \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B7 \u03BA\u03AF\u03BD\u03B7\u03C3\u03B7`}),(r||a)&&Lt.default.createElement("div",{className:"journey-clean",onTouchStart:T=>u.current=T.touches[0].clientX,onTouchEnd:T=>{let A=T.changedTouches[0].clientX-u.current;Math.abs(A)>45&&C(A<0?1:-1)}},Lt.default.createElement("img",{src:x[n].src,alt:x[n].alt,draggable:!1}),!r&&Lt.default.createElement("button",{className:"journey-return",onClick:()=>s(!1)},"\u2190 \u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03C3\u03C4\u03B7\u03BD \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03B7")),!r&&!a&&Lt.default.createElement("div",{className:"journey-explore"},Lt.default.createElement("span",null,"\u0391\u03BD\u03B1\u03BA\u03AC\u03BB\u03C5\u03C8\u03B5 \u03C4\u03B7 \u03BC\u03B5\u03C4\u03B1\u03BC\u03CC\u03C1\u03C6\u03C9\u03C3\u03B7 \u03C4\u03BF\u03C5 \u03C7\u03CE\u03C1\u03BF\u03C5"),Lt.default.createElement("button",{onClick:()=>s(!0)},"\u0394\u03B5\u03C2 \u03C4\u03B9\u03C2 \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B5\u03C2 \u2197"))),Lt.default.createElement("div",{className:"journey-tools"},Lt.default.createElement("div",{"aria-live":"polite"},Lt.default.createElement("span",null,String(n+1).padStart(2,"0")," / ",x.length),Lt.default.createElement("p",null,r||a?x[n].alt:"\u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B7 \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03B7 \xB7 \u0395\u03C0\u03AF\u03BB\u03B5\u03BE\u03B5 \u03BC\u03B9\u03B1 \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1 \u03B3\u03B9\u03B1 \u03BA\u03B1\u03B8\u03B1\u03C1\u03AE \u03C0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE")),Lt.default.createElement("div",{className:"journey-buttons"},Lt.default.createElement("button",{"aria-label":f&&!a?"\u03A0\u03B1\u03CD\u03C3\u03B7 \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03B7\u03C2":"\u03A3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03B7\u03C2",onClick:()=>{a?(s(!1),d(!0)):d(!f)}},f&&!a?"\u03A0\u03B1\u03CD\u03C3\u03B7 \u23F8":"\u03A3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u25B6"),Lt.default.createElement("button",{onClick:()=>C(-1),disabled:n===0,"aria-label":"\u03A0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7 \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B1"},"\u2190"),Lt.default.createElement("button",{onClick:()=>C(1),disabled:n===x.length-1,"aria-label":"\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03B7 \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B1"},"\u2192"),Lt.default.createElement("button",{onClick:()=>{s(!0),g.links[n].click()}},"\u039C\u03B5\u03B3\u03AD\u03B8\u03C5\u03BD\u03C3\u03B7 \u2197"))),Lt.default.createElement("div",{className:"journey-thumbs","aria-label":"\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B1\u03C2"},x.map((T,A)=>Lt.default.createElement("button",{key:T.src,"aria-label":`${g.name}: ${T.alt}`,"aria-pressed":n===A,onClick:()=>{i(A),s(!0)}},Lt.default.createElement("img",{src:T.src,alt:"",loading:"lazy"}))))),Lt.default.createElement("div",{className:"journey-bottom"},Lt.default.createElement("button",{className:"journey-all-button","aria-expanded":l,onClick:()=>c(!l)},l?"\u03A3\u03CD\u03BC\u03C0\u03C4\u03C5\u03BE\u03B7 \u03B1\u03BD\u03B1\u03BB\u03C5\u03C4\u03B9\u03BA\u03AE\u03C2 \u03C3\u03C5\u03BB\u03BB\u03BF\u03B3\u03AE\u03C2":"\u0391\u03BD\u03B1\u03BB\u03C5\u03C4\u03B9\u03BA\u03AE \u03C3\u03C5\u03BB\u03BB\u03BF\u03B3\u03AE"," ",l?"\u2212":"+"),e>0&&e<fl.length-1?Lt.default.createElement("button",{className:"journey-next",onClick:()=>b(e+1)},"\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF: ",fl[e+1].name," \u2192"):Lt.default.createElement("button",{className:"journey-next",onClick:()=>b(0)},"\u038C\u03BB\u03B5\u03C2 \u03BF\u03B9 \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B5\u03C2 \u21BA")))}var hM=document.getElementById("project-journey");hM&&(0,dM.createRoot)(hM).render(Lt.default.createElement(wD,null));
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
