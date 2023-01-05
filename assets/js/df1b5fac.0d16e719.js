"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=a(r),p=o,d=f["".concat(u,".").concat(p)]||f[p]||g[p]||i;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[f]="string"==typeof e?e:o,s[1]=c;for(var a=2;a<i;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},67848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={title:"Configure CLI",sidebar_position:7},s="Configure CLI for Microsoft 365",c={unversionedId:"user-guide/configuring-cli",id:"user-guide/configuring-cli",title:"Configure CLI",description:"You can configure CLI for Microsoft 365 to your personal preferences using its settings. Settings are stored on the disk in the current user's folder\\Users\\user\\.config\\configstore\\cli-m365-config.json on Windows and /Users/user/.config/configstore/cli-m365-config.json on macOS. The configuration file is created when you set the settings for the first time.",source:"@site/docs/user-guide/configuring-cli.md",sourceDirName:"user-guide",slug:"/user-guide/configuring-cli",permalink:"/cli-microsoft365-docusaurus/user-guide/configuring-cli",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/user-guide/configuring-cli.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672829078,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:7,frontMatter:{title:"Configure CLI",sidebar_position:7},sidebar:"userGuide",previous:{title:"Filter CLI data",permalink:"/cli-microsoft365-docusaurus/user-guide/filter-cli-data"},next:{title:"Command completion",permalink:"/cli-microsoft365-docusaurus/user-guide/completion"}},u={},a=[{value:"Configuring settings",id:"configuring-settings",level:2}],l={toc:a};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-cli-for-microsoft-365"},"Configure CLI for Microsoft 365"),(0,o.kt)("p",null,"You can configure CLI for Microsoft 365 to your personal preferences using its settings. Settings are stored on the disk in the current user's folder: ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\user\\.config\\configstore\\cli-m365-config.json")," on Windows and ",(0,o.kt)("inlineCode",{parentName:"p"},"/Users/user/.config/configstore/cli-m365-config.json")," on macOS. The configuration file is created when you set the settings for the first time."),(0,o.kt)("p",null,"To reset settings to their default values, remove them from the configuration file or remove the whole configuration file."),(0,o.kt)("h2",{id:"configuring-settings"},"Configuring settings"),(0,o.kt)("p",null,"You can configure the specific setting using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cli config set")," command. For example, to configure CLI to automatically show help when executing a command failed, execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 cli config set --key showHelpOnFailure --value true\n")),(0,o.kt)("p",null,'--8<-- "docs/_clisettings.md"'))}f.isMDXComponent=!0}}]);