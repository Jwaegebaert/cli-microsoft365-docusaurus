"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77043],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var i=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,l=function(e,t){if(null==e)return{};var r,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=i.createContext({}),a=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=a(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=a(r),u=l,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return r?i.createElement(k,n(n({ref:t},p),{},{components:r})):i.createElement(k,n({ref:t},p))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,n=new Array(o);n[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:l,n[1]=s;for(var a=2;a<o;a++)n[a]=r[a];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var i=r(87462),l=(r(67294),r(3905));const o={},n="spo listitem record lock",s={unversionedId:"cmd/spo/listitem/listitem-record-lock",id:"cmd/spo/listitem/listitem-record-lock",title:"spo listitem record lock",description:"Locks the list item record",source:"@site/docs/cmd/spo/listitem/listitem-record-lock.md",sourceDirName:"cmd/spo/listitem",slug:"/cmd/spo/listitem/listitem-record-lock",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-record-lock",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/listitem/listitem-record-lock.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo listitem record declare",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-record-declare"},next:{title:"spo listitem record undeclare",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-record-undeclare"}},c={},a=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:a};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spo-listitem-record-lock"},"spo listitem record lock"),(0,l.kt)("p",null,"Locks the list item record"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem record lock [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: The url of the web"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--listItemId <listItemId>"),"\n: ID of the list item that should be locked"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--listId [listId]"),"\n: ID of the list. Specify either ",(0,l.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--listTitle [listTitle]"),"\n: Title of the list. Specify either ",(0,l.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,l.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,l.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Locks the list item record in a given site based on the list id"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem record lock --webUrl https://contoso.sharepoint.com/sites/project-x --listId 0cd891ef-afce-4e55-b836-fce03286cccf --listItemId 1\n")),(0,l.kt)("p",null,"Locks the list item record in a given site based on the list title"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem record lock --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle 'List 1' --listItemId 1\n")),(0,l.kt)("p",null,"Locks the list item record in a given site based on the server relative list url"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem record lock --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl /sites/project-x/lists/TestList --listItemId 1\n")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);