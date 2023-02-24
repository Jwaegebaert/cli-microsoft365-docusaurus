"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[22046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),m=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return n?s.createElement(h,o(o({ref:t},c),{},{components:n})):s.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<r;m++)o[m]=n[m];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var s=n(87462),a=(n(67294),n(3905));const r={tags:["migration","teams"]},o="Export conversations from Microsoft Teams Channels",i={unversionedId:"sample-scripts/teams/export-teams-conversations/index",id:"sample-scripts/teams/export-teams-conversations/index",title:"Export conversations from Microsoft Teams Channels",description:"Author: Joseph Velliah",source:"@site/docs/sample-scripts/teams/export-teams-conversations/index.md",sourceDirName:"sample-scripts/teams/export-teams-conversations",slug:"/sample-scripts/teams/export-teams-conversations/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/export-teams-conversations/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/teams/export-teams-conversations/index.md",tags:[{label:"migration",permalink:"/cli-microsoft365-docusaurus/tags/migration"},{label:"teams",permalink:"/cli-microsoft365-docusaurus/tags/teams"}],version:"current",lastUpdatedAt:1671570658,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{tags:["migration","teams"]},sidebar:"sampleScripts",previous:{title:"Export all channels in Microsoft Teams teams in the tenant",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/export-all-channels-teams/"},next:{title:"Get all the Teams a specific user is part of",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/get-all-teams-specific-user-is-part-of/"}},l={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Solution",id:"solution",level:3}],c={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"export-conversations-from-microsoft-teams-channels"},"Export conversations from Microsoft Teams Channels"),(0,a.kt)("p",null,"Author: ",(0,a.kt)("a",{parentName:"p",href:"https://sprider.blog/export-conversations-from-microsoft-teams"},"Joseph Velliah")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"We utilize Teams during incidents and create channels for each. We would like to be able to export conversation history."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"right now the only option we have is to go through Security & Compliance."),(0,a.kt)("li",{parentName:"ul"},"Teams usage is growing in every organization and it would soon become unreasonably to only have Administrators be the ones doing exports of channels for all the Teams.")),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("p",null,"This script uses CLI for Microsoft 365 to export the conversations from Microsoft Teams Channels. You don't need to be a tenant admin to export conversations but you still can only export conversations of Teams of which you are member."),(0,a.kt)("p",null,"!!! attention\nCommands ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 teams message list")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 teams message reply list")," are based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,a.kt)("p",null,'=== "PowerShell"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```powershell\nfunction  Get-Teams {\n  $teams = m365 teams team list -o json | ConvertFrom-Json -AsHashtable\n  return $teams\n}\nfunction  Get-Channels {\n  param (\n    [Parameter(Mandatory = $true)] [string] $teamId\n  )\n  $channels = m365 teams channel list --teamId $teamId -o json | ConvertFrom-Json -AsHashtable\n  return $channels\n}\nfunction  Get-Messages {\n  param (\n    [Parameter(Mandatory = $true)] [string] $teamId,\n    [Parameter(Mandatory = $true)] [string] $channelId\n  )\n  $messages = m365 teams message list --teamId $teamId --channelId $channelId -o json | ConvertFrom-Json -AsHashtable\n  return $messages\n}\nfunction  Get-MessageReplies {\n  param (\n    [Parameter(Mandatory = $true)] [string] $teamId,\n    [Parameter(Mandatory = $true)] [string] $channelId,\n    [Parameter(Mandatory = $true)] [string] $messageId\n  )\n\n  $messageReplies = m365 teams message reply list --teamId $teamId --channelId $channelId --messageId $messageId -o json | ConvertFrom-Json -AsHashtable\n  return $messageReplies\n}\n\nTry {\n  $teamsCollection = [System.Collections.ArrayList]@()\n  $teams = Get-Teams\n  $progressCountTeam = 1;\n  foreach ($team in $teams) {\n    Write-Progress -Id 0 -Activity "Processing channels in Team : $($team.displayName)" -Status "Team $progressCountTeam of $($teams.length)" -PercentComplete (($progressCountTeam / $teams.length) * 100)\n    $channelsCollection = [System.Collections.ArrayList]@()\n    $channels = Get-Channels $team.id\n    $progressCountChannel = 1;\n    foreach ($channel in $channels) {\n      Write-Progress -Id 1 -ParentId 0 -Activity "Processing messages in channel : $($channel.displayName)" -Status "Channel $progressCountChannel of $($channels.length)" -PercentComplete (($progressCountChannel / $channels.length) * 100)\n      $messages = Get-Messages $team.id $channel.id\n      $messagesCollection = [System.Collections.ArrayList]@()\n      foreach ($message in $messages) {\n        $messageReplies = Get-MessageReplies $team.id $channel.id $message.id\n        $messageDetails = $message\n        [void]$messageDetails.Add("replies", $messageReplies)\n        [void]$messagesCollection.Add($messageDetails)\n      }\n      $channelDetails = $channel\n      [void]$channelDetails.Add("messages", $messagesCollection)\n      [void]$channelsCollection.Add($channelDetails)\n      $progressCountChannel++\n    }\n    $teamDetails = $team\n    [void]$teamDetails.Add("channels", $channelsCollection)\n    [void]$teamsCollection.Add($teamDetails)\n    $progressCountTeam++\n  }\n  Write-Progress -Id 0 -Activity " " -Status " " -Completed\n  Write-Progress -Id 1 -Activity " " -Status " " -Completed\n  $output = @{}\n  [void]$output.Add("teams", $teamsCollection)\n  $executionDir = $PSScriptRoot\n  $outputFilePath = "$executionDir/$(get-date -f yyyyMMdd-HHmmss).json"\n  # ConvertTo-Json cuts off data when exporting to JSON if it nests too deep. The default value of Depth parameter is 2. Set your -Depth parameter whatever depth you need to preserve your data.\n  $output | ConvertTo-Json -Depth 100 | Out-File $outputFilePath \n  Write-Host "Open $outputFilePath file to review your output" -F Green \n}\nCatch {\n  $ErrorMessage = $_.Exception.Message\n  Write-Error $ErrorMessage\n}\n```\n')))}u.isMDXComponent=!0}}]);