"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76098],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65469:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const l={},i="app get",p={unversionedId:"cmd/app/app-get",id:"cmd/app/app-get",title:"app get",description:"Retrieves information about the current Azure AD app",source:"@site/docs/cmd/app/app-get.md",sourceDirName:"cmd/app",slug:"/cmd/app/app-get",permalink:"/cmd/app/app-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/app/app-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"Microsoft 365 apps (app)",permalink:"/cmd/groups/app"},next:{title:"app open",permalink:"/cmd/app/app-open"}},o={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"app-get"},"app get"),(0,a.kt)("p",null,"Retrieves information about the current Azure AD app"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 app get [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--appId [appId]"),"\n: Client ID of the Azure AD app registered in the .m365rc.json file to retrieve information for"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Use this command to quickly look up information for the Azure AD application registration registered in the .m365rc.json file in your current project (folder)."),(0,a.kt)("p",null,"If you have multiple apps registered in your .m365rc.json file, you can specify the app for which you'd like to retrieve permissions using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--appId")," option. If you don't specify the app using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--appId")," option, you'll be prompted to select one of the applications from your .m365rc.json file."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Retrieve information about your current Azure AD app"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 app get\n")),(0,a.kt)("p",null,"Retrieve information about the Azure AD app with client ID ",(0,a.kt)("em",{parentName:"p"},"e23d235c-fcdf-45d1-ac5f-24ab2ee0695d")," specified in the ",(0,a.kt)("em",{parentName:"p"},".m365rc.json")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 app get --appId e23d235c-fcdf-45d1-ac5f-24ab2ee0695d\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "id": "b3241f2a-6551-43d4-a72f-0d02ccfeb77f",\n  "deletedDateTime": null,\n  "appId": "02f9ff8c-b79e-4552-bdda-4facd74d6df1",\n  "applicationTemplateId": null,\n  "disabledByMicrosoftStatus": null,\n  "createdDateTime": "2022-10-28T21:20:57Z",\n  "displayName": "My AAD app",\n  "description": null,\n  "groupMembershipClaims": null,\n  "identifierUris": [],\n  "isDeviceOnlyAuthSupported": null,\n  "isFallbackPublicClient": null,\n  "notes": null,\n  "publisherDomain": "8b7jz1.onmicrosoft.com",\n  "serviceManagementReference": null,\n  "signInAudience": "AzureADMyOrg",\n  "tags": [],\n  "tokenEncryptionKeyId": null,\n  "samlMetadataUrl": null,\n  "defaultRedirectUri": null,\n  "certification": null,\n  "optionalClaims": null,\n  "addIns": [],\n  "api": {\n    "acceptMappedClaims": null,\n    "knownClientApplications": [],\n    "requestedAccessTokenVersion": null,\n    "oauth2PermissionScopes": [],\n    "preAuthorizedApplications": []\n  },\n  "appRoles": [\n    {\n      "allowedMemberTypes": [\n        "User"\n      ],\n      "description": "Managers",\n      "displayName": "Managers",\n      "id": "d7c46856-8a66-485a-9047-098eba08b9a3",\n      "isEnabled": true,\n      "origin": "Application",\n      "value": "managers"\n    }\n  ],\n  "info": {\n    "logoUrl": null,\n    "marketingUrl": null,\n    "privacyStatementUrl": null,\n    "supportUrl": null,\n    "termsOfServiceUrl": null\n  },\n  "keyCredentials": [],\n  "parentalControlSettings": {\n    "countriesBlockedForMinors": [],\n    "legalAgeGroupRule": "Allow"\n  },\n  "passwordCredentials": [],\n  "publicClient": {\n    "redirectUris": []\n  },\n  "requiredResourceAccess": [\n    {\n      "resourceAppId": "b55b276d-2b09-4ad2-8de5-f09cf24ffba9",\n      "resourceAccess": [\n        {\n          "id": "162b1576-a2b2-458d-b7b9-04481911b4ef",\n          "type": "Role"\n        }\n      ]\n    },\n    {\n      "resourceAppId": "00000005-0000-0ff1-ce00-000000000000",\n      "resourceAccess": [\n        {\n          "id": "8e5870bb-8808-44dc-8e10-c509ed919ddd",\n          "type": "Scope"\n        },\n        {\n          "id": "5db81a03-0de0-432b-b31e-71d57c8d2e0b",\n          "type": "Scope"\n        }\n      ]\n    }\n  ],\n  "verifiedPublisher": {\n    "displayName": null,\n    "verifiedPublisherId": null,\n    "addedDateTime": null\n  },\n  "web": {\n    "homePageUrl": null,\n    "logoutUrl": null,\n    "redirectUris": [],\n    "implicitGrantSettings": {\n      "enableAccessTokenIssuance": false,\n      "enableIdTokenIssuance": false\n    },\n    "redirectUriSettings": []\n  },\n  "spa": {\n    "redirectUris": []\n  }\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```text\naddIns                    : []\napi                       : {"acceptMappedClaims":null,"knownClientApplications":[],"requestedAccessTokenVersion":null,"oauth2PermissionScopes":[],"preAuthorizedApplications":[]}\nappId                     : 02f9ff8c-b79e-4552-bdda-4facd74d6df1\nappRoles                  : [{"allowedMemberTypes":["User"],"description":"Managers","displayName":"Managers","id":"d7c46856-8a66-485a-9047-098eba08b9a3","isEnabled":true,"origin":"Application","value":"managers"}]\napplicationTemplateId     : null\ncertification             : null\ncreatedDateTime           : 2022-10-28T21:20:57Z\ndefaultRedirectUri        : null\ndeletedDateTime           : null\ndescription               : null\ndisabledByMicrosoftStatus : null\ndisplayName               : My AAD app\ngroupMembershipClaims     : null\nid                        : b3241f2a-6551-43d4-a72f-0d02ccfeb77f\nidentifierUris            : []\ninfo                      : {"logoUrl":null,"marketingUrl":null,"privacyStatementUrl":null,"supportUrl":null,"termsOfServiceUrl":null}\nisDeviceOnlyAuthSupported : null\nisFallbackPublicClient    : null\nkeyCredentials            : []\nnotes                     : null\noptionalClaims            : null\nparentalControlSettings   : {"countriesBlockedForMinors":[],"legalAgeGroupRule":"Allow"}\npasswordCredentials       : []\npublicClient              : {"redirectUris":[]}\npublisherDomain           : 8b7jz1.onmicrosoft.com\nrequiredResourceAccess    : [{"resourceAppId":"b55b276d-2b09-4ad2-8de5-f09cf24ffba9","resourceAccess":[{"id":"162b1576-a2b2-458d-b7b9-04481911b4ef","type":"Role"}]},{"resourceAppId":"00000005-0000-0ff1-ce00-000000000000","resourceAccess":[{"id":"8e5870bb-8808-44dc-8e10-c509ed919ddd","type":"Scope"},{"id":"5db81a03-0de0-432b-b31e-71d57c8d2e0b","type":"Scope"}]}]\nsamlMetadataUrl           : null\nserviceManagementReference: null\nsignInAudience            : AzureADMyOrg\nspa                       : {"redirectUris":[]}\ntags                      : []\ntokenEncryptionKeyId      : null\nverifiedPublisher         : {"displayName":null,"verifiedPublisherId":null,"addedDateTime":null}\nweb                       : {"homePageUrl":null,"logoutUrl":null,"redirectUris":[],"implicitGrantSettings":{"enableAccessTokenIssuance":false,"enableIdTokenIssuance":false},"redirectUriSettings":[]}\n```\n')),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```csv\nid,deletedDateTime,appId,applicationTemplateId,disabledByMicrosoftStatus,createdDateTime,displayName,description,groupMembershipClaims,identifierUris,isDeviceOnlyAuthSupported,isFallbackPublicClient,notes,publisherDomain,serviceManagementReference,signInAudience,tags,tokenEncryptionKeyId,samlMetadataUrl,defaultRedirectUri,certification,optionalClaims,addIns,api,appRoles,info,keyCredentials,parentalControlSettings,passwordCredentials,publicClient,requiredResourceAccess,verifiedPublisher,web,spa\nb3241f2a-6551-43d4-a72f-0d02ccfeb77f,,02f9ff8c-b79e-4552-bdda-4facd74d6df1,,,2022-10-28T21:20:57Z,My AAD app,,,[],,,,8b7jz1.onmicrosoft.com,,AzureADMyOrg,[],,,,,,[],"{""acceptMappedClaims"":null,""knownClientApplications"":[],""requestedAccessTokenVersion"":null,""oauth2PermissionScopes"":[],""preAuthorizedApplications"":[]}","[{""allowedMemberTypes"":[""User""],""description"":""Managers"",""displayName"":""Managers"",""id"":""d7c46856-8a66-485a-9047-098eba08b9a3"",""isEnabled"":true,""origin"":""Application"",""value"":""managers""}]","{""logoUrl"":null,""marketingUrl"":null,""privacyStatementUrl"":null,""supportUrl"":null,""termsOfServiceUrl"":null}",[],"{""countriesBlockedForMinors"":[],""legalAgeGroupRule"":""Allow""}",[],"{""redirectUris"":[]}","[{""resourceAppId"":""b55b276d-2b09-4ad2-8de5-f09cf24ffba9"",""resourceAccess"":[{""id"":""162b1576-a2b2-458d-b7b9-04481911b4ef"",""type"":""Role""}]},{""resourceAppId"":""00000005-0000-0ff1-ce00-000000000000"",""resourceAccess"":[{""id"":""8e5870bb-8808-44dc-8e10-c509ed919ddd"",""type"":""Scope""},{""id"":""5db81a03-0de0-432b-b31e-71d57c8d2e0b"",""type"":""Scope""}]}]","{""displayName"":null,""verifiedPublisherId"":null,""addedDateTime"":null}","{""homePageUrl"":null,""logoutUrl"":null,""redirectUris"":[],""implicitGrantSettings"":{""enableAccessTokenIssuance"":false,""enableIdTokenIssuance"":false},""redirectUriSettings"":[]}","{""redirectUris"":[]}"\n```\n')))}d.isMDXComponent=!0}}]);