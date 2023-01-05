"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37345],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=m(r),u=o,f=l["".concat(i,".").concat(u)]||l[u]||c[u]||a;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[l]="string"==typeof e?e:o,s[1]=p;for(var m=2;m<a;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},78507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const a={},s="spo term set add",p={unversionedId:"cmd/spo/term/term-set-add",id:"cmd/spo/term/term-set-add",title:"spo term set add",description:"Adds taxonomy term set",source:"@site/docs/cmd/spo/term/term-set-add.md",sourceDirName:"cmd/spo/term",slug:"/cmd/spo/term/term-set-add",permalink:"/cmd/spo/term/term-set-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/term/term-set-add.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo term list",permalink:"/cmd/spo/term/term-list"},next:{title:"spo term set get",permalink:"/cmd/spo/term/term-set-get"}},i={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],d={toc:m};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-term-set-add"},"spo term set add"),(0,o.kt)("p",null,"Adds taxonomy term set"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term set add [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: Name of the term set to add"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--termGroupId [termGroupId]"),"\n: ID of the term group in which to create the term set. Specify ",(0,o.kt)("inlineCode",{parentName:"p"},"termGroupId")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"termGroupName")," but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--termGroupName [termGroupName]"),"\n: Name of the term group in which to create the term set. Specify ",(0,o.kt)("inlineCode",{parentName:"p"},"termGroupId")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"termGroupName")," but not both"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: ID of the term set to add"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-d, --description [description]"),"\n: Description of the term set to add"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--customProperties [customProperties]"),"\n: JSON string with key-value pairs representing custom properties to set on the term set"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,'!!! warning "Escaping JSON in PowerShell"\nWhen using the ',(0,o.kt)("inlineCode",{parentName:"p"},"--customProperties")," option it's possible to enter a JSON string. In PowerShell 5 to 7.2 ",(0,o.kt)("a",{parentName:"p",href:"/user-guide/using-cli#escaping-double-quotes-in-powershell"},"specific escaping rules")," apply due to an issue. Remember that you can also use ",(0,o.kt)("a",{parentName:"p",href:"/user-guide/using-cli#passing-complex-content-into-cli-options"},"file tokens")," instead."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Add taxonomy term set to the term group specified by ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term set add --name PnP-Organizations --termGroupId 0e8f395e-ff58-4d45-9ff7-e331ab728beb\n")),(0,o.kt)("p",null,"Add taxonomy term set to the term group specified by name. Create the term set with the specified ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term set add --name PnP-Organizations --termGroupName PnPTermSets --id aa70ede6-83d1-466d-8d95-30d29e9bbd7c\n")),(0,o.kt)("p",null,"Add taxonomy term set and set its description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term set add --name PnP-Organizations --termGroupId 0e8f395e-ff58-4d45-9ff7-e331ab728beb --description 'Contains a list of organizations'\n")),(0,o.kt)("p",null,"Add taxonomy term set and set its custom properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo term set add --name PnP-Organizations --termGroupId 0e8f395e-ff58-4d45-9ff7-e331ab728beb --customProperties \'{"Property":"Value"}\'\n')))}l.isMDXComponent=!0}}]);