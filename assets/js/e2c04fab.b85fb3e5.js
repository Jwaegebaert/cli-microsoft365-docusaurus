"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[55662],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(o),u=n,d=p["".concat(s,".").concat(u)]||p[u]||f[u]||l;return o?r.createElement(d,a(a({ref:t},m),{},{components:o})):r.createElement(d,a({ref:t},m))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<l;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},43792:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const l={},a="spo file move",i={unversionedId:"cmd/spo/file/file-move",id:"cmd/spo/file/file-move",title:"spo file move",description:"Moves a file to another location",source:"@site/docs/cmd/spo/file/file-move.md",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-move",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-move",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-move.md",tags:[],version:"current",lastUpdatedAt:1649592241,formattedLastUpdatedAt:"Apr 10, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo file list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-list"},next:{title:"spo file remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-remove"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],m={toc:c},p="wrapper";function f(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-file-move"},"spo file move"),(0,n.kt)("p",null,"Moves a file to another location"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file move [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: The URL of the site where the file is located"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-s, --sourceUrl <sourceUrl>"),"\n: Site-relative URL of the file to move"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-t, --targetUrl <targetUrl>"),"\n: Server-relative URL where to move the file"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--deleteIfAlreadyExists"),"\n: If a file already exists at the targetUrl, it will be moved to the recycle bin. If omitted, the move operation will be canceled if the file already exists at the targetUrl location"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--allowSchemaMismatch"),"\n: Ignores any missing fields in the target document library and moves the file anyway"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"When you move a file using the ",(0,n.kt)("inlineCode",{parentName:"p"},"spo file move")," command, all of the versions are being moved."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Move file to a document library in another site collection"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file move --webUrl https://contoso.sharepoint.com/sites/test1 --sourceUrl /Shared%20Documents/sp1.pdf --targetUrl /sites/test2/Shared%20Documents/\n")),(0,n.kt)("p",null,"Move file to a document library in the same site collection"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file move --webUrl https://contoso.sharepoint.com/sites/test1 --sourceUrl /Shared%20Documents/sp1.pdf --targetUrl /sites/test1/HRDocuments/\n")),(0,n.kt)("p",null,"Move file to a document library in another site collection. If a file with the same name already exists in the target document library, move it to the recycle bin"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file move --webUrl https://contoso.sharepoint.com/sites/test1 --sourceUrl /Shared%20Documents/sp1.pdf --targetUrl /sites/test2/Shared%20Documents/ --deleteIfAlreadyExists\n")),(0,n.kt)("p",null,"Move file to a document library in another site collection. Allow for schema mismatch"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file move --webUrl https://contoso.sharepoint.com/sites/test1 --sourceUrl /Shared%20Documents/sp1.pdf --targetUrl /sites/test2/Shared%20Documents/ --allowSchemaMismatch\n")),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Move items from a SharePoint document library: ",(0,n.kt)("a",{parentName:"li",href:"https://support.office.com/en-us/article/move-or-copy-items-from-a-sharepoint-document-library-00e2f483-4df3-46be-a861-1f5f0c1a87bc"},"https://support.office.com/en-us/article/move-or-copy-items-from-a-sharepoint-document-library-00e2f483-4df3-46be-a861-1f5f0c1a87bc"))))}f.isMDXComponent=!0}}]);