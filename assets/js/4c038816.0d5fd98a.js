"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[66336],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var p=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,p,r=function(e,t){if(null==e)return{};var a,p,r={},o=Object.keys(e);for(p=0;p<o.length;p++)a=o[p],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(p=0;p<o.length;p++)a=o[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=p.createContext({}),c=function(e){var t=p.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},l=function(e){var t=c(e.components);return p.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},u=p.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?p.createElement(f,n(n({ref:t},l),{},{components:a})):p.createElement(f,n({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,n[1]=i;for(var c=2;c<o;c++)n[c]=a[c];return p.createElement.apply(null,n)}return p.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96035:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var p=a(87462),r=(a(67294),a(3905));const o={},n="spo app upgrade",i={unversionedId:"cmd/spo/app/app-upgrade",id:"cmd/spo/app/app-upgrade",title:"spo app upgrade",description:"Upgrades app in the specified site",source:"@site/docs/cmd/spo/app/app-upgrade.md",sourceDirName:"cmd/spo/app",slug:"/cmd/spo/app/app-upgrade",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-upgrade",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/app/app-upgrade.md",tags:[],version:"current",lastUpdatedAt:1667081579,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo app uninstall",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-uninstall"},next:{title:"spo applicationcustomizer add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/applicationcustomizer/applicationcustomizer-add"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],l={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,p.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-app-upgrade"},"spo app upgrade"),(0,r.kt)("p",null,"Upgrades app in the specified site"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app upgrade [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: ID of the app to upgrade"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-s, --siteUrl <siteUrl>"),"\n: Absolute URL of the site to upgrade the app in"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--appCatalogScope [appCatalogScope]"),"\n: Scope of the app catalog: ",(0,r.kt)("inlineCode",{parentName:"p"},"tenant,sitecollection"),". Default ",(0,r.kt)("inlineCode",{parentName:"p"},"tenant")),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"If the app with the specified ID doesn't exist in the app catalog, the command will fail with an error."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Upgrade the app with ID ",(0,r.kt)("em",{parentName:"p"},"b2307a39-e878-458b-bc90-03bc578531d6")," in the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com"},"https://contoso.sharepoint.com"))," site."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app upgrade --id b2307a39-e878-458b-bc90-03bc578531d6 --siteUrl https://contoso.sharepoint.com\n")),(0,r.kt)("p",null,"Upgrade the app with ID ",(0,r.kt)("em",{parentName:"p"},"b2307a39-e878-458b-bc90-03bc578531d6")," in the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com"},"https://contoso.sharepoint.com"))," site from site collection app catalog."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app upgrade --id b2307a39-e878-458b-bc90-03bc578531d6 --siteUrl https://contoso.sharepoint.com --appCatalogScope sitecollection\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application Lifecycle Management (ALM) APIs: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/apis/alm-api-for-spfx-add-ins"},"https://docs.microsoft.com/en-us/sharepoint/dev/apis/alm-api-for-spfx-add-ins"))))}d.isMDXComponent=!0}}]);