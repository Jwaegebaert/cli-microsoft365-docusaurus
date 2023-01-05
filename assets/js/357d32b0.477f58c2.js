"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33114],{3905:(e,t,p)=>{p.d(t,{Zo:()=>l,kt:()=>f});var n=p(67294);function i(e,t,p){return t in e?Object.defineProperty(e,t,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[t]=p,e}function a(e,t){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),p.push.apply(p,n)}return p}function o(e){for(var t=1;t<arguments.length;t++){var p=null!=arguments[t]?arguments[t]:{};t%2?a(Object(p),!0).forEach((function(t){i(e,t,p[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):a(Object(p)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(p,t))}))}return e}function s(e,t){if(null==e)return{};var p,n,i=function(e,t){if(null==e)return{};var p,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)p=a[n],t.indexOf(p)>=0||(i[p]=e[p]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)p=a[n],t.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(i[p]=e[p])}return i}var r=n.createContext({}),m=function(e){var t=n.useContext(r),p=t;return e&&(p="function"==typeof e?e(t):o(o({},t),e)),p},l=function(e){var t=m(e.components);return n.createElement(r.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var p=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(p),u=i,f=c["".concat(r,".").concat(u)]||c[u]||d[u]||a;return p?n.createElement(f,o(o({ref:t},l),{},{components:p})):n.createElement(f,o({ref:t},l))}));function f(e,t){var p=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=p.length,o=new Array(a);o[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var m=2;m<a;m++)o[m]=p[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,p)}u.displayName="MDXCreateElement"},62398:(e,t,p)=>{p.r(t),p.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var n=p(87462),i=(p(67294),p(3905));const a={},o="spo site apppermission set",s={unversionedId:"cmd/spo/site/site-apppermission-set",id:"cmd/spo/site/site-apppermission-set",title:"spo site apppermission set",description:"Updates a specific application permission for a site",source:"@site/docs/cmd/spo/site/site-apppermission-set.md",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-apppermission-set",permalink:"/cmd/spo/site/site-apppermission-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-apppermission-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo site apppermission remove",permalink:"/cmd/spo/site/site-apppermission-remove"},next:{title:"spo site chrome set",permalink:"/cmd/spo/site/site-chrome-set"}},r={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],l={toc:m};function c(e){let{components:t,...p}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-site-apppermission-set"},"spo site apppermission set"),(0,i.kt)("p",null,"Updates a specific application permission for a site"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission set [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-u, --siteUrl <siteUrl>"),"\n: URL of the site collection where the permission to retrieve is located"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: ID of the permission to update. Specify ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"appId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"appDisplayName")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--appId [appId]"),"\n: Client ID of the Azure AD app for which to update permissions. Specify ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"appId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"appDisplayName")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-n, --appDisplayName [appDisplayName]"),"\n: Display name of the Azure AD app for which to update permissions. Specify ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"appId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"appDisplayName")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-p, --permission <permission>"),"\n: Permission to site (",(0,i.kt)("inlineCode",{parentName:"p"},"read"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"write"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"manage")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"fullcontrol"),")"),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Updates a specific application permission to ",(0,i.kt)("em",{parentName:"p"},"read")," for the ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," site collection with permission id ",(0,i.kt)("em",{parentName:"p"},"aTowaS50fG1zLnNwLmV4dHw4OWVhNWM5NC03NzM2LTRlMjUtOTVhZC0zZmE5NWY2MmI2NmVAZGUzNDhiYzctMWFlYi00NDA2LThjYjMtOTdkYjAyMWNhZGI0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission set --siteUrl https://contoso.sharepoint.com/sites/project-x --id aTowaS50fG1zLnNwLmV4dHw4OWVhNWM5NC03NzM2LTRlMjUtOTVhZC0zZmE5NWY2MmI2NmVAZGUzNDhiYzctMWFlYi00NDA2LThjYjMtOTdkYjAyMWNhZGI0 --permission read\n")),(0,i.kt)("p",null,"Updates a specific application permission to ",(0,i.kt)("em",{parentName:"p"},"read")," for the ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," site collection with an application called ",(0,i.kt)("em",{parentName:"p"},"Foo")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission set --siteUrl https://contoso.sharepoint.com/sites/project-x --appDisplayName Foo --permission read\n")),(0,i.kt)("p",null,"Updates a specific application permission to ",(0,i.kt)("em",{parentName:"p"},"read")," for the ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," site collection with an application id ",(0,i.kt)("em",{parentName:"p"},"89ea5c94-7736-4e25-95ad-3fa95f62b66e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site apppermission set --siteUrl https://contoso.sharepoint.com/sites/project-x --appId 89ea5c94-7736-4e25-95ad-3fa95f62b66e --permission read\n")))}c.isMDXComponent=!0}}]);