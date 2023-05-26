"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[87669],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),o=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=o(a),c=n,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return a?l.createElement(f,i(i({ref:t},p),{},{components:a})):l.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:n,i[1]=d;for(var o=2;o<r;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(87462),n=a(67294),r=a(86010),i=a(12466),d=a(56697),s=a(91980),o=a(67392),p=a(50012);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:n}}=e;return{value:t,label:a,attributes:l,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const l=(0,d.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function w(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,r=m(e),[i,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[s,o]=f({queryString:a,groupId:l}),[u,w]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,p.Nk)(a);return[l,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),N=(()=>{const e=s??u;return c({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{N&&d(N)}),[N]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),o(e),w(e)}),[o,w,r]),tabValues:r}}var N=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function T(e){let{className:t,block:a,selectedValue:d,selectValue:s,tabValues:o}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),l=o[a].value;l!==d&&(u(t),s(l))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:m},i,{className:(0,r.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":d===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function h(e){const t=w(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},n.createElement(T,(0,l.Z)({},e,t)),n.createElement(v,(0,l.Z)({},e,t)))}function k(e){const t=(0,N.Z)();return n.createElement(h,(0,l.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>d});var l=a(87462),n=(a(67294),a(3905));const r={toc:[]},i="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(i,(0,l.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",{parentName:"p"},"options"),", ",(0,n.kt)("code",{parentName:"p"},"examples"),", ",(0,n.kt)("code",{parentName:"p"},"remarks"),", ",(0,n.kt)("code",{parentName:"p"},"response"),", ",(0,n.kt)("code",{parentName:"p"},"full"),". Default is ",(0,n.kt)("code",{parentName:"p"},"full"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--query [query]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,n.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output type. ",(0,n.kt)("code",{parentName:"p"},"json"),", ",(0,n.kt)("code",{parentName:"p"},"text"),", ",(0,n.kt)("code",{parentName:"p"},"csv"),", ",(0,n.kt)("code",{parentName:"p"},"md"),". Default ",(0,n.kt)("code",{parentName:"p"},"json"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--verbose"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--debug"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}d.isMDXComponent=!0},45204:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>w,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var l=a(87462),n=(a(67294),a(3905)),r=a(26054),i=a(74866),d=a(85162);const s={},o="spo list view add",p={unversionedId:"cmd/spo/list/list-view-add",id:"cmd/spo/list/list-view-add",title:"spo list view add",description:"Adds a new view to a SharePoint list",source:"@site/docs/cmd/spo/list/list-view-add.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-view-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-view-add.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list sitescript get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-sitescript-get"},next:{title:"spo list view get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-get"}},u={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:m},f="wrapper";function w(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-list-view-add"},"spo list view add"),(0,n.kt)("p",null,"Adds a new view to a SharePoint list"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view add [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"URL of the site where the list is located.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--listId [listId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"ID of the list to which the view should be added. Specify either ",(0,n.kt)("code",{parentName:"p"},"listId"),", ",(0,n.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,n.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--listTitle [listTitle]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Title of the list to which the view should be added. Specify either ",(0,n.kt)("code",{parentName:"p"},"listId"),", ",(0,n.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,n.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Relative URL of the list to which the view should be added. Specify either ",(0,n.kt)("code",{parentName:"p"},"listId"),", ",(0,n.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,n.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--title <title>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Title of the view to be created for the list.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--fields <fields>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Comma-separated list of ",(0,n.kt)("strong",{parentName:"p"},"case-sensitive")," internal names of the fields to add to the view.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--viewQuery [viewQuery]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"XML representation of the list query for the underlying view.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--personal"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"View will be created as personal view, if specified.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--default"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"View will be set as default view, if specified.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--paged"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"View supports paging, if specified (recommended to use this).")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--rowLimit [rowLimit]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Sets the number of items to display for the view. Default value is 30."))),(0,n.kt)(r.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"We recommend using the ",(0,n.kt)("inlineCode",{parentName:"p"},"paged")," option. When specified, the view supports displaying more items page by page (default behavior). When not specified, the ",(0,n.kt)("inlineCode",{parentName:"p"},"rowLimit")," is absolute, and there is no link to see more items."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Add a view called ",(0,n.kt)("em",{parentName:"p"},"All events")," to a list with specific title."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list view add --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle "Test" --title "All events" --fields "FieldName1,FieldName2,Created,Author,Modified,Editor" --paged\n')),(0,n.kt)("p",null,"Add a view as default view with title ",(0,n.kt)("em",{parentName:"p"},"All events")," to a list with a specific URL."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list view add --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl "/Lists/MyList" --title "All events" --fields "FieldName1,Created" --paged --default\n')),(0,n.kt)("p",null,"Add a personal view called ",(0,n.kt)("em",{parentName:"p"},"All events")," to a list with a specific ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list view add --webUrl https://contoso.sharepoint.com/sites/project-x --listId 00000000-0000-0000-0000-000000000000 --title "All events" --fields "FieldName1,Created" --paged --personal\n')),(0,n.kt)("p",null,"Add a view called ",(0,n.kt)("em",{parentName:"p"},"All events")," with defined filter and sorting."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view add --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle \"Test\" --title \"All events\" --fields \"FieldName1\" --viewQuery \"<OrderBy><FieldRef Name='Created' Ascending='FALSE' /></OrderBy><Where><Eq><FieldRef Name='TextFieldName' /><Value Type='Text'>Field value</Value></Eq></Where>\" --paged\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"JSON",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Aggregations": null,\n  "AggregationsStatus": null,\n  "AssociatedContentTypeId": null,\n  "BaseViewId": null,\n  "CalendarViewStyles": null,\n  "ColumnWidth": null,\n  "ContentTypeId": {\n    "StringValue": "0x"\n  },\n  "CustomFormatter": null,\n  "CustomOrder": null,\n  "DefaultView": false,\n  "DefaultViewForContentType": false,\n  "EditorModified": false,\n  "Formats": null,\n  "GridLayout": null,\n  "Hidden": false,\n  "HtmlSchemaXml": "<View Type=\\"HTML\\" Url=\\"/Lists/Test/All events.aspx\\" Personal=\\"FALSE\\" DisplayName=\\"All events\\" DefaultView=\\"FALSE\\" Name=\\"{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}\\"><ViewFields><FieldRef Name=\\"Title\\" /></ViewFields><Query><OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where></Query><RowLimit Paged=\\"TRUE\\">30</RowLimit></View>",\n  "Id": "3cd2e934-f482-4d4a-a9b8-a13b49b3d226",\n  "ImageUrl": null,\n  "IncludeRootFolder": false,\n  "ViewJoins": null,\n  "JSLink": null,\n  "ListViewXml": "<View Type=\\"HTML\\" Url=\\"/Lists/Test/All events.aspx\\" Personal=\\"FALSE\\" DisplayName=\\"All events\\" DefaultView=\\"FALSE\\" Name=\\"{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}\\" ><Query><OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name=\\"Title\\" /></ViewFields><RowLimit Paged=\\"TRUE\\">30</RowLimit><Toolbar Type=\\"None\\"/></View>",\n  "Method": null,\n  "MobileDefaultView": false,\n  "MobileView": false,\n  "ModerationType": null,\n  "NewDocumentTemplates": null,\n  "OrderedView": false,\n  "Paged": true,\n  "PersonalView": false,\n  "ViewProjectedFields": null,\n  "ViewQuery": "<OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where>",\n  "ReadOnlyView": false,\n  "RequiresClientIntegration": false,\n  "RowLimit": 30,\n  "Scope": 0,\n  "ServerRelativePath": {\n    "DecodedUrl": "/Lists/Test/All events.aspx"\n  },\n  "ServerRelativeUrl": "/Lists/Test/All events.aspx",\n  "StyleId": null,\n  "TabularView": true,\n  "Threaded": false,\n  "Title": "All events",\n  "Toolbar": null,\n  "ToolbarTemplateName": null,\n  "ViewType": "HTML",\n  "ViewData": null,\n  "ViewType2": null,\n  "VisualizationInfo": null\n}\n'))),(0,n.kt)(d.Z,{value:"Text",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'Aggregations             : null\nAggregationsStatus       : null\nAssociatedContentTypeId  : null\nBaseViewId               : null\nCalendarViewStyles       : null\nColumnWidth              : null\nContentTypeId            : {"StringValue":"0x"}\nCustomFormatter          : null\nCustomOrder              : null\nDefaultView              : false\nDefaultViewForContentType: false\nEditorModified           : false\nFormats                  : null\nGridLayout               : null\nHidden                   : false\nHtmlSchemaXml            : <View Type="HTML" Url="/Lists/Test/All events1.aspx" Personal="FALSE" DisplayName="All events" DefaultView="FALSE" Name="{F037FE93-4C74-4ACB-B7B0-71BA599F13C1}"><ViewFields><FieldRef Name="Title" /></ViewFields><Query><OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where></Query><RowLimit Paged="TRUE">30</RowLimit></View>\nId                       : f037fe93-4c74-4acb-b7b0-71ba599f13c1\nImageUrl                 : null\nIncludeRootFolder        : false\nJSLink                   : null\nListViewXml              : <View Type="HTML" Url="/Lists/Test/All events1.aspx" Personal="FALSE" DisplayName="All events" DefaultView="FALSE" Name="{F037FE93-4C74-4ACB-B7B0-71BA599F13C1}" ><Query><OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name="Title" /></ViewFields><RowLimit Paged="TRUE">30</RowLimit><Toolbar Type="None"/></View>\nMethod                   : null\nMobileDefaultView        : false\nMobileView               : false\nModerationType           : null\nNewDocumentTemplates     : null\nOrderedView              : false\nPaged                    : true\nPersonalView             : false\nReadOnlyView             : false\nRequiresClientIntegration: false\nRowLimit                 : 30\nScope                    : 0\nServerRelativePath       : {"DecodedUrl":"/Lists/Test/All events1.aspx"}\nServerRelativeUrl        : /Lists/Test/All events1.aspx\nStyleId                  : null\nTabularView              : true\nThreaded                 : false\nTitle                    : All events\nToolbar                  : null\nToolbarTemplateName      : null\nViewData                 : null\nViewJoins                : null\nViewProjectedFields      : null\nViewQuery                : <OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where>\nViewType                 : HTML\nViewType2                : null\nVisualizationInfo        : null\n'))),(0,n.kt)(d.Z,{value:"CSV",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},'Aggregations,AggregationsStatus,AssociatedContentTypeId,BaseViewId,CalendarViewStyles,ColumnWidth,ContentTypeId,CustomFormatter,CustomOrder,DefaultView,DefaultViewForContentType,EditorModified,Formats,GridLayout,Hidden,HtmlSchemaXml,Id,ImageUrl,IncludeRootFolder,ViewJoins,JSLink,ListViewXml,Method,MobileDefaultView,MobileView,ModerationType,NewDocumentTemplates,OrderedView,Paged,PersonalView,ViewProjectedFields,ViewQuery,ReadOnlyView,RequiresClientIntegration,RowLimit,Scope,ServerRelativePath,ServerRelativeUrl,StyleId,TabularView,Threaded,Title,Toolbar,ToolbarTemplateName,ViewType,ViewData,ViewType2,VisualizationInfo\n,,,,,,"{""StringValue"":""0x""}",,,,,,,,,"<View Type=""HTML"" Url=""/Lists/Test/All events2.aspx"" Personal=""FALSE"" DisplayName=""All events"" DefaultView=""FALSE"" Name=""{0F11C3F1-E174-4A85-93A9-B4AFB7BD41B6}""><ViewFields><FieldRef Name=""Title"" /></ViewFields><Query><OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where></Query><RowLimit Paged=""TRUE"">30</RowLimit></View>",0f11c3f1-e174-4a85-93a9-b4afb7bd41b6,,,,,"<View Type=""HTML"" Url=""/Lists/Test/All events2.aspx"" Personal=""FALSE"" DisplayName=""All events"" DefaultView=""FALSE"" Name=""{0F11C3F1-E174-4A85-93A9-B4AFB7BD41B6}"" ><Query><OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name=""Title"" /></ViewFields><RowLimit Paged=""TRUE"">30</RowLimit><Toolbar Type=""None""/></View>",,,,,,,1,,,"<OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where>",,,30,0,"{""DecodedUrl"":""/Lists/Test/All events2.aspx""}",/Lists/Test/All events2.aspx,,1,,All events,,,HTML,,,\n'))),(0,n.kt)(d.Z,{value:"Markdown",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},'# spo list view add --webUrl "https://contoso.sharepoint.com" --listTitle "Test" --title "All events" --fields "FieldName1" --viewQuery "<OrderBy><FieldRef Name=\'Created\' Ascending=\'FALSE\' /></OrderBy><Where><Eq><FieldRef Name=\'TextFieldName\' /><Value Type=\'Text\'>Field value</Value></Eq></Where>" --paged "true"\n\nDate: 2/20/2023\n\n## All events (f3cade4a-d8c4-43b3-971c-9a4acc2510b8)\n\nProperty | Value\n---------|-------\nAggregations | null\nAggregationsStatus | null\nAssociatedContentTypeId | null\nBaseViewId | null\nCalendarViewStyles | null\nColumnWidth | null\nContentTypeId | {"StringValue":"0x"}\nCustomFormatter | null\nCustomOrder | null\nDefaultView | false\nDefaultViewForContentType | false\nEditorModified | false\nFormats | null\nGridLayout | null\nHidden | false\nHtmlSchemaXml | <View Type="HTML" Url="/Lists/Test/All events.aspx" Personal="FALSE" DisplayName="All events" DefaultView="FALSE" Name="{F3CADE4A-D8C4-43B3-971C-9A4ACC2510B8}"><ViewFields><FieldRef Name="FieldName1" /></ViewFields><Query><OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where></Query><RowLimit Paged="TRUE">30</RowLimit></View>\nId | f3cade4a-d8c4-43b3-971c-9a4acc2510b8\nImageUrl | null\nIncludeRootFolder | false\nViewJoins | null\nJSLink | null\nListViewXml | <View Type="HTML" Url="/Lists/Test/All events.aspx" Personal="FALSE" DisplayName="All events" DefaultView="FALSE" Name="{F3CADE4A-D8C4-43B3-971C-9A4ACC2510B8}" ><Query><OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name="FieldName1" /></ViewFields><RowLimit Paged="TRUE">30</RowLimit><Toolbar Type="None"/></View>\nMethod | null\nMobileDefaultView | false\nMobileView | false\nModerationType | null\nNewDocumentTemplates | null\nOrderedView | false\nPaged | true\nPersonalView | false\nViewProjectedFields | null\nViewQuery | <OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where>\nReadOnlyView | false\nRequiresClientIntegration | false\nRowLimit | 30\nScope | 0\nServerRelativePath | {"DecodedUrl":"/Lists/Test/All events.aspx"}\nServerRelativeUrl | /Lists/Test/All events.aspx\nStyleId | null\nTabularView | true\nThreaded | false\nTitle | All events\nToolbar | null\nToolbarTemplateName | null\nViewType | HTML\nViewData | null\nViewType2 | null\nVisualizationInfo | null\n')))))}w.isMDXComponent=!0}}]);