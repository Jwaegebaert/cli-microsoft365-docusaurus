"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[40568],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37884:(e,n,t)=>{t.d(n,{ZP:()=>s});var o=t(87462),a=(t(67294),t(3905));const r={toc:[]},i="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(i,(0,o.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-h, --help [help]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",null,"options"),", ",(0,a.kt)("code",null,"examples"),", ",(0,a.kt)("code",null,"remarks"),", ",(0,a.kt)("code",null,"response"),", ",(0,a.kt)("code",null,"full"),". Default is ",(0,a.kt)("code",null,"full"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--query [query]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"JMESPath query string. See ",(0,a.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-o, --output [output]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output type. ",(0,a.kt)("code",null,"json"),", ",(0,a.kt)("code",null,"text"),", ",(0,a.kt)("code",null,"csv"),", ",(0,a.kt)("code",null,"md"),". Default is ",(0,a.kt)("code",null,"json"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--verbose"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with verbose logging.")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--debug"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(67294),a=t(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var o=t(87462),a=t(67294),r=t(86010),i=t(12466),s=t(56697),l=t(91980),p=t(67392),c=t(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,p.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=m(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[l,p]=f({queryString:t,groupId:o}),[u,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,c.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),v=(()=>{const e=l??u;return d({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),y(e)}),[p,y,r]),tabValues:r}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),o=p[t].value;o!==s&&(u(n),l(o))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:o}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o}))))}function h(e){const n=y(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},a.createElement(g,(0,o.Z)({},e,n)),a.createElement(k,(0,o.Z)({},e,n)))}function w(e){const n=(0,v.Z)();return a.createElement(h,(0,o.Z)({key:String(n)},e))}},67147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var o=t(87462),a=(t(67294),t(3905)),r=t(37884),i=t(74866),s=t(85162);const l={},p="pp environment list",c={unversionedId:"cmd/pp/environment/environment-list",id:"cmd/pp/environment/environment-list",title:"pp environment list",description:"Lists Microsoft Power Platform environments",source:"@site/docs/cmd/pp/environment/environment-list.mdx",sourceDirName:"cmd/pp/environment",slug:"/cmd/pp/environment/environment-list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/environment/environment-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/environment/environment-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"pp environment get",permalink:"/cli-microsoft365-docusaurus/cmd/pp/environment/environment-get"},next:{title:"pp gateway get",permalink:"/cli-microsoft365-docusaurus/cmd/pp/gateway/gateway-get"}},u={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:m},f="wrapper";function y(e){let{components:n,...t}=e;return(0,a.kt)(f,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pp-environment-list"},"pp environment list"),(0,a.kt)("p",null,"Lists Microsoft Power Platform environments"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp environment list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--asAdmin"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Run the command as admin and retrieve all environments. Lists only environments you have explicitly are assigned permissions to by default."))),(0,a.kt)(r.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This command is based on an API that is currently in preview and is subject to change once the API reached general availability.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Register CLI for Microsoft 365 or Azure AD application as a management application for the Power Platform using \nm365 pp managementapp add [options] \n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"List Microsoft Power Platform environments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp environment list\n")),(0,a.kt)("p",null,"List all Microsoft Power Platform environments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp environment list --asAdmin\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id":"/providers/Microsoft.BusinessAppPlatform/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n    "type":"Microsoft.BusinessAppPlatform/environments",\n    "location":"europe",\n    "name":"Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n    "properties":{\n      "tenantId":"e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n      "azureRegion":"northeurope",\n      "displayName":"contoso (default)",\n      "createdTime":"2020-03-12T13:39:17.9876946Z",\n      "createdBy":{\n        "id":"SYSTEM",\n        "displayName":"SYSTEM",\n        "type":"NotSpecified"\n      },\n      "provisioningState":"Succeeded",\n      "creationType":"DefaultTenant",\n      "environmentSku":"Default",\n      "isDefault":true,\n      "clientUris":{\n        "admin":"https://admin.powerplatform.microsoft.com/environments/environment/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/hub",\n        "maker":"https://make.powerapps.com/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/home"\n      },\n      "runtimeEndpoints":{\n        "microsoft.BusinessAppPlatform":"https://europe.api.bap.microsoft.com",\n        "microsoft.CommonDataModel":"https://europe.api.cds.microsoft.com",\n        "microsoft.PowerApps":"https://europe.api.powerapps.com",\n        "microsoft.PowerAppsAdvisor":"https://europe.api.advisor.powerapps.com",\n        "microsoft.PowerVirtualAgents":"https://powervamg.eu-il109.gateway.prod.island.powerapps.com",\n        "microsoft.ApiManagement":"https://management.EUROPE.azure-apihub.net",\n        "microsoft.Flow":"https://emea.api.flow.microsoft.com"\n      },\n      "databaseType":"CommonDataService",\n      "linkedEnvironmentMetadata":{\n        "resourceId":"5041ef46-5a1c-4a0f-a185-6bb49b5c6686",\n        "friendlyName":"contoso (default)",\n        "uniqueName":"unq5041ef465a1c4a0fa1856bb49b5c6",\n        "domainName":"org6633049a",\n        "version":"9.2.22101.00168",\n        "instanceUrl":"https://org6633049a.crm4.dynamics.com/",\n        "instanceApiUrl":"https://org6633049a.api.crm4.dynamics.com",\n        "baseLanguage":1033,\n        "instanceState":"Ready",\n        "createdTime":"2021-10-08T09:50:41.283Z",\n        "backgroundOperationsState":"Enabled",\n        "scaleGroup":"EURCRMLIVESG644",\n        "platformSku":"Standard"\n      },\n      "trialScenarioType":"None",\n      "retentionPeriod":"P7D",\n      "states":{\n        "management":{\n          "id":"NotSpecified"\n        },\n        "runtime":{\n          "runtimeReasonCode":"NotSpecified",\n          "requestedBy":{\n            "displayName":"SYSTEM",\n            "type":"NotSpecified"\n          },\n          "id":"Enabled"\n        }\n      },\n      "updateCadence":{\n        "id":"Frequent"\n      },\n      "retentionDetails":{\n        "retentionPeriod":"P7D",\n        "backupsAvailableFromDateTime":"2022-10-23T23:27:16.8059564Z"\n      },\n      "protectionStatus":{\n        "keyManagedBy":"Microsoft"\n      },\n      "cluster":{\n        "category":"Prod",\n        "number":"109",\n        "uriSuffix":"eu-il109.gateway.prod.island",\n        "geoShortName":"EU",\n        "environment":"Prod"\n      },\n      "connectedGroups":[\n        \n      ],\n      "lifecycleOperationsEnforcement":{\n        "allowedOperations":[\n          {\n            "type":{\n              "id":"Backup"\n            }\n          },\n          {\n            "type":{\n              "id":"Edit"\n            }\n          },\n          {\n            "type":{\n              "id":"Enable"\n            }\n          },\n          {\n            "type":{\n              "id":"Disable"\n            }\n          },\n          {\n            "type":{\n              "id":"EnableGovernanceConfiguration"\n            }\n          }\n        ],\n        "disallowedOperations":[\n          {\n            "type":{\n              "id":"Provision"\n            },\n            "reason":{\n              "message":"Provision cannot be performed because there is no linked CDS instance or the CDS instance version is not supported."\n            }\n          },\n          {\n            "type":{\n              "id":"Unlock"\n            },\n            "reason":{\n              "message":"Unlock cannot be performed because there is no linked CDS instance or the CDS instance version is not supported."\n            }\n          },\n          {\n            "type":{\n              "id":"Convert"\n            },\n            "reason":{\n              "message":"Convert cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"Copy"\n            },\n            "reason":{\n              "message":"Copy cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"Delete"\n            },\n            "reason":{\n              "message":"Delete cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"Promote"\n            },\n            "reason":{\n              "message":"Promote cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"Recover"\n            },\n            "reason":{\n              "message":"Recover cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"Reset"\n            },\n            "reason":{\n              "message":"Reset cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"Restore"\n            },\n            "reason":{\n              "message":"Restore cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"UpdateProtectionStatus"\n            },\n            "reason":{\n              "message":"UpdateProtectionStatus cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"NewCustomerManagedKey"\n            },\n            "reason":{\n              "message":"NewCustomerManagedKey cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"RotateCustomerManagedKey"\n            },\n            "reason":{\n              "message":"RotateCustomerManagedKey cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"RevertToMicrosoftKey"\n            },\n            "reason":{\n              "message":"RevertToMicrosoftKey cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"NewNetworkInjection"\n            },\n            "reason":{\n              "message":"NewNetworkInjection cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"SwapNetworkInjection"\n            },\n            "reason":{\n              "message":"SwapNetworkInjection cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"RevertNetworkInjection"\n            },\n            "reason":{\n              "message":"RevertNetworkInjection cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"NewIdentity"\n            },\n            "reason":{\n              "message":"NewIdentity cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"SwapIdentity"\n            },\n            "reason":{\n              "message":"SwapIdentity cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"RevertIdentity"\n            },\n            "reason":{\n              "message":"RevertIdentity cannot be performed on environment of type Default."\n            }\n          },\n          {\n            "type":{\n              "id":"DisableGovernanceConfiguration"\n            },\n            "reason":{\n              "message":"DisableGovernanceConfiguration cannot be performed on Power Platform environment because of the governance configuration."\n            }\n          },\n          {\n            "type":{\n              "id":"UpdateGovernanceConfiguration"\n            },\n            "reason":{\n              "message":"UpdateGovernanceConfiguration cannot be performed on Power Platform environment because of the governance configuration."\n            }\n          }\n        ]\n      },\n      "governanceConfiguration":{\n        "protectionLevel":"Basic"\n      }\n    },\n    "displayName":"contoso (default)"\n  }\n]\n'))),(0,a.kt)(s.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"displayName                             name\n--------------------------------------- --------------------------------------------\nenvironmentName (default) (org6633050c) Default-e1dd4030-a657-480a-8a0e-c1b1eec51e2e\n"))),(0,a.kt)(s.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"name,displayName\nDefault-e1dd4023-a656-480a-8a0e-c1b1eec51e1d,contoso (default)\n"))),(0,a.kt)(s.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'# pp environment list\n\nDate: 9/1/2023\n\n## environmentName (default) (/providers/Microsoft.BusinessAppPlatform/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d)\n\nProperty | Value\n---------|-------\nid | /providers/Microsoft.BusinessAppPlatform/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d\ntype | Microsoft.BusinessAppPlatform/environments\nlocation | europe\nname | Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d\nproperties | {"tenantId":"e1dd4023-a656-480a-8a0e-c1b1eec51e1d","azureRegion":"northeurope","displayName":"contoso (default)","createdTime":"2020-03-12T13:39:17.9876946Z","createdBy":{"id":"SYSTEM","displayName":"SYSTEM","type":"NotSpecified"},"provisioningState":"Succeeded","creationType":"DefaultTenant","environmentSku":"Default","isDefault":true,"clientUris":{"admin":"https://admin.powerplatform.microsoft.com/environments/environment/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/hub","maker":"https://make.powerapps.com/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/home"},"runtimeEndpoints":{"microsoft.BusinessAppPlatform":"https://europe.api.bap.microsoft.com","microsoft.CommonDataModel":"https://europe.api.cds.microsoft.com","microsoft.PowerApps":"https://europe.api.powerapps.com","microsoft.PowerAppsAdvisor":"https://europe.api.advisor.powerapps.com","microsoft.PowerVirtualAgents":"https://powervamg.eu-il109.gateway.prod.island.powerapps.com","microsoft.ApiManagement":"https://management.EUROPE.azure-apihub.net","microsoft.Flow":"https://emea.api.flow.microsoft.com"},"databaseType":"CommonDataService","linkedEnvironmentMetadata":{"resourceId":"5041ef46-5a1c-4a0f-a185-6bb49b5c6686","friendlyName":"contoso (default)","uniqueName":"unq5041ef465a1c4a0fa1856bb49b5c6","domainName":"org6633049a","version":"9.2.22101.00168","instanceUrl":"https://org6633049a.crm4.dynamics.com/","instanceApiUrl":"https://org6633049a.api.crm4.dynamics.com","baseLanguage":1033,"instanceState":"Ready","createdTime":"2021-10-08T09:50:41.283Z","backgroundOperationsState":"Enabled","scaleGroup":"EURCRMLIVESG644","platformSku":"Standard"},"trialScenarioType":"None","retentionPeriod":"P7D","states":{"management":{"id":"NotSpecified"},"runtime":{"runtimeReasonCode":"NotSpecified","requestedBy":{"displayName":"SYSTEM","type":"NotSpecified"},"id":"Enabled"}},"updateCadence":{"id":"Frequent"},"retentionDetails":{"retentionPeriod":"P7D","backupsAvailableFromDateTime":"2022-10-23T23:27:16.8059564Z"},"protectionStatus":{"keyManagedBy":"Microsoft"},"cluster":{"category":"Prod","number":"109","uriSuffix":"eu-il109.gateway.prod.island","geoShortName":"EU","environment":"Prod"},"connectedGroups":[],"lifecycleOperationsEnforcement":{"allowedOperations":[{"type":{"id":"Backup"}},{"type":{"id":"Edit"}},{"type":{"id":"Enable"}},{"type":{"id":"Disable"}},{"type":{"id":"EnableGovernanceConfiguration"}}],"disallowedOperations":[{"type":{"id":"Provision"},"reason":{"message":"Provision cannot be performed because there is no linked CDS instance or the CDS instance version is not supported."}},{"type":{"id":"Unlock"},"reason":{"message":"Unlock cannot be performed because there is no linked CDS instance or the CDS instance version is not supported."}},{"type":{"id":"Convert"},"reason":{"message":"Convert cannot be performed on environment of type Default."}},{"type":{"id":"Copy"},"reason":{"message":"Copy cannot be performed on environment of type Default."}},{"type":{"id":"Delete"},"reason":{"message":"Delete cannot be performed on environment of type Default."}},{"type":{"id":"Promote"},"reason":{"message":"Promote cannot be performed on environment of type Default."}},{"type":{"id":"Recover"},"reason":{"message":"Recover cannot be performed on environment of type Default."}},{"type":{"id":"Reset"},"reason":{"message":"Reset cannot be performed on environment of type Default."}},{"type":{"id":"Restore"},"reason":{"message":"Restore cannot be performed on environment of type Default."}},{"type":{"id":"UpdateProtectionStatus"},"reason":{"message":"UpdateProtectionStatus cannot be performed on environment of type Default."}},{"type":{"id":"NewCustomerManagedKey"},"reason":{"message":"NewCustomerManagedKey cannot be performed on environment of type Default."}},{"type":{"id":"RotateCustomerManagedKey"},"reason":{"message":"RotateCustomerManagedKey cannot be performed on environment of type Default."}},{"type":{"id":"RevertToMicrosoftKey"},"reason":{"message":"RevertToMicrosoftKey cannot be performed on environment of type Default."}},{"type":{"id":"NewNetworkInjection"},"reason":{"message":"NewNetworkInjection cannot be performed on environment of type Default."}},{"type":{"id":"SwapNetworkInjection"},"reason":{"message":"SwapNetworkInjection cannot be performed on environment of type Default."}},{"type":{"id":"RevertNetworkInjection"},"reason":{"message":"RevertNetworkInjection cannot be performed on environment of type Default."}},{"type":{"id":"NewIdentity"},"reason":{"message":"NewIdentity cannot be performed on environment of type Default."}},{"type":{"id":"SwapIdentity"},"reason":{"message":"SwapIdentity cannot be performed on environment of type Default."}},{"type":{"id":"RevertIdentity"},"reason":{"message":"RevertIdentity cannot be performed on environment of type Default."}},{"type":{"id":"DisableGovernanceConfiguration"},"reason":{"message":"DisableGovernanceConfiguration cannot be performed on Power Platform environment because of the governance configuration."}},{"type":{"id":"UpdateGovernanceConfiguration"},"reason":{"message":"UpdateGovernanceConfiguration cannot be performed on Power Platform environment because of the governance configuration." }}]},"governanceConfiguration":{"protectionLevel":"Basic"}}\ndisplayName | contoso (default)\n')))))}y.isMDXComponent=!0}}]);