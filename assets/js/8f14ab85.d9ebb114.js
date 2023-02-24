"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[73207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?i.createElement(g,s(s({ref:t},d),{},{components:n})):i.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={},s="spo sitedesign get",a={unversionedId:"cmd/spo/sitedesign/sitedesign-get",id:"cmd/spo/sitedesign/sitedesign-get",title:"spo sitedesign get",description:"Gets information about the specified site design",source:"@site/docs/cmd/spo/sitedesign/sitedesign-get.md",sourceDirName:"cmd/spo/sitedesign",slug:"/cmd/spo/sitedesign/sitedesign-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/sitedesign/sitedesign-get.md",tags:[],version:"current",lastUpdatedAt:1667566643,formattedLastUpdatedAt:"Nov 4, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo sitedesign apply",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-apply"},next:{title:"spo sitedesign list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-list"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-sitedesign-get"},"spo sitedesign get"),(0,r.kt)("p",null,"Gets information about the specified site design"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitedesign get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: Site design ID. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--title [title]"),"\n: Site design title. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," but not both."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"If the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," doesn't refer to an existing site design, you will get a ",(0,r.kt)("inlineCode",{parentName:"p"},"File not found")," error."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get information about the site design with ID ",(0,r.kt)("em",{parentName:"p"},"2c1ba4c4-cd9b-4417-832f-92a34bc34b2a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitedesign get --id 2c1ba4c4-cd9b-4417-832f-92a34bc34b2a\n")),(0,r.kt)("p",null,"Get information about the site design with title ",(0,r.kt)("em",{parentName:"p"},"Contoso Site Design")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo sitedesign get --title "Contoso Site Design"\n')),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SharePoint site design and site script overview: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"},"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"))))}m.isMDXComponent=!0}}]);