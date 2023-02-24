"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[89063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(g,i(i({ref:t},l),{},{components:r})):a.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={},i="aad oauth2grant remove",s={unversionedId:"cmd/aad/oauth2grant/oauth2grant-remove",id:"cmd/aad/oauth2grant/oauth2grant-remove",title:"aad oauth2grant remove",description:"Remove specified service principal OAuth2 permissions",source:"@site/docs/cmd/aad/oauth2grant/oauth2grant-remove.md",sourceDirName:"cmd/aad/oauth2grant",slug:"/cmd/aad/oauth2grant/oauth2grant-remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/oauth2grant/oauth2grant-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/oauth2grant/oauth2grant-remove.md",tags:[],version:"current",lastUpdatedAt:1649592241,formattedLastUpdatedAt:"Apr 10, 2022",frontMatter:{},sidebar:"commands",previous:{title:"aad oauth2grant list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/oauth2grant/oauth2grant-list"},next:{title:"aad oauth2grant set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/oauth2grant/oauth2grant-set"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],l={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-oauth2grant-remove"},"aad oauth2grant remove"),(0,n.kt)("p",null,"Remove specified service principal OAuth2 permissions"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad oauth2grant remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-i, --grantId <grantId>"),"\n: ",(0,n.kt)("inlineCode",{parentName:"p"},"objectId")," of OAuth2 permission grant to remove"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Do not prompt for confirmation before removing OAuth2 permission grant"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Before you can remove service principal's OAuth2 permissions, you need to get the ",(0,n.kt)("inlineCode",{parentName:"p"},"objectId")," of the permissions grant to remove. You can retrieve it using the ",(0,n.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/aad/oauth2grant/oauth2grant-list"},"aad oauth2grant list")," command."),(0,n.kt)("p",null,"If the ",(0,n.kt)("inlineCode",{parentName:"p"},"objectId")," listed when using the ",(0,n.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/aad/oauth2grant/oauth2grant-list"},"aad oauth2grant list")," command has a minus sign ('-') prefix, you may receive an error indicating ",(0,n.kt)("inlineCode",{parentName:"p"},"--grantId")," is missing.  To resolve this issue simply escape the leading '-'.  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad oauth2grant remove --grantId \\\\-Zc1JRY8REeLxmXz5KtixAYU3Q6noCBPlhwGiX7pxmU\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Remove the OAuth2 permission grant with ID ",(0,n.kt)("em",{parentName:"p"},"YgA60KYa4UOPSdc-lpxYEnQkr8KVLDpCsOXkiV8i-ek")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad oauth2grant remove --grantId YgA60KYa4UOPSdc-lpxYEnQkr8KVLDpCsOXkiV8i-ek\n")),(0,n.kt)("p",null,"Remove the OAuth2 permission grant with ID ",(0,n.kt)("em",{parentName:"p"},"YgA60KYa4UOPSdc-lpxYEnQkr8KVLDpCsOXkiV8i-ek")," without being asked for confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad oauth2grant remove --grantId YgA60KYa4UOPSdc-lpxYEnQkr8KVLDpCsOXkiV8i-ek --confirm\n")),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Application and service principal objects in Azure Active Directory (Azure AD): ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-application-objects"},"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-application-objects")),(0,n.kt)("li",{parentName:"ul"},"Delete a delegated permission grant (oAuth2PermissionGrant): ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/oauth2permissiongrant-delete?view=graph-rest-1.0"},"https://docs.microsoft.com/en-us/graph/api/oauth2permissiongrant-delete?view=graph-rest-1.0"))))}u.isMDXComponent=!0}}]);