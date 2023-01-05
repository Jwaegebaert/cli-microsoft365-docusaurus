"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20547],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,u=m["".concat(s,".").concat(d)]||m[d]||f[d]||o;return r?n.createElement(u,l(l({ref:t},c),{},{components:r})):n.createElement(u,l({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},l="spo file rename",i={unversionedId:"cmd/spo/file/file-rename",id:"cmd/spo/file/file-rename",title:"spo file rename",description:"Renames a file",source:"@site/docs/cmd/spo/file/file-rename.md",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-rename",permalink:"/cmd/spo/file/file-rename",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-rename.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo file remove",permalink:"/cmd/spo/file/file-remove"},next:{title:"spo file roleassignment add",permalink:"/cmd/spo/file/file-roleassignment-add"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-file-rename"},"spo file rename"),(0,a.kt)("p",null,"Renames a file"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file rename [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: The URL of the site where the file is located"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-s, --sourceUrl <sourceUrl>"),"\n: Site-relative URL of the file to rename"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-t, --targetFileName <targetFileName>"),"\n: New file name of the file"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--force"),"\n: If a file already exists with target file name, it will be moved to the recycle bin. If omitted, the rename operation will be canceled if a file already exists with the specified file name"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If you try to rename a file without the ",(0,a.kt)("inlineCode",{parentName:"p"},"--force")," flag and a file with this name already exists, the operation will be cancelled."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Renames a file with server-relative URL ",(0,a.kt)("em",{parentName:"p"},"/Shared Documents/Test1.docx")," located in site ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," to ",(0,a.kt)("em",{parentName:"p"},"Test2.docx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file rename --webUrl https://contoso.sharepoint.com/sites/project-x --sourceUrl '/Shared Documents/Test1.docx' --targetFileName 'Test2.docx'\n")),(0,a.kt)("p",null,"Renames a file with server-relative URL ",(0,a.kt)("em",{parentName:"p"},"/Shared Documents/Test1.docx")," located in site ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," to ",(0,a.kt)("em",{parentName:"p"},"Test2.docx"),". If the file with the target file name already exists, this file will be moved to the recycle bin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file rename --webUrl https://contoso.sharepoint.com/sites/project-x --sourceUrl '/Shared Documents/Test1.docx' --targetFileName 'Test2.docx' --force\n")))}m.isMDXComponent=!0}}]);