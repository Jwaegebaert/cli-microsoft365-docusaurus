"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33289],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),c=o,d=m["".concat(l,".").concat(c)]||m[c]||f[c]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65462:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={tags:["flows","reports","users"]},a="Inventory Flows By Creator",s={unversionedId:"sample-scripts/flow/inventory-flows-by-author/index",id:"sample-scripts/flow/inventory-flows-by-author/index",title:"Inventory Flows By Creator",description:"Author: Pete Skelly",source:"@site/docs/sample-scripts/flow/inventory-flows-by-author/index.md",sourceDirName:"sample-scripts/flow/inventory-flows-by-author",slug:"/sample-scripts/flow/inventory-flows-by-author/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/inventory-flows-by-author/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/flow/inventory-flows-by-author/index.md",tags:[{label:"flows",permalink:"/cli-microsoft365-docusaurus/tags/flows"},{label:"reports",permalink:"/cli-microsoft365-docusaurus/tags/reports"},{label:"users",permalink:"/cli-microsoft365-docusaurus/tags/users"}],version:"current",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["flows","reports","users"]},sidebar:"sampleScripts",previous:{title:"Flow runs day summary report",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/flow-runs-day-summary/"},next:{title:"Resubmit all failed flow runs for a flow in an environment",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/resubmit-all-failed-flow-runs/"}},l={},p=[],u={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inventory-flows-by-creator"},"Inventory Flows By Creator"),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://peteskelly.com/lightweight-reports-using-the-office-365-cli-and-jq/"},"Pete Skelly")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://admin.flow.microsoft.com"},"Power Automate Admin Center")," provides a list of the Flows in your tenant, but there is no way to easily export Flows from the Flow admin center for governance activities. This script retrieves Flows from the Default Environment and maps creator information from Azure AD to list Flows by owner, state and trigger type."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")," version of this script uses an external file to process owner mapping. This is provided in the jq tab and should be saved to the same folder as the bash script and named ",(0,o.kt)("inlineCode",{parentName:"p"},"merge.jq"),"."),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```powershell\n#!/usr/local/bin/pwsh -File\n\n$DIR = Split-Path $script:MyInvocation.MyCommand.Path\n$TMP_DIR = "./tmp"\n$TMP_FLOWS = "$TMP_DIR/flows.json"\n$FLOWSCSV = "flows.csv"\n\nfunction CleanDistFolder {\n    # Remove the dist folder as needed\n    if (Test-Path -Path "$TMP_DIR" -PathType Container) {\n        Remove-Item -Path "$TMP_DIR" -Recurse -Force -Confirm:$false -ErrorAction SilentlyContinue\n    }\n}\n\n$CURRENT_USER = $(m365 status).Split(\':\')[1]\nWrite-Host "Logged in as $CURRENT_USER"\n\ntry {\n    if (-not (Test-Path -Path "$TMP_DIR" -PathType Container)) {\n        Write-Host " Creating $TMP_DIR folder..."\n        New-Item -ItemType Directory -Path "$TMP_DIR"\n    }\n\n    #Step 1 - Get the default environment\n    Write-Host "Querying for default Flow environment..."\n    $flowEnvironments = m365 flow environment list --output json | ConvertFrom-Json\n    $defaultEnvironment = $flowEnvironments[0].name\n    Write-Host "Found default environment $defaultEnvironment, querying Flows..."\n\n    # Step 2 - Get all of the flows using the cli and write flows json to a tmp file \n    # Use a JMESPath query to filter the size of the file. See https://github.com/pnp/cli-microsoft365/issues/1266\n    m365 flow list --environment $defaultEnvironment `\n        --query \'[].{name: name, displayName: properties.displayName,owner: properties.creator.userId, state: properties.state, created: properties.createdTime, lastModified: properties.lastModifiedTime, trigger: properties.definitionSummary.triggers[0].swaggerOperationId,  triggerType: properties.definitionSummary.triggers[0].type }\' --asAdmin --output json |\n        Out-File "$TMP_FLOWS" -Encoding ASCII\n    $flows = Get-Content "$TMP_FLOWS" | ConvertFrom-Json\n\n    #Step 3 - Get a unique list of the flow owners from the tmp file\n    Write-Host "Flows found, searching for owner values..."\n    $uniqueOwners = $flows.owner | Sort-Object | Get-Unique\n    Write-Host "There are $($uniqueOwners.Count) unique Flows owners."\n    Write-Host "Building owner information mappings..."\n\n    #Step 4 - map properties.creator.userId\'s to {name, email} mapping hashtable\n    Write-Host "Querying graph for userids..."\n    $userMap = @{}\n    $uniqueOwners | ForEach-Object {\n        Write-Host "Querying graph for userid $_..."\n        m365 aad user get --id $_ --output json  | ConvertFrom-Json\n    } | ForEach-Object {\n        $userMap.Add($_.id, @{\n                upn = $_.userPrincipalName\n                displayName = $_.displayName\n                mail = $_.mail\n            }\n        )\n    }\n    # And add the Owner information to each flow entry to get owner name and email  \n    Write-Host "Mapping owner information..."\n    $flows | ForEach-Object {\n        $_ | Add-Member -MemberType NoteProperty -Name "upn" -Value  $userMap[$_.owner].upn\n        $_ | Add-Member -MemberType NoteProperty -Name "ownerName" -Value  $userMap[$_.owner].displayName\n        $_ | Add-Member -MemberType NoteProperty -Name "ownerMail" -Value  $userMap[$_.owner].mail\n    }\n\n    #Step 5 - Create a CSV file with header row, flow information and owner email\n    $flows | Export-Csv -Path "$FLOWSCSV" -NoTypeInformation\n\n}\nfinally {\n    CleanDistFolder\n}\n\n# if we are on macOS try opening the file with Excel\nif ($IsMacOS) {\n    $answer = Read-Host -Prompt "Open CSV file in Excel? (y/n)"\n    switch ($answer)\n    {\n      y {\n            open -a "/Applications/Microsoft Excel.app" "$DIR/$FLOWSCSV"\n        }\n      Default {\n          Write-Host "Open $DIR/$FLOWSCSV to review report."\n        }\n    }\n}\n```\n')),(0,o.kt)("p",null,'=== "Bash"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```bash\n#!/usr/bin/env bash\nset -e\n\nDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"\nTMP_ENVIRONMENTS=./tmp/environments.json\nTMP_FLOWS=./tmp/flows.json\nTMP_OWNERS=./tmp/owners.json\nTMP_MAPPEDFLOWS=./tmp/mappedFlows.json\nFLOWSCSV=flows.csv\nJQ_MERGE_FILE=merge.jq\n\nfunction cleanup {\n    #clean up the tmp files\n    rm -rf tmp\n    echo "Cleaned tmp folder..."\n}\n# Configure trap to call finish whenever EXIT is called to ensure cleanup of tmp\ntrap cleanup EXIT\n\nCURRENT_USER=$(m365 status --output json | jq \'.connectedAs\')\necho "Logged in as $CURRENT_USER"\n\nif [[ ! -z tmp ]]; then\n    echo "Creating temporary folder for file manipulation..."\n    mkdir tmp\nfi\n\n#Step 1 - Get the default environment\necho "Querying for default Flow environment..."\nDEFAULT_ENVIRONMENT=$(m365 flow environment list --output json | jq -r \'.[] | select(.name | contains("\'"Default"\'")) | .name\')\necho "Found default environment $DEFAULT_ENVIRONMENT, querying Flows..."\n\n#Step 2 - Get all of the flows using the cli and write flows json to a tmp file\n#See https://github.com/pnp/cli-microsoft365/issues/1266 for temp file usage reason\nm365 flow list --environment $DEFAULT_ENVIRONMENT --asAdmin --output json > $TMP_FLOWS\n\n#Step 3 - Get a unique list of the flow owners from the tmp file\necho "Flows found, searching for owner values..."\nuniqueOwners=$(cat $TMP_FLOWS | jq -r \'map({userId: .properties.creator.userId}) | unique | .[] | .userId\') \n\n#Get the owner count and loop to call Microsoft Graph and build owner mapping file  \nownerCount=$(cat $TMP_FLOWS | jq -r \'map({userId: .properties.creator.userId}) | unique | length\') \n\necho "There are $ownerCount unique Flows owners."\necho "Building owner information json mapping file..."\necho "[" > $TMP_OWNERS  \ni=0\nfor ownerId in $uniqueOwners; do\n    echo "Querying graph for userid $ownerId..."\n    echo $(m365 aad user get --id $ownerId --output json) >> $TMP_OWNERS\n    if [[ $i -lt $ownerCount-1 ]]; then\n        echo "," >> $TMP_OWNERS\n    fi\n    i=$(expr $i + 1)  \ndone\necho "]" >> $TMP_OWNERS  \n\n#Step 4 - Use a jq module file to create a map of the creator.usedId\'s to {name, email}\necho "Mapping owners information..."\njq -n --argfile flows $TMP_FLOWS --argfile owners $TMP_OWNERS -f $JQ_MERGE_FILE >> $TMP_MAPPEDFLOWS\n\n#Step 5 - Create a CSV file with header row, flow information and owner email\necho "Building CSV file..."\njq -r \'["FlowID", "DisplayName", "State", "Created", "LastModified", "Owner", "OwnerName", "OwnerMail", "Upn", "Trigger", "TriggerType"], (.[] | [.name, .properties.displayName, .properties.state, .properties.createdTime, .properties.lastModifiedTime, .properties.creator.userId, .properties.creator.displayName, .properties.creator.mail, .properties.creator.userPrincipalName, .properties.definitionSummary.triggers[0].swaggerOperationId, .properties.definitionSummary.triggers[0].type]) | @csv\' $TMP_MAPPEDFLOWS > $FLOWSCSV\n\n# if we are on macOS try opening the file with Excel\nif [[ "$OSTYPE" == "darwin"* ]]; then\n    echo "Open CSV file in Excel? (y/n)?"\n    read answer\n    if [ "$answer" != "${answer#[Yy]}" ] ;then\n        open -a /Applications/Microsoft\\ Excel.app $DIR/$FLOWSCSV\n    else\n        echo "Open $DIR/file.csv to review report."\n    fi\nfi\n```\n')),(0,o.kt)("p",null,'=== "jq"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```bash\n# Create a dictionary based on the $owner.id property from the owners array parameter\n($owners | map(select(.id != null)) | map( {(.id): {displayName, userPrincipalName, mail}}) | add) as $dict\n# Output each flow, append owner information from each entry using flow creator.userId property as the key\n| $flows |.[].properties.creator |= . + $dict[.userId]\n```\n")))}m.isMDXComponent=!0}}]);