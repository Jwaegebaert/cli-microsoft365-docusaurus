"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(g,p(p({ref:t},c),{},{components:r})):n.createElement(g,p({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},58984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},p="spo page control set",s={unversionedId:"cmd/spo/page/page-control-set",id:"cmd/spo/page/page-control-set",title:"spo page control set",description:"Updates web part data or properties of a control on a modern page",source:"@site/docs/cmd/spo/page/page-control-set.md",sourceDirName:"cmd/spo/page",slug:"/cmd/spo/page/page-control-set",permalink:"/cmd/spo/page/page-control-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/page/page-control-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo page control list",permalink:"/cmd/spo/page/page-control-list"},next:{title:"spo page copy",permalink:"/cmd/spo/page/page-copy"}},i={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-page-control-set"},"spo page control set"),(0,a.kt)("p",null,"Updates web part data or properties of a control on a modern page"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page control set [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: ID of the control to update properties of."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --pageName <pageName>"),"\n: Name of the page where the control is located."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the page is located."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--webPartData [webPartData]"),"\n: JSON string with web part data as retrieved from the web part maintenance mode. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"webPartProperties")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"webPartData")," but not both."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--webPartProperties [webPartProperties]"),"\n: JSON string with web part data as retrieved from the web part maintenance mode. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"webPartProperties")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"webPartData")," but not both."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"pageName")," doesn't refer to an existing modern page, you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"File doesn't exists")," error."),(0,a.kt)("p",null,'!!! warning "Escaping JSON in PowerShell"\nWhen using the ',(0,a.kt)("inlineCode",{parentName:"p"},"--webPartProperties")," option it's possible to enter a JSON string. In PowerShell 5 to 7.2 ",(0,a.kt)("a",{parentName:"p",href:"/user-guide/using-cli#escaping-double-quotes-in-powershell"},"specific escaping rules")," apply due to an issue. Remember that you can also use ",(0,a.kt)("a",{parentName:"p",href:"/user-guide/using-cli#passing-complex-content-into-cli-options"},"file tokens")," instead."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Update web part data for the control, placed on a modern page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo page control set --id 3ede60d3-dc2c-438b-b5bf-cc40bb2351e1 --webUrl https://contoso.sharepoint.com/sites/team-a --pageName home.aspx --webPartData \'{"title":"New WP Title","properties": {"description": "New description"}}\'\n')),(0,a.kt)("p",null,"Update web part properties for the control, placed on a modern page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo page control set --id 3ede60d3-dc2c-438b-b5bf-cc40bb2351e1 --webUrl https://contoso.sharepoint.com/sites/team-a --pageName home.aspx --webPartProperties \'{"description": "New description"}\'\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);