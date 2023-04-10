"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[44884],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(a),u=r,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return a?n.createElement(f,p(p({ref:t},m),{},{components:a})):n.createElement(f,p({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={},p="aad approleassignment remove",i={unversionedId:"cmd/aad/approleassignment/approleassignment-remove",id:"cmd/aad/approleassignment/approleassignment-remove",title:"aad approleassignment remove",description:"Deletes an app role assignment for the specified Azure AD Application Registration",source:"@site/docs/cmd/aad/approleassignment/approleassignment-remove.md",sourceDirName:"cmd/aad/approleassignment",slug:"/cmd/aad/approleassignment/approleassignment-remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/approleassignment/approleassignment-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/approleassignment/approleassignment-remove.md",tags:[],version:"current",lastUpdatedAt:1677877248,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad approleassignment list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/approleassignment/approleassignment-list"},next:{title:"aad group get",permalink:"/cli-microsoft365-docusaurus/cmd/aad/group/group-get"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],m={toc:l},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aad-approleassignment-remove"},"aad approleassignment remove"),(0,r.kt)("p",null,"Deletes an app role assignment for the specified Azure AD Application Registration"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad approleassignment remove [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--appId [appId]"),"\n: Application appId also known as clientId of the App Registration for which the configured scopes (app roles) should be deleted"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--appObjectId [appObjectId]"),"\n: Application objectId of the App Registration for which the configured scopes (app roles) should be deleted"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--appDisplayName [appDisplayName]"),"\n: Application name of the App Registration for which the configured scopes (app roles) should be deleted"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-r, --resource <resource>"),"\n: Service principal name, appId or objectId that has the scopes (roles) e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"SharePoint")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-s, --scope <scope>"),"\n: Permissions known also as scopes and roles to be deleted from the application. If multiple permissions have to be deleted, they have to be comma-separated e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Sites.Read.All"),",",(0,r.kt)("inlineCode",{parentName:"p"},"Sites.ReadWrite.All")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming removing the all role assignment"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"This command requires tenant administrator permissions."),(0,r.kt)("p",null,"Specify either the ",(0,r.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"appObjectId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"appDisplayName")," but not multiple. If you specify more than one option value, the command will fail with an error."),(0,r.kt)("p",null,"Autocomplete values for the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," option do not mean allowed values. The autocomplete will just suggest some known names, but that doesn't restrict you to use name of your own custom application or other application within your tenant."),(0,r.kt)("p",null,"This command can also be used to assign permissions to system- or user-assigned managed identity."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Deletes SharePoint ",(0,r.kt)("em",{parentName:"p"},"Sites.Read.All")," application permissions from Azure AD application with app id ",(0,r.kt)("em",{parentName:"p"},"57907bf8-73fa-43a6-89a5-1f603e29e451")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad approleassignment remove --appId "57907bf8-73fa-43a6-89a5-1f603e29e451" --resource "SharePoint" --scope "Sites.Read.All"\n')),(0,r.kt)("p",null,"Deletes multiple Microsoft Graph application permissions from an Azure AD application with name ",(0,r.kt)("em",{parentName:"p"},"MyAppName")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad approleassignment remove --appDisplayName "MyAppName" --resource "Microsoft Graph" --scope "Mail.Read,Mail.Send"\n')),(0,r.kt)("p",null,"Deletes Microsoft Graph ",(0,r.kt)("em",{parentName:"p"},"Mail.Read")," application permissions from a system-managed identity app with objectId ",(0,r.kt)("em",{parentName:"p"},"57907bf8-73fa-43a6-89a5-1f603e29e451")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad approleassignment remove --appObjectId "57907bf8-73fa-43a6-89a5-1f603e29e451" --resource "Microsoft Graph" --scope "Mail.Read"\n')),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Microsoft Graph permissions reference: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/permissions-reference"},"https://docs.microsoft.com/en-us/graph/permissions-reference"))))}d.isMDXComponent=!0}}]);