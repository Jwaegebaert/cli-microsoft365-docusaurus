"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:o,s[1]=p;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},s="spo get",p={unversionedId:"cmd/spo/spo-get",id:"cmd/spo/spo-get",title:"spo get",description:"Gets the context URL for the root SharePoint site collection and SharePoint tenant admin site",source:"@site/docs/cmd/spo/spo-get.md",sourceDirName:"cmd/spo",slug:"/cmd/spo/spo-get",permalink:"/cmd/spo/spo-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/spo-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo sitescript set",permalink:"/cmd/spo/sitescript/sitescript-set"},next:{title:"spo search",permalink:"/cmd/spo/spo-search"}},c={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],l={toc:i};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-get"},"spo get"),(0,o.kt)("p",null,"Gets the context URL for the root SharePoint site collection and SharePoint tenant admin site"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo get [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"CLI for Microsoft 365 automatically discovers the URL of the root SharePoint site collection/SharePoint tenant admin site (whichever is needed to run the particular command). Using this command you can see which URLs the CLI has discovered."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get the context URL for the root SharePoint site collection and SharePoint tenant admin site"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo get --output json\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n{\n  "SpoUrl": "https://contoso.sharepoint.com"\n}\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\nSpoUrl: https://contoso.sharepoint.com\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nSpoUrl\nhttps://contoso.sharepoint.com\n```\n")))}d.isMDXComponent=!0}}]);