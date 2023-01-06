"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={tags:["customizations","reports"]},s="Export Configurations of Tenant Wide Extensions",a={unversionedId:"sample-scripts/spo/export-configs-tenant-wide-extensions/index",id:"sample-scripts/spo/export-configs-tenant-wide-extensions/index",title:"Export Configurations of Tenant Wide Extensions",description:"Author: Joseph Velliah",source:"@site/docs/sample-scripts/spo/export-configs-tenant-wide-extensions/index.md",sourceDirName:"sample-scripts/spo/export-configs-tenant-wide-extensions",slug:"/sample-scripts/spo/export-configs-tenant-wide-extensions/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/export-configs-tenant-wide-extensions/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/export-configs-tenant-wide-extensions/index.md",tags:[{label:"customizations",permalink:"/cli-microsoft365-docusaurus/tags/customizations"},{label:"reports",permalink:"/cli-microsoft365-docusaurus/tags/reports"}],version:"current",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["customizations","reports"]},sidebar:"sampleScripts",previous:{title:"Ensure the Site Assets Library is created",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/ensure-siteassets-library/"},next:{title:"Grant API permissions to SharePoint Azure AD Application",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/grant-api-permissions-aad/"}},p={},l=[],c={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"export-configurations-of-tenant-wide-extensions"},"Export Configurations of Tenant Wide Extensions"),(0,r.kt)("p",null,"Author: ",(0,r.kt)("a",{parentName:"p",href:"https://sprider.blog/export-configs-tenant-wide-extensions"},"Joseph Velliah")),(0,r.kt)("p",null,"The SharePoint Admin Center provides various governance features, but there is no way to easily export Configurations of Tenant Wide Extensions from the SharePoint admin center for governance activities. This script retrieves Tenant Wide Extension configurations from the App Catalog and exports the same in a comma-separated values (CSV) file."),(0,r.kt)("p",null,'=== "PowerShell"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```powershell\n$resultDir = "Output"\n$listName = "Tenant Wide Extensions"\n$fields = $fields = "Title, Modified, Created, AuthorId, EditorId, TenantWideExtensionComponentId, TenantWideExtensionComponentProperties, TenantWideExtensionListTemplate, TenantWideExtensionWebTemplate, TenantWideExtensionSequence, TenantWideExtensionHostProperties, TenantWideExtensionLocation, TenantWideExtensionDisabled"\n\n$executionDir = $PSScriptRoot\n$outputDir = "$executionDir/$resultDir"\n$outputFilePath = "$outputDir/$(get-date -f yyyyMMdd-HHmmss)-tenantwideextensions.csv"\n\nif (-not (Test-Path -Path "$outputDir" -PathType Container)) {\n    Write-Host "Creating $outputDir folder..."\n    New-Item -ItemType Directory -Path "$outputDir"\n}\n\n$appCatalogUrl = m365 spo tenant appcatalogurl get\n\nif ($appCatalogUrl) {\n    $spolItems = m365 spo listitem list --title $listName --webUrl $appCatalogUrl --fields $fields  -o json | ConvertFrom-Json\n\n    if ($spolItems.Count -gt 0) {\n        $configurations = @()\n\n        foreach ($spolItem in $spolItems) {\n            $author = m365 spo user get --webUrl $appCatalogUrl --id $spolItem.AuthorId -o json | ConvertFrom-Json\n            $editor = m365 spo user get --webUrl $appCatalogUrl --id $spolItem.EditorId -o json | ConvertFrom-Json\n\n            $configurationObject = New-Object -TypeName PSObject\n\n            $configurationObject | Add-Member -MemberType NoteProperty -Name "Title" -Value $spolItem.Title\n            $configurationObject | Add-Member -MemberType NoteProperty -Name "Modified" -Value $spolItem.Modified\n            $configurationObject | Add-Member -MemberType NoteProperty -Name "Created" -Value $spolItem.Created\n            $configurationObject | Add-Member -MemberType NoteProperty -Name "Author" -Value $author.Title\n            $configurationObject | Add-Member -MemberType NoteProperty -Name "Editor" -Value $editor.Title\n            $configurationObject | Add-Member -MemberType NoteProperty -Name "TenantWideExtensionComponentId" -Value $spolItem.TenantWideExtensionComponentId\n            $configurationObject | Add-Member -MemberType NoteProperty -Name "TenantWideExtensionComponentProperties" -Value $spolItem.TenantWideExtensionComponentProperties\n            $configurationObject | Add-Member -MemberType NoteProperty -Name "TenantWideExtensionListTemplate" -Value $spolItem.TenantWideExtensionListTemplate\n            $configurationObject | Add-Member -MemberType NoteProperty -Name "TenantWideExtensionWebTemplate" -Value $spolItem.TenantWideExtensionWebTemplate\n            $configurationObject | Add-Member -MemberType NoteProperty -Name "TenantWideExtensionSequence" -Value $spolItem.TenantWideExtensionSequence\n            $configurationObject | Add-Member -MemberType NoteProperty -Name "TenantWideExtensionHostProperties" -Value $spolItem.TenantWideExtensionHostProperties\n            $configurationObject | Add-Member -MemberType NoteProperty -Name "TenantWideExtensionLocation" -Value $spolItem.TenantWideExtensionLocation\n            $configurationObject | Add-Member -MemberType NoteProperty -Name "TenantWideExtensionDisabled" -Value $spolItem.TenantWideExtensionDisabled\n\n            $configurations += $configurationObject\n        }\n\n        $configurations | Export-Csv -Path "$outputFilePath" -NoTypeInformation\n        Write-Host "Open $outputFilePath to review Tenant Wide Extensions configurations report."\n    }\n    else {\n        Write-Host "Tenant Wide Extensions list is empty."\n    }\n}\nelse {\n    Write-Host "Unable to get App Catalog Url."\n}\n```\n')))}d.isMDXComponent=!0}}]);