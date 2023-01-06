"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34173],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=o.createContext({}),l=function(t){var e=o.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return r?o.createElement(d,a(a({ref:e},u),{},{components:r})):o.createElement(d,a({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11788:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=r(87462),n=(r(67294),r(3905)),i=r(79024);const a={slug:"/"},s="CLI for Microsoft 365",c={unversionedId:"index",id:"index",title:"CLI for Microsoft 365",description:"",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/cli-microsoft365-docusaurus/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/index.mdx",tags:[],version:"current",lastUpdatedAt:1672941875,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{slug:"/"},sidebar:"home",next:{title:"v6 Upgrade Guidance",permalink:"/cli-microsoft365-docusaurus/v6-upgrade-guidance"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Microsoft 365 Platform Community",id:"microsoft-365-platform-community",level:2},{value:"Community Discord server",id:"community-discord-server",level:3}],p={toc:u};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cli-for-microsoft-365"},"CLI for Microsoft 365"),(0,n.kt)("p",null,"Using the CLI for Microsoft 365, you can manage your Microsoft 365 tenant and SharePoint Framework projects on any platform. No matter if you are on Windows, macOS or Linux, using Bash, Cmder or PowerShell, using the CLI for Microsoft 365 you can configure Microsoft 365, manage SharePoint Framework projects and build automation scripts."),(0,n.kt)(i.default,{src:"https://asciinema.org/a/445653.cast",rows:15,idleTimeLimit:3,preload:!0,loop:!0,autoplay:!0,mdxType:"AsciinemaPlayer"}),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"The CLI for Microsoft 365 is distributed as an NPM package. To use it, install it globally using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -g @pnp/cli-microsoft365\n")),(0,n.kt)("p",null,"or using yarn:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"yarn global add @pnp/cli-microsoft365\n")),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"Start managing the settings of your Microsoft 365 tenant by logging in to it, using the ",(0,n.kt)("inlineCode",{parentName:"p"},"login")," command, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login\n")),(0,n.kt)("p",null,"To list all available commands, type in the CLI for Microsoft 365 prompt ",(0,n.kt)("inlineCode",{parentName:"p"},"help"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 help\n")),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/installing-cli"},"User Guide")," to learn more about the CLI for Microsoft 365 and its capabilities."),(0,n.kt)("h2",{id:"microsoft-365-platform-community"},"Microsoft 365 Platform Community"),(0,n.kt)("p",null,"CLI for Microsoft 365 is a ",(0,n.kt)("a",{parentName:"p",href:"https://pnp.github.io"},"Microsoft 365 Platform Community")," (PnP) project. Microsoft 365 Platform Community is a virtual team consisting of Microsoft employees and community members focused on helping the community make the best use of Microsoft products. CLI for Microsoft 365 is an open-source project not affiliated with Microsoft and not covered by Microsoft support. If you experience any issues using the CLI, please submit an issue in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pnp/cli-microsoft365/issues"},"issues list"),"."),(0,n.kt)("p",null,"The project is built and managed publicly on GitHub at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pnp/cli-microsoft365"},"https://github.com/pnp/cli-microsoft365")," and accepts community contributions. We would encourage you to try it and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pnp/cli-microsoft365/issues"},"tell us what you think"),". We would also love your help! We have a number of feature requests that are a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pnp/cli-microsoft365/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"good starting point")," to contribute to the project."),(0,n.kt)("h3",{id:"community-discord-server"},"Community Discord server"),(0,n.kt)("p",null,"We also have a ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/invite/7rfW4kg6B5"},"community Discord server")," where you can hang out, share, collaborate, and discuss more about the CLI for Microsoft 365!"),(0,n.kt)("br",null),(0,n.kt)("p",{align:"center"},(0,n.kt)("a",{href:"https://discord.com/invite/7rfW4kg6B5"},(0,n.kt)("img",{src:"https://img.shields.io/badge/Discord-invite/7rfW4kg6B5-7289da?style=for-the-badge",alt:"Discord"}))))}m.isMDXComponent=!0}}]);