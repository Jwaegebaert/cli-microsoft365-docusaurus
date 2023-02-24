"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[68402],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),c=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,u=d["".concat(m,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},22805:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l="teams channel get",i={unversionedId:"cmd/teams/channel/channel-get",id:"cmd/teams/channel/channel-get",title:"teams channel get",description:"Gets information about the specific Microsoft Teams team channel",source:"@site/docs/cmd/teams/channel/channel-get.md",sourceDirName:"cmd/teams/channel",slug:"/cmd/teams/channel/channel-get",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/channel/channel-get.md",tags:[],version:"current",lastUpdatedAt:1667774068,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{},sidebar:"commands",previous:{title:"teams channel add",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-add"},next:{title:"teams channel list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-list"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],s={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-channel-get"},"teams channel get"),(0,r.kt)("p",null,"Gets information about the specific Microsoft Teams team channel"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--teamId [teamId]"),"\n: The ID of the team to which the channel belongs to. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"teamId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"teamName")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--teamName [teamName]"),"\n: The display name of the team to which the channel belongs to. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"teamId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"teamName")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The ID of the channel for which to retrieve more information. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--name [name]"),"\n: The display name of the channel for which to retrieve more information. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--primary"),"\n: Gets the default channel, General, of a team. If specified, id or name are not needed."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get information about Microsoft Teams team channel with id ",(0,r.kt)("em",{parentName:"p"},"19:",(0,r.kt)("a",{parentName:"em",href:"mailto:493665404ebd4a18adb8a980a31b4986@thread.skype"},"493665404ebd4a18adb8a980a31b4986@thread.skype"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel get --teamId 00000000-0000-0000-0000-000000000000 --id '19:493665404ebd4a18adb8a980a31b4986@thread.skype'\n")),(0,r.kt)("p",null,"Get information about Microsoft Teams team channel with name ",(0,r.kt)("em",{parentName:"p"},"Channel Name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams channel get --teamName "Team Name" --name "Channel Name"\n')),(0,r.kt)("p",null,"Get information about Microsoft Teams team primary channel , i.e. General"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams channel get --teamName "Team Name" --primary\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n{\n  "id": "19:493665404ebd4a18adb8a980a31b4986@thread.tacv2",\n  "createdDateTime": "2022-10-26T15:43:31.954Z",\n  "displayName": "Channel Name",\n  "description": "This team is about Contoso",\n  "isFavoriteByDefault": null,\n  "email": "TeamName@contoso.onmicrosoft.com",\n  "tenantId": "446355e4-e7e3-43d5-82f8-d7ad8272d55b",\n  "webUrl": "https://teams.microsoft.com/l/channel/19%3A493665404ebd4a18adb8a980a31b4986%40thread.tacv2/ChannelName?groupId=aee5a2c9-b1df-45ac-9964-c708e760a045&tenantId=446355e4-e7e3-43d5-82f8-d7ad8272d55b&allowXTenantAccess=False",\n  "membershipType": "standard"\n}\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\ncreatedDateTime    : 2022-10-26T15:43:31.954Z\ndescription        : This team is about the Contoso\ndisplayName        : Channel Name\nemail              : TeamName@ordidev.onmicrosoft.com\nid                 : 19:493665404ebd4a18adb8a980a31b4986@thread.tacv2\nisFavoriteByDefault: null\nmembershipType     : standard\ntenantId           : 446355e4-e7e3-43d5-82f8-d7ad8272d55b\nwebUrl             : https://teams.microsoft.com/l/channel/19%3A493665404ebd4a18adb8a980a31b4986%40thread.tacv2/ChannelName?groupId=aee5a2c9-b1df-45ac-9964-c708e760a045&tenantId=446355e4-e7e3-43d5-82f8-d7ad8272d55b&allowXTenantAccess=False\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nid,createdDateTime,displayName,description,isFavoriteByDefault,email,tenantId,webUrl,membershipType\n19:493665404ebd4a18adb8a980a31b4986@thread.tacv2,2022-10-26T15:43:31.954Z,Channel Name,This team is about Contoso,,TeamName@contoso.onmicrosoft.com,446355e4-e7e3-43d5-82f8-d7ad8272d55b,https://teams.microsoft.com/l/channel/19%3A493665404ebd4a18adb8a980a31b4986%40thread.tacv2/ChannelName?groupId=aee5a2c9-b1df-45ac-9964-c708e760a045&tenantId=446355e4-e7e3-43d5-82f8-d7ad8272d55b&allowXTenantAccess=False,standard\n```\n")))}p.isMDXComponent=!0}}]);