"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32144],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(r),m=o,f=l["".concat(i,".").concat(m)]||l[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[l]="string"==typeof e?e:o,a[1]=u;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28371:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const s={},a="teams report deviceusageusercounts",u={unversionedId:"cmd/teams/report/report-deviceusageusercounts",id:"cmd/teams/report/report-deviceusageusercounts",title:"teams report deviceusageusercounts",description:"Get the number of Microsoft Teams daily unique users by device type.",source:"@site/docs/cmd/teams/report/report-deviceusageusercounts.md",sourceDirName:"cmd/teams/report",slug:"/cmd/teams/report/report-deviceusageusercounts",permalink:"/cli-microsoft365-docusaurus/cmd/teams/report/report-deviceusageusercounts",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/report/report-deviceusageusercounts.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams report deviceusagedistributionusercounts",permalink:"/cli-microsoft365-docusaurus/cmd/teams/report/report-deviceusagedistributionusercounts"},next:{title:"teams report deviceusageuserdetail",permalink:"/cli-microsoft365-docusaurus/cmd/teams/report/report-deviceusageuserdetail"}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"teams-report-deviceusageusercounts"},"teams report deviceusageusercounts"),(0,o.kt)("p",null,"Get the number of Microsoft Teams daily unique users by device type."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams report deviceusageusercounts [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-p, --period <period>"),"\n: The length of time over which the report is aggregated. Supported values ",(0,o.kt)("inlineCode",{parentName:"p"},"D7,D30,D90,D180")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the Microsoft Teams daily unique users by device type report should be stored in"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Gets the number of Microsoft Teams daily unique users by device type for the last week"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams report deviceusageusercounts --period D7\n")),(0,o.kt)("p",null,"Gets the number of Microsoft Teams daily unique users by device type for the last week and exports the report data in the specified path in text format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams report deviceusageusercounts --period D7 --output text > "deviceusageusercounts.txt"\n')),(0,o.kt)("p",null,"Gets the number of Microsoft Teams daily unique users by device type for the last week and exports the report data in the specified path in json format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams report deviceusageusercounts --period D7 --output json > "deviceusageusercounts.json"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'``` json\n[\n  {\n    "Report Refresh Date": "2022-10-24",\n    "Web": "0",\n    "Windows Phone": "0",\n    "Android Phone": "0",\n    "iOS": "0",\n    "Mac": "0",\n    "Windows": "1",\n    "Chrome OS": "0",\n    "Linux": "0",\n    "Report Date": "2022-10-24",\n    "Report Period": "7"\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"``` text\nReport Refresh Date,Web,Windows Phone,Android Phone,iOS,Mac,Windows,Chrome OS,Linux,Report Date,Report Period\n2022-10-24,0,0,0,0,0,1,0,0,2022-10-24,7\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"``` text\nReport Refresh Date,Web,Windows Phone,Android Phone,iOS,Mac,Windows,Chrome OS,Linux,Report Date,Report Period\n2022-10-24,0,0,0,0,0,1,0,0,2022-10-24,7\n```\n")))}l.isMDXComponent=!0}}]);