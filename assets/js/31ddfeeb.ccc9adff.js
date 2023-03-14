"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[23858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},i=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),i=o,k=m["".concat(c,".").concat(i)]||m[i]||d[i]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=i;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}i.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={toc:[]},l="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}p.isMDXComponent=!0},28527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>i,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(37884);const l={},p="spfx project rename",c={unversionedId:"cmd/spfx/project/project-rename",id:"cmd/spfx/project/project-rename",title:"spfx project rename",description:"Renames SharePoint Framework project",source:"@site/docs/cmd/spfx/project/project-rename.mdx",sourceDirName:"cmd/spfx/project",slug:"/cmd/spfx/project/project-rename",permalink:"/cli-microsoft365-docusaurus/cmd/spfx/project/project-rename",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spfx/project/project-rename.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spfx project permissions grant",permalink:"/cli-microsoft365-docusaurus/cmd/spfx/project/project-permissions-grant"},next:{title:"spfx project upgrade",permalink:"/cli-microsoft365-docusaurus/cmd/spfx/project/project-upgrade"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:u},d="wrapper";function i(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spfx-project-rename"},"spfx project rename"),(0,o.kt)("p",null,"Renames SharePoint Framework project"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project rename [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-n, --newName <newName>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"New name for the project")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--generateNewId"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Generate a new solution ID for the project"))),(0,o.kt)(a.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Run this command in the folder where the project that you want to rename is located.")),(0,o.kt)("p",null,"This command will update the project name in: ",(0,o.kt)("em",{parentName:"p"},"package.json"),", ",(0,o.kt)("em",{parentName:"p"},".yo-rc.json"),", ",(0,o.kt)("em",{parentName:"p"},"package-solution.json"),", ",(0,o.kt)("em",{parentName:"p"},"deploy-azure-storage.json")," and ",(0,o.kt)("em",{parentName:"p"},"README.md"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Renames SharePoint Framework project to contoso"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project rename --newName contoso\n")),(0,o.kt)("p",null,"Renames SharePoint Framework project to contoso with new solution ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project rename --newName contoso --generateNewId\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}i.isMDXComponent=!0}}]);