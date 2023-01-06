"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64246],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=o.createContext({}),i=function(e){var t=o.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(m.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(r),d=n,f=u["".concat(m,".").concat(d)]||u[d]||l[d]||p;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=d;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var i=2;i<p;i++)a[i]=r[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var o=r(87462),n=(r(67294),r(3905));const p={},a="spo group remove",s={unversionedId:"cmd/spo/group/group-remove",id:"cmd/spo/group/group-remove",title:"spo group remove",description:"Removes group from specific web",source:"@site/docs/cmd/spo/group/group-remove.md",sourceDirName:"cmd/spo/group",slug:"/cmd/spo/group/group-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/group/group-remove.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo group member remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-member-remove"},next:{title:"spo group set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-set"}},m={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],c={toc:i};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-group-remove"},"spo group remove"),(0,n.kt)("p",null,"Removes group from specific web"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: Url of the web to remove the group from"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--id [id]"),"\n: ID of the group to remove. Use ID or name but not both"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--name [name]"),"\n: Name of the group to remove. Use ID or name but not both"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Confirm removal of the group"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Removes group with id ",(0,n.kt)("em",{parentName:"p"},"5")," from web ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/mysite"},"https://contoso.sharepoint.com/sites/mysite"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group remove --webUrl https://contoso.sharepoint.com/sites/mysite --id 5\n")),(0,n.kt)("p",null,"Removes group with name ",(0,n.kt)("em",{parentName:"p"},"Team Site Owners")," from web ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/mysite"},"https://contoso.sharepoint.com/sites/mysite"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group remove --webUrl https://contoso.sharepoint.com/sites/mysite --name "Team Site Owners"\n')))}u.isMDXComponent=!0}}]);