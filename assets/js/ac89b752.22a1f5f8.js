"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[3194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||i[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37884:(e,t,r)=>{r.d(t,{ZP:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={toc:[]},l="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-h, --help [help]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",null,"options"),", ",(0,a.kt)("code",null,"examples"),", ",(0,a.kt)("code",null,"remarks"),", ",(0,a.kt)("code",null,"response"),", ",(0,a.kt)("code",null,"full"),". Default is ",(0,a.kt)("code",null,"full"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--query [query]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"JMESPath query string. See ",(0,a.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-o, --output [output]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output type. ",(0,a.kt)("code",null,"json"),", ",(0,a.kt)("code",null,"text"),", ",(0,a.kt)("code",null,"csv"),", ",(0,a.kt)("code",null,"md"),". Default is ",(0,a.kt)("code",null,"json"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--verbose"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with verbose logging.")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--debug"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},59279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(37884);const l={},s="aad user license remove",u={unversionedId:"cmd/aad/user/user-license-remove",id:"cmd/aad/user/user-license-remove",title:"aad user license remove",description:"Removes a license from a user",source:"@site/docs/cmd/aad/user/user-license-remove.mdx",sourceDirName:"cmd/aad/user",slug:"/cmd/aad/user/user-license-remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-license-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/user/user-license-remove.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"aad user license list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-license-list"},next:{title:"aad user list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-list"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:p},i="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(i,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aad-user-license-remove"},"aad user license remove"),(0,a.kt)("p",null,"Removes a license from a user"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user license remove [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--userId [userId]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The ID of the user. Specify either ",(0,a.kt)("code",{parentName:"p"},"userId")," or ",(0,a.kt)("code",{parentName:"p"},"userName")," but not both.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--userName [userName]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("pre",{parentName:"dd"},(0,a.kt)("code",{parentName:"pre"},"User principal name of the user. Specify either `userId` or `userName` but not both.\n"))),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--ids <ids>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"A comma separated list of IDs that specify the licenses to remove.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--confirm"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Don't prompt for confirmation."))),(0,a.kt)(o.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Remove specific licenses from a specific user by UPN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 user license remove --userName "john.doe@contoso.com" --ids "45715bb8-13f9-4bf6-927f-ef96c102d394,bea13e0c-3828-4daa-a392-28af7ff61a0f"\n')),(0,a.kt)("p",null,"Remove specific licenses from a specific user by ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 user license remove --userId 5c241023-2ba5-4ea8-a516-a2481a3e6c51 --ids "45715bb8-13f9-4bf6-927f-ef96c102d394,bea13e0c-3828-4daa-a392-28af7ff61a0f"\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."))}m.isMDXComponent=!0}}]);