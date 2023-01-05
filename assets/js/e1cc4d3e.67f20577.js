"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),s=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(a.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,u=d["".concat(a,".").concat(f)]||d[f]||m[f]||i;return n?o.createElement(u,l(l({ref:t},c),{},{components:n})):o.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={},l="spo roledefinition remove",p={unversionedId:"cmd/spo/roledefinition/roledefinition-remove",id:"cmd/spo/roledefinition/roledefinition-remove",title:"spo roledefinition remove",description:"Removes the role definition from the specified site",source:"@site/docs/cmd/spo/roledefinition/roledefinition-remove.md",sourceDirName:"cmd/spo/roledefinition",slug:"/cmd/spo/roledefinition/roledefinition-remove",permalink:"/cmd/spo/roledefinition/roledefinition-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/roledefinition/roledefinition-remove.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo roledefinition list",permalink:"/cmd/spo/roledefinition/roledefinition-list"},next:{title:"spo serviceprincipal grant add",permalink:"/cmd/spo/serviceprincipal/serviceprincipal-grant-add"}},a={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-roledefinition-remove"},"spo roledefinition remove"),(0,r.kt)("p",null,"Removes the role definition from the specified site"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo roledefinition remove [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site from which role should be removed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: ID of the role definition to remove."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming removing the role definition."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Remove the role definition from the given site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo roledefinition remove --webUrl https://contoso.sharepoint.com/sites/project-x --id 1\n")),(0,r.kt)("p",null,"Remove the role definition from the given site and don't prompt for confirmation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo roledefinition remove --webUrl https://contoso.sharepoint.com/sites/project-x --id 1 --confirm\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);