"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[83963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),m=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=m(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=o,p=u["".concat(l,".").concat(d)]||u[d]||A[d]||r;return n?s.createElement(p,a(a({ref:t},c),{},{components:n})):s.createElement(p,a({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var m=2;m<r;m++)a[m]=n[m];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>A,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var s=n(87462),o=(n(67294),n(3905));const r={},a="outlook message list",i={unversionedId:"cmd/outlook/message/message-list",id:"cmd/outlook/message/message-list",title:"outlook message list",description:"Gets all mail messages from the specified folder",source:"@site/docs/cmd/outlook/message/message-list.md",sourceDirName:"cmd/outlook/message",slug:"/cmd/outlook/message/message-list",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/message/message-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/outlook/message/message-list.md",tags:[],version:"current",lastUpdatedAt:1678540853,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{},sidebar:"commands",previous:{title:"outlook message get",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/message/message-get"},next:{title:"outlook message move",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/message/message-move"}},l={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],c={toc:m},u="wrapper";function A(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outlook-message-list"},"outlook message list"),(0,o.kt)("p",null,"Gets all mail messages from the specified folder"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook message list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--folderName [folderName]"),"\n: Name of the folder from which to list messages"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--folderId [folderId]"),"\n: ID of the folder from which to list messages"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"List all messages in the folder with the specified name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook message list --folderName Archive\n")),(0,o.kt)("p",null,"List all messages in the folder with the specified ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook message list --folderId AAMkAGVmMDEzMTM4LTZmYWUtNDdkNC1hMDZiLTU1OGY5OTZhYmY4OAAuAAAAAAAiQ8W967B7TKBjgx9rVEURAQAiIsqMbYjsT5e-T7KzowPTAAAAAAFNAAA=\n")),(0,o.kt)("p",null,"List all messages in the folder with the specified well-known name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook message list --folderName inbox\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "id": "AAMkAGUzZWVmZWU4LTM5ZmItNDA4My04OTIzLWY1MGUxNzdiYTQ0MQBGAAAAAABn1FpEFqPeR7YAnkzP_VgXBwAhebtol4HnTZCmNsr9Gnh6AAAAAAEMAAAhebtol4HnTZCmNsr9Gnh6AAPfHbtVAAA=",\n    "createdDateTime": "2023-01-26T19:22:44Z",\n    "lastModifiedDateTime": "2023-01-26T19:22:46Z",\n    "changeKey": "CQAAABYAAAAhebtol4HnTZCmNsr9Gnh6AAPehsHb",\n    "categories": [],\n    "receivedDateTime": "2023-01-26T19:22:45Z",\n    "sentDateTime": "2023-01-26T19:22:42Z",\n    "hasAttachments": true,\n    "internetMessageId": "<HE1P190MB032953D4D9C86FCEF5FFA8C4CECF9@HE1P190MB0329.EURP190.PROD.OUTLOOK.COM>",\n    "subject": "Lorem ipsum",\n    "bodyPreview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel diam gravida, auctor mauris nec, posuere tellus. Vivamus placerat, nunc ac cursus feugiat, arcu tellus mattis nisl, id cursus nisl lectus eu lacus. Praesent malesuada ut orci vitae viverra.",\n    "importance": "normal",\n    "parentFolderId": "AAMkAGUzZWVmZWU4LTM5ZmItNDA4My04OTIzLWY1MGUxNzdiYTQ0MQAuAAAAAABn1FpEFqPeR7YAnkzP_VgXAQAhebtol4HnTZCmNsr9Gnh6AAAAAAEMAAA=",\n    "conversationId": "AAQkAGUzZWVmZWU4LTM5ZmItNDA4My04OTIzLWY1MGUxNzdiYTQ0MQAQAJfvGq77YHxJvRN73_QiuVw=",\n    "conversationIndex": "AQHZMbuNl+8arvtgfEm9E3vf5CK5XA==",\n    "isDeliveryReceiptRequested": false,\n    "isReadReceiptRequested": false,\n    "isRead": false,\n    "isDraft": false,\n    "webLink": "https://outlook.office365.com/owa/?ItemID=AAMkAGUzZWVmZWU4LTM5ZmItNDA4My04OTIzLWY1MGUxNzdiYTQ0MQBGAAAAAABn1FpEFqPeR7YAnkzP%2BVgXBwAhebtol4HnTZCmNsr9Gnh6AAAAAAEMAAAhebtol4HnTZCmNsr9Gnh6AAPfHbtVAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",\n    "inferenceClassification": "focused",\n    "body": {\n      "contentType": "html",\n      "content": "<html><head>\\r\\\\\\n<meta http-equiv=\\"Content-Type\\" content=\\"text/html; charset=utf-8\\"><style type=\\"text/css\\" style=\\"display:none\\">\\r\\\\\\n\x3c!--\\r\\\\\\np\\r\\\\\\n\\t{margin-top:0;\\r\\\\\\n\\tmargin-bottom:0}\\r\\\\\\n--\x3e\\r\\\\\\n</style></head><body dir=\\"ltr\\"><div class=\\"elementToProof ContentPasted0\\" style=\\"font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)\\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel diam gravida, auctor mauris nec, posuere tellus. Vivamus placerat, nunc ac cursus feugiat, arcu tellus mattis nisl, id cursus nisl lectus eu lacus. Praesent malesuada ut orci vitae viverra. Suspendisse cursus turpis vel urna volutpat congue. Etiam auctor nec nulla sed suscipit. Vestibulum rhoncus quis mi ac faucibus. Curabitur eget eleifend felis. Vestibulum ut dolor non elit molestie ornare. <br></div></body></html>"\n    },\n    "sender": {\n      "emailAddress": {\n        "name": "John Doe",\n        "address": "john.doe@contoso.com"\n      }\n    },\n    "from": {\n      "emailAddress": {\n        "name": "John Doe",\n        "address": "john.doe@contoso.com"\n      }\n    },\n    "toRecipients": [\n      {\n        "emailAddress": {\n          "name": "Megan Bowen",\n          "address": "megan.bowen@contoso.com"\n        }\n      }\n    ],\n    "ccRecipients": [],\n    "bccRecipients": [],\n    "replyTo": [],\n    "flag": {\n      "flagStatus": "notFlagged"\n    }\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```txt\nsubject      receivedDateTime    \n-----------  --------------------\nLorem ipsum  2023-01-26T19:22:45Z\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nsubject,receivedDateTime\nLorem ipsum,2023-01-26T19:22:45Z\n```\n")),(0,o.kt)("p",null,'=== "Markdown"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```md\n# outlook message list --folderName "inbox"\n\nDate: 4/2/2023\n\n## AAMkAGUzZWVmZWU4LTM5ZmItNDA4My04OTIzLWY1MGUxNzdiYTQ0MQBGAAAAAABn1FpEFqPeR7YAnkzP_VgXBwAhebtol4HnTZCmNsr9Gnh6AAAAAAEMAAAhebtol4HnTZCmNsr9Gnh6AAPfHbtVAAA=\n\nProperty | Value\n---------|-------\nid | AAMkAGUzZWVmZWU4LTM5ZmItNDA4My04OTIzLWY1MGUxNzdiYTQ0MQBGAAAAAABn1FpEFqPeR7YAnkzP_VgXBwAhebtol4HnTZCmNsr9Gnh6AAAAAAEMAAAhebtol4HnTZCmNsr9Gnh6AAPfHbtVAAA=\ncreatedDateTime | 2023-01-26T19:22:44Z\nlastModifiedDateTime | 2023-01-26T19:22:46Z\nchangeKey | CQAAABYAAAAhebtol4HnTZCmNsr9Gnh6AAPk7Plc\ncategories | []\nreceivedDateTime | 2023-01-26T19:22:45Z\nsentDateTime | 2023-01-26T19:22:42Z\nhasAttachments | true\ninternetMessageId | <HE1P190MB032953D4D9C86FCEF5FFA8C4CECF9@HE1P190MB0329.EURP190.PROD.OUTLOOK.COM>\nsubject | Lorem ipsum\nbodyPreview | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel diam gravida, auctor mauris nec, posuere tellus. Vivamus placerat, nunc ac cursus feugiat, arcu tellus mattis nisl, id cursus nisl lectus eu lacus. Praesent malesuada ut orci vitae viverra.\nimportance | normal\nparentFolderId | AAMkAGUzZWVmZWU4LTM5ZmItNDA4My04OTIzLWY1MGUxNzdiYTQ0MQAuAAAAAABn1FpEFqPeR7YAnkzP\\_VgXAQAhebtol4HnTZCmNsr9Gnh6AAAAAAEMAAA=\nconversationId | AAQkAGUzZWVmZWU4LTM5ZmItNDA4My04OTIzLWY1MGUxNzdiYTQ0MQAQAJfvGq77YHxJvRN73\\_QiuVw=\nconversationIndex | AQHZMbuNl+8arvtgfEm9E3vf5CK5XA==\nisDeliveryReceiptRequested | false\nisReadReceiptRequested | false\nisRead | true\nisDraft | false\nwebLink | https://outlook.office365.com/owa/?ItemID=AAMkAGUzZWVmZWU4LTM5ZmItNDA4My04OTIzLWY1MGUxNzdiYTQ0MQBGAAAAAABn1FpEFqPeR7YAnkzP%2BVgXBwAhebtol4HnTZCmNsr9Gnh6AAAAAAEMAAAhebtol4HnTZCmNsr9Gnh6AAPfHbtVAAA%3D&exvsurl=1&viewmodel=ReadMessageItem\ninferenceClassification | focused\nbody | {"contentType":"html","content":"<html><head>\\r\\n<meta http-equiv=\\"Content-Type\\" content=\\"text/html; charset=utf-8\\"><style type=\\"text/css\\" style=\\"display:none\\">\\r\\n\x3c!--\\r\\np\\r\\n\\t{margin-top:0;\\r\\n\\tmargin-bottom:0}\\r\\n--\x3e\\r\\n</style></head><body dir=\\"ltr\\"><div class=\\"elementToProof ContentPasted0\\" style=\\"font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)\\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel diam gravida, auctor mauris nec, posuere tellus. Vivamus placerat, nunc ac cursus feugiat, arcu tellus mattis nisl, id cursus nisl lectus eu lacus. Praesent malesuada ut orci vitae viverra. Suspendisse cursus turpis vel urna volutpat congue. Etiam auctor nec nulla sed suscipit. Vestibulum rhoncus quis mi ac faucibus. Curabitur eget eleifend felis. Vestibulum ut dolor non elit molestie ornare. <br></div></body></html>"}\nsender | {"emailAddress":{"name":"John Doe","address":"john.doe@contoso.com"}}\nfrom | {"emailAddress":{"name":"John Doe","address":"john.doe@contoso.com"}}\ntoRecipients | [{"emailAddress":{"name":"Megan Bowen","address":"megan.bowen@contoso.com"}}]\nccRecipients | []\nbccRecipients | []\nreplyTo | []\nflag | {"flagStatus":"notFlagged"}\n```\n')),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Well-known folder names: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/resources/mailfolder?view=graph-rest-1.0"},"https://docs.microsoft.com/en-us/graph/api/resources/mailfolder?view=graph-rest-1.0"))))}A.isMDXComponent=!0}}]);