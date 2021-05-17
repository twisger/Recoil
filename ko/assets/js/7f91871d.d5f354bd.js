(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(8),a=(t(0),t(151)),c={title:"useGetRecoilValueInfo_UNSTABLE()",sidebar_label:"useGetRecoilValueInfo()"},i={unversionedId:"api-reference/core/useGetRecoilValueInfo",id:"api-reference/core/useGetRecoilValueInfo",isDocsHomePage:!1,title:"useGetRecoilValueInfo_UNSTABLE()",description:'\uc774 \ud6c5\uc740 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ud558\ub098\uc758 atom \ud639\uc740 selector\uc758 \ud604\uc7ac \uc0c1\ud0dc\uc640 \uac12 \uadf8\ub9ac\uace0 \uae30\ud0c0 \ub2e4\ub978 \uc815\ubcf4\ub4e4\uc744 \uc0b4\ud3b4\ubcfc("peek") \uc218 \uc788\ub3c4\ub85d \ud55c\ub2e4. \uc774 \ud6c5\uc740 Snapshot\uc758 getInfo_UNSTABLE() \uba54\uc18c\ub4dc\uc640 \uc720\uc0ac\ud558\ub2e4.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useGetRecoilValueInfo.md",slug:"/api-reference/core/useGetRecoilValueInfo",permalink:"/ko/docs/api-reference/core/useGetRecoilValueInfo",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useGetRecoilValueInfo.md",version:"current",sidebar_label:"useGetRecoilValueInfo()",sidebar:"docs",previous:{title:"useRecoilValueLoadable(state)",permalink:"/ko/docs/api-reference/core/useRecoilValueLoadable"},next:{title:"isRecoilValue(value)",permalink:"/ko/docs/api-reference/core/isRecoilValue"}},l=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",children:[]}],u={toc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,'\uc774 \ud6c5\uc740 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ud558\ub098\uc758 atom \ud639\uc740 selector\uc758 \ud604\uc7ac \uc0c1\ud0dc\uc640 \uac12 \uadf8\ub9ac\uace0 \uae30\ud0c0 \ub2e4\ub978 \uc815\ubcf4\ub4e4\uc744 \uc0b4\ud3b4\ubcfc("peek") \uc218 \uc788\ub3c4\ub85d \ud55c\ub2e4. \uc774 \ud6c5\uc740 ',Object(a.b)("a",{parentName:"p",href:"docs/api-reference/core/Snapshot"},Object(a.b)("inlineCode",{parentName:"a"},"Snapshot")),"\uc758 ",Object(a.b)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot#debug-information"},Object(a.b)("inlineCode",{parentName:"a"},"getInfo_UNSTABLE()"))," \uba54\uc18c\ub4dc\uc640 \uc720\uc0ac\ud558\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function useGetRecoilValueInfo_UNSTABLE(): RecoilValue<T> => AtomInfo<T>;\n\ninterface AtomInfo<T> {\n  loadable?: Loadable<T>;\n  isActive: boolean;\n  isSet: boolean;\n  isModified: boolean; // [TODO] \uc218\uc815\ub41c selectors\uc5d0 \ub300\ud574\uc11c\ub3c4 \ud45c\uc2dc\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc57c\ud55c\ub2e4. \ud604\uc7ac\ub294 atom\uc758 \uc218\uc815 \uc5ec\ubd80\ub9cc \ud45c\uae30\ub41c\ub2e4.\n  type: 'atom' | 'selector' | undefined; // \uc77c\ub2e8 \uc9c0\uae08\uc740, \ucd08\uae30\ud654\ub420 \ub54c\uae4c\uc9c0\ub294 undefined\ub97c \uc9c0\ub2cc\ub2e4.\n  deps: Iterable<RecoilValue<T>>;\n  subscribers: {\n    nodes: Iterable<RecoilValue<T>>,\n    components: Iterable<ComponentInfo>,\n  };\n}\n\ninterface ComponentInfo {\n  name: string;\n}\n")),Object(a.b)("p",null,"\uc774 \ud6c5\uc740 ",Object(a.b)("inlineCode",{parentName:"p"},"RecoilValue<T>"),"\ub97c \uc804\ub2ec\ubc1b\uc544 \ud574\ub2f9 atom/selector\uc758 \ud604\uc7ac \uc815\ubcf4\uac00 \ud3ec\ud568\ub41c \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\ub97c \uc81c\uacf5\ud55c\ub2e4. \uc774 \ud6c5\uc740 \uc0c1\ud0dc\ub97c \ubcc0\ud654\uc2dc\ud0a4\uac70\ub098 \uc0c8\ub85c\uc6b4 \uad6c\ub3c5\uc744 \ub9cc\ub4e4\uc9c0 \uc54a\uc73c\uba70, \uc8fc\ub85c \ub514\ubc84\uae45 \ub610\ub294 \uac1c\ubc1c \ub3c4\uad6c\uc5d0 \uc0ac\uc6a9\ub41c\ub2e4."),Object(a.b)("p",null,"\ub514\ubc84\uadf8 \uc815\ubcf4\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc740 \ubc1c\uc804 \uc911\uc5d0 \uc788\uc9c0\ub9cc, \ub2e4\uc74c \uc694\uc18c\ub4e4\uc740 \uc544\ub9c8 \ud3ec\ud568\ub420 \uac83\uc774\ub2e4:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"loadable")," - \ud604\uc7ac \uc0c1\ud0dc\ub97c \uc9c0\ub2cc \ud558\ub098\uc758 Loadable \uac1d\uccb4. ",Object(a.b)("inlineCode",{parentName:"li"},"getLoadable()")," \uba54\uc18c\ub4dc\uc640\ub294 \ub2e4\ub974\uac8c \uc774 \uba54\uc18c\ub4dc\ub294 \uc2a4\ub0c5\uc0f7(snapshot)\uc744 \uc804\ud600 \ubcc0\ud615\uc2dc\ud0a4\uae30 \uc54a\ub294\ub2e4. \ub2e8\uc21c\ud788 \ud604\uc7ac \uc0c1\ud0dc\ub97c \uc81c\uacf5\ud558\uba70, \uc0c8\ub85c\uc6b4 atoms/selectors\ub97c \ucd08\uae30\ud654\ud558\uac70\ub098, \uc0c8\ub85c\uc6b4 selector \ud3c9\uac00\ub97c \uc218\ud589\ud558\uac70\ub098, \uc885\uc18d\uc131 \ub610\ub294 \uad6c\ub3c5\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uc9c4 \uc54a\ub294\ub2e4. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"isSet")," - \uc2a4\ub0c5\uc0f7 \uc0c1\ud0dc(snapshot state)\uc5d0 \uc800\uc7a5\ub41c \uba85\ud655\ud55c \uac12\uc744 \uac00\uc9c4 atom\uc778 \uacbd\uc6b0 True, selector\uc774\uac70\ub098 default atom \uc0c1\ud0dc\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 False"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"isModified")," - \ub9c8\uc9c0\ub9c9 \ud2b8\ub79c\uc7ad\uc158 \uc774\ud6c4 \uc218\uc815\ub41c atom\uc778 \uacbd\uc6b0 True"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"type")," - ",Object(a.b)("inlineCode",{parentName:"li"},"atom")," \ub610\ub294 ",Object(a.b)("inlineCode",{parentName:"li"},"selector")," \uc911 \ud558\ub098"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"deps")," - \uc774 \ub178\ub4dc\uac00 \uc758\uc874\ud558\uace0 \uc788\ub294 atoms \ud639\uc740 selectors\ub97c \ub2f4\uc740 iterator \uac1d\uccb4"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"subscribers")," - \uc774 \uc2a4\ub0c5\uc0f7 \ub0b4\uc5d0\uc11c \uc5b4\ub5a4 \ud56d\ubaa9\ub4e4\uc774 \uc774 \ub178\ub4dc\ub97c \uad6c\ub3c5\ud558\uace0\uc788\ub294 \uc9c0\uc5d0 \ub300\ud55c \uc815\ubcf4. \uc790\uc138\ud55c \uc0ac\ud56d\uc740 \uac1c\ubc1c\uc911\uc774\ub2e4.")),Object(a.b)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function ButtonToShowCurrentSubscriptions() {\n  const getRecoilValueInfo = useGetRecoilValueInfo_UNSTABLE();\n  function onClick() {\n    const {subscribers} = getRecoilValueInfo(myAtom);\n    console.debug(\n      'Current Subscriber Nodes:',\n      Array.from(subscribers.nodes).map(({key})=>key),\n    );\n  }\n\n  return <button onClick={onClick} >See Current Subscribers</button>;\n}\n")))}s.isMDXComponent=!0},151:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(t),f=r,d=b["".concat(c,".").concat(f)]||b[f]||p[f]||a;return t?o.a.createElement(d,i(i({ref:n},u),{},{components:t})):o.a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);