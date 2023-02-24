"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[11043],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),i=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=i(e.components);return o.createElement(l.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=i(t),f=n,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||s;return t?o.createElement(d,p(p({ref:r},u),{},{components:t})):o.createElement(d,p({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,p=new Array(s);p[0]=f;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[c]="string"==typeof e?e:n,p[1]=a;for(var i=2;i<s;i++)p[i]=t[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},66693:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var o=t(87462),n=(t(67294),t(3905));const s={},p="spo userprofile set",a={unversionedId:"cmd/spo/userprofile/userprofile-set",id:"cmd/spo/userprofile/userprofile-set",title:"spo userprofile set",description:"Sets user profile property for a SharePoint user",source:"@site/docs/cmd/spo/userprofile/userprofile-set.md",sourceDirName:"cmd/spo/userprofile",slug:"/cmd/spo/userprofile/userprofile-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/userprofile/userprofile-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/userprofile/userprofile-set.md",tags:[],version:"current",lastUpdatedAt:1667774341,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo userprofile get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/userprofile/userprofile-get"},next:{title:"spo web add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-add"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:i},c="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-userprofile-set"},"spo userprofile set"),(0,n.kt)("p",null,"Sets user profile property for a SharePoint user"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo userprofile set [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --userName <userName>"),"\n: Account name of the user"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-n, --propertyName <propertyName>"),"\n: The name of the property to be set"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-v, --propertyValue <propertyValue>"),"\n: The value of the property to be set"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"You have to have tenant admin permissions in order to use this command to update profile properties of other users."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null," Updates the single-value ",(0,n.kt)("em",{parentName:"p"},"AboutMe")," property"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo userprofile set --userName 'john.doe@mytenant.onmicrosoft.com' --propertyName 'AboutMe' --propertyValue 'Working as a Microsoft 365 developer'\n")),(0,n.kt)("p",null,"Updates the multi-value ",(0,n.kt)("em",{parentName:"p"},"SPS-Skills")," property"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo userprofile set --userName 'john.doe@mytenant.onmicrosoft.com' --propertyName 'SPS-Skills' --propertyValue 'CSS, HTML'\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}m.isMDXComponent=!0}}]);