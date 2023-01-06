"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={},l="spo cdn set",i={unversionedId:"cmd/spo/cdn/cdn-set",id:"cmd/spo/cdn/cdn-set",title:"spo cdn set",description:"Enable or disable the specified Microsoft 365 CDN",source:"@site/docs/cmd/spo/cdn/cdn-set.md",sourceDirName:"cmd/spo/cdn",slug:"/cmd/spo/cdn/cdn-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/cdn/cdn-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/cdn/cdn-set.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo cdn policy set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/cdn/cdn-policy-set"},next:{title:"spo contenttype add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/contenttype/contenttype-add"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-cdn-set"},"spo cdn set"),(0,a.kt)("p",null,"Enable or disable the specified Microsoft 365 CDN"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn set [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e, --enabled <enabled>"),"\n: Set to true to enable CDN or to false to disable it. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-t, --type [type]"),"\n: Type of CDN to manage. ",(0,a.kt)("inlineCode",{parentName:"p"},"Public,Private,Both"),". Default ",(0,a.kt)("inlineCode",{parentName:"p"},"Public")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--noDefaultOrigins"),"\n: pass to not create the default Origins"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-t, --type")," option you can choose whether you want to manage the settings of the Public (default), Private CDN or both. If you don't use the option, the command will use the Public CDN."),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-e, --enabled")," option you can specify whether the given CDN type should be enabled or disabled. Use true to enable the specified CDN and false to disable it."),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--noDefaultOrigins")," option you can specify to skip the creation of the default origins."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Enable the Microsoft 365 Public CDN on the current tenant"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn set --type Public --enabled true\n")),(0,a.kt)("p",null,"Disable the Microsoft 365 Public CDN on the current tenant"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn set --type Public --enabled false\n")),(0,a.kt)("p",null,"Enable the Microsoft 365 Private CDN on the current tenant"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn set --type Private --enabled true\n")),(0,a.kt)("p",null,"Enable the Microsoft 365 Private and Public CDN on the current tenant with default origins"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn set --type Both --enabled true\n")),(0,a.kt)("p",null,"Enable the Microsoft 365 Private and Public CDN on the current tenant without default origins"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn set --type Both --enabled true --noDefaultOrigins\n")),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"General availability of Microsoft 365 CDN: ",(0,a.kt)("a",{parentName:"li",href:"https://dev.office.com/blogs/general-availability-of-office-365-cdn"},"https://dev.office.com/blogs/general-availability-of-office-365-cdn"))))}d.isMDXComponent=!0}}]);