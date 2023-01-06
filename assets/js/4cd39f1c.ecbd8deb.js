"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71761],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>w});var i=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var d=i.createContext({}),o=function(e){var t=i.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},p=function(e){var t=o(e.components);return i.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(l),c=n,w=u["".concat(d,".").concat(c)]||u[c]||m[c]||a;return l?i.createElement(w,r(r({ref:t},p),{},{components:l})):i.createElement(w,r({ref:t},p))}));function w(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,r=new Array(a);r[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var o=2;o<a;o++)r[o]=l[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,l)}c.displayName="MDXCreateElement"},28246:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var i=l(87462),n=(l(67294),l(3905));const a={},r="spo list view add",s={unversionedId:"cmd/spo/list/list-view-add",id:"cmd/spo/list/list-view-add",title:"spo list view add",description:"Adds a new view to a SharePoint list",source:"@site/docs/cmd/spo/list/list-view-add.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-view-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-view-add.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list sitescript get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-sitescript-get"},next:{title:"spo list view field add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-field-add"}},d={},o=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:o};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-list-view-add"},"spo list view add"),(0,n.kt)("p",null,"Adds a new view to a SharePoint list"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view add [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list is located."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--listId [listId]"),"\n: ID of the list to which the view should be added. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl")," but not multiple."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--listTitle [listTitle]"),"\n: Title of the list to which the view should be added. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl")," but not multiple."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Relative URL of the list to which the view should be added. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl")," but not multiple."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--title <title>"),"\n: Title of the view to be created for the list."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--fields <fields>"),"\n: Comma-separated list of ",(0,n.kt)("strong",{parentName:"p"},"case-sensitive")," internal names of the fields to add to the view."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--viewQuery [viewQuery]"),"\n: XML representation of the list query for the underlying view."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--personal"),"\n: View will be created as personal view, if specified."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--default"),"\n: View will be set as default view, if specified."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--paged"),"\n: View supports paging, if specified (recommended to use this)."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--rowLimit [rowLimit]"),"\n: Sets the number of items to display for the view. Default value is 30."),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"We recommend using the ",(0,n.kt)("inlineCode",{parentName:"p"},"paged")," option. When specified, the view supports displaying more items page by page (default behavior). When not specified, the ",(0,n.kt)("inlineCode",{parentName:"p"},"rowLimit")," is absolute, and there is no link to see more items."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Add a view called ",(0,n.kt)("em",{parentName:"p"},"All events")," to a list with specific title."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list view add --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle "My List" --title "All events" --fields "FieldName1,FieldName2,Created,Author,Modified,Editor" --paged\n')),(0,n.kt)("p",null,"Add a view as default view with title ",(0,n.kt)("em",{parentName:"p"},"All events")," to a list with a specific URL."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list view add --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl "/Lists/MyList" --title "All events" --fields "FieldName1,Created" --paged --default\n')),(0,n.kt)("p",null,"Add a personal view called ",(0,n.kt)("em",{parentName:"p"},"All events")," to a list with a specific ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list view add --webUrl https://contoso.sharepoint.com/sites/project-x --listId 00000000-0000-0000-0000-000000000000 --title "All events" --fields "FieldName1,Created" --paged --personal\n')),(0,n.kt)("p",null,"Add a view called ",(0,n.kt)("em",{parentName:"p"},"All events")," with defined filter and sorting."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view add --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle \"My List\" --title \"All events\" --fields \"FieldName1\" --viewQuery \"<OrderBy><FieldRef Name='Created' Ascending='FALSE' /></OrderBy><Where><Eq><FieldRef Name='TextFieldName' /><Value Type='Text'>Field value</Value></Eq></Where>\" --paged\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,'=== "JSON"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```json\n{\n  "Aggregations": null,\n  "AggregationsStatus": null,\n  "AssociatedContentTypeId": null,\n  "BaseViewId": null,\n  "CalendarViewStyles": null,\n  "ColumnWidth": null,\n  "ContentTypeId": {\n    "StringValue": "0x"\n  },\n  "CustomFormatter": null,\n  "CustomOrder": null,\n  "DefaultView": false,\n  "DefaultViewForContentType": false,\n  "EditorModified": false,\n  "Formats": null,\n  "GridLayout": null,\n  "Hidden": false,\n  "HtmlSchemaXml": "<View Type=\\"HTML\\" Url=\\"/Lists/Test/All events.aspx\\" Personal=\\"FALSE\\" DisplayName=\\"All events\\" DefaultView=\\"FALSE\\" Name=\\"{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}\\"><ViewFields><FieldRef Name=\\"Title\\" /></ViewFields><Query><OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where></Query><RowLimit Paged=\\"TRUE\\">30</RowLimit></View>",\n  "Id": "3cd2e934-f482-4d4a-a9b8-a13b49b3d226",\n  "ImageUrl": null,\n  "IncludeRootFolder": false,\n  "ViewJoins": null,\n  "JSLink": null,\n  "ListViewXml": "<View Type=\\"HTML\\" Url=\\"/Lists/Test/All events.aspx\\" Personal=\\"FALSE\\" DisplayName=\\"All events\\" DefaultView=\\"FALSE\\" Name=\\"{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}\\" ><Query><OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name=\\"Title\\" /></ViewFields><RowLimit Paged=\\"TRUE\\">30</RowLimit><Toolbar Type=\\"None\\"/></View>",\n  "Method": null,\n  "MobileDefaultView": false,\n  "MobileView": false,\n  "ModerationType": null,\n  "NewDocumentTemplates": null,\n  "OrderedView": false,\n  "Paged": true,\n  "PersonalView": false,\n  "ViewProjectedFields": null,\n  "ViewQuery": "<OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where>",\n  "ReadOnlyView": false,\n  "RequiresClientIntegration": false,\n  "RowLimit": 30,\n  "Scope": 0,\n  "ServerRelativePath": {\n    "DecodedUrl": "/Lists/Test/All events.aspx"\n  },\n  "ServerRelativeUrl": "/Lists/Test/All events.aspx",\n  "StyleId": null,\n  "TabularView": true,\n  "Threaded": false,\n  "Title": "All events",\n  "Toolbar": null,\n  "ToolbarTemplateName": null,\n  "ViewType": "HTML",\n  "ViewData": null,\n  "ViewType2": null,\n  "VisualizationInfo": null\n}\n```\n')),(0,n.kt)("p",null,'=== "Text"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```text\nAggregations             : null\nAggregationsStatus       : null\nAssociatedContentTypeId  : null\nBaseViewId               : null\nCalendarViewStyles       : null\nColumnWidth              : null\nContentTypeId            : {"StringValue":"0x"}\nCustomFormatter          : null\nCustomOrder              : null\nDefaultView              : false\nDefaultViewForContentType: false\nEditorModified           : false\nFormats                  : null\nGridLayout               : null\nHidden                   : false\nHtmlSchemaXml            : <View Type="HTML" Url="/Lists/Test/All events1.aspx" Personal="FALSE" DisplayName="All events" DefaultView="FALSE" Name="{F037FE93-4C74-4ACB-B7B0-71BA599F13C1}"><ViewFields><FieldRef Name="Title" /></ViewFields><Query><OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where></Query><RowLimit Paged="TRUE">30</RowLimit></View>\nId                       : f037fe93-4c74-4acb-b7b0-71ba599f13c1\nImageUrl                 : null\nIncludeRootFolder        : false\nJSLink                   : null\nListViewXml              : <View Type="HTML" Url="/Lists/Test/All events1.aspx" Personal="FALSE" DisplayName="All events" DefaultView="FALSE" Name="{F037FE93-4C74-4ACB-B7B0-71BA599F13C1}" ><Query><OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name="Title" /></ViewFields><RowLimit Paged="TRUE">30</RowLimit><Toolbar Type="None"/></View>\nMethod                   : null\nMobileDefaultView        : false\nMobileView               : false\nModerationType           : null\nNewDocumentTemplates     : null\nOrderedView              : false\nPaged                    : true\nPersonalView             : false\nReadOnlyView             : false\nRequiresClientIntegration: false\nRowLimit                 : 30\nScope                    : 0\nServerRelativePath       : {"DecodedUrl":"/Lists/Test/All events1.aspx"}\nServerRelativeUrl        : /Lists/Test/All events1.aspx\nStyleId                  : null\nTabularView              : true\nThreaded                 : false\nTitle                    : All events\nToolbar                  : null\nToolbarTemplateName      : null\nViewData                 : null\nViewJoins                : null\nViewProjectedFields      : null\nViewQuery                : <OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where>\nViewType                 : HTML\nViewType2                : null\nVisualizationInfo        : null\n```\n')),(0,n.kt)("p",null,'=== "CSV"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```csv\nAggregations,AggregationsStatus,AssociatedContentTypeId,BaseViewId,CalendarViewStyles,ColumnWidth,ContentTypeId,CustomFormatter,CustomOrder,DefaultView,DefaultViewForContentType,EditorModified,Formats,GridLayout,Hidden,HtmlSchemaXml,Id,ImageUrl,IncludeRootFolder,ViewJoins,JSLink,ListViewXml,Method,MobileDefaultView,MobileView,ModerationType,NewDocumentTemplates,OrderedView,Paged,PersonalView,ViewProjectedFields,ViewQuery,ReadOnlyView,RequiresClientIntegration,RowLimit,Scope,ServerRelativePath,ServerRelativeUrl,StyleId,TabularView,Threaded,Title,Toolbar,ToolbarTemplateName,ViewType,ViewData,ViewType2,VisualizationInfo\n,,,,,,"{""StringValue"":""0x""}",,,,,,,,,"<View Type=""HTML"" Url=""/Lists/Test/All events2.aspx"" Personal=""FALSE"" DisplayName=""All events"" DefaultView=""FALSE"" Name=""{0F11C3F1-E174-4A85-93A9-B4AFB7BD41B6}""><ViewFields><FieldRef Name=""Title"" /></ViewFields><Query><OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where></Query><RowLimit Paged=""TRUE"">30</RowLimit></View>",0f11c3f1-e174-4a85-93a9-b4afb7bd41b6,,,,,"<View Type=""HTML"" Url=""/Lists/Test/All events2.aspx"" Personal=""FALSE"" DisplayName=""All events"" DefaultView=""FALSE"" Name=""{0F11C3F1-E174-4A85-93A9-B4AFB7BD41B6}"" ><Query><OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name=""Title"" /></ViewFields><RowLimit Paged=""TRUE"">30</RowLimit><Toolbar Type=""None""/></View>",,,,,,,1,,,"<OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where>",,,30,0,"{""DecodedUrl"":""/Lists/Test/All events2.aspx""}",/Lists/Test/All events2.aspx,,1,,All events,,,HTML,,,\n```\n')))}u.isMDXComponent=!0}}]);