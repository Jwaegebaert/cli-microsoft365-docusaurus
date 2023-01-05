"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68208],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||s;return r?a.createElement(f,n(n({ref:t},p),{},{components:r})):a.createElement(f,n({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:o,n[1]=i;for(var l=2;l<s;l++)n[l]=r[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91426:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const s={},n="teams report deviceusageuserdetail",i={unversionedId:"cmd/teams/report/report-deviceusageuserdetail",id:"cmd/teams/report/report-deviceusageuserdetail",title:"teams report deviceusageuserdetail",description:"Gets detail about Microsoft Teams device usage by user.",source:"@site/docs/cmd/teams/report/report-deviceusageuserdetail.md",sourceDirName:"cmd/teams/report",slug:"/cmd/teams/report/report-deviceusageuserdetail",permalink:"/cli-microsoft365-docusaurus/cmd/teams/report/report-deviceusageuserdetail",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/report/report-deviceusageuserdetail.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams report deviceusageusercounts",permalink:"/cli-microsoft365-docusaurus/cmd/teams/report/report-deviceusageusercounts"},next:{title:"teams report directroutingcalls",permalink:"/cli-microsoft365-docusaurus/cmd/teams/report/report-directroutingcalls"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"teams-report-deviceusageuserdetail"},"teams report deviceusageuserdetail"),(0,o.kt)("p",null,"Gets detail about Microsoft Teams device usage by user."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams report deviceusageuserdetail [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-p, --period [period]"),"\n: The length of time over which the report is aggregated. Supported values ",(0,o.kt)("inlineCode",{parentName:"p"},"D7,D30,D90,D180")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-d, --date [date]"),"\n: The date for which you would like to view the users who performed any activity. Supported date format is ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the Microsoft Teams device usage by user report should be stored in"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"As this report is only available for the past 28 days, date parameter value should be a date from that range."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Gets information about Microsoft Teams device usage by user for the last week"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams report deviceusageuserdetail --period D7\n")),(0,o.kt)("p",null,"Gets information about Microsoft Teams device usage by user for July 1, 2019"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams report deviceusageuserdetail --date 2019-07-01\n")),(0,o.kt)("p",null,"Gets information about Microsoft Teams device usage by user for the last week and exports the report data in the specified path in text format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams report deviceusageuserdetail --period D7 --output text > "deviceusageuserdetail.txt"\n')),(0,o.kt)("p",null,"Gets information about Microsoft Teams device usage by user for the last week and exports the report data in the specified path in json format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams report deviceusageuserdetail --period D7 --output json > "deviceusageuserdetail.json"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'``` json\n[\n  {\n    "Report Refresh Date": "2022-10-24",\n    "User Id": "00000000-0000-0000-0000-000000000000",\n    "User Principal Name": "77E5979DD60BA6EAA53E814DBEEEFA5F",\n    "Last Activity Date": "",\n    "Is Deleted": "False",\n    "Deleted Date": "",\n    "Used Web": "No",\n    "Used Windows Phone": "No",\n    "Used iOS": "No",\n    "Used Mac": "No",\n    "Used Android Phone": "No",\n    "Used Windows": "No",\n    "Used  Chrome OS": "No",\n    "Used Linux": "No",\n    "Is Licensed": "Yes",\n    "Report Period": "7"\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"``` text\nReport Refresh Date,User Id,User Principal Name,Last Activity Date,Is Deleted,Deleted Date,Used Web,Used Windows Phone,Used iOS,Used Mac,Used Android Phone,Used Windows,Used  Chrome OS,Used Linux,Is Licensed,Report Period\n2022-10-24,00000000-0000-0000-0000-000000000000,77E5979DD60BA6EAA53E814DBEEEFA5F,,False,,No,No,No,No,No,No,No,No,Yes,7\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"``` text\nReport Refresh Date,User Id,User Principal Name,Last Activity Date,Is Deleted,Deleted Date,Used Web,Used Windows Phone,Used iOS,Used Mac,Used Android Phone,Used Windows,Used  Chrome OS,Used Linux,Is Licensed,Report Period\n2022-10-24,00000000-0000-0000-0000-000000000000,77E5979DD60BA6EAA53E814DBEEEFA5F,,False,,No,No,No,No,No,No,No,No,Yes,7\n```\n")))}u.isMDXComponent=!0}}]);