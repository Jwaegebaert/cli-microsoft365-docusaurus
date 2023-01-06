"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(f,c(c({ref:t},s),{},{components:n})):o.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={},c="pp chatbot list",i={unversionedId:"cmd/pp/chatbot/chatbot-list",id:"cmd/pp/chatbot/chatbot-list",title:"pp chatbot list",description:"Lists Microsoft Power Platform chatbot in the specified Power Platform environment",source:"@site/docs/cmd/pp/chatbot/chatbot-list.md",sourceDirName:"cmd/pp/chatbot",slug:"/cmd/pp/chatbot/chatbot-list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/chatbot/chatbot-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/chatbot/chatbot-list.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp chatbot get",permalink:"/cli-microsoft365-docusaurus/cmd/pp/chatbot/chatbot-get"},next:{title:"pp chatbot remove",permalink:"/cli-microsoft365-docusaurus/cmd/pp/chatbot/chatbot-remove"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],s={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pp-chatbot-list"},"pp chatbot list"),(0,a.kt)("p",null,"Lists Microsoft Power Platform chatbot in the specified Power Platform environment"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pp chatbot list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e, --environment <environment>"),"\n: The name of the environment."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Run the command as admin for environments you do not have explicitly assigned permissions to."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"List chatbots in a specific environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp chatbot list --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5"\n')),(0,a.kt)("p",null,"List chatbots in a specific environment as admin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp chatbot list --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --asAdmin\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "language": 1033,\n    "botid": "23f5f586-97fd-43d5-95eb-451c9797a53d",\n    "authenticationTrigger": 0,\n    "stateCode": 0,\n    "createdOn": "2022-11-19T10:42:22Z",\n    "cdsBotId": "23f5f586-97fd-43d5-95eb-451c9797a53d",\n    "schemaName": "new_bot_23f5f58697fd43d595eb451c9797a53d",\n    "ownerId": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "botModifiedOn": "2022-11-19T20:19:57Z",\n    "solutionId": "fd140aae-4df4-11dd-bd17-0019b9312238",\n    "isManaged": false,\n    "versionNumber": 1429641,\n    "timezoneRuleVersionNumber": 0,\n    "displayName": "CLI Chatbot",\n    "statusCode": 1,\n    "owner": "Doe, John",\n    "overwriteTime": "1900-01-01T00:00:00Z",\n    "componentState": 0,\n    "componentIdUnique": "cdcd6496-e25d-4ad1-91cf-3f4d547fdd23",\n    "authenticationMode": 1,\n    "botModifiedBy": "Doe, John",\n    "accessControlPolicy": 0,\n    "publishedOn": "2022-11-19T19:19:53Z"\n  }\n]\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\ndisplayName   botid                                 publishedOn           createdOn             botModifiedOn\n------------  ------------------------------------  --------------------  --------------------  --------------------\nCLI Chatbot   23f5f586-97fd-43d5-95eb-451c9797a53d  2022-11-19T19:19:53Z  2022-11-19T10:42:22Z  2022-11-19T20:19:57Z\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\ndisplayName,botid,publishedOn,createdOn,botModifiedOn\nCLI Chatbot,23f5f586-97fd-43d5-95eb-451c9797a53d,2022-11-19T19:19:53Z,2022-11-19T10:42:22Z,2022-11-19T20:19:57Z\n```\n")))}d.isMDXComponent=!0}}]);