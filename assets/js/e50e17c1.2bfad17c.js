"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13186],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?i.createElement(h,a(a({ref:t},p),{},{components:r})):i.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const o={},a="spo listitem record declare",l={unversionedId:"cmd/spo/listitem/listitem-record-declare",id:"cmd/spo/listitem/listitem-record-declare",title:"spo listitem record declare",description:"Declares the specified list item as a record",source:"@site/docs/cmd/spo/listitem/listitem-record-declare.md",sourceDirName:"cmd/spo/listitem",slug:"/cmd/spo/listitem/listitem-record-declare",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-record-declare",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/listitem/listitem-record-declare.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo listitem list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-list"},next:{title:"spo listitem record lock",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-record-lock"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-listitem-record-declare"},"spo listitem record declare"),(0,n.kt)("p",null,"Declares the specified list item as a record"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem record declare [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list is located"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-l, --listId [listId]"),"\n: The ID of the list where the item is located. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: The title of the list where the item is located. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-i, --listItemId <listItemId>"),"\n: The ID of the list item to declare as record"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-d, --date [date]"),"\n: Record declaration date in ISO format. eg. 2019-12-31"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Declare a document with id ",(0,n.kt)("em",{parentName:"p"},"1")," as a record in list with title ",(0,n.kt)("em",{parentName:"p"},"Demo List")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem record declare --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle "Demo List" --listItemId 1\n')),(0,n.kt)("p",null,"Declare a document with id ",(0,n.kt)("em",{parentName:"p"},"1")," as a record in list with id ",(0,n.kt)("em",{parentName:"p"},"ea8e1109-2013-1a69-bc05-1403201257fc")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem record declare --webUrl https://contoso.sharepoint.com/sites/project-x --listId ea8e1109-2013-1a69-bc05-1403201257fc --listItemId 1\n")),(0,n.kt)("p",null,"Declare a document with id ",(0,n.kt)("em",{parentName:"p"},"1")," as a record with record declaration date ",(0,n.kt)("em",{parentName:"p"},"March 14, 2012")," in list with title ",(0,n.kt)("em",{parentName:"p"},"Demo List")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem record declare --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle "Demo List" --listItemId 1 --date 2012-03-14\n')),(0,n.kt)("p",null,"Declare a document with a specific id as a record with a record declaration date a list retrieved by server-relative URL located in a specific site"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem record declare --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl '/sites/project-x/Lists/Demo List' --listItemId 1 --date 2013-09-03\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,'=== "JSON"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```json\n{\n  "SchemaVersion": "15.0.0.0",\n  "LibraryVersion": "16.0.23102.12004",\n  "ErrorInfo": null,\n  "TraceCorrelationId": "064779a0-d05b-5000-843d-c36803e58f12"\n}\n```\n')),(0,n.kt)("p",null,'=== "Text"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```text\nErrorInfo         : null\nLibraryVersion    : 16.0.23102.12004\nSchemaVersion     : 15.0.0.0\nTraceCorrelationId: 0a4779a0-c0ca-5000-d29d-4321a1739425\n```\n")),(0,n.kt)("p",null,'=== "CSV"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```csv\nSchemaVersion,LibraryVersion,ErrorInfo,TraceCorrelationId\n15.0.0.0,16.0.23102.12004,,0d4779a0-609c-5000-843d-c98e4764c937\n```\n")))}d.isMDXComponent=!0}}]);