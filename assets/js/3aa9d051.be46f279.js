"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[71587],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var n=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=s(o),u=l,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return o?n.createElement(h,a(a({ref:t},m),{},{components:o})):n.createElement(h,a({ref:t},m))}));function h(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=o.length,a=new Array(i);a[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:l,a[1]=r;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},88815:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var n=o(87462),l=(o(67294),o(3905));const i={title:"Command completion",sidebar_position:8},a="Command completion",r={unversionedId:"user-guide/completion",id:"user-guide/completion",title:"Command completion",description:"To help you use its commands, CLI for Microsoft 365 offers you the ability to autocomplete commands and options that you're typing in the prompt. Some additional setup, specific for the shell and terminal that you use, is required to enable command completion for CLI for Microsoft 365.",source:"@site/docs/user-guide/completion.mdx",sourceDirName:"user-guide",slug:"/user-guide/completion",permalink:"/cli-microsoft365-docusaurus/user-guide/completion",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/user-guide/completion.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",sidebarPosition:8,frontMatter:{title:"Command completion",sidebar_position:8},sidebar:"userGuide",previous:{title:"Configure CLI",permalink:"/cli-microsoft365-docusaurus/user-guide/configuring-cli"},next:{title:"Use your own Azure AD identity",permalink:"/cli-microsoft365-docusaurus/user-guide/using-own-identity"}},p={},s=[{value:"Clink (cmder)",id:"clink-cmder",level:2},{value:"Enable Clink completion",id:"enable-clink-completion",level:3},{value:"Update Clink completion",id:"update-clink-completion",level:3},{value:"Disable Clink completion",id:"disable-clink-completion",level:3},{value:"Zsh, Bash and Fish",id:"zsh-bash-and-fish",level:2},{value:"Enable sh completion",id:"enable-sh-completion",level:3},{value:"Update sh completion",id:"update-sh-completion",level:3},{value:"Disable sh completion",id:"disable-sh-completion",level:3},{value:"PowerShell",id:"powershell",level:2},{value:"Enable PowerShell completion",id:"enable-powershell-completion",level:3},{value:"Update PowerShell completion",id:"update-powershell-completion",level:3},{value:"Disable PowerShell completion",id:"disable-powershell-completion",level:3}],m={toc:s},c="wrapper";function d(e){let{components:t,...o}=e;return(0,l.kt)(c,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"command-completion"},"Command completion"),(0,l.kt)("p",null,"To help you use its commands, CLI for Microsoft 365 offers you the ability to autocomplete commands and options that you're typing in the prompt. Some additional setup, specific for the shell and terminal that you use, is required to enable command completion for CLI for Microsoft 365."),(0,l.kt)("h2",{id:"clink-cmder"},"Clink (cmder)"),(0,l.kt)("p",null,"On Windows, the CLI for Microsoft 365 offers support for completing commands in ",(0,l.kt)("a",{parentName:"p",href:"http://cmder.net"},"cmder")," and other shells using ",(0,l.kt)("a",{parentName:"p",href:"https://mridgers.github.io/clink/"},"Clink"),"."),(0,l.kt)("h3",{id:"enable-clink-completion"},"Enable Clink completion"),(0,l.kt)("p",null,"To enable completion:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Start your shell"),(0,l.kt)("li",{parentName:"ol"},"Change the working directory to where your shell stores completion plugins. For cmder, it's ",(0,l.kt)("inlineCode",{parentName:"li"},"%CMDER_ROOT%\\vendor\\clink-completions"),", where ",(0,l.kt)("inlineCode",{parentName:"li"},"%CMDER_ROOT%")," is the folder where you installed cmder."),(0,l.kt)("li",{parentName:"ol"},"Execute: ",(0,l.kt)("inlineCode",{parentName:"li"},"m365 cli completion clink update > m365.lua"),". This will create the ",(0,l.kt)("inlineCode",{parentName:"li"},"m365.lua")," file with information about m365 commands which is used by Clink to provide completion"),(0,l.kt)("li",{parentName:"ol"},"Restart your shell")),(0,l.kt)("p",null,"You should now be able to complete your input, eg. typing ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 s<tab>")," will complete it to ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 spo")," and typing ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 spo <tab><tab>")," will list all SharePoint Online commands available in CLI for Microsoft 365. To see the options available for the current command, type ",(0,l.kt)("inlineCode",{parentName:"p"},"-<tab><tab>"),", for example ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 spo app list -<tab><tab>")," will list all options available for the ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 spo app list")," command."),(0,l.kt)("h3",{id:"update-clink-completion"},"Update Clink completion"),(0,l.kt)("p",null,"Command completion is based on a static file. After updating the CLI for Microsoft 365, you should update the completion file as described in the ",(0,l.kt)("a",{parentName:"p",href:"#enable-clink-completion"},"Enable completion")," section so that the completion file reflects the latest commands in the CLI for Microsoft 365."),(0,l.kt)("h3",{id:"disable-clink-completion"},"Disable Clink completion"),(0,l.kt)("p",null,"To disable completion, delete the ",(0,l.kt)("inlineCode",{parentName:"p"},"m365.lua")," file you generated previously and restart your shell."),(0,l.kt)("h2",{id:"zsh-bash-and-fish"},"Zsh, Bash and Fish"),(0,l.kt)("p",null,"If you're using Zsh, Bash or Fish as your shell, you can benefit of CLI for Microsoft 365 command completion as well, when typing commands directly in the shell. The completion is based on the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/omelette"},"Omelette")," package."),(0,l.kt)("p",null,"For Mac Terminal, you'll need to add ",(0,l.kt)("inlineCode",{parentName:"p"},"source /usr/local/etc/profile.d/bash_completion.sh")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.bashrc")),(0,l.kt)("h3",{id:"enable-sh-completion"},"Enable sh completion"),(0,l.kt)("p",null,"To enable completion:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Start your shell"),(0,l.kt)("li",{parentName:"ol"},"Execute ",(0,l.kt)("inlineCode",{parentName:"li"},"m365 cli completion sh setup"),". This will generate the ",(0,l.kt)("inlineCode",{parentName:"li"},"commands.json")," file in the same folder where the CLI for Microsoft 365 is installed, listing all available commands and their options. Additionally, it will register completion in your shell profile file (for Zsh ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.zshrc"),") using the ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/omelette#automated-install"},"Omelette's automated install"),"."),(0,l.kt)("li",{parentName:"ol"},"Restart your shell")),(0,l.kt)("p",null,"You should now be able to complete your input, eg. typing ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 s<tab>")," will complete it to ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 spo")," and typing ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 spo <tab><tab>")," will list all SharePoint Online commands available in CLI for Microsoft 365. To see the options available for the command, type ",(0,l.kt)("inlineCode",{parentName:"p"},"-<tab><tab>"),", for example ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 spo app list -<tab><tab>")," will list all options available for the ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 spo app list")," command. If the command is completed, the completion will automatically start suggestions with a ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," indicating that you have matched a command and can now specify its options. Command options you've already used are removed from the suggestions list, but the completion doesn't take into account short and long variant of the same option. If you specified the ",(0,l.kt)("inlineCode",{parentName:"p"},"--output")," option in your command, ",(0,l.kt)("inlineCode",{parentName:"p"},"--option")," will not be displayed in the list of suggestions, but ",(0,l.kt)("inlineCode",{parentName:"p"},"-o")," will."),(0,l.kt)("h3",{id:"update-sh-completion"},"Update sh completion"),(0,l.kt)("p",null,"Command completion is based on the static ",(0,l.kt)("inlineCode",{parentName:"p"},"commands.json")," file located in the folder where the CLI for Microsoft 365 is installed. After updating the CLI for Microsoft 365, you should update the completion file by executing ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 cli completion sh update")," in the command line. After running this command, it's not necessary to restart the shell to see the latest changes."),(0,l.kt)("h3",{id:"disable-sh-completion"},"Disable sh completion"),(0,l.kt)("p",null,"To disable completion, edit your shell's profile file (for Zsh ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),") and remove the following lines:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 # begin m365 completion\n. <(m365 --completion)\n# end m365 completion\n")),(0,l.kt)("p",null,"Save the profile file and restart the shell for the changes to take effect."),(0,l.kt)("h2",{id:"powershell"},"PowerShell"),(0,l.kt)("p",null,"If you use CLI for Microsoft 365 in PowerShell you can use the custom argument completer provided with the CLI for Microsoft 365 to get command completion when typing commands directly in the shell."),(0,l.kt)("h3",{id:"enable-powershell-completion"},"Enable PowerShell completion"),(0,l.kt)("p",null,"To enable completion in your current PowerShell profile:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Start PowerShell"),(0,l.kt)("li",{parentName:"ol"},"Execute ",(0,l.kt)("inlineCode",{parentName:"li"},"m365 cli completion pwsh setup --profile $profile"),". This will generate the ",(0,l.kt)("inlineCode",{parentName:"li"},"commands.json")," file in the same folder where the CLI for Microsoft 365 is installed, listing all available commands and their options. Additionally, it will register completion in your PowerShell profile"),(0,l.kt)("li",{parentName:"ol"},"Restart PowerShell")),(0,l.kt)("p",null,"You should now be able to complete your input, eg. typing ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 s<tab>")," will complete it to ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 spo")," and typing ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 spo <tab><tab>")," will list all SharePoint Online commands available in CLI for Microsoft 365. To see the options available for the command, type ",(0,l.kt)("inlineCode",{parentName:"p"},"-<tab><tab>"),", for example ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 spo app list -<tab><tab>")," will list all options available for the ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 spo app list")," command. If the command is completed, the completion will automatically start suggestions with a ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," indicating that you have matched a command and can now specify its options. Command options you've already used are removed from the suggestions list, but the completion doesn't take into account short and long variant of the same option. If you specified the ",(0,l.kt)("inlineCode",{parentName:"p"},"--output")," option in your command, ",(0,l.kt)("inlineCode",{parentName:"p"},"--option")," will not be displayed in the list of suggestions, but ",(0,l.kt)("inlineCode",{parentName:"p"},"-o")," will."),(0,l.kt)("h3",{id:"update-powershell-completion"},"Update PowerShell completion"),(0,l.kt)("p",null,"Command completion is based on the static ",(0,l.kt)("inlineCode",{parentName:"p"},"commands.json")," file located in the folder where the CLI for Microsoft 365 is installed. After updating the CLI for Microsoft 365, you should update the completion file by executing ",(0,l.kt)("inlineCode",{parentName:"p"},"m365 cli completion pwsh update")," in the command line. After running this command, it's not necessary to restart PowerShell to see the latest changes."),(0,l.kt)("h3",{id:"disable-powershell-completion"},"Disable PowerShell completion"),(0,l.kt)("p",null,"To disable CLI for Microsoft 365 command completion in your PowerShell profile, open the profile file in a code editor, and remove the reference to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Register-CLIM365Completion.ps1")," script. Restart PowerShell for the changes to take effect."))}d.isMDXComponent=!0}}]);