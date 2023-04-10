"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[78749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),_=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=_(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=_(n),p=r,u=d["".concat(l,".").concat(p)]||d[p]||c[p]||a;return n?i.createElement(u,o(o({ref:t},m),{},{components:n})):i.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var _=2;_<a;_++)o[_]=n[_];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>_});var i=n(87462),r=(n(67294),n(3905));const a={},o="teams meeting list",s={unversionedId:"cmd/teams/meeting/meeting-list",id:"cmd/teams/meeting/meeting-list",title:"teams meeting list",description:"Retrieve all online meetings for a given user or shared mailbox",source:"@site/docs/cmd/teams/meeting/meeting-list.md",sourceDirName:"cmd/teams/meeting",slug:"/cmd/teams/meeting/meeting-list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/meeting/meeting-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/meeting/meeting-list.md",tags:[],version:"current",lastUpdatedAt:1667599603,formattedLastUpdatedAt:"Nov 4, 2022",frontMatter:{},sidebar:"commands",previous:{title:"teams meeting get",permalink:"/cli-microsoft365-docusaurus/cmd/teams/meeting/meeting-get"},next:{title:"teams membersettings list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/membersettings/membersettings-list"}},l={},_=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:_},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-meeting-list"},"teams meeting list"),(0,r.kt)("p",null,"Retrieve all online meetings for a given user or shared mailbox"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams meeting list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-u, --userId [userId]"),"\n: The id of the user or shared mailbox, omit to retrieve meetings for current signed in user. Use either ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"userName")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"email"),", but not multiple."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --userName [userName]"),"\n: The name of the user or shared mailbox, omit to retrieve meetings for current signed in user. Use either ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"userName")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"email"),", but not multiple."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--email [email]"),"\n: The email of the user or shared mailbox, omit to retrieve meetings for current signed in user. Use either ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"userName")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"email"),", but not multiple."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--startDateTime <startDateTime>"),"\n: The startdate used to query for meetings."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--endDateTime [endDateTime]"),"\n: The enddate used to query for meetings."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--isOrganizer"),"\n: Set to retrieve only meetings the user is organizer for."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Lists all meetings for a specific user retrieved by email of which the user is organizer of started after a specific datetime"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams meeting list --startDateTime '2022-01-01T10:00:00Z' --email user@tenant.com --isOrganizer\n")),(0,r.kt)("p",null,"List all meeting of the currently logged in user between two specific dates"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams meeting list --startDateTime '2022-01-01T10:00:00Z' --endDateTime '2022-03-31T23:59:59Z'\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "id": "AAMkADgzN2Q1NThiLTI0NjYtNGIxYS05MDdjLTg1OWQxNzgwZGM2ZgBGAAAAAAC6jQfUzacTSIHqMw2yacnUBwBiOC8xvYmdT6G2E_hLMK5kAAAAAAENAABiOC8xvYmdT6G2E_hLMK5kAAIw3TQIAAA=",\n    "createdDateTime": "2022-06-26T12:39:34.224055Z",\n    "lastModifiedDateTime": "2022-06-26T12:41:36.4357085Z",\n    "changeKey": "YjgvMb2JnU+hthPoSzCuZAACMHITIQ==",\n    "categories": [],\n    "transactionId": null,\n    "originalStartTimeZone": "W. Europe Standard Time",\n    "originalEndTimeZone": "W. Europe Standard Time",\n    "iCalUId": "040000008200E00074C5B7101A82E008000000001AF70ACA5989D801000000000000000010000000048716A892ACAE4DB6CC16097796C401",\n    "reminderMinutesBeforeStart": 15,\n    "isReminderOn": true,\n    "hasAttachments": false,\n    "subject": "Test meeting",\n    "bodyPreview": "________________________________________________________________________________\\r\\\\\\nMicrosoft Teams meeting\\r\\\\\\nJoin on your computer or mobile app\\r\\\\\\nClick here to join the meeting\\r\\\\\\nLearn More | Meeting options\\r\\\\\\n___________________________________________",\n    "importance": "normal",\n    "sensitivity": "normal",\n    "isAllDay": false,\n    "isCancelled": false,\n    "isOrganizer": true,\n    "responseRequested": true,\n    "seriesMasterId": null,\n    "showAs": "busy",\n    "type": "singleInstance",\n    "webLink": "https://outlook.office365.com/owa/?itemid=AAMkADgzN2Q1NThiLTI0NjYtNGIxYS05MDdjLTg1OWQxNzgwZGM2ZgBGAAAAAAC6jQfUzacTSIHqMw2yacnUBwBiOC8xvYmdT6G2E%2BhLMK5kAAAAAAENAABiOC8xvYmdT6G2E%2BhLMK5kAAIw3TQIAAA%3D&exvsurl=1&path=/calendar/item",\n    "onlineMeetingUrl": null,\n    "isOnlineMeeting": true,\n    "onlineMeetingProvider": "teamsForBusiness",\n    "allowNewTimeProposals": true,\n    "occurrenceId": null,\n    "isDraft": false,\n    "hideAttendees": false,\n    "responseStatus": {\n      "response": "organizer",\n      "time": "0001-01-01T00:00:00Z"\n    },\n    "body": {\n      "contentType": "html",\n      "content": "<html>\\r\\\\\\n<head>\\r\\\\\\n<meta http-equiv=\\"Content-Type\\" content=\\"text/html; charset=utf-8\\">\\r\\\\\\n</head>\\r\\\\\\n<body>\\r\\\\\\n<div><br>\\r\\\\\\n<br>\\r\\\\\\n<br>\\r\\\\\\n<div style=\\"width:100%; height:20px\\"><span style=\\"white-space:nowrap; color:#5F5F5F; opacity:.36\\">________________________________________________________________________________</span>\\r\\\\\\n</div>\\r\\\\\\n<div class=\\"me-email-text\\" lang=\\"en-US\\" style=\\"color:#252424; font-family:\'Segoe UI\',\'Helvetica Neue\',Helvetica,Arial,sans-serif\\">\\r\\\\\\n<div style=\\"margin-top:24px; margin-bottom:20px\\"><span style=\\"font-size:24px; color:#252424\\">Microsoft Teams meeting</span>\\r\\\\\\n</div>\\r\\\\\\n<div style=\\"margin-bottom:20px\\">\\r\\\\\\n<div style=\\"margin-top:0px; margin-bottom:0px; font-weight:bold\\"><span style=\\"font-size:14px; color:#252424\\">Join on your computer or mobile app</span>\\r\\\\\\n</div>\\r\\\\\\n<a href=\\"https://teams.microsoft.com/l/meetup-join/19%3ameeting_OWIwM2MzNmQtZmY1My00MzM0LWIxMGQtYzkyNzI3OWU5ODMx%40thread.v2/0?context=%7b%22Tid%22%3a%22e1dd4023-a656-480a-8a0e-c1b1eec51e1d%22%2c%22Oid%22%3a%22fe36f75e-c103-410b-a18a-2bf6df06ac3a%22%7d\\" class=\\"me-email-headline\\" style=\\"font-size:14px; font-family:\'Segoe UI Semibold\',\'Segoe UI\',\'Helvetica Neue\',Helvetica,Arial,sans-serif; text-decoration:underline; color:#6264a7\\">Click\\r\\\\\\n here to join the meeting</a> </div>\\r\\\\\\n<div style=\\"margin-bottom:24px; margin-top:20px\\"><a href=\\"https://aka.ms/JoinTeamsMeeting\\" class=\\"me-email-link\\" style=\\"font-size:14px; text-decoration:underline; color:#6264a7; font-family:\'Segoe UI\',\'Helvetica Neue\',Helvetica,Arial,sans-serif\\">Learn More</a>\\r\\\\\\n | <a href=\\"https://teams.microsoft.com/meetingOptions/?organizerId=fe36f75e-c103-410b-a18a-2bf6df06ac3a&amp;tenantId=e1dd4023-a656-480a-8a0e-c1b1eec51e1d&amp;threadId=19_meeting_OWIwM2MzNmQtZmY1My00MzM0LWIxMGQtYzkyNzI3OWU5ODMx@thread.v2&amp;messageId=0&amp;language=en-US\\" class=\\"me-email-link\\" style=\\"font-size:14px; text-decoration:underline; color:#6264a7; font-family:\'Segoe UI\',\'Helvetica Neue\',Helvetica,Arial,sans-serif\\">\\r\\\\\\nMeeting options</a> </div>\\r\\\\\\n</div>\\r\\\\\\n<div style=\\"font-size:14px; margin-bottom:4px; font-family:\'Segoe UI\',\'Helvetica Neue\',Helvetica,Arial,sans-serif\\">\\r\\\\\\n</div>\\r\\\\\\n<div style=\\"font-size:12px\\"></div>\\r\\\\\\n</div>\\r\\\\\\n<div style=\\"width:100%; height:20px\\"><span style=\\"white-space:nowrap; color:#5F5F5F; opacity:.36\\">________________________________________________________________________________</span>\\r\\\\\\n</div>\\r\\\\\\n<div></div>\\r\\\\\\n</body>\\r\\\\\\n</html>\\r\\\\\\n"\n    },\n    "start": {\n      "dateTime": "2022-06-26T12:30:00.0000000",\n      "timeZone": "UTC"\n    },\n    "end": {\n      "dateTime": "2022-06-26T13:00:00.0000000",\n      "timeZone": "UTC"\n    },\n    "location": {\n      "displayName": "",\n      "locationType": "default",\n      "uniqueIdType": "unknown",\n      "address": {},\n      "coordinates": {}\n    },\n    "locations": [],\n    "recurrence": null,\n    "attendees": [\n      {\n        "type": "required",\n        "status": {\n          "response": "none",\n          "time": "0001-01-01T00:00:00Z"\n        },\n        "emailAddress": {\n          "name": "User D",\n          "address": "userD@outlook.com"\n        }\n      }\n    ],\n    "organizer": {\n      "emailAddress": {\n        "name": "User",\n        "address": "user@tenant.com"\n      }\n    },\n    "onlineMeeting": {\n      "joinUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_OWIwM2MzNmQtZmY1My00MzM0LWIxMGQtYzkyNzI3OWU5ODMx%40thread.v2/0?context=%7b%22Tid%22%3a%22e1dd4023-a656-480a-8a0e-c1b1eec51e1d%22%2c%22Oid%22%3a%22fe36f75e-c103-410b-a18a-2bf6df06ac3a%22%7d"\n    }\n  }\n]\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nsubject              start                 end\n-------------------  --------------------  --------------------\nMeeting title        26/06/2022, 12:30:00  26/06/2022, 13:00:00\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```csv\nsubject,start,end\nMeeting title,"26/06/2022, 12:30:00","26/06/2022, 13:00:00"\n```\n')))}c.isMDXComponent=!0}}]);