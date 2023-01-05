"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||c;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var i=2;i<c;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const c={},a="pa connector export",p={unversionedId:"cmd/pa/connector/connector-export",id:"cmd/pa/connector/connector-export",title:"pa connector export",description:"Exports the specified Power Automate or Power Apps custom connector",source:"@site/docs/cmd/pa/connector/connector-export.md",sourceDirName:"cmd/pa/connector",slug:"/cmd/pa/connector/connector-export",permalink:"/cmd/pa/connector/connector-export",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pa/connector/connector-export.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pa app remove",permalink:"/cmd/pa/app/app-remove"},next:{title:"pa connector list",permalink:"/cmd/pa/connector/connector-list"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Alias",id:"alias",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],s={toc:i};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pa-connector-export"},"pa connector export"),(0,o.kt)("p",null,"Exports the specified Power Automate or Power Apps custom connector"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa connector export [options]\n")),(0,o.kt)("h2",{id:"alias"},"Alias"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 flow connector export\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-e, --environmentName <environmentName>"),"\n: The name of the environment where the custom connector to export is located"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-c, --connector <connector>"),"\n: The name of the custom connector to export"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--outputFolder [outputFolder]"),"\n: Path where the folder with connector's files should be saved. If not specified, will create the connector's folder in the current folder."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,o.kt)("p",null,"If no output folder has been specified, the ",(0,o.kt)("inlineCode",{parentName:"p"},"pa connector export")," command will create a folder named after the connector in the current folder. If the output folder has been specified, the folder named after the connector will be created in that folder."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Export the specified custom connector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa connector export --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --connector shared_connector-201-5f20a1f2d8d6777a75-5fa602f410652f4dfa\n")),(0,o.kt)("p",null,"Export the specified custom connector to the specific directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa connector export --environmentName Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --connector shared_connector-201-5f20a1f2d8d6777a75-5fa602f410652f4dfa --outputFolder connector\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);