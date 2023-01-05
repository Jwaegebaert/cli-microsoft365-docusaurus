"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1306],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||n;return t?o.createElement(d,i(i({ref:r},p),{},{components:t})):o.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7202:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const n={tags:["files","libraries","migration"]},i="Copy files to another SharePoint Library in another site",l={unversionedId:"sample-scripts/spo/copy-files-to-another-library/index",id:"sample-scripts/spo/copy-files-to-another-library/index",title:"Copy files to another SharePoint Library in another site",description:"Author: Garry Trinder, Adam, Inspired by Veronique Lengelle",source:"@site/docs/sample-scripts/spo/copy-files-to-another-library/index.md",sourceDirName:"sample-scripts/spo/copy-files-to-another-library",slug:"/sample-scripts/spo/copy-files-to-another-library/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/copy-files-to-another-library/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/copy-files-to-another-library/index.md",tags:[{label:"files",permalink:"/cli-microsoft365-docusaurus/tags/files"},{label:"libraries",permalink:"/cli-microsoft365-docusaurus/tags/libraries"},{label:"migration",permalink:"/cli-microsoft365-docusaurus/tags/migration"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["files","libraries","migration"]},sidebar:"sampleScripts",previous:{title:"Change group membership of all SharePoint Online sites",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/change-owner-group-membership/"},next:{title:"Copy list items between SharePoint lists",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/copy-listitems-sharepointlist/"}},s={},c=[],p={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"copy-files-to-another-sharepoint-library-in-another-site"},"Copy files to another SharePoint Library in another site"),(0,a.kt)("p",null,"Author: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/garrytrinder"},"Garry Trinder"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Adam-it"},"Adam"),", Inspired by Veronique Lengelle"),(0,a.kt)("p",null,"This script shows how you can use the CLI to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"when copyKeepingSameFolderStructure is true - copy all files and folders from source library to a different library in different SharePoint site keeping the same folder and subfolder structure"),(0,a.kt)("li",{parentName:"ul"},"when copyKeepingSameFolderStructure is false - copy all files from all folders and subfolders from source library to a different library to a root folder in different SharePoint")),(0,a.kt)("p",null,'=== "PowerShell"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```powershell\nWrite-host 'Copy files to another SharePoint Library in another site'\n\nfunction Copy-FilesFromFolderToLibrary(\n  [Parameter(Mandatory = $True)][string] $tenatUrl,\n  [Parameter(Mandatory = $True)][string] $sourceSite,\n  [Parameter(Mandatory = $True)][string] $folder,\n  [Parameter(Mandatory = $True)][string] $targetLibrary,\n  [Parameter(Mandatory = $True)][string] $targetSite) {\n    Write-Host $folder\n\n    $allFolders = m365 spo folder list --webUrl \"$tenatUrl$sourceSite\" --parentFolderUrl $folder --output 'json'\n    $allFolders = $allFolders | ConvertFrom-Json\n    foreach ($innerfolder in $allFolders) {\n      if ($innerfolder.Name -ne 'Forms') {\n        $folderUrl = $innerfolder.ServerRelativeUrl -replace $sourceSite, ''\n        Copy-FilesFromFolderToLibrary -tenatUrl $tenatUrl -sourceSite $sourceSite -folder $folderUrl -targetLibrary $targetLibrary -targetSite $targetSite\n      }\n    }\n\n    $allFiles = m365 spo file list --webUrl \"$tenatUrl$sourceSite\" --folder $folder.substring(1) --output 'json'\n    $allFiles = $allFiles | ConvertFrom-Json\n    foreach ($file in $allFiles) {\n      $fileUrl = $file.ServerRelativeUrl -replace $sourceSite, ''\n      m365 spo file copy --webUrl \"$tenatUrl$sourceSite\" --sourceUrl $fileUrl --targetUrl \"$targetSite/$targetLibrary\" --allowSchemaMismatch\n    }\n}\n\nfunction Copy-LibraryToLibrary(\n  [Parameter(Mandatory = $True)][string] $tenatUrl,\n  [Parameter(Mandatory = $True)][string] $sourceLibrary,\n  [Parameter(Mandatory = $True)][string] $sourceSite,\n  [Parameter(Mandatory = $True)][string] $targetLibrary,\n  [Parameter(Mandatory = $True)][string] $targetSite,\n  [Parameter(Mandatory = $True)][bool] $copyKeepingSameFolderStructure) {\n  if ($copyKeepingSameFolderStructure) {\n    Write-host \"Copy the same structure\"\n    \n    $allFolders = m365 spo folder list --webUrl \"$tenatUrl$sourceSite\" --parentFolderUrl \"/$sourceLibrary\" --output 'json'\n    $allFolders = $allFolders | ConvertFrom-Json\n    foreach ($folder in $allFolders) {\n      if ($folder.Name -ne 'Forms') {\n        $folderName = $folder.Name\n        m365 spo folder copy --webUrl \"$tenatUrl$sourceSite\" --sourceUrl \"/$sourceLibrary/$folderName\" --targetUrl \"$targetSite/$targetLibrary\" --allowSchemaMismatch\n      }\n    }\n    \n    $allFiles = m365 spo file list --webUrl \"$tenatUrl$sourceSite\" --folder $sourceLibrary --output 'json'\n    $allFiles = $allFiles | ConvertFrom-Json\n    foreach ($file in $allFiles) {\n      $fileUrl = $file.ServerRelativeUrl -replace $sourceSite, ''\n      m365 spo file copy --webUrl \"$tenatUrl$sourceSite\" --sourceUrl $fileUrl --targetUrl \"$targetSite/$targetLibrary\" --allowSchemaMismatch\n    }\n  }\n  else {\n    Write-host \"Copy files to the root target folder\"\n\n    Copy-FilesFromFolderToLibrary -tenatUrl $tenatUrl -sourceSite $sourceSite -folder \"/$sourceLibrary\" -targetLibrary $targetLibrary -targetSite $targetSite\n  }\n}\n\nWrite-host 'ensure logged in'\n$m365Status = m365 status --output text\nif ($m365Status -eq \"Logged Out\") {\n  m365 login\n}\n\n$tenatUrl = 'https://contoso.sharepoint.com'\n$sourceLibrary = 'Shared%20Documents'\n$sourceSite = '/sites/FromSite'\n$targetLibrary = 'Shared%20Documents'\n$targetSite = '/sites/ToSite'\n$copyKeepingSameFolderStructure = $false\nCopy-LibraryToLibrary -tenatUrl $tenatUrl -sourceLibrary $sourceLibrary -sourceSite $sourceSite -targetLibrary $targetLibrary -targetSite $targetSite -copyKeepingSameFolderStructure $copyKeepingSameFolderStructure\n```\n")))}u.isMDXComponent=!0}}]);