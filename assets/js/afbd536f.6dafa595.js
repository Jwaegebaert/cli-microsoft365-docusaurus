"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[68807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=s.createContext({}),c=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?s.createElement(f,a(a({ref:t},p),{},{components:n})):s.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(87462),r=(n(67294),n(3905));const o={},a="spo web list",l={unversionedId:"cmd/spo/web/web-list",id:"cmd/spo/web/web-list",title:"spo web list",description:"Lists subsites of the specified site",source:"@site/docs/cmd/spo/web/web-list.md",sourceDirName:"cmd/spo/web",slug:"/cmd/spo/web/web-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/web/web-list.md",tags:[],version:"current",lastUpdatedAt:1667774341,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo web installedlanguage list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-installedlanguage-list"},next:{title:"spo web reindex",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-reindex"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-web-list"},"spo web list"),(0,r.kt)("p",null,"Lists subsites of the specified site"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-u, --url <url>"),"\n: URL of the parent site for which to retrieve the list of subsites"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Return all subsites from site ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/"},"https://contoso.sharepoint.com/"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web list --url https://contoso.sharepoint.com\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "AllowRssFeeds": true,\n    "AlternateCssUrl": "",\n    "AppInstanceId": "00000000-0000-0000-0000-000000000000",\n    "ClassicWelcomePage": null,\n    "Configuration": 0,\n    "Created": "2022-11-05T14:07:51",\n    "CurrentChangeToken": {\n      "StringValue": "1;2;b60137df-c3dc-4984-9def-8edcf7c98ab9;638032561833570000;715587227"\n    },\n    "CustomMasterUrl": "/subsite/_catalogs/masterpage/seattle.master",\n    "Description": "Subsite",\n    "DesignPackageId": "00000000-0000-0000-0000-000000000000",\n    "DocumentLibraryCalloutOfficeWebAppPreviewersDisabled": false,\n    "EnableMinimalDownload": true,\n    "FooterEmphasis": 0,\n    "FooterEnabled": false,\n    "FooterLayout": 0,\n    "HeaderEmphasis": 0,\n    "HeaderLayout": 0,\n    "HideTitleInHeader": false,\n    "HorizontalQuickLaunch": false,\n    "Id": "b60137df-c3dc-4984-9def-8edcf7c98ab9",\n    "IsEduClass": false,\n    "IsEduClassProvisionChecked": false,\n    "IsEduClassProvisionPending": false,\n    "IsHomepageModernized": false,\n    "IsMultilingual": false,\n    "IsRevertHomepageLinkHidden": false,\n    "Language": 1033,\n    "LastItemModifiedDate": "2022-11-05T14:08:03Z",\n    "LastItemUserModifiedDate": "2022-11-05T14:08:03Z",\n    "LogoAlignment": 0,\n    "MasterUrl": "/subsite/_catalogs/masterpage/seattle.master",\n    "MegaMenuEnabled": false,\n    "NavAudienceTargetingEnabled": false,\n    "NoCrawl": false,\n    "ObjectCacheEnabled": false,\n    "OverwriteTranslationsOnChange": false,\n    "ResourcePath": {\n      "DecodedUrl": "https://contoso.sharepoint.com/subsite"\n    },\n    "QuickLaunchEnabled": true,\n    "RecycleBinEnabled": true,\n    "SearchScope": 0,\n    "ServerRelativeUrl": "/subsite",\n    "SiteLogoUrl": null,\n    "SyndicationEnabled": true,\n    "TenantAdminMembersCanShare": 0,\n    "Title": "Subsite",\n    "TreeViewEnabled": false,\n    "UIVersion": 15,\n    "UIVersionConfigurationEnabled": false,\n    "Url": "https://contoso.sharepoint.com/subsite",\n    "WebTemplate": "STS",\n    "WelcomePage": "SitePages/Home.aspx"\n  }\n]\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nTitle    Url                                      Id\n-------  ---------------------------------------  ------------------------------------\nSubsite  https://contoso.sharepoint.com/subsite   b60137df-c3dc-4984-9def-8edcf7c98ab9\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nTitle,Url,Id\nSubsite,https://contoso.sharepoint.com/subsite,b60137df-c3dc-4984-9def-8edcf7c98ab9\n```\n")))}d.isMDXComponent=!0}}]);