"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[10711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={tags:["cleanup"]},i="Empty the tenant recycle bin",a={unversionedId:"sample-scripts/spo/empty-tenant-recyclebin/index",id:"sample-scripts/spo/empty-tenant-recyclebin/index",title:"Empty the tenant recycle bin",description:"Author: Laura Kokkarinen",source:"@site/docs/sample-scripts/spo/empty-tenant-recyclebin/index.md",sourceDirName:"sample-scripts/spo/empty-tenant-recyclebin",slug:"/sample-scripts/spo/empty-tenant-recyclebin/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/empty-tenant-recyclebin/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/empty-tenant-recyclebin/index.md",tags:[{label:"cleanup",permalink:"/cli-microsoft365-docusaurus/tags/cleanup"}],version:"current",lastUpdatedAt:1671570658,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{tags:["cleanup"]},sidebar:"sampleScripts",previous:{title:"Download attachments from a SharePoint Online list",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/download-attachments-from-list/"},next:{title:"Ensure the Site Assets Library is created",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/ensure-siteassets-library/"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"empty-the-tenant-recycle-bin"},"Empty the tenant recycle bin"),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://laurakokkarinen.com/does-it-spark-joy-powershell-scripts-for-keeping-your-development-environment-tidy-and-spotless/#empty-the-tenant-recycle-bin"},"Laura Kokkarinen")),(0,o.kt)("p",null,"Your deleted modern SharePoint sites are not going to disappear from the UI before they have been removed from the tenant recycle bin. You can either wait for three months, delete them manually via the SharePoint admin center, or run the CLI for Microsoft 365 script below."),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```powershell\n$deletedSites = m365 spo tenant recyclebinitem list -o json | ConvertFrom-Json\n$deletedSites | Format-Table Url\n\nif ($deletedSites.Count -eq 0) { break }\n\nRead-Host -Prompt "Press Enter to start deleting (CTRL + C to exit)"\n\n$progress = 0\n$total = $deletedSites.Count\n\nforeach ($deletedSite in $deletedSites)\n{\n  $progress++\n  Write-Host $progress / $total":" $deletedSite.Url\n  m365 spo tenant recyclebinitem remove -u $deletedSite.Url --confirm\n}\n```\n')),(0,o.kt)("p",null,'=== "Bash"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```bash\n#!/bin/bash\n\n# requires jq: https://stedolan.github.io/jq/\n\ndeletedsites=( $(m365 spo tenant recyclebinitem list -o json | jq -r \'.[].Url\') )\n\nif [ ${#deletedsites[@]} = 0 ]; then\n  exit 1\nfi\n\nprintf \'%s\\n\' "${deletedsites[@]}"\necho "Press Enter to start deleting (CTRL + C to exit)"\nread foo\n\nprogress=0\ntotal=${#deletedsites[@]}\n\nfor deletedsite in "${deletedsites[@]}"; do\n  ((progress++))\n  printf \'%s / %s:%s\\n\' "$progress" "$total" "$deletedsite"\n  m365 spo tenant recyclebinitem remove -u $deletedsite --confirm\ndone\n```\n')))}m.isMDXComponent=!0}}]);