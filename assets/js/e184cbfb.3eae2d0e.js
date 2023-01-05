"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5979],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>f});var s=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,s,n=function(e,t){if(null==e)return{};var i,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)i=r[s],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)i=r[s],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=s.createContext({}),p=function(e){var t=s.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=p(e.components);return s.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=p(i),d=n,f=u["".concat(o,".").concat(d)]||u[d]||c[d]||r;return i?s.createElement(f,l(l({ref:t},m),{},{components:i})):s.createElement(f,l({ref:t},m))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[u]="string"==typeof e?e:n,l[1]=a;for(var p=2;p<r;p++)l[p]=i[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,i)}d.displayName="MDXCreateElement"},57515:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var s=i(87462),n=(i(67294),i(3905));const r={tags:["listitems","security"]},l="List all items with unique permissions",a={unversionedId:"sample-scripts/spo/list-all-items-with-unique-permissions/index",id:"sample-scripts/spo/list-all-items-with-unique-permissions/index",title:"List all items with unique permissions",description:"Author: Veronique Lengelle, Inspired by Salaudeen Rajack",source:"@site/docs/sample-scripts/spo/list-all-items-with-unique-permissions/index.md",sourceDirName:"sample-scripts/spo/list-all-items-with-unique-permissions",slug:"/sample-scripts/spo/list-all-items-with-unique-permissions/",permalink:"/sample-scripts/spo/list-all-items-with-unique-permissions/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/list-all-items-with-unique-permissions/index.md",tags:[{label:"listitems",permalink:"/tags/listitems"},{label:"security",permalink:"/tags/security"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["listitems","security"]},sidebar:"sampleScripts",previous:{title:"List all files with missing required metadata",permalink:"/sample-scripts/spo/list-all-files-with-missing-required-metadata/"},next:{title:"Lists number of files in all lists and folders for the given site",permalink:"/sample-scripts/spo/list-all-list-folders-itemcount/"}},o={},p=[{value:"List all items for a specific SharePoint list on a site",id:"list-all-items-for-a-specific-sharepoint-list-on-a-site",level:2},{value:"List all items for multiple SharePoint lists on a site",id:"list-all-items-for-multiple-sharepoint-lists-on-a-site",level:2}],m={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,s.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"list-all-items-with-unique-permissions"},"List all items with unique permissions"),(0,n.kt)("p",null,"Author: ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/veronicageek"},"Veronique Lengelle"),", Inspired by ",(0,n.kt)("a",{parentName:"p",href:"https://www.sharepointdiary.com/2017/03/sharepoint-online-get-all-list-items-with-unique-permissions-using-powershell.html"},"Salaudeen Rajack")),(0,n.kt)("h2",{id:"list-all-items-for-a-specific-sharepoint-list-on-a-site"},"List all items for a specific SharePoint list on a site"),(0,n.kt)("p",null,'=== "PowerShell"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```powershell\n#Declare variables\n$siteURL = "https://<TENANT-NAME>.sharepoint.com/sites/<YOUR-SITE>"\n$listName = "<YOUR-LIST-NAME>"\n$allItems = m365 spo listitem list --webUrl $siteUrl --title $listName --fields "ID, HasUniqueRoleAssignments, Title" | ConvertFrom-Json\n$results = @()\n\n#Loop through each item in the list\nforeach($item in $allItems){\n    $results += [pscustomobject][ordered]@{\n        ListName = $listName\n        ItemID = $item.Id\n        ItemTitle = $item.Title\n        UniquePermissions = $item.HasUniqueRoleAssignments\n    }\n}\n$results\n```\n')),(0,n.kt)("h2",{id:"list-all-items-for-multiple-sharepoint-lists-on-a-site"},"List all items for multiple SharePoint lists on a site"),(0,n.kt)("p",null,'=== "PowerShell"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```powershell\n#Declare variables\n$siteURL = "https://<TENANT-NAME>.sharepoint.com/sites/<YOUR-SITE>"\n$allLists = m365 spo list list --webUrl $siteUrl --query "[?BaseTemplate == ``100``]" | ConvertFrom-Json\n$results = @()\n\nforeach($list in $allLists){\n    if ($list.Hidden -eq $false){ \n        \n        $allItems = m365 spo listitem list --webUrl $siteURL --id $list.Id --fields "ID, HasUniqueRoleAssignments, Title" | ConvertFrom-Json\n        \n        foreach($item in $allItems){\n            $results += [pscustomobject][ordered]@{\n                ListName = $list.Title\n                ItemID = $item.Id\n                ItemTitle = $item.Title\n                UniquePermissions = $item.HasUniqueRoleAssignments\n            }\n        }\n    }\n}\n$results\n```\n')))}u.isMDXComponent=!0}}]);