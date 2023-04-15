"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[54590],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,b=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return t?a.createElement(b,s(s({ref:n},d),{},{components:t})):a.createElement(b,s({ref:n},d))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=c;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r[m]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<l;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},12531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const l={},s="pp tenant settings set",r={unversionedId:"cmd/pp/tenant/tenant-settings-set",id:"cmd/pp/tenant/tenant-settings-set",title:"pp tenant settings set",description:"Sets the global Power Platform configuration of the tenant",source:"@site/docs/cmd/pp/tenant/tenant-settings-set.md",sourceDirName:"cmd/pp/tenant",slug:"/cmd/pp/tenant/tenant-settings-set",permalink:"/cli-microsoft365-docusaurus/cmd/pp/tenant/tenant-settings-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/tenant/tenant-settings-set.md",tags:[],version:"current",lastUpdatedAt:1681250585,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp tenant settings list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/tenant/tenant-settings-list"},next:{title:"purview auditlog list",permalink:"/cli-microsoft365-docusaurus/cmd/purview/auditlog/auditlog-list"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pp-tenant-settings-set"},"pp tenant settings set"),(0,i.kt)("p",null,"Sets the global Power Platform configuration of the tenant"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp tenant settings set [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--walkMeOptOut [walkMeOptOut]"),"\n: Ability to opt out of guided experiences using WalkMe in Power Platform. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableNPSCommentsReachout [disableNPSCommentsReachout]"),"\n: Ability to disable re-surveying users who left prior feedback via NPS prompts in Power Platform. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableNewsletterSendout [disableNewsletterSendout]"),"\n: Ability to disable the newsletter sendout feature. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableEnvironmentCreationByNonAdminUsers [disableEnvironmentCreationByNonAdminUsers]"),"\n: Restrict all environments to be created by Global Admins, Power Platform Admins, or Dynamics365 Service Admins. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disablePortalsCreationByNonAdminUsers [disablePortalsCreationByNonAdminUsers]"),"\n: Restrict all portals to be created by Global Admins, Power Platform Admins, or Dynamics365 Service Admins. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableSurveyFeedback [disableSurveyFeedback]"),"\n: Ability to disable all NPS survey feedback prompts in Power Platform. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableTrialEnvironmentCreationByNonAdminUsers [disableTrialEnvironmentCreationByNonAdminUsers]"),"\n: Restrict all trial environments to be created by Global Admins, Power Platform Admins, or Dynamics365 Service Admins. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableCapacityAllocationByEnvironmentAdmins [disableCapacityAllocationByEnvironmentAdmins]"),"\n: Ability to disable capacity allocation by environment administrators. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableSupportTicketsVisibleByAllUsers [disableSupportTicketsVisibleByAllUsers]"),"\n: Ability to disable support ticket creation by non-admin users in the tenant. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableDocsSearch [disableDocsSearch]"),"\n: When this setting is true, users in the environment will see a message that Microsoft Learn and Documentation search categories have been turned off by the administrator in the search results page. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableCommunitySearch [disableCommunitySearch]"),"\n: When this setting is true, users in the environment will see a message that Community and Blog search categories have been turned off by the administrator in the search results page. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableBingVideoSearch [disableBingVideoSearch]"),"\n: When this setting is true, users in the environment will see a message that video search categories have been turned off by the administrator in the search results page. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--shareWithColleaguesUserLimit [shareWithColleaguesUserLimit]"),"\n: Maximum value setting for the number of users in a security group used to share an app built using Power Apps on Microsoft Teams. Specify any number as a value."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableShareWithEveryone [disableShareWithEveryone]"),"\n: Ability to disable the Share With Everyone capability in all Power Apps. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--enableGuestsToMake [enableGuestsToMake]"),"\n: Ability to allow guest users in your tenant to create Power Apps. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableMembersIndicator [disableMembersIndicator]"),"\n: Ability to disable the display of a members indicator. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableMakerMatch [disableMakerMatch]"),"\n: Ability to disable the Maker Match feature, which helps organizations find internal resources with the necessary skills to develop custom apps and solutions using Power Platform. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disablePreferredDataLocationForTeamsEnvironment [disablePreferredDataLocationForTeamsEnvironment]"),"\n: Ability to disable the selection of a preferred data location for Teams environment. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableAdminDigest [disableAdminDigest]"),"\n: When true, the entire organization is unsubscribed from the weekly digest. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableDeveloperEnvironmentCreationByNonAdminUsers [disableDeveloperEnvironmentCreationByNonAdminUsers]"),"\n: Restrict all developer environments to be created by Global Admins, Power Platform Admins, or Dynamics365 Service Admins. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableBillingPolicyCreationByNonAdminUsers [disableBillingPolicyCreationByNonAdminUsers]"),"\n: Restrict billing policies to be created by Global Admins, Power Platform Admins, or Dynamics365 Service Admins. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--storageCapacityConsumptionWarningThreshold [storageCapacityConsumptionWarningThreshold]"),"\n: Ability to set a threshold for storage capacity consumption warnings. Specify any number as a value."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableChampionsInvitationReachout [disableChampionsInvitationReachout]"),"\n: Ability to disable all invitations to become a Power Platform champion. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableSkillsMatchInvitationReachout [disableSkillsMatchInvitationReachout]"),"\n: Ability to disable all skills match invitations to become part of the makers community. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--disableCopilot [disableCopilot]"),"\n: Ability to turn off or disable the Copilot feature. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--enableOpenAiBotPublishing [enableOpenAiBotPublishing]"),"\n: Ability to enable or disable the publishing of OpenAI bots within the organization's environment. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--enableModelDataSharing [enableModelDataSharing]"),"\n: Ability to enable or disable the sharing of model data within the organization's environment. Valid values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Disable environment creation for non-admin users"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp tenant settings set --disableEnvironmentCreationByNonAdminUsers true --disableTrialEnvironmentCreationByNonAdminUsers true --disableDeveloperEnvironmentCreationByNonAdminUsers true\n")),(0,i.kt)("p",null,"Enable Power App creation for guest users"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp tenant settings set --enableGuestsToMake true\n")),(0,i.kt)("p",null,"Disable guided experience, survey feedback and newsletter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp tenant settings set --walkMeOptOut true --disableNewsletterSendout true --disableSurveyFeedback true\n")),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,'=== "JSON"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```json\n{\n  "walkMeOptOut": false,\n  "disableNPSCommentsReachout": false,\n  "disableNewsletterSendout": false,\n  "disableEnvironmentCreationByNonAdminUsers": false,\n  "disablePortalsCreationByNonAdminUsers": false,\n  "disableSurveyFeedback": false,\n  "disableTrialEnvironmentCreationByNonAdminUsers": false,\n  "disableCapacityAllocationByEnvironmentAdmins": false,\n  "disableSupportTicketsVisibleByAllUsers": false,\n  "powerPlatform": {\n    "search": {\n      "disableDocsSearch": false,\n      "disableCommunitySearch": false,\n      "disableBingVideoSearch": false\n    },\n    "teamsIntegration": {\n      "shareWithColleaguesUserLimit": 10000\n    },\n    "powerApps": {\n      "disableShareWithEveryone": false,\n      "enableGuestsToMake": false,\n      "disableMembersIndicator": false,\n      "disableMakerMatch": false\n    },\n    "environments": {\n      "disablePreferredDataLocationForTeamsEnvironment": false\n    },\n    "governance": {\n      "disableAdminDigest": false,\n      "disableDeveloperEnvironmentCreationByNonAdminUsers": false\n    },\n    "licensing": {\n      "disableBillingPolicyCreationByNonAdminUsers": false,\n      "storageCapacityConsumptionWarningThreshold": 85\n    },\n    "powerPages": {},\n    "champions": {\n      "disableChampionsInvitationReachout": false,\n      "disableSkillsMatchInvitationReachout": false\n    },\n    "intelligence": {\n      "disableCopilot": false,\n      "enableOpenAiBotPublishing": false\n    },\n    "modelExperimentation": {\n      "enableModelDataSharing": false\n    }\n  }\n}\n```\n')),(0,i.kt)("p",null,'=== "Text"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```text\ndisableCapacityAllocationByEnvironmentAdmins  : false\ndisableEnvironmentCreationByNonAdminUsers     : false\ndisableNPSCommentsReachout                    : false\ndisableNewsletterSendout                      : false\ndisablePortalsCreationByNonAdminUsers         : false\ndisableSupportTicketsVisibleByAllUsers        : false\ndisableSurveyFeedback                         : false\ndisableTrialEnvironmentCreationByNonAdminUsers: false\npowerPlatform                                 : {"search":{"disableDocsSearch":false,"disableCommunitySearch":false,"disableBingVideoSearch":false},"teamsIntegration":{"shareWithColleaguesUserLimit":10000},"powerApps":{"disableShareWithEveryone":false,"enableGuestsToMake":false,"disableMembersIndicator":false,"disableMakerMatch":false},"environments":{"disablePreferredDataLocationForTeamsEnvironment":false},"governance":{"disableAdminDigest":false,"disableDeveloperEnvironmentCreationByNonAdminUsers":false},"licensing":{"disableBillingPolicyCreationByNonAdminUsers":false,"storageCapacityConsumptionWarningThreshold":85},"powerPages":{},"champions":{"disableChampionsInvitationReachout":false,"disableSkillsMatchInvitationReachout":false},"intelligence":{"disableCopilot":false,"enableOpenAiBotPublishing":false},"modelExperimentation":{"enableModelDataSharing":false}}\nwalkMeOptOut                                  : false\n```\n')),(0,i.kt)("p",null,'=== "CSV"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```csv\nwalkMeOptOut,disableNPSCommentsReachout,disableNewsletterSendout,disableEnvironmentCreationByNonAdminUsers,disablePortalsCreationByNonAdminUsers,disableSurveyFeedback,disableTrialEnvironmentCreationByNonAdminUsers,disableCapacityAllocationByEnvironmentAdmins,disableSupportTicketsVisibleByAllUsers\n,,,,,,,,\n```\n")),(0,i.kt)("p",null,'=== "Markdown"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```md\n# pp tenant settings set --disableEnvironmentCreationByNonAdminUsers false --disableTrialEnvironmentCreationByNonAdminUsers false --disableDeveloperEnvironmentCreationByNonAdminUsers false\n\nDate: 14/3/2023\n\nProperty | Value\n---------|-------\nwalkMeOptOut | false\ndisableNPSCommentsReachout | false\ndisableNewsletterSendout | false\ndisableEnvironmentCreationByNonAdminUsers | false\ndisablePortalsCreationByNonAdminUsers | false\ndisableSurveyFeedback | false\ndisableTrialEnvironmentCreationByNonAdminUsers | false\ndisableCapacityAllocationByEnvironmentAdmins | false\ndisableSupportTicketsVisibleByAllUsers | false\n```\n")))}u.isMDXComponent=!0}}]);