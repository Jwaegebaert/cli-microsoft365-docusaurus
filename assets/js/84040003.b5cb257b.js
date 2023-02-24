"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[28238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},i="spo navigation node set",s={unversionedId:"cmd/spo/navigation/navigation-node-set",id:"cmd/spo/navigation/navigation-node-set",title:"spo navigation node set",description:"Updates a SharePoint navigation node",source:"@site/docs/cmd/spo/navigation/navigation-node-set.md",sourceDirName:"cmd/spo/navigation",slug:"/cmd/spo/navigation/navigation-node-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/navigation/navigation-node-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/navigation/navigation-node-set.md",tags:[],version:"current",lastUpdatedAt:1675418310,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo navigation node remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/navigation/navigation-node-remove"},next:{title:"spo orgassetslibrary add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/orgassetslibrary/orgassetslibrary-add"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-navigation-node-set"},"spo navigation node set"),(0,o.kt)("p",null,"Updates a SharePoint navigation node"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo navigation node set [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: Absolute URL of the site."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--id <id>"),"\n: Id of the navigation node."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--title [title]"),"\n: New title of the navigation node."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--url [url]"),"\n: New URL of the navigation node."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--audienceIds [audienceIds]"),"\n: Comma separated list of group IDs that will be used for audience targeting. Speficy an empty string ",(0,o.kt)("inlineCode",{parentName:"p"},'""')," to clear this value. The limit is 10 ids per navigation node."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--isExternal [isExternal]"),"\n: Whether the navigation node points to an external URL. Valid values: ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"To enable/disable audience targeting for the navigation bar, use the ",(0,o.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/spo/web/web-set"},(0,o.kt)("inlineCode",{parentName:"a"},"spo web set"))," command."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Updates the title of a navigation node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo navigation node set --webUrl https://contoso.sharepoint.com/sites/marketing --id 2209 --title "Pictures"\n')),(0,o.kt)("p",null,"Updates the URL of a navigation node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo navigation node set --webUrl https://contoso.sharepoint.com/sites/marketing --id 2209 --url "https://www.microsoft.com" --isExternal true\n')),(0,o.kt)("p",null,"Updates audience targeting of a navigation node with 3 groups"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo navigation node set --webUrl https://contoso.sharepoint.com/sites/marketing --id 2209 --audienceIds "61f78c73-f71a-471e-a3b9-15daa936e200,9524e6b4-e663-44fe-b179-210c963e37e7,c42b8756-494d-4141-a575-45f01320e26a"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);