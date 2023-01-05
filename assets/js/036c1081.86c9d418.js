"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20256],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(67294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,s=function(t,e){if(null==t)return{};var a,n,s={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,s=t.mdxType,o=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(a),d=s,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return a?n.createElement(m,r(r({ref:e},c),{},{components:a})):n.createElement(m,r({ref:e},c))}));function m(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[u]="string"==typeof t?t:s,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12600:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));const o={tags:["reports"]},r="Lists active SharePoint site collection application catalogs",i={unversionedId:"sample-scripts/spo/list-site-app-catalogs/index",id:"sample-scripts/spo/list-site-app-catalogs/index",title:"Lists active SharePoint site collection application catalogs",description:"Inspired by: David Ramalho",source:"@site/docs/sample-scripts/spo/list-site-app-catalogs/index.md",sourceDirName:"sample-scripts/spo/list-site-app-catalogs",slug:"/sample-scripts/spo/list-site-app-catalogs/",permalink:"/sample-scripts/spo/list-site-app-catalogs/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/list-site-app-catalogs/index.md",tags:[{label:"reports",permalink:"/tags/reports"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["reports"]},sidebar:"sampleScripts",previous:{title:"List all large files within a SharePoint Site",permalink:"/sample-scripts/spo/list-large-files-within-a-site/"},next:{title:"List site collections and their lists",permalink:"/sample-scripts/spo/list-site-collection-lists/"}},l={},p=[],c={toc:p};function u(t){let{components:e,...a}=t;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lists-active-sharepoint-site-collection-application-catalogs"},"Lists active SharePoint site collection application catalogs"),(0,s.kt)("p",null,"Inspired by: ",(0,s.kt)("a",{parentName:"p",href:"http://sharepoint-tricks.com/check-all-sharepoint-sites-collection-with-app-catalog-active/"},"David Ramalho")),(0,s.kt)("p",null,"A sample that shows how to find all installed site collection application catalogs within a tenant. IT Professionals or DevOps can benefit from it when they govern tenants or scan tenant for customizations. Pulling a list with site collection app catalogs can give them valuable information at what scale the tenant site collections are customized. The sample outputs the URL of the site collection, and this can help IT Pros or DevOps to dig deeper and find out what and how many solution packages a site collection app catalog has installed. Check for un-healthy solution packages or such that could be a security risk."),(0,s.kt)("p",null,"Note, because the sample uses the SharePoint search API to identify the site collection application catalogs, a newly created one might not be indexed right away. The sample output would not list the newly created app catalog until the search crawler indexes it; this usually does not take longer than a few minutes."),(0,s.kt)("p",null,'=== "PowerShell"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```powershell\n$appCatalogs = m365 spo search --query \"contentclass:STS_List_336\" --selectProperties SPSiteURL --allResults --output json | ConvertFrom-Json\n\n$appCatalogs | ForEach-Object { Write-Host $_.SPSiteURL }\nWrite-Host 'Total count:' $appCatalogs.Count\n```\n")),(0,s.kt)("p",null,'=== "Bash"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```bash\n#!/bin/bash\n\n# requires jq: https://stedolan.github.io/jq/\n\nappCatalogs=$(m365 spo search --query "contentclass:STS_List_336" --selectProperties SPSiteURL --allResults --output json)\n\necho $appCatalogs | jq -r \'.[].SPSiteURL\'\necho "Total count:" $(echo $appCatalogs | jq length)\n```\n')))}u.isMDXComponent=!0}}]);