"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74317],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,u=p["".concat(s,".").concat(m)]||p[m]||f[m]||r;return t?o.createElement(u,i(i({ref:n},c),{},{components:t})):o.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(87462),a=(t(67294),t(3905));const r={},i="flow list",l={unversionedId:"cmd/flow/flow-list",id:"cmd/flow/flow-list",title:"flow list",description:"Lists Power Automate flow in the given environment",source:"@site/docs/cmd/flow/flow-list.md",sourceDirName:"cmd/flow",slug:"/cmd/flow/flow-list",permalink:"/cmd/flow/flow-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/flow/flow-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"flow get",permalink:"/cmd/flow/flow-get"},next:{title:"flow remove",permalink:"/cmd/flow/flow-remove"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flow-list"},"flow list"),(0,a.kt)("p",null,"Lists Power Automate flow in the given environment"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e, --environmentName <environmentName>"),"\n: The name of the environment for which to retrieve available flows"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Set, to list all Flows as admin. Otherwise will return only your own flows"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,a.kt)("p",null,"If the environment with the name you specified doesn't exist, you will get the ",(0,a.kt)("inlineCode",{parentName:"p"},"Access to the environment 'xyz' is denied.")," error."),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"flow list")," command returns only your flows. To list all flows, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"asAdmin")," option."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"List all your flows in the given environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow list --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5\n")),(0,a.kt)("p",null,"List all flows in the given environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow list --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --asAdmin\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("h3",{id:"standard-response"},"Standard response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "name": "00afcb83-df7b-4fe0-ab9c-1542a1dc66a9",\n    "id": "/providers/Microsoft.ProcessSimple/environments/Default-00000000-0000-0000-0000-000000000000/flows/00afcb83-df7b-4fe0-ab9c-1542a1dc66a9",\n    "type": "Microsoft.ProcessSimple/environments/flows",\n    "properties": {\n      "apiId": "/providers/Microsoft.PowerApps/apis/shared_logicflows",\n      "displayName": "Contoso Invoicing Flow",\n      "userType": "Owner",\n      "state": "Started",\n      "connectionReferences": {\n        "shared_contoso-20invoicing-5fdd00e4805bfffb8f-5fbaee43593a7efda0": {\n          "connectionName": "bd877f62e4224011aa936d706fc68902",\n          "source": "Invoker",\n          "id": "/providers/Microsoft.PowerApps/apis/shared_contoso-20invoicing-5fdd00e4805bfffb8f-5fbaee43593a7efda0",\n          "displayName": "Contoso Invoicing",\n          "iconUri": "https://az787822.vo.msecnd.net/defaulticons/api-dedicated.png",\n          "brandColor": "#007ee5",\n          "tier": "NotSpecified"\n        },\n        "shared_flowpush": {\n          "connectionName": "shared-flowpush-d2c01136-3f7d-4449-b4f1-cb2d03a35ba8",\n          "source": "Invoker",\n          "id": "/providers/Microsoft.PowerApps/apis/shared_flowpush",\n          "displayName": "Notifications",\n          "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1599/1.0.1599.3017/flowpush/icon.png",\n          "brandColor": "#FF3B30",\n          "tier": "Standard"\n        }\n      },\n      "createdTime": "2022-06-11T10:34:03.7241198Z",\n      "lastModifiedTime": "2022-06-11T10:35:54.1920032Z",\n      "environment": {\n        "name": "Default-00000000-0000-0000-0000-000000000000",\n        "type": "Microsoft.ProcessSimple/environments",\n        "id": "/providers/Microsoft.ProcessSimple/environments/Default-00000000-0000-0000-0000-000000000000"\n      },\n      "definitionSummary": {\n        "triggers": [\n          {\n            "type": "Request",\n            "kind": "Button",\n            "metadata": {\n              "operationMetadataId": "0cc0490e-e1b6-4a19-b313-f54862d64f02"\n            }\n          }\n        ],\n        "actions": [\n          {\n            "type": "OpenApiConnection",\n            "swaggerOperationId": "ListInvoices",\n            "metadata": {\n              "operationMetadataId": "d76a7b54-48bb-49a0-86b8-dd3d21b3d5ce"\n            }\n          },\n          {\n            "type": "Table",\n            "metadata": {\n              "operationMetadataId": "1164ebc4-b501-46bc-bc88-cc99660f92c3"\n            }\n          },\n          {\n            "type": "OpenApiConnection",\n            "swaggerOperationId": "SendEmailNotification",\n            "metadata": {\n              "operationMetadataId": "9febe29f-2e36-4765-81ab-83645d28332d"\n            }\n          }\n        ]\n      },\n      "creator": {\n        "tenantId": "00000000-0000-0000-0000-000000000000",\n        "objectId": "00000000-0000-0000-0000-000000000000",\n        "userId": "00000000-0000-0000-0000-000000000000",\n        "userType": "ActiveDirectory"\n      },\n      "provisioningMethod": "FromDefinition",\n      "flowFailureAlertSubscribed": true,\n      "isManaged": false\n    },\n    "displayName": "Contoso Invoicing Flow"\n  }\n]\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nname                                  displayName\n------------------------------------  -----------------------------------------------\n00afcb83-df7b-4fe0-ab9c-1542a1dc66a9  Contoso Invoicing Flow\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nname,displayName\n00afcb83-df7b-4fe0-ab9c-1542a1dc66a9,Contoso Invoicing Flow\n```\n")))}p.isMDXComponent=!0}}]);