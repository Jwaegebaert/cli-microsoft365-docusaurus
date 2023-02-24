"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[83981],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=l(a),u=n,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||r;return a?i.createElement(f,p(p({ref:t},d),{},{components:a})):i.createElement(f,p({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:n,p[1]=o;for(var l=2;l<r;l++)p[l]=a[l];return i.createElement.apply(null,p)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19643:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=a(87462),n=(a(67294),a(3905));const r={},p="aad app set",o={unversionedId:"cmd/aad/app/app-set",id:"cmd/aad/app/app-set",title:"aad app set",description:"Updates Azure AD app registration",source:"@site/docs/cmd/aad/app/app-set.md",sourceDirName:"cmd/aad/app",slug:"/cmd/aad/app/app-set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/app/app-set.md",tags:[],version:"current",lastUpdatedAt:1660970686,formattedLastUpdatedAt:"Aug 20, 2022",frontMatter:{},sidebar:"commands",previous:{title:"aad app role remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-role-remove"},next:{title:"aad approleassignment add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/approleassignment/approleassignment-add"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],d={toc:l},s="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-app-set"},"aad app set"),(0,n.kt)("p",null,"Updates Azure AD app registration"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app set [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--appId [appId]"),"\n: Application (client) ID of the Azure AD application registration to update. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"objectId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"name")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--objectId [objectId]"),"\n: Object ID of the Azure AD application registration to update. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"objectId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"name")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--name [name]"),"\n: Name of the Azure AD application registration to update. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"objectId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"name")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --uri [uri]"),"\n: Comma-separated list of Application ID URIs to update"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-r, --redirectUris [redirectUris]"),"\n: Comma-separated list of redirect URIs to add to the app registration. Requires ",(0,n.kt)("inlineCode",{parentName:"p"},"platform")," to be specified"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-p, --platform [platform]"),"\n: Platform for which the ",(0,n.kt)("inlineCode",{parentName:"p"},"redirectUri")," should be configured. Allowed values ",(0,n.kt)("inlineCode",{parentName:"p"},"spa,web,publicClient")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--redirectUrisToRemove [redirectUrisToRemove]"),"\n: Comma-separated list of existing redirect URIs to remove. Specify, when you want to replace existing redirect URIs with another"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--certificateFile [certificateFile]"),"\n: Path to the file with certificate public key. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"certificateFile")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"certificateBase64Encoded")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--certificateBase64Encoded [certificateBase64Encoded]"),"\n: Base64-encoded string with certificate public key. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"certificateFile")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"certificateBase64Encoded")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--certificateDisplayName [certificateDisplayName]"),"\n: Display name for the certificate. If not given, the displayName will be set to the certificate subject. When specified, also specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"certificateFile")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"certificateBase64Encoded")),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"For best performance use the ",(0,n.kt)("inlineCode",{parentName:"p"},"objectId")," option to reference the Azure AD application registration to update. If you use ",(0,n.kt)("inlineCode",{parentName:"p"},"appId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),", this command will first need to find the corresponding object ID for that application."),(0,n.kt)("p",null,"If the command finds multiple Azure AD application registrations with the specified app name, it will prompt you to disambiguate which app it should use, listing the discovered object IDs."),(0,n.kt)("p",null,"When a certificate is specified it will be added to the list of certificates of the app without changing existing certificates."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Update the app URI of the Azure AD application registration specified by its object ID"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app set --objectId d75be2e1-0204-4f95-857d-51a37cf40be8 --uri https://contoso.com/e75be2e1-0204-4f95-857d-51a37cf40be8\n")),(0,n.kt)("p",null,"Update the app URI of the Azure AD application registration specified by its app (client) ID"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app set --appId e75be2e1-0204-4f95-857d-51a37cf40be8 --uri https://contoso.com/e75be2e1-0204-4f95-857d-51a37cf40be8\n")),(0,n.kt)("p",null,"Update the app URI of the Azure AD application registration specified by its name"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad app set --name "My app" --uri https://contoso.com/e75be2e1-0204-4f95-857d-51a37cf40be8\n')),(0,n.kt)("p",null,"Add a new redirect URI for SPA authentication"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app set --objectId 95cfe30d-ed44-4f9d-b73d-c66560f72e83 --redirectUris https://contoso.com/auth --platform spa\n")),(0,n.kt)("p",null,"Replace one redirect URI with another for SPA authentication"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app set --objectId 95cfe30d-ed44-4f9d-b73d-c66560f72e83 --redirectUris https://contoso.com/auth --platform spa --redirectUrisToRemove https://contoso.com/old-auth\n")),(0,n.kt)("p",null,"Add a certificate to the app"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad app set --appId e75be2e1-0204-4f95-857d-51a37cf40be8 --certificateDisplayName "Some certificate name" --certificateFile "c:\\temp\\some-certificate.cer"\n')))}m.isMDXComponent=!0}}]);