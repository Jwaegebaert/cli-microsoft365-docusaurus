"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,y=u["".concat(l,".").concat(d)]||u[d]||p[d]||s;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[u]="string"==typeof e?e:a,o[1]=m;for(var i=2;i<s;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const s={},o="yammer search",m={unversionedId:"cmd/yammer/yammer-search",id:"cmd/yammer/yammer-search",title:"yammer search",description:"Returns a list of messages, users, topics and groups that match the specified query.",source:"@site/docs/cmd/yammer/yammer-search.md",sourceDirName:"cmd/yammer",slug:"/cmd/yammer/yammer-search",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/yammer-search",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/yammer-search.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"yammer user list",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/user/user-list"},next:{title:"Utilities (util)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/util"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"yammer-search"},"yammer search"),(0,a.kt)("p",null,"Returns a list of messages, users, topics and groups that match the specified query."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer search [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--queryText <queryText>"),"\n: The query for the search"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--show [show]"),"\n: Specifies the type of data to return when using --output text. Allowed values ",(0,a.kt)("inlineCode",{parentName:"p"},"summary, messages, users, topics, groups"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--limit [limit]"),"\n: Limits the results returned for each item category."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"!!! attention\nIn order to use this command, you need to grant the Azure AD application used by the CLI for Microsoft 365 the permission to the Yammer API. To do this, execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"cli consent --service yammer")," command."),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--show")," option in JSON output is not supported. To filter JSON results, use either a JMESPath query or filter the data yourself after retrieving them."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Returns search result for the query ",(0,a.kt)("inlineCode",{parentName:"p"},"community")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer search --queryText "community"\n')),(0,a.kt)("p",null,"Returns groups that match ",(0,a.kt)("inlineCode",{parentName:"p"},"community")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer search --queryText "community" --show "groups"\n')),(0,a.kt)("p",null,"Returns topics that match ",(0,a.kt)("inlineCode",{parentName:"p"},"community")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer search --queryText "community" --show "topics"\n')),(0,a.kt)("p",null,"Returns the first 50 users who match the search query ",(0,a.kt)("inlineCode",{parentName:"p"},"nuborocks.onmicrosoft.com")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer search --queryText "nuborocks.onmicrosoft.com" --show "users" --limit 50\n')),(0,a.kt)("p",null,"Returns all search results for the query ",(0,a.kt)("inlineCode",{parentName:"p"},"community"),". Stops at 1000 results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer search --queryText "community" --output json\n')),(0,a.kt)("p",null,"Returns the search results for the query ",(0,a.kt)("inlineCode",{parentName:"p"},"community")," and limits the results to the first 50 entries for each result category."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer search --queryText "community" --output json --limit 50\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "summary": {\n    "messages": 1,\n    "topics": 0,\n    "users": 0,\n    "groups": 0\n  },\n  "messages": [\n    {\n      "id": 2000337648877569,\n      "sender_id": 36425097217,\n      "delegate_id": null,\n      "replied_to_id": null,\n      "created_at": "2022/11/11 21:00:14 +0000",\n      "network_id": 5897756673,\n      "message_type": "update",\n      "sender_type": "user",\n      "url": "https://www.yammer.com/api/v1/messages/2000337648877569",\n      "web_url": "https://www.yammer.com/contoso.onmicrosoft.com/messages/2000337648877569",\n      "group_id": 31158067201,\n      "body": {\n        "parsed": "Hello everyone!",\n        "plain": "Hello everyone!",\n        "rich": "Hello everyone!"\n      },\n      "thread_id": 2000337648877569,\n      "client_type": "O365 Api Auth",\n      "client_url": "https://api.yammer.com",\n      "system_message": false,\n      "direct_message": false,\n      "chat_client_sequence": null,\n      "language": "no",\n      "notified_user_ids": [],\n      "privacy": "public",\n      "attachments": [],\n      "liked_by": {\n        "count": 1,\n        "names": [\n          {\n            "full_name": "johndoe",\n            "permalink": "JohnDoe",\n            "user_id": 36425097217,\n            "network_id": 5897756673\n          }\n        ]\n      },\n      "supplemental_reply": false,\n      "content_excerpt": "Hello everyone!",\n      "group_created_id": 31158067201\n    }\n  ],\n  "users": [],\n  "topics": [],\n  "groups": []\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nid                description      type     web_url\n----------------  ---------------  -------  ----------------------------------------------------------------------------\n2000337648877569  Hello everyone!  message  https://www.yammer.com/contoso.onmicrosoft.com/messages/2000337648877569\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nid,description,type,web_url\n2000337648877569,Hello everyone!,message,https://www.yammer.com/contoso.onmicrosoft.com/messages/2000337648877569\n```\n")))}u.isMDXComponent=!0}}]);