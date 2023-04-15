"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[87356],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(o),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||n;return o?r.createElement(g,l(l({ref:t},u),{},{components:o})):r.createElement(g,l({ref:t},u))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4699:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=o(87462),a=(o(67294),o(3905));const n={},l="outlook report mailboxusagedetail",i={unversionedId:"cmd/outlook/report/report-mailboxusagedetail",id:"cmd/outlook/report/report-mailboxusagedetail",title:"outlook report mailboxusagedetail",description:"Gets details about mailbox usage",source:"@site/docs/cmd/outlook/report/report-mailboxusagedetail.md",sourceDirName:"cmd/outlook/report",slug:"/cmd/outlook/report/report-mailboxusagedetail",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/report/report-mailboxusagedetail",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/outlook/report/report-mailboxusagedetail.md",tags:[],version:"current",lastUpdatedAt:1678540853,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{},sidebar:"commands",previous:{title:"outlook report mailappusageversionsusercounts",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/report/report-mailappusageversionsusercounts"},next:{title:"outlook report mailboxusagemailboxcount",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/report/report-mailboxusagemailboxcount"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"outlook-report-mailboxusagedetail"},"outlook report mailboxusagedetail"),(0,a.kt)("p",null,"Gets details about mailbox usage"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook report mailboxusagedetail [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p, --period <period>"),"\n: The length of time over which the report is aggregated. Supported values ",(0,a.kt)("inlineCode",{parentName:"p"},"D7,D30,D90,D180")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the report should be stored in"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Gets details about mailbox usage for the last week"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook report mailboxusagedetail --period D7\n")),(0,a.kt)("p",null,"Gets details about mailbox usage for the last week and exports the report data in the specified path in text format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook report mailboxusagedetail --period D7 --output text > "mailboxusagedetail.txt"\n')),(0,a.kt)("p",null,"Gets details about mailbox usage for the last week and exports the report data in the specified path in json format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook report mailboxusagedetail --period D7 --output json > "mailboxusagedetail.json"\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "Report Refresh Date": "2023-01-24",\n    "User Principal Name": "john.doe@contoso.com",\n    "Display Name": "John Doe",\n    "Is Deleted": "False",\n    "Deleted Date": "",\n    "Created Date": "2023-01-18",\n    "Last Activity Date": "2023-01-24",\n    "Item Count": "191",\n    "Storage Used (Byte)": "5719031",\n    "Issue Warning Quota (Byte)": "105226698752",\n    "Prohibit Send Quota (Byte)": "106300440576",\n    "Prohibit Send/Receive Quota (Byte)": "107374182400",\n    "Deleted Item Count": "25",\n    "Deleted Item Size (Byte)": "582157",\n    "Deleted Item Quota (Byte)": "32212254720",\n    "Has Archive": "False",\n    "Report Period": "7"\n  }\n]\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```txt\nReport Refresh Date,User Principal Name,Display Name,Is Deleted,Deleted Date,Created Date,Last Activity Date,Item Count,Storage Used (Byte),Issue Warning Quota (Byte),Prohibit Send Quota (Byte),Prohibit Send/Receive Quota (Byte),Deleted Item Count,Deleted Item Size (Byte),Deleted Item Quota (Byte),Has Archive,Report Period\n2023-01-24,john.doe@contoso.com,John Doe,False,,2023-01-18,2023-01-24,191,5719031,105226698752,106300440576,107374182400,25,582157,32212254720,False,7\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nReport Refresh Date,User Principal Name,Display Name,Is Deleted,Deleted Date,Created Date,Last Activity Date,Item Count,Storage Used (Byte),Issue Warning Quota (Byte),Prohibit Send Quota (Byte),Prohibit Send/Receive Quota (Byte),Deleted Item Count,Deleted Item Size (Byte),Deleted Item Quota (Byte),Has Archive,Report Period\n2023-01-24,john.doe@contoso.com,John Doe,False,,2023-01-18,2023-01-24,191,5719031,105226698752,106300440576,107374182400,25,582157,32212254720,False,7\n```\n")),(0,a.kt)("p",null,'=== "Markdown"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```md\nReport Refresh Date,User Principal Name,Display Name,Is Deleted,Deleted Date,Created Date,Last Activity Date,Item Count,Storage Used (Byte),Issue Warning Quota (Byte),Prohibit Send Quota (Byte),Prohibit Send/Receive Quota (Byte),Deleted Item Count,Deleted Item Size (Byte),Deleted Item Quota (Byte),Has Archive,Report Period\n2023-01-24,john.doe@contoso.com,John Doe,False,,2023-01-18,2023-01-24,191,5719031,105226698752,106300440576,107374182400,25,582157,32212254720,False,7\n```\n")))}c.isMDXComponent=!0}}]);