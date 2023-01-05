"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return n?i.createElement(k,l(l({ref:t},c),{},{components:n})):i.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[m]="string"==typeof e?e:r,l[1]=a;for(var p=2;p<s;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const s={},l="spo site list",a={unversionedId:"cmd/spo/site/site-list",id:"cmd/spo/site/site-list",title:"spo site list",description:"Lists modern sites of the given type",source:"@site/docs/cmd/spo/site/site-list.md",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-list",permalink:"/cmd/spo/site/site-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo site inplacerecordsmanagement set",permalink:"/cmd/spo/site/site-inplacerecordsmanagement-set"},next:{title:"spo site recyclebinitem list",permalink:"/cmd/spo/site/site-recyclebinitem-list"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-site-list"},"spo site list"),(0,r.kt)("p",null,"Lists modern sites of the given type"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-t, --type [type]"),"\n: convenience option for type of sites to list. Allowed values are ",(0,r.kt)("inlineCode",{parentName:"p"},"TeamSite,CommunicationSite"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--webTemplate [webTemplate]"),"\n: type of sites to list. To be used with values like ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP#0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SITEPAGEPUBLISHING#0"),". Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"webTemplate"),", but not both.  "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-f, --filter [filter]"),"\n: filter to apply when retrieving sites"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--includeOneDriveSites"),"\n: use this switch to include OneDrive sites in the result when retrieving sites. Do not specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"webTemplate")," options when using this."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--deleted"),"\n: use this switch to only return deleted sites"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f, --filter")," option you can specify which sites you want to retrieve. For example, to get sites with ",(0,r.kt)("em",{parentName:"p"},"project")," in their URL, use ",(0,r.kt)("inlineCode",{parentName:"p"},"Url -like 'project'")," as the filter."),(0,r.kt)("p",null,"When using the text output type, the command lists only the values of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Title"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Url")," properties of the site. When setting the output type to JSON, all available properties are included in the command output."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List all sites in the currently connected tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list\n")),(0,r.kt)("p",null,"List all group connected team sites in the currently connected tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list --type TeamSite\n")),(0,r.kt)("p",null,"List all communication sites in the currently connected tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list --type CommunicationSite\n")),(0,r.kt)("p",null,"List all group connected team sites that contain ",(0,r.kt)("em",{parentName:"p"},"project")," in the URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list --type TeamSite --filter \"Url -like 'project'\"\n")),(0,r.kt)("p",null,"List all sites in the currently connected tenant including OneDrive sites"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list --includeOneDriveSites\n")),(0,r.kt)("p",null,"List all deleted sites in the tenant you're logged in to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list --deleted\n")))}m.isMDXComponent=!0}}]);