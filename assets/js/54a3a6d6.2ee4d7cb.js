"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73110],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(h,s(s({ref:n},u),{},{components:t})):r.createElement(h,s({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={},s="tenant serviceannouncement health get",o={unversionedId:"cmd/tenant/serviceannouncement/serviceannouncement-health-get",id:"cmd/tenant/serviceannouncement/serviceannouncement-health-get",title:"tenant serviceannouncement health get",description:"Get the health report of a specified service for a tenant",source:"@site/docs/cmd/tenant/serviceannouncement/serviceannouncement-health-get.md",sourceDirName:"cmd/tenant/serviceannouncement",slug:"/cmd/tenant/serviceannouncement/serviceannouncement-health-get",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/serviceannouncement/serviceannouncement-health-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/tenant/serviceannouncement/serviceannouncement-health-get.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"tenant security alerts list",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/security/security-alerts-list"},next:{title:"tenant serviceannouncement health list",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/serviceannouncement/serviceannouncement-health-list"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3},{value:"<code>issues</code> response",id:"issues-response",level:3}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tenant-serviceannouncement-health-get"},"tenant serviceannouncement health get"),(0,a.kt)("p",null,"Get the health report of a specified service for a tenant"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 tenant serviceannouncement health get [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-s, --serviceName <serviceName>"),"\n: The service name to retrieve the health report for."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --issues"),"\n: Return the collection of issues that happened on the service, with detailed information for each issue. Is only returned in JSON output mode."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get the health report for the service ",(0,a.kt)("em",{parentName:"p"},"Exchange Online")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 tenant serviceannouncement health get --serviceName "Exchange Online"\n')),(0,a.kt)("p",null,"Get the health report for the service ",(0,a.kt)("em",{parentName:"p"},"Exchange Online")," including the issues of the service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 tenant serviceannouncement health get --serviceName "Exchange Online" --issues\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("h3",{id:"standard-response"},"Standard response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "service": "Exchange Online",\n  "status": "serviceDegradation",\n  "id": "Exchange"\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nid     : Exchange\nservice: Exchange Online\nstatus : serviceDegradation\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nid,status,service\nExchange,serviceDegradation,Exchange Online\n```\n")),(0,a.kt)("h3",{id:"issues-response"},(0,a.kt)("inlineCode",{parentName:"h3"},"issues")," response"),(0,a.kt)("p",null,"When we make use of the option ",(0,a.kt)("inlineCode",{parentName:"p"},"issues")," the response will differ."),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "service": "Exchange Online",\n  "status": "serviceDegradation",\n  "id": "Exchange",\n  "issues": [\n    {\n      "startDateTime": "2022-08-17T18:27:00Z",\n      "endDateTime": "2022-08-18T16:06:18Z",\n      "lastModifiedDateTime": "2022-08-18T16:46:04.133Z",\n      "title": "Admins\xd4\xc7\xd6 downloaded CSV mailbox usage reports via Microsoft 365 admin center don\xd4\xc7\xd6t contain data prior to August 1, 2022",\n      "id": "EX415080",\n      "impactDescription": "Admins\xd4\xc7\xd6 downloaded CSV mailbox usage reports via Microsoft 365 admin center didn\'t contain data prior to August 1, 2022.",\n      "classification": "advisory",\n      "origin": "microsoft",\n      "status": "serviceRestored",\n      "service": "Exchange Online",\n      "feature": "Windows Live sign-in issue",\n      "featureGroup": "Sign-in",\n      "isResolved": true,\n      "highImpact": null,\n      "details": [],\n      "posts": [\n        {\n          "createdDateTime": "2022-08-17T18:34:54.95Z",\n          "postType": "regular",\n          "description": {\n            "contentType": "html",\n            "content": "Title: Admins\xd4\xc7\xd6 downloaded CSV mailbox usage reports via Microsoft 365 admin center don\xd4\xc7\xd6t contain data prior to August 1, 2022\\\\\\n\\nUser impact: Admins\xd4\xc7\xd6 downloaded CSV mailbox usage reports via Microsoft 365 admin center don\xd4\xc7\xd6t contain data prior to August 1, 2022.\\\\\\n\\nCurrent status: We\'re investigating a potential issue and checking for impact to your organization. We\'ll provide an update within 30 minutes."\n          }\n        }\n      ]\n    }\n  ]\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nid          status              service\n----------  ------------------  -----------------\nExchange    serviceDegradation  Exchange Online\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nid,status,service\nExchange,serviceDegradation,Exchange Online\n```\n")))}p.isMDXComponent=!0}}]);