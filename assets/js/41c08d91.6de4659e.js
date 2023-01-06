"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26105],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=r,u=m["".concat(s,".").concat(f)]||m[f]||d[f]||a;return t?o.createElement(u,c(c({ref:n},p),{},{components:t})):o.createElement(u,c({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},70640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={},c="pa connector list",i={unversionedId:"cmd/pa/connector/connector-list",id:"cmd/pa/connector/connector-list",title:"pa connector list",description:"Lists custom connectors in the given environment",source:"@site/docs/cmd/pa/connector/connector-list.md",sourceDirName:"cmd/pa/connector",slug:"/cmd/pa/connector/connector-list",permalink:"/cli-microsoft365-docusaurus/cmd/pa/connector/connector-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pa/connector/connector-list.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pa connector export",permalink:"/cli-microsoft365-docusaurus/cmd/pa/connector/connector-export"},next:{title:"pa environment get",permalink:"/cli-microsoft365-docusaurus/cmd/pa/environment/environment-get"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Alias",id:"alias",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:l};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pa-connector-list"},"pa connector list"),(0,r.kt)("p",null,"Lists custom connectors in the given environment"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa connector list [options]\n")),(0,r.kt)("h2",{id:"alias"},"Alias"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow connector list\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-e, --environmentName <environmentName>"),"\n: The name of the environment for which to retrieve custom connectors"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List all custom connectors in the given environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa connector list --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "name":"shared_my-20connector-5f0027f520b23e81c1-5f9888a90360086012",\n    "id":"/providers/Microsoft.PowerApps/apis/shared_my-20connector-5f0027f520b23e81c1-5f9888a90360086012",\n    "type":"Microsoft.PowerApps/apis",\n    "properties":{\n      "displayName":"My connector",\n      "iconUri":"https://az787822.vo.msecnd.net/defaulticons/api-dedicated.png",\n      "iconBrandColor":"#007ee5",\n      "contact":{},\n      "license":{},\n      "apiEnvironment":"Shared",\n      "isCustomApi":true,\n      "connectionParameters":{},\n      "runtimeUrls":[\n        "https://europe-002.azure-apim.net/apim/my-20connector-5f0027f520b23e81c1-5f9888a90360086012"\n      ],\n      "primaryRuntimeUrl":"https://europe-002.azure-apim.net/apim/my-20connector-5f0027f520b23e81c1-5f9888a90360086012",\n      "metadata":{\n        "source":"powerapps-user-defined",\n        "brandColor":"#007ee5",\n        "contact":{},\n        "license":{},\n        "publisherUrl":null,\n        "serviceUrl":null,\n        "documentationUrl":null,\n        "environmentName":"Default-0d645e38-ec52-4a4f-ac58-65f2ac4015f6",\n        "xrmConnectorId":null,\n        "almMode":"Environment",\n        "createdBy":"{\\"id\\":\\"03043611-d01e-4e58-9fbe-1a18ecb861d8\\",\\"displayName\\":\\"MOD Administrator\\",\\"email\\":\\"admin@contoso.OnMicrosoft.com\\",\\"type\\":\\"User\\",\\"tenantId\\":\\"0d645e38-ec52-4a4f-ac58-65f2ac4015f6\\",\\"userPrincipalName\\":\\"admin@contoso.onmicrosoft.com\\"}",\n        "modifiedBy":"{\\"id\\":\\"03043611-d01e-4e58-9fbe-1a18ecb861d8\\",\\"displayName\\":\\"MOD Administrator\\",\\"email\\":\\"admin@contoso.OnMicrosoft.com\\",\\"type\\":\\"User\\",\\"tenantId\\":\\"0d645e38-ec52-4a4f-ac58-65f2ac4015f6\\",\\"userPrincipalName\\":\\"admin@contoso.onmicrosoft.com\\"}",\n        "allowSharing":false\n      },\n      "capabilities":[],\n      "description":"",\n      "apiDefinitions":{\n        "originalSwaggerUrl":"https://paeu2weu8.blob.core.windows.net/api-swagger-files/my-20connector-5f0027f520b23e81c1-5f9888a90360086012.json_original?sv=2018-03-28&sr=b&sig=cOkjAecgpr6sSznMpDqiZitUOpVvVDJRCOZfe3VmReU%3D&se=2019-12-05T19%3A53%3A49Z&sp=r",\n        "modifiedSwaggerUrl":"https://paeu2weu8.blob.core.windows.net/api-swagger-files/my-20connector-5f0027f520b23e81c1-5f9888a90360086012.json?sv=2018-03-28&sr=b&sig=rkpKHP8K%2F2yNBIUQcVN%2B0ZPjnP9sECrM%2FfoZMG%2BJZX0%3D&se=2019-12-05T19%3A53%3A49Z&sp=r"\n      },\n      "createdBy":{\n        "id":"03043611-d01e-4e58-9fbe-1a18ecb861d8",\n        "displayName":"MOD Administrator",\n        "email":"admin@contoso.OnMicrosoft.com",\n        "type":"User",\n        "tenantId":"0d645e38-ec52-4a4f-ac58-65f2ac4015f6",\n        "userPrincipalName":"admin@contoso.onmicrosoft.com"\n      },\n      "modifiedBy":{\n        "id":"03043611-d01e-4e58-9fbe-1a18ecb861d8",\n        "displayName":"MOD Administrator",\n        "email":"admin@contoso.OnMicrosoft.com",\n        "type":"User",\n        "tenantId":"0d645e38-ec52-4a4f-ac58-65f2ac4015f6",\n        "userPrincipalName":"admin@contoso.onmicrosoft.com"\n      },\n      "createdTime":"2019-12-05T18:45:03.4615313Z",\n      "changedTime":"2019-12-05T18:45:03.4615313Z",\n      "environment":{\n        "id":"/providers/Microsoft.PowerApps/environments/Default-0d645e38-ec52-4a4f-ac58-65f2ac4015f6",\n        "name":"Default-0d645e38-ec52-4a4f-ac58-65f2ac4015f6"\n      },\n      "tier":"Standard",\n      "publisher":"MOD Administrator",\n      "almMode":"Environment"\n    }\n  }\n]\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nname                                                        displayName\n----------------------------------------------------------- ------------\nshared_my-20connector-5f0027f520b23e81c1-5f9888a90360086012 My connector\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nname,displayName\nshared_my-20connector-5f0027f520b23e81c1-5f9888a90360086012,My connector\n```\n")))}m.isMDXComponent=!0}}]);