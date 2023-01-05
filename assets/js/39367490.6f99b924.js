"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(y,p(p({ref:t},c),{},{components:r})):n.createElement(y,p({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,p[1]=s;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},p="yammer report groupsactivitycounts",s={unversionedId:"cmd/yammer/report/report-groupsactivitycounts",id:"cmd/yammer/report/report-groupsactivitycounts",title:"yammer report groupsactivitycounts",description:"Gets the number of Yammer messages posted, read, and liked in groups",source:"@site/docs/cmd/yammer/report/report-groupsactivitycounts.md",sourceDirName:"cmd/yammer/report",slug:"/cmd/yammer/report/report-groupsactivitycounts",permalink:"/cmd/yammer/report/report-groupsactivitycounts",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/report/report-groupsactivitycounts.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"yammer report deviceusageuserdetail",permalink:"/cmd/yammer/report/report-deviceusageuserdetail"},next:{title:"yammer report groupsactivitydetail",permalink:"/cmd/yammer/report/report-groupsactivitydetail"}},i={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"yammer-report-groupsactivitycounts"},"yammer report groupsactivitycounts"),(0,o.kt)("p",null,"Gets the number of Yammer messages posted, read, and liked in groups"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer report groupsactivitycounts [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-p, --period <period>"),"\n: The length of time over which the report is aggregated. Supported values ",(0,o.kt)("inlineCode",{parentName:"p"},"D7,D30,D90,D180")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the report should be stored in"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Gets the number of Yammer messages posted, read, and liked in groups for the last week"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer report groupsactivitycounts --period D7\n")),(0,o.kt)("p",null,"Gets the number of Yammer messages posted, read, and liked in groups for the last week and exports the report data in the specified path in text format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer report groupsactivitycounts --period D7 --output text > "groupsactivitycounts.txt"\n')),(0,o.kt)("p",null,"Gets the number of Yammer messages posted, read, and liked in groups for the last week and exports the report data in the specified path in json format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer report groupsactivitycounts --period D7 --output json > "groupsactivitycounts.json"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "Report Refresh Date": "2022-11-04",\n    "Liked": "5",\n    "Posted": "6",\n    "Read": "7",\n    "Report Date": "2022-11-04",\n    "Report Period": "7"\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\nReport Refresh Date,Liked,Posted,Read,Report Date,Report Period\n2022-11-10,5,6,7,2022-11-10,7\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nReport Refresh Date,Liked,Posted,Read,Report Date,Report Period\n2022-11-10,5,6,7,2022-11-10,7\n```\n")))}u.isMDXComponent=!0}}]);