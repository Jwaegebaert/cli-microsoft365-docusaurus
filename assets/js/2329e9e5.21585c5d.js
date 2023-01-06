"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1303],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var p=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,p,n=function(e,t){if(null==e)return{};var a,p,n={},o=Object.keys(e);for(p=0;p<o.length;p++)a=o[p],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(p=0;p<o.length;p++)a=o[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=p.createContext({}),s=function(e){var t=p.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return p.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},u=p.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?p.createElement(h,r(r({ref:t},c),{},{components:a})):p.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,r[1]=i;for(var s=2;s<o;s++)r[s]=a[s];return p.createElement.apply(null,r)}return p.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var p=a(87462),n=(a(67294),a(3905));const o={},r="spo app add",i={unversionedId:"cmd/spo/app/app-add",id:"cmd/spo/app/app-add",title:"spo app add",description:"Adds an app to the specified SharePoint Online app catalog",source:"@site/docs/cmd/spo/app/app-add.md",sourceDirName:"cmd/spo/app",slug:"/cmd/spo/app/app-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/app/app-add.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"SharePoint Online (spo)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/spo"},next:{title:"spo app deploy",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-deploy"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,p.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-app-add"},"spo app add"),(0,n.kt)("p",null,"Adds an app to the specified SharePoint Online app catalog"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app add [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-p, --filePath <filePath>"),"\n: Absolute or relative path to the solution package file to add to the app catalog"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--overwrite"),"\n: Set to overwrite the existing package file"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-s, --appCatalogScope [appCatalogScope]"),"\n: Scope of the app catalog: ",(0,n.kt)("inlineCode",{parentName:"p"},"tenant,sitecollection"),". Default ",(0,n.kt)("inlineCode",{parentName:"p"},"tenant")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --appCatalogUrl [appCatalogUrl]"),"\n: The URL of the app catalog where the solution package will be added. It must be specified when the scope is ",(0,n.kt)("inlineCode",{parentName:"p"},"sitecollection")),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"When specifying the path to the app package file you can use both relative and absolute paths. Note, that ",(0,n.kt)("inlineCode",{parentName:"p"},"~")," in the path, will not be resolved and will most likely result in an error."),(0,n.kt)("p",null,"When adding an app to the tenant app catalog, it's not necessary to specify the tenant app catalog URL. When the URL is not specified, the CLI will try to resolve the URL itself. Specifying the app catalog URL is required when you want to add the app to a site collection app catalog."),(0,n.kt)("p",null,"When specifying site collection app catalog, you can specify the URL either with our without the ",(0,n.kt)("em",{parentName:"p"},"AppCatalog")," part, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"https://contoso.sharepoint.com/sites/team-a/AppCatalog")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"https://contoso.sharepoint.com/sites/team-a"),". CLI will accept both formats."),(0,n.kt)("p",null,"If you try to upload a package that already exists in the app catalog without specifying the ",(0,n.kt)("inlineCode",{parentName:"p"},"--overwrite")," option, the command will fail with an error stating that the specified package already exists."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Add the ",(0,n.kt)("em",{parentName:"p"},"spfx.sppkg")," package to the tenant app catalog"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app add --filePath /Users/pnp/spfx/sharepoint/solution/spfx.sppkg\n")),(0,n.kt)("p",null,"Overwrite the ",(0,n.kt)("em",{parentName:"p"},"spfx.sppkg")," package in the tenant app catalog with the newer version"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app add --filePath sharepoint/solution/spfx.sppkg --overwrite\n")),(0,n.kt)("p",null,"Add the ",(0,n.kt)("em",{parentName:"p"},"spfx.sppkg")," package to the site collection app catalog of site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/site1"},"https://contoso.sharepoint.com/sites/site1"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app add --filePath c:\\spfx.sppkg --appCatalogScope sitecollection --appCatalogUrl https://contoso.sharepoint.com/sites/site1\n")),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Application Lifecycle Management (ALM) APIs: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/apis/alm-api-for-spfx-add-ins"},"https://docs.microsoft.com/en-us/sharepoint/dev/apis/alm-api-for-spfx-add-ins"))))}d.isMDXComponent=!0}}]);