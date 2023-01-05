"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27792],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),m=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},d=function(e){var r=m(e.components);return n.createElement(s.Provider,{value:r},e.children)},l="mdxType",i={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=m(t),c=o,g=l["".concat(s,".").concat(c)]||l[c]||i[c]||a;return t?n.createElement(g,u(u({ref:r},d),{},{components:t})):n.createElement(g,u({ref:r},d))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=c;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[l]="string"==typeof e?e:o,u[1]=p;for(var m=2;m<a;m++)u[m]=t[m];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},47681:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>u,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var n=t(87462),o=(t(67294),t(3905));const a={},u="yammer group user add",p={unversionedId:"cmd/yammer/group/group-user-add",id:"cmd/yammer/group/group-user-add",title:"yammer group user add",description:"Adds a user to a Yammer Group",source:"@site/docs/cmd/yammer/group/group-user-add.md",sourceDirName:"cmd/yammer/group",slug:"/cmd/yammer/group/group-user-add",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/group/group-user-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/group/group-user-add.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"yammer group list",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/group/group-list"},next:{title:"yammer group user remove",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/group/group-user-remove"}},s={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:m};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"yammer-group-user-add"},"yammer group user add"),(0,o.kt)("p",null,"Adds a user to a Yammer Group"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer group user add [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--groupId <groupId>"),"\n: The ID of the group to add the user to"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--id [id]"),"\n: ID of the user to add to the group. If not specified, adds the current user"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--email [email]"),"\n: E-mail of the user to add to the group"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"!!! attention\nIn order to use this command, you need to grant the Azure AD application used by the CLI for Microsoft 365 the permission to the Yammer API. To do this, execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"cli consent --service yammer")," command."),(0,o.kt)("p",null,"If the specified user is not a member of the network, the command will return an HTTP 400 error message."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Adds the current user to the group with the ID ",(0,o.kt)("inlineCode",{parentName:"p"},"5611239081")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer group user add --groupId 5611239081\n")),(0,o.kt)("p",null,"Adds the user with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"66622349")," to the group with the ID ",(0,o.kt)("inlineCode",{parentName:"p"},"5611239081")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer group user add --groupId 5611239081 --id 66622349\n")),(0,o.kt)("p",null,"Adds the user with e-mail ",(0,o.kt)("inlineCode",{parentName:"p"},"suzy@contoso.com")," to the group with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"5611239081")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer group user add --groupId 5611239081 --email suzy@contoso.com\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}l.isMDXComponent=!0}}]);