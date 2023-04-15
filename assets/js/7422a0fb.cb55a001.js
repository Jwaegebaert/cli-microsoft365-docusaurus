"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[56690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,h=u["".concat(l,".").concat(p)]||u[p]||c[p]||s;return r?o.createElement(h,a(a({ref:t},m),{},{components:r})):o.createElement(h,a({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var d=2;d<s;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},99989:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const s={},a="spo hidedefaultthemes set",i={unversionedId:"cmd/spo/hidedefaultthemes/hidedefaultthemes-set",id:"cmd/spo/hidedefaultthemes/hidedefaultthemes-set",title:"spo hidedefaultthemes set",description:"Sets the value of the HideDefaultThemes setting",source:"@site/docs/cmd/spo/hidedefaultthemes/hidedefaultthemes-set.md",sourceDirName:"cmd/spo/hidedefaultthemes",slug:"/cmd/spo/hidedefaultthemes/hidedefaultthemes-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hidedefaultthemes/hidedefaultthemes-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/hidedefaultthemes/hidedefaultthemes-set.md",tags:[],version:"current",lastUpdatedAt:1678569617,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo hidedefaultthemes get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hidedefaultthemes/hidedefaultthemes-get"},next:{title:"spo homesite get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/homesite/homesite-get"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],m={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-hidedefaultthemes-set"},"spo hidedefaultthemes set"),(0,n.kt)("p",null,"Sets the value of the HideDefaultThemes setting"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hidedefaultthemes set [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--hideDefaultThemes <hideDefaultThemes>"),"\n: Set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," to hide default themes and to ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," to show them"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Hide default themes and allow users to use organization themes only"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hidedefaultthemes set --hideDefaultThemes true\n")),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SharePoint site theming: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview"},"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview"))))}c.isMDXComponent=!0}}]);