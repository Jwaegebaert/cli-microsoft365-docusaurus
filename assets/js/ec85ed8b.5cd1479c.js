"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46074],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),u=a,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return t?r.createElement(h,c(c({ref:n},d),{},{components:t})):r.createElement(h,c({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={},c="search externalconnection schema add",i={unversionedId:"cmd/search/externalconnection/externalconnection-schema-add",id:"cmd/search/externalconnection/externalconnection-schema-add",title:"search externalconnection schema add",description:"This command allows the administrator to add a schema to a specific external connection for use in Microsoft Search.",source:"@site/docs/cmd/search/externalconnection/externalconnection-schema-add.md",sourceDirName:"cmd/search/externalconnection",slug:"/cmd/search/externalconnection/externalconnection-schema-add",permalink:"/cli-microsoft365-docusaurus/cmd/search/externalconnection/externalconnection-schema-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/search/externalconnection/externalconnection-schema-add.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"search externalconnection remove",permalink:"/cli-microsoft365-docusaurus/cmd/search/externalconnection/externalconnection-remove"},next:{title:"Skype (skype)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/skype"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"search-externalconnection-schema-add"},"search externalconnection schema add"),(0,a.kt)("p",null,"This command allows the administrator to add a schema to a specific external connection for use in Microsoft Search."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 search externalconnection schema add [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --externalConnectionId  <externalConnectionId>"),"\n: ID of the External Connection."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-s, --schema [schema]"),"\n: The schema object to be added."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Adds a new schema to a specific external connection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 search externalconnection schema add --externalConnectionId \'CliConnectionId\' --schema \'{"baseType":"microsoft.graph.externalItem","properties":[{"name":"ticketTitle","type":"String","isSearchable":"true","isRetrievable":"true","labels":["title"]},{"name":"priority","type":"String","isQueryable":"true","isRetrievable":"true","isSearchable":"false"},{"name":"assignee","type":"String","isRetrievable":"true"}]}\'\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."))}p.isMDXComponent=!0}}]);