"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[81895],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||p;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<p;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const p={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(p.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),p=a(86010),o=a(12466),i=a(56697),l=a(91980),d=a(67392),s=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),p=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(p),(0,r.useCallback)((e=>{if(!p)return;const t=new URLSearchParams(n.location.search);t.set(p,e),n.replace({...n.location,search:t.toString()})}),[p,n])]}function N(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,p=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:p}))),[l,d]=k({queryString:a,groupId:n}),[c,N]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,p]=(0,s.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&p.set(e)}),[a,p])]}({groupId:n}),f=(()=>{const e=l??c;return u({value:e,tabValues:p})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:p}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),N(e)}),[d,N,p]),tabValues:p}}var f=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:d}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=s.indexOf(t),n=d[a].value;n!==i&&(c(t),l(n))},u=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:u,onClick:m},o,{className:(0,p.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const p=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=p.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},p.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=N(e);return r.createElement("div",{className:(0,p.Z)("tabs-container",h.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),r=(a(67294),a(3905));const p={toc:[]},o="wrapper";function i(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}i.isMDXComponent=!0},31641:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>N,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),p=a(26054),o=a(74866),i=a(85162);const l={},d="planner task set",s={unversionedId:"cmd/planner/task/task-set",id:"cmd/planner/task/task-set",title:"planner task set",description:"Updates a Microsoft Planner task",source:"@site/docs/cmd/planner/task/task-set.mdx",sourceDirName:"cmd/planner/task",slug:"/cmd/planner/task/task-set",permalink:"/cli-microsoft365-docusaurus/cmd/planner/task/task-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/task/task-set.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"planner task remove",permalink:"/cli-microsoft365-docusaurus/cmd/planner/task/task-remove"},next:{title:"planner task checklistitem add",permalink:"/cli-microsoft365-docusaurus/cmd/planner/task/task-checklistitem-add"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3},{value:"<code>description</code>, <code>previewType</code> response",id:"description-previewtype-response",level:3},{value:"More information",id:"more-information",level:2}],u={toc:m},k="wrapper";function N(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planner-task-set"},"planner task set"),(0,r.kt)("p",null,"Updates a Microsoft Planner task"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner task set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the task.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-t, --title [title]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"New title of the task.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--bucketId [bucketId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the bucket to move the task to. Specify either ",(0,r.kt)("code",{parentName:"p"},"bucketId")," or ",(0,r.kt)("code",{parentName:"p"},"bucketName")," when using ",(0,r.kt)("code",{parentName:"p"},"title"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--bucketName [bucketName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Name of the bucket to move the task to. The bucket needs to exist in the selected plan. Specify either ",(0,r.kt)("code",{parentName:"p"},"bucketId")," or ",(0,r.kt)("code",{parentName:"p"},"bucketName")," when using ",(0,r.kt)("code",{parentName:"p"},"title"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--planId [planId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the plan to which the bucket belongs to. Specify either ",(0,r.kt)("code",{parentName:"p"},"planId")," or ",(0,r.kt)("code",{parentName:"p"},"planTitle")," when using ",(0,r.kt)("code",{parentName:"p"},"bucketName"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--planTitle [planTitle]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Title of the plan to which the bucket belongs to. Specify either ",(0,r.kt)("code",{parentName:"p"},"planId")," or ",(0,r.kt)("code",{parentName:"p"},"planTitle")," when using ",(0,r.kt)("code",{parentName:"p"},"bucketName"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--ownerGroupId [ownerGroupId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the group to which the plan belongs. Specify ",(0,r.kt)("code",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("code",{parentName:"p"},"ownerGroupName")," when using ",(0,r.kt)("code",{parentName:"p"},"planTitle"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--ownerGroupName [ownerGroupName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Name of the group to which the plan belongs. Specify ",(0,r.kt)("code",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("code",{parentName:"p"},"ownerGroupName")," when using ",(0,r.kt)("code",{parentName:"p"},"planTitle"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--startDateTime [startDateTime]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The date and time when the task started. This should be defined as a valid ISO 8601 string. ",(0,r.kt)("code",{parentName:"p"},"2021-12-16T18:28:48.6964197Z"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--dueDateTime [dueDateTime]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The date and time when the task is due. This should be defined as a valid ISO 8601 string. ",(0,r.kt)("code",{parentName:"p"},"2021-12-16T18:28:48.6964197Z"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--percentComplete [percentComplete]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Percentage of task completion. Number between 0 and 100.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--assignedToUserIds [assignedToUserIds]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Comma-separated IDs of the assignees that should be added to the task assignment. Specify either ",(0,r.kt)("code",{parentName:"p"},"assignedToUserIds")," or ",(0,r.kt)("code",{parentName:"p"},"assignedToUserNames")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--assignedToUserNames [assignedToUserNames]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Comma-separated UPNs of the assignees that should be added to the task assignment. Specify either ",(0,r.kt)("code",{parentName:"p"},"assignedToUserIds")," or ",(0,r.kt)("code",{parentName:"p"},"assignedToUserNames")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--description [description]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Description of the task.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--orderHint [orderHint]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Hint used to order items of this type in a list view.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--assigneePriority [assigneePriority]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Hint used to order items of this type in a list view.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--appliedCategories [appliedCategories]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Comma-separated categories that should be added to the task.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--priority [priority]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Priority of the task: Urgent, Important, Medium, Low. Or an integer between 0 and 10 (check remarks section for more info)."))),(0,r.kt)(p.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"When you specify the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"percentComplete"),", consider the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"when set to 0, the task is considered ",(0,r.kt)("em",{parentName:"li"},"Not started")),(0,r.kt)("li",{parentName:"ul"},"when set between 1 and 99, the task is considered ",(0,r.kt)("em",{parentName:"li"},"In progress")),(0,r.kt)("li",{parentName:"ul"},"when set to 100, the task is considered ",(0,r.kt)("em",{parentName:"li"},"Completed"))),(0,r.kt)("p",null,"When you specify an integer value for ",(0,r.kt)("inlineCode",{parentName:"p"},"priority"),", consider the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"values 0 and 1 are interpreted as ",(0,r.kt)("em",{parentName:"li"},"Urgent")),(0,r.kt)("li",{parentName:"ul"},"values 2, 3 and 4 are interpreted as ",(0,r.kt)("em",{parentName:"li"},"Important")),(0,r.kt)("li",{parentName:"ul"},"values 5, 6 and 7 are interpreted as ",(0,r.kt)("em",{parentName:"li"},"Medium")),(0,r.kt)("li",{parentName:"ul"},"values 8, 9 and 10 are interpreted as ",(0,r.kt)("em",{parentName:"li"},"Low"))),(0,r.kt)("p",null,"You can add up to 6 categories to the task. An example to add ",(0,r.kt)("em",{parentName:"p"},"category1")," and ",(0,r.kt)("em",{parentName:"p"},"category3")," would be ",(0,r.kt)("inlineCode",{parentName:"p"},"category1,category3"),"."),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," with a multiple lines value, use the new line character of the shell you are using to indicate line breaks. For PowerShell this is ",(0,r.kt)("inlineCode",{parentName:"p"},"`n"),". For Zsh or Bash use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," in front. E.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'$"Line 1\\nLine 2"'),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Updates a Microsoft Planner task name to ",(0,r.kt)("em",{parentName:"p"},"My Planner Task")," for the task with the ID ",(0,r.kt)("em",{parentName:"p"},"Z-RLQGfppU6H3663DBzfs5gAMD3o")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner task set --id "Z-RLQGfppU6H3663DBzfs5gAMD3o" --title "My Planner Task"\n')),(0,r.kt)("p",null,"Moves a Microsoft Planner task with the ID ",(0,r.kt)("em",{parentName:"p"},"Z-RLQGfppU6H3663DBzfs5gAMD3o")," to the bucket named ",(0,r.kt)("em",{parentName:"p"},"My Planner Bucket"),". Based on the plan with the title ",(0,r.kt)("em",{parentName:"p"},"My Planner Plan")," owned by the group ",(0,r.kt)("em",{parentName:"p"},"My Planner Group")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner task set  --id "2Vf8JHgsBUiIf-nuvBtv-ZgAAYw2" --bucketName "My Planner Bucket" --planTitle "My Planner Plan" --ownerGroupName "My Planner Group"\n')),(0,r.kt)("p",null,"Marks a Microsoft Planner task with the ID ",(0,r.kt)("em",{parentName:"p"},"Z-RLQGfppU6H3663DBzfs5gAMD3o")," as 50% complete and assigned to categories 1 and 3."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner task set --id "2Vf8JHgsBUiIf-nuvBtv-ZgAAYw2"  --percentComplete 50 --appliedCategories "category1,category3"\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("h3",{id:"standard-response"},"Standard response"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "planId": "oUHpnKBFekqfGE_PS6GGUZcAFY7b",\n  "bucketId": "vncYUXCRBke28qMLB-d4xJcACtNz",\n  "title": "Important task",\n  "orderHint": "8585269241124027581",\n  "assigneePriority": "",\n  "percentComplete": 50,\n  "startDateTime": "2023-01-20T00:00:00Z",\n  "createdDateTime": "2023-01-25T21:39:33.0748226Z",\n  "dueDateTime": "2023-02-15T00:00:00Z",\n  "hasDescription": false,\n  "previewType": "automatic",\n  "completedDateTime": null,\n  "completedBy": null,\n  "referenceCount": 0,\n  "checklistItemCount": 0,\n  "activeChecklistItemCount": 0,\n  "conversationThreadId": null,\n  "priority": 5,\n  "id": "D-ys8Ef4kEuwYG4r68Um3pcAAe9M",\n  "createdBy": {\n    "user": {\n      "displayName": null,\n      "id": "b2091e18-7882-4efe-b7d1-90703f5a5c65"\n    },\n    "application": {\n      "displayName": null,\n      "id": "31359c7f-bd7e-475c-86db-fdb8c937548e"\n    }\n  },\n  "appliedCategories": {},\n  "assignments": {}\n}\n'))),(0,r.kt)(i.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'activeChecklistItemCount: 0\nappliedCategories       : {}\nassigneePriority        :\nassignments             : {}\nbucketId                : vncYUXCRBke28qMLB-d4xJcACtNz\nchecklistItemCount      : 0\ncompletedBy             : null\ncompletedDateTime       : null\nconversationThreadId    : null\ncreatedBy               : {"user":{"displayName":null,"id":"b2091e18-7882-4efe-b7d1-90703f5a5c65"},"application":{"displayName":null,"id":"31359c7f-bd7e-475c-86db-fdb8c937548e"}}\ncreatedDateTime         : 2023-01-25T21:44:10.6044385Z\ndueDateTime             : 2023-02-15T00:00:00Z\nhasDescription          : false\nid                      : D-ys8Ef4kEuwYG4r68Um3pcAAe9M\norderHint               : 8585269238348731422\npercentComplete         : 50\nplanId                  : oUHpnKBFekqfGE_PS6GGUZcAFY7b\npreviewType             : automatic\npriority                : 5\nreferenceCount          : 0\nreferences              : {}\nstartDateTime           : 2023-01-20T00:00:00Z\ntitle                   : Important task\n'))),(0,r.kt)(i.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'planId,bucketId,title,orderHint,assigneePriority,percentComplete,startDateTime,createdDateTime,dueDateTime,hasDescription,previewType,completedDateTime,completedBy,referenceCount,checklistItemCount,activeChecklistItemCount,conversationThreadId,priority,id,createdBy,appliedCategories,assignments\noUHpnKBFekqfGE_PS6GGUZcAFY7b,vncYUXCRBke28qMLB-d4xJcACtNz,Important task,8585269237867589640,,50,2023-01-20T00:00:00Z,2023-01-25T21:44:58.7186167Z,2023-02-15T00:00:00Z,,automatic,,,0,0,0,,5,D-ys8Ef4kEuwYG4r68Um3pcAAe9M,"{""user"":{""displayName"":null,""id"":""b2091e18-7882-4efe-b7d1-90703f5a5c65""},""application"":{""displayName"":null,""id"":""31359c7f-bd7e-475c-86db-fdb8c937548e""}}",{},{}\n'))),(0,r.kt)(i.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# planner task set --id "D-ys8Ef4kEuwYG4r68Um3pcAAe9M" --startDateTime "2023-01-20" --dueDateTime "2023-02-15" --percentComplete "50" --title "Important task"\n\nDate: 25/1/2023\n\n## Important task (D-ys8Ef4kEuwYG4r68Um3pcAAe9M)\n\nProperty | Value\n---------|-------\nplanId | oUHpnKBFekqfGE\\_PS6GGUZcAFY7b\nbucketId | vncYUXCRBke28qMLB-d4xJcACtNz\ntitle | Important task\norderHint | 8585269235419217847\nassigneePriority |\npercentComplete | 50\nstartDateTime | 2023-01-20T00:00:00Z\ncreatedDateTime | 2023-01-25T21:49:03.555796Z\ndueDateTime | 2023-02-15T00:00:00Z\nhasDescription | false\npreviewType | automatic\ncompletedDateTime | null\ncompletedBy | null\nreferenceCount | 0\nchecklistItemCount | 0\nactiveChecklistItemCount | 0\nconversationThreadId | null\npriority | 5\nid | D-ys8Ef4kEuwYG4r68Um3pcAAe9M\ncreatedBy | {"user":{"displayName":null,"id":"b2091e18-7882-4efe-b7d1-90703f5a5c65"},"application":{"displayName":null,"id":"31359c7f-bd7e-475c-86db-fdb8c937548e"}}\nappliedCategories | {}\nassignments | {}\n')))),(0,r.kt)("h3",{id:"description-previewtype-response"},(0,r.kt)("inlineCode",{parentName:"h3"},"description"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"previewType")," response"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "planId": "oUHpnKBFekqfGE_PS6GGUZcAFY7b",\n  "bucketId": "vncYUXCRBke28qMLB-d4xJcACtNz",\n  "title": "Important task",\n  "orderHint": "8585269241124027581",\n  "assigneePriority": "",\n  "percentComplete": 50,\n  "startDateTime": "2023-01-20T00:00:00Z",\n  "createdDateTime": "2023-01-25T21:39:33.0748226Z",\n  "dueDateTime": "2023-02-15T00:00:00Z",\n  "hasDescription": true,\n  "previewType": "automatic",\n  "completedDateTime": null,\n  "completedBy": null,\n  "referenceCount": 0,\n  "checklistItemCount": 0,\n  "activeChecklistItemCount": 0,\n  "conversationThreadId": null,\n  "priority": 5,\n  "id": "D-ys8Ef4kEuwYG4r68Um3pcAAe9M",\n  "createdBy": {\n    "user": {\n      "displayName": null,\n      "id": "b2091e18-7882-4efe-b7d1-90703f5a5c65"\n    },\n    "application": {\n      "displayName": null,\n      "id": "31359c7f-bd7e-475c-86db-fdb8c937548e"\n    }\n  },\n  "appliedCategories": {},\n  "assignments": {},\n  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",\n  "references": {},\n  "checklist": {}\n}\n'))),(0,r.kt)(i.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},'activeChecklistItemCount: 0\nappliedCategories       : {}\nassigneePriority        :\nassignments             : {}\nbucketId                : vncYUXCRBke28qMLB-d4xJcACtNz\nchecklist               : {}\nchecklistItemCount      : 0\ncompletedBy             : null\ncompletedDateTime       : null\nconversationThreadId    : null\ncreatedBy               : {"user":{"displayName":null,"id":"b2091e18-7882-4efe-b7d1-90703f5a5c65"},"application":{"displayName":null,"id":"31359c7f-bd7e-475c-86db-fdb8c937548e"}}\ncreatedDateTime         : 2023-01-25T21:44:10.6044385Z\ndescription             : Lorem ipsum dolor sit amet, consectetur adipiscing elit.\ndueDateTime             : 2023-02-15T00:00:00Z\nhasDescription          : true\nid                      : D-ys8Ef4kEuwYG4r68Um3pcAAe9M\norderHint               : 8585269238348731422\npercentComplete         : 50\nplanId                  : oUHpnKBFekqfGE_PS6GGUZcAFY7b\npreviewType             : automatic\npriority                : 5\nreferenceCount          : 0\nreferences              : {}\nstartDateTime           : 2023-01-20T00:00:00Z\ntitle                   : Important task\n'))),(0,r.kt)(i.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'planId,bucketId,title,orderHint,assigneePriority,percentComplete,startDateTime,createdDateTime,dueDateTime,hasDescription,previewType,completedDateTime,completedBy,referenceCount,checklistItemCount,activeChecklistItemCount,conversationThreadId,priority,id,createdBy,appliedCategories,assignments,description,references,checklist\noUHpnKBFekqfGE_PS6GGUZcAFY7b,vncYUXCRBke28qMLB-d4xJcACtNz,Important task,8585269237867589640,,50,2023-01-20T00:00:00Z,2023-01-25T21:44:58.7186167Z,2023-02-15T00:00:00Z,1,automatic,,,0,0,0,,5,D-ys8Ef4kEuwYG4r68Um3pcAAe9M,"{""user"":{""displayName"":null,""id"":""b2091e18-7882-4efe-b7d1-90703f5a5c65""},""application"":{""displayName"":null,""id"":""31359c7f-bd7e-475c-86db-fdb8c937548e""}}",{},{},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",{},{}\n'))),(0,r.kt)(i.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# planner task set --id "D-ys8Ef4kEuwYG4r68Um3pcAAe9M" --title "Important task" --description "Lorem ipsum dolor sit amet, consectetur adipiscing elit."\n\nDate: 25/1/2023\n\n## Important task (D-ys8Ef4kEuwYG4r68Um3pcAAe9M)\n\nProperty | Value\n---------|-------\nplanId | oUHpnKBFekqfGE\\_PS6GGUZcAFY7b\nbucketId | vncYUXCRBke28qMLB-d4xJcACtNz\ntitle | Important task\norderHint | 8585269235419217847\nassigneePriority |\npercentComplete | 50\nstartDateTime | 2023-01-20T00:00:00Z\ncreatedDateTime | 2023-01-25T21:49:03.555796Z\ndueDateTime | 2023-02-15T00:00:00Z\nhasDescription | true\npreviewType | automatic\ncompletedDateTime | null\ncompletedBy | null\nreferenceCount | 0\nchecklistItemCount | 0\nactiveChecklistItemCount | 0\nconversationThreadId | null\npriority | 5\nid | D-ys8Ef4kEuwYG4r68Um3pcAAe9M\ncreatedBy | {"user":{"displayName":null,"id":"b2091e18-7882-4efe-b7d1-90703f5a5c65"},"application":{"displayName":null,"id":"31359c7f-bd7e-475c-86db-fdb8c937548e"}}\nappliedCategories | {}\nassignments | {}\ndescription | Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nreferences | {}\nchecklist | {}\n')))),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using order hints in Planner: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/graph/api/resources/planner-order-hint-format?view=graph-rest-1.0"},"https://docs.microsoft.com/graph/api/resources/planner-order-hint-format?view=graph-rest-1.0")),(0,r.kt)("li",{parentName:"ul"},"Applied categories in Planner: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/resources/plannerappliedcategories?view=graph-rest-1.0"},"https://docs.microsoft.com/graph/api/resources/plannerappliedcategories?view=graph-rest-1.0"))))}N.isMDXComponent=!0}}]);