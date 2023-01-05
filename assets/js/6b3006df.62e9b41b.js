"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||p;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<p;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const p={},l="planner task get",i={unversionedId:"cmd/planner/task/task-get",id:"cmd/planner/task/task-get",title:"planner task get",description:"Retrieve the specified planner task",source:"@site/docs/cmd/planner/task/task-get.md",sourceDirName:"cmd/planner/task",slug:"/cmd/planner/task/task-get",permalink:"/cli-microsoft365-docusaurus/cmd/planner/task/task-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/task/task-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"planner task checklistitem remove",permalink:"/cli-microsoft365-docusaurus/cmd/planner/task/task-checklistitem-remove"},next:{title:"planner task list",permalink:"/cli-microsoft365-docusaurus/cmd/planner/task/task-list"}},o={},s=[{value:"Usage",id:"usage",level:2},{value:"Alias",id:"alias",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planner-task-get"},"planner task get"),(0,r.kt)("p",null,"Retrieve the specified planner task"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner task get [options]\n")),(0,r.kt)("h2",{id:"alias"},"Alias"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner task details get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id  [id]"),"\n: ID of the task. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," but not both. When you specify the task ID, you no longer need to provide the information for ",(0,r.kt)("inlineCode",{parentName:"p"},"bucket"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"plan"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroup"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-t, --title [title]"),"\n: Title of the task. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--bucketId [bucketId]"),"\n: ID of the bucket to which the task belongs. Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"bucketId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bucketName")," when using ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--bucketName [bucketName]"),"\n: Name of the bucket to which the task belongs. Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"bucketId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bucketName")," when using ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--planId [planId]"),"\n: ID of the plan to which the task belongs. Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"planId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"planTitle")," when using ",(0,r.kt)("inlineCode",{parentName:"p"},"bucketName"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--planTitle [planTitle]"),"\n: Title of the plan to which the task belongs. Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"planId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"planTitle")," when using ",(0,r.kt)("inlineCode",{parentName:"p"},"bucketName"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--ownerGroupId [ownerGroupId]"),"\n: ID of the group to which the plan belongs. Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," when using ",(0,r.kt)("inlineCode",{parentName:"p"},"planTitle"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--ownerGroupName [ownerGroupName]"),"\n: Name of the group to which the plan belongs. Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," when using ",(0,r.kt)("inlineCode",{parentName:"p"},"planTitle"),"."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Retrieve the specified planner task by id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner task get --id "vzCcZoOv-U27PwydxHB8opcADJo-"\n')),(0,r.kt)("p",null,"Retrieve the specified planner task with the title ",(0,r.kt)("em",{parentName:"p"},"My Planner Task")," from the bucket named ",(0,r.kt)("em",{parentName:"p"},"My Planner Bucket"),". Based on the plan with the title ",(0,r.kt)("em",{parentName:"p"},"My Planner Plan")," owned by the group ",(0,r.kt)("em",{parentName:"p"},"My Planner Group"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner task get --title "My Planner Task" --bucketName "My Planner Bucket" --planTitle "My Planner Plan" --ownerGroupName "My Planner Group"\n')))}m.isMDXComponent=!0}}]);