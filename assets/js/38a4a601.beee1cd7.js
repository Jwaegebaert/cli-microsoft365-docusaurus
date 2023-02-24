"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[16853],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return o?n.createElement(f,s(s({ref:t},c),{},{components:o})):n.createElement(f,s({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},20930:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={},s="spo site appcatalog list",i={unversionedId:"cmd/spo/site/site-appcatalog-list",id:"cmd/spo/site/site-appcatalog-list",title:"spo site appcatalog list",description:"List all site collection app catalogs within the tenant",source:"@site/docs/cmd/spo/site/site-appcatalog-list.md",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-appcatalog-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-appcatalog-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-appcatalog-list.md",tags:[],version:"current",lastUpdatedAt:1671825389,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo site appcatalog add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-appcatalog-add"},next:{title:"spo site appcatalog remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-appcatalog-remove"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-site-appcatalog-list"},"spo site appcatalog list"),(0,r.kt)("p",null,"List all site collection app catalogs within the tenant"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site appcatalog list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"!!! important\nTo use this command you need to have at least read permissions on the SharePoint root site."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List all site collection app catalogs within the tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site appcatalog list\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "AbsoluteUrl": "https://contoso.sharepoint.com/sites/site1",\n    "ErrorMessage": "Success",\n    "SiteID": "9798e615-b586-455e-8486-84913f492c49"\n  }\n]\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nAbsoluteUrl                                          SiteID\n---------------------------------------------------  ------------------------------------\nhttps://contoso.sharepoint.com/sites/site1           9798e615-b586-455e-8486-84913f492c49\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nAbsoluteUrl,SiteID\nhttps://contoso.sharepoint.com/sites/site1,9798e615-b586-455e-8486-84913f492c49\n```\n")))}m.isMDXComponent=!0}}]);