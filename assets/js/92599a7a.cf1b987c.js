"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[35102],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?o.createElement(g,s(s({ref:t},i),{},{components:n})):o.createElement(g,s({ref:t},i))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<l;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const l={},s="spo knowledgehub remove",a={unversionedId:"cmd/spo/knowledgehub/knowledgehub-remove",id:"cmd/spo/knowledgehub/knowledgehub-remove",title:"spo knowledgehub remove",description:"Removes the Knowledge Hub Site setting for your tenant",source:"@site/docs/cmd/spo/knowledgehub/knowledgehub-remove.md",sourceDirName:"cmd/spo/knowledgehub",slug:"/cmd/spo/knowledgehub/knowledgehub-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/knowledgehub/knowledgehub-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/knowledgehub/knowledgehub-remove.md",tags:[],version:"current",lastUpdatedAt:1678569617,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo knowledgehub get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/knowledgehub/knowledgehub-get"},next:{title:"spo knowledgehub set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/knowledgehub/knowledgehub-set"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],i={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-knowledgehub-remove"},"spo knowledgehub remove"),(0,r.kt)("p",null,"Removes the Knowledge Hub Site setting for your tenant"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo knowledgehub remove [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Do not prompt for confirmation before removing the Knowledge Hub Site setting for your tenant."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Removes the Knowledge Hub Site setting for your tenant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo knowledgehub remove\n")),(0,r.kt)("p",null,"Removes the Knowledge Hub Site setting for your tenant without confirmation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo knowledgehub remove --confirm\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n"The knowledge hub site setting was removed."\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nThe knowledge hub site setting was removed.\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nThe knowledge hub site setting was removed.\n```\n")),(0,r.kt)("p",null,'=== "Markdown"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```md\nThe knowledge hub site setting was removed.\n```\n")))}d.isMDXComponent=!0}}]);