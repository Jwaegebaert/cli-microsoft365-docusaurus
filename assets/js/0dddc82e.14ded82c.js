"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,p=function(e,t){if(null==e)return{};var n,o,p={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=p,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(y,a(a({ref:t},c),{},{components:n})):o.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,a=new Array(r);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:p,a[1]=i;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(87462),p=(n(67294),n(3905));const r={},a="spo contenttype set",i={unversionedId:"cmd/spo/contenttype/contenttype-set",id:"cmd/spo/contenttype/contenttype-set",title:"spo contenttype set",description:"Update an existing content type",source:"@site/docs/cmd/spo/contenttype/contenttype-set.md",sourceDirName:"cmd/spo/contenttype",slug:"/cmd/spo/contenttype/contenttype-set",permalink:"/cmd/spo/contenttype/contenttype-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/contenttype/contenttype-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo contenttype remove",permalink:"/cmd/spo/contenttype/contenttype-remove"},next:{title:"spo contenttypehub get",permalink:"/cmd/spo/contenttypehub/contenttypehub-get"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"spo-contenttype-set"},"spo contenttype set"),(0,p.kt)("p",null,"Update an existing content type"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttype set [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the content type to update is defined."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: ID of the content type to update. Specify ",(0,p.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," but not both, one is required."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-n, name [name]"),"\n: Name of the content type to update. Specify the ",(0,p.kt)("inlineCode",{parentName:"p"},"id")," or the ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," but not both, one is required."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--listTitle [listTitle]"),"\n: Title of the list if you want to update a list content type. Specify either ",(0,p.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--listId [listId]"),"\n: ID of the list if you want to update a list content type. Specify either ",(0,p.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: URL of the list if you want to update a list content type. Specify either ",(0,p.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--updateChildren"),"\n: Specify if you want to push updates to child content types."),(0,p.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,'!!! important "Updating child content types"\nWhen specifying the ',(0,p.kt)("inlineCode",{parentName:"p"},"--updateChildren")," flag, SharePoint will only propagate the changes that are made in the current request. If you want to know more about updating a content type and propagating changes to child content types, be sure to ",(0,p.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/previous-versions/office/developer/sharepoint-2010/ms442695(v=office.14)#considerations-when-updating-child-content-types"},"read more here"),". "),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Move site content type to a different group"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo contenttype set --id 0x001001 --webUrl https://contoso.sharepoint.com --Group "My group"\n')),(0,p.kt)("p",null,"Rename list content type"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo contenttype set --name "My old item" --webUrl https://contoso.sharepoint.com --listTitle "My list" --Name "My item"\n')),(0,p.kt)("p",null,"Configure a form customizer with manifest ID ",(0,p.kt)("em",{parentName:"p"},"19890cce-15d8-4af9-bfcb-72da06d13ed8")," on a site content type and push changes to child content types."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo contenttype set --name "My content type" --webUrl https://contoso.sharepoint.com --DisplayFormClientSideComponentId "19890cce-15d8-4af9-bfcb-72da06d13ed8" --EditFormClientSideComponentId "19890cce-15d8-4af9-bfcb-72da06d13ed8" --NewFormClientSideComponentId "19890cce-15d8-4af9-bfcb-72da06d13ed8" --updateChildren\n')))}d.isMDXComponent=!0}}]);