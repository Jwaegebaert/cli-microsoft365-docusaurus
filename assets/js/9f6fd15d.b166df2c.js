"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,p=function(e,t){if(null==e)return{};var r,o,p={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var s=o.createContext({}),i=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,p=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),g=p,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||n;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=r.length,a=new Array(n);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:p,a[1]=l;for(var i=2;i<n;i++)a[i]=r[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1059:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var o=r(87462),p=(r(67294),r(3905));const n={},a="spo propertybag get",l={unversionedId:"cmd/spo/propertybag/propertybag-get",id:"cmd/spo/propertybag/propertybag-get",title:"spo propertybag get",description:"Gets the value of the specified property from the property bag",source:"@site/docs/cmd/spo/propertybag/propertybag-get.md",sourceDirName:"cmd/spo/propertybag",slug:"/cmd/spo/propertybag/propertybag-get",permalink:"/cmd/spo/propertybag/propertybag-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/propertybag/propertybag-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo page text add",permalink:"/cmd/spo/page/page-text-add"},next:{title:"spo propertybag list",permalink:"/cmd/spo/propertybag/propertybag-list"}},s={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:i};function d(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"spo-propertybag-get"},"spo propertybag get"),(0,p.kt)("p",null,"Gets the value of the specified property from the property bag"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag get [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: The URL of the site from which the property bag value should be retrieved."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-k, --key <key>"),"\n: Key of the property for which the value should be retrieved. Case-sensitive."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-f, --folder [folder]"),"\n: Site-relative URL of the folder from which to retrieve property bag value. Case-sensitive."),(0,p.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Returns the value of the property from the property bag located in the given site"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag get --webUrl https://contoso.sharepoint.com/sites/test --key key1\n")),(0,p.kt)("p",null,"Returns the value of the property from the property bag located in root folder of the given site"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag get --webUrl https://contoso.sharepoint.com/sites/test --key key1 --folder /\n")),(0,p.kt)("p",null,"Returns the value of the property from the property bag located in document library of the given site"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag get --webUrl https://contoso.sharepoint.com/sites/test --key key1 --folder '/Shared Documents'\n")),(0,p.kt)("p",null,"Returns the value of the property from the property bag located in folder in a document library located in the given site"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag get --webUrl https://contoso.sharepoint.com/sites/test --key key1 --folder '/Shared Documents/MyFolder'\n")),(0,p.kt)("p",null,"Returns the value of the property from the property bag located in a list in the given site"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag get --webUrl https://contoso.sharepoint.com/sites/test --key key1 --folder /Lists/MyList\n")),(0,p.kt)("h2",{id:"response"},"Response"),(0,p.kt)("p",null,'=== "JSON"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'```json\n"Approved Rejected Pending\\\\ Review"\n```\n')),(0,p.kt)("p",null,'=== "Text"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"```text\nApproved Rejected Pending\\\\ Review\n```\n")),(0,p.kt)("p",null,'=== "CSV"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"```csv\nApproved Rejected Pending\\ Review\n```\n")))}d.isMDXComponent=!0}}]);