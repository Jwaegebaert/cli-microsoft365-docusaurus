"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31742],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return t?a.createElement(g,i(i({ref:n},o),{},{components:t})):a.createElement(g,i({ref:n},o))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<s;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const s={},i="aad user signin list",l={unversionedId:"cmd/aad/user/user-signin-list",id:"cmd/aad/user/user-signin-list",title:"aad user signin list",description:"Retrieves the Azure AD user sign-ins for the tenant",source:"@site/docs/cmd/aad/user/user-signin-list.md",sourceDirName:"cmd/aad/user",slug:"/cmd/aad/user/user-signin-list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-signin-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/user/user-signin-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad user set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-set"},next:{title:"Adaptive Card (adaptivecard)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/adaptivecard"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],o={toc:u};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aad-user-signin-list"},"aad user signin list"),(0,r.kt)("p",null,"Retrieves the Azure AD user sign-ins for the tenant"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user signin list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --userName [userName]"),"\n: Filter the user sign-ins by given User's UPN (user principal name), eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"johndoe@example.com"),". Specify either userName or userId"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--userId [userId]"),"\n: Filter the user sign-ins by given User's Id. Specify either userName or userId"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--appDisplayName [appDisplayName]"),"\n: Filter the user sign-ins by the given application display name. Specify either appDisplayName or appId"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--appId [appId]"),"\n: Filter the user sign-ins by the given application identifier. Specify either appDisplayName or appId"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get all user's sign-ins in your tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user signin list\n")),(0,r.kt)("p",null,"Get all user's sign-ins filter by given user's UPN in the tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user signin list --userName 'johndoe@example.com'\n")),(0,r.kt)("p",null,"Get all user's sign-ins filter by given user's Id in the tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user signin list --userId '11111111-1111-1111-1111-111111111111'\n")),(0,r.kt)("p",null,"Get all user's sign-ins filter by given application display name in the tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user signin list --appDisplayName 'Graph explorer'\n")),(0,r.kt)("p",null,"Get all user's sign-ins filter by given application identifier in the tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user signin list --appId '00000000-0000-0000-0000-000000000000'\n")),(0,r.kt)("p",null,"Get all user's sign-ins filter by given user's UPN and application display name in the tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user signin list --userName 'johndoe@example.com' --appDisplayName 'Graph explorer'\n")),(0,r.kt)("p",null,"Get all user's sign-ins filter by given user's Id and application display name in the tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user signin list --userId '11111111-1111-1111-1111-111111111111' --appDisplayName 'Graph explorer'\n")),(0,r.kt)("p",null,"Get all user's sign-ins filter by given user's UPN and application identifier in the tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user signin list --userName 'johndoe@example.com' --appId '00000000-0000-0000-0000-000000000000'\n")),(0,r.kt)("p",null,"Get all user's sign-ins filter by given user's Id and application identifier in the tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user signin list --userId '11111111-1111-1111-1111-111111111111' --appId '00000000-0000-0000-0000-000000000000'\n")))}d.isMDXComponent=!0}}]);