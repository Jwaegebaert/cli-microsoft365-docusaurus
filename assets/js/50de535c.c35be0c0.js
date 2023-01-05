"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21711],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,m=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),i=d(a),b=o,f=i["".concat(c,".").concat(b)]||i[b]||p[b]||m;return a?n.createElement(f,s(s({ref:t},l),{},{components:a})):n.createElement(f,s({ref:t},l))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var m=a.length,s=new Array(m);s[0]=b;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[i]="string"==typeof e?e:o,s[1]=r;for(var d=2;d<m;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},28369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>i,frontMatter:()=>m,metadata:()=>r,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const m={},s="teams tab get",r={unversionedId:"cmd/teams/tab/tab-get",id:"cmd/teams/tab/tab-get",title:"teams tab get",description:"Gets information about the specified Microsoft Teams tab",source:"@site/docs/cmd/teams/tab/tab-get.md",sourceDirName:"cmd/teams/tab",slug:"/cmd/teams/tab/tab-get",permalink:"/cli-microsoft365-docusaurus/cmd/teams/tab/tab-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/tab/tab-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams tab add",permalink:"/cli-microsoft365-docusaurus/cmd/teams/tab/tab-add"},next:{title:"teams tab list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/tab/tab-list"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],l={toc:d};function i(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"teams-tab-get"},"teams tab get"),(0,o.kt)("p",null,"Gets information about the specified Microsoft Teams tab"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams tab get [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--teamId [teamId]"),"\n: The ID of the Microsoft Teams team where the tab is located. Specify either teamId or teamName but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--teamName [teamName]"),"\n: The display name of the Microsoft Teams team where the tab is located. Specify either teamId or teamName but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--channelId [channelId]"),"\n: The ID of the Microsoft Teams channel where the tab is located. Specify either channelId or channelName but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--channelName [channelName]"),"\n: The display name of the Microsoft Teams channel where the tab is located. Specify either channelId or channelName but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The ID of the Microsoft Teams tab. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The display name of the Microsoft Teams tab. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," but not both"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"You can only retrieve tabs for teams of which you are a member."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get a Microsoft Teams Tab with ID ",(0,o.kt)("em",{parentName:"p"},"1432c9da-8b9c-4602-9248-e0800f3e3f07")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams tab get --teamId 00000000-0000-0000-0000-000000000000 --channelId 19:00000000000000000000000000000000@thread.skype --id 1432c9da-8b9c-4602-9248-e0800f3e3f07\n")),(0,o.kt)("p",null,"Get a Microsoft Teams Tab with name ",(0,o.kt)("em",{parentName:"p"},"Tab Name")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams tab get --teamName "Team Name" --channelName "Channel Name" --name "Tab Name"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'``` json\n{\n  "id": "34991fbf-59f4-48d9-b094-b9d64d550e23",\n  "displayName": "Tab Name",\n  "webUrl": "https://teams.microsoft.com/l/entity/1542629c-01b3-4a6d-8f76-1938b779e48d/_djb2_msteams_prefix_34991fbf-59f4-48d9-b094-b9d64d550e23?webUrl=https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d&label=My%20Contoso%20Tab&context=%7b%0d%0a++%22canvasUrl%22%3a+%22https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d%22%2c%0d%0a++%22channelId%22%3a+%2219%3aB3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1%40thread.tacv2%22%2c%0d%0a++%22subEntityId%22%3a+null%0d%0a%7d&groupId=aee5a2c9-b1df-45ac-9964-c708e760a045&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba",\n  "configuration": {\n    "entityId": "surveys_list:19:B3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1@thread.tacv2:ps67c9jyf3a30j2j5eum72",\n    "contentUrl": "https://teams.contoso.ai/msteams/content/tab/team?theme={theme}",\n    "removeUrl": "https://teams.contoso.ai/msteams/content/tabdelete?theme={theme}",\n    "websiteUrl": "https://teams.contoso.ai/msteams/content/tab/team?theme={theme}",\n    "dateAdded": "2022-10-31T12:17:58.632Z"\n  }\n}\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'``` text\nconfiguration: {"entityId":"surveys_list:19:B3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1@thread.tacv2:ps67c9jyf3a30j2j5eum72","contentUrl":"https://teams.contoso.ai/msteams/content/tab/team?theme={theme}","removeUrl":"https://teams.contoso.ai/msteams/content/tabdelete?theme={theme}","websiteUrl":"https://teams.contoso.ai/msteams/content/tab/team?theme={theme}","dateAdded":"2022-10-31T12:17:58.632Z"}\ndisplayName  : Tab Name\nid           : 34991fbf-59f4-48d9-b094-b9d64d550e23\nwebUrl       : https://teams.microsoft.com/l/entity/1542629c-01b3-4a6d-8f76-1938b779e48d/_djb2_msteams_prefix_34991fbf-59f4-48d9-b094-b9d64d550e23?webUrl=https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d&label=contoso&context=%7b%0d%0a++%22canvasUrl%22%3a+%22https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d%22%2c%0d%0a++%22channelId%22%3a+%2219%3aB3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1%40thread.tacv2%22%2c%0d%0a++%22subEntityId%22%3a+null%0d%0a%7d&groupId=aee5a2c9-b1df-45ac-9964-c708e760a045&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba\n```\n')),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'``` text\nid,displayName,webUrl,configuration\n34991fbf-59f4-48d9-b094-b9d64d550e23,Tab Name,https://teams.microsoft.com/l/entity/1542629c-01b3-4a6d-8f76-1938b779e48d/_djb2_msteams_prefix_34991fbf-59f4-48d9-b094-b9d64d550e23?webUrl=https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d&label=My%20Contoso%20Tab&context=%7b%0d%0a++%22canvasUrl%22%3a+%22https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d%22%2c%0d%0a++%22channelId%22%3a+%2219%3aB3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1%40thread.tacv2%22%2c%0d%0a++%22subEntityId%22%3a+null%0d%0a%7d&groupId=aee5a2c9-b1df-45ac-9964-c708e760a045&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba,"{""entityId"":""surveys_list:19:B3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1@thread.tacv2:ps67c9jyf3a30j2j5eum72"",""contentUrl"":""https://teams.contoso.ai/msteams/content/tab/team?theme={theme}"",""removeUrl"":""https://teams.contoso.ai/msteams/content/tabdelete?theme={theme}"",""websiteUrl"":""https://teams.contoso.ai/msteams/content/tab/team?theme={theme}"",""dateAdded"":""2022-10-31T12:17:58.632Z""}"\n```\n')))}i.isMDXComponent=!0}}]);