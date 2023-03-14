"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[10529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}l.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(56697),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var b=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},35647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),o=n(37884),i=n(74866),l=n(85162);const s={},u="pa environment list",c={unversionedId:"cmd/pa/environment/environment-list",id:"cmd/pa/environment/environment-list",title:"pa environment list",description:"Lists Microsoft Power Apps environments in the current tenant",source:"@site/docs/cmd/pa/environment/environment-list.mdx",sourceDirName:"cmd/pa/environment",slug:"/cmd/pa/environment/environment-list",permalink:"/cli-microsoft365-docusaurus/cmd/pa/environment/environment-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pa/environment/environment-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"pa environment get",permalink:"/cli-microsoft365-docusaurus/cmd/pa/environment/environment-get"},next:{title:"pa pcf init",permalink:"/cli-microsoft365-docusaurus/cmd/pa/pcf/pcf-init"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:m},f="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pa-environment-list"},"pa environment list"),(0,r.kt)("p",null,"Lists Microsoft Power Apps environments in the current tenant"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa environment list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This command is based on an API that is currently in preview and is subject to change once the API reached general availability.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List Microsoft Power Apps environments in the current tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa environment list\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id":"/providers/Microsoft.PowerApps/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n    "name":"Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n    "location":"europe",\n    "type":"Microsoft.PowerApps/environments",\n    "properties":{\n      "azureRegionHint":"westeurope",\n      "displayName":"contoso (default) (org6633049a)",\n      "createdTime":"2020-03-12T13:39:17.9876946Z",\n      "createdBy":{\n        "id":"SYSTEM",\n        "displayName":"SYSTEM",\n        "type":"NotSpecified"\n      },\n      "provisioningState":"Succeeded",\n      "creationType":"DefaultTenant",\n      "environmentSku":"Default",\n      "environmentType":"Production",\n      "isDefault":true,\n      "runtimeEndpoints":{\n        "microsoft.BusinessAppPlatform":"https://europe.api.bap.microsoft.com",\n        "microsoft.CommonDataModel":"https://europe.api.cds.microsoft.com",\n        "microsoft.PowerApps":"https://europe.api.powerapps.com",\n        "microsoft.PowerAppsAdvisor":"https://europe.api.advisor.powerapps.com",\n        "microsoft.PowerVirtualAgents":"https://powervamg.eu-il109.gateway.prod.island.powerapps.com",\n        "microsoft.ApiManagement":"https://management.EUROPE.azure-apihub.net",\n        "microsoft.Flow":"https://emea.api.flow.microsoft.com"\n      },\n      "linkedEnvironmentMetadata":{\n        "type":"Dynamics365Instance",\n        "resourceId":"5041ef46-5a1c-4a0f-a185-6bb49b5c6686",\n        "friendlyName":"contoso (default)",\n        "uniqueName":"unq5041ef465a1c4a0fa1856bb49b5c6",\n        "domainName":"org6633049a",\n        "version":"9.2.22101.00168",\n        "instanceUrl":"https://org6633049a.crm4.dynamics.com/",\n        "instanceApiUrl":"https://org6633049a.api.crm4.dynamics.com",\n        "baseLanguage":1033,\n        "instanceState":"Ready",\n        "createdTime":"2021-10-08T09:50:41.283Z",\n        "modifiedTime":"2022-10-29T14:04:14.0720726Z",\n        "hostNameSuffix":"crm4.dynamics.com",\n        "bapSolutionId":"00000001-0000-0000-0001-00000000009b",\n        "creationTemplates":[\n          "D365_CDS"\n        ],\n        "webApiVersion":"v9.0",\n        "platformSku":"Standard"\n      },\n      "retentionPeriod":"P7D",\n      "lifecycleAuthority":"Environment",\n      "states":{\n        "management":{\n          "id":"NotSpecified"\n        },\n        "runtime":{\n          "runtimeReasonCode":"NotSpecified",\n          "requestedBy":{\n            "displayName":"SYSTEM",\n            "type":"NotSpecified"\n          },\n          "id":"Enabled"\n        }\n      },\n      "updateCadence":{\n        "id":"Frequent"\n      },\n      "connectedGroups":[],\n      "protectionStatus":{\n        "keyManagedBy":"Microsoft"\n      },\n      "trialScenarioType":"None",\n      "cluster":{\n        "category":"Prod",\n        "number":"109",\n        "uriSuffix":"eu-il109.gateway.prod.island",\n        "geoShortName":"EU",\n        "environment":"Prod"\n      },\n      "governanceConfiguration":{\n        "protectionLevel":"Basic"\n      }\n    },\n    "displayName":"contoso (default) (org6633049a)"\n  }\n]\n'))),(0,r.kt)(l.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"displayName                             name\n--------------------------------------- --------------------------------------------\nenvironmentName (default) (org6633050c) Default-e1dd4030-a657-480a-8a0e-c1b1eec51e2e\n"))),(0,r.kt)(l.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"name,displayName\nDefault-e1dd4030-a657-480a-8a0e-c1b1eec51e2e,environmentName (default) (org6633050c)\n"))),(0,r.kt)(l.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# pa environment list\n\nDate: 9/1/2023\n\n## environmentName (default) (org6633050c) (/providers/Microsoft.PowerApps/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d)\n\nProperty | Value\n---------|-------\nid | /providers/Microsoft.PowerApps/environments/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d\nname | Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d\nlocation | europe\ntype | Microsoft.PowerApps/environments\nproperties | {"azureRegionHint":"westeurope","displayName":"contoso (default) (org6633049a)","createdTime":"2020-03-12T13:39:17.9876946Z","createdBy":{"id":"SYSTEM","displayName":"SYSTEM","type":"NotSpecified"},"provisioningState":"Succeeded","creationType":"DefaultTenant","environmentSku":"Default","environmentType":"Production","isDefault":true,"runtimeEndpoints":{"microsoft.BusinessAppPlatform":"https://europe.api.bap.microsoft.com","microsoft.CommonDataModel":"https://europe.api.cds.microsoft.com","microsoft.PowerApps":"https://europe.api.powerapps.com","microsoft.PowerAppsAdvisor":"https://europe.api.advisor.powerapps.com","microsoft.PowerVirtualAgents":"https://powervamg.eu-il109.gateway.prod.island.powerapps.com","microsoft.ApiManagement":"https://management.EUROPE.azure-apihub.net","microsoft.Flow":"https://emea.api.flow.microsoft.com"},"linkedEnvironmentMetadata":{"type":"Dynamics365Instance","resourceId":"5041ef46-5a1c-4a0f-a185-6bb49b5c6686","friendlyName":"contoso (default)","uniqueName":"unq5041ef465a1c4a0fa1856bb49b5c6","domainName":"org6633049a","version":"9.2.22101.00168","instanceUrl":"https://org6633049a.crm4.dynamics.com/","instanceApiUrl":"https://org6633049a.api.crm4.dynamics.com","baseLanguage":1033,"instanceState":"Ready","createdTime":"2021-10-08T09:50:41.283Z","modifiedTime":"2022-10-29T14:04:14.0720726Z","hostNameSuffix":"crm4.dynamics.com","bapSolutionId":"00000001-0000-0000-0001-00000000009b","creationTemplates":["D365_CDS"],"webApiVersion":"v9.0","platformSku":"Standard"},"retentionPeriod":"P7D","lifecycleAuthority":"Environment","states":{"management":{"id":"NotSpecified"},"runtime":{"runtimeReasonCode":"NotSpecified","requestedBy":{"displayName":"SYSTEM","type":"NotSpecified"},"id":"Enabled"}},"updateCadence":{"id":"Frequent"},"connectedGroups":[],"protectionStatus":{"keyManagedBy":"Microsoft"},"trialScenarioType":"None","cluster":{"category":"Prod","number":"109","uriSuffix":"eu-il109.gateway.prod.island","geoShortName":"EU","environment":"Prod"},"governanceConfiguration":{"protectionLevel":"Basic"}}\ndisplayName | contoso (default) (org6633049a)\n')))))}v.isMDXComponent=!0}}]);