"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[37409],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(o),d=n,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||p;return o?r.createElement(g,a(a({ref:t},c),{},{components:o})):r.createElement(g,a({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=o.length,a=new Array(p);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<p;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},15178:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const p={},a="spo group get",s={unversionedId:"cmd/spo/group/group-get",id:"cmd/spo/group/group-get",title:"spo group get",description:"Gets site group",source:"@site/docs/cmd/spo/group/group-get.md",sourceDirName:"cmd/spo/group",slug:"/cmd/spo/group/group-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/group/group-get.md",tags:[],version:"current",lastUpdatedAt:1659669784,formattedLastUpdatedAt:"Aug 5, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo group add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-add"},next:{title:"spo group list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-list"}},i={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-group-get"},"spo group get"),(0,n.kt)("p",null,"Gets site group"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group get [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the group is located."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: ID of the site group to get. Use either ",(0,n.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"associatedGroup")," but not multiple."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--name [name]"),"\n: Name of the site group to get. Use either ",(0,n.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"associatedGroup")," but not multiple."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--associatedGroup [associatedGroup]"),"\n: Type of the associated group to get. Available values: ",(0,n.kt)("inlineCode",{parentName:"p"},"Owner"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Member"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Visitor"),". Use either ",(0,n.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"associatedGroup")," but not multiple."),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Get group with ID ",(0,n.kt)("em",{parentName:"p"},"7")," for web ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group get --webUrl https://contoso.sharepoint.com/sites/project-x --id 7\n")),(0,n.kt)("p",null,"Get group with name ",(0,n.kt)("em",{parentName:"p"},"Team Site Members")," for web ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group get --webUrl https://contoso.sharepoint.com/sites/project-x --name "Team Site Members"\n')),(0,n.kt)("p",null,"Get the associated owner group of a specified site"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group get --webUrl https://contoso.sharepoint.com/sites/project-x --associatedGroup Owner\n")))}m.isMDXComponent=!0}}]);