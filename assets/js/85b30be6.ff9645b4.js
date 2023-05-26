"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[42045],{3905:(e,t,p)=>{p.d(t,{Zo:()=>m,kt:()=>k});var a=p(67294);function r(e,t,p){return t in e?Object.defineProperty(e,t,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[t]=p,e}function n(e,t){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),p.push.apply(p,a)}return p}function o(e){for(var t=1;t<arguments.length;t++){var p=null!=arguments[t]?arguments[t]:{};t%2?n(Object(p),!0).forEach((function(t){r(e,t,p[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):n(Object(p)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(p,t))}))}return e}function s(e,t){if(null==e)return{};var p,a,r=function(e,t){if(null==e)return{};var p,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)p=n[a],t.indexOf(p)>=0||(r[p]=e[p]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)p=n[a],t.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(r[p]=e[p])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),p=t;return e&&(p="function"==typeof e?e(t):o(o({},t),e)),p},m=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var p=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(p),u=r,k=c["".concat(i,".").concat(u)]||c[u]||d[u]||n;return p?a.createElement(k,o(o({ref:t},m),{},{components:p})):a.createElement(k,o({ref:t},m))}));function k(e,t){var p=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=p.length,o=new Array(n);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<n;l++)o[l]=p[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,p)}u.displayName="MDXCreateElement"},26054:(e,t,p)=>{p.d(t,{ZP:()=>s});var a=p(87462),r=(p(67294),p(3905));const n={toc:[]},o="wrapper";function s(e){let{components:t,...p}=e;return(0,r.kt)(o,(0,a.Z)({},n,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}s.isMDXComponent=!0},24090:(e,t,p)=>{p.r(t),p.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=p(87462),r=(p(67294),p(3905)),n=p(26054);const o={},s="spo site apppermission list",i={unversionedId:"cmd/spo/site/site-apppermission-list",id:"cmd/spo/site/site-apppermission-list",title:"spo site apppermission list",description:"Lists application permissions for a site",source:"@site/docs/cmd/spo/site/site-apppermission-list.mdx",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-apppermission-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-apppermission-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-apppermission-list.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo site apppermission get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-apppermission-get"},next:{title:"spo site apppermission remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-apppermission-remove"}},l={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:m},d="wrapper";function u(e){let{components:t,...p}=e;return(0,r.kt)(d,(0,a.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-site-apppermission-list"},"spo site apppermission list"),(0,r.kt)("p",null,"Lists application permissions for a site"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-u, --siteUrl <siteUrl>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"URL of the site collection to retrieve information for")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --appId [appId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Id of the application to filter by")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-n, --appDisplayName [appDisplayName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Display name of the application to filter by"))),(0,r.kt)(n.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"To filter by an app, pass in either ",(0,r.kt)("inlineCode",{parentName:"p"},"appId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"appDisplayName")," not both"),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Return list of application permissions for the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," site collection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission list --siteUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,r.kt)("p",null,"Return list of application permissions for the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," site collection and filter by an application called Foo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission list --siteUrl https://contoso.sharepoint.com/sites/project-x --appDisplayName Foo\n")))}u.isMDXComponent=!0}}]);