"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14419],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>v});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),c=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(o.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,v=d["".concat(o,".").concat(m)]||d[m]||u[m]||p;return n?t.createElement(v,s(s({ref:r},l),{},{components:n})):t.createElement(v,s({ref:r},l))}));function v(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var p=n.length,s=new Array(p);s[0]=m;var a={};for(var o in r)hasOwnProperty.call(r,o)&&(a[o]=r[o]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<p;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11260:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>a,toc:()=>c});var t=n(87462),i=(n(67294),n(3905));const p={},s="spo serviceprincipal permissionrequest approve",a={unversionedId:"cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-approve",id:"cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-approve",title:"spo serviceprincipal permissionrequest approve",description:"Approves the specified permission request",source:"@site/docs/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-approve.md",sourceDirName:"cmd/spo/serviceprincipal",slug:"/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-approve",permalink:"/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-approve",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-approve.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo serviceprincipal grant revoke",permalink:"/cmd/spo/serviceprincipal/serviceprincipal-grant-revoke"},next:{title:"spo serviceprincipal permissionrequest deny",permalink:"/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-deny"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"Alias",id:"alias",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],l={toc:c};function d(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-serviceprincipal-permissionrequest-approve"},"spo serviceprincipal permissionrequest approve"),(0,i.kt)("p",null,"Approves the specified permission request"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo serviceprincipal permissionrequest approve [options]\n")),(0,i.kt)("h2",{id:"alias"},"Alias"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sp permissionrequest approve\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: ID of the permission request to approve."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--all"),"\n: approve all pending permission requests."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--resource [resource]"),"\n: The resource of the permissions requests to approve."),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"!!! important\nThe admin role that's required to approve permissions depends on the API. To approve permissions to any of the third-party APIs registered in the tenant, the application administrator role is sufficient. To approve permissions for Microsoft Graph or any other Microsoft API, the Global Administrator role is required."),(0,i.kt)("p",null,"The permission request you want to approve is denoted using its ",(0,i.kt)("inlineCode",{parentName:"p"},"ID"),". You can retrieve it using the ",(0,i.kt)("a",{parentName:"p",href:"/cmd/spo/serviceprincipal/serviceprincipal-permissionrequest-list"},"spo serviceprincipal permissionrequest list")," command."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Approve permission request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo serviceprincipal permissionrequest approve --id 4dc4c043-25ee-40f2-81d3-b3bf63da7538\n")),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,'=== "JSON"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```json\n{\n  "ClientId": "6004a642-185c-479a-992a-15d1c23e2229",\n  "ConsentType": "AllPrincipals",\n  "IsDomainIsolated": false,\n  "ObjectId": "QqYEYFwYmkeZKhXRwj4iKRcAa6TiIbFNvGnKY1dqONY",\n  "PackageName": null,\n  "Resource": "Microsoft Graph",\n  "ResourceId": "a46b0017-21e2-4db1-bc69-ca63576a38d6",\n  "Scope": "Reports.Read.All"\n}\n```\n')),(0,i.kt)("p",null,'=== "Text"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```text\nClientId        : 6004a642-185c-479a-992a-15d1c23e2229\nConsentType     : AllPrincipals\nIsDomainIsolated: false\nObjectId        : QqYEYFwYmkeZKhXRwj4iKRcAa6TiIbFNvGnKY1dqONY\nPackageName     : null\nResource        : Microsoft Graph\nResourceId      : a46b0017-21e2-4db1-bc69-ca63576a38d6\nScope           : Directory.ReadWrite.All\n```\n")),(0,i.kt)("p",null,'=== "CSV"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```csv\nClientId,ConsentType,IsDomainIsolated,ObjectId,PackageName,Resource,ResourceId,Scope\n6004a642-185c-479a-992a-15d1c23e2229,AllPrincipals,false,QqYEYFwYmkeZKhXRwj4iKRcAa6TiIbFNvGnKY1dqONY,null,Microsoft Graph,a46b0017-21e2-4db1-bc69-ca63576a38d6,Directory.ReadWrite.All\n```\n")))}d.isMDXComponent=!0}}]);