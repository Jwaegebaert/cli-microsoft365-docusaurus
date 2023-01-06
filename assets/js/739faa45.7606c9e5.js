"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29991],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=s.createContext({}),c=function(e){var t=s.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return s.createElement(a.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,f=p["".concat(a,".").concat(d)]||p[d]||m[d]||i;return r?s.createElement(f,o(o({ref:t},u),{},{components:r})):s.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4021:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=r(87462),n=(r(67294),r(3905));const i={tags:["guests","security","users"]},o="List all external users in all site collections",l={unversionedId:"sample-scripts/spo/list-site-externalusers/index",id:"sample-scripts/spo/list-site-externalusers/index",title:"List all external users in all site collections",description:"Author: Albert-Jan Schot",source:"@site/docs/sample-scripts/spo/list-site-externalusers/index.md",sourceDirName:"sample-scripts/spo/list-site-externalusers",slug:"/sample-scripts/spo/list-site-externalusers/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-site-externalusers/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/list-site-externalusers/index.md",tags:[{label:"guests",permalink:"/cli-microsoft365-docusaurus/tags/guests"},{label:"security",permalink:"/cli-microsoft365-docusaurus/tags/security"},{label:"users",permalink:"/cli-microsoft365-docusaurus/tags/users"}],version:"current",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["guests","security","users"]},sidebar:"sampleScripts",previous:{title:"List site collection owners",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-site-collection-owners/"},next:{title:"List all tenant-wide extensions",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-tenant-wide-extensions/"}},a={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"list-all-external-users-in-all-site-collections"},"List all external users in all site collections"),(0,n.kt)("p",null,"Author: ",(0,n.kt)("a",{parentName:"p",href:"https://www.cloudappie.nl/migration-report-external-users/"},"Albert-Jan Schot")),(0,n.kt)("p",null,"This script helps you to list all external users in all SharePoint Online sites. It provides insights in who the users are, and if available who they where invited by."),(0,n.kt)("p",null,'=== "PowerShell"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```powershell\n$fileExportPath = "<PUTYOURPATHHERE.csv>"\n\n$m365Status = m365 status --output text\n\nif ($m365Status -eq "Logged Out") {\n  # Connection to Microsoft 365\n  m365 login\n}\n\n$results = @()\nWrite-host "Retrieving all sites and check external users..."\n$allSPOSites = m365 spo site list | ConvertFrom-Json\n$siteCount = $allSPOSites.Count\n\nWrite-Host "Processing $siteCount sites..."\n#Loop through each site\n$siteCounter = 0\n\nforeach ($site in $allSPOSites) {\n  $siteCounter++\n  Write-Host "Processing $($site.Url)... ($siteCounter/$siteCount)"\n\n  Write-host "Retrieving all external users ..."\n\n  $users = m365 spo user list --webUrl $site.Url --output json --query "[?contains(LoginName,\'#ext#\')]" | ConvertFrom-Json\n\n  foreach ($user in $users) {\n    $externalUserObject = m365 spo externaluser list --siteUrl $site.url -o json --query "[?AcceptedAs == \'$($user.Email)\']" | ConvertFrom-Json\n\n    $results += [pscustomobject][ordered]@{\n      UserPrincipalName = $user.UserPrincipalName\n      Email             = $user.Email\n      InvitedAs         = $externalUserObject.InvitedAs\n      WhenCreated       = $externalUserObject.WhenCreated\n      InvitedBy         = $externalUserObject.InvitedBy\n      Url               = $site.Url\n    }\n  }\n}\n\nWrite-Host "Exporting file to $fileExportPath..."\n$results | Export-Csv -Path $fileExportPath -NoTypeInformation\nWrite-Host "Completed."\n```\n')))}p.isMDXComponent=!0}}]);