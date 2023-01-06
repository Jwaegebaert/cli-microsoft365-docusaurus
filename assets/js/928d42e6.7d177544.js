"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,d=m["".concat(o,".").concat(k)]||m[k]||u[k]||i;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},46040:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-h, --help [help]"),"\n: Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"examples"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"remarks"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"full"),". Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"full"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--query [query]"),"\n: JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-o, --output [output]"),"\n: Output type. ",(0,r.kt)("inlineCode",{parentName:"p"},"json,text,csv,md"),". Default ",(0,r.kt)("inlineCode",{parentName:"p"},"json")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--verbose"),"\n: Runs command with verbose logging"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--debug"),"\n: Runs command with debug logging"))}l.isMDXComponent=!0},77438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(46040);const l={title:"planner task checklistitem list",description:"Lists the checklist items of a Planner task"},s="planner task checklistitem list",o={unversionedId:"cmd/planner/task/task-checklistitem-list",id:"cmd/planner/task/task-checklistitem-list",title:"planner task checklistitem list",description:"Lists the checklist items of a Planner task",source:"@site/docs/cmd/planner/task/task-checklistitem-list.md",sourceDirName:"cmd/planner/task",slug:"/cmd/planner/task/task-checklistitem-list",permalink:"/cli-microsoft365-docusaurus/cmd/planner/task/task-checklistitem-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/task/task-checklistitem-list.md",tags:[],version:"current",lastUpdatedAt:1672941875,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"planner task checklistitem list",description:"Lists the checklist items of a Planner task"},sidebar:"commands",previous:{title:"planner task checklistitem add",permalink:"/cli-microsoft365-docusaurus/cmd/planner/task/task-checklistitem-add"},next:{title:"planner task checklistitem remove",permalink:"/cli-microsoft365-docusaurus/cmd/planner/task/task-checklistitem-remove"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planner-task-checklistitem-list"},"planner task checklistitem list"),(0,r.kt)("p",null,"Lists the checklist items of a Planner task."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner task checklistitem list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --taskId <taskId>"),"\n: ID of the task"),(0,r.kt)(i.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Lists the checklist items of a Planner task."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner task checklistitem list --taskId 'vzCcZoOv-U27PwydxHB8opcADJo-'\n")))}u.isMDXComponent=!0}}]);