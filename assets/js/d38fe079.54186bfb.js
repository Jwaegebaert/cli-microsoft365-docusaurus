"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[60254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},i="spo navigation node get",s={unversionedId:"cmd/spo/navigation/navigation-node-get",id:"cmd/spo/navigation/navigation-node-get",title:"spo navigation node get",description:"Gets information about a specific navigation node.",source:"@site/docs/cmd/spo/navigation/navigation-node-get.md",sourceDirName:"cmd/spo/navigation",slug:"/cmd/spo/navigation/navigation-node-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/navigation/navigation-node-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/navigation/navigation-node-get.md",tags:[],version:"current",lastUpdatedAt:1676071251,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo navigation node add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/navigation/navigation-node-add"},next:{title:"spo navigation node list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/navigation/navigation-node-list"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-navigation-node-get"},"spo navigation node get"),(0,o.kt)("p",null,"Gets information about a specific navigation node."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo navigation node get [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: Absolute URL of the site."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--id <id>"),"\n: Id of the navigation node."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Retrieve information for a specific navigation node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo navigation node get --webUrl https://contoso.sharepoint.com/sites/team-a --id 2209\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n{\n  "AudienceIds": [\n    "0d718612-8407-4d6b-833c-6891a553354f",\n    "f864446f-b4d7-475a-a2ba-1080c6474020"\n  ],\n  "CurrentLCID": 1033,\n  "Id": 2209,\n  "IsDocLib": true,\n  "IsExternal": false,\n  "IsVisible": true,\n  "ListTemplateType": 100,\n  "Title": "Work Status",\n  "Url": "/sites/team-a/Lists/Work Status/AllItems.aspx"\n}\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```text\nAudienceIds     : ["0d718612-8407-4d6b-833c-6891a553354f", "f864446f-b4d7-475a-a2ba-1080c6474020"]\nCurrentLCID     : 1033\nId              : 2209\nIsDocLib        : true\nIsExternal      : false\nIsVisible       : true\nListTemplateType: 100\nTitle           : Work Status\nUrl             : /sites/team-a/Lists/Work Status/AllItems.aspx\n```\n')),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```csv\nAudienceIds,CurrentLCID,Id,IsDocLib,IsExternal,IsVisible,ListTemplateType,Title,Url\n[""0d718612-8407-4d6b-833c-6891a553354f"", ""f864446f-b4d7-475a-a2ba-1080c6474020""],1033,2209,1,,1,100,Work Status,/sites/team-a/Lists/Work Status/AllItems.aspx\n```\n')),(0,o.kt)("p",null,'=== "Markdown"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```md\n# spo navigation node get --webUrl "https://contoso.sharepoint.com/sites/team-a" --id "2209"\n\nDate: 1/29/2023\n\n## Work Status (2209)\n\nProperty | Value\n---------|-------\nAudienceIds | ["0d718612-8407-4d6b-833c-6891a553354f", "f864446f-b4d7-475a-a2ba-1080c6474020"]\nCurrentLCID | 1033\nId | 2209\nIsDocLib | true\nIsExternal | false\nIsVisible | true\nListTemplateType | 100\nTitle | Work Status\nUrl | /sites/team-a/Lists/Work Status/AllItems.aspx\n```\n')))}u.isMDXComponent=!0}}]);