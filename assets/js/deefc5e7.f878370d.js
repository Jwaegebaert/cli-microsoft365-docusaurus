"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[76582],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85056:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={},s="aad user remove",i={unversionedId:"cmd/aad/user/user-remove",id:"cmd/aad/user/user-remove",title:"aad user remove",description:"Removes a specific user",source:"@site/docs/cmd/aad/user/user-remove.md",sourceDirName:"cmd/aad/user",slug:"/cmd/aad/user/user-remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/user/user-remove.md",tags:[],version:"current",lastUpdatedAt:1676830861,formattedLastUpdatedAt:"Feb 19, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad user recyclebinitem remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-recyclebinitem-remove"},next:{title:"aad user set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-set"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:l},m="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aad-user-remove"},"aad user remove"),(0,o.kt)("p",null,"Removes a specific user"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user remove [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--id [id]"),"\n: The ID of the user. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"userName")," but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--userName [userName]"),"\n:\tUser principal name of the user. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"userName")," but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"!!! important\nIf the user with the specified id or user name doesn't exist, you will get a ",(0,o.kt)("inlineCode",{parentName:"p"},"Resource 'xyz' does not exist or one of its queried reference-property objects are not present.")," error."),(0,o.kt)("p",null,"!!! important\nTo use this command you must be a Global administrator, User administrator or Privileged Authentication administrator."),(0,o.kt)("p",null,"!!! note\nAfter running this command, it may take a minute before the user is effectively moved to the recycle bin."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Removes a specific user by id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user remove --id a33bd401-9117-4e0e-bb7b-3f61c1539e10\n")),(0,o.kt)("p",null,"Removes a specific user by its UPN"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user remove --name john.doe@contoso.com\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}p.isMDXComponent=!0}}]);