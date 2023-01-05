"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57760],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(o),d=r,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return o?n.createElement(f,a(a({ref:t},c),{},{components:o})):n.createElement(f,a({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},23750:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const i={title:"Use CLI programmatically",sidebar_position:13},a="Use CLI for Microsoft 365 programmatically",s={unversionedId:"user-guide/use-cli-api",id:"user-guide/use-cli-api",title:"Use CLI programmatically",description:"Typically, you'll work with CLI for Microsoft 365 in a command line. You'll either call specific commands or build automation scripts to combine multiple tasks. But if  you're building software, you might want to use CLI for Microsoft 365 from your code.",source:"@site/docs/user-guide/use-cli-api.md",sourceDirName:"user-guide",slug:"/user-guide/use-cli-api",permalink:"/cli-microsoft365-docusaurus/user-guide/use-cli-api",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/user-guide/use-cli-api.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672829078,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:13,frontMatter:{title:"Use CLI programmatically",sidebar_position:13},sidebar:"userGuide",previous:{title:"Manage Microsoft 365 apps with the CLI",permalink:"/cli-microsoft365-docusaurus/user-guide/manage-microsoft-365-apps"}},u={},l=[{value:"Integrate CLI for Microsoft 365 in your app",id:"integrate-cli-for-microsoft-365-in-your-app",level:2}],c={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-cli-for-microsoft-365-programmatically"},"Use CLI for Microsoft 365 programmatically"),(0,r.kt)("p",null,"Typically, you'll work with CLI for Microsoft 365 in a command line. You'll either call specific commands or build automation scripts to combine multiple tasks. But if  you're building software, you might want to use CLI for Microsoft 365 from your code."),(0,r.kt)("h2",{id:"integrate-cli-for-microsoft-365-in-your-app"},"Integrate CLI for Microsoft 365 in your app"),(0,r.kt)("p",null,"If you build apps in Node.js, you can integrate CLI for Microsoft 365 using its API. This API lets you call any of CLI's commands. The following example shows how you could call several CLI for Microsoft 365 commands in a Node.js app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { executeCommand } = require('@pnp/cli-microsoft365');\n\nexecuteCommand('status', { output: 'text' })\n  .then(res => {\n    if (res.stdout === 'Logged out') {\n      return executeCommand('login', { output: 'text' }, {\n        stdout: message => console.log(message)\n      });\n    }\n\n    return Promise.resolve();\n  })\n  .then(_ => executeCommand('spo site list', { output: 'json' }))\n  .then(res => {\n    const sites = JSON.parse(res.stdout);\n\n    if (sites.length === 0) {\n      return Promise.reject('No sites found');\n    }\n\n    const siteUrl = sites[0].Url;\n    return executeCommand('spo web get', { webUrl: siteUrl, output: 'json' });\n  })\n  .then(res => console.log(res.stdout))\n  .catch(err => console.error(err));\n")),(0,r.kt)("p",null,"You start with importing the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeCommand")," function from CLI for Microsoft 365. CLI doesn't expose all of its logic externally, but rather just the function that allows you to run CLI's commands. This could change in the future."),(0,r.kt)("p",null,"Next, you execute a command by passing the command's name without the ",(0,r.kt)("inlineCode",{parentName:"p"},"m365")," prefix, and its options. After the command completed its execution, it resolves a Promise with the command's output. The ",(0,r.kt)("inlineCode",{parentName:"p"},"stdout")," property contains the main command output. The ",(0,r.kt)("inlineCode",{parentName:"p"},"stderr")," property would contain verbose, debug and error output that in command line would be sent to stderr. The output in the Promise is a string in the format specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," option passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"executeCommand"),"."),(0,r.kt)("p",null,"In some cases, like when calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," command, you might need to get the command output while it executes. In the case of the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," command, it will contain the instructions to complete the device login flow. You can get this output by passing to the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeCommand")," function a third argument with listeners attached to stdout and stderr output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"executeCommand('login', { output: 'text' }, {\n  stdout: message => console.log(message)\n});\n")),(0,r.kt)("p",null,"!!! important\nYou shouldn't use both listeners and output from Promises. All command output is sent to the registered listeners and exposed in the end through the resolved Promise. If you would send output from both the listener and Promise to the console, you'd end up with the same output printed twice. In the code sample above you see that for all commands you work with the output from Promises but for the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," command you use a listener because you want to get login instructions while the command is still running."))}p.isMDXComponent=!0}}]);