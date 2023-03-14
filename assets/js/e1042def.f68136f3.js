"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[48250],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=n.createContext({}),c=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(m.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(m,".").concat(d)]||p[d]||u[d]||a;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var m in r)hasOwnProperty.call(r,m)&&(i[m]=r[m]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61672:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={tags:["provisioning","teams","users"]},s="Create a Microsoft Teams team and bulk add members from CSV file",i={unversionedId:"sample-scripts/teams/create-team-and-add-members-and-owners/index",id:"sample-scripts/teams/create-team-and-add-members-and-owners/index",title:"Create a Microsoft Teams team and bulk add members from CSV file",description:"Inspired by: Rakesh Pandey, Patrick Lamber",source:"@site/docs/sample-scripts/teams/create-team-and-add-members-and-owners/index.md",sourceDirName:"sample-scripts/teams/create-team-and-add-members-and-owners",slug:"/sample-scripts/teams/create-team-and-add-members-and-owners/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/create-team-and-add-members-and-owners/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/teams/create-team-and-add-members-and-owners/index.md",tags:[{label:"provisioning",permalink:"/cli-microsoft365-docusaurus/tags/provisioning"},{label:"teams",permalink:"/cli-microsoft365-docusaurus/tags/teams"},{label:"users",permalink:"/cli-microsoft365-docusaurus/tags/users"}],version:"current",lastUpdatedAt:1677877396,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{tags:["provisioning","teams","users"]},sidebar:"sampleScripts",previous:{title:"Bulk add members to Microsoft Teams team from CSV file",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/add-bulk-users-teams/"},next:{title:"Create a Microsoft Team with channels from a Microsoft 365 Group",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/create-team-from-group/"}},m={},c=[],l={toc:c},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-microsoft-teams-team-and-bulk-add-members-from-csv-file"},"Create a Microsoft Teams team and bulk add members from CSV file"),(0,o.kt)("p",null,"Inspired by: ",(0,o.kt)("a",{parentName:"p",href:"https://www.flexmind.co/blog/how-to-add-bulk-users-from-csv-file-to-ms-teams-using-powershell/"},"Rakesh Pandey"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.nubo.eu/Create-A-New-Microsoft-Team-And-Bulk-Add-Members-From-CSV-File/"},"Patrick Lamber")),(0,o.kt)("p",null,"This sample script shows you how to create a Team and add members and owners using a CSV."),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```powershell\n# This script provisions a Group with owners and members and Teamifies it\n# The owners and members can be specified using a CSV file following this format\n## upn,type\n## pla@expertsinside.com,owner\n## eba@expertsinside.com,member\n## szu@expertsinside.com,member\n# The CLI will provision the Group adding the current user as owner. You can remove this user from the owners list by using the $removeYourSelfFromOwners parameter\n\n$importFile = "<putyourcsvhere.csv>"\n\n## parameters for the Group\n$teamDisplayName = "Cool team"\n$teamDescription = "."\n$mailNickname = "uniqueNickname18"\n$isPrivate = $true  \n$removeYourSelfFromOwners = $false\n## parameters for the Group end\n\n## Script starts here\n\n# process teams that you have joined only\n$membersList = Import-Csv $importFile -Delimiter ","\n\n$m365Status = m365 status --output text\n\nif ($m365Status -eq "Logged Out") {\n  # Connection to Microsoft 365\n  m365 login\n}\n\n$Error.Clear()\n\n# configure the CLI to output JSON on each execution\nm365 cli config set --key output --value json\n\n$members = ($membersList | where { $_.type -eq "member" } | Select-Object upn).upn -join ","\n$owners = ($membersList | where { $_.type -eq "owner" } | Select-Object upn).upn -join ","\n\n$privateString = $(If ($isPrivate) {"true"} Else {"false"})\nWrite-Host "Provisioning Group..."\n$group = m365 aad o365group add --displayName $teamDisplayName --description $teamDescription --mailNickname $mailNickname --isPrivate $privateString --members $members --owners $owners | ConvertFrom-Json\n\nif ($Error.Count -gt 0) {\n    Write-Host "Aborting operation..."\n    return\n}\n\n$trial = 0\n$maxRetry = 3\n$waitingTime = 20\ndo {\n    $Error.Clear()\n    $trial++\n    Write-Host "Waiting $waitingTime seconds before teamifying the group (trial $trial/$maxRetry)..."\n    Start-Sleep -Seconds $waitingTime\n    m365 aad o365group teamify --id $($group.id) 2>$null\n} while ($Error.Count -gt 0 -and $trial -lt $maxRetry)\n\n# if it still failed, output the error and stop\nif ($Error.Count -gt 0) {\n  $Error\n  return\n}\n$Error.Clear()\n\n$whoAmI = m365 status | ConvertFrom-Json\n# remove yourself from the owners group\nif ($removeYourSelfFromOwners -and $owners.IndexOf($whoAmI.connectedAs) -eq -1) {\n    Write-Host "Removing $($whoAmI.connectedAs) from the owners list"\n    m365 aad o365group user remove --groupId $group.id --userName $whoAmI.connectedAs --confirm\n}\n\nWrite-Host "Completed."\n```\n')))}u.isMDXComponent=!0}}]);