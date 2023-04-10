"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[23088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},b=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),b=i,f=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return n?s.createElement(f,r(r({ref:t},p),{},{components:n})):s.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<a;c++)r[c]=n[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}b.displayName="MDXCreateElement"},73776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(87462),i=(n(67294),n(3905));const a={},r="spo hubsite list",o={unversionedId:"cmd/spo/hubsite/hubsite-list",id:"cmd/spo/hubsite/hubsite-list",title:"spo hubsite list",description:"Lists hub sites in the current tenant",source:"@site/docs/cmd/spo/hubsite/hubsite-list.md",sourceDirName:"cmd/spo/hubsite",slug:"/cmd/spo/hubsite/hubsite-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/hubsite/hubsite-list.md",tags:[],version:"current",lastUpdatedAt:1677283761,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo hubsite get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-get"},next:{title:"spo hubsite register",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-register"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3},{value:"<code>includeAssociatedSites</code> response",id:"includeassociatedsites-response",level:3},{value:"More information",id:"more-information",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-hubsite-list"},"spo hubsite list"),(0,i.kt)("p",null,"Lists hub sites in the current tenant"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite list [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --includeAssociatedSites"),"\n: Include the associated sites in the result (only in JSON output)."),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"When using the text or csv output type, the command lists only the values of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SiteUrl")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Title")," properties of the hub site. With the output type as JSON, all available properties are included in the command output."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"List hub sites in the current tenant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite list\n")),(0,i.kt)("p",null,"List hub sites, including their associated sites, in the current tenant. Associated site info is only shown in JSON output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite list --includeAssociatedSites --output json\n")),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("h3",{id:"standard-response"},"Standard response"),(0,i.kt)("p",null,'=== "JSON"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "Description": "Intranet Hub Site",\n    "EnablePermissionsSync": false,\n    "EnforcedECTs": null,\n    "EnforcedECTsVersion": 0,\n    "HideNameInNavigation": false,\n    "ID": "af80c11f-0138-4d72-bb37-514542c3aabb",\n    "LogoUrl": "https://contoso.sharepoint.com/sites/intra/SiteAssets/work.png",\n    "ParentHubSiteId": "ec78f3aa-5a74-4f16-be49-3396df045f34",\n    "PermissionsSyncTag": 0,\n    "RequiresJoinApproval": false,\n    "SiteDesignId": "184644fb-90ed-4841-a7ad-6930cf819060",\n    "SiteId": "af80c11f-0138-4d72-bb37-514542c3aabb",\n    "SiteUrl": "https://contoso.sharepoint.com/sites/intra",\n    "Targets": null,\n    "TenantInstanceId": "5d128b52-7228-46b5-8765-5b338476054d",\n    "Title": "Intranet"\n  }\n]\n```\n')),(0,i.kt)("p",null,'=== "Text"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```text\nID                                    SiteUrl                                     Title\n------------------------------------  ------------------------------------------  --------\naf80c11f-0138-4d72-bb37-514542c3aabb  https://contoso.sharepoint.com/sites/intra  Intranet\n```\n")),(0,i.kt)("p",null,'=== "CSV"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```csv\nID,SiteUrl,Title\naf80c11f-0138-4d72-bb37-514542c3aabb,https://contoso.sharepoint.com/sites/intra,Intranet\n```\n")),(0,i.kt)("p",null,'=== "Markdown"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```md\n# spo hubsite list\n\nDate: 2/20/2023\n\n## Intranet (af80c11f-0138-4d72-bb37-514542c3aabb)\n\nProperty | Value\n---------|-------\nDescription | Intranet Hub Site\nEnablePermissionsSync | false\nEnforcedECTs | null\nEnforcedECTsVersion | 0\nHideNameInNavigation | false\nID | af80c11f-0138-4d72-bb37-514542c3aabb\nLogoUrl | https://contoso.sharepoint.com/sites/intra/SiteAssets/work.png\nParentHubSiteId | ec78f3aa-5a74-4f16-be49-3396df045f34\nPermissionsSyncTag | 0\nRequiresJoinApproval | false\nSiteDesignId | 184644fb-90ed-4841-a7ad-6930cf819060\nSiteId | af80c11f-0138-4d72-bb37-514542c3aabb\nSiteUrl | https://contoso.sharepoint.com/sites/intra\nTargets | null\nTenantInstanceId | 5d128b52-7228-46b5-8765-5b338476054d\nTitle | Intranet\n```\n")),(0,i.kt)("h3",{id:"includeassociatedsites-response"},(0,i.kt)("inlineCode",{parentName:"h3"},"includeAssociatedSites")," response"),(0,i.kt)("p",null,"When we make use of the option ",(0,i.kt)("inlineCode",{parentName:"p"},"includeAssociatedSites")," the response will differ. "),(0,i.kt)("p",null,'=== "JSON"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "Description": "Intranet Hub Site",\n    "EnablePermissionsSync": false,\n    "EnforcedECTs": null,\n    "EnforcedECTsVersion": 0,\n    "HideNameInNavigation": false,\n    "ID": "af80c11f-0138-4d72-bb37-514542c3aabb",\n    "LogoUrl": "https://contoso.sharepoint.com/sites/intra/SiteAssets/work.png",\n    "ParentHubSiteId": "ec78f3aa-5a74-4f16-be49-3396df045f34",\n    "PermissionsSyncTag": 0,\n    "RequiresJoinApproval": false,\n    "SiteDesignId": "184644fb-90ed-4841-a7ad-6930cf819060",\n    "SiteId": "af80c11f-0138-4d72-bb37-514542c3aabb",\n    "SiteUrl": "https://contoso.sharepoint.com/sites/intra",\n    "Targets": null,\n    "TenantInstanceId": "5d128b52-7228-46b5-8765-5b338476054d",\n    "Title": "Intranet",\n    "AssociatedSites": [\n      {\n        "Title": "About Us",\n        "SiteUrl": "https://contoso.sharepoint.com/sites/about-us"\n      }\n    ]\n  }\n]\n```\n')),(0,i.kt)("p",null,'=== "Text"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```text\nID                                    SiteUrl                                     Title\n------------------------------------  ------------------------------------------  --------\naf80c11f-0138-4d72-bb37-514542c3aabb  https://contoso.sharepoint.com/sites/intra  Intranet\n```\n")),(0,i.kt)("p",null,'=== "CSV"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```csv\nID,SiteUrl,Title\naf80c11f-0138-4d72-bb37-514542c3aabb,https://contoso.sharepoint.com/sites/intra,Intranet\n```\n")),(0,i.kt)("p",null,'=== "Markdown"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```md\n# spo hubsite list --includeAssociatedSites "true"\n\nDate: 2/20/2023\n\n## Intranet (af80c11f-0138-4d72-bb37-514542c3aabb)\n\nProperty | Value\n---------|-------\nDescription | Intranet Hub Site\nEnablePermissionsSync | false\nEnforcedECTs | null\nEnforcedECTsVersion | 0\nHideNameInNavigation | false\nID | af80c11f-0138-4d72-bb37-514542c3aabb\nLogoUrl | https://contoso.sharepoint.com/sites/intra/SiteAssets/work.png\nParentHubSiteId | ec78f3aa-5a74-4f16-be49-3396df045f34\nPermissionsSyncTag | 0\nRequiresJoinApproval | false\nSiteDesignId | 184644fb-90ed-4841-a7ad-6930cf819060\nSiteId | af80c11f-0138-4d72-bb37-514542c3aabb\nSiteUrl | https://contoso.sharepoint.com/sites/intra\nTargets | null\nTenantInstanceId | 5d128b52-7228-46b5-8765-5b338476054d\nTitle | Intranet\n```\n')),(0,i.kt)("h2",{id:"more-information"},"More information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SharePoint hub sites new in Microsoft 365: ",(0,i.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"},"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"))))}d.isMDXComponent=!0}}]);