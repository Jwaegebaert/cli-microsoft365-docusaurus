"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6859],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var n=i(67294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(i),m=s,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return i?n.createElement(h,r(r({ref:t},c),{},{components:i})):n.createElement(h,r({ref:t},c))}));function h(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=i.length,r=new Array(o);r[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:s,r[1]=a;for(var p=2;p<o;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},92017:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=i(87462),s=(i(67294),i(3905));const o={tags:["compliance"]},r="Detecting PII exists in SharePoint List using AWS Comprehend",a={unversionedId:"sample-scripts/spo/detecting-pii-exists-in-sharepointlist-column/index",id:"sample-scripts/spo/detecting-pii-exists-in-sharepointlist-column/index",title:"Detecting PII exists in SharePoint List using AWS Comprehend",description:"Author: Joseph Velliah",source:"@site/docs/sample-scripts/spo/detecting-pii-exists-in-sharepointlist-column/index.md",sourceDirName:"sample-scripts/spo/detecting-pii-exists-in-sharepointlist-column",slug:"/sample-scripts/spo/detecting-pii-exists-in-sharepointlist-column/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/detecting-pii-exists-in-sharepointlist-column/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/detecting-pii-exists-in-sharepointlist-column/index.md",tags:[{label:"compliance",permalink:"/cli-microsoft365-docusaurus/tags/compliance"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["compliance"]},sidebar:"sampleScripts",previous:{title:"Delete all (non-group connected) modern SharePoint sites",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/delete-non-group-connected-modern-sites/"},next:{title:"Disable specified Tenant-wide Extension",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/disable-tenant-wide-extension/"}},l={},p=[],c={toc:p};function d(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"detecting-pii-exists-in-sharepoint-list-using-aws-comprehend"},"Detecting PII exists in SharePoint List using AWS Comprehend"),(0,s.kt)("p",null,"Author: ",(0,s.kt)("a",{parentName:"p",href:"https://blog.josephvelliah.com/detecting-pii-exist-in-sharepoint-list-using-aws-comprehend"},"Joseph Velliah")),(0,s.kt)("p",null,"Personally Identifiable Information (PII) is information that, when used alone or with other relevant data, can identify an individual. Sensitive personally identifiable information can include full name, SSN, driver\u2019s license, financial information and medical records. As PII can be used to identify an individual, signify a major threat to companies. If breached, this information can lead to lawsuits and can damage company\u2019s trustworthiness."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/comprehend/"},"Amazon Comprehend")," is a natural-language processing (NLP) service that uses machine learning to uncover valuable insights and connections in text and documents. We can now use Amazon Comprehend to protect and control who has access to sensitive data by identifying and redacting Personally Identifiable Information (PII) from text and documents."),(0,s.kt)("p",null,"Also, we can redact documents(stored in an Amazon S3 bucket) by using Amazon Comprehend asynchronous analysis job. We can choose redaction mode Replace to mask PII entity with character and replace the characters in PII entities with a symbol(!, #, $, %, &, ","*",", or @). Asynchronous PII redaction batch processing will be a great use case for SharePoint Document Libraries."),(0,s.kt)("p",null,"In this post, I showcased using Amazon Comprehend to detect PII entities from a specific SharePoint List column and record the results in another list and CSV report via the AWS CLI and CLI for Microsoft 365. Take a look at this script, give it a try, and please send me your feedback via the contact page."),(0,s.kt)("p",null,"Thank you, ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/machine-learning/detecting-and-redacting-pii-using-amazon-comprehend/"},"Sriharsha M S"),", for your valuable article on this topic."),(0,s.kt)("p",null,"Prerequisites:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://pnp.github.io/cli-microsoft365/"},"CLI for Microsoft 365")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},"AWS CLI")),(0,s.kt)("li",{parentName:"ul"},"SharePoint Online Lists(as shown in screenshots)",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"PII List: Items containing dummy/real PII data"),(0,s.kt)("li",{parentName:"ul"},"PII Audit: To store the PII Audit audit detials"))),(0,s.kt)("li",{parentName:"ul"},"Necessary permission to access SharePoint Lists, Amazon Comprehend, and to write CSV files in local machine via")),(0,s.kt)("p",null,"Source & Target Lists:"),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:i(12847).Z},(0,s.kt)("img",{alt:"pii-source-list",src:i(7689).Z,width:"1080",height:"301"}))),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:i(69543).Z},(0,s.kt)("img",{alt:"pii-audit-report-list-schema",src:i(83154).Z,width:"883",height:"216"}))),(0,s.kt)("p",null,'=== "PowerShell"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```powershell\n$spolHostName = "https://tenant-name.sharepoint.com"\n$spolSiteRelativeUrl = "/sites/site-name"\n$spolListToAuditTitle = "PII List"\n$spolListToSaveAuditResponse = "PII Audit"\n$spolListFields = "ID,Title,Content"\n$resultDir = "Output"\n$executionDir = $PSScriptRoot\n$outputDir = "$executionDir/$resultDir"\n\nif (-not (Test-Path -Path "$outputDir" -PathType Container)) {\n    Write-Host "Creating $outputDir folder..." -ForegroundColor Yellow\n    New-Item -ItemType Directory -Path "$outputDir"\n}\n\n$spolSiteUrl = "${spolHostName}${spolSiteRelativeUrl}"\n$spolListItems = m365 spo listitem list --title $spolListToAuditTitle --webUrl $spolSiteUrl  --fields $spolListFields -o json | ConvertFrom-Json -AsHashtable\n\nif ($spolListItems.Count -gt 0) {\n    ForEach ($spolListItem in $spolListItems) {\n        $spolListItemId = $spolListItem.Id\n        $spolListItemContent = $spolListItem.Content\n        Write-Host "Auditing Item Id: ${spolListItemId} in ${spolListToAuditTitle}" -ForegroundColor Green\n        $response = aws comprehend detect-pii-entities --language-code en --text $spolListItemContent\n        $auditResponse = $response | ConvertFrom-Json -AsHashtable\n        if ($auditResponse.Entities) {\n            $auditEntitiesCount = $auditResponse.Entities.Count\n            if ($auditEntitiesCount -gt 0) {\n                Write-Host "Findings Count: ${auditEntitiesCount}" -ForegroundColor Magenta\n                $piiFindings = @()\n                ForEach ($piiEntity in $auditResponse.Entities) {\n                    $piiFinding = New-Object -TypeName PSObject\n                    $piiFinding | Add-Member -MemberType NoteProperty -Name "Score" -Value $piiEntity.Score\n                    $piiFinding | Add-Member -MemberType NoteProperty -Name "Type" -Value $piiEntity.Type\n                    $piiFinding | Add-Member -MemberType NoteProperty -Name "BeginOffset" -Value $piiEntity.BeginOffset\n                    $piiFinding | Add-Member -MemberType NoteProperty -Name "EndOffset" -Value $piiEntity.EndOffset\n                    $piiFindings += $piiFinding\n                }\n                $outputFilePath = "${outputDir}/$(get-date -f yyyyMMdd-HHmmss)-PIIFindings.csv"\n                $piiFindings | Export-Csv -Path $outputFilePath -NoTypeInformation\n                $auditEntry = m365 spo listitem add --contentType Item --listTitle $spolListToSaveAuditResponse --webUrl $spolSiteUrl --Title $spolListToAuditTitle --ItemID $spolListItemId --AuditCount $auditResponse.Entities.Count --AuditResult $outputFilePath -o json | ConvertFrom-Json -AsHashtable\n                $auditEntryId = $auditEntry.Id\n                Write-Host "Audit added for source Item Id: ${spolListItemId} with Item Id ${auditEntryId} in target list ${spolListToSaveAuditResponse}" -ForegroundColor Green\n            }\n            else {\n                Write-Host "There are no findings in this item" -ForegroundColor Yellow\n            }\n        }\n        else {\n            Write-Host "There are no findings in this item" -ForegroundColor Yellow\n        }\n    }\n}\nelse {\n    Write-Host "No items in this list" -ForegroundColor Yellow\n}\n```\n')),(0,s.kt)("p",null,"Output:"),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:i(10988).Z},(0,s.kt)("img",{alt:"pii-audit-report-list",src:i(4044).Z,width:"1157",height:"223"}))),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:i(33735).Z},(0,s.kt)("img",{alt:"pii-audit-report-data",src:i(8930).Z,width:"868",height:"420"}))))}d.isMDXComponent=!0},33735:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/pii-audit-report-data-76319626998a0689892702aa9b871a04.png"},69543:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/pii-audit-report-list-schema-dc56f3808dc925f8a6c009958030e278.png"},10988:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/pii-audit-report-list-c1f1b4f800c4d9079c578315be90c02a.png"},12847:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/pii-source-list-6b387f5c56e5dff9e15c47ce7dbf45f4.png"},8930:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pii-audit-report-data-76319626998a0689892702aa9b871a04.png"},83154:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pii-audit-report-list-schema-dc56f3808dc925f8a6c009958030e278.png"},4044:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pii-audit-report-list-c1f1b4f800c4d9079c578315be90c02a.png"},7689:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pii-source-list-6b387f5c56e5dff9e15c47ce7dbf45f4.png"}}]);