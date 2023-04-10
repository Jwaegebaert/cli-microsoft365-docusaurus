"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[59369],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>d});var o=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=o.createContext({}),m=function(e){var n=o.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=m(e.components);return o.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(r),f=t,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return r?o.createElement(d,l(l({ref:n},s),{},{components:r})):o.createElement(d,l({ref:n},s))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:t,l[1]=i;for(var m=2;m<a;m++)l[m]=r[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1940:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var o=r(87462),t=(r(67294),r(3905));const a={},l="flow owner remove",i={unversionedId:"cmd/flow/owner/owner-remove",id:"cmd/flow/owner/owner-remove",title:"flow owner remove",description:"Removes owner permissions to a Power Automate flow",source:"@site/docs/cmd/flow/owner/owner-remove.md",sourceDirName:"cmd/flow/owner",slug:"/cmd/flow/owner/owner-remove",permalink:"/cli-microsoft365-docusaurus/cmd/flow/owner/owner-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/flow/owner/owner-remove.md",tags:[],version:"current",lastUpdatedAt:1678048937,formattedLastUpdatedAt:"Mar 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"flow owner list",permalink:"/cli-microsoft365-docusaurus/cmd/flow/owner/owner-list"},next:{title:"flow run cancel",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-cancel"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],s={toc:m},c="wrapper";function u(e){let{components:n,...r}=e;return(0,t.kt)(c,(0,o.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"flow-owner-remove"},"flow owner remove"),(0,t.kt)("p",null,"Removes owner permissions to a Power Automate flow"),(0,t.kt)("h2",{id:"usage"},"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow owner remove [options]\n")),(0,t.kt)("h2",{id:"options"},"Options"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"-e, --environmentName <environmentName>"),"\n: The name of the environment."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"-f, --flowName <flowName>"),"\n: The name of the Power Automate flow."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"--userId [userId]"),"\n: The ID of the user. Specify either ",(0,t.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"groupId")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"groupName"),"."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"--userName [userName]"),"\n: User principal name of the user. Specify either ",(0,t.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"groupId")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"groupName"),"."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"--groupId [groupId]"),"\n: The ID of the group. Specify either ",(0,t.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"groupId")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"groupName"),"."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"--groupName [groupName]"),"\n: The name of the group. Specify either ",(0,t.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"groupId")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"groupName"),"."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Run the command as admin."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation."),(0,t.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,t.kt)("h2",{id:"examples"},"Examples"),(0,t.kt)("p",null,"Remove owner permissions from a specific Power Automate flow for a user by ID without prompting for confirmation"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow owner remove --userId 5c241023-2ba5-4ea8-a516-a2481a3e6c51 --environmentName Default-c5a5d746-3520-453f-8a69-780f8e44917e --flowName 72f2be4a-78c1-4220-a048-dbf557296a72 --confirm\n")),(0,t.kt)("p",null,"Remove owner permissions from a specific Power Automate flow for a user by UPN as admin"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow owner remove --userName john.doe@contoso.com --environmentName Default-c5a5d746-3520-453f-8a69-780f8e44917e --flowName 72f2be4a-78c1-4220-a048-dbf557296a72 --asAdmin\n")),(0,t.kt)("p",null,"Remove owner permissions from a specific Power Automate flow for a group by ID"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow owner remove --groupId 5c241023-2ba5-4ea8-a516-a2481a3e6c51 --environmentName Default-c5a5d746-3520-453f-8a69-780f8e44917e --flowName 72f2be4a-78c1-4220-a048-dbf557296a72\n")),(0,t.kt)("p",null,"Remove owner permissions from a specific Power Automate flow for a group by name as admin"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sh"},'m365 flow owner remove --groupName "Test group" --environmentName Default-c5a5d746-3520-453f-8a69-780f8e44917e --flowName 72f2be4a-78c1-4220-a048-dbf557296a72 --asAdmin\n')),(0,t.kt)("h2",{id:"response"},"Response"),(0,t.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);