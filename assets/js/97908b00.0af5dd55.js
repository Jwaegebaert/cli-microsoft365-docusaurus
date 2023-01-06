"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,l=new Array(s);l[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<s;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const s={},l="spo list roleinheritance reset",o={unversionedId:"cmd/spo/list/list-roleinheritance-reset",id:"cmd/spo/list/list-roleinheritance-reset",title:"spo list roleinheritance reset",description:"Restores role inheritance on list or library",source:"@site/docs/cmd/spo/list/list-roleinheritance-reset.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-roleinheritance-reset",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleinheritance-reset",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-roleinheritance-reset.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list roleinheritance break",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleinheritance-break"},next:{title:"spo list set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-set"}},a={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-list-roleinheritance-reset"},"spo list roleinheritance reset"),(0,i.kt)("p",null,"Restores role inheritance on list or library"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list roleinheritance reset [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list is located."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --listId [listId]"),"\n: ID of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: Title of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Do not prompt for confirmation before resetting role inheritance."),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Restores role inheritance of a specific list by id in a specific site"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list roleinheritance reset --webUrl https://contoso.sharepoint.com/sites/project-x --listId 0cd891ef-afce-4e55-b836-fce03286cccf\n")),(0,i.kt)("p",null,"Restores role inheritance of a specific list by title in a specific site"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list roleinheritance reset --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle test\n")),(0,i.kt)("p",null,"Restores role inheritance of a specific list by url in a specific site"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list roleinheritance reset --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl '/sites/project-x/lists/events'\n")),(0,i.kt)("p",null,"Restores role inheritance of list a specific list by title without prompting for confirmation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list roleinheritance reset --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle test --confirm\n")),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,"The command won't return a response on success."))}m.isMDXComponent=!0}}]);