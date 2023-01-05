"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7481],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),i=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?r.createElement(f,p(p({ref:t},c),{},{components:a})):r.createElement(f,p({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,p=new Array(s);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,p[1]=o;for(var i=2;i<s;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const s={},p="teams user app add",o={unversionedId:"cmd/teams/user/user-app-add",id:"cmd/teams/user/user-app-add",title:"teams user app add",description:"Install an app in the personal scope of the specified user",source:"@site/docs/cmd/teams/user/user-app-add.md",sourceDirName:"cmd/teams/user",slug:"/cmd/teams/user/user-app-add",permalink:"/cmd/teams/user/user-app-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/user/user-app-add.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams team unarchive",permalink:"/cmd/teams/team/team-unarchive"},next:{title:"teams user app list",permalink:"/cmd/teams/user/user-app-list"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:i};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"teams-user-app-add"},"teams user app add"),(0,n.kt)("p",null,"Install an app in the personal scope of the specified user"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams user app add [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--id <id>"),"\n: The ID of the app to install"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--userId <userId>"),"\n: The ID of the user to install the app for"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," has to be the ID of the app from the Microsoft Teams App Catalog. Do not use the ID from the manifest of the zip app package. Use the ",(0,n.kt)("a",{parentName:"p",href:"/cmd/teams/app/app-list"},"teams app list")," command to get this ID."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Install an app from the catalog for the specified user"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams user app add --id 4440558e-8c73-4597-abc7-3644a64c4bce --userId 2609af39-7775-4f94-a3dc-0dd67657e900\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);