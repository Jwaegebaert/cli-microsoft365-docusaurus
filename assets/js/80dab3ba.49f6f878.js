"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,d=u["".concat(i,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3723:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},c="Authenticate with and call the Microsoft Graph",p={unversionedId:"sample-scripts/graph/call-graph/index",id:"sample-scripts/graph/call-graph/index",title:"Authenticate with and call the Microsoft Graph",description:"Author: Garry Trinder",source:"@site/docs/sample-scripts/graph/call-graph/index.md",sourceDirName:"sample-scripts/graph/call-graph",slug:"/sample-scripts/graph/call-graph/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/graph/call-graph/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/graph/call-graph/index.md",tags:[],version:"current",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{},sidebar:"sampleScripts",previous:{title:"Microsoft Graph",permalink:"/cli-microsoft365-docusaurus/sample-script/graph"},next:{title:"Planner",permalink:"/cli-microsoft365-docusaurus/sample-script/planner"}},i={},s=[],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authenticate-with-and-call-the-microsoft-graph"},"Authenticate with and call the Microsoft Graph"),(0,a.kt)("p",null,"Author: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/garrytrinder"},"Garry Trinder")),(0,a.kt)("p",null,"Calling the Microsoft Graph can be done using the ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 request")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 request --url https://graph.microsoft.com/v1.0/me\n")),(0,a.kt)("p",null,"Another route would be to use shell-specific webrequest tooling. To do this, obtain a new access token for the Microsoft Graph and use it in an HTTP request."),(0,a.kt)("p",null,'=== "PowerShell"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```powershell\n$token = m365 util accesstoken get --resource https://graph.microsoft.com --new --output text\n$me = Invoke-RestMethod -Uri https://graph.microsoft.com/v1.0/me -Headers @{"Authorization"="Bearer $token"}\n$me\n```\n')),(0,a.kt)("p",null,'=== "Bash"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```bash\n#!/bin/bash\n\n# requires jq: https://stedolan.github.io/jq/\n\ntoken=`m365 util accesstoken get --resource https://graph.microsoft.com --new --output text`\nme=`curl https://graph.microsoft.com/v1.0/me -H "Authorization: Bearer $token"`\necho $me | jq\n```\n')))}u.isMDXComponent=!0}}]);