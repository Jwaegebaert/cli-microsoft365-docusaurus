"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11762],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const s={},o="tenant serviceannouncement health list",i={unversionedId:"cmd/tenant/serviceannouncement/serviceannouncement-health-list",id:"cmd/tenant/serviceannouncement/serviceannouncement-health-list",title:"tenant serviceannouncement health list",description:"Gets the health report of all subscribed services for a tenant",source:"@site/docs/cmd/tenant/serviceannouncement/serviceannouncement-health-list.md",sourceDirName:"cmd/tenant/serviceannouncement",slug:"/cmd/tenant/serviceannouncement/serviceannouncement-health-list",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/serviceannouncement/serviceannouncement-health-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/tenant/serviceannouncement/serviceannouncement-health-list.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"tenant serviceannouncement health get",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/serviceannouncement/serviceannouncement-health-get"},next:{title:"tenant serviceannouncement healthissue get",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/serviceannouncement/serviceannouncement-healthissue-get"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3},{value:"<code>issues</code> response",id:"issues-response",level:3}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tenant-serviceannouncement-health-list"},"tenant serviceannouncement health list"),(0,a.kt)("p",null,"Gets the health report of all subscribed services for a tenant"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 tenant serviceannouncement health list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --issues"),"\n: Return the collection of issues that happened on the service, with detailed information for each issue. Is only returned in JSON output mode."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get the health report of all subscribed services for a tenant"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 tenant serviceannouncement health list\n")),(0,a.kt)("p",null,"Get the health report of all subscribed services for a tenant including the issues that happend on each service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 tenant serviceannouncement health list --issues\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("h3",{id:"standard-response"},"Standard response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "service": "Exchange Online",\n    "status": "serviceDegradation",\n    "id": "Exchange"\n  }\n]\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nid          status              service\n----------  ------------------  -----------------\nExchange    serviceDegradation  Exchange Online\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nid,status,service\nExchange,serviceDegradation,Exchange Online\n```\n")),(0,a.kt)("h3",{id:"issues-response"},(0,a.kt)("inlineCode",{parentName:"h3"},"issues")," response"),(0,a.kt)("p",null,"When we make use of the option ",(0,a.kt)("inlineCode",{parentName:"p"},"issues")," the response will differ."),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "service": "Microsoft Defender for Cloud Apps",\n    "status": "serviceOperational",\n    "id": "cloudappsecurity",\n    "issues": [\n      {\n        "startDateTime": "2022-05-13T00:00:00Z",\n        "endDateTime": "2022-05-16T13:10:00Z",\n        "lastModifiedDateTime": "2022-05-17T11:00:42.2Z",\n        "title": "Microsoft Defender for Cloud Apps admin panel changes not propagating to Microsoft Defender for Endpoint",\n        "id": "CS381143",\n        "impactDescription": "Admins may notice that Microsoft Defender for Cloud Apps admin panel changes did not propagate to Microsoft Defender for",\n        "classification": "advisory",\n        "origin": "microsoft",\n        "status": "serviceRestored",\n        "service": "Microsoft Defender for Cloud Apps",\n        "feature": "Cloud App Security",\n        "featureGroup": "Cloud App Security",\n        "isResolved": true,\n        "highImpact": null,\n        "details": [],\n        "posts": [\n          {\n            "createdDateTime": "2022-05-17T08:31:31.113Z",\n            "postType": "regular",\n            "description": {\n              "contentType": "html",\n              "content": "Title: Microsoft Defender for Cloud Apps admin panel changes not propagating to Microsoft Defender for Endpoint\\\\\\n\\nUser Impact: Admins may notice that Microsoft Defender for Cloud Apps admin panel changes do not propagate to Microsoft Defender for Endpoint.\\\\\\n\\nCurrent status: We\'re analyzing system logs to determine the source of the issue.\\\\\\n\\nScope of impact: Impact is specific to users who are served through the affected infrastructure.\\\\\\n\\nNext update by: Tuesday, May 17, 2022, at 10:30 AM UTC"\n            }\n          }\n        ]\n      }\n    ]\n  }\n]\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nid          status              service\n----------  ------------------  -----------------\nExchange    serviceDegradation  Exchange Online\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nid,status,service\nExchange,serviceDegradation,Exchange Online\n```\n")))}u.isMDXComponent=!0}}]);