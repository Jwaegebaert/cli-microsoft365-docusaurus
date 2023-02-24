"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[61197],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>h});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),l=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},m=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=l(n),d=r,h=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?o.createElement(h,a(a({ref:e},m),{},{components:n})):o.createElement(h,a({ref:e},m))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5401:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={tags:["files","listitems"]},a="How to perform operations if a command is not covered by the CLI for Microsoft 365",s={unversionedId:"sample-scripts/spo/perform-operations-not-covered-by-cli-for-microsoft-365/index",id:"sample-scripts/spo/perform-operations-not-covered-by-cli-for-microsoft-365/index",title:"How to perform operations if a command is not covered by the CLI for Microsoft 365",description:"Author: Joseph Velliah",source:"@site/docs/sample-scripts/spo/perform-operations-not-covered-by-cli-for-microsoft-365/index.md",sourceDirName:"sample-scripts/spo/perform-operations-not-covered-by-cli-for-microsoft-365",slug:"/sample-scripts/spo/perform-operations-not-covered-by-cli-for-microsoft-365/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/perform-operations-not-covered-by-cli-for-microsoft-365/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/perform-operations-not-covered-by-cli-for-microsoft-365/index.md",tags:[{label:"files",permalink:"/cli-microsoft365-docusaurus/tags/files"},{label:"listitems",permalink:"/cli-microsoft365-docusaurus/tags/listitems"}],version:"current",lastUpdatedAt:1671570658,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{tags:["files","listitems"]},sidebar:"sampleScripts",previous:{title:"Monitor Site Collections Storage Usage",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/monitor-site-collection-storage-usage/"},next:{title:"Planner migration to SharePoint list",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/planner-migrate-sharepoint-list/"}},c={},l=[],m={toc:l},p="wrapper";function f(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-perform-operations-if-a-command-is-not-covered-by-the-cli-for-microsoft-365"},"How to perform operations if a command is not covered by the CLI for Microsoft 365"),(0,r.kt)("p",null,"Author: ",(0,r.kt)("a",{parentName:"p",href:"https://blog.josephvelliah.com/spol-download-attachments-from-list-items-using-cli-for-microsoft-365"},"Joseph Velliah")),(0,r.kt)("p",null,"One of the most powerful tools a Microsoft 365 user has is the CLI for Microsoft 365. The command line allows any user to get a lot of things done in a fast way. There is no boundary to the number of things a seasoned user can do by merely using the CLI for Microsoft 365."),(0,r.kt)("p",null,"This script shows how to perform operations if a command is not covered by the CLI for Microsoft 365."),(0,r.kt)("p",null,"Right now, AttachmentFiles property associated with a SharePoint list item is not available in CLI for Microsoft 365, so we need to execute a separate query to ",(0,r.kt)("inlineCode",{parentName:"p"},"/_api/web/lists/getByTitle('list-title')/items(item-id)/AttachmentFiles")," endpoint to get the item attachments."),(0,r.kt)("p",null,"To call AttachmentFiles endpoint, we must acquire an access token from the Microsoft identity platform. To do this we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"m365 util accesstoken get")," command and attach the access token with AttachmentFiles endpoint as shown in this script."),(0,r.kt)("p",null,"Prerequisites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pnp.github.io/cli-microsoft365/"},"CLI for Microsoft 365")),(0,r.kt)("li",{parentName:"ul"},"SharePoint Online site with list item attachments")),(0,r.kt)("p",null,'=== "PowerShell"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```powershell\nFunction Get-ListAttachments() {\n    param\n    (\n        [Parameter(Mandatory = $true)] [string] $AccessToken,\n        [Parameter(Mandatory = $true)] [string] $SiteURL,\n        [Parameter(Mandatory = $true)] [string] $ListTitle,\n        [Parameter(Mandatory = $true)] [int] $ItemId\n    )   \n    Try {\n        $ListItemAttachmentsEndPoint = "$($SiteURL)/_api/web/lists/getbytitle(\'$($ListTitle)\')/items($($ItemId))/AttachmentFiles"\n        $Header = @{\n            "Authorization" = "Bearer $($AccessToken)"\n            "Accept"        = "application/json; odata=verbose" \n            "Content-Type"  = "application/json "\n        }\n        $ListItemAttachments = Invoke-RestMethod -Uri $ListItemAttachmentsEndPoint -Headers $Header -Method Get  \n        return $ListItemAttachments.d.results\n    }\n    Catch {\n        throw "Error Getting List Item Attachments! $($_.Exception.Message)" \n    }\n}\nFunction Download-ListAttachments() {\n    param\n    (\n        [Parameter(Mandatory = $true)] [string] $TenantName,\n        [Parameter(Mandatory = $true)] [string] $SiteURL,\n        [Parameter(Mandatory = $true)] [string] $ListTitle,\n        [Parameter(Mandatory = $true)] [string] $DownloadDirectory\n    )   \n    Try {\n\n        #Get All Items from the List\n        $ListItems = m365 spo listitem list --webUrl $SiteURL --title $ListTitle -o json | ConvertFrom-Json -AsHashtable\n         \n        #Iterate through each list item\n        Foreach ($Item in $ListItems) {\n            Try {\n                Write-Output "Processing Item Id $($Item.Id)"\n\n                # Right now AttachmentFiles property is not available in cli-microsoft365 so we need to execute a separate query to /_api/web/lists/getByTitle(\'list-title\')/items(item-id)/AttachmentFiles to get the item attachments. \n                # AttachmentFiles endpoint requires access token \n                $AccessToken = m365 util accesstoken get --resource "https://$($TenantName).sharepoint.com" --new \n\n                #Get All attachments from the List Item\n                $Attachments = Get-ListAttachments -AccessToken $AccessToken -SiteURL $SiteURL -ListTitle $ListTitle -ItemId $Item.Id\n\n                If ($Attachments.Length -gt 0) {\n                    #Create directory for each list item if it doesn\'t exist\n                    $TargetDownloadDirectory = "$($DownloadDirectory)/$($Item.Id)"\n                    If (!(Test-Path -path $TargetDownloadDirectory)) { New-Item $TargetDownloadDirectory -type Directory | Out-Null }\n\n                    foreach ($Attachment in $Attachments) {\n                        Try {\n                            Write-Output "Downloading $($Attachment.FileName)"\n                            $TargetFilePath = "$($TargetDownloadDirectory)/$($Attachment.FileName)"\n                            #Download attachment\n                            m365 spo file get --webUrl $SiteURL --url $Attachment.ServerRelativeUrl --asFile --path $TargetFilePath\n                        }\n                        Catch {\n                            Write-Error "Error Downloading This Attachment! $($_.Exception.Message)" \n                        }\n                    }\n                }\n                else {\n                    Write-Warning "Attachments Not Found For This List Item!"\n                }\n            }\n            Catch {\n                Write-Error "Error Downloading This List Item Attachments! $($_.Exception.Message)"\n            }\n        }\n    }\n    Catch {\n        Write-Error "Error Downloading List Attachments! $($_.Exception.Message)"\n    }\n}\n\n#Set Parameters\n$TenantName = "tenant-name"\n$SiteRelativePath = "site-relative-path"\n$ListTitle = "list-title"\n\n$DownloadDirectory = "$($PSScriptRoot)/$($ListTitle)"\n$SiteURL = "https://$($TenantName).sharepoint.com/$($SiteRelativePath)"\n\n#Call the function to download list items attachments\nDownload-ListAttachments -TenantName $TenantName -SiteURL $SiteURL -ListTitle $ListTitle -DownloadDirectory $DownloadDirectory\n```\n')))}f.isMDXComponent=!0}}]);