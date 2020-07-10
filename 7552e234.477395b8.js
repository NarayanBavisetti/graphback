(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),i=n(6),a=(n(0),n(231)),o={id:"crudspec",title:"Graphback CRUD Specification",sidebar_label:"CRUD Specification"},c={id:"version-0.12.x/crud/crudspec",isDocsHomePage:!1,title:"Graphback CRUD Specification",description:"GraphQL is a flexible query language supporting many different data access patterns.",source:"@site/versioned_docs/version-0.12.x/crud/crudspec.md",permalink:"/docs/crud/crudspec",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/crud/crudspec.md",version:"0.12.x",sidebar_label:"CRUD Specification",sidebar:"version-0.12.x/docs",previous:{title:"Config",permalink:"/docs/intro/config"},next:{title:"CRUD Runtime Abstraction",permalink:"/docs/crud/crudruntime"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"GraphQL is a flexible query language supporting many different data access patterns.\nIn practice, simple CRUD operations turn out to be a very common pattern.\nStandardising this very common pattern enables the community to build tooling specific to the common CRUD style API."),Object(a.b)("p",null,"Graphback uses CRUD format for defining standard data access methods for your model.\nFor every model object in your schema we can provide the folowing operations:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CREATE"),Object(a.b)("li",{parentName:"ul"},"UPDATE"),Object(a.b)("li",{parentName:"ul"},"DELETE"),Object(a.b)("li",{parentName:"ul"},"READ"),Object(a.b)("li",{parentName:"ul"},"FIND_ALL (all dataset - flavours with Pagination, Delta etc.)"),Object(a.b)("li",{parentName:"ul"},"FIND (filtering - flavours with Pagination, Delta etc.)"),Object(a.b)("li",{parentName:"ul"},"SUBSCRIBE TO CREATE"),Object(a.b)("li",{parentName:"ul"},"SUBSCRIBE TO UPDATE"),Object(a.b)("li",{parentName:"ul"},"SUBSCRIBE TO DELETE")),Object(a.b)("p",null,"Target of Graphback is to prevent anemic mutations and locking developers into CRUD model.\nThat is why we provide only basic filtering on the GraphQL level as we believe that business model\nneeds to be implemented and hidden behind resolvers. "),Object(a.b)("p",null,"That is why every Query or Mutation included in the schema will be ignored by Graphback, but also supplied in the result schema giving developers flexibility to provide their own implementations on the server. Graphback tries to avoid adding extra types to your schema that you might not use in your application."),Object(a.b)("p",null,"When specifying a single object as input GraphQL Schema as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  likes: Int\n}\n')),Object(a.b)("p",null,"Graphback will decorate it with additional Queries, Mutations and Subscriptions along with InputTypes and other wrapper types that are needed."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"input NoteInput {\n  id: ID\n  title: String\n  description: String\n  likes: Int\n}\n\ntype Query {\n  findAllNotes(limit: Int, offset: Int): [Note]!\n  findNotes(fields: NoteInput, limit: Int, offset: Int): [Note]!\n} \n\ntype Mutation {\n  createNote(input: NoteInput): Note!\n  updateNote(input: NoteInput): Note!\n  deleteNote(input: NoteInput): Note!\n} \n\ntype Subscription {\n  newNote(input: NoteInput): Note!\n  updatedNote(input: NoteInput): Note!\n  deletedNote(input: NoteInput): Note!\n} \n")),Object(a.b)("p",null,"Each Graphback plugin will follow this specification and base on it when creating resolvers or client side queries."))}u.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||a;return n?i.a.createElement(m,c({ref:t},p,{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);