"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88458],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||p;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<p;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},12064:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const p={},i="aad app get",o={unversionedId:"cmd/aad/app/app-get",id:"cmd/aad/app/app-get",title:"aad app get",description:"Gets an Azure AD app registration",source:"@site/docs/cmd/aad/app/app-get.md",sourceDirName:"cmd/aad/app",slug:"/cmd/aad/app/app-get",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/app/app-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad app add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-add"},next:{title:"aad app list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-list"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aad-app-get"},"aad app get"),(0,r.kt)("p",null,"Gets an Azure AD app registration"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--appId [appId]"),"\n: Application (client) ID of the Azure AD application registration to get. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"objectId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--objectId [objectId]"),"\n: Object ID of the Azure AD application registration to get. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"objectId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--name [name]"),"\n: Name of the Azure AD application registration to get. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"objectId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--save"),"\n: Use to store the information about the created app in a local file"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"For best performance use the ",(0,r.kt)("inlineCode",{parentName:"p"},"objectId")," option to reference the Azure AD application registration to get. If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"appId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", this command will first need to find the corresponding object ID for that application."),(0,r.kt)("p",null,"If the command finds multiple Azure AD application registrations with the specified app name, it will prompt you to disambiguate which app it should use, listing the discovered object IDs."),(0,r.kt)("p",null,"If you want to store the information about the Azure AD app registration, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--save")," option. This is useful when you build solutions connected to Microsoft 365 and want to easily manage app registrations used with your solution. When you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--save")," option, after you get the app registration, the command will write its ID and name to the ",(0,r.kt)("inlineCode",{parentName:"p"},".m365rc.json")," file in the current directory. If the file already exists, it will add the information about the App registration to it if it's not already present, allowing you to track multiple apps. If the file doesn't exist, the command will create it."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get the Azure AD application registration by its app (client) ID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app get --appId d75be2e1-0204-4f95-857d-51a37cf40be8\n")),(0,r.kt)("p",null,"Get the Azure AD application registration by its object ID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app get --objectId d75be2e1-0204-4f95-857d-51a37cf40be8\n")),(0,r.kt)("p",null,"Get the Azure AD application registration by its name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad app get --name "My app"\n')),(0,r.kt)("p",null,"Get the Azure AD application registration by its name. Store information about the retrieved app registration in the ",(0,r.kt)("em",{parentName:"p"},".m365rc.json")," file in the current directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad app get --name "My app" --save\n')))}d.isMDXComponent=!0}}]);