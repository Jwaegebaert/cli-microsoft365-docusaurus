"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,c(c({ref:t},p),{},{components:n})):a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={},c="teams chat list",s={unversionedId:"cmd/teams/chat/chat-list",id:"cmd/teams/chat/chat-list",title:"teams chat list",description:"Lists all Microsoft Teams chat conversations for the current user.",source:"@site/docs/cmd/teams/chat/chat-list.md",sourceDirName:"cmd/teams/chat",slug:"/cmd/teams/chat/chat-list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/chat/chat-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/chat/chat-list.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams chat get",permalink:"/cli-microsoft365-docusaurus/cmd/teams/chat/chat-get"},next:{title:"teams chat member list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/chat/chat-member-list"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:i};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-chat-list"},"teams chat list"),(0,r.kt)("p",null,"Lists all Microsoft Teams chat conversations for the current user."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams chat list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-t, --type [chatType]"),"\n: The chat type to optionally filter chat conversations by type. The value can be ",(0,r.kt)("inlineCode",{parentName:"p"},"oneOnOne"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting"),"."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List all the Microsoft Teams chat conversations of the current user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams chat list\n")),(0,r.kt)("p",null,"List only the one on one Microsoft Teams chat conversations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams chat list --type oneOnOne\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "id": "19:2da4c29f6d7041eca70b638b43d45437@thread.v2",\n    "topic": null,\n    "createdDateTime": "2022-11-05T13:06:25.218Z",\n    "lastUpdatedDateTime": "2022-11-05T13:06:25.218Z",\n    "chatType": "oneOnOne",\n    "webUrl": "https://teams.microsoft.com/l/chat/19%3A2da4c29f6d7041eca70b638b43d45437%40thread.v2/0?tenantId=446355e4-e7e3-43d5-82f8-d7ad8272d55b",\n    "tenantId": "446355e4-e7e3-43d5-82f8-d7ad8272d55b",\n    "onlineMeetingInfo": null,\n    "viewpoint": {\n      "isHidden": false,\n      "lastMessageReadDateTime": "2022-11-05T13:06:30.582Z"\n    }\n  }\n]\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nid                                             topic  chatType\n---------------------------------------------  -----  --------\n19:2da4c29f6d7041eca70b638b43d45437@thread.v2  null   oneOnOne\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nid,topic,chatType\n19:2da4c29f6d7041eca70b638b43d45437@thread.v2,,oneOnOne\n```\n")))}d.isMDXComponent=!0}}]);