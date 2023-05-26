"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[65726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=i,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={toc:[]},o="wrapper";function s(e){let{components:t,...a}=e;return(0,i.kt)(o,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("dl",null,(0,i.kt)("dt",{parentName:"dl"},(0,i.kt)("p",{parentName:"dt"},(0,i.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,i.kt)("code",{parentName:"p"},"options"),", ",(0,i.kt)("code",{parentName:"p"},"examples"),", ",(0,i.kt)("code",{parentName:"p"},"remarks"),", ",(0,i.kt)("code",{parentName:"p"},"response"),", ",(0,i.kt)("code",{parentName:"p"},"full"),". Default is ",(0,i.kt)("code",{parentName:"p"},"full"),".")),(0,i.kt)("dt",{parentName:"dl"},(0,i.kt)("p",{parentName:"dt"},(0,i.kt)("code",{parentName:"p"},"--query [query]"))),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,i.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,i.kt)("dt",{parentName:"dl"},(0,i.kt)("p",{parentName:"dt"},(0,i.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("p",{parentName:"dd"},"Output type. ",(0,i.kt)("code",{parentName:"p"},"json"),", ",(0,i.kt)("code",{parentName:"p"},"text"),", ",(0,i.kt)("code",{parentName:"p"},"csv"),", ",(0,i.kt)("code",{parentName:"p"},"md"),". Default ",(0,i.kt)("code",{parentName:"p"},"json"),".")),(0,i.kt)("dt",{parentName:"dl"},(0,i.kt)("p",{parentName:"dt"},(0,i.kt)("code",{parentName:"p"},"--verbose"))),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,i.kt)("dt",{parentName:"dl"},(0,i.kt)("p",{parentName:"dt"},(0,i.kt)("code",{parentName:"p"},"--debug"))),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}s.isMDXComponent=!0},32318:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(87462),i=(a(67294),a(3905)),r=a(26054);const o={},s="aad siteclassification disable",c={unversionedId:"cmd/aad/siteclassification/siteclassification-disable",id:"cmd/aad/siteclassification/siteclassification-disable",title:"aad siteclassification disable",description:"Disables site classification",source:"@site/docs/cmd/aad/siteclassification/siteclassification-disable.mdx",sourceDirName:"cmd/aad/siteclassification",slug:"/cmd/aad/siteclassification/siteclassification-disable",permalink:"/cli-microsoft365-docusaurus/cmd/aad/siteclassification/siteclassification-disable",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/siteclassification/siteclassification-disable.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad policy list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/policy/policy-list"},next:{title:"aad siteclassification enable",permalink:"/cli-microsoft365-docusaurus/cmd/aad/siteclassification/siteclassification-enable"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aad-siteclassification-disable"},"aad siteclassification disable"),(0,i.kt)("p",null,"Disables site classification"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad siteclassification disable [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("dl",null,(0,i.kt)("dt",{parentName:"dl"},(0,i.kt)("p",{parentName:"dt"},(0,i.kt)("code",{parentName:"p"},"--confirm"))),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("p",{parentName:"dd"},"Don't prompt for confirming disabling site classification"))),(0,i.kt)(r.ZP,{mdxType:"Global"}),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Disable site classification"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad siteclassification disable\n")),(0,i.kt)("p",null,"Disable site classification without confirmation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad siteclassification disable --confirm\n")),(0,i.kt)("h2",{id:"more-information"},"More information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'SharePoint "modern" sites classification: ',(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-site-classification"},"https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-site-classification"))))}u.isMDXComponent=!0}}]);