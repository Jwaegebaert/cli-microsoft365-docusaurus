"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[59100],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),i=l(r),d=o,f=i["".concat(s,".").concat(d)]||i[d]||u[d]||a;return r?n.createElement(f,p(p({ref:t},m),{},{components:r})):n.createElement(f,p({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[i]="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},p="spfx project rename",c={unversionedId:"cmd/spfx/project/project-rename",id:"cmd/spfx/project/project-rename",title:"spfx project rename",description:"Renames SharePoint Framework project",source:"@site/docs/cmd/spfx/project/project-rename.md",sourceDirName:"cmd/spfx/project",slug:"/cmd/spfx/project/project-rename",permalink:"/cli-microsoft365-docusaurus/cmd/spfx/project/project-rename",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spfx/project/project-rename.md",tags:[],version:"current",lastUpdatedAt:1668980733,formattedLastUpdatedAt:"Nov 20, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spfx project permissions grant",permalink:"/cli-microsoft365-docusaurus/cmd/spfx/project/project-permissions-grant"},next:{title:"spfx project upgrade",permalink:"/cli-microsoft365-docusaurus/cmd/spfx/project/project-upgrade"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:l},i="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(i,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spfx-project-rename"},"spfx project rename"),(0,o.kt)("p",null,"Renames SharePoint Framework project"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project rename [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --newName <newName>"),"\n: New name for the project"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--generateNewId"),"\n: Generate a new solution ID for the project"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"!!! important\nRun this command in the folder where the project that you want to rename is located."),(0,o.kt)("p",null,"This command will update the project name in: ",(0,o.kt)("em",{parentName:"p"},"package.json"),", ",(0,o.kt)("em",{parentName:"p"},".yo-rc.json"),", ",(0,o.kt)("em",{parentName:"p"},"package-solution.json"),", ",(0,o.kt)("em",{parentName:"p"},"deploy-azure-storage.json")," and ",(0,o.kt)("em",{parentName:"p"},"README.md"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Renames SharePoint Framework project to contoso"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project rename --newName contoso\n")),(0,o.kt)("p",null,"Renames SharePoint Framework project to contoso with new solution ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project rename --newName contoso --generateNewId\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);