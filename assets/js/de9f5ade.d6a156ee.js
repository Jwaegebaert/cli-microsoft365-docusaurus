"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47451],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>f});var r=o(67294);function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){l(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e){if(null==t)return{};var o,r,l=function(t,e){if(null==t)return{};var o,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||(l[o]=t[o]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(l[o]=t[o])}return l}var s=r.createContext({}),c=function(t){var e=r.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var o=t.components,l=t.mdxType,n=t.originalType,s=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),m=c(o),d=l,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||n;return o?r.createElement(f,i(i({ref:e},u),{},{components:o})):r.createElement(f,i({ref:e},u))}));function f(t,e){var o=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=o.length,i=new Array(n);i[0]=d;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a[m]="string"==typeof t?t:l,i[1]=a;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},73771:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var r=o(87462),l=(o(67294),o(3905));const n={},i="outlook roomlist list",a={unversionedId:"cmd/outlook/roomlist/roomlist-list",id:"cmd/outlook/roomlist/roomlist-list",title:"outlook roomlist list",description:"Get a collection of available roomlists",source:"@site/docs/cmd/outlook/roomlist/roomlist-list.md",sourceDirName:"cmd/outlook/roomlist",slug:"/cmd/outlook/roomlist/roomlist-list",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/roomlist/roomlist-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/outlook/roomlist/roomlist-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"outlook room list",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/room/room-list"},next:{title:"Planner (planner)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/planner"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c};function m(t){let{components:e,...o}=t;return(0,l.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"outlook-roomlist-list"},"outlook roomlist list"),(0,l.kt)("p",null,"Get a collection of available roomlists"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook roomlist list [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Get all roomlists in your tenant"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook roomlist list\n")))}m.isMDXComponent=!0}}]);