"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5467],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function m(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?m(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},m=Object.keys(e);for(r=0;r<m.length;r++)o=m[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(r=0;r<m.length;r++)o=m[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,m=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(o),d=n,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||m;return o?r.createElement(h,a(a({ref:t},l),{},{components:o})):r.createElement(h,a({ref:t},l))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var m=o.length,a=new Array(m);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,a[1]=i;for(var p=2;p<m;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},53239:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>m,metadata:()=>i,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const m={},a="spo theme remove",i={unversionedId:"cmd/spo/theme/theme-remove",id:"cmd/spo/theme/theme-remove",title:"spo theme remove",description:"Removes existing theme",source:"@site/docs/cmd/spo/theme/theme-remove.md",sourceDirName:"cmd/spo/theme",slug:"/cmd/spo/theme/theme-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/theme/theme-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/theme/theme-remove.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo theme list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/theme/theme-list"},next:{title:"spo theme set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/theme/theme-set"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],l={toc:p};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-theme-remove"},"spo theme remove"),(0,n.kt)("p",null,"Removes existing theme"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo theme remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: Name of the theme to remove"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Do not prompt for confirmation before removing theme"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Remove theme. Will prompt for confirmation before removing the theme"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo theme remove --name Contoso-Blue\n")),(0,n.kt)("p",null,"Remove theme without prompting for confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo theme remove --name Contoso-Blue --confirm\n")),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SharePoint site theming: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview"},"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview"))))}c.isMDXComponent=!0}}]);