"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51256],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>g});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),s=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):m(m({},r),e)),t},i=function(e){var r=s(e.components);return o.createElement(u.Provider,{value:r},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=s(t),d=n,g=l["".concat(u,".").concat(d)]||l[d]||c[d]||a;return t?o.createElement(g,m(m({ref:r},i),{},{components:t})):o.createElement(g,m({ref:r},i))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,m=new Array(a);m[0]=d;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p[l]="string"==typeof e?e:n,m[1]=p;for(var s=2;s<a;s++)m[s]=t[s];return o.createElement.apply(null,m)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92664:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>m,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=t(87462),n=(t(67294),t(3905));const a={},m="yammer group user remove",p={unversionedId:"cmd/yammer/group/group-user-remove",id:"cmd/yammer/group/group-user-remove",title:"yammer group user remove",description:"Removes a user from a Yammer group",source:"@site/docs/cmd/yammer/group/group-user-remove.md",sourceDirName:"cmd/yammer/group",slug:"/cmd/yammer/group/group-user-remove",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/group/group-user-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/group/group-user-remove.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"yammer group user add",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/group/group-user-add"},next:{title:"yammer message add",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/message/message-add"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],i={toc:s};function l(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yammer-group-user-remove"},"yammer group user remove"),(0,n.kt)("p",null,"Removes a user from a Yammer group"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer group user remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--groupId <groupId>"),"\n: The ID of the Yammer group"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--id [id]"),"\n: ID of the user to remove from the group. If not specified, removes the current user"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation before removing the user from the group"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"!!! attention\nIn order to use this command, you need to grant the Azure AD application used by the CLI for Microsoft 365 the permission to the Yammer API. To do this, execute the ",(0,n.kt)("inlineCode",{parentName:"p"},"cli consent --service yammer")," command."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Remove the current user from the group with the ID ",(0,n.kt)("inlineCode",{parentName:"p"},"5611239081")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer group user remove --groupId 5611239081\n")),(0,n.kt)("p",null,"Remove the user with the ID ",(0,n.kt)("inlineCode",{parentName:"p"},"66622349")," from the group with the ID ",(0,n.kt)("inlineCode",{parentName:"p"},"5611239081")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer group user remove --groupId 5611239081 --id 66622349\n")),(0,n.kt)("p",null,"Remove the user with the ID ",(0,n.kt)("inlineCode",{parentName:"p"},"66622349")," from the group with the ID ",(0,n.kt)("inlineCode",{parentName:"p"},"5611239081")," without asking for confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer group user remove --groupId 5611239081 --id 66622349 --confirm\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}l.isMDXComponent=!0}}]);