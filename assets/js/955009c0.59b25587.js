"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[81708],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={},l="flow run cancel",c={unversionedId:"cmd/flow/run/run-cancel",id:"cmd/flow/run/run-cancel",title:"flow run cancel",description:"Cancels a specific run for the specified flow",source:"@site/docs/cmd/flow/run/run-cancel.md",sourceDirName:"cmd/flow/run",slug:"/cmd/flow/run/run-cancel",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-cancel",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/flow/run/run-cancel.md",tags:[],version:"current",lastUpdatedAt:1668981541,formattedLastUpdatedAt:"Nov 20, 2022",frontMatter:{},sidebar:"commands",previous:{title:"flow owner remove",permalink:"/cli-microsoft365-docusaurus/cmd/flow/owner/owner-remove"},next:{title:"flow run get",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-get"}},i={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flow-run-cancel"},"flow run cancel"),(0,o.kt)("p",null,"Cancels a specific run for the specified flow"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run cancel [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: The name of the run to cancel"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-f, --flowName <flowName>"),"\n: The name of the flow to cancel the run for"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-e, --environmentName <environmentName>"),"\n: The name of the environment where the flow is located"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,o.kt)("p",null,"If the environment with the name you specified doesn't exist, you will get the ",(0,o.kt)("inlineCode",{parentName:"p"},"Access to the environment 'xyz' is denied.")," error."),(0,o.kt)("p",null,"If the flow with the name you specified doesn't exist, you will get the ",(0,o.kt)("inlineCode",{parentName:"p"},"The caller with object id 'abc' does not have permission for connection 'xyz' under Api 'shared_logicflows'.")," error."),(0,o.kt)("p",null,"If the run with the name you specified doesn't exist, you will get the ",(0,o.kt)("inlineCode",{parentName:"p"},"The workflow 'xyz' run 'abc' could not be found.")," error."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Cancel the given run of the specified flow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run cancel --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --flowName 5923cb07-ce1a-4a5c-ab81-257ce820109a --name 08586653536760200319026785874CU62\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}f.isMDXComponent=!0}}]);