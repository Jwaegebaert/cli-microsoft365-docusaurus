"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[41737],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},i=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),i=n,b=d["".concat(c,".").concat(i)]||d[i]||m[i]||o;return r?a.createElement(b,l(l({ref:t},p),{},{components:r})):a.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=i;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}i.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),s=r(56697),c=r(91980),u=r(67392),p=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function i(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!i({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,u]=b({queryString:r,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),k=(()=>{const e=c??d;return i({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!i({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var k=r(72389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:s,selectValue:c,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=p.indexOf(t),a=u[r].value;a!==s&&(d(t),c(a))},i=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:i,onClick:m},l,{className:(0,o.Z)("tabs__item",N.tabItem,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",N.tabList)},n.createElement(h,(0,a.Z)({},e,t)),n.createElement(g,(0,a.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return n.createElement(v,(0,a.Z)({key:String(t)},e))}},26054:(e,t,r)=>{r.d(t,{ZP:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={toc:[]},l="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",{parentName:"p"},"options"),", ",(0,n.kt)("code",{parentName:"p"},"examples"),", ",(0,n.kt)("code",{parentName:"p"},"remarks"),", ",(0,n.kt)("code",{parentName:"p"},"response"),", ",(0,n.kt)("code",{parentName:"p"},"full"),". Default is ",(0,n.kt)("code",{parentName:"p"},"full"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--query [query]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,n.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output type. ",(0,n.kt)("code",{parentName:"p"},"json"),", ",(0,n.kt)("code",{parentName:"p"},"text"),", ",(0,n.kt)("code",{parentName:"p"},"csv"),", ",(0,n.kt)("code",{parentName:"p"},"md"),". Default ",(0,n.kt)("code",{parentName:"p"},"json"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--verbose"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--debug"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}s.isMDXComponent=!0},42700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),o=r(26054),l=r(74866),s=r(85162);const c={},u="planner roster member get",p={unversionedId:"cmd/planner/roster/roster-member-get",id:"cmd/planner/roster/roster-member-get",title:"planner roster member get",description:"Gets a member of the specified Microsoft Planner Roster",source:"@site/docs/cmd/planner/roster/roster-member-get.mdx",sourceDirName:"cmd/planner/roster",slug:"/cmd/planner/roster/roster-member-get",permalink:"/cli-microsoft365-docusaurus/cmd/planner/roster/roster-member-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/roster/roster-member-get.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"planner roster member add",permalink:"/cli-microsoft365-docusaurus/cmd/planner/roster/roster-member-add"},next:{title:"planner roster member list",permalink:"/cli-microsoft365-docusaurus/cmd/planner/roster/roster-member-list"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],i={toc:m},b="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(b,(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"planner-roster-member-get"},"planner roster member get"),(0,n.kt)("p",null,"Gets a member of the specified Microsoft Planner Roster"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner roster member get [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--rosterId <rosterId>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"ID of the Planner Roster.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--userId [userId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"User's Azure AD ID. Specify either ",(0,n.kt)("code",{parentName:"p"},"userId")," or ",(0,n.kt)("code",{parentName:"p"},"userName")," but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--userName [userName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"User's UPN (user principal name, e.g. johndoe@example.com). Specify either ",(0,n.kt)("code",{parentName:"p"},"userId")," or ",(0,n.kt)("code",{parentName:"p"},"userName")," but not both."))),(0,n.kt)(o.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This command is based on an API that is currently in preview and is subject to change once the API reached general availability.")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Gets a specific user by user name as member of the Planner Roster"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner roster member get --rosterId tYqYlNd6eECmsNhN_fcq85cAGAnd --userName john.doe@contoso.com\n")),(0,n.kt)("p",null,"Gets a specific user by ID as member of the Planner Roster"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner roster member get --rosterId tYqYlNd6eECmsNhN_fcq85cAGAnd --userId d049a857-f1c3-4fb3-a629-d8cfb3bd7275\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "b3a1be03-54a5-43d2-b4fb-6562fe9bec0b",\n  "userId": "2056d2f6-3257-4253-8cfc-b73393e414e5",\n  "tenantId": "5b7b813c-2339-48cd-8c51-bd4fcb269420",\n  "roles": []\n}\n'))),(0,n.kt)(s.Z,{value:"Text",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"id      : b3a1be03-54a5-43d2-b4fb-6562fe9bec0b\nroles   : []\ntenantId: 5b7b813c-2339-48cd-8c51-bd4fcb269420\nuserId  : 2056d2f6-3257-4253-8cfc-b73393e414e5\n"))),(0,n.kt)(s.Z,{value:"CSV",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"id,userId,tenantId,roles\nb3a1be03-54a5-43d2-b4fb-6562fe9bec0b,2056d2f6-3257-4253-8cfc-b73393e414e5,5b7b813c-2339-48cd-8c51-bd4fcb269420,[]\n"))),(0,n.kt)(s.Z,{value:"Markdown",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},'# planner roster member get --rosterId "tYqYlNd6eECmsNhN_fcq85cAGAnd" --userId "2056d2f6-3257-4253-8cfc-b73393e414e5"\n\nDate: 18/2/2023\n\n## b3a1be03-54a5-43d2-b4fb-6562fe9bec0b\n\nProperty | Value\n---------|-------\nid | b3a1be03-54a5-43d2-b4fb-6562fe9bec0b\nuserId | 2056d2f6-3257-4253-8cfc-b73393e414e5\ntenantId | 5b7b813c-2339-48cd-8c51-bd4fcb269420\nroles | []\n')))))}f.isMDXComponent=!0}}]);