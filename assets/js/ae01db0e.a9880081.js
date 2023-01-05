"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={},i="aad o365group recyclebinitem list",l={unversionedId:"cmd/aad/o365group/o365group-recyclebinitem-list",id:"cmd/aad/o365group/o365group-recyclebinitem-list",title:"aad o365group recyclebinitem list",description:"Lists Groups from the recycle bin in the current tenant",source:"@site/docs/cmd/aad/o365group/o365group-recyclebinitem-list.md",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-recyclebinitem-list",permalink:"/cmd/aad/o365group/o365group-recyclebinitem-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-recyclebinitem-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group recyclebinitem clear",permalink:"/cmd/aad/o365group/o365group-recyclebinitem-clear"},next:{title:"aad o365group recyclebinitem remove",permalink:"/cmd/aad/o365group/o365group-recyclebinitem-remove"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-o365group-recyclebinitem-list"},"aad o365group recyclebinitem list"),(0,n.kt)("p",null,"Lists Groups from the recycle bin in the current tenant"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group recyclebinitem list [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-d, --groupDisplayName [groupDisplayName]"),"\n: Lists groups with DisplayName starting with the specified value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-m, --groupMailNickname [groupMailNickname]"),"\n: Lists groups with MailNickname starting with the specified value"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"List all deleted Microsoft 365 Groups in the tenant"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group recyclebinitem list\n")),(0,n.kt)("p",null,"List deleted Microsoft 365 Groups with display name starting with ",(0,n.kt)("em",{parentName:"p"},"Project")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group recyclebinitem list --groupDisplayName Project\n")),(0,n.kt)("p",null,"List deleted Microsoft 365 Groups mail nick name starting with ",(0,n.kt)("em",{parentName:"p"},"team")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group recyclebinitem list --groupMailNickname team\n")),(0,n.kt)("p",null,"List deleted Microsoft 365 Groups mail nick name starting with ",(0,n.kt)("em",{parentName:"p"},"team")," and with display name starting with ",(0,n.kt)("em",{parentName:"p"},"Project")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group recyclebinitem list --groupMailNickname team --groupDisplayName Project\n")))}m.isMDXComponent=!0}}]);