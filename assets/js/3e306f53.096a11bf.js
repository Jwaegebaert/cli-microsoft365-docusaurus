"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>$});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=i.createContext({}),p=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(a.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,a=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=p(n),u=s,$=c["".concat(a,".").concat(u)]||c[u]||d[u]||l;return n?i.createElement($,o(o({ref:t},m),{},{components:n})):i.createElement($,o({ref:t},m))}));function $(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var a in t)hasOwnProperty.call(t,a)&&(r[a]=t[a]);r.originalType=e,r[c]="string"==typeof e?e:s,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var i=n(87462),s=(n(67294),n(3905));const l={tags:["libraries","lists","provisioning","sites"]},o="Setup example site",r={unversionedId:"sample-scripts/spo/setup-example-site/index",id:"sample-scripts/spo/setup-example-site/index",title:"Setup example site",description:"Author: Adam",source:"@site/docs/sample-scripts/spo/setup-example-site/index.md",sourceDirName:"sample-scripts/spo/setup-example-site",slug:"/sample-scripts/spo/setup-example-site/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/setup-example-site/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/setup-example-site/index.md",tags:[{label:"libraries",permalink:"/cli-microsoft365-docusaurus/tags/libraries"},{label:"lists",permalink:"/cli-microsoft365-docusaurus/tags/lists"},{label:"provisioning",permalink:"/cli-microsoft365-docusaurus/tags/provisioning"},{label:"sites",permalink:"/cli-microsoft365-docusaurus/tags/sites"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["libraries","lists","provisioning","sites"]},sidebar:"sampleScripts",previous:{title:"Replace site collection admin with another user",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/replace-site-collection-admin/"},next:{title:"Sync SharePoint Document Library Documents with Azure Storage Container",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/sync-splib-into-az-storage-container/"}},a={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"setup-example-site"},"Setup example site"),(0,s.kt)("p",null,"Author: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Adam-it"},"Adam")),(0,s.kt)("p",null,"This script is a good starting point for a setup script to create site with some assets like columns, content types, lists, navigation etc. The given example:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"creates a site,"),(0,s.kt)("li",{parentName:"ul"},"adds a site column and a content type,"),(0,s.kt)("li",{parentName:"ul"},"adds list and modifies it's settings (add a content type to it and makes it hidden),"),(0,s.kt)("li",{parentName:"ul"},"adds a document library with a custom column and some folder,"),(0,s.kt)("li",{parentName:"ul"},"modifies the all items view of the document library,"),(0,s.kt)("li",{parentName:"ul"},"modifies the site navigation links")),(0,s.kt)("p",null,'=== "PowerShell"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```powershell\nWrite-host 'setup script example'\n\nWrite-host 'ensure logged in'\n$m365Status = m365 status --output text\nif ($m365Status -eq \"Logged Out\") {\n  m365 login\n}\n\nWrite-host 'create setup site'\n$siteRelativeUrl = 'sites/setupTestSite'\n$tenantUrl = 'https://contoso.sharepoint.com'\n$siteUrl = \"$tenantUrl/$siteRelativeUrl\"\n$siteTitle = 'setup test site'\n$siteType = 'CommunicationSite'\n$site = m365 spo site get --url $siteUrl --output 'json'\n$site = $site | ConvertFrom-Json\nif ($null -eq $site) {\n  Write-host 'setup site does not exist, I will create it'\n  m365 spo site add --url $siteUrl --type $siteType --title $siteTitle\n}\nelse {\n  Write-host 'setup site already exists'\n}\n\nWrite-host 'add site column'\n$fieldName = 'Sample Text Column'\n$field = m365 spo field get --webUrl $siteUrl --fieldTitle $fieldName --output 'json'\nif ($null -eq $field) {\n  Write-host 'sample site column does not exist, I will create it'\n  $fieldXml = \"<Field ID='{13AFECC0-2454-41F3-85E6-E194458C861C}' Type='Text' Name='SampleTextColumn' DisplayName='Sample Text Column' Indexed='FALSE' Group='Sample Columns' Required='FALSE' SourceID='{4f118c69-66e0-497c-96ff-d7855ce0713d}' StaticName='SampleTextColumn' FromBaseType='TRUE' ></Field>\"\n  $field = m365 spo field add --webUrl $siteUrl --xml $fieldXml --output 'json'\n}\nelse {\n  Write-host 'sample site column already exists'\n}\n$field = $field | ConvertFrom-Json\n\nWrite-host 'add site content type'\n$contentTypeName = 'sample content type'\n$contentTypeGroup = 'sample content type group'\n$parentId = '0x01007926A45D687BA842B947286090B8F67D' # list item content type\n$contentType = m365 spo contenttype get --webUrl $siteUrl --id $parentId --output 'json'\nif ($null -eq $contentType) {\n  Write-host 'sample site content type does not exist, I will create it'\n  $contentType = m365 spo contenttype add --webUrl $siteUrl --name $contentTypeName --id $parentId --group $contentTypeGroup --output 'json'\n  $contentType = m365 spo contenttype get --webUrl $siteUrl --id $parentId --output 'json'\n}\nelse {\n  Write-host 'sample site content type already exists'\n}\n$contentType = $contentType | ConvertFrom-Json\n\nWrite-host 'add field to content type'\n$fieldId = $field.Id\n$contentTypeId = $contentType.StringId\nm365 spo contenttype field set --webUrl $siteUrl --contentTypeId $contentTypeId --fieldId $fieldId --required false\n\nWrite-host 'create generic list'\n$listName = 'setup test list'\n$list = m365 spo list get --title $listName --webUrl $siteUrl --output 'json'\nif ($null -eq $list) {\n  Write-host 'sample generic list does not exist, I will create it'\n  $list = m365 spo list add --title $listName --baseTemplate 'GenericList' --webUrl $siteUrl --output 'json'\n}\nelse {\n  Write-host 'sample generic list already exists'\n}\n$list = $list | ConvertFrom-Json\n\nWrite-host 'modify list settings to allow content types'\nm365 spo list set --webUrl $siteUrl --id $list.Id --contentTypesEnabled true\n\nWrite-host 'add content type to list'\n$contentTypeAddedToList = m365 spo list contenttype add --webUrl $siteUrl --listId $list.Id --contentTypeId $contentTypeId\n\nWrite-host 'make list hidden'\nm365 spo list set --webUrl $siteUrl --id $list.Id --hidden true\n\nWrite-host 'create document lib'\n$libName = 'setup test lib'\n$lib = m365 spo list get --title $libName --webUrl $siteUrl --output 'json'\nif ($null -eq $lib) {\n  Write-host 'sample document lib does not exist, I will create it'\n  $lib = m365 spo list add --title $libName --baseTemplate 'DocumentLibrary' --webUrl $siteUrl --output 'json'\n}\nelse {\n  Write-host 'sample document lib already exists'\n}\n$lib = $lib | ConvertFrom-Json\n\nWrite-host 'add sample column'\n$columnName = 'Sample Text Column'\n$column = m365 spo field get --webUrl $siteUrl --listUrl \"Lists/$libName\" --fieldTitle $columnName --output 'json'\nif ($null -eq $column) {\n  Write-host 'sample column in lib does not exist, I will create it'\n  $columnXml = \"<Field ID='{AC827B0C-8B45-4B4F-927B-CDDC4FEEE79E}' Type='Text' Name='SampleTextColumn' DisplayName='Sample Text Column' Required='FALSE' SourceID='http://schemas.microsoft.com/sharepoint/v3' StaticName='SampleTextColumn' FromBaseType='TRUE' />\"\n  $column = m365 spo field add --webUrl $siteUrl --listTitle $libName --xml $columnXml --output 'json'\n}\nelse {\n  Write-host 'sample column in lib already exists'\n}\n$column = $column | ConvertFrom-Json\n\nWrite-host 'add sample folder'\n$folderName = 'sample Folder'\n$folder = m365 spo folder get --webUrl $siteUrl --folderUrl \"/$libName/$folderName\" --output 'json'\nif ($null -eq $folder) {\n  Write-host 'sample folder in lib does not exist, I will create it'\n  $folder = m365 spo folder add --webUrl $siteUrl --parentFolderUrl \"/$libName\" --name $folderName --output 'json'\n}\nelse {\n  Write-host 'sample folder in lib already exists'\n}\n\nWrite-host 'modify list view'\n$views = m365 spo list view list --webUrl $siteUrl --listTitle $libName --output 'json'\n$views = $views | ConvertFrom-Json\n$viewName = $views[0].Title # all items view\nm365 spo list view field add --webUrl $siteUrl --listTitle $libName --viewTitle $viewName --fieldTitle $columnName\n\nWrite-host 'modify site navigation'\n$currentNavigation = m365 spo navigation node list --webUrl $siteUrl --location QuickLaunch --output 'json'\n$currentNavigation = $currentNavigation | ConvertFrom-Json\nWrite-host 'clearing old navigation links'\nforeach ($navigationItem in $currentNavigation) {\n  m365 spo navigation node remove --webUrl $siteUrl --location QuickLaunch --id $navigationItem.Id --confirm\n}\nWrite-host 'adding new navigation'\n$nodeAddedResponse = m365 spo navigation node add --webUrl $siteUrl --location QuickLaunch --title 'Sample Document Library' --url \"/$siteRelativeUrl/$libName/Forms/AllItems.aspx\"\n$nodeAddedResponse = m365 spo navigation node add --webUrl $siteUrl --location QuickLaunch --title 'Hidden Sample List' --url \"/$siteRelativeUrl/Lists/$listName/AllItems.aspx\"\n```\n")))}c.isMDXComponent=!0}}]);