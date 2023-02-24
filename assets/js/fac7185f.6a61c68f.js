"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[24637],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=a(r),f=s,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:s,i[1]=l;for(var a=2;a<o;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},97035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=r(87462),s=(r(67294),r(3905));const o={tags:["reports","security","users"]},i="List site collection owners",l={unversionedId:"sample-scripts/spo/list-site-collection-owners/index",id:"sample-scripts/spo/list-site-collection-owners/index",title:"List site collection owners",description:"Author: Patrick Lamber",source:"@site/docs/sample-scripts/spo/list-site-collection-owners/index.md",sourceDirName:"sample-scripts/spo/list-site-collection-owners",slug:"/sample-scripts/spo/list-site-collection-owners/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-site-collection-owners/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/list-site-collection-owners/index.md",tags:[{label:"reports",permalink:"/cli-microsoft365-docusaurus/tags/reports"},{label:"security",permalink:"/cli-microsoft365-docusaurus/tags/security"},{label:"users",permalink:"/cli-microsoft365-docusaurus/tags/users"}],version:"current",lastUpdatedAt:1671570658,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{tags:["reports","security","users"]},sidebar:"sampleScripts",previous:{title:"List site collections and their lists",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-site-collection-lists/"},next:{title:"List all external users in all site collections",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-site-externalusers/"}},c={},a=[],p={toc:a},u="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"list-site-collection-owners"},"List site collection owners"),(0,s.kt)("p",null,"Author: ",(0,s.kt)("a",{parentName:"p",href:"https://www.nubo.eu/Retrieve-All-Site-Collection-Owners-Using-The-CLI-For-Microsoft-365/"},"Patrick Lamber")),(0,s.kt)("p",null,"This script helps you to list and export all site collection owners in your SharePoint Online sites."),(0,s.kt)("p",null,'=== "PowerShell"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```powershell\n$fileExportPath = "<PUTYOURPATHHERE.csv>"\n\n$m365Status = m365 status --output text\n\nif ($m365Status -eq "Logged Out") {\n  # Connection to Microsoft 365\n  m365 login\n}\n\n$results = @()\nWrite-host "Retrieving all sites..."\n$allSPOSites = m365 spo site list | ConvertFrom-Json\n$siteCount = $allSPOSites.Count\n\nWrite-Host "Processing $siteCount sites..."\n#Loop through each site\n$counter = 0\nforeach($site in $allSPOSites){\n    $counter++\n    Write-Host "Processing $($site.Url)... ($counter/$siteCount)"\n    $users = m365 spo user list --webUrl $site.Url -o json | ConvertFrom-Json\n    $owners = $users.value | where { $_.IsSiteAdmin -eq $true } \n    \n    foreach($owner in $owners){\n        $results += [pscustomobject][ordered]@{\n            SiteUrl = $site.Url\n            LoginName = $owner.LoginName\n            Title = $owner.Title\n            Email = $owner.Email\n        }\n    }\n}\nWrite-Host "Exporting file to $fileExportPath..."\n$results | Export-Csv -Path $fileExportPath -NoTypeInformation\nWrite-Host "Completed."\n```\n')))}m.isMDXComponent=!0}}]);