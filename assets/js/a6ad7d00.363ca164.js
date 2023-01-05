"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85534],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=s(t),u=a,f=l["".concat(c,".").concat(u)]||l[u]||d[u]||o;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={},i="pa environment get",p={unversionedId:"cmd/pa/environment/environment-get",id:"cmd/pa/environment/environment-get",title:"pa environment get",description:"Gets information about the specified Power Apps environment",source:"@site/docs/cmd/pa/environment/environment-get.md",sourceDirName:"cmd/pa/environment",slug:"/cmd/pa/environment/environment-get",permalink:"/cmd/pa/environment/environment-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pa/environment/environment-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pa connector list",permalink:"/cmd/pa/connector/connector-list"},next:{title:"pa environment list",permalink:"/cmd/pa/environment/environment-list"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:s};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pa-environment-get"},"pa environment get"),(0,a.kt)("p",null,"Gets information about the specified Power Apps environment"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa environment get [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: The name of the environment to get information about"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,a.kt)("p",null,"If the environment with the name you specified doesn't exist, you will get the ",(0,a.kt)("inlineCode",{parentName:"p"},"Access to the environment 'xyz' is denied.")," error."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get information about the Power Apps environment named ",(0,a.kt)("em",{parentName:"p"},"Default-d87a7535-dd31-4437-bfe1-95340acd55c5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa environment get --name Default-d87a7535-dd31-4437-bfe1-95340acd55c5\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "id": "/providers/Microsoft.PowerApps/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n  "name": "Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n  "location": "europe",\n  "type": "Microsoft.PowerApps/environments",\n  "properties": {\n    "azureRegionHint": "westeurope",\n    "displayName": "contoso (default)",\n    "createdTime": "2020-03-12T13:39:17.9876946Z",\n    "createdBy": {\n      "id": "SYSTEM",\n      "displayName": "SYSTEM",\n      "type": "NotSpecified"\n    },\n    "provisioningState": "Succeeded",\n    "creationType": "DefaultTenant",\n    "environmentSku": "Default",\n    "isDefault": true,\n    "clientUris": {\n      "admin": "https://admin.powerplatform.microsoft.com/environments/environment/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/hub",\n      "maker": "https://make.powerapps.com/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/home"\n    },\n    "runtimeEndpoints": {\n      "microsoft.BusinessAppPlatform": "https://europe.api.bap.microsoft.com",\n      "microsoft.CommonDataModel": "https://europe.api.cds.microsoft.com",\n      "microsoft.PowerApps": "https://europe.api.powerapps.com",\n      "microsoft.PowerAppsAdvisor": "https://europe.api.advisor.powerapps.com",\n      "microsoft.PowerVirtualAgents": "https://powervamg.eu-il109.gateway.prod.island.powerapps.com",\n      "microsoft.ApiManagement": "https://management.EUROPE.azure-apihub.net",\n      "microsoft.Flow": "https://emea.api.flow.microsoft.com"\n    },\n    "databaseType": "CommonDataService",\n    "linkedEnvironmentMetadata": {\n      "resourceId": "5041ef46-5a1c-4a0f-a185-6bb49b5c6686",\n      "friendlyName": "contoso (default)",\n      "uniqueName": "unq5041ef465a1c4a0fa1856bb49b5c6",\n      "domainName": "org6633049a",\n      "version": "9.2.22101.00168",\n      "instanceUrl": "https://org6633049a.crm4.dynamics.com/",\n      "instanceApiUrl": "https://org6633049a.api.crm4.dynamics.com",\n      "baseLanguage": 1033,\n      "instanceState": "Ready",\n      "createdTime": "2021-10-08T09:50:41.283Z",\n      "platformSku": "Standard"\n    },\n    "retentionPeriod": "P7D",\n    "lifecycleAuthority": "Environment",\n    "states": {\n      "management": {\n        "id": "NotSpecified"\n      },\n      "runtime": {\n        "runtimeReasonCode": "NotSpecified",\n        "requestedBy": {\n          "displayName": "SYSTEM",\n          "type": "NotSpecified"\n        },\n        "id": "Enabled"\n      }\n    },\n    "updateCadence": {\n      "id": "Frequent"\n    },\n    "connectedGroups": [],\n    "protectionStatus": {\n      "keyManagedBy": "Microsoft"\n    },\n    "trialScenarioType": "None",\n    "cluster": {\n      "category": "Prod",\n      "number": "109",\n      "uriSuffix": "eu-il109.gateway.prod.island",\n      "geoShortName": "EU",\n      "environment": "Prod"\n    },\n    "governanceConfiguration": {\n      "protectionLevel": "Basic"\n    }\n  },\n  "displayName": "contoso (default)",\n  "provisioningState": "Succeeded",\n  "environmentSku": "Default",\n  "azureRegionHint": "westeurope",\n  "isDefault": true\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nazureRegionHint  : westeurope\ndisplayName      : environmentName (default)\nenvironmentSku   : Default\nid               : /providers/Microsoft.PowerApps/environments/Default-e1dd4030-a657-480a-8a0e-c1b1eec51e2e\nisDefault        : true\nlocation         : europe\nname             : Default-e1dd4030-a657-480a-8a0e-c1b1eec51e2e\nprovisioningState: Succeeded\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nname,id,location,displayName,provisioningState,environmentSku,azureRegionHint,isDefault\nDefault-e1dd4030-a657-480a-8a0e-c1b1eec51e2e,/providers/Microsoft.PowerApps/environments/Default-e1dd4030-a657-480a-8a0e-c1b1eec51e2e,europe,environmentName (default),Succeeded,Default,westeurope,1\n```\n")))}l.isMDXComponent=!0}}]);