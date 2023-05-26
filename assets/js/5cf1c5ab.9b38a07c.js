"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[50624],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var r=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,p=function(e,t){if(null==e)return{};var a,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=i(a),u=p,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||n;return a?r.createElement(k,o(o({ref:t},l),{},{components:a})):r.createElement(k,o({ref:t},l))}));function k(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,o=new Array(n);o[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:p,o[1]=d;for(var i=2;i<n;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>d});var r=a(87462),p=(a(67294),a(3905));const n={toc:[]},o="wrapper";function d(e){let{components:t,...a}=e;return(0,p.kt)(o,(0,r.Z)({},n,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("dl",null,(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,p.kt)("code",{parentName:"p"},"options"),", ",(0,p.kt)("code",{parentName:"p"},"examples"),", ",(0,p.kt)("code",{parentName:"p"},"remarks"),", ",(0,p.kt)("code",{parentName:"p"},"response"),", ",(0,p.kt)("code",{parentName:"p"},"full"),". Default is ",(0,p.kt)("code",{parentName:"p"},"full"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--query [query]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,p.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Output type. ",(0,p.kt)("code",{parentName:"p"},"json,text,csv,md"),". Default ",(0,p.kt)("code",{parentName:"p"},"json"))),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--verbose"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Runs command with verbose logging")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--debug"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Runs command with debug logging"))))}d.isMDXComponent=!0},6651:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),p=(a(67294),a(3905)),n=a(26054);const o={},d="spo page clientsidewebpart add",s={unversionedId:"cmd/spo/page/page-clientsidewebpart-add",id:"cmd/spo/page/page-clientsidewebpart-add",title:"spo page clientsidewebpart add",description:"Adds a client-side web part to a modern page",source:"@site/docs/cmd/spo/page/page-clientsidewebpart-add.mdx",sourceDirName:"cmd/spo/page",slug:"/cmd/spo/page/page-clientsidewebpart-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-clientsidewebpart-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/page/page-clientsidewebpart-add.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo page set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-set"},next:{title:"spo page column get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-column-get"}},i={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:l},c="wrapper";function u(e){let{components:t,...a}=e;return(0,p.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"spo-page-clientsidewebpart-add"},"spo page clientsidewebpart add"),(0,p.kt)("p",null,"Adds a client-side web part to a modern page"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page clientsidewebpart add [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("dl",null,(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"URL of the site where the page to add the web part to is located.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-n, --pageName <pageName>"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Name of the page to which add the web part.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--standardWebPart [standardWebPart]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Name of the standard web part to add (see the possible values below). Specify either ",(0,p.kt)("code",{parentName:"p"},"standardWebPart")," or ",(0,p.kt)("code",{parentName:"p"},"webPartId")," but not both.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--webPartId [webPartId]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"ID of the custom web part to add. Specify either ",(0,p.kt)("code",{parentName:"p"},"standardWebPart")," or ",(0,p.kt)("code",{parentName:"p"},"webPartId")," but not both.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--webPartProperties [webPartProperties]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"JSON string with web part properties to set on the web part. Specify either ",(0,p.kt)("code",{parentName:"p"},"webPartProperties")," or ",(0,p.kt)("code",{parentName:"p"},"webPartData")," but not both.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--webPartData [webPartData]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"JSON string with web part data as retrieved from the web part maintenance mode. Specify either ",(0,p.kt)("code",{parentName:"p"},"webPartProperties")," or ",(0,p.kt)("code",{parentName:"p"},"webPartData")," but not both.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--section [section]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Number of the section to which the web part should be added (1 or higher).")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--column [column]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Number of the column in which the web part should be added (1 or higher).")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--order [order]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Order of the web part in the column."))),(0,p.kt)(n.ZP,{mdxType:"Global"}),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"If the specified ",(0,p.kt)("inlineCode",{parentName:"p"},"pageName")," doesn't refer to an existing modern page, you will get a ",(0,p.kt)("em",{parentName:"p"},"File doesn't exists")," error."),(0,p.kt)("p",null,"To add a standard web part to the page, specify one of the following values: ",(0,p.kt)("em",{parentName:"p"},"ContentRollup, BingMap, ContentEmbed, DocumentEmbed, Image, ImageGallery, LinkPreview, NewsFeed, NewsReel, PowerBIReportEmbed, QuickChart, SiteActivity, VideoEmbed, YammerEmbed, Events, GroupCalendar, Hero, List, PageTitle, People, QuickLinks, CustomMessageRegion, Divider, MicrosoftForms, Spacer"),"."),(0,p.kt)("admonition",{title:"Escaping JSON in PowerShell",type:"caution"},(0,p.kt)("p",{parentName:"admonition"},"When using the ",(0,p.kt)("inlineCode",{parentName:"p"},"--webPartProperties")," option it's possible to enter a JSON string. In PowerShell 5 to 7.2 ",(0,p.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#escaping-double-quotes-in-powershell"},"specific escaping rules")," apply due to an issue. Remember that you can also use ",(0,p.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#passing-complex-content-into-cli-options"},"file tokens")," instead.")),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Add the standard Bing Map web part to a modern page in the first available location on the page"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page clientsidewebpart add --webUrl https://contoso.sharepoint.com/sites/a-team --pageName page.aspx --standardWebPart BingMap\n")),(0,p.kt)("p",null,"Add the standard Bing Map web part to a modern page in the third column of the second section"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page clientsidewebpart add --webUrl https://contoso.sharepoint.com/sites/a-team --pageName page.aspx --standardWebPart BingMap --section 2 --column 3\n")),(0,p.kt)("p",null,"Add a custom web part to the modern page"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page clientsidewebpart add --webUrl https://contoso.sharepoint.com/sites/a-team --pageName page.aspx --webPartId 3ede60d3-dc2c-438b-b5bf-cc40bb2351e1\n")),(0,p.kt)("p",null,"Add the standard Bing Map web part with the specific properties to a modern page"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo page clientsidewebpart add --webUrl https://contoso.sharepoint.com/sites/a-team --pageName page.aspx --standardWebPart BingMap --webPartProperties \'{"Title":"Foo location"}\'\n')),(0,p.kt)("p",null,"Add the standard Image web part with the preconfigured image"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo page clientsidewebpart add --webUrl https://contoso.sharepoint.com/sites/a-team --pageName page.aspx --standardWebPart Image --webPartData \'{ "dataVersion": "1.8", "serverProcessedContent": {"htmlStrings":{},"searchablePlainTexts":{"captionText":""},"imageSources":{"imageSource":"/sites/team-a/SiteAssets/work-life-balance.png"},"links":{}}, "properties": {"imageSourceType":2,"altText":"a group of people on a beach","overlayText":"Work life balance","fileName":"48146-OFF12_Justice_01.png","siteId":"27664b85-067d-4be9-a7d7-89b2e804d09f","webId":"a7664b85-067d-4be9-a7d7-89b2e804d09f","listId":"37664b85-067d-4be9-a7d7-89b2e804d09f","uniqueId":"67664b85-067d-4be9-a7d7-89b2e804d09f","imgWidth":650,"imgHeight":433,"fixAspectRatio":false,"isOverlayTextEnabled":true}}\'\n')),(0,p.kt)("h2",{id:"response"},"Response"),(0,p.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);