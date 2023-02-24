"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[76257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={},o="teams meeting attendancereport list",l={unversionedId:"cmd/teams/meeting/meeting-attendancereport-list",id:"cmd/teams/meeting/meeting-attendancereport-list",title:"teams meeting attendancereport list",description:"Lists all attendance reports for a given meeting",source:"@site/docs/cmd/teams/meeting/meeting-attendancereport-list.md",sourceDirName:"cmd/teams/meeting",slug:"/cmd/teams/meeting/meeting-attendancereport-list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/meeting/meeting-attendancereport-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/meeting/meeting-attendancereport-list.md",tags:[],version:"current",lastUpdatedAt:1670195685,formattedLastUpdatedAt:"Dec 4, 2022",frontMatter:{},sidebar:"commands",previous:{title:"teams guestsettings set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/guestsettings/guestsettings-set"},next:{title:"teams meeting get",permalink:"/cli-microsoft365-docusaurus/cmd/teams/meeting/meeting-get"}},s={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"teams-meeting-attendancereport-list"},"teams meeting attendancereport list"),(0,a.kt)("p",null,"Lists all attendance reports for a given meeting"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams meeting attendancereport list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --userId [userId]"),"\n: The id of the user, omit to list attendance reports for current signed in user. Use either  ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"userName")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"email"),", but not multiple."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --userName [userName]"),"\n: The name of the user, omit to list attendance reports for current signed in user. Use either ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"userName")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"email"),", but not multiple."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--email [email]"),"\n: The email of the user, omit to list attendance reports for current signed in user. Use either ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"userName")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"email"),", but not multiple."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-m, --meetingId <meetingId>"),"\n: The Id of the meeting."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Lists all attendance reports made for the current signed in user and Microsoft Teams meeting with given id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams meeting attendancereport list --meetingId MSo4NmY0MWZhMi1kYjUxLTQyMTUtYjE3Zi1lYzY3NGQ2MjQzNjYqMCoqMTk6bWVldGluZ19OamMwWW1Zd05UVXROMlJoTlMwME0yRmhMV0V6T1RndE9HVmxNbVl4TkdVd05tUTNAdGhyZWFkLnYy\n")),(0,a.kt)("p",null,"Lists all attendance reports made for the ",(0,a.kt)("a",{parentName:"p",href:"mailto:garthf@contoso.com"},"garthf@contoso.com")," and Microsoft Teams meeting with given id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams meeting attendancereport list --userName garthf@contoso.com --meetingId MSo4NmY0MWZhMi1kYjUxLTQyMTUtYjE3Zi1lYzY3NGQ2MjQzNjYqMCoqMTk6bWVldGluZ19OamMwWW1Zd05UVXROMlJoTlMwME0yRmhMV0V6T1RndE9HVmxNbVl4TkdVd05tUTNAdGhyZWFkLnYy\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "id": "ae6ddf54-5d48-4448-a7a9-780eee17fa13",\n    "totalParticipantCount": 6,\n    "meetingStartDateTime": "2022-11-22T22:46:46.981Z",\n    "meetingEndDateTime": "2022-11-22T22:47:07.703Z"\n  }\n]\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nid                                    totalParticipantCount\n------------------------------------  ---------------------\nae6ddf54-5d48-4448-a7a9-780eee17fa13  6\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nid,totalParticipantCount\nae6ddf54-5d48-4448-a7a9-780eee17fa13,6\n```\n")))}d.isMDXComponent=!0}}]);