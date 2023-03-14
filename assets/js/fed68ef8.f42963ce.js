"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[27576],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>k});var n=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(o),d=l,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return o?n.createElement(k,r(r({ref:t},c),{},{components:o})):n.createElement(k,r({ref:t},c))}));function k(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=o.length,r=new Array(a);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<a;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},37884:(e,t,o)=>{o.d(t,{ZP:()=>i});var n=o(87462),l=(o(67294),o(3905));const a={toc:[]},r="wrapper";function i(e){let{components:t,...o}=e;return(0,l.kt)(r,(0,n.Z)({},a,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-h, --help [help]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,l.kt)("code",null,"options"),", ",(0,l.kt)("code",null,"examples"),", ",(0,l.kt)("code",null,"remarks"),", ",(0,l.kt)("code",null,"response"),", ",(0,l.kt)("code",null,"full"),". Default is ",(0,l.kt)("code",null,"full"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--query [query]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"JMESPath query string. See ",(0,l.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-o, --output [output]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output type. ",(0,l.kt)("code",null,"json"),", ",(0,l.kt)("code",null,"text"),", ",(0,l.kt)("code",null,"csv"),", ",(0,l.kt)("code",null,"md"),". Default is ",(0,l.kt)("code",null,"json"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--verbose"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with verbose logging.")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--debug"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with debug logging."))))}i.isMDXComponent=!0},79469:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(87462),l=(o(67294),o(3905)),a=o(37884);const r={},i="spo site appcatalog remove",s={unversionedId:"cmd/spo/site/site-appcatalog-remove",id:"cmd/spo/site/site-appcatalog-remove",title:"spo site appcatalog remove",description:"Removes site collection app catalog from the specified site",source:"@site/docs/cmd/spo/site/site-appcatalog-remove.mdx",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-appcatalog-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-appcatalog-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-appcatalog-remove.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo site appcatalog list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-appcatalog-list"},next:{title:"spo site apppermission add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-apppermission-add"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...o}=e;return(0,l.kt)(m,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spo-site-appcatalog-remove"},"spo site appcatalog remove"),(0,l.kt)("p",null,"Removes site collection app catalog from the specified site"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site appcatalog remove [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("dl",null,(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-u, --siteUrl <siteUrl>"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"URL of the site collection containing the app catalog to disable"))),(0,l.kt)(a.ZP,{mdxType:"Global"}),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"While the command uses the term ",(0,l.kt)("em",{parentName:"p"},"'remove'"),", like its equivalent PowerShell cmdlet, it does not remove the special library ",(0,l.kt)("strong",{parentName:"p"},"Apps for SharePoint")," from the site collection. Instead, it disables the site collection app catalog in that site. Packages deployed to the app catalog are not available within the site collection."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"To use this command you have to have permissions to access the tenant admin site.")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Remove the site collection app catalog from specified site"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site appcatalog remove --siteUrl https://contoso.sharepoint/sites/site\n")),(0,l.kt)("h2",{id:"more-information"},"More information"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use the site collection app catalog: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/general-development/site-collection-app-catalog"},"https://docs.microsoft.com/en-us/sharepoint/dev/general-development/site-collection-app-catalog"))))}d.isMDXComponent=!0}}]);