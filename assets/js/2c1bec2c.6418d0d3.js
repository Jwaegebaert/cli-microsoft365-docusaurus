"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[17875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return n?s.createElement(d,o(o({ref:t},u),{},{components:n})):s.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=n(87462),r=(n(67294),n(3905));const a={},o="teams funsettings list",i={unversionedId:"cmd/teams/funsettings/funsettings-list",id:"cmd/teams/funsettings/funsettings-list",title:"teams funsettings list",description:"Lists fun settings for the specified Microsoft Teams team",source:"@site/docs/cmd/teams/funsettings/funsettings-list.md",sourceDirName:"cmd/teams/funsettings",slug:"/cmd/teams/funsettings/funsettings-list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/funsettings/funsettings-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/funsettings/funsettings-list.md",tags:[],version:"current",lastUpdatedAt:1667774068,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{},sidebar:"commands",previous:{title:"teams chat message send",permalink:"/cli-microsoft365-docusaurus/cmd/teams/chat/chat-message-send"},next:{title:"teams funsettings set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/funsettings/funsettings-set"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-funsettings-list"},"teams funsettings list"),(0,r.kt)("p",null,"Lists fun settings for the specified Microsoft Teams team"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams funsettings list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --teamId <teamId>"),"\n: The ID of the team for which to list fun settings"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List fun settings of a Microsoft Teams team"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams funsettings list --teamId 83cece1e-938d-44a1-8b86-918cf6151957\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n{\n  "allowGiphy": true,\n  "giphyContentRating": "moderate",\n  "allowStickersAndMemes": true,\n  "allowCustomMemes": true\n}\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nallowCustomMemes     : true\nallowGiphy           : true\nallowStickersAndMemes: true\ngiphyContentRating   : moderate\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nallowGiphy,giphyContentRating,allowStickersAndMemes,allowCustomMemes\n1,moderate,1,1\n```\n")))}p.isMDXComponent=!0}}]);