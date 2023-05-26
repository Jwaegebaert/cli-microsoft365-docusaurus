"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[44097],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(a),m=r,k=s["".concat(u,".").concat(m)]||s[m]||i[m]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),p=a(56697),u=a(91980),c=a(67392),d=a(50012);function s(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function i(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??s(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,p.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=i(e),[o,p]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,c]=k({queryString:a,groupId:n}),[s,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=u??s;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&p(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);p(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var f=a(72389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:p,selectValue:u,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),i=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==p&&(s(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:i},o,{className:(0,l.Z)("tabs__item",N.tabItem,o?.className,{"tabs__item--active":p===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={toc:[]},o="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}p.isMDXComponent=!0},66275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>i});var n=a(87462),r=(a(67294),a(3905)),l=a(26054),o=a(74866),p=a(85162);const u={},c="planner bucket get",d={unversionedId:"cmd/planner/bucket/bucket-get",id:"cmd/planner/bucket/bucket-get",title:"planner bucket get",description:"Gets the Microsoft Planner bucket in a plan",source:"@site/docs/cmd/planner/bucket/bucket-get.mdx",sourceDirName:"cmd/planner/bucket",slug:"/cmd/planner/bucket/bucket-get",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/bucket/bucket-get.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"planner bucket add",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-add"},next:{title:"planner bucket list",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-list"}},s={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:i},k="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planner-bucket-get"},"planner bucket get"),(0,r.kt)("p",null,"Gets the Microsoft Planner bucket in a plan"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner bucket get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the bucket to retrieve details. Specify either ",(0,r.kt)("code",{parentName:"p"},"id")," or ",(0,r.kt)("code",{parentName:"p"},"name")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Name of the bucket to retrieve details. Specify either ",(0,r.kt)("code",{parentName:"p"},"id")," or ",(0,r.kt)("code",{parentName:"p"},"name")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--planId [planId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the plan to which the bucket belongs. Specify either ",(0,r.kt)("code",{parentName:"p"},"planId")," or ",(0,r.kt)("code",{parentName:"p"},"planTitle")," when using ",(0,r.kt)("code",{parentName:"p"},"name"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--planTitle [planTitle]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Title of the plan to which the bucket belongs. Specify either ",(0,r.kt)("code",{parentName:"p"},"planId")," or ",(0,r.kt)("code",{parentName:"p"},"planTitle")," when using ",(0,r.kt)("code",{parentName:"p"},"name"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--ownerGroupId [ownerGroupId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the group to which the plan belongs. Specify ",(0,r.kt)("code",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("code",{parentName:"p"},"ownerGroupName")," when using ",(0,r.kt)("code",{parentName:"p"},"planTitle"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--ownerGroupName [ownerGroupName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Name of the group to which the plan belongs. Specify ",(0,r.kt)("code",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("code",{parentName:"p"},"ownerGroupName")," when using ",(0,r.kt)("code",{parentName:"p"},"planTitle"),"."))),(0,r.kt)(l.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Gets the specified Microsoft Planner bucket "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket get --id "5h1uuYFk4kKQ0hfoTUkRLpgALtYi"\n')),(0,r.kt)("p",null,"Gets the Microsoft Planner bucket in the PlanId xqQg5FS2LkCp935s-FIFm2QAFkHM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket get --name "Planner Bucket A" --planId "xqQg5FS2LkCp935s-FIFm2QAFkHM"\n')),(0,r.kt)("p",null,"Gets the Microsoft Planner bucket in the Plan ",(0,r.kt)("em",{parentName:"p"},"My Plan")," owned by group ",(0,r.kt)("em",{parentName:"p"},"My Group")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket get --name "Planner Bucket A" --planTitle "My Plan" --ownerGroupName "My Group"\n')),(0,r.kt)("p",null,"Gets the Microsoft Planner bucket in the Plan ",(0,r.kt)("em",{parentName:"p"},"My Plan")," owned by groupId ee0f40fc-b2f7-45c7-b62d-11b90dd2ea8e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket get --name "Planner Bucket A" --planTitle "My Plan" --ownerGroupId "ee0f40fc-b2f7-45c7-b62d-11b90dd2ea8e"\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "My Planner Bucket",\n  "planId": "xqQg5FS2LkCp935s-FIFm2QAFkHM",\n  "orderHint": "8585363889524958496",\n  "id": "ttEB_Uj690STdR3GC1MIDZgANq1U"\n}\n'))),(0,r.kt)(p.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"id       : ttEB_Uj690STdR3GC1MIDZgANq1U\nname     : My Planner Bucket\norderHint: 8585363889524958496\nplanId   : xqQg5FS2LkCp935s-FIFm2QAFkHM\n"))),(0,r.kt)(p.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,planId,orderHint\nttEB_Uj690STdR3GC1MIDZgANq1U,My Planner Bucket,xqQg5FS2LkCp935s-FIFm2QAFkHM,8585363889524958496\n"))),(0,r.kt)(p.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# planner bucket get --id "ttEB_Uj690STdR3GC1MIDZgANq1U"\n\nDate: 27/12/2022\n\n## My Planner Bucket (ttEB_Uj690STdR3GC1MIDZgANq1U)\n\nProperty | Value\n---------|-------\nname | My Planner Bucket\nplanId | xqQg5FS2LkCp935s-FIFm2QAFkHM\norderHint | 8585363889524958496\nid | ttEB_Uj690STdR3GC1MIDZgANq1U\n')))))}b.isMDXComponent=!0}}]);