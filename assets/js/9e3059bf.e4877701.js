"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79286],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=s,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:s,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const a={tags:["apps","cleanup"]},o="Removes Microsoft Teams personal app from users and Microsoft Teams app catalog",p={unversionedId:"sample-scripts/teams/remove-personal-app/index",id:"sample-scripts/teams/remove-personal-app/index",title:"Removes Microsoft Teams personal app from users and Microsoft Teams app catalog",description:"Author: S\xe9bastien Levert",source:"@site/docs/sample-scripts/teams/remove-personal-app/index.md",sourceDirName:"sample-scripts/teams/remove-personal-app",slug:"/sample-scripts/teams/remove-personal-app/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/remove-personal-app/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/teams/remove-personal-app/index.md",tags:[{label:"apps",permalink:"/cli-microsoft365-docusaurus/tags/apps"},{label:"cleanup",permalink:"/cli-microsoft365-docusaurus/tags/cleanup"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["apps","cleanup"]},sidebar:"sampleScripts",previous:{title:"Recognize most active users for a specific Team",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/recognize-most-active-users-specific-team/"},next:{title:"Remove Wiki tab in a Microsoft Teams channel",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/remove-wikitab-teams/"}},i={},c=[],l={toc:c};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"removes-microsoft-teams-personal-app-from-users-and-microsoft-teams-app-catalog"},"Removes Microsoft Teams personal app from users and Microsoft Teams app catalog"),(0,s.kt)("p",null,"Author: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/sebastienlevert"},"S\xe9bastien Levert")),(0,s.kt)("p",null,"Uninstalls an app from the specified users and / or unpublish it from the Microsoft Teams app catalog based on the App Id available in the ",(0,s.kt)("inlineCode",{parentName:"p"},"manifest.json")," of the Teams app."),(0,s.kt)("p",null,'=== "PowerShell"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```powershell\n<#\n  .SYNOPSIS\n    Removes an app from the personal scope of a set of users\n  .EXAMPLE\n    .\\Remove-PersonalApp.ps1 -AppId "2dbace6f-3f3b-4779-9e3f-bb4d27c403fe" -Unpublish -Uninstall -CurrentUser\n  .EXAMPLE\n    .\\Remove-PersonalApp.ps1 -AppId "2dbace6f-3f3b-4779-9e3f-bb4d27c403fe" -Unpublish -Uninstall -CurrentUser -Users @("user1@contoso.com", "user2@contoso.com")\n  .EXAMPLE\n    .\\Remove-PersonalApp.ps1 -AppId "2dbace6f-3f3b-4779-9e3f-bb4d27c403fe" -Unpublish\n  .PARAMETER AppId\n    GUID of the Microsoft Teams app. Is the same "id" you can find in the manifest.json from your Microsoft Teams app.\n  .PARAMETER Users\n    Array of string representing the usernames of the users to deploy the Microsoft Teams app to.\n  .PARAMETER CurrentUser\n    Switch allowing to Install the app for the current user\n#>\nParam(\n  [string]$AppId,\n  [string[]]$Users,\n  [switch]$Uninstall,\n  [switch]$Unpublish,\n  [switch]$CurrentUser\n)\n\n$m365Status = m365 status --output text\n\nif ($m365Status -eq "Logged Out") {\n  # Connection to Microsoft 365\n  m365 login\n}\n\n# Validating that the app is not already in the store\n$app = m365 teams app list --query "[?externalId == \'$AppId\']" -o json | ConvertFrom-Json\n\nif ($app.Length -gt 0) {\n  if ($Uninstall) {\n    if ($CurrentUser) {\n      # Getting the reference of the currently connected user\n      $connectedAs = m365 status -o json | ConvertFrom-Json\n      $user = m365 aad user get --userName $connectedAs.connectedAs -o json | ConvertFrom-Json\n\n      if ($user) {\n        $Users += $user.userPrincipalName\n      }\n    }\n\n    if ($Users.Length -gt 0) {\n      $Users | ForEach-Object {\n        $user = m365 aad user get --userName $_ -o json | ConvertFrom-Json\n        $userApp = m365 teams user app list --userId $user.id --query "[?appId == \'$($app.id)\']" -o json | ConvertFrom-Json\n\n        if ($userApp) {\n          # Removing the app from the personal apps of the specified user\n          m365 teams user app remove --appId $userApp.id --userId $user.id --confirm\n          Write-Host "The App \'$($app.displayName)\' with ID \'$($app.id)\' was removed for user \'$($user.userPrincipalName)\'."\n        }\n        else {\n          Write-Warning "The App \'$($app.displayName)\' with ID \'$($app.id)\' is not installed for user \'$($user.userPrincipalName)\'."\n        }\n      }\n    }\n  }  \n\n  if ($Unpublish) {\n    # Removing the app from the app catalog\n    m365 teams app remove --id $app.id --confirm\n    Write-Host "The App \'$($app.displayName)\' with ID \'$($app.id)\' was removed from the app catalog."\n  }\n}\nelse {\n  Write-Warning "The App with ID \'$AppId\' does not exist."\n}\n```\n')))}m.isMDXComponent=!0}}]);