"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[47451],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>f});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function l(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?l(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},d=function(e){var o=c(e.components);return n.createElement(s.Provider,{value:o},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},p=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=r,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||l;return t?n.createElement(f,a(a({ref:o},d),{},{components:t})):n.createElement(f,a({ref:o},d))}));function f(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=p;var i={};for(var s in o)hasOwnProperty.call(o,s)&&(i[s]=o[s]);i.originalType=e,i[m]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},73771:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const l={},a="outlook roomlist list",i={unversionedId:"cmd/outlook/roomlist/roomlist-list",id:"cmd/outlook/roomlist/roomlist-list",title:"outlook roomlist list",description:"Get a collection of available roomlists",source:"@site/docs/cmd/outlook/roomlist/roomlist-list.md",sourceDirName:"cmd/outlook/roomlist",slug:"/cmd/outlook/roomlist/roomlist-list",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/roomlist/roomlist-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/outlook/roomlist/roomlist-list.md",tags:[],version:"current",lastUpdatedAt:1678540853,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{},sidebar:"commands",previous:{title:"outlook room list",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/room/room-list"},next:{title:"planner bucket add",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-add"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:c},m="wrapper";function u(e){let{components:o,...t}=e;return(0,r.kt)(m,(0,n.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"outlook-roomlist-list"},"outlook roomlist list"),(0,r.kt)("p",null,"Get a collection of available roomlists"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook roomlist list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get all roomlists in your tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook roomlist list\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "id": "5502bfbd-83f0-4b31-aa8c-5aebeda06091",\n    "emailAddress": "RoomsBuilding1@contoso.com",\n    "displayName": "Rooms building 1",\n    "geoCoordinates": null,\n    "phone": "",\n    "address": {\n      "street": "Microsoft Way 1",\n      "city": "Redmond",\n      "state": "Washington",\n      "countryOrRegion": "US",\n      "postalCode": "98053"\n    }\n  }\n]\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```txt\ndisplayName : Rooms building 1\nemailAddress: RoomsBuilding1@contoso.com\nid          : 5502bfbd-83f0-4b31-aa8c-5aebeda06091\nphone       :\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nid,displayName,phone,emailAddress\n5502bfbd-83f0-4b31-aa8c-5aebeda06091,Rooms building 1,,RoomsBuilding1@contoso.com\n```\n")),(0,r.kt)("p",null,'=== "Markdown"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```md\n# outlook roomlist list\n\nDate: 27/1/2023\n\n## Rooms building 1 (5502bfbd-83f0-4b31-aa8c-5aebeda06091)\n\nProperty | Value\n---------|-------\nid | 5502bfbd-83f0-4b31-aa8c-5aebeda06091\nemailAddress | RoomsBuilding1@contoso.com\ndisplayName | Rooms building 1\ngeoCoordinates | null\nphone |\naddress | {"street":"Microsoft Way 1","city":"Redmond","state":"Washington","countryOrRegion":"US","postalCode":"98053"}\n```\n')))}u.isMDXComponent=!0}}]);