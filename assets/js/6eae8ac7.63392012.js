"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[53930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(k,p(p({ref:t},i),{},{components:n})):a.createElement(k,p({ref:t},i))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:r,p[1]=d;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26054:(e,t,n)=>{n.d(t,{ZP:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}d.isMDXComponent=!0},48578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var a=n(87462),r=(n(67294),n(3905)),o=n(26054);const p={},d="spo cdn set",l={unversionedId:"cmd/spo/cdn/cdn-set",id:"cmd/spo/cdn/cdn-set",title:"spo cdn set",description:"Enable or disable the specified Microsoft 365 CDN",source:"@site/docs/cmd/spo/cdn/cdn-set.mdx",sourceDirName:"cmd/spo/cdn",slug:"/cmd/spo/cdn/cdn-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/cdn/cdn-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/cdn/cdn-set.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo cdn get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/cdn/cdn-get"},next:{title:"spo cdn origin add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/cdn/cdn-origin-add"}},s={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],c={toc:i},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-cdn-set"},"spo cdn set"),(0,r.kt)("p",null,"Enable or disable the specified Microsoft 365 CDN"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-e, --enabled <enabled>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Set to true to enable CDN or to false to disable it. Valid values are ",(0,r.kt)("code",{parentName:"p"},"true,false"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-t, --type [type]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Type of CDN to manage. ",(0,r.kt)("code",{parentName:"p"},"Public"),", ",(0,r.kt)("code",{parentName:"p"},"Private"),", ",(0,r.kt)("code",{parentName:"p"},"Both"),". Default ",(0,r.kt)("code",{parentName:"p"},"Public"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--noDefaultOrigins"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"pass to not create the default Origins"))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-t, --type")," option you can choose whether you want to manage the settings of the Public (default), Private CDN or both. If you don't use the option, the command will use the Public CDN."),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-e, --enabled")," option you can specify whether the given CDN type should be enabled or disabled. Use true to enable the specified CDN and false to disable it."),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--noDefaultOrigins")," option you can specify to skip the creation of the default origins."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To use this command you have to have permissions to access the tenant admin site.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Enable the Microsoft 365 Public CDN on the current tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn set --type Public --enabled true\n")),(0,r.kt)("p",null,"Disable the Microsoft 365 Public CDN on the current tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn set --type Public --enabled false\n")),(0,r.kt)("p",null,"Enable the Microsoft 365 Private CDN on the current tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn set --type Private --enabled true\n")),(0,r.kt)("p",null,"Enable the Microsoft 365 Private and Public CDN on the current tenant with default origins"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn set --type Both --enabled true\n")),(0,r.kt)("p",null,"Enable the Microsoft 365 Private and Public CDN on the current tenant without default origins"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn set --type Both --enabled true --noDefaultOrigins\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use Microsoft 365 CDN with SharePoint Online: ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/microsoft-365/enterprise/use-microsoft-365-cdn-with-spo?view=o365-worldwide"},"https://learn.microsoft.com/microsoft-365/enterprise/use-microsoft-365-cdn-with-spo?view=o365-worldwide"))))}u.isMDXComponent=!0}}]);