"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[72460],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),c=l(a),u=o,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||p;return a?n.createElement(k,r(r({ref:t},i),{},{components:a})):n.createElement(k,r({ref:t},i))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=a.length,r=new Array(p);r[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:o,r[1]=d;for(var l=2;l<p;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>d});var n=a(87462),o=(a(67294),a(3905));const p={toc:[]},r="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(r,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",{parentName:"p"},"options"),", ",(0,o.kt)("code",{parentName:"p"},"examples"),", ",(0,o.kt)("code",{parentName:"p"},"remarks"),", ",(0,o.kt)("code",{parentName:"p"},"response"),", ",(0,o.kt)("code",{parentName:"p"},"full"),". Default is ",(0,o.kt)("code",{parentName:"p"},"full"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--query [query]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,o.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output type. ",(0,o.kt)("code",{parentName:"p"},"json"),", ",(0,o.kt)("code",{parentName:"p"},"text"),", ",(0,o.kt)("code",{parentName:"p"},"csv"),", ",(0,o.kt)("code",{parentName:"p"},"md"),". Default ",(0,o.kt)("code",{parentName:"p"},"json"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--verbose"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--debug"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}d.isMDXComponent=!0},24420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var n=a(87462),o=(a(67294),a(3905)),p=a(26054);const r={},d="spo tenant appcatalog add",s={unversionedId:"cmd/spo/tenant/tenant-appcatalog-add",id:"cmd/spo/tenant/tenant-appcatalog-add",title:"spo tenant appcatalog add",description:"Creates new tenant app catalog site",source:"@site/docs/cmd/spo/tenant/tenant-appcatalog-add.mdx",sourceDirName:"cmd/spo/tenant",slug:"/cmd/spo/tenant/tenant-appcatalog-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/tenant/tenant-appcatalog-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/tenant/tenant-appcatalog-add.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo storageentity set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/storageentity/storageentity-set"},next:{title:"spo tenant appcatalogurl get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/tenant/tenant-appcatalogurl-get"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:i},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-tenant-appcatalog-add"},"spo tenant appcatalog add"),(0,o.kt)("p",null,"Creates new tenant app catalog site"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo tenant appcatalog add [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --url <url>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The absolute site url")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--owner <owner>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The account name of the site owner")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-z, --timeZone <timeZone>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Integer representing time zone to use for the site")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--wait"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Wait for the site to be provisioned before completing the command")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--force"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Force creating a new app catalog site if one already exists"))),(0,o.kt)(p.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If there is an app catalog registered in your tenant, creating a new app catalog using this command will fail, unless you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"force")," option."),(0,o.kt)("p",null,"If you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"force")," option, and either the app catalog or the site at the specified URL exists (or both), this command will delete both sites bypassing the recycle bin."),(0,o.kt)("p",null,"Creating an app catalog site might take a while. If you need to wait for the site to be created before continuing, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"wait")," option."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To use this command you have to have permissions to access the tenant admin site.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Creates new app catalog. Will fail if another app catalog or site at the specified URL exists"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo tenant appcatalog add --url https://contoso.sharepoint.com/sites/apps --owner admin@contoso.com --timeZone 4\n")),(0,o.kt)("p",null,"Creates new app catalog and waits for completion. Will fail if another app catalog or site at the specified URL exists"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo tenant appcatalog add --url https://contoso.sharepoint.com/sites/apps --owner admin@contoso.com --timeZone 4 --wait\n")),(0,o.kt)("p",null,"Creates new app catalog and deletes existing app catalog and existing site at the specified URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo tenant appcatalog add --url https://contoso.sharepoint.com/sites/apps --owner admin@contoso.com --timeZone 4 --force\n")))}u.isMDXComponent=!0}}]);