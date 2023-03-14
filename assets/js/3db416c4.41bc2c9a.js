"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[68541],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>f});var r=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function p(t,e){if(null==t)return{};var o,r,a=function(t,e){if(null==t)return{};var o,r,a={},n=Object.keys(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},c=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var o=t.components,a=t.mdxType,n=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),s=u(o),m=a,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||n;return o?r.createElement(f,l(l({ref:e},c),{},{components:o})):r.createElement(f,l({ref:e},c))}));function f(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=o.length,l=new Array(n);l[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[s]="string"==typeof t?t:a,l[1]=p;for(var u=2;u<n;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},37884:(t,e,o)=>{o.d(e,{ZP:()=>p});var r=o(87462),a=(o(67294),o(3905));const n={toc:[]},l="wrapper";function p(t){let{components:e,...o}=t;return(0,a.kt)(l,(0,r.Z)({},n,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-h, --help [help]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",null,"options"),", ",(0,a.kt)("code",null,"examples"),", ",(0,a.kt)("code",null,"remarks"),", ",(0,a.kt)("code",null,"response"),", ",(0,a.kt)("code",null,"full"),". Default is ",(0,a.kt)("code",null,"full"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--query [query]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"JMESPath query string. See ",(0,a.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-o, --output [output]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output type. ",(0,a.kt)("code",null,"json"),", ",(0,a.kt)("code",null,"text"),", ",(0,a.kt)("code",null,"csv"),", ",(0,a.kt)("code",null,"md"),". Default is ",(0,a.kt)("code",null,"json"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--verbose"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with verbose logging.")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--debug"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with debug logging."))))}p.isMDXComponent=!0},95646:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=o(87462),a=(o(67294),o(3905)),n=o(37884);const l={},p="aad o365group report activityfilecounts",i={unversionedId:"cmd/aad/o365group/o365group-report-activityfilecounts",id:"cmd/aad/o365group/o365group-report-activityfilecounts",title:"aad o365group report activityfilecounts",description:"Get the total number of files and how many of them were active across all group sites associated with an Microsoft 365 Group",source:"@site/docs/cmd/aad/o365group/o365group-report-activityfilecounts.mdx",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-report-activityfilecounts",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-report-activityfilecounts",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-report-activityfilecounts.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group report activitydetail",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-report-activitydetail"},next:{title:"aad o365group report activitygroupcounts",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-report-activitygroupcounts"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},d="wrapper";function m(t){let{components:e,...o}=t;return(0,a.kt)(d,(0,r.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aad-o365group-report-activityfilecounts"},"aad o365group report activityfilecounts"),(0,a.kt)("p",null,"Get the total number of files and how many of them were active across all group sites associated with an Microsoft 365 Group"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group report activityfilecounts [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-p, --period <period>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The length of time over which the report is aggregated. Supported values ",(0,a.kt)("code",{parentName:"p"},"D7,D30,D90,D180"))),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-f, --outputFile [outputFile]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Path to the file where the Microsoft 365 Groups activities across group workloads report should be stored in"))),(0,a.kt)(n.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get the total number of files and how many of them were active across all group sites associated with an Microsoft 365 Group for the last week"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group report activityfilecounts --period D7\n")),(0,a.kt)("p",null,"Get the total number of files and how many of them were active across all group sites associated with an Microsoft 365 Group for the last week and exports the report data in the specified path in text format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group report activityfilecounts --period D7 --output text > "o365groupactivityfilecounts.txt"\n')),(0,a.kt)("p",null,"Get the total number of files and how many of them were active across all group sites associated with an Microsoft 365 Group for the last week and exports the report data in the specified path in json format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group report activityfilecounts --period D7 --output json > "o365groupactivityfilecounts.json"\n')))}m.isMDXComponent=!0}}]);