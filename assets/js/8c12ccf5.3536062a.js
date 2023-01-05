"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31679],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,s=function(e,t){if(null==e)return{};var a,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),f=s,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||n;return a?i.createElement(m,o(o({ref:t},p),{},{components:a})):i.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,o=new Array(n);o[0]=f;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:s,o[1]=r;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},69779:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var i=a(87462),s=(a(67294),a(3905));const n={},o="aad siteclassification set",r={unversionedId:"cmd/aad/siteclassification/siteclassification-set",id:"cmd/aad/siteclassification/siteclassification-set",title:"aad siteclassification set",description:"Updates site classification configuration",source:"@site/docs/cmd/aad/siteclassification/siteclassification-set.md",sourceDirName:"cmd/aad/siteclassification",slug:"/cmd/aad/siteclassification/siteclassification-set",permalink:"/cmd/aad/siteclassification/siteclassification-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/siteclassification/siteclassification-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad siteclassification get",permalink:"/cmd/aad/siteclassification/siteclassification-get"},next:{title:"aad sp add",permalink:"/cmd/aad/sp/sp-add"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"aad-siteclassification-set"},"aad siteclassification set"),(0,s.kt)("p",null,"Updates site classification configuration"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad siteclassification set [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-c, --classifications [classifications]"),"\n: Comma-separated list of classifications"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-d, --defaultClassification [defaultClassification]"),"\n: Classification to use by default"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-u, --usageGuidelinesUrl [usageGuidelinesUrl]"),"\n: URL with usage guidelines for members"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-g, --guestUsageGuidelinesUrl [guestUsageGuidelinesUrl]"),"\n: URL with usage guidelines for guests"),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Update Microsoft 365 Tenant site classification configuration"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad siteclassification set --classifications "High, Medium, Low" --defaultClassification "Medium"\n')),(0,s.kt)("p",null,"Update only the default classification"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad siteclassification set --defaultClassification "Low"\n')),(0,s.kt)("p",null,"Update site classification with a usage guidelines URL"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad siteclassification set --usageGuidelinesUrl "http://aka.ms/pnp"\n')),(0,s.kt)("p",null,"Update site classification with usage guidelines URLs for guests and members"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad siteclassification set --usageGuidelinesUrl "http://aka.ms/pnp" --guestUsageGuidelinesUrl "http://aka.ms/pnp"\n')),(0,s.kt)("h2",{id:"more-information"},"More information"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'SharePoint "modern" sites classification: ',(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-site-classification"},"https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-site-classification"))))}d.isMDXComponent=!0}}]);