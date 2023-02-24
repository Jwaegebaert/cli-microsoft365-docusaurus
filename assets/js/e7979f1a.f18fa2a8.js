"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[26472],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(o),f=n,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||l;return o?r.createElement(d,a(a({ref:t},c),{},{components:o})):r.createElement(d,a({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,a[1]=i;for(var s=2;s<l;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},36099:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const l={tags:["azure","flows","migration"]},a="Export a single flow to a Logic App",i={unversionedId:"sample-scripts/flow/export-flow-logicapp/index",id:"sample-scripts/flow/export-flow-logicapp/index",title:"Export a single flow to a Logic App",description:"Author: Albert-Jan Schot",source:"@site/docs/sample-scripts/flow/export-flow-logicapp/index.md",sourceDirName:"sample-scripts/flow/export-flow-logicapp",slug:"/sample-scripts/flow/export-flow-logicapp/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/export-flow-logicapp/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/flow/export-flow-logicapp/index.md",tags:[{label:"azure",permalink:"/cli-microsoft365-docusaurus/tags/azure"},{label:"flows",permalink:"/cli-microsoft365-docusaurus/tags/flows"},{label:"migration",permalink:"/cli-microsoft365-docusaurus/tags/migration"}],version:"current",lastUpdatedAt:1671570658,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{tags:["azure","flows","migration"]},sidebar:"sampleScripts",previous:{title:"Export all flows in environment",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/export-all-flows-in-environment/"},next:{title:"Flow runs day summary report",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/flow-runs-day-summary/"}},p={},s=[],c={toc:s},m="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"export-a-single-flow-to-a-logic-app"},"Export a single flow to a Logic App"),(0,n.kt)("p",null,"Author: ",(0,n.kt)("a",{parentName:"p",href:"https://www.cloudappie.nl/cli-m365-exportflow/"},"Albert-Jan Schot")),(0,n.kt)("p",null,"!!!"),(0,n.kt)("p",null,"Want to upgrade one of your Power Automate flows to a Logic App? Missing the option in the UI? Or just looking at an easy way to do it programmatically?"),(0,n.kt)("p",null,"By combining the CLI for Microsoft 365 and PowerShell we can make this task easy and repeatable."),(0,n.kt)("p",null,"This script will export the Power Automate flow ",(0,n.kt)("em",{parentName:"p"},"Your sample test flow"),", make sure to pass the correct name in the script, and your flow will be exported right away.\n!!!"),(0,n.kt)("p",null,'=== "PowerShell"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```powershell\nWrite-Output "Getting environment info..."\n$environmentId = $(m365 flow environment list --query "[?displayName == \'(default)\']" -o json | ConvertFrom-Json).Name\n$flowId = $(m365 flow list --environment $environmentId --query "[?displayName == \'Your sample test flow\']" -o json | ConvertFrom-Json)[0].Name\n\nWrite-Output "Getting Flow info..."\nm365 flow export --environment $environmentId --id $flowId -f \'json\'\n\nWrite-Output "Complete"\n```\n')),(0,n.kt)("p",null,'=== "Bash"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```bash\n#!/bin/bash\nENV_NAME=m365 flow environment list --query '[?contains(displayName,`default`)] .name'\nFLOW_NAME=m365 flow list --environment $environmentId --query '[?displayName == `Your sample test flow`] .name'\necho \"Exporting your flow\"\nm365 flow export --environment $ENV_NAME --id $FLOW_NAME -f 'json'\n```\n")))}u.isMDXComponent=!0}}]);