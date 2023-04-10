"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[75287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const o={},r="spo hubsite data get",i={unversionedId:"cmd/spo/hubsite/hubsite-data-get",id:"cmd/spo/hubsite/hubsite-data-get",title:"spo hubsite data get",description:"Get hub site data for the specified site",source:"@site/docs/cmd/spo/hubsite/hubsite-data-get.md",sourceDirName:"cmd/spo/hubsite",slug:"/cmd/spo/hubsite/hubsite-data-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-data-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/hubsite/hubsite-data-get.md",tags:[],version:"current",lastUpdatedAt:1677283761,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo hubsite connect",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-connect"},next:{title:"spo hubsite disconnect",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-disconnect"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"spo-hubsite-data-get"},"spo hubsite data get"),(0,s.kt)("p",null,"Get hub site data for the specified site"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite data get [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site for which to retrieve hub site data."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-f, --forceRefresh"),"\n: Set, to refresh the server cache with the latest updates."),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"By default, the hub site data is returned from the server's cache. To refresh the data with the latest updates, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"-f, --forceRefresh")," option. Use this option, if you just made changes and need to see them right away."),(0,s.kt)("p",null,"If the specified site is not connected to a hub site site and is not a hub site itself, no data will be retrieved."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Get information about the hub site data for a specific site with URL."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite data get --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("p",null,'=== "JSON"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```json\n{\n  "headerEmphasis": "None",\n  "themeKey": "7EDE94FF",\n  "name": "Intranet",\n  "url": "https://contoso.sharepoint.com/sites/intra",\n  "logoUrl": "https://contoso.sharepoint.com/sites/intra/SiteAssets/work.png",\n  "logoFileHash": 637696294610000000,\n  "usesMetadataNavigation": false,\n  "megaMenuEnabled": true,\n  "navigation": [],\n  "isNavAudienceTargeted": false,\n  "siteDesignId": "184644fb-90ed-4841-a7ad-6930cf819060",\n  "requiresJoinApproval": false,\n  "hideNameInNavigation": false,\n  "parentHubSiteId": "1e1232eb-1a78-4726-8bb9-56af3640228d",\n  "relatedHubSiteIds": [\n    "af80c11f-0138-4d72-bb37-514542c3aabb"\n  ],\n  "tenantInstanceId": "4d128b52-7228-46b5-8765-5b338476054d",\n  "isSameTenantInstance": true\n}\n```\n')),(0,s.kt)("p",null,'=== "Text"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```text\nheaderEmphasis        : None\nhideNameInNavigation  : false\nisNavAudienceTargeted : false\nisSameTenantInstance  : true\nlogoFileHash          : 637696294610000000\nlogoUrl               : https://contoso.sharepoint.com/sites/intra/SiteAssets/work.png\nmegaMenuEnabled       : true\nname                  : Intranet\nnavigation            : []\nparentHubSiteId       : 1e1232eb-1a78-4726-8bb9-56af3640228d\nrelatedHubSiteIds     : ["af80c11f-0138-4d72-bb37-514542c3aabb"]\nrequiresJoinApproval  : false\nsiteDesignId          : 184644fb-90ed-4841-a7ad-6930cf819060\ntenantInstanceId      : 4d128b52-7228-46b5-8765-5b338476054d\nthemeKey              : 7EDE94FF\nurl                   : https://contoso.sharepoint.com/sites/intra\nusesMetadataNavigation: false\n```\n')),(0,s.kt)("p",null,'=== "CSV"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```csv\nheaderEmphasis,themeKey,name,url,logoUrl,logoFileHash,usesMetadataNavigation,megaMenuEnabled,navigation,isNavAudienceTargeted,siteDesignId,requiresJoinApproval,hideNameInNavigation,parentHubSiteId,relatedHubSiteIds,tenantInstanceId,isSameTenantInstance\nNone,7EDE94FF,Intranet,https://contoso.sharepoint.com/sites/intra,https://contoso.sharepoint.com/sites/intra/SiteAssets/work.png,637696294610000000,false,1,[],false,184644fb-90ed-4841-a7ad-6930cf819060,,,1e1232eb-1a78-4726-8bb9-56af3640228d,"[""af80c11f-0138-4d72-bb37-514542c3aabb""]",4d128b52-7228-46b5-8765-5b338476054d,1\n```\n')),(0,s.kt)("p",null,'=== "Markdown"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```md\n# spo hubsite data get --webUrl "https://contoso.sharepoint.com/sites/intra"\n\nDate: 2/20/2023\n\n## Intranet (https://contoso.sharepoint.com/sites/intra)\n\nProperty | Value\n---------|-------\nheaderEmphasis | None\nthemeKey | 7EDE94FF\nname | Intranet\nurl | https://contoso.sharepoint.com/sites/intra\nlogoUrl | https://contoso.sharepoint.com/sites/intra/SiteAssets/work.png\nlogoFileHash | 637696294610000000\nusesMetadataNavigation | false\nmegaMenuEnabled | true\nnavigation | []\nisNavAudienceTargeted | false\nsiteDesignId | 184644fb-90ed-4841-a7ad-6930cf819060\nrequiresJoinApproval | false\nhideNameInNavigation | false\nparentHubSiteId | 1e1232eb-1a78-4726-8bb9-56af3640228d\nrelatedHubSiteIds | ["af80c11f-0138-4d72-bb37-514542c3aabb"]\ntenantInstanceId | 4d128b52-7228-46b5-8765-5b338476054d\nisSameTenantInstance | true\n```\n')),(0,s.kt)("h2",{id:"more-information"},"More information"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"SharePoint hub sites new in Microsoft 365: ",(0,s.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"},"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"))))}u.isMDXComponent=!0}}]);