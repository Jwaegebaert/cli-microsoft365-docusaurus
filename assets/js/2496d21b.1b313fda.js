"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:2},o="Telemetry",i={unversionedId:"about/telemetry",id:"about/telemetry",title:"Telemetry",description:"General info",source:"@site/docs/about/telemetry.md",sourceDirName:"about",slug:"/about/telemetry",permalink:"/cli-microsoft365-docusaurus/about/telemetry",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/about/telemetry.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"about",previous:{title:"Why this CLI",permalink:"/cli-microsoft365-docusaurus/about/why-cli"},next:{title:"Comparison to SharePoint and Microsoft 365 PowerShell",permalink:"/cli-microsoft365-docusaurus/about/comparison-powershell"}},s={},u=[{value:"General info",id:"general-info",level:2},{value:"Example",id:"example",level:2},{value:"Disable telemetry",id:"disable-telemetry",level:2},{value:"Re-enable telemetry",id:"re-enable-telemetry",level:2}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"telemetry"},"Telemetry"),(0,a.kt)("h2",{id:"general-info"},"General info"),(0,a.kt)("p",null,"CLI for Microsoft 365 uses telemetry by default to track the usage within the project. Besides usage statistics, this gives us information to better understand how the CLI for Microsoft 365 is being used and where we can make improvements."),(0,a.kt)("p",null,"It is important to note that we ",(0,a.kt)("strong",{parentName:"p"},"never")," track personal information in our telemetry. For example, we track which command you are using and which command options, but the information passed to these options is never included in the telemetry."),(0,a.kt)("p",null,"To provide an overview, this is what we track when a command is executed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name of the executed command"),(0,a.kt)("li",{parentName:"ul"},"Usage of command options (only usage, ",(0,a.kt)("strong",{parentName:"li"},"not")," data provided with the options)"),(0,a.kt)("li",{parentName:"ul"},"CLI for Microsoft 365 version"),(0,a.kt)("li",{parentName:"ul"},"Node.js version of your environment"),(0,a.kt)("li",{parentName:"ul"},"The type of shell you are using (PowerShell, Zsh, Cmd, Azure Cloud Shell, ...)"),(0,a.kt)("li",{parentName:"ul"},"Whether you are using a Docker container"),(0,a.kt)("li",{parentName:"ul"},"Whether you are using a CI/CD setup")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"An example is worth more than a thousand words. The following example illustrates which telemetry is being collected when executing a command."),(0,a.kt)("p",null,"Pretend we have CLI for Microsoft 365 version 6.0.0 installed within a Node.js v16.13.2 environment. Next, we open a PowerShell window and execute the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo file add --webUrl "https://contoso.sharepoint.com/sites/project-x" --folder "/sites/project-x/Shared Documents" --path "C:\\MS365.jpg" --contentType "Picture" --publish --publishComment "Lorem ipsum"\n')),(0,a.kt)("p",null,"Executing this command will result in the following telemetry being collected:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Telemetry data"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Command name"),(0,a.kt)("td",{parentName:"tr",align:null},"spo file add")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Command options",(0,a.kt)("sup",{parentName:"td",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("td",{parentName:"tr",align:null},"contentType: true",(0,a.kt)("br",null),"checkOut: false",(0,a.kt)("br",null),"checkInComment: false",(0,a.kt)("br",null),"approve: false",(0,a.kt)("br",null),"approveComment: false",(0,a.kt)("br",null),"publish: true",(0,a.kt)("br",null),"publishComment: true",(0,a.kt)("br",null),"query: false",(0,a.kt)("br",null),"output: json",(0,a.kt)("br",null),"verbose: false",(0,a.kt)("br",null),"debug: false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CLI for M365 version"),(0,a.kt)("td",{parentName:"tr",align:null},"6.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node.js version"),(0,a.kt)("td",{parentName:"tr",align:null},"v16.13.2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Shell"),(0,a.kt)("td",{parentName:"tr",align:null},"pwsh.exe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Docker container"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CI/CD setup"),(0,a.kt)("td",{parentName:"tr",align:null},"false")))),(0,a.kt)("h2",{id:"disable-telemetry"},"Disable telemetry"),(0,a.kt)("p",null,"!!! Note\nWe offer the option to disable all telemetry within the project. However, we encourage you to leave it enabled as it helps us to understand the usage and impact of our work."),(0,a.kt)("p",null,"Run the following command to disable the telemetry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 cli config set --key disableTelemetry --value true\n")),(0,a.kt)("h2",{id:"re-enable-telemetry"},"Re-enable telemetry"),(0,a.kt)("p",null,"Run the following command to re-enable the telemetry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 cli config reset --key disableTelemetry\n")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Note that we are only tracking the usage of optional options. Required options are always filled in and therefore there is no added value for us to include them in the telemetry.",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);