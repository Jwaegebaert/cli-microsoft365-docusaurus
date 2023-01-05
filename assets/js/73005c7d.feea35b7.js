"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(b,s(s({ref:t},l),{},{components:r})):n.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={tags:["provisioning","migration","pages"]},s="Add custom client-side web part to modern page",i={unversionedId:"sample-scripts/spo/add-custom-clientside-webpart-to-modern-page/index",id:"sample-scripts/spo/add-custom-clientside-webpart-to-modern-page/index",title:"Add custom client-side web part to modern page",description:"Author: Yannick Plenevaux",source:"@site/docs/sample-scripts/spo/add-custom-clientside-webpart-to-modern-page/index.md",sourceDirName:"sample-scripts/spo/add-custom-clientside-webpart-to-modern-page",slug:"/sample-scripts/spo/add-custom-clientside-webpart-to-modern-page/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/add-custom-clientside-webpart-to-modern-page/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/add-custom-clientside-webpart-to-modern-page/index.md",tags:[{label:"provisioning",permalink:"/cli-microsoft365-docusaurus/tags/provisioning"},{label:"migration",permalink:"/cli-microsoft365-docusaurus/tags/migration"},{label:"pages",permalink:"/cli-microsoft365-docusaurus/tags/pages"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["provisioning","migration","pages"]},sidebar:"sampleScripts",previous:{title:"Add App Catalog to SharePoint site",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/add-app-catalog/"},next:{title:"Add multiple folders in libraries using a csv file",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/add-multiple-folders-in-libraries-using-csv-file/"}},p={},c=[],l={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-custom-client-side-web-part-to-modern-page"},"Add custom client-side web part to modern page"),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://ypcode.wordpress.com"},"Yannick Plenevaux")),(0,o.kt)("p",null,"You've built an amazing new web part and now you want to programmatically add it to a modern page. This sample helps you add your web part to the page with your custom properties that might be dynamic according to your script."),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```powershell\n$site = "https://contoso.sharepoint.com/sites/site1"\n$pageName = "AModernPage.aspx"\n$webPartId = "af660fc1-c09b-4c15-b093-2b74b047286b"\n\n$choice1 = "Choice 1"\n$choice2 = "Choice 2"\n\n# Put all the web part properties in a PowerShell hashtable\n$webPartProps = @{\n    myChoices              = @($choice1, $choice2);\n    description            = \'My "Awesome" web part\';\n};\n\n# Build JSON string from PowerShell hashtable object\n$webPartPropsJson = $webPartProps | ConvertTo-Json -Compress\n# Make sure to add the backticks, double the JSON double-quotes and escape double quotes in properties\'values\n$webPartPropsJson = \'`"{0}"`\' -f $webPartPropsJson.Replace(\'\\\',\'\\\\\').Replace(\'"\', \'""\')\n\nm365 spo page clientsidewebpart add -u $site -n $pageName --webPartId $webPartId --webPartProperties $webPartPropsJson\n```\n')),(0,o.kt)("p",null,'=== "Bash"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```bash\n#!/bin/bash\nsite=https://contoso.sharepoint.com/sites/site1\npageName=AModernPage.aspx\nwebPartId=af660fc1-c09b-4c15-b093-2b74b047286b\n\nchoice1=\'Choice X\'\nchoice2=\'Choice Z\'\ndescription=\'My "Super Awesome" web part\';\n# Build the JSON including your dynamic values with printf\n# For each argument that might be dynamic, we escape the double quotes " with \\"\n# Make sure not to ommit the surrounding back ticks and surrounding double quotes for each arguments\nprintf -v webPartPropsJson \'`{"myChoices":["%s","%s"], "description":"%s"}`\' "${choice1//\\"/\\\\\\"}" "${choice2//\\"/\\\\\\"}" "${description//\\"/\\\\\\"}"\n\nm365 spo page clientsidewebpart add -u $site -n $pageName --webPartId $webPartId --webPartProperties $webPartPropsJson\n```\n')))}d.isMDXComponent=!0}}]);