"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=l.createContext({}),p=function(e){var t=l.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||r;return n?l.createElement(f,s(s({ref:t},c),{},{components:n})):l.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=n(87462),i=(n(67294),n(3905));const r={},s="spo list contenttype default set",o={unversionedId:"cmd/spo/list/list-contenttype-default-set",id:"cmd/spo/list/list-contenttype-default-set",title:"spo list contenttype default set",description:"Sets the default content type for a list",source:"@site/docs/cmd/spo/list/list-contenttype-default-set.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-contenttype-default-set",permalink:"/cmd/spo/list/list-contenttype-default-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-contenttype-default-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list contenttype add",permalink:"/cmd/spo/list/list-contenttype-add"},next:{title:"spo list contenttype list",permalink:"/cmd/spo/list/list-contenttype-list"}},a={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-list-contenttype-default-set"},"spo list contenttype default set"),(0,i.kt)("p",null,"Sets the default content type for a list"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype default set [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list is located."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --listId [listId]"),"\n: ID of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: Title of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-c, --contentTypeId <contentTypeId>"),"\n: ID of the content type"),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Set a content type with a specific id as default a list retrieved by id located in a specific site."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype default set --webUrl https://contoso.sharepoint.com/sites/project-x --listId 0cd891ef-afce-4e55-b836-fce03286cccf --contentTypeId 0x0120\n")),(0,i.kt)("p",null,"Set a content type with a specific id as default a list retrieved by title located in a specific site."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype default set --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle Documents --contentTypeId 0x0120\n")),(0,i.kt)("p",null,"Set a content type with a specific id as default a list retrieved by server relative URL located in a specific site."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype default set --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl 'sites/project-x/Documents' --contentTypeId 0x0120\n")),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);