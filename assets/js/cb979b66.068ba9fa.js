"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22101],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,m=c["".concat(s,".").concat(d)]||c[d]||f[d]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},l="spo feature enable",i={unversionedId:"cmd/spo/feature/feature-enable",id:"cmd/spo/feature/feature-enable",title:"spo feature enable",description:"Enables feature for the specified site or web",source:"@site/docs/cmd/spo/feature/feature-enable.md",sourceDirName:"cmd/spo/feature",slug:"/cmd/spo/feature/feature-enable",permalink:"/cmd/spo/feature/feature-enable",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/feature/feature-enable.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo feature disable",permalink:"/cmd/spo/feature/feature-disable"},next:{title:"spo feature list",permalink:"/cmd/spo/feature/feature-list"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-feature-enable"},"spo feature enable"),(0,a.kt)("p",null,"Enables feature for the specified site or web"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo feature enable [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: The URL of the site or web for which to enable the feature"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: The ID of the feature to enable"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-s, --scope [scope]"),"\n: Scope of the Feature to enable. Allowed values ",(0,a.kt)("inlineCode",{parentName:"p"},"Site,Web"),". Default ",(0,a.kt)("inlineCode",{parentName:"p"},"Web")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--force"),"\n: Specifies whether to overwrite an existing feature with the same feature identifier. This parameter is ignored if there are no errors."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If the specified url doesn't refer to an existing site collection, you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},'"404 FILE NOT FOUND"')," error."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Enable site feature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo feature enable --url https://contoso.sharepoint.com/sites/sales --featureId 915c240e-a6cc-49b8-8b2c-0bff8b553ed3 --scope Site\n")),(0,a.kt)("p",null,"Enable web feature (with force to overwrite feature with same id)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo feature enable --url https://contoso.sharepoint.com/sites/sales --featureId 00bfea71-5932-4f9c-ad71-1557e5751100 --scope Web --force\n")))}c.isMDXComponent=!0}}]);