"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},i="spo page get",s={unversionedId:"cmd/spo/page/page-get",id:"cmd/spo/page/page-get",title:"spo page get",description:"Gets information about the specific modern page",source:"@site/docs/cmd/spo/page/page-get.md",sourceDirName:"cmd/spo/page",slug:"/cmd/spo/page/page-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/page/page-get.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo page copy",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-copy"},next:{title:"spo page header set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-header-set"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-page-get"},"spo page get"),(0,o.kt)("p",null,"Gets information about the specific modern page"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page get [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: Name of the page to retrieve."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the page to retrieve is located."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--metadataOnly"),"\n: Specify to only retrieve the metadata without the section and control information."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If the specified name doesn't refer to an existing modern page, you will get a ",(0,o.kt)("inlineCode",{parentName:"p"},"File doesn't exists")," error."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get information about the modern page"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page get --webUrl https://contoso.sharepoint.com/sites/team-a --name home.aspx\n")),(0,o.kt)("p",null,"Get all the metadata from the modern page, without the section and control count information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page get --webUrl https://contoso.sharepoint.com/sites/team-a --name home.aspx --metadataOnly\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n{\n  "ListItemAllFields": {\n    "CommentsDisabled": true,\n    "FileSystemObjectType": 0,\n    "Id": 21,\n    "ServerRedirectedEmbedUri": null,\n    "ServerRedirectedEmbedUrl": "",\n    "ContentTypeId": "0x0101009D1CB255DA76424F860D91F20E6C411800F1678937A82C3142BEF3C962300813B5",\n    "OData__ModerationComments": null,\n    "ComplianceAssetId": null,\n    "WikiField": null,\n    "Title": "new-page",\n    "ClientSideApplicationId": "b6917cb1-93a0-4b97-a84d-7cf49975d4ec",\n    "PageLayoutType": "Article",\n    "CanvasContent1": "<div><div data-sp-canvascontrol=\\"\\" data-sp-canvasdataversion=\\"1.0\\" data-sp-controldata=\\"&#123;&quot;controlType&quot;&#58;3,&quot;displayMode&quot;&#58;2,&quot;id&quot;&#58;&quot;7558d804-0334-49ca-b14a-53870cf6caae&quot;,&quot;position&quot;&#58;&#123;&quot;controlIndex&quot;&#58;1,&quot;sectionIndex&quot;&#58;1,&quot;zoneIndex&quot;&#58;1,&quot;sectionFactor&quot;&#58;12,&quot;layoutIndex&quot;&#58;1&#125;,&quot;webPartId&quot;&#58;&quot;e377ea37-9047-43b9-8cdb-a761be2f8e09&quot;,&quot;emphasis&quot;&#58;&#123;&#125;&#125;\\"><div data-sp-webpart=\\"\\" data-sp-webpartdataversion=\\"1.0\\" data-sp-webpartdata=\\"&#123;&quot;dataVersion&quot;&#58;&quot;1.0&quot;,&quot;description&quot;&#58;&quot;Display a location on a map using Bing Maps.&quot;,&quot;id&quot;&#58;&quot;e377ea37-9047-43b9-8cdb-a761be2f8e09&quot;,&quot;instanceId&quot;&#58;&quot;7558d804-0334-49ca-b14a-53870cf6caae&quot;,&quot;properties&quot;&#58;&#123;&quot;pushPins&quot;&#58;[],&quot;maxNumberOfPushPins&quot;&#58;1,&quot;shouldShowPushPinTitle&quot;&#58;true,&quot;zoomLevel&quot;&#58;12,&quot;mapType&quot;&#58;&quot;road&quot;&#125;,&quot;title&quot;&#58;&quot;Bing Maps&quot;&#125;\\"><div data-sp-componentid=\\"e377ea37-9047-43b9-8cdb-a761be2f8e09\\"></div><div data-sp-htmlproperties=\\"\\"></div></div></div><div data-sp-canvascontrol=\\"\\" data-sp-canvasdataversion=\\"1.0\\" data-sp-controldata=\\"&#123;&quot;controlType&quot;&#58;0,&quot;pageSettingsSlice&quot;&#58;&#123;&quot;isDefaultDescription&quot;&#58;true,&quot;isDefaultThumbnail&quot;&#58;true&#125;&#125;\\"></div></div>",\n    "BannerImageUrl": {\n      "Description": "https://contoso.sharepoint.com/_layouts/15/images/sitepagethumbnail.png",\n      "Url": "https://contoso.sharepoint.com/_layouts/15/images/sitepagethumbnail.png"\n    },\n    "Description": null,\n    "PromotedState": 0,\n    "FirstPublishedDate": null,\n    "LayoutWebpartsContent": null,\n    "OData__AuthorBylineId": null,\n    "_AuthorBylineStringId": null,\n    "OData__TopicHeader": null,\n    "OData__SPSitePageFlags": null,\n    "OData__OriginalSourceUrl": null,\n    "OData__OriginalSourceSiteId": null,\n    "OData__OriginalSourceWebId": null,\n    "OData__OriginalSourceListId": null,\n    "OData__OriginalSourceItemId": null,\n    "OData__SPCallToAction": null,\n    "OData__ModerationStatus": 3,\n    "ID": 21,\n    "Created": "2022-11-26T01:51:46",\n    "AuthorId": 7,\n    "Modified": "2022-11-26T01:55:47",\n    "EditorId": 7,\n    "OData__CopySource": null,\n    "CheckoutUserId": null,\n    "OData__UIVersionString": "0.4",\n    "GUID": "c8e64e90-e546-4b67-ad05-44e76dac54fb"\n  },\n  "CheckInComment": "",\n  "CheckOutType": 2,\n  "ContentTag": "{C431F2EF-447C-4F72-BC3E-ED2687456C33},8,3",\n  "CustomizedPageStatus": 2,\n  "ETag": "\\"{C431F2EF-447C-4F72-BC3E-ED2687456C33},8\\"",\n  "Exists": true,\n  "IrmEnabled": false,\n  "Length": "4106",\n  "Level": 2,\n  "LinkingUri": null,\n  "LinkingUrl": "",\n  "MajorVersion": 0,\n  "MinorVersion": 4,\n  "Name": "new-page.aspx",\n  "ServerRelativeUrl": "/sites/SPDemo/SitePages/new-page.aspx",\n  "TimeCreated": "2022-11-26T09:51:46Z",\n  "TimeLastModified": "2022-11-26T09:55:46Z",\n  "Title": "new-page",\n  "UIVersion": 4,\n  "UIVersionLabel": "0.4",\n  "UniqueId": "c431f2ef-447c-4f72-bc3e-ed2687456c33",\n  "commentsDisabled": true,\n  "title": "new-page",\n  "layoutType": "Article",\n  "canvasContentJson": "[{\\"controlType\\":3,\\"displayMode\\":2,\\"id\\":\\"7558d804-0334-49ca-b14a-53870cf6caae\\",\\"position\\":{\\"controlIndex\\":1,\\"sectionIndex\\":1,\\"zoneIndex\\":1,\\"sectionFactor\\":12,\\"layoutIndex\\":1},\\"webPartId\\":\\"e377ea37-9047-43b9-8cdb-a761be2f8e09\\",\\"emphasis\\":{},\\"webPartData\\":{\\"dataVersion\\":\\"1.0\\",\\"description\\":\\"Display a location on a map using Bing Maps.\\",\\"id\\":\\"e377ea37-9047-43b9-8cdb-a761be2f8e09\\",\\"instanceId\\":\\"7558d804-0334-49ca-b14a-53870cf6caae\\",\\"properties\\":{\\"pushPins\\":[],\\"maxNumberOfPushPins\\":1,\\"shouldShowPushPinTitle\\":true,\\"zoomLevel\\":12,\\"mapType\\":\\"road\\"},\\"title\\":\\"Bing Maps\\",\\"serverProcessedContent\\":{\\"htmlStrings\\":{},\\"searchablePlainTexts\\":{},\\"imageSources\\":{},\\"links\\":{}}}},{\\"controlType\\":0,\\"pageSettingsSlice\\":{\\"isDefaultDescription\\":true,\\"isDefaultThumbnail\\":true}}]",\n  "numControls": 2,\n  "numSections": 1\n}\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\ncommentsDisabled: true\nlayoutType      : Article\nnumControls     : 2\nnumSections     : 1\ntitle           : new-page\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\ncommentsDisabled,numSections,numControls,title,layoutType\n1,1,2,new-page,Article\n```\n")))}c.isMDXComponent=!0}}]);