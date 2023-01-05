"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.createContext({}),l=function(e){var t=s.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return s.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(r),h=n,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return r?s.createElement(d,i(i({ref:t},c),{},{components:r})):s.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[m]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}h.displayName="MDXCreateElement"},47514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=r(87462),n=(r(67294),r(3905));const o={},i="spo hubsite rights grant",a={unversionedId:"cmd/spo/hubsite/hubsite-rights-grant",id:"cmd/spo/hubsite/hubsite-rights-grant",title:"spo hubsite rights grant",description:"Grants permissions to join the hub site for one or more principals",source:"@site/docs/cmd/spo/hubsite/hubsite-rights-grant.md",sourceDirName:"cmd/spo/hubsite",slug:"/cmd/spo/hubsite/hubsite-rights-grant",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-rights-grant",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/hubsite/hubsite-rights-grant.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo hubsite register",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-register"},next:{title:"spo hubsite rights revoke",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-rights-revoke"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-hubsite-rights-grant"},"spo hubsite rights grant"),(0,n.kt)("p",null,"Grants permissions to join the hub site for one or more principals"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite rights grant [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --hubSiteUrl <hubSiteUrl>"),"\n: The URL of the hub site to grant rights on"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-p, --principals <principals>"),"\n: Comma-separated list of principals to grant join rights. Principals can be users or mail-enabled security groups in the form of ",(0,n.kt)("inlineCode",{parentName:"p"},"alias")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"alias@<domain name>.com")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-r, --rights <rights>"),"\n: Rights to grant to principals. Available values ",(0,n.kt)("inlineCode",{parentName:"p"},"Join")),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"!!! important\nTo use this command you must be a Global or SharePoint administrator."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Grant user with alias ",(0,n.kt)("em",{parentName:"p"},"PattiF")," permission to join sites to the hub site with URL ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/sales"},"https://contoso.sharepoint.com/sites/sales"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite rights grant --hubSiteUrl https://contoso.sharepoint.com/sites/sales --principals PattiF --rights Join\n")),(0,n.kt)("p",null,"Grant users with aliases ",(0,n.kt)("em",{parentName:"p"},"PattiF")," and ",(0,n.kt)("em",{parentName:"p"},"AdeleV")," permission to join sites to the hub site with URL ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/sales"},"https://contoso.sharepoint.com/sites/sales"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo hubsite rights grant --hubSiteUrl https://contoso.sharepoint.com/sites/sales --principals "PattiF,AdeleV" --rights Join\n')),(0,n.kt)("p",null,"Grant user with email ",(0,n.kt)("a",{parentName:"p",href:"mailto:_PattiF@contoso.com_"},"_PattiF@contoso.com_")," permission to join sites to the hub site with URL ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/sales"},"https://contoso.sharepoint.com/sites/sales"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite rights grant --hubSiteUrl https://contoso.sharepoint.com/sites/sales --principals PattiF@contoso.com --rights Join\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SharePoint hub sites new in Microsoft 365: ",(0,n.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"},"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"))))}m.isMDXComponent=!0}}]);