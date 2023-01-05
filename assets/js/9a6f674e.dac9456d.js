"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78758],{3905:(e,r,i)=>{i.d(r,{Zo:()=>l,kt:()=>v});var n=i(67294);function t(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function s(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,n)}return i}function p(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?s(Object(i),!0).forEach((function(r){t(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}function o(e,r){if(null==e)return{};var i,n,t=function(e,r){if(null==e)return{};var i,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],r.indexOf(i)>=0||(t[i]=e[i]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],r.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var a=n.createContext({}),c=function(e){var r=n.useContext(a),i=r;return e&&(i="function"==typeof e?e(r):p(p({},r),e)),i},l=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var i=e.components,t=e.mdxType,s=e.originalType,a=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(i),u=t,v=d["".concat(a,".").concat(u)]||d[u]||m[u]||s;return i?n.createElement(v,p(p({ref:r},l),{},{components:i})):n.createElement(v,p({ref:r},l))}));function v(e,r){var i=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=i.length,p=new Array(s);p[0]=u;var o={};for(var a in r)hasOwnProperty.call(r,a)&&(o[a]=r[a]);o.originalType=e,o[d]="string"==typeof e?e:t,p[1]=o;for(var c=2;c<s;c++)p[c]=i[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},25542:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=i(87462),t=(i(67294),i(3905));const s={},p="spo serviceprincipal permissionrequest deny",o={unversionedId:"cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-deny",id:"cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-deny",title:"spo serviceprincipal permissionrequest deny",description:"Denies the specified permission request",source:"@site/docs/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-deny.md",sourceDirName:"cmd/spo/serviceprincipal",slug:"/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-deny",permalink:"/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-deny",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-deny.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo serviceprincipal permissionrequest approve",permalink:"/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-approve"},next:{title:"spo serviceprincipal permissionrequest list",permalink:"/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-list"}},a={},c=[{value:"Usage",id:"usage",level:2},{value:"Alias",id:"alias",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],l={toc:c};function d(e){let{components:r,...i}=e;return(0,t.kt)("wrapper",(0,n.Z)({},l,i,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"spo-serviceprincipal-permissionrequest-deny"},"spo serviceprincipal permissionrequest deny"),(0,t.kt)("p",null,"Denies the specified permission request"),(0,t.kt)("h2",{id:"usage"},"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo serviceprincipal permissionrequest deny [options]\n")),(0,t.kt)("h2",{id:"alias"},"Alias"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sp permissionrequest deny\n")),(0,t.kt)("h2",{id:"options"},"Options"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: ID of the permission request to deny."),(0,t.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,t.kt)("h2",{id:"remarks"},"Remarks"),(0,t.kt)("p",null,"!!! important\nThe admin role that's required to deny permissions depends on the API. To approve permissions to any of the third-party APIs registered in the tenant, the application administrator role is sufficient. To approve permissions for Microsoft Graph or any other Microsoft API, the Global Administrator role is required."),(0,t.kt)("p",null,"The permission request you want to approve is denoted using its ",(0,t.kt)("inlineCode",{parentName:"p"},"ID"),". You can retrieve it using the ",(0,t.kt)("a",{parentName:"p",href:"/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-list"},"spo serviceprincipal permissionrequest list")," command."),(0,t.kt)("h2",{id:"examples"},"Examples"),(0,t.kt)("p",null,"Deny permission request"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo serviceprincipal permissionrequest deny --id 4dc4c043-25ee-40f2-81d3-b3bf63da7538\n")),(0,t.kt)("h2",{id:"response"},"Response"),(0,t.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);