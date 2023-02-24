"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[89774],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=o.createContext({}),d=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=d(e.components);return o.createElement(u.Provider,{value:r},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),i=d(t),m=a,f=i["".concat(u,".").concat(m)]||i[m]||c[m]||n;return t?o.createElement(f,s(s({ref:r},l),{},{components:t})):o.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,s=new Array(n);s[0]=m;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p[i]="string"==typeof e?e:a,s[1]=p;for(var d=2;d<n;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31460:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>d});var o=t(87462),a=(t(67294),t(3905));const n={},s="aad o365group user add",p={unversionedId:"cmd/aad/o365group/o365group-user-add",id:"cmd/aad/o365group/o365group-user-add",title:"aad o365group user add",description:"Adds user to specified Microsoft 365 Group or Microsoft Teams team",source:"@site/docs/cmd/aad/o365group/o365group-user-add.md",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-user-add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-user-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-user-add.md",tags:[],version:"current",lastUpdatedAt:1649592241,formattedLastUpdatedAt:"Apr 10, 2022",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group teamify",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-teamify"},next:{title:"aad o365group user list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-user-list"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Alias",id:"alias",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],l={toc:d},i="wrapper";function c(e){let{components:r,...t}=e;return(0,a.kt)(i,(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aad-o365group-user-add"},"aad o365group user add"),(0,a.kt)("p",null,"Adds user to specified Microsoft 365 Group or Microsoft Teams team"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group user add [options]\n")),(0,a.kt)("h2",{id:"alias"},"Alias"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams user add\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --groupId [groupId]"),"\n: The ID of the Microsoft 365 Group to which to add the user"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--teamId [teamId]"),"\n: The ID of the Teams team to which to add the user"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --userName <userName>"),"\n: User's UPN (user principal name, eg. ",(0,a.kt)("a",{parentName:"p",href:"mailto:johndoe@example.com"},"johndoe@example.com"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-r, --role [role]"),"\n: The role to be assigned to the new user: ",(0,a.kt)("inlineCode",{parentName:"p"},"Owner,Member"),". Default ",(0,a.kt)("inlineCode",{parentName:"p"},"Member")),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Add a new member to the specified Microsoft 365 Group"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group user add --groupId '00000000-0000-0000-0000-000000000000' --userName 'anne.matthews@contoso.onmicrosoft.com'\n")),(0,a.kt)("p",null,"Add a new owner to the specified Microsoft 365 Group"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group user add --groupId '00000000-0000-0000-0000-000000000000' --userName 'anne.matthews@contoso.onmicrosoft.com' --role Owner\n")),(0,a.kt)("p",null,"Add a new member to the specified Microsoft Teams team"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams user add --teamId '00000000-0000-0000-0000-000000000000' --userName 'anne.matthews@contoso.onmicrosoft.com'\n")))}c.isMDXComponent=!0}}]);