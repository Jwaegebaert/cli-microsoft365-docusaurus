"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[7551],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var p=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,p)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,p,r=function(e,t){if(null==e)return{};var o,p,r={},s=Object.keys(e);for(p=0;p<s.length;p++)o=s[p],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(p=0;p<s.length;p++)o=s[p],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=p.createContext({}),m=function(e){var t=p.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},c=function(e){var t=m(e.components);return p.createElement(a.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},d=p.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=m(o),d=r,f=l["".concat(a,".").concat(d)]||l[d]||u[d]||s;return o?p.createElement(f,n(n({ref:t},c),{},{components:o})):p.createElement(f,n({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,n=new Array(s);n[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[l]="string"==typeof e?e:r,n[1]=i;for(var m=2;m<s;m++)n[m]=o[m];return p.createElement.apply(null,n)}return p.createElement.apply(null,o)}d.displayName="MDXCreateElement"},88851:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var p=o(87462),r=(o(67294),o(3905));const s={},n="spo site apppermission remove",i={unversionedId:"cmd/spo/site/site-apppermission-remove",id:"cmd/spo/site/site-apppermission-remove",title:"spo site apppermission remove",description:"Removes a specific application permission from a site",source:"@site/docs/cmd/spo/site/site-apppermission-remove.md",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-apppermission-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-apppermission-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-apppermission-remove.md",tags:[],version:"current",lastUpdatedAt:1667081579,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo site apppermission list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-apppermission-list"},next:{title:"spo site apppermission set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-apppermission-set"}},a={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Example",id:"example",level:2}],c={toc:m},l="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,p.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-site-apppermission-remove"},"spo site apppermission remove"),(0,r.kt)("p",null,"Removes a specific application permission from a site"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission remove [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-u, --siteUrl <siteUrl>"),"\n: URL of the site collection where the permission to remove is located"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--appId [appId]"),"\n: App Id"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --appDisplayName [appDisplayName]"),"\n: App display name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: ID of the permission to remove"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Removes all application permissions for application with id ",(0,r.kt)("em",{parentName:"p"},"89ea5c94-7736-4e25-95ad-3fa95f62b66e")," on site ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission remove --siteUrl https://contoso.sharepoint.com/sites/project-x --appId 89ea5c94-7736-4e25-95ad-3fa95f62b66e\n")),(0,r.kt)("p",null,"Removes all application permissions for application named ",(0,r.kt)("em",{parentName:"p"},"Foo")," on site ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission remove --siteUrl https://contoso.sharepoint.com/sites/project-x --appDisplayName Foo\n")),(0,r.kt)("p",null,"Removes the application permission with the specified ID on site ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission remove --siteUrl https://contoso.sharepoint.com/sites/project-x --id aTowaS50fG1zLnNwLmV4dHw4OWVhNWM5NC03NzM2LTRlMjUtOTVhZC0zZmE5NWY2MmI2NmVAZGUzNDhiYzctMWFlYi00NDA2LThjYjMtOTdkYjAyMWNhZGI0\n")))}u.isMDXComponent=!0}}]);