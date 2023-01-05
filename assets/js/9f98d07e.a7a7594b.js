"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85839],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),m=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},c=function(e){var r=m(e.components);return a.createElement(u.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=m(t),d=o,f=l["".concat(u,".").concat(d)]||l[d]||p[d]||s;return t?a.createElement(f,n(n({ref:r},c),{},{components:t})):a.createElement(f,n({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,n=new Array(s);n[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[l]="string"==typeof e?e:o,n[1]=i;for(var m=2;m<s;m++)n[m]=t[m];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82089:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>n,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=t(87462),o=(t(67294),t(3905));const s={tags:["groups","security","teams","users"]},n="Bulk add/remove users to Microsoft Teams and Microsoft 365 Groups",i={unversionedId:"sample-scripts/aad/manage-group-users/index",id:"sample-scripts/aad/manage-group-users/index",title:"Bulk add/remove users to Microsoft Teams and Microsoft 365 Groups",description:"Author: Joseph Velliah",source:"@site/docs/sample-scripts/aad/manage-group-users/index.md",sourceDirName:"sample-scripts/aad/manage-group-users",slug:"/sample-scripts/aad/manage-group-users/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/aad/manage-group-users/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/aad/manage-group-users/index.md",tags:[{label:"groups",permalink:"/cli-microsoft365-docusaurus/tags/groups"},{label:"security",permalink:"/cli-microsoft365-docusaurus/tags/security"},{label:"teams",permalink:"/cli-microsoft365-docusaurus/tags/teams"},{label:"users",permalink:"/cli-microsoft365-docusaurus/tags/users"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["groups","security","teams","users"]},sidebar:"sampleScripts",previous:{title:"Scan for Microsoft 365 Groups created with user's first or last name",permalink:"/cli-microsoft365-docusaurus/sample-scripts/aad/flag-groups-with-user-names/"},next:{title:"Replace a user's membership in selected Microsoft 365 Groups or Teams",permalink:"/cli-microsoft365-docusaurus/sample-scripts/aad/replace-membership-of-selected-groups/"}},u={},m=[],c={toc:m};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bulk-addremove-users-to-microsoft-teams-and-microsoft-365-groups"},"Bulk add/remove users to Microsoft Teams and Microsoft 365 Groups"),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://sprider.blog/add-remove-bulk-users-to-from-microsoft-teams-microsoft-365-group-office-365-cli-commands"},"Joseph Velliah")),(0,o.kt)("p",null,"Companies pursue to hasten profits growth or enter new marketplace through Mergers and Acquisitions (M&A). M&A typically fails during integration. This also applies to migrating users and data in Microsoft Teams and Groups. Partial acquisition can be pretty tricky. To help make the activity as charming as possible, I have created the following sample script to add/remove bulk users to/from Microsoft Teams team or Microsoft 365 group using CLI for Microsoft 365 commands."),(0,o.kt)("p",null,"Note: Refactor the code as per your requirement."),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```powershell\n$taskItems = import-csv "sample-input-file.csv" \u2013header mailNickname, userEmail, role, action\n$groups = m365 aad o365group list -o json | ConvertFrom-Json\n\nForEach ($taskItem in $taskItems) {\n\n    $mailNickname = $($taskItem.mailNickname)\n    $userEmail = $($taskItem.userEmail)\n    $role = $($taskItem.role)\n    $action = $($taskItem.action)\n\n    $group = $groups | Where-Object { $_.mailNickname -eq "$mailNickname" }\n    $user = m365 aad user get --userName $userEmail -o json | ConvertFrom-Json\n\n    Write-Host "Processing: User --\x3e " $user.mail " Group --\x3e " $group.mailNickname\n\n    If ($action -eq "add") {\n\n        If ($role -eq "owner") {\n            m365 aad o365group user add --groupId $group.id --userName $user.mail --role Owner; \n            Write-Host $user.mail " added as owner in " $group.mailNickname\n        }\n        ElseIf ($role -eq "member") {\n            m365 aad o365group user add --groupId $group.id --userName $user.mail\n            Write-Host $user.mail " added as member in " $group.mailNickname\n        }\n        Else {\n            Write-Host "Invalid user role \'" $role "\'"\n        }\n    }\n    ElseIf ($action -eq "remove") {\n        m365 aad o365group user remove --groupId $group.id --userName $user.mail --confirm\n        Write-Host $user.mail " removed from " $group.mailNickname\n    }\n    Else {\n        Write-Host "Invalid task action \'" $action "\'"\n    }\n}\n```\n')),(0,o.kt)("p",null,'=== "Input CSV File Format"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\ngroupMailNickname1, user1@domainname.com, owner, add\ngroupMailNickname2, user2@domainname.com, member, add\ngroupMailNickname3, user3@domainname.com, , remove\n```\n")))}l.isMDXComponent=!0}}]);