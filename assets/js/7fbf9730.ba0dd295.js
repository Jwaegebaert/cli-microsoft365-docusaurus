"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5654],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=i(r),d=a,b=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[p]="string"==typeof e?e:a,s[1]=m;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={tags:["reports","security","teams","users"]},s="Govern orphaned Microsoft Teams",m={unversionedId:"sample-scripts/teams/govern-orphan-teams/index",id:"sample-scripts/teams/govern-orphan-teams/index",title:"Govern orphaned Microsoft Teams",description:"Author: Matti Paukkonen",source:"@site/docs/sample-scripts/teams/govern-orphan-teams/index.md",sourceDirName:"sample-scripts/teams/govern-orphan-teams",slug:"/sample-scripts/teams/govern-orphan-teams/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/govern-orphan-teams/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/teams/govern-orphan-teams/index.md",tags:[{label:"reports",permalink:"/cli-microsoft365-docusaurus/tags/reports"},{label:"security",permalink:"/cli-microsoft365-docusaurus/tags/security"},{label:"teams",permalink:"/cli-microsoft365-docusaurus/tags/teams"},{label:"users",permalink:"/cli-microsoft365-docusaurus/tags/users"}],version:"current",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["reports","security","teams","users"]},sidebar:"sampleScripts",previous:{title:"Get all the Teams a specific user is part of",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/get-all-teams-specific-user-is-part-of/"},next:{title:"Deploy Microsoft Teams personal app and add it to users",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/install-personal-app/"}},l={},i=[],c={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"govern-orphaned-microsoft-teams"},"Govern orphaned Microsoft Teams"),(0,a.kt)("p",null,"Author: ",(0,a.kt)("a",{parentName:"p",href:"https://mattipaukkonen.com/2019/10/09/govern-orphaned-teams-with-powershell/"},"Matti Paukkonen")),(0,a.kt)("p",null,"Every team needs an owner, at least one. Common best practice is that you should have at least two users in owner role. Teams is not allowing the last owner to leave the team, but there might occasions when last owner is removed, example when people are leaving the organization and account gets deleted. This script finds those teams that no longer have an owner."),(0,a.kt)("p",null,'=== "PowerShell"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```powershell\n$availableTeams = m365 teams team list -o json | ConvertFrom-Json\n$teams = @()\nforeach ($team in $availableTeams) {\n\n    Write-host "Handling team: " -NoNewline -ForegroundColor Yellow\n    Write-host $team.DisplayName -ForegroundColor Yellow\n    $group = m365 aad o365group get --id $team.id -o json | ConvertFrom-Json\n    $users = m365 teams user list --teamId $team.id -o json | ConvertFrom-Json\n    $owners = @($users | Where-Object { $_.userType -eq "Owner" })\n    $members = @($users | Where-Object { $_.userType -eq "Member" }).Length\n    $guests = @($users | Where-Object { $_.userType -eq "Guest" }).Length\n\n    $teamObject = New-Object -TypeName PSObject\n    $teamObject | Add-Member -MemberType NoteProperty -Name DisplayName -Value $team.displayName\n    $teamObject | Add-Member -MemberType NoteProperty -Name Alias -Value $group.mailNickName\n    $teamObject | Add-Member -MemberType NoteProperty -Name "Number of Owners" -Value $owners.Length\n    $teamObject | Add-Member -MemberType NoteProperty -Name "Number of Members" -Value $members\n    $teamObject | Add-Member -MemberType NoteProperty -Name "Number of Guests" -Value $guests\n    if ($owners.Count -eq 1) {\n        $teamObject | Add-Member -MemberType NoteProperty -Name "Owner" -Value $owners[0].displayName\n    }\n\n    write-host " ...Done" -ForegroundColor Green\n    $teams += $teamObject\n}\n\n$teams | Format-Table -AutoSize\n```\n')),(0,a.kt)("p",null,'=== "Bash"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```bash\n#!/bin/bash\n\n# requires jq: https://stedolan.github.io/jq/\n\ndefaultIFS=$IFS\nIFS=$'\\n'\n\navailableTeams=`m365 teams team list -o json`\nteams=()\n\nfor team in `echo $availableTeams | jq -c '.[]'`; do\n\n    displayName=`echo $team | jq '.displayName'`\n    echo \"Handling team: ${displayName}\"\n\n    teamId=`echo $team | jq '.id'`\n    group=`m365 aad o365group get --id ${teamId} -o json`\n    users=`m365 teams user list --teamId ${teamId} -o json`\n\n    groupId=`echo $team | jq '.id'`\n    alias=`echo $group | jq '.mailNickName'`\n\n    owner=`echo $users | jq -c 'map(select(.userType == \"Owner\")) | .[0]? | .displayName'`\n    ownercount=`echo $users | jq -c 'map(select(.userType == \"Owner\")) | length'`\n    membercount=`echo $users | jq -c 'map(select(.userType == \"Member\")) | length'`\n    guestcount=`echo $users | jq -c 'map(select(.userType == \"Guest\")) | length'`\n\n    teamObject=$(jq -n -c \\\n        --arg dn \"${displayName}\" \\\n        --arg id \"${groupId}\" \\\n        --arg al \"${alias}\" \\\n        --arg oc \"${ownercount}\" \\\n        --arg mc \"${membercount}\" \\\n        --arg gc \"${guestcount}\" \\\n        --arg ow \"${owner}\" \\\n        '{DisplayName: $dn, GroupID: $id, Alias: $al, OwnerCount: $oc, MemberCount: $mc, GuestCount: $gc, Owner: $ow}')\n\n    echo \"...Done\"\n    teams+=($teamObject)\ndone\n\necho ${teams[@]} | jq -csr '(.[0] |keys_unsorted | @tsv), (.[]|.|map(.) |@tsv)' | column -s$'\\t' -t\n\nIFS=defaultIFS\n\nexit 1\n```\n")))}p.isMDXComponent=!0}}]);