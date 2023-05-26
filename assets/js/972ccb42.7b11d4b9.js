"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[1378],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(o),m=a,f=u["".concat(c,".").concat(m)]||u[m]||i[m]||r;return o?n.createElement(f,s(s({ref:t},p),{},{components:o})):n.createElement(f,s({ref:t},p))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<r;d++)s[d]=o[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},85162:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(67294),a=o(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:o,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:o},t)}},74866:(e,t,o)=>{o.d(t,{Z:()=>y});var n=o(87462),a=o(67294),r=o(86010),s=o(12466),l=o(56697),c=o(91980),d=o(67392),p=o(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:a}}=e;return{value:t,label:o,attributes:n,default:a}}))}function i(e){const{values:t,children:o}=e;return(0,a.useMemo)((()=>{const e=t??u(o);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function m(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:o}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,c._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:o=!1,groupId:n}=e,r=i(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,d]=f({queryString:o,groupId:n}),[u,b]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(o);return[n,(0,a.useCallback)((e=>{o&&r.set(e)}),[o,r])]}({groupId:n}),k=(()=>{const e=c??u;return m({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var k=o(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:o,selectedValue:l,selectValue:c,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),i=e=>{const t=e.currentTarget,o=p.indexOf(t),n=d[o].value;n!==l&&(u(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const o=p.indexOf(e.currentTarget)+1;t=p[o]??p[0];break}case"ArrowLeft":{const o=p.indexOf(e.currentTarget)-1;t=p[o]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},t)},d.map((e=>{let{value:t,label:o,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:i},s,{className:(0,r.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":l===t})}),o??t)})))}function g(e){let{lazy:t,children:o,selectedValue:n}=e;const r=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=b(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},a.createElement(N,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return a.createElement(v,(0,n.Z)({key:String(t)},e))}},26054:(e,t,o)=>{o.d(t,{ZP:()=>l});var n=o(87462),a=(o(67294),o(3905));const r={toc:[]},s="wrapper";function l(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,n.Z)({},r,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",{parentName:"p"},"options"),", ",(0,a.kt)("code",{parentName:"p"},"examples"),", ",(0,a.kt)("code",{parentName:"p"},"remarks"),", ",(0,a.kt)("code",{parentName:"p"},"response"),", ",(0,a.kt)("code",{parentName:"p"},"full"),". Default is ",(0,a.kt)("code",{parentName:"p"},"full"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--query [query]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,a.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output type. ",(0,a.kt)("code",{parentName:"p"},"json"),", ",(0,a.kt)("code",{parentName:"p"},"text"),", ",(0,a.kt)("code",{parentName:"p"},"csv"),", ",(0,a.kt)("code",{parentName:"p"},"md"),". Default ",(0,a.kt)("code",{parentName:"p"},"json"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--verbose"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--debug"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}l.isMDXComponent=!0},23697:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>i});var n=o(87462),a=(o(67294),o(3905)),r=o(26054),s=o(74866),l=o(85162);const c={},d="onenote notebook list",p={unversionedId:"cmd/onenote/notebook/notebook-list",id:"cmd/onenote/notebook/notebook-list",title:"onenote notebook list",description:"Retrieve a list of notebooks.",source:"@site/docs/cmd/onenote/notebook/notebook-list.mdx",sourceDirName:"cmd/onenote/notebook",slug:"/cmd/onenote/notebook/notebook-list",permalink:"/cli-microsoft365-docusaurus/cmd/onenote/notebook/notebook-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/onenote/notebook/notebook-list.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"onedrive report usagestorage",permalink:"/cli-microsoft365-docusaurus/cmd/onedrive/report/report-usagestorage"},next:{title:"onenote page list",permalink:"/cli-microsoft365-docusaurus/cmd/onenote/page/page-list"}},u={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],m={toc:i},f="wrapper";function b(e){let{components:t,...o}=e;return(0,a.kt)(f,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"onenote-notebook-list"},"onenote notebook list"),(0,a.kt)("p",null,"Retrieve a list of notebooks."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--userId [userId]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Id of the user. Use either userId or userName, but not both.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--userName [userName]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Name of the user. Use either userId or userName, but not both.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--groupId [groupId]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Id of the SharePoint group. Use either groupName or groupId, but not both")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--groupName [groupName]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Name of the SharePoint group. Use either groupName or groupId, but not both.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-u, --webUrl [webUrl]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"URL of the SharePoint site."))),(0,a.kt)(r.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"List Microsoft OneNote notebooks for the currently logged in user"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list\n")),(0,a.kt)("p",null,"List Microsoft OneNote notebooks in group 233e43d0-dc6a-482e-9b4e-0de7a7bce9b4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list --groupId 233e43d0-dc6a-482e-9b4e-0de7a7bce9b4\n")),(0,a.kt)("p",null,"List Microsoft OneNote notebooks in group My Group"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 onenote notebook list --groupName "MyGroup"\n')),(0,a.kt)("p",null,"List Microsoft OneNote notebooks from a user by user name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list --userName user1@contoso.onmicrosoft.com\n")),(0,a.kt)("p",null,"List Microsoft OneNote notebooks for user 2609af39-7775-4f94-a3dc-0dd67657e900"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list --userId 2609af39-7775-4f94-a3dc-0dd67657e900\n")),(0,a.kt)("p",null,"List Microsoft OneNote notebooks for site ",(0,a.kt)("a",{parentName:"p",href:"https://contoso.sharepoint.com/sites/testsite"},"https://contoso.sharepoint.com/sites/testsite")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list --webUrl https://contoso.sharepoint.com/sites/testsite\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "1-9cf762f6-b931-4035-8bf3-67c710887c5a",\n    "self": "https://graph.microsoft.com/v1.0/users/0649d0bd-53dc-4e1d-a357-76f1d92d447b/onenote/notebooks/1-9cf762f6-b931-4035-8bf3-67c710887c5a",\n    "createdDateTime": "2018-11-17T13:06:42Z",\n    "displayName": "TeamsNotebook(Shared)",\n    "lastModifiedDateTime": "2018-11-17T13:06:42Z",\n    "isDefault": false,\n    "userRole": "Owner",\n    "isShared": false,\n    "sectionsUrl": "https://graph.microsoft.com/v1.0/users/0649d0bd-53dc-4e1d-a357-76f1d92d447b/onenote/notebooks/1-9cf762f6-b931-4035-8bf3-67c710887c5a/sections",\n    "sectionGroupsUrl": "https://graph.microsoft.com/v1.0/users/0649d0bd-53dc-4e1d-a357-76f1d92d447b/onenote/notebooks/1-9cf762f6-b931-4035-8bf3-67c710887c5a/sectionGroups",\n    "createdBy": {\n      "user": {\n        "id": "0649d0bd-53dc-4e1d-a357-76f1d92d447b",\n        "displayName": "John"\n      }\n    },\n    "lastModifiedBy": {\n      "user": {\n        "id": "0649d0bd-53dc-4e1d-a357-76f1d92d447b",\n        "displayName": "John"\n      }\n    },\n    "links": {\n      "oneNoteClientUrl": {\n        "href": "onenote:https://contoso-my.sharepoint.com/personal/john_contoso_onmicrosoft_com/Documents/Notebooks/TeamsNotebook(Shared)"\n      },\n      "oneNoteWebUrl": {\n        "href": "https://contoso-my.sharepoint.com/personal/john_contoso_onmicrosoft_com/Documents/Notebooks/TeamsNotebook(Shared)"\n      }\n    }\n  }\n]\n'))),(0,a.kt)(l.Z,{value:"Text",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"createdDateTime: 2018-11-17T13:06:42Z\ndisplayName    : TeamsNotebook(Shared)\nid             : 1-9cf762f6-b931-4035-8bf3-67c710887c5a\n"))),(0,a.kt)(l.Z,{value:"CSV",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"id,self,createdDateTime,displayName,lastModifiedDateTime,isDefault,userRole,isShared,sectionsUrl,sectionGroupsUrl\n1-9cf762f6-b931-4035-8bf3-67c710887c5a,https://graph.microsoft.com/v1.0/users/0649d0bd-53dc-4e1d-a357-76f1d92d447b/onenote/notebooks/1-9cf762f6-b931-4035-8bf3-67c710887c5a,2018-11-17T13:06:42Z,TeamsNotebook(Shared),2018-11-17T13:06:42Z,,Owner,,https://graph.microsoft.com/v1.0/users/0649d0bd-53dc-4e1d-a357-76f1d92d447b/onenote/notebooks/1-9cf762f6-b931-4035-8bf3-67c710887c5a/sections,https://graph.microsoft.com/v1.0/users/0649d0bd-53dc-4e1d-a357-76f1d92d447b/onenote/notebooks/1-9cf762f6-b931-4035-8bf3-67c710887c5a/sectionGroups\n"))),(0,a.kt)(l.Z,{value:"Markdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"# onenote notebook list\n\nDate: 2023-05-22\n\n## TeamsNotebook(Shared) (1-9cf762f6-b931-4035-8bf3-67c710887c5a)\n\nProperty | Value\n---------|-------\nid | 1-9cf762f6-b931-4035-8bf3-67c710887c5a\nself | https://graph.microsoft.com/v1.0/users/0649d0bd-53dc-4e1d-a357-76f1d92d447b/onenote/notebooks/1-9cf762f6-b931-4035-8bf3-67c710887c5a\ncreatedDateTime | 2018-11-17T13:06:42Z\ndisplayName | TeamsNotebook(Shared)\nlastModifiedDateTime | 2018-11-17T13:06:42Z\nisDefault | false\nuserRole | Owner\nisShared | false\nsectionsUrl | https://graph.microsoft.com/v1.0/users/0649d0bd-53dc-4e1d-a357-76f1d92d447b/onenote/notebooks/1-9cf762f6-b931-4035-8bf3-67c710887c5a/sections\nsectionGroupsUrl | https://graph.microsoft.com/v1.0/users/0649d0bd-53dc-4e1d-a357-76f1d92d447b/onenote/notebooks/1-9cf762f6-b931-4035-8bf3-67c710887c5a/sectionGroups\n")))),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"List notebooks (MS Graph docs): ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/onenote-list-notebooks?view=graph-rest-1.0&tabs=http"},"https://docs.microsoft.com/en-us/graph/api/onenote-list-notebooks?view=graph-rest-1.0&tabs=http"))))}b.isMDXComponent=!0}}]);