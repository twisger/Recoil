(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{151:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,d=p["".concat(a,".").concat(m)]||p[m]||f[m]||c;return t?o.a.createElement(d,i(i({ref:r},u),{},{components:t})):o.a.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(8),c=(t(0),t(151)),a={title:"errorSelector(message)",sidebar_label:"errorSelector()"},i={unversionedId:"api-reference/utils/errorSelector",id:"api-reference/utils/errorSelector",isDocsHomePage:!1,title:"errorSelector(message)",description:"\ud56d\uc0c1 \uc81c\uacf5\ub41c \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\ub294 selector\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/errorSelector.md",slug:"/api-reference/utils/errorSelector",permalink:"/ko/docs/api-reference/utils/errorSelector",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/errorSelector.md",version:"current",sidebar_label:"errorSelector()",sidebar:"docs",previous:{title:"constSelector(constant)",permalink:"/ko/docs/api-reference/utils/constSelector"},next:{title:"noWait(state)",permalink:"/ko/docs/api-reference/utils/noWait"}},l=[{value:"Example",id:"example",children:[]}],u={toc:l};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\ud56d\uc0c1 \uc81c\uacf5\ub41c \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\ub294 ",Object(c.b)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"selector"),"\uc785\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function errorSelector(message: string): RecoilValueReadOnly\n")),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"const myAtom = atom({\n  key: 'My Atom',\n  default: errorSelector('Attempt to use Atom before initialization'),\n});\n")))}s.isMDXComponent=!0}}]);