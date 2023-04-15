"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[67140],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>k});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=s(o),d=n,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||a;return o?r.createElement(k,p(p({ref:t},i),{},{components:o})):r.createElement(k,p({ref:t},i))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,p=new Array(a);p[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,p[1]=l;for(var s=2;s<a;s++)p[s]=o[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},83930:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={},p="outlook report mailappusageusercounts",l={unversionedId:"cmd/outlook/report/report-mailappusageusercounts",id:"cmd/outlook/report/report-mailappusageusercounts",title:"outlook report mailappusageusercounts",description:"Gets the count of unique users that connected to Exchange Online using any email app",source:"@site/docs/cmd/outlook/report/report-mailappusageusercounts.md",sourceDirName:"cmd/outlook/report",slug:"/cmd/outlook/report/report-mailappusageusercounts",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/report/report-mailappusageusercounts",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/outlook/report/report-mailappusageusercounts.md",tags:[],version:"current",lastUpdatedAt:1678540853,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{},sidebar:"commands",previous:{title:"outlook report mailappusageappsusercounts",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/report/report-mailappusageappsusercounts"},next:{title:"outlook report mailappusageuserdetail",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/report/report-mailappusageuserdetail"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],i={toc:s},c="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"outlook-report-mailappusageusercounts"},"outlook report mailappusageusercounts"),(0,n.kt)("p",null,"Gets the count of unique users that connected to Exchange Online using any email app"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook report mailappusageusercounts [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-p, --period <period>"),"\n: The length of time over which the report is aggregated. Supported values ",(0,n.kt)("inlineCode",{parentName:"p"},"D7,D30,D90,D180")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the report should be stored in"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Gets the count of unique users that connected to Exchange Online using any email app for the last week"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook report mailappusageusercounts --period D7\n")),(0,n.kt)("p",null,"Gets the count of unique users that connected to Exchange Online using any email app for the last week and exports the report data in the specified path in text format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook report mailappusageusercounts --period D7 --output text > "mailappusageusercounts.txt"\n')),(0,n.kt)("p",null,"Gets the count of unique users that connected to Exchange Online using any email app for the last week and exports the report data in the specified path in json format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook report mailappusageusercounts --period D7 --output json > "mailappusageusercounts.json"\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,'=== "JSON"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "Report Refresh Date": "2023-01-25",\n    "Mail For Mac": "",\n    "Outlook For Mac": "2",\n    "Outlook For Windows": "99",\n    "Outlook For Mobile": "46",\n    "Other For Mobile": "",\n    "Outlook For Web": "",\n    "POP3 App": "",\n    "IMAP4 App": "",\n    "SMTP App": "",\n    "Report Date": "2023-01-19",\n    "Report Period": "7"\n  }\n]\n```\n')),(0,n.kt)("p",null,'=== "Text"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```txt\nReport Refresh Date,Mail For Mac,Outlook For Mac,Outlook For Windows,Outlook For Mobile,Other For Mobile,Outlook For Web,POP3 App,IMAP4 App,SMTP App,Report Date,Report Period\n2023-01-25,,2,99,46,,,,,,2023-01-19,7\n```\n")),(0,n.kt)("p",null,'=== "CSV"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```csv\nReport Refresh Date,Mail For Mac,Outlook For Mac,Outlook For Windows,Outlook For Mobile,Other For Mobile,Outlook For Web,POP3 App,IMAP4 App,SMTP App,Report Date,Report Period\n2023-01-25,,2,99,46,,,,,,2023-01-19,7\n```\n")),(0,n.kt)("p",null,'=== "Markdown"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```md\nReport Refresh Date,Mail For Mac,Outlook For Mac,Outlook For Windows,Outlook For Mobile,Other For Mobile,Outlook For Web,POP3 App,IMAP4 App,SMTP App,Report Date,Report Period\n2023-01-25,,2,99,46,,,,,,2023-01-19,7\n```\n")))}m.isMDXComponent=!0}}]);