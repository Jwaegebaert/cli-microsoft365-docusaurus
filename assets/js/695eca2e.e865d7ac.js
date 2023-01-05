"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,u=m["".concat(i,".").concat(d)]||m[d]||f[d]||s;return n?r.createElement(u,a(a({ref:t},c),{},{components:n})):r.createElement(u,a({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={tags:["apps","flows","reports"]},a="List all Power Platform Environments and their Flows and Apps",p={unversionedId:"sample-scripts/powerplatform/list-environments-flows-apps/index",id:"sample-scripts/powerplatform/list-environments-flows-apps/index",title:"List all Power Platform Environments and their Flows and Apps",description:"Author: Albert-Jan Schot",source:"@site/docs/sample-scripts/powerplatform/list-environments-flows-apps/index.md",sourceDirName:"sample-scripts/powerplatform/list-environments-flows-apps",slug:"/sample-scripts/powerplatform/list-environments-flows-apps/",permalink:"/sample-scripts/powerplatform/list-environments-flows-apps/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/powerplatform/list-environments-flows-apps/index.md",tags:[{label:"apps",permalink:"/tags/apps"},{label:"flows",permalink:"/tags/flows"},{label:"reports",permalink:"/tags/reports"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["apps","flows","reports"]},sidebar:"sampleScripts",previous:{title:"Power Platform",permalink:"/sample-script/powerplatform"},next:{title:"SharePoint Online",permalink:"/sample-script/spo"}},i={},l=[],c={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"list-all-power-platform-environments-and-their-flows-and-apps"},"List all Power Platform Environments and their Flows and Apps"),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://www.cloudappie.nl/power-platform-tenant-reporting-cli-microsoft-365/"},"Albert-Jan Schot")),(0,o.kt)("p",null,"This script will retrieve all environments as an Administrator and loop through all Flows and Apps to provide you with a report indicating how much Power Platform components are in use in the tenant."),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```powershell\n$m365Status = m365 status\n\nif ($m365Status -eq "Logged Out") {\n    # Connection to Microsoft 365\n    m365 login\n}\n\n$environments = m365 pp environment list --asAdmin | ConvertFrom-Json\n\nWrite-Host -f Green "Processing $($environments.Count) environments";\n\n$results = @()\n\n$environments | ForEach-Object {\n  Write-Host -f Green "Processing environment: $($_.displayName)"\n  $envId = $($_.name)\n\n  $results += [pscustomobject]@{\n    type        = "environment"\n    id          = $envId\n    displayName = $_.displayName\n    envId       = $envId\n    lifeCycleId = $_.properties.environmentSku\n    status      = $_.properties.isDefault ? "Default" : "NotDefault"\n    createdByUpn = $_.properties.createdBy.userPrincipalName ? $_.properties.createdBy.userPrincipalName : ""\n  }\n\n  $apps = m365 pa app list --environment $envId --asAdmin | ConvertFrom-Json\n  Write-Host -f Green "Processing: $($apps.Count) apps"\n\n  $apps | ForEach-Object {\n\n    $results += [pscustomobject]@{\n      type              = $_.appType\n      id                = $_.name\n      displayName       = $_.displayName\n      envId             = $envId\n      lifeCycleId       = $_.properties.lifeCycleId\n      status            = $_.properties.status\n      createdByUpn      = $_.properties.createdBy.userPrincipalName\n    }\n  }\n\n  $flows = m365 flow list --environment $envId --asAdmin | ConvertFrom-Json\n  Write-Host -f Green "Processing: $($flows.Count) flows"\n\n  $flows | ForEach-Object {\n    $createUser = m365 aad user get --id $_.properties.creator.userId | ConvertFrom-Json\n\n    $results += [pscustomobject]@{\n      type          = "flow"\n      id            = $_.name\n      displayName   = $_.displayName\n      envId         = $envId\n      lifeCycleId   = $_.properties.lifeCycleId\n      status        = $_.properties.state\n      createdByUpn  = $createUser.userPrincipalName\n    }\n  }\n}\n\n$results | Export-Csv -Path .\\cli-powerplatform-report.csv -NoTypeInformation\n\nWrite-Host -f Green "Done"\n```\n')))}m.isMDXComponent=!0}}]);