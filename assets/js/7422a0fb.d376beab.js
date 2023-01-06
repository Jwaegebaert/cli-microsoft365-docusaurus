"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,h=u["".concat(l,".").concat(c)]||u[c]||p[c]||s;return n?o.createElement(h,a(a({ref:t},m),{},{components:n})):o.createElement(h,a({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var d=2;d<s;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const s={},a="spo hidedefaultthemes set",i={unversionedId:"cmd/spo/hidedefaultthemes/hidedefaultthemes-set",id:"cmd/spo/hidedefaultthemes/hidedefaultthemes-set",title:"spo hidedefaultthemes set",description:"Sets the value of the HideDefaultThemes setting",source:"@site/docs/cmd/spo/hidedefaultthemes/hidedefaultthemes-set.md",sourceDirName:"cmd/spo/hidedefaultthemes",slug:"/cmd/spo/hidedefaultthemes/hidedefaultthemes-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hidedefaultthemes/hidedefaultthemes-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/hidedefaultthemes/hidedefaultthemes-set.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo hidedefaultthemes get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hidedefaultthemes/hidedefaultthemes-get"},next:{title:"spo homesite get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/homesite/homesite-get"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-hidedefaultthemes-set"},"spo hidedefaultthemes set"),(0,r.kt)("p",null,"Sets the value of the HideDefaultThemes setting"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hidedefaultthemes set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--hideDefaultThemes <hideDefaultThemes>"),"\n: Set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to hide default themes and to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," to show them"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Hide default themes and allow users to use organization themes only"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hidedefaultthemes set --hideDefaultThemes true\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SharePoint site theming: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview"},"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview"))))}u.isMDXComponent=!0}}]);