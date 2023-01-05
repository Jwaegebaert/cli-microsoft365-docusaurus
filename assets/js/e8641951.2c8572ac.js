"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},o="planner tenant settings set",i={unversionedId:"cmd/planner/tenant/tenant-settings-set",id:"cmd/planner/tenant/tenant-settings-set",title:"planner tenant settings set",description:"Sets Microsoft Planner configuration of the tenant",source:"@site/docs/cmd/planner/tenant/tenant-settings-set.md",sourceDirName:"cmd/planner/tenant",slug:"/cmd/planner/tenant/tenant-settings-set",permalink:"/cli-microsoft365-docusaurus/cmd/planner/tenant/tenant-settings-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/tenant/tenant-settings-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"planner tenant settings list",permalink:"/cli-microsoft365-docusaurus/cmd/planner/tenant/tenant-settings-list"},next:{title:"Power Apps (pa)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/pa"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planner-tenant-settings-set"},"planner tenant settings set"),(0,r.kt)("p",null,"Sets Microsoft Planner configuration of the tenant"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner tenant settings set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--isPlannerAllowed [isPlannerAllowed]"),"\n: Configure whether Planner should be enabled on the tenant."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowCalendarSharing [allowCalendarSharing]"),"\n: Configure whether Outlook calendar sync is enabled."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowTenantMoveWithDataLoss [allowTenantMoveWithDataLoss]"),"\n: Configure whether a tenant move into a new region is authorized."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowTenantMoveWithDataMigration [allowTenantMoveWithDataMigration]"),"\n: Configure whether a tenant move with data migration is authorized."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowRosterCreation [allowRosterCreation]"),"\n: Configure whether Planner roster creation is allowed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowPlannerMobilePushNotifications [allowPlannerMobilePushNotifications]"),"\n: Configure whether push notifications are enabled in the mobile app."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"!!! important\nTo use this command you must be a global administrator."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Disable Microsoft Planner in the tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner tenant settings set --isPlannerAllowed false\n")),(0,r.kt)("p",null,"Disable Outlook calendar sync and mobile push notifications"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner tenant settings set --allowCalendarSharing false --allowPlannerMobilePushNotifications false\n")),(0,r.kt)("p",null,"Enable Microsoft Planner but disallow roster plans to be created"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner tenant settings set --isPlannerAllowed true --allowRosterCreation false\n")))}u.isMDXComponent=!0}}]);