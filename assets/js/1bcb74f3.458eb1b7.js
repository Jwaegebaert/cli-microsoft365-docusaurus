"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[73862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),i=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(n),u=r,f=p["".concat(m,".").concat(u)]||p[u]||d[u]||s;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const s={},l="teams message reply list",o={unversionedId:"cmd/teams/message/message-reply-list",id:"cmd/teams/message/message-reply-list",title:"teams message reply list",description:"Retrieves replies to a message from a channel in a Microsoft Teams team",source:"@site/docs/cmd/teams/message/message-reply-list.md",sourceDirName:"cmd/teams/message",slug:"/cmd/teams/message/message-reply-list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/message/message-reply-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/message/message-reply-list.md",tags:[],version:"current",lastUpdatedAt:1667567406,formattedLastUpdatedAt:"Nov 4, 2022",frontMatter:{},sidebar:"commands",previous:{title:"teams message list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/message/message-list"},next:{title:"teams message send",permalink:"/cli-microsoft365-docusaurus/cmd/teams/message/message-send"}},m={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-message-reply-list"},"teams message reply list"),(0,r.kt)("p",null,"Retrieves replies to a message from a channel in a Microsoft Teams team"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams message reply list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --teamId <teamId>"),"\n: The ID of the team where the channel is located"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-c, --channelId <channelId>"),"\n: The ID of the channel that contains the message"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-m, --messageId <messageId>"),"\n: The ID of the message to retrieve replies for"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"You can only retrieve replies to a message from a Microsoft Teams team if you are a member of that team."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Retrieve the replies from a specified message from a channel of the Microsoft Teams team"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams message reply list --teamId 5f5d7b71-1161-44d8-bcc1-3da710eb4171 --channelId 19:88f7e66a8dfe42be92db19505ae912a8@thread.skype --messageId 1540747442203\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'``` json\n[\n  {\n    "id": "1540747442203",\n    "replyToId": "1666799520731",\n    "etag": "1540747442203",\n    "messageType": "message",\n    "createdDateTime": "2022-10-26T15:57:13.162Z",\n    "lastModifiedDateTime": "2022-10-26T15:57:13.162Z",\n    "lastEditedDateTime": null,\n    "deletedDateTime": null,\n    "subject": null,\n    "summary": null,\n    "chatId": null,\n    "importance": "normal",\n    "locale": "en-us",\n    "webUrl": "https://teams.microsoft.com/l/message/19%388f7e66a8dfe42be92db19505ae912a8%40thread.tacv2/1540747442203?groupId=5f5d7b71-1161-44d8-bcc1-3da710eb4171&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba&createdTime=1540747442203&parentMessageId=1666799520731",\n    "policyViolation": null,\n    "eventDetail": null,\n    "from": {\n      "application": null,\n      "device": null,\n      "user": {\n        "id": "78ccf530-bbf0-47e4-aae6-da5f8c6fb142",\n        "displayName": "John Doe",\n        "userIdentityType": "aadUser",\n        "tenantId": "92e59666-257b-49c3-b1fa-1bae8107f6ba"\n      }\n    },\n    "body": {\n      "contentType": "text",\n      "content": "First reply"\n    },\n    "channelIdentity": {\n      "teamId": "5f5d7b71-1161-44d8-bcc1-3da710eb4171",\n      "channelId": "19:88f7e66a8dfe42be92db19505ae912a8@thread.tacv2"\n    },\n    "attachments": [],\n    "mentions": [],\n    "reactions": []\n  }\n]\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"``` text\nid             body\n-------------  -----------\n1540747442203  First reply\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"``` text\nid,body\n1540747442203,First reply\n```\n")))}d.isMDXComponent=!0}}]);