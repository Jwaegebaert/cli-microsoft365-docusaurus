"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46040:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-h, --help [help]"),"\n: Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"examples"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"remarks"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"full"),". Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"full"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--query [query]"),"\n: JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-o, --output [output]"),"\n: Output type. ",(0,r.kt)("inlineCode",{parentName:"p"},"json,text,csv,md"),". Default ",(0,r.kt)("inlineCode",{parentName:"p"},"json")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--verbose"),"\n: Runs command with verbose logging"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--debug"),"\n: Runs command with debug logging"))}l.isMDXComponent=!0},30463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(46040);const l={title:"planner tenant settings set",description:"Sets Microsoft Planner configuration of the tenant"},i="planner tenant settings set",s={unversionedId:"cmd/planner/tenant/tenant-settings-set",id:"cmd/planner/tenant/tenant-settings-set",title:"planner tenant settings set",description:"Sets Microsoft Planner configuration of the tenant",source:"@site/docs/cmd/planner/tenant/tenant-settings-set.md",sourceDirName:"cmd/planner/tenant",slug:"/cmd/planner/tenant/tenant-settings-set",permalink:"/cli-microsoft365-docusaurus/cmd/planner/tenant/tenant-settings-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/tenant/tenant-settings-set.md",tags:[],version:"current",lastUpdatedAt:1672941875,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"planner tenant settings set",description:"Sets Microsoft Planner configuration of the tenant"},sidebar:"commands",previous:{title:"planner tenant settings list",permalink:"/cli-microsoft365-docusaurus/cmd/planner/tenant/tenant-settings-list"},next:{title:"Power Apps (pa)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/pa"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planner-tenant-settings-set"},"planner tenant settings set"),(0,r.kt)("p",null,"Sets Microsoft Planner configuration of the tenant"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner tenant settings set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--isPlannerAllowed [isPlannerAllowed]"),"\n: Configure whether Planner should be enabled on the tenant."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowCalendarSharing [allowCalendarSharing]"),"\n: Configure whether Outlook calendar sync is enabled."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowTenantMoveWithDataLoss [allowTenantMoveWithDataLoss]"),"\n: Configure whether a tenant move into a new region is authorized."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowTenantMoveWithDataMigration [allowTenantMoveWithDataMigration]"),"\n: Configure whether a tenant move with data migration is authorized."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowRosterCreation [allowRosterCreation]"),"\n: Configure whether Planner roster creation is allowed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowPlannerMobilePushNotifications [allowPlannerMobilePushNotifications]"),"\n: Configure whether push notifications are enabled in the mobile app."),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"!!! important\nTo use this command you must be a global administrator."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Disable Microsoft Planner in the tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner tenant settings set --isPlannerAllowed false\n")),(0,r.kt)("p",null,"Disable Outlook calendar sync and mobile push notifications"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner tenant settings set --allowCalendarSharing false --allowPlannerMobilePushNotifications false\n")),(0,r.kt)("p",null,"Enable Microsoft Planner but disallow roster plans to be created"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner tenant settings set --isPlannerAllowed true --allowRosterCreation false\n")))}m.isMDXComponent=!0}}]);