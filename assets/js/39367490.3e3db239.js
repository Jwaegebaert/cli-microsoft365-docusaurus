"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(r),d=n,y=l["".concat(i,".").concat(d)]||l[d]||m[d]||a;return r?o.createElement(y,p(p({ref:t},u),{},{components:r})):o.createElement(y,p({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[l]="string"==typeof e?e:n,p[1]=s;for(var c=2;c<a;c++)p[c]=r[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={},p="yammer report groupsactivitycounts",s={unversionedId:"cmd/yammer/report/report-groupsactivitycounts",id:"cmd/yammer/report/report-groupsactivitycounts",title:"yammer report groupsactivitycounts",description:"Gets the number of Yammer messages posted, read, and liked in groups",source:"@site/docs/cmd/yammer/report/report-groupsactivitycounts.md",sourceDirName:"cmd/yammer/report",slug:"/cmd/yammer/report/report-groupsactivitycounts",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/report/report-groupsactivitycounts",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/report/report-groupsactivitycounts.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"yammer report deviceusageuserdetail",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/report/report-deviceusageuserdetail"},next:{title:"yammer report groupsactivitydetail",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/report/report-groupsactivitydetail"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:c};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yammer-report-groupsactivitycounts"},"yammer report groupsactivitycounts"),(0,n.kt)("p",null,"Gets the number of Yammer messages posted, read, and liked in groups"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer report groupsactivitycounts [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-p, --period <period>"),"\n: The length of time over which the report is aggregated. Supported values ",(0,n.kt)("inlineCode",{parentName:"p"},"D7,D30,D90,D180")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the report should be stored in"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Gets the number of Yammer messages posted, read, and liked in groups for the last week"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer report groupsactivitycounts --period D7\n")),(0,n.kt)("p",null,"Gets the number of Yammer messages posted, read, and liked in groups for the last week and exports the report data in the specified path in text format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer report groupsactivitycounts --period D7 --output text > "groupsactivitycounts.txt"\n')),(0,n.kt)("p",null,"Gets the number of Yammer messages posted, read, and liked in groups for the last week and exports the report data in the specified path in json format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer report groupsactivitycounts --period D7 --output json > "groupsactivitycounts.json"\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,'=== "JSON"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "Report Refresh Date": "2022-11-04",\n    "Liked": "5",\n    "Posted": "6",\n    "Read": "7",\n    "Report Date": "2022-11-04",\n    "Report Period": "7"\n  }\n]\n```\n')),(0,n.kt)("p",null,'=== "Text"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```text\nReport Refresh Date,Liked,Posted,Read,Report Date,Report Period\n2022-11-10,5,6,7,2022-11-10,7\n```\n")),(0,n.kt)("p",null,'=== "CSV"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```csv\nReport Refresh Date,Liked,Posted,Read,Report Date,Report Period\n2022-11-10,5,6,7,2022-11-10,7\n```\n")))}l.isMDXComponent=!0}}]);