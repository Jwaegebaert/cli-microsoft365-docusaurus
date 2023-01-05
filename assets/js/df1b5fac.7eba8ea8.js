"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),p=i,d=f["".concat(a,".").concat(p)]||f[p]||g[p]||o;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[f]="string"==typeof e?e:i,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={title:"Configure CLI",sidebar_position:7},s="Configure CLI for Microsoft 365",c={unversionedId:"user-guide/configuring-cli",id:"user-guide/configuring-cli",title:"Configure CLI",description:"You can configure CLI for Microsoft 365 to your personal preferences using its settings. Settings are stored on the disk in the current user's folder\\Users\\user\\.config\\configstore\\cli-m365-config.json on Windows and /Users/user/.config/configstore/cli-m365-config.json on macOS. The configuration file is created when you set the settings for the first time.",source:"@site/docs/user-guide/configuring-cli.md",sourceDirName:"user-guide",slug:"/user-guide/configuring-cli",permalink:"/user-guide/configuring-cli",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/user-guide/configuring-cli.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672829078,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:7,frontMatter:{title:"Configure CLI",sidebar_position:7},sidebar:"userGuide",previous:{title:"Filter CLI data",permalink:"/user-guide/filter-cli-data"},next:{title:"Command completion",permalink:"/user-guide/completion"}},a={},u=[{value:"Configuring settings",id:"configuring-settings",level:2}],l={toc:u};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-cli-for-microsoft-365"},"Configure CLI for Microsoft 365"),(0,i.kt)("p",null,"You can configure CLI for Microsoft 365 to your personal preferences using its settings. Settings are stored on the disk in the current user's folder: ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Users\\user\\.config\\configstore\\cli-m365-config.json")," on Windows and ",(0,i.kt)("inlineCode",{parentName:"p"},"/Users/user/.config/configstore/cli-m365-config.json")," on macOS. The configuration file is created when you set the settings for the first time."),(0,i.kt)("p",null,"To reset settings to their default values, remove them from the configuration file or remove the whole configuration file."),(0,i.kt)("h2",{id:"configuring-settings"},"Configuring settings"),(0,i.kt)("p",null,"You can configure the specific setting using the ",(0,i.kt)("inlineCode",{parentName:"p"},"cli config set")," command. For example, to configure CLI to automatically show help when executing a command failed, execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 cli config set --key showHelpOnFailure --value true\n")),(0,i.kt)("p",null,'--8<-- "docs/_clisettings.md"'))}f.isMDXComponent=!0}}]);