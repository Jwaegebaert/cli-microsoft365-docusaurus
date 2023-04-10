"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[11263],{3905:(e,t,o)=>{o.d(t,{Zo:()=>a,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},a=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,a=p(e,["components","mdxType","originalType","parentName"]),m=s(o),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return o?r.createElement(f,i(i({ref:t},a),{},{components:o})):r.createElement(f,i({ref:t},a))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,i=new Array(l);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},41013:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const l={},i="cli completion pwsh setup",p={unversionedId:"cmd/cli/completion/completion-pwsh-setup",id:"cmd/cli/completion/completion-pwsh-setup",title:"cli completion pwsh setup",description:"Sets up command completion for PowerShell",source:"@site/docs/cmd/cli/completion/completion-pwsh-setup.md",sourceDirName:"cmd/cli/completion",slug:"/cmd/cli/completion/completion-pwsh-setup",permalink:"/cli-microsoft365-docusaurus/cmd/cli/completion/completion-pwsh-setup",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/cli/completion/completion-pwsh-setup.md",tags:[],version:"current",lastUpdatedAt:1670192191,formattedLastUpdatedAt:"Dec 4, 2022",frontMatter:{},sidebar:"commands",previous:{title:"cli completion clink update",permalink:"/cli-microsoft365-docusaurus/cmd/cli/completion/completion-clink-update"},next:{title:"cli completion pwsh update",permalink:"/cli-microsoft365-docusaurus/cmd/cli/completion/completion-pwsh-update"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],a={toc:s},m="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},a,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cli-completion-pwsh-setup"},"cli completion pwsh setup"),(0,n.kt)("p",null,"Sets up command completion for PowerShell"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 cli completion pwsh setup [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-p, --profile <profile>"),"\n: Path to the PowerShell profile file"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"This commands sets up command completion for the CLI for Microsoft 365 in PowerShell by registering a custom PowerShell argument completer in the specified profile. Because CLI for Microsoft 365 is not a native PowerShell module, it requires a custom completer to provide completion."),(0,n.kt)("p",null,"If the specified profile path doesn't exist, the CLI will try to create it."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Set up command completion for PowerShell using the profile from the profile variable"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"m365 cli completion pwsh setup --profile $profile\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Command completion: ",(0,n.kt)("a",{parentName:"li",href:"https://pnp.github.io/cli-microsoft365/user-guide/completion/"},"https://pnp.github.io/cli-microsoft365/user-guide/completion/"))))}u.isMDXComponent=!0}}]);