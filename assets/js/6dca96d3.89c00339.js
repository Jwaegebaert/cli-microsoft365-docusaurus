"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[99376],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(o),u=r,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return o?n.createElement(f,l(l({ref:t},c),{},{components:o})):n.createElement(f,l({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},37884:(e,t,o)=>{o.d(t,{ZP:()=>i});var n=o(87462),r=(o(67294),o(3905));const a={toc:[]},l="wrapper";function i(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,n.Z)({},a,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}i.isMDXComponent=!0},14066:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=o(87462),r=(o(67294),o(3905)),a=o(37884);const l={},i="spo file copy",p={unversionedId:"cmd/spo/file/file-copy",id:"cmd/spo/file/file-copy",title:"spo file copy",description:"Copies a file to another location",source:"@site/docs/cmd/spo/file/file-copy.mdx",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-copy",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-copy",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-copy.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo file checkout",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-checkout"},next:{title:"spo file get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-get"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-file-copy"},"spo file copy"),(0,r.kt)("p",null,"Copies a file to another location"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file copy [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The URL of the site where the file is located.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-s, --sourceUrl <sourceUrl>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Server-relative or absolute URL of the file.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-t, --targetUrl <targetUrl>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Server-relative or absolute URL of the location.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--newName [newName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"New name of the destination file.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--nameConflictBehavior [nameConflictBehavior]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Behavior when a document with the same name is already present at the destination. Possible values: ",(0,r.kt)("code",{parentName:"p"},"fail"),", ",(0,r.kt)("code",{parentName:"p"},"replace"),", ",(0,r.kt)("code",{parentName:"p"},"rename"),". Default is ",(0,r.kt)("code",{parentName:"p"},"fail"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--bypassSharedLock"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"This indicates whether a file with a share lock can still be copied. Use this option to copy a file that is locked."))),(0,r.kt)(a.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The required URLs ",(0,r.kt)("inlineCode",{parentName:"p"},"webUrl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sourceUrl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"targetUrl")," cannot be encoded. When you do so, you will get a ",(0,r.kt)("inlineCode",{parentName:"p"},"File Not Found")," error.")),(0,r.kt)("p",null,"When you specify a value for ",(0,r.kt)("inlineCode",{parentName:"p"},"nameConflictBehavior"),", consider the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fail")," will throw an error when the destination file already exists."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replace")," will replace the destination file if it already exists."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rename")," will add a suffix (e.g. Document1.pdf) when the destination file already exists.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Copy a file to a document library in another site collection with server relative URLs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo file copy --webUrl https://contoso.sharepoint.com/sites/project --sourceUrl "/sites/project/Shared Documents/Document.pdf" --targetUrl "/sites/IT/Shared Documents"\n')),(0,r.kt)("p",null,"Copy a file to a document library in another site collection with absolute URLs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo file copy --webUrl https://contoso.sharepoint.com/sites/project --sourceUrl "https://contoso.sharepoint.com/sites/project/Shared Documents/Document.pdf" --targetUrl "https://contoso.sharepoint.com/sites/IT/Shared Documents"\n')),(0,r.kt)("p",null,"Copy file to a document library in another site collection with a new name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo file copy --webUrl https://contoso.sharepoint.com/sites/project --sourceUrl "/sites/project/Shared Documents/Document.pdf" --targetUrl "/sites/IT/Shared Documents" --newName "Report.pdf"\n')),(0,r.kt)("p",null,"Copy file to a document library in another site collection with a new name, rename the file if it already exists"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo file copy --webUrl https://contoso.sharepoint.com/sites/project --sourceUrl "/sites/project/Shared Documents/Document.pdf" --targetUrl "/sites/IT/Shared Documents" --newName "Report.pdf" --nameConflictBehavior rename\n')),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy items from a SharePoint document library: ",(0,r.kt)("a",{parentName:"li",href:"https://support.office.com/en-us/article/move-or-copy-items-from-a-sharepoint-document-library-00e2f483-4df3-46be-a861-1f5f0c1a87bc"},"https://support.office.com/en-us/article/move-or-copy-items-from-a-sharepoint-document-library-00e2f483-4df3-46be-a861-1f5f0c1a87bc"))))}u.isMDXComponent=!0}}]);