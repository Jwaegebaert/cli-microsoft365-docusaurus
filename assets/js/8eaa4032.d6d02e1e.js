"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),u=a,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(g,p(p({ref:t},c),{},{components:n})):r.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,p[1]=l;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={},p="spo page control list",l={unversionedId:"cmd/spo/page/page-control-list",id:"cmd/spo/page/page-control-list",title:"spo page control list",description:"Lists controls on the specific modern page",source:"@site/docs/cmd/spo/page/page-control-list.md",sourceDirName:"cmd/spo/page",slug:"/cmd/spo/page/page-control-list",permalink:"/cmd/spo/page/page-control-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/page/page-control-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo page control get",permalink:"/cmd/spo/page/page-control-get"},next:{title:"spo page control set",permalink:"/cmd/spo/page/page-control-set"}},s={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:i};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-page-control-list"},"spo page control list"),(0,a.kt)("p",null,"Lists controls on the specific modern page"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page control list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --pageName <pageName>"),"\n: Name of the page to list controls of."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the page to retrieve is located."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"pageName")," doesn't refer to an existing modern page, you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"File doesn't exists")," error."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"List controls on the modern page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page control list --webUrl https://contoso.sharepoint.com/sites/team-a --pageName home.aspx\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "id": "7558d804-0334-49ca-b14a-53870cf6caae",\n    "type": "Client-side web part",\n    "title": "Bing Maps",\n    "controlType": 3,\n    "order": 1,\n    "controlData": {\n      "controlType": 3,\n      "displayMode": 2,\n      "id": "7558d804-0334-49ca-b14a-53870cf6caae",\n      "position": {\n        "controlIndex": 1,\n        "sectionIndex": 1,\n        "zoneIndex": 1,\n        "sectionFactor": 12,\n        "layoutIndex": 1\n      },\n      "webPartId": "e377ea37-9047-43b9-8cdb-a761be2f8e09",\n      "emphasis": {},\n      "webPartData": {\n        "dataVersion": "1.0",\n        "description": "Display a location on a map using Bing Maps.",\n        "id": "e377ea37-9047-43b9-8cdb-a761be2f8e09",\n        "instanceId": "7558d804-0334-49ca-b14a-53870cf6caae",\n        "properties": {\n          "pushPins": [],\n          "maxNumberOfPushPins": 1,\n          "shouldShowPushPinTitle": true,\n          "zoomLevel": 12,\n          "mapType": "road"\n        },\n        "title": "Bing Maps",\n        "serverProcessedContent": {\n          "htmlStrings": {},\n          "searchablePlainTexts": {},\n          "imageSources": {},\n          "links": {}\n        }\n      }\n    }\n  }\n]\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nid                                    title      type\n------------------------------------  ---------  ---------------------\n7558d804-0334-49ca-b14a-53870cf6caae  Bing Maps  Client-side web part\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nid,type,title\n7558d804-0334-49ca-b14a-53870cf6caae,Client-side web part,Bing Maps\n```\n")))}d.isMDXComponent=!0}}]);