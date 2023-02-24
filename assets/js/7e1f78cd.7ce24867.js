"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[65384],{3905:(e,r,o)=>{o.d(r,{Zo:()=>u,kt:()=>f});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function p(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=t.createContext({}),l=function(e){var r=t.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},u=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(o),s=n,f=m["".concat(c,".").concat(s)]||m[s]||d[s]||a;return o?t.createElement(f,i(i({ref:r},u),{},{components:o})):t.createElement(f,i({ref:r},u))}));function f(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=s;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}s.displayName="MDXCreateElement"},24551:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var t=o(87462),n=(o(67294),o(3905));const a={},i="aad o365group remove",p={unversionedId:"cmd/aad/o365group/o365group-remove",id:"cmd/aad/o365group/o365group-remove",title:"aad o365group remove",description:"Removes an Microsoft 365 Group",source:"@site/docs/cmd/aad/o365group/o365group-remove.md",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-remove.md",tags:[],version:"current",lastUpdatedAt:1649592241,formattedLastUpdatedAt:"Apr 10, 2022",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group recyclebinitem restore",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-recyclebinitem-restore"},next:{title:"aad o365group renew",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-renew"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],u={toc:l},m="wrapper";function d(e){let{components:r,...o}=e;return(0,n.kt)(m,(0,t.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-o365group-remove"},"aad o365group remove"),(0,n.kt)("p",null,"Removes an Microsoft 365 Group"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: The ID of the Microsoft 365 Group to remove"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming removing the group"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--skipRecycleBin"),"\n: Set to directly remove the group without moving it to the Recycle Bin"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"If the specified ",(0,n.kt)("em",{parentName:"p"},"id")," doesn't refer to an existing group, you will get a ",(0,n.kt)("inlineCode",{parentName:"p"},"Resource does not exist")," error."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Remove group with id ",(0,n.kt)("em",{parentName:"p"},"28beab62-7540-4db1-a23f-29a6018a3848"),". Will prompt for confirmation before removing the group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group remove --id 28beab62-7540-4db1-a23f-29a6018a3848\n")),(0,n.kt)("p",null,"Remove group with id ",(0,n.kt)("em",{parentName:"p"},"28beab62-7540-4db1-a23f-29a6018a3848")," without prompting for confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group remove --id 28beab62-7540-4db1-a23f-29a6018a3848 --confirm\n")),(0,n.kt)("p",null,"Remove group with id ",(0,n.kt)("em",{parentName:"p"},"28beab62-7540-4db1-a23f-29a6018a3848")," without prompting for confirmation and without moving it to the Recycle Bin"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group remove --id 28beab62-7540-4db1-a23f-29a6018a3848 --confirm --skipRecycleBin\n")))}d.isMDXComponent=!0}}]);