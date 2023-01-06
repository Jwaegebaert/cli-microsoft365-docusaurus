"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=s.createContext({}),p=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(n),m=i,g=l["".concat(c,".").concat(m)]||l[m]||d[m]||r;return n?s.createElement(g,o(o({ref:t},u),{},{components:n})):s.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<r;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var s=n(87462),i=(n(67294),n(3905));const r={},o="spo sitedesign run status get",a={unversionedId:"cmd/spo/sitedesign/sitedesign-run-status-get",id:"cmd/spo/sitedesign/sitedesign-run-status-get",title:"spo sitedesign run status get",description:"Gets information about the site scripts executed for the specified site design",source:"@site/docs/cmd/spo/sitedesign/sitedesign-run-status-get.md",sourceDirName:"cmd/spo/sitedesign",slug:"/cmd/spo/sitedesign/sitedesign-run-status-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-run-status-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/sitedesign/sitedesign-run-status-get.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo sitedesign run list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-run-list"},next:{title:"spo sitedesign set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-set"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-sitedesign-run-status-get"},"spo sitedesign run status get"),(0,i.kt)("p",null,"Gets information about the site scripts executed for the specified site design"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitedesign run status get [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: The URL of the site for which to get the information"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --runId <runId>"),"\n: ID of the site design applied to the site as retrieved using ",(0,i.kt)("inlineCode",{parentName:"p"},"spo sitedesign run list")),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"For text output mode, displays the name of the action, site script and the outcome of the action. For JSON output mode, displays all available information."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"List information about site scripts executed for the specified site design"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitedesign run status get --webUrl https://contoso.sharepoint.com/sites/team-a --runId b4411557-308b-4545-a3c4-55297d5cd8c8\n")),(0,i.kt)("h2",{id:"more-information"},"More information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SharePoint site design and site script overview: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"},"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"))))}l.isMDXComponent=!0}}]);