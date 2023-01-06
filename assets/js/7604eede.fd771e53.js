"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71643],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)t=p[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)t=p[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),s=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=s(e.components);return o.createElement(i.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),u=s(t),d=n,g=u["".concat(i,".").concat(d)]||u[d]||c[d]||p;return t?o.createElement(g,a(a({ref:r},l),{},{components:t})):o.createElement(g,a({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,a=new Array(p);a[0]=d;var m={};for(var i in r)hasOwnProperty.call(r,i)&&(m[i]=r[i]);m.originalType=e,m[u]="string"==typeof e?e:n,a[1]=m;for(var s=2;s<p;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2499:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var o=t(87462),n=(t(67294),t(3905));const p={},a="spo group member remove",m={unversionedId:"cmd/spo/group/group-member-remove",id:"cmd/spo/group/group-member-remove",title:"spo group member remove",description:"Removes the specified member from a SharePoint group",source:"@site/docs/cmd/spo/group/group-member-remove.md",sourceDirName:"cmd/spo/group",slug:"/cmd/spo/group/group-member-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-member-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/group/group-member-remove.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo group member list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-member-list"},next:{title:"spo group remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-remove"}},i={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],l={toc:s};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-group-member-remove"},"spo group member remove"),(0,n.kt)("p",null,"Removes the specified member from a SharePoint group"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group member remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the SharePoint group is available."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--groupId [groupId]"),"\n: Id of the SharePoint group from which the user has to be removed. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"groupName")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId"),", but not both."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--groupName  [groupName]"),"\n: Name of the SharePoint group from which user has to be removed. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"groupName")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId"),", but not both."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--userName [userName]"),"\n: The UPN (user principal name, eg. ",(0,n.kt)("a",{parentName:"p",href:"mailto:megan.bowen@contoso.com"},"megan.bowen@contoso.com"),") of the user that needs to be removed. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"email"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"userId"),", but not multiple."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--email [email]"),"\n: The email of the user to remove as a member. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"email"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"userId"),", but not multiple."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--userId [userId]"),"\n: The user Id (Id of the site user, eg. 14) of the user to remove as a member. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"email"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"userId"),", but not multiple."),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Remove a user from a SharePoint group by userName."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member remove --webUrl https://contoso.sharepoint.com/sites/SiteA --groupId 5 --userName "Alex.Wilber@contoso.com"\n')),(0,n.kt)("p",null,"Remove a user from a SharePoint group by email."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member remove --webUrl https://contoso.sharepoint.com/sites/SiteA --groupName "Site A Visitors" --email "Alex.Wilber@contoso.com"\n')),(0,n.kt)("p",null,"Remove a user from a SharePoint group by id."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member remove --webUrl https://contoso.sharepoint.com/sites/SiteA --groupName "Site A Visitors" --userId 14\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);