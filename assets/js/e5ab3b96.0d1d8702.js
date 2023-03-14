"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[89352],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),c=u(r),p=o,d=c["".concat(s,".").concat(p)]||c[p]||m[p]||l;return r?n.createElement(d,a(a({ref:t},f),{},{components:r})):n.createElement(d,a({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const l={tags:["flows"]},a="Resubmit all failed flow runs for a flow in an environment",i={unversionedId:"sample-scripts/flow/resubmit-all-failed-flow-runs/index",id:"sample-scripts/flow/resubmit-all-failed-flow-runs/index",title:"Resubmit all failed flow runs for a flow in an environment",description:"Author: Mohamed Ashiq Faleel",source:"@site/docs/sample-scripts/flow/resubmit-all-failed-flow-runs/index.md",sourceDirName:"sample-scripts/flow/resubmit-all-failed-flow-runs",slug:"/sample-scripts/flow/resubmit-all-failed-flow-runs/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/resubmit-all-failed-flow-runs/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/flow/resubmit-all-failed-flow-runs/index.md",tags:[{label:"flows",permalink:"/cli-microsoft365-docusaurus/tags/flows"}],version:"current",lastUpdatedAt:1677877396,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{tags:["flows"]},sidebar:"sampleScripts",previous:{title:"Inventory Flows By Creator",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/inventory-flows-by-author/"},next:{title:"Search flows for connections",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/search-flows-for-connection/"}},s={},u=[],f={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resubmit-all-failed-flow-runs-for-a-flow-in-an-environment"},"Resubmit all failed flow runs for a flow in an environment"),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://ashiqf.com/2021/05/09/resubmit-your-failed-power-automate-flow-runs-automatically-using-m365-cli-and-rest-api/"},"Mohamed Ashiq Faleel")),(0,o.kt)("p",null,"Have you ever been forced to resubmit lot of failed Power Automate flow runs manually?"),(0,o.kt)("p",null,"Microsoft 365 CLI cmdlets to the rescue, it will help you resubmit the flow runs automatically."),(0,o.kt)("p",null,"This script will resubmit all failed flow runs of a Power Automate flow created in an environment. Pass the Flow environment id and the flow guid as parameter while running the script."),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```powershell\n$flowEnvironment = $args[0]\n$flowGUID = $args[1]\n$flowRuns = m365 flow run list --environmentName $flowEnvironment --flowName $flowGUID --status Failed --output json | ConvertFrom-Json\nforeach ($run in $flowRuns) {\n  Write-Output "Run details: " $run\n  #Resubmit all the failed flows\n  m365 flow run resubmit --environmentName $flowEnvironment --flowName $flowGUID --name $run.name --confirm\n  Write-Output "Run resubmitted successfully"\n}\n```\n')))}m.isMDXComponent=!0}}]);