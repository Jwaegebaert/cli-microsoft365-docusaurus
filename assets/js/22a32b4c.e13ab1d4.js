"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71753],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={tags:["libraries","files"]},a="Insert pictures in a SharePoint Document Library into a Word document",l={unversionedId:"sample-scripts/spo/insert-sp-library-pictures-into-word/index",id:"sample-scripts/spo/insert-sp-library-pictures-into-word/index",title:"Insert pictures in a SharePoint Document Library into a Word document",description:"Author: Joseph Velliah",source:"@site/docs/sample-scripts/spo/insert-sp-library-pictures-into-word/index.md",sourceDirName:"sample-scripts/spo/insert-sp-library-pictures-into-word",slug:"/sample-scripts/spo/insert-sp-library-pictures-into-word/",permalink:"/sample-scripts/spo/insert-sp-library-pictures-into-word/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/insert-sp-library-pictures-into-word/index.md",tags:[{label:"libraries",permalink:"/tags/libraries"},{label:"files",permalink:"/tags/files"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["libraries","files"]},sidebar:"sampleScripts",previous:{title:"Hide SharePoint list from Site Contents",permalink:"/sample-scripts/spo/hide-list-from-site-contents/"},next:{title:"List all application customizers in a tenant",permalink:"/sample-scripts/spo/list-all-application-customizers/"}},s={},c=[],p={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"insert-pictures-in-a-sharepoint-document-library-into-a-word-document"},"Insert pictures in a SharePoint Document Library into a Word document"),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://sprider.blog/insert-pictures-in-a-sharepoint-document-library-into-a-word-document"},"Joseph Velliah")),(0,o.kt)("p",null,"This PowerShell script shows how to download and insert many pictures in a SharePoint Document Library into a Word document in a two-column table with file name using CLI for Microsoft 365 commands and PowerShell Script."),(0,o.kt)("p",null,"Customers have multiple pictures in a SharePoint Document Library, and they need to automatically insert the pictures in Word as it will take a lot of time if operating from UI. So, they need a script to accomplish that."),(0,o.kt)("p",null,"Prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows 10"),(0,o.kt)("li",{parentName:"ul"},"Windows PowerShell"),(0,o.kt)("li",{parentName:"ul"},"CLI for Microsoft 365"),(0,o.kt)("li",{parentName:"ul"},"Office 2007 or Higher version"),(0,o.kt)("li",{parentName:"ul"},"SharePoint Online Site"),(0,o.kt)("li",{parentName:"ul"},"Document Library with some images"),(0,o.kt)("li",{parentName:"ul"},"Folder to download the images"),(0,o.kt)("li",{parentName:"ul"},"Blank Word document to add the images")),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```powershell\nWrite-Host "Execution started"\n\n$imagesDownloadFolderPath = "C:\\Users\\username\\Downloads\\Temp\\images"\n$targetWordDocumentPath = "C:\\Users\\username\\Downloads\\Temp\\output\\word-document-name.docx"\n\n$siteUrl = "https://tenant-name.sharepoint.com/sites/site-name"\n$docLibRootFolderName = "Shared Documents"\n\n# assumption - folder contains only images but feel free to change the filter conditions to limit the items/file types returned from document library\n$spolImagesCollection = m365 spo file list --webUrl $siteUrl --folder $docLibRootFolderName -o json | ConvertFrom-Json\n\nif ($spolImagesCollection.Count -gt 0) {\n  $numberOfRows = $spolImagesCollection.Count\n  $numberOfColumns = 2\n\n  $wordClient = New-Object -comobject word.application\n  $wordClient.Visible = $false\n  $wordDoc = $wordClient.Documents.Add()\n  $range = $wordDoc.Range()\n  $wordDoc.Tables.Add($range, $numberOfRows, $numberOfColumns) | Out-Null\n\n  $table = $wordDoc.Tables.item(1)\n  $table.Cell(1, 1).Range.Text = "File Name" # column 1 heading\n  $table.Cell(1, 2).Range.Text = "Image" # column 2 heading 1\n\n  $rowNumber = 2 # to insert the images from second row\n\n  ForEach ($spolImage in $spolImagesCollection) {\n    $targetFilePath = Join-Path $imagesDownloadFolderPath $spolImage.Name\n    $docServerRelativeUrl = $spolImage.ServerRelativeUrl\n\n    Write-Host "Processing: $docServerRelativeUrl"\n\n    m365 spo file get --webUrl $siteUrl --url $docServerRelativeUrl --asFile --path $targetFilePath\n    Write-Host "File downloaded: " $docServerRelativeUrl\n\n    $table.Cell($rowNumber, 1).Range.Text = $spolImage.Name\n    $table.Cell($rowNumber, 2).Range.InlineShapes.AddPicture($targetFilePath) | Out-Null\n    Write-Host "Added image in temp document table row " $rowNumber\n\n    $rowNumber++\n  }\n\n  [ref]$saveFormat = "microsoft.office.interop.word.WdSaveFormat" -as [type]\n  $wordDoc.saveas([ref] $targetWordDocumentPath, [ref]$saveFormat::wdFormatDocumentDefault)\n  $wordDoc.close()\n  $wordClient.quit()\n\n  [System.Runtime.Interopservices.Marshal]::ReleaseComObject($wordDoc) | Out-Null\n  [System.Runtime.Interopservices.Marshal]::ReleaseComObject($wordClient) | Out-Null\n  [System.Runtime.Interopservices.Marshal]::ReleaseComObject($range) | Out-Null\n  [System.Runtime.Interopservices.Marshal]::ReleaseComObject($table) | Out-Null\n  Remove-Variable wordDoc, wordClient, range, table\n  [gc]::collect()\n  [gc]::WaitForPendingFinalizers()\n\n  Write-Host "Open the document located in $targetWordDocumentPath and check the images in the table"\n}\nelse {\n  Write-Host "No files in this document library"\n}\n\nWrite-Host "Execution completed"\n```\n')))}m.isMDXComponent=!0}}]);