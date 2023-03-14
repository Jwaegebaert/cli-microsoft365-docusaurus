"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[80460],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>k});var i=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function d(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)l=o[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)l=o[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var r=i.createContext({}),p=function(e){var t=i.useContext(r),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},s=function(e){var t=p(e.components);return i.createElement(r.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var l=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(l),u=n,k=c["".concat(r,".").concat(u)]||c[u]||m[u]||o;return l?i.createElement(k,a(a({ref:t},s),{},{components:l})):i.createElement(k,a({ref:t},s))}));function k(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=l.length,a=new Array(o);a[0]=u;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d[c]="string"==typeof e?e:n,a[1]=d;for(var p=2;p<o;p++)a[p]=l[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,l)}u.displayName="MDXCreateElement"},37884:(e,t,l)=>{l.d(t,{ZP:()=>d});var i=l(87462),n=(l(67294),l(3905));const o={toc:[]},a="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(a,(0,i.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-h, --help [help]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",null,"options"),", ",(0,n.kt)("code",null,"examples"),", ",(0,n.kt)("code",null,"remarks"),", ",(0,n.kt)("code",null,"response"),", ",(0,n.kt)("code",null,"full"),". Default is ",(0,n.kt)("code",null,"full"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--query [query]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"JMESPath query string. See ",(0,n.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-o, --output [output]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output type. ",(0,n.kt)("code",null,"json"),", ",(0,n.kt)("code",null,"text"),", ",(0,n.kt)("code",null,"csv"),", ",(0,n.kt)("code",null,"md"),". Default is ",(0,n.kt)("code",null,"json"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--verbose"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with verbose logging.")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--debug"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with debug logging."))))}d.isMDXComponent=!0},42752:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var i=l(87462),n=(l(67294),l(3905)),o=l(37884);const a={},d="spo list view field add",r={unversionedId:"cmd/spo/list/list-view-field-add",id:"cmd/spo/list/list-view-field-add",title:"spo list view field add",description:"Adds the specified field to list view",source:"@site/docs/cmd/spo/list/list-view-field-add.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-view-field-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-field-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-view-field-add.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo list view add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-add"},next:{title:"spo list view field remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-field-remove"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...l}=e;return(0,n.kt)(m,(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-list-view-field-add"},"spo list view field add"),(0,n.kt)("p",null,"Adds the specified field to list view"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field add [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"URL of the site where the list is located.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--listId [listId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"ID of the list where the view is located. Specify either ",(0,n.kt)("code",{parentName:"p"},"listId"),", ",(0,n.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,n.kt)("code",{parentName:"p"},"listUrl"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--listTitle [listTitle]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Title of the list where the view is located. Specify either ",(0,n.kt)("code",{parentName:"p"},"listId"),", ",(0,n.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,n.kt)("code",{parentName:"p"},"listUrl"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Server- or site-relative URL of the list. Specify either ",(0,n.kt)("code",{parentName:"p"},"listId")," , ",(0,n.kt)("code",{parentName:"p"},"listTitle")," or ",(0,n.kt)("code",{parentName:"p"},"listUrl"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--viewId [viewId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"ID of the view to update. Specify ",(0,n.kt)("code",{parentName:"p"},"viewTitle")," or ",(0,n.kt)("code",{parentName:"p"},"viewId")," but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--viewTitle [viewTitle]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Title of the view to update. Specify ",(0,n.kt)("code",{parentName:"p"},"viewTitle")," or ",(0,n.kt)("code",{parentName:"p"},"viewId")," but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--id [id]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"ID of the field to add. Specify ",(0,n.kt)("code",{parentName:"p"},"id")," or ",(0,n.kt)("code",{parentName:"p"},"title")," but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--title [title]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The ",(0,n.kt)("strong",{parentName:"p"},"case-sensitive")," internal name or display name of the field to add. Specify ",(0,n.kt)("code",{parentName:"p"},"id")," or ",(0,n.kt)("code",{parentName:"p"},"title")," but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--position [position]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The zero-based index of the position for the field."))),(0,n.kt)(o.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Add field with ID to view with ID of the list with ID located in a specific site."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field add --webUrl https://contoso.sharepoint.com/sites/project-x --listId 1f187321-f086-4d3d-8523-517e94cc9df9 --viewId 3d760127-982c-405e-9c93-e1f76e1a1110 --id 330f29c5-5c4c-465f-9f4b-7903020ae1ce\n")),(0,n.kt)("p",null,"Add field with title to view with title of the list with title ",(0,n.kt)("em",{parentName:"p"},"Documents")," located in a specific site."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field add --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle Documents --viewTitle 'All Documents' --title 'Custom field'\n")),(0,n.kt)("p",null,"Add field with title at the position to view with title of the list with url located in a specific site."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field add --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl '/sites/project-x/lists/Events' --viewTitle 'My Events' --title 'Custom field' --fieldPosition 0\n")),(0,n.kt)("p",null,"Add field with title to view with title of the list with site-relative URL located in a specific site."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view field add --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl 'Shared Documents' --viewTitle 'All Documents' --fieldTitle 'Custom field'\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);