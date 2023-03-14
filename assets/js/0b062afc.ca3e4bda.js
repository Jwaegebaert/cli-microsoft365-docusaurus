"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[36756],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),i=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=i(t),p=l,b=s["".concat(u,".").concat(p)]||s[p]||m[p]||r;return t?a.createElement(b,o(o({ref:n},c),{},{components:t})):a.createElement(b,o({ref:n},c))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=p;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d[s]="string"==typeof e?e:l,o[1]=d;for(var i=2;i<r;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},37884:(e,n,t)=>{t.d(n,{ZP:()=>d});var a=t(87462),l=(t(67294),t(3905));const r={toc:[]},o="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(o,(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-h, --help [help]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,l.kt)("code",null,"options"),", ",(0,l.kt)("code",null,"examples"),", ",(0,l.kt)("code",null,"remarks"),", ",(0,l.kt)("code",null,"response"),", ",(0,l.kt)("code",null,"full"),". Default is ",(0,l.kt)("code",null,"full"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--query [query]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"JMESPath query string. See ",(0,l.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-o, --output [output]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output type. ",(0,l.kt)("code",null,"json"),", ",(0,l.kt)("code",null,"text"),", ",(0,l.kt)("code",null,"csv"),", ",(0,l.kt)("code",null,"md"),". Default is ",(0,l.kt)("code",null,"json"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--verbose"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with verbose logging.")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--debug"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with debug logging."))))}d.isMDXComponent=!0},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),l=t(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>_});var a=t(87462),l=t(67294),r=t(86010),o=t(12466),d=t(56697),u=t(91980),i=t(67392),c=t(50012);function s(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}function m(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??s(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,d.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=m(e),[o,d]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,i]=b({queryString:t,groupId:a}),[s,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Nk)(t);return[a,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),v=(()=>{const e=u??s;return p({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{v&&d(v)}),[v]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),i(e),f(e)}),[i,f,r]),tabValues:r}}var v=t(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:d,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==d&&(s(n),u(a))},p=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},i.map((e=>{let{value:n,label:t,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:d===n?0:-1,"aria-selected":d===n,key:n,ref:e=>c.push(e),onKeyDown:p,onClick:m},o,{className:(0,r.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":d===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function h(e){const n=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},l.createElement(g,(0,a.Z)({},e,n)),l.createElement(y,(0,a.Z)({},e,n)))}function _(e){const n=(0,v.Z)();return l.createElement(h,(0,a.Z)({key:String(n)},e))}},64304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var a=t(87462),l=(t(67294),t(3905)),r=t(37884),o=t(74866),d=t(85162);const u={},i="pp aibuildermodel get",c={unversionedId:"cmd/pp/aibuildermodel/aibuildermodel-get",id:"cmd/pp/aibuildermodel/aibuildermodel-get",title:"pp aibuildermodel get",description:"Gets a specific AI builder models in the specified Power Platform environment",source:"@site/docs/cmd/pp/aibuildermodel/aibuildermodel-get.mdx",sourceDirName:"cmd/pp/aibuildermodel",slug:"/cmd/pp/aibuildermodel/aibuildermodel-get",permalink:"/cli-microsoft365-docusaurus/cmd/pp/aibuildermodel/aibuildermodel-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/aibuildermodel/aibuildermodel-get.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"flow run resubmit",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-resubmit"},next:{title:"pp aibuildermodel list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/aibuildermodel/aibuildermodel-list"}},s={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:m},b="wrapper";function f(e){let{components:n,...t}=e;return(0,l.kt)(b,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pp-aibuildermodel-get"},"pp aibuildermodel get"),(0,l.kt)("p",null,"Gets a specific AI builder models in the specified Power Platform environment"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pp aibuildermodel get [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("dl",null,(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-e, --environment <environment>"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"The name of the environment")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"The id of the AI Builder model. Specify either ",(0,l.kt)("code",{parentName:"p"},"id")," or ",(0,l.kt)("code",{parentName:"p"},"name")," but not both")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"The name of the AI Builder model. Specify either ",(0,l.kt)("code",{parentName:"p"},"id")," or ",(0,l.kt)("code",{parentName:"p"},"name")," but not both")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--asAdmin"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Run the command as admin for environments you do not have explicitly assigned permissions to"))),(0,l.kt)(r.ZP,{mdxType:"Global"}),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Get an AI Builder model in a specific environment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp aibuildermodel get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --name "Document Processing 11/29/2022, 12:58:43 PM"\n')),(0,l.kt)("p",null,"Get an AI Builder models in a specific environment by id as admin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp aibuildermodel get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --id "08ffffbe-ec1c-4e64-b64b-dd1db926c613" --asAdmin\n')),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "statecode": 0,\n  "_msdyn_templateid_value": "10707e4e-1d56-e911-8194-000d3a6cd5a5",\n  "msdyn_modelcreationcontext": "{}",\n  "createdon": "2022-11-29T11:58:45Z",\n  "_ownerid_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "modifiedon": "2022-11-29T11:58:45Z",\n  "msdyn_sharewithorganizationoncreate": false,\n  "msdyn_aimodelidunique": "b0328b67-47e2-4202-8189-e617ec9a88bd",\n  "solutionid": "fd140aae-4df4-11dd-bd17-0019b9312238",\n  "ismanaged": false,\n  "versionnumber": 1458121,\n  "msdyn_name": "Document Processing 11/29/2022, 12:58:43 PM",\n  "introducedversion": "1.0",\n  "statuscode": 0,\n  "_modifiedby_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "overwritetime": "1900-01-01T00:00:00Z",\n  "componentstate": 0,\n  "_createdby_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "_owningbusinessunit_value": "6da087c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "_owninguser_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "msdyn_aimodelid": "08ffffbe-ec1c-4e64-b64b-dd1db926c613",\n  "_msdyn_activerunconfigurationid_value": null,\n  "overriddencreatedon": null,\n  "_msdyn_retrainworkflowid_value": null,\n  "importsequencenumber": null,\n  "_msdyn_scheduleinferenceworkflowid_value": null,\n  "_modifiedonbehalfby_value": null,\n  "utcconversiontimezonecode": null,\n  "_createdonbehalfby_value": null,\n  "_owningteam_value": null,\n  "timezoneruleversionnumber": null,\n  "iscustomizable": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "iscustomizableanddeletable"\n  }\n}\n'))),(0,l.kt)(d.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"createdon             modifiedon            msdyn_aimodelid                       msdyn_name\n--------------------  --------------------  ------------------------------------  -------------------------------------------\n2022-10-25T14:44:48Z  2022-10-25T14:44:48Z  08ffffbe-ec1c-4e64-b64b-dd1db926c613  Document Processing 11/29/2022, 12:58:43 PM\n"))),(0,l.kt)(d.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},'msdyn_name,msdyn_aimodelid,createdon,modifiedon\n"Document Processing 11/29/2022, 12:58:43 PM",08ffffbe-ec1c-4e64-b64b-dd1db926c613,2022-11-29T11:58:45Z,2022-11-29T11:58:45Z\n'))),(0,l.kt)(d.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},'# pp aibuildermodel get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --id "08ffffbe-ec1c-4e64-b64b-dd1db926c613"\n\nDate: 6/2/2023\n\nProperty | Value\n---------|-------\noverwritetime | 1900-01-01T00:00:00Z\nmsdyn\\_aimodelid | 08ffffbe-ec1c-4e64-b64b-dd1db926c613\n\\_owningbusinessunit\\_value | 6da087c1-1c4d-ed11-bba1-000d3a2caf7f\nsolutionid | fd140aae-4df4-11dd-bd17-0019b9312238\nmsdyn\\_aimodelidunique | b0802b54-1dbe-4bb0-812a-8579549e9144\nintroducedversion | 1.0\n\\_owninguser\\_value | 2311d2bd-1b41-e911-a9aa-000d3a2d57c3\nmsdyn\\_name | Document Processing 11/29/2022, 12:58:43 PM\nstatecode | 0\nstatuscode | 0\nismanaged | false\n\\_ownerid\\_value | 2311d2bd-1b41-e911-a9aa-000d3a2d57c3\ncomponentstate | 0\nmodifiedon | 2019-09-20T13:34:04Z\n\\_msdyn\\_templateid\\_value | 10707e4e-1d56-e911-8194-000d3a6cd5a5\n\\_modifiedby\\_value | 2311d2bd-1b41-e911-a9aa-000d3a2d57c3\nversionnumber | 8076095\ncreatedon | 2019-09-20T13:34:04Z\n\\_createdby\\_value | 2311d2bd-1b41-e911-a9aa-000d3a2d57c3\n\\_msdyn\\_activerunconfigurationid\\_value | null\noverriddencreatedon | null\n\\_msdyn\\_retrainworkflowid\\_value | null\nmsdyn\\_modelcreationcontext | null\nimportsequencenumber | null\nmsdyn\\_sharewithorganizationoncreate | null\n\\_msdyn\\_scheduleinferenceworkflowid\\_value | null\n\\_modifiedonbehalfby\\_value | null\nutcconversiontimezonecode | null\n\\_createdonbehalfby\\_value | null\n\\_owningteam\\_value | null\ntimezoneruleversionnumber | null\niscustomizable | {"Value":true,"CanBeChanged":true,"ManagedPropertyLogicalName":"iscustomizableanddeletable"}\n')))))}f.isMDXComponent=!0}}]);