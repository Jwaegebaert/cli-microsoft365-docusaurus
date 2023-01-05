"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80299],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>k});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=p(i),h=r,k=c["".concat(l,".").concat(h)]||c[h]||d[h]||s;return i?n.createElement(k,o(o({ref:t},m),{},{components:i})):n.createElement(k,o({ref:t},m))}));function k(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,o=new Array(s);o[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:r,o[1]=a;for(var p=2;p<s;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},3354:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=i(87462),r=(i(67294),i(3905));const s={},o="spo listitem roleinheritance break",a={unversionedId:"cmd/spo/listitem/listitem-roleinheritance-break",id:"cmd/spo/listitem/listitem-roleinheritance-break",title:"spo listitem roleinheritance break",description:"Break inheritance of list item.",source:"@site/docs/cmd/spo/listitem/listitem-roleinheritance-break.md",sourceDirName:"cmd/spo/listitem",slug:"/cmd/spo/listitem/listitem-roleinheritance-break",permalink:"/cmd/spo/listitem/listitem-roleinheritance-break",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/listitem/listitem-roleinheritance-break.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo listitem roleassignment remove",permalink:"/cmd/spo/listitem/listitem-roleassignment-remove"},next:{title:"spo listitem roleinheritance reset",permalink:"/cmd/spo/listitem/listitem-roleinheritance-reset"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-listitem-roleinheritance-break"},"spo listitem roleinheritance break"),(0,r.kt)("p",null,"Break inheritance of list item."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem roleinheritance break [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the item for which to break role inheritance is located"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--listItemId <listItemId>"),"\n: ID of the item for which to break role inheritance"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-l, --listId [listId]"),"\n: ID of the list. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: Title of the list.  Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-c, --clearExistingPermissions"),"\n: Set to clear existing roles from the list item"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Do not prompt for confirmation before breaking role inheritance."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"By default, when breaking permissions inheritance, the list item will retain existing permissions. To remove existing permissions, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--clearExistingPermissions")," option."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Break inheritance of list item ",(0,r.kt)("em",{parentName:"p"},"1")," in list ",(0,r.kt)("em",{parentName:"p"},"someList")," located in site ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem roleinheritance break --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "_someList_" --listItemId 1\n')),(0,r.kt)("p",null,"Break inheritance of list item ",(0,r.kt)("em",{parentName:"p"},"1")," in list with ID ",(0,r.kt)("em",{parentName:"p"},"202b8199-b9de-43fd-9737-7f213f51c991")," located in site ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem roleinheritance break --webUrl https://contoso.sharepoint.com/sites/project-x --listId 202b8199-b9de-43fd-9737-7f213f51c991 --listItemId 1\n")),(0,r.kt)("p",null,"Break inheritance of list item ",(0,r.kt)("em",{parentName:"p"},"1")," in list ",(0,r.kt)("em",{parentName:"p"},"someList")," located in site ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," with clearing permissions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem roleinheritance break --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "_someList_" --listItemId 1 --clearExistingPermissions\n')),(0,r.kt)("p",null,"Break inheritance of a specific list item in a list retrieved by server-relative URL in a specific site and clear the existing permissions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem roleinheritance break --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl /sites/project-x/Documents --listItemId 1 --clearExistingPermissions\n")),(0,r.kt)("p",null,"Break inheritance of list item ",(0,r.kt)("em",{parentName:"p"},"1")," in list with ID ",(0,r.kt)("em",{parentName:"p"},"202b8199-b9de-43fd-9737-7f213f51c991")," located in site ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," with clearing permissions without prompting for confirmation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem roleinheritance break --webUrl https://contoso.sharepoint.com/sites/project-x --listId 202b8199-b9de-43fd-9737-7f213f51c991 --listItemId 1 --clearExistingPermissions --confirm\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}c.isMDXComponent=!0}}]);