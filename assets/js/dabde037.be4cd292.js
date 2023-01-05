"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,k=m["".concat(a,".").concat(u)]||m[u]||d[u]||s;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const s={},l="spo list roleinheritance break",o={unversionedId:"cmd/spo/list/list-roleinheritance-break",id:"cmd/spo/list/list-roleinheritance-break",title:"spo list roleinheritance break",description:"Breaks role inheritance on list or library",source:"@site/docs/cmd/spo/list/list-roleinheritance-break.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-roleinheritance-break",permalink:"/cmd/spo/list/list-roleinheritance-break",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-roleinheritance-break.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list roleassignment remove",permalink:"/cmd/spo/list/list-roleassignment-remove"},next:{title:"spo list roleinheritance reset",permalink:"/cmd/spo/list/list-roleinheritance-reset"}},a={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-list-roleinheritance-break"},"spo list roleinheritance break"),(0,i.kt)("p",null,"Breaks role inheritance on list or library"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list roleinheritance break [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list is located."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --listId [listId]"),"\n: ID of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: Title of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-c, --clearExistingPermissions"),"\n: Flag if used clears all roles from the list"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Do not prompt for confirmation before breaking role inheritance."),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"By default, when breaking permissions inheritance, the list will retain existing permissions. To remove existing permissions, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--clearExistingPermissions")," option."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Break inheritance of list by title in a specific site"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleinheritance break --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "someList"\n')),(0,i.kt)("p",null,"Break inheritance of list by id in a specific site"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleinheritance break --webUrl "https://contoso.sharepoint.com/sites/project-x" --listId "202b8199-b9de-43fd-9737-7f213f51c991"\n')),(0,i.kt)("p",null,"Break inheritance of list by title located in a specific site and clearing the existing permissions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleinheritance break --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "someList" --clearExistingPermissions\n')),(0,i.kt)("p",null,"Break inheritance of list by url in a specific site and clearing the existing permissions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list roleinheritance break --webUrl \"https://contoso.sharepoint.com/sites/project-x\" --listUrl '/sites/project-x/lists/events' --clearExistingPermissions\n")),(0,i.kt)("p",null,"Break inheritance of list with ID ",(0,i.kt)("em",{parentName:"p"},"202b8199-b9de-43fd-9737-7f213f51c991")," located in site ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," with clearing permissions without prompting for confirmation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleinheritance break --webUrl "https://contoso.sharepoint.com/sites/project-x" --listId "202b8199-b9de-43fd-9737-7f213f51c991" --clearExistingPermissions --confirm\n')),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,"The command won't return a response on success."))}m.isMDXComponent=!0}}]);