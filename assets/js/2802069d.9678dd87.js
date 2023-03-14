"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[93924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,k=m["".concat(a,".").concat(u)]||m[u]||d[u]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=u;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},37884:(e,t,r)=>{r.d(t,{ZP:()=>s});var n=r(87462),o=(r(67294),r(3905));const l={toc:[]},i="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(i,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},40278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),l=r(37884);const i={},s="spo listitem roleinheritance reset",a={unversionedId:"cmd/spo/listitem/listitem-roleinheritance-reset",id:"cmd/spo/listitem/listitem-roleinheritance-reset",title:"spo listitem roleinheritance reset",description:"Restores the role inheritance of list item, file, or folder",source:"@site/docs/cmd/spo/listitem/listitem-roleinheritance-reset.mdx",sourceDirName:"cmd/spo/listitem",slug:"/cmd/spo/listitem/listitem-roleinheritance-reset",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-roleinheritance-reset",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/listitem/listitem-roleinheritance-reset.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo listitem roleinheritance break",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-roleinheritance-break"},next:{title:"spo listitem set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-set"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-listitem-roleinheritance-reset"},"spo listitem roleinheritance reset"),(0,o.kt)("p",null,"Restores the role inheritance of list item, file, or folder"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem roleinheritance reset [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"URL of the site where the item for which to reset role inheritance is located")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--listItemId <listItemId>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"ID of the item for which to reset role inheritance")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--listId [listId]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"ID of the list. Specify either ",(0,o.kt)("code",{parentName:"p"},"listTitle"),", ",(0,o.kt)("code",{parentName:"p"},"listId")," or ",(0,o.kt)("code",{parentName:"p"},"listUrl"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--listTitle [listTitle]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Title of the list. Specify either ",(0,o.kt)("code",{parentName:"p"},"listTitle"),", ",(0,o.kt)("code",{parentName:"p"},"listId")," or ",(0,o.kt)("code",{parentName:"p"},"listUrl"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Server- or site-relative URL of the list. Specify either ",(0,o.kt)("code",{parentName:"p"},"listTitle"),", ",(0,o.kt)("code",{parentName:"p"},"listId")," or ",(0,o.kt)("code",{parentName:"p"},"listUrl"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--confirm"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Do not prompt for confirmation before resetting role inheritance."))),(0,o.kt)(l.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Restore role inheritance of list item with id 8 from list with ID ",(0,o.kt)("em",{parentName:"p"},"0cd891ef-afce-4e55-b836-fce03286cccf")," located in site ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem roleinheritance reset --webUrl https://contoso.sharepoint.com/sites/project-x --listItemId 8 --listId 0cd891ef-afce-4e55-b836-fce03286cccf\n")),(0,o.kt)("p",null,"Restore role inheritance of list item with id 8 from list with title ",(0,o.kt)("em",{parentName:"p"},"test")," located in site ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem roleinheritance reset --webUrl https://contoso.sharepoint.com/sites/project-x --listItemId 8 --listTitle test\n")),(0,o.kt)("p",null,"Restore role inheritance of a list item with a specific id in a list retrieved by server relative URL located in a specific site without prompting for confirmation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem roleinheritance reset --webUrl https://contoso.sharepoint.com/sites/project-x --listItemId 8 --listUrl /sites/project-x/lists/test --confirm\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);