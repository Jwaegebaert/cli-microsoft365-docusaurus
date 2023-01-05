"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},a="flow run resubmit",l={unversionedId:"cmd/flow/run/run-resubmit",id:"cmd/flow/run/run-resubmit",title:"flow run resubmit",description:"Resubmits a specific flow run for the specified Microsoft Flow",source:"@site/docs/cmd/flow/run/run-resubmit.md",sourceDirName:"cmd/flow/run",slug:"/cmd/flow/run/run-resubmit",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-resubmit",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/flow/run/run-resubmit.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"flow run list",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-list"},next:{title:"Power Platform (pp)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/pp"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flow-run-resubmit"},"flow run resubmit"),(0,o.kt)("p",null,"Resubmits a specific flow run for the specified Microsoft Flow"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run resubmit [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: The name of the run to resubmit"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-f, --flowName <flowName>"),"\n: The name of the flow to resubmit the run for"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-e, --environmentName <environmentName>"),"\n: The name of the environment where the Flow is located"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,o.kt)("p",null,"If the environment with the name you specified doesn't exist, you will get the ",(0,o.kt)("inlineCode",{parentName:"p"},"Access to the environment 'xyz' is denied.")," error."),(0,o.kt)("p",null,"If the Microsoft Flow with the name you specified doesn't exist, you will get the ",(0,o.kt)("inlineCode",{parentName:"p"},"The caller with object id 'abc' does not have permission for connection 'xyz' under Api 'shared_logicflows'.")," error."),(0,o.kt)("p",null,"If the run with the name you specified doesn't exist, you will get the ",(0,o.kt)("inlineCode",{parentName:"p"},"The workflow 'xyz' run 'abc' could not be found.")," error."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Resubmits a specific flow run for the specified Microsoft Flow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run resubmit --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --flowName 5923cb07-ce1a-4a5c-ab81-257ce820109a --name 08586653536760200319026785874CU62\n")),(0,o.kt)("p",null,"Resubmits a specific flow run for the specified Microsoft Flow without prompting for confirmation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run resubmit --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --flowName 5923cb07-ce1a-4a5c-ab81-257ce820109a --name 08586653536760200319026785874CU62 --confirm\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}p.isMDXComponent=!0}}]);