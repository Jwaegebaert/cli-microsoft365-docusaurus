"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,b=c["".concat(d,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={},o="purview retentionlabel get",l={unversionedId:"cmd/purview/retentionlabel/retentionlabel-get",id:"cmd/purview/retentionlabel/retentionlabel-get",title:"purview retentionlabel get",description:"Get a retention label",source:"@site/docs/cmd/purview/retentionlabel/retentionlabel-get.md",sourceDirName:"cmd/purview/retentionlabel",slug:"/cmd/purview/retentionlabel/retentionlabel-get",permalink:"/cmd/purview/retentionlabel/retentionlabel-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/purview/retentionlabel/retentionlabel-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"Purview (purview)",permalink:"/cmd/groups/purview"},next:{title:"purview retentionlabel list",permalink:"/cmd/purview/retentionlabel/retentionlabel-list"}},d={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Response",id:"response",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"purview-retentionlabel-get"},"purview retentionlabel get"),(0,i.kt)("p",null,"Get a retention label"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentionlabel get [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: The Id of the retention label."),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Get a retention label"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentionlabel get --id c37d695e-d581-4ae9-82a0-9364eba4291e\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"!!! attention\nThis command is based on a Microsoft Graph API that is currently in preview and is subject to change once the API reached general availability."),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,'=== "JSON"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```json\n{\n  "displayName": "TEST LABEL",\n  "descriptionForAdmins": "",\n  "descriptionForUsers": "",\n  "isInUse": false,\n  "retentionTrigger": "dateCreated",\n  "behaviorDuringRetentionPeriod": "retain",\n  "actionAfterRetentionPeriod": "delete",\n  "createdDateTime": "2022-12-12T15:14:53Z",\n  "lastModifiedDateTime": "2022-12-12T15:43:06Z",\n  "labelToBeApplied": "",\n  "defaultRecordBehavior": "startLocked",\n  "id": "5c8af2e2-b489-4fa0-9c16-180180245ac8",\n  "retentionDuration": {\n    "days": 100\n  },\n  "createdBy": {\n    "user": {\n      "id": null,\n      "displayName": "John Doe"\n    }\n  },\n  "lastModifiedBy": {\n    "user": {\n      "id": null,\n      "displayName": "John Doe"\n    }\n  },\n  "dispositionReviewStages": []\n}\n```\n')),(0,i.kt)("p",null,'=== "Text"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```text\nactionAfterRetentionPeriod   : delete\nbehaviorDuringRetentionPeriod: retain\ncreatedBy                    : {"user":{"id":null,"displayName":"John Doe"}}\ncreatedDateTime              : 2022-12-12T15:14:53Z\ndefaultRecordBehavior        : startLocked\ndescriptionForAdmins         :\ndescriptionForUsers          :\ndisplayName                  : TEST LABEL\ndispositionReviewStages      : []\nid                           : 5c8af2e2-b489-4fa0-9c16-180180245ac8\nisInUse                      : false\nlabelToBeApplied             :\nlastModifiedBy               : {"user":{"id":null,"displayName":"John Doe"}}\nlastModifiedDateTime         : 2022-12-12T15:43:06Z\nretentionDuration            : {"days":100}\nretentionTrigger             : dateCreated\n```\n')),(0,i.kt)("p",null,'=== "CSV"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```csv\ndisplayName,descriptionForAdmins,descriptionForUsers,isInUse,retentionTrigger,behaviorDuringRetentionPeriod,actionAfterRetentionPeriod,createdDateTime,lastModifiedDateTime,labelToBeApplied,defaultRecordBehavior,id,retentionDuration,createdBy,lastModifiedBy,dispositionReviewStages\nTEST LABEL,,,,dateCreated,retain,delete,2022-12-12T15:14:53Z,2022-12-12T15:43:06Z,,startLocked,5c8af2e2-b489-4fa0-9c16-180180245ac8,"{""days"":100}","{""user"":{""id"":null,""displayName"":""John Doe""}}","{""user"":{""id"":null,""displayName"":""John Doe""}}",[]\n```\n')))}c.isMDXComponent=!0}}]);