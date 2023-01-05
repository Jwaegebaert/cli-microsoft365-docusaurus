"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9734],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(g,p(p({ref:t},c),{},{components:a})):n.createElement(g,p({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,p=new Array(r);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<r;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39773:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={},p="spo tenant appcatalog add",i={unversionedId:"cmd/spo/tenant/tenant-appcatalog-add",id:"cmd/spo/tenant/tenant-appcatalog-add",title:"spo tenant appcatalog add",description:"Creates new tenant app catalog site",source:"@site/docs/cmd/spo/tenant/tenant-appcatalog-add.md",sourceDirName:"cmd/spo/tenant",slug:"/cmd/spo/tenant/tenant-appcatalog-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/tenant/tenant-appcatalog-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/tenant/tenant-appcatalog-add.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo storageentity set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/storageentity/storageentity-set"},next:{title:"spo tenant appcatalogurl get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/tenant/tenant-appcatalogurl-get"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-tenant-appcatalog-add"},"spo tenant appcatalog add"),(0,o.kt)("p",null,"Creates new tenant app catalog site"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo tenant appcatalog add [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --url <url>"),"\n: The absolute site url"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--owner <owner>"),"\n: The account name of the site owner"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-z, --timeZone <timeZone>"),"\n: Integer representing time zone to use for the site"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--wait"),"\n: Wait for the site to be provisioned before completing the command"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--force"),"\n: Force creating a new app catalog site if one already exists"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If there is an app catalog registered in your tenant, creating a new app catalog using this command will fail, unless you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"force")," option."),(0,o.kt)("p",null,"If you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"force")," option, and either the app catalog or the site at the specified URL exists (or both), this command will delete both sites bypassing the recycle bin."),(0,o.kt)("p",null,"Creating an app catalog site might take a while. If you need to wait for the site to be created before continuing, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"wait")," option."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Creates new app catalog. Will fail if another app catalog or site at the specified URL exists"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo tenant appcatalog add --url https://contoso.sharepoint.com/sites/apps --owner admin@contoso.com --timeZone 4\n")),(0,o.kt)("p",null,"Creates new app catalog and waits for completion. Will fail if another app catalog or site at the specified URL exists"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo tenant appcatalog add --url https://contoso.sharepoint.com/sites/apps --owner admin@contoso.com --timeZone 4 --wait\n")),(0,o.kt)("p",null,"Creates new app catalog and deletes existing app catalog and existing site at the specified URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo tenant appcatalog add --url https://contoso.sharepoint.com/sites/apps --owner admin@contoso.com --timeZone 4 --force\n")))}d.isMDXComponent=!0}}]);