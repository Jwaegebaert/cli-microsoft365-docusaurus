"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47451],{3905:(t,e,o)=>{o.d(e,{Zo:()=>m,kt:()=>f});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)o=l[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)o=l[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var s=r.createContext({}),c=function(t){var e=r.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},m=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,m=a(t,["components","mdxType","originalType","parentName"]),p=c(o),d=n,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return o?r.createElement(f,i(i({ref:e},m),{},{components:o})):r.createElement(f,i({ref:e},m))}));function f(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=o.length,i=new Array(l);i[0]=d;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a[p]="string"==typeof t?t:n,i[1]=a;for(var c=2;c<l;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},73771:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const l={},i="outlook roomlist list",a={unversionedId:"cmd/outlook/roomlist/roomlist-list",id:"cmd/outlook/roomlist/roomlist-list",title:"outlook roomlist list",description:"Get a collection of available roomlists",source:"@site/docs/cmd/outlook/roomlist/roomlist-list.md",sourceDirName:"cmd/outlook/roomlist",slug:"/cmd/outlook/roomlist/roomlist-list",permalink:"/cmd/outlook/roomlist/roomlist-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/outlook/roomlist/roomlist-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"outlook room list",permalink:"/cmd/outlook/room/room-list"},next:{title:"Planner (planner)",permalink:"/cmd/groups/planner"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],m={toc:c};function p(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"outlook-roomlist-list"},"outlook roomlist list"),(0,n.kt)("p",null,"Get a collection of available roomlists"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook roomlist list [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Get all roomlists in your tenant"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook roomlist list\n")))}p.isMDXComponent=!0}}]);