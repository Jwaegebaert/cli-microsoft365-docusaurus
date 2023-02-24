"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[82464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={tags:["reports"]},a="Monitor and notify Microsoft 365 health status",s={unversionedId:"sample-scripts/tenant/tenant-monitor-notify-healthstatus/index",id:"sample-scripts/tenant/tenant-monitor-notify-healthstatus/index",title:"Monitor and notify Microsoft 365 health status",description:"Author: Arjun Menon",source:"@site/docs/sample-scripts/tenant/tenant-monitor-notify-healthstatus/index.md",sourceDirName:"sample-scripts/tenant/tenant-monitor-notify-healthstatus",slug:"/sample-scripts/tenant/tenant-monitor-notify-healthstatus/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/tenant/tenant-monitor-notify-healthstatus/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/tenant/tenant-monitor-notify-healthstatus/index.md",tags:[{label:"reports",permalink:"/cli-microsoft365-docusaurus/tags/reports"}],version:"current",lastUpdatedAt:1671570658,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{tags:["reports"]},sidebar:"sampleScripts",previous:{title:"Cleanup completed Microsoft To Do tasks",permalink:"/cli-microsoft365-docusaurus/sample-scripts/todo/cleanup-completed-todos/"}},l={},c=[{value:"Script Overview",id:"script-overview",level:2},{value:"Bonus Action",id:"bonus-action",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitor-and-notify-microsoft-365-health-status"},"Monitor and notify Microsoft 365 health status"),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://arjunumenon.com/tenant-status-solution-m365cli/"},"Arjun Menon")),(0,o.kt)("p",null,"This is a script which monitors the health status of your Microsoft 365 tenant and notifies if something is not normal. Script creates a SharePoint List and will add the outage content to that. It will also send an email notification to the configured user."),(0,o.kt)("h2",{id:"script-overview"},"Script Overview"),(0,o.kt)("p",null,"Following is the overview of the script package"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We use the command ",(0,o.kt)("a",{parentName:"p",href:"https://pnp.github.io/cli-microsoft365/cmd/tenant/serviceannouncement/serviceannouncement-health-list/"},"tenant serviceannouncement health list"),"  for getting the current status.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If there is an outage or some of the service is not normal, we will be adding the information to SharePoint list using the command ",(0,o.kt)("a",{parentName:"p",href:"https://pnp.github.io/cli-microsoft365/cmd/spo/listitem/listitem-add/"},"spo listitem add")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Advantage of adding to SharePoint list - You can configure Power Automate for List item Added so that you can define your business process if needed"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Script also will send an email to the configured user/s using the command ",(0,o.kt)("a",{parentName:"p",href:"https://pnp.github.io/cli-microsoft365/cmd/spo/mail/mail-send/"},"spo mail send")," so that concerned team could be notified"))),(0,o.kt)("h2",{id:"bonus-action"},"Bonus Action"),(0,o.kt)("p",null,"All the pre-requisites would be completed by the script. Script checks whether SharePoint List exists in the SharePoint site. If it does not exist, it will create a SharePoint List using ",(0,o.kt)("a",{parentName:"p",href:"https://pnp.github.io/cli-microsoft365/cmd/spo/list/list-add/"},"spo list add")," command and will also ",(0,o.kt)("a",{parentName:"p",href:"https://pnp.github.io/cli-microsoft365/cmd/spo/field/field-add/"},"add the needed fields"),". Person who is executing the script just need to have Edit permission in the site against which the script will be executed."),(0,o.kt)("p",null,"If you want to schedule the script directly, you can go ahead without the need of any other configurations."),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```powershell\n#Ensure that you are logged in to the site mentioned in the webURL as a user who has Edit Permission\n$webURL = "https://contoso.sharepoint.com/sites/contososite"\n$listName = "M365HealthStatus"\n#Email address to which an outage email will be sent\n$notifyEmail = "itpro@contoso.onmicrosoft.com"\n\n$CurrentList = (m365 spo list get --title $listName --webUrl $webURL --output json) | ConvertFrom-Json\n\n#Checking whether List exists. Will create the list if the List doest not exist\nif ($CurrentList -eq $null) {\n  Write-Host "List does not exist. Hence creating the SharePoint List"\n\n  #Creating the list - Conventional\n  $CurrentList = m365 spo list add --baseTemplate GenericList --title $listName --webUrl $webURL\n\n  #Adding the fields\n  $FieldLists = @(\n    @{fieldname = "Workload"; fieldtype = "Text"; }, @{fieldname = "FirstIdentifiedDate"; fieldtype = "DateTime"; }, @{fieldname = "WorkflowJSONData"; fieldtype = "Note"; }\n  )\n\n  Foreach ($field in $FieldLists) {\n    $addedField = m365 spo field add --webUrl $webURL --listTitle $listName --xml "<Field Type=\'$($field.fieldtype)\' DisplayName=\'$($field.fieldname)\' Required=\'FALSE\' EnforceUniqueValues=\'FALSE\' Indexed=\'FALSE\' StaticName=\'$($field.fieldname)\' Name=\'$($field.fieldname)\'></Field>" --options AddFieldToDefaultView\n  }\n\n  Write-Host "Created SharePoint List $listName for logging the Outages."\n}\n\n#Getting current Tenant Status and do the needed operations\n$workLoads = m365 tenant serviceannouncement health list --issues --query "[?status != \'serviceOperational\']" --output json | ConvertFrom-Json\n$currentOutageServices = (m365 spo listitem list --webUrl $webURL --listTitle $listName --fields "Title, Workload, Id" --output json).Replace("ID", "_ID") | ConvertFrom-Json\n\n#Checking for any new outages\n$updateSinceLastExecution = $false\nWrite-Host "`n### New Outages ###"\n\nForeach ($workload in $workLoads) {\n  if ($workload.id -notin $currentOutageServices.Workload) {\n    #Add outage information to SharePoint List\n    $addedWorkLoad = m365 spo listitem add --webUrl $webURL --listTitle $listName --contentType Item --Title $workload.service --Workload $workload.id --FirstIdentifiedDate (Get-Date -Date $workload.issues[$workload.issues.Count -1].startDateTime) --WorkflowJSONData (Out-String -InputObject $workload -Width 400)\n\n    #Send notification using CLI Commands\n    m365 outlook mail send --to $notifyEmail --subject "Outage Reported in $($workload.service)" --bodyContents "An outage has been reported for the Service : $($workload.service) <a href=\'$webURL/Lists/$listName\'>Access the Health Status List</a>" --bodyContentType HTML --saveToSentItems false\n\n    Write-Host "Outage is Reported for Service : $($workload.service). Please access $webURL/Lists/$listName for more information"\n    $updateSinceLastExecution = $true\n  }\n}\n\nif ($updateSinceLastExecution -eq $false) {\n  Write-Host "NO New Outages are reported yet."\n}\n\n#Checking whether any existing outages are resolved\n$updateSinceLastExecution = $false\nWrite-Host "`n### Resolved Outages ###"\n\nForeach ($Service in $currentOutageServices) {\n  if ($Service.Workload -notin $workLoads.id) {\n    #Removing the outage information from SharePoint List\n    $removedRecord = m365 spo listitem remove --webUrl $webURL --listTitle $listName --id $Service.Id --confirm\n\n    #Send notification using CLI Commands\n    m365 outlook mail send --to $notifyEmail --subject "Outage RESOLVED for $($Service.Title)" --bodyContents "Outage which was reported for the Service : $($Service.Title) is RESOLVED." --bodyContentType HTML --saveToSentItems false\n\n    Write-Host "Outage which was reported for the Service : $($Service.Title) is now RESOLVED."\n    $updateSinceLastExecution = $true\n  }\n}\n\nif ($updateSinceLastExecution -eq $false) {\n  Write-Host "No further updates on the existing outages"\n}\n```\n')))}p.isMDXComponent=!0}}]);