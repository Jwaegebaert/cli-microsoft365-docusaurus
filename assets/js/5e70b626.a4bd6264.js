"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[34693],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),o=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>I});var n=a(87462),o=a(67294),r=a(86010),i=a(12466),s=a(56697),l=a(91980),d=a(67392),c=a(50012);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,d]=b({queryString:a,groupId:n}),[u,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=l??u;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var g=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=d[a].value;n!==s&&(u(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},o.createElement(y,(0,n.Z)({},e,t)),o.createElement(v,(0,n.Z)({},e,t)))}function I(e){const t=(0,g.Z)();return o.createElement(k,(0,n.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={toc:[]},i="wrapper";function s(e){let{components:t,...a}=e;return(0,o.kt)(i,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",{parentName:"p"},"options"),", ",(0,o.kt)("code",{parentName:"p"},"examples"),", ",(0,o.kt)("code",{parentName:"p"},"remarks"),", ",(0,o.kt)("code",{parentName:"p"},"response"),", ",(0,o.kt)("code",{parentName:"p"},"full"),". Default is ",(0,o.kt)("code",{parentName:"p"},"full"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--query [query]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,o.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output type. ",(0,o.kt)("code",{parentName:"p"},"json,text,csv,md"),". Default ",(0,o.kt)("code",{parentName:"p"},"json"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--verbose"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with verbose logging")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--debug"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with debug logging"))))}s.isMDXComponent=!0},15143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),r=a(26054),i=a(74866),s=a(85162);const l={},d="spo page get",c={unversionedId:"cmd/spo/page/page-get",id:"cmd/spo/page/page-get",title:"spo page get",description:"Gets information about the specific modern page",source:"@site/docs/cmd/spo/page/page-get.mdx",sourceDirName:"cmd/spo/page",slug:"/cmd/spo/page/page-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/page/page-get.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo page copy",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-copy"},next:{title:"spo page list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-list"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:p},b="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-page-get"},"spo page get"),(0,o.kt)("p",null,"Gets information about the specific modern page"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page get [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-n, --name <name>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Name of the page to retrieve.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"URL of the site where the page to retrieve is located.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--metadataOnly"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Specify to only retrieve the metadata without the section and control information."))),(0,o.kt)(r.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If the specified name doesn't refer to an existing modern page, you will get a ",(0,o.kt)("inlineCode",{parentName:"p"},"File doesn't exists")," error."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get information about the modern page"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page get --webUrl https://contoso.sharepoint.com/sites/team-a --name home.aspx\n")),(0,o.kt)("p",null,"Get all the metadata from the modern page, without the section and control count information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page get --webUrl https://contoso.sharepoint.com/sites/team-a --name home.aspx --metadataOnly\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ListItemAllFields": {\n    "CommentsDisabled": true,\n    "FileSystemObjectType": 0,\n    "Id": 21,\n    "ServerRedirectedEmbedUri": null,\n    "ServerRedirectedEmbedUrl": "",\n    "ContentTypeId": "0x0101009D1CB255DA76424F860D91F20E6C411800F1678937A82C3142BEF3C962300813B5",\n    "OData__ModerationComments": null,\n    "ComplianceAssetId": null,\n    "WikiField": null,\n    "Title": "new-page",\n    "ClientSideApplicationId": "b6917cb1-93a0-4b97-a84d-7cf49975d4ec",\n    "PageLayoutType": "Article",\n    "CanvasContent1": "<div><div data-sp-canvascontrol=\\"\\" data-sp-canvasdataversion=\\"1.0\\" data-sp-controldata=\\"&#123;&quot;controlType&quot;&#58;3,&quot;displayMode&quot;&#58;2,&quot;id&quot;&#58;&quot;7558d804-0334-49ca-b14a-53870cf6caae&quot;,&quot;position&quot;&#58;&#123;&quot;controlIndex&quot;&#58;1,&quot;sectionIndex&quot;&#58;1,&quot;zoneIndex&quot;&#58;1,&quot;sectionFactor&quot;&#58;12,&quot;layoutIndex&quot;&#58;1&#125;,&quot;webPartId&quot;&#58;&quot;e377ea37-9047-43b9-8cdb-a761be2f8e09&quot;,&quot;emphasis&quot;&#58;&#123;&#125;&#125;\\"><div data-sp-webpart=\\"\\" data-sp-webpartdataversion=\\"1.0\\" data-sp-webpartdata=\\"&#123;&quot;dataVersion&quot;&#58;&quot;1.0&quot;,&quot;description&quot;&#58;&quot;Display a location on a map using Bing Maps.&quot;,&quot;id&quot;&#58;&quot;e377ea37-9047-43b9-8cdb-a761be2f8e09&quot;,&quot;instanceId&quot;&#58;&quot;7558d804-0334-49ca-b14a-53870cf6caae&quot;,&quot;properties&quot;&#58;&#123;&quot;pushPins&quot;&#58;[],&quot;maxNumberOfPushPins&quot;&#58;1,&quot;shouldShowPushPinTitle&quot;&#58;true,&quot;zoomLevel&quot;&#58;12,&quot;mapType&quot;&#58;&quot;road&quot;&#125;,&quot;title&quot;&#58;&quot;Bing Maps&quot;&#125;\\"><div data-sp-componentid=\\"e377ea37-9047-43b9-8cdb-a761be2f8e09\\"></div><div data-sp-htmlproperties=\\"\\"></div></div></div><div data-sp-canvascontrol=\\"\\" data-sp-canvasdataversion=\\"1.0\\" data-sp-controldata=\\"&#123;&quot;controlType&quot;&#58;0,&quot;pageSettingsSlice&quot;&#58;&#123;&quot;isDefaultDescription&quot;&#58;true,&quot;isDefaultThumbnail&quot;&#58;true&#125;&#125;\\"></div></div>",\n    "BannerImageUrl": {\n      "Description": "https://contoso.sharepoint.com/_layouts/15/images/sitepagethumbnail.png",\n      "Url": "https://contoso.sharepoint.com/_layouts/15/images/sitepagethumbnail.png"\n    },\n    "Description": null,\n    "PromotedState": 0,\n    "FirstPublishedDate": null,\n    "LayoutWebpartsContent": null,\n    "OData__AuthorBylineId": null,\n    "_AuthorBylineStringId": null,\n    "OData__TopicHeader": null,\n    "OData__SPSitePageFlags": null,\n    "OData__OriginalSourceUrl": null,\n    "OData__OriginalSourceSiteId": null,\n    "OData__OriginalSourceWebId": null,\n    "OData__OriginalSourceListId": null,\n    "OData__OriginalSourceItemId": null,\n    "OData__SPCallToAction": null,\n    "OData__ModerationStatus": 3,\n    "ID": 21,\n    "Created": "2022-11-26T01:51:46",\n    "AuthorId": 7,\n    "Modified": "2022-11-26T01:55:47",\n    "EditorId": 7,\n    "OData__CopySource": null,\n    "CheckoutUserId": null,\n    "OData__UIVersionString": "0.4",\n    "GUID": "c8e64e90-e546-4b67-ad05-44e76dac54fb"\n  },\n  "CheckInComment": "",\n  "CheckOutType": 2,\n  "ContentTag": "{C431F2EF-447C-4F72-BC3E-ED2687456C33},8,3",\n  "CustomizedPageStatus": 2,\n  "ETag": "\\"{C431F2EF-447C-4F72-BC3E-ED2687456C33},8\\"",\n  "Exists": true,\n  "IrmEnabled": false,\n  "Length": "4106",\n  "Level": 2,\n  "LinkingUri": null,\n  "LinkingUrl": "",\n  "MajorVersion": 0,\n  "MinorVersion": 4,\n  "Name": "new-page.aspx",\n  "ServerRelativeUrl": "/sites/SPDemo/SitePages/new-page.aspx",\n  "TimeCreated": "2022-11-26T09:51:46Z",\n  "TimeLastModified": "2022-11-26T09:55:46Z",\n  "Title": "new-page",\n  "UIVersion": 4,\n  "UIVersionLabel": "0.4",\n  "UniqueId": "c431f2ef-447c-4f72-bc3e-ed2687456c33",\n  "commentsDisabled": true,\n  "title": "new-page",\n  "layoutType": "Article",\n  "canvasContentJson": "[{\\"controlType\\":3,\\"displayMode\\":2,\\"id\\":\\"7558d804-0334-49ca-b14a-53870cf6caae\\",\\"position\\":{\\"controlIndex\\":1,\\"sectionIndex\\":1,\\"zoneIndex\\":1,\\"sectionFactor\\":12,\\"layoutIndex\\":1},\\"webPartId\\":\\"e377ea37-9047-43b9-8cdb-a761be2f8e09\\",\\"emphasis\\":{},\\"webPartData\\":{\\"dataVersion\\":\\"1.0\\",\\"description\\":\\"Display a location on a map using Bing Maps.\\",\\"id\\":\\"e377ea37-9047-43b9-8cdb-a761be2f8e09\\",\\"instanceId\\":\\"7558d804-0334-49ca-b14a-53870cf6caae\\",\\"properties\\":{\\"pushPins\\":[],\\"maxNumberOfPushPins\\":1,\\"shouldShowPushPinTitle\\":true,\\"zoomLevel\\":12,\\"mapType\\":\\"road\\"},\\"title\\":\\"Bing Maps\\",\\"serverProcessedContent\\":{\\"htmlStrings\\":{},\\"searchablePlainTexts\\":{},\\"imageSources\\":{},\\"links\\":{}}}},{\\"controlType\\":0,\\"pageSettingsSlice\\":{\\"isDefaultDescription\\":true,\\"isDefaultThumbnail\\":true}}]",\n  "numControls": 2,\n  "numSections": 1\n}\n'))),(0,o.kt)(s.Z,{value:"Text",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"commentsDisabled: true\nlayoutType      : Article\nnumControls     : 2\nnumSections     : 1\ntitle           : new-page\n"))),(0,o.kt)(s.Z,{value:"CSV",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"commentsDisabled,numSections,numControls,title,layoutType\n1,1,2,new-page,Article\n"))),(0,o.kt)(s.Z,{value:"Markdown",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'# spo page get --webUrl "https://contoso.sharepoint.com/sites/team-a" --name "home.aspx"\n\nDate: 5/1/2023\n\n## Home (86ce2216-83f1-4ab4-9b7e-ffbdcf890992)\n\nProperty | Value\n---------|-------\nCheckInComment | \nCheckOutType | 2\nContentTag | {86CE2216-83F1-4AB4-9B7E-FFBDCF890992},14,1\nCustomizedPageStatus | 1\nETag | "{86CE2216-83F1-4AB4-9B7E-FFBDCF890992},14"\nExists | true\nIrmEnabled | false\nLength | 805\nLevel | 1\nLinkingUrl | \nMajorVersion | 2\nMinorVersion | 0\nName | home.aspx\nServerRelativeUrl | /sites/Company311/SitePages/home.aspx\nTimeCreated | 2021-09-19T00:20:25Z\nTimeLastModified | 2023-05-01T20:43:12Z\nTitle | Home\nUIVersion | 1024\nUIVersionLabel | 2.0\nUniqueId | 86ce2216-83f1-4ab4-9b7e-ffbdcf890992\ncommentsDisabled | true\ntitle | Home\nlayoutType | Home\ncanvasContentJson | [{"position":{"layoutIndex":1,"zoneIndex":0.5,"sectionIndex":1,"controlIndex":1,"sectionFactor":6},"controlType":3,"id":"f85f8dfa-9052-4be8-8954-8cdafe811b97","webPartId":"e377ea37-9047-43b9-8cdb-a761be2f8e09","reservedHeight":528,"reservedWidth":570,"addedFromPersistedData":true,"webPartData":{"id":"e377ea37-9047-43b9-8cdb-a761be2f8e09","instanceId":"f85f8dfa-9052-4be8-8954-8cdafe811b97","title":"Bing Maps","description":"Display a location on a map using Bing Maps.","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{},"imageSources":{},"links":{}},"dataVersion":"1.0","properties":{"pushPins":[],"maxNumberOfPushPins":1,"shouldShowPushPinTitle":true,"zoomLevel":12,"mapType":"road","center":{"latitude":51.399299621582038,"longitude":-0.256799995899204,"altitude":0,"altitudeReference":-1}},"containsDynamicDataSource":false}},{"position":{"layoutIndex":1,"zoneIndex":0.5,"sectionIndex":2,"controlIndex":1,"sectionFactor":6},"id":"emptySection","addedFromPersistedData":true},{"controlType":3,"webPartId":"8c88f208-6c77-4bdb-86a0-0c47b4316588","position":{"zoneIndex":1,"sectionIndex":1,"controlIndex":1,"sectionFactor":8},"id":"71eab4c9-8340-4706-96b9-331527890975","addedFromPersistedData":true,"reservedHeight":406,"reservedWidth":776,"webPartData":{"id":"8c88f208-6c77-4bdb-86a0-0c47b4316588","instanceId":"71eab4c9-8340-4706-96b9-331527890975","title":"News","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{},"imageSources":{},"links":{"baseUrl":"/sites/Company311"}},"dataVersion":"1.12","properties":{"layoutId":"FeaturedNews","dataProviderId":"news","emptyStateHelpItemsCount":"1","showChrome":true,"carouselSettings":{"autoplay":false,"autoplaySpeed":5,"dots":true,"lazyLoad":true},"showNewsMetadata":{"showSocialActions":false,"showAuthor":true,"showDate":true},"newsDataSourceProp":1,"carouselHeroWrapperComponentId":"","prefetchCount":4,"filters":[{"filterType":1,"value":"","values":[]}],"newsSiteList":[],"renderItemsSliderValue":4,"layoutComponentId":"","webId":"c59dae7c-48bd-4241-96b7-b81d4bbc25cb","siteId":"9fcdddc5-bd7e-4120-b934-bf675b76855f","filterKQLQuery":""},"containsDynamicDataSource":false}},{"position":{"zoneIndex":1,"sectionIndex":1,"controlIndex":1.5,"sectionFactor":8,"layoutIndex":1},"controlType":3,"id":"dcfa91cf-96fa-47cd-9363-7f2fea373526","webPartId":"490d7c76-1824-45b2-9de3-676421c997fa","reservedHeight":326,"reservedWidth":776,"addedFromPersistedData":true,"webPartData":{"id":"490d7c76-1824-45b2-9de3-676421c997fa","instanceId":"dcfa91cf-96fa-47cd-9363-7f2fea373526","title":"Embed","description":"Embed content from other sites such as Sway, YouTube, Vimeo, and more","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{},"imageSources":{},"links":{}},"dataVersion":"1.2","properties":{"embedCode":"","cachedEmbedCode":"","shouldScaleWidth":true,"tempState":{},"thumbnailUrl":""},"containsDynamicDataSource":false}},{"controlType":3,"webPartId":"eb95c819-ab8f-4689-bd03-0c2d65d47b1f","position":{"zoneIndex":1,"sectionIndex":1,"controlIndex":2,"sectionFactor":8},"id":"3dde98e4-07d7-46d6-b57f-128d6ae5438c","addedFromPersistedData":true,"reservedHeight":939,"reservedWidth":776,"webPartData":{"id":"eb95c819-ab8f-4689-bd03-0c2d65d47b1f","instanceId":"3dde98e4-07d7-46d6-b57f-128d6ae5438c","title":"Site activity","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{},"imageSources":{},"links":{}},"dataVersion":"1.0","properties":{"maxItems":9},"containsDynamicDataSource":false}},{"position":{"zoneIndex":1,"sectionIndex":2,"controlIndex":0.5,"sectionFactor":4,"layoutIndex":1},"controlType":3,"id":"9d1fed5d-9274-4a82-8891-58bbc937c92b","webPartId":"f6fdf4f8-4a24-437b-a127-32e66a5dd9b4","addedFromPersistedData":true,"reservedHeight":449,"reservedWidth":364,"webPartData":{"id":"f6fdf4f8-4a24-437b-a127-32e66a5dd9b4","instanceId":"9d1fed5d-9274-4a82-8891-58bbc937c92b","title":"Twitter","description":"Display a Twitter feed","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{},"imageSources":{},"links":{}},"dataVersion":"1.0","properties":{"displayAs":"list","displayHeader":false,"displayFooter":false,"displayBorders":true,"limit":"3","term":"@microsoft","widthSlider":100,"title":"","allowStretch":false,"displayLightTheme":true},"containsDynamicDataSource":false}},{"controlType":3,"webPartId":"c70391ea-0b10-4ee9-b2b4-006d3fcad0cd","position":{"zoneIndex":1,"sectionIndex":2,"controlIndex":1,"sectionFactor":4},"id":"2d412c2a-ed7d-4117-bf54-f1b9a28c1346","addedFromPersistedData":true,"reservedHeight":173,"reservedWidth":364,"webPartData":{"id":"c70391ea-0b10-4ee9-b2b4-006d3fcad0cd","instanceId":"2d412c2a-ed7d-4117-bf54-f1b9a28c1346","title":"Quick links","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{"title":"Quick links","items[0].title":"Learn about a team site","items[1].title":"Learn how to add a page"},"imageSources":{},"links":{"baseUrl":"/sites/Company311","items[0].sourceItem.url":"https://go.microsoft.com/fwlink/p/?linkid=827918","items[1].sourceItem.url":"https://go.microsoft.com/fwlink/p/?linkid=827919"},"componentDependencies":{"layoutComponentId":"706e33c8-af37-4e7b-9d22-6e5694d92a6f"}},"dataVersion":"2.2","properties":{"items":[{"sourceItem":{"itemType":2},"thumbnailType":3,"id":1,"description":"","altText":"","rawPreviewImageMinCanvasWidth":32767},{"sourceItem":{"itemType":2},"thumbnailType":3,"id":2,"description":"","altText":"","rawPreviewImageMinCanvasWidth":32767}],"isMigrated":true,"layoutId":"List","shouldShowThumbnail":true,"hideWebPartWhenEmpty":true,"dataProviderId":"QuickLinks","listLayoutOptions":{"showDescription":false,"showIcon":true},"imageWidth":100,"buttonLayoutOptions":{"showDescription":false,"buttonTreatment":2,"iconPositionType":2,"textAlignmentVertical":2,"textAlignmentHorizontal":2,"linesOfText":2},"waffleLayoutOptions":{"iconSize":1,"onlyShowThumbnail":false},"webId":"c59dae7c-48bd-4241-96b7-b81d4bbc25cb","siteId":"9fcdddc5-bd7e-4120-b934-bf675b76855f"},"containsDynamicDataSource":false}},{"controlType":3,"webPartId":"f92bf067-bc19-489e-a556-7fe95f508720","position":{"zoneIndex":1,"sectionIndex":2,"controlIndex":2,"sectionFactor":4},"id":"c047c8d5-b5d0-4852-8a38-b58da702243c","addedFromPersistedData":true,"reservedHeight":291,"reservedWidth":364,"webPartData":{"id":"f92bf067-bc19-489e-a556-7fe95f508720","instanceId":"c047c8d5-b5d0-4852-8a38-b58da702243c","title":"Document library","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{"listTitle":"Documents"},"imageSources":{},"links":{}},"dynamicDataPaths":{},"dynamicDataValues":{"filterBy":{}},"dataVersion":"1.0","properties":{"isDocumentLibrary":true,"showDefaultDocumentLibrary":true,"webpartHeightKey":4,"selectedListUrl":""},"containsDynamicDataSource":true}},{"controlType":0,"pageSettingsSlice":{"isDefaultDescription":true,"isDefaultThumbnail":true,"isSpellCheckEnabled":true,"globalRichTextStylingVersion":0,"rtePageSettings":{"contentVersion":4},"isEmailReady":false}}]\nnumControls | 9\nnumSections | 2\n')))))}f.isMDXComponent=!0}}]);