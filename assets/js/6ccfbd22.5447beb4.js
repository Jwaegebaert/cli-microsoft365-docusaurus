"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[48746],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var p=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,p,r=function(e,t){if(null==e)return{};var a,p,r={},n=Object.keys(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=p.createContext({}),i=function(e){var t=p.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return p.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},u=p.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=i(a),u=r,k=s["".concat(l,".").concat(u)]||s[u]||m[u]||n;return a?p.createElement(k,o(o({ref:t},c),{},{components:a})):p.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[s]="string"==typeof e?e:r,o[1]=d;for(var i=2;i<n;i++)o[i]=a[i];return p.createElement.apply(null,o)}return p.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>d});var p=a(87462),r=(a(67294),a(3905));const n={toc:[]},o="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,p.Z)({},n,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}d.isMDXComponent=!0},60128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var p=a(87462),r=(a(67294),a(3905)),n=a(37884);const o={},d="aad app role add",l={unversionedId:"cmd/aad/app/app-role-add",id:"cmd/aad/app/app-role-add",title:"aad app role add",description:"Adds role to the specified Azure AD app registration",source:"@site/docs/cmd/aad/app/app-role-add.mdx",sourceDirName:"cmd/aad/app",slug:"/cmd/aad/app/app-role-add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-role-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/app/app-role-add.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"aad app remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-remove"},next:{title:"aad app role list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-role-list"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,p.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aad-app-role-add"},"aad app role add"),(0,r.kt)("p",null,"Adds role to the specified Azure AD app registration"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app role add [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--appId [appId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Application (client) ID of the Azure AD application registration to which to add the role. Specify either ",(0,r.kt)("code",{parentName:"p"},"appId"),", ",(0,r.kt)("code",{parentName:"p"},"appObjectId")," or ",(0,r.kt)("code",{parentName:"p"},"appName"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--appObjectId [appObjectId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Object ID of the Azure AD application registration to which to add the role. Specify either ",(0,r.kt)("code",{parentName:"p"},"appId"),", ",(0,r.kt)("code",{parentName:"p"},"appObjectId")," or ",(0,r.kt)("code",{parentName:"p"},"appName"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--appName [appName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Name of the Azure AD application registration to which to add the role. Specify either ",(0,r.kt)("code",{parentName:"p"},"appId"),", ",(0,r.kt)("code",{parentName:"p"},"appObjectId")," or ",(0,r.kt)("code",{parentName:"p"},"appName"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-n, --name <name>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Name of the role to add")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-d, --description <description>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Description of the role to add")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-m, --allowedMembers <allowedMembers>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Types of members that can be added to the group. Allowed values: ",(0,r.kt)("code",{parentName:"p"},"usersGroups"),", ",(0,r.kt)("code",{parentName:"p"},"applications"),", ",(0,r.kt)("code",{parentName:"p"},"both"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-c, --claim <claim>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Claim value"))),(0,r.kt)(n.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"For best performance use the ",(0,r.kt)("inlineCode",{parentName:"p"},"appObjectId")," option to reference the Azure AD application registration for which to add the role. If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"appId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"appName"),", this command will first need to find the corresponding object ID for that application."),(0,r.kt)("p",null,"If the command finds multiple Azure AD application registrations with the specified app name, it will prompt you to disambiguate which app it should use, listing the discovered object IDs."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Add role to the Azure AD application registration specified by its object ID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad app role add --appObjectId d75be2e1-0204-4f95-857d-51a37cf40be8 --name Managers --description "Managers" --allowedMembers usersGroups --claim managers\n')),(0,r.kt)("p",null,"Add role to the Azure AD application registration specified by its app (client) ID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad app role add --appId e75be2e1-0204-4f95-857d-51a37cf40be8 --name Managers --description "Managers" --allowedMembers usersGroups --claim managers\n')),(0,r.kt)("p",null,"Add role to the Azure AD application registration specified by its name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad app role add --appName "My app" --name Managers --description "Managers" --allowedMembers usersGroups --claim managers\n')))}u.isMDXComponent=!0}}]);