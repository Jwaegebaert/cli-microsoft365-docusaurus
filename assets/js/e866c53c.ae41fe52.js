"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=i.createContext({}),c=function(e){var t=i.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(a.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,f=m["".concat(a,".").concat(u)]||m[u]||d[u]||o;return r?i.createElement(f,s(s({ref:t},l),{},{components:r})):i.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[m]="string"==typeof e?e:n,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},12411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const o={},s="spo sitescript remove",p={unversionedId:"cmd/spo/sitescript/sitescript-remove",id:"cmd/spo/sitescript/sitescript-remove",title:"spo sitescript remove",description:"Removes the specified site script",source:"@site/docs/cmd/spo/sitescript/sitescript-remove.md",sourceDirName:"cmd/spo/sitescript",slug:"/cmd/spo/sitescript/sitescript-remove",permalink:"/cmd/spo/sitescript/sitescript-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/sitescript/sitescript-remove.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo sitescript list",permalink:"/cmd/spo/sitescript/sitescript-list"},next:{title:"spo sitescript set",permalink:"/cmd/spo/sitescript/sitescript-set"}},a={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],l={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-sitescript-remove"},"spo sitescript remove"),(0,n.kt)("p",null,"Removes the specified site script"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitescript remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: Site script ID"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming removing the site script"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"If the specified ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," doesn't refer to an existing site script, you will get a ",(0,n.kt)("inlineCode",{parentName:"p"},"File not found")," error."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Remove site script with ID ",(0,n.kt)("em",{parentName:"p"},"2c1ba4c4-cd9b-4417-832f-92a34bc34b2a"),". Will prompt for confirmation before removing the script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitescript remove --id 2c1ba4c4-cd9b-4417-832f-92a34bc34b2a\n")),(0,n.kt)("p",null,"Remove site script with ID ",(0,n.kt)("em",{parentName:"p"},"2c1ba4c4-cd9b-4417-832f-92a34bc34b2a")," without prompting for confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitescript remove --id 2c1ba4c4-cd9b-4417-832f-92a34bc34b2a --confirm\n")),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SharePoint site design and site script overview: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"},"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"))))}m.isMDXComponent=!0}}]);