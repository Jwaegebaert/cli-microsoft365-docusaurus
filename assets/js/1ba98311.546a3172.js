"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21560],{3905:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>b});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},i=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?t.createElement(b,o(o({ref:n},i),{},{components:a})):t.createElement(b,o({ref:n},i))}));function b(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var d=2;d<l;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,n,a)=>{a.d(n,{Z:()=>o});var t=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:a,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},n)}},65488:(e,n,a)=>{a.d(n,{Z:()=>m});var t=a(87462),r=a(67294),l=a(86010),o=a(72389),p=a(67392),s=a(7094),d=a(12466);const i="tabList__CuJ",u="tabItem_LNqP";function c(e){const{lazy:n,block:a,defaultValue:o,values:c,groupId:m,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=c??h.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),g=(0,p.l)(y,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===o?o:o??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,s.U)(),[v,w]=(0,r.useState)(f),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=m){const e=k[m];null!=e&&e!==v&&y.some((n=>n.value===e))&&w(e)}const C=e=>{const n=e.currentTarget,a=P.indexOf(n),t=y[a].value;t!==v&&(T(n),w(t),null!=m&&N(m,String(t)))},x=e=>{let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;n=P[a]??P[0];break}case"ArrowLeft":{const a=P.indexOf(e.currentTarget)-1;n=P[a]??P[P.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",i)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},b)},y.map((e=>{let{value:n,label:a,attributes:o}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>P.push(e),onKeyDown:x,onClick:C},o,{className:(0,l.Z)("tabs__item",u,o?.className,{"tabs__item--active":v===n})}),a??n)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function m(e){const n=(0,o.Z)();return r.createElement(c,(0,t.Z)({key:String(n)},e))}},46040:(e,n,a)=>{a.d(n,{ZP:()=>o});var t=a(87462),r=(a(67294),a(3905));const l={toc:[]};function o(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-h, --help [help]"),"\n: Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"examples"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"remarks"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"full"),". Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"full"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--query [query]"),"\n: JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-o, --output [output]"),"\n: Output type. ",(0,r.kt)("inlineCode",{parentName:"p"},"json,text,csv,md"),". Default ",(0,r.kt)("inlineCode",{parentName:"p"},"json")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--verbose"),"\n: Runs command with verbose logging"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--debug"),"\n: Runs command with debug logging"))}o.isMDXComponent=!0},44360:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=a(87462),r=(a(67294),a(3905)),l=a(46040),o=a(65488),p=a(85162);const s={title:"planner plan add",description:"Adds a new Microsoft Planner plan"},d="planner plan add",i={unversionedId:"cmd/planner/plan/plan-add",id:"cmd/planner/plan/plan-add",title:"planner plan add",description:"Adds a new Microsoft Planner plan",source:"@site/docs/cmd/planner/plan/plan-add.md",sourceDirName:"cmd/planner/plan",slug:"/cmd/planner/plan/plan-add",permalink:"/cli-microsoft365-docusaurus/cmd/planner/plan/plan-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/plan/plan-add.md",tags:[],version:"current",lastUpdatedAt:1672941875,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"planner plan add",description:"Adds a new Microsoft Planner plan"},sidebar:"commands",previous:{title:"plan",permalink:"/cli-microsoft365-docusaurus/cmd/groups/planner/plan"},next:{title:"planner plan get",permalink:"/cli-microsoft365-docusaurus/cmd/planner/plan/plan-get"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3},{value:"<code>shareWithUserIds</code>, <code>shareWithUserNames</code> response",id:"sharewithuserids-sharewithusernames-response",level:3}],m={toc:c};function b(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planner-plan-add"},"planner plan add"),(0,r.kt)("p",null,"Adds a new Microsoft Planner plan"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan add [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-t, --title <title>"),"\n: Title of the plan to add."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--ownerGroupId [ownerGroupId]"),"\n: ID of the Group that owns the plan. A valid group must exist before this option can be set. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--ownerGroupName [ownerGroupName]"),"\n: Name of the Group that owns the plan. A valid group must exist before this option can be set. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--shareWithUserIds [shareWithUserIds]"),"\n: The comma-separated IDs of the users with whom you want to share the plan. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"shareWithUserIds")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"shareWithUserNames")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--shareWithUserNames [shareWithUserNames]"),"\n: The comma-separated UPNs of the users with whom you want to share the plan. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"shareWithUserIds")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"shareWithUserNames")," but not both."),(0,r.kt)(l.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"Related to the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--shareWithUserIds")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--shareWithUserNames"),". If you are leveraging Microsoft 365 groups, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"aad o365group user")," commands to manage group membership to share the ",(0,r.kt)("a",{parentName:"p",href:"https://pnp.github.io/cli-microsoft365/cmd/aad/o365group/o365group-user-add/"},"group's")," plan. You can also add existing members of the group to this collection though it is not required for them to access the plan owned by the group."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Adds a Microsoft Planner plan with the name ",(0,r.kt)("em",{parentName:"p"},"My Planner Plan")," for Group ",(0,r.kt)("em",{parentName:"p"},"233e43d0-dc6a-482e-9b4e-0de7a7bce9b4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan add --title 'My Planner Plan' --ownerGroupId '233e43d0-dc6a-482e-9b4e-0de7a7bce9b4'\n")),(0,r.kt)("p",null,"Adds a Microsoft Planner plan with the name ",(0,r.kt)("em",{parentName:"p"},"My Planner Plan")," for Group ",(0,r.kt)("em",{parentName:"p"},"My Planner Group")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan add --title 'My Planner Plan' --ownerGroupName 'My Planner Group'\n")),(0,r.kt)("p",null,"Adds a Microsoft Planner plan with the name ",(0,r.kt)("em",{parentName:"p"},"My Planner Plan")," for Group ",(0,r.kt)("em",{parentName:"p"},"My Planner Group")," and share it with the users ",(0,r.kt)("a",{parentName:"p",href:"mailto:_Allan.Carroll@contoso.com_"},"_Allan.Carroll@contoso.com_")," and ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"mailto:Ida.Stevens@contoso.com"},"Ida.Stevens@contoso.com"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan add --title 'My Planner Plan' --ownerGroupName 'My Planner Group' --shareWithUserNames 'Allan.Carroll@contoso.com,Ida.Stevens@contoso.com'\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("h3",{id:"standard-response"},"Standard response"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "createdDateTime": "2015-03-30T18:36:49.2407981Z",\n  "owner": "ebf3b108-5234-4e22-b93d-656d7dae5874",\n  "title": "My Planner Plan",\n  "id": "xqQg5FS2LkCp935s-FIFm2QAFkHM",\n  "createdBy": {\n    "user": {\n      "displayName": null,\n      "id": "95e27074-6c4a-447a-aa24-9d718a0b86fa"\n    },\n    "application": {\n      "displayName": null,\n      "id": "ebf3b108-5234-4e22-b93d-656d7dae5874"\n    }\n  },\n  "container": {\n    "containerId": "ebf3b108-5234-4e22-b93d-656d7dae5874",\n    "type": "group",\n    "url": "https://graph.microsoft.com/v1.0/groups/ebf3b108-5234-4e22-b93d-656d7dae5874"\n  }\n}\n'))),(0,r.kt)(p.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"createdDateTime: 2015-03-30T18:36:49.2407981Z\nid             : xqQg5FS2LkCp935s-FIFm2QAFkHM\nowner          : ebf3b108-5234-4e22-b93d-656d7dae5874\ntitle          : My Planner Plan\n"))),(0,r.kt)(p.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"id,title,createdDateTime,owner\nxqQg5FS2LkCp935s-FIFm2QAFkHM,My Planner Plan,2015-03-30T18:36:49.2407981Z,ebf3b108-5234-4e22-b93d-656d7dae5874\n"))),(0,r.kt)(p.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'# planner plan add --title "My Planner Plan" --ownerGroupId "ebf3b108-5234-4e22-b93d-656d7dae5874"\n\nDate: 30/03/2015\n\n## My Planner Plan (xqQg5FS2LkCp935s-FIFm2QAFkHM)\n\nProperty | Value\n---------|-------\ncreatedDateTime | 2015-03-30T18:36:49.2407981Z\nowner | ebf3b108-5234-4e22-b93d-656d7dae5874\ntitle | My Planner Plan\nid | xqQg5FS2LkCp935s-FIFm2QAFkHM\ncreatedBy | {"user":{"displayName":null,"id":"95e27074-6c4a-447a-aa24-9d718a0b86fa"},"application":{"displayName":null,"id":"ebf3b108-5234-4e22-b93d-656d7dae5874"}}\ncontainer | {"containerId":"ebf3b108-5234-4e22-b93d-656d7dae5874","type":"group","url":"https://graph.microsoft.com/v1.0/groups/ebf3b108-5234-4e22-b93d-656d7dae5874"}\n')))),(0,r.kt)("h3",{id:"sharewithuserids-sharewithusernames-response"},(0,r.kt)("inlineCode",{parentName:"h3"},"shareWithUserIds"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"shareWithUserNames")," response"),(0,r.kt)("p",null,"When we make use of the option ",(0,r.kt)("inlineCode",{parentName:"p"},"shareWithUserIds")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"shareWithUserNames")," the response will differ. "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "createdDateTime": "2015-03-30T18:36:49.2407981Z",\n  "owner": "ebf3b108-5234-4e22-b93d-656d7dae5874",\n  "title": "My Planner Plan",\n  "id": "xqQg5FS2LkCp935s-FIFm2QAFkHM",\n  "createdBy": {\n    "user": {\n      "displayName": null,\n      "id": "95e27074-6c4a-447a-aa24-9d718a0b86fa"\n    },\n    "application": {\n      "displayName": null,\n      "id": "ebf3b108-5234-4e22-b93d-656d7dae5874"\n    }\n  },\n  "container": {\n    "containerId": "ebf3b108-5234-4e22-b93d-656d7dae5874",\n    "type": "group",\n    "url": "https://graph.microsoft.com/v1.0/groups/ebf3b108-5234-4e22-b93d-656d7dae5874"\n  },\n  "sharedWith": {\n    "ebf3b108-5234-4e22-b93d-656d7dae5874": true,\n    "6463a5ce-2119-4198-9f2a-628761df4a62": true\n  },\n  "categoryDescriptions": {\n    "category1": null,\n    "category2": null,\n    "category3": null,\n    "category4": null,\n    "category5": null,\n    "category6": null,\n    "category7": null,\n    "category8": null,\n    "category9": null,\n    "category10": null,\n    "category11": null,\n    "category12": null,\n    "category13": null,\n    "category14": null,\n    "category15": null,\n    "category16": null,\n    "category17": null,\n    "category18": null,\n    "category19": null,\n    "category20": null,\n    "category21": null,\n    "category22": null,\n    "category23": null,\n    "category24": null,\n    "category25": null\n  }\n}\n'))),(0,r.kt)(p.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"createdDateTime: 2015-03-30T18:36:49.2407981Z\nid             : xqQg5FS2LkCp935s-FIFm2QAFkHM\nowner          : ebf3b108-5234-4e22-b93d-656d7dae5874\ntitle          : My Planner Plan\n"))),(0,r.kt)(p.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id,title,createdDateTime,owner\nxqQg5FS2LkCp935s-FIFm2QAFkHM,My Planner Plan,2015-03-30T18:36:49.2407981Z,ebf3b108-5234-4e22-b93d-656d7dae5874\n"))),(0,r.kt)(p.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# planner plan add --title "My Planner Plan" --ownerGroupId "ebf3b108-5234-4e22-b93d-656d7dae5874" --shareWithUserNames "Allan.Carroll@contoso.com,Ida.Stevens@contoso.com"\n\nDate: 30/03/2015\n\n## My Planner Plan (xqQg5FS2LkCp935s-FIFm2QAFkHM)\n\nProperty | Value\n---------|-------\ncreatedDateTime | 2015-03-30T18:36:49.2407981Z\nowner | ebf3b108-5234-4e22-b93d-656d7dae5874\ntitle | My Planner Plan\nid | xqQg5FS2LkCp935s-FIFm2QAFkHM\ncreatedBy | {"user":{"displayName":null,"id":"dd8b99a7-77c6-4238-a609-396d27844921"},"application":{"displayName":null,"id":"31359c7f-bd7e-475c-86db-fdb8c937548e"}}\ncontainer | {"containerId":"ebf3b108-5234-4e22-b93d-656d7dae5874","type":"group","url":"https://graph.microsoft.com/v1.0/groups/ebf3b108-5234-4e22-b93d-656d7dae5874"}\nsharedWith | {"ebf3b108-5234-4e22-b93d-656d7dae5874":true,"6463a5ce-2119-4198-9f2a-628761df4a62":true}\ncategoryDescriptions | {"category1":null,"category2":null,"category3":null,"category4":null,"category5":null,"category6":null,"category7":null,"category8":null,"category9":null,"category10":null,"category11":null,"category12":null,"category13":null,"category14":null,"category15":null,"category16":null,"category17":null,"category18":null,"category19":null,"category20":null,"category21":null,"category22":null,"category23":null,"category24":null,"category25":null}\n')))))}b.isMDXComponent=!0}}]);