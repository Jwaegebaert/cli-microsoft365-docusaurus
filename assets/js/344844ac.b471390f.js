"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[99076],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),s=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,u=c["".concat(d,".").concat(m)]||c[m]||f[m]||a;return r?o.createElement(u,l(l({ref:t},i),{},{components:r})):o.createElement(u,l({ref:t},i))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[c]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={},l="spo folder add",p={unversionedId:"cmd/spo/folder/folder-add",id:"cmd/spo/folder/folder-add",title:"spo folder add",description:"Creates a folder within a parent folder",source:"@site/docs/cmd/spo/folder/folder-add.md",sourceDirName:"cmd/spo/folder",slug:"/cmd/spo/folder/folder-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/folder/folder-add.md",tags:[],version:"current",lastUpdatedAt:1649592241,formattedLastUpdatedAt:"Apr 10, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo file version restore",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-version-restore"},next:{title:"spo folder copy",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-copy"}},d={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],i={toc:s},c="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-folder-add"},"spo folder add"),(0,n.kt)("p",null,"Creates a folder within a parent folder"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo folder add [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: The URL of the site where the folder will be created"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-p, --parentFolderUrl <parentFolderUrl>"),"\n: Site-relative URL of the parent folder"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: Name of the new folder to be created"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Creates folder in a parent folder with site relative url ",(0,n.kt)("em",{parentName:"p"},"/Shared Documents")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo folder add --webUrl https://contoso.sharepoint.com/sites/project-x --parentFolderUrl '/Shared Documents' --name 'My Folder Name'\n")))}f.isMDXComponent=!0}}]);