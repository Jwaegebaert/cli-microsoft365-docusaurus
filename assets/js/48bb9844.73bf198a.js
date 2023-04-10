"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[67343],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),m=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(t),d=a,f=c["".concat(i,".").concat(d)]||c[d]||u[d]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var m=2;m<o;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=t(87462),a=(t(67294),t(3905));const o={},l="planner plan remove",p={unversionedId:"cmd/planner/plan/plan-remove",id:"cmd/planner/plan/plan-remove",title:"planner plan remove",description:"Removes the Microsoft Planner plan",source:"@site/docs/cmd/planner/plan/plan-remove.md",sourceDirName:"cmd/planner/plan",slug:"/cmd/planner/plan/plan-remove",permalink:"/cli-microsoft365-docusaurus/cmd/planner/plan/plan-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/plan/plan-remove.md",tags:[],version:"current",lastUpdatedAt:1675291933,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{},sidebar:"commands",previous:{title:"planner plan list",permalink:"/cli-microsoft365-docusaurus/cmd/planner/plan/plan-list"},next:{title:"planner plan set",permalink:"/cli-microsoft365-docusaurus/cmd/planner/plan/plan-set"}},i={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],s={toc:m},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"planner-plan-remove"},"planner plan remove"),(0,a.kt)("p",null,"Removes the Microsoft Planner plan"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan remove [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"i, --id [id]"),"\n: ID of the plan to remove. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," but not both."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-t, --title [title]"),"\n: Title of the plan to remove. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," but not both."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ownerGroupId [ownerGroupId]"),"\n: ID of the Group that owns the plan. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," when using ",(0,a.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ownerGroupName [ownerGroupName]"),"\n: Name of the Group that owns the plan. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," when using ",(0,a.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If you wish to delete a Planner plan contained within a Planner Roster, you'll have to remove the roster using ",(0,a.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/planner/roster/roster-remove"},"planner roster remove"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Removes the Microsoft Planner plan by ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan remove --id gndWOTSK60GfPQfiDDj43JgACDCb\n")),(0,a.kt)("p",null,"Removes the Microsoft Planner plan with title ",(0,a.kt)("em",{parentName:"p"},"My Plan")," in group with specific ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner plan remove --title "My Plan" --ownerGroupId 00000000-0000-0000-0000-000000000000\n')),(0,a.kt)("p",null,"Removes the Microsoft Planner plan with title ",(0,a.kt)("em",{parentName:"p"},"My Plan")," in group with name ",(0,a.kt)("em",{parentName:"p"},"My Planner Group")," without confirmation prompt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner plan remove --title "My Plan" --ownerGroupName "My Planner Group" --confirm\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);