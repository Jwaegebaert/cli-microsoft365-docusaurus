"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[62320],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),i=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(o),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return o?r.createElement(f,p(p({ref:t},c),{},{components:o})):r.createElement(f,p({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,p=new Array(a);p[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,p[1]=s;for(var i=2;i<a;i++)p[i]=o[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9965:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=o(87462),n=(o(67294),o(3905));const a={},p="spo page remove",s={unversionedId:"cmd/spo/page/page-remove",id:"cmd/spo/page/page-remove",title:"spo page remove",description:"Removes a modern page",source:"@site/docs/cmd/spo/page/page-remove.md",sourceDirName:"cmd/spo/page",slug:"/cmd/spo/page/page-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/page/page-remove.md",tags:[],version:"current",lastUpdatedAt:1671253082,formattedLastUpdatedAt:"Dec 17, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo page list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-list"},next:{title:"spo page section add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-section-add"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:i},m="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-page-remove"},"spo page remove"),(0,n.kt)("p",null,"Removes a modern page"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: Name of the page to remove."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site from which the page should be removed."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Do not prompt for confirmation before removing the page."),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"If you try to remove a page with that does not exist, you will get a ",(0,n.kt)("inlineCode",{parentName:"p"},"The file does not exist")," error."),(0,n.kt)("p",null,"If you set the ",(0,n.kt)("inlineCode",{parentName:"p"},"--confirm")," flag, you will not be prompted for confirmation before the page is actually removed."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Remove a modern page"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page remove --name page.aspx --webUrl https://contoso.sharepoint.com/sites/a-team\n")),(0,n.kt)("p",null,"Remove a modern page without a confirmation prompt"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page remove --name page.aspx --webUrl https://contoso.sharepoint.com/sites/a-team --confirm\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);