"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20239],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(o),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||n;return o?r.createElement(f,p(p({ref:t},u),{},{components:o})):r.createElement(f,p({ref:t},u))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,p=new Array(n);p[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,p[1]=s;for(var i=2;i<n;i++)p[i]=o[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},60754:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>i});var r=o(87462),a=(o(67294),o(3905));const n={},p="aad o365group set",s={unversionedId:"cmd/aad/o365group/o365group-set",id:"cmd/aad/o365group/o365group-set",title:"aad o365group set",description:"Updates Microsoft 365 Group properties",source:"@site/docs/cmd/aad/o365group/o365group-set.md",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group report activitystorage",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-report-activitystorage"},next:{title:"aad o365group teamify",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-teamify"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],u={toc:i};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aad-o365group-set"},"aad o365group set"),(0,a.kt)("p",null,"Updates Microsoft 365 Group properties"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group set [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: The ID of the Microsoft 365 Group to update"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --displayName [displayName]"),"\n: Display name for the Microsoft 365 Group"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-d, --description [description]"),"\n: Description for the Microsoft 365 Group"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--owners [owners]"),"\n: Comma-separated list of Microsoft 365 Group owners to add"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--members [members]"),"\n: Comma-separated list of Microsoft 365 Group members to add"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--isPrivate [isPrivate]"),"\n: Set to true if the Microsoft 365 Group should be private and to false if it should be public (default)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-l, --logoPath [logoPath]"),"\n: Local path to the image file to use as group logo"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"When updating group's owners and members, the command will add newly specified users to the previously set owners and members. The previously set users will not be replaced."),(0,a.kt)("p",null,"When specifying the path to the logo image you can use both relative and absolute paths. Note, that ~ in the path, will not be resolved and will most likely result in an error."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Update Microsoft 365 Group display name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group set --id 28beab62-7540-4db1-a23f-29a6018a3848 --displayName Finance\n")),(0,a.kt)("p",null,"Change Microsoft 365 Group visibility to public"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group set --id 28beab62-7540-4db1-a23f-29a6018a3848 --isPrivate false\n")),(0,a.kt)("p",null,"Add new Microsoft 365 Group owners"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group set --id 28beab62-7540-4db1-a23f-29a6018a3848 --owners "DebraB@contoso.onmicrosoft.com,DiegoS@contoso.onmicrosoft.com"\n')),(0,a.kt)("p",null,"Add new Microsoft 365 Group members"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group set --id 28beab62-7540-4db1-a23f-29a6018a3848 --members "DebraB@contoso.onmicrosoft.com,DiegoS@contoso.onmicrosoft.com"\n')),(0,a.kt)("p",null,"Update Microsoft 365 Group logo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group set --id 28beab62-7540-4db1-a23f-29a6018a3848 --logoPath images/logo.png\n")))}c.isMDXComponent=!0}}]);