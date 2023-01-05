"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47742],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var a=r.createContext({}),c=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(a.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,a=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,s(s({ref:e},p),{},{components:n})):r.createElement(f,s({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var a in e)hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.originalType=t,i[d]="string"==typeof t?t:o,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48641:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={},s="todo list list",i={unversionedId:"cmd/todo/list/list-list",id:"cmd/todo/list/list-list",title:"todo list list",description:"Returns a list of Microsoft To Do task lists",source:"@site/docs/cmd/todo/list/list-list.md",sourceDirName:"cmd/todo/list",slug:"/cmd/todo/list/list-list",permalink:"/cli-microsoft365-docusaurus/cmd/todo/list/list-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/todo/list/list-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"todo list get",permalink:"/cli-microsoft365-docusaurus/cmd/todo/list/list-get"},next:{title:"todo list remove",permalink:"/cli-microsoft365-docusaurus/cmd/todo/list/list-remove"}},a={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:c};function d(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"todo-list-list"},"todo list list"),(0,o.kt)("p",null,"Returns a list of Microsoft To Do task lists"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 todo list list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get the list of Microsoft To Do task lists"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 todo list list\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "displayName": "Tasks",\n    "isOwner": true,\n    "isShared": false,\n    "wellknownListName": "defaultList",\n    "id": "AQMkAGYzNjMxYTU4LTJjZjYtNDlhMi1iMzQ2LWVmMTU3YmUzOGM5MAAuAAADMN-7V4K8g0q_adetip1DygEAxMBBaLl1lk_dAn8KkjfXKQAAAgESAAAA"\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\ndisplayName     id                                                                                                      \n--------------  ------------------------------------------------------------------------------------------------------------------------\nTasks           AQMkAGYzNjMxYTU4LTJjZjYtNDlhMi1iMzQ2LWVmMTU3YmUzOGM5MAAuAAADMN-7V4K8g0q_adetip1DygEAxMBBaLl1lk_dAn8KkjfXKQAAAgESAAAA\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\ndisplayName,id\nTasks,AQMkAGYzNjMxYTU4LTJjZjYtNDlhMi1iMzQ2LWVmMTU3YmUzOGM5MAAuAAADMN-7V4K8g0q_adetip1DygEAxMBBaLl1lk_dAn8KkjfXKQAAAgESAAAA\n```\n")))}d.isMDXComponent=!0}}]);