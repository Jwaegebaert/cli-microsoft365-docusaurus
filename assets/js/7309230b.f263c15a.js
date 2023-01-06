"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92530],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>u});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=m(s),d=a,u=g["".concat(l,".").concat(d)]||g[d]||c[d]||o;return s?n.createElement(u,r(r({ref:t},p),{},{components:s})):n.createElement(u,r({ref:t},p))}));function u(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=s.length,r=new Array(o);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[g]="string"==typeof e?e:a,r[1]=i;for(var m=2;m<o;m++)r[m]=s[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},65766:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=s(87462),a=(s(67294),s(3905));const o={},r="teams messagingsettings set",i={unversionedId:"cmd/teams/messagingsettings/messagingsettings-set",id:"cmd/teams/messagingsettings/messagingsettings-set",title:"teams messagingsettings set",description:"Updates messaging settings of a Microsoft Teams team",source:"@site/docs/cmd/teams/messagingsettings/messagingsettings-set.md",sourceDirName:"cmd/teams/messagingsettings",slug:"/cmd/teams/messagingsettings/messagingsettings-set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/messagingsettings/messagingsettings-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/messagingsettings/messagingsettings-set.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams messagingsettings list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/messagingsettings/messagingsettings-list"},next:{title:"teams report deviceusagedistributionusercounts",permalink:"/cli-microsoft365-docusaurus/cmd/teams/report/report-deviceusagedistributionusercounts"}},l={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:m};function g(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"teams-messagingsettings-set"},"teams messagingsettings set"),(0,a.kt)("p",null,"Updates messaging settings of a Microsoft Teams team"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams messagingsettings set [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --teamId <teamId>"),"\n: The ID of the Microsoft Teams team for which to update messaging settings"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--allowUserEditMessages [allowUserEditMessages]"),"\n: Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to allow users to edit messages and to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to disallow it"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--allowUserDeleteMessages [allowUserDeleteMessages]"),"\n: Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to allow users to delete messages and to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to disallow it"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--allowOwnerDeleteMessages [allowOwnerDeleteMessages]"),"\n: Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to allow owner to delete messages and to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to disallow it"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--allowTeamMentions [allowTeamMentions]"),"\n: Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to allow @team or @","[team name]"," mentions and to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to disallow it"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--allowChannelMentions [allowChannelMentions]"),"\n: Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to allow @channel or @","[channel name]"," mentions and to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to disallow it"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Allow users to edit messages in channels"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams messagingsettings set --teamId '00000000-0000-0000-0000-000000000000' --allowUserEditMessages true\n")),(0,a.kt)("p",null,"Disallow users to delete messages in channels"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams messagingsettings set --teamId '00000000-0000-0000-0000-000000000000' --allowUserDeleteMessages false\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."))}g.isMDXComponent=!0}}]);