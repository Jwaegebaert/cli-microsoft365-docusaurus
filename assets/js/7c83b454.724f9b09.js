"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[96153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(n),u=a,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||s;return n?r.createElement(g,m(m({ref:t},c),{},{components:n})):r.createElement(g,m({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,m=new Array(s);m[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,m[1]=o;for(var i=2;i<s;i++)m[i]=n[i];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const s={},m="yammer message get",o={unversionedId:"cmd/yammer/message/message-get",id:"cmd/yammer/message/message-get",title:"yammer message get",description:"Returns a Yammer message",source:"@site/docs/cmd/yammer/message/message-get.md",sourceDirName:"cmd/yammer/message",slug:"/cmd/yammer/message/message-get",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/message/message-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/message/message-get.md",tags:[],version:"current",lastUpdatedAt:1668347314,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{},sidebar:"commands",previous:{title:"yammer message add",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/message/message-add"},next:{title:"yammer message like set",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/message/message-like-set"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"yammer-message-get"},"yammer message get"),(0,a.kt)("p",null,"Returns a Yammer message"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer message get [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--id <id>"),"\n: The id of the Yammer message"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"!!! attention\nIn order to use this command, you need to grant the Azure AD application used by the CLI for Microsoft 365 the permission to the Yammer API. To do this, execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"cli consent --service yammer")," command."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Returns the Yammer message with the id 1239871123"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer message get --id 1239871123\n")),(0,a.kt)("p",null,"Returns the Yammer message with the id 1239871123 in JSON format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer message get --id 1239871123 --output json\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "id": 2000337749565441,\n  "sender_id": 36425097217,\n  "delegate_id": null,\n  "replied_to_id": null,\n  "created_at": "2022/11/11 21:00:20 +0000",\n  "network_id": 5897756673,\n  "message_type": "update",\n  "sender_type": "user",\n  "url": "https://www.yammer.com/api/v1/messages/2000337749565441",\n  "web_url": "https://www.yammer.com/contoso.onmicrosoft.com/messages/2000337749565441",\n  "group_id": 31158067201,\n  "body": {\n    "parsed": "Hello everyone!",\n    "plain": "Hello everyone!",\n    "rich": "Hello everyone!"\n  },\n  "thread_id": 2000337749565441,\n  "client_type": "O365 Api Auth",\n  "client_url": "https://api.yammer.com",\n  "system_message": false,\n  "direct_message": false,\n  "chat_client_sequence": null,\n  "language": "no",\n  "notified_user_ids": [],\n  "privacy": "public",\n  "attachments": [],\n  "liked_by": {\n    "count": 0,\n    "names": []\n  },\n  "supplemental_reply": false,\n  "content_excerpt": "Hello everyone!"\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\ncontent_excerpt: Hello everyone!\ncreated_at     : 2022/11/11 21:00:20 +0000\ndirect_message : false\ngroup_id       : 31158067201\nid             : 2000337749565441\nmessage_type   : update\nprivacy        : public\nreplied_to_id  : null\nsender_id      : 36425097217\nsystem_message : false\nthread_id      : 2000337749565441\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nid,sender_id,replied_to_id,thread_id,group_id,created_at,direct_message,system_message,privacy,message_type,content_excerpt\n2000337749565441,36425097217,,2000337749565441,31158067201,2022/11/11 21:00:20 +0000,,,public,update,Hello everyone!\n```\n")))}d.isMDXComponent=!0}}]);