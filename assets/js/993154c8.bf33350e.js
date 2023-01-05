"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64839],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(t),h=r,u=p["".concat(i,".").concat(h)]||p[h]||d[h]||l;return t?a.createElement(u,m(m({ref:n},c),{},{components:t})):a.createElement(u,m({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,m=new Array(l);m[0]=h;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:r,m[1]=o;for(var s=2;s<l;s++)m[s]=t[s];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},53912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>m,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={},m="teams channel member list",o={unversionedId:"cmd/teams/channel/channel-member-list",id:"cmd/teams/channel/channel-member-list",title:"teams channel member list",description:"Lists members of the specified Microsoft Teams team channel",source:"@site/docs/cmd/teams/channel/channel-member-list.md",sourceDirName:"cmd/teams/channel",slug:"/cmd/teams/channel/channel-member-list",permalink:"/cmd/teams/channel/channel-member-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/channel/channel-member-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams channel member add",permalink:"/cmd/teams/channel/channel-member-add"},next:{title:"teams channel member remove",permalink:"/cmd/teams/channel/channel-member-remove"}},i={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-channel-member-list"},"teams channel member list"),(0,r.kt)("p",null,"Lists members of the specified Microsoft Teams team channel"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel member list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --teamId [teamId]"),"\n: The Id of the Microsoft Teams team. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"teamId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"teamName")," but not both"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--teamName [teamName]"),"\n: The display name of the Microsoft Teams team. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"teamId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"teamName")," but not both"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-c, --channelId [channelId]"),"\n: The Id of the Microsoft Teams team channel. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"channelId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"channelName")," but not both"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--channelName [channelName]"),"\n: The display name of the Microsoft Teams team channel. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"channelId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"channelName")," but not both"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-r, --role [role]"),"\n: Filter the results to only users with the given role: owner, member, guest"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List the members of a specified Microsoft Teams team with id 00000000-0000-0000-0000-000000000000 and channel id 19:",(0,r.kt)("a",{parentName:"p",href:"mailto:00000000000000000000000000000000@thread.skype"},"00000000000000000000000000000000@thread.skype")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel member list --teamId 00000000-0000-0000-0000-000000000000 --channelId 19:00000000000000000000000000000000@thread.skype\n")),(0,r.kt)("p",null,"List the members of a specified Microsoft Teams team with name ",(0,r.kt)("em",{parentName:"p"},"Team Name")," and channel with name ",(0,r.kt)("em",{parentName:"p"},"Channel Name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams channel member list --teamName "Team Name" --channelName "Channel Name"\n')),(0,r.kt)("p",null,"List all owners of the specified Microsoft Teams team with id 00000000-0000-0000-0000-000000000000 and channel id 19:",(0,r.kt)("a",{parentName:"p",href:"mailto:00000000000000000000000000000000@thread.skype"},"00000000000000000000000000000000@thread.skype")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel member list --teamId 00000000-0000-0000-0000-000000000000 --channelId 19:00000000000000000000000000000000@thread.skype --role owner\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "id": "MCMjMiMjMGNhYzZjZGEtMmUwNC00YTNkLTljMTYtOWM5MTQ3MGQ3MDIyIyMxOTpCM25DbkxLd3dDb0dERUFEeVVnUTVrSjVQa2VrdWp5am13eHA3dWhRZUFFMUB0aHJlYWQudGFjdjIjIzc4Y2NmNTMwLWJiZjAtNDdlNC1hYWU2LWRhNWY4YzZmYjE0Mg==",\n    "roles": [\n      "owner"\n    ],\n    "displayName": "John Doe",\n    "visibleHistoryStartDateTime": "0001-01-01T00:00:00Z",\n    "userId": "78ccf530-bbf0-47e4-aae6-da5f8c6fb142",\n    "email": "johndoe@contoso.onmicrosoft.com",\n    "tenantId": "446355e4-e7e3-43d5-82f8-d7ad8272d55b"\n  }\n]\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```text\ndisplayName: John Doe\nemail      : johndoe@contoso.onmicrosoft.com\nid         : MCMjMiMjMGNhYzZjZGEtMmUwNC00YTNkLTljMTYtOWM5MTQ3MGQ3MDIyIyMxOTpCM25DbkxLd3dDb0dERUFEeVVnUTVrSjVQa2VrdWp5am13eHA3dWhRZUFFMUB0aHJlYWQudGFjdjIjIzc4Y2NmNTMwLWJiZjAtNDdlNC1hYWU2LWRhNWY4YzZmYjE0Mg==\nroles      : ["owner"]\nuserId     : 78ccf530-bbf0-47e4-aae6-da5f8c6fb142\n```\n')),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```csv\nid,roles,displayName,userId,email\nMCMjMiMjMGNhYzZjZGEtMmUwNC00YTNkLTljMTYtOWM5MTQ3MGQ3MDIyIyMxOTpCM25DbkxLd3dDb0dERUFEeVVnUTVrSjVQa2VrdWp5am13eHA3dWhRZUFFMUB0aHJlYWQudGFjdjIjIzc4Y2NmNTMwLWJiZjAtNDdlNC1hYWU2LWRhNWY4YzZmYjE0Mg==,"[""owner""]",John Doe,78ccf530-bbf0-47e4-aae6-da5f8c6fb142,johndoe@contoso.onmicrosoft.com\n```\n')))}p.isMDXComponent=!0}}]);