"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[43567],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=i(a),u=p,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(k,r(r({ref:t},d),{},{components:a})):n.createElement(k,r({ref:t},d))}));function k(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:p,r[1]=l;for(var i=2;i<o;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),p=(a(67294),a(3905));const o={toc:[]},r="wrapper";function l(e){let{components:t,...a}=e;return(0,p.kt)(r,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("dl",null,(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"-h, --help [help]"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,p.kt)("code",null,"options"),", ",(0,p.kt)("code",null,"examples"),", ",(0,p.kt)("code",null,"remarks"),", ",(0,p.kt)("code",null,"response"),", ",(0,p.kt)("code",null,"full"),". Default is ",(0,p.kt)("code",null,"full"),".")),(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"--query [query]"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"JMESPath query string. See ",(0,p.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"-o, --output [output]"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"Output type. ",(0,p.kt)("code",null,"json"),", ",(0,p.kt)("code",null,"text"),", ",(0,p.kt)("code",null,"csv"),", ",(0,p.kt)("code",null,"md"),". Default is ",(0,p.kt)("code",null,"json"),".")),(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"--verbose"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"Runs command with verbose logging.")),(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"--debug"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"Runs command with debug logging."))))}l.isMDXComponent=!0},63675:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),p=(a(67294),a(3905)),o=a(37884);const r={},l="aad approleassignment add",s={unversionedId:"cmd/aad/approleassignment/approleassignment-add",id:"cmd/aad/approleassignment/approleassignment-add",title:"aad approleassignment add",description:"Adds service principal permissions also known as scopes and app role assignments for specified Azure AD application registration",source:"@site/docs/cmd/aad/approleassignment/approleassignment-add.mdx",sourceDirName:"cmd/aad/approleassignment",slug:"/cmd/aad/approleassignment/approleassignment-add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/approleassignment/approleassignment-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/approleassignment/approleassignment-add.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"aad app set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-set"},next:{title:"aad approleassignment list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/approleassignment/approleassignment-list"}},i={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],c={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,p.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"aad-approleassignment-add"},"aad approleassignment add"),(0,p.kt)("p",null,"Adds service principal permissions also known as scopes and app role assignments for specified Azure AD application registration"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad approleassignment add [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("dl",null,(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--appId [appId]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Application appId also known as clientId of the App Registration to which the configured scopes (app roles) should be applied")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--appObjectId [appObjectId]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Application objectId of the App Registration to which the configured scopes (app roles) should be applied")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--appDisplayName [appDisplayName]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Application name of the App Registration to which the configured scopes (app roles) should be applied")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-r, --resource <resource>"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Service principal name, appId or objectId that has the scopes (roles) e.g. ",(0,p.kt)("code",{parentName:"p"},"SharePoint"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-s, --scope <scope>"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Permissions known also as scopes and roles to grant the application with. If multiple permissions have to be granted, they have to be comma-separated e.g. ",(0,p.kt)("code",{parentName:"p"},"Sites.Read.All,Sites.ReadWrite.all")))),(0,p.kt)(o.ZP,{mdxType:"Global"}),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"This command requires tenant administrator permissions."),(0,p.kt)("p",null,"Specify either the ",(0,p.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"appObjectId")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"appDisplayName")," but not multiple. If you specify more than one option value, the command will fail with an error."),(0,p.kt)("p",null,"Autocomplete values for the ",(0,p.kt)("inlineCode",{parentName:"p"},"resource")," option do not mean allowed values. The autocomplete will just suggest some known names, but that doesn't restrict you to use the name of your own custom application or other application within your tenant."),(0,p.kt)("p",null,"This command can also be used to assign permissions to system or user-assigned managed identity."),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Adds SharePoint ",(0,p.kt)("em",{parentName:"p"},"Sites.Read.All")," application permissions to Azure AD application with app id ",(0,p.kt)("em",{parentName:"p"},"57907bf8-73fa-43a6-89a5-1f603e29e451")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad approleassignment add --appId "57907bf8-73fa-43a6-89a5-1f603e29e451" --resource "SharePoint" --scope "Sites.Read.All"\n')),(0,p.kt)("p",null,"Adds multiple Microsoft Graph application permissions to an Azure AD application with the name _MyAppName__"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad approleassignment add --appDisplayName "MyAppName" --resource "Microsoft Graph" --scope "Mail.Read,Mail.Send"\n')),(0,p.kt)("p",null,"Adds Microsoft Graph ",(0,p.kt)("em",{parentName:"p"},"Mail.Read")," application permissions to a system-managed identity app with objectId ",(0,p.kt)("em",{parentName:"p"},"57907bf8-73fa-43a6-89a5-1f603e29e451")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad approleassignment add --appObjectId "57907bf8-73fa-43a6-89a5-1f603e29e451" --resource "Microsoft Graph" --scope "Mail.Read"\n')),(0,p.kt)("h2",{id:"more-information"},"More information"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Microsoft Graph permissions reference: ",(0,p.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/permissions-reference"},"https://docs.microsoft.com/en-us/graph/permissions-reference"))))}u.isMDXComponent=!0}}]);