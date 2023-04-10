"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[59049],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>f});var o=s(67294);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function p(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function n(e,t){if(null==e)return{};var s,o,i=function(e,t){if(null==e)return{};var s,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)s=r[o],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)s=r[o],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var a=o.createContext({}),l=function(e){var t=o.useContext(a),s=t;return e&&(s="function"==typeof e?e(t):p(p({},t),e)),s},c=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var s=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),m=l(s),d=i,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||r;return s?o.createElement(f,p(p({ref:t},c),{},{components:s})):o.createElement(f,p({ref:t},c))}));function f(e,t){var s=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=s.length,p=new Array(r);p[0]=d;var n={};for(var a in t)hasOwnProperty.call(t,a)&&(n[a]=t[a]);n.originalType=e,n[m]="string"==typeof e?e:i,p[1]=n;for(var l=2;l<r;l++)p[l]=s[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,s)}d.displayName="MDXCreateElement"},5506:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>l});var o=s(87462),i=(s(67294),s(3905));const r={},p="spo site apppermission list",n={unversionedId:"cmd/spo/site/site-apppermission-list",id:"cmd/spo/site/site-apppermission-list",title:"spo site apppermission list",description:"Lists application permissions for a site",source:"@site/docs/cmd/spo/site/site-apppermission-list.md",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-apppermission-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-apppermission-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-apppermission-list.md",tags:[],version:"current",lastUpdatedAt:1614800717,formattedLastUpdatedAt:"Mar 3, 2021",frontMatter:{},sidebar:"commands",previous:{title:"spo site apppermission get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-apppermission-get"},next:{title:"spo site apppermission remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-apppermission-remove"}},a={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...s}=e;return(0,i.kt)(m,(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-site-apppermission-list"},"spo site apppermission list"),(0,i.kt)("p",null,"Lists application permissions for a site"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission list [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-u, --siteUrl <siteUrl>"),"\n: URL of the site collection to retrieve information for"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --appId [appId]"),"\n: Id of the application to filter by"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-n, --appDisplayName [appDisplayName]"),"\n: Display name of the application to filter by"),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"To filter by an app, pass in either ",(0,i.kt)("inlineCode",{parentName:"p"},"appId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"appDisplayName")," not both"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Return list of application permissions for the ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," site collection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission list --siteUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,i.kt)("p",null,"Return list of application permissions for the ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," site collection and filter by an application called Foo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission list --siteUrl https://contoso.sharepoint.com/sites/project-x --appDisplayName Foo\n")))}u.isMDXComponent=!0}}]);