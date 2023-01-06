"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9442],{3905:(t,e,s)=>{s.d(e,{Zo:()=>p,kt:()=>d});var n=s(67294);function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){i(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function l(t,e){if(null==t)return{};var s,n,i=function(t,e){if(null==t)return{};var s,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)s=r[n],e.indexOf(s)>=0||(i[s]=t[s]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)s=r[n],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}var a=n.createContext({}),c=function(t){var e=n.useContext(a),s=e;return t&&(s="function"==typeof t?t(e):o(o({},e),t)),s},p=function(t){var e=c(t.components);return n.createElement(a.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var s=t.components,i=t.mdxType,r=t.originalType,a=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(s),f=i,d=u["".concat(a,".").concat(f)]||u[f]||m[f]||r;return s?n.createElement(d,o(o({ref:e},p),{},{components:s})):n.createElement(d,o({ref:e},p))}));function d(t,e){var s=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=s.length,o=new Array(r);o[0]=f;var l={};for(var a in e)hasOwnProperty.call(e,a)&&(l[a]=e[a]);l.originalType=t,l[u]="string"==typeof t?t:i,o[1]=l;for(var c=2;c<r;c++)o[c]=s[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}f.displayName="MDXCreateElement"},94794:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(87462),i=(s(67294),s(3905));const r={tags:["lists","reports","sites"]},o="List site collections and their lists",l={unversionedId:"sample-scripts/spo/list-site-collection-lists/index",id:"sample-scripts/spo/list-site-collection-lists/index",title:"List site collections and their lists",description:"Author: Albert-Jan Schot",source:"@site/docs/sample-scripts/spo/list-site-collection-lists/index.md",sourceDirName:"sample-scripts/spo/list-site-collection-lists",slug:"/sample-scripts/spo/list-site-collection-lists/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-site-collection-lists/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/list-site-collection-lists/index.md",tags:[{label:"lists",permalink:"/cli-microsoft365-docusaurus/tags/lists"},{label:"reports",permalink:"/cli-microsoft365-docusaurus/tags/reports"},{label:"sites",permalink:"/cli-microsoft365-docusaurus/tags/sites"}],version:"current",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["lists","reports","sites"]},sidebar:"sampleScripts",previous:{title:"Lists active SharePoint site collection application catalogs",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-site-app-catalogs/"},next:{title:"List site collection owners",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-site-collection-owners/"}},a={},c=[],p={toc:c};function u(t){let{components:e,...s}=t;return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"list-site-collections-and-their-lists"},"List site collections and their lists"),(0,i.kt)("p",null,"Author: ",(0,i.kt)("a",{parentName:"p",href:"https://www.cloudappie.nl/migration-report-climicrosoft365"},"Albert-Jan Schot")),(0,i.kt)("p",null,"This script helps you to list and export all site collection and their lists SharePoint Online sites, ideal for getting insights into the size of your environment."),(0,i.kt)("p",null,'=== "PowerShell"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```powershell\n$fileExportPath = "<PUTYOURPATHHERE.csv>"\n\n$m365Status = m365 status --output text\n\nif ($m365Status -eq "Logged Out") {\n  # Connection to Microsoft 365\n  m365 login\n}\n\n$results = @()\nWrite-host "Retrieving all sites..."\n$allSPOSites = m365 spo site list | ConvertFrom-Json\n$siteCount = $allSPOSites.Count\n\nWrite-Host "Processing $siteCount sites..."\n#Loop through each site\n$siteCounter = 0\n\nforeach ($site in $allSPOSites) {\n  $siteCounter++\n  Write-Host "Processing $($site.Url)... ($siteCounter/$siteCount)"\n\n  $results += [pscustomobject][ordered]@{\n    Type         = "site"\n    Title        = $site.Title\n    Url          = $site.Url\n    StorageUsage = $site.StorageUsage\n    Template     = $site.Template\n  }\n\n  Write-host "Retrieving all lists..."\n\n  $allLists = m365 spo list list -u $site.url -o json | ConvertFrom-Json\n  foreach ($list in $allLists) {\n\n    $results += [pscustomobject][ordered]@{\n      Type     = "list"\n      Title    = $list.Title\n      Url      = $list.Url\n      Template = $list.BaseTemplate\n    }\n  }\n}\n\nWrite-Host "Exporting file to $fileExportPath..."\n$results | Export-Csv -Path $fileExportPath -NoTypeInformation\nWrite-Host "Completed."\n```\n')))}u.isMDXComponent=!0}}]);