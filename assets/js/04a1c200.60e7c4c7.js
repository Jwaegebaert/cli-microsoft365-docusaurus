"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),i=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(a),b=r,u=d["".concat(m,".").concat(b)]||d[b]||p[b]||s;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=b;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},12993:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const s={},o="teams tab list",l={unversionedId:"cmd/teams/tab/tab-list",id:"cmd/teams/tab/tab-list",title:"teams tab list",description:"Lists tabs in the specified Microsoft Teams channel",source:"@site/docs/cmd/teams/tab/tab-list.md",sourceDirName:"cmd/teams/tab",slug:"/cmd/teams/tab/tab-list",permalink:"/cmd/teams/tab/tab-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/tab/tab-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams tab get",permalink:"/cmd/teams/tab/tab-get"},next:{title:"teams tab remove",permalink:"/cmd/teams/tab/tab-remove"}},m={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:i};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-tab-list"},"teams tab list"),(0,r.kt)("p",null,"Lists tabs in the specified Microsoft Teams channel"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams tab list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --teamId <teamId>"),"\n: The ID of the Microsoft Teams team where the channel is located"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-c, --channelId <channelId>"),"\n: The ID of the channel for which to list tabs"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"You can only retrieve tabs for teams of which you are a member."),(0,r.kt)("p",null,"Tabs ",(0,r.kt)("em",{parentName:"p"},"Conversations")," and ",(0,r.kt)("em",{parentName:"p"},"Files")," are present in every team and therefore not included in the list of available tabs."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List all tabs in a Microsoft Teams channel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams tab list --teamId 00000000-0000-0000-0000-000000000000 --channelId 19:00000000000000000000000000000000@thread.skype\n")),(0,r.kt)("p",null,"Include all the values from the tab configuration and associated teams app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams tab list --teamId 00000000-0000-0000-0000-000000000000 --channelId 19:00000000000000000000000000000000@thread.skype --output json\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'``` json\n[\n  {\n    "id": "34991fbf-59f4-48d9-b094-b9d64d550e23",\n    "displayName": "My Contoso Tab",\n    "webUrl": "https://teams.microsoft.com/l/entity/1542629c-01b3-4a6d-8f76-1938b779e48d/_djb2_msteams_prefix_34991fbf-59f4-48d9-b094-b9d64d550e23?webUrl=https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d&label=My%20Contoso%20Tab&context=%7b%0d%0a++%22canvasUrl%22%3a+%22https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d%22%2c%0d%0a++%22channelId%22%3a+%2219%3aB3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1%40thread.tacv2%22%2c%0d%0a++%22subEntityId%22%3a+null%0d%0a%7d&groupId=aee5a2c9-b1df-45ac-9964-c708e760a045&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba",\n    "configuration": {\n      "entityId": "surveys_list:19:B3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1@thread.tacv2:ps67c9jyf3a30j2j5eum72",\n      "contentUrl": "https://teams.contoso.ai/msteams/content/tab/team?theme={theme}",\n      "removeUrl": "https://teams.contoso.ai/msteams/content/tabdelete?theme={theme}",\n      "websiteUrl": "https://teams.contoso.ai/msteams/content/tab/team?theme={theme}",\n      "dateAdded": "2022-10-31T12:17:58.632Z"\n    },\n    "teamsApp": {\n      "id": "1542629c-01b3-4a6d-8f76-1938b779e48d",\n      "externalId": null,\n      "displayName": "My Contoso Tab",\n      "distributionMethod": "store"\n    },\n    "teamsAppTabId": "1542629c-01b3-4a6d-8f76-1938b779e48d"\n  }\n]\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"``` text\ndisplayName  : My Contoso Tab\nid           : 34991fbf-59f4-48d9-b094-b9d64d550e23\nteamsAppTabId: 1542629c-01b3-4a6d-8f76-1938b779e48d\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"``` text\nid,displayName,teamsAppTabId\n34991fbf-59f4-48d9-b094-b9d64d550e23,My Contoso Tab,1542629c-01b3-4a6d-8f76-1938b779e48d\n```\n")))}d.isMDXComponent=!0}}]);