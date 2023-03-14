"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[53326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),i=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?l.createElement(f,p(p({ref:t},c),{},{components:n})):l.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,p[1]=a;for(var i=2;i<r;i++)p[i]=n[i];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>a});var l=n(87462),o=(n(67294),n(3905));const r={toc:[]},p="wrapper";function a(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,l.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}a.isMDXComponent=!0},6714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var l=n(87462),o=(n(67294),n(3905)),r=n(37884);const p={},a="spo app instance list",s={unversionedId:"cmd/spo/app/app-instance-list",id:"cmd/spo/app/app-instance-list",title:"spo app instance list",description:"Retrieve apps installed in a site",source:"@site/docs/cmd/spo/app/app-instance-list.mdx",sourceDirName:"cmd/spo/app",slug:"/cmd/spo/app/app-instance-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-instance-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/app/app-instance-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo app install",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-install"},next:{title:"spo app list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/app/app-list"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-app-instance-list"},"spo app instance list"),(0,o.kt)("p",null,"Retrieve apps installed in a site"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app instance list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --siteUrl <siteUrl>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"URL of the site collection to retrieve the apps for"))),(0,o.kt)(r.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Return a list of installed apps on site ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/site1"},"https://contoso.sharepoint.com/sites/site1")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo app instance list --siteUrl https://contoso.sharepoint.com/sites/site1\n")))}m.isMDXComponent=!0}}]);