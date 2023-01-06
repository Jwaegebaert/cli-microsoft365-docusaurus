"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5662],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(o),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},13985:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const s={},i="spo homesite get",a={unversionedId:"cmd/spo/homesite/homesite-get",id:"cmd/spo/homesite/homesite-get",title:"spo homesite get",description:"Gets information about the Home Site",source:"@site/docs/cmd/spo/homesite/homesite-get.md",sourceDirName:"cmd/spo/homesite",slug:"/cmd/spo/homesite/homesite-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/homesite/homesite-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/homesite/homesite-get.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo hidedefaultthemes set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hidedefaultthemes/hidedefaultthemes-set"},next:{title:"spo homesite remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/homesite/homesite-remove"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],p={toc:l};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-homesite-get"},"spo homesite get"),(0,r.kt)("p",null,"Gets information about the Home Site"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo homesite get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get information about the Home Site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo homesite get\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n{\n  "SiteId": "af80c11f-0138-4d72-bb37-514542c3aabb",\n  "WebId": "6f90666d-b0e7-40c3-991f-4ab051d00a70",\n  "LogoUrl": "https://contoso.sharepoint.com/sites/intra/siteassets/work.png",\n  "Title": "Intranet",\n  "Url": "https://contoso.sharepoint.com/sites/intra"\n}\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nLogoUrl: https://contoso.sharepoint.com/sites/intra/siteassets/work.png\nSiteId : af80c11f-0138-4d72-bb37-514542c3aabb\nTitle  : Intranet\nUrl    : https://contoso.sharepoint.com/sites/intra\nWebId  : 6f90666d-b0e7-40c3-991f-4ab051d00a70\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nSiteId,WebId,LogoUrl,Title,Url\naf80c11f-0138-4d72-bb37-514542c3aabb,6f90666d-b0e7-40c3-991f-4ab051d00a70,https://contoso.sharepoint.com/sites/intra/siteassets/work.png,Intranet,https://contoso.sharepoint.com/sites/intra\n```\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SharePoint home sites: a landing for your organization on the intelligent intranet: ",(0,r.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/Microsoft-SharePoint-Blog/SharePoint-home-sites-a-landing-for-your-organization-on-the/ba-p/621933"},"https://techcommunity.microsoft.com/t5/Microsoft-SharePoint-Blog/SharePoint-home-sites-a-landing-for-your-organization-on-the/ba-p/621933"))))}m.isMDXComponent=!0}}]);