"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={},i="purview retentionlabel list",o={unversionedId:"cmd/purview/retentionlabel/retentionlabel-list",id:"cmd/purview/retentionlabel/retentionlabel-list",title:"purview retentionlabel list",description:"Get a list of retention labels",source:"@site/docs/cmd/purview/retentionlabel/retentionlabel-list.md",sourceDirName:"cmd/purview/retentionlabel",slug:"/cmd/purview/retentionlabel/retentionlabel-list",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentionlabel/retentionlabel-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/purview/retentionlabel/retentionlabel-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"purview retentionlabel get",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentionlabel/retentionlabel-get"},next:{title:"purview retentionlabel remove",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentionlabel/retentionlabel-remove"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Response",id:"response",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"purview-retentionlabel-list"},"purview retentionlabel list"),(0,l.kt)("p",null,"Get a list of retention labels"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentionlabel list [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Get a list of retention labels"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentionlabel list\n")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"!!! attention\nThis command is based on a Microsoft Graph API that is currently in preview and is subject to change once the API reached general availability."),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("p",null,'=== "JSON"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "displayName": "Some label",\n    "descriptionForAdmins": "",\n    "descriptionForUsers": null,\n    "isInUse": true,\n    "retentionTrigger": "dateCreated",\n    "behaviorDuringRetentionPeriod": "retainAsRecord",\n    "actionAfterRetentionPeriod": "delete",\n    "createdDateTime": "2022-11-03T10:28:15Z",\n    "lastModifiedDateTime": "2022-11-03T10:28:15Z",\n    "labelToBeApplied": null,\n    "defaultRecordBehavior": "startLocked",\n    "id": "dc67203a-6cca-4066-b501-903401308f98",\n    "retentionDuration": {\n      "days": 365\n    },\n    "createdBy": {\n      "user": {\n        "id": "b52ffd35-d6fe-4b70-86d8-91cc01d76333",\n        "displayName": null\n      }\n    },\n    "lastModifiedBy": {\n      "user": {\n        "id": "b52ffd35-d6fe-4b70-86d8-91cc01d76333",\n        "displayName": null\n      }\n    },\n    "dispositionReviewStages": []\n  }\n]\n```\n')),(0,l.kt)("p",null,'=== "Text"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"```text\nid                                    displayName     isInUse\n------------------------------------  --------------  --------\ndc67203a-6cca-4066-b501-903401308f98  Some label      true\n```\n")),(0,l.kt)("p",null,'=== "CSV"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"```csv\nid,displayName,isInUse\ndc67203a-6cca-4066-b501-903401308f98,Some label,true\n```\n")))}d.isMDXComponent=!0}}]);