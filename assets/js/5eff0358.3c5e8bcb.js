"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9267],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return t?a.createElement(h,i(i({ref:n},m),{},{components:t})):a.createElement(h,i({ref:n},m))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35503:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const o={tags:["cleanup","teams"]},i="Remove Wiki tab in a Microsoft Teams channel",s={unversionedId:"sample-scripts/teams/remove-wikitab-teams/index",id:"sample-scripts/teams/remove-wikitab-teams/index",title:"Remove Wiki tab in a Microsoft Teams channel",description:"Inspired by: Garry Trinder and Laura Kokkarinen",source:"@site/docs/sample-scripts/teams/remove-wikitab-teams/index.md",sourceDirName:"sample-scripts/teams/remove-wikitab-teams",slug:"/sample-scripts/teams/remove-wikitab-teams/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/remove-wikitab-teams/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/teams/remove-wikitab-teams/index.md",tags:[{label:"cleanup",permalink:"/cli-microsoft365-docusaurus/tags/cleanup"},{label:"teams",permalink:"/cli-microsoft365-docusaurus/tags/teams"}],version:"current",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["cleanup","teams"]},sidebar:"sampleScripts",previous:{title:"Removes Microsoft Teams personal app from users and Microsoft Teams app catalog",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/remove-personal-app/"},next:{title:"Share social champions to Teams",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/share-socialchampions/"}},c={},l=[],m={toc:l};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"remove-wiki-tab-in-a-microsoft-teams-channel"},"Remove Wiki tab in a Microsoft Teams channel"),(0,r.kt)("p",null,"Inspired by: ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/garrytrinder/4df2aeaf9dd66c4375308874eb7def63"},"Garry Trinder")," and ",(0,r.kt)("a",{parentName:"p",href:"https://laurakokkarinen.com/deleting-the-treacherous-wiki-tab-as-a-part-of-your-teams-provisioning-process/"},"Laura Kokkarinen")),(0,r.kt)("p",null,"Removes the wiki tab of a Microsoft Teams Team's channel."),(0,r.kt)("p",null,'=== "PowerShell"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```powershell\n$groupMailNickname = "Architecture"\n$channelName = "General"\n\n$groups = m365 aad o365group list --query "[?mailNickname==\'$groupMailNickname\']" -o json | ConvertFrom-Json\nif ($null -eq $groups) { Write-Error "A team with the mailNickname $groupMailNickname was not found" }\nelse {\n  $channels = m365 teams channel list --teamId $groups[0].id --query "[?displayName==\'$channelName\']" -o json | ConvertFrom-Json\n  if ($null -eq $channels) { Write-Error "A channel with the name $channelName was not found in the team" }\n  else {\n    $tabs = m365 teams tab list --teamId $groups[0].id --channelId $channels[0].id --query "[?teamsApp.id==\'com.microsoft.teamspace.tab.wiki\']" -o json | ConvertFrom-Json\n    if ($null -eq $tabs) { Write-Error "A Wiki tab was not found in the channel" }\n    else {\n      write-host "Removing wiki tab for the channel.." -ForegroundColor Green \n      m365 teams tab remove --teamId $groups[0].id --channelId $channels[0].id --tabId $tabs[0].id --confirm\n      write-host " ...Done" -ForegroundColor Green \n    }\n  }\n}\n```\n')),(0,r.kt)("p",null,'=== "Bash"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```bash\n#!/bin/bash\n\n# requires jq: https://stedolan.github.io/jq/\n\ngroupMailNickname="Architecture"\nchannelName="Channel"\nwikiTabId="com.microsoft.teamspace.tab.wiki"\n\ngroups=$(m365 aad o365group list -o json | jq \'.[] | select(.mailNickname == "\'"$groupMailNickname"\'")\')\nif [ -z "$groups" ]; then\n  echo "A team with the mailNickname $groupMailNickname was not found"\nelse\n  teamId=$(echo $groups | jq \'.id\')\n  channels=$(m365 teams channel list --teamId $teamId -o json | jq \'.[] | select(.displayName == "\'"$channelName"\'")\')\n  \n  if [ -z "$channels" ]; then\n    echo "A channel with the name $channelName was not found in the team"\n  else\n    channelId=$(echo $channels | jq \'.id\')\n    tabs=$(m365 teams tab list --teamId $teamId --channelId $channelId -o json | jq \'.[] | select(.teamsApp.id == "\'"$wikiTabId"\'")\')\n\n    if [ -z "$tabs" ]; then\n      echo "A Wiki tab was not found in the channel"\n    else\n      tabId=$(echo $tabs | jq \'.id\')\n      echo "Removing wiki tab for the channel.."\n      m365 teams tab remove --teamId $teamId --channelId $channelId --tabId $tabId --confirm\n      echo "...Done"\n    fi\n  fi\nfi\n```\n')))}p.isMDXComponent=!0}}]);