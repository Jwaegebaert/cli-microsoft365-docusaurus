"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[20743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const s={tags:["cleanup","sites"]},i="Delete all (non-group connected) modern SharePoint sites",a={unversionedId:"sample-scripts/spo/delete-non-group-connected-modern-sites/index",id:"sample-scripts/spo/delete-non-group-connected-modern-sites/index",title:"Delete all (non-group connected) modern SharePoint sites",description:"Author: Laura Kokkarinen",source:"@site/docs/sample-scripts/spo/delete-non-group-connected-modern-sites/index.md",sourceDirName:"sample-scripts/spo/delete-non-group-connected-modern-sites",slug:"/sample-scripts/spo/delete-non-group-connected-modern-sites/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/delete-non-group-connected-modern-sites/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/delete-non-group-connected-modern-sites/index.md",tags:[{label:"cleanup",permalink:"/cli-microsoft365-docusaurus/tags/cleanup"},{label:"sites",permalink:"/cli-microsoft365-docusaurus/tags/sites"}],version:"current",lastUpdatedAt:1671570658,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{tags:["cleanup","sites"]},sidebar:"sampleScripts",previous:{title:"Copy list items between SharePoint lists",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/copy-listitems-sharepointlist/"},next:{title:"Detecting PII exists in SharePoint List using AWS Comprehend",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/detecting-pii-exists-in-sharepointlist-column/"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"delete-all-non-group-connected-modern-sharepoint-sites"},"Delete all (non-group connected) modern SharePoint sites"),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://laurakokkarinen.com/does-it-spark-joy-powershell-scripts-for-keeping-your-development-environment-tidy-and-spotless/#delete-all-non-group-connected-modern-sharepoint-sites"},"Laura Kokkarinen")),(0,o.kt)("p",null,"When you delete Microsoft 365 groups, the modern group-connected team sites get deleted with them. The script below handles the remaining modern sites: communication sites and groupless team sites."),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```powershell\n$sparksjoy = "Cat Lovers United", "Extranet", "Hub"\n$sites = m365 spo site list |ConvertFrom-Json\n$sites = $sites | where {  $_.template -eq "SITEPAGEPUBLISHING#0" -or $_.template -eq "STS#3" -and -not ($sparksjoy -contains $_.Title)}\nif ($sites.Count -eq 0) { break }\n$sites | Format-Table Title, Url, Template\nRead-Host -Prompt "Press Enter to start deleting (CTRL + C to exit)"\n$progress = 0\n$total = $sites.Count\nforeach ($site in $sites)\n{\n    $progress++\n    write-host $progress / $total":" $site.Title\n    write-host $site.Url\n    m365 spo site remove --url $site.Url\n}\n```\n')),(0,o.kt)("p",null,'=== "Bash"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```bash\n#!/bin/bash\n\n# requires jq: https://stedolan.github.io/jq/\n\nsparksjoy=("Communication site" "Comm Site" "Hub")\nsitestoremove=()\nwhile read site; do\nsiteTitle=$(echo ${site} | jq -r \'.Title\')\necho $siteTitle\n  exists=true\n  for keep in "${sparksjoy[@]}"; do\n    echo $keep\n    if [ "$keep" == "$siteTitle" ] ; then\n    echo "matched"\n      exists=false\n      break\n    fi\n  done\n  if [ "$exists" = true ]; then\n    sitestoremove+=("$site")\n  fi\n\ndone < <(m365 spo site list | jq -c \'.[] | select(.Template == "SITEPAGEPUBLISHING#0" or .Template == "STS#3")\')\n\nif [ ${#sitestoremove[@]} = 0 ]; then\n  exit 1\nfi\n\nprintf \'%s\\n\' "${sitestoremove[@]}"\necho "Press Enter to start deleting (CTRL + C to exit)"\nread foo\n\nfor site in "${sitestoremove[@]}"; do\n  siteUrl=$(echo ${site} | jq -r \'.Url\')\n  echo "Deleting site..."\n  echo $siteUrl\n  m365 spo site remove --url $siteUrl\ndone\n```\n')))}d.isMDXComponent=!0}}]);