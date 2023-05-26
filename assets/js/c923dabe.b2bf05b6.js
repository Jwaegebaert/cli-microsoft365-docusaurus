"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[80178],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>N});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),l=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},i=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=l(a),i=n,N=c["".concat(m,".").concat(i)]||c[i]||u[i]||o;return a?r.createElement(N,p(p({ref:t},s),{},{components:a})):r.createElement(N,p({ref:t},s))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=i;var d={};for(var m in t)hasOwnProperty.call(t,m)&&(d[m]=t[m]);d.originalType=e,d[c]="string"==typeof e?e:n,p[1]=d;for(var l=2;l<o;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}i.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={toc:[]},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",{parentName:"p"},"options"),", ",(0,n.kt)("code",{parentName:"p"},"examples"),", ",(0,n.kt)("code",{parentName:"p"},"remarks"),", ",(0,n.kt)("code",{parentName:"p"},"response"),", ",(0,n.kt)("code",{parentName:"p"},"full"),". Default is ",(0,n.kt)("code",{parentName:"p"},"full"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--query [query]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,n.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output type. ",(0,n.kt)("code",{parentName:"p"},"json"),", ",(0,n.kt)("code",{parentName:"p"},"text"),", ",(0,n.kt)("code",{parentName:"p"},"csv"),", ",(0,n.kt)("code",{parentName:"p"},"md"),". Default ",(0,n.kt)("code",{parentName:"p"},"json"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--verbose"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--debug"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}d.isMDXComponent=!0},51888:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>i,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var r=a(87462),n=(a(67294),a(3905)),o=a(26054);const p={},d="flow owner ensure",m={unversionedId:"cmd/flow/owner/owner-ensure",id:"cmd/flow/owner/owner-ensure",title:"flow owner ensure",description:"Assigns/updates permissions to a Power Automate flow",source:"@site/docs/cmd/flow/owner/owner-ensure.mdx",sourceDirName:"cmd/flow/owner",slug:"/cmd/flow/owner/owner-ensure",permalink:"/cli-microsoft365-docusaurus/cmd/flow/owner/owner-ensure",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/flow/owner/owner-ensure.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"flow environment list",permalink:"/cli-microsoft365-docusaurus/cmd/flow/environment/environment-list"},next:{title:"flow owner list",permalink:"/cli-microsoft365-docusaurus/cmd/flow/owner/owner-list"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:s},u="wrapper";function i(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"flow-owner-ensure"},"flow owner ensure"),(0,n.kt)("p",null,"Assigns/updates permissions to a Power Automate flow"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow owner ensure [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-e, --environmentName <environmentName>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The name of the environment.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-f, --flowName <flowName>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The name of the Power Automate flow.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--userId [userId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The ID of the user. Specify either ",(0,n.kt)("code",{parentName:"p"},"userId"),", ",(0,n.kt)("code",{parentName:"p"},"userName"),", ",(0,n.kt)("code",{parentName:"p"},"groupId")," or ",(0,n.kt)("code",{parentName:"p"},"groupName"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--userName [userName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"User principal name of the user. Specify either ",(0,n.kt)("code",{parentName:"p"},"userId"),", ",(0,n.kt)("code",{parentName:"p"},"userName"),", ",(0,n.kt)("code",{parentName:"p"},"groupId")," or ",(0,n.kt)("code",{parentName:"p"},"groupName"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--groupId [groupId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The ID of the group. Specify either ",(0,n.kt)("code",{parentName:"p"},"userId"),", ",(0,n.kt)("code",{parentName:"p"},"userName"),", ",(0,n.kt)("code",{parentName:"p"},"groupId")," or ",(0,n.kt)("code",{parentName:"p"},"groupName"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--groupName [groupName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The name of the group. Specify either ",(0,n.kt)("code",{parentName:"p"},"userId"),", ",(0,n.kt)("code",{parentName:"p"},"userName"),", ",(0,n.kt)("code",{parentName:"p"},"groupId")," or ",(0,n.kt)("code",{parentName:"p"},"groupName"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--roleName <roleName>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Access level for the user on the flow. Valid options are ",(0,n.kt)("code",{parentName:"p"},"CanView")," or ",(0,n.kt)("code",{parentName:"p"},"CanEdit"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--asAdmin"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Run the command as admin."))),(0,n.kt)(o.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Assign owner permissions to a specific Power Automate flow for a user with ID"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow owner ensure --userId 5c241023-2ba5-4ea8-a516-a2481a3e6c51 --environmentName Default-c5a5d746-3520-453f-8a69-780f8e44917e --flowName 72f2be4a-78c1-4220-a048-dbf557296a72 --roleName CanEdit\n")),(0,n.kt)("p",null,"Assign owner permissions to a specific Power Automate flow for a user with UPN"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 flow owner ensure --userName "john.doe@contoso.com" --environmentName Default-c5a5d746-3520-453f-8a69-780f8e44917e --flowName 72f2be4a-78c1-4220-a048-dbf557296a72 --roleName CanEdit\n')),(0,n.kt)("p",null,"Assign owner permissions to a specific Power Automate flow for a group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow owner ensure --groupId 8d4d9f32-1ab0-4f81-9054-efbb1759e8e6 --environmentName Default-c5a5d746-3520-453f-8a69-780f8e44917e --flowName 72f2be4a-78c1-4220-a048-dbf557296a72 --roleName CanEdit\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}i.isMDXComponent=!0}}]);