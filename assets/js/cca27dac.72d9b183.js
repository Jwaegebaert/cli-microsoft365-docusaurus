"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[74921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={title:"Install the CLI",sidebar_position:1},r="Install the CLI for Microsoft 365",l={unversionedId:"user-guide/installing-cli",id:"user-guide/installing-cli",title:"Install the CLI",description:"Thank you for your interest in the CLI for Microsoft 365. Following information will help you install the CLI for Microsoft 365 and keep it up to date.",source:"@site/docs/user-guide/installing-cli.mdx",sourceDirName:"user-guide",slug:"/user-guide/installing-cli",permalink:"/cli-microsoft365-docusaurus/user-guide/installing-cli",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/user-guide/installing-cli.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",sidebarPosition:1,frontMatter:{title:"Install the CLI",sidebar_position:1},sidebar:"userGuide",next:{title:"Use the CLI",permalink:"/cli-microsoft365-docusaurus/user-guide/using-cli"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install the CLI for Microsoft 365",id:"install-the-cli-for-microsoft-365-1",level:2},{value:"Check the installed version",id:"check-the-installed-version",level:2},{value:"Check if a new version is available",id:"check-if-a-new-version-is-available",level:2},{value:"Update the CLI",id:"update-the-cli",level:2},{value:"Uninstall the CLI",id:"uninstall-the-cli",level:2}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-the-cli-for-microsoft-365"},"Install the CLI for Microsoft 365"),(0,i.kt)("p",null,"Thank you for your interest in the CLI for Microsoft 365. Following information will help you install the CLI for Microsoft 365 and keep it up to date."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To use the CLI for Microsoft 365 you need Node.js. The CLI has been tested with Node.js versions 18 and higher, but we recommend you to use the Node.js LTS version available at the moment. For more information on installing Node.js for your platform visit ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org"},"https://nodejs.org"),"."),(0,i.kt)("p",null,"CLI for Microsoft 365 works on Windows, macOS and Linux and you can use it with any shell on these platforms."),(0,i.kt)("h2",{id:"install-the-cli-for-microsoft-365-1"},"Install the CLI for Microsoft 365"),(0,i.kt)("p",null,"CLI for Microsoft 365 is distributed as a Node.js package and published on ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com"},"npmjs.com"),". You can install it using your Node package manager, such as npm or Yarn."),(0,i.kt)("p",null,"To install the CLI for Microsoft 365, in the command line execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @pnp/cli-microsoft365\n")),(0,i.kt)("script",{id:"asciicast-445659",src:"https://asciinema.org/a/445659.js",async:!0}),(0,i.kt)("p",null,"If you're using Yarn, you can install the CLI for Microsoft 365 by executing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn global add @pnp/cli-microsoft365\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We are regularly publishing beta versions of the CLI for Microsoft 365 with latest features and fixes. If you want to use the beta version of the CLI, add ",(0,i.kt)("inlineCode",{parentName:"p"},"@next")," to the package name when installing the CLI, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install -g @pnp/cli-microsoft365@next"),". Please note, that you can have installed either the beta version or the public version of the CLI but not both.")),(0,i.kt)("h2",{id:"check-the-installed-version"},"Check the installed version"),(0,i.kt)("p",null,"To check which version of the CLI for Microsoft 365 you have installed on your computer, execute in the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 version\n")),(0,i.kt)("p",null,"Alternatively, you can check the version of the Node.js package you have installed, by executing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm ls -g --depth=0\n")),(0,i.kt)("p",null,"The version of the CLI is the same as the version of the Node.js package distributing the CLI, so by using either of the commands you can control which version of the CLI you have installed."),(0,i.kt)("h2",{id:"check-if-a-new-version-is-available"},"Check if a new version is available"),(0,i.kt)("p",null,"We are continuously evolving the CLI for Microsoft 365 and adding more features to it. You can download new versions of the CLI from npmjs.com. To check, if a new version of the CLI for Microsoft 365 is available, execute in the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm outdated -g\n")),(0,i.kt)("p",null,"For each package that you have installed globally, npm will show the version you have currently installed as well as the latest version available on npm."),(0,i.kt)("p",null,"If you want to check if a new beta version of the CLI for Microsoft 365 is available, execute in the command line ",(0,i.kt)("inlineCode",{parentName:"p"},"npm view @pnp/cli-microsoft365"),". Next, compare the version listed as the ",(0,i.kt)("inlineCode",{parentName:"p"},"@next")," tag with the version you have installed. Beta versions of the CLI for Microsoft 365 are tagged with source code commits so that it's easy for the team to debug it in case of any issues."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'hl_lines="5"',hl_lines:'"5"'},"$ npm view @pnp/cli-microsoft365\n\n{ name: '@pnp/cli-microsoft365',\n  description: 'CLI for managing Microsoft 365 configuration',\n  // highlight-start\n  'dist-tags': { next: '0.5.0-beta.fe510b6', latest: '0.4.0' },\n  // highlight-end\n  versions:\n  [ '0.1.0-beta.b35346a',\n    '0.1.0-beta.b7db425',\n    '0.1.0-beta.b85510d',\n    '0.1.1-beta.25b1725',\n    ...\n")),(0,i.kt)("h2",{id:"update-the-cli"},"Update the CLI"),(0,i.kt)("p",null,"To update the CLI, execute in the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @pnp/cli-microsoft365@latest\n")),(0,i.kt)("p",null,"This will download and install the latest public version of the CLI for Microsoft 365. If you want to update to the latest beta version of the CLI, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"@latest")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"@next"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"New version of the CLI for Microsoft 365 often contains new commands. Don't forget to update command completion for your terminal to get suggestions for the latest commands added in the CLI. For more information see the article on ",(0,i.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/completion"},"command completion"),".")),(0,i.kt)("h2",{id:"uninstall-the-cli"},"Uninstall the CLI"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Before uninstalling the CLI, log out from Microsoft 365 using the ",(0,i.kt)("inlineCode",{parentName:"p"},"logout")," command. CLI for Microsoft 365 persists connection information on your computer and if you don't log out before uninstalling the CLI, this information will be left on your computer and you will have to remove it manually. For more information see the article on ",(0,i.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/concepts/persisting-connection"},"persisting connection information"))),(0,i.kt)("p",null,"To uninstall the CLI for Microsoft 365, execute in the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm uninstall -g @pnp/cli-microsoft365\n")),(0,i.kt)("p",null,"This command will remove all CLI for Microsoft 365 files from your computer."),(0,i.kt)("p",null,"If you have configured command completion for the CLI for Microsoft 365 in your terminal, remove the completion following instructions specific to your terminal, to avoid errors in your terminal."))}f.isMDXComponent=!0}}]);