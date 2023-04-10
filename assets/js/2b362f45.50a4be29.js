"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[71262],{3905:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>h});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=t.createContext({}),c=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},i=function(e){var n=c(e.components);return t.createElement(m.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(m,".").concat(u)]||d[u]||p[u]||o;return a?t.createElement(h,l(l({ref:n},i),{},{components:a})):t.createElement(h,l({ref:n},i))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93061:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=a(87462),r=(a(67294),a(3905));const o={},l="teams channel member add",s={unversionedId:"cmd/teams/channel/channel-member-add",id:"cmd/teams/channel/channel-member-add",title:"teams channel member add",description:"Adds a specified member in the specified Microsoft Teams private or shared team channel",source:"@site/docs/cmd/teams/channel/channel-member-add.md",sourceDirName:"cmd/teams/channel",slug:"/cmd/teams/channel/channel-member-add",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-member-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/channel/channel-member-add.md",tags:[],version:"current",lastUpdatedAt:1677877248,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams channel list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-list"},next:{title:"teams channel member list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-member-list"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],i={toc:c},d="wrapper";function p(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,t.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-channel-member-add"},"teams channel member add"),(0,r.kt)("p",null,"Adds a specified member in the specified Microsoft Teams private or shared team channel"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel member add [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --teamId [teamId]"),"\n: The ID of the team where the channel is located. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"teamId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"teamName"),", but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--teamName [teamName]"),"\n: The name of the team where the channel is located. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"teamId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"teamName"),", but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-c, --channelId [channelId]"),"\n: The Id of the Microsoft Teams team channel. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"channelId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"channelName"),", but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--channelName [channelName]"),"\n: The display name of the Microsoft Teams team channel. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"channelId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"channelName"),", but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--userId [userId]"),"\n: The user's ID or principal name. You can also pass a comma-separated list of userIds."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--userDisplayName [userDisplayName]"),"\n: The display name of a user. You can also pass a comma-separated list of display names."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--owner"),"\n: Assign the user the owner role. Defaults to member permissions."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"At least one owner must be assigned to a private or shared channel."),(0,r.kt)("p",null,"You can only add members and owners of a team to a private channel."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Add members to a channel based on their id or user principal name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams channel member add --teamId 47d6625d-a540-4b59-a4ab-19b787e40593 --channelId 19:586a8b9e36c4479bbbd378e439a96df2@thread.skype --userId "85a50aa1-e5b8-48ac-b8ce-8e338033c366,john.doe@contoso.com"\n')),(0,r.kt)("p",null,"Add owners to a channel based on their display names"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams channel member add --teamName "Human Resources" --channelName "Private Channel" --userDisplayName "Anne Matthews,John Doe" --owner\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}p.isMDXComponent=!0}}]);