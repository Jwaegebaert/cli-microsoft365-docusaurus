"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[15749],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>k});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(o),d=r,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return o?n.createElement(k,l(l({ref:t},u),{},{components:o})):n.createElement(k,l({ref:t},u))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,l=new Array(s);l[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[c]="string"==typeof e?e:r,l[1]=a;for(var p=2;p<s;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},37884:(e,t,o)=>{o.d(t,{ZP:()=>a});var n=o(87462),r=(o(67294),o(3905));const s={toc:[]},l="wrapper";function a(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}a.isMDXComponent=!0},90310:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=o(87462),r=(o(67294),o(3905)),s=o(37884);const l={},a="spo orgnewssite remove",i={unversionedId:"cmd/spo/orgnewssite/orgnewssite-remove",id:"cmd/spo/orgnewssite/orgnewssite-remove",title:"spo orgnewssite remove",description:"Removes a site from the list of organizational news sites",source:"@site/docs/cmd/spo/orgnewssite/orgnewssite-remove.mdx",sourceDirName:"cmd/spo/orgnewssite",slug:"/cmd/spo/orgnewssite/orgnewssite-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/orgnewssite/orgnewssite-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/orgnewssite/orgnewssite-remove.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo orgnewssite list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/orgnewssite/orgnewssite-list"},next:{title:"spo orgnewssite set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/orgnewssite/orgnewssite-set"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:u},m="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-orgnewssite-remove"},"spo orgnewssite remove"),(0,r.kt)("p",null,"Removes a site from the list of organizational news sites"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo orgnewssite remove [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-u, --url <url>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Absolute URL of the site to remove.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--confirm"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Don't prompt for confirmation."))),(0,r.kt)(s.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To use this command you have to have permissions to access the tenant admin site.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Remove a site from the list of organizational news"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo orgnewssite remove --url https://contoso.sharepoint.com/sites/site1\n")),(0,r.kt)("p",null,"Remove a site from the list of organizational news sites, without prompting for confirmation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo orgnewssite remove --url https://contoso.sharepoint.com/sites/site1 --confirm\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);