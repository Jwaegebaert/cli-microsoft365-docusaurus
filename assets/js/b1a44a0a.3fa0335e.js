"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48613],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return t?a.createElement(f,p(p({ref:n},s),{},{components:t})):a.createElement(f,p({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[c]="string"==typeof e?e:r,p[1]=o;for(var d=2;d<l;d++)p[d]=t[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const l={},p="planner plan list",o={unversionedId:"cmd/planner/plan/plan-list",id:"cmd/planner/plan/plan-list",title:"planner plan list",description:"Returns a list of plans associated with a specified group",source:"@site/docs/cmd/planner/plan/plan-list.md",sourceDirName:"cmd/planner/plan",slug:"/cmd/planner/plan/plan-list",permalink:"/cmd/planner/plan/plan-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/plan/plan-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"planner plan get",permalink:"/cmd/planner/plan/plan-get"},next:{title:"planner plan remove",permalink:"/cmd/planner/plan/plan-remove"}},i={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],s={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planner-plan-list"},"planner plan list"),(0,r.kt)("p",null,"Returns a list of plans associated with a specified group"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--ownerGroupId [ownerGroupId]"),"\n: ID of the Group that owns the plan. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--ownerGroupName [ownerGroupName]"),"\n: Name of the Group that owns the plan. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," but not both."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Returns a list of Microsoft Planner plans for Group ",(0,r.kt)("em",{parentName:"p"},"233e43d0-dc6a-482e-9b4e-0de7a7bce9b4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner plan list --ownerGroupId "233e43d0-dc6a-482e-9b4e-0de7a7bce9b4"\n')),(0,r.kt)("p",null,"Returns a list of Microsoft Planner plans for Group ",(0,r.kt)("em",{parentName:"p"},"My Planner Group")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner plan list --ownerGroupName "My Planner Group"\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "createdDateTime": "2015-03-30T18:36:49.2407981Z",\n    "owner": "ebf3b108-5234-4e22-b93d-656d7dae5874",\n    "title": "My Planner Plan",\n    "id": "xqQg5FS2LkCp935s-FIFm2QAFkHM",\n    "createdBy": {\n      "user": {\n        "displayName": null,\n        "id": "95e27074-6c4a-447a-aa24-9d718a0b86fa"\n      },\n      "application": {\n        "displayName": null,\n        "id": "ebf3b108-5234-4e22-b93d-656d7dae5874"\n      }\n    },\n    "container": {\n      "containerId": "ebf3b108-5234-4e22-b93d-656d7dae5874",\n      "type": "group",\n      "url": "https://graph.microsoft.com/v1.0/groups/ebf3b108-5234-4e22-b93d-656d7dae5874"\n    }\n  }\n]\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nid                            title            createdDateTime               owner\n----------------------------  ---------------  ----------------------------  ------------------------------------\nxqQg5FS2LkCp935s-FIFm2QAFkHM  My Planner Plan  2015-03-30T18:36:49.2407981Z  ebf3b108-5234-4e22-b93d-656d7dae5874\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nid,title,createdDateTime,owner\nxqQg5FS2LkCp935s-FIFm2QAFkHM,My Planner Plan,2015-03-30T18:36:49.2407981Z,ebf3b108-5234-4e22-b93d-656d7dae5874\n```\n")),(0,r.kt)("p",null,'=== "Markdown"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```md\n# planner plan list --ownerGroupId "ebf3b108-5234-4e22-b93d-656d7dae5874"\n\nDate: 27/12/2022\n\n## My Planner Plan (xqQg5FS2LkCp935s-FIFm2QAFkHM)\n\nProperty | Value\n---------|-------\ncreatedDateTime | 2021-12-12T14:00:50.4522129Z\nowner | ebf3b108-5234-4e22-b93d-656d7dae5874\ntitle | My Planner Plan\nid | xqQg5FS2LkCp935s-FIFm2QAFkHM\ncreatedBy | {"user":{"displayName":null,"id":"dd8b99a7-77c6-4238-a609-396d27844921"},"application":{"displayName":null,"id":"09abbdfd-ed23-44ee-a2d9-a627aa1c90f3"}}\ncontainer | {"containerId":"ebf3b108-5234-4e22-b93d-656d7dae5874","type":"group","url":"https://graph.microsoft.com/v1.0/groups/ebf3b108-5234-4e22-b93d-656d7dae5874"}\n```\n')))}c.isMDXComponent=!0}}]);