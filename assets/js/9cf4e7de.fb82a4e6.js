"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=s,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:s,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const l={},a="spo list list",o={unversionedId:"cmd/spo/list/list-list",id:"cmd/spo/list/list-list",title:"spo list list",description:"Gets all lists within the specified site",source:"@site/docs/cmd/spo/list/list-list.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-get"},next:{title:"spo list remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-remove"}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2},{value:"Response",id:"response",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"spo-list-list"},"spo list list"),(0,s.kt)("p",null,"Gets all lists within the specified site"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list list [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the lists to retrieve are located"),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Return all lists located in site ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list list --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,s.kt)("h2",{id:"more-information"},"More information"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"List REST API resources: ",(0,s.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/office/dn531433.aspx#bk_ListEndpoint"},"https://msdn.microsoft.com/en-us/library/office/dn531433.aspx#bk_ListEndpoint"))),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("p",null,'=== "JSON"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "RootFolder": {\n      "ServerRelativeUrl": "/_catalogs/theme"\n    },\n    "AllowContentTypes": true,\n    "BaseTemplate": 123,\n    "BaseType": 1,\n    "ContentTypesEnabled": false,\n    "CrawlNonDefaultViews": false,\n    "Created": "2020-01-12T01:03:13Z",\n    "CurrentChangeToken": {\n      "StringValue": "1;3;66e5148c-7060-4479-88e7-636d79579148;638042267256930000;564174226"\n    },\n    "DefaultContentApprovalWorkflowId": "00000000-0000-0000-0000-000000000000",\n    "DefaultItemOpenUseListSetting": false,\n    "Description": "Use the theme gallery to store themes. The themes in this gallery can be used by this site or any of its subsites.",\n    "Direction": "none",\n    "DisableCommenting": false,\n    "DisableGridEditing": false,\n    "DocumentTemplateUrl": null,\n    "DraftVersionVisibility": 0,\n    "EnableAttachments": false,\n    "EnableFolderCreation": false,\n    "EnableMinorVersions": false,\n    "EnableModeration": false,\n    "EnableRequestSignOff": true,\n    "EnableVersioning": false,\n    "EntityTypeName": "OData__x005f_catalogs_x002f_theme",\n    "ExemptFromBlockDownloadOfNonViewableFiles": false,\n    "FileSavePostProcessingEnabled": false,\n    "ForceCheckout": false,\n    "HasExternalDataSource": false,\n    "Hidden": true,\n    "Id": "66e5148c-7060-4479-88e7-636d79579148",\n    "ImagePath": {\n      "DecodedUrl": "/_layouts/15/images/itdl.png?rev=47"\n    },\n    "ImageUrl": "/_layouts/15/images/itdl.png?rev=47",\n    "DefaultSensitivityLabelForLibrary": "",\n    "IrmEnabled": false,\n    "IrmExpire": false,\n    "IrmReject": false,\n    "IsApplicationList": false,\n    "IsCatalog": true,\n    "IsPrivate": false,\n    "ItemCount": 41,\n    "LastItemDeletedDate": "2020-01-12T01:03:13Z",\n    "LastItemModifiedDate": "2020-01-12T01:03:18Z",\n    "LastItemUserModifiedDate": "2020-01-12T01:03:18Z",\n    "ListExperienceOptions": 0,\n    "ListItemEntityTypeFullName": "SP.Data.OData__x005f_catalogs_x002f_themeItem",\n    "MajorVersionLimit": 0,\n    "MajorWithMinorVersionsLimit": 0,\n    "MultipleDataList": false,\n    "NoCrawl": true,\n    "ParentWebPath": {\n      "DecodedUrl": "/"\n    },\n    "ParentWebUrl": "/",\n    "ParserDisabled": false,\n    "ServerTemplateCanCreateFolders": false,\n    "TemplateFeatureId": "00000000-0000-0000-0000-000000000000",\n    "Title": "Theme Gallery",\n    "Url": "/_catalogs/theme"\n  }\n]\n```\n')),(0,s.kt)("p",null,'=== "Text"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```text\nId                                    Url\n------------------------------------  ----------------\n66e5148c-7060-4479-88e7-636d79579148  /_catalogs/theme\n```\n")),(0,s.kt)("p",null,'=== "CSV"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```csv\nId,Url\nTheme Gallery,/_catalogs/theme,66e5148c-7060-4479-88e7-636d79579148\n```\n")))}m.isMDXComponent=!0}}]);