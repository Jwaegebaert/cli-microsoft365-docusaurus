"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44820],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(r),c=n,y=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return r?a.createElement(y,s(s({ref:t},l),{},{components:r})):a.createElement(y,s({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},72016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={},s="yammer report deviceusageuserdetail",i={unversionedId:"cmd/yammer/report/report-deviceusageuserdetail",id:"cmd/yammer/report/report-deviceusageuserdetail",title:"yammer report deviceusageuserdetail",description:"Gets details about Yammer device usage by user",source:"@site/docs/cmd/yammer/report/report-deviceusageuserdetail.md",sourceDirName:"cmd/yammer/report",slug:"/cmd/yammer/report/report-deviceusageuserdetail",permalink:"/cmd/yammer/report/report-deviceusageuserdetail",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/report/report-deviceusageuserdetail.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"yammer report deviceusageusercounts",permalink:"/cmd/yammer/report/report-deviceusageusercounts"},next:{title:"yammer report groupsactivitycounts",permalink:"/cmd/yammer/report/report-groupsactivitycounts"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],l={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yammer-report-deviceusageuserdetail"},"yammer report deviceusageuserdetail"),(0,n.kt)("p",null,"Gets details about Yammer device usage by user"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer report deviceusageuserdetail [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-p, --period [period]"),"\n: The length of time over which the report is aggregated. Supported values ",(0,n.kt)("inlineCode",{parentName:"p"},"D7,D30,D90,D180")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-d, --date [date]"),"\n: The date for which you would like to view the users who performed any activity. Supported date format is ",(0,n.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the report should be stored in"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"As this report is only available for the past 28 days, date parameter value should be a date from that range."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Gets details about Yammer device usage by user for the last week"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer report deviceusageuserdetail --period D7\n")),(0,n.kt)("p",null,"Gets details about Yammer device usage by user for July 1, 2019"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer report deviceusageuserdetail --date 2019-07-01\n")),(0,n.kt)("p",null,"Gets details about Yammer device usage by user for the last week and exports the report data in the specified path in text format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer report deviceusageuserdetail --period D7 --output text > "deviceusageuserdetail.txt"\n')),(0,n.kt)("p",null,"Gets details about Yammer device usage by user for the last week and exports the report data in the specified path in json format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer report deviceusageuserdetail --period D7 --output json > "deviceusageuserdetail.json"\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,'=== "JSON"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "Report Refresh Date": "2022-11-09",\n    "User Principal Name": "0439A166C614C2E8C7B4075DC4752054",\n    "Display Name": "2236A6E43D08F619FE695DF3B163A32F",\n    "User State": "",\n    "State Change Date": "",\n    "Last Activity Date": "",\n    "Used Web": "No",\n    "Used Windows Phone": "No",\n    "Used Android Phone": "No",\n    "Used iPhone": "No",\n    "Used iPad": "No",\n    "Used Others": "No",\n    "Report Period": "7"\n  }\n]\n```\n')),(0,n.kt)("p",null,'=== "Text"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```text\nReport Refresh Date,User Principal Name,Display Name,User State,State Change Date,Last Activity Date,Used Web,Used Windows Phone,Used Android Phone,Used iPhone,Used iPad,Used Others,Report Period\n2022-11-09,77E5979DD60BA6EAA53E814DBEEEFA5F,4291DA7C39EE3263E97336B42734A667,,,,No,No,No,No,No,No,7\n```\n")),(0,n.kt)("p",null,'=== "CSV"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```csv\nReport Refresh Date,User Principal Name,Display Name,User State,State Change Date,Last Activity Date,Used Web,Used Windows Phone,Used Android Phone,Used iPhone,Used iPad,Used Others,Report Period\n2022-11-09,77E5979DD60BA6EAA53E814DBEEEFA5F,4291DA7C39EE3263E97336B42734A667,,,,No,No,No,No,No,No,7\n```\n")))}u.isMDXComponent=!0}}]);