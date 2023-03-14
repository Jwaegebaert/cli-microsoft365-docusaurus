"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[88579],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),i=d(a),m=r,b=i["".concat(c,".").concat(m)]||i[m]||p[m]||l;return a?n.createElement(b,o(o({ref:t},s),{},{components:a})):n.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[i]="string"==typeof e?e:r,o[1]=u;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={toc:[]},o="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}u.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),u=a(56697),c=a(91980),d=a(67392),s=a(50012);function i(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??i(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,d]=b({queryString:a,groupId:n}),[i,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=c??i;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var v=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:u,selectValue:c,tabValues:d}=e;const s=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=s.indexOf(t),n=d[a].value;n!==u&&(i(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":u===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function _(e){const t=(0,v.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},36124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(37884),o=a(74866),u=a(85162);const c={},d="pp dataverse table row list",s={unversionedId:"cmd/pp/dataverse/dataverse-table-row-list",id:"cmd/pp/dataverse/dataverse-table-row-list",title:"pp dataverse table row list",description:"Lists table rows for the given Dataverse table",source:"@site/docs/cmd/pp/dataverse/dataverse-table-row-list.mdx",sourceDirName:"cmd/pp/dataverse",slug:"/cmd/pp/dataverse/dataverse-table-row-list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/dataverse/dataverse-table-row-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/dataverse/dataverse-table-row-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"pp dataverse table remove",permalink:"/cli-microsoft365-docusaurus/cmd/pp/dataverse/dataverse-table-remove"},next:{title:"pp dataverse table row remove",permalink:"/cli-microsoft365-docusaurus/cmd/pp/dataverse/dataverse-table-row-remove"}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:p},b="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pp-dataverse-table-row-list"},"pp dataverse table row list"),(0,r.kt)("p",null,"Lists table rows for the given Dataverse table"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pp dataverse table row list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-e, --environment <environment>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The name of the environment")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--entitySetName [entitySetName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The entity set name of the table. Specify either ",(0,r.kt)("code",{parentName:"p"},"entitySetName")," or ",(0,r.kt)("code",{parentName:"p"},"tableName")," but not both")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--tableName [tableName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The name of the table. Specify either ",(0,r.kt)("code",{parentName:"p"},"entitySetName")," or ",(0,r.kt)("code",{parentName:"p"},"tableName")," but not both")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--asAdmin"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Run the command as admin for environments you do not have explicitly assigned permissions to"))),(0,r.kt)(l.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List all table rows for the given environment based on the entity set name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp dataverse table row list --environment "Default-2ca3eaa5-140f-4175-8261-3272edf9f339" --entitySetName "cr6c3_accounts"\n')),(0,r.kt)("p",null,"List all table rows for the given environment based on the table name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp dataverse table row list --environment "Default-2ca3eaa5-140f-4175-8261-3272edf9f339" --tableName "cr6c3_account"\n')),(0,r.kt)("p",null,"List all table rows for the given environment based on the entity set name as Admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp dataverse table row list --environment "Default-2ca3eaa5-140f-4175-8261-3272edf9f339" --entitySetName "cr6c3_accounts" --asAdmin\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "cr6c3_accountsid": "95c80273-3764-ed11-9561-000d3a4bbea4",\n    "_owningbusinessunit_value": "6da087c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "statecode": 0,\n    "statuscode": 1,\n    "_createdby_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "_ownerid_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "modifiedon": "2022-11-14T16:14:45Z",\n    "_owninguser_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "_modifiedby_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "versionnumber": 1413873,\n    "createdon": "2022-11-14T16:14:45Z",\n    "cr6c3_name": "Column1 value",\n    "overriddencreatedon": null,\n    "importsequencenumber": null,\n    "_modifiedonbehalfby_value": null,\n    "utcconversiontimezonecode": null,\n    "_createdonbehalfby_value": null,\n    "_owningteam_value": null,\n    "timezoneruleversionnumber": null\n  }\n]\n'))),(0,r.kt)(u.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"cr6c3_accountsid                       _owningbusinessunit_value             statecode  statuscode  _createdby_value                      _ownerid_value                        modifiedon            _owninguser_value                     _modifiedby_value                     versionnumber  createdon             cr6c3_name      overriddencreatedon  importsequencenumber  _modifiedonbehalfby_value  utcconversiontimezonecode  _createdonbehalfby_value  _owningteam_value  timezoneruleversionnumber\n------------------------------------  ------------------------------------  ---------  ----------  ------------------------------------  ------------------------------------  --------------------  ------------------------------------  ------------------------------------  -------------  --------------------  ----------      -------------------  --------------------  -------------------------  -------------------------  ------------------------  -----------------  -------------------------\n95c80273-3764-ed11-9561-000d3a4bbea4  6da087c1-1c4d-ed11-bba1-000d3a2caf7f  0          1           5fa787c1-1c4d-ed11-bba1-000d3a2caf7f  5fa787c1-1c4d-ed11-bba1-000d3a2caf7f  2022-11-14T16:14:45Z  5fa787c1-1c4d-ed11-bba1-000d3a2caf7f  5fa787c1-1c4d-ed11-bba1-000d3a2caf7f  1413873        2022-11-14T16:14:45Z  Column1 value   null                 null                  null                       null                       null                      null               null\n"))),(0,r.kt)(u.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"cr6c3_accountsid,_owningbusinessunit_value,statecode,statuscode,_createdby_value,_ownerid_value,modifiedon,_owninguser_value,_modifiedby_value,versionnumber,createdon,cr6c3_name,overriddencreatedon,importsequencenumber,_modifiedonbehalfby_value,utcconversiontimezonecode,_createdonbehalfby_value,_owningteam_value,timezoneruleversionnumber\n95c80273-3764-ed11-9561-000d3a4bbea4,6da087c1-1c4d-ed11-bba1-000d3a2caf7f,0,1,5fa787c1-1c4d-ed11-bba1-000d3a2caf7f,5fa787c1-1c4d-ed11-bba1-000d3a2caf7f,2022-11-14T16:14:45Z,5fa787c1-1c4d-ed11-bba1-000d3a2caf7f,5fa787c1-1c4d-ed11-bba1-000d3a2caf7f,1413873,2022-11-14T16:14:45Z,Column1 value,,,,,,,\n"))),(0,r.kt)(u.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# pp dataverse table row list --environment "Default-0cac6cda-2e04-4a3d-9c16-9c91470d7022" --tableName "cr6c3_accounts"\n\nDate: 9/1/2023\n\nProperty | Value\n---------|-------\ncr6c3\\_accountsid | 95c80273-3764-ed11-9561-000d3a4bbea4\n\\_owningbusinessunit\\_value | 6da087c1-1c4d-ed11-bba1-000d3a2caf7f\nstatecode | 0\nstatuscode | 1\n\\_createdby\\_value | 5fa787c1-1c4d-ed11-bba1-000d3a2caf7f\n\\_ownerid\\_value | 5fa787c1-1c4d-ed11-bba1-000d3a2caf7f\nmodifiedon | 2022-11-14T16:14:45Z\n\\_owninguser\\_value | 5fa787c1-1c4d-ed11-bba1-000d3a2caf7f\n\\_modifiedby\\_value | 5fa787c1-1c4d-ed11-bba1-000d3a2caf7f\nversionnumber | 1413873\ncreatedon | 2022-11-14T16:14:45Z\ncr6c3\\_name | Column1 value\noverriddencreatedon | null\nimportsequencenumber | null\n\\_modifiedonbehalfby\\_value | null\nutcconversiontimezonecode | null\n\\_createdonbehalfby\\_value | null\n\\_owningteam\\_value | null\ntimezoneruleversionnumber | null\n')))))}f.isMDXComponent=!0}}]);