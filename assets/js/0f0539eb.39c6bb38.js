"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[32864],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(b,s(s({ref:t},c),{},{components:a})):n.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),o=a(86010),s=a(12466),i=a(56697),l=a(91980),d=a(67392),c=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,d]=b({queryString:a,groupId:n}),[u,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=l??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var h=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=d[a].value;n!==i&&(u(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function I(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return r.createElement(I,(0,n.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]},s="wrapper";function i(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}i.isMDXComponent=!0},5621:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(26054),s=a(74866),i=a(85162);const l={},d="spo page list",c={unversionedId:"cmd/spo/page/page-list",id:"cmd/spo/page/page-list",title:"spo page list",description:"Lists all modern pages in the given site",source:"@site/docs/cmd/spo/page/page-list.mdx",sourceDirName:"cmd/spo/page",slug:"/cmd/spo/page/page-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/page/page-list.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo page get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-get"},next:{title:"spo page remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-remove"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:p},b="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-page-list"},"spo page list"),(0,r.kt)("p",null,"Lists all modern pages in the given site"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"URL of the site from which to retrieve available pages."))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List all modern pages in the specific site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page list --webUrl https://contoso.sharepoint.com/sites/team-a\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "CheckInComment": "",\n    "CheckOutType": 2,\n    "ContentTag": "{5A5E4B79-C3F7-479A-B9E5-9A462696C92A},1,1",\n    "CustomizedPageStatus": 0,\n    "ETag": "\\"{5A5E4B79-C3F7-479A-B9E5-9A462696C92A},1\\"",\n    "Exists": true,\n    "IrmEnabled": false,\n    "Length": 2666,\n    "Level": 1,\n    "LinkingUri": null,\n    "LinkingUrl": "",\n    "MajorVersion": 1,\n    "MinorVersion": 0,\n    "Name": "Home.aspx",\n    "ServerRelativeUrl": "/sites/SPDemo/SitePages/Home.aspx",\n    "TimeCreated": "2020-09-06T09:18:59Z",\n    "TimeLastModified": "2020-09-06T09:18:59Z",\n    "Title": "Home",\n    "UIVersion": 512,\n    "UIVersionLabel": "1.0",\n    "UniqueId": "5a5e4b79-c3f7-479a-b9e5-9a462696c92a",\n    "ListItemAllFields": {\n      "FileSystemObjectType": 0,\n      "Id": 10,\n      "ServerRedirectedEmbedUri": null,\n      "ServerRedirectedEmbedUrl": "",\n      "ContentTypeId": "0x0101009D1CB255DA76424F860D91F20E6C411800F1678937A82C3142BEF3C962300813B5",\n      "OData__ModerationComments": null,\n      "ComplianceAssetId": null,\n      "WikiField": null,\n      "Title": "Home",\n      "ClientSideApplicationId": "b6917cb1-93a0-4b97-a84d-7cf49975d4ec",\n      "CanvasContent1": "<div><div data-sp-canvascontrol=\\"\\" data-sp-canvasdataversion=\\"1.0\\" data-sp-controldata=\\"&#123;&quot;controlType&quot;&#58;3,&quot;webPartId&quot;&#58;&quot;e89b5ad5-9ab5-4730-a66b-e1f68994598c&quot;,&quot;id&quot;&#58;&quot;8bba86eb-3174-4917-b2b8-417af1102351&quot;&#125;\\"><div data-sp-webpart=\\"\\" data-sp-webpartdataversion=\\"1.0\\" data-sp-webpartdata=\\"&#123;&quot;id&quot;&#58;&quot;e89b5ad5-9ab5-4730-a66b-e1f68994598c&quot;,&quot;instanceId&quot;&#58;&quot;8bba86eb-3174-4917-b2b8-417af1102351&quot;,&quot;title&quot;&#58;&quot;ReactProvisionAssets&quot;,&quot;description&quot;&#58;&quot;ReactProvisionAssets description&quot;,&quot;dataVersion&quot;&#58;&quot;1.0&quot;,&quot;properties&quot;&#58;&#123;&quot;description&quot;&#58;&quot;ReactProvisionAssets&quot;&#125;&#125;\\"><div data-sp-componentid=\\"\\">e89b5ad5-9ab5-4730-a66b-e1f68994598c</div><div data-sp-htmlproperties=\\"\\"></div></div></div></div>",\n      "BannerImageUrl": {\n        "Description": "/_layouts/15/images/sitepagethumbnail.png",\n        "Url": "https://contoso.sharepoint.com/_layouts/15/images/sitepagethumbnail.png"\n      },\n      "Description": null,\n      "PromotedState": 0,\n      "FirstPublishedDate": null,\n      "LayoutWebpartsContent": null,\n      "OData__AuthorBylineId": null,\n      "_AuthorBylineStringId": null,\n      "OData__TopicHeader": null,\n      "OData__SPSitePageFlags": null,\n      "OData__OriginalSourceUrl": null,\n      "OData__OriginalSourceSiteId": null,\n      "OData__OriginalSourceWebId": null,\n      "OData__OriginalSourceListId": null,\n      "OData__OriginalSourceItemId": null,\n      "OData__SPCallToAction": null,\n      "OData__ModerationStatus": 0,\n      "ID": 10,\n      "Created": "2020-09-06T02:18:55-07:00",\n      "AuthorId": 1073741823,\n      "Modified": "2020-09-06T02:18:55-07:00",\n      "EditorId": 1073741823,\n      "OData__CopySource": null,\n      "CheckoutUserId": null,\n      "OData__UIVersionString": "1.0",\n      "GUID": "3762c79f-a768-40f0-bc7b-4d2ab03f22e0"\n    },\n    "AbsoluteUrl": "https://contoso.sharepoint.com/sites/SPDemo/SitePages/Home.aspx",\n    "AuthorByline": null,\n    "BannerImageUrl": "https://contoso.sharepoint.com/_layouts/15/images/sitepagethumbnail.png",\n    "BannerThumbnailUrl": "https://media.akamai.odsp.cdn.office.net/contoso.sharepoint.com/_layouts/15/images/sitepagethumbnail.png",\n    "CallToAction": "",\n    "Categories": null,\n    "ContentTypeId": "0x0101009D1CB255DA76424F860D91F20E6C411800F1678937A82C3142BEF3C962300813B5",\n    "Description": null,\n    "DoesUserHaveEditPermission": true,\n    "FileName": "Home.aspx",\n    "FirstPublished": "0001-01-01T08:00:00Z",\n    "Id": 10,\n    "IsPageCheckedOutToCurrentUser": false,\n    "IsWebWelcomePage": false,\n    "Modified": "2020-09-06T09:18:59Z",\n    "PageLayoutType": "Article",\n    "Path": {\n      "DecodedUrl": "SitePages/Home.aspx"\n    },\n    "PromotedState": 0,\n    "TopicHeader": null,\n    "Url": "SitePages/Home.aspx",\n    "Version": "1.0",\n    "VersionInfo": {\n      "LastVersionCreated": "0001-01-01T00:00:00-08:00",\n      "LastVersionCreatedBy": ""\n    },\n    "AlternativeUrlMap": "{\\"MediaTAThumbnailPathUrl\\":\\"https://southindia1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat={.fileType}&cs=UEFHRVN8U1BP&docid={.spHost}/_api/v2.0/sharePoint:{.resourceUrl}:/driveItem&w={.widthValue}&oauth_token=bearer%20{.oauthToken}\\",\\"MediaTAThumbnailHostUrl\\":\\"https://southindia1-mediap.svc.ms\\",\\"AFDCDNEnabled\\":\\"ClientNotOnEdge\\",\\"CurrentSiteCDNPolicy\\":\\"True\\",\\"PublicCDNEnabled\\":\\"True\\",\\"PrivateCDNEnabled\\":\\"True\\"}",\n    "CanvasContent1": "[{\\"controlType\\":3,\\"webPartId\\":\\"e89b5ad5-9ab5-4730-a66b-e1f68994598c\\",\\"id\\":\\"8bba86eb-3174-4917-b2b8-417af1102351\\",\\"webPartData\\":{\\"id\\":\\"e89b5ad5-9ab5-4730-a66b-e1f68994598c\\",\\"instanceId\\":\\"8bba86eb-3174-4917-b2b8-417af1102351\\",\\"title\\":\\"ReactProvisionAssets\\",\\"description\\":\\"ReactProvisionAssets description\\",\\"dataVersion\\":\\"1.0\\",\\"properties\\":{\\"description\\":\\"ReactProvisionAssets\\"},\\"serverProcessedContent\\":{\\"htmlStrings\\":{},\\"searchablePlainTexts\\":{},\\"imageSources\\":{},\\"links\\":{}}}}]",\n    "CoAuthState": null,\n    "Language": "en-us",\n    "LayoutWebpartsContent": null,\n    "SitePageFlags": ""\n  }\n]\n'))),(0,r.kt)(i.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Name         Title\n-----------  -------    \nHome.aspx    Home\n"))),(0,r.kt)(i.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"Name,Title\nHome.aspx,Home\n"))),(0,r.kt)(i.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# spo page list --webUrl "https://contoso.sharepoint.com/sites/team-a"\n\nDate: 5/1/2023\n\n## Home (1)\n\nProperty | Value\n---------|-------\nCheckInComment | \nCheckOutType | 2\nContentTag | {86CE2216-83F1-4AB4-9B7E-FFBDCF890992},14,1\nCustomizedPageStatus | 1\nETag | "{86CE2216-83F1-4AB4-9B7E-FFBDCF890992},14"\nExists | true\nIrmEnabled | false\nLength | 805\nLevel | 1\nLinkingUrl | \nMajorVersion | 2\nMinorVersion | 0\nName | Home.aspx\nServerRelativeUrl | /sites/team-a/SitePages/Home.aspx\nTimeCreated | 2021-09-19T00:20:25Z\nTimeLastModified | 2023-05-01T20:43:12Z\nTitle | Home\nUIVersion | 1024\nUIVersionLabel | 2.0\nUniqueId | 86ce2216-83f1-4ab4-9b7e-ffbdcf890992\nAbsoluteUrl | https://contoso.sharepoint.com/sites/team-a/SitePages/Home.aspx\nBannerImageUrl | https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/51.39929962158204,-0.256799995899204/12?mapSize=512,512&key=AobmrKIjQInHa8zf5IjtCu3zVgIZFewRhY9M8NUzpYfvMdO2RKDO2eKI6uRFrP6b\nBannerThumbnailUrl | https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/51.39929962158204,-0.256799995899204/12?mapSize=512,512&key=AobmrKIjQInHa8zf5IjtCu3zVgIZFewRhY9M8NUzpYfvMdO2RKDO2eKI6uRFrP6b\nCallToAction | \nContentTypeId | 0x0101009D1CB255DA76424F860D91F20E6C41180015C00F3A91848C479243E57A8317E76E\nDoesUserHaveEditPermission | true\nFileName | Home.aspx\nFirstPublished | 0001-01-01T08:00:00Z\nId | 1\nIsPageCheckedOutToCurrentUser | false\nIsWebWelcomePage | true\nModified | 2023-05-01T20:43:12Z\nPageLayoutType | Home\nPromotedState | 0\nUrl | SitePages/Home.aspx\nVersion | 2.0\nAlternativeUrlMap | {"UserPhotoAspx":"https://contoso.sharepoint.com/\\_vti\\_bin/afdcache.ashx/\\_userprofile/userphoto.jpg?\\_oat\\_=1683047510\\_65dfacc308ae7abe460ae6e6ce6943d0d218fd9232a69a03fee352b2dbaead4e&P1=1682980536&P2=-64532418&P3=1&P4=itPWLPx8ka8ZYUpPbQSywAH8cSvgj2M7otD6geZ26NUbROmU99rFYzmdBccd7PCiYfzz53QfSTzDpPE0iaxF0OMY0oAYpHVrz5pDUU3k8Se9vXh%2bzaUnJtIJPlp3boTlzcbs6D%2fjown%2bPT%2bTMgEyRGqVjwt8QieNK3z1UNrTmkz8VYD3fmPyVpQMKtZ33o8K8cTsGl11qw6DghlKTP2odBEBSCdBfiJd00z%2fbxvJXi7on0x6RyzYMJbAUXgdBCfDS2QnU8bVWE83aBYHm%2bKo6YZllCM%2bAGQ%2bEfrMDBJDsQEKWryy4gQdkF2JVIaq%2fx0BbRSmVnQKkPVM3iqV8QWyRw%3d%3d","MediaTAThumbnailPathUrl":"https://ukwest1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat={.fileType}&cs=UEFHRVN8U1BP&docid={.spHost}/\\_api/v2.0/sharePoint:{.resourceUrl}:/driveItem&w={.widthValue}&oauth\\_token=bearer%20{.oauthToken}","MediaTAThumbnailHostUrl":"https://ukwest1-mediap.svc.ms","AFDCDNEnabled":"True","CurrentSiteCDNPolicy":"True","PublicCDNEnabled":"True","PrivateCDNEnabled":"True"}\nCanvasContent1 | [{"position":{"layoutIndex":1,"zoneIndex":0.5,"sectionIndex":1,"controlIndex":1,"sectionFactor":6},"controlType":3,"id":"f85f8dfa-9052-4be8-8954-8cdafe811b97","webPartId":"e377ea37-9047-43b9-8cdb-a761be2f8e09","reservedHeight":528,"reservedWidth":570,"addedFromPersistedData":true,"webPartData":{"id":"e377ea37-9047-43b9-8cdb-a761be2f8e09","instanceId":"f85f8dfa-9052-4be8-8954-8cdafe811b97","title":"Bing Maps","description":"Display a location on a map using Bing Maps.","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{},"imageSources":{},"links":{}},"dataVersion":"1.0","properties":{"pushPins":[],"maxNumberOfPushPins":1,"shouldShowPushPinTitle":true,"zoomLevel":12,"mapType":"road","center":{"latitude":51.399299621582038,"longitude":-0.256799995899204,"altitude":0,"altitudeReference":-1}},"containsDynamicDataSource":false}},{"position":{"layoutIndex":1,"zoneIndex":0.5,"sectionIndex":2,"controlIndex":1,"sectionFactor":6},"id":"emptySection","addedFromPersistedData":true},{"controlType":3,"webPartId":"8c88f208-6c77-4bdb-86a0-0c47b4316588","position":{"zoneIndex":1,"sectionIndex":1,"controlIndex":1,"sectionFactor":8},"id":"71eab4c9-8340-4706-96b9-331527890975","addedFromPersistedData":true,"reservedHeight":406,"reservedWidth":776,"webPartData":{"id":"8c88f208-6c77-4bdb-86a0-0c47b4316588","instanceId":"71eab4c9-8340-4706-96b9-331527890975","title":"News","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{},"imageSources":{},"links":{"baseUrl":"/sites/team-a"}},"dataVersion":"1.12","properties":{"layoutId":"FeaturedNews","dataProviderId":"news","emptyStateHelpItemsCount":"1","showChrome":true,"carouselSettings":{"autoplay":false,"autoplaySpeed":5,"dots":true,"lazyLoad":true},"showNewsMetadata":{"showSocialActions":false,"showAuthor":true,"showDate":true},"newsDataSourceProp":1,"carouselHeroWrapperComponentId":"","prefetchCount":4,"filters":[{"filterType":1,"value":"","values":[]}],"newsSiteList":[],"renderItemsSliderValue":4,"layoutComponentId":"","webId":"c59dae7c-48bd-4241-96b7-b81d4bbc25cb","siteId":"9fcdddc5-bd7e-4120-b934-bf675b76855f","filterKQLQuery":""},"containsDynamicDataSource":false}},{"position":{"zoneIndex":1,"sectionIndex":1,"controlIndex":1.5,"sectionFactor":8,"layoutIndex":1},"controlType":3,"id":"dcfa91cf-96fa-47cd-9363-7f2fea373526","webPartId":"490d7c76-1824-45b2-9de3-676421c997fa","reservedHeight":326,"reservedWidth":776,"addedFromPersistedData":true,"webPartData":{"id":"490d7c76-1824-45b2-9de3-676421c997fa","instanceId":"dcfa91cf-96fa-47cd-9363-7f2fea373526","title":"Embed","description":"Embed content from other sites such as Sway, YouTube, Vimeo, and more","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{},"imageSources":{},"links":{}},"dataVersion":"1.2","properties":{"embedCode":"","cachedEmbedCode":"","shouldScaleWidth":true,"tempState":{},"thumbnailUrl":""},"containsDynamicDataSource":false}},{"controlType":3,"webPartId":"eb95c819-ab8f-4689-bd03-0c2d65d47b1f","position":{"zoneIndex":1,"sectionIndex":1,"controlIndex":2,"sectionFactor":8},"id":"3dde98e4-07d7-46d6-b57f-128d6ae5438c","addedFromPersistedData":true,"reservedHeight":939,"reservedWidth":776,"webPartData":{"id":"eb95c819-ab8f-4689-bd03-0c2d65d47b1f","instanceId":"3dde98e4-07d7-46d6-b57f-128d6ae5438c","title":"Site activity","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{},"imageSources":{},"links":{}},"dataVersion":"1.0","properties":{"maxItems":9},"containsDynamicDataSource":false}},{"position":{"zoneIndex":1,"sectionIndex":2,"controlIndex":0.5,"sectionFactor":4,"layoutIndex":1},"controlType":3,"id":"9d1fed5d-9274-4a82-8891-58bbc937c92b","webPartId":"f6fdf4f8-4a24-437b-a127-32e66a5dd9b4","addedFromPersistedData":true,"reservedHeight":449,"reservedWidth":364,"webPartData":{"id":"f6fdf4f8-4a24-437b-a127-32e66a5dd9b4","instanceId":"9d1fed5d-9274-4a82-8891-58bbc937c92b","title":"Twitter","description":"Display a Twitter feed","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{},"imageSources":{},"links":{}},"dataVersion":"1.0","properties":{"displayAs":"list","displayHeader":false,"displayFooter":false,"displayBorders":true,"limit":"3","term":"@microsoft","widthSlider":100,"title":"","allowStretch":false,"displayLightTheme":true},"containsDynamicDataSource":false}},{"controlType":3,"webPartId":"c70391ea-0b10-4ee9-b2b4-006d3fcad0cd","position":{"zoneIndex":1,"sectionIndex":2,"controlIndex":1,"sectionFactor":4},"id":"2d412c2a-ed7d-4117-bf54-f1b9a28c1346","addedFromPersistedData":true,"reservedHeight":173,"reservedWidth":364,"webPartData":{"id":"c70391ea-0b10-4ee9-b2b4-006d3fcad0cd","instanceId":"2d412c2a-ed7d-4117-bf54-f1b9a28c1346","title":"Quick links","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{"title":"Quick links","items[0].title":"Learn about a team site","items[1].title":"Learn how to add a page"},"imageSources":{},"links":{"baseUrl":"/sites/team-a","items[0].sourceItem.url":"https://go.microsoft.com/fwlink/p/?linkid=827918","items[1].sourceItem.url":"https://go.microsoft.com/fwlink/p/?linkid=827919"},"componentDependencies":{"layoutComponentId":"706e33c8-af37-4e7b-9d22-6e5694d92a6f"}},"dataVersion":"2.2","properties":{"items":[{"sourceItem":{"itemType":2},"thumbnailType":3,"id":1,"description":"","altText":"","rawPreviewImageMinCanvasWidth":32767},{"sourceItem":{"itemType":2},"thumbnailType":3,"id":2,"description":"","altText":"","rawPreviewImageMinCanvasWidth":32767}],"isMigrated":true,"layoutId":"List","shouldShowThumbnail":true,"hideWebPartWhenEmpty":true,"dataProviderId":"QuickLinks","listLayoutOptions":{"showDescription":false,"showIcon":true},"imageWidth":100,"buttonLayoutOptions":{"showDescription":false,"buttonTreatment":2,"iconPositionType":2,"textAlignmentVertical":2,"textAlignmentHorizontal":2,"linesOfText":2},"waffleLayoutOptions":{"iconSize":1,"onlyShowThumbnail":false},"webId":"c59dae7c-48bd-4241-96b7-b81d4bbc25cb","siteId":"9fcdddc5-bd7e-4120-b934-bf675b76855f"},"containsDynamicDataSource":false}},{"controlType":3,"webPartId":"f92bf067-bc19-489e-a556-7fe95f508720","position":{"zoneIndex":1,"sectionIndex":2,"controlIndex":2,"sectionFactor":4},"id":"c047c8d5-b5d0-4852-8a38-b58da702243c","addedFromPersistedData":true,"reservedHeight":291,"reservedWidth":364,"webPartData":{"id":"f92bf067-bc19-489e-a556-7fe95f508720","instanceId":"c047c8d5-b5d0-4852-8a38-b58da702243c","title":"Document library","audiences":[],"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{"listTitle":"Documents"},"imageSources":{},"links":{}},"dynamicDataPaths":{},"dynamicDataValues":{"filterBy":{}},"dataVersion":"1.0","properties":{"isDocumentLibrary":true,"showDefaultDocumentLibrary":true,"webpartHeightKey":4,"selectedListUrl":""},"containsDynamicDataSource":true}},{"controlType":0,"pageSettingsSlice":{"isDefaultDescription":true,"isDefaultThumbnail":true,"isSpellCheckEnabled":true,"globalRichTextStylingVersion":0,"rtePageSettings":{"contentVersion":4},"isEmailReady":false}}]\nLanguage | en-us\nSitePageFlags |     \n')))))}f.isMDXComponent=!0}}]);