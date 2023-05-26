"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[54319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||i[m]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),p=n(56697),u=n(91980),c=n(67392),s=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function i(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,p.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=i(e),[o,p]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,c]=k({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&p(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);p(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var f=n(72389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:p,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),i=e=>{const t=e.currentTarget,n=s.indexOf(t),a=c[n].value;a!==p&&(d(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:i},o,{className:(0,l.Z)("tabs__item",N.tabItem,o?.className,{"tabs__item--active":p===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},26054:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]},o="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}p.isMDXComponent=!0},55903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905)),l=n(26054),o=n(74866),p=n(85162);const u={},c="planner bucket list",s={unversionedId:"cmd/planner/bucket/bucket-list",id:"cmd/planner/bucket/bucket-list",title:"planner bucket list",description:"Lists the Microsoft Planner buckets in a plan",source:"@site/docs/cmd/planner/bucket/bucket-list.mdx",sourceDirName:"cmd/planner/bucket",slug:"/cmd/planner/bucket/bucket-list",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/bucket/bucket-list.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"planner bucket get",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-get"},next:{title:"planner bucket remove",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-remove"}},d={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:i},k="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planner-bucket-list"},"planner bucket list"),(0,r.kt)("p",null,"Lists the Microsoft Planner buckets in a plan"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner bucket list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--planId [planId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the plan to list the buckets of. Specify either ",(0,r.kt)("code",{parentName:"p"},"planId")," or ",(0,r.kt)("code",{parentName:"p"},"planTitle")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--planTitle [planTitle]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Title of the plan to list the buckets of. Specify either ",(0,r.kt)("code",{parentName:"p"},"planId")," or ",(0,r.kt)("code",{parentName:"p"},"planTitle")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--ownerGroupId [ownerGroupId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the group to which the plan belongs. Specify ",(0,r.kt)("code",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("code",{parentName:"p"},"ownerGroupName")," when using ",(0,r.kt)("code",{parentName:"p"},"planTitle"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--ownerGroupName [ownerGroupName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Name of the group to which the plan belongs. Specify ",(0,r.kt)("code",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("code",{parentName:"p"},"ownerGroupName")," when using ",(0,r.kt)("code",{parentName:"p"},"planTitle"),"."))),(0,r.kt)(l.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Lists the Microsoft Planner buckets in the Plan ",(0,r.kt)("em",{parentName:"p"},"xqQg5FS2LkCp935s-FIFm2QAFkHM")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket list --planId "xqQg5FS2LkCp935s-FIFm2QAFkHM"\n')),(0,r.kt)("p",null,"Lists the Microsoft Planner buckets in the Plan ",(0,r.kt)("em",{parentName:"p"},"My Plan")," owned by group ",(0,r.kt)("em",{parentName:"p"},"My Group")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket list --planTitle "My Plan" --ownerGroupName "My Group"\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "My Planner Bucket",\n    "planId": "xqQg5FS2LkCp935s-FIFm2QAFkHM",\n    "orderHint": "8585363889524958496",\n    "id": "ttEB_Uj690STdR3GC1MIDZgANq1U"\n  }\n]\n'))),(0,r.kt)(p.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"id                            name               planId                        orderHint\n----------------------------  -----------------  ----------------------------  -------------------\nttEB_Uj690STdR3GC1MIDZgANq1U  My Planner Bucket  xqQg5FS2LkCp935s-FIFm2QAFkHM  8585363889524958496\n"))),(0,r.kt)(p.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,planId,orderHint\nttEB_Uj690STdR3GC1MIDZgANq1U,My Planner Bucket,xqQg5FS2LkCp935s-FIFm2QAFkHM,8585363889524958496\n"))),(0,r.kt)(p.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# planner bucket list --planId "xqQg5FS2LkCp935s-FIFm2QAFkHM"\n\nDate: 27/12/2022\n\n## My Planner Bucket (ttEB_Uj690STdR3GC1MIDZgANq1U)\n\nProperty | Value\n---------|-------\nname | My Planner Bucket\nplanId | xqQg5FS2LkCp935s-FIFm2QAFkHM\norderHint | 8585363889524958496\nid | ttEB_Uj690STdR3GC1MIDZgANq1U\n')))))}b.isMDXComponent=!0}}]);