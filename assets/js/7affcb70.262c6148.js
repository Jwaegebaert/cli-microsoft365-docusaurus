"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78642],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(o),u=n,m=f["".concat(c,".").concat(u)]||f[u]||d[u]||l;return o?r.createElement(m,a(a({ref:t},p),{},{components:o})):r.createElement(m,a({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:n,a[1]=i;for(var s=2;s<l;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},98878:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const l={},a="file convert pdf",i={unversionedId:"cmd/file/convert/convert-pdf",id:"cmd/file/convert/convert-pdf",title:"file convert pdf",description:"Converts the specified file to PDF using Microsoft Graph",source:"@site/docs/cmd/file/convert/convert-pdf.md",sourceDirName:"cmd/file/convert",slug:"/cmd/file/convert/convert-pdf",permalink:"/cmd/file/convert/convert-pdf",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/file/convert/convert-pdf.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"File (file)",permalink:"/cmd/groups/file"},next:{title:"file add",permalink:"/cmd/file/file-add"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s};function f(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"file-convert-pdf"},"file convert pdf"),(0,n.kt)("p",null,"Converts the specified file to PDF using Microsoft Graph"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 file convert pdf [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-s, --sourceFile <sourceFile>"),"\n: Local path or full URL to the source file to be converted to PDF"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-t, --targetFile <targetFile>"),"\n: Local path or full URL to where the generated PDF file should be saved"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"To convert a local file to PDF, CLI will temporarily upload the file to a document library. If you're using app-only authentication, CLI will upload the file to the default document library in the root site collection on your tenant. If you're authenticated as a user, CLI will upload the file to the default document library in your OneDrive for Business. After the conversion, CLI will remove the uploaded file."),(0,n.kt)("p",null,"If you choose to store the converted file in a document library, CLI will store the converted PDF file temporarily in the temp folder on your computer. After the PDF file has been uploaded to the location you specified, CLI will remove the temporary file."),(0,n.kt)("p",null,"If the conversion process fails, CLI will attempt to clean up the temporary files (the source file uploaded to your tenant, if you're converting a local file to PDF, and the converted PDF file on your disk if you chose to upload the converted file to your tenant). If removing the temporary files fails, you will need to clean them up yourself. CLI will list the URL and/or path of the files to remove."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Converts local file to PDF and stores the converted file on the disk"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 file convert pdf --sourceFile file.docx --targetFile file.pdf\n")),(0,n.kt)("p",null,"Converts local file to PDF and uploads the converted file to a document library"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 file convert pdf --sourceFile file.docx --targetFile "https://contoso.sharepoint.com/Shared Documents/file.pdf"\n')),(0,n.kt)("p",null,"Converts file from a document library to PDF and saves the converted file to disk"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 file convert pdf --sourceFile "https://contoso.sharepoint.com/Shared Documents/file.docx" --targetFile file.pdf\n')),(0,n.kt)("p",null,"Converts file from a document library to PDF and saves the converted file to the same document library"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 file convert pdf --sourceFile "https://contoso.sharepoint.com/Shared Documents/file.docx" --targetFile "https://contoso.sharepoint.com/Shared Documents/file.pdf"\n')))}f.isMDXComponent=!0}}]);