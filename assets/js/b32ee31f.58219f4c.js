"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[26802],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=d(r),m=l,g=c["".concat(p,".").concat(m)]||c[m]||i[m]||o;return r?n.createElement(g,a(a({ref:t},s),{},{components:r})):n.createElement(g,a({ref:t},s))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[c]="string"==typeof e?e:l,a[1]=u;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37884:(e,t,r)=>{r.d(t,{ZP:()=>u});var n=r(87462),l=(r(67294),r(3905));const o={toc:[]},a="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(a,(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-h, --help [help]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,l.kt)("code",null,"options"),", ",(0,l.kt)("code",null,"examples"),", ",(0,l.kt)("code",null,"remarks"),", ",(0,l.kt)("code",null,"response"),", ",(0,l.kt)("code",null,"full"),". Default is ",(0,l.kt)("code",null,"full"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--query [query]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"JMESPath query string. See ",(0,l.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-o, --output [output]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output type. ",(0,l.kt)("code",null,"json"),", ",(0,l.kt)("code",null,"text"),", ",(0,l.kt)("code",null,"csv"),", ",(0,l.kt)("code",null,"md"),". Default is ",(0,l.kt)("code",null,"json"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--verbose"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with verbose logging.")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--debug"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with debug logging."))))}u.isMDXComponent=!0},28350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(87462),l=(r(67294),r(3905)),o=r(37884);const a={},u="aad group list",p={unversionedId:"cmd/aad/group/group-list",id:"cmd/aad/group/group-list",title:"aad group list",description:"Lists Azure AD groups",source:"@site/docs/cmd/aad/group/group-list.mdx",sourceDirName:"cmd/aad/group",slug:"/cmd/aad/group/group-list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/group/group-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/group/group-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"aad group get",permalink:"/cli-microsoft365-docusaurus/cmd/aad/group/group-get"},next:{title:"aad groupsetting add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/groupsetting/groupsetting-add"}},d={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},i="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(i,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"aad-group-list"},"aad group list"),(0,l.kt)("p",null,"Lists Azure AD groups"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad group list [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("dl",null,(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-d, --deleted"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Use to retrieve deleted groups"))),(0,l.kt)(o.ZP,{mdxType:"Global"}),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Lists all groups defined in Azure Active Directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad group list\n")),(0,l.kt)("p",null,"List all recently deleted groups in the tenant"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad group list --deleted\n")))}m.isMDXComponent=!0}}]);