"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71974],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=s.createContext({}),a=function(e){var t=s.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=a(e.components);return s.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=a(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?s.createElement(f,o(o({ref:t},l),{},{components:r})):s.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:n,o[1]=p;for(var a=2;a<i;a++)o[a]=r[a];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86643:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>a});var s=r(87462),n=(r(67294),r(3905));const i={tags:["cleanup"]},o="Delete custom SharePoint site scripts",p={unversionedId:"sample-scripts/spo/remove-site-scripts/index",id:"sample-scripts/spo/remove-site-scripts/index",title:"Delete custom SharePoint site scripts",description:"Author: Laura Kokkarinen",source:"@site/docs/sample-scripts/spo/remove-site-scripts/index.md",sourceDirName:"sample-scripts/spo/remove-site-scripts",slug:"/sample-scripts/spo/remove-site-scripts/",permalink:"/sample-scripts/spo/remove-site-scripts/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/remove-site-scripts/index.md",tags:[{label:"cleanup",permalink:"/tags/cleanup"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["cleanup"]},sidebar:"sampleScripts",previous:{title:"Delete custom SharePoint site designs",permalink:"/sample-scripts/spo/remove-site-designs/"},next:{title:"Remove a Site Collection Admin User from all Site Collections",permalink:"/sample-scripts/spo/remove-siteCollection-admin-user/"}},c={},a=[],l={toc:a};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"delete-custom-sharepoint-site-scripts"},"Delete custom SharePoint site scripts"),(0,n.kt)("p",null,"Author: ",(0,n.kt)("a",{parentName:"p",href:"https://laurakokkarinen.com/does-it-spark-joy-powershell-scripts-for-keeping-your-development-environment-tidy-and-spotless/#delete-all-sharepoint-site-designs-and-site-scripts"},"Laura Kokkarinen")),(0,n.kt)("p",null,"Site designs and especially site scripts can be something that ends up just hanging around in your tenant for a long time even though you no longer need them for anything. Use the scripts below to get rid of them. You might also find some site scripts that are not linked to any site design and hence never get executed!"),(0,n.kt)("p",null,'=== "PowerShell"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```powershell\n$sparksjoy = "Project Site", "Issues List"\n$siteScripts = m365 spo sitescript list -o json | ConvertFrom-Json\n$siteScripts = $siteScripts | where {  -not ($sparksjoy -contains $_.Title)}\nif ($siteScripts.Count -eq 0) { break }\n$siteScripts | Format-Table Title, SiteScriptIds, Description\nRead-Host -Prompt "Press Enter to start deleting (CTRL + C to exit)"\n$progress = 0\n$total = $siteScripts.Count\nforeach ($siteScript in $siteScripts)\n{\n  $progress++\n  Write-Host $progress / $total":" $siteScript.Title\n  m365 spo sitescript remove -i $siteScript.Id --confirm\n}\n```\n')),(0,n.kt)("p",null,'=== "Bash"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```bash\n#!/bin/bash\n\n# requires jq: https://stedolan.github.io/jq/\n\nsparksjoy=("Project Site"  "Issues List")\nsitesscriptstoremove=()\nwhile read script; do\nscriptTitle=$(echo ${script} | jq -r \'.Title\')\n  exists=true\n  for keep in "${sparksjoy[@]}"; do\n    if [ "$keep" == "$scriptTitle" ] ; then\n      exists=false\n      break\n    fi\n  done\n  if [ "$exists" = true ]; then\n    echo $scriptTitle\n    sitesscriptstoremove+=("$script")\n  fi\n\ndone < <(m365 spo sitescript list -o json | jq -c \'.[]\')\n\nif [ ${#sitesscriptstoremove[@]} = 0 ]; then\n  exit 1\nfi\n\necho "Press Enter to start deleting (CTRL + C to exit)"\nread foo\n\nfor script in "${sitesscriptstoremove[@]}"; do\n  scriptTitle=$(echo ${script} | jq -r \'.Title\')\n  scriptId=$(echo ${script} | jq -r \'.Id\')\n  echo "Deleting Site script..."  $scriptTitle\n  m365 spo sitescript remove --id $scriptId --confirm\ndone\n```\n')))}m.isMDXComponent=!0}}]);