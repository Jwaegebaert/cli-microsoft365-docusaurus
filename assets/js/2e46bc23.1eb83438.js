"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[77274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=o.createContext({}),p=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(a,".").concat(d)]||m[d]||s[d]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[m]="string"==typeof e?e:l,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>c});var o=n(87462),l=(n(67294),n(3905));const r={toc:[]},i="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(i,(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-h, --help [help]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,l.kt)("code",null,"options"),", ",(0,l.kt)("code",null,"examples"),", ",(0,l.kt)("code",null,"remarks"),", ",(0,l.kt)("code",null,"response"),", ",(0,l.kt)("code",null,"full"),". Default is ",(0,l.kt)("code",null,"full"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--query [query]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"JMESPath query string. See ",(0,l.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-o, --output [output]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output type. ",(0,l.kt)("code",null,"json"),", ",(0,l.kt)("code",null,"text"),", ",(0,l.kt)("code",null,"csv"),", ",(0,l.kt)("code",null,"md"),". Default is ",(0,l.kt)("code",null,"json"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--verbose"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with verbose logging.")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--debug"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with debug logging."))))}c.isMDXComponent=!0},19124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(87462),l=(n(67294),n(3905)),r=n(37884);const i={},c="cli completion clink update",a={unversionedId:"cmd/cli/completion/completion-clink-update",id:"cmd/cli/completion/completion-clink-update",title:"cli completion clink update",description:"Updates command completion for Clink (cmder)",source:"@site/docs/cmd/cli/completion/completion-clink-update.mdx",sourceDirName:"cmd/cli/completion",slug:"/cmd/cli/completion/completion-clink-update",permalink:"/cli-microsoft365-docusaurus/cmd/cli/completion/completion-clink-update",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/cli/completion/completion-clink-update.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"cli reconsent",permalink:"/cli-microsoft365-docusaurus/cmd/cli/cli-reconsent"},next:{title:"cli completion pwsh setup",permalink:"/cli-microsoft365-docusaurus/cmd/cli/completion/completion-pwsh-setup"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],m={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cli-completion-clink-update"},"cli completion clink update"),(0,l.kt)("p",null,"Updates command completion for Clink (cmder)"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 cli completion clink update [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)(r.ZP,{mdxType:"Global"}),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"This commands updates the list of commands and their options used by command completion in Clink (cmder). You should run this command each time after upgrading the CLI for Microsoft 365."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Before running this command, change the working directory to where your shell stores completion plugins. For cmder, it's ",(0,l.kt)("inlineCode",{parentName:"p"},"%CMDER_ROOT%\\vendor\\clink-completions"),", where ",(0,l.kt)("inlineCode",{parentName:"p"},"%CMDER_ROOT%")," is the folder where you installed cmder. After running this command, restart your terminal to load the completion.")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Write the list of commands for Clink (cmder) command completion to a file named ",(0,l.kt)("inlineCode",{parentName:"p"},"m365.lua")," in the current directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"m365 cli completion clink update > m365.lua\n")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("p",null,"The command won't return a response on success."),(0,l.kt)("h2",{id:"more-information"},"More information"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command completion: ",(0,l.kt)("a",{parentName:"li",href:"https://pnp.github.io/cli-microsoft365/user-guide/completion/"},"https://pnp.github.io/cli-microsoft365/user-guide/completion/"))))}d.isMDXComponent=!0}}]);