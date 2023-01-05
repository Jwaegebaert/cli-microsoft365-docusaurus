"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9143],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(r),m=a,g=l["".concat(c,".").concat(m)]||l[m]||d[m]||n;return r?o.createElement(g,p(p({ref:t},s),{},{components:r})):o.createElement(g,p({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,p=new Array(n);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:a,p[1]=i;for(var u=2;u<n;u++)p[u]=r[u];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var o=r(87462),a=(r(67294),r(3905));const n={},p="aad o365group report activitycounts",i={unversionedId:"cmd/aad/o365group/o365group-report-activitycounts",id:"cmd/aad/o365group/o365group-report-activitycounts",title:"aad o365group report activitycounts",description:"Get the number of group activities across group workloads",source:"@site/docs/cmd/aad/o365group/o365group-report-activitycounts.md",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-report-activitycounts",permalink:"/cmd/aad/o365group/o365group-report-activitycounts",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-report-activitycounts.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group renew",permalink:"/cmd/aad/o365group/o365group-renew"},next:{title:"aad o365group report activitydetail",permalink:"/cmd/aad/o365group/o365group-report-activitydetail"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],s={toc:u};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aad-o365group-report-activitycounts"},"aad o365group report activitycounts"),(0,a.kt)("p",null,"Get the number of group activities across group workloads"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group report activitycounts [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p, --period <period>"),"\n: The length of time over which the report is aggregated. Supported values ",(0,a.kt)("inlineCode",{parentName:"p"},"D7,D30,D90,D180")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the Microsoft 365 Groups activities across group workloads report should be stored in"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get the number of group activities across group workloads for the last week"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group report activitycounts --period D7\n")),(0,a.kt)("p",null,"Get the number of group activities across group workloads for the last week and exports the report data in the specified path in text format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group report activitycounts --period D7 --output text > "o365groupactivitycounts.txt"\n')),(0,a.kt)("p",null,"Get the number of group activities across group workloads for the last week and exports the report data in the specified path in json format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group report activitycounts --period D7 --output json > "o365groupactivitycounts.json"\n')))}l.isMDXComponent=!0}}]);