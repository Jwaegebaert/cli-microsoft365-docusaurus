"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[79685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),s=n(56697),l=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=f({queryString:n,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var h=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(d(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},26054:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},i="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",{parentName:"p"},"options"),", ",(0,a.kt)("code",{parentName:"p"},"examples"),", ",(0,a.kt)("code",{parentName:"p"},"remarks"),", ",(0,a.kt)("code",{parentName:"p"},"response"),", ",(0,a.kt)("code",{parentName:"p"},"full"),". Default is ",(0,a.kt)("code",{parentName:"p"},"full"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--query [query]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,a.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output type. ",(0,a.kt)("code",{parentName:"p"},"json,text,csv,md"),". Default ",(0,a.kt)("code",{parentName:"p"},"json"))),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--verbose"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with verbose logging")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--debug"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with debug logging"))))}s.isMDXComponent=!0},32283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(26054),i=n(74866),s=n(85162);const l={},u="flow run get",c={unversionedId:"cmd/flow/run/run-get",id:"cmd/flow/run/run-get",title:"flow run get",description:"Gets information about a specific run of the specified Power Automate flow",source:"@site/docs/cmd/flow/run/run-get.mdx",sourceDirName:"cmd/flow/run",slug:"/cmd/flow/run/run-get",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/flow/run/run-get.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"flow run cancel",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-cancel"},next:{title:"flow run list",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-list"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3},{value:"<code>includeTriggerInformation</code> response",id:"includetriggerinformation-response",level:3}],m={toc:p},f="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flow-run-get"},"flow run get"),(0,a.kt)("p",null,"Gets information about a specific run of the specified Power Automate flow"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run get [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-n, --name <name>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The name of the run to get information about")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-f, --flowName <flowName>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The name of the Power Automate flow for which to retrieve information")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-e, --environmentName <environmentName>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The name of the environment where the flow is located")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--includeTriggerInformation"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"If specified, include information about the trigger details"))),(0,a.kt)(o.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This command is based on an API that is currently in preview and is subject to change once the API reached general availability.")),(0,a.kt)("p",null,"If the environment with the name you specified doesn't exist, you will get the ",(0,a.kt)("inlineCode",{parentName:"p"},"Access to the environment 'xyz' is denied.")," error."),(0,a.kt)("p",null,"If the Microsoft Flow with the name you specified doesn't exist, you will get the ",(0,a.kt)("inlineCode",{parentName:"p"},"The caller with object id 'abc' does not have permission for connection 'xyz' under Api 'shared_logicflows'.")," error."),(0,a.kt)("p",null,"If the run with the name you specified doesn't exist, you will get the ",(0,a.kt)("inlineCode",{parentName:"p"},"The provided workflow run name is not valid.")," error."),(0,a.kt)("p",null,"If the option ",(0,a.kt)("inlineCode",{parentName:"p"},"includeTriggerInformation")," is specified, but the trigger does not contain an outputsLink such as for example with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Recurrence")," trigger, this option will be ignored."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get information about the given run of the specified Power Automate flow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run get --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --flowName 5923cb07-ce1a-4a5c-ab81-257ce820109a --name 08586653536760200319026785874CU62\n")),(0,a.kt)("p",null,"Get information about the given run of the specified Power Automate flow including trigger information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run get --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --flowName 5923cb07-ce1a-4a5c-ab81-257ce820109a --name 08586653536760200319026785874CU62 --includeTriggerInformation\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("h3",{id:"standard-response"},"Standard response"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "08585329112602833828909892130CU17",\n  "id": "/providers/Microsoft.ProcessSimple/environments/Default-de348bc7-1aeb-4406-8cb3-97db021cadb4/flows/170fb67e-a514-4d84-8727-582022bd13a9/runs/08585329112602833828909892130CU17",\n  "type": "Microsoft.ProcessSimple/environments/flows/runs",\n  "properties": {\n    "startTime": "2022-11-17T14:33:45.2763872Z",\n    "status": "Running",\n    "correlation": {\n      "clientTrackingId": "08585329112602833829909892130CU00"\n    },\n    "trigger": {\n      "name": "When_a_new_response_is_submitted",\n      "inputsLink": {\n        "uri": "https://prod-08.centralindia.logic.azure.com:443/workflows/f7bf8f6b5c494e63bfc21b54087a596e/runs/08585329112602833828909892130CU17/contents/TriggerInputs?api-version=2016-06-01&se=2022-11-17T18%3A00%3A00.0000000Z&sp=%2Fruns%2F08585329112602833828909892130CU17%2Fcontents%2FTriggerInputs%2Fread&sv=1.0&sig=",\n        "contentVersion": "6ZrBBE+MJg7IvhMgyJLMmA==",\n        "contentSize": 349,\n        "contentHash": {\n          "algorithm": "md5",\n          "value": "6ZrBBE+MJg7IvhMgyJLMmA=="\n        }\n      },\n      "outputsLink": {\n        "uri": "https://prod-08.centralindia.logic.azure.com:443/workflows/f7bf8f6b5c494e63bfc21b54087a596e/runs/08585329112602833828909892130CU17/contents/TriggerOutputs?api-version=2016-06-01&se=2022-11-17T18%3A00%3A00.0000000Z&sp=%2Fruns%2F08585329112602833828909892130CU17%2Fcontents%2FTriggerOutputs%2Fread&sv=1.0&sig=",\n        "contentVersion": "Z/4a8tfYygNAR1xpc44iww==",\n        "contentSize": 493,\n        "contentHash": {\n          "algorithm": "md5",\n          "value": "Z/4a8tfYygNAR1xpc44iww=="\n        }\n      },\n      "startTime": "2022-11-17T14:33:45.1914506Z",\n      "endTime": "2022-11-17T14:33:45.1914506Z",\n      "originHistoryName": "08585329112602833829909892130CU00",\n      "correlation": {\n        "clientTrackingId": "08585329112602833829909892130CU00"\n      },\n      "status": "Succeeded"\n    }\n  },\n  "startTime": "2022-11-17T14:33:45.2763872Z",\n  "endTime": "",\n  "status": "Running",\n  "triggerName": "When_a_new_response_is_submitted"\n}\n'))),(0,a.kt)(s.Z,{value:"Text",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"endTime    : 2023-03-04T09:05:22.5880202Z\nname       : 08585236861638480597867166179CU104\nstartTime  : 2023-03-04T09:05:21.8066368Z\nstatus     : Succeeded\ntriggerName: When_an_email_is_flagged_(V4)\n"))),(0,a.kt)(s.Z,{value:"CSV",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"name,startTime,endTime,status,triggerName\n08585236861638480597867166179CU104,2023-03-04T09:05:21.8066368Z,2023-03-04T09:05:22.5880202Z,Succeeded,When_an_email_is_flagged_(V4)\n"))),(0,a.kt)(s.Z,{value:"Markdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"# flow run get --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --flowName 5923cb07-ce1a-4a5c-ab81-257ce820109a --name 08586653536760200319026785874CU62\n\nDate: 04/03/2023\n\n## 08586653536760200319026785874CU62 (/providers/Microsoft.ProcessSimple/environments/Default-d87a7535-dd31-4437-bfe1-95340acd55c5/flows/5923cb07-ce1a-4a5c-ab81-257ce820109a/runs/08586653536760200319026785874CU62)\n\nProperty | Value\n---------|-------\nname | 08586653536760200319026785874CU62\nid | /providers/Microsoft.ProcessSimple/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/flows/c3c707b5-fefd-4f7a-a96c-b8e0d5ca3cc1/runs/08585208964855963748594654409CU47\ntype | Microsoft.ProcessSimple/environments/flows/runs\nstartTime | 2023-03-04T09:05:21.8066368Z\nendTime | 2023-03-04T09:05:22.5880202Z\nstatus | Succeeded\ntriggerName | When\\_an\\_email\\_is\\_flagged\\_(V4)\n")))),(0,a.kt)("h3",{id:"includetriggerinformation-response"},(0,a.kt)("inlineCode",{parentName:"h3"},"includeTriggerInformation")," response"),(0,a.kt)("p",null,"When using the option ",(0,a.kt)("inlineCode",{parentName:"p"},"includeTriggerInformation"),", the response for the json-output will differ."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "08585236861638480597867166179CU104",\n  "id": "/providers/Microsoft.ProcessSimple/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/flows/24335774-daf6-4183-acb7-f5155c2cd2fe/runs/08585236861638480597867166179CU104",\n  "type": "Microsoft.ProcessSimple/environments/flows/runs",\n  "properties": {\n    "startTime": "2023-03-04T09:05:21.8066368Z",\n    "endTime": "2023-03-04T09:05:22.5880202Z",\n    "status": "Succeeded",\n    "correlation": {\n      "clientTrackingId": "08585236861638480598867166179CU131"\n    },\n    "trigger": {\n      "name": "When_an_email_is_flagged_(V4)",\n      "inputsLink": {\n        "uri": "https://prod-130.westeurope.logic.azure.com:443/workflows/3ebadb794f6641e0b7f4fda131cdfb0b/runs/08585236861638480597867166179CU104/contents/TriggerInputs?api-version=2016-06-01&se=2023-03-04T14%3A00%3A00.0000000Z&sp=%2Fruns%2F08585236861638480597867166179CU104%2Fcontents%2FTriggerInputs%2Fread&sv=1.0&sig=",\n        "contentVersion": "2v/VLXFrKV6JvwSdcN7aHg==",\n        "contentSize": 343,\n        "contentHash": {\n          "algorithm": "md5",\n          "value": "2v/VLXFrKV6JvwSdcN7aHg=="\n        }\n      },\n      "outputsLink": {\n        "uri": "https://prod-130.westeurope.logic.azure.com:443/workflows/3ebadb794f6641e0b7f4fda131cdfb0b/runs/08585236861638480597867166179CU104/contents/TriggerOutputs?api-version=2016-06-01&se=2023-03-04T14%3A00%3A00.0000000Z&sp=%2Fruns%2F08585236861638480597867166179CU104%2Fcontents%2FTriggerOutputs%2Fread&sv=1.0&sig=",\n        "contentVersion": "AHZEeWNlQ0bLe48yDmpzrQ==",\n        "contentSize": 3478,\n        "contentHash": {\n          "algorithm": "md5",\n          "value": "AHZEeWNlQ0bLe48yDmpzrQ=="\n        }\n      },\n      "startTime": "2023-03-04T09:05:21.6192576Z",\n      "endTime": "2023-03-04T09:05:21.7442626Z",\n      "scheduledTime": "2023-03-04T09:05:21.573561Z",\n      "originHistoryName": "08585236861638480598867166179CU131",\n      "correlation": {\n        "clientTrackingId": "08585236861638480598867166179CU131"\n      },\n      "code": "OK",\n      "status": "Succeeded"\n    }\n  },\n  "startTime": "2023-03-04T09:05:21.8066368Z",\n  "endTime": "2023-03-04T09:05:22.5880202Z",\n  "status": "Succeeded",\n  "triggerName": "When_an_email_is_flagged_(V4)",\n  "triggerInformation": {\n    "from": "john@contoso.com",\n    "toRecipients": "doe@contoso.com",\n    "subject": "Dummy email",\n    "body": "<html><head>\\r\\\\\\n<meta http-equiv=\\"Content-Type\\" content=\\"text/html; charset=utf-8\\"></head><body><p>This is dummy content</p></body></html>",\n    "importance": "normal",\n    "bodyPreview": "This is dummy content",\n    "hasAttachments": false,\n    "id": "AAMkADgzN2Q1NThiLTI0NjYtNGIxYS05MDdjLTg1OWQxNzgwZGM2ZgBGAAAAAAC6jQfUzacTSIHqMw2yacnUBwBiOC8xvYmdT6G2E_hLMK5kAAAAAAEMAABiOC8xvYmdT6G2E_hLMK5kAALUqy81AAA=",\n    "internetMessageId": "<DB7PR03MB5018879914324FC65695809FE1AD9@DB7PR03MB5018.eurprd03.prod.outlook.com>",\n    "conversationId": "AAQkADgzN2Q1NThiLTI0NjYtNGIxYS05MDdjLTg1OWQxNzgwZGM2ZgAQAMqP9zsK8a1CnIYEgHclLTk=",\n    "receivedDateTime": "2023-03-01T15:06:57+00:00",\n    "isRead": false,\n    "attachments": [],\n    "isHtml": true\n  }\n}\n')))))}g.isMDXComponent=!0}}]);