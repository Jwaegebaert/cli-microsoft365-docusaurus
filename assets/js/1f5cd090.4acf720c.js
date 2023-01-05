"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),i=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,m=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=i(r),d=o,f=c["".concat(m,".").concat(d)]||c[d]||u[d]||s;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[c]="string"==typeof e?e:o,a[1]=p;for(var i=2;i<s;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const s={},a="spo term set list",p={unversionedId:"cmd/spo/term/term-set-list",id:"cmd/spo/term/term-set-list",title:"spo term set list",description:"Lists taxonomy term sets from the given term group",source:"@site/docs/cmd/spo/term/term-set-list.md",sourceDirName:"cmd/spo/term",slug:"/cmd/spo/term/term-set-list",permalink:"/cmd/spo/term/term-set-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/term/term-set-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo term set get",permalink:"/cmd/spo/term/term-set-get"},next:{title:"spo theme apply",permalink:"/cmd/spo/theme/theme-apply"}},m={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],l={toc:i};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-term-set-list"},"spo term set list"),(0,o.kt)("p",null,"Lists taxonomy term sets from the given term group"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term set list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--termGroupId [termGroupId]"),"\n: ID of the term group from which to retrieve term sets. Specify ",(0,o.kt)("inlineCode",{parentName:"p"},"termGroupName")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"termGroupId")," but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--termGroupName [termGroupName]"),"\n: Name of the term group from which to retrieve term sets. Specify ",(0,o.kt)("inlineCode",{parentName:"p"},"termGroupName")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"termGroupId")," but not both"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"List taxonomy term sets from the term group with the given name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term set list --termGroupName PnPTermSets\n")),(0,o.kt)("p",null,"List taxonomy term sets from the term group with the given ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term set list --termGroupId 0e8f395e-ff58-4d45-9ff7-e331ab728beb\n")))}c.isMDXComponent=!0}}]);