"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[98717],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var p=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,p,o=function(e,t){if(null==e)return{};var a,p,o={},r=Object.keys(e);for(p=0;p<r.length;p++)a=r[p],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(p=0;p<r.length;p++)a=r[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=p.createContext({}),l=function(e){var t=p.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=l(e.components);return p.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},f=p.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(a),f=o,u=m["".concat(c,".").concat(f)]||m[f]||d[f]||r;return a?p.createElement(u,n(n({ref:t},s),{},{components:a})):p.createElement(u,n({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,n[1]=i;for(var l=2;l<r;l++)n[l]=a[l];return p.createElement.apply(null,n)}return p.createElement.apply(null,a)}f.displayName="MDXCreateElement"},46367:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var p=a(87462),o=(a(67294),a(3905));const r={},n="spo app retract",i={unversionedId:"cmd/spo/app/app-retract",id:"cmd/spo/app/app-retract",title:"spo app retract",description:"Retracts the specified app from the specified app catalog",source:"@site/docs/cmd/spo/app/app-retract.md",sourceDirName:"cmd/spo/app",slug:"/cmd/spo/app/app-retract",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-retract",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/app/app-retract.md",tags:[],version:"current",lastUpdatedAt:1667081579,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo app remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-remove"},next:{title:"spo app teamspackage download",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-teamspackage-download"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],s={toc:l},m="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,p.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-app-retract"},"spo app retract"),(0,o.kt)("p",null,"Retracts the specified app from the specified app catalog"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app retract [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: ID of the app to retract. Needs to be available in the app catalog."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --appCatalogUrl [appCatalogUrl]"),"\n: URL of the tenant or site collection app catalog. It must be specified when the scope is ",(0,o.kt)("inlineCode",{parentName:"p"},"sitecollection")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-s, --appCatalogScope [appCatalogScope]"),"\n: Scope of the app catalog: ",(0,o.kt)("inlineCode",{parentName:"p"},"tenant,sitecollection"),". Default ",(0,o.kt)("inlineCode",{parentName:"p"},"tenant")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming retracting the app"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"When getting information about an app from the tenant app catalog, it's not necessary to specify the tenant app catalog URL. When the URL is not specified, the CLI will try to resolve the URL itself. Specifying the app catalog URL is required when you want to get information about an app from a site collection app catalog."),(0,o.kt)("p",null,"When specifying site collection app catalog, you can specify the URL either with our without the ",(0,o.kt)("em",{parentName:"p"},"AppCatalog")," part, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"https://contoso.sharepoint.com/sites/team-a/AppCatalog")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"https://contoso.sharepoint.com/sites/team-a"),". CLI will accept both formats."),(0,o.kt)("p",null,"If the app with the specified ID doesn't exist in the app catalog, the command will fail with an error."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Retract the specified app from the tenant app catalog. Try to resolve the URL of the tenant app catalog automatically. Additionally, will prompt for confirmation before actually retracting the app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app retract --id 058140e3-0e37-44fc-a1d3-79c487d371a3\n")),(0,o.kt)("p",null,"Retract the specified app from the tenant app catalog located at ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/apps"},"https://contoso.sharepoint.com/sites/apps")),". Additionally, will prompt for confirmation before actually retracting the app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app retract --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --appCatalogUrl https://contoso.sharepoint.com/sites/apps\n")),(0,o.kt)("p",null,"Retract the specified app from the tenant app catalog. Try to resolve the URL of the tenant app catalog automatically. Will not prompt for confirmation before retracting the app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app retract --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --confirm\n")),(0,o.kt)("p",null,"Retract the specified app from a site collection app catalog of site ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/site1"},"https://contoso.sharepoint.com/sites/site1")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app retract --id d95f8c94-67a1-4615-9af8-361ad33be93c --appCatalogScope sitecollection --appCatalogUrl https://contoso.sharepoint.com/sites/site1\n")),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application Lifecycle Management (ALM) APIs: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/apis/alm-api-for-spfx-add-ins"},"https://docs.microsoft.com/en-us/sharepoint/dev/apis/alm-api-for-spfx-add-ins"))))}d.isMDXComponent=!0}}]);