"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=s(n),f=o,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={},l="spo file roleassignment remove",a={unversionedId:"cmd/spo/file/file-roleassignment-remove",id:"cmd/spo/file/file-roleassignment-remove",title:"spo file roleassignment remove",description:"Removes a role assignment from a file.",source:"@site/docs/cmd/spo/file/file-roleassignment-remove.md",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-roleassignment-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-roleassignment-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-roleassignment-remove.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo file roleassignment add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-roleassignment-add"},next:{title:"spo file roleinheritance break",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-roleinheritance-break"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-file-roleassignment-remove"},"spo file roleassignment remove"),(0,o.kt)("p",null,"Removes a role assignment from a file."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file roleassignment remove [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the file is located."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--fileUrl [fileUrl]"),"\n: The server-relative URL of the file. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"fileUrl")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"fileId")," but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --fileId [fileId]"),"\n: The UniqueId (GUID) of the file. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"fileUrl")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"fileId")," but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--principalId [principalId]"),"\n: The SharePoint Id of the principal. It may be either a user id or group id. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"upn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"groupName"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"principalId")," but not multiple."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--upn [upn]"),"\n: Upn/email of the user. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"upn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"groupName"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"principalId")," but not multiple."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--groupName [groupName]"),"\n: The group name of an Azure AD or SharePoint group. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"upn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"groupName"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"principalId")," but not multiple."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--confirm [confirm]"),"\n: Don't prompt for confirmation."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Remove a role assignment by principal id from a file by id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo file roleassignment remove --webUrl "https://contoso.sharepoint.com/sites/contoso-sales" --fileId "b2307a39-e878-458b-bc90-03bc578531d6" --principalId 2\n')),(0,o.kt)("p",null,"Remove a role assignment by upn from a file by url"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo file roleassignment remove --webUrl "https://contoso.sharepoint.com/sites/contoso-sales" --fileUrl "/sites/contoso-sales/documents/Test1.docx" --upn "user1@contoso.onmicrosoft.com"\n')),(0,o.kt)("p",null,"Remove a role assignment by group name from a file by id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo file roleassignment remove --webUrl "https://contoso.sharepoint.com/sites/contoso-sales" --fileId "b2307a39-e878-458b-bc90-03bc578531d6" --groupName "saleGroup"\n')))}c.isMDXComponent=!0}}]);