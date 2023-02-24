"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[43882],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||s;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const s={},i="teams report deviceusagedistributionusercounts",a={unversionedId:"cmd/teams/report/report-deviceusagedistributionusercounts",id:"cmd/teams/report/report-deviceusagedistributionusercounts",title:"teams report deviceusagedistributionusercounts",description:"Get the number of Microsoft Teams unique users by device type.",source:"@site/docs/cmd/teams/report/report-deviceusagedistributionusercounts.md",sourceDirName:"cmd/teams/report",slug:"/cmd/teams/report/report-deviceusagedistributionusercounts",permalink:"/cli-microsoft365-docusaurus/cmd/teams/report/report-deviceusagedistributionusercounts",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/report/report-deviceusagedistributionusercounts.md",tags:[],version:"current",lastUpdatedAt:1667567406,formattedLastUpdatedAt:"Nov 4, 2022",frontMatter:{},sidebar:"commands",previous:{title:"teams messagingsettings set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/messagingsettings/messagingsettings-set"},next:{title:"teams report deviceusageusercounts",permalink:"/cli-microsoft365-docusaurus/cmd/teams/report/report-deviceusageusercounts"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p},d="wrapper";function l(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"teams-report-deviceusagedistributionusercounts"},"teams report deviceusagedistributionusercounts"),(0,o.kt)("p",null,"Get the number of Microsoft Teams unique users by device type. "),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams report deviceusagedistributionusercounts [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-p, --period <period>"),"\n: The length of time over which the report is aggregated. Supported values ",(0,o.kt)("inlineCode",{parentName:"p"},"D7,D30,D90,D180")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the Microsoft Teams unique users by device type report should be stored in"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Gets the number of Microsoft Teams unique users by device type for the last week"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams report deviceusagedistributionusercounts --period D7\n")),(0,o.kt)("p",null,"Gets the number of Microsoft Teams unique users by device type for the last week and exports the report data in the specified path in text format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams report deviceusagedistributionusercounts --period D7 --output text > "deviceusagedistributionusercounts.txt"\n')),(0,o.kt)("p",null,"Gets the number of Microsoft Teams unique users by device type for the last week and exports the report data in the specified path in json format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams report deviceusagedistributionusercounts --period D7 --output json > "deviceusagedistributionusercounts.json"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'``` json\n[\n  {\n    "Report Refresh Date": "2022-10-24",\n    "Web": "0",\n    "Windows Phone": "0",\n    "Android Phone": "0",\n    "iOS": "0",\n    "Mac": "0",\n    "Windows": "1",\n    "Chrome OS": "0",\n    "Linux": "0",\n    "Report Period": "7"\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"``` text\nReport Refresh Date,Web,Windows Phone,Android Phone,iOS,Mac,Windows,Chrome OS,Linux,Report Period\n2022-10-24,0,0,0,0,0,1,0,0,7\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"``` text\nReport Refresh Date,Web,Windows Phone,Android Phone,iOS,Mac,Windows,Chrome OS,Linux,Report Period\n2022-10-24,0,0,0,0,0,1,0,0,7\n```\n")))}l.isMDXComponent=!0}}]);