"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[35749],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(o),m=n,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return o?r.createElement(f,l(l({ref:t},c),{},{components:o})):r.createElement(f,l({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[d]="string"==typeof e?e:n,l[1]=u;for(var i=2;i<a;i++)l[i]=o[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},37884:(e,t,o)=>{o.d(t,{ZP:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={toc:[]},l="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(l,(0,r.Z)({},a,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-h, --help [help]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",null,"options"),", ",(0,n.kt)("code",null,"examples"),", ",(0,n.kt)("code",null,"remarks"),", ",(0,n.kt)("code",null,"response"),", ",(0,n.kt)("code",null,"full"),". Default is ",(0,n.kt)("code",null,"full"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--query [query]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"JMESPath query string. See ",(0,n.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-o, --output [output]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output type. ",(0,n.kt)("code",null,"json"),", ",(0,n.kt)("code",null,"text"),", ",(0,n.kt)("code",null,"csv"),", ",(0,n.kt)("code",null,"md"),". Default is ",(0,n.kt)("code",null,"json"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--verbose"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with verbose logging.")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--debug"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with debug logging."))))}u.isMDXComponent=!0},17855:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=o(87462),n=(o(67294),o(3905)),a=o(37884);const l={},u="aad o365group teamify",p={unversionedId:"cmd/aad/o365group/o365group-teamify",id:"cmd/aad/o365group/o365group-teamify",title:"aad o365group teamify",description:"Creates a new Microsoft Teams team under existing Microsoft 365 group",source:"@site/docs/cmd/aad/o365group/o365group-teamify.mdx",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-teamify",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-teamify",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-teamify.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-set"},next:{title:"aad o365group user add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-user-add"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c},s="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(s,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-o365group-teamify"},"aad o365group teamify"),(0,n.kt)("p",null,"Creates a new Microsoft Teams team under existing Microsoft 365 group"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group teamify [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The ID of the Microsoft 365 Group to connect to Microsoft Teams. Specify either id or mailNickname but not both")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--mailNickname [mailNickname]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The mail alias of the Microsoft 365 Group to connect to Microsoft Teams. Specify either id or mailNickname but not both"))),(0,n.kt)(a.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Creates a new Microsoft Teams team under existing Microsoft 365 group with id ",(0,n.kt)("em",{parentName:"p"},"e3f60f99-0bad-481f-9e9f-ff0f572fbd03")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group teamify --id e3f60f99-0bad-481f-9e9f-ff0f572fbd03\n")),(0,n.kt)("p",null,"Creates a new Microsoft Teams team under existing Microsoft 365 group with mailNickname ",(0,n.kt)("em",{parentName:"p"},"GroupName")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group teamify --mailNickname GroupName\n")))}m.isMDXComponent=!0}}]);