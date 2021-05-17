(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{139:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(8),a=(r(0),r(151)),c={title:"useRecoilTransactionObserver_UNSTABLE(callback)",sidebar_label:"useRecoilTransactionObserver()"},i={unversionedId:"api-reference/core/useRecoilTransactionObserver",id:"api-reference/core/useRecoilTransactionObserver",isDocsHomePage:!1,title:"useRecoilTransactionObserver_UNSTABLE(callback)",description:"NOTE: \uc774 API\ub294 \ubd88\uc548\uc815\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilTransactionObserver.md",slug:"/api-reference/core/useRecoilTransactionObserver",permalink:"/ko/docs/api-reference/core/useRecoilTransactionObserver",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilTransactionObserver.md",version:"current",sidebar_label:"useRecoilTransactionObserver()",sidebar:"docs",previous:{title:"class Snapshot",permalink:"/ko/docs/api-reference/core/Snapshot"},next:{title:"useRecoilSnapshot()",permalink:"/ko/docs/api-reference/core/useRecoilSnapshot"}},s=[{value:"<strong><em>NOTE</em></strong>: <em>\uc774 API\ub294 \ubd88\uc548\uc815\ud569\ub2c8\ub2e4.</em>",id:"note-\uc774-api\ub294-\ubd88\uc548\uc815\ud569\ub2c8\ub2e4",children:[{value:"Debug Example",id:"debug-example",children:[]}]}],u={toc:s};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"note-\uc774-api\ub294-\ubd88\uc548\uc815\ud569\ub2c8\ub2e4"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)("em",{parentName:"strong"},"NOTE")),": ",Object(a.b)("em",{parentName:"h2"},"\uc774 API\ub294 \ubd88\uc548\uc815\ud569\ub2c8\ub2e4.")),Object(a.b)("p",null,"\uc774 hook\uc740 Recoil atom \uc0c1\ud0dc\uc5d0 \ubcc0\ud654\uac00 \uc0dd\uae38 \ub54c\ub9c8\ub2e4 \ucf5c\ubc31\uc774 \uc2e4\ud589\ub418\ub3c4\ub85d \uad6c\ub3c5\ud569\ub2c8\ub2e4. \uc5ec\ub7ec \uc5c5\ub370\uc774\ud2b8\ub97c \ub2e8\uc77c \ud2b8\ub79c\uc81d\uc158\uc5d0\uc11c \uc77c\uad04\uc801\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 hook\uc740 \uc9c0\uc18d\ub41c \uc0c1\ud0dc \ubcc0\ud654, \uac1c\ubc1c \ud234, \ud788\uc2a4\ud1a0\ub9ac \ube4c\ub4dc \ub4f1\ub4f1\uc5d0 \uc88b\uc2b5\ub2c8\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilTransactionObserver_UNSTABLE(({\n  snapshot: Snapshot,\n  previousSnapshot: Snapshot,\n}) => void)\n")),Object(a.b)("p",null,"React \uc77c\uad04 \ud2b8\ub79c\uc81d\uc158\uc744 \uc704\ud55c \ud604\uc7ac\uc640 \uc774\uc804 \uc0c1\ud0dc\uc758 ",Object(a.b)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},Object(a.b)("inlineCode",{parentName:"a"},"Snapshot"))," \uc744 \uc81c\uacf5\ud558\ub294 \ucf5c\ubc31\uc785\ub2c8\ub2e4. \uac1c\ubcc4\uc801\uc778 atom\uc5d0 \ub300\ud55c \ubcc0\uacbd\ub9cc \uad6c\ub3c5\ud558\uace0 \uc2f6\ub2e4\uba74 \ub300\uc2e0 effect\ub97c \uace0\ub824\ud574\ubcf4\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ud5a5\ud6c4\uc5d0\ub294 \ud2b9\uc815 \uc870\uac74\uc5d0 \uad6c\ub3c5\ud558\uac70\ub098 \uc131\ub2a5\uc744 \uc704\ud574 debouncing\uc744 \uc81c\uacf5\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \ud5c8\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("h3",{id:"debug-example"},"Debug Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function DebugObserver() {\n  useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {\n    window.myDebugState = {\n      a: snapshot.getLoadable(atomA).contents,\n      b: snapshot.getLoadable(atomB).contents,\n    };\n  });\n  return null;\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <DebugObserver />\n      ...\n    </RecoilRoot>\n  );\n}\n")))}l.isMDXComponent=!0},151:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=t,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return r?o.a.createElement(d,i(i({ref:n},u),{},{components:r})):o.a.createElement(d,i({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);