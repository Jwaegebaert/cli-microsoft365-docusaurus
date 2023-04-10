"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[28718],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>u});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(i),g=r,u=d["".concat(p,".").concat(g)]||d[g]||m[g]||s;return i?n.createElement(u,a(a({ref:t},c),{},{components:i})):n.createElement(u,a({ref:t},c))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,a=new Array(s);a[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var l=2;l<s;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},57998:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=i(87462),r=(i(67294),i(3905));const s={},a="spo sitedesign rights grant",o={unversionedId:"cmd/spo/sitedesign/sitedesign-rights-grant",id:"cmd/spo/sitedesign/sitedesign-rights-grant",title:"spo sitedesign rights grant",description:"Grants access to a site design for one or more principals",source:"@site/docs/cmd/spo/sitedesign/sitedesign-rights-grant.md",sourceDirName:"cmd/spo/sitedesign",slug:"/cmd/spo/sitedesign/sitedesign-rights-grant",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-rights-grant",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/sitedesign/sitedesign-rights-grant.md",tags:[],version:"current",lastUpdatedAt:1667081579,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo sitedesign remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-remove"},next:{title:"spo sitedesign rights list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-rights-list"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-sitedesign-rights-grant"},"spo sitedesign rights grant"),(0,r.kt)("p",null,"Grants access to a site design for one or more principals"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitedesign rights grant [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --siteDesignId <siteDesignId>"),"\n: The ID of the site design to grant rights on"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-p, --principals <principals>"),"\n: Comma-separated list of principals to grant view rights. Principals can be users or mail-enabled security groups in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"alias")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"alias@<domain name>.com")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-r, --rights <rights>"),"\n: Rights to grant to principals. Available values ",(0,r.kt)("inlineCode",{parentName:"p"},"View")),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Grant user with alias ",(0,r.kt)("em",{parentName:"p"},"PattiF")," view permission to the specified site design"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitedesign rights grant --siteDesignId 9b142c22-037f-4a7f-9017-e9d8c0e34b98 --principals PattiF --rights View\n")),(0,r.kt)("p",null,"Grant users with aliases ",(0,r.kt)("em",{parentName:"p"},"PattiF")," and ",(0,r.kt)("em",{parentName:"p"},"AdeleV")," view permission to the specified site design"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo sitedesign rights grant --siteDesignId 9b142c22-037f-4a7f-9017-e9d8c0e34b98 --principals "PattiF,AdeleV" --rights View\n')),(0,r.kt)("p",null,"Grant user with email ",(0,r.kt)("a",{parentName:"p",href:"mailto:_PattiF@contoso.com_"},"_PattiF@contoso.com_")," view permission to the specified site design"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitedesign rights grant --siteDesignId 9b142c22-037f-4a7f-9017-e9d8c0e34b98 --principals PattiF@contoso.com --rights View\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SharePoint site design and site script overview: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"},"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"))))}m.isMDXComponent=!0}}]);