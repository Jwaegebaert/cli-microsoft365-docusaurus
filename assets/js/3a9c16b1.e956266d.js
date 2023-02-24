"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[9442],{3905:(t,e,s)=>{s.d(e,{Zo:()=>p,kt:()=>d});var i=s(67294);function r(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){r(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function l(t,e){if(null==t)return{};var s,i,r=function(t,e){if(null==t)return{};var s,i,r={},n=Object.keys(t);for(i=0;i<n.length;i++)s=n[i],e.indexOf(s)>=0||(r[s]=t[s]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)s=n[i],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(r[s]=t[s])}return r}var c=i.createContext({}),a=function(t){var e=i.useContext(c),s=e;return t&&(s="function"==typeof t?t(e):o(o({},e),t)),s},p=function(t){var e=a(t.components);return i.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(t,e){var s=t.components,r=t.mdxType,n=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=a(s),f=r,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||n;return s?i.createElement(d,o(o({ref:e},p),{},{components:s})):i.createElement(d,o({ref:e},p))}));function d(t,e){var s=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=s.length,o=new Array(n);o[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var a=2;a<n;a++)o[a]=s[a];return i.createElement.apply(null,o)}return i.createElement.apply(null,s)}f.displayName="MDXCreateElement"},94794:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var i=s(87462),r=(s(67294),s(3905));const n={tags:["lists","reports","sites"]},o="List site collections and their lists",l={unversionedId:"sample-scripts/spo/list-site-collection-lists/index",id:"sample-scripts/spo/list-site-collection-lists/index",title:"List site collections and their lists",description:"Author: Albert-Jan Schot",source:"@site/docs/sample-scripts/spo/list-site-collection-lists/index.md",sourceDirName:"sample-scripts/spo/list-site-collection-lists",slug:"/sample-scripts/spo/list-site-collection-lists/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-site-collection-lists/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/list-site-collection-lists/index.md",tags:[{label:"lists",permalink:"/cli-microsoft365-docusaurus/tags/lists"},{label:"reports",permalink:"/cli-microsoft365-docusaurus/tags/reports"},{label:"sites",permalink:"/cli-microsoft365-docusaurus/tags/sites"}],version:"current",lastUpdatedAt:1671570658,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{tags:["lists","reports","sites"]},sidebar:"sampleScripts",previous:{title:"Lists active SharePoint site collection application catalogs",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-site-app-catalogs/"},next:{title:"List site collection owners",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-site-collection-owners/"}},c={},a=[],p={toc:a},u="wrapper";function m(t){let{components:e,...s}=t;return(0,r.kt)(u,(0,i.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"list-site-collections-and-their-lists"},"List site collections and their lists"),(0,r.kt)("p",null,"Author: ",(0,r.kt)("a",{parentName:"p",href:"https://www.cloudappie.nl/migration-report-climicrosoft365"},"Albert-Jan Schot")),(0,r.kt)("p",null,"This script helps you to list and export all site collection and their lists SharePoint Online sites, ideal for getting insights into the size of your environment."),(0,r.kt)("p",null,'=== "PowerShell"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```powershell\n$fileExportPath = "<PUTYOURPATHHERE.csv>"\n\n$m365Status = m365 status --output text\n\nif ($m365Status -eq "Logged Out") {\n  # Connection to Microsoft 365\n  m365 login\n}\n\n$results = @()\nWrite-host "Retrieving all sites..."\n$allSPOSites = m365 spo site list | ConvertFrom-Json\n$siteCount = $allSPOSites.Count\n\nWrite-Host "Processing $siteCount sites..."\n#Loop through each site\n$siteCounter = 0\n\nforeach ($site in $allSPOSites) {\n  $siteCounter++\n  Write-Host "Processing $($site.Url)... ($siteCounter/$siteCount)"\n\n  $results += [pscustomobject][ordered]@{\n    Type         = "site"\n    Title        = $site.Title\n    Url          = $site.Url\n    StorageUsage = $site.StorageUsage\n    Template     = $site.Template\n  }\n\n  Write-host "Retrieving all lists..."\n\n  $allLists = m365 spo list list -u $site.url -o json | ConvertFrom-Json\n  foreach ($list in $allLists) {\n\n    $results += [pscustomobject][ordered]@{\n      Type     = "list"\n      Title    = $list.Title\n      Url      = $list.Url\n      Template = $list.BaseTemplate\n    }\n  }\n}\n\nWrite-Host "Exporting file to $fileExportPath..."\n$results | Export-Csv -Path $fileExportPath -NoTypeInformation\nWrite-Host "Completed."\n```\n')))}m.isMDXComponent=!0}}]);