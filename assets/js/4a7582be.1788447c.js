"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[67704],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)a=p[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)a=p[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(a),u=n,k=l["".concat(s,".").concat(u)]||l[u]||m[u]||p;return a?o.createElement(k,r(r({ref:t},d),{},{components:a})):o.createElement(k,r({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,r=new Array(p);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:n,r[1]=i;for(var c=2;c<p;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>i});var o=a(87462),n=(a(67294),a(3905));const p={toc:[]},r="wrapper";function i(e){let{components:t,...a}=e;return(0,n.kt)(r,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",{parentName:"p"},"options"),", ",(0,n.kt)("code",{parentName:"p"},"examples"),", ",(0,n.kt)("code",{parentName:"p"},"remarks"),", ",(0,n.kt)("code",{parentName:"p"},"response"),", ",(0,n.kt)("code",{parentName:"p"},"full"),". Default is ",(0,n.kt)("code",{parentName:"p"},"full"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--query [query]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,n.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output type. ",(0,n.kt)("code",{parentName:"p"},"json"),", ",(0,n.kt)("code",{parentName:"p"},"text"),", ",(0,n.kt)("code",{parentName:"p"},"csv"),", ",(0,n.kt)("code",{parentName:"p"},"md"),". Default ",(0,n.kt)("code",{parentName:"p"},"json"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--verbose"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--debug"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}i.isMDXComponent=!0},79866:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(87462),n=(a(67294),a(3905)),p=a(26054);const r={},i="spo applicationcustomizer add",s={unversionedId:"cmd/spo/applicationcustomizer/applicationcustomizer-add",id:"cmd/spo/applicationcustomizer/applicationcustomizer-add",title:"spo applicationcustomizer add",description:"Add an application customizer to a site.",source:"@site/docs/cmd/spo/applicationcustomizer/applicationcustomizer-add.mdx",sourceDirName:"cmd/spo/applicationcustomizer",slug:"/cmd/spo/applicationcustomizer/applicationcustomizer-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/applicationcustomizer/applicationcustomizer-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/applicationcustomizer/applicationcustomizer-add.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo app teamspackage download",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-teamspackage-download"},next:{title:"spo applicationcustomizer get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/applicationcustomizer/applicationcustomizer-get"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],l={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-applicationcustomizer-add"},"spo applicationcustomizer add"),(0,n.kt)("p",null,"Add an application customizer to a site."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo applicationcustomizer add [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-t, --title <title>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The title of the application customizer.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"URL of the site.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-i, --clientSideComponentId <clientSideComponentId>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Client-side component ID of the application customizer (GUID).")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--clientSideComponentProperties [clientSideComponentProperties]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"JSON string with application customizer properties")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-s, --scope [scope]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Scope of the application customizer. Allowed values: ",(0,n.kt)("code",{parentName:"p"},"Site"),", ",(0,n.kt)("code",{parentName:"p"},"Web"),". Defaults to ",(0,n.kt)("code",{parentName:"p"},"Site"),"."))),(0,n.kt)(p.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Running this command from the Windows Command Shell (cmd.exe) or PowerShell for Windows OS XP, 7, 8, 8.1 without bash installed might require additional formatting for command options that have JSON, XML or JavaScript values because the command shell treats quotes differently. For example, this is how an application customizer can be created from the Windows cmd.exe:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo applicationcustomizer add --webUrl https://contoso.sharepoint.com/sites/test --title "YourAppCustomizer" --clientSideComponentId b41916e7-e69d-467f-b37f-ff8ecf8f99f2 --clientSideComponentProperties \'{\\"testMessage\\":\\"Test message\\"}\'\n')),(0,n.kt)("p",null,"Note, how the clientSideComponentProperties option has escaped double quotes ",(0,n.kt)("inlineCode",{parentName:"p"},'\'{\\"testMessage\\":\\"Test message\\"}\'')," compared to execution from bash ",(0,n.kt)("inlineCode",{parentName:"p"},'\'{"testMessage":"Test message"}\''),"."),(0,n.kt)("admonition",{title:"Escaping JSON in PowerShell",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"When using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--clientSideComponentProperties")," option it's possible to enter a JSON string. In PowerShell 5 to 7.2 ",(0,n.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#escaping-double-quotes-in-powershell"},"specific escaping rules")," apply due to an issue. Remember that you can also use ",(0,n.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#passing-complex-content-into-cli-options"},"file tokens")," instead.")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Adds an application customizer to the sales site."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo applicationcustomizer add --title 'Some customizer' --clientSideComponentId 799883f5-7962-4384-a10a-105adaec6ffc --webUrl https://contoso.sharepoint.com/sites/sales\n")),(0,n.kt)("p",null,"Adds an application customizer to the sales site with some properties."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo applicationcustomizer add --title 'Some customizer' --clientSideComponentId 799883f5-7962-4384-a10a-105adaec6ffc --clientSideComponentProperties '{ \"someProperty\": \"Some value\" }' --webUrl https://contoso.sharepoint.com/sites/sales --scope 'Site'\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);