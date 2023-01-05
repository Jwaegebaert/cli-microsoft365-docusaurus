"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16435],{3905:(e,t,s)=>{s.d(t,{Zo:()=>g,kt:()=>d});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var o=n.createContext({}),m=function(e){var t=n.useContext(o),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},g=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=m(s),u=a,d=c["".concat(o,".").concat(u)]||c[u]||p[u]||r;return s?n.createElement(d,i(i({ref:t},g),{},{components:s})):n.createElement(d,i({ref:t},g))}));function d(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,i=new Array(r);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<r;m++)i[m]=s[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}u.displayName="MDXCreateElement"},52810:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=s(87462),a=(s(67294),s(3905));const r={},i="teams messagingsettings list",l={unversionedId:"cmd/teams/messagingsettings/messagingsettings-list",id:"cmd/teams/messagingsettings/messagingsettings-list",title:"teams messagingsettings list",description:"Lists messaging settings for a Microsoft Teams team",source:"@site/docs/cmd/teams/messagingsettings/messagingsettings-list.md",sourceDirName:"cmd/teams/messagingsettings",slug:"/cmd/teams/messagingsettings/messagingsettings-list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/messagingsettings/messagingsettings-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/messagingsettings/messagingsettings-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams message reply list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/message/message-reply-list"},next:{title:"teams messagingsettings set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/messagingsettings/messagingsettings-set"}},o={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],g={toc:m};function c(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"teams-messagingsettings-list"},"teams messagingsettings list"),(0,a.kt)("p",null,"Lists messaging settings for a Microsoft Teams team"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams messagingsettings list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --teamId"),"\n: The ID of the team for which to get the messaging settings"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get messaging settings for a Microsoft Teams team"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams messagingsettings list --teamId 2609af39-7775-4f94-a3dc-0dd67657e900\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'``` json\n{\n  "allowUserEditMessages": true,\n  "allowUserDeleteMessages": true,\n  "allowOwnerDeleteMessages": true,\n  "allowTeamMentions": true,\n  "allowChannelMentions": true\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"``` text\nallowChannelMentions    : true\nallowOwnerDeleteMessages: true\nallowTeamMentions       : true\nallowUserDeleteMessages : true\nallowUserEditMessages   : true\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"``` text\nallowUserEditMessages,allowUserDeleteMessages,allowOwnerDeleteMessages,allowTeamMentions,allowChannelMentions\n1,1,1,1,1\n```\n")))}c.isMDXComponent=!0}}]);