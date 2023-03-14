"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[59607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,l(l({ref:t},i),{},{components:n})):a.createElement(g,l({ref:t},i))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]},l="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},35142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=n(87462),r=(n(67294),n(3905)),o=n(37884);const l={},s="graph changelog list",c={unversionedId:"cmd/graph/changelog/changelog-list",id:"cmd/graph/changelog/changelog-list",title:"graph changelog list",description:"Gets an overview of specific API-level changes in Microsoft Graph v1.0 and beta",source:"@site/docs/cmd/graph/changelog/changelog-list.mdx",sourceDirName:"cmd/graph/changelog",slug:"/cmd/graph/changelog/changelog-list",permalink:"/cli-microsoft365-docusaurus/cmd/graph/changelog/changelog-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/graph/changelog/changelog-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"tenant serviceannouncement message list",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/serviceannouncement/serviceannouncement-message-list"},next:{title:"graph schemaextension add",permalink:"/cli-microsoft365-docusaurus/cmd/graph/schemaextension/schemaextension-add"}},p={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],d={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"graph-changelog-list"},"graph changelog list"),(0,r.kt)("p",null,"Gets an overview of specific API-level changes in Microsoft Graph v1.0 and beta"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph changelog list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-v, --versions [versions]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Comma-separated list of versions to show changes for. ",(0,r.kt)("code",{parentName:"p"},"Beta, v1.0"),". When no version is selected all versions are returned.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-c, --changeType [changeType]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Change type to show changes for. ",(0,r.kt)("code",{parentName:"p"},"Addition, Change, Deletion"),". When no changeType is selected all change types are returned.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-s, --services [services]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Comma-separated list of services to show changes for. ",(0,r.kt)("code",{parentName:"p"},"Applications, Calendar, Change notifications, Cloud communications, Compliance, Cross-device experiences, Customer booking, Device and app management, Education, Files, Financials, Groups, Identity and access, Mail, Notes, Notifications, People and workplace intelligence, Personal contacts, Reports, Search, Security, Sites and lists, Tasks and plans, Teamwork, To-do tasks, Users, Workbooks and charts"),". When no service is selected all services are returned.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--startDate [startDate]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The startdate used to query for changes. Supported date format is ",(0,r.kt)("code",{parentName:"p"},"YYYY-MM-DD"),". When no date is specified all changes are returned.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--endDate [endDate]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The enddate used to query for changes. Supported date format is ",(0,r.kt)("code",{parentName:"p"},"YYYY-MM-DD"),". When no date is specified all changes are returned."))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This command is based on an API that is currently in preview and is subject to change once the API reached general availability.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get all changes within Microsoft Graph."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph changelog list\n")),(0,r.kt)("p",null,"Get all changes within Microsoft Graph for the services ",(0,r.kt)("em",{parentName:"p"},"Groups")," and ",(0,r.kt)("em",{parentName:"p"},"Users"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph changelog list --services 'Groups,Users'\n")),(0,r.kt)("p",null,"Get all changes within Microsoft Graph that happend between ",(0,r.kt)("em",{parentName:"p"},"2021-01-01")," and ",(0,r.kt)("em",{parentName:"p"},"2021-05-01"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph changelog list --startDate '2021-01-01' --endDate '2021-05-01'\n")))}m.isMDXComponent=!0}}]);