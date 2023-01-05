"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const o={},i="spo site hubsite theme sync",a={unversionedId:"cmd/spo/site/site-hubsite-theme-sync",id:"cmd/spo/site/site-hubsite-theme-sync",title:"spo site hubsite theme sync",description:"Applies any theme updates from the hub site the site is connected to.",source:"@site/docs/cmd/spo/site/site-hubsite-theme-sync.md",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-hubsite-theme-sync",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-hubsite-theme-sync",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-hubsite-theme-sync.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo site hubsite disconnect",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-hubsite-disconnect"},next:{title:"spo site inplacerecordsmanagement set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-inplacerecordsmanagement-set"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"spo-site-hubsite-theme-sync"},"spo site hubsite theme sync"),(0,s.kt)("p",null,"Applies any theme updates from the hub site the site is connected to."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site hubsite theme sync [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site to apply theme updates from the hub site to."),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Applies any theme updates from the hub site to a specific site"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site hubsite theme sync --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,s.kt)("h2",{id:"more-information"},"More information"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"SharePoint hub sites new in Microsoft 365: ",(0,s.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"},"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"))))}u.isMDXComponent=!0}}]);