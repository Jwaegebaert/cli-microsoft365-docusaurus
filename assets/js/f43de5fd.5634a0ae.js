"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=s,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const a={},o="spo externaluser list",i={unversionedId:"cmd/spo/externaluser/externaluser-list",id:"cmd/spo/externaluser/externaluser-list",title:"spo externaluser list",description:"Lists external users in the tenant",source:"@site/docs/cmd/spo/externaluser/externaluser-list.md",sourceDirName:"cmd/spo/externaluser",slug:"/cmd/spo/externaluser/externaluser-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/externaluser/externaluser-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/externaluser/externaluser-list.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo eventreceiver remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/eventreceiver/eventreceiver-remove"},next:{title:"spo feature disable",permalink:"/cli-microsoft365-docusaurus/cmd/spo/feature/feature-disable"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"spo-externaluser-list"},"spo externaluser list"),(0,s.kt)("p",null,"Lists external users in the tenant"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo externaluser list [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-f, --filter [filter]"),"\n: Limits the results to only those users whose first name, last name or email address begins with the text in the string, using a case-insensitive comparison"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-p, --pageSize [pageSize]"),"\n: Specifies the maximum number of users to be returned in the collection. The value must be less than or equal to ",(0,s.kt)("inlineCode",{parentName:"p"},"50")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-i, --position [position]"),"\n: Use to specify the zero-based index of the position in the sorted collection of the first result to be returned"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-s, --sortOrder [sortOrder]"),"\n: Specifies the sort results in Ascending or Descending order on the ",(0,s.kt)("inlineCode",{parentName:"p"},"SPOUser.Email")," property should occur. Allowed values ",(0,s.kt)("inlineCode",{parentName:"p"},"asc|desc"),". Default ",(0,s.kt)("inlineCode",{parentName:"p"},"asc")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-u, --siteUrl [siteUrl]"),"\n: Specifies the site to retrieve external users for. If no site is specified, the external users for all sites are returned"),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"List all external users from the current tenant. Show the first batch of 50 users."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo externaluser list --pageSize 50 --position 0\n")),(0,s.kt)("p",null,"List all external users from the current tenant whose first name, last name or email address\nbegins with ",(0,s.kt)("inlineCode",{parentName:"p"},"Vesa"),". Show the first batch of 50 users."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo externaluser list --pageSize 50 --position 0 --filter Vesa\n")),(0,s.kt)("p",null,"List all external users from the specified site. Show the first batch of 50 users."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo externaluser list --pageSize 50 --position 0 --siteUrl https://contoso.sharepoint.com\n")),(0,s.kt)("p",null,"List all external users from the current tenant. Show the first batch of 50 users sorted descending\nby e-mail."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo externaluser list --pageSize 50 --position 0 --sortOrder desc\n")))}c.isMDXComponent=!0}}]);