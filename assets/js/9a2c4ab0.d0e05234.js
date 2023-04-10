"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[62207],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),d=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=d(e.components);return o.createElement(s.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=n,u=c["".concat(s,".").concat(m)]||c[m]||f[m]||l;return t?o.createElement(u,a(a({ref:r},p),{},{components:t})):o.createElement(u,a({ref:r},p))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[c]="string"==typeof e?e:n,a[1]=i;for(var d=2;d<l;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28565:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var o=t(87462),n=(t(67294),t(3905));const l={},a="spo folder retentionlabel remove",i={unversionedId:"cmd/spo/folder/folder-retentionlabel-remove",id:"cmd/spo/folder/folder-retentionlabel-remove",title:"spo folder retentionlabel remove",description:"Clears the retention label from a folder",source:"@site/docs/cmd/spo/folder/folder-retentionlabel-remove.md",sourceDirName:"cmd/spo/folder",slug:"/cmd/spo/folder/folder-retentionlabel-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-retentionlabel-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/folder/folder-retentionlabel-remove.md",tags:[],version:"current",lastUpdatedAt:1674550445,formattedLastUpdatedAt:"Jan 24, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo folder retentionlabel ensure",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-retentionlabel-ensure"},next:{title:"spo folder roleassignment add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-roleassignment-add"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:d},c="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-folder-retentionlabel-remove"},"spo folder retentionlabel remove"),(0,n.kt)("p",null,"Clears the retention label from a folder"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo folder retentionlabel remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: The url of the web."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--folderUrl [folderUrl]"),"\n: The site- or server relative URL of the folder of which the label should be removed. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"folderUrl")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"folderId")," but not both."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-i, --folderId [folderId]"),"\n: The UniqueId (GUID) of the folder of which the label should be removed. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"folderUrl")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"folderId")," but not both."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming to remove the label."),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Removes the retention label from a folder in a given site based on the folder id"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo folder retentionlabel remove --webUrl https://contoso.sharepoint.com/sites/project-x --folderId 0cd891ef-afce-4e55-b836-fce03286cccf\n")),(0,n.kt)("p",null,"Removes the retention label from a folder in a given site based on the folder url"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo folder retentionlabel remove --webUrl https://contoso.sharepoint.com/sites/project-x --folderUrl /sites/project-x/Shared Documents/Folder --id 1\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}f.isMDXComponent=!0}}]);