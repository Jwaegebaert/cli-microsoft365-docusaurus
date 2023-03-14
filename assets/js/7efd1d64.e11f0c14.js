"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[87129],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var o=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,p=function(e,t){if(null==e)return{};var a,o,p={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var s=o.createContext({}),i=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(a),u=p,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||n;return a?o.createElement(f,r(r({ref:t},c),{},{components:a})):o.createElement(f,r({ref:t},c))}));function f(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,r=new Array(n);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:p,r[1]=l;for(var i=2;i<n;i++)r[i]=a[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>l});var o=a(87462),p=(a(67294),a(3905));const n={toc:[]},r="wrapper";function l(e){let{components:t,...a}=e;return(0,p.kt)(r,(0,o.Z)({},n,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("dl",null,(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"-h, --help [help]"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,p.kt)("code",null,"options"),", ",(0,p.kt)("code",null,"examples"),", ",(0,p.kt)("code",null,"remarks"),", ",(0,p.kt)("code",null,"response"),", ",(0,p.kt)("code",null,"full"),". Default is ",(0,p.kt)("code",null,"full"),".")),(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"--query [query]"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"JMESPath query string. See ",(0,p.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"-o, --output [output]"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"Output type. ",(0,p.kt)("code",null,"json"),", ",(0,p.kt)("code",null,"text"),", ",(0,p.kt)("code",null,"csv"),", ",(0,p.kt)("code",null,"md"),". Default is ",(0,p.kt)("code",null,"json"),".")),(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"--verbose"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"Runs command with verbose logging.")),(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"--debug"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"Runs command with debug logging."))))}l.isMDXComponent=!0},29645:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(87462),p=(a(67294),a(3905)),n=a(37884);const r={},l="spo app remove",s={unversionedId:"cmd/spo/app/app-remove",id:"cmd/spo/app/app-remove",title:"spo app remove",description:"Removes the specified app from the specified app catalog",source:"@site/docs/cmd/spo/app/app-remove.mdx",sourceDirName:"cmd/spo/app",slug:"/cmd/spo/app/app-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/app/app-remove.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo app list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-list"},next:{title:"spo app retract",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-retract"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],m={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,p.kt)(d,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"spo-app-remove"},"spo app remove"),(0,p.kt)("p",null,"Removes the specified app from the specified app catalog"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app remove [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("dl",null,(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"ID of the app to remove. Needs to be available in the app catalog")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-u, --appCatalogUrl [appCatalogUrl]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"URL of the tenant or site collection app catalog. It must be specified when the scope is ",(0,p.kt)("code",{parentName:"p"},"sitecollection"))),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-s, --appCatalogScope [appCatalogScope]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Scope of the app catalog: ",(0,p.kt)("code",{parentName:"p"},"tenant,sitecollection"),". Default ",(0,p.kt)("code",{parentName:"p"},"tenant"))),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--confirm"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Don't prompt for confirming removing the app"))),(0,p.kt)(n.ZP,{mdxType:"Global"}),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"When removing an app from the tenant app catalog, it's not necessary to specify the tenant app catalog URL. When the URL is not specified, the CLI will try to resolve the URL itself. Specifying the app catalog URL is required when you want to remove the app from a site collection app catalog."),(0,p.kt)("p",null,"When specifying site collection app catalog, you can specify the URL either with our without the ",(0,p.kt)("em",{parentName:"p"},"AppCatalog")," part, for example ",(0,p.kt)("inlineCode",{parentName:"p"},"https://contoso.sharepoint.com/sites/team-a/AppCatalog")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"https://contoso.sharepoint.com/sites/team-a"),". CLI will accept both formats."),(0,p.kt)("p",null,"If the app with the specified ID doesn't exist in the app catalog, the command will fail with an error."),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Remove the specified app from the tenant app catalog. Try to resolve the URL of the tenant app catalog automatically. Additionally, will prompt for confirmation before actually retracting the app."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app remove --id 058140e3-0e37-44fc-a1d3-79c487d371a3\n")),(0,p.kt)("p",null,"Remove the specified app from the tenant app catalog located at ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/apps"},"https://contoso.sharepoint.com/sites/apps")),". Additionally, will prompt for confirmation before actually retracting the app."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app remove --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --appCatalogUrl https://contoso.sharepoint.com/sites/apps\n")),(0,p.kt)("p",null,"Remove the specified app from the tenant app catalog located at ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/apps"},"https://contoso.sharepoint.com/sites/apps")),". Don't prompt for confirmation."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app remove --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --appCatalogUrl https://contoso.sharepoint.com/sites/apps --confirm\n")),(0,p.kt)("p",null,"Remove the specified app from a site collection app catalog of site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/site1"},"https://contoso.sharepoint.com/sites/site1")),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app remove --id d95f8c94-67a1-4615-9af8-361ad33be93c --appCatalogScope sitecollection --appCatalogUrl https://contoso.sharepoint.com/sites/site1/AppCatalog\n")),(0,p.kt)("h2",{id:"more-information"},"More information"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Application Lifecycle Management (ALM) APIs: ",(0,p.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/apis/alm-api-for-spfx-add-ins"},"https://docs.microsoft.com/en-us/sharepoint/dev/apis/alm-api-for-spfx-add-ins"))))}u.isMDXComponent=!0}}]);