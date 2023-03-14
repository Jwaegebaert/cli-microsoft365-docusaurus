"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[93905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=o.createContext({}),d=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=s,g=u["".concat(a,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:s,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>l});var o=n(87462),s=(n(67294),n(3905));const r={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,s.kt)(i,(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("dl",null,(0,s.kt)("dt",null,(0,s.kt)("p",null,(0,s.kt)("code",null,"-h, --help [help]"))),(0,s.kt)("dd",null,(0,s.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,s.kt)("code",null,"options"),", ",(0,s.kt)("code",null,"examples"),", ",(0,s.kt)("code",null,"remarks"),", ",(0,s.kt)("code",null,"response"),", ",(0,s.kt)("code",null,"full"),". Default is ",(0,s.kt)("code",null,"full"),".")),(0,s.kt)("dt",null,(0,s.kt)("p",null,(0,s.kt)("code",null,"--query [query]"))),(0,s.kt)("dd",null,(0,s.kt)("p",null,"JMESPath query string. See ",(0,s.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,s.kt)("dt",null,(0,s.kt)("p",null,(0,s.kt)("code",null,"-o, --output [output]"))),(0,s.kt)("dd",null,(0,s.kt)("p",null,"Output type. ",(0,s.kt)("code",null,"json"),", ",(0,s.kt)("code",null,"text"),", ",(0,s.kt)("code",null,"csv"),", ",(0,s.kt)("code",null,"md"),". Default is ",(0,s.kt)("code",null,"json"),".")),(0,s.kt)("dt",null,(0,s.kt)("p",null,(0,s.kt)("code",null,"--verbose"))),(0,s.kt)("dd",null,(0,s.kt)("p",null,"Runs command with verbose logging.")),(0,s.kt)("dt",null,(0,s.kt)("p",null,(0,s.kt)("code",null,"--debug"))),(0,s.kt)("dd",null,(0,s.kt)("p",null,"Runs command with debug logging."))))}l.isMDXComponent=!0},98927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(87462),s=(n(67294),n(3905)),r=n(37884);const i={},l="spo sitedesign task get",a={unversionedId:"cmd/spo/sitedesign/sitedesign-task-get",id:"cmd/spo/sitedesign/sitedesign-task-get",title:"spo sitedesign task get",description:"Gets information about the specified site design scheduled for execution",source:"@site/docs/cmd/spo/sitedesign/sitedesign-task-get.mdx",sourceDirName:"cmd/spo/sitedesign",slug:"/cmd/spo/sitedesign/sitedesign-task-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-task-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/sitedesign/sitedesign-task-get.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo sitedesign set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-set"},next:{title:"spo sitedesign task list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-task-list"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"spo-sitedesign-task-get"},"spo sitedesign task get"),(0,s.kt)("p",null,"Gets information about the specified site design scheduled for execution"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitedesign task get [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("dl",null,(0,s.kt)("dt",{parentName:"dl"},(0,s.kt)("p",{parentName:"dt"},(0,s.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,s.kt)("dd",{parentName:"dl"},(0,s.kt)("p",{parentName:"dd"},"The ID of the site design task to get information for"))),(0,s.kt)(r.ZP,{mdxType:"Global"}),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Get information about the specified site design scheduled for execution"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitedesign task get --id 6ec3ca5b-d04b-4381-b169-61378556d76e\n")),(0,s.kt)("h2",{id:"more-information"},"More information"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"SharePoint site design and site script overview: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"},"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"))))}m.isMDXComponent=!0}}]);