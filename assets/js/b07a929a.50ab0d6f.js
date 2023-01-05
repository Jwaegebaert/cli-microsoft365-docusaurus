"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44240:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const n={},i="aad o365group get",p={unversionedId:"cmd/aad/o365group/o365group-get",id:"cmd/aad/o365group/o365group-get",title:"aad o365group get",description:"Gets information about the specified Microsoft 365 Group or Microsoft Teams team",source:"@site/docs/cmd/aad/o365group/o365group-get.md",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-get",permalink:"/cmd/aad/o365group/o365group-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group conversation post list",permalink:"/cmd/aad/o365group/o365group-conversation-post-list"},next:{title:"aad o365group list",permalink:"/cmd/aad/o365group/o365group-list"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Alias",id:"alias",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aad-o365group-get"},"aad o365group get"),(0,o.kt)("p",null,"Gets information about the specified Microsoft 365 Group or Microsoft Teams team"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group get [options]\n")),(0,o.kt)("h2",{id:"alias"},"Alias"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams team get\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: The ID of the Microsoft 365 Group or Microsoft Teams team to retrieve information for"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--includeSiteUrl"),"\n: Set to retrieve the site URL for the group"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get information about the Microsoft 365 Group with id ",(0,o.kt)("em",{parentName:"p"},"1caf7dcd-7e83-4c3a-94f7-932a1299c844")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group get --id 1caf7dcd-7e83-4c3a-94f7-932a1299c844\n")),(0,o.kt)("p",null,"Get information about the Microsoft 365 Group with id ",(0,o.kt)("em",{parentName:"p"},"1caf7dcd-7e83-4c3a-94f7-932a1299c844")," and also retrieve the URL of the corresponding SharePoint site"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group get --id 1caf7dcd-7e83-4c3a-94f7-932a1299c844 --includeSiteUrl\n")),(0,o.kt)("p",null,"Get information about the Microsoft Teams team with id ",(0,o.kt)("em",{parentName:"p"},"2eaf7dcd-7e83-4c3a-94f7-932a1299c844")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams team get --id 2eaf7dcd-7e83-4c3a-94f7-932a1299c844\n")))}u.isMDXComponent=!0}}]);