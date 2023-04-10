"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[76098],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>f});var t=r(67294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=l,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?t.createElement(f,i(i({ref:n},c),{},{components:r})):t.createElement(f,i({ref:n},c))}));function f(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65469:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var t=r(87462),l=(r(67294),r(3905));const a={},i="app get",o={unversionedId:"cmd/app/app-get",id:"cmd/app/app-get",title:"app get",description:"Retrieves information about the current Azure AD app",source:"@site/docs/cmd/app/app-get.md",sourceDirName:"cmd/app",slug:"/cmd/app/app-get",permalink:"/cli-microsoft365-docusaurus/cmd/app/app-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/app/app-get.md",tags:[],version:"current",lastUpdatedAt:1667518566,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{},sidebar:"commands",previous:{title:"file list",permalink:"/cli-microsoft365-docusaurus/cmd/file/file-list"},next:{title:"app open",permalink:"/cli-microsoft365-docusaurus/cmd/app/app-open"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:s},d="wrapper";function u(e){let{components:n,...r}=e;return(0,l.kt)(d,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"app-get"},"app get"),(0,l.kt)("p",null,"Retrieves information about the current Azure AD app"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 app get [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--appId [appId]"),"\n: Client ID of the Azure AD app registered in the .m365rc.json file to retrieve information for"),(0,l.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"Use this command to quickly look up information for the Azure AD application registration registered in the .m365rc.json file in your current project (folder)."),(0,l.kt)("p",null,"If you have multiple apps registered in your .m365rc.json file, you can specify the app for which you'd like to retrieve permissions using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--appId")," option. If you don't specify the app using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--appId")," option, you'll be prompted to select one of the applications from your .m365rc.json file."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Retrieve information about your current Azure AD app"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 app get\n")),(0,l.kt)("p",null,"Retrieve information about the Azure AD app with client ID ",(0,l.kt)("em",{parentName:"p"},"e23d235c-fcdf-45d1-ac5f-24ab2ee0695d")," specified in the ",(0,l.kt)("em",{parentName:"p"},".m365rc.json")," file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 app get --appId e23d235c-fcdf-45d1-ac5f-24ab2ee0695d\n")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("p",null,'=== "JSON"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'```json\n{\n  "id": "b3241f2a-6551-43d4-a72f-0d02ccfeb77f",\n  "deletedDateTime": null,\n  "appId": "02f9ff8c-b79e-4552-bdda-4facd74d6df1",\n  "applicationTemplateId": null,\n  "disabledByMicrosoftStatus": null,\n  "createdDateTime": "2022-10-28T21:20:57Z",\n  "displayName": "My AAD app",\n  "description": null,\n  "groupMembershipClaims": null,\n  "identifierUris": [],\n  "isDeviceOnlyAuthSupported": null,\n  "isFallbackPublicClient": null,\n  "notes": null,\n  "publisherDomain": "8b7jz1.onmicrosoft.com",\n  "serviceManagementReference": null,\n  "signInAudience": "AzureADMyOrg",\n  "tags": [],\n  "tokenEncryptionKeyId": null,\n  "samlMetadataUrl": null,\n  "defaultRedirectUri": null,\n  "certification": null,\n  "optionalClaims": null,\n  "addIns": [],\n  "api": {\n    "acceptMappedClaims": null,\n    "knownClientApplications": [],\n    "requestedAccessTokenVersion": null,\n    "oauth2PermissionScopes": [],\n    "preAuthorizedApplications": []\n  },\n  "appRoles": [\n    {\n      "allowedMemberTypes": [\n        "User"\n      ],\n      "description": "Managers",\n      "displayName": "Managers",\n      "id": "d7c46856-8a66-485a-9047-098eba08b9a3",\n      "isEnabled": true,\n      "origin": "Application",\n      "value": "managers"\n    }\n  ],\n  "info": {\n    "logoUrl": null,\n    "marketingUrl": null,\n    "privacyStatementUrl": null,\n    "supportUrl": null,\n    "termsOfServiceUrl": null\n  },\n  "keyCredentials": [],\n  "parentalControlSettings": {\n    "countriesBlockedForMinors": [],\n    "legalAgeGroupRule": "Allow"\n  },\n  "passwordCredentials": [],\n  "publicClient": {\n    "redirectUris": []\n  },\n  "requiredResourceAccess": [\n    {\n      "resourceAppId": "b55b276d-2b09-4ad2-8de5-f09cf24ffba9",\n      "resourceAccess": [\n        {\n          "id": "162b1576-a2b2-458d-b7b9-04481911b4ef",\n          "type": "Role"\n        }\n      ]\n    },\n    {\n      "resourceAppId": "00000005-0000-0ff1-ce00-000000000000",\n      "resourceAccess": [\n        {\n          "id": "8e5870bb-8808-44dc-8e10-c509ed919ddd",\n          "type": "Scope"\n        },\n        {\n          "id": "5db81a03-0de0-432b-b31e-71d57c8d2e0b",\n          "type": "Scope"\n        }\n      ]\n    }\n  ],\n  "verifiedPublisher": {\n    "displayName": null,\n    "verifiedPublisherId": null,\n    "addedDateTime": null\n  },\n  "web": {\n    "homePageUrl": null,\n    "logoutUrl": null,\n    "redirectUris": [],\n    "implicitGrantSettings": {\n      "enableAccessTokenIssuance": false,\n      "enableIdTokenIssuance": false\n    },\n    "redirectUriSettings": []\n  },\n  "spa": {\n    "redirectUris": []\n  }\n}\n```\n')),(0,l.kt)("p",null,'=== "Text"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'```text\naddIns                    : []\napi                       : {"acceptMappedClaims":null,"knownClientApplications":[],"requestedAccessTokenVersion":null,"oauth2PermissionScopes":[],"preAuthorizedApplications":[]}\nappId                     : 02f9ff8c-b79e-4552-bdda-4facd74d6df1\nappRoles                  : [{"allowedMemberTypes":["User"],"description":"Managers","displayName":"Managers","id":"d7c46856-8a66-485a-9047-098eba08b9a3","isEnabled":true,"origin":"Application","value":"managers"}]\napplicationTemplateId     : null\ncertification             : null\ncreatedDateTime           : 2022-10-28T21:20:57Z\ndefaultRedirectUri        : null\ndeletedDateTime           : null\ndescription               : null\ndisabledByMicrosoftStatus : null\ndisplayName               : My AAD app\ngroupMembershipClaims     : null\nid                        : b3241f2a-6551-43d4-a72f-0d02ccfeb77f\nidentifierUris            : []\ninfo                      : {"logoUrl":null,"marketingUrl":null,"privacyStatementUrl":null,"supportUrl":null,"termsOfServiceUrl":null}\nisDeviceOnlyAuthSupported : null\nisFallbackPublicClient    : null\nkeyCredentials            : []\nnotes                     : null\noptionalClaims            : null\nparentalControlSettings   : {"countriesBlockedForMinors":[],"legalAgeGroupRule":"Allow"}\npasswordCredentials       : []\npublicClient              : {"redirectUris":[]}\npublisherDomain           : 8b7jz1.onmicrosoft.com\nrequiredResourceAccess    : [{"resourceAppId":"b55b276d-2b09-4ad2-8de5-f09cf24ffba9","resourceAccess":[{"id":"162b1576-a2b2-458d-b7b9-04481911b4ef","type":"Role"}]},{"resourceAppId":"00000005-0000-0ff1-ce00-000000000000","resourceAccess":[{"id":"8e5870bb-8808-44dc-8e10-c509ed919ddd","type":"Scope"},{"id":"5db81a03-0de0-432b-b31e-71d57c8d2e0b","type":"Scope"}]}]\nsamlMetadataUrl           : null\nserviceManagementReference: null\nsignInAudience            : AzureADMyOrg\nspa                       : {"redirectUris":[]}\ntags                      : []\ntokenEncryptionKeyId      : null\nverifiedPublisher         : {"displayName":null,"verifiedPublisherId":null,"addedDateTime":null}\nweb                       : {"homePageUrl":null,"logoutUrl":null,"redirectUris":[],"implicitGrantSettings":{"enableAccessTokenIssuance":false,"enableIdTokenIssuance":false},"redirectUriSettings":[]}\n```\n')),(0,l.kt)("p",null,'=== "CSV"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'```csv\nid,deletedDateTime,appId,applicationTemplateId,disabledByMicrosoftStatus,createdDateTime,displayName,description,groupMembershipClaims,identifierUris,isDeviceOnlyAuthSupported,isFallbackPublicClient,notes,publisherDomain,serviceManagementReference,signInAudience,tags,tokenEncryptionKeyId,samlMetadataUrl,defaultRedirectUri,certification,optionalClaims,addIns,api,appRoles,info,keyCredentials,parentalControlSettings,passwordCredentials,publicClient,requiredResourceAccess,verifiedPublisher,web,spa\nb3241f2a-6551-43d4-a72f-0d02ccfeb77f,,02f9ff8c-b79e-4552-bdda-4facd74d6df1,,,2022-10-28T21:20:57Z,My AAD app,,,[],,,,8b7jz1.onmicrosoft.com,,AzureADMyOrg,[],,,,,,[],"{""acceptMappedClaims"":null,""knownClientApplications"":[],""requestedAccessTokenVersion"":null,""oauth2PermissionScopes"":[],""preAuthorizedApplications"":[]}","[{""allowedMemberTypes"":[""User""],""description"":""Managers"",""displayName"":""Managers"",""id"":""d7c46856-8a66-485a-9047-098eba08b9a3"",""isEnabled"":true,""origin"":""Application"",""value"":""managers""}]","{""logoUrl"":null,""marketingUrl"":null,""privacyStatementUrl"":null,""supportUrl"":null,""termsOfServiceUrl"":null}",[],"{""countriesBlockedForMinors"":[],""legalAgeGroupRule"":""Allow""}",[],"{""redirectUris"":[]}","[{""resourceAppId"":""b55b276d-2b09-4ad2-8de5-f09cf24ffba9"",""resourceAccess"":[{""id"":""162b1576-a2b2-458d-b7b9-04481911b4ef"",""type"":""Role""}]},{""resourceAppId"":""00000005-0000-0ff1-ce00-000000000000"",""resourceAccess"":[{""id"":""8e5870bb-8808-44dc-8e10-c509ed919ddd"",""type"":""Scope""},{""id"":""5db81a03-0de0-432b-b31e-71d57c8d2e0b"",""type"":""Scope""}]}]","{""displayName"":null,""verifiedPublisherId"":null,""addedDateTime"":null}","{""homePageUrl"":null,""logoutUrl"":null,""redirectUris"":[],""implicitGrantSettings"":{""enableAccessTokenIssuance"":false,""enableIdTokenIssuance"":false},""redirectUriSettings"":[]}","{""redirectUris"":[]}"\n```\n')))}u.isMDXComponent=!0}}]);