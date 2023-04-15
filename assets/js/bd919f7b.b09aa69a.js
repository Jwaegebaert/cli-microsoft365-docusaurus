"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[30465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a="spo site rename",s={unversionedId:"cmd/spo/site/site-rename",id:"cmd/spo/site/site-rename",title:"spo site rename",description:"Renames the URL and title of a site collection",source:"@site/docs/cmd/spo/site/site-rename.md",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-rename",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-rename",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-rename.md",tags:[],version:"current",lastUpdatedAt:1678569617,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo site remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-remove"},next:{title:"spo site set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-set"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-site-rename"},"spo site rename"),(0,o.kt)("p",null,"Renames the URL and title of a site collection"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site rename [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --url <url>"),"\n: The URL of the site to rename"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--newUrl <newUrl>"),"\n: New URL for the site collection"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--newTitle [newTitle]"),"\n: New title for the site"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--suppressMarketplaceAppCheck"),"\n: Suppress marketplace app check"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--suppressWorkflow2013Check"),"\n: Suppress 2013 workflow check"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--wait"),"\n: Wait for the job to complete"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Renaming site collections is by default asynchronous and depending on the current state of Microsoft 365, might take up to few minutes. If you're building a script with steps that require the operation to complete fully, you should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--wait")," flag. When using this flag, the ",(0,o.kt)("inlineCode",{parentName:"p"},"spo site rename")," command  will keep running until it receives confirmation from Microsoft 365 that the site rename operation has completed."),(0,o.kt)("p",null,"!!! important\nTo use this command you must have permissions to access the tenant admin site."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,'Starts the rename of the site collection with name "samplesite" to "renamed" without modifying the title'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site rename --url http://contoso.sharepoint.com/samplesite --newUrl http://contoso.sharepoint.com/renamed\n")),(0,o.kt)("p",null,'Starts the rename of the site collection with name "samplesite" to "renamed" modifying the title of the site to "New Title"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site rename --url http://contoso.sharepoint.com/samplesite --newUrl http://contoso.sharepoint.com/renamed --newTitle "New Title"\n')),(0,o.kt)("p",null,"Renames the specified site collection and waits for the operation to complete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site rename --url http://contoso.sharepoint.com/samplesite --newUrl http://contoso.sharepoint.com/renamed --newTitle "New Title" --wait\n')))}u.isMDXComponent=!0}}]);