"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43769],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),i=m(a),f=s,u=i["".concat(d,".").concat(f)]||i[f]||p[f]||r;return a?n.createElement(u,l(l({ref:t},c),{},{components:a})):n.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,l=new Array(r);l[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[i]="string"==typeof e?e:s,l[1]=o;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},11823:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>i,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(87462),s=(a(67294),a(3905));const r={},l="teams message get",o={unversionedId:"cmd/teams/message/message-get",id:"cmd/teams/message/message-get",title:"teams message get",description:"Retrieves a message from a channel in a Microsoft Teams team",source:"@site/docs/cmd/teams/message/message-get.md",sourceDirName:"cmd/teams/message",slug:"/cmd/teams/message/message-get",permalink:"/cmd/teams/message/message-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/message/message-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams membersettings set",permalink:"/cmd/teams/membersettings/membersettings-set"},next:{title:"teams message list",permalink:"/cmd/teams/message/message-list"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:m};function i(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"teams-message-get"},"teams message get"),(0,s.kt)("p",null,"Retrieves a message from a channel in a Microsoft Teams team"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams message get [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-t, --teamId <teamId>"),"\n: The ID of the team where the channel is located"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-c, --channelId <channelId>"),"\n: The ID of the channel that contains the message"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: The ID of the message to retrieve"),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"You can only retrieve a message from a Microsoft Teams team if you are a member of that team."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Retrieve the specified message from a channel of the Microsoft Teams team"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams message get --teamId 5f5d7b71-1161-44d8-bcc1-3da710eb4171 --channelId 19:88f7e66a8dfe42be92db19505ae912a8@thread.skype --id 1540747442203\n")),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("p",null,'=== "JSON"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'``` json\n{\n  "id": "1540747442203",\n  "replyToId": null,\n  "etag": "1666799582385",\n  "messageType": "message",\n  "createdDateTime": "2022-10-26T15:52:00.731Z",\n  "lastModifiedDateTime": "2022-10-26T15:53:02.385Z",\n  "lastEditedDateTime": "2022-10-26T15:53:02.288Z",\n  "deletedDateTime": null,\n  "subject": "Second message Title",\n  "summary": null,\n  "chatId": null,\n  "importance": "normal",\n  "locale": "en-us",\n  "webUrl": "https://teams.microsoft.com/l/message/19%388f7e66a8dfe42be92db19505ae912a8%40thread.tacv2/1540747442203?groupId=5f5d7b71-1161-44d8-bcc1-3da710eb4171&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba&createdTime=1540747442203&parentMessageId=1540747442203",\n  "policyViolation": null,\n  "eventDetail": null,\n  "from": {\n    "application": null,\n    "device": null,\n    "user": {\n      "id": "78ccf530-bbf0-47e4-aae6-da5f8c6fb142",\n      "displayName": "John Doe",\n      "userIdentityType": "aadUser",\n      "tenantId": "92e59666-257b-49c3-b1fa-1bae8107f6ba"\n    }\n  },\n  "body": {\n    "contentType": "text",\n    "content": "second message!"\n  },\n  "channelIdentity": {\n    "teamId": "5f5d7b71-1161-44d8-bcc1-3da710eb4171",\n    "channelId": "19:e2916df2b11046beba42d22da898383f@thread.tacv2"\n  },\n  "attachments": [],\n  "mentions": [],\n  "reactions": []\n}\n```\n')),(0,s.kt)("p",null,'=== "Text"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'``` text\nattachments         : []\nbody                : {"contentType":"text","content":"second message!"}\nchannelIdentity     : {"teamId":"5f5d7b71-1161-44d8-bcc1-3da710eb4171","channelId":"19:e2916df2b11046beba42d22da898383f@thread.tacv2"}\nchatId              : null\ncreatedDateTime     : 2022-10-26T15:52:00.731Z\ndeletedDateTime     : null\netag                : 1666799582385\neventDetail         : null\nfrom                : {"application":null,"device":null,"user":{"id":"78ccf530-bbf0-47e4-aae6-da5f8c6fb142","displayName":"John Doe","userIdentityType":"aadUser","tenantId":"92e59666-257b-49c3-b1fa-1bae8107f6ba"}}\nid                  : 1540747442203\nimportance          : normal\nlastEditedDateTime  : 2022-10-26T15:53:02.288Z\nlastModifiedDateTime: 2022-10-26T15:53:02.385Z\nlocale              : en-us\nmentions            : []\nmessageType         : message\npolicyViolation     : null\nreactions           : []\nreplyToId           : null\nsubject             : Second message Title\nsummary             : null\nwebUrl              : https://teams.microsoft.com/l/message/19%388f7e66a8dfe42be92db19505ae912a8%40thread.tacv2/1540747442203?groupId=5f5d7b71-1161-44d8-bcc1-3da710eb4171&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba&createdTime=1540747442203&parentMessageId=1540747442203\n```\n')),(0,s.kt)("p",null,'=== "CSV"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'``` text\nid,replyToId,etag,messageType,createdDateTime,lastModifiedDateTime,lastEditedDateTime,deletedDateTime,subject,summary,chatId,importance,locale,webUrl,policyViolation,eventDetail,from,body,channelIdentity,attachments,mentions,reactions\n1540747442203,,1666799582385,message,2022-10-26T15:52:00.731Z,2022-10-26T15:53:02.385Z,2022-10-26T15:53:02.288Z,,Second message Title,,,normal,en-us,https://teams.microsoft.com/l/message/19%388f7e66a8dfe42be92db19505ae912a8%40thread.tacv2/1540747442203?groupId=5f5d7b71-1161-44d8-bcc1-3da710eb4171&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba&createdTime=1540747442203&parentMessageId=1540747442203,,,"{""application"":null,""device"":null,""user"":{""id"":""78ccf530-bbf0-47e4-aae6-da5f8c6fb142"",""displayName"":""John Doe"",""userIdentityType"":""aadUser"",""tenantId"":""92e59666-257b-49c3-b1fa-1bae8107f6ba""}}","{""contentType"":""text"",""content"":""second message!""}","{""teamId"":""5f5d7b71-1161-44d8-bcc1-3da710eb4171"",""channelId"":""19:e2916df2b11046beba42d22da898383f@thread.tacv2""}",[],[],[]\n```\n')))}i.isMDXComponent=!0}}]);