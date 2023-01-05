"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a="spo cdn origin remove",l={unversionedId:"cmd/spo/cdn/cdn-origin-remove",id:"cmd/spo/cdn/cdn-origin-remove",title:"spo cdn origin remove",description:"Removes CDN origin for the current SharePoint Online tenant",source:"@site/docs/cmd/spo/cdn/cdn-origin-remove.md",sourceDirName:"cmd/spo/cdn",slug:"/cmd/spo/cdn/cdn-origin-remove",permalink:"/cmd/spo/cdn/cdn-origin-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/cdn/cdn-origin-remove.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo cdn origin list",permalink:"/cmd/spo/cdn/cdn-origin-list"},next:{title:"spo cdn policy list",permalink:"/cmd/spo/cdn/cdn-policy-list"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-cdn-origin-remove"},"spo cdn origin remove"),(0,o.kt)("p",null,"Removes CDN origin for the current SharePoint Online tenant"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn origin remove [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-t, --type [type]"),"\n: Type of CDN to manage. ",(0,o.kt)("inlineCode",{parentName:"p"},"Public,Private"),". Default ",(0,o.kt)("inlineCode",{parentName:"p"},"Public")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-r, --origin <origin>"),"\n: Origin to remove from the current CDN configuration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming removal of a tenant property"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-t, --type")," option you can choose whether you want to manage the settings of the Public (default) or Private CDN. If you don't use the option, the command will use the Public CDN."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Remove ",(0,o.kt)("em",{parentName:"p"},"*/CDN")," from the list of origins of the Public CDN"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo cdn origin remove --type Public --origin */CDN\n")),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"General availability of Microsoft 365 CDN: ",(0,o.kt)("a",{parentName:"li",href:"https://dev.office.com/blogs/general-availability-of-office-365-cdn"},"https://dev.office.com/blogs/general-availability-of-office-365-cdn"))))}m.isMDXComponent=!0}}]);