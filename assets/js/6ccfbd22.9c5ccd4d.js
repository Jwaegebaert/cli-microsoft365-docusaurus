"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[48746],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var p=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,p,r=function(e,t){if(null==e)return{};var a,p,r={},n=Object.keys(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=p.createContext({}),i=function(e){var t=p.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},m=function(e){var t=i(e.components);return p.createElement(l.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},u=p.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(a),u=r,k=c["".concat(l,".").concat(u)]||c[u]||s[u]||n;return a?p.createElement(k,d(d({ref:t},m),{},{components:a})):p.createElement(k,d({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,d=new Array(n);d[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,d[1]=o;for(var i=2;i<n;i++)d[i]=a[i];return p.createElement.apply(null,d)}return p.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>o});var p=a(87462),r=(a(67294),a(3905));const n={toc:[]},d="wrapper";function o(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,p.Z)({},n,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}o.isMDXComponent=!0},60128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>m});var p=a(87462),r=(a(67294),a(3905)),n=a(26054);const d={},o="aad app role add",l={unversionedId:"cmd/aad/app/app-role-add",id:"cmd/aad/app/app-role-add",title:"aad app role add",description:"Adds role to the specified Azure AD app registration",source:"@site/docs/cmd/aad/app/app-role-add.mdx",sourceDirName:"cmd/aad/app",slug:"/cmd/aad/app/app-role-add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-role-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/app/app-role-add.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad app set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-set"},next:{title:"aad app role list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-role-list"}},i={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:m},s="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,p.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aad-app-role-add"},"aad app role add"),(0,r.kt)("p",null,"Adds role to the specified Azure AD app registration"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app role add [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--appId [appId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Application (client) ID of the Azure AD application registration to which to add the role. Specify either ",(0,r.kt)("code",{parentName:"p"},"appId"),", ",(0,r.kt)("code",{parentName:"p"},"appObjectId")," or ",(0,r.kt)("code",{parentName:"p"},"appName"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--appObjectId [appObjectId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Object ID of the Azure AD application registration to which to add the role. Specify either ",(0,r.kt)("code",{parentName:"p"},"appId"),", ",(0,r.kt)("code",{parentName:"p"},"appObjectId")," or ",(0,r.kt)("code",{parentName:"p"},"appName"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--appName [appName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Name of the Azure AD application registration to which to add the role. Specify either ",(0,r.kt)("code",{parentName:"p"},"appId"),", ",(0,r.kt)("code",{parentName:"p"},"appObjectId")," or ",(0,r.kt)("code",{parentName:"p"},"appName"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-n, --name <name>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Name of the role to add")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-d, --description <description>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Description of the role to add")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-m, --allowedMembers <allowedMembers>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Types of members that can be added to the group. Allowed values: ",(0,r.kt)("code",{parentName:"p"},"usersGroups"),", ",(0,r.kt)("code",{parentName:"p"},"applications"),", ",(0,r.kt)("code",{parentName:"p"},"both"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-c, --claim <claim>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Claim value"))),(0,r.kt)(n.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"For best performance use the ",(0,r.kt)("inlineCode",{parentName:"p"},"appObjectId")," option to reference the Azure AD application registration for which to add the role. If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"appId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"appName"),", this command will first need to find the corresponding object ID for that application."),(0,r.kt)("p",null,"If the command finds multiple Azure AD application registrations with the specified app name, it will prompt you to disambiguate which app it should use, listing the discovered object IDs."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Add role to the Azure AD application registration specified by its object ID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad app role add --appObjectId d75be2e1-0204-4f95-857d-51a37cf40be8 --name Managers --description "Managers" --allowedMembers usersGroups --claim managers\n')),(0,r.kt)("p",null,"Add role to the Azure AD application registration specified by its app (client) ID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad app role add --appId e75be2e1-0204-4f95-857d-51a37cf40be8 --name Managers --description "Managers" --allowedMembers usersGroups --claim managers\n')),(0,r.kt)("p",null,"Add role to the Azure AD application registration specified by its name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad app role add --appName "My app" --name Managers --description "Managers" --allowedMembers usersGroups --claim managers\n')))}u.isMDXComponent=!0}}]);