"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[31773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,u=d["".concat(i,".").concat(f)]||d[f]||m[f]||o;return r?n.createElement(u,p(p({ref:t},c),{},{components:r})):n.createElement(u,p({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26054:(e,t,r)=>{r.d(t,{ZP:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={toc:[]},p="wrapper";function l(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",{parentName:"p"},"options"),", ",(0,a.kt)("code",{parentName:"p"},"examples"),", ",(0,a.kt)("code",{parentName:"p"},"remarks"),", ",(0,a.kt)("code",{parentName:"p"},"response"),", ",(0,a.kt)("code",{parentName:"p"},"full"),". Default is ",(0,a.kt)("code",{parentName:"p"},"full"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--query [query]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,a.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output type. ",(0,a.kt)("code",{parentName:"p"},"json"),", ",(0,a.kt)("code",{parentName:"p"},"text"),", ",(0,a.kt)("code",{parentName:"p"},"csv"),", ",(0,a.kt)("code",{parentName:"p"},"md"),". Default ",(0,a.kt)("code",{parentName:"p"},"json"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--verbose"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--debug"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}l.isMDXComponent=!0},37423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(26054);const p={},l="spo file version clear",i={unversionedId:"cmd/spo/file/file-version-clear",id:"cmd/spo/file/file-version-clear",title:"spo file version clear",description:"Removes all version history of a specified file",source:"@site/docs/cmd/spo/file/file-version-clear.mdx",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-version-clear",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-version-clear",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-version-clear.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo file sharinglink set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-sharinglink-set"},next:{title:"spo file version get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-version-get"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:c},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-file-version-clear"},"spo file version clear"),(0,a.kt)("p",null,"Removes all version history of a specified file"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version clear [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-w, --webUrl <webUrl>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The URL of the site where the file is located")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-u, --fileUrl [fileUrl]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The server- or site-relative URL of the file. Specify either ",(0,a.kt)("code",{parentName:"p"},"fileUrl")," or ",(0,a.kt)("code",{parentName:"p"},"fileId")," but not both")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-i, --fileId [fileId]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The UniqueId (GUID) of the file. Specify either ",(0,a.kt)("code",{parentName:"p"},"fileUrl")," or ",(0,a.kt)("code",{parentName:"p"},"fileId")," but not both")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--confirm [confirm]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Don't prompt for confirmation."))),(0,a.kt)(o.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Removes all file version history in a specific site based on fileId and prompts for confirmation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version clear --webUrl https://contoso.sharepoint.com --fileId 'b2307a39-e878-458b-bc90-03bc578531d6'\n")),(0,a.kt)("p",null,"Removes all file version history in a specific site based on fileUrl and prompts for confirmation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version clear --webUrl https://contoso.sharepoint.com --fileUrl '/Shared Documents/Document.docx'\n")),(0,a.kt)("p",null,"Removes all file version history in a specific site based on fileId without prompting for confirmation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version clear --webUrl https://contoso.sharepoint.com --fileId 'b2307a39-e878-458b-bc90-03bc578531d6' --confirm\n")),(0,a.kt)("p",null,"Removes all file version history in a specific site based on fileUrl without prompting for confirmation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version clear --webUrl https://contoso.sharepoint.com --fileUrl '/Shared Documents/Document.docx' --confirm\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."))}f.isMDXComponent=!0}}]);