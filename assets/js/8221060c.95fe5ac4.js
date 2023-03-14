"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[71987],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>$});var r=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(s),d=n,$=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return s?r.createElement($,a(a({ref:t},p),{},{components:s})):r.createElement($,a({ref:t},p))}));function $(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=s.length,a=new Array(o);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=s[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,s)}d.displayName="MDXCreateElement"},73691:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=s(87462),n=(s(67294),s(3905));const o={tags:["adoption","users"]},a="Recognize most active users for a specific Team",c={unversionedId:"sample-scripts/teams/recognize-most-active-users-specific-team/index",id:"sample-scripts/teams/recognize-most-active-users-specific-team/index",title:"Recognize most active users for a specific Team",description:"Author: Albert-Jan Schot",source:"@site/docs/sample-scripts/teams/recognize-most-active-users-specific-team/index.md",sourceDirName:"sample-scripts/teams/recognize-most-active-users-specific-team",slug:"/sample-scripts/teams/recognize-most-active-users-specific-team/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/recognize-most-active-users-specific-team/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/teams/recognize-most-active-users-specific-team/index.md",tags:[{label:"adoption",permalink:"/cli-microsoft365-docusaurus/tags/adoption"},{label:"users",permalink:"/cli-microsoft365-docusaurus/tags/users"}],version:"current",lastUpdatedAt:1677877396,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{tags:["adoption","users"]},sidebar:"sampleScripts",previous:{title:"List all Microsoft Teams team's Owners and Members",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/list-teams-owners-and-members/"},next:{title:"Removes Microsoft Teams personal app from users and Microsoft Teams app catalog",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/remove-personal-app/"}},i={},l=[],p={toc:l},m="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(m,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"recognize-most-active-users-for-a-specific-team"},"Recognize most active users for a specific Team"),(0,n.kt)("p",null,"Author: ",(0,n.kt)("a",{parentName:"p",href:"https://www.cloudappie.nl/recognize-active-team-members-cli-microsoft-365/"},"Albert-Jan Schot")),(0,n.kt)("p",null,"Retrieves all activities for a specific Microsoft Teams Team and shares the top 3 contributors based on their score as an adaptive card to the specified webhook url."),(0,n.kt)("p",null,'=== "PowerShell"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```powershell\n$teamId = "<PUTYOURTEAMIDHERE>"\n$webhookUrl = "<PUTYOURURLHERE>"\n# You can get a delta of messages since the last \'n\' days. Currently set to seven. You can go back a maximum of 8 months.\n$date = (get-date).AddDays(-7).ToString("yyyy-MM-ddTHH:mm:ssZ")\n\n$channels = m365 teams channel list --teamId $teamId --output json | ConvertFrom-Json\n$results = @()\n$scoreResults = @()\n\n$channelCounter = 0;\n\nforeach ($channel in $channels) {\n\n    $channelCounter++;\n    Write-Output "Processing channel... $channelCounter/$($channels.Length)"\n\n    $messages = m365 teams message list --teamId $teamId --channelId $channel.id --since $date --output json | ConvertFrom-Json\n\n    $messageCounter = 0;\n\n    foreach ($message in $messages) {\n        $messageCounter++\n        Write-Output "Processing message ... $messageCounter/$($messages.Length)"\n\n        # Skip messages that are created with an application (bots / adaptive cards)\n        if ($null -ne $message.from.user.id) {\n            $results += [pscustomobject][ordered]@{\n                Type       = "Post"\n                Details    = $message.reactionType\n                UserId     = $message.from.user.id\n                HasSubject = $($null -ne $message.subject)\n            }\n        }\n\n        # Process all likes and comments on the initial message\n        foreach ($reaction in $message.reactions) {\n            $results += [pscustomobject][ordered]@{\n                Type    = "Reaction"\n                Details = $reaction.reactionType\n                UserId  = $reaction.user.user.id\n            }\n        }\n\n        $replies = m365 teams message reply list --teamId $teamId --channelId $channel.id --messageId $message.Id --output json | ConvertFrom-Json\n\n        foreach ($reply in $replies) {\n            # Skip replies that are created with an application (bots)\n            if ($null -ne $message.from.user.id) {\n                $results += [pscustomobject][ordered]@{\n                    Type   = "Reply"\n                    UserId = $reply.from.user.id\n                }\n            }\n\n            # Process all likes and comments on the reply message\n            foreach ($reaction in $reply.reactions) {\n                $results += [pscustomobject][ordered]@{\n                    Type    = "Reaction"\n                    Details = $reaction.reactionType\n                    UserId  = $reaction.user.user.id\n                }\n            }\n\n        }\n    }\n}\n\n# Group the results per user\n$resultsGrouped = $results | Group-Object -Property UserId\n\n#Score per user\nforeach ($teamsUser in $resultsGrouped) {\n    $user = m365 aad user get --id $teamsUser.UserId --output json | ConvertFrom-Json\n\n    # Count points\n    # Each  post is two points, 1 extra point awarded for each Post with Subject\n    # Each reply 1 and each reaction 0.5\n    $score = (($teamsUser.Group | Where-Object { $_.Type -eq "Post" }).Count * 2)\n    $score += (($teamsUser.Group | Where-Object { $_.HasSubject }).Count)\n    $score += ($teamsUser.Group | Where-Object { $_.Type -eq "Reply" }).Count\n    $score += (($teamsUser.Group | Where-Object { $_.Type -eq "Reaction" }).Count / 2)\n\n    $scoreResults += [pscustomobject][ordered]@{\n        DisplayName       = $user.displayName\n        UserPrincipalName = $user.userPrincipalName\n        Score             = $score;\n    }\n}\n\n# Sort our score report based on the score\n$scoreResults = $scoreResults | Sort-Object { $_.score } -Descending\n\n#Construct adaptive card\n$title = "\ud83c\udfc6 Most active team members"\n$scoreJson = \'{   \\"title\\": \\"\ud83e\udd47 \'+$($scoreResults[0].DisplayName)+\'\\",   \\"value\\": \\"\' + $($scoreResults[0].score) + \'\\"   }\'\n\nif($scoreResults[1]){\n    $scoreJson += \',{   \\"title\\": \\"\ud83e\udd48 \'+$($scoreResults[1].DisplayName)+\'\\",   \\"value\\": \\"\' + $($scoreResults[1].score) + \'\\"   }\'\n}\nif($scoreResults[2]){\n    $scoreJson += \',{   \\"title\\": \\"\ud83e\udd49 \'+$($scoreResults[2].DisplayName)+\'\\",   \\"value\\": \\"\' + $($scoreResults[2].score) + \'\\"   }\'\n}\n\n$card = \'{ \\"type\\": \\"AdaptiveCard\\", \\"$schema\\": \\"http://adaptivecards.io/schemas/adaptive-card.json\\", \\"version\\": \\"1.2\\", \\"body\\": [  {  \\"type\\": \\"TextBlock\\",  \\"text\\": \\"\' + $($title) + \'\\",  \\"wrap\\": true,  \\"size\\": \\"Medium\\",  \\"weight\\": \\"Bolder\\",  \\"color\\": \\"Attention\\"  },  {  \\"type\\": \\"TextBlock\\",  \\"wrap\\": true,  \\"text\\": \\"Week \' + $(get-date -UFormat %V) + \'\\",  \\"fontType\\": \\"Default\\",  \\"size\\": \\"Small\\",  \\"weight\\": \\"Lighter\\",  \\"isSubtle\\": true  },  {  \\"type\\": \\"FactSet\\",  \\"facts\\": [   \' + $scoreJson + \'  ]  } ] }\'\n\nm365 adaptivecard send --url $webhookUrl --card $card\n```\n')))}u.isMDXComponent=!0}}]);