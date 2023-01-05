"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={},a="spo cdn policy set",c={unversionedId:"cmd/spo/cdn/cdn-policy-set",id:"cmd/spo/cdn/cdn-policy-set",title:"spo cdn policy set",description:"Sets CDN policy value for the current SharePoint Online tenant",source:"@site/docs/cmd/spo/cdn/cdn-policy-set.md",sourceDirName:"cmd/spo/cdn",slug:"/cmd/spo/cdn/cdn-policy-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/cdn/cdn-policy-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/cdn/cdn-policy-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo cdn policy list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/cdn/cdn-policy-list"},next:{title:"spo cdn set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/cdn/cdn-set"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-cdn-policy-set"},"spo cdn policy set"),(0,r.kt)("p",null,"Sets CDN policy value for the current SharePoint Online tenant"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn policy set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-t, --cdnType [cdnType]"),"\n: Type of CDN to manage. ",(0,r.kt)("inlineCode",{parentName:"p"},"Public,Private"),". Default ",(0,r.kt)("inlineCode",{parentName:"p"},"Public")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-p, --policy <policy>"),"\n: CDN policy to configure. ",(0,r.kt)("inlineCode",{parentName:"p"},"IncludeFileExtensions|ExcludeRestrictedSiteClassifications")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-v, --value <value>"),"\n: Value for the policy to configure"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-t, --cdnType")," option you can choose whether you want to manage the settings of the Public (default) or Private CDN. If you don't use the option, the command will use the Public CDN."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Set the list of extensions supported by the Public CDN"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn policy set --cdnType Public --policy IncludeFileExtensions --value CSS,EOT,GIF,ICO,JPEG,JPG,JS,MAP,PNG,SVG,TTF,WOFF,JSON\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"General availability of Microsoft 365 CDN: ",(0,r.kt)("a",{parentName:"li",href:"https://dev.office.com/blogs/general-availability-of-office-365-cdn"},"https://dev.office.com/blogs/general-availability-of-office-365-cdn"))))}d.isMDXComponent=!0}}]);