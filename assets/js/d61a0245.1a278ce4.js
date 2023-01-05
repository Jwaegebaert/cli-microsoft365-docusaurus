"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,g=l["".concat(s,".").concat(d)]||l[d]||m[d]||a;return r?o.createElement(g,p(p({ref:t},c),{},{components:r})):o.createElement(g,p({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:n,p[1]=i;for(var u=2;u<a;u++)p[u]=r[u];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={},p="yammer report groupsactivitygroupcounts",i={unversionedId:"cmd/yammer/report/report-groupsactivitygroupcounts",id:"cmd/yammer/report/report-groupsactivitygroupcounts",title:"yammer report groupsactivitygroupcounts",description:"Gets the total number of groups that existed and how many included group conversation activity",source:"@site/docs/cmd/yammer/report/report-groupsactivitygroupcounts.md",sourceDirName:"cmd/yammer/report",slug:"/cmd/yammer/report/report-groupsactivitygroupcounts",permalink:"/cmd/yammer/report/report-groupsactivitygroupcounts",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/report/report-groupsactivitygroupcounts.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"yammer report groupsactivitydetail",permalink:"/cmd/yammer/report/report-groupsactivitydetail"},next:{title:"yammer user get",permalink:"/cmd/yammer/user/user-get"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:u};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yammer-report-groupsactivitygroupcounts"},"yammer report groupsactivitygroupcounts"),(0,n.kt)("p",null,"Gets the total number of groups that existed and how many included group conversation activity"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer report groupsactivitygroupcounts [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-p, --period <period>"),"\n: The length of time over which the report is aggregated. Supported values ",(0,n.kt)("inlineCode",{parentName:"p"},"D7,D30,D90,D180")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the report should be stored in"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Gets the total number of groups that existed and how many included group conversation activity for the last week"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer report groupsactivitygroupcounts --period D7\n")),(0,n.kt)("p",null,"Gets the total number of groups that existed and how many included group conversation activity for the last week and exports the report data in the specified path in text format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer report groupsactivitygroupcounts --period D7 --output text > "groupsactivitygroupcounts.txt"\n')),(0,n.kt)("p",null,"Gets the total number of groups that existed and how many included group conversation activity for the last week and exports the report data in the specified path in json format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer report groupsactivitygroupcounts --period D7 --output json > "groupsactivitygroupcounts.json"\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,'=== "JSON"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "Report Refresh Date": "2022-11-04",\n    "Total": "1",\n    "Active": "0",\n    "Report Date": "2022-11-04",\n    "Report Period": "7"\n  }\n]\n```\n')),(0,n.kt)("p",null,'=== "Text"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```text\nReport Refresh Date,Total,Active,Report Date,Report Period\n2022-11-10,1,0,2022-11-10,7\n```\n")),(0,n.kt)("p",null,'=== "CSV"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```csv\nReport Refresh Date,Total,Active,Report Date,Report Period\n2022-11-10,1,0,2022-11-10,7\n```\n")))}l.isMDXComponent=!0}}]);