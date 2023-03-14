"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[74400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=i.createContext({}),c=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(r.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(r,".").concat(f)]||d[f]||p[f]||a;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>s});var i=n(87462),o=(n(67294),n(3905));const a={toc:[]},l="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,i.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},22138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var i=n(87462),o=(n(67294),n(3905)),a=n(37884);const l={},s="aad siteclassification get",r={unversionedId:"cmd/aad/siteclassification/siteclassification-get",id:"cmd/aad/siteclassification/siteclassification-get",title:"aad siteclassification get",description:"Gets site classification configuration",source:"@site/docs/cmd/aad/siteclassification/siteclassification-get.mdx",sourceDirName:"cmd/aad/siteclassification",slug:"/cmd/aad/siteclassification/siteclassification-get",permalink:"/cli-microsoft365-docusaurus/cmd/aad/siteclassification/siteclassification-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/siteclassification/siteclassification-get.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"aad siteclassification enable",permalink:"/cli-microsoft365-docusaurus/cmd/aad/siteclassification/siteclassification-enable"},next:{title:"aad siteclassification set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/siteclassification/siteclassification-set"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],d={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aad-siteclassification-get"},"aad siteclassification get"),(0,o.kt)("p",null,"Gets site classification configuration"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad siteclassification get [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)(a.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get information about the Microsoft 365 Tenant site classification"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad siteclassification get\n")),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'SharePoint "modern" sites classification: ',(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-site-classification"},"https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-site-classification"))))}f.isMDXComponent=!0}}]);