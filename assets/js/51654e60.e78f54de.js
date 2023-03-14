"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[55441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(n),p=l,b=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return n?o.createElement(b,a(a({ref:t},c),{},{components:n})):o.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:l,a[1]=u;for(var i=2;i<r;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>u});var o=n(87462),l=(n(67294),n(3905));const r={toc:[]},a="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(a,(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-h, --help [help]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,l.kt)("code",null,"options"),", ",(0,l.kt)("code",null,"examples"),", ",(0,l.kt)("code",null,"remarks"),", ",(0,l.kt)("code",null,"response"),", ",(0,l.kt)("code",null,"full"),". Default is ",(0,l.kt)("code",null,"full"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--query [query]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"JMESPath query string. See ",(0,l.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-o, --output [output]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output type. ",(0,l.kt)("code",null,"json"),", ",(0,l.kt)("code",null,"text"),", ",(0,l.kt)("code",null,"csv"),", ",(0,l.kt)("code",null,"md"),". Default is ",(0,l.kt)("code",null,"json"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--verbose"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with verbose logging.")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--debug"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with debug logging."))))}u.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294),l=n(86010);const r={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return o.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,a),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(87462),l=n(67294),r=n(86010),a=n(12466),u=n(56697),s=n(91980),i=n(67392),c=n(50012);function d(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:l}}=e;return{value:t,label:n,attributes:o,default:l}}))}function m(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const o=(0,u.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=m(e),[a,u]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[s,i]=b({queryString:n,groupId:o}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,c.Nk)(n);return[o,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),k=(()=>{const e=s??d;return p({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),f(e)}),[i,f,r]),tabValues:r}}var k=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),o=i[n].value;o!==u&&(d(t),s(o))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:a}=e;return l.createElement("li",(0,o.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},a,{className:(0,r.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":u===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:o}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===o));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function v(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},l.createElement(y,(0,o.Z)({},e,t)),l.createElement(h,(0,o.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return l.createElement(v,(0,o.Z)({key:String(t)},e))}},26334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var o=n(87462),l=(n(67294),n(3905)),r=n(37884),a=n(74866),u=n(85162);const s={},i="outlook roomlist list",c={unversionedId:"cmd/outlook/roomlist/roomlist-list",id:"cmd/outlook/roomlist/roomlist-list",title:"outlook roomlist list",description:"Get a collection of available roomlists",source:"@site/docs/cmd/outlook/roomlist/roomlist-list.mdx",sourceDirName:"cmd/outlook/roomlist",slug:"/cmd/outlook/roomlist/roomlist-list",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/roomlist/roomlist-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/outlook/roomlist/roomlist-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"outlook room list",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/room/room-list"},next:{title:"planner bucket add",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-add"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:m},b="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"outlook-roomlist-list"},"outlook roomlist list"),(0,l.kt)("p",null,"Get a collection of available roomlists"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook roomlist list [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)(r.ZP,{mdxType:"Global"}),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Get all roomlists in your tenant"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook roomlist list\n")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)(a.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "5502bfbd-83f0-4b31-aa8c-5aebeda06091",\n    "emailAddress": "RoomsBuilding1@contoso.com",\n    "displayName": "Rooms building 1",\n    "geoCoordinates": null,\n    "phone": "",\n    "address": {\n      "street": "Microsoft Way 1",\n      "city": "Redmond",\n      "state": "Washington",\n      "countryOrRegion": "US",\n      "postalCode": "98053"\n    }\n  }\n]\n'))),(0,l.kt)(u.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"displayName : Rooms building 1\nemailAddress: RoomsBuilding1@contoso.com\nid          : 5502bfbd-83f0-4b31-aa8c-5aebeda06091\nphone       :\n"))),(0,l.kt)(u.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"id,displayName,phone,emailAddress\n5502bfbd-83f0-4b31-aa8c-5aebeda06091,Rooms building 1,,RoomsBuilding1@contoso.com\n"))),(0,l.kt)(u.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},'# outlook roomlist list\n\nDate: 27/1/2023\n\n## Rooms building 1 (5502bfbd-83f0-4b31-aa8c-5aebeda06091)\n\nProperty | Value\n---------|-------\nid | 5502bfbd-83f0-4b31-aa8c-5aebeda06091\nemailAddress | RoomsBuilding1@contoso.com\ndisplayName | Rooms building 1\ngeoCoordinates | null\nphone |\naddress | {"street":"Microsoft Way 1","city":"Redmond","state":"Washington","countryOrRegion":"US","postalCode":"98053"}\n')))))}f.isMDXComponent=!0}}]);