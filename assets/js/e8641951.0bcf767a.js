"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[10096],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30463:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={},o="planner tenant settings set",i={unversionedId:"cmd/planner/tenant/tenant-settings-set",id:"cmd/planner/tenant/tenant-settings-set",title:"planner tenant settings set",description:"Sets Microsoft Planner configuration of the tenant",source:"@site/docs/cmd/planner/tenant/tenant-settings-set.md",sourceDirName:"cmd/planner/tenant",slug:"/cmd/planner/tenant/tenant-settings-set",permalink:"/cli-microsoft365-docusaurus/cmd/planner/tenant/tenant-settings-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/tenant/tenant-settings-set.md",tags:[],version:"current",lastUpdatedAt:1678540853,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{},sidebar:"commands",previous:{title:"planner tenant settings list",permalink:"/cli-microsoft365-docusaurus/cmd/planner/tenant/tenant-settings-list"},next:{title:"pa app export",permalink:"/cli-microsoft365-docusaurus/cmd/pa/app/app-export"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planner-tenant-settings-set"},"planner tenant settings set"),(0,r.kt)("p",null,"Sets Microsoft Planner configuration of the tenant"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner tenant settings set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--isPlannerAllowed [isPlannerAllowed]"),"\n: Configure whether Planner should be enabled on the tenant."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowCalendarSharing [allowCalendarSharing]"),"\n: Configure whether Outlook calendar sync is enabled."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowTenantMoveWithDataLoss [allowTenantMoveWithDataLoss]"),"\n: Configure whether a tenant move into a new region is authorized."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowTenantMoveWithDataMigration [allowTenantMoveWithDataMigration]"),"\n: Configure whether a tenant move with data migration is authorized."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowRosterCreation [allowRosterCreation]"),"\n: Configure whether Planner roster creation is allowed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowPlannerMobilePushNotifications [allowPlannerMobilePushNotifications]"),"\n: Configure whether push notifications are enabled in the mobile app."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"!!! important\nTo use this command you must be a global administrator."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Disable Microsoft Planner in the tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner tenant settings set --isPlannerAllowed false\n")),(0,r.kt)("p",null,"Disable Outlook calendar sync and mobile push notifications"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner tenant settings set --allowCalendarSharing false --allowPlannerMobilePushNotifications false\n")),(0,r.kt)("p",null,"Enable Microsoft Planner but disallow roster plans to be created"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner tenant settings set --isPlannerAllowed true --allowRosterCreation false\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n{\n  "id": "1",\n  "isPlannerAllowed": true,\n  "allowCalendarSharing": true,\n  "allowTenantMoveWithDataLoss": false,\n  "allowTenantMoveWithDataMigration": false,\n  "allowRosterCreation": true,\n  "allowPlannerMobilePushNotifications": true\n}\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```txt\nallowCalendarSharing               : true\nallowPlannerMobilePushNotifications: true\nallowRosterCreation                : true\nallowTenantMoveWithDataLoss        : false\nallowTenantMoveWithDataMigration   : false\nisPlannerAllowed                   : true\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nisPlannerAllowed,allowCalendarSharing,allowTenantMoveWithDataLoss,allowTenantMoveWithDataMigration,allowRosterCreation,allowPlannerMobilePushNotifications\n1,1,,,1,1\n```\n")),(0,r.kt)("p",null,'=== "Markdown"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```md\n# planner tenant settings list\n\nDate: 4/2/2023\n\n## 1\n\nProperty | Value\n---------|-------\nid | 1\nisPlannerAllowed | true\nallowCalendarSharing | true\nallowTenantMoveWithDataLoss | false\nallowTenantMoveWithDataMigration | false\nallowRosterCreation | true\nallowPlannerMobilePushNotifications | true\ndisallowedSharedWithContainerTypes | []\n```\n")))}d.isMDXComponent=!0}}]);