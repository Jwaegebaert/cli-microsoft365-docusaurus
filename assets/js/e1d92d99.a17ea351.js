"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82098],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,g=u["".concat(i,".").concat(m)]||u[m]||c[m]||a;return r?o.createElement(g,s(s({ref:t},d),{},{components:r})):o.createElement(g,s({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={},s="spo report siteusagestorage",p={unversionedId:"cmd/spo/report/report-siteusagestorage",id:"cmd/spo/report/report-siteusagestorage",title:"spo report siteusagestorage",description:"Gets the trend of storage allocated and consumed during the reporting period",source:"@site/docs/cmd/spo/report/report-siteusagestorage.md",sourceDirName:"cmd/spo/report",slug:"/cmd/spo/report/report-siteusagestorage",permalink:"/cli-microsoft365-docusaurus/cmd/spo/report/report-siteusagestorage",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/report/report-siteusagestorage.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo report siteusagesitecounts",permalink:"/cli-microsoft365-docusaurus/cmd/spo/report/report-siteusagesitecounts"},next:{title:"spo roledefinition add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/roledefinition/roledefinition-add"}},i={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-report-siteusagestorage"},"spo report siteusagestorage"),(0,n.kt)("p",null,"Gets the trend of storage allocated and consumed during the reporting period"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo report siteusagestorage [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-p, --period <period>"),"\n: The length of time over which the report is aggregated. Supported values ",(0,n.kt)("inlineCode",{parentName:"p"},"D7"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"D30"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"D90"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"D180"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the report should be stored in."),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Gets the trend of storage allocated and consumed during the last week"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo report siteusagestorage --period D7\n")),(0,n.kt)("p",null,"Gets the trend of storage allocated and consumed during the last week and exports the report data in the specified path in text format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo report siteusagestorage --period D7 --output text > "siteusagestorage.txt"\n')),(0,n.kt)("p",null,"Gets the trend of storage allocated and consumed during the last week and exports the report data in the specified path in json format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo report siteusagestorage --period D7 --output json > "siteusagestorage.json"\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,'=== "JSON"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "Report Refresh Date": "2022-11-26",\n    "Site Type": "All",\n    "Storage Used (Byte)": "2348104595",\n    "Report Date": "2022-11-26",\n    "Report Period": "7"\n  }\n]\n```\n')),(0,n.kt)("p",null,'=== "Text"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```text\nReport Refresh Date,Site Type,Storage Used (Byte),Report Date,Report Period\n2022-11-26,All,2348104595,2022-11-26,7\n```\n")),(0,n.kt)("p",null,'=== "CSV"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```csv\nReport Refresh Date,Site Type,Storage Used (Byte),Report Date,Report Period\n2022-11-26,All,2348104595,2022-11-26,7\n```\n")))}u.isMDXComponent=!0}}]);