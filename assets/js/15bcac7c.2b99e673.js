"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[68582],{3905:(e,n,s)=>{s.d(n,{Zo:()=>m,kt:()=>b});var t=s(67294);function a(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function i(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function o(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?i(Object(s),!0).forEach((function(n){a(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function r(e,n){if(null==e)return{};var s,t,a=function(e,n){if(null==e)return{};var s,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||(a[s]=e[s]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=t.createContext({}),d=function(e){var n=t.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):o(o({},n),e)),s},m=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var s=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=d(s),p=a,b=c["".concat(l,".").concat(p)]||c[p]||u[p]||i;return s?t.createElement(b,o(o({ref:n},m),{},{components:s})):t.createElement(b,o({ref:n},m))}));function b(e,n){var s=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=s.length,o=new Array(i);o[0]=p;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[c]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<i;d++)o[d]=s[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,s)}p.displayName="MDXCreateElement"},26087:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(87462),a=(s(67294),s(3905));const i={},o="spo web get",r={unversionedId:"cmd/spo/web/web-get",id:"cmd/spo/web/web-get",title:"spo web get",description:"Retrieve information about the specified site",source:"@site/docs/cmd/spo/web/web-get.md",sourceDirName:"cmd/spo/web",slug:"/cmd/spo/web/web-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/web/web-get.md",tags:[],version:"current",lastUpdatedAt:1669162006,formattedLastUpdatedAt:"Nov 23, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo web clientsidewebpart list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-clientsidewebpart-list"},next:{title:"spo web installedlanguage list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-installedlanguage-list"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"<code>withGroups</code>, <code>withPermissions</code> response",id:"withgroups-withpermissions-response",level:3},{value:"Response",id:"response-1",level:2}],m={toc:d},c="wrapper";function u(e){let{components:n,...s}=e;return(0,a.kt)(c,(0,t.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-web-get"},"spo web get"),(0,a.kt)("p",null,"Retrieve information about the specified site"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web get [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --url <url>"),"\n: URL of the site for which to retrieve the information"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--withGroups"),"\n: Set if you want to return associated groups (associatedOwnerGroup, associatedMemberGroup and associatedVisitorGroup) along with other properties"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--withPermissions"),"\n: Set if you want to return associated roles and permissions"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Retrieve information about a site"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web get --url https://contoso.sharepoint.com/subsite\n")),(0,a.kt)("p",null,"Retrieve information about a site along with associated groups for the web"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web get --url https://contoso.sharepoint.com/subsite --withGroups\n")),(0,a.kt)("p",null,"Retrieve information about a site along with the RoleAssignments for the web"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web get --url https://contoso.sharepoint.com/subsite --withPermissions\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "AllowRssFeeds": true,\n  "AlternateCssUrl": "",\n  "AppInstanceId": "00000000-0000-0000-0000-000000000000",\n  "ClassicWelcomePage": null,\n  "Configuration": 0,\n  "Created": "2022-09-12T18:18:07.253",\n  "CurrentChangeToken": {\n    "StringValue": "1;2;d8b65bb3-6ca1-4df2-a4be-0efe08af2580;638032553974830000;715586578"\n  },\n  "CustomMasterUrl": "/_catalogs/masterpage/seattle.master",\n  "Description": "",\n  "DesignPackageId": "00000000-0000-0000-0000-000000000000",\n  "DocumentLibraryCalloutOfficeWebAppPreviewersDisabled": false,\n  "EnableMinimalDownload": false,\n  "FooterEmphasis": 0,\n  "FooterEnabled": true,\n  "FooterLayout": 0,\n  "HeaderEmphasis": 0,\n  "HeaderLayout": 0,\n  "HideTitleInHeader": false,\n  "HorizontalQuickLaunch": false,\n  "Id": "d8b65bb3-6ca1-4df2-a4be-0efe08af2580",\n  "IsEduClass": false,\n  "IsEduClassProvisionChecked": false,\n  "IsEduClassProvisionPending": false,\n  "IsHomepageModernized": false,\n  "IsMultilingual": true,\n  "IsRevertHomepageLinkHidden": false,\n  "Language": 1033,\n  "LastItemModifiedDate": "2022-11-05T14:06:21Z",\n  "LastItemUserModifiedDate": "2022-10-31T07:29:33Z",\n  "LogoAlignment": 0,\n  "MasterUrl": "/_catalogs/masterpage/seattle.master",\n  "MegaMenuEnabled": true,\n  "NavAudienceTargetingEnabled": false,\n  "NoCrawl": false,\n  "ObjectCacheEnabled": false,\n  "OverwriteTranslationsOnChange": false,\n  "ResourcePath": {\n    "DecodedUrl": "https://contoso.sharepoint.com"\n  },\n  "QuickLaunchEnabled": true,\n  "RecycleBinEnabled": true,\n  "SearchScope": 0,\n  "ServerRelativeUrl": "/",\n  "SiteLogoUrl": null,\n  "SyndicationEnabled": true,\n  "TenantAdminMembersCanShare": 0,\n  "Title": "Communication site",\n  "TreeViewEnabled": false,\n  "UIVersion": 15,\n  "UIVersionConfigurationEnabled": false,\n  "Url": "https://contoso.sharepoint.com",\n  "WebTemplate": "SITEPAGEPUBLISHING",\n  "WelcomePage": "SitePages/Home.aspx"\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```text\nAllowRssFeeds                                       : true\nAlternateCssUrl                                     :\nAppInstanceId                                       : 00000000-0000-0000-0000-000000000000\nClassicWelcomePage                                  : null\nConfiguration                                       : 0\nCreated                                             : 2022-09-12T18:18:07.253\nCurrentChangeToken                                  : {"StringValue":"1;2;d8b65bb3-6ca1-4df2-a4be-0efe08af2580;638032554376830000;715586608"}\nCustomMasterUrl                                     : /_catalogs/masterpage/seattle.master\nDescription                                         :\nDesignPackageId                                     : 00000000-0000-0000-0000-000000000000\nDocumentLibraryCalloutOfficeWebAppPreviewersDisabled: false\nEnableMinimalDownload                               : false\nFooterEmphasis                                      : 0\nFooterEnabled                                       : true\nFooterLayout                                        : 0\nHeaderEmphasis                                      : 0\nHeaderLayout                                        : 0\nHideTitleInHeader                                   : false\nHorizontalQuickLaunch                               : false\nId                                                  : d8b65bb3-6ca1-4df2-a4be-0efe08af2580\nIsEduClass                                          : false\nIsEduClassProvisionChecked                          : false\nIsEduClassProvisionPending                          : false\nIsHomepageModernized                                : false\nIsMultilingual                                      : true\nIsRevertHomepageLinkHidden                          : false\nLanguage                                            : 1033\nLastItemModifiedDate                                : 2022-11-05T14:06:21Z\nLastItemUserModifiedDate                            : 2022-10-31T07:29:33Z\nLogoAlignment                                       : 0\nMasterUrl                                           : /_catalogs/masterpage/seattle.master\nMegaMenuEnabled                                     : true\nNavAudienceTargetingEnabled                         : false\nNoCrawl                                             : false\nObjectCacheEnabled                                  : false\nOverwriteTranslationsOnChange                       : false\nQuickLaunchEnabled                                  : true\nRecycleBinEnabled                                   : true\nResourcePath                                        : {"DecodedUrl":"https://contoso.sharepoint.com"}\nSearchScope                                         : 0\nServerRelativeUrl                                   : /\nSiteLogoUrl                                         : null\nSyndicationEnabled                                  : true\nTenantAdminMembersCanShare                          : 0\nTitle                                               : Communication site\nTreeViewEnabled                                     : false\nUIVersion                                           : 15\nUIVersionConfigurationEnabled                       : false\nUrl                                                 : https://contoso.sharepoint.com\nWebTemplate                                         : SITEPAGEPUBLISHING\nWelcomePage                                         : SitePages/Home.aspx\n```\n')),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```csv\nAllowRssFeeds,AlternateCssUrl,AppInstanceId,ClassicWelcomePage,Configuration,Created,CurrentChangeToken,CustomMasterUrl,Description,DesignPackageId,DocumentLibraryCalloutOfficeWebAppPreviewersDisabled,EnableMinimalDownload,FooterEmphasis,FooterEnabled,FooterLayout,HeaderEmphasis,HeaderLayout,HideTitleInHeader,HorizontalQuickLaunch,Id,IsEduClass,IsEduClassProvisionChecked,IsEduClassProvisionPending,IsHomepageModernized,IsMultilingual,IsRevertHomepageLinkHidden,Language,LastItemModifiedDate,LastItemUserModifiedDate,LogoAlignment,MasterUrl,MegaMenuEnabled,NavAudienceTargetingEnabled,NoCrawl,ObjectCacheEnabled,OverwriteTranslationsOnChange,ResourcePath,QuickLaunchEnabled,RecycleBinEnabled,SearchScope,ServerRelativeUrl,SiteLogoUrl,SyndicationEnabled,TenantAdminMembersCanShare,Title,TreeViewEnabled,UIVersion,UIVersionConfigurationEnabled,Url,WebTemplate,WelcomePage\n1,,00000000-0000-0000-0000-000000000000,,0,2022-09-12T18:18:07.253,"{""StringValue"":""1;2;d8b65bb3-6ca1-4df2-a4be-0efe08af2580;638032554734300000;715586625""}",/_catalogs/masterpage/seattle.master,,00000000-0000-0000-0000-000000000000,,,0,1,0,0,0,,,d8b65bb3-6ca1-4df2-a4be-0efe08af2580,,,,,1,,1033,2022-11-05T14:06:21Z,2022-10-31T07:29:33Z,0,/_catalogs/masterpage/seattle.master,1,,,,,"{""DecodedUrl"":""https://contoso.sharepoint.com""}",1,1,0,/,,1,0,Communication site,,15,,https://contoso.sharepoint.com,SITEPAGEPUBLISHING,SitePages/Home.aspx\n```\n')),(0,a.kt)("h3",{id:"withgroups-withpermissions-response"},(0,a.kt)("inlineCode",{parentName:"h3"},"withGroups"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"withPermissions")," response"),(0,a.kt)("p",null,"When we make use of the option ",(0,a.kt)("inlineCode",{parentName:"p"},"withGroups")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"withPermissions")," the response will differ. "),(0,a.kt)("h2",{id:"response-1"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "AssociatedMemberGroup": {\n    "Id": 5,\n    "IsHiddenInUI": false,\n    "LoginName": "Communication site Members",\n    "Title": "Communication site Members",\n    "PrincipalType": 8,\n    "AllowMembersEditMembership": true,\n    "AllowRequestToJoinLeave": false,\n    "AutoAcceptRequestToJoinLeave": false,\n    "Description": null,\n    "OnlyAllowMembersViewMembership": false,\n    "OwnerTitle": "Communication site Owners",\n    "RequestToJoinLeaveEmailSetting": ""\n  },\n  "AssociatedOwnerGroup": {\n    "Id": 3,\n    "IsHiddenInUI": false,\n    "LoginName": "Communication site Owners",\n    "Title": "Communication site Owners",\n    "PrincipalType": 8,\n    "AllowMembersEditMembership": false,\n    "AllowRequestToJoinLeave": false,\n    "AutoAcceptRequestToJoinLeave": false,\n    "Description": null,\n    "OnlyAllowMembersViewMembership": false,\n    "OwnerTitle": "Communication site Owners",\n    "RequestToJoinLeaveEmailSetting": ""\n  },\n  "AssociatedVisitorGroup": {\n    "Id": 4,\n    "IsHiddenInUI": false,\n    "LoginName": "Communication site Visitors",\n    "Title": "Communication site Visitors",\n    "PrincipalType": 8,\n    "AllowMembersEditMembership": false,\n    "AllowRequestToJoinLeave": false,\n    "AutoAcceptRequestToJoinLeave": false,\n    "Description": null,\n    "OnlyAllowMembersViewMembership": false,\n    "OwnerTitle": "Communication site Owners",\n    "RequestToJoinLeaveEmailSetting": ""\n  },\n  "AllowRssFeeds": true,\n  "AlternateCssUrl": "",\n  "AppInstanceId": "00000000-0000-0000-0000-000000000000",\n  "ClassicWelcomePage": null,\n  "Configuration": 0,\n  "Created": "2022-09-12T18:18:07.253",\n  "CurrentChangeToken": {\n    "StringValue": "1;2;d8b65bb3-6ca1-4df2-a4be-0efe08af2580;638032553974830000;715586578"\n  },\n  "CustomMasterUrl": "/_catalogs/masterpage/seattle.master",\n  "Description": "",\n  "DesignPackageId": "00000000-0000-0000-0000-000000000000",\n  "DocumentLibraryCalloutOfficeWebAppPreviewersDisabled": false,\n  "EnableMinimalDownload": false,\n  "FooterEmphasis": 0,\n  "FooterEnabled": true,\n  "FooterLayout": 0,\n  "HeaderEmphasis": 0,\n  "HeaderLayout": 0,\n  "HideTitleInHeader": false,\n  "HorizontalQuickLaunch": false,\n  "Id": "d8b65bb3-6ca1-4df2-a4be-0efe08af2580",\n  "IsEduClass": false,\n  "IsEduClassProvisionChecked": false,\n  "IsEduClassProvisionPending": false,\n  "IsHomepageModernized": false,\n  "IsMultilingual": true,\n  "IsRevertHomepageLinkHidden": false,\n  "Language": 1033,\n  "LastItemModifiedDate": "2022-11-05T14:06:21Z",\n  "LastItemUserModifiedDate": "2022-10-31T07:29:33Z",\n  "LogoAlignment": 0,\n  "MasterUrl": "/_catalogs/masterpage/seattle.master",\n  "MegaMenuEnabled": true,\n  "NavAudienceTargetingEnabled": false,\n  "NoCrawl": false,\n  "ObjectCacheEnabled": false,\n  "OverwriteTranslationsOnChange": false,\n  "ResourcePath": {\n    "DecodedUrl": "https://contoso.sharepoint.com"\n  },\n  "QuickLaunchEnabled": true,\n  "RecycleBinEnabled": true,\n  "SearchScope": 0,\n  "ServerRelativeUrl": "/",\n  "SiteLogoUrl": null,\n  "SyndicationEnabled": true,\n  "TenantAdminMembersCanShare": 0,\n  "Title": "Communication site",\n  "TreeViewEnabled": false,\n  "UIVersion": 15,\n  "UIVersionConfigurationEnabled": false,\n  "Url": "https://contoso.sharepoint.com",\n  "WebTemplate": "SITEPAGEPUBLISHING",\n  "WelcomePage": "SitePages/Home.aspx",\n  "RoleAssignments": [\n  {\n    "Member": {\n      "Id": 3,\n      "IsHiddenInUI": false,\n      "LoginName": "Communication site Owners",\n      "Title": "Communication site Owners",\n      "PrincipalType": 8,\n      "AllowMembersEditMembership": false,\n      "AllowRequestToJoinLeave": false,\n      "AutoAcceptRequestToJoinLeave": false,\n      "Description": null,\n      "OnlyAllowMembersViewMembership": false,\n      "OwnerTitle": "Communication site Owners",\n      "RequestToJoinLeaveEmailSetting": ""\n    },\n    "RoleDefinitionBindings": [\n      {\n        "BasePermissions": {\n          "High": "2147483647",\n          "Low": "4294967295"\n        },\n        "Description": "Has full control.",\n        "Hidden": false,\n        "Id": 1073741829,\n        "Name": "Full Control",\n        "Order": 1,\n        "RoleTypeKind": 5,\n        "BasePermissionsValue": [\n          "ViewListItems",\n          "AddListItems",\n          "EditListItems",\n          "DeleteListItems",\n          "ApproveItems",\n          "OpenItems",\n          "ViewVersions",\n          "DeleteVersions",\n          "CancelCheckout",\n          "ManagePersonalViews",\n          "ManageLists",\n          "ViewFormPages",\n          "AnonymousSearchAccessList",\n          "Open",\n          "ViewPages",\n          "AddAndCustomizePages",\n          "ApplyThemeAndBorder",\n          "ApplyStyleSheets",\n          "ViewUsageData",\n          "CreateSSCSite",\n          "ManageSubwebs",\n          "CreateGroups",\n          "ManagePermissions",\n          "BrowseDirectories",\n          "BrowseUserInfo",\n          "AddDelPrivateWebParts",\n          "UpdatePersonalWebParts",\n          "ManageWeb",\n          "AnonymousSearchAccessWebLists",\n          "UseClientIntegration",\n          "UseRemoteAPIs",\n          "ManageAlerts",\n          "CreateAlerts",\n          "EditMyUserInfo",\n          "EnumeratePermissions"\n        ],\n        "RoleTypeKindValue": "Administrator"\n      }\n    ],\n    "PrincipalId": 3\n  }]\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```text\nAllowRssFeeds                                       : true\nAlternateCssUrl                                     :\nAppInstanceId                                       : 00000000-0000-0000-0000-000000000000\nAssociatedMemberGroup                               : {"Id":5,"IsHiddenInUI":false,"LoginName":"Communication site Members","Title":"Communication site Members","PrincipalType":8,"AllowMembersEditMembership":true,"AllowRequestToJoinLeave":false,"AutoAcceptRequestToJoinLeave":false,"Description":null,"OnlyAllowMembersViewMembership":false,"OwnerTitle":"Communication site Owners","RequestToJoinLeaveEmailSetting":""}\nAssociatedOwnerGroup                                : {"Id":3,"IsHiddenInUI":false,"LoginName":"Communication site Owners","Title":"Communication site Owners","PrincipalType":8,"AllowMembersEditMembership":false,"AllowRequestToJoinLeave":false,"AutoAcceptRequestToJoinLeave":false,"Description":null,"OnlyAllowMembersViewMembership":false,"OwnerTitle":"Communication site Owners","RequestToJoinLeaveEmailSetting":""}\nAssociatedVisitorGroup                              : {"Id":4,"IsHiddenInUI":false,"LoginName":"Communication site Visitors","Title":"Communication site Visitors","PrincipalType":8,"AllowMembersEditMembership":false,"AllowRequestToJoinLeave":false,"AutoAcceptRequestToJoinLeave":false,"Description":null,"OnlyAllowMembersViewMembership":false,"OwnerTitle":"Communication site Owners","RequestToJoinLeaveEmailSetting":""}\nClassicWelcomePage                                  : null\nConfiguration                                       : 0\nCreated                                             : 2022-09-12T18:18:07.253\nCurrentChangeToken                                  : {"StringValue":"1;2;d8b65bb3-6ca1-4df2-a4be-0efe08af2580;638032554376830000;715586608"}\nCustomMasterUrl                                     : /_catalogs/masterpage/seattle.master\nDescription                                         :\nDesignPackageId                                     : 00000000-0000-0000-0000-000000000000\nDocumentLibraryCalloutOfficeWebAppPreviewersDisabled: false\nEnableMinimalDownload                               : false\nFooterEmphasis                                      : 0\nFooterEnabled                                       : true\nFooterLayout                                        : 0\nHeaderEmphasis                                      : 0\nHeaderLayout                                        : 0\nHideTitleInHeader                                   : false\nHorizontalQuickLaunch                               : false\nId                                                  : d8b65bb3-6ca1-4df2-a4be-0efe08af2580\nIsEduClass                                          : false\nIsEduClassProvisionChecked                          : false\nIsEduClassProvisionPending                          : false\nIsHomepageModernized                                : false\nIsMultilingual                                      : true\nIsRevertHomepageLinkHidden                          : false\nLanguage                                            : 1033\nLastItemModifiedDate                                : 2022-11-05T14:06:21Z\nLastItemUserModifiedDate                            : 2022-10-31T07:29:33Z\nLogoAlignment                                       : 0\nMasterUrl                                           : /_catalogs/masterpage/seattle.master\nMegaMenuEnabled                                     : true\nNavAudienceTargetingEnabled                         : false\nNoCrawl                                             : false\nObjectCacheEnabled                                  : false\nOverwriteTranslationsOnChange                       : false\nQuickLaunchEnabled                                  : true\nRecycleBinEnabled                                   : true\nResourcePath                                        : {"DecodedUrl":"https://contoso.sharepoint.com"}\nRoleAssignments                                     : [{"Member":{"Id":3,"IsHiddenInUI":false,"LoginName":"Communication site Owners","Title":"Communication site Owners","PrincipalType":8,"AllowMembersEditMembership":false,"AllowRequestToJoinLeave":false,"AutoAcceptRequestToJoinLeave":false,"Description":null,"OnlyAllowMembersViewMembership":false,"OwnerTitle":"Communication site Owners","RequestToJoinLeaveEmailSetting":""},"RoleDefinitionBindings":[{"BasePermissions":{"High":"2147483647","Low":"4294967295"},"Description":"Has full control.","Hidden":false,"Id":1073741829,"Name":"Full Control","Order":1,"RoleTypeKind":5,"BasePermissionsValue":["ViewListItems","AddListItems","EditListItems","DeleteListItems","ApproveItems","OpenItems","ViewVersions","DeleteVersions","CancelCheckout","ManagePersonalViews","ManageLists","ViewFormPages","AnonymousSearchAccessList","Open","ViewPages","AddAndCustomizePages","ApplyThemeAndBorder","ApplyStyleSheets","ViewUsageData","CreateSSCSite","ManageSubwebs","CreateGroups","ManagePermissions","BrowseDirectories","BrowseUserInfo","AddDelPrivateWebParts","UpdatePersonalWebParts","ManageWeb","AnonymousSearchAccessWebLists","UseClientIntegration","UseRemoteAPIs","ManageAlerts","CreateAlerts","EditMyUserInfo","EnumeratePermissions"],"RoleTypeKindValue":"Administrator"}],"PrincipalId":3}]\nSearchScope                                         : 0\nServerRelativeUrl                                   : /\nSiteLogoUrl                                         : null\nSyndicationEnabled                                  : true\nTenantAdminMembersCanShare                          : 0\nTitle                                               : Communication site\nTreeViewEnabled                                     : false\nUIVersion                                           : 15\nUIVersionConfigurationEnabled                       : false\nUrl                                                 : https://contoso.sharepoint.com\nWebTemplate                                         : SITEPAGEPUBLISHING\nWelcomePage                                         : SitePages/Home.aspx\n```\n')),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```csv\nAssociatedMemberGroup,AssociatedOwnerGroup,AssociatedVisitorGroup,AllowRssFeeds,AlternateCssUrl,AppInstanceId,ClassicWelcomePage,Configuration,Created,CurrentChangeToken,CustomMasterUrl,Description,DesignPackageId,DocumentLibraryCalloutOfficeWebAppPreviewersDisabled,EnableMinimalDownload,FooterEmphasis,FooterEnabled,FooterLayout,HeaderEmphasis,HeaderLayout,HideTitleInHeader,HorizontalQuickLaunch,Id,IsEduClass,IsEduClassProvisionChecked,IsEduClassProvisionPending,IsHomepageModernized,IsMultilingual,IsRevertHomepageLinkHidden,Language,LastItemModifiedDate,LastItemUserModifiedDate,LogoAlignment,MasterUrl,MegaMenuEnabled,NavAudienceTargetingEnabled,NoCrawl,ObjectCacheEnabled,OverwriteTranslationsOnChange,ResourcePath,QuickLaunchEnabled,RecycleBinEnabled,SearchScope,ServerRelativeUrl,SiteLogoUrl,SyndicationEnabled,TenantAdminMembersCanShare,Title,TreeViewEnabled,UIVersion,UIVersionConfigurationEnabled,Url,WebTemplate,WelcomePage,RoleAssignments\n"{""Id"":5,""IsHiddenInUI"":false,""LoginName"":""Communication site Members"",""Title"":""Communication site Members"",""PrincipalType"":8,""AllowMembersEditMembership"":true,""AllowRequestToJoinLeave"":false,""AutoAcceptRequestToJoinLeave"":false,""Description"":null,""OnlyAllowMembersViewMembership"":false,""OwnerTitle"":""Communication site Owners"",""RequestToJoinLeaveEmailSetting"":""""}","{""Id"":3,""IsHiddenInUI"":false,""LoginName"":""Communication site Owners"",""Title"":""Communication site Owners"",""PrincipalType"":8,""AllowMembersEditMembership"":false,""AllowRequestToJoinLeave"":false,""AutoAcceptRequestToJoinLeave"":false,""Description"":null,""OnlyAllowMembersViewMembership"":false,""OwnerTitle"":""Communication site Owners"",""RequestToJoinLeaveEmailSetting"":""""}","{""Id"":4,""IsHiddenInUI"":false,""LoginName"":""Communication site Visitors"",""Title"":""Communication site Visitors"",""PrincipalType"":8,""AllowMembersEditMembership"":false,""AllowRequestToJoinLeave"":false,""AutoAcceptRequestToJoinLeave"":false,""Description"":null,""OnlyAllowMembersViewMembership"":false,""OwnerTitle"":""Communication site Owners"",""RequestToJoinLeaveEmailSetting"":""""}",1,,00000000-0000-0000-0000-000000000000,,0,2022-09-12T18:18:07.253,"{""StringValue"":""1;2;d8b65bb3-6ca1-4df2-a4be-0efe08af2580;638032554734300000;715586625""}",/_catalogs/masterpage/seattle.master,,00000000-0000-0000-0000-000000000000,,,0,1,0,0,0,,,d8b65bb3-6ca1-4df2-a4be-0efe08af2580,,,,,1,,1033,2022-11-05T14:06:21Z,2022-10-31T07:29:33Z,0,/_catalogs/masterpage/seattle.master,1,,,,,"{""DecodedUrl"":""https://contoso.sharepoint.com""}",1,1,0,/,,1,0,Communication site,,15,,https://contoso.sharepoint.com,SITEPAGEPUBLISHING,SitePages/Home.aspx,"[{""Member"":{""Id"":3,""IsHiddenInUI"":false,""LoginName"":""Communication site Owners"",""Title"":""Communication site Owners"",""PrincipalType"":8,""AllowMembersEditMembership"":false,""AllowRequestToJoinLeave"":false,""AutoAcceptRequestToJoinLeave"":false,""Description"":null,""OnlyAllowMembersViewMembership"":false,""OwnerTitle"":""Communication site Owners"",""RequestToJoinLeaveEmailSetting"":""""},""RoleDefinitionBindings"":[{""BasePermissions"":{""High"":""2147483647"",""Low"":""4294967295""},""Description"":""Has full control."",""Hidden"":false,""Id"":1073741829,""Name"":""Full Control"",""Order"":1,""RoleTypeKind"":5,""BasePermissionsValue"":[""ViewListItems"",""AddListItems"",""EditListItems"",""DeleteListItems"",""ApproveItems"",""OpenItems"",""ViewVersions"",""DeleteVersions"",""CancelCheckout"",""ManagePersonalViews"",""ManageLists"",""ViewFormPages"",""AnonymousSearchAccessList"",""Open"",""ViewPages"",""AddAndCustomizePages"",""ApplyThemeAndBorder"",""ApplyStyleSheets"",""ViewUsageData"",""CreateSSCSite"",""ManageSubwebs"",""CreateGroups"",""ManagePermissions"",""BrowseDirectories"",""BrowseUserInfo"",""AddDelPrivateWebParts"",""UpdatePersonalWebParts"",""ManageWeb"",""AnonymousSearchAccessWebLists"",""UseClientIntegration"",""UseRemoteAPIs"",""ManageAlerts"",""CreateAlerts"",""EditMyUserInfo"",""EnumeratePermissions""],""RoleTypeKindValue"":""Administrator""}],""PrincipalId"":3}]"\n```\n')))}u.isMDXComponent=!0}}]);