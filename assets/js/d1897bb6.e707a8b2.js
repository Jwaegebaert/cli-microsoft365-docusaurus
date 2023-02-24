"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[31107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(a),f=r,h=s["".concat(i,".").concat(f)]||s[f]||p[f]||o;return a?n.createElement(h,c(c({ref:t},m),{},{components:a})):n.createElement(h,c({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:r,c[1]=l;for(var d=2;d<o;d++)c[d]=a[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},84294:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={},c="teams channel add",l={unversionedId:"cmd/teams/channel/channel-add",id:"cmd/teams/channel/channel-add",title:"teams channel add",description:"Adds a channel to the specified Microsoft Teams team",source:"@site/docs/cmd/teams/channel/channel-add.md",sourceDirName:"cmd/teams/channel",slug:"/cmd/teams/channel/channel-add",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/channel/channel-add.md",tags:[],version:"current",lastUpdatedAt:1667774068,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{},sidebar:"commands",previous:{title:"teams cache remove",permalink:"/cli-microsoft365-docusaurus/cmd/teams/cache/cache-remove"},next:{title:"teams channel get",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-get"}},i={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:d},s="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-channel-add"},"teams channel add"),(0,r.kt)("p",null,"Adds a channel to the specified Microsoft Teams team"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel add [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --teamId [teamId]"),"\n: The ID of the team to add the channel to. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"teamId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"teamName")," but not both"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--teamName [teamName]"),"\n: The display name of the team to add the channel to. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"teamId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"teamName")," but not both"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: The name of the channel to add"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-d, --description [description]"),"\n: The description of the channel to add"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--type [type]"),"\n: Type of channel to create: ",(0,r.kt)("inlineCode",{parentName:"p"},"standard"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"private"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"shared"),". Default ",(0,r.kt)("inlineCode",{parentName:"p"},"standard"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--owner [owner]"),"\n: User with this ID or UPN will be added as owner of the channel. This option is required when type is ",(0,r.kt)("inlineCode",{parentName:"p"},"private")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"shared"),"."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"You can only add a channel to the Microsoft Teams team you are a member of."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Add channel to the specified Microsoft Teams team with id 6703ac8a-c49b-4fd4-8223-28f0ac3a6402"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel add --teamId 6703ac8a-c49b-4fd4-8223-28f0ac3a6402 --name climicrosoft365 --description development\n")),(0,r.kt)("p",null,"Add channel to the specified Microsoft Teams team with name ",(0,r.kt)("em",{parentName:"p"},"Team Name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams channel add --teamName "Team Name" --name climicrosoft365 --description development\n')),(0,r.kt)("p",null,"Add private channel to the specified Microsoft Teams team with owner UPN"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams channel add --teamName "Team Name" --name climicrosoft365 --type private --owner john.doe@contoso.com\n')),(0,r.kt)("p",null,"Add shared channel to the specified Microsoft Teams team with owner ID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel add --teamId 6703ac8a-c49b-4fd4-8223-28f0ac3a6402 --name climicrosoft365 --type shared --owner cc693a7d-4833-4911-a89a-f0fe6e49bf69\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n{\n  "id": "19:591922f67c4341eeb15e49c791822bfe@thread.tacv2",\n  "createdDateTime": "2022-11-05T10:02:44.3930065Z",\n  "displayName": "climicrosoft365",\n  "description": null,\n  "isFavoriteByDefault": false,\n  "email": "",\n  "webUrl": "https://teams.microsoft.com/l/channel/19%3a591922f67c4341eeb15e49c791822bfe%40thread.tacv2/climicrosoft365?groupId=6703ac8a-c49b-4fd4-8223-28f0ac3a6402&tenantId=446355e4-e7e3-43d5-82f8-d7ad8272d55b",\n  "membershipType": "standard"\n}\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\ncreatedDateTime    : 2022-11-05T10:05:31.3998293Z\ndescription        : null\ndisplayName        : climicrosoft365\nemail              :\nid                 : 19:591922f67c4341eeb15e49c791822bfe@thread.tacv2\nisFavoriteByDefault: false\nmembershipType     : standard\nwebUrl             : https://teams.microsoft.com/l/channel/19%3a591922f67c4341eeb15e49c791822bfe%40thread.tacv2/climicrosoft365?groupId=6703ac8a-c49b-4fd4-8223-28f0ac3a6402&tenantId=446355e4-e7e3-43d5-82f8-d7ad8272d55b\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nid,createdDateTime,displayName,description,isFavoriteByDefault,email,webUrl,membershipType\n19:591922f67c4341eeb15e49c791822bfe@thread.tacv2,2022-11-05T12:34:59.6583728Z,climicrosoft365,,,,https://teams.microsoft.com/l/channel/19%3a591922f67c4341eeb15e49c791822bfe%40thread.tacv2/climicrosoft365?groupId=6703ac8a-c49b-4fd4-8223-28f0ac3a6402&tenantId=446355e4-e7e3-43d5-82f8-d7ad8272d55b,standard\n```\n")))}p.isMDXComponent=!0}}]);