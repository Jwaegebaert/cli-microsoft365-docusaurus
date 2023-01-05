"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36588],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=s,f=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[u]="string"==typeof e?e:s,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const i={tags:["cleanup","security"]},o="Remove pending SharePoint API permission requests",p={unversionedId:"sample-scripts/spo/remove-pending-api-permission-requests/index",id:"sample-scripts/spo/remove-pending-api-permission-requests/index",title:"Remove pending SharePoint API permission requests",description:"Author: Waldek Mastykarz",source:"@site/docs/sample-scripts/spo/remove-pending-api-permission-requests/index.md",sourceDirName:"sample-scripts/spo/remove-pending-api-permission-requests",slug:"/sample-scripts/spo/remove-pending-api-permission-requests/",permalink:"/sample-scripts/spo/remove-pending-api-permission-requests/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/remove-pending-api-permission-requests/index.md",tags:[{label:"cleanup",permalink:"/tags/cleanup"},{label:"security",permalink:"/tags/security"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["cleanup","security"]},sidebar:"sampleScripts",previous:{title:"Remove orphaned redirect sites",permalink:"/sample-scripts/spo/remove-orphaned-redirect-sites/"},next:{title:"Delete custom SharePoint site designs",permalink:"/sample-scripts/spo/remove-site-designs/"}},a={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"remove-pending-sharepoint-api-permission-requests"},"Remove pending SharePoint API permission requests"),(0,s.kt)("p",null,"Author: ",(0,s.kt)("a",{parentName:"p",href:"https://blog.mastykarz.nl/sample-script-quickly-remove-pending-sharepoint-api-permission-requests/"},"Waldek Mastykarz")),(0,s.kt)("p",null,"When building SharePoint Framework solutions connected to APIs secured with Azure Active Directory,  you'll easily end up with many pending permission requests."),(0,s.kt)("p",null,"This script helps you to quickly remove pending SharePoint API permission requests."),(0,s.kt)("p",null,'=== "JavaScript (Google zx)"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```javascript\n#!/usr/bin/env zx\n$.verbose = false;\n\nconsole.log('Retrieving permission requests...');\nconst permissionRequests = JSON.parse(await $`m365 spo sp permissionrequest list -o json`);\n\nfor (let i = 0; i < permissionRequests.length; i++) {\n  const request = permissionRequests[i];\n  console.log(`Removing request ${request.Resource}/${request.Scope} (${request.Id})...`);\n  try {\n    await $`m365 spo sp permissionrequest deny --requestId ${request.Id}`\n    console.log(chalk.green('DONE'));\n  }\n  catch (err) {\n    console.error(err.stderr);\n  }\n}\n```\n")),(0,s.kt)("p",null,"Using ",(0,s.kt)("a",{parentName:"p",href:"https://aka.ms/cli-m365"},"CLI for Microsoft 365"),", the script first retrieves the list of pending SharePoint API permission requests. Then, it iterates through the requests and removes (denies) each one of them using CLI for Microsoft 365. After running this script, your list of pending SharePoint API permission requests will be empty."),(0,s.kt)("p",null,"This script uses ",(0,s.kt)("a",{parentName:"p",href:"https://aka.ms/cli-m365"},"CLI for Microsoft 365")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/google/zx"},"Google zx"),"."),(0,s.kt)("p",null,"To run the script, save it to a file with the ",(0,s.kt)("inlineCode",{parentName:"p"},".mjs")," extension. Next, run the script either by calling ",(0,s.kt)("inlineCode",{parentName:"p"},"zx remove-permissionrequests.mjs")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"./remove-permissionrequests.mjs")," after making the script executable using ",(0,s.kt)("inlineCode",{parentName:"p"},"chmod +x ./remove-permissionrequests.mjs;")))}u.isMDXComponent=!0}}]);