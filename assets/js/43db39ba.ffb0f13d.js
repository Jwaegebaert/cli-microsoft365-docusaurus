"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[61808],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>f});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(l),m=a,f=c["".concat(o,".").concat(m)]||c[m]||p[m]||r;return l?n.createElement(f,i(i({ref:t},d),{},{components:l})):n.createElement(f,i({ref:t},d))}));function f(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=l[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},37884:(e,t,l)=>{l.d(t,{ZP:()=>s});var n=l(87462),a=(l(67294),l(3905));const r={toc:[]},i="wrapper";function s(e){let{components:t,...l}=e;return(0,a.kt)(i,(0,n.Z)({},r,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-h, --help [help]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",null,"options"),", ",(0,a.kt)("code",null,"examples"),", ",(0,a.kt)("code",null,"remarks"),", ",(0,a.kt)("code",null,"response"),", ",(0,a.kt)("code",null,"full"),". Default is ",(0,a.kt)("code",null,"full"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--query [query]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"JMESPath query string. See ",(0,a.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-o, --output [output]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output type. ",(0,a.kt)("code",null,"json"),", ",(0,a.kt)("code",null,"text"),", ",(0,a.kt)("code",null,"csv"),", ",(0,a.kt)("code",null,"md"),". Default is ",(0,a.kt)("code",null,"json"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--verbose"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with verbose logging.")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--debug"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},85162:(e,t,l)=>{l.d(t,{Z:()=>i});var n=l(67294),a=l(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:l,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:l},t)}},74866:(e,t,l)=>{l.d(t,{Z:()=>T});var n=l(87462),a=l(67294),r=l(86010),i=l(12466),s=l(56697),o=l(91980),u=l(67392),d=l(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:l,attributes:n,default:a}}=e;return{value:t,label:l,attributes:n,default:a}}))}function p(e){const{values:t,children:l}=e;return(0,a.useMemo)((()=>{const e=t??c(l);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function m(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:l}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function w(e){const{defaultValue:t,queryString:l=!1,groupId:n}=e,r=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,u]=f({queryString:l,groupId:n}),[c,w]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(l);return[n,(0,a.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:n}),k=(()=>{const e=o??c;return m({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),w(e)}),[u,w,r]),tabValues:r}}var k=l(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:l,selectedValue:s,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,l=d.indexOf(t),n=u[l].value;n!==s&&(c(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const l=d.indexOf(e.currentTarget)+1;t=d[l]??d[0];break}case"ArrowLeft":{const l=d.indexOf(e.currentTarget)-1;t=d[l]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},t)},u.map((e=>{let{value:t,label:l,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===t})}),l??t)})))}function y(e){let{lazy:t,children:l,selectedValue:n}=e;if(l=Array.isArray(l)?l:[l],t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=w(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return a.createElement(b,(0,n.Z)({key:String(t)},e))}},10803:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>w,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=l(87462),a=(l(67294),l(3905)),r=l(37884),i=l(74866),s=l(85162);const o={},u="spo list view list",d={unversionedId:"cmd/spo/list/list-view-list",id:"cmd/spo/list/list-view-list",title:"spo list view list",description:"Lists views configured on the specified list",source:"@site/docs/cmd/spo/list/list-view-list.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-view-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-view-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo list view get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-get"},next:{title:"spo list view remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-remove"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:p},f="wrapper";function w(e){let{components:t,...l}=e;return(0,a.kt)(f,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-list-view-list"},"spo list view list"),(0,a.kt)("p",null,"Lists views configured on the specified list"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"URL of the site where the list is located")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-i, --listId [listId]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"ID of the list for which to list configured views. Specify either ",(0,a.kt)("code",{parentName:"p"},"listId"),", ",(0,a.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,a.kt)("code",{parentName:"p"},"listUrl"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-t, --listTitle [listTitle]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Title of the list for which to list configured views. Specify either ",(0,a.kt)("code",{parentName:"p"},"listId"),", ",(0,a.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,a.kt)("code",{parentName:"p"},"listUrl"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Server- or site-relative URL of the list. Specify either ",(0,a.kt)("code",{parentName:"p"},"listId")," , ",(0,a.kt)("code",{parentName:"p"},"listTitle")," or ",(0,a.kt)("code",{parentName:"p"},"listUrl"),"."))),(0,a.kt)(r.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"List all views for a list by title"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view list --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle Documents\n")),(0,a.kt)("p",null,"List all views for a list by ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view list --webUrl https://contoso.sharepoint.com/sites/project-x --listId 0cd891ef-afce-4e55-b836-fce03286cccf\n")),(0,a.kt)("p",null,"List all views for a list by URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view list --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl '/sites/project-x/lists/Events'\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Aggregations": null,\n    "AggregationsStatus": null,\n    "AssociatedContentTypeId": null,\n    "BaseViewId": "1",\n    "CalendarViewStyles": null,\n    "ColumnWidth": null,\n    "ContentTypeId": {\n      "StringValue": "0x"\n    },\n    "CustomFormatter": null,\n    "CustomOrder": null,\n    "DefaultView": false,\n    "DefaultViewForContentType": false,\n    "EditorModified": false,\n    "Formats": null,\n    "GridLayout": null,\n    "Hidden": false,\n    "HtmlSchemaXml": "<View Name=\\"{0F11C3F1-E174-4A85-93A9-B4AFB7BD41B6}\\" Type=\\"HTML\\" DisplayName=\\"All events\\" Url=\\"/Lists/Test/All events2.aspx\\" Level=\\"1\\" BaseViewID=\\"1\\" ContentTypeID=\\"0x\\" ImageUrl=\\"/_layouts/15/images/generic.png?rev=47\\"><ViewFields><FieldRef Name=\\"Title\\" /></ViewFields><Query><OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where></Query><RowLimit Paged=\\"TRUE\\">30</RowLimit><XslLink Default=\\"TRUE\\">main.xsl</XslLink><JSLink>clienttemplates.js</JSLink><Toolbar Type=\\"Standard\\" /><ParameterBindings><ParameterBinding Name=\\"NoAnnouncements\\" Location=\\"Resource(wss,noXinviewofY_LIST)\\" /><ParameterBinding Name=\\"NoAnnouncementsHowTo\\" Location=\\"Resource(wss,noXinviewofY_DEFAULT)\\" /></ParameterBindings></View>",\n    "Id": "0f11c3f1-e174-4a85-93a9-b4afb7bd41b6",\n    "ImageUrl": "/_layouts/15/images/generic.png?rev=47",\n    "IncludeRootFolder": false,\n    "ViewJoins": null,\n    "JSLink": "clienttemplates.js",\n    "ListViewXml": "<View Name=\\"{0F11C3F1-E174-4A85-93A9-B4AFB7BD41B6}\\" Type=\\"HTML\\" DisplayName=\\"All events\\" Url=\\"/Lists/Test/All events2.aspx\\" Level=\\"1\\" BaseViewID=\\"1\\" ContentTypeID=\\"0x\\" ImageUrl=\\"/_layouts/15/images/generic.png?rev=47\\" ><Query><OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where></Query><ViewFields><FieldRef Name=\\"Title\\" /></ViewFields><RowLimit Paged=\\"TRUE\\">30</RowLimit><JSLink>clienttemplates.js</JSLink><XslLink Default=\\"TRUE\\">main.xsl</XslLink><Toolbar Type=\\"Standard\\"/></View>",\n    "Method": null,\n    "MobileDefaultView": false,\n    "MobileView": false,\n    "ModerationType": null,\n    "NewDocumentTemplates": null,\n    "OrderedView": false,\n    "Paged": true,\n    "PersonalView": false,\n    "ViewProjectedFields": null,\n    "ViewQuery": "<OrderBy><FieldRef Name=\\"Created\\" Ascending=\\"FALSE\\" /></OrderBy><Where><Eq><FieldRef Name=\\"TextFieldName\\" /><Value Type=\\"Text\\">Field value</Value></Eq></Where>",\n    "ReadOnlyView": false,\n    "RequiresClientIntegration": false,\n    "RowLimit": 30,\n    "Scope": 0,\n    "ServerRelativePath": {\n      "DecodedUrl": "/Lists/Test/All events2.aspx"\n    },\n    "ServerRelativeUrl": "/Lists/Test/All events2.aspx",\n    "StyleId": null,\n    "TabularView": true,\n    "Threaded": false,\n    "Title": "All events",\n    "Toolbar": "",\n    "ToolbarTemplateName": null,\n    "ViewType": "HTML",\n    "ViewData": null,\n    "ViewType2": null,\n    "VisualizationInfo": null\n  }\n]\n'))),(0,a.kt)(s.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Id                                    Title       DefaultView  Hidden  BaseViewId\n------------------------------------  ----------  -----------  ------  ----------\n3cd2e934-f482-4d4a-a9b8-a13b49b3d226  All events  false        false   1\n"))),(0,a.kt)(s.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"Id,Title,DefaultView,Hidden,BaseViewId\n3cd2e934-f482-4d4a-a9b8-a13b49b3d226,All events,,,1\n"))),(0,a.kt)(s.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'# spo list view list --webUrl "https://contoso.sharepoint.com" --listTitle "My List"\n\nDate: 2/20/2023\n\n## All Items (6275ed5c-8e4f-4e81-8060-2d9162b29952)\n\nProperty | Value\n---------|-------\nAggregations | null\nAggregationsStatus | null\nAssociatedContentTypeId | null\nBaseViewId | 1\nCalendarViewStyles | null\nColumnWidth | null\nContentTypeId | {"StringValue":"0x"}\nCustomFormatter |\nCustomOrder | null\nDefaultView | true\nDefaultViewForContentType | false\nEditorModified | false\nFormats | null\nGridLayout | null\nHidden | false\nHtmlSchemaXml | <View Name="{6275ED5C-8E4F-4E81-8060-2D9162B29952}" DefaultView="TRUE" MobileView="TRUE" MobileDefaultView="TRUE" Type="HTML" DisplayName="All Items" Url="/teams/AllStars/Lists/My List/AllItems.aspx" Level="1" BaseViewID="1" ContentTypeID="0x" ImageUrl="/\\_layouts/15/images/generic.png?rev=47"><Query /><ViewFields><FieldRef Name="LinkTitle" /><FieldRef Name="FieldName1" /></ViewFields><Toolbar Type="Standard" /><CustomFormatter /><XslLink Default="TRUE">main.xsl</XslLink><JSLink>clienttemplates.js</JSLink><RowLimit Paged="TRUE">30</RowLimit><ParameterBindings><ParameterBinding Name="NoAnnouncements" Location="Resource(wss,noXinviewofY\\_LIST)" /><ParameterBinding Name="NoAnnouncementsHowTo" Location="Resource(wss,noXinviewofY\\_DEFAULT)" /></ParameterBindings></View>\nId | 6275ed5c-8e4f-4e81-8060-2d9162b29952\nImageUrl | /\\_layouts/15/images/generic.png?rev=47\nIncludeRootFolder | false\nViewJoins | null\nJSLink | clienttemplates.js\nListViewXml | <View Name="{6275ED5C-8E4F-4E81-8060-2D9162B29952}" DefaultView="TRUE" MobileView="TRUE" MobileDefaultView="TRUE" Type="HTML" DisplayName="All Items" Url="/teams/AllStars/Lists/My List/AllItems.aspx" Level="1" BaseViewID="1" ContentTypeID="0x" ImageUrl="/\\_layouts/15/images/generic.png?rev=47" ><Query /><ViewFields><FieldRef Name="LinkTitle" /><FieldRef Name="FieldName1" /></ViewFields><RowLimit Paged="TRUE">30</RowLimit><JSLink>clienttemplates.js</JSLink><XslLink Default="TRUE">main.xsl</XslLink><CustomFormatter /><Toolbar Type="Standard"/></View>\nMethod | null\nMobileDefaultView | true\nMobileView | true\nModerationType | null\nNewDocumentTemplates | null\nOrderedView | false\nPaged | true\nPersonalView | false\nViewProjectedFields | null\nViewQuery |\nReadOnlyView | false\nRequiresClientIntegration | false\nRowLimit | 30\nScope | 0\nServerRelativePath | {"DecodedUrl":"/teams/AllStars/Lists/My List/AllItems.aspx"}\nServerRelativeUrl | /teams/AllStars/Lists/My List/AllItems.aspx\nStyleId | null\nTabularView | true\nThreaded | false\nTitle | All Items\nToolbar |\nToolbarTemplateName | null\nViewType | HTML\nViewData | null\nViewType2 | null\nVisualizationInfo | null\n')))))}w.isMDXComponent=!0}}]);