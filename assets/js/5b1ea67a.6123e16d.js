"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30567],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,r=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(a),d=p,f=c["".concat(i,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(f,o(o({ref:t},m),{},{components:a})):n.createElement(f,o({ref:t},m))}));function f(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:p,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86479:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),p=(a(67294),a(3905));const r={},o="teams app update",s={unversionedId:"cmd/teams/app/app-update",id:"cmd/teams/app/app-update",title:"teams app update",description:"Updates Teams app in the organization's app catalog",source:"@site/docs/cmd/teams/app/app-update.md",sourceDirName:"cmd/teams/app",slug:"/cmd/teams/app/app-update",permalink:"/cli-microsoft365-docusaurus/cmd/teams/app/app-update",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/app/app-update.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams app uninstall",permalink:"/cli-microsoft365-docusaurus/cmd/teams/app/app-uninstall"},next:{title:"teams cache remove",permalink:"/cli-microsoft365-docusaurus/cmd/teams/cache/cache-remove"}},i={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:l};function c(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"teams-app-update"},"teams app update"),(0,p.kt)("p",null,"Updates Teams app in the organization's app catalog"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams app update [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: ID of the app to update. Specify either id or name, but not both"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The display name of the app to update. Specify either id or name, but not both"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-p, --filePath <filePath>"),"\n: Absolute or relative path to the Teams manifest zip file to update in the app catalog"),(0,p.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"You can only update a Teams app as a global administrator."),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Update the Teams app with ID ",(0,p.kt)("em",{parentName:"p"},"83cece1e-938d-44a1-8b86-918cf6151957")," from file ",(0,p.kt)("em",{parentName:"p"},"teams-manifest.zip")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams app update --id 83cece1e-938d-44a1-8b86-918cf6151957 --filePath ./teams-manifest.zip\n")),(0,p.kt)("p",null,"Update the Teams app with name ",(0,p.kt)("em",{parentName:"p"},"Test app")," from file ",(0,p.kt)("em",{parentName:"p"},"teams-manifest.zip")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams app update --name "Test app" --filePath ./teams-manifest.zip\n')),(0,p.kt)("h2",{id:"response"},"Response"),(0,p.kt)("p",null,"The command won't return a response on success."))}c.isMDXComponent=!0}}]);