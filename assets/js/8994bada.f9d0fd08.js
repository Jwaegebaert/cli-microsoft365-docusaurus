"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78345],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(o),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return o?n.createElement(f,c(c({ref:t},p),{},{components:o})):n.createElement(f,c({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=o[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3033:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const i={},c="cli completion sh update",a={unversionedId:"cmd/cli/completion/completion-sh-update",id:"cmd/cli/completion/completion-sh-update",title:"cli completion sh update",description:"Updates command completion for Zsh, Bash and Fish",source:"@site/docs/cmd/cli/completion/completion-sh-update.md",sourceDirName:"cmd/cli/completion",slug:"/cmd/cli/completion/completion-sh-update",permalink:"/cli-microsoft365-docusaurus/cmd/cli/completion/completion-sh-update",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/cli/completion/completion-sh-update.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"cli completion sh setup",permalink:"/cli-microsoft365-docusaurus/cmd/cli/completion/completion-sh-setup"},next:{title:"cli config get",permalink:"/cli-microsoft365-docusaurus/cmd/cli/config/config-get"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],p={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cli-completion-sh-update"},"cli completion sh update"),(0,r.kt)("p",null,"Updates command completion for Zsh, Bash and Fish"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 cli completion sh update [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"This commands updates the list of commands and their options used by command completion in Zsh, Bash and Fish. You should run this command each time after upgrading the CLI for Microsoft 365."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Update list of commands for Zsh, Bash and Fish command completion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 cli completion sh update\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Command completion: ",(0,r.kt)("a",{parentName:"li",href:"https://pnp.github.io/cli-microsoft365/user-guide/completion/"},"https://pnp.github.io/cli-microsoft365/user-guide/completion/"))))}m.isMDXComponent=!0}}]);