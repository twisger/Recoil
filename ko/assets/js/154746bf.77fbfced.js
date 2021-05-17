(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{151:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=l(t),d=o,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||a;return t?r.a.createElement(m,c(c({ref:n},p),{},{components:t})):r.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=t[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var o=t(3),r=t(8),a=(t(0),t(151)),s={title:"\uac1c\ubc1c \ub3c4\uad6c",sidebar_label:"\uac1c\ubc1c \ub3c4\uad6c"},c={unversionedId:"guides/dev-tools",id:"guides/dev-tools",isDocsHomePage:!1,title:"\uac1c\ubc1c \ub3c4\uad6c",description:"Recoil\uc740 \uc0c1\ud0dc\uc758 \ubcc0\uacbd\uc744 \uad00\ucc30\ud558\uace0 \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\ub3c4\ub85d \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/guides/dev-tools.md",slug:"/guides/dev-tools",permalink:"/ko/docs/guides/dev-tools",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/guides/dev-tools.md",version:"current",sidebar_label:"\uac1c\ubc1c \ub3c4\uad6c",sidebar:"docs",previous:{title:"\ud14c\uc2a4\ud305",permalink:"/ko/docs/guides/testing"},next:{title:"<RecoilRoot ...props />",permalink:"/ko/docs/api-reference/core/RecoilRoot"}},i=[{value:"<em>IMPORTANT NOTE</em>",id:"important-note",children:[]},{value:"Observing All State Changes (\ubaa8\ub4e0 \uc0c1\ud0dc\uc758 \ubcc0\ud654 \uad00\ucc30)",id:"observing-all-state-changes-\ubaa8\ub4e0-\uc0c1\ud0dc\uc758-\ubcc0\ud654-\uad00\ucc30",children:[]},{value:"Observing State Changes On-Demand (On-Demand \ubc29\uc2dd\uc5d0 \ub530\ub77c \uc0c1\ud0dc \ubcc0\ud654 \uad00\ucc30\ud558\uae30)",id:"observing-state-changes-on-demand-on-demand-\ubc29\uc2dd\uc5d0-\ub530\ub77c-\uc0c1\ud0dc-\ubcc0\ud654-\uad00\ucc30\ud558\uae30",children:[]},{value:"Time Travel",id:"time-travel",children:[]}],p={toc:i};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Recoil\uc740 \uc0c1\ud0dc\uc758 \ubcc0\uacbd\uc744 \uad00\ucc30\ud558\uace0 \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\ub3c4\ub85d \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"important-note"},Object(a.b)("em",{parentName:"h2"},"IMPORTANT NOTE")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"\uc774 API\ub294 \ud604\uc7ac \uac1c\ubc1c\uc911\uc774\uba70 \ubc14\ub014 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c0\uc18d\uc801\uc778 \uad00\uc2ec \ubc14\ub78d\ub2c8\ub2e4..."))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"observing-all-state-changes-\ubaa8\ub4e0-\uc0c1\ud0dc\uc758-\ubcc0\ud654-\uad00\ucc30"},"Observing All State Changes (\ubaa8\ub4e0 \uc0c1\ud0dc\uc758 \ubcc0\ud654 \uad00\ucc30)"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilSnapshot"},Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"useRecoilSnapshot()")))," \uacfc \uac19\uc740 hook\uc744 \uc0ac\uc6a9\ud558\uac70\ub098 ",Object(a.b)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilTransactionObserver"},Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"useRecoilTransactionObserver_UNSTABLE()")))," \uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0c1\ud0dc\uc758 \ubcc0\ud654\ub97c \uad6c\ub3c5\ud558\uace0 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\uc758 ",Object(a.b)("a",{parentName:"p",href:"https://recoiljs.org/docs/api-reference/core/Snapshot"},Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"Snapshot")))," \uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,"\ud55c\ubc88 Snapshot\uc744 \uc5bb\uc73c\uba74 ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"getLodable()")),", ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"getPromise()"))," , \uadf8\ub9ac\uace0 ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"getInfo_UNSTABLE()"))," \uacfc \uac19\uc740 \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0c1\ud0dc\ub97c \uac10\uc2dc\ud560 \uc218 \uc788\uc73c\uba70, ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"getNodes_UNSTABLE()"))," \uc744 \uc0ac\uc6a9\ud558\uc5ec \uc54c\ub824\uc9c4 atom\uc758 set\ub97c \uc21c\ud68c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function DebugObserver(): React.Node {\n  const snapshot = useRecoilSnapshot();\n  useEffect(() => {\n    console.debug('The following atoms were modified:');\n    for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {\n      console.debug(node.key, snapshot.getLoadable(node));\n    }\n  }, [snapshot]);\n\n  return null;\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function MyApp() {\n  return (\n    <RecoilRoot>\n      <DebugObserver />\n      ...\n    </RecoilRoot>\n  );\n}\n")),Object(a.b)("h2",{id:"observing-state-changes-on-demand-on-demand-\ubc29\uc2dd\uc5d0-\ub530\ub77c-\uc0c1\ud0dc-\ubcc0\ud654-\uad00\ucc30\ud558\uae30"},"Observing State Changes On-Demand (On-Demand \ubc29\uc2dd\uc5d0 \ub530\ub77c \uc0c1\ud0dc \ubcc0\ud654 \uad00\ucc30\ud558\uae30)"),Object(a.b)("p",null,"\ud639\uc740 ",Object(a.b)("a",{parentName:"p",href:"https://recoiljs.org/docs/api-reference/core/useRecoilCallback"},Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"useRecoilCallback()")))," hook\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud544\uc694\uc5d0 \ub530\ub77c ",Object(a.b)("a",{parentName:"p",href:"https://recoiljs.org/docs/api-reference/core/Snapshot"},Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"Snapshot")))," \uc744 \uc5bb\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function DebugButton(): React.Node {\n  const onClick = useRecoilCallback(\n    ({snapshot}) => async () => {\n      console.debug('Atom values:');\n      for (const node of snapshot.getNodes_UNSTABLE()) {\n        const value = await snapshot.getPromise(node);\n        console.debug(node.key, value);\n      }\n    },\n    [],\n  );\n\n  return <button onClick={onClick}>Dump State</button>;\n}\n")),Object(a.b)("h2",{id:"time-travel"},"Time Travel"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api-reference/core/useGotoRecoilSnapshot"},Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"useGotoRecoilSnapshot()")))," hook\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc81c\uacf5\ub41c ",Object(a.b)("inlineCode",{parentName:"p"},"Snapshot"),"\uacfc \ub9e4\uce58\ub418\ub3c4\ub85d \uc804\uccb4 Recoil \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc608\uc81c\ub294 \uc774\uc804\uc758 \uc804\uc5ed \uc0c1\ud0dc\ub85c \ub3cc\uc544\uac00 \ubcf5\uad6c\ud558\ub294 \ub2a5\ub825\uc744 \uc774\uc6a9\ud574 \uc0c1\ud0dc \ubcc0\uacbd \ud788\uc2a4\ud1a0\ub9ac\ub97c \uc720\uc9c0\ud569\ub2c8\ub2e4"),Object(a.b)("p",null,"Snapshot\uc740 ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"getID()"))," \uba54\uc11c\ub4dc\ub3c4 \uc81c\uacf5\ud569\ub2c8\ub2e4. ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"getID()"))," \ub294 ",Object(a.b)("inlineCode",{parentName:"p"},"snapshot")," \ud788\uc2a4\ud1a0\ub9ac\uc758 \uc5c5\ub370\uc774\ud2b8\ub97c \ub9c9\uae30 \uc704\ud574 \uc774\uc804\uc5d0 \uc54c\ub824\uc9c4 \uc0c1\ud0dc\ub85c \ub418\ub3cc\uc544\uac00\ub294\uc9c0 \uc54c\uc544\ub0b4\ub294\ub370\uc5d0 \ub3c4\uc6c0\uc744 \uc90d\ub2c8\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function TimeTravelObserver() {\n  const [snapshots, setSnapshots] = useState([]);\n\n  const snapshot = useRecoilSnapshot();\n  useEffect(() => {\n    if (snapshots.every((s) => s.getID() !== snapshot.getID())) {\n      setSnapshots([...snapshots, snapshot]);\n    }\n  }, [snapshot]);\n\n  const gotoSnapshot = useGotoRecoilSnapshot();\n\n  return (\n    <ol>\n      {snapshots.map((snapshot, i) => (\n        <li key={i}>\n          Snapshot {i}\n          <button onClick={() => gotoSnapshot(snapshot)}>Restore</button>\n        </li>\n      ))}\n    </ol>\n  );\n}\n")))}l.isMDXComponent=!0}}]);