"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97025],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),p=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return o.createElement(i.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=n,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return t?o.createElement(f,c(c({ref:r},u),{},{components:t})):o.createElement(f,c({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[s]="string"==typeof e?e:n,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95684:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(87462),n=(t(67294),t(3905));const a={},c="aad o365group recyclebinitem clear",l={unversionedId:"cmd/aad/o365group/o365group-recyclebinitem-clear",id:"cmd/aad/o365group/o365group-recyclebinitem-clear",title:"aad o365group recyclebinitem clear",description:"Clears Microsoft 365 Groups from the recycle bin in the current tenant",source:"@site/docs/cmd/aad/o365group/o365group-recyclebinitem-clear.md",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-recyclebinitem-clear",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-recyclebinitem-clear",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-recyclebinitem-clear.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-list"},next:{title:"aad o365group recyclebinitem list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-recyclebinitem-list"}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p};function s(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-o365group-recyclebinitem-clear"},"aad o365group recyclebinitem clear"),(0,n.kt)("p",null,"Clears Microsoft 365 Groups from the recycle bin in the current tenant"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group recyclebinitem clear [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation to clear the recycle bin items."),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Removes all deleted Microsoft 365 Groups in the tenant. Will prompt for confirmation before permanently removing groups."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group recyclebinitem clear\n")),(0,n.kt)("p",null,"Removes all deleted Microsoft 365 Groups in the tenant. Will NOT prompt for confirmation before permanently removing groups."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group recyclebinitem clear --confirm\n")))}s.isMDXComponent=!0}}]);