/*! For license information please see 4fdef4e1.79133dcc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),o=(n(232),n(231)),i={id:"mutations",title:"Mutations",sidebar_label:"Mutations"},l={id:"crud/mutations",isDocsHomePage:!1,title:"Mutations",description:"Graphback provides three mutation types for every model.",source:"@site/../docs/crud/mutations.md",permalink:"/docs/next/crud/mutations",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/crud/mutations.md",version:"next",sidebar_label:"Mutations",sidebar:"docs",previous:{title:"Queries",permalink:"/docs/next/crud/queries"},next:{title:"Subscriptions",permalink:"/docs/next/crud/subscriptions"},latestVersionMainDocPermalink:"/docs/gettingstarted"},c=[{value:"Create",id:"create",children:[]},{value:"Update",id:"update",children:[]},{value:"Delete",id:"delete",children:[]}],p={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback provides three mutation types for every model."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#create"}),Object(o.b)("inlineCode",{parentName:"a"},"create<Type>")),": create a new item in the database of and return the created object in the response."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#update"}),Object(o.b)("inlineCode",{parentName:"a"},"update<Type>")),": update an existing item in the database and return the updated object in the response."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#delete"}),Object(o.b)("inlineCode",{parentName:"a"},"delete<Type>")),": delete a single item in the database and return the deleted object in the response.")),Object(o.b)("h2",{id:"create"},"Create"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"create")," mutation allows the client to insert a new item in the database."),Object(o.b)("p",null,"The mutation follows the naming format ",Object(o.b)("inlineCode",{parentName:"p"},"create<Type>"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  createNote(input: CreateNoteInput!): Note\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Arguments:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"input"),": input type created by Graphback for creating a new ",Object(o.b)("inlineCode",{parentName:"li"},"Note")," object.")),Object(o.b)("p",null,"Graphback creates a ",Object(o.b)("inlineCode",{parentName:"p"},"Create<Type>Input")," input type for each of the data models you define, where the ",Object(o.b)("inlineCode",{parentName:"p"},"create")," configuration is enabled. Relationship object fields in models map to the foreign key field in the database. "),Object(o.b)("p",null,"Each input field in ",Object(o.b)("inlineCode",{parentName:"p"},"Create<Type>Input")," directly maps to the fields in the model. With the exception of the primary field, each field added to the input type preserves field nullability from the original model."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Primary fields will be nullable in the input type as they are often auto-generated by the database."))),Object(o.b)("p",null,"Take the following ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," model as an example."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @manyToOne(field: \'notes\', key: \'authorId\')\n  """\n  author: User\n}\n\n// highlight-start\ninput CreateNoteInput {\n  id: ID\n  title: String!\n  description: String\n  authorId: ID\n}\n// highlight-end\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"CreateNoteInput")," input type is created from the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," model."),Object(o.b)("p",null,"Example of a typical create mutation on ",Object(o.b)("inlineCode",{parentName:"p"},"Note"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createNote(input: {\n    title: "Do shopping",\n    description: "Get groceries for party",\n    authorId: 19\n  }) {\n    id\n    title\n    description\n    author {\n      id\n      name\n    }\n  }\n}\n')),Object(o.b)("p",null,"You can also perform ",Object(o.b)("inlineCode",{parentName:"p"},"create")," mutations on models with GraphQL type fields which map to a JSON column or an embedded document (MongoDB):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  metadata: NoteMetadata\n}\n\n"""Regular non-model GraphQL type"""\ntype NoteMetadata {\n  createdAt: String\n  updatedAt: String\n}\n\n// highlight-start\ninput CreateNoteInput {\n  id: ID\n  title: String!\n  description: String\n  metadata: CreateNoteMetadataInput\n}\n\ninput CreateNoteMetadataInput {\n  createdAt: String\n  updatedAt: String\n}\n// highlight-end\n')),Object(o.b)("p",null,"Graphback generates the appropriate input types for regular types that do not map to any database table/collection but are used as a field in a model."),Object(o.b)("p",null,"You can create a new ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," with ",Object(o.b)("inlineCode",{parentName:"p"},"NoteMetadata")," in a single mutation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createNote(input: {\n    title: "Do shopping",\n    description: "Get groceries for party",\n    metadata: {\n      createdAt: "2340324024",\n      updatedAt: "2340324024"\n    }\n  }) {\n    id\n    title\n    description\n    metadata {\n      createdAt\n      updatedAt\n    }\n  }\n}\n')),Object(o.b)("h2",{id:"update"},"Update"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"update")," mutation allows the client to update an existing item in the database."),Object(o.b)("p",null,"The mutation follows the naming format ",Object(o.b)("inlineCode",{parentName:"p"},"update<Type>"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  updateNote(input: MutateNoteInput!): Note\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Arguments:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"input"),": input type created by Graphback for updating an existing ",Object(o.b)("inlineCode",{parentName:"li"},"Note")," object.")),Object(o.b)("p",null,"Graphback creates a ",Object(o.b)("inlineCode",{parentName:"p"},"Mutate<Type>Input")," input type for each of the data models you define, where either the ",Object(o.b)("inlineCode",{parentName:"p"},"update")," or ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," configuration is enabled. Relationship object fields in models map to the foreign key field in the database. "),Object(o.b)("p",null,"With the exception of the primary field, all input fields are set to nullable to allow for partial updates. Graphback uses the primary field to ensure the correct item is being updated."),Object(o.b)("p",null,"Take the following ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," model as an example."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @manyToOne(field: \'notes\', key: \'authorId\')\n  """\n  author: User\n}\n\n// highlight-start\ninput MutateNoteInput {\n  id: ID!\n  title: String\n  description: String\n  authorId: ID\n}\n// highlight-end\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"MutateNoteInput")," input type is created from the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," model."),Object(o.b)("p",null,"Example of a typical create mutation on ",Object(o.b)("inlineCode",{parentName:"p"},"Note"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  updateNote(input: {\n    id: 10,\n    description: "Get remainder of groceries"\n  }) {\n    id\n    title\n    description\n    author {\n      id\n      name\n    }\n  }\n}\n')),Object(o.b)("p",null,"You can also perform ",Object(o.b)("inlineCode",{parentName:"p"},"update")," mutations on models with GraphQL type fields which map to a JSON column or an embedded document (MongoDB):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  metadata: NoteMetadata\n}\n\n"""Regular non-model GraphQL type"""\ntype NoteMetadata {\n  createdAt: String\n  updatedAt: String\n}\n\n// highlight-start\ninput MutateNoteInput {\n  id: ID!\n  title: String\n  description: String\n  metadata: MutateNoteMetadataInput\n}\n\ninput MutateNoteMetadataInput {\n  createdAt: String\n  updatedAt: String\n}\n// highlight-end\n')),Object(o.b)("p",null,"Graphback generates the appropriate input types for regular GraphQL types that do not map to any database table/collection but are used as a field in a model."),Object(o.b)("p",null,"You can update an existing ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," with ",Object(o.b)("inlineCode",{parentName:"p"},"NoteMetadata")," in a single mutation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  updateNote(input: {\n    id: 10,\n    description: "Get prosecco for party",\n    metadata: {\n      createdAt: "2340349036",\n      updatedAt: "2340349036"\n    }\n  }) {\n    id\n    title\n    description\n    metadata {\n      createdAt\n      updatedAt\n    }\n  }\n}\n')),Object(o.b)("h2",{id:"delete"},"Delete"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," mutation allows the client to delete an existing item from the database."),Object(o.b)("p",null,"The mutation follows the naming format ",Object(o.b)("inlineCode",{parentName:"p"},"delete<Type>"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  deleteNote(input: MutateNoteInput!): Note\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Arguments:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"input"),": input type created by Graphback for updating an existing ",Object(o.b)("inlineCode",{parentName:"li"},"Note")," object.")),Object(o.b)("p",null,"Graphback creates a ",Object(o.b)("inlineCode",{parentName:"p"},"Mutate<Type>Input")," input type for each of the data models you define, when either the the ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," or ",Object(o.b)("inlineCode",{parentName:"p"},"update")," CRUD configuration is enabled."),Object(o.b)("p",null,"With the exception of the primary field, all input fields are set to nullable. Graphback uses the value from the primary field to ensure the correct is being deleted."),Object(o.b)("p",null,"Take the following ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," model as an example."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n}\n\n// highlight-start\ninput MutateNoteInput {\n  id: ID!\n  title: String\n  description: String\n}\n// highlight-end\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"MutateNoteInput")," input type is created from the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," model. Each input field in ",Object(o.b)("inlineCode",{parentName:"p"},"MutateNoteInput")," maps to the fields defined in ",Object(o.b)("inlineCode",{parentName:"p"},"Note"),"."),Object(o.b)("p",null,"Example of a typical ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," mutation on ",Object(o.b)("inlineCode",{parentName:"p"},"Note"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"mutation {\n  deleteNote(input: {\n    id: 10\n  }) {\n    id\n  }\n}\n")))}u.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,f=d["".concat(i,".").concat(s)]||d[s]||b[s]||o;return n?a.a.createElement(f,l({ref:t},p,{components:n})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},232:function(e,t,n){"use strict";e.exports=n(233)},233:function(e,t,n){"use strict";var r=n(234),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,p=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,d=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.forward_ref"):60112,s=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||y}function N(){}function v(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=g.prototype;var C=v.prototype=new N;C.constructor=v,r(C,g.prototype),C.isPureReactComponent=!0;var w={current:null},S=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&!k.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var p=Array(c),u=0;u<c;u++)p[u]=arguments[u+2];a.children=p}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:w.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var M=/\/+/g,T=[];function E(e,t,n,r){if(T.length){var a=T.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function P(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function _(e,t,n){return null==e?0:function e(t,n,r,a){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case o:case i:c=!0}}if(c)return r(a,t,""===n?"."+D(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var p=0;p<t.length;p++){var u=n+D(l=t[p],p);c+=e(l,u,r,a)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=h&&t[h]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),p=0;!(l=t.next()).done;)c+=e(l=l.value,u=n+D(l,p++),r,a);else if("object"===l)throw r=""+t,Error(O(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,r,n,(function(e){return e})):null!=e&&(I(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+n)),r.push(e))}function $(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(M,"$&/")+"/"),_(e,R,t=E(t,o,r,a)),P(t)}var q={current:null};function G(){var e=q.current;if(null===e)throw Error(O(321));return e}var U={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return $(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;_(e,A,t=E(null,null,t,n)),P(t)},count:function(e){return _(e,(function(){return null}),null)},toArray:function(e){var t=[];return $(e,t,null,(function(e){return e})),t},only:function(e){if(!I(e))throw Error(O(143));return e}},t.Component=g,t.Fragment=l,t.Profiler=p,t.PureComponent=v,t.StrictMode=c,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(O(267,e));var a=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(u in t)S.call(t,u)&&!k.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==p?p[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){p=Array(u);for(var d=0;d<u;d++)p[d]=arguments[d+2];a.children=p}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:b,render:e}},t.isValidElement=I,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return G().useCallback(e,t)},t.useContext=function(e,t){return G().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return G().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return G().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return G().useLayoutEffect(e,t)},t.useMemo=function(e,t){return G().useMemo(e,t)},t.useReducer=function(e,t,n){return G().useReducer(e,t,n)},t.useRef=function(e){return G().useRef(e)},t.useState=function(e){return G().useState(e)},t.version="16.13.1"},234:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),p=1;p<arguments.length;p++){for(var u in n=Object(arguments[p]))a.call(n,u)&&(c[u]=n[u]);if(r){l=r(n);for(var d=0;d<l.length;d++)o.call(n,l[d])&&(c[l[d]]=n[l[d]])}}return c}}}]);