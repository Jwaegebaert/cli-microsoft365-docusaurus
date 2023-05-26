"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[7582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=u(n),p=r,f=c["".concat(i,".").concat(p)]||c[p]||m[p]||l;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[c]="string"==typeof e?e:r,o[1]=d;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),d=n(56697),i=n(91980),u=n(67392),s=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,d.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=f({queryString:n,groupId:a}),[c,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=i??c;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&d(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var v=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:d,selectValue:i,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==d&&(c(t),i(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,key:t,ref:e=>s.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":d===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function _(e){const t=(0,v.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},26054:(e,t,n)=>{n.d(t,{ZP:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]},o="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}d.isMDXComponent=!0},789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(26054),o=n(74866),d=n(85162);const i={},u="pp aibuildermodel list",s={unversionedId:"cmd/pp/aibuildermodel/aibuildermodel-list",id:"cmd/pp/aibuildermodel/aibuildermodel-list",title:"pp aibuildermodel list",description:"List available AI builder models in the specified Power Platform environment",source:"@site/docs/cmd/pp/aibuildermodel/aibuildermodel-list.mdx",sourceDirName:"cmd/pp/aibuildermodel",slug:"/cmd/pp/aibuildermodel/aibuildermodel-list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/aibuildermodel/aibuildermodel-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/aibuildermodel/aibuildermodel-list.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp aibuildermodel get",permalink:"/cli-microsoft365-docusaurus/cmd/pp/aibuildermodel/aibuildermodel-get"},next:{title:"pp aibuildermodel remove",permalink:"/cli-microsoft365-docusaurus/cmd/pp/aibuildermodel/aibuildermodel-remove"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:m},f="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pp-aibuildermodel-list"},"pp aibuildermodel list"),(0,r.kt)("p",null,"List available AI builder models in the specified Power Platform environment"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pp aibuildermodel list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-e, --environment <environment>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The name of the environment")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--asAdmin"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Run the command as admin for environments you do not have explicitly assigned permissions to"))),(0,r.kt)(l.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List all AI Builder models in a specific environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp aibuildermodel list --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5"\n')),(0,r.kt)("p",null,"List all AI Builder models in a specific environment as admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp aibuildermodel list --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --asAdmin\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "statecode": 0,\n    "_msdyn_templateid_value": "10707e4e-1d56-e911-8194-000d3a6cd5a5",\n    "msdyn_modelcreationcontext": "{}",\n    "createdon": "2022-11-29T11:58:45Z",\n    "_ownerid_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "modifiedon": "2022-11-29T11:58:45Z",\n    "msdyn_sharewithorganizationoncreate": false,\n    "msdyn_aimodelidunique": "b0328b67-47e2-4202-8189-e617ec9a88bd",\n    "solutionid": "fd140aae-4df4-11dd-bd17-0019b9312238",\n    "ismanaged": false,\n    "versionnumber": 1458121,\n    "msdyn_name": "Document Processing 11/29/2022, 12:58:43 PM",\n    "introducedversion": "1.0",\n    "statuscode": 0,\n    "_modifiedby_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "overwritetime": "1900-01-01T00:00:00Z",\n    "componentstate": 0,\n    "_createdby_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "_owningbusinessunit_value": "6da087c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "_owninguser_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "msdyn_aimodelid": "08ffffbe-ec1c-4e64-b64b-dd1db926c613",\n    "_msdyn_activerunconfigurationid_value": null,\n    "overriddencreatedon": null,\n    "_msdyn_retrainworkflowid_value": null,\n    "importsequencenumber": null,\n    "_msdyn_scheduleinferenceworkflowid_value": null,\n    "_modifiedonbehalfby_value": null,\n    "utcconversiontimezonecode": null,\n    "_createdonbehalfby_value": null,\n    "_owningteam_value": null,\n    "timezoneruleversionnumber": null,\n    "iscustomizable": {\n      "Value": true,\n      "CanBeChanged": true,\n      "ManagedPropertyLogicalName": "iscustomizableanddeletable"\n    }\n  }\n]\n'))),(0,r.kt)(d.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"createdon             modifiedon            msdyn_aimodelid                       msdyn_name\n--------------------  --------------------  ------------------------------------  -------------------------------------------\n2022-10-25T14:44:48Z  2022-10-25T14:44:48Z  08ffffbe-ec1c-4e64-b64b-dd1db926c613  Document Processing 11/29/2022, 12:58:43 PM\n"))),(0,r.kt)(d.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'msdyn_name,msdyn_aimodelid,createdon,modifiedon\n"Document Processing 11/29/2022, 12:58:43 PM",08ffffbe-ec1c-4e64-b64b-dd1db926c613,2022-11-29T11:58:45Z,2022-11-29T11:58:45Z\n'))),(0,r.kt)(d.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# pp aibuildermodel list --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5"\n\nDate: 9/1/2023\n\nProperty | Value\n---------|-------\nstatecode | 0\n\\_msdyn\\_templateid\\_value | 10707e4e-1d56-e911-8194-000d3a6cd5a5\nmsdyn\\_modelcreationcontext | {}\ncreatedon | 2022-11-29T11:58:45Z\n\\_ownerid\\_value | 5fa787c1-1c4d-ed11-bba1-000d3a2caf7f\nmodifiedon | 2022-11-29T11:58:45Z\nmsdyn\\_sharewithorganizationoncreate | false\nmsdyn\\_aimodelidunique | b0328b67-47e2-4202-8189-e617ec9a88bd\nsolutionid | fd140aae-4df4-11dd-bd17-0019b9312238\nismanaged | false\nversionnumber | 1458121\nmsdyn\\_name | Document Processing 11/29/2022, 12:58:43 PM\nintroducedversion | 1.0\nstatuscode | 0\n\\_modifiedby\\_value | 5fa787c1-1c4d-ed11-bba1-000d3a2caf7f\noverwritetime | 1900-01-01T00:00:00Z\ncomponentstate | 0\n\\_createdby\\_value | 5fa787c1-1c4d-ed11-bba1-000d3a2caf7f\n\\_owningbusinessunit\\_value | 6da087c1-1c4d-ed11-bba1-000d3a2caf7f\n\\_owninguser\\_value | 5fa787c1-1c4d-ed11-bba1-000d3a2caf7f\nmsdyn\\_aimodelid | 08ffffbe-ec1c-4e64-b64b-dd1db926c613\n\\_msdyn\\_activerunconfigurationid\\_value | null\noverriddencreatedon | null\n\\_msdyn\\_retrainworkflowid\\_value | null\nimportsequencenumber | null\n\\_msdyn\\_scheduleinferenceworkflowid\\_value | null\n\\_modifiedonbehalfby\\_value | null\nutcconversiontimezonecode | null\n\\_createdonbehalfby\\_value | null\n\\_owningteam\\_value | null\ntimezoneruleversionnumber | null\niscustomizable | {"Value":true,"CanBeChanged":true,"ManagedPropertyLogicalName":"iscustomizableanddeletable"}\n')))))}b.isMDXComponent=!0}}]);