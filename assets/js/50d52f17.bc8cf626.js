"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[18959],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>g});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function p(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var u=r.createContext({}),i=function(t){var e=r.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):p(p({},e),t)),o},c=function(t){var e=i(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=i(o),m=n,g=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return o?r.createElement(g,p(p({ref:e},c),{},{components:o})):r.createElement(g,p({ref:e},c))}));function g(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,p=new Array(a);p[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[s]="string"==typeof t?t:n,p[1]=l;for(var i=2;i<a;i++)p[i]=o[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},37884:(t,e,o)=>{o.d(e,{ZP:()=>l});var r=o(87462),n=(o(67294),o(3905));const a={toc:[]},p="wrapper";function l(t){let{components:e,...o}=t;return(0,n.kt)(p,(0,r.Z)({},a,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-h, --help [help]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",null,"options"),", ",(0,n.kt)("code",null,"examples"),", ",(0,n.kt)("code",null,"remarks"),", ",(0,n.kt)("code",null,"response"),", ",(0,n.kt)("code",null,"full"),". Default is ",(0,n.kt)("code",null,"full"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--query [query]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"JMESPath query string. See ",(0,n.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-o, --output [output]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output type. ",(0,n.kt)("code",null,"json"),", ",(0,n.kt)("code",null,"text"),", ",(0,n.kt)("code",null,"csv"),", ",(0,n.kt)("code",null,"md"),". Default is ",(0,n.kt)("code",null,"json"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--verbose"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with verbose logging.")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--debug"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with debug logging."))))}l.isMDXComponent=!0},35753:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>u,toc:()=>c});var r=o(87462),n=(o(67294),o(3905)),a=o(37884);const p={},l="aad o365group report activitygroupcounts",u={unversionedId:"cmd/aad/o365group/o365group-report-activitygroupcounts",id:"cmd/aad/o365group/o365group-report-activitygroupcounts",title:"aad o365group report activitygroupcounts",description:"Get the daily total number of groups and how many of them were active based on email conversations, Yammer posts, and SharePoint file activities.",source:"@site/docs/cmd/aad/o365group/o365group-report-activitygroupcounts.mdx",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-report-activitygroupcounts",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-report-activitygroupcounts",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-report-activitygroupcounts.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group report activityfilecounts",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-report-activityfilecounts"},next:{title:"aad o365group report activitystorage",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-report-activitystorage"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},d="wrapper";function m(t){let{components:e,...o}=t;return(0,n.kt)(d,(0,r.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-o365group-report-activitygroupcounts"},"aad o365group report activitygroupcounts"),(0,n.kt)("p",null,"Get the daily total number of groups and how many of them were active based on email conversations, Yammer posts, and SharePoint file activities."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group report activitygroupcounts [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-p, --period <period>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The length of time over which the report is aggregated. Supported values ",(0,n.kt)("code",{parentName:"p"},"D7,D30,D90,D180"))),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-f, --outputFile [outputFile]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Path to the file where the Microsoft 365 Groups activities report should be stored in"))),(0,n.kt)(a.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Get the daily total number of groups and how many of them were active based on activities for the last week"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group report activitygroupcounts --period D7\n")),(0,n.kt)("p",null,"Get the daily total number of groups and how many of them were active based on activities for the last week and exports the report data in the specified path in text format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group report activitygroupcounts --period D7 --output text > "o365groupactivitygroupcounts.txt"\n')),(0,n.kt)("p",null,"Get the daily total number of groups and how many of them were active based on activities for the last week and exports the report data in the specified path in json format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group report activitygroupcounts --period D7 --output json > "o365groupactivitygroupcounts.json"\n')))}m.isMDXComponent=!0}}]);