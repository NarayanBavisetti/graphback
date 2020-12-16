/*! For license information please see b3a1756c.c43508cc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[890],{1329:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),p=function(e){var t=c.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,j=s["".concat(b,".").concat(u)]||s[u]||d[u]||r;return a?c.a.createElement(j,l(l({ref:t},o),{},{components:a})):c.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<r;o++)b[o]=a[o];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1330:function(e,t,a){"use strict";e.exports=a(1331)},1331:function(e,t,a){"use strict";var n=a(1332),c=60103,r=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var b=60109,l=60110,i=60112;t.Suspense=60113;var o=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;c=s("react.element"),r=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),b=s("react.provider"),l=s("react.context"),i=s("react.forward_ref"),t.Suspense=s("react.suspense"),o=s("react.memo"),p=s("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function m(e,t,a){this.props=e,this.context=t,this.refs=O,this.updater=a||j}function f(){}function h(e,t,a){this.props=e,this.context=t,this.refs=O,this.updater=a||j}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(u(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},f.prototype=m.prototype;var g=h.prototype=new f;g.constructor=h,n(g,m.prototype),g.isPureReactComponent=!0;var y={current:null},N=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,a){var n,r={},b=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(b=""+t.key),t)N.call(t,n)&&!v.hasOwnProperty(n)&&(r[n]=t[n]);var i=arguments.length-2;if(1===i)r.children=a;else if(1<i){for(var o=Array(i),p=0;p<i;p++)o[p]=arguments[p+2];r.children=o}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===r[n]&&(r[n]=i[n]);return{$$typeof:c,type:e,key:b,ref:l,props:r,_owner:y.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,a,n,b){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case r:i=!0}}if(i)return b=b(i=e),e=""===n?"."+S(i,0):n,Array.isArray(b)?(a="",null!=e&&(a=e.replace(C,"$&/")+"/"),D(b,t,a,"",(function(e){return e}))):null!=b&&(_(b)&&(b=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(b,a+(!b.key||i&&i.key===b.key?"":(""+b.key).replace(C,"$&/")+"/")+e)),t.push(b)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var o=0;o<e.length;o++){var p=n+S(l=e[o],o);i+=D(l,t,a,p,b)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),o=0;!(l=e.next()).done;)i+=D(l=l.value,t,a,p=n+S(l,o++),b);else if("object"===l)throw t=""+e,Error(u(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function w(e,t,a){if(null==e)return e;var n=[],c=0;return D(e,n,"","",(function(e){return t.call(a,e,c++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function M(){var e=P.current;if(null===e)throw Error(u(321));return e}var T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:y,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:w,forEach:function(e,t,a){w(e,(function(){t.apply(this,arguments)}),a)},count:function(e){var t=0;return w(e,(function(){t++})),t},toArray:function(e){return w(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(u(143));return e}},t.Component=m,t.PureComponent=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,a){if(null==e)throw Error(u(267,e));var r=n({},e.props),b=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=y.current),void 0!==t.key&&(b=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(p in t)N.call(t,p)&&!v.hasOwnProperty(p)&&(r[p]=void 0===t[p]&&void 0!==o?o[p]:t[p])}var p=arguments.length-2;if(1===p)r.children=a;else if(1<p){o=Array(p);for(var s=0;s<p;s++)o[s]=arguments[s+2];r.children=o}return{$$typeof:c,type:e.type,key:b,ref:l,props:r,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:b,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:x}},t.memo=function(e,t){return{$$typeof:o,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return M().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,a){return M().useReducer(e,t,a)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="17.0.1"},1332:function(e,t,a){"use strict";var n=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function b(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(c){return!1}}()?Object.assign:function(e,t){for(var a,l,i=b(e),o=1;o<arguments.length;o++){for(var p in a=Object(arguments[o]))c.call(a,p)&&(i[p]=a[p]);if(n){l=n(a);for(var s=0;s<l.length;s++)r.call(a,l[s])&&(i[l[s]]=a[l[s]])}}return i}},958:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),c=a(7),r=(a(1330),a(1329)),b={id:"_util_",title:"util",sidebar_label:"util"},l={unversionedId:"api/graphback-datasync/modules/_util_",id:"api/graphback-datasync/modules/_util_",isDocsHomePage:!1,title:"util",description:"Index",source:"@site/../docs/api/graphback-datasync/modules/_util_.md",slug:"/api/graphback-datasync/modules/_util_",permalink:"/docs/next/api/graphback-datasync/modules/_util_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/modules/_util_.md",version:"current",sidebar_label:"util"},i=[{value:"Index",id:"index",children:[{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Object literals",id:"object-literals",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"getDataSyncAnnotationData",id:"getdatasyncannotationdata",children:[]},{value:"getModelConfigFromGlobal",id:"getmodelconfigfromglobal",children:[]},{value:"isDataSyncModel",id:"isdatasyncmodel",children:[]},{value:"isDataSyncService",id:"isdatasyncservice",children:[]},{value:"isDataSyncType",id:"isdatasynctype",children:[]}]},{value:"Object literals",id:"object-literals-1",children:[{value:"<code>Const</code> ClientSideWins",id:"const-clientsidewins",children:[]},{value:"\u25aa <strong>ClientSideWins</strong>: <em>object</em>",id:"-clientsidewins-object",children:[]},{value:"resolveDelete",id:"resolvedelete",children:[]},{value:"resolveUpdate",id:"resolveupdate",children:[]},{value:"<code>Const</code> DataSyncFieldNames",id:"const-datasyncfieldnames",children:[]},{value:"\u25aa <strong>DataSyncFieldNames</strong>: <em>object</em>",id:"-datasyncfieldnames-object",children:[]},{value:"deleted",id:"deleted",children:[]},{value:"lastUpdatedAt",id:"lastupdatedat",children:[]},{value:"ttl",id:"ttl",children:[]},{value:"version",id:"version",children:[]},{value:"<code>Const</code> ServerSideWins",id:"const-serversidewins",children:[]},{value:"\u25aa <strong>ServerSideWins</strong>: <em>object</em>",id:"-serversidewins-object",children:[]},{value:"resolveDelete",id:"resolvedelete-1",children:[]},{value:"resolveUpdate",id:"resolveupdate-1",children:[]},{value:"<code>Const</code> ThrowOnConflict",id:"const-throwonconflict",children:[]},{value:"\u25aa <strong>ThrowOnConflict</strong>: <em>object</em>",id:"-throwonconflict-object",children:[]},{value:"resolveDelete",id:"resolvedelete-2",children:[]},{value:"resolveUpdate",id:"resolveupdate-2",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"index"},"Index"),Object(r.b)("h3",{id:"classes"},"Classes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_util_.conflicterror"}),"ConflictError"))),Object(r.b)("h3",{id:"interfaces"},"Interfaces"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy"}),"ConflictResolutionStrategy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconfigmap"}),"DataSyncModelConfigMap")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig"))),Object(r.b)("h3",{id:"functions"},"Functions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#getdatasyncannotationdata"}),"getDataSyncAnnotationData")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#getmodelconfigfromglobal"}),"getModelConfigFromGlobal")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#isdatasyncmodel"}),"isDataSyncModel")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#isdatasyncservice"}),"isDataSyncService")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#isdatasynctype"}),"isDataSyncType"))),Object(r.b)("h3",{id:"object-literals"},"Object literals"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#const-clientsidewins"}),"ClientSideWins")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#const-datasyncfieldnames"}),"DataSyncFieldNames")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#const-serversidewins"}),"ServerSideWins")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#const-throwonconflict"}),"ThrowOnConflict"))),Object(r.b)("h2",{id:"functions-1"},"Functions"),Object(r.b)("h3",{id:"getdatasyncannotationdata"},"getDataSyncAnnotationData"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getDataSyncAnnotationData"),"(",Object(r.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L14"}),"packages/graphback-datasync/src/util.ts:14"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"model")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getmodelconfigfromglobal"},"getModelConfigFromGlobal"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getModelConfigFromGlobal"),"(",Object(r.b)("inlineCode",{parentName:"p"},"modelName"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"globalConfig"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig"),"): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L51"}),"packages/graphback-datasync/src/util.ts:51"))),Object(r.b)("p",null,"Function to get conflict configuration of specific model from specified global configuration"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"modelName")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the model's GraphQL type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"globalConfig")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specified global config")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isdatasyncmodel"},"isDataSyncModel"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isDataSyncModel"),"(",Object(r.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L6"}),"packages/graphback-datasync/src/util.ts:6"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"model")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isdatasyncservice"},"isDataSyncService"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isDataSyncService"),"(",Object(r.b)("inlineCode",{parentName:"p"},"service"),": GraphbackCRUDService): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_services_datasynccrudservice_.datasynccrudservice"}),"DataSyncCRUDService"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L18"}),"packages/graphback-datasync/src/util.ts:18"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"service")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphbackCRUDService")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_services_datasynccrudservice_.datasynccrudservice"}),"DataSyncCRUDService"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isdatasynctype"},"isDataSyncType"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isDataSyncType"),"(",Object(r.b)("inlineCode",{parentName:"p"},"graphqlType"),": GraphQLObjectType): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L10"}),"packages/graphback-datasync/src/util.ts:10"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"graphqlType")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphQLObjectType")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("h2",{id:"object-literals-1"},"Object literals"),Object(r.b)("h3",{id:"const-clientsidewins"},Object(r.b)("inlineCode",{parentName:"h3"},"Const")," ClientSideWins"),Object(r.b)("h3",{id:"-clientsidewins-object"},"\u25aa ",Object(r.b)("strong",{parentName:"h3"},"ClientSideWins"),": ",Object(r.b)("em",{parentName:"h3"},"object")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L148"}),"packages/graphback-datasync/src/util.ts:148"))),Object(r.b)("p",null,"The ClientSideWins conflict resolution strategy"),Object(r.b)("h3",{id:"resolvedelete"},"resolveDelete"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"resolveDelete"),"(",Object(r.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L160"}),"packages/graphback-datasync/src/util.ts:160"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"conflict")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("h3",{id:"resolveupdate"},"resolveUpdate"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"resolveUpdate"),"(",Object(r.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L149"}),"packages/graphback-datasync/src/util.ts:149"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"conflict")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"const-datasyncfieldnames"},Object(r.b)("inlineCode",{parentName:"h3"},"Const")," DataSyncFieldNames"),Object(r.b)("h3",{id:"-datasyncfieldnames-object"},"\u25aa ",Object(r.b)("strong",{parentName:"h3"},"DataSyncFieldNames"),": ",Object(r.b)("em",{parentName:"h3"},"object")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L80"}),"packages/graphback-datasync/src/util.ts:80"))),Object(r.b)("h3",{id:"deleted"},"deleted"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"deleted"),": ",Object(r.b)("em",{parentName:"p"},"string"),' = "_deleted"'),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L83"}),"packages/graphback-datasync/src/util.ts:83"))),Object(r.b)("h3",{id:"lastupdatedat"},"lastUpdatedAt"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"lastUpdatedAt"),": ",Object(r.b)("em",{parentName:"p"},"string"),' = "_lastUpdatedAt"'),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L82"}),"packages/graphback-datasync/src/util.ts:82"))),Object(r.b)("h3",{id:"ttl"},"ttl"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"ttl"),": ",Object(r.b)("em",{parentName:"p"},"string"),' = "_ttl"'),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L84"}),"packages/graphback-datasync/src/util.ts:84"))),Object(r.b)("h3",{id:"version"},"version"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"version"),": ",Object(r.b)("em",{parentName:"p"},"string"),' = "_version"'),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L81"}),"packages/graphback-datasync/src/util.ts:81"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"const-serversidewins"},Object(r.b)("inlineCode",{parentName:"h3"},"Const")," ServerSideWins"),Object(r.b)("h3",{id:"-serversidewins-object"},"\u25aa ",Object(r.b)("strong",{parentName:"h3"},"ServerSideWins"),": ",Object(r.b)("em",{parentName:"h3"},"object")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L127"}),"packages/graphback-datasync/src/util.ts:127"))),Object(r.b)("p",null,"The ServerSideWins conflict resolution strategy"),Object(r.b)("h3",{id:"resolvedelete-1"},"resolveDelete"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"resolveDelete"),"(",Object(r.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L139"}),"packages/graphback-datasync/src/util.ts:139"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"conflict")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("h3",{id:"resolveupdate-1"},"resolveUpdate"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"resolveUpdate"),"(",Object(r.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L128"}),"packages/graphback-datasync/src/util.ts:128"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"conflict")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"const-throwonconflict"},Object(r.b)("inlineCode",{parentName:"h3"},"Const")," ThrowOnConflict"),Object(r.b)("h3",{id:"-throwonconflict-object"},"\u25aa ",Object(r.b)("strong",{parentName:"h3"},"ThrowOnConflict"),": ",Object(r.b)("em",{parentName:"h3"},"object")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L173"}),"packages/graphback-datasync/src/util.ts:173"))),Object(r.b)("h3",{id:"resolvedelete-2"},"resolveDelete"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"resolveDelete"),"(",Object(r.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L177"}),"packages/graphback-datasync/src/util.ts:177"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"conflict")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("h3",{id:"resolveupdate-2"},"resolveUpdate"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"resolveUpdate"),"(",Object(r.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b76c03/packages/graphback-datasync/src/util.ts#L174"}),"packages/graphback-datasync/src/util.ts:174"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"conflict")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")))}p.isMDXComponent=!0}}]);