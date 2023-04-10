"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[81970],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=a(r),u=i,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var a=2;a<l;a++)o[a]=r[a];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var n=r(87462),i=(r(67294),r(3905));const l={},o="spo listitem record unlock",s={unversionedId:"cmd/spo/listitem/listitem-record-unlock",id:"cmd/spo/listitem/listitem-record-unlock",title:"spo listitem record unlock",description:"Unlocks the list item record",source:"@site/docs/cmd/spo/listitem/listitem-record-unlock.md",sourceDirName:"cmd/spo/listitem",slug:"/cmd/spo/listitem/listitem-record-unlock",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-record-unlock",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/listitem/listitem-record-unlock.md",tags:[],version:"current",lastUpdatedAt:1672554642,formattedLastUpdatedAt:"Jan 1, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo listitem record undeclare",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-record-undeclare"},next:{title:"spo listitem remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-remove"}},c={},a=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:a},m="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-listitem-record-unlock"},"spo listitem record unlock"),(0,i.kt)("p",null,"Unlocks the list item record"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem record unlock [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: The url of the web"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--listItemId <listItemId>"),"\n: ID of the list item that should be unlocked"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--listId [listId]"),"\n: ID of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--listTitle [listTitle]"),"\n: Title of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Unlocks the list item record in a given site based on the list id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem record unlock --webUrl https://contoso.sharepoint.com/sites/project-x --listId 0cd891ef-afce-4e55-b836-fce03286cccf --listItemId 1\n")),(0,i.kt)("p",null,"Unlocks the list item record in a given site based on the list title"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem record unlock --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle 'List 1' --listItemId 1\n")),(0,i.kt)("p",null,"Unlocks the list item record in a given site based on the server relative list url"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem record unlock --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl /sites/project-x/lists/TestList --listItemId 1\n")),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);