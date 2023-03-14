"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[93260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(n),s=a,k=c["".concat(m,".").concat(s)]||c[s]||i[s]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={toc:[]},o="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-h, --help [help]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",null,"options"),", ",(0,a.kt)("code",null,"examples"),", ",(0,a.kt)("code",null,"remarks"),", ",(0,a.kt)("code",null,"response"),", ",(0,a.kt)("code",null,"full"),". Default is ",(0,a.kt)("code",null,"full"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--query [query]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"JMESPath query string. See ",(0,a.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-o, --output [output]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output type. ",(0,a.kt)("code",null,"json"),", ",(0,a.kt)("code",null,"text"),", ",(0,a.kt)("code",null,"csv"),", ",(0,a.kt)("code",null,"md"),". Default is ",(0,a.kt)("code",null,"json"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--verbose"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with verbose logging.")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--debug"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with debug logging."))))}p.isMDXComponent=!0},6707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=n(37884);const o={},p="planner plan remove",m={unversionedId:"cmd/planner/plan/plan-remove",id:"cmd/planner/plan/plan-remove",title:"planner plan remove",description:"Removes the Microsoft Planner plan",source:"@site/docs/cmd/planner/plan/plan-remove.mdx",sourceDirName:"cmd/planner/plan",slug:"/cmd/planner/plan/plan-remove",permalink:"/cli-microsoft365-docusaurus/cmd/planner/plan/plan-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/plan/plan-remove.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"planner plan list",permalink:"/cli-microsoft365-docusaurus/cmd/planner/plan/plan-list"},next:{title:"planner plan set",permalink:"/cli-microsoft365-docusaurus/cmd/planner/plan/plan-set"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:u},i="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"planner-plan-remove"},"planner plan remove"),(0,a.kt)("p",null,"Removes the Microsoft Planner plan"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan remove [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"i, --id [id]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"ID of the plan to remove. Specify either ",(0,a.kt)("code",{parentName:"p"},"id")," or ",(0,a.kt)("code",{parentName:"p"},"title")," but not both.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-t, --title [title]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Title of the plan to remove. Specify either ",(0,a.kt)("code",{parentName:"p"},"id")," or ",(0,a.kt)("code",{parentName:"p"},"title")," but not both.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--ownerGroupId [ownerGroupId]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"ID of the Group that owns the plan. Specify either ",(0,a.kt)("code",{parentName:"p"},"ownerGroupId")," or ",(0,a.kt)("code",{parentName:"p"},"ownerGroupName")," when using ",(0,a.kt)("code",{parentName:"p"},"title"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--ownerGroupName [ownerGroupName]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Name of the Group that owns the plan. Specify either ",(0,a.kt)("code",{parentName:"p"},"ownerGroupId")," or ",(0,a.kt)("code",{parentName:"p"},"ownerGroupName")," when using ",(0,a.kt)("code",{parentName:"p"},"title"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--confirm"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Don't prompt for confirmation."))),(0,a.kt)(l.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If you wish to delete a Planner plan contained within a Planner Roster, you'll have to remove the roster using ",(0,a.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/planner/roster/roster-remove"},"planner roster remove"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Removes the Microsoft Planner plan by ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan remove --id gndWOTSK60GfPQfiDDj43JgACDCb\n")),(0,a.kt)("p",null,"Removes the Microsoft Planner plan with title ",(0,a.kt)("em",{parentName:"p"},"My Plan")," in group with specific ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner plan remove --title "My Plan" --ownerGroupId 00000000-0000-0000-0000-000000000000\n')),(0,a.kt)("p",null,"Removes the Microsoft Planner plan with title ",(0,a.kt)("em",{parentName:"p"},"My Plan")," in group with name ",(0,a.kt)("em",{parentName:"p"},"My Planner Group")," without confirmation prompt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner plan remove --title "My Plan" --ownerGroupName "My Planner Group" --confirm\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."))}s.isMDXComponent=!0}}]);