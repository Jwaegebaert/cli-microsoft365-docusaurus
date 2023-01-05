"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37295],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={},a="flow run list",s={unversionedId:"cmd/flow/run/run-list",id:"cmd/flow/run/run-list",title:"flow run list",description:"Lists runs of the specified Microsoft Flow",source:"@site/docs/cmd/flow/run/run-list.md",sourceDirName:"cmd/flow/run",slug:"/cmd/flow/run/run-list",permalink:"/cmd/flow/run/run-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/flow/run/run-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"flow run get",permalink:"/cmd/flow/run/run-get"},next:{title:"flow run resubmit",permalink:"/cmd/flow/run/run-resubmit"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flow-run-list"},"flow run list"),(0,o.kt)("p",null,"Lists runs of the specified Microsoft Flow"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-f, --flowName <flowName>"),"\n: The name of the Microsoft Flow to retrieve the runs for"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-e, --environmentName <environmentName>"),"\n: The name of the environment to which the flow belongs"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,o.kt)("p",null,"If the environment with the name you specified doesn't exist, you will get the ",(0,o.kt)("inlineCode",{parentName:"p"},"Access to the environment 'xyz' is denied.")," error."),(0,o.kt)("p",null,"If the Microsoft Flow with the name you specified doesn't exist, you will get the ",(0,o.kt)("inlineCode",{parentName:"p"},"The caller with object id 'abc' does not have permission for connection 'xyz' under Api 'shared_logicflows'.")," error."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"List runs of the specified Microsoft Flow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run list --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --flowName 5923cb07-ce1a-4a5c-ab81-257ce820109a\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("h3",{id:"standard-response"},"Standard response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n[      \n  {\n    "name": "08585329112602833828909892130CU17",\n    "id": "/providers/Microsoft.ProcessSimple/environments/Default-de348bc7-1aeb-4406-8cb3-97db021cadb4/flows/170fb67e-a514-4d84-8727-582022bd13a9/runs/08585329112602833828909892130CU17",\n    "type": "Microsoft.ProcessSimple/environments/flows/runs",\n    "properties": {\n      "startTime": "2022-11-17T14:33:45.2763872Z",\n      "status": "Running",\n      "correlation": {\n        "clientTrackingId": "08585329112602833829909892130CU00"\n      },\n      "trigger": {\n        "name": "When_a_new_response_is_submitted",\n        "inputsLink": {\n          "uri": "https://prod-08.centralindia.logic.azure.com:443/workflows/f7bf8f6b5c494e63bfc21b54087a596e/runs/08585329112602833828909892130CU17/contents/TriggerInputs?api-version=2016-06-01&se=2022-11-17T18%3A00%3A00.0000000Z&sp=%2Fruns%2F08585329112602833828909892130CU17%2Fcontents%2FTriggerInputs%2Fread&sv=1.0&sig=jmdMRWvY7uGoxTmqd3_a2bJtegXuVyuKTKKUVLiwh38",\n          "contentVersion": "6ZrBBE+MJg7IvhMgyJLMmA==",\n          "contentSize": 349,\n          "contentHash": {\n            "algorithm": "md5",\n            "value": "6ZrBBE+MJg7IvhMgyJLMmA=="\n          }\n        },\n        "outputsLink": {\n          "uri": "https://prod-08.centralindia.logic.azure.com:443/workflows/f7bf8f6b5c494e63bfc21b54087a596e/runs/08585329112602833828909892130CU17/contents/TriggerOutputs?api-version=2016-06-01&se=2022-11-17T18%3A00%3A00.0000000Z&sp=%2Fruns%2F08585329112602833828909892130CU17%2Fcontents%2FTriggerOutputs%2Fread&sv=1.0&sig=Y3qqjuWrrcQJrmF7uvm6LVzQy5w-dNOFWJ8Yt8khXvA",\n          "contentVersion": "Z/4a8tfYygNAR1xpc44iww==",\n          "contentSize": 493,\n          "contentHash": {\n            "algorithm": "md5",\n            "value": "Z/4a8tfYygNAR1xpc44iww=="\n          }\n        },\n        "startTime": "2022-11-17T14:33:45.1914506Z",\n        "endTime": "2022-11-17T14:33:45.1914506Z",\n        "originHistoryName": "08585329112602833829909892130CU00",\n        "correlation": {\n          "clientTrackingId": "08585329112602833829909892130CU00"\n        },\n        "status": "Succeeded"\n      }\n    },\n    "startTime": "2022-11-17T14:33:45.2763872Z",\n    "status": "Running"\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\nname                               startTime                     status\n---------------------------------  ----------------------------  ---------\n08585329112602833828909892130CU17  2022-11-17T14:33:45.2763872Z  Running\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nname,startTime,status\n08585329112602833828909892130CU17,2022-11-17T14:33:45.2763872Z,Running\n```\n")))}p.isMDXComponent=!0}}]);