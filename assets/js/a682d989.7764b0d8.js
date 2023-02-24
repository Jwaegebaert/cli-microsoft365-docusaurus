"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[47568],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(g,i(i({ref:t},l),{},{components:a})):r.createElement(g,i({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i="aad oauth2grant set",s={unversionedId:"cmd/aad/oauth2grant/oauth2grant-set",id:"cmd/aad/oauth2grant/oauth2grant-set",title:"aad oauth2grant set",description:"Update OAuth2 permissions for the service principal",source:"@site/docs/cmd/aad/oauth2grant/oauth2grant-set.md",sourceDirName:"cmd/aad/oauth2grant",slug:"/cmd/aad/oauth2grant/oauth2grant-set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/oauth2grant/oauth2grant-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/oauth2grant/oauth2grant-set.md",tags:[],version:"current",lastUpdatedAt:1649592241,formattedLastUpdatedAt:"Apr 10, 2022",frontMatter:{},sidebar:"commands",previous:{title:"aad oauth2grant remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/oauth2grant/oauth2grant-remove"},next:{title:"aad policy list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/policy/policy-list"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-oauth2grant-set"},"aad oauth2grant set"),(0,n.kt)("p",null,"Update OAuth2 permissions for the service principal"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad oauth2grant set [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-i, --grantId <grantId>"),"\n: ",(0,n.kt)("inlineCode",{parentName:"p"},"objectId")," of OAuth2 permission grant to update"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-s, --scope <scope>"),"\n: Permissions to grant"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Before you can update service principal's OAuth2 permissions, you need to get the ",(0,n.kt)("inlineCode",{parentName:"p"},"objectId")," of the permissions grant to update. You can retrieve it using the ",(0,n.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/aad/oauth2grant/oauth2grant-list"},"aad oauth2grant list")," command."),(0,n.kt)("p",null,"If the ",(0,n.kt)("inlineCode",{parentName:"p"},"objectId")," listed when using the ",(0,n.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/aad/oauth2grant/oauth2grant-list"},"aad oauth2grant list")," command has a minus sign ('-') prefix, you may receive an error indicating ",(0,n.kt)("inlineCode",{parentName:"p"},"--grantId")," is missing. To resolve this issue simply escape the leading '-'.  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad oauth2grant set --grantId \\\\-Zc1JRY8REeLxmXz5KtixAYU3Q6noCBPlhwGiX7pxmU\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Update the existing OAuth2 permission grant with ID ",(0,n.kt)("em",{parentName:"p"},"YgA60KYa4UOPSdc-lpxYEnQkr8KVLDpCsOXkiV8i-ek")," to the ",(0,n.kt)("em",{parentName:"p"},"Calendars.Read Mail.Read")," permissions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad oauth2grant set --grantId YgA60KYa4UOPSdc-lpxYEnQkr8KVLDpCsOXkiV8i-ek --scope "Calendars.Read Mail.Read"\n')),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Application and service principal objects in Azure Active Directory (Azure AD): ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-application-objects"},"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-application-objects")),(0,n.kt)("li",{parentName:"ul"},"Update a delegated permission grant (oAuth2PermissionGrant): ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/oauth2permissiongrant-update?view=graph-rest-1.0"},"https://docs.microsoft.com/en-us/graph/api/oauth2permissiongrant-update?view=graph-rest-1.0"))))}d.isMDXComponent=!0}}]);