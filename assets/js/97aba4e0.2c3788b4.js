"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[41820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),c=l,f=p["".concat(o,".").concat(c)]||p[c]||m[c]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:l,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),l=n(86010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i.tabItem,r),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(87462),l=n(67294),i=n(86010),r=n(12466),s=n(56697),o=n(91980),d=n(67392),u=n(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function m(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,l.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function w(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[r,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[o,d]=f({queryString:n,groupId:a}),[p,w]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),y=(()=>{const e=o??p;return c({value:e,tabValues:i})?e:null})();(0,l.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),w(e)}),[d,w,i]),tabValues:i}}var y=n(72389);const T={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=d[n].value;a!==s&&(p(t),o(a))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:m},r,{className:(0,i.Z)("tabs__item",T.tabItem,r?.className,{"tabs__item--active":s===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=w(e);return l.createElement("div",{className:(0,i.Z)("tabs-container",T.tabList)},l.createElement(g,(0,a.Z)({},e,t)),l.createElement(N,(0,a.Z)({},e,t)))}function k(e){const t=(0,y.Z)();return l.createElement(v,(0,a.Z)({key:String(t)},e))}},26054:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),l=(n(67294),n(3905));const i={toc:[]},r="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("dl",null,(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,l.kt)("code",{parentName:"p"},"options"),", ",(0,l.kt)("code",{parentName:"p"},"examples"),", ",(0,l.kt)("code",{parentName:"p"},"remarks"),", ",(0,l.kt)("code",{parentName:"p"},"response"),", ",(0,l.kt)("code",{parentName:"p"},"full"),". Default is ",(0,l.kt)("code",{parentName:"p"},"full"),".")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--query [query]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,l.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Output type. ",(0,l.kt)("code",{parentName:"p"},"json,text,csv,md"),". Default ",(0,l.kt)("code",{parentName:"p"},"json"))),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--verbose"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Runs command with verbose logging")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--debug"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Runs command with debug logging"))))}s.isMDXComponent=!0},63006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>w,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=n(87462),l=(n(67294),n(3905)),i=n(26054),r=n(74866),s=n(85162);const o={},d="spo list view get",u={unversionedId:"cmd/spo/list/list-view-get",id:"cmd/spo/list/list-view-get",title:"spo list view get",description:"Gets information about specific list view",source:"@site/docs/cmd/spo/list/list-view-get.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-view-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-view-get.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list view add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-add"},next:{title:"spo list view list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-list"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:m},f="wrapper";function w(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spo-list-view-get"},"spo list view get"),(0,l.kt)("p",null,"Gets information about specific list view"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view get [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("dl",null,(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"URL of the site where the list is located")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--listId [listId]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"ID of the list where the view is located. Specify only one of ",(0,l.kt)("code",{parentName:"p"},"listTitle"),", ",(0,l.kt)("code",{parentName:"p"},"listId")," or ",(0,l.kt)("code",{parentName:"p"},"listUrl"))),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--listTitle [listTitle]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Title of the list where the view is located. Specify only one of ",(0,l.kt)("code",{parentName:"p"},"listTitle"),", ",(0,l.kt)("code",{parentName:"p"},"listId")," or ",(0,l.kt)("code",{parentName:"p"},"listUrl"))),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Server- or web-relative URL of the list where the view is located. Specify only one of ",(0,l.kt)("code",{parentName:"p"},"listTitle"),", ",(0,l.kt)("code",{parentName:"p"},"listId")," or ",(0,l.kt)("code",{parentName:"p"},"listUrl"))),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--id [id]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"ID of the view to get. Specify ",(0,l.kt)("code",{parentName:"p"},"title")," or ",(0,l.kt)("code",{parentName:"p"},"id")," but not both")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--title [title]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Title of the view to get. Specify ",(0,l.kt)("code",{parentName:"p"},"title")," or ",(0,l.kt)("code",{parentName:"p"},"id")," but not both"))),(0,l.kt)(i.ZP,{mdxType:"Global"}),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Gets a list view by name from a list located in site ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view get --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle 'My List' --title 'All Items'\n")),(0,l.kt)("p",null,"Gets a list view by ID from a list located in site ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view get --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl 'Lists/My List' --id 330f29c5-5c4c-465f-9f4b-7903020ae1ce\n")),(0,l.kt)("p",null,"Gets a list view by name from a list located in site ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x")),". Retrieve the list by its ID"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view get --webUrl https://contoso.sharepoint.com/sites/project-x --listId 330f29c5-5c4c-465f-9f4b-7903020ae1c1 --title 'All Items'\n")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Aggregations": null,\n  "AggregationsStatus": null,\n  "AssociatedContentTypeId": null,\n  "BaseViewId": "1",\n  "CalendarViewStyles": null,\n  "ColumnWidth": null,\n  "ContentTypeId": {\n    "StringValue": "0x"\n  },\n  "CustomFormatter": null,\n  "CustomOrder": null,\n  "DefaultView": false,\n  "DefaultViewForContentType": false,\n  "EditorModified": false,\n  "Formats": null,\n  "GridLayout": null,\n  "Hidden": false,\n  "HtmlSchemaXml": "<View Name=\\"{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}\\" Type=\\"HTML\\" DisplayName=\\"All events\\" Url=\\"/Lists/Test/All events.aspx\\" Level=\\"1\\" BaseViewID=\\"1\\" ContentTypeID=\\"0x\\" ImageUrl=\\"/_layouts/15/images/generic.png?rev=47\\"><ViewFields><FieldRef Name=\\"Title\\" /></ViewFields><Query><OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where></Query><RowLimit Paged=\\"TRUE\\">30</RowLimit><XslLink Default=\\"TRUE\\">main.xsl</XslLink><JSLink>clienttemplates.js</JSLink><Toolbar Type=\\"Standard\\" /><ParameterBindings><ParameterBinding Name=\\"NoAnnouncements\\" Location=\\"Resource(wss,noXinviewofY_LIST)\\" /><ParameterBinding Name=\\"NoAnnouncementsHowTo\\" Location=\\"Resource(wss,noXinviewofY_DEFAULT)\\" /></ParameterBindings></View>",\n  "Id": "3cd2e934-f482-4d4a-a9b8-a13b49b3d226",\n  "ImageUrl": "/_layouts/15/images/generic.png?rev=47",\n  "IncludeRootFolder": false,\n  "ViewJoins": null,\n  "JSLink": "clienttemplates.js",\n  "ListViewXml": "<View Name=\\"{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}\\" Type=\\"HTML\\" DisplayName=\\"All events\\" Url=\\"/Lists/Test/All events.aspx\\" Level=\\"1\\" BaseViewID=\\"1\\" ContentTypeID=\\"0x\\" ImageUrl=\\"/_layouts/15/images/generic.png?rev=47\\" ><Query><OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name=\\"Title\\" /></ViewFields><RowLimit Paged=\\"TRUE\\">30</RowLimit><JSLink>clienttemplates.js</JSLink><XslLink Default=\\"TRUE\\">main.xsl</XslLink><Toolbar Type=\\"Standard\\"/></View>",\n  "Method": null,\n  "MobileDefaultView": false,\n  "MobileView": false,\n  "ModerationType": null,\n  "NewDocumentTemplates": null,\n  "OrderedView": false,\n  "Paged": true,\n  "PersonalView": false,\n  "ViewProjectedFields": null,\n  "ViewQuery": "<OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where>",\n  "ReadOnlyView": false,\n  "RequiresClientIntegration": false,\n  "RowLimit": 30,\n  "Scope": 0,\n  "ServerRelativePath": {\n    "DecodedUrl": "/Lists/Test/All events.aspx"\n  },\n  "ServerRelativeUrl": "/Lists/Test/All events.aspx",\n  "StyleId": null,\n  "TabularView": true,\n  "Threaded": false,\n  "Title": "All events",\n  "Toolbar": "",\n  "ToolbarTemplateName": null,\n  "ViewType": "HTML",\n  "ViewData": null,\n  "ViewType2": null,\n  "VisualizationInfo": null\n}\n'))),(0,l.kt)(s.Z,{value:"Text",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'Aggregations             : null\nAggregationsStatus       : null\nAssociatedContentTypeId  : null\nBaseViewId               : 1\nCalendarViewStyles       : null\nColumnWidth              : null\nContentTypeId            : {"StringValue":"0x"}\nCustomFormatter          : null\nCustomOrder              : null\nDefaultView              : false\nDefaultViewForContentType: false\nEditorModified           : false\nFormats                  : null\nGridLayout               : null\nHidden                   : false\nHtmlSchemaXml            : <View Name="{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}" Type="HTML" DisplayName="All events" Url="/Lists/Test/All events.aspx" Level="1" BaseViewID="1" ContentTypeID="0x" ImageUrl="/_layouts/15/images/generic.png?rev=47"><ViewFields><FieldRef Name="Title" /></ViewFields><Query><OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where></Query><RowLimit Paged="TRUE">30</RowLimit><XslLink Default="TRUE">main.xsl</XslLink><JSLink>clienttemplates.js</JSLink><Toolbar Type="Standard" /><ParameterBindings><ParameterBinding Name="NoAnnouncements" Location="Resource(wss,noXinviewofY_LIST)" /><ParameterBinding Name="NoAnnouncementsHowTo" Location="Resource(wss,noXinviewofY_DEFAULT)" /></ParameterBindings></View>\nId                       : 3cd2e934-f482-4d4a-a9b8-a13b49b3d226\nImageUrl                 : /_layouts/15/images/generic.png?rev=47\nIncludeRootFolder        : false\nJSLink                   : clienttemplates.js\nListViewXml              : <View Name="{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}" Type="HTML" DisplayName="All events" Url="/Lists/Test/All events.aspx" Level="1" BaseViewID="1" ContentTypeID="0x" ImageUrl="/_layouts/15/images/generic.png?rev=47" ><Query><OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name="Title" /></ViewFields><RowLimit Paged="TRUE">30</RowLimit><JSLink>clienttemplates.js</JSLink><XslLink Default="TRUE">main.xsl</XslLink><Toolbar Type="Standard"/></View>\nMethod                   : null\nMobileDefaultView        : false\nMobileView               : false\nModerationType           : null\nNewDocumentTemplates     : null\nOrderedView              : false\nPaged                    : true\nPersonalView             : false\nReadOnlyView             : false\nRequiresClientIntegration: false\nRowLimit                 : 30\nScope                    : 0\nServerRelativePath       : {"DecodedUrl":"/Lists/Test/All events.aspx"}\nServerRelativeUrl        : /Lists/Test/All events.aspx\nStyleId                  : null\nTabularView              : true\nThreaded                 : false\nTitle                    : All events\nToolbar                  :\nToolbarTemplateName      : null\nViewData                 : null\nViewJoins                : null\nViewProjectedFields      : null\nViewQuery                : <OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where>\nViewType                 : HTML\nViewType2                : null\nVisualizationInfo        : null\n'))),(0,l.kt)(s.Z,{value:"CSV",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},'Aggregations,AggregationsStatus,AssociatedContentTypeId,BaseViewId,CalendarViewStyles,ColumnWidth,ContentTypeId,CustomFormatter,CustomOrder,DefaultView,DefaultViewForContentType,EditorModified,Formats,GridLayout,Hidden,HtmlSchemaXml,Id,ImageUrl,IncludeRootFolder,ViewJoins,JSLink,ListViewXml,Method,MobileDefaultView,MobileView,ModerationType,NewDocumentTemplates,OrderedView,Paged,PersonalView,ViewProjectedFields,ViewQuery,ReadOnlyView,RequiresClientIntegration,RowLimit,Scope,ServerRelativePath,ServerRelativeUrl,StyleId,TabularView,Threaded,Title,Toolbar,ToolbarTemplateName,ViewType,ViewData,ViewType2,VisualizationInfo\n,,,1,,,"{""StringValue"":""0x""}",,,,,,,,,"<View Name=""{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}"" Type=""HTML"" DisplayName=""All events"" Url=""/Lists/Test/All events.aspx"" Level=""1"" BaseViewID=""1"" ContentTypeID=""0x"" ImageUrl=""/_layouts/15/images/generic.png?rev=47""><ViewFields><FieldRef Name=""Title"" /></ViewFields><Query><OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where></Query><RowLimit Paged=""TRUE"">30</RowLimit><XslLink Default=""TRUE"">main.xsl</XslLink><JSLink>clienttemplates.js</JSLink><Toolbar Type=""Standard"" /><ParameterBindings><ParameterBinding Name=""NoAnnouncements"" Location=""Resource(wss,noXinviewofY_LIST)"" /><ParameterBinding Name=""NoAnnouncementsHowTo"" Location=""Resource(wss,noXinviewofY_DEFAULT)"" /></ParameterBindings></View>",3cd2e934-f482-4d4a-a9b8-a13b49b3d226,/_layouts/15/images/generic.png?rev=47,,,clienttemplates.js,"<View Name=""{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}"" Type=""HTML"" DisplayName=""All events"" Url=""/Lists/Test/All events.aspx"" Level=""1"" BaseViewID=""1"" ContentTypeID=""0x"" ImageUrl=""/_layouts/15/images/generic.png?rev=47"" ><Query><OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name=""Title"" /></ViewFields><RowLimit Paged=""TRUE"">30</RowLimit><JSLink>clienttemplates.js</JSLink><XslLink Default=""TRUE"">main.xsl</XslLink><Toolbar Type=""Standard""/></View>",,,,,,,1,,,"<OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where>",,,30,0,"{""DecodedUrl"":""/Lists/Test/All events.aspx""}",/Lists/Test/All events.aspx,,1,,All events,,,HTML,,,\n'))),(0,l.kt)(s.Z,{value:"Markdown",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},'# spo list view get --webUrl "https://contoso.sharepoint.com" --listTitle "My List" --title "All Items"\n\nDate: 2/20/2023\n\n## All Items (6275ed5c-8e4f-4e81-8060-2d9162b29952)\n\nProperty | Value\n---------|-------\nAggregations | null\nAggregationsStatus | null\nAssociatedContentTypeId | null\nBaseViewId | 1\nCalendarViewStyles | null\nColumnWidth | null\nContentTypeId | {"StringValue":"0x"}\nCustomFormatter |\nCustomOrder | null\nDefaultView | true\nDefaultViewForContentType | false\nEditorModified | false\nFormats | null\nGridLayout | null\nHidden | false\nHtmlSchemaXml | <View Name="{6275ED5C-8E4F-4E81-8060-2D9162B29952}" DefaultView="TRUE" MobileView="TRUE" MobileDefaultView="TRUE" Type="HTML" DisplayName="All Items" Url="/teams/AllStars/Lists/My List/AllItems.aspx" Level="1" BaseViewID="1" ContentTypeID="0x" ImageUrl="/\\_layouts/15/images/generic.png?rev=47"><Query /><ViewFields><FieldRef Name="LinkTitle" /><FieldRef Name="FieldName1" /></ViewFields><Toolbar Type="Standard" /><CustomFormatter /><XslLink Default="TRUE">main.xsl</XslLink><JSLink>clienttemplates.js</JSLink><RowLimit Paged="TRUE">30</RowLimit><ParameterBindings><ParameterBinding Name="NoAnnouncements" Location="Resource(wss,noXinviewofY\\_LIST)" /><ParameterBinding Name="NoAnnouncementsHowTo" Location="Resource(wss,noXinviewofY\\_DEFAULT)" /></ParameterBindings></View>\nId | 6275ed5c-8e4f-4e81-8060-2d9162b29952\nImageUrl | /\\_layouts/15/images/generic.png?rev=47\nIncludeRootFolder | false\nViewJoins | null\nJSLink | clienttemplates.js\nListViewXml | <View Name="{6275ED5C-8E4F-4E81-8060-2D9162B29952}" DefaultView="TRUE" MobileView="TRUE" MobileDefaultView="TRUE" Type="HTML" DisplayName="All Items" Url="/teams/AllStars/Lists/My List/AllItems.aspx" Level="1" BaseViewID="1" ContentTypeID="0x" ImageUrl="/\\_layouts/15/images/generic.png?rev=47" ><Query /><ViewFields><FieldRef Name="LinkTitle" /><FieldRef Name="FieldName1" /></ViewFields><RowLimit Paged="TRUE">30</RowLimit><JSLink>clienttemplates.js</JSLink><XslLink Default="TRUE">main.xsl</XslLink><CustomFormatter /><Toolbar Type="Standard"/></View>\nMethod | null\nMobileDefaultView | true\nMobileView | true\nModerationType | null\nNewDocumentTemplates | null\nOrderedView | false\nPaged | true\nPersonalView | false\nViewProjectedFields | null\nViewQuery |\nReadOnlyView | false\nRequiresClientIntegration | false\nRowLimit | 30\nScope | 0\nServerRelativePath | {"DecodedUrl":"/teams/AllStars/Lists/My List/AllItems.aspx"}\nServerRelativeUrl | /teams/AllStars/Lists/My List/AllItems.aspx\nStyleId | null\nTabularView | true\nThreaded | false\nTitle | All Items\nToolbar |\nToolbarTemplateName | null\nViewType | HTML\nViewData | null\nViewType2 | null\nVisualizationInfo | null\n')))))}w.isMDXComponent=!0}}]);