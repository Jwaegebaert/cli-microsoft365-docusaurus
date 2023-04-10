"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[95352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=o.createContext({}),p=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),b=i,u=d["".concat(a,".").concat(b)]||d[b]||m[b]||s;return n?o.createElement(u,l(l({ref:t},c),{},{components:n})):o.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=b;var r={};for(var a in t)hasOwnProperty.call(t,a)&&(r[a]=t[a]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<s;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},26828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const s={},l="spo list webhook list",r={unversionedId:"cmd/spo/list/list-webhook-list",id:"cmd/spo/list/list-webhook-list",title:"spo list webhook list",description:"Lists all webhooks for the specified list",source:"@site/docs/cmd/spo/list/list-webhook-list.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-webhook-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-webhook-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-webhook-list.md",tags:[],version:"current",lastUpdatedAt:1677283761,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list webhook get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-webhook-get"},next:{title:"spo list webhook remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-webhook-remove"}},a={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-list-webhook-list"},"spo list webhook list"),(0,i.kt)("p",null,"Lists all webhooks for the specified list"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list webhook list [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list is located."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --listId [listId]"),"\n: ID of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: Title of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"List all webhooks for a list with a specific ID in a specific site"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list webhook list --webUrl https://contoso.sharepoint.com/sites/project-x --listId 0cd891ef-afce-4e55-b836-fce03286cccf\n")),(0,i.kt)("p",null,"List all webhooks for a list with a specific title in a specific site"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list webhook list --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle Documents\n")),(0,i.kt)("p",null,"List all webhooks for a list with a specific URL in a specific site"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list webhook list --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl '/sites/project-x/Documents'\n")),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,'=== "JSON"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "clientState": "system-managed:8082D436-D8DA-458D-96AD-34C902B73F37",\n    "expirationDateTime": "2022-11-16T20:25:12.2735056Z",\n    "id": "b8838bbb-9ddb-44fb-9016-0aacb9e02b77",\n    "notificationUrl": "https://northeurope1-0.pushnp.svc.ms/notifications?token=1e263e06-4bea-4da1-9f9f-5c8f713eef76",\n    "resource": "97d19285-b8a6-4c7f-9c6c-d6b850a6561a",\n    "resourceData": null\n  }\n]\n```\n')),(0,i.kt)("p",null,'=== "Text"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```text\nclientState                                          expirationDateTime            id                                    resource\n---------------------------------------------------  ----------------------------  ------------------------------------  ------------------------------------\nsystem-managed:8082D436-D8DA-458D-96AD-34C902B73F37  2022-11-16T20:25:12.2735056Z  b8838bbb-9ddb-44fb-9016-0aacb9e02b77  97d19285-b8a6-4c7f-9c6c-d6b850a6561a\n```\n")),(0,i.kt)("p",null,'=== "CSV"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```csv\nid,clientState,expirationDateTime,resource\nb8838bbb-9ddb-44fb-9016-0aacb9e02b77,system-managed:8082D436-D8DA-458D-96AD-34C902B73F37,2022-11-16T20:25:12.2735056Z,97d19285-b8a6-4c7f-9c6c-d6b850a6561a\n```\n")),(0,i.kt)("p",null,'=== "Markdown"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```md\n# spo list webhook list --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "Documents"\n\nDate: 2/20/2023\n\n## b8838bbb-9ddb-44fb-9016-0aacb9e02b77\n\nProperty | Value\n---------|-------\nclientState| system-managed:8082D436-D8DA-458D-96AD-34C902B73F37\nexpirationDateTime| 2022-11-16T20:25:12.2735056Z\nid| b8838bbb-9ddb-44fb-9016-0aacb9e02b77\nnotificationUrl| https://northeurope1-0.pushnp.svc.ms/notifications?token=1e263e06-4bea-4db1-9f9f-5c8f713eef76\nresource| 97d19285-b8a6-4c7f-9c6c-d6b850a6561a\nresourceData| null\n```\n')))}m.isMDXComponent=!0}}]);