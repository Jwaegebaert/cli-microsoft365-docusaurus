"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[9954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="tenant security alerts list",i={unversionedId:"cmd/tenant/security/security-alerts-list",id:"cmd/tenant/security/security-alerts-list",title:"tenant security alerts list",description:"Gets the security alerts for a tenant",source:"@site/docs/cmd/tenant/security/security-alerts-list.md",sourceDirName:"cmd/tenant/security",slug:"/cmd/tenant/security/security-alerts-list",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/security/security-alerts-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/tenant/security/security-alerts-list.md",tags:[],version:"current",lastUpdatedAt:1666982956,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{},sidebar:"commands",previous:{title:"tenant report servicesusercounts",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/report/report-servicesusercounts"},next:{title:"tenant serviceannouncement health get",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/serviceannouncement/serviceannouncement-health-get"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tenant-security-alerts-list"},"tenant security alerts list"),(0,a.kt)("p",null,"Gets the security alerts for a tenant"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 tenant security alerts list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--vendor [vendor]"),"\n: The vendor to return alerts for. Possible values ",(0,a.kt)("inlineCode",{parentName:"p"},"Azure Advanced Threat Protection"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Azure Security Center"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Microsoft Cloud App Security"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Azure Active Directory Identity Protection"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Azure Sentinel"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Microsoft Defender ATP"),". If omitted, all alerts are returned"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get all security alerts for a tenant"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 tenant security alerts list\n")),(0,a.kt)("p",null,"Get security alerts for a vendor with name ",(0,a.kt)("em",{parentName:"p"},"Azure Sentinel")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 tenant security alerts list --vendor "Azure Sentinel"\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n[\n  {\n      "id": "2517536653831539999_658fa695-a5e6-4b60-ac7c-b2c1396df384",\n      "azureTenantId": "b8e1599d-b418-4be9-8f39-df03c3abe27a",\n      "azureSubscriptionId": "ee390228-e284-4e54-a464-d693a1d55540",\n      "riskScore": null,\n      "tags": [],\n      "activityGroupName": null,\n      "assignedTo": null,\n      "category": "Storage.Blob_GeoAnomaly",\n      "closedDateTime": null,\n      "comments": [],\n      "confidence": null,\n      "createdDateTime": "2022-03-30T13:19:15.8039138Z",\n      "description": "Someone has accessed your Azure Storage account \'westeuropegivcekj\' from an unusual location.",\n      "detectionIds": [],\n      "eventDateTime": "2022-03-30T10:16:56.846Z",\n      "feedback": null,\n      "incidentIds": [],\n      "lastEventDateTime": null,\n      "lastModifiedDateTime": "2022-03-30T13:19:48.5196488Z",\n      "recommendedActions": [\n        "\u2022 Limit access to your storage account, following the \'least privilege\' principle: https://go.microsoft.com/fwlink/?linkid=2187303.\u2022 Consider using identity-based authentication: https://go.microsoft.com/fwlink/?linkid=2187202.\u2022 Consider rotating the storage account access keys and ensure that your access tokens are only shared with authorized users.\u2022 Ensure that storage access tokens are stored in a secured location such as Azure Key Vault. Avoid storing or sharing storage access tokens in source code, documentation, and email."\n      ],\n      "severity": "low",\n      "sourceMaterials": [\n        "https://portal.azure.com/#blade/Microsoft_Azure_Security_AzureDefenderForData/AlertBlade/alertId/2517536653831539999_658fa695-a5e6-4b60-ac7c-b2c1396df384/subscriptionId/bbdf91d0-d75b-430e-b738-2c525452144f/resourceGroup/managed-rg-purview-mip-poc/referencedFrom/alertDeepLink/location/westeurope"\n      ],\n      "status": "newAlert",\n      "title": "Access from an unusual location to a storage blob container",\n      "CustomProperties": "[\\"{\\\\\\"Alert Id\\\\\\":\\\\\\"658fa695-a5e6-4b60-ac7c-b2c1396df384\\\\\\",\\\\\\"Azure AD user\\\\\\":\\\\\\"N/A (Azure AD user authentication was not used)\\\\\\",\\\\\\"User agent\\\\\\":\\\\\\"Azure-Storage/9.3.0 (.NET Core)\\\\\\",\\\\\\"API type\\\\\\":\\\\\\"Blob\\\\\\",\\\\\\"Client location\\\\\\":\\\\\\"Dublin, Ireland\\\\\\",\\\\\\"Authentication type\\\\\\":\\\\\\"Shared access signature (SAS)\\\\\\",\\\\\\"Investigation steps\\\\\\":\\\\\\"{\\\\\\\\\\\\\\"displayValue\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"View related storage activity using Storage Analytics Logging. See how to configure Storage Analytics logging and more information\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"kind\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Link\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"https:\\\\\\\\\\\\\\\\/\\\\\\\\\\\\\\\\/go.microsoft.com\\\\\\\\\\\\\\\\/fwlink\\\\\\\\\\\\\\\\/?linkid=2075734\\\\\\\\\\\\\\"}\\\\\\",\\\\\\"Operations types\\\\\\":\\\\\\"GetBlob\\\\\\",\\\\\\"Service type\\\\\\":\\\\\\"Azure Blobs\\\\\\",\\\\\\"Container\\\\\\":\\\\\\"temporary\\\\\\",\\\\\\"Potential causes\\\\\\":\\\\\\"This alert indicates that this account has been accessed successfully from an IP address that is unfamiliar and unexpected compared to recent access pattern on this account.\\\\\\\\\\\\Potential causes:\\\\\\\\\\\\\u2022 An attacker has accessed your storage account.\\\\\\\\\\\\\u2022 A legitimate user has accessed your storage account from a new location.\\\\\\",\\\\\\"resourceType\\\\\\":\\\\\\"Storage\\\\\\",\\\\\\"ReportingSystem\\\\\\":\\\\\\"Azure\\\\\\"}\\",\\"\\\\\\"InitialAccess\\\\\\"\\"]",\n      "vendorInformation": {\n        "provider": "ASC",\n        "providerVersion": null,\n        "subProvider": "StorageThreatDetection",\n        "vendor": "Microsoft"\n      },\n      "alertDetections": [],\n      "cloudAppStates": [],\n      "fileStates": [],\n      "hostStates": [],\n      "historyStates": [],\n      "investigationSecurityStates": [],\n      "malwareStates": [],\n      "messageSecurityStates": [],\n      "networkConnections": [\n        {\n          "applicationName": null,\n          "destinationAddress": null,\n          "destinationDomain": null,\n          "destinationLocation": null,\n          "destinationPort": null,\n          "destinationUrl": null,\n          "direction": null,\n          "domainRegisteredDateTime": null,\n          "localDnsName": null,\n          "natDestinationAddress": null,\n          "natDestinationPort": null,\n          "natSourceAddress": null,\n          "natSourcePort": null,\n          "protocol": "tcp",\n          "riskScore": null,\n          "sourceAddress": "52.214.204.49",\n          "sourceLocation": "Dublin, Dublin, IE",\n          "sourcePort": null,\n          "status": null,\n          "urlParameters": null\n        }\n      ],\n      "processes": [],\n      "registryKeyStates": [],\n      "securityResources": [\n        {\n          "resource": "/subscriptions/bbdf91d0-d75b-430e-b738-2c525452144f/resourceGroups/managed-rg-purview-mip-poc/providers/Microsoft.Storage/storageAccounts/scanwesteuropegivcebj",\n          "resourceType": "attacked"\n        }\n      ],\n      "triggers": [],\n      "userStates": [],\n      "uriClickSecurityStates": [],\n      "vulnerabilityStates": []\n    }\n]\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nid                                   title                      severity\n------------------------------------ -------------------------- --------\n4ece2cf8-cbc0-5a42-92c3-e23f96006907 SharePoint Bulk Edit Items medium\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nid,title,severity\n4ece2cf8-cbc0-5a42-92c3-e23f96006907,SharePoint Bulk Edit Items,medium\n```\n")))}p.isMDXComponent=!0}}]);