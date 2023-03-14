"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[1043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?l.createElement(f,a(a({ref:t},c),{},{components:n})):l.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>i});var l=n(87462),r=(n(67294),n(3905));const o={toc:[]},a="wrapper";function i(e){let{components:t,...n}=e;return(0,r.kt)(a,(0,l.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}i.isMDXComponent=!0},42648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var l=n(87462),r=(n(67294),n(3905)),o=n(37884);const a={},i="spo file sharinglink clear",p={unversionedId:"cmd/spo/file/file-sharinglink-clear",id:"cmd/spo/file/file-sharinglink-clear",title:"spo file sharinglink clear",description:"Removes sharing links of a file",source:"@site/docs/cmd/spo/file/file-sharinglink-clear.mdx",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-sharinglink-clear",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-sharinglink-clear",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-sharinglink-clear.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo file sharinglink add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-sharinglink-add"},next:{title:"spo file sharinglink get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-sharinglink-get"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-file-sharinglink-clear"},"spo file sharinglink clear"),(0,r.kt)("p",null,"Removes sharing links of a file"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file sharinglink clear [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The URL of the site where the file is located.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--fileUrl [fileUrl]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The server-relative (decoded) URL of the file. Specify either ",(0,r.kt)("code",{parentName:"p"},"fileUrl")," or ",(0,r.kt)("code",{parentName:"p"},"fileId")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--fileId [fileId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The UniqueId (GUID) of the file. Specify either ",(0,r.kt)("code",{parentName:"p"},"fileUrl")," or ",(0,r.kt)("code",{parentName:"p"},"fileId")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-s, --scope [scope]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Scope of the sharing link. Possible options are: ",(0,r.kt)("code",{parentName:"p"},"anonymous"),", ",(0,r.kt)("code",{parentName:"p"},"users")," or ",(0,r.kt)("code",{parentName:"p"},"organization"),". If not specified, all links will be removed.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--confirm"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Don't prompt for confirmation."))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Removes all sharing links from a file specified by id without prompting for confirmation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file sharinglink clear --webUrl https://contoso.sharepoint.com/sites/demo --fileId daebb04b-a773-4baa-b1d1-3625418e3234 --confirm\n")),(0,r.kt)("p",null,"Removes sharing links of type anonymous from a file specified by url with prompting for confirmation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file sharinglink clear --webUrl https://contoso.sharepoint.com/sites/demo --fileUrl '/sites/demo/Shared Documents/document.docx' --scope anonymous\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}m.isMDXComponent=!0}}]);