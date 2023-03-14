"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[15660],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},i=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=d(o),m=n,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return o?r.createElement(f,a(a({ref:t},i),{},{components:o})):r.createElement(f,a({ref:t},i))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<l;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},37884:(e,t,o)=>{o.d(t,{ZP:()=>s});var r=o(87462),n=(o(67294),o(3905));const l={toc:[]},a="wrapper";function s(e){let{components:t,...o}=e;return(0,n.kt)(a,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-h, --help [help]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",null,"options"),", ",(0,n.kt)("code",null,"examples"),", ",(0,n.kt)("code",null,"remarks"),", ",(0,n.kt)("code",null,"response"),", ",(0,n.kt)("code",null,"full"),". Default is ",(0,n.kt)("code",null,"full"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--query [query]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"JMESPath query string. See ",(0,n.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-o, --output [output]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output type. ",(0,n.kt)("code",null,"json"),", ",(0,n.kt)("code",null,"text"),", ",(0,n.kt)("code",null,"csv"),", ",(0,n.kt)("code",null,"md"),". Default is ",(0,n.kt)("code",null,"json"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--verbose"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with verbose logging.")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--debug"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},49571:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=o(87462),n=(o(67294),o(3905)),l=o(37884);const a={},s="spo folder get",p={unversionedId:"cmd/spo/folder/folder-get",id:"cmd/spo/folder/folder-get",title:"spo folder get",description:"Gets information about the specified folder",source:"@site/docs/cmd/spo/folder/folder-get.mdx",sourceDirName:"cmd/spo/folder",slug:"/cmd/spo/folder/folder-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/folder/folder-get.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo folder copy",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-copy"},next:{title:"spo folder list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/folder/folder-list"}},d={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:i},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-folder-get"},"spo folder get"),(0,n.kt)("p",null,"Gets information about the specified folder"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo folder get [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The URL of the site where the folder is located")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-f, --url [url]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The server-relative URL of the folder to retrieve. Specify either ",(0,n.kt)("code",{parentName:"p"},"folderUrl")," or ",(0,n.kt)("code",{parentName:"p"},"id")," but not both")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The UniqueId (GUID) of the folder to retrieve. Specify either ",(0,n.kt)("code",{parentName:"p"},"url")," or ",(0,n.kt)("code",{parentName:"p"},"id")," but not both")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--withPermissions"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Set if you want to return associated roles and permissions of the folder."))),(0,n.kt)(l.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"If no folder exists at the specified URL, you will get a ",(0,n.kt)("inlineCode",{parentName:"p"},"Please check the folder URL. Folder might not exist on the specified URL")," error."),(0,n.kt)("p",null,"If root level folder is passed, you will get a ",(0,n.kt)("inlineCode",{parentName:"p"},"Please ensure the specified folder URL or folder Id does not refer to a root folder. Use \\'spo list get\\' with withPermissions instead' error.")," Please use the command 'spo list get'."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Get folder properties for folder with server-relative url ",(0,n.kt)("em",{parentName:"p"},"'/Shared Documents'")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo folder get --webUrl https://contoso.sharepoint.com/sites/project-x --url "/Shared Documents"\n')),(0,n.kt)("p",null,"Get folder properties for folder with id (UniqueId) ",(0,n.kt)("em",{parentName:"p"},"b2307a39-e878-458b-bc90-03bc578531d6")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo folder get --webUrl https://contoso.sharepoint.com/sites/project-x --id "b2307a39-e878-458b-bc90-03bc578531d6"\n')),(0,n.kt)("p",null,"Get folder properties for folder with server-relative url ",(0,n.kt)("em",{parentName:"p"},"'/Shared Documents/Test1'")," located in site _",(0,n.kt)("a",{parentName:"p",href:"https://contoso.sharepoint.com/sites/test"},"https://contoso.sharepoint.com/sites/test")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo folder get --webUrl https://contoso.sharepoint.com/sites/test --url "Shared Documents/Test1" --withPermissions\n')))}m.isMDXComponent=!0}}]);