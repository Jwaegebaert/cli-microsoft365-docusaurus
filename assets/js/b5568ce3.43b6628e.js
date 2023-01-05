"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51538],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(o),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||n;return o?r.createElement(m,i(i({ref:t},l),{},{components:o})):r.createElement(m,i({ref:t},l))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<n;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},78059:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var r=o(87462),a=(o(67294),o(3905));const n={},i="aad o365group report activityfilecounts",p={unversionedId:"cmd/aad/o365group/o365group-report-activityfilecounts",id:"cmd/aad/o365group/o365group-report-activityfilecounts",title:"aad o365group report activityfilecounts",description:"Get the total number of files and how many of them were active across all group sites associated with an Microsoft 365 Group",source:"@site/docs/cmd/aad/o365group/o365group-report-activityfilecounts.md",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-report-activityfilecounts",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-report-activityfilecounts",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-report-activityfilecounts.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group report activitydetail",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-report-activitydetail"},next:{title:"aad o365group report activitygroupcounts",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-report-activitygroupcounts"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],l={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aad-o365group-report-activityfilecounts"},"aad o365group report activityfilecounts"),(0,a.kt)("p",null,"Get the total number of files and how many of them were active across all group sites associated with an Microsoft 365 Group"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group report activityfilecounts [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p, --period <period>"),"\n: The length of time over which the report is aggregated. Supported values ",(0,a.kt)("inlineCode",{parentName:"p"},"D7,D30,D90,D180")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the Microsoft 365 Groups activities across group workloads report should be stored in"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get the total number of files and how many of them were active across all group sites associated with an Microsoft 365 Group for the last week"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group report activityfilecounts --period D7\n")),(0,a.kt)("p",null,"Get the total number of files and how many of them were active across all group sites associated with an Microsoft 365 Group for the last week and exports the report data in the specified path in text format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group report activityfilecounts --period D7 --output text > "o365groupactivityfilecounts.txt"\n')),(0,a.kt)("p",null,"Get the total number of files and how many of them were active across all group sites associated with an Microsoft 365 Group for the last week and exports the report data in the specified path in json format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group report activityfilecounts --period D7 --output json > "o365groupactivityfilecounts.json"\n')))}u.isMDXComponent=!0}}]);