"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={},l="spo cdn policy list",a={unversionedId:"cmd/spo/cdn/cdn-policy-list",id:"cmd/spo/cdn/cdn-policy-list",title:"spo cdn policy list",description:"Lists CDN policies settings for the current SharePoint Online tenant",source:"@site/docs/cmd/spo/cdn/cdn-policy-list.md",sourceDirName:"cmd/spo/cdn",slug:"/cmd/spo/cdn/cdn-policy-list",permalink:"/cmd/spo/cdn/cdn-policy-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/cdn/cdn-policy-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo cdn origin remove",permalink:"/cmd/spo/cdn/cdn-origin-remove"},next:{title:"spo cdn policy set",permalink:"/cmd/spo/cdn/cdn-policy-set"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-cdn-policy-list"},"spo cdn policy list"),(0,r.kt)("p",null,"Lists CDN policies settings for the current SharePoint Online tenant"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn policy list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-t, --cdnType [cdnType]"),"\n: Type of CDN to manage. ",(0,r.kt)("inlineCode",{parentName:"p"},"Public,Private"),". Default ",(0,r.kt)("inlineCode",{parentName:"p"},"Public")),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-t, --cdnType")," option you can choose whether you want to manage the settings of the Public (default) or Private CDN. If you don't use the option, the command will use the Public CDN."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Show the list of policies configured for the Public CDN"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn policy list\n")),(0,r.kt)("p",null,"Show the list of policies configured for the Private CDN"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn policy list --cdnType Private\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"General availability of Microsoft 365 CDN: ",(0,r.kt)("a",{parentName:"li",href:"https://dev.office.com/blogs/general-availability-of-office-365-cdn"},"https://dev.office.com/blogs/general-availability-of-office-365-cdn"))))}d.isMDXComponent=!0}}]);