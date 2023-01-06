"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40441],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>k});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function s(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?s(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},c=function(e){var o=p(e.components);return n.createElement(l.Provider,{value:o},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return t?n.createElement(k,a(a({ref:o},c),{},{components:t})):n.createElement(k,a({ref:o},c))}));function k(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75718:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const s={},a="onenote notebook list",i={unversionedId:"cmd/onenote/notebook/notebook-list",id:"cmd/onenote/notebook/notebook-list",title:"onenote notebook list",description:"Retrieve a list of notebooks.",source:"@site/docs/cmd/onenote/notebook/notebook-list.md",sourceDirName:"cmd/onenote/notebook",slug:"/cmd/onenote/notebook/notebook-list",permalink:"/cli-microsoft365-docusaurus/cmd/onenote/notebook/notebook-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/onenote/notebook/notebook-list.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"OneNote (onenote)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/onenote"},next:{title:"Outlook (outlook)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/outlook"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],c={toc:p};function u(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"onenote-notebook-list"},"onenote notebook list"),(0,r.kt)("p",null,"Retrieve a list of notebooks."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--userId [userId]"),"\n: Id of the user. Use either userId or userName, but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--userName [userName]"),"\n: Name of the user. Use either userId or userName, but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--groupId [groupId]"),"\n: Id of the SharePoint group. Use either groupName or groupId, but not both"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--groupName [groupName]"),"\n: Name of the SharePoint group. Use either groupName or groupId, but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-u, --webUrl [webUrl]"),"\n: URL of the SharePoint site."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List Microsoft OneNote notebooks for the currently logged in user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list\n")),(0,r.kt)("p",null,"List Microsoft OneNote notebooks in group 233e43d0-dc6a-482e-9b4e-0de7a7bce9b4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list --groupId 233e43d0-dc6a-482e-9b4e-0de7a7bce9b4\n")),(0,r.kt)("p",null,"List Microsoft OneNote notebooks in group My Group"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 onenote notebook list --groupName "MyGroup"\n')),(0,r.kt)("p",null,"List Microsoft OneNote notebooks for user ",(0,r.kt)("a",{parentName:"p",href:"mailto:user1@contoso.onmicrosoft.com"},"user1@contoso.onmicrosoft.com")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list --userName user1@contoso.onmicrosoft.com\n")),(0,r.kt)("p",null,"List Microsoft OneNote notebooks for user 2609af39-7775-4f94-a3dc-0dd67657e900"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list --userId 2609af39-7775-4f94-a3dc-0dd67657e900\n")),(0,r.kt)("p",null,"List Microsoft OneNote notebooks for site ",(0,r.kt)("a",{parentName:"p",href:"https://contoso.sharepoint.com/sites/testsite"},"https://contoso.sharepoint.com/sites/testsite")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list --webUrl https://contoso.sharepoint.com/sites/testsite\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"List notebooks (MS Graph docs): ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/onenote-list-notebooks?view=graph-rest-1.0&tabs=http"},"https://docs.microsoft.com/en-us/graph/api/onenote-list-notebooks?view=graph-rest-1.0&tabs=http"))))}u.isMDXComponent=!0}}]);