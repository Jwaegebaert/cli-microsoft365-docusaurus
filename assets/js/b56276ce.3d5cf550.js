"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[36757],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=m(a),u=i,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(f,p(p({ref:t},l),{},{components:a})):n.createElement(f,p({ref:t},l))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,p=new Array(r);p[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,p[1]=o;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const r={},p="teams team app list",o={unversionedId:"cmd/teams/team/team-app-list",id:"cmd/teams/team/team-app-list",title:"teams team app list",description:"List apps installed in the specified team",source:"@site/docs/cmd/teams/team/team-app-list.md",sourceDirName:"cmd/teams/team",slug:"/cmd/teams/team/team-app-list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-app-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/team/team-app-list.md",tags:[],version:"current",lastUpdatedAt:1669407900,formattedLastUpdatedAt:"Nov 25, 2022",frontMatter:{},sidebar:"commands",previous:{title:"teams team add",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-add"},next:{title:"teams team archive",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-archive"}},s={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],l={toc:m},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"teams-team-app-list"},"teams team app list"),(0,i.kt)("p",null,"List apps installed in the specified team"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams team app list [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --teamId [teamId]"),"\n: The id of the Microsoft Teams team. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"teamId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"teamName")," but not both."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-n, --teamName [teamName]"),"\n: The name of the Microsoft Teams team. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"teamId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"teamName")," but not both."),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"List applications installed in the specified Microsoft Teams team by id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams team app list --teamId 2eaf7dcd-7e83-4c3a-94f7-932a1299c844\n")),(0,i.kt)("p",null,"List applications installed in the specified Microsoft Teams team by name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams team app list --teamName "Team Name"\n')),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,'=== "JSON"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```json\n[\n   {\n    "id": "MGFkNTViNWQtNmE3OS00NjdiLWFkMjEtZDRiZWY3OTQ4YTc5IyMxNGQ2OTYyZC02ZWViLTRmNDgtODg5MC1kZTU1NDU0YmIxMzY=",\n    "teamsApp": {\n      "id": "14d6962d-6eeb-4f48-8890-de55454bb136",\n      "externalId": null,\n      "displayName": "Activity",\n      "distributionMethod": "store"\n    },\n    "teamsAppDefinition": {\n      "id": "MTRkNjk2MmQtNmVlYi00ZjQ4LTg4OTAtZGU1NTQ1NGJiMTM2IyMxLjAjI1B1Ymxpc2hlZA==",\n      "teamsAppId": "14d6962d-6eeb-4f48-8890-de55454bb136",\n      "displayName": "Activity",\n      "version": "1.0",\n      "publishingState": "published",\n      "shortDescription": "Activity app bar entry.",\n      "description": "Activity app bar entry.",\n      "lastModifiedDateTime": null,\n      "createdBy": null\n    }\n  }\n]\n```\n')),(0,i.kt)("p",null,'=== "Text"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```text\nid                                                                                                    displayName  distributionMethod\n----------------------------------------------------------------------------------------------------  -----------  ------------------\nMGFkNTViNWQtNmE3OS00NjdiLWFkMjEtZDRiZWY3OTQ4YTc5IyMxNGQ2OTYyZC02ZWViLTRmNDgtODg5MC1kZTU1NDU0YmIxMzY=  Activity     store\n```\n")),(0,i.kt)("p",null,'=== "CSV"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```csv\nid,displayName,distributionMethod\nMGFkNTViNWQtNmE3OS00NjdiLWFkMjEtZDRiZWY3OTQ4YTc5IyMxNGQ2OTYyZC02ZWViLTRmNDgtODg5MC1kZTU1NDU0YmIxMzY=,Activity,store\n```\n")))}d.isMDXComponent=!0}}]);