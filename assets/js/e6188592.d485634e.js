"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(r,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"CLI output mode",sidebar_position:5},l="CLI for Microsoft 365 output mode",s={unversionedId:"user-guide/cli-output-mode",id:"user-guide/cli-output-mode",title:"CLI output mode",description:"CLI for Microsoft 365 commands can present their output either as plain-text, JSON, or as CSV. Following is information on these three output modes along with information when to use which.",source:"@site/docs/user-guide/cli-output-mode.md",sourceDirName:"user-guide",slug:"/user-guide/cli-output-mode",permalink:"/user-guide/cli-output-mode",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/user-guide/cli-output-mode.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:5,frontMatter:{title:"CLI output mode",sidebar_position:5},sidebar:"userGuide",previous:{title:"Log in to Microsoft 365",permalink:"/user-guide/connecting-office-365"},next:{title:"Filter CLI data",permalink:"/user-guide/filter-cli-data"}},r={},p=[{value:"Choose the command output mode",id:"choose-the-command-output-mode",level:2},{value:"JSON output mode",id:"json-output-mode",level:2},{value:"Simple values",id:"simple-values",level:3},{value:"Objects",id:"objects",level:3},{value:"Arrays",id:"arrays",level:3},{value:"Verbose and debug output in JSON mode",id:"verbose-and-debug-output-in-json-mode",level:3},{value:"Text output mode",id:"text-output-mode",level:2},{value:"Simple values",id:"simple-values-1",level:3},{value:"Objects",id:"objects-1",level:3},{value:"Arrays",id:"arrays-1",level:3},{value:"CSV output mode",id:"csv-output-mode",level:2},{value:"Simple values",id:"simple-values-2",level:3},{value:"Objects",id:"objects-2",level:3},{value:"Arrays",id:"arrays-2",level:3},{value:"Markdown output mode",id:"markdown-output-mode",level:2},{value:"Simple values",id:"simple-values-3",level:3},{value:"Objects",id:"objects-3",level:3},{value:"Arrays",id:"arrays-3",level:3},{value:"Processing command output with JMESPath",id:"processing-command-output-with-jmespath",level:2},{value:"When to use which output mode",id:"when-to-use-which-output-mode",level:2},{value:"Sample script",id:"sample-script",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli-for-microsoft-365-output-mode"},"CLI for Microsoft 365 output mode"),(0,o.kt)("p",null,"CLI for Microsoft 365 commands can present their output either as plain-text, JSON, or as CSV. Following is information on these three output modes along with information when to use which."),(0,o.kt)("h2",{id:"choose-the-command-output-mode"},"Choose the command output mode"),(0,o.kt)("p",null,"All commands in CLI for Microsoft 365 can present their output as plain-text, JSON, CSV or Markdown. By default, all commands use the JSON output mode, but by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"--output"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"-o")," for short, option to ",(0,o.kt)("inlineCode",{parentName:"p"},"text"),", you can change the output mode for that command to text. By setting the output option to ",(0,o.kt)("inlineCode",{parentName:"p"},"csv"),", you can change the output mode for that command to CSV. By setting the output option to ",(0,o.kt)("inlineCode",{parentName:"p"},"md"),", you can change the output mode for that command to Markdown."),(0,o.kt)("h2",{id:"json-output-mode"},"JSON output mode"),(0,o.kt)("p",null,"By default, all commands in CLI for Microsoft 365 present their output as JSON strings. This is invaluable when building scripts using the CLI, where the output of one command, has to be processed by another command."),(0,o.kt)("h3",{id:"simple-values"},"Simple values"),(0,o.kt)("p",null,"Simple values in JSON output, are returned as-is. For example, if the Microsoft 365 Public CDN is enabled on the currently connected tenant, executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"spo cdn get")," command, will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo cdn get --output json\ntrue\n")),(0,o.kt)("h3",{id:"objects"},"Objects"),(0,o.kt)("p",null,"If the command returns an object, that object will be formatted as a JSON string. For example, getting information about a specific app, will return output similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ m365 spo app get -i e6362993-d4fd-4c5a-8254-fd095a7291ad\n{\n  "AppCatalogVersion": "1.0.0.0",\n  "CanUpgrade": false,\n  "CurrentVersionDeployed": false,\n  "Deployed": false,\n  "ID": "e6362993-d4fd-4c5a-8254-fd095a7291ad",\n  "InstalledVersion": "",\n  "IsClientSideSolution": true,\n  "Title": "spfx-140-online-client-side-solution"\n}\n')),(0,o.kt)("h3",{id:"arrays"},"Arrays"),(0,o.kt)("p",null,"If the command returns information about multiple objects, the command will return a JSON array with each array item representing one object. For example, getting the list of available apps, will return output similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ m365 spo app list --output json\n[\n  {\n    "AppCatalogVersion": "1.0.0.0",\n    "CanUpgrade": false,\n    "CurrentVersionDeployed": false,\n    "Deployed": false,\n    "ID": "e6362993-d4fd-4c5a-8254-fd095a7291ad",\n    "InstalledVersion": "",\n    "IsClientSideSolution": true,\n    "Title": "spfx-140-online-client-side-solution"\n  },\n  {\n    "AppCatalogVersion": "1.0.0.0",\n    "CanUpgrade": false,\n    "CurrentVersionDeployed": false,\n    "Deployed": false,\n    "ID": "5ae74650-b00b-46a9-925f-9c9bd70a0cb6",\n    "InstalledVersion": "",\n    "IsClientSideSolution": true,\n    "Title": "spfx-134-client-side-solution"\n  }\n]\n')),(0,o.kt)("p",null,"Even if the array contains only one item, for consistency it will be returned as a one-element JSON array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ m365 spo app list --output json\n[\n  {\n    "AppCatalogVersion": "1.0.0.0",\n    "CanUpgrade": false,\n    "CurrentVersionDeployed": false,\n    "Deployed": false,\n    "ID": "e6362993-d4fd-4c5a-8254-fd095a7291ad",\n    "InstalledVersion": "",\n    "IsClientSideSolution": true,\n    "Title": "spfx-140-online-client-side-solution"\n  }\n]\n')),(0,o.kt)("p",null,"!!! tip\nSome ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," commands return different output in text and JSON mode. For readability, in the text mode they only include a few properties, so that the output can be formatted as a table and will fit on the screen. In JSON mode however, they will include all available properties so that it's possible to process the full set of information about the particular object. For more details, refer to the help of the particular command."),(0,o.kt)("h3",{id:"verbose-and-debug-output-in-json-mode"},"Verbose and debug output in JSON mode"),(0,o.kt)("p",null,"When executing commands in JSON output mode with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--verbose")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--debug")," flag, the verbose and debug logging statements will be also formatted as JSON and will be added to the output. When processing the command output, you would have to determine yourself which of the returned JSON objects represents the actual command result and which are additional verbose and debug logging statements."),(0,o.kt)("h2",{id:"text-output-mode"},"Text output mode"),(0,o.kt)("p",null,"Optionally, you can have all CLI for Microsoft 365 commands return their output as plain-text. Depending on the command output, the value is presented as-is or formatted for readability."),(0,o.kt)("h3",{id:"simple-values-1"},"Simple values"),(0,o.kt)("p",null,"If the command output is a simple value, such as a number, boolean or a string, the value is returned as-is. For example, if the Microsoft 365 Public CDN is enabled on the currently connected tenant, executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"spo cdn get")," command, will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo cdn get --output text\ntrue\n")),(0,o.kt)("h3",{id:"objects-1"},"Objects"),(0,o.kt)("p",null,"If the command returns information about an object such as a site, list or an app, that contains a number of properties, the output in text mode is formatted as key-value pairs. For example, getting information about a specific app, will return output similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo app get -i e6362993-d4fd-4c5a-8254-fd095a7291ad --output text\nAppCatalogVersion     : 1.0.0.0\nCanUpgrade            : false\nCurrentVersionDeployed: false\nDeployed              : false\nID                    : e6362993-d4fd-4c5a-8254-fd095a7291ad\nInstalledVersion      :\nIsClientSideSolution  : true\nTitle                 : spfx-140-online-client-side-solution\n")),(0,o.kt)("h3",{id:"arrays-1"},"Arrays"),(0,o.kt)("p",null,"If the command returns information about multiple objects, the output is formatted as a table. For example, getting the list of available apps, will return output similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo app list --output text\nTitle                                 ID                                    Deployed  AppCatalogVersion\n------------------------------------  ------------------------------------  --------  -----------------\nspfx-140-online-client-side-solution  e6362993-d4fd-4c5a-8254-fd095a7291ad  false     1.0.0.0\nspfx-134-client-side-solution         5ae74650-b00b-46a9-925f-9c9bd70a0cb6  false     1.0.0.0\n")),(0,o.kt)("p",null,"If only one app is returned, it will be displayed as key-value pairs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo app list --output text\nAppCatalogVersion: 1.0.0.0\nDeployed         : false\nID               : e6362993-d4fd-4c5a-8254-fd095a7291ad\nTitle            : spfx-140-online-client-side-solution\n")),(0,o.kt)("h2",{id:"csv-output-mode"},"CSV output mode"),(0,o.kt)("p",null,"Optionally, you can have all CLI for Microsoft 365 commands return their output as comma-separated values. Depending on the command output, the value is presented as-is or formatted for readability."),(0,o.kt)("h3",{id:"simple-values-2"},"Simple values"),(0,o.kt)("p",null,"If the command output is a simple value, such as a number, boolean or a string, the value is returned as-is. For example, if the Microsoft 365 Public CDN is enabled on the currently connected tenant, executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"spo cdn get")," command, will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo cdn get --output csv\ntrue\n")),(0,o.kt)("h3",{id:"objects-2"},"Objects"),(0,o.kt)("p",null,"If the command returns information about an object such as a site, list or an app, that contains a number of properties, the output in CSV mode is formatted as comma-separated values. For example, getting information about a specific app, will return output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo app get -i e6362993-d4fd-4c5a-8254-fd095a7291ad --output csv\nAppCatalogVersion,CanUpgrade,CurrentVersionDeployed,Deployed,ID,InstalledVersion,IsClientSideSolution,Title\n1.0.0.0,false,false,false,e6362993-d4fd-4c5a-8254-fd095a7291ad,,true,spfx-140-online-client-side-solution\n")),(0,o.kt)("h3",{id:"arrays-2"},"Arrays"),(0,o.kt)("p",null,"If the command returns information about multiple objects, the output is formatted as multiple lines of comma-separated values. For example, getting the list of available apps will return output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo app list --output csv\nTitle,ID,Deployed,AppCatalogVersion\nspfx-140-online-client-side-solution,e6362993-d4fd-4c5a-8254-fd095a7291ad,false,1.0.0.0\nspfx-134-client-side-solution,5ae74650-b00b-46a9-925f-9c9bd70a0cb6,false,1.0.0.0\n")),(0,o.kt)("h2",{id:"markdown-output-mode"},"Markdown output mode"),(0,o.kt)("p",null,"Using the Markdown output mode is convenient if you need to create documentation for your Microsoft 365 tenant."),(0,o.kt)("p",null,"!!! tip\nWhen using the Markdown output, you'll typically want to store the output in a file or in the clipboard. To redirect the output to a file, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"m365 spo site list --output markdown > sites.md"),". To copy the output to the clipboard, on macOS execute ",(0,o.kt)("inlineCode",{parentName:"p"},"m365 spo site list --output markdown | pbcopy"),", and on Windows execute ",(0,o.kt)("inlineCode",{parentName:"p"},"m365 spo site list --output markdown | clip"),"."),(0,o.kt)("h3",{id:"simple-values-3"},"Simple values"),(0,o.kt)("p",null,"If the command output is a simple value, such as a number, boolean or a string, the value is returned as-is. For example, if the Microsoft 365 Public CDN is enabled on the currently connected tenant, executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"spo cdn get")," command, will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo cdn get --output md\ntrue\n")),(0,o.kt)("h3",{id:"objects-3"},"Objects"),(0,o.kt)("p",null,"If the command returns information about an object such as a site, a list or an app, the output in Markdown mode is formatted as a simple report."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ m365 spo app get --id c1c89e1f-2332-41f6-aa85-bbb1677262c1 --output md\n# spo app get --id "c1c89e1f-2332-41f6-aa85-bbb1677262c1"\n\nDate: 04/12/2022\n\n## spfx-teams-client-side-solution (c1c89e1f-2332-41f6-aa85-bbb1677262c1)\n\nProperty | Value\n---------|-------\nAadAppId | 00000000-0000-0000-0000-000000000000\nAadPermissions | null\nAppCatalogVersion | 1.0.0.0\nCanUpgrade | false\nCDNLocation | SharePoint Online\nContainsTenantWideExtension | false\nCurrentVersionDeployed | true\nDeployed | true\nErrorMessage | No errors.\nID | c1c89e1f-2332-41f6-aa85-bbb1677262c1\nInstalledVersion | \nIsClientSideSolution | true\nIsEnabled | true\nIsPackageDefaultSkipFeatureDeployment | true\nIsValidAppPackage | true\nProductId | 3d7d71e9-3bdc-4706-a1d8-59da855f4064\nShortDescription | spfx-teams description\nSkipDeploymentFeature | true\nStoreAssetId | \nThumbnailUrl | \nTitle | spfx-teams-client-side-solution\n')),(0,o.kt)("p",null,"The report consists of a title section, which shows the information about the executed command and the date when the command was executed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'# spo app get --id "c1c89e1f-2332-41f6-aa85-bbb1677262c1"\n\nDate: 04/12/2022\n\n...\n')),(0,o.kt)("p",null,"Then, the report shows information for the retrieved object. The object-specific information starts with a heading, which contains the object's display name and ID."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'# spo app get --id "c1c89e1f-2332-41f6-aa85-bbb1677262c1"\n\nDate: 04/12/2022\n\n## spfx-teams-client-side-solution (c1c89e1f-2332-41f6-aa85-bbb1677262c1)\n\n...\n')),(0,o.kt)("p",null,"CLI for Microsoft 365 tries to retrieve the object's display name from the following properties in the following order: ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"displayName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DisplayName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Name"),". If the object doesn't have any of these properties, the display name will be  ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("p",null,"The display name is followed by the object's ID in parentheses, which CLI tries to resolve from the following properties in the following order: ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqueId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"UniqueId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"objectId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"URL"),". If the object doesn't have any of these properties, the ID will be displayed as ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("p",null,"The heading is followed by a table showing all retrieved object's properties and their values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'# spo app get --id "c1c89e1f-2332-41f6-aa85-bbb1677262c1"\n\nDate: 04/12/2022\n\n## spfx-teams-client-side-solution (c1c89e1f-2332-41f6-aa85-bbb1677262c1)\n\nProperty | Value\n---------|-------\nAadAppId | 00000000-0000-0000-0000-000000000000\nAadPermissions | null\nAppCatalogVersion | 1.0.0.0\nCanUpgrade | false\nCDNLocation | SharePoint Online\n...\n')),(0,o.kt)("p",null,"If the value of a property is an object, it will be JSON-serialized and displayed as a string, for example see the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"CurrentChangeToken")," property for a site:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ m365 spo site get --url /sites/Retail --output md\n# spo site get --url "https://2czk3g.sharepoint.com/sites/Retail"\n\nDate: 04/12/2022\n\n## undefined (4ecc3c2d-4484-4e44-a154-071e6ad711a9)\n\nProperty | Value\n---------|-------\nAllowCreateDeclarativeWorkflow | false\nAllowDesigner | true\nAllowMasterPageEditing | false\nAllowRevertFromTemplate | false\nAllowSaveDeclarativeWorkflowAsTemplate | false\nAllowSavePublishDeclarativeWorkflow | false\nAllowSelfServiceUpgrade | true\nAllowSelfServiceUpgradeEvaluation | true\nAuditLogTrimmingRetention | 90\nChannelGroupId | 00000000-0000-0000-0000-000000000000\nClassification | \nCompatibilityLevel | 15\nCurrentChangeToken | {"StringValue":"1;1;4ecc3c2d-4484-4e44-a154-071e6ad711a9;638057455441300000;64815409"}\nDisableAppViews | false\nDisableCompanyWideSharingLinks | false\nDisableFlows | false\nExternalSharingTipsEnabled | false\nGeoLocation | EUR\nGroupId | 336d4890-fe42-4daa-a53a-8338372a0e59\nHubSiteId | 00000000-0000-0000-0000-000000000000\nId | 4ecc3c2d-4484-4e44-a154-071e6ad711a9\nSensitivityLabelId | null\nSensitivityLabel | 00000000-0000-0000-0000-000000000000\nIsHubSite | false\nLockIssue | null\nMaxItemsPerThrottledOperation | 5000\nMediaTranscriptionDisabled | false\nNeedsB2BUpgrade | false\nResourcePath | {"DecodedUrl":"https://2czk3g.sharepoint.com/sites/Retail"}\nPrimaryUri | https://2czk3g.sharepoint.com/sites/Retail\nReadOnly | false\nRequiredDesignerVersion | 15.0.0.0\nSandboxedCodeActivationCapability | 2\nServerRelativeUrl | /sites/Retail\nShareByEmailEnabled | true\nShareByLinkEnabled | false\nShowUrlStructure | false\nTrimAuditLog | true\nUIVersionConfigurationEnabled | false\nUpgradeReminderDate | 1899-12-30T00:00:00\nUpgradeScheduled | false\nUpgradeScheduledDate | 1753-01-01T00:00:00\nUpgrading | false\nUrl | https://2czk3g.sharepoint.com/sites/Retail\nWriteLocked | false\n')),(0,o.kt)("h3",{id:"arrays-3"},"Arrays"),(0,o.kt)("p",null,"If the command returns information about multiple objects, the output is formatted as a report, where each object is displayed in a separate section, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo site list --output md\n# spo site list \n\nDate: 04/12/2022\n\n## Retail (https://2czk3g.sharepoint.com/sites/Retail)\n\nProperty | Value\n---------|-------\n\\_ObjectType\\_ | Microsoft.Online.SharePoint.TenantAdministration.SiteProperties\n\\_ObjectIdentity\\_ | 5eed7ea0-c0ab-5000-b47b-32ee0c3bc3d5\\|908bed80-a04a-4433-b4a0-883d9847d110:02b03c8c-a55c-4f23-9285-d5bd8f81979a<br>SiteProperties<br>https%3a%2f%2f2czk3g.sharepoint.com%2fsites%2fRetail\nAllowDownloadingNonWebViewableFiles | false\nAllowEditing | false\nAllowSelfServiceUpgrade | true\nAnonymousLinkExpirationInDays | 0\nAuthContextStrength | null\nAuthenticationContextName | null\nAverageResourceUsage | 0\nBlockDownloadLinksFileType | 0\nBlockDownloadMicrosoft365GroupIds | null\nBlockDownloadPolicy | false\nCommentsOnSitePagesDisabled | false\nCompatibilityLevel | 15\nConditionalAccessPolicy | 0\nCurrentResourceUsage | 0\nDefaultLinkPermission | 0\nDefaultLinkToExistingAccess | false\nDefaultLinkToExistingAccessReset | false\nDefaultShareLinkRole | 0\nDefaultShareLinkScope | 0\nDefaultSharingLinkType | 0\nDenyAddAndCustomizePages | 2\nDescription | null\nDisableAppViews | 0\nDisableCompanyWideSharingLinks | 0\nDisableFlows | 0\nExcludeBlockDownloadPolicySiteOwners | false\nExcludedBlockDownloadGroupIds | []\nExternalUserExpirationInDays | 0\nGroupId | /Guid(336d4890-fe42-4daa-a53a-8338372a0e59)/\nGroupOwnerLoginName | null\nHasHolds | false\nHubSiteId | /Guid(00000000-0000-0000-0000-000000000000)/\nIBMode | null\nIBSegments | []\nIBSegmentsToAdd | null\nIBSegmentsToRemove | null\nIsGroupOwnerSiteAdmin | false\nIsHubSite | false\nIsTeamsChannelConnected | false\nIsTeamsConnected | true\nLastContentModifiedDate | /Date(2022,9,18,13,22,1,233)/\nLcid | 1033\nLimitedAccessFileType | 0\nLockIssue | null\nLockState | Unlock\nLoopDefaultSharingLinkRole | 0\nLoopDefaultSharingLinkScope | 0\nLoopOverrideSharingCapability | false\nLoopSharingCapability | 0\nMediaTranscription | 0\nOverrideBlockUserInfoVisibility | 0\nOverrideSharingCapability | false\nOverrideTenantAnonymousLinkExpirationPolicy | false\nOverrideTenantExternalUserExpirationPolicy | false\nOwner | \nOwnerEmail | null\nOwnerLoginName | null\nOwnerName | null\nPWAEnabled | 1\nReadOnlyAccessPolicy | false\nReadOnlyForUnmanagedDevices | false\nRelatedGroupId | /Guid(336d4890-fe42-4daa-a53a-8338372a0e59)/\nRequestFilesLinkEnabled | false\nRequestFilesLinkExpirationInDays | 0\nRestrictedAccessControl | false\nRestrictedToRegion | 3\nSandboxedCodeActivationCapability | 0\nSensitivityLabel | /Guid(00000000-0000-0000-0000-000000000000)/\nSensitivityLabel2 | null\nSetOwnerWithoutUpdatingSecondaryAdmin | false\nSharingAllowedDomainList | null\nSharingBlockedDomainList | null\nSharingCapability | 1\nSharingDomainRestrictionMode | 0\nSharingLockDownCanBeCleared | false\nSharingLockDownEnabled | false\nShowPeoplePickerSuggestionsForGuestUsers | false\nSiteDefinedSharingCapability | 1\nSocialBarOnSitePagesDisabled | false\nStatus | Active\nStorageMaximumLevel | 26214400\nStorageQuotaType | null\nStorageUsage | 1\nStorageWarningLevel | 25574400\nTeamsChannelType | 0\nTemplate | GROUP#0\nTimeZoneId | 13\nTitle | Retail\nTitleTranslations | null\nUrl | https://2czk3g.sharepoint.com/sites/Retail\nUserCodeMaximumLevel | 300\nUserCodeWarningLevel | 200\nWebsCount | 0\n\n## Mark 8 Project Team (https://2czk3g.sharepoint.com/sites/Mark8ProjectTeam)\n\nProperty | Value\n---------|-------\n\\_ObjectType\\_ | Microsoft.Online.SharePoint.TenantAdministration.SiteProperties\n\\_ObjectIdentity\\_ | 5eed7ea0-c0ab-5000-b47b-32ee0c3bc3d5\\|908bed80-a04a-4433-b4a0-883d9847d110:02b03c8c-a55c-4f23-9285-d5bd8f81979a<br>SiteProperties<br>https%3a%2f%2f2czk3g.sharepoint.com%2fsites%2fMark8ProjectTeam\nAllowDownloadingNonWebViewableFiles | false\nAllowEditing | false\nAllowSelfServiceUpgrade | true\nAnonymousLinkExpirationInDays | 0\nAuthContextStrength | null\nAuthenticationContextName | null\nAverageResourceUsage | 0\nBlockDownloadLinksFileType | 0\nBlockDownloadMicrosoft365GroupIds | null\nBlockDownloadPolicy | false\nCommentsOnSitePagesDisabled | false\nCompatibilityLevel | 15\nConditionalAccessPolicy | 0\nCurrentResourceUsage | 0\nDefaultLinkPermission | 0\nDefaultLinkToExistingAccess | false\nDefaultLinkToExistingAccessReset | false\nDefaultShareLinkRole | 0\nDefaultShareLinkScope | 0\nDefaultSharingLinkType | 0\nDenyAddAndCustomizePages | 2\nDescription | null\nDisableAppViews | 0\nDisableCompanyWideSharingLinks | 0\nDisableFlows | 0\nExcludeBlockDownloadPolicySiteOwners | false\nExcludedBlockDownloadGroupIds | []\nExternalUserExpirationInDays | 0\nGroupId | /Guid(c098b6d1-b1a5-4909-b6ec-ee00aff07b6b)/\nGroupOwnerLoginName | null\nHasHolds | false\nHubSiteId | /Guid(00000000-0000-0000-0000-000000000000)/\nIBMode | null\nIBSegments | []\nIBSegmentsToAdd | null\nIBSegmentsToRemove | null\nIsGroupOwnerSiteAdmin | false\nIsHubSite | false\nIsTeamsChannelConnected | false\nIsTeamsConnected | true\nLastContentModifiedDate | /Date(2022,9,7,12,52,20,347)/\nLcid | 1033\nLimitedAccessFileType | 0\nLockIssue | null\nLockState | Unlock\nLoopDefaultSharingLinkRole | 0\nLoopDefaultSharingLinkScope | 0\nLoopOverrideSharingCapability | false\nLoopSharingCapability | 0\nMediaTranscription | 0\nOverrideBlockUserInfoVisibility | 0\nOverrideSharingCapability | false\nOverrideTenantAnonymousLinkExpirationPolicy | false\nOverrideTenantExternalUserExpirationPolicy | false\nOwner | \nOwnerEmail | null\nOwnerLoginName | null\nOwnerName | null\nPWAEnabled | 1\nReadOnlyAccessPolicy | false\nReadOnlyForUnmanagedDevices | false\nRelatedGroupId | /Guid(c098b6d1-b1a5-4909-b6ec-ee00aff07b6b)/\nRequestFilesLinkEnabled | false\nRequestFilesLinkExpirationInDays | 0\nRestrictedAccessControl | false\nRestrictedToRegion | 3\nSandboxedCodeActivationCapability | 0\nSensitivityLabel | /Guid(00000000-0000-0000-0000-000000000000)/\nSensitivityLabel2 | null\nSetOwnerWithoutUpdatingSecondaryAdmin | false\nSharingAllowedDomainList | null\nSharingBlockedDomainList | null\nSharingCapability | 1\nSharingDomainRestrictionMode | 0\nSharingLockDownCanBeCleared | false\nSharingLockDownEnabled | false\nShowPeoplePickerSuggestionsForGuestUsers | false\nSiteDefinedSharingCapability | 1\nSocialBarOnSitePagesDisabled | false\nStatus | Active\nStorageMaximumLevel | 26214400\nStorageQuotaType | null\nStorageUsage | 1\nStorageWarningLevel | 25574400\nTeamsChannelType | 0\nTemplate | GROUP#0\nTimeZoneId | 13\nTitle | Mark 8 Project Team\nTitleTranslations | null\nUrl | https://2czk3g.sharepoint.com/sites/Mark8ProjectTeam\nUserCodeMaximumLevel | 300\nUserCodeWarningLevel | 200\nWebsCount | 0\n\n...\n")),(0,o.kt)("p",null,"!!! note\nSpecial Markdown characters, and new line characters in the names and values of properties are escaped so that they're displayed correctly in the table."),(0,o.kt)("h2",{id:"processing-command-output-with-jmespath"},"Processing command output with JMESPath"),(0,o.kt)("p",null,"CLI for Microsoft 365 supports filtering, sorting and querying data returned by its commands using ",(0,o.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"JMESPath")," queries. Queries can be specified using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--query")," option on each command and are applied just before the data retrieved by the command is sent to the console. While you can apply JMESPath queries in all output modes, they are the most powerful in combination with JSON output where the data is unfiltered and the complete data set is sent to output."),(0,o.kt)("p",null,"For example, you can retrieve the list of all SharePoint site collections in your tenant, by executing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo site list --output text\nTitle                                Url\n-----------------------------------  -------------------------------------------------------------------------\nDigital Initiative Public Relations  https://contoso.sharepoint.com/sites/DigitalInitiativePublicRelations\nLeadership Team                      https://contoso.sharepoint.com/sites/leadership\nMark 8 Project Team                  https://contoso.sharepoint.com/sites/Mark8ProjectTeam\nOperations                           https://contoso.sharepoint.com/sites/operations\nRetail                               https://contoso.sharepoint.com/sites/Retail\nSales and Marketing                  https://contoso.sharepoint.com/sites/SalesAndMarketing\n")),(0,o.kt)("p",null,"To retrieve information only about sites matching a specific title or URL, you could execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ m365 spo site list --query \"[?Title == 'Retail']\" --output text\nTitle: Retail\nUrl  : https://contoso.sharepoint.com/sites/Retail\n")),(0,o.kt)("p",null,"To make the output more readable, you could pass it to a JSON processor such as ",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ m365 spo site list --output json --query "[?Template == \'GROUP#0\'].{Title: Title, Url: Url}" | jq\n[\n  {\n    "Title": "Mark 8 Project Team",\n    "Url": "https://contoso.sharepoint.com/sites/Mark8ProjectTeam"\n  },\n  {\n    "Title": "Operations",\n    "Url": "https://contoso.sharepoint.com/sites/operations"\n  },\n  {\n    "Title": "Digital Initiative Public Relations",\n    "Url": "https://contoso.sharepoint.com/sites/DigitalInitiativePublicRelations"\n  },\n  {\n    "Title": "Retail",\n    "Url": "https://contoso.sharepoint.com/sites/Retail"\n  },\n  {\n    "Title": "Leadership Team",\n    "Url": "https://contoso.sharepoint.com/sites/leadership"\n  },\n  {\n    "Title": "Sales and Marketing",\n    "Url": "https://contoso.sharepoint.com/sites/SalesAndMarketing"\n  }\n]\n')),(0,o.kt)("h2",{id:"when-to-use-which-output-mode"},"When to use which output mode"),(0,o.kt)("p",null,"Generally, you will use the text output when interacting with the CLI yourself. When building scripts using the CLI for Microsoft 365, you will use the default JSON output mode, because processing JSON strings is much more convenient and reliable than processing plain-text output."),(0,o.kt)("h2",{id:"sample-script"},"Sample script"),(0,o.kt)("p",null,"Using the JSON output mode allows you to build scripts using the CLI for Microsoft 365. The CLI works on any platform, but as there is no common way to work with objects and command output on all platforms and shells, we chose JSON as the format to serialize objects in the CLI for Microsoft 365."),(0,o.kt)("p",null,"Following, is a sample script, that you could build using the CLI for Microsoft 365 in Bash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 # get all apps available in the tenant app catalog\napps=$(m365 spo app list --output json)\n\n# get IDs of all apps that are not deployed\nnotDeployedAppsIds=($(echo $apps | jq -r '.[] | select(.Deployed == false) | {ID} | .[]'))\n\n# deploy all not deployed apps\nfor appId in $notDeployedAppsIds; do\n  m365 spo app deploy -i $appId\ndone\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"First, you use the CLI for Microsoft 365 to get the list of all apps from the tenant app catalog using the ",(0,o.kt)("a",{parentName:"em",href:"/cmd/spo/app/app-list"},"spo app list")," command. You set the output type to JSON and store it in a shell variable ",(0,o.kt)("inlineCode",{parentName:"em"},"apps"),". Next, you parse the JSON string using ",(0,o.kt)("a",{parentName:"em",href:"https://stedolan.github.io/jq/"},"jq")," and get IDs of apps that are not deployed. Finally, for each ID you run the ",(0,o.kt)("a",{parentName:"em",href:"/cmd/spo/app/app-deploy"},"spo app deploy")," CLI for Microsoft 365 command passing the ID as a command argument. Notice, that in the script, both ",(0,o.kt)("inlineCode",{parentName:"em"},"spo")," commands are prepended with ",(0,o.kt)("inlineCode",{parentName:"em"},"m365")," and executed as separate commands directly in the shell.")),(0,o.kt)("p",null,"The same could be accomplished in PowerShell as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"# get all apps available in the tenant app catalog\n$apps = m365 spo app list --output json | ConvertFrom-Json\n\n# get all apps that are not yet deployed and deploy them\n$apps | ? Deployed -eq $false | % { m365 spo app deploy -i $_.ID }\n")),(0,o.kt)("p",null,"Because PowerShell offers native support for working with JSON strings and objects, the same script written in PowerShell is simpler than the one in Bash. At the end of the day it's up to you to choose if you want to use the CLI for Microsoft 365 in Bash, PowerShell or some other shell. Both Bash and PowerShell are available on multiple platforms, and if you have a team using different platforms, writing scripts using CLI for Microsoft 365 in Bash or PowerShell will let everyone in your team use them."))}d.isMDXComponent=!0}}]);