"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14673],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>f});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=p(i),u=n,f=d["".concat(o,".").concat(u)]||d[u]||c[u]||l;return i?r.createElement(f,s(s({ref:t},m),{},{components:i})):r.createElement(f,s({ref:t},m))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,s=new Array(l);s[0]=u;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[d]="string"==typeof e?e:n,s[1]=a;for(var p=2;p<l;p++)s[p]=i[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},27120:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=i(87462),n=(i(67294),i(3905));const l={tags:["files","reports"]},s="List all files with missing required metadata",a={unversionedId:"sample-scripts/spo/list-all-files-with-missing-required-metadata/index",id:"sample-scripts/spo/list-all-files-with-missing-required-metadata/index",title:"List all files with missing required metadata",description:"Author: Nico De Cleyre, Inspired by Veronique Lengelle",source:"@site/docs/sample-scripts/spo/list-all-files-with-missing-required-metadata/index.md",sourceDirName:"sample-scripts/spo/list-all-files-with-missing-required-metadata",slug:"/sample-scripts/spo/list-all-files-with-missing-required-metadata/",permalink:"/sample-scripts/spo/list-all-files-with-missing-required-metadata/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/list-all-files-with-missing-required-metadata/index.md",tags:[{label:"files",permalink:"/tags/files"},{label:"reports",permalink:"/tags/reports"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["files","reports"]},sidebar:"sampleScripts",previous:{title:"List all documents with a specific name within a SharePoint site",permalink:"/sample-scripts/spo/list-all-files-specific-name/"},next:{title:"List all items with unique permissions",permalink:"/sample-scripts/spo/list-all-items-with-unique-permissions/"}},o={},p=[],m={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"list-all-files-with-missing-required-metadata"},"List all files with missing required metadata"),(0,n.kt)("p",null,"Author: ",(0,n.kt)("a",{parentName:"p",href:"https://www.nicodecleyre.com"},"Nico De Cleyre"),", Inspired by ",(0,n.kt)("a",{parentName:"p",href:"https://veronicageek.com/2021/find-missing-metadata-using-powershell/"},"Veronique Lengelle")),(0,n.kt)("p",null,"The following script iterates through all files in all the document libraries of a SharePoint Online site. It returns all the files that have missing required metadata and excludes the ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," metadata"),(0,n.kt)("p",null,'=== "PowerShell"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```powershell\n$siteUrl = "https://<TENANT-NAME>.sharepoint.com/sites/<YOUR-SITE>"\n$allLists = m365 spo list list --webUrl $($siteURL) --output json | ConvertFrom-Json\n$allLibs = $allLists | where {$_.BaseTemplate -eq 101}\n$results = @()\n$fields = @(\'FileLeafRef\', \'FileSystemObjectType\')\n\nforeach ($lib in $allLibs) {\n    $allRequiredFields = m365 spo field list --webUrl $($siteURL) --listId $($lib.Id) --query "[?Required == ``true``]" --output json | ConvertFrom-Json\n\n    if($allRequiredFields.Length -eq 0){\n        continue\n    }\n\n    [array]$allRequiredFieldsInternalName = $($allRequiredFields | select InternalName).InternalName\n\n    ForEach ($field in $fields)\n    {\n        If (-not ($allRequiredFieldsInternalName -contains $field))\n        {\n            $allRequiredFieldsInternalName += $field\n        }\n    }\n\n    $allItems = m365 spo listitem list --webUrl $($siteURL) --listId $($lib.Id) --fields $($allRequiredFieldsInternalName -join ",") --output json | ConvertFrom-Json\n    $allItems = $allItems | where {$_.FileSystemObjectType -eq 0}\n    \n    foreach($item in $allItems){\n        foreach($requiredfield in $allRequiredFields){\n            if($requiredfield.InternalName -eq "FileLeafRef"){\n                continue\n            }\n\n            if ($null -eq $item["$($requiredfield.InternalName)"]) {\n                    $results += [pscustomobject]@{\n                        FileName = $item.FileLeafRef\n                        FieldName = $requiredfield.Title\n                        ListOrLibrary = $lib.Title\n                        FileLocation = $lib.RootFolder.ServerRelativeUrl\n                    }\n            }\n        }\n    }\n}\n$results\n```\n')))}d.isMDXComponent=!0}}]);