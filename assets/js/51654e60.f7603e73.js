"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[55441],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(a),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),o=a(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),o=a(67294),r=a(86010),l=a(12466),s=a(56697),u=a(91980),i=a(67392),c=a(50012);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[u,i]=f({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=u??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),b(e)}),[i,b,r]),tabValues:r}}var k=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==s&&(d(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=b(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(y,(0,n.Z)({},e,t)),o.createElement(h,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return o.createElement(v,(0,n.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={toc:[]},l="wrapper";function s(e){let{components:t,...a}=e;return(0,o.kt)(l,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",{parentName:"p"},"options"),", ",(0,o.kt)("code",{parentName:"p"},"examples"),", ",(0,o.kt)("code",{parentName:"p"},"remarks"),", ",(0,o.kt)("code",{parentName:"p"},"response"),", ",(0,o.kt)("code",{parentName:"p"},"full"),". Default is ",(0,o.kt)("code",{parentName:"p"},"full"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--query [query]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,o.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output type. ",(0,o.kt)("code",{parentName:"p"},"json"),", ",(0,o.kt)("code",{parentName:"p"},"text"),", ",(0,o.kt)("code",{parentName:"p"},"csv"),", ",(0,o.kt)("code",{parentName:"p"},"md"),". Default ",(0,o.kt)("code",{parentName:"p"},"json"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--verbose"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--debug"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}s.isMDXComponent=!0},26334:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),r=a(26054),l=a(74866),s=a(85162);const u={},i="outlook roomlist list",c={unversionedId:"cmd/outlook/roomlist/roomlist-list",id:"cmd/outlook/roomlist/roomlist-list",title:"outlook roomlist list",description:"Get a collection of available roomlists",source:"@site/docs/cmd/outlook/roomlist/roomlist-list.mdx",sourceDirName:"cmd/outlook/roomlist",slug:"/cmd/outlook/roomlist/roomlist-list",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/roomlist/roomlist-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/outlook/roomlist/roomlist-list.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"outlook room list",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/room/room-list"},next:{title:"planner bucket add",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-add"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:p},f="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outlook-roomlist-list"},"outlook roomlist list"),(0,o.kt)("p",null,"Get a collection of available roomlists"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook roomlist list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)(r.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get all roomlists in your tenant"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook roomlist list\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "5502bfbd-83f0-4b31-aa8c-5aebeda06091",\n    "emailAddress": "RoomsBuilding1@contoso.com",\n    "displayName": "Rooms building 1",\n    "geoCoordinates": null,\n    "phone": "",\n    "address": {\n      "street": "Microsoft Way 1",\n      "city": "Redmond",\n      "state": "Washington",\n      "countryOrRegion": "US",\n      "postalCode": "98053"\n    }\n  }\n]\n'))),(0,o.kt)(s.Z,{value:"Text",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"displayName : Rooms building 1\nemailAddress: RoomsBuilding1@contoso.com\nid          : 5502bfbd-83f0-4b31-aa8c-5aebeda06091\nphone       :\n"))),(0,o.kt)(s.Z,{value:"CSV",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"id,displayName,phone,emailAddress\n5502bfbd-83f0-4b31-aa8c-5aebeda06091,Rooms building 1,,RoomsBuilding1@contoso.com\n"))),(0,o.kt)(s.Z,{value:"Markdown",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'# outlook roomlist list\n\nDate: 27/1/2023\n\n## Rooms building 1 (5502bfbd-83f0-4b31-aa8c-5aebeda06091)\n\nProperty | Value\n---------|-------\nid | 5502bfbd-83f0-4b31-aa8c-5aebeda06091\nemailAddress | RoomsBuilding1@contoso.com\ndisplayName | Rooms building 1\ngeoCoordinates | null\nphone |\naddress | {"street":"Microsoft Way 1","city":"Redmond","state":"Washington","countryOrRegion":"US","postalCode":"98053"}\n')))))}b.isMDXComponent=!0}}]);