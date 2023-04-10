"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[17274],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),i=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||p;return r?o.createElement(g,a(a({ref:t},c),{},{components:r})):o.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var i=2;i<p;i++)a[i]=r[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var o=r(87462),n=(r(67294),r(3905));const p={},a="spo propertybag list",l={unversionedId:"cmd/spo/propertybag/propertybag-list",id:"cmd/spo/propertybag/propertybag-list",title:"spo propertybag list",description:"Gets property bag values",source:"@site/docs/cmd/spo/propertybag/propertybag-list.md",sourceDirName:"cmd/spo/propertybag",slug:"/cmd/spo/propertybag/propertybag-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/propertybag/propertybag-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/propertybag/propertybag-list.md",tags:[],version:"current",lastUpdatedAt:1671253082,formattedLastUpdatedAt:"Dec 17, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo propertybag get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/propertybag/propertybag-get"},next:{title:"spo propertybag remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/propertybag/propertybag-remove"}},s={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-propertybag-list"},"spo propertybag list"),(0,n.kt)("p",null,"Gets property bag values"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag list [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: The URL of the site from which the property bag value should be retrieved."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-f, --folder [folder]"),"\n: Site-relative URL of the folder from which to retrieve property bag value. Case-sensitive."),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Return property bag values located in the given site"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag list --webUrl https://contoso.sharepoint.com/sites/test\n")),(0,n.kt)("p",null,"Return property bag values located in the given site root folder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag list --webUrl https://contoso.sharepoint.com/sites/test --folder /\n")),(0,n.kt)("p",null,"Return property bag values located in the given site document library"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag list --webUrl https://contoso.sharepoint.com/sites/test --folder '/Shared Documents'\n")),(0,n.kt)("p",null,"Return property bag values located in folder in the given site document library"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag list --webUrl https://contoso.sharepoint.com/sites/test --folder '/Shared Documents/MyFolder'\n")),(0,n.kt)("p",null,"Return property bag values located in the given site list"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag list --webUrl https://contoso.sharepoint.com/sites/test --folder /Lists/MyList\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,'=== "JSON"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "key": "vti_approvallevels",\n    "value": "Approved Rejected Pending\\\\ Review"\n  }\n]\n```\n')),(0,n.kt)("p",null,'=== "Text"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```text\nkey                   value                                                                             \n--------------------  -----------------------------------\nvti_approvallevels     Approved Rejected Pending\\ Review\n```\n")),(0,n.kt)("p",null,'=== "CSV"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```csv\nkey,value\nvti_approvallevels,Approved Rejected Pending\\ Review\n```\n")))}d.isMDXComponent=!0}}]);