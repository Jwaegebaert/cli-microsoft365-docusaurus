"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77647],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(a),u=p,f=c["".concat(l,".").concat(u)]||c[u]||s[u]||r;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:p,o[1]=i;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},21861:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(87462),p=(a(67294),a(3905));const r={},o="pp managementapp add",i={unversionedId:"cmd/pp/managementapp/managementapp-add",id:"cmd/pp/managementapp/managementapp-add",title:"pp managementapp add",description:"Register management application for Power Platform",source:"@site/docs/cmd/pp/managementapp/managementapp-add.md",sourceDirName:"cmd/pp/managementapp",slug:"/cmd/pp/managementapp/managementapp-add",permalink:"/cli-microsoft365-docusaurus/cmd/pp/managementapp/managementapp-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/managementapp/managementapp-add.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp gateway list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/gateway/gateway-list"},next:{title:"pp managementapp list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/managementapp/managementapp-list"}},l={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:m};function c(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"pp-managementapp-add"},"pp managementapp add"),(0,p.kt)("p",null,"Register management application for Power Platform"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp managementapp add [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--appId [appId]"),"\n: Application (client) ID of the Azure AD application registration to register as a management app. Specify either ",(0,p.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"objectId")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"name")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--objectId [objectId]"),"\n: Object ID of the Azure AD application registration to register as a management app. Specify either ",(0,p.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"objectId")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"name")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--name [name]"),"\n: Name of the Azure AD application registration to register as a management app. Specify either ",(0,p.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"objectId")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"name")),(0,p.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"To execute this command the first time you'll need sign in using the Microsoft Azure PowerShell app registration. You can do this by executing ",(0,p.kt)("inlineCode",{parentName:"p"},"m365 login --appId 1950a258-227b-4e31-a9cf-717495945fc2"),". To register the Azure AD app registration that CLI for Microsoft 365 uses by default, execute ",(0,p.kt)("inlineCode",{parentName:"p"},"m365 pp managementapp add--appId 31359c7f-bd7e-475c-86db-fdb8c937548e"),"."),(0,p.kt)("p",null,"For best performance use the ",(0,p.kt)("inlineCode",{parentName:"p"},"appId")," option to reference the Azure AD application registration to update. If you use ",(0,p.kt)("inlineCode",{parentName:"p"},"objectId")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"name"),", this command will first need to find the corresponding ",(0,p.kt)("inlineCode",{parentName:"p"},"appId")," for that application."),(0,p.kt)("p",null,"If the command finds multiple Azure AD application registrations with the specified app name, it will prompt you to disambiguate which app it should use, listing the discovered object IDs."),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Register CLI for Microsoft 365 as a management application for the Power Platform"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp managementapp add --appId 31359c7f-bd7e-475c-86db-fdb8c937548e\n")),(0,p.kt)("p",null,"Register Azure AD application with the specified object ID as a management application for the Power Platform"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp managementapp add --objectId d75be2e1-0204-4f95-857d-51a37cf40be8\n")),(0,p.kt)("p",null,"Register Azure AD application named ",(0,p.kt)("em",{parentName:"p"},"My app")," as a management application for the Power Platform"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp managementapp add --name "My app"\n')),(0,p.kt)("h2",{id:"response"},"Response"),(0,p.kt)("p",null,'=== "JSON"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'```json\n{\n  "applicationId":"31359c7f-bd7e-475c-86db-fdb8c937548e"\n}\n```\n')),(0,p.kt)("p",null,'=== "Text"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"```text\napplicationId: 31359c7f-bd7e-475c-86db-fdb8c937548e\n```\n")),(0,p.kt)("p",null,'=== "CSV"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"```csv\napplicationId\n31359c7f-bd7e-475c-86db-fdb8c937548e\n```\n")))}c.isMDXComponent=!0}}]);