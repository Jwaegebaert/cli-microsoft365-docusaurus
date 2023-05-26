"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[87926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),s=n(56697),i=n(91980),p=n(67392),u=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,p]=f({queryString:n,groupId:a}),[c,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),y=(()=>{const e=i??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),b(e)}),[p,b,l]),tabValues:l}}var y=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==s&&(c(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,y.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},26054:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]},o="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}s.isMDXComponent=!0},74468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(26054),o=n(74866),s=n(85162);const i={},p="aad app list",u={unversionedId:"cmd/aad/app/app-list",id:"cmd/aad/app/app-list",title:"aad app list",description:"Retrieves a list of Azure AD app registrations",source:"@site/docs/cmd/aad/app/app-list.mdx",sourceDirName:"cmd/aad/app",slug:"/cmd/aad/app/app-list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/app/app-list.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad app get",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-get"},next:{title:"aad app remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-remove"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:d},f="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aad-app-list"},"aad app list"),(0,r.kt)("p",null,"Retrieves a list of Azure AD app registrations"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)(l.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Retrieve a list of Azure AD app registrations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app list\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "ff2798f7-1c7a-4607-8a7b-3d5e0c18c756",\n    "deletedDateTime": null,\n    "appId": "61ed4fab-a861-4307-bb87-a6a53dbe39f5",\n    "applicationTemplateId": null,\n    "disabledByMicrosoftStatus": null,\n    "createdDateTime": "2021-03-16T14:51:28Z",\n    "displayName": "TestAppPermissions",\n    "description": null,\n    "groupMembershipClaims": null,\n    "identifierUris": [],\n    "isDeviceOnlyAuthSupported": null,\n    "isFallbackPublicClient": null,\n    "notes": null,\n    "publisherDomain": "Contoso.onmicrosoft.com",\n    "serviceManagementReference": null,\n    "signInAudience": "AzureADMyOrg",\n    "tags": [],\n    "tokenEncryptionKeyId": null,\n    "samlMetadataUrl": null,\n    "defaultRedirectUri": null,\n    "certification": null,\n    "optionalClaims": null,\n    "addIns": [],\n    "api": {\n      "acceptMappedClaims": null,\n      "knownClientApplications": [],\n      "requestedAccessTokenVersion": null,\n      "oauth2PermissionScopes": [],\n      "preAuthorizedApplications": []\n    },\n    "appRoles": [],\n    "info": {\n      "logoUrl": null,\n      "marketingUrl": null,\n      "privacyStatementUrl": null,\n      "supportUrl": null,\n      "termsOfServiceUrl": null\n    },\n    "keyCredentials": [\n      {\n        "customKeyIdentifier": "7D20AB8DD09B653E9A3880F9046314B76917EF62",\n        "displayName": "CN=TestCertificate",\n        "endDateTime": "2022-01-01T00:00:00Z",\n        "key": null,\n        "keyId": "8928a06f-fa2d-4d92-98c3-b0f544804f64",\n        "startDateTime": "2020-01-01T00:00:00Z",\n        "type": "AsymmetricX509Cert",\n        "usage": "Verify"\n      }\n    ],\n    "parentalControlSettings": {\n      "countriesBlockedForMinors": [],\n      "legalAgeGroupRule": "Allow"\n    },\n    "passwordCredentials": [\n      {\n        "customKeyIdentifier": null,\n        "displayName": "TestSecret",\n        "endDateTime": "2022-03-16T14:58:45.602Z",\n        "hint": "~03",\n        "keyId": "714c9628-4bb8-4f08-84b4-7fd8d7a7b8c5",\n        "secretText": null,\n        "startDateTime": "2021-03-16T14:59:07.642Z"\n      }\n    ],\n    "publicClient": {\n      "redirectUris": []\n    },\n    "requiredResourceAccess": [\n      {\n        "resourceAppId": "00000003-0000-0000-c000-000000000000",\n        "resourceAccess": [\n          {\n            "id": "e1fe6dd8-ba31-4d61-89e7-88639da4683d",\n            "type": "Scope"\n          },\n          {\n            "id": "18228521-a591-40f1-b215-5fad4488c117",\n            "type": "Role"\n          },\n          {\n            "id": "09850681-111b-4a89-9bed-3f2cae46d706",\n            "type": "Role"\n          }\n        ]\n      }\n    ],\n    "verifiedPublisher": {\n      "displayName": null,\n      "verifiedPublisherId": null,\n      "addedDateTime": null\n    },\n    "web": {\n      "homePageUrl": null,\n      "logoutUrl": null,\n      "redirectUris": [],\n      "implicitGrantSettings": {\n        "enableAccessTokenIssuance": false,\n        "enableIdTokenIssuance": false\n      },\n      "redirectUriSettings": []\n    },\n    "spa": {\n      "redirectUris": []\n    }\n  }\n]\n'))),(0,r.kt)(s.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"appId                                 id                                    displayName                                                              signInAudience\n------------------------------------  ------------------------------------  -----------------------------------------------------------------------  ----------------------------------\n61ed4fab-a861-4307-bb87-a6a53dbe39f5  ff2798f7-1c7a-4607-8a7b-3d5e0c18c756  TestAppPermissions                                                       AzureADMyOrg\n"))),(0,r.kt)(s.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"appId,id,displayName,signInAudience\n61ed4fab-a861-4307-bb87-a6a53dbe39f5,ff2798f7-1c7a-4607-8a7b-3d5e0c18c756,TestAppPermissions,AzureADMyOrg\n")))))}b.isMDXComponent=!0}}]);