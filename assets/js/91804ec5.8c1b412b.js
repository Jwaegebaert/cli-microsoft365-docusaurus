"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[38690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,v=c["".concat(u,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(v,l(l({ref:t},d),{},{components:n})):r.createElement(v,l({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},l="wrapper";function i(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-h, --help [help]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",null,"options"),", ",(0,a.kt)("code",null,"examples"),", ",(0,a.kt)("code",null,"remarks"),", ",(0,a.kt)("code",null,"response"),", ",(0,a.kt)("code",null,"full"),". Default is ",(0,a.kt)("code",null,"full"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--query [query]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"JMESPath query string. See ",(0,a.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-o, --output [output]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output type. ",(0,a.kt)("code",null,"json"),", ",(0,a.kt)("code",null,"text"),", ",(0,a.kt)("code",null,"csv"),", ",(0,a.kt)("code",null,"md"),". Default is ",(0,a.kt)("code",null,"json"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--verbose"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with verbose logging.")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--debug"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with debug logging."))))}i.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),i=n(56697),u=n(91980),s=n(67392),d=n(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=v({queryString:n,groupId:r}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),y=(()=>{const e=u??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var y=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),r=s[n].value;r!==i&&(c(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return a.createElement(g,(0,r.Z)({key:String(t)},e))}},95779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(37884),l=n(74866),i=n(85162);const u={},s="purview retentioneventtype add",d={unversionedId:"cmd/purview/retentioneventtype/retentioneventtype-add",id:"cmd/purview/retentioneventtype/retentioneventtype-add",title:"purview retentioneventtype add",description:"Create a retention event type",source:"@site/docs/cmd/purview/retentioneventtype/retentioneventtype-add.mdx",sourceDirName:"cmd/purview/retentioneventtype",slug:"/cmd/purview/retentioneventtype/retentioneventtype-add",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentioneventtype/retentioneventtype-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/purview/retentioneventtype/retentioneventtype-add.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"purview retentionevent remove",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentionevent/retentionevent-remove"},next:{title:"purview retentioneventtype get",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentioneventtype/retentioneventtype-get"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Remarks",id:"remarks",level:2},{value:"More information",id:"more-information",level:2},{value:"Response",id:"response",level:2}],m={toc:p},v="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(v,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"purview-retentioneventtype-add"},"purview retentioneventtype add"),(0,a.kt)("p",null,"Create a retention event type"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentioneventtype add [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-n, --displayName <displayName>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The display name of the event type.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-d, --description [description]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"A description for the event type."))),(0,a.kt)(o.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Create a retention event type ",(0,a.kt)("em",{parentName:"p"},"Contract Expiry"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentioneventtype add --displayName 'Contract Expiry' --description 'A retention event type to start a retention period based on the date that a contract expired.'\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This command is based on a Microsoft Graph API that is currently in preview and is subject to change once the API reached general availability.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This command currently only supports delegated permissions.")),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("p",null,"This command is part of a series of commands that have to do with event-based retention. Event-based retention is about starting a retention period when a specific event occurs, instead of the moment a document was labeled or created. ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/microsoft-365/compliance/event-driven-retention?view=o365-worldwide"},"Read more about event-based retention here")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  {\n    "displayName": "Contract Expiry",\n    "description": "A retention event type to start a retention period based on the date that a contract expired.",\n    "createdDateTime": "2023-01-31T20:33:33Z",\n    "lastModifiedDateTime": "2023-01-31T20:33:33Z",\n    "id": "f15d2493-7ad2-4185-a3f6-9580542490a0",\n    "createdBy": {\n      "user": {\n        "id": null,\n        "displayName": "John Doe"\n      }\n    },\n    "lastModifiedBy": {\n      "user": {\n        "id": null,\n        "displayName": "John Doe"\n      }\n    }\n  }\n}\n'))),(0,a.kt)(i.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'createdBy           : {"user":{"id":null,"displayName":"John Doe"}}\ncreatedDateTime     : 2023-01-31T20:40:40Z\ndescription         : A retention event type to start a retention period based on the date that a contract expired.\ndisplayName         : Contract Expiry\nid                  : 806cb481-4cc6-47c3-af26-26d64f6e7aab\nlastModifiedBy      : {"user":{"id":null,"displayName":"John Doe"}}\nlastModifiedDateTime: 2023-01-31T20:40:40Z\n'))),(0,a.kt)(i.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'displayName,description,createdDateTime,lastModifiedDateTime,id,createdBy,lastModifiedBy\nContract Expiry,A retention event type to start a retention period based on the date that a contract expired.,2023-01-31T20:53:23Z,2023-01-31T20:53:23Z,b430ae4c-1e26-422f-9544-67df3abfb200,"{""user"":{""id"":null,""displayName"":""John Doe""}}","{""user"":{""id"":null,""displayName"":""John Doe""}}"\n'))),(0,a.kt)(i.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'# purview retentioneventtype add --displayName "Contract Expiry" --description "A retention event type to start a retention period based on the date that a contract expired."\n\nDate: 31/01/2023\n\n## Contract Expiry (ca0e1f8d-4e42-4a81-be85-022502d70c4e)\n\nProperty | Value\n---------|-------\ndisplayName | Contract Expiry\ndescription | A retention event type to start a retention period based on the date that a contract expired.\ncreatedDateTime | 2023-01-31T20:55:35Z\nlastModifiedDateTime | 2023-01-31T20:55:35Z\nid | ca0e1f8d-4e42-4a81-be85-022502d70c4e\ncreatedBy | {"user":{"id":null,"displayName":"John Doe"}}\nlastModifiedBy | {"user":{"id":null,"displayName":"John Doe"}}\n')))))}f.isMDXComponent=!0}}]);