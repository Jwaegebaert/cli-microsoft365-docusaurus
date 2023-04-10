"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[74998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,y=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={},o="purview retentionevent add",s={unversionedId:"cmd/purview/retentionevent/retentionevent-add",id:"cmd/purview/retentionevent/retentionevent-add",title:"purview retentionevent add",description:"Create a retention event",source:"@site/docs/cmd/purview/retentionevent/retentionevent-add.md",sourceDirName:"cmd/purview/retentionevent",slug:"/cmd/purview/retentionevent/retentionevent-add",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentionevent/retentionevent-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/purview/retentionevent/retentionevent-add.md",tags:[],version:"current",lastUpdatedAt:1678913648,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{},sidebar:"commands",previous:{title:"purview auditlog list",permalink:"/cli-microsoft365-docusaurus/cmd/purview/auditlog/auditlog-list"},next:{title:"purview retentionevent get",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentionevent/retentionevent-get"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2},{value:"Response",id:"response",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"purview-retentionevent-add"},"purview retentionevent add"),(0,a.kt)("p",null,"Create a retention event"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentionevent add [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --displayName <displayName>"),"\n: The display name of the event"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e, --eventTypeName [eventTypeName]"),"\n: Name of the event type associated with the event. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"eventTypeId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"eventTypeName")," but not both."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --eventTypeId [eventTypeId]"),"\n: Id of the event type associated with the event. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"eventTypeId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"eventTypeName")," but not both."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-d, --description [description]"),"\n: A description for the event"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--triggerDateTime [triggerDateTime]"),"\n: Optional time when the event should be triggered."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-a, --assetIds [assetIds]"),"\n: The Asset IDs for items in SharePoint and OneDrive that are related to this event. Only items that have labels associated with the event type you chose will be retained. Specify ",(0,a.kt)("inlineCode",{parentName:"p"},"assetIds")," and/or ",(0,a.kt)("inlineCode",{parentName:"p"},"keywords"),", but at least one."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-k, --keywords [keywords]"),"\n: The keywords for items in Exchange that are related to this event. Only items that have labels associated with the event type you chose will be retained. Specify ",(0,a.kt)("inlineCode",{parentName:"p"},"assetIds")," and/or ",(0,a.kt)("inlineCode",{parentName:"p"},"keywords"),", but at least one."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,a.kt)("p",null,"!!! attention\nThis command currently only supports delegated permissions."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Create a retention event to start retention at the end of 2022 for all employee documents that have been labeled and have the Asset ID ",(0,a.kt)("em",{parentName:"p"},"EmployeeNr1234")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentionevent add --displayName 'Employee information expiration' --description 'Employee documents expired due to offboarding' --eventTypeName 'CustomRetentionTime' --triggerDateTime '2022-12-31' --assetIds 'ComplianceAssetId:EmployeeNr1234'\n")),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("p",null,"This command is part of a series of commands that have to do with event-based retention. Event-based retention is about starting a retention period when a specific event occurs, instead of the moment a document was labeled or created."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/microsoft-365/compliance/event-driven-retention?view=o365-worldwide"},"Read more on event-based retention here")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "displayName": "Event display name",\n  "description": "Event description",\n  "eventTriggerDateTime": "2023-04-02T15:47:54Z",\n  "lastStatusUpdateDateTime": "0001-01-01T00:00:00Z",\n  "createdDateTime": "2023-02-20T18:53:05Z",\n  "lastModifiedDateTime": "2023-02-20T18:53:05Z",\n  "id": "9f5c1a04-8f7a-4bff-e400-08db1373b324",\n  "eventQueries": [\n    {\n      "queryType": "files",\n      "query": "filesQuery,filesQuery1"\n    },\n    {\n      "queryType": "messages",\n      "query": "messagesQuery,messagesQuery1"\n    }\n  ],\n  "eventStatus": {\n    "error": null,\n    "status": "pending"\n  },\n  "eventPropagationResults": [],\n  "createdBy": {\n    "user": {\n      "id": null,\n      "displayName": "John Doe"\n    }\n  },\n  "lastModifiedBy": {\n    "user": {\n      "id": null,\n      "displayName": "John Doe"\n    }\n  }\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```text\ncreatedBy               : {"user":{"id":null,"displayName":"John Doe"}}\ncreatedDateTime         : 2023-02-20T18:53:05Z\ndescription             : Event description\ndisplayName             : Event display name\neventPropagationResults : []\neventQueries            : [{"queryType":"files","query":"filesQuery,filesQuery1"},{"queryType":"messages","query":"messagesQuery,messagesQuery1"}]\neventStatus             : {"error":null,"status":"pending"}\neventTriggerDateTime    : 2023-04-02T15:47:54Z\nid                      : 9f5c1a04-8f7a-4bff-e400-08db1373b324\nlastModifiedBy          : {"user":{"id":null,"displayName":"John Doe"}}\nlastModifiedDateTime    : 2023-02-20T18:53:05Z\nlastStatusUpdateDateTime: 0001-01-01T00:00:00Z \n```\n')),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```csv\ndisplayName,description,eventTriggerDateTime,lastStatusUpdateDateTime,createdDateTime,lastModifiedDateTime,id,eventQueries,eventStatus,eventPropagationResults,createdBy,lastModifiedBy\nEvent display name,Event description,2023-04-02T15:47:54Z,0001-01-01T00:00:00Z,2023-02-20T18:53:05Z,2023-02-20T18:53:05Z,9f5c1a04-8f7a-4bff-e400-08db1373b324,"[{""queryType"":""files"",""query"":""filesQuery,filesQuery1""},{""queryType"":""messages"",""query"":""messagesQuery,messagesQuery1""}]","{""error"":null,""status"":""pending""}",[],"{""user"":{""id"":null,""displayName"":""John Doe""}}","{""user"":{""id"":null,""displayName"":""John Doe""}}"\n```\n')),(0,a.kt)("p",null,'=== "Markdown"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```md\n# purview retentionevent add --displayName "Event display name" --eventType "Event Type" --description "Event description" --triggerDateTime "2023-04-02T15:47:54Z" --assetIds "filesQuery,filesQuery1" --keywords "messagesQuery,messagesQuery1"\n\nDate: 20/2/2023\n\n## Event display name (9f5c1a04-8f7a-4bff-e400-08db1373b324)\n\nProperty | Value\n---------|-------\ndisplayName | Event display name\ndescription | Event description\neventTriggerDateTime | 2023-04-02T15:47:54Z\nlastStatusUpdateDateTime | 0001-01-01T00:00:00Z\ncreatedDateTime | 2023-02-20T18:53:05Z\nlastModifiedDateTime | 2023-02-20T18:53:05Z\nid | 9f5c1a04-8f7a-4bff-e400-08db1373b324\neventQueries | [{"queryType":"files","query":"filesQuery,filesQuery1"},{"queryType":"messages","query":"messagesQuery,messagesQuery1"}]\neventStatus | {"error":null,"status":"pending"}\neventPropagationResults | []\ncreatedBy | {"user":{"id":null,"displayName":"John Doe"}}\nlastModifiedBy | {"user":{"id":null,"displayName":"John Doe"}}\n```\n')))}m.isMDXComponent=!0}}]);