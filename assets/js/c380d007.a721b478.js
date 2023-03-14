"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[30480],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>k});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),i=s(o),m=a,k=i["".concat(d,".").concat(m)]||i[m]||c[m]||n;return o?r.createElement(k,l(l({ref:t},u),{},{components:o})):r.createElement(k,l({ref:t},u))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[i]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<n;s++)l[s]=o[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},37884:(e,t,o)=>{o.d(t,{ZP:()=>p});var r=o(87462),a=(o(67294),o(3905));const n={toc:[]},l="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(l,(0,r.Z)({},n,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-h, --help [help]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",null,"options"),", ",(0,a.kt)("code",null,"examples"),", ",(0,a.kt)("code",null,"remarks"),", ",(0,a.kt)("code",null,"response"),", ",(0,a.kt)("code",null,"full"),". Default is ",(0,a.kt)("code",null,"full"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--query [query]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"JMESPath query string. See ",(0,a.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-o, --output [output]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output type. ",(0,a.kt)("code",null,"json"),", ",(0,a.kt)("code",null,"text"),", ",(0,a.kt)("code",null,"csv"),", ",(0,a.kt)("code",null,"md"),". Default is ",(0,a.kt)("code",null,"json"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--verbose"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with verbose logging.")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--debug"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with debug logging."))))}p.isMDXComponent=!0},87827:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=o(87462),a=(o(67294),o(3905)),n=o(37884);const l={},p="aad o365group set",d={unversionedId:"cmd/aad/o365group/o365group-set",id:"cmd/aad/o365group/o365group-set",title:"aad o365group set",description:"Updates Microsoft 365 Group properties",source:"@site/docs/cmd/aad/o365group/o365group-set.mdx",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-set.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group report activitystorage",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-report-activitystorage"},next:{title:"aad o365group teamify",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-teamify"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],i={toc:u},c="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aad-o365group-set"},"aad o365group set"),(0,a.kt)("p",null,"Updates Microsoft 365 Group properties"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group set [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The ID of the Microsoft 365 Group to update")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-n, --displayName [displayName]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Display name for the Microsoft 365 Group")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-d, --description [description]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Description for the Microsoft 365 Group")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--owners [owners]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Comma-separated list of Microsoft 365 Group owners to add")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--members [members]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Comma-separated list of Microsoft 365 Group members to add")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--isPrivate [isPrivate]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Set to true if the Microsoft 365 Group should be private and to false if it should be public (default)")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-l, --logoPath [logoPath]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Local path to the image file to use as group logo"))),(0,a.kt)(n.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"When updating group's owners and members, the command will add newly specified users to the previously set owners and members. The previously set users will not be replaced."),(0,a.kt)("p",null,"When specifying the path to the logo image you can use both relative and absolute paths. Note, that ~ in the path, will not be resolved and will most likely result in an error."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Update Microsoft 365 Group display name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group set --id 28beab62-7540-4db1-a23f-29a6018a3848 --displayName Finance\n")),(0,a.kt)("p",null,"Change Microsoft 365 Group visibility to public"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group set --id 28beab62-7540-4db1-a23f-29a6018a3848 --isPrivate false\n")),(0,a.kt)("p",null,"Add new Microsoft 365 Group owners"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group set --id 28beab62-7540-4db1-a23f-29a6018a3848 --owners "DebraB@contoso.onmicrosoft.com,DiegoS@contoso.onmicrosoft.com"\n')),(0,a.kt)("p",null,"Add new Microsoft 365 Group members"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group set --id 28beab62-7540-4db1-a23f-29a6018a3848 --members "DebraB@contoso.onmicrosoft.com,DiegoS@contoso.onmicrosoft.com"\n')),(0,a.kt)("p",null,"Update Microsoft 365 Group logo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group set --id 28beab62-7540-4db1-a23f-29a6018a3848 --logoPath images/logo.png\n")))}m.isMDXComponent=!0}}]);