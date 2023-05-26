"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[70019],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=a.createContext({}),c=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(r),s=o,f=u["".concat(m,".").concat(s)]||u[s]||i[s]||n;return r?a.createElement(f,p(p({ref:t},l),{},{components:r})):a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,p=new Array(n);p[0]=s;var d={};for(var m in t)hasOwnProperty.call(t,m)&&(d[m]=t[m]);d.originalType=e,d[u]="string"==typeof e?e:o,p[1]=d;for(var c=2;c<n;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},26054:(e,t,r)=>{r.d(t,{ZP:()=>d});var a=r(87462),o=(r(67294),r(3905));const n={toc:[]},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},n,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",{parentName:"p"},"options"),", ",(0,o.kt)("code",{parentName:"p"},"examples"),", ",(0,o.kt)("code",{parentName:"p"},"remarks"),", ",(0,o.kt)("code",{parentName:"p"},"response"),", ",(0,o.kt)("code",{parentName:"p"},"full"),". Default is ",(0,o.kt)("code",{parentName:"p"},"full"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--query [query]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,o.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output type. ",(0,o.kt)("code",{parentName:"p"},"json"),", ",(0,o.kt)("code",{parentName:"p"},"text"),", ",(0,o.kt)("code",{parentName:"p"},"csv"),", ",(0,o.kt)("code",{parentName:"p"},"md"),". Default ",(0,o.kt)("code",{parentName:"p"},"json"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--verbose"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--debug"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}d.isMDXComponent=!0},93839:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>s,frontMatter:()=>p,metadata:()=>m,toc:()=>l});var a=r(87462),o=(r(67294),r(3905)),n=r(26054);const p={},d="aad o365group renew",m={unversionedId:"cmd/aad/o365group/o365group-renew",id:"cmd/aad/o365group/o365group-renew",title:"aad o365group renew",description:"Renews Microsoft 365 group's expiration",source:"@site/docs/cmd/aad/o365group/o365group-renew.mdx",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-renew",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-renew",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-renew.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-remove"},next:{title:"aad o365group set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-set"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],u={toc:l},i="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(i,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aad-o365group-renew"},"aad o365group renew"),(0,o.kt)("p",null,"Renews Microsoft 365 group's expiration"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group renew [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The ID of the Microsoft 365 group to renew"))),(0,o.kt)(n.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If the specified ",(0,o.kt)("em",{parentName:"p"},"id")," doesn't refer to an existing group, you will get a ",(0,o.kt)("inlineCode",{parentName:"p"},"The remote server returned an error: (404) Not Found.")," error."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Renew the Microsoft 365 group with id ",(0,o.kt)("em",{parentName:"p"},"28beab62-7540-4db1-a23f-29a6018a3848")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group renew --id 28beab62-7540-4db1-a23f-29a6018a3848\n")))}s.isMDXComponent=!0}}]);