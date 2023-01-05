"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(n),u=r,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(h,m(m({ref:t},s),{},{components:n})):a.createElement(h,m({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,m=new Array(o);m[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,m[1]=l;for(var i=2;i<o;i++)m[i]=n[i];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={},m="teams channel remove",l={unversionedId:"cmd/teams/channel/channel-remove",id:"cmd/teams/channel/channel-remove",title:"teams channel remove",description:"Removes the specified channel in the Microsoft Teams team",source:"@site/docs/cmd/teams/channel/channel-remove.md",sourceDirName:"cmd/teams/channel",slug:"/cmd/teams/channel/channel-remove",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/channel/channel-remove.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams channel member set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-member-set"},next:{title:"teams channel set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-set"}},c={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],s={toc:i};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-channel-remove"},"teams channel remove"),(0,r.kt)("p",null,"Removes the specified channel in the Microsoft Teams team"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel remove [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--teamId [teamId]"),"\n: The ID of the team to which the channel to remove belongs. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"teamId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"teamName")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--teamName [teamName]"),"\n: The display name of the team to which the channel to remove belongs. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"teamId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"teamName")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The ID of the channel to remove. Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The name of the channel to remove. Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"When deleted, Microsoft Teams channels are moved to a recycle bin and can be restored within 30 days. After that time, they are permanently deleted."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Remove the specified Microsoft Teams channel by Id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel remove --id 19:f3dcbb1674574677abcae89cb626f1e6@thread.skype --teamId d66b8110-fcad-49e8-8159-0d488ddb7656\n")),(0,r.kt)("p",null,"Remove the specified Microsoft Teams channel by Id without confirmation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel remove --id 19:f3dcbb1674574677abcae89cb626f1e6@thread.skype --teamId d66b8110-fcad-49e8-8159-0d488ddb7656 --confirm\n")),(0,r.kt)("p",null,"Remove the specified Microsoft Teams channel by Name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel remove --name 'name' --teamName \"Team Name\"\n")),(0,r.kt)("p",null,"Remove the specified Microsoft Teams channel by Name without confirmation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel remove --name 'name' --teamName \"Team Name\" --confirm \n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"directory resource type (deleted items): ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/resources/directory?view=graph-rest-1.0"},"https://docs.microsoft.com/en-us/graph/api/resources/directory?view=graph-rest-1.0"))))}p.isMDXComponent=!0}}]);