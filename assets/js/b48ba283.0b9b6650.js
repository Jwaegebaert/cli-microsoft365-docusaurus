"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42198],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>g});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(i),u=n,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||s;return i?r.createElement(g,o(o({ref:t},l),{},{components:i})):r.createElement(g,o({ref:t},l))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:n,o[1]=a;for(var c=2;c<s;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},11686:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const s={},o="spo sitedesign rights revoke",a={unversionedId:"cmd/spo/sitedesign/sitedesign-rights-revoke",id:"cmd/spo/sitedesign/sitedesign-rights-revoke",title:"spo sitedesign rights revoke",description:"Revokes access from a site design for one or more principals",source:"@site/docs/cmd/spo/sitedesign/sitedesign-rights-revoke.md",sourceDirName:"cmd/spo/sitedesign",slug:"/cmd/spo/sitedesign/sitedesign-rights-revoke",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-rights-revoke",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/sitedesign/sitedesign-rights-revoke.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo sitedesign rights list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-rights-list"},next:{title:"spo sitedesign run list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-run-list"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],l={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-sitedesign-rights-revoke"},"spo sitedesign rights revoke"),(0,n.kt)("p",null,"Revokes access from a site design for one or more principals"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitedesign rights revoke [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-i, --siteDesignId <siteDesignId>"),"\n: The ID of the site design to revoke rights from"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-p, --principals <principals>"),"\n: Comma-separated list of principals to revoke view rights from. Principals can be users or mail-enabled security groups in the form of ",(0,n.kt)("inlineCode",{parentName:"p"},"alias")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"alias@<domain name>.com")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming removing the site design"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"If the specified id doesn't refer to an existing site design, you will get a ",(0,n.kt)("inlineCode",{parentName:"p"},"File not found")," error."),(0,n.kt)("p",null,"If all principals have rights revoked on the site design, the site design becomes viewable to everyone."),(0,n.kt)("p",null,"If you try to revoke access for a user that doesn't have access granted to the specified site design you will get a ",(0,n.kt)("inlineCode",{parentName:"p"},"The specified user or domain group was not found error"),"."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Revoke access to the site design with ID ",(0,n.kt)("em",{parentName:"p"},"2c1ba4c4-cd9b-4417-832f-92a34bc34b2a")," from user with alias ",(0,n.kt)("em",{parentName:"p"},"PattiF"),". Will prompt for confirmation before revoking the access"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitedesign rights revoke --siteDesignId 2c1ba4c4-cd9b-4417-832f-92a34bc34b2a --principals PattiF\n")),(0,n.kt)("p",null,"Revoke access to the site design with ID ",(0,n.kt)("em",{parentName:"p"},"2c1ba4c4-cd9b-4417-832f-92a34bc34b2a")," from users with aliases ",(0,n.kt)("em",{parentName:"p"},"PattiF")," and ",(0,n.kt)("em",{parentName:"p"},"AdeleV")," without prompting for confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo sitedesign rights revoke --siteDesignId 2c1ba4c4-cd9b-4417-832f-92a34bc34b2a --principals "PattiF,AdeleV" --confirm\n')),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SharePoint site design and site script overview: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"},"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"))))}d.isMDXComponent=!0}}]);