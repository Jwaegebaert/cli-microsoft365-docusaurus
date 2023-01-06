"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={},r="todo task add",s={unversionedId:"cmd/todo/task/task-add",id:"cmd/todo/task/task-add",title:"todo task add",description:"Adds a task to a Microsoft To Do list",source:"@site/docs/cmd/todo/task/task-add.md",sourceDirName:"cmd/todo/task",slug:"/cmd/todo/task/task-add",permalink:"/cli-microsoft365-docusaurus/cmd/todo/task/task-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/todo/task/task-add.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"todo list set",permalink:"/cli-microsoft365-docusaurus/cmd/todo/list/list-set"},next:{title:"todo task get",permalink:"/cli-microsoft365-docusaurus/cmd/todo/task/task-get"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"todo-task-add"},"todo task add"),(0,o.kt)("p",null,"Adds a task to a Microsoft To Do list"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 todo task add [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-t, --title <title>"),"\n: The title of the task."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--listName [listName]"),"\n: The name of the list in which to create the task. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"listName")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"listId"),", but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--listId [listId]"),"\n: The id of the list in which to create the task. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"listName")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"listId"),", but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--bodyContent [bodyContent]"),"\n: The body content of the task. In the UI this is called 'notes'."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--bodyContentType [bodyContentType]"),"\n: The type of the body content. Possible values are ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"html"),". Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"text"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--dueDateTime [dueDateTime]"),"\n: The date when the task is due. This should be defined as a valid ISO 8601 string in the UTC time zone. Only date value is needed, time value is always ignored."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--importance [importance]"),"\n: The importance of the task. Possible values are: ",(0,o.kt)("inlineCode",{parentName:"p"},"low"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"normal"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"high"),". Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"normal"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--reminderDateTime [reminderDateTime]"),"\n: The date and time for a reminder alert of the task to occur. This should be defined as a valid ISO 8601 string in the UTC time zone."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Add a task to Microsoft To Do tasks list with with a specific name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 todo task add --title "New task" --listName "My task list"\n')),(0,o.kt)("p",null,"Add a task to a Microsoft To Do tasks list with a specific id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 todo task add --title "New task" --listId "AQMkADlhMTRkOGEzLWQ1M2QtNGVkNS04NjdmLWU0NzJhMjZmZWNmMwAuAAADKvwNgAMNPE_zFNRJXVrU1wEAhHKQZHItDEOVCn8U3xuA2AABmQeVPwAAAA=="\n')),(0,o.kt)("p",null,"Create a new task with bodyContent and reminder and flag it as important"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 todo task add --title "New task" --listName "My task list" --bodyContent "I should not forget this" --reminderDateTime 2023-01-01T12:00:00Z --importance high\n')),(0,o.kt)("p",null,"Create a new task with a specific due date"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 todo task add --title "New task" --listId "AQMkADlhMTRkOGEzLWQ1M2QtNGVkNS04NjdmLWU0NzJhMjZmZWNmMwAuAAADKvwNgAMNPE_zFNRJXVrU1wEAhHKQZHItDEOVCn8U3xuA2AABmQeVPwAAAA==" --dueDateTime 2023-01-01\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("h3",{id:"standard-response"},"Standard response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n{\n  "importance": "high",\n  "isReminderOn": true,\n  "status": "notStarted",\n  "title": "New task",\n  "createdDateTime": "2022-10-29T10:54:06.3672421Z",\n  "lastModifiedDateTime": "2022-10-29T10:54:06.5078837Z",\n  "hasAttachments": false,\n  "categories": [],\n  "id": "AAMkAGYzNjMxYTU4LTJjZjYtNDlhMi1iMzQ2LWVmMTU3YmUzOGM5MABGAAAAAAAw3-tXgryDSr5p162KnUPKBwDEwEFouXWWT50CfwqSN9cpAAEX8ECDAADEwEFouXWWT50CfwqSN9cpAAEX8GuPAAA=",\n  "body": {\n    "content": "I should not forget this",\n    "contentType": "text"\n  },\n  "dueDateTime": {\n    "dateTime": "2023-01-01T00:00:00.0000000",\n    "timeZone": "UTC"\n  },\n  "reminderDateTime": {\n    "dateTime": "2023-01-01T12:00:00.0000000",\n    "timeZone": "UTC"\n  }\n}\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```text\nbody                : {"content":"I should not forget this","contentType":"text"}\ncategories          : []\ncreatedDateTime     : 2022-10-29T10:54:06.3672421Z\ndueDateTime         : {"dateTime":"2023-01-01T00:00:00.0000000","timeZone":"UTC"}\nhasAttachments      : false\nid                  : AAMkAGYzNjMxYTU4LTJjZjYtNDlhMi1iMzQ2LWVmMTU3YmUzOGM5MABGAAAAAAAw3-tXgryDSr5p162KnUPKBwDEwEFouXWWT50CfwqSN9cpAAEX8ECDAADEwEFouXWWT50CfwqSN9cpAAEX8GuPAAA=\nimportance          : high\nisReminderOn        : true\nlastModifiedDateTime: 2022-10-29T10:54:06.5078837Z\nreminderDateTime    : {"dateTime":"2023-01-01T12:00:00.0000000","timeZone":"UTC"}\nstatus              : notStarted\ntitle               : New task\n```\n')),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```csv\nimportance,isReminderOn,status,title,createdDateTime,lastModifiedDateTime,hasAttachments,categories,id,body,dueDateTime,reminderDateTime\nhigh,1,notStarted,New task,2022-10-29T10:54:06.3672421Z,2022-10-29T10:54:06.5078837Z,,[],AAMkAGYzNjMxYTU4LTJjZjYtNDlhMi1iMzQ2LWVmMTU3YmUzOGM5MABGAAAAAAAw3-tXgryDSr5p162KnUPKBwDEwEFouXWWT50CfwqSN9cpAAEX8ECDAADEwEFouXWWT50CfwqSN9cpAAEX8GuPAAA=,"{""content"":""I should not forget this"",""contentType"":""text""}","{""dateTime"":""2023-01-01T00:00:00.0000000"",""timeZone"":""UTC""}","{""dateTime"":""2023-01-01T12:00:00.0000000"",""timeZone"":""UTC""}"\n```\n')))}m.isMDXComponent=!0}}]);