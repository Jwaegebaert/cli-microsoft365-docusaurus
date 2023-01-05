"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46355],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>f});var r=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,s=function(e,a){if(null==e)return{};var t,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=r.createContext({}),l=function(e){var a=r.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=l(e.components);return r.createElement(d.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,s=e.mdxType,n=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=s,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||n;return t?r.createElement(f,o(o({ref:a},c),{},{components:t})):r.createElement(f,o({ref:a},c))}));function f(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var n=t.length,o=new Array(n);o[0]=m;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<n;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56157:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=t(87462),s=(t(67294),t(3905));const n={},o="aad user password validate",i={unversionedId:"cmd/aad/user/user-password-validate",id:"cmd/aad/user/user-password-validate",title:"aad user password validate",description:"Check a user's password against the organization's password validation policy",source:"@site/docs/cmd/aad/user/user-password-validate.md",sourceDirName:"cmd/aad/user",slug:"/cmd/aad/user/user-password-validate",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-password-validate",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/user/user-password-validate.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad user list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-list"},next:{title:"aad user set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-set"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:l};function p(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"aad-user-password-validate"},"aad user password validate"),(0,s.kt)("p",null,"Check a user's password against the organization's password validation policy"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user password validate [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-p, --password <password>"),"\n: The password to be validated."),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"!!! attention\nThis command is based on an API that is currently in preview and is subject to change once the API reached general availability."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Validate password ",(0,s.kt)("em",{parentName:"p"},"cli365P@ssW0rd")," against the organization's password validation policy"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad user password validate --password "cli365P@ssW0rd"\n')))}p.isMDXComponent=!0}}]);