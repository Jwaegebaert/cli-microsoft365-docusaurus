"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},p="pa pcf init",i={unversionedId:"cmd/pa/pcf/pcf-init",id:"cmd/pa/pcf/pcf-init",title:"pa pcf init",description:"Creates new PowerApps component framework project",source:"@site/docs/cmd/pa/pcf/pcf-init.md",sourceDirName:"cmd/pa/pcf",slug:"/cmd/pa/pcf/pcf-init",permalink:"/cmd/pa/pcf/pcf-init",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pa/pcf/pcf-init.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pa environment list",permalink:"/cmd/pa/environment/environment-list"},next:{title:"pa solution init",permalink:"/cmd/pa/solution/solution-init"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],s={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pa-pcf-init"},"pa pcf init"),(0,a.kt)("p",null,"Creates new PowerApps component framework project"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa pcf init [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--namespace <namespace>"),"\n: The namespace for the component."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--name <name>"),"\n: The name for the component."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--template <template>"),"\n: Choose a template for the component. ",(0,a.kt)("inlineCode",{parentName:"p"},"Field,Dataset"),"."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Name cannot contain reserved Javascript words. Only characters within the ranges ","[A-Z]",", ","[a-z]"," or ","[0-9]"," are allowed. The first character may not be a number."),(0,a.kt)("p",null,"Namespace cannot contain reserved Javascript words. Only characters within the ranges ","[A-Z]",", ","[a-z]",", ","[0-9]",", or '.' are allowed. The first and last character may not be the '.' character. Consecutive '.' characters are not allowed. Numbers are not allowed as the first character or immediately after a period."),(0,a.kt)("p",null,"Template currently only supports Field or Dataset."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Initialize the PowerApps Component Framework for a Field component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa pcf init --namespace yourNamespace --name yourCustomFieldComponent --template Field\n")),(0,a.kt)("p",null,"Initialize the PowerApps Component Framework for a Dataset component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa pcf init --namespace yourNamespace --name yourCustomFieldComponent --template Dataset\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The response is a custom message which will show the location where the component framework has been created and a message to remind you to run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," in the directory."),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create and build a custom component: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powerapps/developer/component-framework/create-custom-controls-using-pcf"},"https://docs.microsoft.com/en-us/powerapps/developer/component-framework/create-custom-controls-using-pcf"))))}m.isMDXComponent=!0}}]);