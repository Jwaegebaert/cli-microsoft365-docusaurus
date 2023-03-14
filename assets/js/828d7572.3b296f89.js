"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[60572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={toc:[]},o="wrapper";function i(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-h, --help [help]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",null,"options"),", ",(0,a.kt)("code",null,"examples"),", ",(0,a.kt)("code",null,"remarks"),", ",(0,a.kt)("code",null,"response"),", ",(0,a.kt)("code",null,"full"),". Default is ",(0,a.kt)("code",null,"full"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--query [query]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"JMESPath query string. See ",(0,a.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-o, --output [output]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output type. ",(0,a.kt)("code",null,"json"),", ",(0,a.kt)("code",null,"text"),", ",(0,a.kt)("code",null,"csv"),", ",(0,a.kt)("code",null,"md"),". Default is ",(0,a.kt)("code",null,"json"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--verbose"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with verbose logging.")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--debug"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with debug logging."))))}i.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),l=n(86010),o=n(12466),i=n(56697),u=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var v=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return a.createElement(g,(0,r.Z)({key:String(t)},e))}},54456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),l=n(37884),o=n(74866),i=n(85162);const u={},s="purview retentioneventtype list",c={unversionedId:"cmd/purview/retentioneventtype/retentioneventtype-list",id:"cmd/purview/retentioneventtype/retentioneventtype-list",title:"purview retentioneventtype list",description:"Get a list of retention event types",source:"@site/docs/cmd/purview/retentioneventtype/retentioneventtype-list.mdx",sourceDirName:"cmd/purview/retentioneventtype",slug:"/cmd/purview/retentioneventtype/retentioneventtype-list",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentioneventtype/retentioneventtype-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/purview/retentioneventtype/retentioneventtype-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"purview retentioneventtype get",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentioneventtype/retentioneventtype-get"},next:{title:"purview retentioneventtype remove",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentioneventtype/retentioneventtype-remove"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Remarks",id:"remarks",level:2},{value:"More information",id:"more-information",level:2},{value:"Response",id:"response",level:2}],m={toc:d},f="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"purview-retentioneventtype-list"},"purview retentioneventtype list"),(0,a.kt)("p",null,"Get a list of retention event types"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentioneventtype list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)(l.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get a list of retention event types"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentioneventtype list\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This command is based on a Microsoft Graph API that is currently in preview and is subject to change once the API reached general availability.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This command currently only supports delegated permissions.")),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("p",null,"This command is part of a series of commands that have to do with event-based retention. Event-based retention is about starting a retention period when a specific event occurs, instead of the moment a document was labeled or created."),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "displayName": "Contract Expiry",\n    "description": "",\n    "createdDateTime": "2023-02-02T15:47:54Z",\n    "lastModifiedDateTime": "2023-02-02T15:47:54Z",\n    "id": "81fa91bd-66cd-4c6c-b0cb-71f37210dc74",\n    "createdBy": {\n      "user": {\n        "id": "36155f4e-bdbd-4101-ba20-5e78f5fba9a9",\n        "displayName": null\n      }\n    },\n    "lastModifiedBy": {\n      "user": {\n        "id": "36155f4e-bdbd-4101-ba20-5e78f5fba9a9",\n        "displayName": null\n      }\n    }\n  }\n]\n'))),(0,a.kt)(i.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"id                                    displayName            createdDateTime\n------------------------------------  ---------------------  --------------------\n81fa91bd-66cd-4c6c-b0cb-71f37210dc74  Contract Expiry  2023-02-02T15:47:54Z\n"))),(0,a.kt)(i.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"id,displayName,createdDateTime\n81fa91bd-66cd-4c6c-b0cb-71f37210dc74,Contract Expiry,2023-02-02T15:47:54Z\n"))),(0,a.kt)(i.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'# purview retentioneventtype list\n\nDate: 8/2/2023\n\n## Contract Expiry (81fa91bd-66cd-4c6c-b0cb-71f37210dc74)\n\nProperty | Value\n---------|-------\ndisplayName | Contract Expiry\ndescription | null\ncreatedDateTime | 2023-02-02T15:47:54Z\nlastModifiedDateTime | 2023-02-02T15:47:54Z\nid | 81fa91bd-66cd-4c6c-b0cb-71f37210dc74\ncreatedBy | {"user":{"id":"36155f4e-bdbd-4101-ba20-5e78f5fba9a9","displayName":null}}\nlastModifiedBy | {"user":{"id":"36155f4e-bdbd-4101-ba20-5e78f5fba9a9","displayName":null}}\n')))))}b.isMDXComponent=!0}}]);