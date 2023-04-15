"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[86877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(r),d=a,f=l["".concat(p,".").concat(d)]||l[d]||m[d]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={},o="teams report useractivitycounts",i={unversionedId:"cmd/teams/report/report-useractivitycounts",id:"cmd/teams/report/report-useractivitycounts",title:"teams report useractivitycounts",description:"Get the number of Microsoft Teams activities by activity type. The activity types are team chat messages, private chat messages, calls, and meetings",source:"@site/docs/cmd/teams/report/report-useractivitycounts.md",sourceDirName:"cmd/teams/report",slug:"/cmd/teams/report/report-useractivitycounts",permalink:"/cli-microsoft365-docusaurus/cmd/teams/report/report-useractivitycounts",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/report/report-useractivitycounts.md",tags:[],version:"current",lastUpdatedAt:1678540844,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams report pstncalls",permalink:"/cli-microsoft365-docusaurus/cmd/teams/report/report-pstncalls"},next:{title:"teams report useractivityusercounts",permalink:"/cli-microsoft365-docusaurus/cmd/teams/report/report-useractivityusercounts"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:c},l="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"teams-report-useractivitycounts"},"teams report useractivitycounts"),(0,a.kt)("p",null,"Get the number of Microsoft Teams activities by activity type. The activity types are team chat messages, private chat messages, calls, and meetings"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams report useractivitycounts [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p, --period <period>"),"\n: The length of time over which the report is aggregated. Supported values ",(0,a.kt)("inlineCode",{parentName:"p"},"D7,D30,D90,D180"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the Microsoft Teams activities by activity type report should be stored in."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Gets the number of Microsoft Teams activities by activity type for the last week."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams report useractivitycounts --period D7\n")),(0,a.kt)("p",null,"Gets the number of Microsoft Teams activities by activity type for the last week and exports the report data in the specified path in text format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams report useractivitycounts --period D7 --output text > "useractivitycounts.txt"\n')),(0,a.kt)("p",null,"Gets the number of Microsoft Teams activities by activity type for the last week and exports the report data in the specified path in json format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams report useractivitycounts --period D7 --output json > "useractivitycounts.json"\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'``` json\n[\n  {\n    "Report Refresh Date": "2022-10-28",\n    "Report Date": "2022-10-28",\n    "Team Chat Messages": "0",\n    "Private Chat Messages": "0",\n    "Calls": "0",\n    "Meetings": "0",\n    "Meetings Organized Count": "0",\n    "Meetings Attended Count": "0",\n    "Audio Duration": "",\n    "Video Duration": "",\n    "Screen Share Duration": "",\n    "Post Messages": "0",\n    "Reply Messages": "0",\n    "Report Period": "7"\n  }\n]\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"``` text\nReport Refresh Date,Report Date,Team Chat Messages,Private Chat Messages,Calls,Meetings,Meetings Organized Count,Meetings Attended Count,Audio Duration,Video Duration,Screen Share Duration,Post Messages,Reply Messages,Report Period\n2022-10-28,2022-10-28,0,0,0,0,0,0,,,,0,0,7\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"``` text\nReport Refresh Date,Report Date,Team Chat Messages,Private Chat Messages,Calls,Meetings,Meetings Organized Count,Meetings Attended Count,Audio Duration,Video Duration,Screen Share Duration,Post Messages,Reply Messages,Report Period\n2022-10-28,2022-10-28,0,0,0,0,0,0,,,,0,0,7\n```\n")),(0,a.kt)("p",null,'=== "Markdown"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```md\nReport Refresh Date,Report Date,Team Chat Messages,Private Chat Messages,Calls,Meetings,Meetings Organized Count,Meetings Attended Count,Audio Duration,Video Duration,Screen Share Duration,Post Messages,Reply Messages,Report Period\n2022-10-28,2022-10-28,0,0,0,0,0,0,,,,0,0,7\n```\n")))}m.isMDXComponent=!0}}]);