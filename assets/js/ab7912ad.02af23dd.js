"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14821],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=i.createContext({}),l=function(e){var t=i.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(a.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||o;return r?i.createElement(f,s(s({ref:t},p),{},{components:r})):i.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[m]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=r(87462),n=(r(67294),r(3905));const o={},s="spo site recyclebinitem restore",c={unversionedId:"cmd/spo/site/site-recyclebinitem-restore",id:"cmd/spo/site/site-recyclebinitem-restore",title:"spo site recyclebinitem restore",description:"Restores given items from the site recycle bin",source:"@site/docs/cmd/spo/site/site-recyclebinitem-restore.md",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-recyclebinitem-restore",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-recyclebinitem-restore",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-recyclebinitem-restore.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo site recyclebinitem list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-recyclebinitem-list"},next:{title:"spo site remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-remove"}},a={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-site-recyclebinitem-restore"},"spo site recyclebinitem restore"),(0,n.kt)("p",null,"Restores given items from the site recycle bin"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site recyclebinitem restore [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --siteUrl <siteUrl>"),"\n: URL of the site for which to restore the recycle bin items"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-i, --ids <ids>"),"\n: List of ids of items which will be restored from the site recycle bin"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Restore specific items by given ids from recycle bin for site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/site"},"https://contoso.sharepoint.com/site"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site recyclebinitem restore --siteUrl https://contoso.sharepoint.com/site --ids "ae6f97a7-280e-48d6-b481-0ea986c323da,aadbf916-1f71-42ee-abf2-8ee4802ae291"\n')))}m.isMDXComponent=!0}}]);