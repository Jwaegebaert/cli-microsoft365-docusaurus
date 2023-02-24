"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[85534],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,f=d["".concat(c,".").concat(u)]||d[u]||l[u]||r;return t?o.createElement(f,i(i({ref:n},m),{},{components:t})):o.createElement(f,i({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var o=t(87462),a=(t(67294),t(3905));const r={},i="pa environment get",p={unversionedId:"cmd/pa/environment/environment-get",id:"cmd/pa/environment/environment-get",title:"pa environment get",description:"Gets information about the specified Power Apps environment",source:"@site/docs/cmd/pa/environment/environment-get.md",sourceDirName:"cmd/pa/environment",slug:"/cmd/pa/environment/environment-get",permalink:"/cli-microsoft365-docusaurus/cmd/pa/environment/environment-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pa/environment/environment-get.md",tags:[],version:"current",lastUpdatedAt:1676585753,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pa connector list",permalink:"/cli-microsoft365-docusaurus/cmd/pa/connector/connector-list"},next:{title:"pa environment list",permalink:"/cli-microsoft365-docusaurus/cmd/pa/environment/environment-list"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:s},d="wrapper";function l(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pa-environment-get"},"pa environment get"),(0,a.kt)("p",null,"Gets information about the specified Power Apps environment"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa environment get [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The name of the environment. When not specified, the default environment is retrieved."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,a.kt)("p",null,"If the environment with the name you specified doesn't exist, you will get the ",(0,a.kt)("inlineCode",{parentName:"p"},"Access to the environment 'xyz' is denied.")," error."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get information about the default Power Apps environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa environment get\n")),(0,a.kt)("p",null,"Get information about the Power Apps environment named ",(0,a.kt)("em",{parentName:"p"},"Default-d87a7535-dd31-4437-bfe1-95340acd55c5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa environment get --name Default-d87a7535-dd31-4437-bfe1-95340acd55c5\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "id": "/providers/Microsoft.PowerApps/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n  "name": "Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n  "location": "europe",\n  "type": "Microsoft.PowerApps/environments",\n  "properties": {\n    "azureRegionHint": "westeurope",\n    "displayName": "contoso (default)",\n    "createdTime": "2020-03-12T13:39:17.9876946Z",\n    "createdBy": {\n      "id": "SYSTEM",\n      "displayName": "SYSTEM",\n      "type": "NotSpecified"\n    },\n    "provisioningState": "Succeeded",\n    "creationType": "DefaultTenant",\n    "environmentSku": "Default",\n    "isDefault": true,\n    "clientUris": {\n      "admin": "https://admin.powerplatform.microsoft.com/environments/environment/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/hub",\n      "maker": "https://make.powerapps.com/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/home"\n    },\n    "runtimeEndpoints": {\n      "microsoft.BusinessAppPlatform": "https://europe.api.bap.microsoft.com",\n      "microsoft.CommonDataModel": "https://europe.api.cds.microsoft.com",\n      "microsoft.PowerApps": "https://europe.api.powerapps.com",\n      "microsoft.PowerAppsAdvisor": "https://europe.api.advisor.powerapps.com",\n      "microsoft.PowerVirtualAgents": "https://powervamg.eu-il109.gateway.prod.island.powerapps.com",\n      "microsoft.ApiManagement": "https://management.EUROPE.azure-apihub.net",\n      "microsoft.Flow": "https://emea.api.flow.microsoft.com"\n    },\n    "databaseType": "CommonDataService",\n    "linkedEnvironmentMetadata": {\n      "resourceId": "5041ef46-5a1c-4a0f-a185-6bb49b5c6686",\n      "friendlyName": "contoso (default)",\n      "uniqueName": "unq5041ef465a1c4a0fa1856bb49b5c6",\n      "domainName": "org6633049a",\n      "version": "9.2.22101.00168",\n      "instanceUrl": "https://org6633049a.crm4.dynamics.com/",\n      "instanceApiUrl": "https://org6633049a.api.crm4.dynamics.com",\n      "baseLanguage": 1033,\n      "instanceState": "Ready",\n      "createdTime": "2021-10-08T09:50:41.283Z",\n      "platformSku": "Standard"\n    },\n    "retentionPeriod": "P7D",\n    "lifecycleAuthority": "Environment",\n    "states": {\n      "management": {\n        "id": "NotSpecified"\n      },\n      "runtime": {\n        "runtimeReasonCode": "NotSpecified",\n        "requestedBy": {\n          "displayName": "SYSTEM",\n          "type": "NotSpecified"\n        },\n        "id": "Enabled"\n      }\n    },\n    "updateCadence": {\n      "id": "Frequent"\n    },\n    "connectedGroups": [],\n    "protectionStatus": {\n      "keyManagedBy": "Microsoft"\n    },\n    "trialScenarioType": "None",\n    "cluster": {\n      "category": "Prod",\n      "number": "109",\n      "uriSuffix": "eu-il109.gateway.prod.island",\n      "geoShortName": "EU",\n      "environment": "Prod"\n    },\n    "governanceConfiguration": {\n      "protectionLevel": "Basic"\n    }\n  },\n  "displayName": "contoso (default)",\n  "provisioningState": "Succeeded",\n  "environmentSku": "Default",\n  "azureRegionHint": "westeurope",\n  "isDefault": true\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nazureRegionHint  : westeurope\ndisplayName      : environmentName (default)\nenvironmentSku   : Default\nid               : /providers/Microsoft.PowerApps/environments/Default-e1dd4030-a657-480a-8a0e-c1b1eec51e2e\nisDefault        : true\nlocation         : europe\nname             : Default-e1dd4030-a657-480a-8a0e-c1b1eec51e2e\nprovisioningState: Succeeded\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nname,id,location,displayName,provisioningState,environmentSku,azureRegionHint,isDefault\nDefault-e1dd4030-a657-480a-8a0e-c1b1eec51e2e,/providers/Microsoft.PowerApps/environments/Default-e1dd4030-a657-480a-8a0e-c1b1eec51e2e,europe,environmentName (default),Succeeded,Default,westeurope,1\n```\n")),(0,a.kt)("p",null,'=== "Markdown"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```md\n# pa environment get --name "Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d"\n\nDate: 9/1/2023\n\n## environmentName (default) (org6633050c) (/providers/Microsoft.PowerApps/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d)\n\nProperty | Value\n---------|-------\nid | /providers/Microsoft.PowerApps/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d\nname | Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d\nlocation | europe\ntype | Microsoft.PowerApps/environments\nproperties | {"azureRegionHint":"westeurope","displayName":"contoso (default) (org6633049a)","createdTime":"2020-03-12T13:39:17.9876946Z","createdBy":{"id":"SYSTEM","displayName":"SYSTEM","type":"NotSpecified"},"provisioningState":"Succeeded","creationType":"DefaultTenant","environmentSku":"Default","environmentType":"Production","isDefault":true,"runtimeEndpoints":{"microsoft.BusinessAppPlatform":"https://europe.api.bap.microsoft.com","microsoft.CommonDataModel":"https://europe.api.cds.microsoft.com","microsoft.PowerApps":"https://europe.api.powerapps.com","microsoft.PowerAppsAdvisor":"https://europe.api.advisor.powerapps.com","microsoft.PowerVirtualAgents":"https://powervamg.eu-il109.gateway.prod.island.powerapps.com","microsoft.ApiManagement":"https://management.EUROPE.azure-apihub.net","microsoft.Flow":"https://emea.api.flow.microsoft.com"},"linkedEnvironmentMetadata":{"type":"Dynamics365Instance","resourceId":"5041ef46-5a1c-4a0f-a185-6bb49b5c6686","friendlyName":"contoso (default)","uniqueName":"unq5041ef465a1c4a0fa1856bb49b5c6","domainName":"org6633049a","version":"9.2.22101.00168","instanceUrl":"https://org6633049a.crm4.dynamics.com/","instanceApiUrl":"https://org6633049a.api.crm4.dynamics.com","baseLanguage":1033,"instanceState":"Ready","createdTime":"2021-10-08T09:50:41.283Z","modifiedTime":"2022-10-29T14:04:14.0720726Z","hostNameSuffix":"crm4.dynamics.com","bapSolutionId":"00000001-0000-0000-0001-00000000009b","creationTemplates":["D365_CDS"],"webApiVersion":"v9.0","platformSku":"Standard"},"retentionPeriod":"P7D","lifecycleAuthority":"Environment","states":{"management":{"id":"NotSpecified"},"runtime":{"runtimeReasonCode":"NotSpecified","requestedBy":{"displayName":"SYSTEM","type":"NotSpecified"},"id":"Enabled"}},"updateCadence":{"id":"Frequent"},"connectedGroups":[],"protectionStatus":{"keyManagedBy":"Microsoft"},"trialScenarioType":"None","cluster":{"category":"Prod","number":"109","uriSuffix":"eu-il109.gateway.prod.island","geoShortName":"EU","environment":"Prod"},"governanceConfiguration":{"protectionLevel":"Basic"}}\ndisplayName | contoso (default) (org6633049a)\n```\n')))}l.isMDXComponent=!0}}]);