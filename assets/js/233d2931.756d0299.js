"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92477],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>f});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=c(e.components);return o.createElement(p.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=c(t),d=a,f=l["".concat(p,".").concat(d)]||l[d]||u[d]||n;return t?o.createElement(f,s(s({ref:r},m),{},{components:t})):o.createElement(f,s({ref:r},m))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,s=new Array(n);s[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33646:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const n={tags:["groups","provisioning","teams"]},s="Create a Microsoft Team with channels from a Microsoft 365 Group",i={unversionedId:"sample-scripts/teams/create-team-from-group/index",id:"sample-scripts/teams/create-team-from-group/index",title:"Create a Microsoft Team with channels from a Microsoft 365 Group",description:"Inspired by: Patrick Lamber",source:"@site/docs/sample-scripts/teams/create-team-from-group/index.md",sourceDirName:"sample-scripts/teams/create-team-from-group",slug:"/sample-scripts/teams/create-team-from-group/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/create-team-from-group/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/teams/create-team-from-group/index.md",tags:[{label:"groups",permalink:"/cli-microsoft365-docusaurus/tags/groups"},{label:"provisioning",permalink:"/cli-microsoft365-docusaurus/tags/provisioning"},{label:"teams",permalink:"/cli-microsoft365-docusaurus/tags/teams"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["groups","provisioning","teams"]},sidebar:"sampleScripts",previous:{title:"Create a Microsoft Teams team and bulk add members from CSV file",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/create-team-and-add-members-and-owners/"},next:{title:"Deploy Microsoft Teams app from Azure DevOps",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/deploy-teams-app/"}},p={},c=[],m={toc:c};function l(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-microsoft-team-with-channels-from-a-microsoft-365-group"},"Create a Microsoft Team with channels from a Microsoft 365 Group"),(0,a.kt)("p",null,"Inspired by: ",(0,a.kt)("a",{parentName:"p",href:"https://www.nubo.eu/Provision-A-Team-With-CLI-For-Microsoft-365/"},"Patrick Lamber")),(0,a.kt)("p",null,"A sample script which creates a Microsoft 365 Group, associates a logo to it and some members. Afterward, it teamyfies the Group and creates two public channels."),(0,a.kt)("p",null,'=== "PowerShell"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```powershell\n# this examples searches the users in a directory by displayname\n$memberDisplayName = "A"\n# Group settings\n$logoPath = "./pnpImage.png"\n$displayName = "Contoso Group"\n$mailNickName = "contosoGroup"\n# add more items to the array to provision channels\n$channelNames = @("Public relations", "CLI Project")\n\nWrite-Host "Creating the Group \'$displayName\'..."\n$group = $null\n$group = m365 aad o365group add --displayName $displayName `\n                                --description "." --mailNickname $mailNickName  `\n                                -o "json" | convertfrom-json\nif ($group -eq $null) {\n    Write-Host "An error occurred during Group creation"\n    break\n}\n\nWrite-Host "Created with id $($group.id)"\n\n# you might need to wait a little bit after Group creation before you are allowed to assign a logo\nWrite-Host "Assigning custom logo \'$logoPath\' in about 10 seconds..."\nStart-sleep -Seconds 10\nm365 aad o365group set --id $group.id --logoPath $logoPath    \n\nWrite-Host "Searching for members with \'$memberDisplayName\' in their displayname"\n$membersToAdd = m365 aad user list --displayName $memberDisplayName --properties "id,userprincipalname" --output "json" | convertfrom-json\n$membersToAdd | ForEach-Object {\n    Write-Host "Adding member to $($_.userPrincipalName) to Group"\n    $variable = m365 aad o365group user add --groupId $group.id --userName $_.id -o "json" | convertfrom-json\n}\n\nWrite-Host "Teamify the Group"\nm365 aad o365group teamify --groupId $group.id\n\nWrite-Host "Provisioning channels"\n$channelNames | ForEach-Object {\n    m365 teams channel add --teamId $group.id --name $_ \n}\n```\n')))}l.isMDXComponent=!0}}]);