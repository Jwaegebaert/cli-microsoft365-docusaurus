"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[15660],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>u});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,u=c["".concat(l,".").concat(f)]||c[f]||m[f]||n;return r?o.createElement(u,p(p({ref:t},i),{},{components:r})):o.createElement(u,p({ref:t},i))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,p=new Array(n);p[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:a,p[1]=d;for(var s=2;s<n;s++)p[s]=r[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26054:(e,t,r)=>{r.d(t,{ZP:()=>d});var o=r(87462),a=(r(67294),r(3905));const n={toc:[]},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},n,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",{parentName:"p"},"options"),", ",(0,a.kt)("code",{parentName:"p"},"examples"),", ",(0,a.kt)("code",{parentName:"p"},"remarks"),", ",(0,a.kt)("code",{parentName:"p"},"response"),", ",(0,a.kt)("code",{parentName:"p"},"full"),". Default is ",(0,a.kt)("code",{parentName:"p"},"full"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--query [query]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,a.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output type. ",(0,a.kt)("code",{parentName:"p"},"json"),", ",(0,a.kt)("code",{parentName:"p"},"text"),", ",(0,a.kt)("code",{parentName:"p"},"csv"),", ",(0,a.kt)("code",{parentName:"p"},"md"),". Default ",(0,a.kt)("code",{parentName:"p"},"json"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--verbose"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--debug"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}d.isMDXComponent=!0},49571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var o=r(87462),a=(r(67294),r(3905)),n=r(26054);const p={},d="spo folder get",l={unversionedId:"cmd/spo/folder/folder-get",id:"cmd/spo/folder/folder-get",title:"spo folder get",description:"Gets information about the specified folder",source:"@site/docs/cmd/spo/folder/folder-get.mdx",sourceDirName:"cmd/spo/folder",slug:"/cmd/spo/folder/folder-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/folder/folder-get.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo folder copy",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-copy"},next:{title:"spo folder list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-list"}},s={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:i},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-folder-get"},"spo folder get"),(0,a.kt)("p",null,"Gets information about the specified folder"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo folder get [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The URL of the site where the folder is located.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-f, --url [url]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The server- or site-relative URL of the folder to retrieve. Specify either ",(0,a.kt)("code",{parentName:"p"},"folderUrl")," or ",(0,a.kt)("code",{parentName:"p"},"id")," but not both.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The UniqueId (GUID) of the folder to retrieve. Specify either ",(0,a.kt)("code",{parentName:"p"},"url")," or ",(0,a.kt)("code",{parentName:"p"},"id")," but not both.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--withPermissions"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Set if you want to return associated roles and permissions of the folder."))),(0,a.kt)(n.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If no folder exists at the specified URL, you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"Please check the folder URL. Folder might not exist on the specified URL")," error."),(0,a.kt)("p",null,"If root level folder is passed, you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"Please ensure the specified folder URL or folder Id does not refer to a root folder. Use \\'spo list get\\' with withPermissions instead' error.")," Please use the command 'spo list get'."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get folder properties for a folder with a specific site-relative URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo folder get --webUrl https://contoso.sharepoint.com/sites/project-x --url "/Shared Documents"\n')),(0,a.kt)("p",null,"Get folder properties for a folder with a specific id (UniqueId)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo folder get --webUrl https://contoso.sharepoint.com/sites/project-x --id "b2307a39-e878-458b-bc90-03bc578531d6"\n')),(0,a.kt)("p",null,"Get folder properties with permissions for a folder with server-relative URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo folder get --webUrl https://contoso.sharepoint.com/sites/test --url "/sites/test/Shared Documents/Test1" --withPermissions\n')))}f.isMDXComponent=!0}}]);