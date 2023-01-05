"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||n;return r?o.createElement(f,s(s({ref:t},i),{},{components:r})):o.createElement(f,s({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,s[1]=p;for(var u=2;u<n;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>u});var o=r(87462),a=(r(67294),r(3905));const n={},s="aad o365group user set",p={unversionedId:"cmd/aad/o365group/o365group-user-set",id:"cmd/aad/o365group/o365group-user-set",title:"aad o365group user set",description:"Updates role of the specified user in the specified Microsoft 365 Group or Microsoft Teams team",source:"@site/docs/cmd/aad/o365group/o365group-user-set.md",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-user-set",permalink:"/cmd/aad/o365group/o365group-user-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-user-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group user remove",permalink:"/cmd/aad/o365group/o365group-user-remove"},next:{title:"aad oauth2grant add",permalink:"/cmd/aad/oauth2grant/oauth2grant-add"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Alias",id:"alias",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],i={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aad-o365group-user-set"},"aad o365group user set"),(0,a.kt)("p",null,"Updates role of the specified user in the specified Microsoft 365 Group or Microsoft Teams team"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group user set [options]\n")),(0,a.kt)("h2",{id:"alias"},"Alias"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad teams user set\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --groupId [groupId]"),"\n: The ID of the Microsoft 365 group for which to update user"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--teamId [teamId]"),"\n: The ID of the Microsoft Teams team for which to update user"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --userName <userName>"),"\n: UPN of the user for whom to update the role (eg. ",(0,a.kt)("a",{parentName:"p",href:"mailto:johndoe@example.com"},"johndoe@example.com"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-r, --role <role>"),"\n: Role to set for the given user in the specified Microsoft 365 Group or Microsoft Teams team. Allowed values: ",(0,a.kt)("inlineCode",{parentName:"p"},"Owner,Member")),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The command will return an error if the user already has the specified role in the given Microsoft 365 Group or Microsoft Teams team."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Promote the specified user to owner of the given Microsoft 365 Group"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group user list --groupId '00000000-0000-0000-0000-000000000000' --userName 'anne.matthews@contoso.onmicrosoft.com' --role Owner\n")),(0,a.kt)("p",null,"Demote the specified user from owner to member in the given Microsoft 365 Group"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group user list --groupId '00000000-0000-0000-0000-000000000000' --userName 'anne.matthews@contoso.onmicrosoft.com' --role Member\n")),(0,a.kt)("p",null,"Promote the specified user to owner of the given Microsoft Teams team"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad teams user list --teamId '00000000-0000-0000-0000-000000000000' --userName 'anne.matthews@contoso.onmicrosoft.com' --role Owner\n")),(0,a.kt)("p",null,"Demote the specified user from owner to member in the given Microsoft Teams team"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad teams user list --teamId '00000000-0000-0000-0000-000000000000' --userName 'anne.matthews@contoso.onmicrosoft.com' --role Member\n")))}m.isMDXComponent=!0}}]);