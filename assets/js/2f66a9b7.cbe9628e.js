"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29627],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>g});var r=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function a(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(s),d=n,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return s?r.createElement(g,i(i({ref:t},p),{},{components:s})):r.createElement(g,i({ref:t},p))}));function g(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=s.length,i=new Array(o);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:n,i[1]=a;for(var u=2;u<o;u++)i[u]=s[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,s)}d.displayName="MDXCreateElement"},16203:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=s(87462),n=(s(67294),s(3905));const o={tags:["guests","groups","reports","sites","users"]},i="List all external users in site groups across all site collections",a={unversionedId:"sample-scripts/spo/list-externalusers-in-sitegroups/index",id:"sample-scripts/spo/list-externalusers-in-sitegroups/index",title:"List all external users in site groups across all site collections",description:"Author: Martin Lingstuyl",source:"@site/docs/sample-scripts/spo/list-externalusers-in-sitegroups/index.md",sourceDirName:"sample-scripts/spo/list-externalusers-in-sitegroups",slug:"/sample-scripts/spo/list-externalusers-in-sitegroups/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-externalusers-in-sitegroups/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/list-externalusers-in-sitegroups/index.md",tags:[{label:"guests",permalink:"/cli-microsoft365-docusaurus/tags/guests"},{label:"groups",permalink:"/cli-microsoft365-docusaurus/tags/groups"},{label:"reports",permalink:"/cli-microsoft365-docusaurus/tags/reports"},{label:"sites",permalink:"/cli-microsoft365-docusaurus/tags/sites"},{label:"users",permalink:"/cli-microsoft365-docusaurus/tags/users"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["guests","groups","reports","sites","users"]},sidebar:"sampleScripts",previous:{title:"List Attachment Names From SharePoint Lists For A Site",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-attachment-names-from-spo-lists/"},next:{title:"List all failed site design for all sites",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-failed-sitedesigns/"}},l={},u=[],p={toc:u};function c(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"list-all-external-users-in-site-groups-across-all-site-collections"},"List all external users in site groups across all site collections"),(0,n.kt)("p",null,"Author: ",(0,n.kt)("a",{parentName:"p",href:"https://www.blimped.nl"},"Martin Lingstuyl")),(0,n.kt)("p",null,"This script shows how you can check if external users are added to site groups. It will show all external users across all site collections and the site groups they where added to."),(0,n.kt)("p",null,'=== "PowerShell"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```powershell\n$m365Status = m365 status --output text\n\nif ($m365Status -eq "Logged Out") {\n  m365 login\n}\n\nWrite-Host "Retrieving all sites and check external users..." -ForegroundColor Green\n\n$sites = m365 spo site list --type All | ConvertFrom-Json\n$siteCount = $sites.Count\n$siteCounter = 0\n$results = [System.Collections.ArrayList]::new()\n\n$spoAccessToken = m365 util accesstoken get --resource sharepoint --new | ConvertFrom-Json\n\nWrite-Host "Processing $siteCount sites..."\n\nforeach ($site in $sites) {\n  $siteCounter++  \n  Write-Host "$siteCounter/$siteCount - Get external users in site groups for $($site.Url)..." -ForegroundColor Green\n\n  $response = Invoke-WebRequest -Uri "$($site.Url)/_api/web/siteusers?`$filter=IsShareByEmailGuestUser eq true&`$expand=Groups&`$select=Title,LoginName,Email,Groups/LoginName" -Method Get -Headers @{ Authorization = "Bearer $spoAccessToken"; Accept = "application/json;odata=nometadata" }\n  $users = $response.Content | ConvertFrom-Json  \n\n  foreach($user in $users.value) {\n    foreach($group in $user.Groups) {\n      $obj = [PSCustomObject][ordered]@{\n          Title = $user.Title;\n          Email = $user.Email;\n          LoginName = $user.LoginName;\n          Group = $group.LoginName;\n      }\n      $results.Add($obj) | Out-Null\n    }\n  }\n}\n\nWrite-Host "Exporting list..." -ForegroundColor Green\n$results | Export-Csv -Path "./cli-external-users-in-sitegroups.csv" -NoTypeInformation\n```\n')))}c.isMDXComponent=!0}}]);