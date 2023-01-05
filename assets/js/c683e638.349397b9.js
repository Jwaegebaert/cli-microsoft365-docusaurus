"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=l(r),c=a,d=g["".concat(s,".").concat(c)]||g[c]||m[c]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[g]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},11845:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="aad groupsetting remove",p={unversionedId:"cmd/aad/groupsetting/groupsetting-remove",id:"cmd/aad/groupsetting/groupsetting-remove",title:"aad groupsetting remove",description:"Removes the particular group setting",source:"@site/docs/cmd/aad/groupsetting/groupsetting-remove.md",sourceDirName:"cmd/aad/groupsetting",slug:"/cmd/aad/groupsetting/groupsetting-remove",permalink:"/cmd/aad/groupsetting/groupsetting-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/groupsetting/groupsetting-remove.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad groupsetting list",permalink:"/cmd/aad/groupsetting/groupsetting-list"},next:{title:"aad groupsetting set",permalink:"/cmd/aad/groupsetting/groupsetting-set"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],u={toc:l};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aad-groupsetting-remove"},"aad groupsetting remove"),(0,a.kt)("p",null,"Removes the particular group setting"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad groupsetting remove [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: The ID of the group setting to remove"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming removing the group setting"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If the specified ",(0,a.kt)("em",{parentName:"p"},"id")," doesn't refer to an existing group setting, you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource does not exist")," error."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Remove group setting with id ",(0,a.kt)("em",{parentName:"p"},"28beab62-7540-4db1-a23f-29a6018a3848"),". Will prompt for confirmation before removing the group setting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad groupsetting remove --id 28beab62-7540-4db1-a23f-29a6018a3848\n")),(0,a.kt)("p",null,"Remove group setting with id ",(0,a.kt)("em",{parentName:"p"},"28beab62-7540-4db1-a23f-29a6018a3848")," without prompting for confirmation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad groupsetting remove --id 28beab62-7540-4db1-a23f-29a6018a3848 --confirm\n")))}g.isMDXComponent=!0}}]);