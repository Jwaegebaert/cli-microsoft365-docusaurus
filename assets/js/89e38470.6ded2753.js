"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[692],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(a,".").concat(d)]||u[d]||m[d]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s={},i="spo user list",l={unversionedId:"cmd/spo/user/user-list",id:"cmd/spo/user/user-list",title:"spo user list",description:"Lists all the users within specific web",source:"@site/docs/cmd/spo/user/user-list.md",sourceDirName:"cmd/spo/user",slug:"/cmd/spo/user/user-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/user/user-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/user/user-list.md",tags:[],version:"current",lastUpdatedAt:1667774341,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo user get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/user/user-get"},next:{title:"spo user remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/user/user-remove"}},a={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-user-list"},"spo user list"),(0,o.kt)("p",null,"Lists all the users within specific web"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo user list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the web to list the users from"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get list of users in web ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo user list --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "Id": 10,\n    "IsHiddenInUI": false,\n    "LoginName": "i:0#.f|membership|johndoe@contoso.onmicrosoft.com",\n    "Title": "John DOe",\n    "PrincipalType": 1,\n    "Email": "johndoe@contoso.onmicrosoft.com",\n    "Expiration": "",\n    "IsEmailAuthenticationGuestUser": false,\n    "IsShareByEmailGuestUser": false,\n    "IsSiteAdmin": false,\n    "UserId": {\n      "NameId": "100320022ec308a7",\n      "NameIdIssuer": "urn:federation:microsoftonline"\n    },\n    "UserPrincipalName": "johndoe@contoso.onmicrosoft.com"\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\nId          Title                           LoginName\n----------  ------------------------------  --------------------------------------------------------------------------\n10          John Doe                        i:0#.f|membership|johndoe@contoso.onmicrosoft.com\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nId,Title,LoginName\n10,John Doe,i:0#.f|membership|johndoe@contoso.onmicrosoft.com\n```\n")))}m.isMDXComponent=!0}}]);