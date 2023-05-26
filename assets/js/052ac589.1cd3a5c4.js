"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[80024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i="Use CLI for Microsoft 365 context",l={unversionedId:"user-guide/using-cli-context",id:"user-guide/using-cli-context",title:"Use CLI for Microsoft 365 context",description:"CLI for Microsoft 365 context provides unique functionality to save options and their values in a central place. The options saved in the context may be used in any kind of command execution. This means you may provide fewer options or no options at all. Using a context will help you save on keystrokes.",source:"@site/docs/user-guide/using-cli-context.mdx",sourceDirName:"user-guide",slug:"/user-guide/using-cli-context",permalink:"/cli-microsoft365-docusaurus/user-guide/using-cli-context",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/user-guide/using-cli-context.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{},sidebar:"userGuide",previous:{title:"CLI assistant (chili) \ud83c\udf36\ufe0f",permalink:"/cli-microsoft365-docusaurus/user-guide/chili"}},s={},c=[{value:"How to get started",id:"how-to-get-started",level:2},{value:"How does it work",id:"how-does-it-work",level:2},{value:"Example",id:"example",level:2},{value:"Related commands",id:"related-commands",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-cli-for-microsoft-365-context"},"Use CLI for Microsoft 365 context"),(0,r.kt)("p",null,"CLI for Microsoft 365 context provides unique functionality to save options and their values in a central place. The options saved in the context may be used in any kind of command execution. This means you may provide fewer options or no options at all. Using a context will help you save on keystrokes.\nIt may be especially useful if you want to group all your script parameters in a single place.\nA context is saved in a m365rc.json file in your working directory. It can be committed to Source Control along with your script files. It can be managed by executing commands."),(0,r.kt)("h2",{id:"how-to-get-started"},"How to get started"),(0,r.kt)("p",null,"To create an empty context we may execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"m365 context init\n")),(0,r.kt)("p",null,"To add or update an option in the context use the ",(0,r.kt)("inlineCode",{parentName:"p"},"m365 context option set")," command. The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," is used to define the option name and ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is used to define its default value. For example, if we want to set the option ",(0,r.kt)("inlineCode",{parentName:"p"},"listTitle")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"test list"),", we should execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"m365 context option set --name 'listTitle' --value 'test list'\n")),(0,r.kt)("p",null,"To remove a specific option from the context we can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'m365 context option remove --name "listTitle"\n')),(0,r.kt)("p",null,"In order to remove the full context we may execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"m365 context remove\n\n")),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,r.kt)("p",null,"When a command is executed, the CLI will first check for the ",(0,r.kt)("inlineCode",{parentName:"p"},".m365rc.json")," file in the working directory. If present, the CLI will check if any of the options defined in it may be used for the currently executed command. If that's the case the CLI will execute this command with the option and its value taken from the context."),(0,r.kt)("p",null,"When an option is available in the context and also used in the command itself, the value defined in the command will take precedence."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Consider the below context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "context": {\n    "groupName": "Sales group",\n    "listTitle": "Expense tracker"\n  }\n}\n')),(0,r.kt)("p",null,"When we execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'m365 context option set --name "webUrl" --value "https://contoso.sharepoint.com/sites/sales"\n')),(0,r.kt)("p",null,"The result of the above will be a new option added to the context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "context": {\n    "groupName": "Sales group",\n    "listTitle": "Expense tracker",\n    "webUrl": "https://contoso.sharepoint.com/sites/sales"\n  }\n}\n')),(0,r.kt)("p",null,"Next, if we execute the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"m365 spo listitem list\n")),(0,r.kt)("p",null,"As a result, we will get a list of items from ",(0,r.kt)("inlineCode",{parentName:"p"},"Expense tracker")," list from ",(0,r.kt)("inlineCode",{parentName:"p"},"https://contoso.sharepoint.com/sites/sales")," even though we did not specify any of the required options, those were taken from the context."),(0,r.kt)("p",null,"Now when we execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'m365 spo listitem list --listTitle "Issue tracker"\n')),(0,r.kt)("p",null,"We will get all items from list ",(0,r.kt)("inlineCode",{parentName:"p"},"Issue tracker")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"https://contoso.sharepoint.com/sites/sales")," site."),(0,r.kt)("p",null,"If we execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"m365 spo list get\n")),(0,r.kt)("p",null,"The command will fail. Although the ",(0,r.kt)("inlineCode",{parentName:"p"},"webUrl")," option will be used, which is the required one, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"listTitle")," will not be used as the command needs ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," option instead to get the specified list."),(0,r.kt)("h2",{id:"related-commands"},"Related commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cli-microsoft365-docusaurus/cmd/context/context-init"},"m365 context init")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cli-microsoft365-docusaurus/cmd/context/context-remove"},"m365 context remove")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cli-microsoft365-docusaurus/cmd/context/option/option-set"},"m365 context option set")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cli-microsoft365-docusaurus/cmd/context/option/option-list"},"m365 context option list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cli-microsoft365-docusaurus/cmd/context/option/option-remove"},"m365 context option remove"))))}m.isMDXComponent=!0}}]);