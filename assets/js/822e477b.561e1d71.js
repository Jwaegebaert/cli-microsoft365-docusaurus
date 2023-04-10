"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[84123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="graph schemaextension list",i={unversionedId:"cmd/graph/schemaextension/schemaextension-list",id:"cmd/graph/schemaextension/schemaextension-list",title:"graph schemaextension list",description:"Get a list of schemaExtension objects created in the current tenant, that can be InDevelopment, Available, or Deprecated.",source:"@site/docs/cmd/graph/schemaextension/schemaextension-list.md",sourceDirName:"cmd/graph/schemaextension",slug:"/cmd/graph/schemaextension/schemaextension-list",permalink:"/cli-microsoft365-docusaurus/cmd/graph/schemaextension/schemaextension-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/graph/schemaextension/schemaextension-list.md",tags:[],version:"current",lastUpdatedAt:1606917868,formattedLastUpdatedAt:"Dec 2, 2020",frontMatter:{},sidebar:"commands",previous:{title:"graph schemaextension get",permalink:"/cli-microsoft365-docusaurus/cmd/graph/schemaextension/schemaextension-get"},next:{title:"graph schemaextension remove",permalink:"/cli-microsoft365-docusaurus/cmd/graph/schemaextension/schemaextension-remove"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"graph-schemaextension-list"},"graph schemaextension list"),(0,a.kt)("p",null,"Get a list of schemaExtension objects created in the current tenant, that can be InDevelopment, Available, or Deprecated."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph schemaextension list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-s, --status [status]"),"\n: The status to filter on. Available values are Available, InDevelopment, Deprecated"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--owner [owner]"),"\n: The id of the owner to filter on"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p, --pageSize [pageSize]"),"\n: Number of objects to return"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --pageNumber [pageNumber]"),"\n: Page number to return if pageSize is specified (first page is indexed as value of 0)"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"pageNumber is specified as a 0-based index. A value of 2 returns the third page of items. "),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get a list of schemaExtension objects created in the current tenant, that can be InDevelopment, Available, or Deprecated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph schemaextension list \n")),(0,a.kt)("p",null,"Get a list of schemaExtension objects created in the current tenant, with owner 617720dc-85fc-45d7-a187-cee75eaf239e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph schemaextension list --owner 617720dc-85fc-45d7-a187-cee75eaf239e\n")),(0,a.kt)("p",null,"Get a list of schemaExtension objects created in the current tenant, with owner 617720dc-85fc-45d7-a187-cee75eaf239e and return the third page of results of 10"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph schemaextension list --owner 617720dc-85fc-45d7-a187-cee75eaf239e --pageNumber 2 --pageSize 10\n")),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/schemaextension_list"},"https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/schemaextension_list")))}u.isMDXComponent=!0}}]);