"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80299],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>k});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=p(i),h=n,k=c["".concat(l,".").concat(h)]||c[h]||d[h]||s;return i?r.createElement(k,o(o({ref:t},m),{},{components:i})):r.createElement(k,o({ref:t},m))}));function k(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:n,o[1]=a;for(var p=2;p<s;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},3354:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=i(87462),n=(i(67294),i(3905));const s={},o="spo listitem roleinheritance break",a={unversionedId:"cmd/spo/listitem/listitem-roleinheritance-break",id:"cmd/spo/listitem/listitem-roleinheritance-break",title:"spo listitem roleinheritance break",description:"Break inheritance of list item.",source:"@site/docs/cmd/spo/listitem/listitem-roleinheritance-break.md",sourceDirName:"cmd/spo/listitem",slug:"/cmd/spo/listitem/listitem-roleinheritance-break",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-roleinheritance-break",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/listitem/listitem-roleinheritance-break.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo listitem roleassignment remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-roleassignment-remove"},next:{title:"spo listitem roleinheritance reset",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-roleinheritance-reset"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-listitem-roleinheritance-break"},"spo listitem roleinheritance break"),(0,n.kt)("p",null,"Break inheritance of list item."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem roleinheritance break [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the item for which to break role inheritance is located"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--listItemId <listItemId>"),"\n: ID of the item for which to break role inheritance"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-l, --listId [listId]"),"\n: ID of the list. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: Title of the list.  Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-c, --clearExistingPermissions"),"\n: Set to clear existing roles from the list item"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Do not prompt for confirmation before breaking role inheritance."),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"By default, when breaking permissions inheritance, the list item will retain existing permissions. To remove existing permissions, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--clearExistingPermissions")," option."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Break inheritance of list item ",(0,n.kt)("em",{parentName:"p"},"1")," in list ",(0,n.kt)("em",{parentName:"p"},"someList")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem roleinheritance break --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "_someList_" --listItemId 1\n')),(0,n.kt)("p",null,"Break inheritance of list item ",(0,n.kt)("em",{parentName:"p"},"1")," in list with ID ",(0,n.kt)("em",{parentName:"p"},"202b8199-b9de-43fd-9737-7f213f51c991")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem roleinheritance break --webUrl https://contoso.sharepoint.com/sites/project-x --listId 202b8199-b9de-43fd-9737-7f213f51c991 --listItemId 1\n")),(0,n.kt)("p",null,"Break inheritance of list item ",(0,n.kt)("em",{parentName:"p"},"1")," in list ",(0,n.kt)("em",{parentName:"p"},"someList")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," with clearing permissions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem roleinheritance break --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "_someList_" --listItemId 1 --clearExistingPermissions\n')),(0,n.kt)("p",null,"Break inheritance of a specific list item in a list retrieved by server-relative URL in a specific site and clear the existing permissions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem roleinheritance break --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl /sites/project-x/Documents --listItemId 1 --clearExistingPermissions\n")),(0,n.kt)("p",null,"Break inheritance of list item ",(0,n.kt)("em",{parentName:"p"},"1")," in list with ID ",(0,n.kt)("em",{parentName:"p"},"202b8199-b9de-43fd-9737-7f213f51c991")," located in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," with clearing permissions without prompting for confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem roleinheritance break --webUrl https://contoso.sharepoint.com/sites/project-x --listId 202b8199-b9de-43fd-9737-7f213f51c991 --listItemId 1 --clearExistingPermissions --confirm\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}c.isMDXComponent=!0}}]);