"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2083],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89742:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s={tags:["security","users"]},a="Replace site collection admin with another user",i={unversionedId:"sample-scripts/spo/replace-site-collection-admin/index",id:"sample-scripts/spo/replace-site-collection-admin/index",title:"Replace site collection admin with another user",description:"Author: Patrick Lamber",source:"@site/docs/sample-scripts/spo/replace-site-collection-admin/index.md",sourceDirName:"sample-scripts/spo/replace-site-collection-admin",slug:"/sample-scripts/spo/replace-site-collection-admin/",permalink:"/sample-scripts/spo/replace-site-collection-admin/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/replace-site-collection-admin/index.md",tags:[{label:"security",permalink:"/tags/security"},{label:"users",permalink:"/tags/users"}],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{tags:["security","users"]},sidebar:"sampleScripts",previous:{title:"Remove a Site Collection Admin User from all Site Collections",permalink:"/sample-scripts/spo/remove-siteCollection-admin-user/"},next:{title:"Setup example site",permalink:"/sample-scripts/spo/setup-example-site/"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"replace-site-collection-admin-with-another-user"},"Replace site collection admin with another user"),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://www.nubo.eu/Replace-Site-Collection-Admin-Using-CLI/"},"Patrick Lamber"),"\nInspired By: ",(0,o.kt)("a",{parentName:"p",href:"https://www.sharepointdiary.com/2015/08/sharepoint-online-add-site-collection-administrator-using-powershell.html"},"Salaudeen Rajack")),(0,o.kt)("p",null,"The script removes a user from a site collection and adds a new one as site collection admin."),(0,o.kt)("p",null,'=== "PowerShell"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```powershell\n$userToAdd = "<upnOfUserToAdd>"\n$userToRemove = "<upnOfUserToRemove>"\n$webUrl = "<spoUrl>"\n\n$m365Status = m365 status --output text\nWrite-Host $m365Status\nif ($m365Status -eq "Logged Out") {\n  # Connection to Microsoft 365\n  m365 login\n  $m365Status = m365 status --output text\n}\n\nm365 spo user remove --webUrl $webUrl --loginName "i:0#.f|membership|$userToRemove" --confirm\nm365 spo site set --url $webUrl --owners $userToAdd\n```\n')))}u.isMDXComponent=!0}}]);