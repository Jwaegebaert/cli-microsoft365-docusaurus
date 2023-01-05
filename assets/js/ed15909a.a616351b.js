"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||g[h]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},37074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},s="graph changelog list",l={unversionedId:"cmd/graph/changelog/changelog-list",id:"cmd/graph/changelog/changelog-list",title:"graph changelog list",description:"Gets an overview of specific API-level changes in Microsoft Graph v1.0 and beta",source:"@site/docs/cmd/graph/changelog/changelog-list.md",sourceDirName:"cmd/graph/changelog",slug:"/cmd/graph/changelog/changelog-list",permalink:"/cmd/graph/changelog/changelog-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/graph/changelog/changelog-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"Microsoft Graph (graph)",permalink:"/cmd/groups/graph"},next:{title:"graph schemaextension add",permalink:"/cmd/graph/schemaextension/schemaextension-add"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"graph-changelog-list"},"graph changelog list"),(0,r.kt)("p",null,"Gets an overview of specific API-level changes in Microsoft Graph v1.0 and beta"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph changelog list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-v, --versions [versions]"),"\n: Comma-separated list of versions to show changes for. ",(0,r.kt)("inlineCode",{parentName:"p"},"Beta, v1.0"),". When no version is selected all versions are returned."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-c, --changeType [changeType]"),"\n: Change type to show changes for. ",(0,r.kt)("inlineCode",{parentName:"p"},"Addition, Change, Deletion"),". When no changeType is selected all change types are returned."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-s, --services [services]"),"\n: Comma-separated list of services to show changes for. ",(0,r.kt)("inlineCode",{parentName:"p"},"Applications, Calendar, Change notifications, Cloud communications, Compliance, Cross-device experiences, Customer booking, Device and app management, Education, Files, Financials, Groups, Identity and access, Mail, Notes, Notifications, People and workplace intelligence, Personal contacts, Reports, Search, Security, Sites and lists, Tasks and plans, Teamwork, To-do tasks, Users, Workbooks and charts"),". When no service is selected all services are returned."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--startDate [startDate]"),"\n: The startdate used to query for changes. Supported date format is ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD"),". When no date is specified all changes are returned."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--endDate [endDate]"),"\n: The enddate used to query for changes. Supported date format is ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD"),". When no date is specified all changes are returned."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get all changes within Microsoft Graph."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph changelog list\n")),(0,r.kt)("p",null,"Get all changes within Microsoft Graph for the services ",(0,r.kt)("em",{parentName:"p"},"Groups")," and ",(0,r.kt)("em",{parentName:"p"},"Users"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph changelog list --services 'Groups,Users'\n")),(0,r.kt)("p",null,"Get all changes within Microsoft Graph that happend between ",(0,r.kt)("em",{parentName:"p"},"2021-01-01")," and ",(0,r.kt)("em",{parentName:"p"},"2021-05-01"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph changelog list --startDate '2021-01-01' --endDate '2021-05-01'\n")))}d.isMDXComponent=!0}}]);