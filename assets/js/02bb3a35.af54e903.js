"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34307],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),c=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,h=p["".concat(m,".").concat(u)]||p[u]||d[u]||i;return a?n.createElement(h,o(o({ref:t},l),{},{components:a})):n.createElement(h,o({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o="teams team archive",s={unversionedId:"cmd/teams/team/team-archive",id:"cmd/teams/team/team-archive",title:"teams team archive",description:"Archives specified Microsoft Teams team",source:"@site/docs/cmd/teams/team/team-archive.md",sourceDirName:"cmd/teams/team",slug:"/cmd/teams/team/team-archive",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-archive",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/team/team-archive.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams team app list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-app-list"},next:{title:"teams team clone",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-clone"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],l={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-team-archive"},"teams team archive"),(0,r.kt)("p",null,"Archives specified Microsoft Teams team"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams team archive [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The ID of the Microsoft Teams team to archive. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The display name of the Microsoft Teams team to archive. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--shouldSetSpoSiteReadOnlyForMembers"),"\n: Sets the permissions for team members to read-only on the SharePoint Online site associated with the team."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"Using this command, global admins and Microsoft Teams service admins can access teams that they are not a member of."),(0,r.kt)("p",null,"If the command finds multiple Microsoft Teams teams with the specified name, it will prompt you to disambiguate which team it should use, listing the discovered team IDs."),(0,r.kt)("p",null,"When a team is archived, users can no longer send or like messages on any channel in the team, edit the team's name, description, or other settings, or in general make most changes to the team. Membership changes to the team continue to be allowed."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Archive the specified Microsoft Teams team with id ",(0,r.kt)("em",{parentName:"p"},"6f6fd3f7-9ba5-4488-bbe6-a789004d0d55")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams team archive --id 6f6fd3f7-9ba5-4488-bbe6-a789004d0d55\n")),(0,r.kt)("p",null,"Archive the specified Microsoft Teams team with name ",(0,r.kt)("em",{parentName:"p"},"Team Name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams team archive --name "Team Name"\n')),(0,r.kt)("p",null,"Archive the specified Microsoft Teams team and set permissions for team members to read-only on the SharePoint Online site associated with the team"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams team archive --id 6f6fd3f7-9ba5-4488-bbe6-a789004d0d55 --shouldSetSpoSiteReadOnlyForMembers\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}p.isMDXComponent=!0}}]);