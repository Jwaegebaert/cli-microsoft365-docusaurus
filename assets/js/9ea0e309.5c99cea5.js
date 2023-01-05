"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80612],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,u=f["".concat(s,".").concat(d)]||f[d]||m[d]||i;return r?n.createElement(u,l(l({ref:t},p),{},{components:r})):n.createElement(u,l({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[f]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},l="spo file version clear",a={unversionedId:"cmd/spo/file/file-version-clear",id:"cmd/spo/file/file-version-clear",title:"spo file version clear",description:"Removes all version history of a specified file",source:"@site/docs/cmd/spo/file/file-version-clear.md",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-version-clear",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-version-clear",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-version-clear.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo file sharinglink list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-sharinglink-list"},next:{title:"spo file version get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-version-get"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-file-version-clear"},"spo file version clear"),(0,o.kt)("p",null,"Removes all version history of a specified file"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version clear [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-w, --webUrl <webUrl>"),"\n: The URL of the site where the file is located"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --fileUrl [fileUrl]"),"\n: The server-relative URL of the file to retrieve. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"fileUrl")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"fileId")," but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --fileId [fileId]"),"\n: The UniqueId (GUID) of the file to retrieve. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"fileUrl")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"fileId")," but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--confirm [confirm]"),"\n: Don't prompt for confirmation."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Removes all file version history in a specific site based on fileId and prompts for confirmation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version clear --webUrl https://contoso.sharepoint.com --fileId 'b2307a39-e878-458b-bc90-03bc578531d6'\n")),(0,o.kt)("p",null,"Removes all file version history in a specific site based on fileUrl and prompts for confirmation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version clear --webUrl https://contoso.sharepoint.com --fileUrl '/Shared Documents/Document.docx'\n")),(0,o.kt)("p",null,"Removes all file version history in a specific site based on fileId without prompting for confirmation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version clear --webUrl https://contoso.sharepoint.com --fileId 'b2307a39-e878-458b-bc90-03bc578531d6' --confirm\n")),(0,o.kt)("p",null,"Removes all file version history in a specific site based on fileUrl without prompting for confirmation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version clear --webUrl https://contoso.sharepoint.com --fileUrl '/Shared Documents/Document.docx' --confirm\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}f.isMDXComponent=!0}}]);