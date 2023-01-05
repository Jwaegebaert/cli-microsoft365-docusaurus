"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,y=l["".concat(s,".").concat(m)]||l[m]||d[m]||c;return n?o.createElement(y,p(p({ref:t},i),{},{components:n})):o.createElement(y,p({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,p=new Array(c);p[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[l]="string"==typeof e?e:r,p[1]=a;for(var u=2;u<c;u++)p[u]=n[u];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const c={},p="spo contenttypehub get",a={unversionedId:"cmd/spo/contenttypehub/contenttypehub-get",id:"cmd/spo/contenttypehub/contenttypehub-get",title:"spo contenttypehub get",description:"Returns the URL of the SharePoint Content Type Hub of the Tenant",source:"@site/docs/cmd/spo/contenttypehub/contenttypehub-get.md",sourceDirName:"cmd/spo/contenttypehub",slug:"/cmd/spo/contenttypehub/contenttypehub-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/contenttypehub/contenttypehub-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/contenttypehub/contenttypehub-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo contenttype set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/contenttype/contenttype-set"},next:{title:"spo customaction add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/customaction/customaction-add"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],i={toc:u};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-contenttypehub-get"},"spo contenttypehub get"),(0,r.kt)("p",null,"Returns the URL of the SharePoint Content Type Hub of the Tenant"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttypehub get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Retrieve the Content Type Hub URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttypehub get\n")))}l.isMDXComponent=!0}}]);