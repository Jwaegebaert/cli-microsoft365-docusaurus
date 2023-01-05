"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},s="spo site rename",i={unversionedId:"cmd/spo/site/site-rename",id:"cmd/spo/site/site-rename",title:"spo site rename",description:"Renames the URL and title of a site collection",source:"@site/docs/cmd/spo/site/site-rename.md",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-rename",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-rename",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-rename.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo site remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-remove"},next:{title:"spo site set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-set"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-site-rename"},"spo site rename"),(0,o.kt)("p",null,"Renames the URL and title of a site collection"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site rename [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --url <url>"),"\n: The URL of the site to rename"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--newUrl <newUrl>"),"\n: New URL for the site collection"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--newTitle [newTitle]"),"\n: New title for the site"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--suppressMarketplaceAppCheck"),"\n: Suppress marketplace app check"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--suppressWorkflow2013Check"),"\n: Suppress 2013 workflow check"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--wait"),"\n: Wait for the job to complete"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("p",null,"!!! important\nTo use this command you must have permissions to access the tenant admin site."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Renaming site collections is by default asynchronous and depending on the current state of Microsoft 365, might take up to few minutes. If you're building a script with steps that require the operation to complete fully, you should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--wait")," flag. When using this flag, the ",(0,o.kt)("inlineCode",{parentName:"p"},"spo site rename")," command  will keep running until it receives confirmation from Microsoft 365 that the site rename operation has completed."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,'Starts the rename of the site collection with name "samplesite" to "renamed" without modifying the title'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site rename --url http://contoso.sharepoint.com/samplesite --newUrl http://contoso.sharepoint.com/renamed\n")),(0,o.kt)("p",null,'Starts the rename of the site collection with name "samplesite" to "renamed" modifying the title of the site to "New Title"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site rename --url http://contoso.sharepoint.com/samplesite --newUrl http://contoso.sharepoint.com/renamed --newTitle "New Title"\n')),(0,o.kt)("p",null,"Renames the specified site collection and waits for the operation to complete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site rename --url http://contoso.sharepoint.com/samplesite --newUrl http://contoso.sharepoint.com/renamed --newTitle "New Title" --wait\n')))}m.isMDXComponent=!0}}]);