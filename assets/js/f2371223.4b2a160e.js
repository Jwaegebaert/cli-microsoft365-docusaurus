"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[81068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const o={},a="spo orgnewssite set",i={unversionedId:"cmd/spo/orgnewssite/orgnewssite-set",id:"cmd/spo/orgnewssite/orgnewssite-set",title:"spo orgnewssite set",description:"Marks site as an organizational news site",source:"@site/docs/cmd/spo/orgnewssite/orgnewssite-set.md",sourceDirName:"cmd/spo/orgnewssite",slug:"/cmd/spo/orgnewssite/orgnewssite-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/orgnewssite/orgnewssite-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/orgnewssite/orgnewssite-set.md",tags:[],version:"current",lastUpdatedAt:1671253082,formattedLastUpdatedAt:"Dec 17, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo orgnewssite remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/orgnewssite/orgnewssite-remove"},next:{title:"spo page add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-add"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"spo-orgnewssite-set"},"spo orgnewssite set"),(0,s.kt)("p",null,"Marks site as an organizational news site"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo orgnewssite set [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-u, --url <url>"),"\n: The URL of the site to mark as an organizational news site."),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"Using the ",(0,s.kt)("inlineCode",{parentName:"p"},"-u, --url")," option you can specify which site to add to the list of organizational news sites."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Set a site as an organizational news site"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo orgnewssite set --url https://contoso.sharepoint.com/sites/site1\n")),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("p",null,"The command won't return a response on success."))}m.isMDXComponent=!0}}]);