"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[40489],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>f});var l=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,l,n=function(e,t){if(null==e)return{};var o,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=l.createContext({}),u=function(e){var t=l.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},s=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},a="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),a=u(o),d=n,f=a["".concat(c,".").concat(d)]||a[d]||m[d]||r;return o?l.createElement(f,p(p({ref:t},s),{},{components:o})):l.createElement(f,p({ref:t},s))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,p=new Array(r);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[a]="string"==typeof e?e:n,p[1]=i;for(var u=2;u<r;u++)p[u]=o[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,o)}d.displayName="MDXCreateElement"},37884:(e,t,o)=>{o.d(t,{ZP:()=>i});var l=o(87462),n=(o(67294),o(3905));const r={toc:[]},p="wrapper";function i(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,l.Z)({},r,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-h, --help [help]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",null,"options"),", ",(0,n.kt)("code",null,"examples"),", ",(0,n.kt)("code",null,"remarks"),", ",(0,n.kt)("code",null,"response"),", ",(0,n.kt)("code",null,"full"),". Default is ",(0,n.kt)("code",null,"full"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--query [query]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"JMESPath query string. See ",(0,n.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-o, --output [output]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output type. ",(0,n.kt)("code",null,"json"),", ",(0,n.kt)("code",null,"text"),", ",(0,n.kt)("code",null,"csv"),", ",(0,n.kt)("code",null,"md"),". Default is ",(0,n.kt)("code",null,"json"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--verbose"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with verbose logging.")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--debug"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with debug logging."))))}i.isMDXComponent=!0},23418:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var l=o(87462),n=(o(67294),o(3905)),r=o(37884);const p={},i="cli completion pwsh setup",c={unversionedId:"cmd/cli/completion/completion-pwsh-setup",id:"cmd/cli/completion/completion-pwsh-setup",title:"cli completion pwsh setup",description:"Sets up command completion for PowerShell",source:"@site/docs/cmd/cli/completion/completion-pwsh-setup.mdx",sourceDirName:"cmd/cli/completion",slug:"/cmd/cli/completion/completion-pwsh-setup",permalink:"/cli-microsoft365-docusaurus/cmd/cli/completion/completion-pwsh-setup",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/cli/completion/completion-pwsh-setup.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"cli completion clink update",permalink:"/cli-microsoft365-docusaurus/cmd/cli/completion/completion-clink-update"},next:{title:"cli completion pwsh update",permalink:"/cli-microsoft365-docusaurus/cmd/cli/completion/completion-pwsh-update"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],a={toc:s},m="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,l.Z)({},a,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cli-completion-pwsh-setup"},"cli completion pwsh setup"),(0,n.kt)("p",null,"Sets up command completion for PowerShell"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 cli completion pwsh setup [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-p, --profile <profile>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Path to the PowerShell profile file"))),(0,n.kt)(r.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"This commands sets up command completion for the CLI for Microsoft 365 in PowerShell by registering a custom PowerShell argument completer in the specified profile. Because CLI for Microsoft 365 is not a native PowerShell module, it requires a custom completer to provide completion."),(0,n.kt)("p",null,"If the specified profile path doesn't exist, the CLI will try to create it."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Set up command completion for PowerShell using the profile from the profile variable"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"m365 cli completion pwsh setup --profile $profile\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Command completion: ",(0,n.kt)("a",{parentName:"li",href:"https://pnp.github.io/cli-microsoft365/user-guide/completion/"},"https://pnp.github.io/cli-microsoft365/user-guide/completion/"))))}d.isMDXComponent=!0}}]);