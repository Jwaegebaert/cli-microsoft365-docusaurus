"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[59411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?l.createElement(f,a(a({ref:t},s),{},{components:n})):l.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>i});var l=n(87462),o=(n(67294),n(3905));const r={toc:[]},a="wrapper";function i(e){let{components:t,...n}=e;return(0,o.kt)(a,(0,l.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}i.isMDXComponent=!0},45029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var l=n(87462),o=(n(67294),n(3905)),r=n(37884);const a={},i="aad policy list",c={unversionedId:"cmd/aad/policy/policy-list",id:"cmd/aad/policy/policy-list",title:"aad policy list",description:"Returns policies from Azure AD",source:"@site/docs/cmd/aad/policy/policy-list.mdx",sourceDirName:"cmd/aad/policy",slug:"/cmd/aad/policy/policy-list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/policy/policy-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/policy/policy-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"aad oauth2grant set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/oauth2grant/oauth2grant-set"},next:{title:"aad siteclassification disable",permalink:"/cli-microsoft365-docusaurus/cmd/aad/siteclassification/siteclassification-disable"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aad-policy-list"},"aad policy list"),(0,o.kt)("p",null,"Returns policies from Azure AD"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad policy list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-t, --type [type]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The type of policies to return. Allowed values ",(0,o.kt)("code",{parentName:"p"},"activityBasedTimeout"),",",(0,o.kt)("code",{parentName:"p"},"authorization"),",",(0,o.kt)("code",{parentName:"p"},"claimsMapping"),",",(0,o.kt)("code",{parentName:"p"},"homeRealmDiscovery"),",",(0,o.kt)("code",{parentName:"p"},"identitySecurityDefaultsEnforcement"),",",(0,o.kt)("code",{parentName:"p"},"tokenIssuance"),",",(0,o.kt)("code",{parentName:"p"},"tokenLifetime"),". If omitted, all policies are returned"))),(0,o.kt)(r.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Returns all policies from Azure AD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad policy list\n")),(0,o.kt)("p",null,"Returns claim-mapping policies from Azure AD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad policy list --type "claimsMapping"\n')),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Microsoft Graph Azure AD policy overview: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/resources/policy-overview?view=graph-rest-1.0"},"https://docs.microsoft.com/en-us/graph/api/resources/policy-overview?view=graph-rest-1.0"))))}m.isMDXComponent=!0}}]);