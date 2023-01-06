"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15748],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>u});var t=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),c=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},l="mdxType",b={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(n),m=o,u=l["".concat(i,".").concat(m)]||l[m]||b[m]||p;return n?t.createElement(u,r(r({ref:a},d),{},{components:n})):t.createElement(u,r({ref:a},d))}));function u(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var p=n.length,r=new Array(p);r[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[l]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<p;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90639:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const p={},r="pa app get",s={unversionedId:"cmd/pa/app/app-get",id:"cmd/pa/app/app-get",title:"pa app get",description:"Gets information about the specified Microsoft Power App",source:"@site/docs/cmd/pa/app/app-get.md",sourceDirName:"cmd/pa/app",slug:"/cmd/pa/app/app-get",permalink:"/cli-microsoft365-docusaurus/cmd/pa/app/app-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pa/app/app-get.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"Power Apps (pa)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/pa"},next:{title:"pa app list",permalink:"/cli-microsoft365-docusaurus/cmd/pa/app/app-list"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:c};function l(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pa-app-get"},"pa app get"),(0,o.kt)("p",null,"Gets information about the specified Microsoft Power App"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pa app get [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The name of the Microsoft Power App to get information about"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-d, --displayName [displayName]"),"\n: The display name of the Microsoft Power App to get information about"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reaches general availability."),(0,o.kt)("p",null,"If you try to retrieve a non-existing Microsoft Power App, you will get the ",(0,o.kt)("inlineCode",{parentName:"p"},"Request failed with status code 404")," error."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get information about the specified Microsoft Power App by the app's name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa app get --name 3989cb59-ce1a-4a5c-bb78-257c5c39381d\n")),(0,o.kt)("p",null,"Get information about the specified Microsoft Power App by the app's display name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa app get --displayName App\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n{\n  "name": "37ea6004-f07b-46ca-8ef3-a256b67b4dbb",\n  "id": "/providers/Microsoft.PowerApps/apps/37ea6004-f07b-46ca-8ef3-a256b67b4dbb",\n  "type": "Microsoft.PowerApps/apps",\n  "tags": {\n    "primaryDeviceWidth": "1366",\n    "primaryDeviceHeight": "768",\n    "supportsPortrait": "true",\n    "supportsLandscape": "true",\n    "primaryFormFactor": "Tablet",\n    "publisherVersion": "3.22102.32",\n    "minimumRequiredApiVersion": "2.2.0",\n    "hasComponent": "false",\n    "hasUnlockedComponent": "false",\n    "isUnifiedRootApp": "false",\n    "sienaVersion": "20221025T212812Z-3.22102.32.0"\n  },\n  "properties": {\n    "appVersion": "2022-10-25T21:28:12Z",\n    "lastDraftVersion": "2022-10-25T21:28:12Z",\n    "lifeCycleId": "Published",\n    "status": "Ready",\n    "createdByClientVersion": {\n      "major": 3,\n      "minor": 22102,\n      "build": 32,\n      "revision": 0,\n      "majorRevision": 0,\n      "minorRevision": 0\n    },\n    "minClientVersion": {\n      "major": 3,\n      "minor": 22102,\n      "build": 32,\n      "revision": 0,\n      "majorRevision": 0,\n      "minorRevision": 0\n    },\n    "owner": {\n      "id": "fe36f75e-c103-410b-a18a-2bf6df06ac3a",\n      "displayName": "contoso",\n      "email": "user@contoso.onmicrosoft.com",\n      "type": "User",\n      "tenantId": "e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n      "userPrincipalName": "user@contoso.onmicrosoft.com"\n    },\n    "createdBy": {\n      "id": "fe36f75e-c103-410b-a18a-2bf6df06ac3a",\n      "displayName": "contoso",\n      "email": "user@contoso.onmicrosoft.com",\n      "type": "User",\n      "tenantId": "e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n      "userPrincipalName": "user@contoso.onmicrosoft.com"\n    },\n    "lastModifiedBy": {\n      "id": "fe36f75e-c103-410b-a18a-2bf6df06ac3a",\n      "displayName": "contoso",\n      "email": "user@contoso.onmicrosoft.com",\n      "type": "User",\n      "tenantId": "e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n      "userPrincipalName": "user@contoso.onmicrosoft.com"\n    },\n    "lastPublishedBy": {\n      "id": "fe36f75e-c103-410b-a18a-2bf6df06ac3a",\n      "displayName": "contoso",\n      "email": "user@contoso.onmicrosoft.com",\n      "type": "User",\n      "tenantId": "e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n      "userPrincipalName": "user@contoso.onmicrosoft.com"\n    },\n    "backgroundColor": "RGBA(0,176,240,1)",\n    "backgroundImageUri": "https://pafeblobprodam.blob.core.windows.net:443/20221025t000000zddd642012aba4021a4886c8e21a3e1cb/logoSmallFile?sv=2018-03-28&sr=c&sig=cOkbwChyhCO%2BEJpqMDRxrXaxRoPD1TbTy%2B%2BFkdJEOjI%3D&se=2022-12-24T10%3A06%3A27Z&sp=rl",\n    "teamsColorIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20221025t000000ze297221f3dc643ed9686b72b22d9a414/teamscoloricon.png?sv=2018-03-28&sr=c&sig=Fhk8E0LO4Lw0mHvNawCF5Ld7GHzPHo9l7RxvZbeZY48%3D&se=2022-12-24T10%3A06%3A27Z&sp=rl",\n    "teamsOutlineIconUrl": "https://pafeblobprodam.blob.core.windows.net:443/20221025t000000ze297221f3dc643ed9686b72b22d9a414/teamsoutlineicon.png?sv=2018-03-28&sr=c&sig=Fhk8E0LO4Lw0mHvNawCF5Ld7GHzPHo9l7RxvZbeZY48%3D&se=2022-12-24T10%3A06%3A27Z&sp=rl",\n    "displayName": "Test application",\n    "description": "",\n    "commitMessage": "",\n    "appUris": {\n      "documentUri": {\n        "value": "https://pafeblobprodam.blob.core.windows.net:443/20221025t000000zddd642012aba4021a4886c8e21a3e1cb/document.msapp?sv=2018-03-28&sr=c&sig=laSGdpZL03POyAABXvdsyxv8YDDB8JPZIBccztIe39Q%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl",\n        "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20221025t000000zddd642012aba4021a4886c8e21a3e1cb/document.msapp?sv=2018-03-28&sr=c&sig=laSGdpZL03POyAABXvdsyxv8YDDB8JPZIBccztIe39Q%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl"\n      },\n      "imageUris": [],\n      "additionalUris": []\n    },\n    "createdTime": "2022-10-25T21:28:12.7171469Z",\n    "lastModifiedTime": "2022-10-25T21:28:12.7456297Z",\n    "lastPublishTime": "2022-10-25T21:28:12Z",\n    "sharedGroupsCount": 0,\n    "sharedUsersCount": 0,\n    "appOpenProtocolUri": "ms-apps:///providers/Microsoft.PowerApps/apps/37ea6004-f07b-46ca-8ef3-a256b67b4dbb",\n    "appOpenUri": "https://apps.powerapps.com/play/e/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/a/37ea6004-f07b-46ca-8ef3-a256b67b4dbb?tenantId=e1dd4023-a656-480a-8a0e-c1b1eec51e1d&hint=296b0ef7-b4d0-4124-b835-f9c220a1f4bc",\n    "appPlayUri": "https://apps.powerapps.com/play/e/default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/a/37ea6004-f07b-46ca-8ef3-a256b67b4dbb?tenantId=e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n    "appPlayEmbeddedUri": "https://apps.powerapps.com/play/e/default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/a/37ea6004-f07b-46ca-8ef3-a256b67b4dbb?tenantId=e1dd4023-a656-480a-8a0e-c1b1eec51e1d&hint=296b0ef7-b4d0-4124-b835-f9c220a1f4bc&telemetryLocation=eu",\n    "appPlayTeamsUri": "https://apps.powerapps.com/play/e/default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/a/37ea6004-f07b-46ca-8ef3-a256b67b4dbb?tenantId=e1dd4023-a656-480a-8a0e-c1b1eec51e1d&source=teamstab&hint=296b0ef7-b4d0-4124-b835-f9c220a1f4bc&telemetryLocation=eu&locale={locale}&channelId={channelId}&channelType={channelType}&chatId={chatId}&groupId={groupId}&hostClientType={hostClientType}&isFullScreen={isFullScreen}&entityId={entityId}&subEntityId={subEntityId}&teamId={teamId}&teamType={teamType}&theme={theme}&userTeamRole={userTeamRole}",\n    "userAppMetadata": {\n      "favorite": "NotSpecified",\n      "includeInAppsList": true\n    },\n    "isFeaturedApp": false,\n    "bypassConsent": false,\n    "isHeroApp": false,\n    "environment": {\n      "id": "/providers/Microsoft.PowerApps/environments/default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n      "name": "default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d"\n    },\n    "appPackageDetails": {\n      "playerPackage": {\n        "value": "https://pafeblobprodam.blob.core.windows.net:443/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/player.msappk?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl",\n        "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/player.msappk?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl"\n      },\n      "webPackage": {\n        "value": "https://pafeblobprodam.blob.core.windows.net:443/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/web/index.web.html?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl",\n        "readonlyValue": "https://pafeblobprodam-secondary.blob.core.windows.net/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/web/index.web.html?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl"\n      },\n      "unauthenticatedWebPackage": {\n        "value": "https://pafeblobprodam.blob.core.windows.net/alt20221025t000000z529d41282a634bf6b94383dde5a8d52c/20221025T212824Z/index.web.html"\n      },\n      "documentServerVersion": {\n        "major": 3,\n        "minor": 22102,\n        "build": 33,\n        "revision": 0,\n        "majorRevision": 0,\n        "minorRevision": 0\n      },\n      "appPackageResourcesKind": "Split",\n      "packagePropertiesJson": "{\\"cdnUrl\\":\\"https://content.powerapps.com/resource/app\\",\\"preLoadIdx\\":\\"https://content.powerapps.com/resource/app/kdfj31mdao7t9/preloadindex.web.html\\",\\"id\\":\\"638023301009567627\\",\\"v\\":2.1}",\n      "id": "20221025t000000zac5237a2672a4782ad5a7d71040c032bhttps://pafeblobprodam.blob.core.windows.net/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/web/index.web.html?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rlhttps://pafeblobprodam.blob.core.windows.net/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/player.msappk?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rlhttps://pafeblobprodam.blob.core.windows.net/alt20221025t000000z529d41282a634bf6b94383dde5a8d52c/20221025T212824Z/index.web.html"\n    },\n    "almMode": "Environment",\n    "performanceOptimizationEnabled": true,\n    "unauthenticatedWebPackageHint": "296b0ef7-b4d0-4124-b835-f9c220a1f4bc",\n    "canConsumeAppPass": true,\n    "enableModernRuntimeMode": false,\n    "executionRestrictions": {\n      "isTeamsOnly": false,\n      "dataLossPreventionEvaluationResult": {\n        "status": "Compliant",\n        "lastEvaluationDate": "2022-10-25T21:28:30.2281817Z",\n        "violations": [],\n        "violationsByPolicy": [],\n        "violationErrorMessage": "De app gebruikt de volgende connectors: ."\n      }\n    },\n    "appPlanClassification": "Standard",\n    "usesPremiumApi": false,\n    "usesOnlyGrandfatheredPremiumApis": true,\n    "usesCustomApi": false,\n    "usesOnPremiseGateway": false,\n    "usesPcfExternalServiceUsage": false,\n    "isCustomizable": true\n  },\n  "appLocation": "europe",\n  "appType": "ClassicCanvasApp",\n  "displayName": "PowerApps Application",\n  "description": "App Description",\n  "appVersion": "2022-10-25T21:28:12Z",\n  "owner": "user@tenant.onmicrosoft.com"\n}\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\nappVersion : 2022-10-25T21:28:12Z\ndescription: App Description\ndisplayName: Test application\nname       : 37ea6004-f07b-46ca-8ef3-a256b67b4dbb\nowner      : user@contoso.onmicrosoft.com\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nname,displayName,description,appVersion,owner\n37ea6004-f07b-46ca-8ef3-a256b67b4dbb,PowerApps Application,App Description,2022-10-25T21:28:12Z,user@tenant.onmicrosoft.com\n```\n")))}l.isMDXComponent=!0}}]);