"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const r={tags:["migration","tasks"]},i="Add multiple tasks in Planner",l={unversionedId:"sample-scripts/planner/add-multiple-tasks/index",id:"sample-scripts/planner/add-multiple-tasks/index",title:"Add multiple tasks in Planner",description:"Author: Veronique Lengelle",source:"@site/docs/sample-scripts/planner/add-multiple-tasks/index.md",sourceDirName:"sample-scripts/planner/add-multiple-tasks",slug:"/sample-scripts/planner/add-multiple-tasks/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/planner/add-multiple-tasks/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/planner/add-multiple-tasks/index.md",tags:[{label:"migration",permalink:"/cli-microsoft365-docusaurus/tags/migration"},{label:"tasks",permalink:"/cli-microsoft365-docusaurus/tags/tasks"}],version:"current",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["migration","tasks"]},sidebar:"sampleScripts",previous:{title:"Planner",permalink:"/cli-microsoft365-docusaurus/sample-script/planner"},next:{title:"Power Automate",permalink:"/cli-microsoft365-docusaurus/sample-script/flow"}},o={},p=[{value:"Add multiple tasks using a CSV file",id:"add-multiple-tasks-using-a-csv-file",level:2},{value:"Create multiple tasks using an in-script hashtable",id:"create-multiple-tasks-using-an-in-script-hashtable",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"add-multiple-tasks-in-planner"},"Add multiple tasks in Planner"),(0,s.kt)("p",null,"Author: ",(0,s.kt)("a",{parentName:"p",href:"https://veronicageek.com/2019/get-files-with-specific-names/"},"Veronique Lengelle")),(0,s.kt)("h2",{id:"add-multiple-tasks-using-a-csv-file"},"Add multiple tasks using a CSV file"),(0,s.kt)("p",null,"This script will create multiple tasks to a Planner plan from the information provided in your ",(0,s.kt)("inlineCode",{parentName:"p"},"csv")," file. For this particular example, the ",(0,s.kt)("inlineCode",{parentName:"p"},"csv")," file should contain the following columns: ",(0,s.kt)("inlineCode",{parentName:"p"},"TaskName"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Description"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"PlanID"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"BucketName"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"StartDateTime"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"AssignedToUserNames"),"."),(0,s.kt)("p",null,'=== "PowerShell"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```powershell\n$m365Status = m365 status --output text\nif ($m365Status -eq "Logged Out") {\n  # Connection to Microsoft 365\n  m365 login\n}\n\n#Import your CSV file\n$csvTasks = Import-Csv -Path "<YOUR-CSV-PATH>"\n\nforeach($task in $csvTasks){\n  m365 planner task add --title "$($task.TaskName)" --description "$($task.Description)" --planId "$($task.PlanID)" --bucketName "$($task.BucketName)" --startDateTime "$($task.StartDateTime)" --assignedToUserNames "$($task.AssignedToUserNames)"\n}\n```\n')),(0,s.kt)("h2",{id:"create-multiple-tasks-using-an-in-script-hashtable"},"Create multiple tasks using an in-script hashtable"),(0,s.kt)("p",null,'=== "PowerShell"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```powershell\n#Create multiple tasks onto a single Planner bucket with in-script tasks\n$allMyTasks = @{\n  Taks1 = @{\n    TaskName = "Task 1"\n    Description = "Description 1"\n    PlanID = "fdmtzs0rkkik0ILStJRu12345678"\n    BucketName = "SharePoint"\n    StartDateTime = "2022-06-01T09:30:00.000Z"\n    DueDateTime = "2022-06-02T17:30:00.000Z"\n    AssignedToUserNames = "veronique@contoso.onmicrosoft.com"\n  }\n  Task2 = @{\n    TaskName = "Task 2"\n    Description = "Description 2"\n    PlanID = "fdmtzs0rkkik0ILStJRu12345678"\n    BucketName = "PowerApps"\n    StartDateTime = "2022-06-05T09:30:00.000Z"\n    DueDateTime = "2022-06-07T17:30:00.000Z"\n    AssignedToUserNames = "veronique@contoso.onmicrosoft.com, jdoe@contoso.onmicrosoft.com"\n  }\n}\n\nforeach($task in $allMyTasks.Values){\n  m365 planner task add --title "$($task.TaskName)" --description "$($task.Description)" --planId "$($task.PlanID)" --bucketName "$($task.BucketName)" --startDateTime "$($task.StartDateTime)" --dueDateTime "$($task.DueDateTime)" --assignedToUserNames "$($task.AssignedToUserNames)"\n}\n```\n')))}m.isMDXComponent=!0}}]);