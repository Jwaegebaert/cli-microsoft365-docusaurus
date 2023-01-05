"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61682],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(i),u=n,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||s;return i?a.createElement(m,r(r({ref:t},d),{},{components:i})):a.createElement(m,r({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,r=new Array(s);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,r[1]=o;for(var l=2;l<s;l++)r[l]=i[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},14046:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=i(87462),n=(i(67294),i(3905));const s={},r="aad siteclassification get",o={unversionedId:"cmd/aad/siteclassification/siteclassification-get",id:"cmd/aad/siteclassification/siteclassification-get",title:"aad siteclassification get",description:"Gets site classification configuration",source:"@site/docs/cmd/aad/siteclassification/siteclassification-get.md",sourceDirName:"cmd/aad/siteclassification",slug:"/cmd/aad/siteclassification/siteclassification-get",permalink:"/cmd/aad/siteclassification/siteclassification-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/siteclassification/siteclassification-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad siteclassification enable",permalink:"/cmd/aad/siteclassification/siteclassification-enable"},next:{title:"aad siteclassification set",permalink:"/cmd/aad/siteclassification/siteclassification-set"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],d={toc:l};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-siteclassification-get"},"aad siteclassification get"),(0,n.kt)("p",null,"Gets site classification configuration"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad siteclassification get [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Get information about the Microsoft 365 Tenant site classification"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad siteclassification get\n")),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'SharePoint "modern" sites classification: ',(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-site-classification"},"https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-site-classification"))))}p.isMDXComponent=!0}}]);