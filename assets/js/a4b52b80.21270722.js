"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[62457],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var m=n.createContext({}),c=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,m=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=s,f=d["".concat(m,".").concat(u)]||d[u]||p[u]||r;return a?n.createElement(f,l(l({ref:t},i),{},{components:a})):n.createElement(f,l({ref:t},i))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:s,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},83738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const r={},l="teams message list",o={unversionedId:"cmd/teams/message/message-list",id:"cmd/teams/message/message-list",title:"teams message list",description:"Lists all messages from a channel in a Microsoft Teams team",source:"@site/docs/cmd/teams/message/message-list.md",sourceDirName:"cmd/teams/message",slug:"/cmd/teams/message/message-list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/message/message-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/message/message-list.md",tags:[],version:"current",lastUpdatedAt:1678540844,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams message get",permalink:"/cli-microsoft365-docusaurus/cmd/teams/message/message-get"},next:{title:"teams message reply list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/message/message-reply-list"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],i={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,s.kt)(d,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"teams-message-list"},"teams message list"),(0,s.kt)("p",null,"Lists all messages from a channel in a Microsoft Teams team"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams message list [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-i, --teamId <teamId>"),"\n: The ID of the team where the channel is located."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-c, --channelId <channelId>"),"\n: The ID of the channel for which to list messages."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-s, --since [since]"),"\n: Date (ISO standard, dash separator) to get delta of messages from (in last 8 months)."),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"You can only retrieve a message from a Microsoft Teams team if you are a member of that team."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"List the messages from a channel of the Microsoft Teams team."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams message list --teamId fce9e580-8bba-4638-ab5c-ab40016651e3 --channelId 19:eb30973b42a847a2a1df92d91e37c76a@thread.skype\n")),(0,s.kt)("p",null,"List the messages from a channel of the Microsoft Teams team that have been created or modified since the date specified by the ",(0,s.kt)("inlineCode",{parentName:"p"},"--since")," parameter (WARNING: only captures the last 8 months of data)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams message list --teamId fce9e580-8bba-4638-ab5c-ab40016651e3 --channelId 19:eb30973b42a847a2a1df92d91e37c76a@thread.skype --since 2019-12-31T14:00:00Z\n")),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("p",null,'=== "JSON"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'``` json\n[\n  {\n    "id": "1666799217259",\n    "replyToId": null,\n    "etag": "1666799649208",\n    "messageType": "message",\n    "createdDateTime": "2022-10-26T15:46:57.259Z",\n    "lastModifiedDateTime": "2022-10-26T15:54:09.208Z",\n    "lastEditedDateTime": "2022-10-26T15:54:09.108Z",\n    "deletedDateTime": null,\n    "subject": "",\n    "summary": null,\n    "chatId": null,\n    "importance": "normal",\n    "locale": "en-us",\n    "webUrl": "https://teams.microsoft.com/l/message/19%3eb30973b42a847a2a1df92d91e37c76a%40thread.tacv2/1666799217259?groupId=fce9e580-8bba-4638-ab5c-ab40016651e3&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba&createdTime=1666799217259&parentMessageId=1666799217259",\n    "policyViolation": null,\n    "eventDetail": null,\n    "from": {\n      "application": null,\n      "device": null,\n      "user": {\n        "id": "78ccf530-bbf0-47e4-aae6-da5f8c6fb142",\n        "displayName": "John Doe",\n        "userIdentityType": "aadUser",\n        "tenantId": "92e59666-257b-49c3-b1fa-1bae8107f6ba"\n      }\n    },\n    "body": {\n      "contentType": "text",\n      "content": "First message!"\n    },\n    "channelIdentity": {\n      "teamId": "fce9e580-8bba-4638-ab5c-ab40016651e3",\n      "channelId": "19:e2916df2b11046beba42d22da898383f@thread.tacv2"\n    },\n    "attachments": [],\n    "mentions": [],\n    "reactions": []\n  }\n]\n```\n')),(0,s.kt)("p",null,'=== "Text"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"``` text\nid             summary  body\n-------------  -------  ---------------\n1666799217259  null     First message!\n```\n")),(0,s.kt)("p",null,'=== "CSV"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"``` text\nid,summary,body\n1666799217259,,First message!\n```\n")),(0,s.kt)("p",null,'=== "Markdown"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```md\n# teams message list --teamId "fce9e580-8bba-4638-ab5c-ab40016651e3" --channelId "19:e2916df2b11046beba42d22da898383f@thread.tacv2" --since "2022-12-31T14:00:00Z"\n\nDate: 1/3/2023\n\n## undefined (1666799217259)\n\nProperty | Value\n---------|-------\nreplyToId | null\netag | 1666799649208\nmessageType | message\ncreatedDateTime | 2022-10-26T15:46:57.259Z\nlastModifiedDateTime | 2022-10-26T15:54:09.208Z\nlastEditedDateTime | 2022-10-26T15:54:09.108Z\ndeletedDateTime | null\nsubject | null\nsummary | null\nchatId | null\nimportance | normal\nlocale | en-us\nwebUrl | https://teams.microsoft.com/l/message/19%3eb30973b42a847a2a1df92d91e37c76a%40thread.tacv2/1666799217259?groupId=fce9e580-8bba-4638-ab5c-ab40016651e3&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba&createdTime=1666799217259&parentMessageId=1666799217259\npolicyViolation | null\neventDetail | null\nid | 1672743172475\nfrom | {"application":null,"device":null,"user":{"id":"78ccf530-bbf0-47e4-aae6-da5f8c6fb142","displayName":"John Doe","userIdentityType":"aadUser","tenantId":"92e59666-257b-49c3-b1fa-1bae8107f6ba"}}\nbody | First message!\nchannelIdentity | {"teamId":"fce9e580-8bba-4638-ab5c-ab40016651e3","channelId":"19:e2916df2b11046beba42d22da898383f@thread.tacv2"}\nattachments | []\nmentions | []\nreactions | []\n```\n')))}p.isMDXComponent=!0}}]);