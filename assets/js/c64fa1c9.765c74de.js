"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=s.createContext({}),d=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return s.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?s.createElement(g,o(o({ref:t},l),{},{components:n})):s.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var d=2;d<r;d++)o[d]=n[d];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(87462),i=(n(67294),n(3905));const r={},o="spo sitedesign task get",a={unversionedId:"cmd/spo/sitedesign/sitedesign-task-get",id:"cmd/spo/sitedesign/sitedesign-task-get",title:"spo sitedesign task get",description:"Gets information about the specified site design scheduled for execution",source:"@site/docs/cmd/spo/sitedesign/sitedesign-task-get.md",sourceDirName:"cmd/spo/sitedesign",slug:"/cmd/spo/sitedesign/sitedesign-task-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-task-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/sitedesign/sitedesign-task-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo sitedesign set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-set"},next:{title:"spo sitedesign task list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-task-list"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],l={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-sitedesign-task-get"},"spo sitedesign task get"),(0,i.kt)("p",null,"Gets information about the specified site design scheduled for execution"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitedesign task get [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: The ID of the site design task to get information for"),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Get information about the specified site design scheduled for execution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo sitedesign task get --id 6ec3ca5b-d04b-4381-b169-61378556d76e\n")),(0,i.kt)("h2",{id:"more-information"},"More information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SharePoint site design and site script overview: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"},"https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview"))))}p.isMDXComponent=!0}}]);