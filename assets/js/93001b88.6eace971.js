"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[15363],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(r),h=i,f=u["".concat(p,".").concat(h)]||u[h]||m[h]||n;return r?o.createElement(f,s(s({ref:t},c),{},{components:r})):o.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=h;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<n;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},50266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=r(87462),i=(r(67294),r(3905));const n={},s="spo hubsite rights revoke",a={unversionedId:"cmd/spo/hubsite/hubsite-rights-revoke",id:"cmd/spo/hubsite/hubsite-rights-revoke",title:"spo hubsite rights revoke",description:"Revokes rights to join sites to the specified hub site for one or more principals",source:"@site/docs/cmd/spo/hubsite/hubsite-rights-revoke.md",sourceDirName:"cmd/spo/hubsite",slug:"/cmd/spo/hubsite/hubsite-rights-revoke",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-rights-revoke",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/hubsite/hubsite-rights-revoke.md",tags:[],version:"current",lastUpdatedAt:1677283761,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo hubsite rights grant",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-rights-grant"},next:{title:"spo hubsite set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-set"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-hubsite-rights-revoke"},"spo hubsite rights revoke"),(0,i.kt)("p",null,"Revokes rights to join sites to the specified hub site for one or more principals"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite rights revoke [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-u, --hubSiteUrl <hubSiteUrl>"),"\n: The URL of the hub site to revoke rights on."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-p, --principals <principals>"),"\n: Comma-separated list of principals to revoke join rights. Principals can be users or mail-enabled security groups in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"alias")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"alias@<domain name>.com"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming revoking rights"),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"!!! important\nTo use this command you must be a Global or SharePoint administrator."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Revoke rights to join sites to the hub site with specific URL. from user with specific alias. Will prompt for confirmation before revoking the rights."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite rights revoke --hubSiteUrl https://contoso.sharepoint.com/sites/sales --principals PattiF\n")),(0,i.kt)("p",null,"Revoke rights to join sites to the hub site with specific URL. from user with specific aliases without prompting for confirmation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo hubsite rights revoke --hubSiteUrl https://contoso.sharepoint.com/sites/sales --principals "PattiF,AdeleV" --confirm\n')),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,"The command won't return a response on success."),(0,i.kt)("h2",{id:"more-information"},"More information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SharePoint hub sites new in Microsoft 365: ",(0,i.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"},"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"))))}m.isMDXComponent=!0}}]);