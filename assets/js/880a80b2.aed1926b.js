"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[65781],{3905:(t,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},i=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,i=c(t,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,p(p({ref:e},i),{},{components:n})):a.createElement(g,p({ref:e},i))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,p=new Array(o);p[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[u]="string"==typeof t?t:r,p[1]=c;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37316:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},p="spo tenant appcatalogurl get",c={unversionedId:"cmd/spo/tenant/tenant-appcatalogurl-get",id:"cmd/spo/tenant/tenant-appcatalogurl-get",title:"spo tenant appcatalogurl get",description:"Gets the URL of the tenant app catalog",source:"@site/docs/cmd/spo/tenant/tenant-appcatalogurl-get.md",sourceDirName:"cmd/spo/tenant",slug:"/cmd/spo/tenant/tenant-appcatalogurl-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/tenant/tenant-appcatalogurl-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/tenant/tenant-appcatalogurl-get.md",tags:[],version:"current",lastUpdatedAt:1649592241,formattedLastUpdatedAt:"Apr 10, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo tenant appcatalog add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/tenant/tenant-appcatalog-add"},next:{title:"spo tenant applicationcustomizer add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/tenant/tenant-applicationcustomizer-add"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],i={toc:s},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-tenant-appcatalogurl-get"},"spo tenant appcatalogurl get"),(0,r.kt)("p",null,"Gets the URL of the tenant app catalog"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo tenant appcatalogurl get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get the URL of the tenant app catalog"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo tenant appcatalogurl get\n")))}m.isMDXComponent=!0}}]);