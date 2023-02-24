"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[32409],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),l=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(f,s(s({ref:r},c),{},{components:t})):o.createElement(f,s({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97126:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(87462),n=(t(67294),t(3905));const a={tags:["cleanup","groups"]},s="Delete all Microsoft 365 groups",i={unversionedId:"sample-scripts/aad/delete-m365-groups/index",id:"sample-scripts/aad/delete-m365-groups/index",title:"Delete all Microsoft 365 groups",description:"Author: Laura Kokkarinen",source:"@site/docs/sample-scripts/aad/delete-m365-groups/index.md",sourceDirName:"sample-scripts/aad/delete-m365-groups",slug:"/sample-scripts/aad/delete-m365-groups/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/aad/delete-m365-groups/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/aad/delete-m365-groups/index.md",tags:[{label:"cleanup",permalink:"/cli-microsoft365-docusaurus/tags/cleanup"},{label:"groups",permalink:"/cli-microsoft365-docusaurus/tags/groups"}],version:"current",lastUpdatedAt:1671570658,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{tags:["cleanup","groups"]},sidebar:"sampleScripts",previous:{title:"Analyze users for known data breaches with have i been pwned",permalink:"/cli-microsoft365-docusaurus/sample-scripts/aad/analyze-users-haveibeenpwnd/"},next:{title:"Delete all Microsoft 365 groups and SharePoint sites",permalink:"/cli-microsoft365-docusaurus/sample-scripts/aad/delete-m365-groups-and-sharepoint-sites/"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"delete-all-microsoft-365-groups"},"Delete all Microsoft 365 groups"),(0,n.kt)("p",null,"Author: ",(0,n.kt)("a",{parentName:"p",href:"https://laurakokkarinen.com/does-it-spark-joy-powershell-scripts-for-keeping-your-development-environment-tidy-and-spotless/#delete-all-office-365-groups"},"Laura Kokkarinen")),(0,n.kt)("p",null,"There are so many different ways to create Microsoft 365 groups. Teams, Planner, SharePoint team sites, etc. \u2014 you can accumulate a lot of them very fast. Use this script below to delete the ones you no longer need."),(0,n.kt)("p",null,'=== "PowerShell"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```powershell\n$sparksjoy = "All Company", "TEMPLATE Project", "We have cats in this team! Join!"\n$groups = m365 aad o365group list -o json | ConvertFrom-Json\n$groups = $groups | where {-not ($sparksjoy -contains $_.displayName)}\nif ($groups.Count -eq 0) { break }\n$groups | Format-Table displayName\nWrite-Host "Total:" $groups.Count\nRead-Host -Prompt "Press Enter to start deleting (CTRL + C to exit)"\n$progress = 0\n$total = $groups.Count\nforeach ($group in $groups)\n{\n    $progress++\n    Write-Host $progress / $total":" $group.displayName\n    m365 aad o365group remove --id $group.id --confirm\n}\n```\n')),(0,n.kt)("p",null,'=== "Bash"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```bash\n#!/bin/bash\n\n# requires jq: https://stedolan.github.io/jq/\n\nsparksjoy=("All Company" "TEMPLATE Project" "We have cats in this team! Join!")\ngroupstoremove=()\nwhile read o365group; do\n  exists=false\n  displayName=$(echo $o365group | cut -d\';\' -f 1)\n  for keep in "${sparksjoy[@]}"; do\n    if [ "$keep" == "$displayName" ] ; then\n      exists=true\n      break\n    fi\n  done\n  if [ "$exists" = false ]; then\n    groupstoremove+=("$o365group")\n  fi\ndone < <(m365 aad o365group list -o json | jq -r \'.[] | .displayName + ";" + .id\')\n\nif [ ${#groupstoremove[@]} = 0 ]; then\n  exit 1\nfi\n\nprintf \'%s\\n\' "${groupstoremove[@]}"\necho "Press Enter to start deleting (CTRL + C to exit)"\nread foo\n\nfor o365group in "${groupstoremove[@]}"; do\n  displayName=$(echo $o365group | cut -d\';\' -f 1)\n  id=$(echo $o365group | cut -d\';\' -f 2)\n  echo "Deleting $displayName..."\n  m365 aad o365group remove --id "$id" --confirm\ndone\n```\n')))}d.isMDXComponent=!0}}]);