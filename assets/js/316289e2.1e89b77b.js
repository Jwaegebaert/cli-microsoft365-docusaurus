"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[87266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=s(n),u=a,f=l["".concat(d,".").concat(u)]||l[u]||m[u]||o;return n?r.createElement(f,p(p({ref:t},i),{},{components:n})):r.createElement(f,p({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[l]="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26054:(e,t,n)=>{n.d(t,{ZP:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",{parentName:"p"},"options"),", ",(0,a.kt)("code",{parentName:"p"},"examples"),", ",(0,a.kt)("code",{parentName:"p"},"remarks"),", ",(0,a.kt)("code",{parentName:"p"},"response"),", ",(0,a.kt)("code",{parentName:"p"},"full"),". Default is ",(0,a.kt)("code",{parentName:"p"},"full"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--query [query]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,a.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output type. ",(0,a.kt)("code",{parentName:"p"},"json"),", ",(0,a.kt)("code",{parentName:"p"},"text"),", ",(0,a.kt)("code",{parentName:"p"},"csv"),", ",(0,a.kt)("code",{parentName:"p"},"md"),". Default ",(0,a.kt)("code",{parentName:"p"},"json"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--verbose"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--debug"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}c.isMDXComponent=!0},84988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>p,metadata:()=>d,toc:()=>i});var r=n(87462),a=(n(67294),n(3905)),o=n(26054);const p={},c="spo cdn get",d={unversionedId:"cmd/spo/cdn/cdn-get",id:"cmd/spo/cdn/cdn-get",title:"spo cdn get",description:"View current status of the specified Microsoft 365 CDN",source:"@site/docs/cmd/spo/cdn/cdn-get.mdx",sourceDirName:"cmd/spo/cdn",slug:"/cmd/spo/cdn/cdn-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/cdn/cdn-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/cdn/cdn-get.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo apppage set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/apppage/apppage-set"},next:{title:"spo cdn set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/cdn/cdn-set"}},s={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],l={toc:i},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-cdn-get"},"spo cdn get"),(0,a.kt)("p",null,"View current status of the specified Microsoft 365 CDN"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn get [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-t, --type [type]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Type of CDN to manage. Allowed values ",(0,a.kt)("code",{parentName:"p"},"Public"),", ",(0,a.kt)("code",{parentName:"p"},"Private"),". Default ",(0,a.kt)("code",{parentName:"p"},"Public"),"."))),(0,a.kt)(o.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-t, --type")," option you can choose whether you want to manage the settings of the Public (default) or Private CDN. If you don't use the option, the command will use the Public CDN."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To use this command you have to have permissions to access the tenant admin site.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Show if the Public CDN is currently enabled or not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn get\n")),(0,a.kt)("p",null,"Show if the Private CDN is currently enabled or not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn get --type Private\n")),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use Microsoft 365 CDN with SharePoint Online: ",(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/microsoft-365/enterprise/use-microsoft-365-cdn-with-spo?view=o365-worldwide"},"https://learn.microsoft.com/microsoft-365/enterprise/use-microsoft-365-cdn-with-spo?view=o365-worldwide"))))}u.isMDXComponent=!0}}]);