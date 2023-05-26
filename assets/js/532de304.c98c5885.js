"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[57069],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var p=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,p,o=function(e,t){if(null==e)return{};var a,p,o={},r=Object.keys(e);for(p=0;p<r.length;p++)a=r[p],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(p=0;p<r.length;p++)a=r[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=p.createContext({}),i=function(e){var t=p.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=i(e.components);return p.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},u=p.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(a),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return a?p.createElement(f,n(n({ref:t},s),{},{components:a})):p.createElement(f,n({ref:t},s))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,n[1]=c;for(var i=2;i<r;i++)n[i]=a[i];return p.createElement.apply(null,n)}return p.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>c});var p=a(87462),o=(a(67294),a(3905));const r={toc:[]},n="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(n,(0,p.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",{parentName:"p"},"options"),", ",(0,o.kt)("code",{parentName:"p"},"examples"),", ",(0,o.kt)("code",{parentName:"p"},"remarks"),", ",(0,o.kt)("code",{parentName:"p"},"response"),", ",(0,o.kt)("code",{parentName:"p"},"full"),". Default is ",(0,o.kt)("code",{parentName:"p"},"full"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--query [query]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,o.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output type. ",(0,o.kt)("code",{parentName:"p"},"json"),", ",(0,o.kt)("code",{parentName:"p"},"text"),", ",(0,o.kt)("code",{parentName:"p"},"csv"),", ",(0,o.kt)("code",{parentName:"p"},"md"),". Default ",(0,o.kt)("code",{parentName:"p"},"json"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--verbose"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--debug"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}c.isMDXComponent=!0},77740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var p=a(87462),o=(a(67294),a(3905)),r=a(26054);const n={},c="spo app retract",l={unversionedId:"cmd/spo/app/app-retract",id:"cmd/spo/app/app-retract",title:"spo app retract",description:"Retracts the specified app from the specified app catalog",source:"@site/docs/cmd/spo/app/app-retract.mdx",sourceDirName:"cmd/spo/app",slug:"/cmd/spo/app/app-retract",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-retract",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/app/app-retract.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo app remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-remove"},next:{title:"spo app uninstall",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-uninstall"}},i={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],m={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,p.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-app-retract"},"spo app retract"),(0,o.kt)("p",null,"Retracts the specified app from the specified app catalog"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app retract [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"ID of the app to retract. Needs to be available in the app catalog.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --appCatalogUrl [appCatalogUrl]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"URL of the tenant or site collection app catalog. It must be specified when the scope is ",(0,o.kt)("code",{parentName:"p"},"sitecollection"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-s, --appCatalogScope [appCatalogScope]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Scope of the app catalog: ",(0,o.kt)("code",{parentName:"p"},"tenant,sitecollection"),". Default ",(0,o.kt)("code",{parentName:"p"},"tenant"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--confirm"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Don't prompt for confirming retracting the app"))),(0,o.kt)(r.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"When getting information about an app from the tenant app catalog, it's not necessary to specify the tenant app catalog URL. When the URL is not specified, the CLI will try to resolve the URL itself. Specifying the app catalog URL is required when you want to get information about an app from a site collection app catalog."),(0,o.kt)("p",null,"When specifying site collection app catalog, you can specify the URL either with our without the ",(0,o.kt)("em",{parentName:"p"},"AppCatalog")," part, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"https://contoso.sharepoint.com/sites/team-a/AppCatalog")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"https://contoso.sharepoint.com/sites/team-a"),". CLI will accept both formats."),(0,o.kt)("p",null,"If the app with the specified ID doesn't exist in the app catalog, the command will fail with an error."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Retract the specified app from the tenant app catalog. Try to resolve the URL of the tenant app catalog automatically. Additionally, will prompt for confirmation before actually retracting the app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app retract --id 058140e3-0e37-44fc-a1d3-79c487d371a3\n")),(0,o.kt)("p",null,"Retract the specified app from the tenant app catalog located at ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/apps"},"https://contoso.sharepoint.com/sites/apps")),". Additionally, will prompt for confirmation before actually retracting the app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app retract --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --appCatalogUrl https://contoso.sharepoint.com/sites/apps\n")),(0,o.kt)("p",null,"Retract the specified app from the tenant app catalog. Try to resolve the URL of the tenant app catalog automatically. Will not prompt for confirmation before retracting the app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app retract --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --confirm\n")),(0,o.kt)("p",null,"Retract the specified app from a site collection app catalog of site ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/site1"},"https://contoso.sharepoint.com/sites/site1")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app retract --id d95f8c94-67a1-4615-9af8-361ad33be93c --appCatalogScope sitecollection --appCatalogUrl https://contoso.sharepoint.com/sites/site1\n")),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application Lifecycle Management (ALM) APIs: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/apis/alm-api-for-spfx-add-ins"},"https://docs.microsoft.com/en-us/sharepoint/dev/apis/alm-api-for-spfx-add-ins"))))}u.isMDXComponent=!0}}]);