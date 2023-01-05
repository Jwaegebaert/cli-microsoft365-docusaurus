"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),m=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=m(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(r),d=n,g=u["".concat(i,".").concat(d)]||u[d]||c[d]||p;return r?o.createElement(g,a(a({ref:t},l),{},{components:r})):o.createElement(g,a({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var m=2;m<p;m++)a[m]=r[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98444:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var o=r(87462),n=(r(67294),r(3905));const p={},a="spo group member list",s={unversionedId:"cmd/spo/group/group-member-list",id:"cmd/spo/group/group-member-list",title:"spo group member list",description:"List the members of a SharePoint Group",source:"@site/docs/cmd/spo/group/group-member-list.md",sourceDirName:"cmd/spo/group",slug:"/cmd/spo/group/group-member-list",permalink:"/cmd/spo/group/group-member-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/group/group-member-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo group member add",permalink:"/cmd/spo/group/group-member-add"},next:{title:"spo group member remove",permalink:"/cmd/spo/group/group-member-remove"}},i={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],l={toc:m};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-group-member-list"},"spo group member list"),(0,n.kt)("p",null,"List the members of a SharePoint Group"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group member list [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the SharePoint site"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--groupId [groupId]"),"\n: Id of the SharePoint group. Use either ",(0,n.kt)("inlineCode",{parentName:"p"},"groupName")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId"),", but not both"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--groupName [groupName]"),"\n: Name of the SharePoint group. Use either ",(0,n.kt)("inlineCode",{parentName:"p"},"groupName")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId"),", but not both"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"List the members of the group with ID ",(0,n.kt)("em",{parentName:"p"},"5")," for web ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/SiteA"},"https://contoso.sharepoint.com/sites/SiteA"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group member list --webUrl https://contoso.sharepoint.com/sites/SiteA --groupId 5\n")),(0,n.kt)("p",null,"List the members of the group with name ",(0,n.kt)("em",{parentName:"p"},"Contoso Site Members")," for web ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/SiteA"},"https://contoso.sharepoint.com/sites/SiteA"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member list --webUrl https://contoso.sharepoint.com/sites/SiteA --groupName "Contoso Site Members"\n')))}u.isMDXComponent=!0}}]);