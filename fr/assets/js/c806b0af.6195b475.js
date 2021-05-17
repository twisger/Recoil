(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(151)),i={title:"<RecoilRoot ...props />",sidebar_label:"<RecoilRoot />"},c={unversionedId:"api-reference/core/RecoilRoot",id:"api-reference/core/RecoilRoot",isDocsHomePage:!1,title:"<RecoilRoot ...props />",description:"Fournit le contexte dans lequel les atomes ont des valeurs. Doit \xeatre un anc\xeatre de tout composant qui utilise des hooks Recoil. Plusieurs racines peuvent coexister; les atomes auront des valeurs distinctes dans chaque racine. S'ils sont imbriqu\xe9s, la racine la plus interne masquera compl\xe8tement les racines externes.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/RecoilRoot.md",slug:"/api-reference/core/RecoilRoot",permalink:"/fr/docs/api-reference/core/RecoilRoot",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/RecoilRoot.md",version:"current",sidebar_label:"<RecoilRoot />",sidebar:"docs",previous:{title:"Outils de d\xe9veloppement",permalink:"/fr/docs/guides/dev-tools"},next:{title:"atome(options)",permalink:"/fr/docs/api-reference/core/atom"}},l=[{value:"Exemple",id:"exemple",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Fournit le contexte dans lequel les atomes ont des valeurs. Doit \xeatre un anc\xeatre de tout composant qui utilise des hooks Recoil. Plusieurs racines peuvent coexister; les atomes auront des valeurs distinctes dans chaque racine. S'ils sont imbriqu\xe9s, la racine la plus interne masquera compl\xe8tement les racines externes."),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Props"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"initializeState?"),": ",Object(a.b)("inlineCode",{parentName:"li"},"(MutableSnapshot => void)"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Une fonction optionnelle qui prend un ",Object(a.b)("a",{parentName:"li",href:"/docs/api-reference/core/Snapshot#transforming-snapshots"},Object(a.b)("inlineCode",{parentName:"a"},"MutableSnapshot"))," \xe0 ",Object(a.b)("a",{parentName:"li",href:"/docs/api-reference/core/Snapshot#state-initialization"},"initialize")," le ",Object(a.b)("inlineCode",{parentName:"li"},"<RecoilRoot>")," \xe9tat de l'atome. Cela configure l'\xe9tat du rendu initial et n'est pas destin\xe9 aux changements d'\xe9tat ult\xe9rieurs ou \xe0 l'initialisation asynchrone. Utilisez des hooks tels que ",Object(a.b)("a",{parentName:"li",href:"/docs/api-reference/core/useSetRecoilState"},Object(a.b)("inlineCode",{parentName:"a"},"useSetRecoilState()"))," ou ",Object(a.b)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilCallback"},Object(a.b)("inlineCode",{parentName:"a"},"useRecoilCallback()"))," pour les changements d'\xe9tat asynchrone.")))),Object(a.b)("hr",null),Object(a.b)("p",null,"Les ",Object(a.b)("inlineCode",{parentName:"p"},"<RecoilRoot>")," repr\xe9sentent des fournisseurs / magasins ind\xe9pendants de l'\xe9tat de l'atome. Notez que les caches, tels que les caches de s\xe9lecteurs, peuvent \xeatre partag\xe9s entre les racines. Les \xe9valuations des s\xe9lecteurs doivent \xeatre idempotentes, sauf pour la mise en cache ou la journalisation, donc cela ne devrait pas \xeatre un probl\xe8me, mais peut \xeatre observable ou peut entra\xeener la mise en cache de requ\xeates redondantes entre les racines."),Object(a.b)("h3",{id:"exemple"},"Exemple"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import {RecoilRoot} from 'recoil';\n\nfunction AppRoot() {\n  return (\n    <RecoilRoot>\n      <ComponentThatUsesRecoil />\n    </RecoilRoot>\n  );\n}\n")))}u.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);