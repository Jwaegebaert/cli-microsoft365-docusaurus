"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96598],{3905:(t,e,s)=>{s.d(e,{Zo:()=>p,kt:()=>d});var r=s(67294);function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function a(t,e){if(null==t)return{};var s,r,n=function(t,e){if(null==t)return{};var s,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)s=i[r],e.indexOf(s)>=0||(n[s]=t[s]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)s=i[r],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}var l=r.createContext({}),c=function(t){var e=r.useContext(l),s=e;return t&&(s="function"==typeof t?t(e):o(o({},e),t)),s},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var s=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),m=c(s),f=n,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return s?r.createElement(d,o(o({ref:e},p),{},{components:s})):r.createElement(d,o({ref:e},p))}));function d(t,e){var s=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=s.length,o=new Array(i);o[0]=f;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a[m]="string"==typeof t?t:n,o[1]=a;for(var c=2;c<i;c++)o[c]=s[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,s)}f.displayName="MDXCreateElement"},20657:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=s(87462),n=(s(67294),s(3905));const i={tags:["files","lists","reports"]},o="List Attachment Names From SharePoint Lists For A Site",a={unversionedId:"sample-scripts/spo/list-attachment-names-from-spo-lists/index",id:"sample-scripts/spo/list-attachment-names-from-spo-lists/index",title:"List Attachment Names From SharePoint Lists For A Site",description:"Author: Veronique Lengelle",source:"@site/docs/sample-scripts/spo/list-attachment-names-from-spo-lists/index.md",sourceDirName:"sample-scripts/spo/list-attachment-names-from-spo-lists",slug:"/sample-scripts/spo/list-attachment-names-from-spo-lists/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-attachment-names-from-spo-lists/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/list-attachment-names-from-spo-lists/index.md",tags:[{label:"files",permalink:"/cli-microsoft365-docusaurus/tags/files"},{label:"lists",permalink:"/cli-microsoft365-docusaurus/tags/lists"},{label:"reports",permalink:"/cli-microsoft365-docusaurus/tags/reports"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["files","lists","reports"]},sidebar:"sampleScripts",previous:{title:"Lists number of files in all lists and folders for the given site",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-all-list-folders-itemcount/"},next:{title:"List all external users in site groups across all site collections",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-externalusers-in-sitegroups/"}},l={},c=[],p={toc:c};function m(t){let{components:e,...s}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"list-attachment-names-from-sharepoint-lists-for-a-site"},"List Attachment Names From SharePoint Lists For A Site"),(0,n.kt)("p",null,"Author: ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/veronicageek"},"Veronique Lengelle")),(0,n.kt)("p",null,'=== "PowerShell"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```powershell\n$siteUrl = "https://<TENANT-NAME>.sharepoint.com/sites/<YOUR-SITE>"\n$allLists = m365 spo list list --webUrl $siteUrl --query "[?BaseTemplate == ``100``]" | ConvertFrom-Json\n$results = @()\n\nforeach($list in $allLists){\n    if ($list.Hidden -eq $false){ \n        $allItems = m365 spo listitem list --id $list.Id --webUrl $siteUrl | ConvertFrom-Json\n        \n        foreach($item in $allItems){\n            $allAttachments = m365 spo listitem attachment list --webUrl $siteUrl --listTitle $list.Title --itemId $item.Id | ConvertFrom-Json\n            \n            foreach($attachment in $allAttachments){\n                $results += [pscustomobject][ordered]@{\n                    itemID = $item.Id\n                    itemTitle = $item.Title\n                    fileName = $attachment.FileName\n                    attachmentPath = $attachment.ServerRelativeUrl\n                }\n            }\n        }\n    }\n}\n$results\n```\n')))}m.isMDXComponent=!0}}]);