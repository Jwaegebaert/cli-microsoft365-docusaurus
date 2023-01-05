"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53706],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(a),d=r,f=p["".concat(m,".").concat(d)]||p[d]||u[d]||s;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const s={},i="teams team set",o={unversionedId:"cmd/teams/team/team-set",id:"cmd/teams/team/team-set",title:"teams team set",description:"Updates settings of a Microsoft Teams team",source:"@site/docs/cmd/teams/team/team-set.md",sourceDirName:"cmd/teams/team",slug:"/cmd/teams/team/team-set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/team/team-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams team remove",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-remove"},next:{title:"teams team unarchive",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-unarchive"}},m={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-team-set"},"teams team set"),(0,r.kt)("p",null,"Updates settings of a Microsoft Teams team"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams team set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The ID of the Microsoft Teams team for which to update settings"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The display name for the Microsoft Teams team for which to update settings"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--description [description]"),"\n: The description for the Microsoft Teams team"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--mailNickName [mailNickName]"),"\n: The mail alias for the Microsoft Teams team"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--classification [classification]"),"\n: The classification for the Microsoft Teams team"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--visibility [visibility]"),"\n: The visibility of the Microsoft Teams team. Valid values ",(0,r.kt)("inlineCode",{parentName:"p"},"Private,Public")),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Set Microsoft Teams team visibility as Private"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams team set --id "00000000-0000-0000-0000-000000000000" --visibility Private\n')),(0,r.kt)("p",null,"Set Microsoft Teams team classification as MBI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams team set --id "00000000-0000-0000-0000-000000000000" --classification MBI\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}p.isMDXComponent=!0}}]);