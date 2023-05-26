"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[43567],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var p=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,p,n=function(e,t){if(null==e)return{};var a,p,n={},r=Object.keys(e);for(p=0;p<r.length;p++)a=r[p],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(p=0;p<r.length;p++)a=r[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=p.createContext({}),i=function(e){var t=p.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=i(e.components);return p.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},u=p.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=i(a),u=n,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return a?p.createElement(k,o(o({ref:t},l),{},{components:a})):p.createElement(k,o({ref:t},l))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var i=2;i<r;i++)o[i]=a[i];return p.createElement.apply(null,o)}return p.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>s});var p=a(87462),n=(a(67294),a(3905));const r={toc:[]},o="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(o,(0,p.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",{parentName:"p"},"options"),", ",(0,n.kt)("code",{parentName:"p"},"examples"),", ",(0,n.kt)("code",{parentName:"p"},"remarks"),", ",(0,n.kt)("code",{parentName:"p"},"response"),", ",(0,n.kt)("code",{parentName:"p"},"full"),". Default is ",(0,n.kt)("code",{parentName:"p"},"full"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--query [query]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,n.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output type. ",(0,n.kt)("code",{parentName:"p"},"json"),", ",(0,n.kt)("code",{parentName:"p"},"text"),", ",(0,n.kt)("code",{parentName:"p"},"csv"),", ",(0,n.kt)("code",{parentName:"p"},"md"),". Default ",(0,n.kt)("code",{parentName:"p"},"json"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--verbose"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--debug"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}s.isMDXComponent=!0},63675:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var p=a(87462),n=(a(67294),a(3905)),r=a(26054);const o={},s="aad approleassignment add",d={unversionedId:"cmd/aad/approleassignment/approleassignment-add",id:"cmd/aad/approleassignment/approleassignment-add",title:"aad approleassignment add",description:"Adds service principal permissions also known as scopes and app role assignments for specified Azure AD application registration",source:"@site/docs/cmd/aad/approleassignment/approleassignment-add.mdx",sourceDirName:"cmd/aad/approleassignment",slug:"/cmd/aad/approleassignment/approleassignment-add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/approleassignment/approleassignment-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/approleassignment/approleassignment-add.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad app role remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-role-remove"},next:{title:"aad approleassignment list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/approleassignment/approleassignment-list"}},i={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],m={toc:l},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,p.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-approleassignment-add"},"aad approleassignment add"),(0,n.kt)("p",null,"Adds service principal permissions also known as scopes and app role assignments for specified Azure AD application registration"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad approleassignment add [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--appId [appId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Application appId also known as clientId of the App Registration to which the configured scopes (app roles) should be applied")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--appObjectId [appObjectId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Application objectId of the App Registration to which the configured scopes (app roles) should be applied")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--appDisplayName [appDisplayName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Application name of the App Registration to which the configured scopes (app roles) should be applied")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-r, --resource <resource>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Service principal name, appId or objectId that has the scopes (roles) e.g. ",(0,n.kt)("code",{parentName:"p"},"SharePoint"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-s, --scope <scope>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Permissions known also as scopes and roles to grant the application with. If multiple permissions have to be granted, they have to be comma-separated e.g. ",(0,n.kt)("code",{parentName:"p"},"Sites.Read.All"),", ",(0,n.kt)("code",{parentName:"p"},"Sites.ReadWrite.all")))),(0,n.kt)(r.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"This command requires tenant administrator permissions."),(0,n.kt)("p",null,"Specify either the ",(0,n.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"appObjectId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"appDisplayName")," but not multiple. If you specify more than one option value, the command will fail with an error."),(0,n.kt)("p",null,"Autocomplete values for the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," option do not mean allowed values. The autocomplete will just suggest some known names, but that doesn't restrict you to use the name of your own custom application or other application within your tenant."),(0,n.kt)("p",null,"This command can also be used to assign permissions to system or user-assigned managed identity."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Adds SharePoint ",(0,n.kt)("em",{parentName:"p"},"Sites.Read.All")," application permissions to Azure AD application with app id ",(0,n.kt)("em",{parentName:"p"},"57907bf8-73fa-43a6-89a5-1f603e29e451")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad approleassignment add --appId "57907bf8-73fa-43a6-89a5-1f603e29e451" --resource "SharePoint" --scope "Sites.Read.All"\n')),(0,n.kt)("p",null,"Adds multiple Microsoft Graph application permissions to an Azure AD application with the name _MyAppName__"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad approleassignment add --appDisplayName "MyAppName" --resource "Microsoft Graph" --scope "Mail.Read,Mail.Send"\n')),(0,n.kt)("p",null,"Adds Microsoft Graph ",(0,n.kt)("em",{parentName:"p"},"Mail.Read")," application permissions to a system-managed identity app with objectId ",(0,n.kt)("em",{parentName:"p"},"57907bf8-73fa-43a6-89a5-1f603e29e451")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad approleassignment add --appObjectId "57907bf8-73fa-43a6-89a5-1f603e29e451" --resource "Microsoft Graph" --scope "Mail.Read"\n')),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Microsoft Graph permissions reference: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/permissions-reference"},"https://docs.microsoft.com/en-us/graph/permissions-reference"))))}u.isMDXComponent=!0}}]);