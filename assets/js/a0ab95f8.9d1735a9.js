"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32120],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>v});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),c=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(o.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,v=u["".concat(o,".").concat(d)]||u[d]||m[d]||a;return t?n.createElement(v,s(s({ref:r},l),{},{components:t})):n.createElement(v,s({ref:r},l))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[u]="string"==typeof e?e:i,s[1]=p;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19059:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const a={},s="spo serviceprincipal grant revoke",p={unversionedId:"cmd/spo/serviceprincipal/serviceprincipal-grant-revoke",id:"cmd/spo/serviceprincipal/serviceprincipal-grant-revoke",title:"spo serviceprincipal grant revoke",description:"Revokes the specified set of permissions granted to the service principal",source:"@site/docs/cmd/spo/serviceprincipal/serviceprincipal-grant-revoke.md",sourceDirName:"cmd/spo/serviceprincipal",slug:"/cmd/spo/serviceprincipal/serviceprincipal-grant-revoke",permalink:"/cli-microsoft365-docusaurus/cmd/spo/serviceprincipal/serviceprincipal-grant-revoke",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/serviceprincipal/serviceprincipal-grant-revoke.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo serviceprincipal grant list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/serviceprincipal/serviceprincipal-grant-list"},next:{title:"spo serviceprincipal permissionrequest approve",permalink:"/cli-microsoft365-docusaurus/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-approve"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"Alias",id:"alias",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],l={toc:c};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-serviceprincipal-grant-revoke"},"spo serviceprincipal grant revoke"),(0,i.kt)("p",null,"Revokes the specified set of permissions granted to the service principal"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo serviceprincipal grant revoke [options]\n")),(0,i.kt)("h2",{id:"alias"},"Alias"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sp grant revoke\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectId")," of the permission grant to revoke."),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"!!! important\nTo use this command you must be a Global administrator."),(0,i.kt)("p",null,"The permission grant you want to revoke is denoted using its ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectId"),". You can retrieve it using the ",(0,i.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/spo/serviceprincipal/serviceprincipal-grant-list"},"spo serviceprincipal grant list")," command."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Revoke permission grant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo serviceprincipal grant revoke --id 50NAzUm3C0K9B6p8ORLtIsQccg4rMERGvFGRtBsk2fA\n")),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);