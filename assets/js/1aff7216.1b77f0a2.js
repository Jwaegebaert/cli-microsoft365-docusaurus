"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[32480],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var o=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,p=function(e,t){if(null==e)return{};var r,o,p={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=o.createContext({}),i=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,p=e.mdxType,n=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=i(r),m=p,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return r?o.createElement(y,s(s({ref:t},c),{},{components:r})):o.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=r.length,s=new Array(n);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:p,s[1]=a;for(var i=2;i<n;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>i});var o=r(87462),p=(r(67294),r(3905));const n={},s="spo propertybag set",a={unversionedId:"cmd/spo/propertybag/propertybag-set",id:"cmd/spo/propertybag/propertybag-set",title:"spo propertybag set",description:"Sets the value of the specified property in the property bag. Adds the property if it does not exist",source:"@site/docs/cmd/spo/propertybag/propertybag-set.md",sourceDirName:"cmd/spo/propertybag",slug:"/cmd/spo/propertybag/propertybag-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/propertybag/propertybag-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/propertybag/propertybag-set.md",tags:[],version:"current",lastUpdatedAt:1671253082,formattedLastUpdatedAt:"Dec 17, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo propertybag remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/propertybag/propertybag-remove"},next:{title:"spo report activityfilecounts",permalink:"/cli-microsoft365-docusaurus/cmd/spo/report/report-activityfilecounts"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,p.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"spo-propertybag-set"},"spo propertybag set"),(0,p.kt)("p",null,"Sets the value of the specified property in the property bag. Adds the property if it does not exist"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag set [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: The URL of the site in which the property should be set"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-k, --key <key>"),"\n: Key of the property to be set. Case-sensitive"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-v, --value <value>"),"\n: Value of the property to be set"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-f, --folder [folder]"),"\n: Site-relative URL of the folder on which the property should be set"),(0,p.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"SharePoint Online supports setting property bag values only in classic sites. On modern sites you will get a ",(0,p.kt)("em",{parentName:"p"},"Site has NoScript enabled, and setting property bag values is not supported")," error."),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Sets the value of the property in the property bag of the given site"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag set --webUrl https://contoso.sharepoint.com/sites/test --key key1 --value value1\n")),(0,p.kt)("p",null,"Sets the value of the property in the property bag of the root folder of the given site"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag set --webUrl https://contoso.sharepoint.com/sites/test --key key1 --value value1 --folder /\n")),(0,p.kt)("p",null,"Sets the value of the property in the property bag of a document library located in the given site"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag set --webUrl https://contoso.sharepoint.com/sites/test --key key1 --value value1 --folder '/Shared Documents'\n")),(0,p.kt)("p",null,"Sets the value of the property in the property bag of a folder in a document library located in the given site"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag set --webUrl https://contoso.sharepoint.com/sites/test --key key1 --value value1 --folder '/Shared Documents/MyFolder'\n")),(0,p.kt)("p",null,"Sets the value of the property in the property bag of a list in the given site"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo propertybag set --webUrl https://contoso.sharepoint.com/sites/test --key key1 --value value1 --folder /Lists/MyList\n")),(0,p.kt)("h2",{id:"response"},"Response"),(0,p.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);