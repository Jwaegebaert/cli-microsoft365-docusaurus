"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),p=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=n,u=f["".concat(a,".").concat(d)]||f[d]||m[d]||i;return r?o.createElement(u,l(l({ref:t},c),{},{components:r})):o.createElement(u,l({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[f]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={},l="spo file version remove",s={unversionedId:"cmd/spo/file/file-version-remove",id:"cmd/spo/file/file-version-remove",title:"spo file version remove",description:"Removes a specific version of a specified file",source:"@site/docs/cmd/spo/file/file-version-remove.md",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-version-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-version-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-version-remove.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo file version list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-version-list"},next:{title:"spo file version restore",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-version-restore"}},a={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-file-version-remove"},"spo file version remove"),(0,n.kt)("p",null,"Removes a specific version of a specified file"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-w, --webUrl <webUrl>"),"\n: The URL of the site where the file is located"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--label <label>"),"\n: Label of version which will be removed"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --fileUrl [fileUrl]"),"\n: The server-relative URL of the file to retrieve. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"fileUrl")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"fileId")," but not both"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-i, --fileId [fileId]"),"\n: The UniqueId (GUID) of the file to retrieve. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"fileUrl")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"fileId")," but not both"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm [confirm]"),"\n: Don't prompt for confirmation."),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Removes a file version in a specific site based on fileId and prompts for confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version remove --webUrl https://contoso.sharepoint.com --label \"1.0\" --fileId 'b2307a39-e878-458b-bc90-03bc578531d6'\n")),(0,n.kt)("p",null,"Removes a file version in a specific site based on fileUrl and prompts for confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version remove --webUrl https://contoso.sharepoint.com --label \"1.0\" --fileUrl '/Shared Documents/Document.docx'\n")),(0,n.kt)("p",null,"Removes a file version in a specific site based on fileId without prompting for confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version remove --webUrl https://contoso.sharepoint.com --label \"1.0\" --fileId 'b2307a39-e878-458b-bc90-03bc578531d6' --confirm\n")),(0,n.kt)("p",null,"Removes a file version in a specific site based on fileUrl without prompting for confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version remove --webUrl https://contoso.sharepoint.com --label \"1.0\" --fileUrl '/Shared Documents/Document.docx' --confirm\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}f.isMDXComponent=!0}}]);