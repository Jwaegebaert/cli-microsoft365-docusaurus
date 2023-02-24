"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[22981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="aad user hibp",s={unversionedId:"cmd/aad/user/user-hibp",id:"cmd/aad/user/user-hibp",title:"aad user hibp",description:"Allows you to retrieve all accounts that have been pwned with the specified username",source:"@site/docs/cmd/aad/user/user-hibp.md",sourceDirName:"cmd/aad/user",slug:"/cmd/aad/user/user-hibp",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-hibp",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/user/user-hibp.md",tags:[],version:"current",lastUpdatedAt:1642099642,formattedLastUpdatedAt:"Jan 13, 2022",frontMatter:{},sidebar:"commands",previous:{title:"aad user guest add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-guest-add"},next:{title:"aad user license list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-license-list"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aad-user-hibp"},"aad user hibp"),(0,a.kt)("p",null,"Allows you to retrieve all accounts that have been pwned with the specified username"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user hibp [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --userName <userName>"),"\n: The name of the user to retrieve information for."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--apiKey, <apiKey>"),"\n: Have I been pwned ",(0,a.kt)("inlineCode",{parentName:"p"},"API Key"),". You can buy it from ",(0,a.kt)("a",{parentName:"p",href:"https://haveibeenpwned.com/API/Key"},"https://haveibeenpwned.com/API/Key")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--domain, [domain]"),"\n: Limit the returned breaches only contain results with the domain specified."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If the user with the specified user name doesn't involved in any breach, you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"No pwnage found")," message when running in debug or verbose mode."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"API Key")," is invalid, you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"Required option apiKey not specified")," error."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Check if user with user name ",(0,a.kt)("a",{parentName:"p",href:"mailto:_account-exists@hibp-integration-tests.com_"},"_account-exists@hibp-integration-tests.com_")," is in a data breach"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user hibp --userName account-exists@hibp-integration-tests.com --apiKey _YOUR-API-KEY_\n")),(0,a.kt)("p",null,"Check if user with user name ",(0,a.kt)("a",{parentName:"p",href:"mailto:_account-exists@hibp-integration-tests.com_"},"_account-exists@hibp-integration-tests.com_")," is in a data breach against the domain specified"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user hibp --userName account-exists@hibp-integration-tests.com --apiKey _YOUR-API-KEY_ --domain adobe.com\n")),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Have I been pwned API documentation: ",(0,a.kt)("a",{parentName:"li",href:"https://haveibeenpwned.com/API/v3"},"https://haveibeenpwned.com/API/v3"))))}d.isMDXComponent=!0}}]);