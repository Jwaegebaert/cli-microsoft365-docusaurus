"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[78117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=p(n),u=l,b=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return n?i.createElement(b,o(o({ref:t},m),{},{components:n})):i.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:l,o[1]=a;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=n(87462),l=(n(67294),n(3905));const r={},o="spo listitem retentionlabel ensure",a={unversionedId:"cmd/spo/listitem/listitem-retentionlabel-ensure",id:"cmd/spo/listitem/listitem-retentionlabel-ensure",title:"spo listitem retentionlabel ensure",description:"Apply a retention label to a list item",source:"@site/docs/cmd/spo/listitem/listitem-retentionlabel-ensure.md",sourceDirName:"cmd/spo/listitem",slug:"/cmd/spo/listitem/listitem-retentionlabel-ensure",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-retentionlabel-ensure",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/listitem/listitem-retentionlabel-ensure.md",tags:[],version:"current",lastUpdatedAt:1673046400,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo listitem remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-remove"},next:{title:"spo listitem retentionlabel remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-retentionlabel-remove"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spo-listitem-retentionlabel-ensure"},"spo listitem retentionlabel ensure"),(0,l.kt)("p",null,"Apply a retention label to a list item"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem retentionlabel ensure [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the retentionlabel from a listitem to apply is located"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--listItemId <listItemId>"),"\n: The ID of the list item for which the retention label should be applied."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--listId [listId]"),"\n: ID of the list where the retention label should be applied. Specify either ",(0,l.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--listTitle [listTitle]"),"\n: Title of the list where the retention label should be applied. Specify either ",(0,l.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,l.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The name of the retention label. Specify either ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The id of the retention label. Specify either ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,l.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Applies the retention label ",(0,l.kt)("em",{parentName:"p"},"Some label")," to a list item in a given site based on the list id and label name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem retentionlabel ensure --webUrl https://contoso.sharepoint.com/sites/project-x --listId 0cd891ef-afce-4e55-b836-fce03286cccf --listItemId 1 --name 'Some label'\n")),(0,l.kt)("p",null,"Applies a retention label to a list item in a given site based on the list title and label id"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem retentionlabel ensure --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle 'List 1' --listItemId 1 --id '7a621a91-063b-461b-aff6-d713d5fb23eb'\n")),(0,l.kt)("p",null,"Applies the retention label ",(0,l.kt)("em",{parentName:"p"},"Some label")," to a list item in a given site based on the server relative list url"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem retentionlabel ensure --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl /sites/project-x/lists/TestList --listItemId 1 --name 'Some label'\n")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);