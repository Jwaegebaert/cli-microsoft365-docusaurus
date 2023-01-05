"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45976],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),l=s(r),u=o,g=l["".concat(d,".").concat(u)]||l[u]||c[u]||a;return r?n.createElement(g,p(p({ref:t},i),{},{components:r})):n.createElement(g,p({ref:t},i))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=u;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m[l]="string"==typeof e?e:o,p[1]=m;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},17865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>m,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},p="spo term group add",m={unversionedId:"cmd/spo/term/term-group-add",id:"cmd/spo/term/term-group-add",title:"spo term group add",description:"Adds taxonomy term group",source:"@site/docs/cmd/spo/term/term-group-add.md",sourceDirName:"cmd/spo/term",slug:"/cmd/spo/term/term-group-add",permalink:"/cmd/spo/term/term-group-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/term/term-group-add.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo term get",permalink:"/cmd/spo/term/term-get"},next:{title:"spo term group get",permalink:"/cmd/spo/term/term-group-get"}},d={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],i={toc:s};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-term-group-add"},"spo term group add"),(0,o.kt)("p",null,"Adds taxonomy term group"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term group add [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: Name of the term group to add"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: ID of the term group to add"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-d, --description [description]"),"\n: Description of the term group to add"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Add a new taxonomy term group with the specified name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term group add --name PnPTermSets\n")),(0,o.kt)("p",null,"Add a new taxonomy term group with the specified name and id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term group add --name PnPTermSets --id 0e8f395e-ff58-4d45-9ff7-e331ab728beb\n")),(0,o.kt)("p",null,"Add a new taxonomy term group with the specified name and description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term group add --name PnPTermSets --description 'Term sets for PnP'\n")))}l.isMDXComponent=!0}}]);