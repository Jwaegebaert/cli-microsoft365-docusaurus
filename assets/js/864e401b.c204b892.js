"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[37295],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const o={},a="flow run list",s={unversionedId:"cmd/flow/run/run-list",id:"cmd/flow/run/run-list",title:"flow run list",description:"Lists runs of the specified Microsoft Flow",source:"@site/docs/cmd/flow/run/run-list.md",sourceDirName:"cmd/flow/run",slug:"/cmd/flow/run/run-list",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/flow/run/run-list.md",tags:[],version:"current",lastUpdatedAt:1678056235,formattedLastUpdatedAt:"Mar 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"flow run get",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-get"},next:{title:"flow run resubmit",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-resubmit"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flow-run-list"},"flow run list"),(0,i.kt)("p",null,"Lists runs of the specified Microsoft Flow"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run list [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-f, --flowName <flowName>"),"\n: The name of the Microsoft Flow to retrieve the runs for"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-e, --environmentName <environmentName>"),"\n: The name of the environment to which the flow belongs"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--status [status]"),"\n: Filter the results to only flow runs with a given status: ",(0,i.kt)("inlineCode",{parentName:"p"},"Succeeded"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Running"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Failed")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Cancelled"),". By default all flow runs are listed."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--triggerStartTime [triggerStartTime]"),"\n: Time indicating the inclusive start of a time range of flow runs to return. This should be defined as a valid ISO 8601 string (2021-12-16T18:28:48.6964197Z)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--triggerEndTime [triggerEndTime]"),"\n: Time indicating the exclusive end of a time range of flow runs to return. This should be defined as a valid ISO 8601 string (2021-12-16T18:28:48.6964197Z)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Run the command as admin. Use this flag when targeting flows you don't own."),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,i.kt)("p",null,"If the environment with the name you specified doesn't exist, you will get the ",(0,i.kt)("inlineCode",{parentName:"p"},"Access to the environment 'xyz' is denied.")," error."),(0,i.kt)("p",null,"If the Microsoft Flow with the name you specified doesn't exist, you will get the ",(0,i.kt)("inlineCode",{parentName:"p"},"The caller with object id 'abc' does not have permission for connection 'xyz' under Api 'shared_logicflows'.")," error."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"List runs of the specified Microsoft Flow"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run list --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --flowName 5923cb07-ce1a-4a5c-ab81-257ce820109a\n")),(0,i.kt)("p",null,"List runs of the specified Microsoft Flow with a specific status"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run list --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --flowName 5923cb07-ce1a-4a5c-ab81-257ce820109a --status Running\n")),(0,i.kt)("p",null,"List runs of the specified Microsoft Flow between a specific time range"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run list --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --flowName 5923cb07-ce1a-4a5c-ab81-257ce820109a --triggerStartTime 2023-01-21T18:19:00Z --triggerEndTime 2023-01-22T00:00:00Z\n")),(0,i.kt)("p",null,"List runs of the specified Microsoft Flow owned by another user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run list --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --flowName 5923cb07-ce1a-4a5c-ab81-257ce820109a --asAdmin\n")),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("h3",{id:"standard-response"},"Standard response"),(0,i.kt)("p",null,'=== "JSON"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```json\n[      \n  {\n    "name": "08585329112602833828909892130CU17",\n    "id": "/providers/Microsoft.ProcessSimple/environments/Default-de348bc7-1aeb-4406-8cb3-97db021cadb4/flows/170fb67e-a514-4d84-8727-582022bd13a9/runs/08585329112602833828909892130CU17",\n    "type": "Microsoft.ProcessSimple/environments/flows/runs",\n    "properties": {\n      "startTime": "2022-11-17T14:33:45.2763872Z",\n      "status": "Running",\n      "correlation": {\n        "clientTrackingId": "08585329112602833829909892130CU00"\n      },\n      "trigger": {\n        "name": "When_a_new_response_is_submitted",\n        "inputsLink": {\n          "uri": "https://prod-08.centralindia.logic.azure.com:443/workflows/f7bf8f6b5c494e63bfc21b54087a596e/runs/08585329112602833828909892130CU17/contents/TriggerInputs?api-version=2016-06-01&se=2022-11-17T18%3A00%3A00.0000000Z&sp=%2Fruns%2F08585329112602833828909892130CU17%2Fcontents%2FTriggerInputs%2Fread&sv=1.0&sig=jmdMRWvY7uGoxTmqd3_a2bJtegXuVyuKTKKUVLiwh38",\n          "contentVersion": "6ZrBBE+MJg7IvhMgyJLMmA==",\n          "contentSize": 349,\n          "contentHash": {\n            "algorithm": "md5",\n            "value": "6ZrBBE+MJg7IvhMgyJLMmA=="\n          }\n        },\n        "outputsLink": {\n          "uri": "https://prod-08.centralindia.logic.azure.com:443/workflows/f7bf8f6b5c494e63bfc21b54087a596e/runs/08585329112602833828909892130CU17/contents/TriggerOutputs?api-version=2016-06-01&se=2022-11-17T18%3A00%3A00.0000000Z&sp=%2Fruns%2F08585329112602833828909892130CU17%2Fcontents%2FTriggerOutputs%2Fread&sv=1.0&sig=Y3qqjuWrrcQJrmF7uvm6LVzQy5w-dNOFWJ8Yt8khXvA",\n          "contentVersion": "Z/4a8tfYygNAR1xpc44iww==",\n          "contentSize": 493,\n          "contentHash": {\n            "algorithm": "md5",\n            "value": "Z/4a8tfYygNAR1xpc44iww=="\n          }\n        },\n        "startTime": "2022-11-17T14:33:45.1914506Z",\n        "endTime": "2022-11-17T14:33:45.1914506Z",\n        "originHistoryName": "08585329112602833829909892130CU00",\n        "correlation": {\n          "clientTrackingId": "08585329112602833829909892130CU00"\n        },\n        "status": "Succeeded"\n      }\n    },\n    "startTime": "2022-11-17T14:33:45.2763872Z",\n    "status": "Running"\n  }\n]\n```\n')),(0,i.kt)("p",null,'=== "Text"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```text\nname                               startTime                     status\n---------------------------------  ----------------------------  ---------\n08585329112602833828909892130CU17  2022-11-17T14:33:45.2763872Z  Running\n```\n")),(0,i.kt)("p",null,'=== "CSV"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```csv\nname,startTime,status\n08585329112602833828909892130CU17,2022-11-17T14:33:45.2763872Z,Running\n```\n")),(0,i.kt)("p",null,'=== "Markdown"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```md\n# flow run list --environmentName "Default-de348bc7-1aeb-4406-8cb3-97db021cadb4" --flowName "08585329112602833828909892130CU17"\n\nDate: 1/3/2023\n\n## 08585329112602833828909892130CU17 (/providers/Microsoft.ProcessSimple/environments/Default-de348bc7-1aeb-4406-8cb3-97db021cadb4/flows/170fb67e-a514-4d84-8727-582022bd13a9/runs/08585329112602833828909892130CU17)\n\nProperty | Value\n---------|-------\nname | 08585329112602833828909892130CU17\nid | /providers/Microsoft.ProcessSimple/environments/Default-de348bc7-1aeb-4406-8cb3-97db021cadb4/flows/170fb67e-a514-4d84-8727-582022bd13a9/runs/08585329112602833828909892130CU17\ntype | Microsoft.ProcessSimple/environments/flows/runs\nproperties | {"startTime":"2022-11-17T14:33:45.2763872Z","status":"Running","correlation":{"clientTrackingId":"08585329112602833829909892130CU00"},"trigger":{"name":"When_a_new_response_is_submitted","inputsLink":{"uri":"https://prod-08.centralindia.logic.azure.com:443/workflows/f7bf8f6b5c494e63bfc21b54087a596e/runs/08585329112602833828909892130CU17/contents/TriggerInputs?api-version=2016-06-01&se=2022-11-17T18%3A00%3A00.0000000Z&sp=%2Fruns%2F08585329112602833828909892130CU17%2Fcontents%2FTriggerInputs%2Fread&sv=1.0&sig=jmdMRWvY7uGoxTmqd3_a2bJtegXuVyuKTKKUVLiwh38","contentVersion":"6ZrBBE+MJg7IvhMgyJLMmA==","contentSize":349,"contentHash":{"algorithm":"md5","value":"6ZrBBE+MJg7IvhMgyJLMmA=="}},"outputsLink":{"uri":"https://prod-08.centralindia.logic.azure.com:443/workflows/f7bf8f6b5c494e63bfc21b54087a596e/runs/08585329112602833828909892130CU17/contents/TriggerOutputs?api-version=2016-06-01&se=2022-11-17T18%3A00%3A00.0000000Z&sp=%2Fruns%2F08585329112602833828909892130CU17%2Fcontents%2FTriggerOutputs%2Fread&sv=1.0&sig=Y3qqjuWrrcQJrmF7uvm6LVzQy5w-dNOFWJ8Yt8khXvA","contentVersion":"Z/4a8tfYygNAR1xpc44iww==","contentSize":493,"contentHash":{"algorithm":"md5","value":"Z/4a8tfYygNAR1xpc44iww=="}},"startTime":"2022-11-17T14:33:45.1914506Z","endTime":"2022-11-17T14:33:45.1914506Z","originHistoryName":"08585329112602833829909892130CU00","correlation":{"clientTrackingId":"08585329112602833829909892130CU00"},"status":"Succeeded"}}\nstartTime | 2022-11-17T14:33:45.2763872Z\nstatus | Running\n```\n')))}p.isMDXComponent=!0}}]);