"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,d=u["".concat(a,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={},c="cli config get",l={unversionedId:"cmd/cli/config/config-get",id:"cmd/cli/config/config-get",title:"cli config get",description:"Gets value of a CLI for Microsoft 365 configuration option",source:"@site/docs/cmd/cli/config/config-get.md",sourceDirName:"cmd/cli/config",slug:"/cmd/cli/config/config-get",permalink:"/cli-microsoft365-docusaurus/cmd/cli/config/config-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/cli/config/config-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"cli completion sh update",permalink:"/cli-microsoft365-docusaurus/cmd/cli/completion/completion-sh-update"},next:{title:"cli config reset",permalink:"/cli-microsoft365-docusaurus/cmd/cli/config/config-reset"}},a={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli-config-get"},"cli config get"),(0,o.kt)("p",null,"Gets value of a CLI for Microsoft 365 configuration option"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 cli config get [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-k, --key <key>"),"\n: Config key to get the value of"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("p",null,'--8<-- "docs/_clisettings.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If the specified setting has not been configured, CLI will return no output."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get the output configured for CLI for Microsoft 365"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 cli config get --key output\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"When retrieving the ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," key, responses will look like this:"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n"json"\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\njson\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\njson\n```\n")),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli-microsoft365-docusaurus/user-guide/configuring-cli"},"Configuring the CLI for Microsoft 365"))))}u.isMDXComponent=!0}}]);