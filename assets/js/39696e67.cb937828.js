"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[41553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,k=m["".concat(l,".").concat(c)]||m[c]||A[c]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>A,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={},r="todo task set",s={unversionedId:"cmd/todo/task/task-set",id:"cmd/todo/task/task-set",title:"todo task set",description:"Update a task in a Microsoft To Do task list",source:"@site/docs/cmd/todo/task/task-set.md",sourceDirName:"cmd/todo/task",slug:"/cmd/todo/task/task-set",permalink:"/cli-microsoft365-docusaurus/cmd/todo/task/task-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/todo/task/task-set.md",tags:[],version:"current",lastUpdatedAt:1680470049,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{},sidebar:"commands",previous:{title:"todo task remove",permalink:"/cli-microsoft365-docusaurus/cmd/todo/task/task-remove"},next:{title:"viva connections app create",permalink:"/cli-microsoft365-docusaurus/cmd/viva/connections/connections-app-create"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:d},m="wrapper";function A(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"todo-task-set"},"todo task set"),(0,i.kt)("p",null,"Update a task in a Microsoft To Do task list"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 todo task set [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: The id of the task to update."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-t, --title [title]"),"\n: Sets the task title."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-s, --status [status]"),"\n: Sets the status of the task. Allowed values are ",(0,i.kt)("inlineCode",{parentName:"p"},"notStarted"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inProgress"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"completed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"waitingOnOthers"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"deferred"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--listName [listName]"),"\n: The name of the task list in which the task exists. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listName")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listId"),", but not both."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--listId [listId]"),"\n: The id of the task list in which the task exists. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listName")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listId"),", but not both."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--bodyContent [bodyContent]"),"\n: The body content of the task. In the UI this is called 'notes'."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--bodyContentType [bodyContentType]"),"\n: The type of the body content. Possible values are ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"html"),". Default is ",(0,i.kt)("inlineCode",{parentName:"p"},"text"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--importance [importance]"),"\n: The importance of the task. Possible values are: ",(0,i.kt)("inlineCode",{parentName:"p"},"low"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"normal"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"high"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--dueDateTime [dueDateTime]"),"\n: The date and time when the task is due. This should be defined as a valid ISO 8601 string in the UTC time zone. Only date value is needed, time value is always ignored."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--reminderDateTime [reminderDateTime]"),"\n: The date and time for a reminder alert of the task to occur. This should be defined as a valid ISO 8601 string in the UTC time zone."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--categories [categories]"),"\n: Comma-separated list of categories associated with the task."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--completedDateTime [completedDateTime]"),"\n: The date and time when the task was finished. This should be defined as a valid ISO 8601 string. ",(0,i.kt)("inlineCode",{parentName:"p"},"2021-12-16T18:28:48.6964197Z")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--startDateTime [startDateTime]"),"\n: The date and time when the task is scheduled to start. This should be defined as a valid ISO 8601 string. ",(0,i.kt)("inlineCode",{parentName:"p"},"2021-12-16T18:28:48.6964197Z")),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"When you specify the values for ",(0,i.kt)("inlineCode",{parentName:"p"},"categories"),", each category can correspond to the displayName property of an ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/graph/api/resources/outlookcategory?view=graph-rest-1.0"},"outlookCategory"),". It is permissible to use distinct names."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Update a task with title ",(0,i.kt)("em",{parentName:"p"},"New task")," to ",(0,i.kt)("em",{parentName:"p"},"Update doco")," in Microsoft To Do tasks list with a specific name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 todo task set --id "AAMkADU3Y2E0OTMxLTllYTQtNGFlZS1hZGM0LWI1NjZjY2FhM2RhMABGAAAAAADhr7P77n9xS6PdtDemRwpHBwCin1tvQMXzRKN1hQDz2S3VAAAXXsleAACin1tvQMXzRKN1hQDz2S3VAAAXXzr9AAA=" --title "Update doco" --listName "My task list"\n')),(0,i.kt)("p",null,"Update a task with status from ",(0,i.kt)("em",{parentName:"p"},"notStarted")," to ",(0,i.kt)("em",{parentName:"p"},"inProgress")," in Microsoft To Do tasks list with a specific name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 todo task set --id "AAMkADU3Y2E0OTMxLTllYTQtNGFlZS1hZGM0LWI1NjZjY2FhM2RhMABGAAAAAADhr7P77n9xS6PdtDemRwpHBwCin1tvQMXzRKN1hQDz2S3VAAAXXsleAACin1tvQMXzRKN1hQDz2S3VAAAXXzr9AAA=" --status "inProgress" --listName "My task list"\n')),(0,i.kt)("p",null,"Update a task with bodyContent and reminder and flag it as important in Microsoft To Do tasks list with a specific name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 todo task set --id "AAMkADU3Y2E0OTMxLTllYTQtNGFlZS1hZGM0LWI1NjZjY2FhM2RhMABGAAAAAADhr7P77n9xS6PdtDemRwpHBwCin1tvQMXzRKN1hQDz2S3VAAAXXsleAACin1tvQMXzRKN1hQDz2S3VAAAXXzr9AAA=" --listName "My task list" --bodyContent "I should not forget this" --reminderDateTime 2023-01-01T12:00:00Z --importance high\n')),(0,i.kt)("p",null,"Update a task with due date in Microsoft To Do tasks list with list id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 todo task set --id "AAMkADU3Y2E0OTMxLTllYTQtNGFlZS1hZGM0LWI1NjZjY2FhM2RhMABGAAAAAADhr7P77n9xS6PdtDemRwpHBwCin1tvQMXzRKN1hQDz2S3VAAAXXsleAACin1tvQMXzRKN1hQDz2S3VAAAXXzr9AAA=" --listId "AQMkADlhMTRkOGEzLWQ1M2QtNGVkNS04NjdmLWU0NzJhMjZmZWNmMwAuAAADKvwNgAMNPE_zFNRJXVrU1wEAhHKQZHItDEOVCn8U3xuA2AABmQeVPwAAAA==" --dueDateTime 2023-01-01\n')),(0,i.kt)("p",null,"Update a task to Microsoft To Do with several categories"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 todo task set --title "New task" --listName "My task list" --categories "Red category,Important"\n')),(0,i.kt)("p",null,"Update a task to Microsoft To Do with a start date and set a reminder for the task"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 todo task set --title "New task" --listName "My task list" --startDateTime "2023-12-16T18:28:48.6964197Z" --isReminderOn true\n')),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,'=== "JSON"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```json\n{\n  "importance": "high",\n  "isReminderOn": true,\n  "status": "notStarted",\n  "title": "Update doco",\n  "createdDateTime": "2022-10-29T11:03:20.9175176Z",\n  "lastModifiedDateTime": "2022-10-30T14:07:03.0718199Z",\n  "hasAttachments": false,\n  "categories": [],\n  "id": "AAMkAGYzNjMxYTU4LTJjZjYtNDlhMi1iMzQ2LWVmMTU3YmUzOGM5MABGAAAAAAAw3-tXgryDSr5p162KnUPKBwDEwEFouXWWT50CfwqSN9cpAAL3xdLTAADEwEFouXWWT50CfwqSN9cpAAL3xhtSAAA=",\n  "body": {\n    "content": "I should not forget this",\n    "contentType": "text"\n  },\n  "dueDateTime": {\n    "dateTime": "2023-01-01T00:00:00.0000000",\n    "timeZone": "UTC"\n  },\n  "reminderDateTime": {\n    "dateTime": "2023-01-01T12:00:00.0000000",\n    "timeZone": "UTC"\n  }\n}\n```\n')),(0,i.kt)("p",null,'=== "Text"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```text\nbody                : {"content":"I should not forget this","contentType":"text"}\ncategories          : []\ncreatedDateTime     : 2022-10-29T11:03:20.9175176Z\ndueDateTime         : {"dateTime":"2023-01-01T00:00:00.0000000","timeZone":"UTC"}\nhasAttachments      : false\nid                  : AAMkAGYzNjMxYTU4LTJjZjYtNDlhMi1iMzQ2LWVmMTU3YmUzOGM5MABGAAAAAAAw3-tXgryDSr5p162KnUPKBwDEwEFouXWWT50CfwqSN9cpAAL3xdLTAADEwEFouXWWT50CfwqSN9cpAAL3xhtSAAA=\nimportance          : high\nisReminderOn        : true\nlastModifiedDateTime: 2022-10-30T14:08:17.6665299Z\nreminderDateTime    : {"dateTime":"2023-01-01T12:00:00.0000000","timeZone":"UTC"}\nstatus              : notStarted\ntitle               : Update doco\n```\n')),(0,i.kt)("p",null,'=== "CSV"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```csv\nimportance,isReminderOn,status,title,createdDateTime,lastModifiedDateTime,hasAttachments,categories,id,body,dueDateTime,reminderDateTime\nhigh,1,notStarted,Update doco,2022-10-29T11:03:20.9175176Z,2022-10-30T14:09:14.7687057Z,,[],AAMkAGYzNjMxYTU4LTJjZjYtNDlhMi1iMzQ2LWVmMTU3YmUzOGM5MABGAAAAAAAw3-tXgryDSr5p162KnUPKBwDEwEFouXWWT50CfwqSN9cpAAL3xdLTAADEwEFouXWWT50CfwqSN9cpAAL3xhtSAAA=,"{""content"":""I should not forget this"",""contentType"":""text""}","{""dateTime"":""2023-01-01T00:00:00.0000000"",""timeZone"":""UTC""}","{""dateTime"":""2023-01-01T12:00:00.0000000"",""timeZone"":""UTC""}"\n```\n')),(0,i.kt)("p",null,'=== "Markdown"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```md\n# todo task set --id "AAMkAGYzNjMxYTU4LTJjZjYtNDlhMi1iMzQ2LWVmMTU3YmUzOGM5MABGAAAAAAAw3-tXgryDSr5p162KnUPKBwDEwEFouXWWT50CfwqSN9cpAAL3xdLTAADEwEFouXWWT50CfwqSN9cpAAL3xhtSAAA=" --title "Update doco" --listName "My task list" --status "notStarted"\n\nDate: 4/3/2023\n\n## Update doco (AAMkAGYzNjMxYTU4LTJjZjYtNDlhMi1iMzQ2LWVmMTU3YmUzOGM5MABGAAAAAAAw3-tXgryDSr5p162KnUPKBwDEwEFouXWWT50CfwqSN9cpAAL3xdLTAADEwEFouXWWT50CfwqSN9cpAAL3xhtSAAA=)\n\nProperty | Value\n---------|-------\nimportance | high\nisReminderOn | true\nstatus | notStarted\ntitle | Update doco\ncreatedDateTime | 2022-10-29T11:03:20.9175176Z\nlastModifiedDateTime | 2022-10-30T14:07:03.0718199Z\nhasAttachments | false\ncategories | []\nid | AAMkAGYzNjMxYTU4LTJjZjYtNDlhMi1iMzQ2LWVmMTU3YmUzOGM5MABGAAAAAAAw3-tXgryDSr5p162KnUPKBwDEwEFouXWWT50CfwqSN9cpAAL3xdLTAADEwEFouXWWT50CfwqSN9cpAAL3xhtSAAA=\nbody | {"content":"I should not forget this","contentType":"text"}\ndueDateTime | {"dateTime": "2023-01-01T00:00:00.0000000","timeZone": "UTC"}\nreminderDateTime |  {"dateTime": "2023-01-01T12:00:00.0000000","timeZone": "UTC"}\n```\n')))}A.isMDXComponent=!0}}]);