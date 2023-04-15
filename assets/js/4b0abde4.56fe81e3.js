"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[10246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||s;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={},o="spo site inplacerecordsmanagement set",i={unversionedId:"cmd/spo/site/site-inplacerecordsmanagement-set",id:"cmd/spo/site/site-inplacerecordsmanagement-set",title:"spo site inplacerecordsmanagement set",description:"Activates or deactivates in-place records management for a site collection",source:"@site/docs/cmd/spo/site/site-inplacerecordsmanagement-set.md",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-inplacerecordsmanagement-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-inplacerecordsmanagement-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-inplacerecordsmanagement-set.md",tags:[],version:"current",lastUpdatedAt:1649592241,formattedLastUpdatedAt:"Apr 10, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo site hubsite theme sync",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-hubsite-theme-sync"},next:{title:"spo site list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-list"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],l={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-site-inplacerecordsmanagement-set"},"spo site inplacerecordsmanagement set"),(0,a.kt)("p",null,"Activates or deactivates in-place records management for a site collection"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site inplacerecordsmanagement set [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --siteUrl <siteUrl>"),"\n: The URL of the site on which to activate or deactivate in-place records management"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enabled <enabled>"),"\n: Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to activate in-place records management and to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to deactivate it"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Activates in-place records management for site ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/team-a"},"https://contoso.sharepoint.com/sites/team-a"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site inplacerecordsmanagement set --siteUrl https://contoso.sharepoint.com/sites/team-a --enabled true\n")),(0,a.kt)("p",null,"Deactivates in-place records management for site ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/team-a"},"https://contoso.sharepoint.com/sites/team-a"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site inplacerecordsmanagement set --siteUrl https://contoso.sharepoint.com/sites/team-a --enabled false\n")))}d.isMDXComponent=!0}}]);