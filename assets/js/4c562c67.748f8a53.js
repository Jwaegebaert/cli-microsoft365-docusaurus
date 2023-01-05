"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=i.createContext({}),l=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(a.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(a,".").concat(d)]||u[d]||m[d]||s;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:o,r[1]=c;for(var l=2;l<s;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const s={},r="spo site hubsite disconnect",c={unversionedId:"cmd/spo/site/site-hubsite-disconnect",id:"cmd/spo/site/site-hubsite-disconnect",title:"spo site hubsite disconnect",description:"Disconnects the specified site collection from its hub site",source:"@site/docs/cmd/spo/site/site-hubsite-disconnect.md",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-hubsite-disconnect",permalink:"/cmd/spo/site/site-hubsite-disconnect",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-hubsite-disconnect.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo site hubsite connect",permalink:"/cmd/spo/site/site-hubsite-connect"},next:{title:"spo site hubsite theme sync",permalink:"/cmd/spo/site/site-hubsite-theme-sync"}},a={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-site-hubsite-disconnect"},"spo site hubsite disconnect"),(0,o.kt)("p",null,"Disconnects the specified site collection from its hub site"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site hubsite disconnect [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --siteUrl <siteUrl>"),"\n: URL of the site collection to disconnect from its hub site"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Disconnect a specific site collection from its hub site. Will prompt for confirmation before disconnecting from the hub site."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site hubsite disconnect --siteUrl https://contoso.sharepoint.com/sites/sales\n")),(0,o.kt)("p",null,"Disconnect a specific site collection from its hub site without prompting for confirmation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site hubsite disconnect --siteUrl https://contoso.sharepoint.com/sites/sales --confirm\n")),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SharePoint hub sites new in Microsoft 365: ",(0,o.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"},"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"))))}u.isMDXComponent=!0}}]);