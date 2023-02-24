"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[15890],{3905:(e,r,s)=>{s.d(r,{Zo:()=>c,kt:()=>m});var t=s(67294);function a(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function n(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function i(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?n(Object(s),!0).forEach((function(r){a(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function l(e,r){if(null==e)return{};var s,t,a=function(e,r){if(null==e)return{};var s,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)s=n[t],r.indexOf(s)>=0||(a[s]=e[s]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)s=n[t],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var o=t.createContext({}),p=function(e){var r=t.useContext(o),s=r;return e&&(s="function"==typeof e?e(r):i(i({},r),e)),s},c=function(e){var r=p(e.components);return t.createElement(o.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var s=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(s),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||n;return s?t.createElement(m,i(i({ref:r},c),{},{components:s})):t.createElement(m,i({ref:r},c))}));function m(e,r){var s=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=s.length,i=new Array(n);i[0]=b;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=s[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,s)}b.displayName="MDXCreateElement"},96561:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var t=s(87462),a=(s(67294),s(3905));const n={},i="spo orgassetslibrary list",l={unversionedId:"cmd/spo/orgassetslibrary/orgassetslibrary-list",id:"cmd/spo/orgassetslibrary/orgassetslibrary-list",title:"spo orgassetslibrary list",description:"List all libraries that are assigned as asset library",source:"@site/docs/cmd/spo/orgassetslibrary/orgassetslibrary-list.md",sourceDirName:"cmd/spo/orgassetslibrary",slug:"/cmd/spo/orgassetslibrary/orgassetslibrary-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/orgassetslibrary/orgassetslibrary-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/orgassetslibrary/orgassetslibrary-list.md",tags:[],version:"current",lastUpdatedAt:1671253082,formattedLastUpdatedAt:"Dec 17, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo orgassetslibrary add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/orgassetslibrary/orgassetslibrary-add"},next:{title:"spo orgassetslibrary remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/orgassetslibrary/orgassetslibrary-remove"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3},{value:"Response when no library is assigned as asset library",id:"response-when-no-library-is-assigned-as-asset-library",level:3}],c={toc:p},d="wrapper";function u(e){let{components:r,...s}=e;return(0,a.kt)(d,(0,t.Z)({},c,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-orgassetslibrary-list"},"spo orgassetslibrary list"),(0,a.kt)("p",null,"List all libraries that are assigned as asset library"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo orgassetslibrary list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"List all libraries that are assigned as asset library"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo orgassetslibrary list\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("h3",{id:"standard-response"},"Standard response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "Url": "/",\n  "Libraries": [\n    {\n      "DisplayName": "Site Assets",\n      "LibraryUrl": "SiteAssets",\n      "ListId": "/Guid(0a327c3f-ba82-4b19-bfa1-628405539420)/",\n      "ThumbnailUrl": null\n    }\n  ]\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```text\nLibraries: [{"DisplayName":"Site Assets","LibraryUrl":"SiteAssets","ListId":"/Guid(0a327c3f-ba82-4b19-bfa1-628405539420)/","ThumbnailUrl":null}]\nUrl      : /\n```\n')),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```csv\nUrl,Libraries\n/,"[{""DisplayName"":""Site Assets"",""LibraryUrl"":""SiteAssets"",""ListId"":""/Guid(0a327c3f-ba82-4b19-bfa1-628405539420)/"",""ThumbnailUrl"":null}]"\n```\n')),(0,a.kt)("h3",{id:"response-when-no-library-is-assigned-as-asset-library"},"Response when no library is assigned as asset library"),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nNo libraries in Organization Assets\n```\n")))}u.isMDXComponent=!0}}]);