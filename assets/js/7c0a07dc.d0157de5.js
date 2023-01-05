"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),a=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=a(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=a(n),u=r,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(y,p(p({ref:t},c),{},{components:n})):o.createElement(y,p({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,p[1]=l;for(var a=2;a<i;a++)p[a]=n[a];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var o=n(87462),r=(n(67294),n(3905));const i={},p="spo contenttype get",l={unversionedId:"cmd/spo/contenttype/contenttype-get",id:"cmd/spo/contenttype/contenttype-get",title:"spo contenttype get",description:"Retrieves information about the specified list or site content type",source:"@site/docs/cmd/spo/contenttype/contenttype-get.md",sourceDirName:"cmd/spo/contenttype",slug:"/cmd/spo/contenttype/contenttype-get",permalink:"/cmd/spo/contenttype/contenttype-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/contenttype/contenttype-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo contenttype field set",permalink:"/cmd/spo/contenttype/contenttype-field-set"},next:{title:"spo contenttype list",permalink:"/cmd/spo/contenttype/contenttype-list"}},s={},a=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:a};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-contenttype-get"},"spo contenttype get"),(0,r.kt)("p",null,"Retrieves information about the specified list or site content type"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttype get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: Absolute URL of the site where the content type is located"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-l, --listTitle [listTitle]"),"\n: Title of the list (if it is a list content type). Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--listId [listId]"),"\n: ID of the list (if it is a list content type). Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list (if it is a list content type). Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The ID of the content type to retrieve. Specify either id or name but not both"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The name of the content type to retrieve. Specify either id or name but not both"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"If no content type with the specified is found in the site or the list, you will get the ",(0,r.kt)("em",{parentName:"p"},"Content type with ID 0x010012 not found")," error."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Retrieve site content type by id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttype get --webUrl https://contoso.sharepoint.com/sites/contoso-sales --id 0x0100558D85B7216F6A489A499DB361E1AE2F\n")),(0,r.kt)("p",null,"Retrieve site content type by name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttype get --webUrl https://contoso.sharepoint.com/sites/contoso-sales --name 'Document'\n")),(0,r.kt)("p",null,"Retrieve list (retrieved by Title) content type "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttype get --webUrl https://contoso.sharepoint.com/sites/contoso-sales --listTitle Events --id 0x0100558D85B7216F6A489A499DB361E1AE2F\n")),(0,r.kt)("p",null,"Retrieve list (retrieved by ID) content type "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttype get --webUrl https://contoso.sharepoint.com/sites/contoso-sales --listId '8c7a0fcd-9d64-4634-85ea-ce2b37b2ec0c' --id 0x0100558D85B7216F6A489A499DB361E1AE2F\n")),(0,r.kt)("p",null,"Retrieve list (retrieved by URL) content type "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttype get --webUrl https://contoso.sharepoint.com/sites/contoso-sales --listUrl '/Shared Documents' --id 0x0100558D85B7216F6A489A499DB361E1AE2F\n")))}d.isMDXComponent=!0}}]);