"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[41820],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),c=l,f=p["".concat(o,".").concat(c)]||p[c]||m[c]||i;return a?n.createElement(f,r(r({ref:t},u),{},{components:a})):n.createElement(f,r({ref:t},u))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:l,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(86010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i.tabItem,r),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(87462),l=a(67294),i=a(86010),r=a(12466),s=a(56697),o=a(91980),d=a(67392),u=a(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,l.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function w(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[r,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[o,d]=f({queryString:a,groupId:n}),[p,w]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),y=(()=>{const e=o??p;return c({value:e,tabValues:i})?e:null})();(0,l.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),w(e)}),[d,w,i]),tabValues:i}}var y=a(72389);const T={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==s&&(p(t),o(n))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:m},r,{className:(0,i.Z)("tabs__item",T.tabItem,r?.className,{"tabs__item--active":s===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=w(e);return l.createElement("div",{className:(0,i.Z)("tabs-container",T.tabList)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(N,(0,n.Z)({},e,t)))}function k(e){const t=(0,y.Z)();return l.createElement(v,(0,n.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(87462),l=(a(67294),a(3905));const i={toc:[]},r="wrapper";function s(e){let{components:t,...a}=e;return(0,l.kt)(r,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("dl",null,(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,l.kt)("code",{parentName:"p"},"options"),", ",(0,l.kt)("code",{parentName:"p"},"examples"),", ",(0,l.kt)("code",{parentName:"p"},"remarks"),", ",(0,l.kt)("code",{parentName:"p"},"response"),", ",(0,l.kt)("code",{parentName:"p"},"full"),". Default is ",(0,l.kt)("code",{parentName:"p"},"full"),".")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--query [query]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,l.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Output type. ",(0,l.kt)("code",{parentName:"p"},"json"),", ",(0,l.kt)("code",{parentName:"p"},"text"),", ",(0,l.kt)("code",{parentName:"p"},"csv"),", ",(0,l.kt)("code",{parentName:"p"},"md"),". Default ",(0,l.kt)("code",{parentName:"p"},"json"),".")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--verbose"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--debug"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}s.isMDXComponent=!0},63006:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>w,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var n=a(87462),l=(a(67294),a(3905)),i=a(26054),r=a(74866),s=a(85162);const o={},d="spo list view get",u={unversionedId:"cmd/spo/list/list-view-get",id:"cmd/spo/list/list-view-get",title:"spo list view get",description:"Gets information about specific list view",source:"@site/docs/cmd/spo/list/list-view-get.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-view-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-view-get.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list view add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-add"},next:{title:"spo list view list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-list"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:m},f="wrapper";function w(e){let{components:t,...a}=e;return(0,l.kt)(f,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spo-list-view-get"},"spo list view get"),(0,l.kt)("p",null,"Gets information about specific list view"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view get [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("dl",null,(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"URL of the site where the list is located")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--listId [listId]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"ID of the list where the view is located. Specify only one of ",(0,l.kt)("code",{parentName:"p"},"listTitle"),", ",(0,l.kt)("code",{parentName:"p"},"listId")," or ",(0,l.kt)("code",{parentName:"p"},"listUrl"))),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--listTitle [listTitle]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Title of the list where the view is located. Specify only one of ",(0,l.kt)("code",{parentName:"p"},"listTitle"),", ",(0,l.kt)("code",{parentName:"p"},"listId")," or ",(0,l.kt)("code",{parentName:"p"},"listUrl"))),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Server- or web-relative URL of the list where the view is located. Specify only one of ",(0,l.kt)("code",{parentName:"p"},"listTitle"),", ",(0,l.kt)("code",{parentName:"p"},"listId")," or ",(0,l.kt)("code",{parentName:"p"},"listUrl"))),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--id [id]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"ID of the view to get. Specify ",(0,l.kt)("code",{parentName:"p"},"title")," or ",(0,l.kt)("code",{parentName:"p"},"id")," but not both")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--title [title]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Title of the view to get. Specify ",(0,l.kt)("code",{parentName:"p"},"title")," or ",(0,l.kt)("code",{parentName:"p"},"id")," but not both"))),(0,l.kt)(i.ZP,{mdxType:"Global"}),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Gets a list view by name from a list located in site ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view get --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle 'My List' --title 'All Items'\n")),(0,l.kt)("p",null,"Gets a list view by ID from a list located in site ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view get --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl 'Lists/My List' --id 330f29c5-5c4c-465f-9f4b-7903020ae1ce\n")),(0,l.kt)("p",null,"Gets a list view by name from a list located in site ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x")),". Retrieve the list by its ID"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view get --webUrl https://contoso.sharepoint.com/sites/project-x --listId 330f29c5-5c4c-465f-9f4b-7903020ae1c1 --title 'All Items'\n")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Aggregations": null,\n  "AggregationsStatus": null,\n  "AssociatedContentTypeId": null,\n  "BaseViewId": "1",\n  "CalendarViewStyles": null,\n  "ColumnWidth": null,\n  "ContentTypeId": {\n    "StringValue": "0x"\n  },\n  "CustomFormatter": null,\n  "CustomOrder": null,\n  "DefaultView": false,\n  "DefaultViewForContentType": false,\n  "EditorModified": false,\n  "Formats": null,\n  "GridLayout": null,\n  "Hidden": false,\n  "HtmlSchemaXml": "<View Name=\\"{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}\\" Type=\\"HTML\\" DisplayName=\\"All events\\" Url=\\"/Lists/Test/All events.aspx\\" Level=\\"1\\" BaseViewID=\\"1\\" ContentTypeID=\\"0x\\" ImageUrl=\\"/_layouts/15/images/generic.png?rev=47\\"><ViewFields><FieldRef Name=\\"Title\\" /></ViewFields><Query><OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where></Query><RowLimit Paged=\\"TRUE\\">30</RowLimit><XslLink Default=\\"TRUE\\">main.xsl</XslLink><JSLink>clienttemplates.js</JSLink><Toolbar Type=\\"Standard\\" /><ParameterBindings><ParameterBinding Name=\\"NoAnnouncements\\" Location=\\"Resource(wss,noXinviewofY_LIST)\\" /><ParameterBinding Name=\\"NoAnnouncementsHowTo\\" Location=\\"Resource(wss,noXinviewofY_DEFAULT)\\" /></ParameterBindings></View>",\n  "Id": "3cd2e934-f482-4d4a-a9b8-a13b49b3d226",\n  "ImageUrl": "/_layouts/15/images/generic.png?rev=47",\n  "IncludeRootFolder": false,\n  "ViewJoins": null,\n  "JSLink": "clienttemplates.js",\n  "ListViewXml": "<View Name=\\"{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}\\" Type=\\"HTML\\" DisplayName=\\"All events\\" Url=\\"/Lists/Test/All events.aspx\\" Level=\\"1\\" BaseViewID=\\"1\\" ContentTypeID=\\"0x\\" ImageUrl=\\"/_layouts/15/images/generic.png?rev=47\\" ><Query><OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name=\\"Title\\" /></ViewFields><RowLimit Paged=\\"TRUE\\">30</RowLimit><JSLink>clienttemplates.js</JSLink><XslLink Default=\\"TRUE\\">main.xsl</XslLink><Toolbar Type=\\"Standard\\"/></View>",\n  "Method": null,\n  "MobileDefaultView": false,\n  "MobileView": false,\n  "ModerationType": null,\n  "NewDocumentTemplates": null,\n  "OrderedView": false,\n  "Paged": true,\n  "PersonalView": false,\n  "ViewProjectedFields": null,\n  "ViewQuery": "<OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where>",\n  "ReadOnlyView": false,\n  "RequiresClientIntegration": false,\n  "RowLimit": 30,\n  "Scope": 0,\n  "ServerRelativePath": {\n    "DecodedUrl": "/Lists/Test/All events.aspx"\n  },\n  "ServerRelativeUrl": "/Lists/Test/All events.aspx",\n  "StyleId": null,\n  "TabularView": true,\n  "Threaded": false,\n  "Title": "All events",\n  "Toolbar": "",\n  "ToolbarTemplateName": null,\n  "ViewType": "HTML",\n  "ViewData": null,\n  "ViewType2": null,\n  "VisualizationInfo": null\n}\n'))),(0,l.kt)(s.Z,{value:"Text",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'Aggregations             : null\nAggregationsStatus       : null\nAssociatedContentTypeId  : null\nBaseViewId               : 1\nCalendarViewStyles       : null\nColumnWidth              : null\nContentTypeId            : {"StringValue":"0x"}\nCustomFormatter          : null\nCustomOrder              : null\nDefaultView              : false\nDefaultViewForContentType: false\nEditorModified           : false\nFormats                  : null\nGridLayout               : null\nHidden                   : false\nHtmlSchemaXml            : <View Name="{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}" Type="HTML" DisplayName="All events" Url="/Lists/Test/All events.aspx" Level="1" BaseViewID="1" ContentTypeID="0x" ImageUrl="/_layouts/15/images/generic.png?rev=47"><ViewFields><FieldRef Name="Title" /></ViewFields><Query><OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where></Query><RowLimit Paged="TRUE">30</RowLimit><XslLink Default="TRUE">main.xsl</XslLink><JSLink>clienttemplates.js</JSLink><Toolbar Type="Standard" /><ParameterBindings><ParameterBinding Name="NoAnnouncements" Location="Resource(wss,noXinviewofY_LIST)" /><ParameterBinding Name="NoAnnouncementsHowTo" Location="Resource(wss,noXinviewofY_DEFAULT)" /></ParameterBindings></View>\nId                       : 3cd2e934-f482-4d4a-a9b8-a13b49b3d226\nImageUrl                 : /_layouts/15/images/generic.png?rev=47\nIncludeRootFolder        : false\nJSLink                   : clienttemplates.js\nListViewXml              : <View Name="{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}" Type="HTML" DisplayName="All events" Url="/Lists/Test/All events.aspx" Level="1" BaseViewID="1" ContentTypeID="0x" ImageUrl="/_layouts/15/images/generic.png?rev=47" ><Query><OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name="Title" /></ViewFields><RowLimit Paged="TRUE">30</RowLimit><JSLink>clienttemplates.js</JSLink><XslLink Default="TRUE">main.xsl</XslLink><Toolbar Type="Standard"/></View>\nMethod                   : null\nMobileDefaultView        : false\nMobileView               : false\nModerationType           : null\nNewDocumentTemplates     : null\nOrderedView              : false\nPaged                    : true\nPersonalView             : false\nReadOnlyView             : false\nRequiresClientIntegration: false\nRowLimit                 : 30\nScope                    : 0\nServerRelativePath       : {"DecodedUrl":"/Lists/Test/All events.aspx"}\nServerRelativeUrl        : /Lists/Test/All events.aspx\nStyleId                  : null\nTabularView              : true\nThreaded                 : false\nTitle                    : All events\nToolbar                  :\nToolbarTemplateName      : null\nViewData                 : null\nViewJoins                : null\nViewProjectedFields      : null\nViewQuery                : <OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where>\nViewType                 : HTML\nViewType2                : null\nVisualizationInfo        : null\n'))),(0,l.kt)(s.Z,{value:"CSV",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},'Aggregations,AggregationsStatus,AssociatedContentTypeId,BaseViewId,CalendarViewStyles,ColumnWidth,ContentTypeId,CustomFormatter,CustomOrder,DefaultView,DefaultViewForContentType,EditorModified,Formats,GridLayout,Hidden,HtmlSchemaXml,Id,ImageUrl,IncludeRootFolder,ViewJoins,JSLink,ListViewXml,Method,MobileDefaultView,MobileView,ModerationType,NewDocumentTemplates,OrderedView,Paged,PersonalView,ViewProjectedFields,ViewQuery,ReadOnlyView,RequiresClientIntegration,RowLimit,Scope,ServerRelativePath,ServerRelativeUrl,StyleId,TabularView,Threaded,Title,Toolbar,ToolbarTemplateName,ViewType,ViewData,ViewType2,VisualizationInfo\n,,,1,,,"{""StringValue"":""0x""}",,,,,,,,,"<View Name=""{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}"" Type=""HTML"" DisplayName=""All events"" Url=""/Lists/Test/All events.aspx"" Level=""1"" BaseViewID=""1"" ContentTypeID=""0x"" ImageUrl=""/_layouts/15/images/generic.png?rev=47""><ViewFields><FieldRef Name=""Title"" /></ViewFields><Query><OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where></Query><RowLimit Paged=""TRUE"">30</RowLimit><XslLink Default=""TRUE"">main.xsl</XslLink><JSLink>clienttemplates.js</JSLink><Toolbar Type=""Standard"" /><ParameterBindings><ParameterBinding Name=""NoAnnouncements"" Location=""Resource(wss,noXinviewofY_LIST)"" /><ParameterBinding Name=""NoAnnouncementsHowTo"" Location=""Resource(wss,noXinviewofY_DEFAULT)"" /></ParameterBindings></View>",3cd2e934-f482-4d4a-a9b8-a13b49b3d226,/_layouts/15/images/generic.png?rev=47,,,clienttemplates.js,"<View Name=""{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}"" Type=""HTML"" DisplayName=""All events"" Url=""/Lists/Test/All events.aspx"" Level=""1"" BaseViewID=""1"" ContentTypeID=""0x"" ImageUrl=""/_layouts/15/images/generic.png?rev=47"" ><Query><OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name=""Title"" /></ViewFields><RowLimit Paged=""TRUE"">30</RowLimit><JSLink>clienttemplates.js</JSLink><XslLink Default=""TRUE"">main.xsl</XslLink><Toolbar Type=""Standard""/></View>",,,,,,,1,,,"<OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where>",,,30,0,"{""DecodedUrl"":""/Lists/Test/All events.aspx""}",/Lists/Test/All events.aspx,,1,,All events,,,HTML,,,\n'))),(0,l.kt)(s.Z,{value:"Markdown",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},'# spo list view get --webUrl "https://contoso.sharepoint.com" --listTitle "My List" --title "All Items"\n\nDate: 2/20/2023\n\n## All Items (6275ed5c-8e4f-4e81-8060-2d9162b29952)\n\nProperty | Value\n---------|-------\nAggregations | null\nAggregationsStatus | null\nAssociatedContentTypeId | null\nBaseViewId | 1\nCalendarViewStyles | null\nColumnWidth | null\nContentTypeId | {"StringValue":"0x"}\nCustomFormatter |\nCustomOrder | null\nDefaultView | true\nDefaultViewForContentType | false\nEditorModified | false\nFormats | null\nGridLayout | null\nHidden | false\nHtmlSchemaXml | <View Name="{6275ED5C-8E4F-4E81-8060-2D9162B29952}" DefaultView="TRUE" MobileView="TRUE" MobileDefaultView="TRUE" Type="HTML" DisplayName="All Items" Url="/teams/AllStars/Lists/My List/AllItems.aspx" Level="1" BaseViewID="1" ContentTypeID="0x" ImageUrl="/\\_layouts/15/images/generic.png?rev=47"><Query /><ViewFields><FieldRef Name="LinkTitle" /><FieldRef Name="FieldName1" /></ViewFields><Toolbar Type="Standard" /><CustomFormatter /><XslLink Default="TRUE">main.xsl</XslLink><JSLink>clienttemplates.js</JSLink><RowLimit Paged="TRUE">30</RowLimit><ParameterBindings><ParameterBinding Name="NoAnnouncements" Location="Resource(wss,noXinviewofY\\_LIST)" /><ParameterBinding Name="NoAnnouncementsHowTo" Location="Resource(wss,noXinviewofY\\_DEFAULT)" /></ParameterBindings></View>\nId | 6275ed5c-8e4f-4e81-8060-2d9162b29952\nImageUrl | /\\_layouts/15/images/generic.png?rev=47\nIncludeRootFolder | false\nViewJoins | null\nJSLink | clienttemplates.js\nListViewXml | <View Name="{6275ED5C-8E4F-4E81-8060-2D9162B29952}" DefaultView="TRUE" MobileView="TRUE" MobileDefaultView="TRUE" Type="HTML" DisplayName="All Items" Url="/teams/AllStars/Lists/My List/AllItems.aspx" Level="1" BaseViewID="1" ContentTypeID="0x" ImageUrl="/\\_layouts/15/images/generic.png?rev=47" ><Query /><ViewFields><FieldRef Name="LinkTitle" /><FieldRef Name="FieldName1" /></ViewFields><RowLimit Paged="TRUE">30</RowLimit><JSLink>clienttemplates.js</JSLink><XslLink Default="TRUE">main.xsl</XslLink><CustomFormatter /><Toolbar Type="Standard"/></View>\nMethod | null\nMobileDefaultView | true\nMobileView | true\nModerationType | null\nNewDocumentTemplates | null\nOrderedView | false\nPaged | true\nPersonalView | false\nViewProjectedFields | null\nViewQuery |\nReadOnlyView | false\nRequiresClientIntegration | false\nRowLimit | 30\nScope | 0\nServerRelativePath | {"DecodedUrl":"/teams/AllStars/Lists/My List/AllItems.aspx"}\nServerRelativeUrl | /teams/AllStars/Lists/My List/AllItems.aspx\nStyleId | null\nTabularView | true\nThreaded | false\nTitle | All Items\nToolbar |\nToolbarTemplateName | null\nViewType | HTML\nViewData | null\nViewType2 | null\nVisualizationInfo | null\n')))))}w.isMDXComponent=!0}}]);