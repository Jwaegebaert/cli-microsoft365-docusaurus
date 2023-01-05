"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82055],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,u=f["".concat(s,".").concat(m)]||f[m]||d[m]||r;return t?i.createElement(u,l(l({ref:n},c),{},{components:t})):i.createElement(u,l({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[f]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38357:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=t(87462),o=(t(67294),t(3905));const r={},l="spo file sharinglink list",a={unversionedId:"cmd/spo/file/file-sharinglink-list",id:"cmd/spo/file/file-sharinglink-list",title:"spo file sharinglink list",description:"Lists all the sharing links of a specific file",source:"@site/docs/cmd/spo/file/file-sharinglink-list.md",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-sharinglink-list",permalink:"/cmd/spo/file/file-sharinglink-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-sharinglink-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo file sharinginfo get",permalink:"/cmd/spo/file/file-sharinginfo-get"},next:{title:"spo file version clear",permalink:"/cmd/spo/file/file-version-clear"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-file-sharinglink-list"},"spo file sharinglink list"),(0,o.kt)("p",null,"Lists all the sharing links of a specific file"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file sharinglink list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: The URL of the site where the file is located."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-f, --fileUrl [fileUrl]"),"\n: The server-relative (decoded) URL of the file. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"fileUrl")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"fileId")," but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --fileId [fileId]"),"\n: The UniqueId (GUID) of the file. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"fileUrl")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"fileId")," but not both."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"List sharing links of a file by id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file sharinglink list --webUrl https://contoso.sharepoint.com/sites/demo --fileId daebb04b-a773-4baa-b1d1-3625418e3234\n")),(0,o.kt)("p",null,"List sharing links of a file by url"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo file sharinglink list --webUrl https://contoso.sharepoint.com/sites/demo --fileUrl "/sites/demo/shared documents/document.docx"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "id": "2a021f54-90a2-4016-b3b3-5f34d2e7d932",\n    "roles": [\n      "read"\n    ],\n    "hasPassword": false,\n    "grantedToIdentitiesV2": [\n      {\n        "user": {\n          "displayName": "John Doe",\n          "email": "john@contoso.onmicrosoft.com",\n          "id": "fe36f75e-c103-410b-a18a-2bf6df06ac3a"\n        },\n        "siteUser": {\n          "displayName": "John Doe",\n          "email": "john@contoso.onmicrosoft.com",\n          "id": "9",\n          "loginName": "i:0#.f|membership|john@contoso.onmicrosoft.com"\n        }\n      }\n    ],\n    "grantedToIdentities": [ \n      {\n        "user": {\n          "displayName": "John Doe",\n          "email": "john@contoso.onmicrosoft.com",\n          "id": "fe36f75e-c103-410b-a18a-2bf6df06ac3a"\n        }\n      }\n    ],\n    "link": {\n      "scope": "anonymous",\n      "type": "view",\n      "webUrl": "https://contoso.sharepoint.com/:b:/s/demo/EY50lub3559MtRKfj2hrZqoBWnHOpGIcgi4gzw9XiWYJ-A",\n      "preventsDownload": false\n    }\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\nid                                    roles  link\n------------------------------------  -----  -----------------------------------------------------------------------------------------------------------\n2a021f54-90a2-4016-b3b3-5f34d2e7d932  read   https://contoso.sharepoint.com/:b:/s/demo/EY50lub3559MtRKfj2hrZqoBWnHOpGIcgi4gzw9XiWYJ-A\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nid,roles,link\n2a021f54-90a2-4016-b3b3-5f34d2e7d932,read,https://contoso.sharepoint.com/:b:/s/demo/EY50lub3559MtRKfj2hrZqoBWnHOpGIcgi4gzw9XiWYJ-A\n```\n")))}f.isMDXComponent=!0}}]);