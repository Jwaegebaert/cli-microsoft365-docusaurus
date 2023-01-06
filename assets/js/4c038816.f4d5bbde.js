"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66336],{3905:(e,t,p)=>{p.d(t,{Zo:()=>c,kt:()=>f});var a=p(67294);function r(e,t,p){return t in e?Object.defineProperty(e,t,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[t]=p,e}function n(e,t){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),p.push.apply(p,a)}return p}function o(e){for(var t=1;t<arguments.length;t++){var p=null!=arguments[t]?arguments[t]:{};t%2?n(Object(p),!0).forEach((function(t){r(e,t,p[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):n(Object(p)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(p,t))}))}return e}function i(e,t){if(null==e)return{};var p,a,r=function(e,t){if(null==e)return{};var p,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)p=n[a],t.indexOf(p)>=0||(r[p]=e[p]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)p=n[a],t.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(r[p]=e[p])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),p=t;return e&&(p="function"==typeof e?e(t):o(o({},t),e)),p},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var p=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(p),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||n;return p?a.createElement(f,o(o({ref:t},c),{},{components:p})):a.createElement(f,o({ref:t},c))}));function f(e,t){var p=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=p.length,o=new Array(n);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<n;l++)o[l]=p[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,p)}u.displayName="MDXCreateElement"},96035:(e,t,p)=>{p.r(t),p.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=p(87462),r=(p(67294),p(3905));const n={},o="spo app upgrade",i={unversionedId:"cmd/spo/app/app-upgrade",id:"cmd/spo/app/app-upgrade",title:"spo app upgrade",description:"Upgrades app in the specified site",source:"@site/docs/cmd/spo/app/app-upgrade.md",sourceDirName:"cmd/spo/app",slug:"/cmd/spo/app/app-upgrade",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-upgrade",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/app/app-upgrade.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo app uninstall",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-uninstall"},next:{title:"spo apppage add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/apppage/apppage-add"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],c={toc:l};function d(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-app-upgrade"},"spo app upgrade"),(0,r.kt)("p",null,"Upgrades app in the specified site"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app upgrade [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: ID of the app to upgrade"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-s, --siteUrl <siteUrl>"),"\n: Absolute URL of the site to upgrade the app in"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--appCatalogScope [appCatalogScope]"),"\n: Scope of the app catalog: ",(0,r.kt)("inlineCode",{parentName:"p"},"tenant,sitecollection"),". Default ",(0,r.kt)("inlineCode",{parentName:"p"},"tenant")),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"If the app with the specified ID doesn't exist in the app catalog, the command will fail with an error."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Upgrade the app with ID ",(0,r.kt)("em",{parentName:"p"},"b2307a39-e878-458b-bc90-03bc578531d6")," in the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com"},"https://contoso.sharepoint.com"))," site."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app upgrade --id b2307a39-e878-458b-bc90-03bc578531d6 --siteUrl https://contoso.sharepoint.com\n")),(0,r.kt)("p",null,"Upgrade the app with ID ",(0,r.kt)("em",{parentName:"p"},"b2307a39-e878-458b-bc90-03bc578531d6")," in the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com"},"https://contoso.sharepoint.com"))," site from site collection app catalog."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app upgrade --id b2307a39-e878-458b-bc90-03bc578531d6 --siteUrl https://contoso.sharepoint.com --appCatalogScope sitecollection\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application Lifecycle Management (ALM) APIs: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/apis/alm-api-for-spfx-add-ins"},"https://docs.microsoft.com/en-us/sharepoint/dev/apis/alm-api-for-spfx-add-ins"))))}d.isMDXComponent=!0}}]);