"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[13654],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>u});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=o.createContext({}),a=function(e){var t=o.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=a(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=a(i),f=n,u=c["".concat(p,".").concat(f)]||c[f]||d[f]||r;return i?o.createElement(u,l(l({ref:t},m),{},{components:i})):o.createElement(u,l({ref:t},m))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var a=2;a<r;a++)l[a]=i[a];return o.createElement.apply(null,l)}return o.createElement.apply(null,i)}f.displayName="MDXCreateElement"},24917:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var o=i(87462),n=(i(67294),i(3905));const r={},l="spo list view field remove",s={unversionedId:"cmd/spo/list/list-view-field-remove",id:"cmd/spo/list/list-view-field-remove",title:"spo list view field remove",description:"Removes the specified field from list view",source:"@site/docs/cmd/spo/list/list-view-field-remove.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-view-field-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-field-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-view-field-remove.md",tags:[],version:"current",lastUpdatedAt:1668983469,formattedLastUpdatedAt:"Nov 20, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo list view field add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-field-add"},next:{title:"spo list view field set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-field-set"}},p={},a=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:a},c="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-list-view-field-remove"},"spo list view field remove"),(0,n.kt)("p",null,"Removes the specified field from list view"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list is located"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--listId [listId]"),"\n: ID of the list where the view is located. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--listTitle [listTitle]"),"\n: Title of the list where the view is located. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listId")," , ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--viewId [viewId]"),"\n: ID of the view to update. Specify ",(0,n.kt)("inlineCode",{parentName:"p"},"viewTitle")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"viewId")," but not both"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--viewTitle [viewTitle]"),"\n: Title of the view to update. Specify ",(0,n.kt)("inlineCode",{parentName:"p"},"viewTitle")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"viewId")," but not both"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--id [id]"),"\n: ID of the field to remove. Specify id or title but not both"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--title [title]"),"\n: The ",(0,n.kt)("strong",{parentName:"p"},"case-sensitive")," internal name or display name of the field to remove. Specify ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"title")," but not both"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Remove field with ID ",(0,n.kt)("em",{parentName:"p"},"330f29c5-5c4c-465f-9f4b-7903020ae1ce")," from view with ID ",(0,n.kt)("em",{parentName:"p"},"3d760127-982c-405e-9c93-e1f76e1a1110")," from the list with ID ",(0,n.kt)("em",{parentName:"p"},"1f187321-f086-4d3d-8523-517e94cc9df9")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field remove --webUrl https://contoso.sharepoint.com/sites/project-x --listId 1f187321-f086-4d3d-8523-517e94cc9df9 --viewId 3d760127-982c-405e-9c93-e1f76e1a1110 --id 330f29c5-5c4c-465f-9f4b-7903020ae1ce\n")),(0,n.kt)("p",null,"Remove field with title ",(0,n.kt)("em",{parentName:"p"},"Custom field")," from view with title ",(0,n.kt)("em",{parentName:"p"},"Custom view")," from the list with title ",(0,n.kt)("em",{parentName:"p"},"Documents")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field remove --webUrl https://contoso.sharepoint.com/sites/project-x --title 'Custom field' --listTitle Documents --viewTitle 'Custom view'\n")),(0,n.kt)("p",null,"Remove field with title ",(0,n.kt)("em",{parentName:"p"},"Custom field")," from view with title ",(0,n.kt)("em",{parentName:"p"},"Custom view")," from the list with url ",(0,n.kt)("em",{parentName:"p"},"/sites/project-x/lists/Events")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field remove --webUrl https://contoso.sharepoint.com/sites/project-x --fieldTitle 'Custom field' --listUrl '/sites/project-x/lists/Events' --viewTitle 'Custom view'\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);