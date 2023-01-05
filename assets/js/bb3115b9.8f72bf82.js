"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57150],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=s,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||r;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[d]="string"==typeof e?e:s,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},11841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(87462),s=(t(67294),t(3905));const r={},l="pp tenant settings list",i={unversionedId:"cmd/pp/tenant/tenant-settings-list",id:"cmd/pp/tenant/tenant-settings-list",title:"pp tenant settings list",description:"Lists the global Power Platform tenant settings",source:"@site/docs/cmd/pp/tenant/tenant-settings-list.md",sourceDirName:"cmd/pp/tenant",slug:"/cmd/pp/tenant/tenant-settings-list",permalink:"/cmd/pp/tenant/tenant-settings-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/tenant/tenant-settings-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp solution remove",permalink:"/cmd/pp/solution/solution-remove"},next:{title:"Purview (purview)",permalink:"/cmd/groups/purview"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"pp-tenant-settings-list"},"pp tenant settings list"),(0,s.kt)("p",null,"Lists the global Power Platform tenant settings"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp tenant settings list [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Lists the global Power Platform settings of the tenant"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp tenant settings list\n")),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("p",null,'=== "JSON"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```json\n{\n  "walkMeOptOut": false,\n  "disableNPSCommentsReachout": false,\n  "disableNewsletterSendout": false,\n  "disableEnvironmentCreationByNonAdminUsers": false,\n  "disablePortalsCreationByNonAdminUsers": false,\n  "disableSurveyFeedback": false,\n  "disableTrialEnvironmentCreationByNonAdminUsers": false,\n  "disableCapacityAllocationByEnvironmentAdmins": false,\n  "disableSupportTicketsVisibleByAllUsers": false,\n  "powerPlatform": {\n    "search": {\n      "disableDocsSearch": false,\n      "disableCommunitySearch": false,\n      "disableBingVideoSearch": false\n    },\n    "teamsIntegration": {\n      "shareWithColleaguesUserLimit": 10000\n    },\n    "powerApps": {\n      "disableShareWithEveryone": false,\n      "enableGuestsToMake": false,\n      "disableMembersIndicator": false\n    },\n    "environments": {},\n    "governance": {\n      "disableAdminDigest": false,\n      "allowDeveloperEnvironmentProvisioning": false\n    },\n    "licensing": {\n      "disableBillingPolicyCreationByNonAdminUsers": false\n    },\n    "powerPages": {}\n  }\n}\n```\n')),(0,s.kt)("p",null,'=== "Text"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```text\ndisableCapacityAllocationByEnvironmentAdmins  : false\ndisableEnvironmentCreationByNonAdminUsers     : false\ndisableNPSCommentsReachout                    : false\ndisablePortalsCreationByNonAdminUsers         : false\ndisableSupportTicketsVisibleByAllUsers        : false\ndisableSurveyFeedback                         : false\ndisableTrialEnvironmentCreationByNonAdminUsers: false\nwalkMeOptOut                                  : false\n```\n")),(0,s.kt)("p",null,'=== "CSV"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```csv\ndisableCapacityAllocationByEnvironmentAdmins,disableEnvironmentCreationByNonAdminUsers,disableNPSCommentsReachout,disablePortalsCreationByNonAdminUsers,disableSupportTicketsVisibleByAllUsers,disableSurveyFeedback,disableTrialEnvironmentCreationByNonAdminUsers,walkMeOptOut\nfalse,false,false,false,false,false,false,false\n```\n")))}d.isMDXComponent=!0}}]);