"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[7961],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),p=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},i=function(e){var r=p(e.components);return o.createElement(c.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=n,u=d["".concat(c,".").concat(f)]||d[f]||m[f]||a;return t?o.createElement(u,l(l({ref:r},i),{},{components:t})):o.createElement(u,l({ref:r},i))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},53060:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(87462),n=(t(67294),t(3905));const a={},l="spo folder rename",s={unversionedId:"cmd/spo/folder/folder-rename",id:"cmd/spo/folder/folder-rename",title:"spo folder rename",description:"Renames a folder",source:"@site/docs/cmd/spo/folder/folder-rename.md",sourceDirName:"cmd/spo/folder",slug:"/cmd/spo/folder/folder-rename",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-rename",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/folder/folder-rename.md",tags:[],version:"current",lastUpdatedAt:1667081579,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo folder remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-remove"},next:{title:"spo folder retentionlabel ensure",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-retentionlabel-ensure"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],i={toc:p},d="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,o.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-folder-rename"},"spo folder rename"),(0,n.kt)("p",null,"Renames a folder"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo folder rename [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: The URL of the site where the folder to be renamed is located"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-f, --url <url>"),"\n: Site-relative URL of the folder (including the folder)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-n, --name"),"\n: New name for the target folder"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Renames a folder with site-relative URL ",(0,n.kt)("em",{parentName:"p"},"/Shared Documents/My Folder 1")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo folder rename --webUrl https://contoso.sharepoint.com/sites/project-x --url '/Shared Documents/My Folder 1' --name 'My Folder 2'\n")))}m.isMDXComponent=!0}}]);