"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20256],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var s=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,s,o=function(t,e){if(null==t)return{};var a,s,o={},n=Object.keys(t);for(s=0;s<n.length;s++)a=n[s],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(s=0;s<n.length;s++)a=n[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=s.createContext({}),c=function(t){var e=s.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=c(t.components);return s.createElement(l.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},d=s.forwardRef((function(t,e){var a=t.components,o=t.mdxType,n=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=c(a),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||n;return a?s.createElement(m,r(r({ref:e},p),{},{components:a})):s.createElement(m,r({ref:e},p))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=a.length,r=new Array(n);r[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[u]="string"==typeof t?t:o,r[1]=i;for(var c=2;c<n;c++)r[c]=a[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12600:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var s=a(87462),o=(a(67294),a(3905));const n={tags:["reports"]},r="Lists active SharePoint site collection application catalogs",i={unversionedId:"sample-scripts/spo/list-site-app-catalogs/index",id:"sample-scripts/spo/list-site-app-catalogs/index",title:"Lists active SharePoint site collection application catalogs",description:"Inspired by: David Ramalho",source:"@site/docs/sample-scripts/spo/list-site-app-catalogs/index.md",sourceDirName:"sample-scripts/spo/list-site-app-catalogs",slug:"/sample-scripts/spo/list-site-app-catalogs/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-site-app-catalogs/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/list-site-app-catalogs/index.md",tags:[{label:"reports",permalink:"/cli-microsoft365-docusaurus/tags/reports"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["reports"]},sidebar:"sampleScripts",previous:{title:"List all large files within a SharePoint Site",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-large-files-within-a-site/"},next:{title:"List site collections and their lists",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/list-site-collection-lists/"}},l={},c=[],p={toc:c};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,s.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lists-active-sharepoint-site-collection-application-catalogs"},"Lists active SharePoint site collection application catalogs"),(0,o.kt)("p",null,"Inspired by: ",(0,o.kt)("a",{parentName:"p",href:"http://sharepoint-tricks.com/check-all-sharepoint-sites-collection-with-app-catalog-active/"},"David Ramalho")),(0,o.kt)("p",null,"A sample that shows how to find all installed site collection application catalogs within a tenant. IT Professionals or DevOps can benefit from it when they govern tenants or scan tenant for customizations. Pulling a list with site collection app catalogs can give them valuable information at what scale the tenant site collections are customized. The sample outputs the URL of the site collection, and this can help IT Pros or DevOps to dig deeper and find out what and how many solution packages a site collection app catalog has installed. Check for un-healthy solution packages or such that could be a security risk."),(0,o.kt)("p",null,"Note, because the sample uses the SharePoint search API to identify the site collection application catalogs, a newly created one might not be indexed right away. The sample output would not list the newly created app catalog until the search crawler indexes it; this usually does not take longer than a few minutes."),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```powershell\n$appCatalogs = m365 spo search --query \"contentclass:STS_List_336\" --selectProperties SPSiteURL --allResults --output json | ConvertFrom-Json\n\n$appCatalogs | ForEach-Object { Write-Host $_.SPSiteURL }\nWrite-Host 'Total count:' $appCatalogs.Count\n```\n")),(0,o.kt)("p",null,'=== "Bash"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```bash\n#!/bin/bash\n\n# requires jq: https://stedolan.github.io/jq/\n\nappCatalogs=$(m365 spo search --query "contentclass:STS_List_336" --selectProperties SPSiteURL --allResults --output json)\n\necho $appCatalogs | jq -r \'.[].SPSiteURL\'\necho "Total count:" $(echo $appCatalogs | jq length)\n```\n')))}u.isMDXComponent=!0}}]);