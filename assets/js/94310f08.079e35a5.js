"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18345],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var i=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=i.createContext({}),p=function(e){var t=i.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return i.createElement(a.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(o),u=n,h=m["".concat(a,".").concat(u)]||m[u]||d[u]||r;return o?i.createElement(h,s(s({ref:t},c),{},{components:o})):i.createElement(h,s({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=u;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<r;p++)s[p]=o[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,o)}u.displayName="MDXCreateElement"},93999:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=o(87462),n=(o(67294),o(3905));const r={},s="spo list view remove",l={unversionedId:"cmd/spo/list/list-view-remove",id:"cmd/spo/list/list-view-remove",title:"spo list view remove",description:"Deletes the specified view from the list",source:"@site/docs/cmd/spo/list/list-view-remove.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-view-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-view-remove.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list view list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-list"},next:{title:"spo list view set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-set"}},a={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-list-view-remove"},"spo list view remove"),(0,n.kt)("p",null,"Deletes the specified view from the list"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list to remove the view from is located"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--listId [listId]"),"\n: ID of the list from which the view should be removed. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--listTitle [listTitle]"),"\n: Title of the list from which the view should be removed. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listId")," , ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--id [id]"),"\n: ID of the view to remove. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"title")," but not both"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--title [title]"),"\n: Title of the view to remove. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"title")," but not both"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming removing the view"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Remove view from the list by ID ",(0,n.kt)("em",{parentName:"p"},"0cd891ef-afce-4e55-b836-fce03286cccf")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view remove --webUrl https://contoso.sharepoint.com/sites/project-x --listId 0cd891ef-afce-4e55-b836-fce03286cccf --id cc27a922-8224-4296-90a5-ebbc54da2e81\n")),(0,n.kt)("p",null,"Remove view with ID ",(0,n.kt)("em",{parentName:"p"},"cc27a922-8224-4296-90a5-ebbc54da2e81")," from the list with title ",(0,n.kt)("em",{parentName:"p"},"Documents")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view remove --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle Documents --id cc27a922-8224-4296-90a5-ebbc54da2e81\n")),(0,n.kt)("p",null,"Remove view with title ",(0,n.kt)("em",{parentName:"p"},"MyView")," from a list with title ",(0,n.kt)("em",{parentName:"p"},"Documents")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view remove --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle Documents --title MyView\n")),(0,n.kt)("p",null,"Remove view with title ",(0,n.kt)("em",{parentName:"p"},"MyView")," from a list with url ",(0,n.kt)("em",{parentName:"p"},"/sites/project-x/lists/Events")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view remove --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl '/sites/project-x/lists/Events' --viewTitle MyView\n")),(0,n.kt)("p",null,"Remove view with ID ",(0,n.kt)("em",{parentName:"p"},"cc27a922-8224-4296-90a5-ebbc54da2e81")," from a list with title ",(0,n.kt)("em",{parentName:"p"},"Documents")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," without being asked for confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view remove --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle Documents --id cc27a922-8224-4296-90a5-ebbc54da2e81 --confirm\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}m.isMDXComponent=!0}}]);