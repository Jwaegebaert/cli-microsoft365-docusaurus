"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[97910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),u=l,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:l,i[1]=a;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>a});var r=n(87462),l=(n(67294),n(3905));const o={toc:[]},i="wrapper";function a(e){let{components:t,...n}=e;return(0,l.kt)(i,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-h, --help [help]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,l.kt)("code",null,"options"),", ",(0,l.kt)("code",null,"examples"),", ",(0,l.kt)("code",null,"remarks"),", ",(0,l.kt)("code",null,"response"),", ",(0,l.kt)("code",null,"full"),". Default is ",(0,l.kt)("code",null,"full"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--query [query]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"JMESPath query string. See ",(0,l.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-o, --output [output]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output type. ",(0,l.kt)("code",null,"json"),", ",(0,l.kt)("code",null,"text"),", ",(0,l.kt)("code",null,"csv"),", ",(0,l.kt)("code",null,"md"),". Default is ",(0,l.kt)("code",null,"json"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--verbose"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with verbose logging.")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--debug"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with debug logging."))))}a.isMDXComponent=!0},36982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),l=(n(67294),n(3905)),o=n(37884);const i={},a="spo file sharinglink remove",p={unversionedId:"cmd/spo/file/file-sharinglink-remove",id:"cmd/spo/file/file-sharinglink-remove",title:"spo file sharinglink remove",description:"Removes a specific sharing link of a file",source:"@site/docs/cmd/spo/file/file-sharinglink-remove.mdx",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-sharinglink-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-sharinglink-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-sharinglink-remove.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo file sharinglink list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-sharinglink-list"},next:{title:"spo file sharinglink set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-sharinglink-set"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spo-file-sharinglink-remove"},"spo file sharinglink remove"),(0,l.kt)("p",null,"Removes a specific sharing link of a file"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file sharinglink remove [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("dl",null,(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"The URL of the site where the file is located.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--fileUrl [fileUrl]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"The server-relative (decoded) URL of the file. Specify either ",(0,l.kt)("code",{parentName:"p"},"fileUrl")," or ",(0,l.kt)("code",{parentName:"p"},"fileId")," but not both.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--fileId [fileId]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"The UniqueId (GUID) of the file. Specify either ",(0,l.kt)("code",{parentName:"p"},"fileUrl")," or ",(0,l.kt)("code",{parentName:"p"},"fileId")," but not both.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"The ID of the sharing link.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--confirm"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Don't prompt for confirmation."))),(0,l.kt)(o.ZP,{mdxType:"Global"}),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Removes a specific sharing link from a file by id without prompting for confirmation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file sharinglink remove --webUrl https://contoso.sharepoint.com/sites/demo --fileId daebb04b-a773-4baa-b1d1-3625418e3234 --id c391b57d-5783-4c53-9236-cefb5c6ef323 --confirm\n")),(0,l.kt)("p",null,"Removes a specific sharing link from a file by a specified site-relative URL."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file sharinglink remove --webUrl https://contoso.sharepoint.com/sites/demo --fileUrl 'Shared Documents/document.docx' --id c391b57d-5783-4c53-9236-cefb5c6ef323\n")),(0,l.kt)("p",null,"Removes a specific sharing link from a file by a specified server-relative URL."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file sharinglink remove --webUrl https://contoso.sharepoint.com/sites/demo --fileUrl '/sites/demo/Shared Documents/document.docx' --id c391b57d-5783-4c53-9236-cefb5c6ef323\n")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);