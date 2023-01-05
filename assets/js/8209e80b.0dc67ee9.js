"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11020],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>d});var n=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var p=n.createContext({}),m=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=m(o),u=s,d=c["".concat(p,".").concat(u)]||c[u]||h[u]||r;return o?n.createElement(d,i(i({ref:t},l),{},{components:o})):n.createElement(d,i({ref:t},l))}));function d(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=o.length,i=new Array(r);i[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:s,i[1]=a;for(var m=2;m<r;m++)i[m]=o[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},30342:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>m});var n=o(87462),s=(o(67294),o(3905));const r={},i="spo homesite set",a={unversionedId:"cmd/spo/homesite/homesite-set",id:"cmd/spo/homesite/homesite-set",title:"spo homesite set",description:"Sets the specified site as the Home Site",source:"@site/docs/cmd/spo/homesite/homesite-set.md",sourceDirName:"cmd/spo/homesite",slug:"/cmd/spo/homesite/homesite-set",permalink:"/cmd/spo/homesite/homesite-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/homesite/homesite-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo homesite remove",permalink:"/cmd/spo/homesite/homesite-remove"},next:{title:"spo hubsite connect",permalink:"/cmd/spo/hubsite/hubsite-connect"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],l={toc:m};function c(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"spo-homesite-set"},"spo homesite set"),(0,s.kt)("p",null,"Sets the specified site as the Home Site"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo homesite set [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-u, --siteUrl <siteUrl>"),"\n: The URL of the site to set as Home Site"),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Set the specified site as the Home Site"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo homesite set --siteUrl https://contoso.sharepoint.com/sites/comms\n")),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("p",null,'=== "JSON"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```json\n"The Home site has been set to https://contoso.sharepoint.com. It may take some time for the change to apply. Check aka.ms/homesites for details."\n```\n')),(0,s.kt)("p",null,'=== "Text"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```text\nThe Home site has been set to https://contoso.sharepoint.com. It may take some time for the change to apply. Check aka.ms/homesites for details.\n```\n")),(0,s.kt)("p",null,'=== "CSV"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```csv\nThe Home site has been set to https://contoso.sharepoint.com. It may take some time for the change to apply. Check aka.ms/homesites for details.\n```\n")),(0,s.kt)("h2",{id:"more-information"},"More information"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"SharePoint home sites: a landing for your organization on the intelligent intranet: ",(0,s.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/Microsoft-SharePoint-Blog/SharePoint-home-sites-a-landing-for-your-organization-on-the/ba-p/621933"},"https://techcommunity.microsoft.com/t5/Microsoft-SharePoint-Blog/SharePoint-home-sites-a-landing-for-your-organization-on-the/ba-p/621933"))))}c.isMDXComponent=!0}}]);