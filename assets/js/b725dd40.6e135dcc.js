"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[66088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return n?r.createElement(f,p(p({ref:t},i),{},{components:n})):r.createElement(f,p({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,p[1]=l;for(var d=2;d<o;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26054:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},p="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",{parentName:"p"},"options"),", ",(0,a.kt)("code",{parentName:"p"},"examples"),", ",(0,a.kt)("code",{parentName:"p"},"remarks"),", ",(0,a.kt)("code",{parentName:"p"},"response"),", ",(0,a.kt)("code",{parentName:"p"},"full"),". Default is ",(0,a.kt)("code",{parentName:"p"},"full"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--query [query]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,a.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output type. ",(0,a.kt)("code",{parentName:"p"},"json"),", ",(0,a.kt)("code",{parentName:"p"},"text"),", ",(0,a.kt)("code",{parentName:"p"},"csv"),", ",(0,a.kt)("code",{parentName:"p"},"md"),". Default ",(0,a.kt)("code",{parentName:"p"},"json"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--verbose"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--debug"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}l.isMDXComponent=!0},71762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905)),o=n(26054);const p={},l="flow run cancel",c={unversionedId:"cmd/flow/run/run-cancel",id:"cmd/flow/run/run-cancel",title:"flow run cancel",description:"Cancels a specific run for the specified flow",source:"@site/docs/cmd/flow/run/run-cancel.mdx",sourceDirName:"cmd/flow/run",slug:"/cmd/flow/run/run-cancel",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-cancel",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/flow/run/run-cancel.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"flow owner remove",permalink:"/cli-microsoft365-docusaurus/cmd/flow/owner/owner-remove"},next:{title:"flow run get",permalink:"/cli-microsoft365-docusaurus/cmd/flow/run/run-get"}},d={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:i},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flow-run-cancel"},"flow run cancel"),(0,a.kt)("p",null,"Cancels a specific run for the specified flow"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run cancel [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-n, --name <name>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The name of the run to cancel")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-f, --flowName <flowName>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The name of the flow to cancel the run for")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-e, --environmentName <environmentName>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The name of the environment where the flow is located"))),(0,a.kt)(o.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This command is based on an API that is currently in preview and is subject to change once the API reached general availability.")),(0,a.kt)("p",null,"If the environment with the name you specified doesn't exist, you will get the ",(0,a.kt)("inlineCode",{parentName:"p"},"Access to the environment 'xyz' is denied.")," error."),(0,a.kt)("p",null,"If the flow with the name you specified doesn't exist, you will get the ",(0,a.kt)("inlineCode",{parentName:"p"},"The caller with object id 'abc' does not have permission for connection 'xyz' under Api 'shared_logicflows'.")," error."),(0,a.kt)("p",null,"If the run with the name you specified doesn't exist, you will get the ",(0,a.kt)("inlineCode",{parentName:"p"},"The workflow 'xyz' run 'abc' could not be found.")," error."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Cancel the given run of the specified flow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow run cancel --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --flowName 5923cb07-ce1a-4a5c-ab81-257ce820109a --name 08586653536760200319026785874CU62\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);