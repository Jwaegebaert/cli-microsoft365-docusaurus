"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[95259],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var i=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,s=function(t,e){if(null==t)return{};var n,i,s={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var a=i.createContext({}),p=function(t){var e=i.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return i.createElement(a.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,s=t.mdxType,r=t.originalType,a=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=s,f=c["".concat(a,".").concat(m)]||c[m]||d[m]||r;return n?i.createElement(f,l(l({ref:e},u),{},{components:n})):i.createElement(f,l({ref:e},u))}));function f(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var a in e)hasOwnProperty.call(e,a)&&(o[a]=e[a]);o.originalType=t,o[c]="string"==typeof t?t:s,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46853:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),s=(n(67294),n(3905));const r={tags:["provisioning","libraries"]},l="Add multiple lists in multiple sites",o={unversionedId:"sample-scripts/spo/add-multiple-lists-in-multiple-sites/index",id:"sample-scripts/spo/add-multiple-lists-in-multiple-sites/index",title:"Add multiple lists in multiple sites",description:"Author: Sudharsan Kesavanarayanan",source:"@site/docs/sample-scripts/spo/add-multiple-lists-in-multiple-sites/index.md",sourceDirName:"sample-scripts/spo/add-multiple-lists-in-multiple-sites",slug:"/sample-scripts/spo/add-multiple-lists-in-multiple-sites/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/add-multiple-lists-in-multiple-sites/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/add-multiple-lists-in-multiple-sites/index.md",tags:[{label:"provisioning",permalink:"/cli-microsoft365-docusaurus/tags/provisioning"},{label:"libraries",permalink:"/cli-microsoft365-docusaurus/tags/libraries"}],version:"current",lastUpdatedAt:1677877396,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{tags:["provisioning","libraries"]},sidebar:"sampleScripts",previous:{title:"Add multiple folders in libraries using a csv file",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/add-multiple-folders-in-libraries-using-csv-file/"},next:{title:"Add a Site Collection Admin using a csv file",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/add-site-collection-admin-using-csv-file/"}},a={},p=[],u={toc:p},c="wrapper";function d(t){let{components:e,...n}=t;return(0,s.kt)(c,(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"add-multiple-lists-in-multiple-sites"},"Add multiple lists in multiple sites"),(0,s.kt)("p",null,"Author: ",(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/sudharsank"},"Sudharsan Kesavanarayanan")),(0,s.kt)("p",null,'=== "PowerShell"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```powershell\n<#\n.SYNOPSIS\n    Create multiple lists in multiple sites.\n.DESCRIPTION\n    Create multiple lists in multiple sites and also to map the content type.\n.EXAMPLE\n    PS C:\\> Add-ListsAndMapContentTypes -SiteUrls "/Sites/Site1", "/Sites/Site2" -Lists "List1", "List2"\n.INPUTS\n    Inputs (if any)\n.OUTPUTS\n    Output (if any)\n.NOTES\n    Below are the 2 global variables that have to be updated\n    $weburl = "https://tenantname.sharepoint.com"\n    $ContentTypeId = \'<content type id>\'\n#>\n$weburl = "https://tenantname.sharepoint.com"\n$ContentTypeId = \'<content type id>\'\n\nfunction Add-ListsAndMapContentTypes (\n  [Parameter(Mandatory = $true)][string[]] $SiteUrls,\n  [Parameter(Mandatory = $true)][string[]] $Lists \n) {\n  $SiteUrls | ForEach-Object {\n    [string]$FinalSiteUrl = $weburl + $_.ToString()\n    Write-Output "Started creating lists for \'$FinalSiteUrl\'"\n    Write-Output ""\n    $Lists | ForEach-Object {\n      [string]$listTitle = $_.ToString()\n      Write-Output "Checking and creating list \'$listTitle\'"\n      $list = m365 spo list get -u $FinalSiteUrl -t $listTitle -o \'json\' | ConvertFrom-Json\n      if ($null -eq $list) {\n        m365 spo list add -t $listTitle --baseTemplate DocumentLibrary -u $FinalSiteUrl --contentTypesEnabled true --enableVersioning true --listExperienceOptions 1 --onQuickLaunch false \n        $list = m365 spo list get -t $listTitle -u $FinalSiteUrl --properties "Title,Id" --output \'json\' | ConvertFrom-Json\n        m365 spo list contenttype add -l $list.Id -u $FinalSiteUrl -i $ContentTypeId --output \'json\' | ConvertFrom-Json\n        $listContentType = m365 spo list contenttype list -l $list.Id -u $FinalSiteUrl --output \'json\' | ConvertFrom-Json\n        m365 spo list contenttype default set -l $list.Id -u $FinalSiteUrl -c $listContentType.StringId[2] --output \'json\' | ConvertFrom-Json\n        Write-Output "Successfully created list \'$listTitle\'"\n      }\n      else {\n        Write-Output "List \'$listTitle\' already exists"\n      }\n      Write-Output "----------------------"\n    }\n    Write-Output ""\n  }\n}\n\nWrite-Host "Ensure logged in"\n$m365Status = m365 status --output text\nif ($m365Status -eq "Logged Out") {\n  Write-Host "Logging in the User!"\n  m365 login --authType browser\n}\n```\n')))}d.isMDXComponent=!0}}]);