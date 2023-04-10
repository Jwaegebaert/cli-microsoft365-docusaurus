"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[36792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=s.createContext({}),c=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(i,".").concat(d)]||p[d]||m[d]||r;return n?s.createElement(g,o(o({ref:t},u),{},{components:n})):s.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(87462),a=(n(67294),n(3905));const r={},o="teams guestsettings set",l={unversionedId:"cmd/teams/guestsettings/guestsettings-set",id:"cmd/teams/guestsettings/guestsettings-set",title:"teams guestsettings set",description:"Updates guest settings of a Microsoft Teams team",source:"@site/docs/cmd/teams/guestsettings/guestsettings-set.md",sourceDirName:"cmd/teams/guestsettings",slug:"/cmd/teams/guestsettings/guestsettings-set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/guestsettings/guestsettings-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/guestsettings/guestsettings-set.md",tags:[],version:"current",lastUpdatedAt:1667774068,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{},sidebar:"commands",previous:{title:"teams guestsettings list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/guestsettings/guestsettings-list"},next:{title:"teams meeting attendancereport list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/meeting/meeting-attendancereport-list"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"teams-guestsettings-set"},"teams guestsettings set"),(0,a.kt)("p",null,"Updates guest settings of a Microsoft Teams team"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams guestsettings set [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --teamId <teamId>"),"\n: The ID of the Teams team for which to update settings"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--allowCreateUpdateChannels [allowCreateUpdateChannels]"),"\n: Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to allow guests to create and update channels and to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to disallow it"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--allowDeleteChannels [allowDeleteChannels]"),"\n: Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to allow guests to create and update channels and to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to disallow it"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Allow guests to create and edit channels"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams guestsettings set --teamId '00000000-0000-0000-0000-000000000000' --allowCreateUpdateChannels true\n")),(0,a.kt)("p",null,"Disallow guests to delete channels"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams guestsettings set --teamId '00000000-0000-0000-0000-000000000000' --allowDeleteChannels false\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."))}m.isMDXComponent=!0}}]);