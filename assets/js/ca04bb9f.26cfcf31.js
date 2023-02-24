"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[24050],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),i=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=i(e.components);return o.createElement(l.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=i(t),m=n,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return t?o.createElement(g,s(s({ref:r},p),{},{components:t})):o.createElement(g,s({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=m;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u[c]="string"==typeof e?e:n,s[1]=u;for(var i=2;i<a;i++)s[i]=t[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36014:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var o=t(87462),n=(t(67294),t(3905));const a={},s="aad o365group user list",u={unversionedId:"cmd/aad/o365group/o365group-user-list",id:"cmd/aad/o365group/o365group-user-list",title:"aad o365group user list",description:"Lists users for the specified Microsoft 365 group",source:"@site/docs/cmd/aad/o365group/o365group-user-list.md",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-user-list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-user-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-user-list.md",tags:[],version:"current",lastUpdatedAt:1630582217,formattedLastUpdatedAt:"Sep 2, 2021",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group user add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-user-add"},next:{title:"aad o365group user remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-user-remove"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],p={toc:i},c="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-o365group-user-list"},"aad o365group user list"),(0,n.kt)("p",null,"Lists users for the specified Microsoft 365 group"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group user list [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-i, --groupId <groupId>"),"\n: The ID of the Microsoft 365 group for which to list users"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-r, --role [role]"),"\n: Filter the results to only users with the given role: ",(0,n.kt)("inlineCode",{parentName:"p"},"Owner,Member,Guest")),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"List all users and their role in the specified Microsoft 365 group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group user list --groupId '00000000-0000-0000-0000-000000000000'\n")),(0,n.kt)("p",null,"List all owners and their role in the specified Microsoft 365 group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group user list --groupId '00000000-0000-0000-0000-000000000000' --role Owner\n")),(0,n.kt)("p",null," List all guests and their role in the specified Microsoft 365 group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group user list --groupId '00000000-0000-0000-0000-000000000000' --role Guest\n")))}d.isMDXComponent=!0}}]);