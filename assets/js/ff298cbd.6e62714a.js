"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40441],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>k});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return o?n.createElement(k,a(a({ref:t},c),{},{components:o})):n.createElement(k,a({ref:t},c))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<s;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},75718:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const s={},a="onenote notebook list",l={unversionedId:"cmd/onenote/notebook/notebook-list",id:"cmd/onenote/notebook/notebook-list",title:"onenote notebook list",description:"Retrieve a list of notebooks.",source:"@site/docs/cmd/onenote/notebook/notebook-list.md",sourceDirName:"cmd/onenote/notebook",slug:"/cmd/onenote/notebook/notebook-list",permalink:"/cli-microsoft365-docusaurus/cmd/onenote/notebook/notebook-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/onenote/notebook/notebook-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"OneNote (onenote)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/onenote"},next:{title:"Outlook (outlook)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/outlook"}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"onenote-notebook-list"},"onenote notebook list"),(0,r.kt)("p",null,"Retrieve a list of notebooks."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--userId [userId]"),"\n: Id of the user. Use either userId or userName, but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--userName [userName]"),"\n: Name of the user. Use either userId or userName, but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--groupId [groupId]"),"\n: Id of the SharePoint group. Use either groupName or groupId, but not both"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--groupName [groupName]"),"\n: Name of the SharePoint group. Use either groupName or groupId, but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-u, --webUrl [webUrl]"),"\n: URL of the SharePoint site."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List Microsoft OneNote notebooks for the currently logged in user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list\n")),(0,r.kt)("p",null,"List Microsoft OneNote notebooks in group 233e43d0-dc6a-482e-9b4e-0de7a7bce9b4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list --groupId 233e43d0-dc6a-482e-9b4e-0de7a7bce9b4\n")),(0,r.kt)("p",null,"List Microsoft OneNote notebooks in group My Group"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 onenote notebook list --groupName "MyGroup"\n')),(0,r.kt)("p",null,"List Microsoft OneNote notebooks for user ",(0,r.kt)("a",{parentName:"p",href:"mailto:user1@contoso.onmicrosoft.com"},"user1@contoso.onmicrosoft.com")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list --userName user1@contoso.onmicrosoft.com\n")),(0,r.kt)("p",null,"List Microsoft OneNote notebooks for user 2609af39-7775-4f94-a3dc-0dd67657e900"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list --userId 2609af39-7775-4f94-a3dc-0dd67657e900\n")),(0,r.kt)("p",null,"List Microsoft OneNote notebooks for site ",(0,r.kt)("a",{parentName:"p",href:"https://contoso.sharepoint.com/sites/testsite"},"https://contoso.sharepoint.com/sites/testsite")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote notebook list --webUrl https://contoso.sharepoint.com/sites/testsite\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"List notebooks (MS Graph docs): ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/onenote-list-notebooks?view=graph-rest-1.0&tabs=http"},"https://docs.microsoft.com/en-us/graph/api/onenote-list-notebooks?view=graph-rest-1.0&tabs=http"))))}u.isMDXComponent=!0}}]);