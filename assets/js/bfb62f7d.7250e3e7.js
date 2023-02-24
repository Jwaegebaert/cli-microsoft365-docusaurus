"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[97247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,w=f["".concat(i,".").concat(m)]||f[m]||u[m]||s;return n?r.createElement(w,a(a({ref:t},p),{},{components:n})):r.createElement(w,a({ref:t},p))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={tags:["flows","reports"]},a="Search flows for connections",l={unversionedId:"sample-scripts/flow/search-flows-for-connection/index",id:"sample-scripts/flow/search-flows-for-connection/index",title:"Search flows for connections",description:"Author: Albert-Jan Schot",source:"@site/docs/sample-scripts/flow/search-flows-for-connection/index.md",sourceDirName:"sample-scripts/flow/search-flows-for-connection",slug:"/sample-scripts/flow/search-flows-for-connection/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/search-flows-for-connection/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/flow/search-flows-for-connection/index.md",tags:[{label:"flows",permalink:"/cli-microsoft365-docusaurus/tags/flows"},{label:"reports",permalink:"/cli-microsoft365-docusaurus/tags/reports"}],version:"current",lastUpdatedAt:1671570658,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{tags:["flows","reports"]},sidebar:"sampleScripts",previous:{title:"Resubmit all failed flow runs for a flow in an environment",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/resubmit-all-failed-flow-runs/"},next:{title:"List all Power Platform Environments and their Flows and Apps",permalink:"/cli-microsoft365-docusaurus/sample-scripts/powerplatform/list-environments-flows-apps/"}},i={},c=[],p={toc:c},f="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"search-flows-for-connections"},"Search flows for connections"),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://www.cloudappie.nl/search-flows-connections/"},"Albert-Jan Schot")),(0,o.kt)("p",null,"Search all flows as, an administrator, for a specific search string and report results. This sample allows you to get a report of all flows that are connected to a specific site or list. The ",(0,o.kt)("inlineCode",{parentName:"p"},"$searchString")," can be any value but results are the best when using a GUID or site collection URL."),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```powershell\nWrite-Output "Retrieving all environments"\n\n$environments = m365 flow environment list -o json | ConvertFrom-Json\n$searchString = "15f5b014-9508-4941-b564-b4ab1b863a7a" #listGuid\n$path = "exportedflow.json";\n\nForEach ($env in $environments) {\n    Write-Output "Processing $($env.displayName)..."\n\n    $flows = m365 flow list --environment $env.name --asAdmin -o json | ConvertFrom-Json\n\n    ForEach ($flow in $flows) {\n        Write-Output "Processing $($flow.displayName)..."\n        m365 flow export --id $flow.name --environment $env.name --format json --path $path\n\n        $flowData = Get-Content -Path $path -ErrorAction SilentlyContinue\n\n        if ($null -ne $flowData) {\n            if ($flowData.Contains($searchString)) {\n                Write-Output $($flow.displayName + "contains your search string" + $searchString)\n                Write-Output $flow.id\n            }\n\n            Remove-Item $path -Confirm:$false\n        }\n    }\n}\n```\n')))}u.isMDXComponent=!0}}]);