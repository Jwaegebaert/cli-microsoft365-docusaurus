"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80253],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={},o="planner plan set",p={unversionedId:"cmd/planner/plan/plan-set",id:"cmd/planner/plan/plan-set",title:"planner plan set",description:"Updates a Microsoft Planner plan",source:"@site/docs/cmd/planner/plan/plan-set.md",sourceDirName:"cmd/planner/plan",slug:"/cmd/planner/plan/plan-set",permalink:"/cmd/planner/plan/plan-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/plan/plan-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"planner plan remove",permalink:"/cmd/planner/plan/plan-remove"},next:{title:"task",permalink:"/cmd/groups/planner/task"}},i={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2},{value:"Response",id:"response",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planner-plan-set"},"planner plan set"),(0,r.kt)("p",null,"Updates a Microsoft Planner plan"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: ID of the plan. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-t, --title [title]"),"\n: Title of the plan. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--ownerGroupId [ownerGroupId]"),"\n: ID of the group to which the plan belongs. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," when using ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--ownerGroupName [ownerGroupName]"),"\n: Name of the Group to which the plan belongs. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," when using ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--newTitle [newTitle]"),"\n: New title of the plan."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--shareWithUserIds [shareWithUserIds]"),"\n: The comma-separated IDs of the users with whom you want to share the plan. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"shareWithUserIds")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"shareWithUserNames")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--shareWithUserNames [shareWithUserNames]"),"\n: The comma-separated UPNs of the users with whom you want to share the plan. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"shareWithUserIds")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"shareWithUserNames")," but not both."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"This command allows using unknown options. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--category1 [category1]"),"\n: New label for a category. Define the category key within your option to update the related label. Category 1 to 25 are available. E.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"--category4"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--category12"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Updates a Microsoft Planner plan title to New Title"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan set --id 'gndWOTSK60GfPQfiDDj43JgACDCb' --newTitle 'New Title'\n")),(0,r.kt)("p",null,"Share a Microsoft Planner plan owned by the group, with the users"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan set --title 'Plan Title' --ownerGroupName 'My Group' --shareWithUserNames 'user1@contoso.com,user2@contoso.com'\n")),(0,r.kt)("p",null,"Updates a Microsoft Planner plan category labels"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan set --id 'gndWOTSK60GfPQfiDDj43JgACDCb' --category21 'ToDo' --category25 'Urgent'\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update plannerPlan: ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/graph/api/plannerplan-update?view=graph-rest-1.0&tabs=http"},"https://learn.microsoft.com/en-us/graph/api/plannerplan-update?view=graph-rest-1.0&tabs=http")),(0,r.kt)("li",{parentName:"ul"},"plannerPlanDetails resource type: ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/graph/api/resources/plannerplandetails?view=graph-rest-1.0"},"https://learn.microsoft.com/en-us/graph/api/resources/plannerplandetails?view=graph-rest-1.0")),(0,r.kt)("li",{parentName:"ul"},"plannerCategoryDescriptions resource type: ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/graph/api/resources/plannercategorydescriptions?view=graph-rest-1.0"},"https://learn.microsoft.com/en-us/graph/api/resources/plannercategorydescriptions?view=graph-rest-1.0"))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n{\n  "createdDateTime": "2015-03-30T18:36:49.2407981Z",\n  "owner": "ebf3b108-5234-4e22-b93d-656d7dae5874",\n  "title": "My Planner Plan",\n  "id": "xqQg5FS2LkCp935s-FIFm2QAFkHM",\n  "createdBy": {\n    "user": {\n      "displayName": null,\n      "id": "95e27074-6c4a-447a-aa24-9d718a0b86fa"\n    },\n    "application": {\n      "displayName": null,\n      "id": "ebf3b108-5234-4e22-b93d-656d7dae5874"\n    }\n  },\n  "container": {\n    "containerId": "ebf3b108-5234-4e22-b93d-656d7dae5874",\n    "type": "group",\n    "url": "https://graph.microsoft.com/v1.0/groups/ebf3b108-5234-4e22-b93d-656d7dae5874"\n  },\n  "sharedWith": {\n    "ebf3b108-5234-4e22-b93d-656d7dae5874": true,\n    "6463a5ce-2119-4198-9f2a-628761df4a62": true\n  },\n  "categoryDescriptions": {\n    "category1": null,\n    "category2": null,\n    "category3": null,\n    "category4": null,\n    "category5": null,\n    "category6": null,\n    "category7": null,\n    "category8": null,\n    "category9": null,\n    "category10": null,\n    "category11": null,\n    "category12": null,\n    "category13": null,\n    "category14": null,\n    "category15": null,\n    "category16": null,\n    "category17": null,\n    "category18": null,\n    "category19": null,\n    "category20": null,\n    "category21": null,\n    "category22": null,\n    "category23": null,\n    "category24": null,\n    "category25": null\n  }\n}\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\ncreatedDateTime: 2015-03-30T18:36:49.2407981Z\nid             : xqQg5FS2LkCp935s-FIFm2QAFkHM\nowner          : ebf3b108-5234-4e22-b93d-656d7dae5874\ntitle          : My Planner Plan\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nid,title,createdDateTime,owner\nxqQg5FS2LkCp935s-FIFm2QAFkHM,My Planner Plan,2015-03-30T18:36:49.2407981Z,ebf3b108-5234-4e22-b93d-656d7dae5874\n```\n")),(0,r.kt)("p",null,'=== "Markdown"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```md\n# planner plan set --id "xqQg5FS2LkCp935s-FIFm2QAFkHM" --newTitle "My Planner Plan"\n\nDate: 27/12/2022\n\n## My Planner Plan (xqQg5FS2LkCp935s-FIFm2QAFkHM)\n\nProperty | Value\n---------|-------\ncreatedDateTime | 2015-03-30T18:36:49.2407981Z\nowner | ebf3b108-5234-4e22-b93d-656d7dae5874\ntitle | My Planner Plan\nid | xqQg5FS2LkCp935s-FIFm2QAFkHM\ncreatedBy | {"user":{"displayName":null,"id":"dd8b99a7-77c6-4238-a609-396d27844921"},"application":{"displayName":null,"id":"31359c7f-bd7e-475c-86db-fdb8c937548e"}}\ncontainer | {"containerId":"ebf3b108-5234-4e22-b93d-656d7dae5874","type":"group","url":"https://graph.microsoft.com/v1.0/groups/ebf3b108-5234-4e22-b93d-656d7dae5874"}\nsharedWith | {"ebf3b108-5234-4e22-b93d-656d7dae5874":true,"6463a5ce-2119-4198-9f2a-628761df4a62":true}\ncategoryDescriptions | {"category1":null,"category2":null,"category3":null,"category4":null,"category5":null,"category6":null,"category7":null,"category8":null,"category9":null,"category10":null,"category11":null,"category12":null,"category13":null,"category14":null,"category15":null,"category16":null,"category17":null,"category18":null,"category19":null,"category20":null,"category21":null,"category22":null,"category23":null,"category24":null,"category25":null}\n```\n')))}u.isMDXComponent=!0}}]);