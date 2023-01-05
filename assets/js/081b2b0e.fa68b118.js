"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15890],{3905:(e,r,s)=>{s.d(r,{Zo:()=>c,kt:()=>m});var t=s(67294);function a(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function n(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function l(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?n(Object(s),!0).forEach((function(r){a(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function i(e,r){if(null==e)return{};var s,t,a=function(e,r){if(null==e)return{};var s,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)s=n[t],r.indexOf(s)>=0||(a[s]=e[s]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)s=n[t],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var o=t.createContext({}),p=function(e){var r=t.useContext(o),s=r;return e&&(s="function"==typeof e?e(r):l(l({},r),e)),s},c=function(e){var r=p(e.components);return t.createElement(o.Provider,{value:r},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var s=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(s),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||n;return s?t.createElement(m,l(l({ref:r},c),{},{components:s})):t.createElement(m,l({ref:r},c))}));function m(e,r){var s=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=s.length,l=new Array(n);l[0]=u;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=s[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,s)}u.displayName="MDXCreateElement"},96561:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var t=s(87462),a=(s(67294),s(3905));const n={},l="spo orgassetslibrary list",i={unversionedId:"cmd/spo/orgassetslibrary/orgassetslibrary-list",id:"cmd/spo/orgassetslibrary/orgassetslibrary-list",title:"spo orgassetslibrary list",description:"List all libraries that are assigned as asset library",source:"@site/docs/cmd/spo/orgassetslibrary/orgassetslibrary-list.md",sourceDirName:"cmd/spo/orgassetslibrary",slug:"/cmd/spo/orgassetslibrary/orgassetslibrary-list",permalink:"/cmd/spo/orgassetslibrary/orgassetslibrary-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/orgassetslibrary/orgassetslibrary-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo orgassetslibrary add",permalink:"/cmd/spo/orgassetslibrary/orgassetslibrary-add"},next:{title:"spo orgassetslibrary remove",permalink:"/cmd/spo/orgassetslibrary/orgassetslibrary-remove"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3},{value:"Response when no library is assigned as asset library",id:"response-when-no-library-is-assigned-as-asset-library",level:3}],c={toc:p};function d(e){let{components:r,...s}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-orgassetslibrary-list"},"spo orgassetslibrary list"),(0,a.kt)("p",null,"List all libraries that are assigned as asset library"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo orgassetslibrary list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"List all libraries that are assigned as asset library"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo orgassetslibrary list\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("h3",{id:"standard-response"},"Standard response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "Url": "/",\n  "Libraries": [\n    {\n      "DisplayName": "Site Assets",\n      "LibraryUrl": "SiteAssets",\n      "ListId": "/Guid(0a327c3f-ba82-4b19-bfa1-628405539420)/",\n      "ThumbnailUrl": null\n    }\n  ]\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```text\nLibraries: [{"DisplayName":"Site Assets","LibraryUrl":"SiteAssets","ListId":"/Guid(0a327c3f-ba82-4b19-bfa1-628405539420)/","ThumbnailUrl":null}]\nUrl      : /\n```\n')),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```csv\nUrl,Libraries\n/,"[{""DisplayName"":""Site Assets"",""LibraryUrl"":""SiteAssets"",""ListId"":""/Guid(0a327c3f-ba82-4b19-bfa1-628405539420)/"",""ThumbnailUrl"":null}]"\n```\n')),(0,a.kt)("h3",{id:"response-when-no-library-is-assigned-as-asset-library"},"Response when no library is assigned as asset library"),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nNo libraries in Organization Assets\n```\n")))}d.isMDXComponent=!0}}]);