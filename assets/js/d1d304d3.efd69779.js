"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[27022],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>y});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=o.createContext({}),l=function(t){var e=o.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},f="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),f=l(r),m=n,y=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return r?o.createElement(y,a(a({ref:e},u),{},{components:r})):o.createElement(y,a({ref:e},u))}));function y(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[f]="string"==typeof t?t:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47107:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:1},a="Why this CLI",s={unversionedId:"about/why-cli",id:"about/why-cli",title:"Why this CLI",description:"CLI for Microsoft 365 is a cross-platform CLI that allows users on any platform to manage various configuration settings of Microsoft 365.",source:"@site/docs/about/why-cli.md",sourceDirName:"about",slug:"/about/why-cli",permalink:"/cli-microsoft365-docusaurus/about/why-cli",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/about/why-cli.md",tags:[],version:"current",lastUpdatedAt:1681508105,formattedLastUpdatedAt:"Apr 14, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"about",next:{title:"Telemetry",permalink:"/cli-microsoft365-docusaurus/about/telemetry"}},c={},l=[],u={toc:l},f="wrapper";function p(t){let{components:e,...r}=t;return(0,n.kt)(f,(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"why-this-cli"},"Why this CLI"),(0,n.kt)("p",null,"CLI for Microsoft 365 is a cross-platform CLI that allows users on any platform to manage various configuration settings of Microsoft 365."),(0,n.kt)("p",null,"While building solutions for Microsoft 365 expands beyond the Windows operating system, managing many of the platform settings is possible only through PowerShell on Windows. As more and more users work on non-Windows machines, it's inconvenient for them to have to use a Windows virtual machine to configure their tenants. The CLI for Microsoft 365 allows them to configure their tenants no matter which operating system they use."))}p.isMDXComponent=!0}}]);