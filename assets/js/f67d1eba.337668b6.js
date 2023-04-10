"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[53727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>a,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},a=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(f,l(l({ref:t},a),{},{components:n})):o.createElement(f,l({ref:t},a))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={},l="spo list contenttype remove",s={unversionedId:"cmd/spo/list/list-contenttype-remove",id:"cmd/spo/list/list-contenttype-remove",title:"spo list contenttype remove",description:"Removes content type from list",source:"@site/docs/cmd/spo/list/list-contenttype-remove.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-contenttype-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-contenttype-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-contenttype-remove.md",tags:[],version:"current",lastUpdatedAt:1677283761,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list contenttype list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-contenttype-list"},next:{title:"spo list get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-get"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],a={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-list-contenttype-remove"},"spo list contenttype remove"),(0,r.kt)("p",null,"Removes content type from list"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype remove [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list is located."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-l, --listId [listId]"),"\n: ID of the list. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listId"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: Title of the list. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listId"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listId"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: ID of the content type to remove from the list."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Remove content type with a specific id from the list retrieved by id in a specific site."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype remove --webUrl https://contoso.sharepoint.com/sites/project-x --listId 0cd891ef-afce-4e55-b836-fce03286cccf --id 0x010109010053EE7AEB1FC54A41B4D9F66ADBDC312A\n")),(0,r.kt)("p",null,"Remove content type with a specific id from the list retrieved by title in a specific site."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype remove --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle Documents --id 0x010109010053EE7AEB1FC54A41B4D9F66ADBDC312A\n")),(0,r.kt)("p",null,"Remove content type with a specific id from the list retrieved by server relative URL in a specific site. This will not prompt for confirmation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype remove --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl 'sites/project-x/Documents' --contentTypeId 0x010109010053EE7AEB1FC54A41B4D9F66ADBDC312A --confirm\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);