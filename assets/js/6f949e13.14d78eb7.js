"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48331],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>g});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),u=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return n?t.createElement(g,a(a({ref:r},l),{},{components:n})):t.createElement(g,a({ref:r},l))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[c]="string"==typeof e?e:o,a[1]=p;for(var u=2;u<s;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46575:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var t=n(87462),o=(n(67294),n(3905));const s={tags:["cleanup","groups","security","teams","users"]},a="Replace a user's membership in selected Microsoft 365 Groups or Teams",p={unversionedId:"sample-scripts/aad/replace-membership-of-selected-groups/index",id:"sample-scripts/aad/replace-membership-of-selected-groups/index",title:"Replace a user's membership in selected Microsoft 365 Groups or Teams",description:"Inspired by: Alan Eardley, Patrick Lamber",source:"@site/docs/sample-scripts/aad/replace-membership-of-selected-groups/index.md",sourceDirName:"sample-scripts/aad/replace-membership-of-selected-groups",slug:"/sample-scripts/aad/replace-membership-of-selected-groups/",permalink:"/sample-scripts/aad/replace-membership-of-selected-groups/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/aad/replace-membership-of-selected-groups/index.md",tags:[{label:"cleanup",permalink:"/tags/cleanup"},{label:"groups",permalink:"/tags/groups"},{label:"security",permalink:"/tags/security"},{label:"teams",permalink:"/tags/teams"},{label:"users",permalink:"/tags/users"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["cleanup","groups","security","teams","users"]},sidebar:"sampleScripts",previous:{title:"Bulk add/remove users to Microsoft Teams and Microsoft 365 Groups",permalink:"/sample-scripts/aad/manage-group-users/"},next:{title:"Replace an owner in a Microsoft 365 Group or Microsoft Team",permalink:"/sample-scripts/aad/replace-owner-with-a-different-one/"}},i={},u=[],l={toc:u};function c(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"replace-a-users-membership-in-selected-microsoft-365-groups-or-teams"},"Replace a user's membership in selected Microsoft 365 Groups or Teams"),(0,o.kt)("p",null,"Inspired by: ",(0,o.kt)("a",{parentName:"p",href:"https://blog.eardley.org.uk/2021/04/managing-teams-movers-and-leavers/"},"Alan Eardley"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.nubo.eu/Replace-Membership-In-A-Microsoft-Group-Or-Team/"},"Patrick Lamber")),(0,o.kt)("p",null,"This script can be used to replace the membership of a user for a selected list of Groups. It might be useful when a person changes role in an organization or is about to leave it."),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```powershell\n$fileInput = "<PUTYOURPATHHERE.csv>"\n$oldUser = "upnOfOldUser"\n$newUser = "upnOfNewUser"\n# Parameters end\n\n$m365Status = m365 status --output text\n\nif ($m365Status -eq "Logged Out") {\n  # Connection to Microsoft 365\n  m365 login\n}\n\n# configure the CLI to output JSON on each execution\nm365 cli config set --key output --value json\nm365 cli config set --key errorOutput --value stdout\nm365 cli config set --key showHelpOnFailure --value false\nm365 cli config set --key printErrorsAsPlainText --value false\n\nfunction Get-CLIValue {\n  [cmdletbinding()]\n  param(\n    [parameter(Mandatory = $true, ValueFromPipeline = $true)]\n    $input\n  )\n    $output = $input | ConvertFrom-Json\n    if ($output.error -ne $null) {\n      throw $output.error\n    }\n    return $output\n}\n\nfunction Replace-Membership {\n  [cmdletbinding()]\n  param(\n    [parameter(Mandatory = $true)]\n    $fileInput ,\n    [parameter(Mandatory = $true)]\n    $oldUser,\n    [parameter(Mandatory = $true)]\n    $newUser\n  )\n  $groupsToProcess = Import-Csv $fileInput \n  $groupsToProcess.id | ForEach-Object {\n    $groupId = $_\n    Write-Host "Processing Group ($groupId)" -ForegroundColor DarkGray -NoNewline\n\n    $group = $null\n    try {\n      $group = m365 aad o365group get --id $groupId | Get-CLIValue \n    }\n    catch {\n      Write-Host\n      Write-Host $_.Exception.Message -ForegroundColor Red\n      return\n    }\n    Write-Host " - $($group.displayName)" -ForegroundColor DarkGray\n\n    $isTeam = $group.resourceProvisioningOptions.Contains("Team");\n\n    $users = $null\n    $users = m365 aad o365group user list --groupId $groupId | Get-CLIValue\n    $users | Where-Object { $_.userPrincipalName -eq $oldUser } | ForEach-Object {\n      $user = $_\n      $isMember = $user.userType -eq "Member"\n      $isOwner = $user.userType -eq "Owner"\n\n      Write-Host "Found $oldUser with $($user.userType.tolower()) rights" -ForegroundColor Green\n\n      # owners must be explicitly added as members if it is a team\n      if ($isMember -or $isTeam) {\n        try {\n          Write-Host "Granting $newUser member rights"\n          m365 aad o365group user add --groupId $groupId --userName $newUser | Get-CLIValue\n        }\n        catch {\n          Write-Host $_.Exception.Message -ForegroundColor White\n        }\n      }\n\n      if ($isOwner) {\n        try {\n          Write-Host "Granting $newUser owner rights"\n          m365 aad o365group user add --groupId $groupId --userName $newUser --role Owner | Get-CLIValue\n        }\n        catch {\n          Write-Host $_.Exception.Message -ForegroundColor White\n        }\n      }\n\n      try {\n        Write-Host "Removing $oldUser..."\n        m365 aad o365group user remove --groupId $groupId --userName $oldUser --confirm $false | Get-CLIValue\n      }\n      catch {\n        Write-Host $_.Exception.Message -ForegroundColor Red\n        continue\n      }\n    }\n  }\n}\n\nReplace-Membership $fileInput $oldUser $newUser\n```\n')),(0,o.kt)("p",null,'=== "Input CSV File Format"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nid\n<groupId>\n<groupId>\n<groupId>\n```\n")))}c.isMDXComponent=!0}}]);