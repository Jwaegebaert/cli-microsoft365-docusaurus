"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[93131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,b=c["".concat(s,".").concat(m)]||c[m]||i[m]||l;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:r,o[1]=d;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]},o="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}d.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),d=n(56697),s=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function i(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,d.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=i(e),[o,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=b({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&d(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var h=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:d,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),i=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==d&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:i},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":d===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},66342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var a=n(87462),r=(n(67294),n(3905)),l=n(37884),o=n(74866),d=n(85162);const s={},u="planner plan add",p={unversionedId:"cmd/planner/plan/plan-add",id:"cmd/planner/plan/plan-add",title:"planner plan add",description:"Adds a new Microsoft Planner plan",source:"@site/docs/cmd/planner/plan/plan-add.mdx",sourceDirName:"cmd/planner/plan",slug:"/cmd/planner/plan/plan-add",permalink:"/cli-microsoft365-docusaurus/cmd/planner/plan/plan-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/plan/plan-add.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"planner bucket set",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-set"},next:{title:"planner plan get",permalink:"/cli-microsoft365-docusaurus/cmd/planner/plan/plan-get"}},c={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3},{value:"<code>shareWithUserIds</code>, <code>shareWithUserNames</code> response",id:"sharewithuserids-sharewithusernames-response",level:3}],m={toc:i},b="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planner-plan-add"},"planner plan add"),(0,r.kt)("p",null,"Adds a new Microsoft Planner plan"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan add [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-t, --title <title>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Title of the plan to add.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--ownerGroupId [ownerGroupId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the Group that owns the plan. A valid group must exist before this option can be set. Specify either ",(0,r.kt)("code",{parentName:"p"},"ownerGroupId"),", ",(0,r.kt)("code",{parentName:"p"},"ownerGroupName")," or ",(0,r.kt)("code",{parentName:"p"},"rosterId"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--ownerGroupName [ownerGroupName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Name of the Group that owns the plan. A valid group must exist before this option can be set. Specify either ",(0,r.kt)("code",{parentName:"p"},"ownerGroupId"),", ",(0,r.kt)("code",{parentName:"p"},"ownerGroupName")," or ",(0,r.kt)("code",{parentName:"p"},"rosterId"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--rosterId [rosterId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the Planner Roster. Specify either ",(0,r.kt)("code",{parentName:"p"},"ownerGroupId"),", ",(0,r.kt)("code",{parentName:"p"},"ownerGroupName")," or ",(0,r.kt)("code",{parentName:"p"},"rosterId"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--shareWithUserIds [shareWithUserIds]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The comma-separated IDs of the users with whom you want to share the plan. Specify either ",(0,r.kt)("code",{parentName:"p"},"shareWithUserIds")," or ",(0,r.kt)("code",{parentName:"p"},"shareWithUserNames")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--shareWithUserNames [shareWithUserNames]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The comma-separated UPNs of the users with whom you want to share the plan. Specify either ",(0,r.kt)("code",{parentName:"p"},"shareWithUserIds")," or ",(0,r.kt)("code",{parentName:"p"},"shareWithUserNames")," but not both."))),(0,r.kt)(l.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Related to the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--shareWithUserIds")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--shareWithUserNames"),". If you are leveraging Microsoft 365 groups, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"aad o365group user")," commands to manage group membership to share the ",(0,r.kt)("a",{parentName:"p",href:"https://pnp.github.io/cli-microsoft365/cmd/aad/o365group/o365group-user-add/"},"group's")," plan. You can also add existing members of the group to this collection though it is not required for them to access the plan owned by the group.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Hint: Unlike for groups, a Planner Roster can contain only 1 plan."))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Adds a Microsoft Planner plan with a Group by id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan add --title 'My Planner Plan' --ownerGroupId '233e43d0-dc6a-482e-9b4e-0de7a7bce9b4'\n")),(0,r.kt)("p",null,"Adds a Microsoft Planner plan with with a Group by name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan add --title 'My Planner Plan' --ownerGroupName 'My Planner Group'\n")),(0,r.kt)("p",null,"Adds a Microsoft Planner plan with a Roster by id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan add --title 'My Planner Plan' --rosterId 'tYqYlNd6eECmsNhN_fcq85cAGAnd'\n")),(0,r.kt)("p",null,"Adds a Microsoft Planner plan with with a Group by name and share it with the given users"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner plan add --title 'My Planner Plan' --ownerGroupName 'My Planner Group' --shareWithUserNames 'Allan.Carroll@contoso.com,Ida.Stevens@contoso.com'\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("h3",{id:"standard-response"},"Standard response"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "createdDateTime": "2015-03-30T18:36:49.2407981Z",\n  "owner": "ebf3b108-5234-4e22-b93d-656d7dae5874",\n  "title": "My Planner Plan",\n  "id": "xqQg5FS2LkCp935s-FIFm2QAFkHM",\n  "createdBy": {\n    "user": {\n      "displayName": null,\n      "id": "95e27074-6c4a-447a-aa24-9d718a0b86fa"\n    },\n    "application": {\n      "displayName": null,\n      "id": "ebf3b108-5234-4e22-b93d-656d7dae5874"\n    }\n  },\n  "container": {\n    "containerId": "ebf3b108-5234-4e22-b93d-656d7dae5874",\n    "type": "group",\n    "url": "https://graph.microsoft.com/v1.0/groups/ebf3b108-5234-4e22-b93d-656d7dae5874"\n  }\n}\n'))),(0,r.kt)(d.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"createdDateTime: 2015-03-30T18:36:49.2407981Z\nid             : xqQg5FS2LkCp935s-FIFm2QAFkHM\nowner          : ebf3b108-5234-4e22-b93d-656d7dae5874\ntitle          : My Planner Plan\n"))),(0,r.kt)(d.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id,title,createdDateTime,owner\nxqQg5FS2LkCp935s-FIFm2QAFkHM,My Planner Plan,2015-03-30T18:36:49.2407981Z,ebf3b108-5234-4e22-b93d-656d7dae5874\n"))),(0,r.kt)(d.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# planner plan add --title "My Planner Plan" --ownerGroupId "ebf3b108-5234-4e22-b93d-656d7dae5874"\n\nDate: 30/03/2015\n\n## My Planner Plan (xqQg5FS2LkCp935s-FIFm2QAFkHM)\n\nProperty | Value\n---------|-------\ncreatedDateTime | 2015-03-30T18:36:49.2407981Z\nowner | ebf3b108-5234-4e22-b93d-656d7dae5874\ntitle | My Planner Plan\nid | xqQg5FS2LkCp935s-FIFm2QAFkHM\ncreatedBy | {"user":{"displayName":null,"id":"95e27074-6c4a-447a-aa24-9d718a0b86fa"},"application":{"displayName":null,"id":"ebf3b108-5234-4e22-b93d-656d7dae5874"}}\ncontainer | {"containerId":"ebf3b108-5234-4e22-b93d-656d7dae5874","type":"group","url":"https://graph.microsoft.com/v1.0/groups/ebf3b108-5234-4e22-b93d-656d7dae5874"}\n')))),(0,r.kt)("h3",{id:"sharewithuserids-sharewithusernames-response"},(0,r.kt)("inlineCode",{parentName:"h3"},"shareWithUserIds"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"shareWithUserNames")," response"),(0,r.kt)("p",null,"When we make use of the option ",(0,r.kt)("inlineCode",{parentName:"p"},"shareWithUserIds")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"shareWithUserNames")," the response will differ. "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "createdDateTime": "2015-03-30T18:36:49.2407981Z",\n  "owner": "ebf3b108-5234-4e22-b93d-656d7dae5874",\n  "title": "My Planner Plan",\n  "id": "xqQg5FS2LkCp935s-FIFm2QAFkHM",\n  "createdBy": {\n    "user": {\n      "displayName": null,\n      "id": "95e27074-6c4a-447a-aa24-9d718a0b86fa"\n    },\n    "application": {\n      "displayName": null,\n      "id": "ebf3b108-5234-4e22-b93d-656d7dae5874"\n    }\n  },\n  "container": {\n    "containerId": "ebf3b108-5234-4e22-b93d-656d7dae5874",\n    "type": "group",\n    "url": "https://graph.microsoft.com/v1.0/groups/ebf3b108-5234-4e22-b93d-656d7dae5874"\n  },\n  "sharedWith": {\n    "ebf3b108-5234-4e22-b93d-656d7dae5874": true,\n    "6463a5ce-2119-4198-9f2a-628761df4a62": true\n  },\n  "categoryDescriptions": {\n    "category1": null,\n    "category2": null,\n    "category3": null,\n    "category4": null,\n    "category5": null,\n    "category6": null,\n    "category7": null,\n    "category8": null,\n    "category9": null,\n    "category10": null,\n    "category11": null,\n    "category12": null,\n    "category13": null,\n    "category14": null,\n    "category15": null,\n    "category16": null,\n    "category17": null,\n    "category18": null,\n    "category19": null,\n    "category20": null,\n    "category21": null,\n    "category22": null,\n    "category23": null,\n    "category24": null,\n    "category25": null\n  }\n}\n'))),(0,r.kt)(d.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"createdDateTime: 2015-03-30T18:36:49.2407981Z\nid             : xqQg5FS2LkCp935s-FIFm2QAFkHM\nowner          : ebf3b108-5234-4e22-b93d-656d7dae5874\ntitle          : My Planner Plan\n"))),(0,r.kt)(d.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id,title,createdDateTime,owner\nxqQg5FS2LkCp935s-FIFm2QAFkHM,My Planner Plan,2015-03-30T18:36:49.2407981Z,ebf3b108-5234-4e22-b93d-656d7dae5874\n"))),(0,r.kt)(d.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# planner plan add --title "My Planner Plan" --ownerGroupId "ebf3b108-5234-4e22-b93d-656d7dae5874" --shareWithUserNames "Allan.Carroll@contoso.com,Ida.Stevens@contoso.com"\n\nDate: 30/03/2015\n\n## My Planner Plan (xqQg5FS2LkCp935s-FIFm2QAFkHM)\n\nProperty | Value\n---------|-------\ncreatedDateTime | 2015-03-30T18:36:49.2407981Z\nowner | ebf3b108-5234-4e22-b93d-656d7dae5874\ntitle | My Planner Plan\nid | xqQg5FS2LkCp935s-FIFm2QAFkHM\ncreatedBy | {"user":{"displayName":null,"id":"dd8b99a7-77c6-4238-a609-396d27844921"},"application":{"displayName":null,"id":"31359c7f-bd7e-475c-86db-fdb8c937548e"}}\ncontainer | {"containerId":"ebf3b108-5234-4e22-b93d-656d7dae5874","type":"group","url":"https://graph.microsoft.com/v1.0/groups/ebf3b108-5234-4e22-b93d-656d7dae5874"}\nsharedWith | {"ebf3b108-5234-4e22-b93d-656d7dae5874":true,"6463a5ce-2119-4198-9f2a-628761df4a62":true}\ncategoryDescriptions | {"category1":null,"category2":null,"category3":null,"category4":null,"category5":null,"category6":null,"category7":null,"category8":null,"category9":null,"category10":null,"category11":null,"category12":null,"category13":null,"category14":null,"category15":null,"category16":null,"category17":null,"category18":null,"category19":null,"category20":null,"category21":null,"category22":null,"category23":null,"category24":null,"category25":null}\n')))))}k.isMDXComponent=!0}}]);