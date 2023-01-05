"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43478],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={},c="search externalconnection get",i={unversionedId:"cmd/search/externalconnection/externalconnection-get",id:"cmd/search/externalconnection/externalconnection-get",title:"search externalconnection get",description:"Allow the administrator to get a specific external connection for use in Microsoft Search.",source:"@site/docs/cmd/search/externalconnection/externalconnection-get.md",sourceDirName:"cmd/search/externalconnection",slug:"/cmd/search/externalconnection/externalconnection-get",permalink:"/cli-microsoft365-docusaurus/cmd/search/externalconnection/externalconnection-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/search/externalconnection/externalconnection-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"search externalconnection add",permalink:"/cli-microsoft365-docusaurus/cmd/search/externalconnection/externalconnection-add"},next:{title:"search externalconnection list",permalink:"/cli-microsoft365-docusaurus/cmd/search/externalconnection/externalconnection-list"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"search-externalconnection-get"},"search externalconnection get"),(0,o.kt)("p",null,"Allow the administrator to get a specific external connection for use in Microsoft Search."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 search externalconnection get [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: ID of the External Connection to get. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"name")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: Name of the External Connection to get. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"name")),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get the External Connection by its id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 search externalconnection get --id "MyApp"\n')),(0,o.kt)("p",null,"Get the External Connection by its name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 search externalconnection get --name "Test"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n{\n  "id": "CLITest",\n  "name": "CLI-Test",\n  "description": "CLI Test",\n  "state": "draft",\n  "configuration": {\n    "authorizedApps": [\n      "31359c7f-bd7e-475c-86db-fdb8c937548e"\n    ],\n    "authorizedAppIds": [\n      "31359c7f-bd7e-475c-86db-fdb8c937548e"\n    ]\n  }\n}\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```text\nconfiguration: {"authorizedApps":["31359c7f-bd7e-475c-86db-fdb8c937548e"],"authorizedAppIds":["31359c7f-bd7e-475c-86db-fdb8c937548e"]}\ndescription  : CLI Test\nid           : CLITest\nname         : CLI-Test\nstate        : draft\n```\n')),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```csv\nid,name,description,state,configuration\nCLITest,CLI-Test,CLI Test,draft,"{""authorizedApps"":[""31359c7f-bd7e-475c-86db-fdb8c937548e""],""authorizedAppIds"":[""31359c7f-bd7e-475c-86db-fdb8c937548e""]}"\n```\n')))}d.isMDXComponent=!0}}]);