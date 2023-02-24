"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[99845],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=o,y=c["".concat(l,".").concat(d)]||c[d]||m[d]||n;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const n={},i="yammer report groupsactivitydetail",p={unversionedId:"cmd/yammer/report/report-groupsactivitydetail",id:"cmd/yammer/report/report-groupsactivitydetail",title:"yammer report groupsactivitydetail",description:"Gets details about Yammer groups activity by group",source:"@site/docs/cmd/yammer/report/report-groupsactivitydetail.md",sourceDirName:"cmd/yammer/report",slug:"/cmd/yammer/report/report-groupsactivitydetail",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/report/report-groupsactivitydetail",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/report/report-groupsactivitydetail.md",tags:[],version:"current",lastUpdatedAt:1668347314,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{},sidebar:"commands",previous:{title:"yammer report groupsactivitycounts",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/report/report-groupsactivitycounts"},next:{title:"yammer report groupsactivitygroupcounts",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/report/report-groupsactivitygroupcounts"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"yammer-report-groupsactivitydetail"},"yammer report groupsactivitydetail"),(0,o.kt)("p",null,"Gets details about Yammer groups activity by group"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer report groupsactivitydetail [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-p, --period [period]"),"\n: The length of time over which the report is aggregated. Supported values ",(0,o.kt)("inlineCode",{parentName:"p"},"D7,D30,D90,D180")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-d, --date [date]"),"\n: The date for which you would like to view the users who performed any activity. Supported date format is ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the report should be stored in"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"As this report is only available for the past 28 days, date parameter value should be a date from that range."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Gets details about Yammer groups activity by group for the last week"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer report groupsactivitydetail --period D7\n")),(0,o.kt)("p",null,"Gets details about Yammer groups activity by group for July 1, 2019"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer report groupsactivitydetail --date 2019-07-01\n")),(0,o.kt)("p",null,"Gets details about Yammer groups activity by group for the last week and exports the report data in the specified path in text format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer report groupsactivitydetail --period D7 --output text > "groupsactivitydetail.txt"\n')),(0,o.kt)("p",null,"Gets details about Yammer groups activity by group for the last week and exports the report data in the specified path in json format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer report groupsactivitydetail --period D7 --output json > "groupsactivitydetail.json"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "Report Refresh Date": "2022-11-10",\n    "Group Display Name": "7D3654B07E126BBD0D18174368FC243F",\n    "Is Deleted": "False",\n    "Owner Principal Name": "",\n    "Last Activity Date": "",\n    "Group Type": "public",\n    "Office 365 Connected": "No",\n    "Member Count": "3",\n    "Posted Count": "",\n    "Read Count": "",\n    "Liked Count": "",\n    "Report Period": "7"\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\nReport Refresh Date,Group Display Name,Is Deleted,Owner Principal Name,Last Activity Date,Group Type,Office 365 Connected,Member Count,Posted Count,Read Count,Liked Count,Report Period\n2022-11-10,7D3654B07E126BBD0D18174368FC243F,False,,,public,No,3,,,,7\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nReport Refresh Date,Group Display Name,Is Deleted,Owner Principal Name,Last Activity Date,Group Type,Office 365 Connected,Member Count,Posted Count,Read Count,Liked Count,Report Period\n2022-11-10,7D3654B07E126BBD0D18174368FC243F,False,,,public,No,3,,,,7\n```\n")))}m.isMDXComponent=!0}}]);