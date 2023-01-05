"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71250],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const l={},i="aad app list",p={unversionedId:"cmd/aad/app/app-list",id:"cmd/aad/app/app-list",title:"aad app list",description:"Retrieves a list of Azure AD app registrations",source:"@site/docs/cmd/aad/app/app-list.md",sourceDirName:"cmd/aad/app",slug:"/cmd/aad/app/app-list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/app/app-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad app get",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-get"},next:{title:"aad app remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-remove"}},s={},o=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:o};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aad-app-list"},"aad app list"),(0,r.kt)("p",null,"Retrieves a list of Azure AD app registrations"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Retrieve a list of Azure AD app registrations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app list\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "id": "ff2798f7-1c7a-4607-8a7b-3d5e0c18c756",\n    "deletedDateTime": null,\n    "appId": "61ed4fab-a861-4307-bb87-a6a53dbe39f5",\n    "applicationTemplateId": null,\n    "disabledByMicrosoftStatus": null,\n    "createdDateTime": "2021-03-16T14:51:28Z",\n    "displayName": "TestAppPermissions",\n    "description": null,\n    "groupMembershipClaims": null,\n    "identifierUris": [],\n    "isDeviceOnlyAuthSupported": null,\n    "isFallbackPublicClient": null,\n    "notes": null,\n    "publisherDomain": "Contoso.onmicrosoft.com",\n    "serviceManagementReference": null,\n    "signInAudience": "AzureADMyOrg",\n    "tags": [],\n    "tokenEncryptionKeyId": null,\n    "samlMetadataUrl": null,\n    "defaultRedirectUri": null,\n    "certification": null,\n    "optionalClaims": null,\n    "addIns": [],\n    "api": {\n      "acceptMappedClaims": null,\n      "knownClientApplications": [],\n      "requestedAccessTokenVersion": null,\n      "oauth2PermissionScopes": [],\n      "preAuthorizedApplications": []\n    },\n    "appRoles": [],\n    "info": {\n      "logoUrl": null,\n      "marketingUrl": null,\n      "privacyStatementUrl": null,\n      "supportUrl": null,\n      "termsOfServiceUrl": null\n    },\n    "keyCredentials": [\n      {\n        "customKeyIdentifier": "7D20AB8DD09B653E9A3880F9046314B76917EF62",\n        "displayName": "CN=TestCertificate",\n        "endDateTime": "2022-01-01T00:00:00Z",\n        "key": null,\n        "keyId": "8928a06f-fa2d-4d92-98c3-b0f544804f64",\n        "startDateTime": "2020-01-01T00:00:00Z",\n        "type": "AsymmetricX509Cert",\n        "usage": "Verify"\n      }\n    ],\n    "parentalControlSettings": {\n      "countriesBlockedForMinors": [],\n      "legalAgeGroupRule": "Allow"\n    },\n    "passwordCredentials": [\n      {\n        "customKeyIdentifier": null,\n        "displayName": "TestSecret",\n        "endDateTime": "2022-03-16T14:58:45.602Z",\n        "hint": "~03",\n        "keyId": "714c9628-4bb8-4f08-84b4-7fd8d7a7b8c5",\n        "secretText": null,\n        "startDateTime": "2021-03-16T14:59:07.642Z"\n      }\n    ],\n    "publicClient": {\n      "redirectUris": []\n    },\n    "requiredResourceAccess": [\n      {\n        "resourceAppId": "00000003-0000-0000-c000-000000000000",\n        "resourceAccess": [\n          {\n            "id": "e1fe6dd8-ba31-4d61-89e7-88639da4683d",\n            "type": "Scope"\n          },\n          {\n            "id": "18228521-a591-40f1-b215-5fad4488c117",\n            "type": "Role"\n          },\n          {\n            "id": "09850681-111b-4a89-9bed-3f2cae46d706",\n            "type": "Role"\n          }\n        ]\n      }\n    ],\n    "verifiedPublisher": {\n      "displayName": null,\n      "verifiedPublisherId": null,\n      "addedDateTime": null\n    },\n    "web": {\n      "homePageUrl": null,\n      "logoutUrl": null,\n      "redirectUris": [],\n      "implicitGrantSettings": {\n        "enableAccessTokenIssuance": false,\n        "enableIdTokenIssuance": false\n      },\n      "redirectUriSettings": []\n    },\n    "spa": {\n      "redirectUris": []\n    }\n  }\n]\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nappId                                 id                                    displayName                                                              signInAudience\n------------------------------------  ------------------------------------  -----------------------------------------------------------------------  ----------------------------------\n61ed4fab-a861-4307-bb87-a6a53dbe39f5  ff2798f7-1c7a-4607-8a7b-3d5e0c18c756  TestAppPermissions                                                       AzureADMyOrg\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nappId,id,displayName,signInAudience\n61ed4fab-a861-4307-bb87-a6a53dbe39f5,ff2798f7-1c7a-4607-8a7b-3d5e0c18c756,TestAppPermissions,AzureADMyOrg\n```\n")))}d.isMDXComponent=!0}}]);