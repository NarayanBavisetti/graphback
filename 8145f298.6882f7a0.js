(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{158:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(1),o=t(6),a=(t(0),t(231)),i={id:"relationships",title:"Model Relationships",sidebar_label:"Model Relationships"},c={id:"version-0.12.x/crud/relationships",isDocsHomePage:!1,title:"Model Relationships",description:"NOTE: This document is outdated and needs more work",source:"@site/versioned_docs/version-0.12.x/crud/relationships.md",permalink:"/docs/crud/relationships",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/crud/relationships.md",version:"0.12.x",sidebar_label:"Model Relationships"},l=[{value:"Database Relationships",id:"database-relationships",children:[{value:"OneToOne",id:"onetoone",children:[]},{value:"OneToMany",id:"onetomany",children:[]}]}],p={rightToc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"NOTE: This document is outdated and needs more work")),Object(a.b)("h2",{id:"database-relationships"},"Database Relationships"),Object(a.b)("p",null,"Graphback supports ",Object(a.b)("inlineCode",{parentName:"p"},"one-to-one")," and ",Object(a.b)("inlineCode",{parentName:"p"},"one-to-many")," relationships and provides out of the box support for the schema and resolvers accordingly."),Object(a.b)("h3",{id:"onetoone"},"OneToOne"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Profile {\n  id: ID!\n  """\n  @oneToOne\n  """\n  user: User!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n}\n')),Object(a.b)("p",null,"This creates a relationship via a ",Object(a.b)("inlineCode",{parentName:"p"},"userId")," column in the ",Object(a.b)("inlineCode",{parentName:"p"},"profile")," table. You can customize the key tracking the relationship with the ",Object(a.b)("inlineCode",{parentName:"p"},"key")," annotation:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Profile {\n  id: ID!\n  """\n  @oneToOne key: \'user_id\'\n  """\n  user: User!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n}\n')),Object(a.b)("p",null,"This maps ",Object(a.b)("inlineCode",{parentName:"p"},"Profile.user")," to ",Object(a.b)("inlineCode",{parentName:"p"},"profile.user_id")," in the database."),Object(a.b)("h3",{id:"onetomany"},"OneToMany"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany field: \'note\'\n  """\n  comments: [Comment]\n}\n')),Object(a.b)("p",null,"This creates a relationship between ",Object(a.b)("inlineCode",{parentName:"p"},"Note.comments")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Comment.note")," and maps to ",Object(a.b)("inlineCode",{parentName:"p"},"comment.noteId")," in the database. If ",Object(a.b)("inlineCode",{parentName:"p"},"Comment.note")," does not exist it will be generated for you."),Object(a.b)("p",null,"With the ",Object(a.b)("inlineCode",{parentName:"p"},"key")," annotation you can customise the database column to map to."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany field: \'note\', key: \'note_id\'\n  """\n  comments: [Comment]\n}\n')),Object(a.b)("p",null,"This maps to ",Object(a.b)("inlineCode",{parentName:"p"},"comment.note_id")," in the database."))}s.isMDXComponent=!0},231:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||a;return t?o.a.createElement(m,c({ref:n},p,{components:t})):o.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);