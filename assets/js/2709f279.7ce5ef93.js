"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[68779],{3905:(e,r,o)=>{o.d(r,{Zo:()=>m,kt:()=>f});var t=o(67294);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function u(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=t.createContext({}),i=function(e){var r=t.useContext(p),o=r;return e&&(o="function"==typeof e?e(r):s(s({},r),e)),o},m=function(e){var r=i(e.components);return t.createElement(p.Provider,{value:r},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var o=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=i(o),d=a,f=c["".concat(p,".").concat(d)]||c[d]||l[d]||n;return o?t.createElement(f,s(s({ref:r},m),{},{components:o})):t.createElement(f,s({ref:r},m))}));function f(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=d;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u[c]="string"==typeof e?e:a,s[1]=u;for(var i=2;i<n;i++)s[i]=o[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},30458:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>u,toc:()=>i});var t=o(87462),a=(o(67294),o(3905));const n={},s="aad o365group user remove",u={unversionedId:"cmd/aad/o365group/o365group-user-remove",id:"cmd/aad/o365group/o365group-user-remove",title:"aad o365group user remove",description:"Removes the specified user from specified Microsoft 365 Group or Microsoft Teams team",source:"@site/docs/cmd/aad/o365group/o365group-user-remove.md",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-user-remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-user-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-user-remove.md",tags:[],version:"current",lastUpdatedAt:1649592241,formattedLastUpdatedAt:"Apr 10, 2022",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group user list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-user-list"},next:{title:"aad o365group user set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-user-set"}},p={},i=[{value:"Usage",id:"usage",level:2},{value:"Alias",id:"alias",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],m={toc:i},c="wrapper";function l(e){let{components:r,...o}=e;return(0,a.kt)(c,(0,t.Z)({},m,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aad-o365group-user-remove"},"aad o365group user remove"),(0,a.kt)("p",null,"Removes the specified user from specified Microsoft 365 Group or Microsoft Teams team"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group user remove [options]\n")),(0,a.kt)("h2",{id:"alias"},"Alias"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad teams user remove\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --groupId [groupId]"),"\n: The ID of the Microsoft 365 Group from which to remove the user"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--teamId [teamId]"),"\n: The ID of the Microsoft Teams team from which to remove the user"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --userName <userName>"),"\n: User's UPN (user principal name), eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"johndoe@example.com")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming removing the user from the specified Microsoft 365 Group or Microsoft Teams team"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"You can remove users from a Microsoft 365 Group or Microsoft Teams team if you are owner of that group or team."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Removes user from the specified Microsoft 365 Group"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group user remove --groupId '00000000-0000-0000-0000-000000000000' --userName 'anne.matthews@contoso.onmicrosoft.com'\n")),(0,a.kt)("p",null,"Removes user from the specified Microsoft 365 Group without confirmation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group user remove --groupId '00000000-0000-0000-0000-000000000000' --userName 'anne.matthews@contoso.onmicrosoft.com' --confirm\n")),(0,a.kt)("p",null,"Removes user from the specified Microsoft Teams team"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad teams user remove --teamId '00000000-0000-0000-0000-000000000000' --userName 'anne.matthews@contoso.onmicrosoft.com'\n")))}l.isMDXComponent=!0}}]);