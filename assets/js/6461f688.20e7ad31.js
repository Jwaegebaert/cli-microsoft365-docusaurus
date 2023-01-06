"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37658],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>u});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(i),f=o,u=c["".concat(a,".").concat(f)]||c[f]||m[f]||l;return i?n.createElement(u,r(r({ref:t},d),{},{components:i})):n.createElement(u,r({ref:t},d))}));function u(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=i.length,r=new Array(l);r[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<l;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},81369:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=i(87462),o=(i(67294),i(3905));const l={},r="spo list view field add",s={unversionedId:"cmd/spo/list/list-view-field-add",id:"cmd/spo/list/list-view-field-add",title:"spo list view field add",description:"Adds the specified field to list view",source:"@site/docs/cmd/spo/list/list-view-field-add.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-view-field-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-field-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-view-field-add.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list view add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-add"},next:{title:"spo list view field remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-field-remove"}},a={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-list-view-field-add"},"spo list view field add"),(0,o.kt)("p",null,"Adds the specified field to list view"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field add [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list is located"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--listId [listId]"),"\n: ID of the list where the view is located. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--listTitle [listTitle]"),"\n: Title of the list where the view is located. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"listId")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"listTitle")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--viewId [viewId]"),"\n: ID of the view to update. Specify ",(0,o.kt)("inlineCode",{parentName:"p"},"viewTitle")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"viewId")," but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--viewTitle [viewTitle]"),"\n: Title of the view to update. Specify ",(0,o.kt)("inlineCode",{parentName:"p"},"viewTitle")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"viewId")," but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--id [id]"),"\n: ID of the field to add. Specify ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--title [title]"),"\n: The ",(0,o.kt)("strong",{parentName:"p"},"case-sensitive")," internal name or display name of the field to add. Specify ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--position [position]"),"\n: The zero-based index of the position for the field"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Add field with ID ",(0,o.kt)("em",{parentName:"p"},"330f29c5-5c4c-465f-9f4b-7903020ae1ce")," to view with ID ",(0,o.kt)("em",{parentName:"p"},"3d760127-982c-405e-9c93-e1f76e1a1110")," of the list with ID ",(0,o.kt)("em",{parentName:"p"},"1f187321-f086-4d3d-8523-517e94cc9df9")," located in site ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field add --webUrl https://contoso.sharepoint.com/sites/project-x --listId 1f187321-f086-4d3d-8523-517e94cc9df9 --viewId 3d760127-982c-405e-9c93-e1f76e1a1110 --id 330f29c5-5c4c-465f-9f4b-7903020ae1ce\n")),(0,o.kt)("p",null,"Add field with title ",(0,o.kt)("em",{parentName:"p"},"Custom field")," to view with title ",(0,o.kt)("em",{parentName:"p"},"All Documents")," of the list with title ",(0,o.kt)("em",{parentName:"p"},"Documents")," located in site ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field add --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle Documents --viewTitle 'All Documents' --title 'Custom field'\n")),(0,o.kt)("p",null,"Add field with title ",(0,o.kt)("em",{parentName:"p"},"Custom field")," at the position ",(0,o.kt)("em",{parentName:"p"},"0")," to view with title ",(0,o.kt)("em",{parentName:"p"},"My Events")," of the list with url ",(0,o.kt)("em",{parentName:"p"},"/sites/project-x/lists/Events")," located in site ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field add --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl '/sites/project-x/lists/Events' --viewTitle 'My Events' --title 'Custom field' --fieldPosition 0\n")),(0,o.kt)("p",null,"Add field with title ",(0,o.kt)("em",{parentName:"p"},"Custom field")," to view with title ",(0,o.kt)("em",{parentName:"p"},"All Documents")," of the list with site-relative URL ",(0,o.kt)("em",{parentName:"p"},"/Shared Documents")," located in site ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field add --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl 'Shared Documents' --viewTitle 'All Documents' --fieldTitle 'Custom field'\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}c.isMDXComponent=!0}}]);