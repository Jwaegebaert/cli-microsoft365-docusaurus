"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[88046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),u=o,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||n;return r?a.createElement(f,m(m({ref:t},c),{},{components:r})):a.createElement(f,m({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,m=new Array(n);m[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,m[1]=i;for(var l=2;l<n;l++)m[l]=r[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},20822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const n={},m="teams team remove",i={unversionedId:"cmd/teams/team/team-remove",id:"cmd/teams/team/team-remove",title:"teams team remove",description:"Removes the specified Microsoft Teams team",source:"@site/docs/cmd/teams/team/team-remove.md",sourceDirName:"cmd/teams/team",slug:"/cmd/teams/team/team-remove",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/team/team-remove.md",tags:[],version:"current",lastUpdatedAt:1667567406,formattedLastUpdatedAt:"Nov 4, 2022",frontMatter:{},sidebar:"commands",previous:{title:"teams team list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-list"},next:{title:"teams team set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-set"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"teams-team-remove"},"teams team remove"),(0,o.kt)("p",null,"Removes the specified Microsoft Teams team"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams team remove [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The ID of the Microsoft Teams team to remove. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The display name of the Microsoft Teams team to remove. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming removing the specified team."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"When deleted, Microsoft 365 groups are moved to a temporary container and can be restored within 30 days. After that time, they are permanently deleted. This applies only to Microsoft 365 groups."),(0,o.kt)("p",null,"If the command finds multiple Microsoft Teams teams with the specified name, it will prompt you to disambiguate which team it should use, listing the discovered team IDs."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Removes the specified Microsoft Teams team with id ",(0,o.kt)("em",{parentName:"p"},"00000000-0000-0000-0000-000000000000")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams team remove --id 00000000-0000-0000-0000-000000000000\n")),(0,o.kt)("p",null,"Removes the specified Microsoft Teams team with name ",(0,o.kt)("em",{parentName:"p"},"Team Name")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams team remove --name "Team Name"\n')),(0,o.kt)("p",null,"Removes the specified team without confirmation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams team remove --id 00000000-0000-0000-0000-000000000000 --confirm\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"directory resource type (deleted items): ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/resources/directory?view=graph-rest-1.0"},"https://docs.microsoft.com/en-us/graph/api/resources/directory?view=graph-rest-1.0"))))}d.isMDXComponent=!0}}]);