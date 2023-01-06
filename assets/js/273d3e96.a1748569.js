"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=i.createContext({}),d=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(n),c=l,w=m["".concat(o,".").concat(c)]||m[c]||u[c]||a;return n?i.createElement(w,s(s({ref:t},p),{},{components:n})):i.createElement(w,s({ref:t},p))}));function w(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=c;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[m]="string"==typeof e?e:l,s[1]=r;for(var d=2;d<a;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(87462),l=(n(67294),n(3905));const a={},s="spo list view get",r={unversionedId:"cmd/spo/list/list-view-get",id:"cmd/spo/list/list-view-get",title:"spo list view get",description:"Gets information about specific list view",source:"@site/docs/cmd/spo/list/list-view-get.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-view-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-view-get.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list view field set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-field-set"},next:{title:"spo list view list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-list"}},o={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spo-list-view-get"},"spo list view get"),(0,l.kt)("p",null,"Gets information about specific list view"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view get [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list is located"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--listId [listId]"),"\n: ID of the list where the view is located. Specify only one of ",(0,l.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--listTitle [listTitle]"),"\n: Title of the list where the view is located. Specify only one of ",(0,l.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or web-relative URL of the list where the view is located. Specify only one of ",(0,l.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--id [id]"),"\n: ID of the view to get. Specify ",(0,l.kt)("inlineCode",{parentName:"p"},"title")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," but not both"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--title [title]"),"\n: Title of the view to get. Specify ",(0,l.kt)("inlineCode",{parentName:"p"},"title")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," but not both"),(0,l.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Gets a list view by name from a list located in site ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view get --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle 'My List' --title 'All Items'\n")),(0,l.kt)("p",null,"Gets a list view by ID from a list located in site ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view get --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl 'Lists/My List' --id 330f29c5-5c4c-465f-9f4b-7903020ae1ce\n")),(0,l.kt)("p",null,"Gets a list view by name from a list located in site ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x")),". Retrieve the list by its ID"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view get --webUrl https://contoso.sharepoint.com/sites/project-x --listId 330f29c5-5c4c-465f-9f4b-7903020ae1c1 --title 'All Items'\n")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("p",null,'=== "JSON"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'```json\n{\n  "Aggregations": null,\n  "AggregationsStatus": null,\n  "AssociatedContentTypeId": null,\n  "BaseViewId": "1",\n  "CalendarViewStyles": null,\n  "ColumnWidth": null,\n  "ContentTypeId": {\n    "StringValue": "0x"\n  },\n  "CustomFormatter": null,\n  "CustomOrder": null,\n  "DefaultView": false,\n  "DefaultViewForContentType": false,\n  "EditorModified": false,\n  "Formats": null,\n  "GridLayout": null,\n  "Hidden": false,\n  "HtmlSchemaXml": "<View Name=\\"{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}\\" Type=\\"HTML\\" DisplayName=\\"All events\\" Url=\\"/Lists/Test/All events.aspx\\" Level=\\"1\\" BaseViewID=\\"1\\" ContentTypeID=\\"0x\\" ImageUrl=\\"/_layouts/15/images/generic.png?rev=47\\"><ViewFields><FieldRef Name=\\"Title\\" /></ViewFields><Query><OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where></Query><RowLimit Paged=\\"TRUE\\">30</RowLimit><XslLink Default=\\"TRUE\\">main.xsl</XslLink><JSLink>clienttemplates.js</JSLink><Toolbar Type=\\"Standard\\" /><ParameterBindings><ParameterBinding Name=\\"NoAnnouncements\\" Location=\\"Resource(wss,noXinviewofY_LIST)\\" /><ParameterBinding Name=\\"NoAnnouncementsHowTo\\" Location=\\"Resource(wss,noXinviewofY_DEFAULT)\\" /></ParameterBindings></View>",\n  "Id": "3cd2e934-f482-4d4a-a9b8-a13b49b3d226",\n  "ImageUrl": "/_layouts/15/images/generic.png?rev=47",\n  "IncludeRootFolder": false,\n  "ViewJoins": null,\n  "JSLink": "clienttemplates.js",\n  "ListViewXml": "<View Name=\\"{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}\\" Type=\\"HTML\\" DisplayName=\\"All events\\" Url=\\"/Lists/Test/All events.aspx\\" Level=\\"1\\" BaseViewID=\\"1\\" ContentTypeID=\\"0x\\" ImageUrl=\\"/_layouts/15/images/generic.png?rev=47\\" ><Query><OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name=\\"Title\\" /></ViewFields><RowLimit Paged=\\"TRUE\\">30</RowLimit><JSLink>clienttemplates.js</JSLink><XslLink Default=\\"TRUE\\">main.xsl</XslLink><Toolbar Type=\\"Standard\\"/></View>",\n  "Method": null,\n  "MobileDefaultView": false,\n  "MobileView": false,\n  "ModerationType": null,\n  "NewDocumentTemplates": null,\n  "OrderedView": false,\n  "Paged": true,\n  "PersonalView": false,\n  "ViewProjectedFields": null,\n  "ViewQuery": "<OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where>",\n  "ReadOnlyView": false,\n  "RequiresClientIntegration": false,\n  "RowLimit": 30,\n  "Scope": 0,\n  "ServerRelativePath": {\n    "DecodedUrl": "/Lists/Test/All events.aspx"\n  },\n  "ServerRelativeUrl": "/Lists/Test/All events.aspx",\n  "StyleId": null,\n  "TabularView": true,\n  "Threaded": false,\n  "Title": "All events",\n  "Toolbar": "",\n  "ToolbarTemplateName": null,\n  "ViewType": "HTML",\n  "ViewData": null,\n  "ViewType2": null,\n  "VisualizationInfo": null\n}\n```\n')),(0,l.kt)("p",null,'=== "Text"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'```text\nAggregations             : null\nAggregationsStatus       : null\nAssociatedContentTypeId  : null\nBaseViewId               : 1\nCalendarViewStyles       : null\nColumnWidth              : null\nContentTypeId            : {"StringValue":"0x"}\nCustomFormatter          : null\nCustomOrder              : null\nDefaultView              : false\nDefaultViewForContentType: false\nEditorModified           : false\nFormats                  : null\nGridLayout               : null\nHidden                   : false\nHtmlSchemaXml            : <View Name="{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}" Type="HTML" DisplayName="All events" Url="/Lists/Test/All events.aspx" Level="1" BaseViewID="1" ContentTypeID="0x" ImageUrl="/_layouts/15/images/generic.png?rev=47"><ViewFields><FieldRef Name="Title" /></ViewFields><Query><OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where></Query><RowLimit Paged="TRUE">30</RowLimit><XslLink Default="TRUE">main.xsl</XslLink><JSLink>clienttemplates.js</JSLink><Toolbar Type="Standard" /><ParameterBindings><ParameterBinding Name="NoAnnouncements" Location="Resource(wss,noXinviewofY_LIST)" /><ParameterBinding Name="NoAnnouncementsHowTo" Location="Resource(wss,noXinviewofY_DEFAULT)" /></ParameterBindings></View>\nId                       : 3cd2e934-f482-4d4a-a9b8-a13b49b3d226\nImageUrl                 : /_layouts/15/images/generic.png?rev=47\nIncludeRootFolder        : false\nJSLink                   : clienttemplates.js\nListViewXml              : <View Name="{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}" Type="HTML" DisplayName="All events" Url="/Lists/Test/All events.aspx" Level="1" BaseViewID="1" ContentTypeID="0x" ImageUrl="/_layouts/15/images/generic.png?rev=47" ><Query><OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name="Title" /></ViewFields><RowLimit Paged="TRUE">30</RowLimit><JSLink>clienttemplates.js</JSLink><XslLink Default="TRUE">main.xsl</XslLink><Toolbar Type="Standard"/></View>\nMethod                   : null\nMobileDefaultView        : false\nMobileView               : false\nModerationType           : null\nNewDocumentTemplates     : null\nOrderedView              : false\nPaged                    : true\nPersonalView             : false\nReadOnlyView             : false\nRequiresClientIntegration: false\nRowLimit                 : 30\nScope                    : 0\nServerRelativePath       : {"DecodedUrl":"/Lists/Test/All events.aspx"}\nServerRelativeUrl        : /Lists/Test/All events.aspx\nStyleId                  : null\nTabularView              : true\nThreaded                 : false\nTitle                    : All events\nToolbar                  :\nToolbarTemplateName      : null\nViewData                 : null\nViewJoins                : null\nViewProjectedFields      : null\nViewQuery                : <OrderBy><FieldRef Name="Created" Ascending="FALSE" /></OrderBy><Where><Eq><FieldRef Name="TextFieldName" /><Value Type="Text">Field value</Value></Eq></Where>\nViewType                 : HTML\nViewType2                : null\nVisualizationInfo        : null\n```\n')),(0,l.kt)("p",null,'=== "CSV"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'```csv\nAggregations,AggregationsStatus,AssociatedContentTypeId,BaseViewId,CalendarViewStyles,ColumnWidth,ContentTypeId,CustomFormatter,CustomOrder,DefaultView,DefaultViewForContentType,EditorModified,Formats,GridLayout,Hidden,HtmlSchemaXml,Id,ImageUrl,IncludeRootFolder,ViewJoins,JSLink,ListViewXml,Method,MobileDefaultView,MobileView,ModerationType,NewDocumentTemplates,OrderedView,Paged,PersonalView,ViewProjectedFields,ViewQuery,ReadOnlyView,RequiresClientIntegration,RowLimit,Scope,ServerRelativePath,ServerRelativeUrl,StyleId,TabularView,Threaded,Title,Toolbar,ToolbarTemplateName,ViewType,ViewData,ViewType2,VisualizationInfo\n,,,1,,,"{""StringValue"":""0x""}",,,,,,,,,"<View Name=""{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}"" Type=""HTML"" DisplayName=""All events"" Url=""/Lists/Test/All events.aspx"" Level=""1"" BaseViewID=""1"" ContentTypeID=""0x"" ImageUrl=""/_layouts/15/images/generic.png?rev=47""><ViewFields><FieldRef Name=""Title"" /></ViewFields><Query><OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where></Query><RowLimit Paged=""TRUE"">30</RowLimit><XslLink Default=""TRUE"">main.xsl</XslLink><JSLink>clienttemplates.js</JSLink><Toolbar Type=""Standard"" /><ParameterBindings><ParameterBinding Name=""NoAnnouncements"" Location=""Resource(wss,noXinviewofY_LIST)"" /><ParameterBinding Name=""NoAnnouncementsHowTo"" Location=""Resource(wss,noXinviewofY_DEFAULT)"" /></ParameterBindings></View>",3cd2e934-f482-4d4a-a9b8-a13b49b3d226,/_layouts/15/images/generic.png?rev=47,,,clienttemplates.js,"<View Name=""{3CD2E934-F482-4D4A-A9B8-A13B49B3D226}"" Type=""HTML"" DisplayName=""All events"" Url=""/Lists/Test/All events.aspx"" Level=""1"" BaseViewID=""1"" ContentTypeID=""0x"" ImageUrl=""/_layouts/15/images/generic.png?rev=47"" ><Query><OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name=""Title"" /></ViewFields><RowLimit Paged=""TRUE"">30</RowLimit><JSLink>clienttemplates.js</JSLink><XslLink Default=""TRUE"">main.xsl</XslLink><Toolbar Type=""Standard""/></View>",,,,,,,1,,,"<OrderBy><FieldRef Name=""Created"" Ascending=""FALSE"" /></OrderBy><Where><Eq><FieldRef Name=""TextFieldName"" /><Value Type=""Text"">Field value</Value></Eq></Where>",,,30,0,"{""DecodedUrl"":""/Lists/Test/All events.aspx""}",/Lists/Test/All events.aspx,,1,,All events,,,HTML,,,\n```\n')))}m.isMDXComponent=!0}}]);