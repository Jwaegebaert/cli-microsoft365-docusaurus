"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8098],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>f});var n=t(67294);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,p=function(e,a){if(null==e)return{};var t,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,p=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=p,f=m["".concat(i,".").concat(u)]||m[u]||c[u]||r;return t?n.createElement(f,o(o({ref:a},d),{},{components:t})):n.createElement(f,o({ref:a},d))}));function f(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[m]="string"==typeof e?e:p,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75471:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=t(87462),p=(t(67294),t(3905));const r={},o="aad approleassignment add",s={unversionedId:"cmd/aad/approleassignment/approleassignment-add",id:"cmd/aad/approleassignment/approleassignment-add",title:"aad approleassignment add",description:"Adds service principal permissions also known as scopes and app role assignments for specified Azure AD application registration",source:"@site/docs/cmd/aad/approleassignment/approleassignment-add.md",sourceDirName:"cmd/aad/approleassignment",slug:"/cmd/aad/approleassignment/approleassignment-add",permalink:"/cmd/aad/approleassignment/approleassignment-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/approleassignment/approleassignment-add.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad app set",permalink:"/cmd/aad/app/app-set"},next:{title:"aad approleassignment list",permalink:"/cmd/aad/approleassignment/approleassignment-list"}},i={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],d={toc:l};function m(e){let{components:a,...t}=e;return(0,p.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"aad-approleassignment-add"},"aad approleassignment add"),(0,p.kt)("p",null,"Adds service principal permissions also known as scopes and app role assignments for specified Azure AD application registration"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad approleassignment add [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--appId [appId]"),"\n: Application appId also known as clientId of the App Registration to which the configured scopes (app roles) should be applied"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--appObjectId [appObjectId]"),"\n: Application objectId of the App Registration to which the configured scopes (app roles) should be applied"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--appDisplayName [appDisplayName]"),"\n: Application name of the App Registration to which the configured scopes (app roles) should be applied"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-r, --resource <resource>"),"\n: Service principal name, appId or objectId that has the scopes (roles) ex. ",(0,p.kt)("inlineCode",{parentName:"p"},"SharePoint"),"."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-s, --scope <scope>"),"\n: Permissions known also as scopes and roles to grant the application with. If multiple permissions have to be granted, they have to be comma separated ex. ",(0,p.kt)("inlineCode",{parentName:"p"},"Sites.Read.All,Sites.ReadWrite.all")),(0,p.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"This command requires tenant administrator permissions."),(0,p.kt)("p",null,"Specify either the ",(0,p.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"appObjectId")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"appDisplayName")," but not multiple. If you specify more than one option value, the command will fail with an error."),(0,p.kt)("p",null,"Autocomplete values for the ",(0,p.kt)("inlineCode",{parentName:"p"},"resource")," option do not mean allowed values. The autocomplete will just suggest some known names, but that doesn't restrict you to use name of your own custom application or other application within your tenant."),(0,p.kt)("p",null,"This command can also be used to assign permissions to system or user-assigned managed identity."),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Adds SharePoint ",(0,p.kt)("em",{parentName:"p"},"Sites.Read.All")," application permissions to Azure AD application with app id ",(0,p.kt)("em",{parentName:"p"},"57907bf8-73fa-43a6-89a5-1f603e29e451")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad approleassignment add --appId "57907bf8-73fa-43a6-89a5-1f603e29e451" --resource "SharePoint" --scope "Sites.Read.All"\n')),(0,p.kt)("p",null,"Adds multiple Microsoft Graph application permissions to an Azure AD application with name ",(0,p.kt)("em",{parentName:"p"},"MyAppName")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad approleassignment add --appDisplayName "MyAppName" --resource "Microsoft Graph" --scope "Mail.Read,Mail.Send"\n')),(0,p.kt)("p",null,"Adds Microsoft Graph ",(0,p.kt)("em",{parentName:"p"},"Mail.Read")," application permissions to a system managed identity app with objectId ",(0,p.kt)("em",{parentName:"p"},"57907bf8-73fa-43a6-89a5-1f603e29e451")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad approleassignment add --appObjectId "57907bf8-73fa-43a6-89a5-1f603e29e451" --resource "Microsoft Graph" --scope "Mail.Read"\n')),(0,p.kt)("h2",{id:"more-information"},"More information"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Microsoft Graph permissions reference: ",(0,p.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/permissions-reference"},"https://docs.microsoft.com/en-us/graph/permissions-reference"))))}m.isMDXComponent=!0}}]);