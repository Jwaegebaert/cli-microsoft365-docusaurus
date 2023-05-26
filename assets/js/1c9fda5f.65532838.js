"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[66587],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,b=p["".concat(d,".").concat(m)]||p[m]||s[m]||o;return a?n.createElement(b,l(l({ref:t},i),{},{components:a})):n.createElement(b,l({ref:t},i))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),c=a(56697),d=a(91980),u=a(67392),i=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function s(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,d._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=s(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[d,u]=b({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,i.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=d??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:c,selectValue:d,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),s=e=>{const t=e.currentTarget,a=i.indexOf(t),n=u[a].value;n!==c&&(p(t),d(n))},m=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:s},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":c===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]},l="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}c.isMDXComponent=!0},6216:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),o=a(26054),l=a(74866),c=a(85162);const d={},u="pp chatbot get",i={unversionedId:"cmd/pp/chatbot/chatbot-get",id:"cmd/pp/chatbot/chatbot-get",title:"pp chatbot get",description:"Get information about the specified chatbot",source:"@site/docs/cmd/pp/chatbot/chatbot-get.mdx",sourceDirName:"cmd/pp/chatbot",slug:"/cmd/pp/chatbot/chatbot-get",permalink:"/cli-microsoft365-docusaurus/cmd/pp/chatbot/chatbot-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/chatbot/chatbot-get.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp card remove",permalink:"/cli-microsoft365-docusaurus/cmd/pp/card/card-remove"},next:{title:"pp chatbot list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/chatbot/chatbot-list"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:s},b="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pp-chatbot-get"},"pp chatbot get"),(0,r.kt)("p",null,"Get information about the specified chatbot"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pp chatbot get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-e, --environment <environment>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The name of the environment.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The id of the chatbot. Specify either ",(0,r.kt)("code",{parentName:"p"},"id")," or ",(0,r.kt)("code",{parentName:"p"},"name")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The name of the chatbot. Specify either ",(0,r.kt)("code",{parentName:"p"},"id")," or ",(0,r.kt)("code",{parentName:"p"},"name")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--asAdmin"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Run the command as admin for environments you do not have explicitly assigned permissions to."))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get a specific chatbot in a specific environment based on name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp chatbot get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --name "CLI 365 Chatbot"\n')),(0,r.kt)("p",null,"Get a specific chatbot in a specific environment based on name as admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp chatbot get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --name "CLI 365 Chatbot" --asAdmin\n')),(0,r.kt)("p",null,"Get a specific chatbot in a specific environment based on id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp chatbot get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --id "3a081d91-5ea8-40a7-8ac9-abbaa3fcb893"\n')),(0,r.kt)("p",null,"Get a specific chatbot in a specific environment based on id as admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp chatbot get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --id "3a081d91-5ea8-40a7-8ac9-abbaa3fcb893" --asAdmin\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "authenticationtrigger": 0,\n  "_owningbusinessunit_value": "6da087c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "statuscode": 1,\n  "createdon": "2022-11-19T10:42:22Z",\n  "statecode": 0,\n  "schemaname": "new_bot_23f5f58697fd43d595eb451c9797a53d",\n  "_ownerid_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "overwritetime": "1900-01-01T00:00:00Z",\n  "name": "CLI 365 Chatbot",\n  "solutionid": "fd140aae-4df4-11dd-bd17-0019b9312238",\n  "ismanaged": false,\n  "versionnumber": 1421457,\n  "language": 1033,\n  "_modifiedby_value": "5f91d7a7-5f46-494a-80fa-5c18b0221351",\n  "_modifiedonbehalfby_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "modifiedon": "2022-11-19T10:42:24Z",\n  "componentstate": 0,\n  "botid": "3a081d91-5ea8-40a7-8ac9-abbaa3fcb893",\n  "_createdby_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "componentidunique": "cdcd6496-e25d-4ad1-91cf-3f4d547fdd23",\n  "authenticationmode": 1,\n  "_owninguser_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "accesscontrolpolicy": 0,\n  "runtimeprovider": 0,\n  "_publishedby_value": "John Doe",\n  "authenticationconfiguration": null,\n  "authorizedsecuritygroupids": null,\n  "overriddencreatedon": null,\n  "applicationmanifestinformation": null,\n  "importsequencenumber": null,\n  "synchronizationstatus": null,\n  "template": null,\n  "_providerconnectionreferenceid_value": null,\n  "configuration": null,\n  "utcconversiontimezonecode": null,\n  "publishedon": "2022-11-19T10:43:24Z",\n  "_createdonbehalfby_value": null,\n  "iconbase64": null,\n  "supportedlanguages": null,\n  "_owningteam_value": null,\n  "timezoneruleversionnumber": null,\n  "iscustomizable": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "iscustomizableanddeletable"\n  }\n}\n'))),(0,r.kt)(c.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"botid      : 3a081d91-5ea8-40a7-8ac9-abbaa3fcb893\ncreatedon  : 2022-11-19T10:42:22Z\nmodifiedon : 2022-11-19T10:42:24Z\nname       : CLI 365 Chatbot\npublishedon: 2022-11-19T10:43:24Z\n"))),(0,r.kt)(c.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"name,botid,publishedon,createdon,modifiedon\nCLI 365 Chatbot,3a081d91-5ea8-40a7-8ac9-abbaa3fcb893,2022-11-19T10:43:24Z,2022-11-19T10:42:22Z,2022-11-19T10:42:24Z\n"))),(0,r.kt)(c.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# pp chatbot get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --id "3a081d91-5ea8-40a7-8ac9-abbaa3fcb893"\n\nDate: 9/1/2023\n\n## CLI 365 Chatbot\n\nProperty | Value\n---------|-------\nauthenticationtrigger | 0\n\\_owningbusinessunit\\_value | 6da087c1-1c4d-ed11-bba1-000d3a2caf7f\nstatuscode | 1\ncreatedon | 2022-11-19T10:42:22Z\nstatecode | 0\nschemaname | new\\_bot\\_23f5f58697fd43d595eb451c9797a53d\n\\_ownerid\\_value | 5fa787c1-1c4d-ed11-bba1-000d3a2caf7f\noverwritetime | 1900-01-01T00:00:00Z\nname | CLI 365 Chatbot\nsolutionid | fd140aae-4df4-11dd-bd17-0019b9312238\nismanaged | false\nversionnumber | 1445843\nlanguage | 1033\n\\_modifiedby\\_value | 5f91d7a7-5f46-494a-80fa-5c18b0221351\n\\_modifiedonbehalfby\\_value | 5fa787c1-1c4d-ed11-bba1-000d3a2caf7f\nmodifiedon | 2022-11-19T10:42:24Z\ncomponentstate | 0\nbotid | 3a081d91-5ea8-40a7-8ac9-abbaa3fcb893\n\\_createdby\\_value | 5fa787c1-1c4d-ed11-bba1-000d3a2caf7f\ncomponentidunique | cdcd6496-e25d-4ad1-91cf-3f4d547fdd23\nauthenticationmode | 1\n\\_owninguser\\_value | 5fa787c1-1c4d-ed11-bba1-000d3a2caf7f\naccesscontrolpolicy | 0\nruntimeprovider | 0\n\\_publishedby\\_value | null\nauthenticationconfiguration | null\nauthorizedsecuritygroupids | null\noverriddencreatedon | null\napplicationmanifestinformation | null\nimportsequencenumber | null\nsynchronizationstatus | null\ntemplate | null\n\\_providerconnectionreferenceid\\_value | null\nconfiguration | null\nutcconversiontimezonecode | null\npublishedon | null\n\\_createdonbehalfby\\_value | null\niconbase64 | null\nsupportedlanguages | null\n\\_owningteam\\_value | null\ntimezoneruleversionnumber | null\niscustomizable | {"Value":true,"CanBeChanged":true,"ManagedPropertyLogicalName":"iscustomizableanddeletable"}\n')))))}f.isMDXComponent=!0}}]);