"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[75323],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=o.createContext({}),p=function(e){var t=o.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(m.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,m=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),l=p(r),h=n,f=l["".concat(m,".").concat(h)]||l[h]||u[h]||s;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=h;var a={};for(var m in t)hasOwnProperty.call(t,m)&&(a[m]=t[m]);a.originalType=e,a[l]="string"==typeof e?e:n,i[1]=a;for(var p=2;p<s;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},66990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const s={tags:["provisioning","cleanup"]},i="Delete custom color themes from SharePoint",a={unversionedId:"sample-scripts/spo/remove-custom-themes/index",id:"sample-scripts/spo/remove-custom-themes/index",title:"Delete custom color themes from SharePoint",description:"Author: Laura Kokkarinen",source:"@site/docs/sample-scripts/spo/remove-custom-themes/index.md",sourceDirName:"sample-scripts/spo/remove-custom-themes",slug:"/sample-scripts/spo/remove-custom-themes/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/remove-custom-themes/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/remove-custom-themes/index.md",tags:[{label:"provisioning",permalink:"/cli-microsoft365-docusaurus/tags/provisioning"},{label:"cleanup",permalink:"/cli-microsoft365-docusaurus/tags/cleanup"}],version:"current",lastUpdatedAt:1671570658,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{tags:["provisioning","cleanup"]},sidebar:"sampleScripts",previous:{title:"Remove SharePoint API permissions",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/remove-api-permissions/"},next:{title:"Remove orphaned redirect sites",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/remove-orphaned-redirect-sites/"}},m={},p=[],c={toc:p},l="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"delete-custom-color-themes-from-sharepoint"},"Delete custom color themes from SharePoint"),(0,n.kt)("p",null,"Author: ",(0,n.kt)("a",{parentName:"p",href:"https://laurakokkarinen.com/does-it-spark-joy-powershell-scripts-for-keeping-your-development-environment-tidy-and-spotless/#delete-all-custom-color-themes-from-sharepoint"},"Laura Kokkarinen")),(0,n.kt)("p",null,"Have you been creating a lot of beautiful themes lately and testing them in your dev tenant, but don\u2019t want to keep them anymore? If yes, then this PowerShell script is for you."),(0,n.kt)("p",null,'=== "PowerShell"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```powershell\n$sparksjoy = "Cat Lovers United", "Multicolored theme"\n$themes = m365 spo theme list -o json | ConvertFrom-Json\n$themes = $themes | where {-not ($sparksjoy -contains $_.name)}\n$themes | Format-Table name\nif ($themes.Count -eq 0) { break }\nRead-Host -Prompt "Press Enter to start deleting (CTRL + C to exit)"\n$progress = 0\n$total = $themes.Count\nforeach ($theme in $themes)\n{\n  $progress++\n  write-host $progress / $total":" $theme.name\n  m365 spo theme remove --name "$($theme.name)" --confirm\n}\n```\n')),(0,n.kt)("p",null,'=== "Bash"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```bash\n#!/bin/bash\n\n# requires jq: https://stedolan.github.io/jq/\n\nsparksjoy=("Cat Lovers United" "Multicolored theme")\nthemestoremove=()\nwhile read theme; do\n  exists=false\n  for keep in "${sparksjoy[@]}"; do\n    if [ "$keep" == "$theme" ] ; then\n      exists=true\n      break\n    fi\n  done\n  if [ "$exists" = false ]; then\n    themestoremove+=("$theme")\n  fi\ndone < <(m365 spo theme list -o json | jq -r \'.[].name\')\n\nif [ ${#themestoremove[@]} = 0 ]; then\n  exit 1\nfi\n\nprintf \'%s\\n\' "${themestoremove[@]}"\necho "Press Enter to start deleting (CTRL + C to exit)"\nread foo\n\nfor theme in "${themestoremove[@]}"; do\n  echo "Deleting $theme..."\n  m365 spo theme remove --name "$theme" --confirm\ndone\n```\n')))}u.isMDXComponent=!0}}]);