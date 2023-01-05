"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67224],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),r=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=r(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=r(i),f=n,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return i?a.createElement(m,l(l({ref:t},u),{},{components:i})):a.createElement(m,l({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,l=new Array(s);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var r=2;r<s;r++)l[r]=i[r];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},24905:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>r});var a=i(87462),n=(i(67294),i(3905));const s={},l="aad siteclassification enable",o={unversionedId:"cmd/aad/siteclassification/siteclassification-enable",id:"cmd/aad/siteclassification/siteclassification-enable",title:"aad siteclassification enable",description:"Enables site classification configuration",source:"@site/docs/cmd/aad/siteclassification/siteclassification-enable.md",sourceDirName:"cmd/aad/siteclassification",slug:"/cmd/aad/siteclassification/siteclassification-enable",permalink:"/cli-microsoft365-docusaurus/cmd/aad/siteclassification/siteclassification-enable",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/siteclassification/siteclassification-enable.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad siteclassification disable",permalink:"/cli-microsoft365-docusaurus/cmd/aad/siteclassification/siteclassification-disable"},next:{title:"aad siteclassification get",permalink:"/cli-microsoft365-docusaurus/cmd/aad/siteclassification/siteclassification-get"}},c={},r=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],u={toc:r};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-siteclassification-enable"},"aad siteclassification enable"),(0,n.kt)("p",null,"Enables site classification configuration"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad siteclassification enable [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-c, --classifications <classifications>"),"\n: Comma-separated list of classifications to enable in the tenant"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-d, --defaultClassification <defaultClassification>"),"\n: Classification to use by default"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --usageGuidelinesUrl [usageGuidelinesUrl]"),"\n: URL with usage guidelines for members"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-g, --guestUsageGuidelinesUrl [guestUsageGuidelinesUrl]"),"\n: URL with usage guidelines for guests"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Enable site classification"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad siteclassification enable --classifications "High, Medium, Low" --defaultClassification "Medium"\n')),(0,n.kt)("p",null,"Enable site classification with a usage guidelines URL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad siteclassification enable --classifications "High, Medium, Low" --defaultClassification "Medium" --usageGuidelinesUrl "http://aka.ms/pnp"\n')),(0,n.kt)("p",null,"Enable site classification with usage guidelines URLs for guests and members"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad siteclassification enable --classifications "High, Medium, Low" --defaultClassification "Medium" --usageGuidelinesUrl "http://aka.ms/pnp" --guestUsageGuidelinesUrl "http://aka.ms/pnp"\n')),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'SharePoint "modern" sites classification: ',(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-site-classification"},"https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-site-classification"))))}d.isMDXComponent=!0}}]);