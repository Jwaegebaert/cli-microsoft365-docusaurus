"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[58669],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(o),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return o?r.createElement(f,i(i({ref:t},c),{},{components:o})):r.createElement(f,i({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:n,i[1]=a;for(var p=2;p<s;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},84163:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const s={},i="spo orgnewssite remove",a={unversionedId:"cmd/spo/orgnewssite/orgnewssite-remove",id:"cmd/spo/orgnewssite/orgnewssite-remove",title:"spo orgnewssite remove",description:"Removes a site from the list of organizational news sites",source:"@site/docs/cmd/spo/orgnewssite/orgnewssite-remove.md",sourceDirName:"cmd/spo/orgnewssite",slug:"/cmd/spo/orgnewssite/orgnewssite-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/orgnewssite/orgnewssite-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/orgnewssite/orgnewssite-remove.md",tags:[],version:"current",lastUpdatedAt:1671253082,formattedLastUpdatedAt:"Dec 17, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo orgnewssite list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/orgnewssite/orgnewssite-list"},next:{title:"spo orgnewssite set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/orgnewssite/orgnewssite-set"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-orgnewssite-remove"},"spo orgnewssite remove"),(0,n.kt)("p",null,"Removes a site from the list of organizational news sites"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo orgnewssite remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --url <url>"),"\n: Absolute URL of the site to remove."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation."),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Remove a site from the list of organizational news"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo orgnewssite remove --url https://contoso.sharepoint.com/sites/site1\n")),(0,n.kt)("p",null,"Remove a site from the list of organizational news sites, without prompting for confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo orgnewssite remove --url https://contoso.sharepoint.com/sites/site1 --confirm\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);