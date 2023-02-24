"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[93308],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var s=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=s.createContext({}),c=function(e){var r=s.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return s.createElement(p.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},f=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(t),f=n,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return t?s.createElement(d,o(o({ref:r},l),{},{components:t})):s.createElement(d,o({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=f;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[m]="string"==typeof e?e:n,o[1]=a;for(var c=2;c<i;c++)o[c]=t[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}f.displayName="MDXCreateElement"},16933:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(87462),n=(t(67294),t(3905));const i={tags:["security"]},o="Remove SharePoint API permissions",a={unversionedId:"sample-scripts/spo/remove-api-permissions/index",id:"sample-scripts/spo/remove-api-permissions/index",title:"Remove SharePoint API permissions",description:"Author: Waldek Mastykarz",source:"@site/docs/sample-scripts/spo/remove-api-permissions/index.md",sourceDirName:"sample-scripts/spo/remove-api-permissions",slug:"/sample-scripts/spo/remove-api-permissions/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/remove-api-permissions/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/remove-api-permissions/index.md",tags:[{label:"security",permalink:"/cli-microsoft365-docusaurus/tags/security"}],version:"current",lastUpdatedAt:1671570658,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{tags:["security"]},sidebar:"sampleScripts",previous:{title:"Planner migration to SharePoint list",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/planner-migrate-sharepoint-list/"},next:{title:"Delete custom color themes from SharePoint",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/remove-custom-themes/"}},p={},c=[],l={toc:c},m="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,s.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"remove-sharepoint-api-permissions"},"Remove SharePoint API permissions"),(0,n.kt)("p",null,"Author: ",(0,n.kt)("a",{parentName:"p",href:"https://blog.mastykarz.nl/sample-script-quickly-remove-sharepoint-api-permissions/"},"Waldek Mastykarz")),(0,n.kt)("p",null,"When building SharePoint Framework solutions connected to APIs secured with Azure Active Directory, you might need to clear the list of granted API permissions."),(0,n.kt)("p",null,"This script helps you to quickly remove SharePoint API permissions."),(0,n.kt)("p",null,'=== "JavaScript (Google zx)"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```javascript\n#!/usr/bin/env zx\n$.verbose = false;\n\nconsole.log('Retrieving granted API permissions...');\nconst apiPermissions = JSON.parse(await $`m365 spo sp grant list -o json`);\n\nfor (let i = 0; i < apiPermissions.length; i++) {\n  const permission = apiPermissions[i];\n  console.log(`Removing permission ${permission.Resource}/${permission.Scope} (${permission.ObjectId})...`);\n  try {\n    await $`m365 spo serviceprincipal grant revoke --grantId ${permission.ObjectId}`\n    console.log(chalk.green('DONE'));\n  }\n  catch (err) {\n    console.error(err.stderr);\n  }\n}\n```\n")),(0,n.kt)("p",null,"Using ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/cli-m365"},"CLI for Microsoft 365"),", the script first retrieves the list of granted API permissions. Then, it iterates through them and removes (revokes) each one of them using CLI for Microsoft 365. After running this script, your list of SharePoint API permissions will be empty."),(0,n.kt)("p",null,"This script uses ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/cli-m365"},"CLI for Microsoft 365")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/zx"},"Google zx"),"."),(0,n.kt)("p",null,"To run the script, save it to a file with the ",(0,n.kt)("inlineCode",{parentName:"p"},".mjs")," extension. Next, run the script either by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"zx remove-apipermissions.mjs")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"./remove-apipermissions.mjs")," after making the script executable using ",(0,n.kt)("inlineCode",{parentName:"p"},"chmod +x ./remove-apipermissions.mjs;")))}u.isMDXComponent=!0}}]);