"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[29770],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(f,r(r({ref:n},d),{},{components:t})):a.createElement(f,r({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),o=t(86010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,r),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>S});var a=t(87462),o=t(67294),i=t(86010),r=t(12466),l=t(56697),s=t(91980),c=t(67392),d=t(50012);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=p(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[s,c]=f({queryString:t,groupId:a}),[u,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),g=(()=>{const e=s??u;return m({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,i]),tabValues:i}}var g=t(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),p=e=>{const n=e.currentTarget,t=d.indexOf(n),a=c[t].value;a!==l&&(u(n),s(a))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>d.push(e),onKeyDown:m,onClick:p},r,{className:(0,i.Z)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":l===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function v(e){const n=b(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},o.createElement(h,(0,a.Z)({},e,n)),o.createElement(k,(0,a.Z)({},e,n)))}function S(e){const n=(0,g.Z)();return o.createElement(v,(0,a.Z)({key:String(n)},e))}},26054:(e,n,t)=>{t.d(n,{ZP:()=>l});var a=t(87462),o=(t(67294),t(3905));const i={toc:[]},r="wrapper";function l(e){let{components:n,...t}=e;return(0,o.kt)(r,(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",{parentName:"p"},"options"),", ",(0,o.kt)("code",{parentName:"p"},"examples"),", ",(0,o.kt)("code",{parentName:"p"},"remarks"),", ",(0,o.kt)("code",{parentName:"p"},"response"),", ",(0,o.kt)("code",{parentName:"p"},"full"),". Default is ",(0,o.kt)("code",{parentName:"p"},"full"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--query [query]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,o.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output type. ",(0,o.kt)("code",{parentName:"p"},"json,text,csv,md"),". Default ",(0,o.kt)("code",{parentName:"p"},"json"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--verbose"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with verbose logging")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--debug"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with debug logging"))))}l.isMDXComponent=!0},61026:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=t(87462),o=(t(67294),t(3905)),i=t(26054),r=t(74866),l=t(85162);const s={},c="onedrive list",d={unversionedId:"cmd/onedrive/onedrive-list",id:"cmd/onedrive/onedrive-list",title:"onedrive list",description:"Retrieves a list of OneDrive sites",source:"@site/docs/cmd/onedrive/onedrive-list.mdx",sourceDirName:"cmd/onedrive",slug:"/cmd/onedrive/onedrive-list",permalink:"/cli-microsoft365-docusaurus/cmd/onedrive/onedrive-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/onedrive/onedrive-list.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"graph subscription add",permalink:"/cli-microsoft365-docusaurus/cmd/graph/subscription/subscription-add"},next:{title:"onedrive report activityfilecounts",permalink:"/cli-microsoft365-docusaurus/cmd/onedrive/report/report-activityfilecounts"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:p},f="wrapper";function b(e){let{components:n,...t}=e;return(0,o.kt)(f,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"onedrive-list"},"onedrive list"),(0,o.kt)("p",null,"Retrieves a list of OneDrive sites"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onedrive list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)(i.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Retrieves a list of OneDrive sites from the tenant."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onedrive list\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "_ObjectType_": "Microsoft.Online.SharePoint.TenantAdministration.SiteProperties",\n    "_ObjectIdentity_": "5555b5a0-d016-6000-aee2-595e1fa42910|908bed80-a04a-4433-b4a0-883d9847d110:1e852b49-bf4b-4ba5-bcd4-a8c4706c8ed4\\\\\\nSiteProperties\\\\\\nhttps%3a%2f%2fcontoso-my.sharepoint.com%2fpersonal%2fjohn_contoso_onmicrosoft_com",\n    "AllowDownloadingNonWebViewableFiles": false,\n    "AllowEditing": false,\n    "AllowSelfServiceUpgrade": true,\n    "AnonymousLinkExpirationInDays": 0,\n    "AuthContextStrength": null,\n    "AuthenticationContextLimitedAccess": false,\n    "AuthenticationContextName": null,\n    "AverageResourceUsage": 0,\n    "BlockDownloadLinksFileType": 0,\n    "BlockDownloadMicrosoft365GroupIds": null,\n    "BlockDownloadPolicy": false,\n    "BlockGuestsAsSiteAdmin": 0,\n    "ClearRestrictedAccessControl": false,\n    "CommentsOnSitePagesDisabled": false,\n    "CompatibilityLevel": 15,\n    "ConditionalAccessPolicy": 0,\n    "CurrentResourceUsage": 0,\n    "DefaultLinkPermission": 0,\n    "DefaultLinkToExistingAccess": false,\n    "DefaultLinkToExistingAccessReset": false,\n    "DefaultShareLinkRole": 0,\n    "DefaultShareLinkScope": 0,\n    "DefaultSharingLinkType": 0,\n    "DenyAddAndCustomizePages": 2,\n    "Description": null,\n    "DisableAppViews": 0,\n    "DisableCompanyWideSharingLinks": 0,\n    "DisableFlows": 0,\n    "ExcludeBlockDownloadPolicySiteOwners": false,\n    "ExcludedBlockDownloadGroupIds": [],\n    "ExternalUserExpirationInDays": 0,\n    "GroupId": "/Guid(00000000-0000-0000-0000-000000000000)/",\n    "GroupOwnerLoginName": null,\n    "HasHolds": false,\n    "HubSiteId": "/Guid(00000000-0000-0000-0000-000000000000)/",\n    "IBMode": null,\n    "IBSegments": [],\n    "IBSegmentsToAdd": null,\n    "IBSegmentsToRemove": null,\n    "IsGroupOwnerSiteAdmin": false,\n    "IsHubSite": false,\n    "IsTeamsChannelConnected": false,\n    "IsTeamsConnected": false,\n    "LastContentModifiedDate": "/Date(2023,4,22,10,47,36,867)/",\n    "Lcid": 1033,\n    "LimitedAccessFileType": 0,\n    "ListsShowHeaderAndNavigation": false,\n    "LockIssue": null,\n    "LockState": "Unlock",\n    "LoopDefaultSharingLinkRole": 0,\n    "LoopDefaultSharingLinkScope": 0,\n    "LoopOverrideSharingCapability": false,\n    "LoopSharingCapability": 0,\n    "MediaTranscription": 0,\n    "OverrideBlockUserInfoVisibility": 0,\n    "OverrideSharingCapability": false,\n    "OverrideTenantAnonymousLinkExpirationPolicy": false,\n    "OverrideTenantExternalUserExpirationPolicy": false,\n    "Owner": "john@contoso.onmicrosoft.com",\n    "OwnerEmail": null,\n    "OwnerLoginName": null,\n    "OwnerName": null,\n    "PWAEnabled": 1,\n    "ReadOnlyAccessPolicy": false,\n    "ReadOnlyForBlockDownloadPolicy": false,\n    "ReadOnlyForUnmanagedDevices": false,\n    "RelatedGroupId": "/Guid(00000000-0000-0000-0000-000000000000)/",\n    "RequestFilesLinkEnabled": false,\n    "RequestFilesLinkExpirationInDays": 0,\n    "RestrictedAccessControl": false,\n    "RestrictedAccessControlGroups": null,\n    "RestrictedAccessControlGroupsToAdd": null,\n    "RestrictedAccessControlGroupsToRemove": null,\n    "RestrictedToRegion": 3,\n    "SandboxedCodeActivationCapability": 0,\n    "SensitivityLabel": "/Guid(00000000-0000-0000-0000-000000000000)/",\n    "SensitivityLabel2": null,\n    "SetOwnerWithoutUpdatingSecondaryAdmin": false,\n    "SharingAllowedDomainList": null,\n    "SharingBlockedDomainList": null,\n    "SharingCapability": 0,\n    "SharingDomainRestrictionMode": 0,\n    "SharingLockDownCanBeCleared": false,\n    "SharingLockDownEnabled": false,\n    "ShowPeoplePickerSuggestionsForGuestUsers": false,\n    "SiteDefinedSharingCapability": 2,\n    "SocialBarOnSitePagesDisabled": false,\n    "Status": "Active",\n    "StorageMaximumLevel": 1048576,\n    "StorageQuotaType": null,\n    "StorageUsage": 99,\n    "StorageWarningLevel": 943718,\n    "TeamsChannelType": 0,\n    "Template": "SPSPERS#10",\n    "TimeZoneId": 13,\n    "Title": "John",\n    "TitleTranslations": null,\n    "Url": "https://contoso-my.sharepoint.com/personal/john_contoso_onmicrosoft_com",\n    "UserCodeMaximumLevel": 300,\n    "UserCodeWarningLevel": 200,\n    "WebsCount": 0\n  }\n]\n'))),(0,o.kt)(l.Z,{value:"Text",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Title  Url\n-----  -----------------------------------------------------------------------\nJohn   https://contoso-my.sharepoint.com/personal/john_contoso_onmicrosoft_com\n"))),(0,o.kt)(l.Z,{value:"CSV",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},'_ObjectType_,_ObjectIdentity_,AllowDownloadingNonWebViewableFiles,AllowEditing,AllowSelfServiceUpgrade,AnonymousLinkExpirationInDays,AuthenticationContextLimitedAccess,AverageResourceUsage,BlockDownloadLinksFileType,BlockDownloadPolicy,BlockGuestsAsSiteAdmin,ClearRestrictedAccessControl,CommentsOnSitePagesDisabled,CompatibilityLevel,ConditionalAccessPolicy,CurrentResourceUsage,DefaultLinkPermission,DefaultLinkToExistingAccess,DefaultLinkToExistingAccessReset,DefaultShareLinkRole,DefaultShareLinkScope,DefaultSharingLinkType,DenyAddAndCustomizePages,DisableAppViews,DisableCompanyWideSharingLinks,DisableFlows,ExcludeBlockDownloadPolicySiteOwners,ExternalUserExpirationInDays,GroupId,HasHolds,HubSiteId,IsGroupOwnerSiteAdmin,IsHubSite,IsTeamsChannelConnected,IsTeamsConnected,LastContentModifiedDate,Lcid,LimitedAccessFileType,ListsShowHeaderAndNavigation,LockState,LoopDefaultSharingLinkRole,LoopDefaultSharingLinkScope,LoopOverrideSharingCapability,LoopSharingCapability,MediaTranscription,OverrideBlockUserInfoVisibility,OverrideSharingCapability,OverrideTenantAnonymousLinkExpirationPolicy,OverrideTenantExternalUserExpirationPolicy,Owner,PWAEnabled,ReadOnlyAccessPolicy,ReadOnlyForBlockDownloadPolicy,ReadOnlyForUnmanagedDevices,RelatedGroupId,RequestFilesLinkEnabled,RequestFilesLinkExpirationInDays,RestrictedAccessControl,RestrictedToRegion,SandboxedCodeActivationCapability,SensitivityLabel,SetOwnerWithoutUpdatingSecondaryAdmin,SharingCapability,SharingDomainRestrictionMode,SharingLockDownCanBeCleared,SharingLockDownEnabled,ShowPeoplePickerSuggestionsForGuestUsers,SiteDefinedSharingCapability,SocialBarOnSitePagesDisabled,Status,StorageMaximumLevel,StorageUsage,StorageWarningLevel,TeamsChannelType,Template,TimeZoneId,Title,Url,UserCodeMaximumLevel,UserCodeWarningLevel,WebsCount\nMicrosoft.Online.SharePoint.TenantAdministration.SiteProperties,"7755b5a0-60dd-6000-884e-d3cee2eebe74|908bed80-a04a-4433-b4a0-883d9847d110:1e852b49-bf4b-4ba5-bcd4-a8c4706c8ed4\nSiteProperties\nhttps%3a%2f%2fcontoso-my.sharepoint.com%2fpersonal%2fjohn_contoso_onmicrosoft_com",,,1,0,,0,0,,0,,,15,0,0,0,,,0,0,0,2,0,0,0,,0,/Guid(00000000-0000-0000-0000-000000000000)/,,/Guid(00000000-0000-0000-0000-000000000000)/,,,,,"/Date(2023,4,22,10,47,36,867)/",1033,0,,Unlock,0,0,,0,0,0,,,,john@contoso.onmicrosoft.com,1,,,,/Guid(00000000-0000-0000-0000-000000000000)/,,0,,3,0,/Guid(00000000-0000-0000-0000-000000000000)/,,0,0,,,,2,,Active,1048576,99,943718,0,SPSPERS#10,13,John,https://contoso-my.sharepoint.com/personal/john_contoso_onmicrosoft_com,300,200,0\n'))),(0,o.kt)(l.Z,{value:"Markdown",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"# onedrive list\n\nDate: 2023-05-22\n\n## John (https://contoso-my.sharepoint.com/personal/john_contoso_onmicrosoft_com)\n\nProperty | Value\n---------|-------\n\\_ObjectType\\_ | Microsoft.Online.SharePoint.TenantAdministration.SiteProperties\n\\_ObjectIdentity\\_ | 8b55b5a0-3004-6000-aee2-525984e67e44\\|908bed80-a04a-4433-b4a0-883d9847d110:1e852b49-bf4b-4ba5-bcd4-a8c4706c8ed4<br>SiteProperties<br>https%3a%2f%2fcontoso-my.sharepoint.com%2fpersonal%2fjohn\\_contoso\\_onmicrosoft\\_com\nAllowDownloadingNonWebViewableFiles | false\nAllowEditing | false\nAllowSelfServiceUpgrade | true\nAnonymousLinkExpirationInDays | 0\nAuthenticationContextLimitedAccess | false\nAverageResourceUsage | 0\nBlockDownloadLinksFileType | 0\nBlockDownloadPolicy | false\nBlockGuestsAsSiteAdmin | 0\nClearRestrictedAccessControl | false\nCommentsOnSitePagesDisabled | false\nCompatibilityLevel | 15\nConditionalAccessPolicy | 0\nCurrentResourceUsage | 0\nDefaultLinkPermission | 0\nDefaultLinkToExistingAccess | false\nDefaultLinkToExistingAccessReset | false\nDefaultShareLinkRole | 0\nDefaultShareLinkScope | 0\nDefaultSharingLinkType | 0\nDenyAddAndCustomizePages | 2\nDisableAppViews | 0\nDisableCompanyWideSharingLinks | 0\nDisableFlows | 0\nExcludeBlockDownloadPolicySiteOwners | false\nExternalUserExpirationInDays | 0\nGroupId | /Guid(00000000-0000-0000-0000-000000000000)/\nHasHolds | false\nHubSiteId | /Guid(00000000-0000-0000-0000-000000000000)/\nIsGroupOwnerSiteAdmin | false\nIsHubSite | false\nIsTeamsChannelConnected | false\nIsTeamsConnected | false\nLastContentModifiedDate | /Date(2023,4,22,10,47,36,867)/\nLcid | 1033\nLimitedAccessFileType | 0\nListsShowHeaderAndNavigation | false\nLockState | Unlock\nLoopDefaultSharingLinkRole | 0\nLoopDefaultSharingLinkScope | 0\nLoopOverrideSharingCapability | false\nLoopSharingCapability | 0\nMediaTranscription | 0\nOverrideBlockUserInfoVisibility | 0\nOverrideSharingCapability | false\nOverrideTenantAnonymousLinkExpirationPolicy | false\nOverrideTenantExternalUserExpirationPolicy | false\nOwner | john@contoso.onmicrosoft.com\nPWAEnabled | 1\nReadOnlyAccessPolicy | false\nReadOnlyForBlockDownloadPolicy | false\nReadOnlyForUnmanagedDevices | false\nRelatedGroupId | /Guid(00000000-0000-0000-0000-000000000000)/\nRequestFilesLinkEnabled | false\nRequestFilesLinkExpirationInDays | 0\nRestrictedAccessControl | false\nRestrictedToRegion | 3\nSandboxedCodeActivationCapability | 0\nSensitivityLabel | /Guid(00000000-0000-0000-0000-000000000000)/\nSetOwnerWithoutUpdatingSecondaryAdmin | false\nSharingCapability | 0\nSharingDomainRestrictionMode | 0\nSharingLockDownCanBeCleared | false\nSharingLockDownEnabled | false\nShowPeoplePickerSuggestionsForGuestUsers | false\nSiteDefinedSharingCapability | 2\nSocialBarOnSitePagesDisabled | false\nStatus | Active\nStorageMaximumLevel | 1048576\nStorageUsage | 99\nStorageWarningLevel | 943718\nTeamsChannelType | 0\nTemplate | SPSPERS#10\nTimeZoneId | 13\nTitle | John\nUrl | https://contoso-my.sharepoint.com/personal/john\\_contoso\\_onmicrosoft\\_com\nUserCodeMaximumLevel | 300\nUserCodeWarningLevel | 200\nWebsCount | 0\n")))))}b.isMDXComponent=!0}}]);