"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),p=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(r.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(r,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={title:"Use the CLI",sidebar_position:2},s="Use the CLI for Microsoft 365",l={unversionedId:"user-guide/using-cli",id:"user-guide/using-cli",title:"Use the CLI",description:"Information in this section will help you understand how the CLI for Microsoft 365 works and how you can use it most effectively.",source:"@site/docs/user-guide/using-cli.md",sourceDirName:"user-guide",slug:"/user-guide/using-cli",permalink:"/cli-microsoft365-docusaurus/user-guide/using-cli",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/user-guide/using-cli.md",tags:[],version:"current",lastUpdatedAt:1672829078,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:2,frontMatter:{title:"Use the CLI",sidebar_position:2},sidebar:"userGuide",previous:{title:"Install the CLI",permalink:"/cli-microsoft365-docusaurus/user-guide/installing-cli"},next:{title:"Run CLI in a Docker Container",permalink:"/cli-microsoft365-docusaurus/user-guide/run-cli-in-docker-container"}},r={},p=[{value:"Start the CLI",id:"start-the-cli",level:2},{value:"List available commands",id:"list-available-commands",level:2},{value:"Get command help",id:"get-command-help",level:2},{value:"Required and optional command options",id:"required-and-optional-command-options",level:2},{value:"Boolean options (true/false)",id:"boolean-options-truefalse",level:2},{value:"Values with quotes",id:"values-with-quotes",level:2},{value:"Values starting with a dash (-)",id:"values-starting-with-a-dash--",level:2},{value:"Working with SharePoint URLs in <code>spo</code> commands",id:"working-with-sharepoint-urls-in-spo-commands",level:2},{value:"Passing complex content into CLI options",id:"passing-complex-content-into-cli-options",level:2},{value:"Escaping double quotes in PowerShell",id:"escaping-double-quotes-in-powershell",level:2},{value:"Method 1: Escaping twice",id:"method-1-escaping-twice",level:3},{value:"Method 2: Using verbatim strings with single quotes",id:"method-2-using-verbatim-strings-with-single-quotes",level:3},{value:"<code>@meId</code> and <code>@meUserName</code> tokens",id:"meid-and-meusername-tokens",level:2},{value:"Verbose and debug mode",id:"verbose-and-debug-mode",level:2},{value:"Command completion",id:"command-completion",level:2},{value:"Disable automatic checking for updates",id:"disable-automatic-checking-for-updates",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-the-cli-for-microsoft-365"},"Use the CLI for Microsoft 365"),(0,a.kt)("p",null,"Information in this section will help you understand how the CLI for Microsoft 365 works and how you can use it most effectively."),(0,a.kt)("h2",{id:"start-the-cli"},"Start the CLI"),(0,a.kt)("p",null,"To use CLI for Microsoft 365, execute specific commands directly from the command line."),(0,a.kt)("script",{id:"asciicast-445654",src:"https://asciinema.org/a/445654.js",async:!0}),(0,a.kt)("p",null,"!!! attention\nWhen using the CLI for Microsoft 365, each CLI command must be prepended with ",(0,a.kt)("inlineCode",{parentName:"p"},"microsoft365")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"m365")," for short. Without this, your shell will not know how the particular command should be executed."),(0,a.kt)("p",null,"Using the CLI for Microsoft 365 directly from the command line is invaluable if you want to write scripts consisting of a number of CLI for Microsoft 365 and other commands combined together. Additionally, you keep the access to all system commands and other CLIs available on your computer."),(0,a.kt)("h2",{id:"list-available-commands"},"List available commands"),(0,a.kt)("p",null,"To list commands available with the CLI for Microsoft 365 type ",(0,a.kt)("inlineCode",{parentName:"p"},"help")," in the CLI prompt, or ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 help")," directly in your shell."),(0,a.kt)("p",null,"Commands in the CLI for Microsoft 365 are combined into groups. You can list the commands available in the particular group by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"help <group>"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"help spo")," to list all commands related to SharePoint Online, or ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 help spo")," directly in your shell."),(0,a.kt)("script",{id:"asciicast-445655",src:"https://asciinema.org/a/445655.js",async:!0}),(0,a.kt)("h2",{id:"get-command-help"},"Get command help"),(0,a.kt)("p",null,"Each command in the CLI for Microsoft 365 comes with help describing the command's purpose, available options and any other relevant details as well as related resources. To get the basic help information with command's description and available options, type ",(0,a.kt)("inlineCode",{parentName:"p"},"help <command>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 help <command>")," in the shell, for example to get help for the ",(0,a.kt)("inlineCode",{parentName:"p"},"spo cdn get")," command, type in the shell ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 help spo cdn get"),"."),(0,a.kt)("p",null,"To get the complete help information including background information, examples and links to related information, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," option, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 spo cdn get --help"),". This ability is also useful if you've already typed some options and don't want to lose your input but want to access the help, for example: ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 spo cdn get --type Private --help"),"."),(0,a.kt)("script",{id:"asciicast-445656",src:"https://asciinema.org/a/445656.js",async:!0}),(0,a.kt)("h2",{id:"required-and-optional-command-options"},"Required and optional command options"),(0,a.kt)("p",null,"Commands in the CLI for Microsoft 365 often contain options that determine what the particular command should do. Command options vary from the URL of the site for which you would like to retrieve more information, to the type of Microsoft 365 CDN that you would like to manage."),(0,a.kt)("p",null,"Some options are required and necessary for the particular command to execute, while other are optional. When listing available options for the particular command, CLI for Microsoft 365 follows the naming convention where required options are wrapped in angle brackets (",(0,a.kt)("inlineCode",{parentName:"p"},"< >"),") while optional options are wrapped in square brackets (",(0,a.kt)("inlineCode",{parentName:"p"},"[ ]"),"). For example, in the ",(0,a.kt)("inlineCode",{parentName:"p"},"spo cdn origin add")," command, the origin you want to add is required (",(0,a.kt)("inlineCode",{parentName:"p"},"-r, --origin <origin>"),"), while the type of CDN for which this origin should be added is optional (",(0,a.kt)("inlineCode",{parentName:"p"},"-t, --type [type]"),") and its value defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"Public"),"."),(0,a.kt)("h2",{id:"boolean-options-truefalse"},"Boolean options (true/false)"),(0,a.kt)("p",null,"Some options in the CLI expect boolean values like ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". The CLI for Microsoft 365 has the following definition for booleans:"),(0,a.kt)("p",null,'!!! info "Definition of Booleans"\nBooleans are case-insensitive and are represented by the following values.',(0,a.kt)("br",{parentName:"p"}),"\n","True: 1, yes, true, on",(0,a.kt)("br",{parentName:"p"}),"\n","False: 0, no, false, off"),(0,a.kt)("p",null,"This means that whenever you need to pass a boolean value to a command, you can use any of the values listed above. For example, to configure if Planner is allowed in your organization you can execute the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner tenant settings set --isPlannerAllowed true\nm365 planner tenant settings set --isPlannerAllowed 1\nm365 planner tenant settings set --isPlannerAllowed yes\nm365 planner tenant settings set --isPlannerAllowed on\nm365 planner tenant settings set --isPlannerAllowed TRUE\n\nm365 planner tenant settings set --isPlannerAllowed false\nm365 planner tenant settings set --isPlannerAllowed 0\nm365 planner tenant settings set --isPlannerAllowed no\nm365 planner tenant settings set --isPlannerAllowed off\nm365 planner tenant settings set --isPlannerAllowed FALSE\n")),(0,a.kt)("p",null,"Additionally, in PowerShell you can use boolean values ",(0,a.kt)("inlineCode",{parentName:"p"},"$true")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$false")," as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},"m365 planner tenant settings set --isPlannerAllowed $true\nm365 planner tenant settings set --isPlannerAllowed $false\n")),(0,a.kt)("h2",{id:"values-with-quotes"},"Values with quotes"),(0,a.kt)("p",null,"In cases, when the option's value contains spaces, it should be wrapped in quotes. For example, to create a modern team site for the ",(0,a.kt)("em",{parentName:"p"},"CLI for Microsoft 365")," team, you would execute in the shell:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site add --alias office365cli --title "CLI for Microsoft 365"\n')),(0,a.kt)("p",null,"When the value, that you want to provide contains quotes, it needs to be wrapped in quotes as well, for example to pass a JSON value in the CLI prompt, you would execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo sitescript add --title "Contoso" --description "Contoso theme script" --content \'{"abc": "def"}\'\n')),(0,a.kt)("h2",{id:"values-starting-with-a-dash--"},"Values starting with a dash (-)"),(0,a.kt)("p",null,"In cases, when the option's value starts with a dash (-), specify the option's value using the ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," operator. For example, to get a planner task with ID ",(0,a.kt)("em",{parentName:"p"},"-9rMKQooUjZdxgv1qQVZYABEuw"),", execute in the shell:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner task get --id=-9rMKQooUjZdxgv1qQVZYABEuw\n")),(0,a.kt)("h2",{id:"working-with-sharepoint-urls-in-spo-commands"},"Working with SharePoint URLs in ",(0,a.kt)("inlineCode",{parentName:"h2"},"spo")," commands"),(0,a.kt)("p",null,"CLI for Microsoft 365 contains a number of commands for managing SharePoint Online. Each of these commands requires you to specify the site or web on which you want to execute the command. For example, to get information about a site collection located at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://contoso.sharepoint.com/sites/contoso"),", you'd execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site get --url https://contoso.sharepoint.com/sites/contoso\n")),(0,a.kt)("p",null,"If you executed an ",(0,a.kt)("inlineCode",{parentName:"p"},"spo")," command previously, CLI for Microsoft 365 already knows the hostname of your SharePoint Online tenant. In such case, you can use a server-relative URL as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site get --url /sites/contoso\n")),(0,a.kt)("p",null,"If you try to use a server-relative URL but CLI for Microsoft 365 doesn't know of your SharePoint Online URL yet, you will see an error prompting you to either use an absolute URL or set the SPO URL using the ",(0,a.kt)("inlineCode",{parentName:"p"},"spo set")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo set --url https://contoso.sharepoint.com\n")),(0,a.kt)("p",null,"You can also execute a command like ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 spo site list")," that will automatically detect your SharePoint Online tenant URL for you."),(0,a.kt)("p",null,"To check if CLI detected the SPO URL previously, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 spo get")," command."),(0,a.kt)("h2",{id:"passing-complex-content-into-cli-options"},"Passing complex content into CLI options"),(0,a.kt)("p",null,"When passing complex content into CLI options, such as JSON strings, you will need to properly escape nested quotes. The exact way to do it, depends on the shell that you're using. Alternatively, you can choose to pass complex content by storing the complex content in a file and passing the path to the file prefixed with an ",(0,a.kt)("inlineCode",{parentName:"p"},"@"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo sitescript add --title "Contoso" --description "Contoso theme script" --content @themeScript.json\n')),(0,a.kt)("p",null,"CLI for Microsoft 365 will load the contents from the specified file and use it in the command that you specified."),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@")," token in any command, with any option that accepts a value."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@")," is a special character in PowerShell. If you use CLI for Microsoft 365 in PowerShell and want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@")," token, you'll need to escape with a backtick, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'m365 spo sitescript add --title "Contoso" --description "Contoso theme script" --content `@themeScript.json\n')),(0,a.kt)("h2",{id:"escaping-double-quotes-in-powershell"},"Escaping double quotes in PowerShell"),(0,a.kt)("p",null,"PowerShell Versions 5 to 7.2 have an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PowerShell/PowerShell/issues/1995"},"issue with escaping double quotes"),". Command arguments are being parsed twice for tools like the CLI. Once by PowerShell and once by the CLI for Microsoft 365 executable that's being called by PowerShell. The result is that you need to escape quotes twice. The issue should be resolved from version 7.3."),(0,a.kt)("p",null,"As an example, see the following code: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},'m365 spo listitem set --webUrl "<some-url>" --id 1 --listTitle somelist --SomeField "{ `"test1`": `"test2`" }"\n')),(0,a.kt)("p",null,"While correctly escaped, it would result in the following being saved to sharepoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"{ test1: test2 }"),". The double quotes are missing."),(0,a.kt)("p",null,"The following two methods resolve this:"),(0,a.kt)("h3",{id:"method-1-escaping-twice"},"Method 1: Escaping twice"),(0,a.kt)("p",null,"Escape the double quotes twice. Once for powershell using the backtick (`) and once for the executable, using a backslash."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},'m365 spo listitem set --webUrl "<some-url>" --id 1 --listTitle somelist --SomeField "{ \\`"test1\\`": \\`"test2\\`" }"\n')),(0,a.kt)("h3",{id:"method-2-using-verbatim-strings-with-single-quotes"},"Method 2: Using verbatim strings with single quotes"),(0,a.kt)("p",null,"Use single quotes to start a verbatim string. The double quotes need not be escaped for powershell using the backtick. However, they do need to be escaped for the executable, using a backslash."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},'m365 spo listitem set --webUrl "<some-url>" --id 1 --listTitle somelist --SomeField \'{ \\"test1\\": \\"test2\\" }\'\n')),(0,a.kt)("p",null,"!!! info\nRemember, instead of escaping, it's also possible to ",(0,a.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#passing-complex-content-into-cli-options"},"feed complex content from a file"),". "),(0,a.kt)("h2",{id:"meid-and-meusername-tokens"},(0,a.kt)("inlineCode",{parentName:"h2"},"@meId")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"@meUserName")," tokens"),(0,a.kt)("p",null,"CLI for Microsoft 365 contains a number of commands that require you to provide a user ID or username. If you want to pass these values for the current user, instead of looking them up, you can use the built-in tokens. With the ",(0,a.kt)("inlineCode",{parentName:"p"},"@meId")," token you can specify the ID of the current user. Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@meUserName")," token you can specify the username of the current user."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad user get --id "@meId"\n')),(0,a.kt)("p",null,"will execute as ",(0,a.kt)("inlineCode",{parentName:"p"},'m365 aad user get --id "d1a97db6-ab08-41a9-94fe-bfa104e83f69"'),"."),(0,a.kt)("p",null,"When you execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad user get --userName "@meUserName"\n')),(0,a.kt)("p",null,"it will run as ",(0,a.kt)("inlineCode",{parentName:"p"},'m365 aad user get --userName "admin@contoso.onmicrosoft.com"'),"."),(0,a.kt)("p",null,"Both tokens are resolved based on the information stored in the access token. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@")," token in any command, with any option that accepts a value."),(0,a.kt)("h2",{id:"verbose-and-debug-mode"},"Verbose and debug mode"),(0,a.kt)("p",null,"By default, commands output only the information returned by the corresponding Microsoft 365 API, whether the command result or error. You can choose for a more user-friendly output by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--verbose")," option or setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_VERBOSE")," environment variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". For example: by default, when checking status of the Microsoft 365 Public CDN, you would see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo cdn get\ntrue\n")),(0,a.kt)("p",null,"After adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--verbose")," option, the output would change to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo cdn get --verbose\nRetrieving status of Public CDN...\nPublic CDN at https://contoso-admin.sharepoint.com is enabled\n")),(0,a.kt)("p",null,"If you're experiencing problems when using the CLI for Microsoft 365, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--debug")," option or set the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_DEBUG")," environment variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". On top of the output from the verbose mode, the debug mode will provide you with detailed information about all requests and responses from the Microsoft 365 APIs used by the command."),(0,a.kt)("h2",{id:"command-completion"},"Command completion"),(0,a.kt)("p",null,"To help you use its commands, CLI for Microsoft 365 offers you the ability to autocomplete commands and options that you're typing in the prompt. Some additional setup, specific for the shell and terminal that you use, is required to enable command completion for CLI for Microsoft 365. For more information on configuring command completion for the CLI for Microsoft 365 see the ",(0,a.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/completion"},"command completion")," article."),(0,a.kt)("h2",{id:"disable-automatic-checking-for-updates"},"Disable automatic checking for updates"),(0,a.kt)("p",null,"Each time you run CLI for Microsoft 365, it will automatically check if there is a new version available and prompt you with update instructions if that's the case. If you use CLI for Microsoft 365 in CI/CD or in scripts and want to make it run faster, you can disable the check by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_NOUPDATE")," environment variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."))}u.isMDXComponent=!0}}]);