"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return n?o.createElement(f,i(i({ref:t},m),{},{components:n})):o.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},i="spo web roleassignment add",p={unversionedId:"cmd/spo/web/web-roleassignment-add",id:"cmd/spo/web/web-roleassignment-add",title:"spo web roleassignment add",description:"Adds a role assignment to web permissions.",source:"@site/docs/cmd/spo/web/web-roleassignment-add.md",sourceDirName:"cmd/spo/web",slug:"/cmd/spo/web/web-roleassignment-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-roleassignment-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/web/web-roleassignment-add.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo web retentionlabel list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-retentionlabel-list"},next:{title:"spo web roleassignment remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-roleassignment-remove"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-web-roleassignment-add"},"spo web roleassignment add"),(0,r.kt)("p",null,"Adds a role assignment to web permissions."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web roleassignment add [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--principalId [principalId]"),"\n: SharePoint ID of principal it may be either user id or group id we want to add permissions to. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"principalId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upn"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"groupName")," but not multiple."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--upn [upn]"),"\n: upn/email of user to assign role to. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"principalId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upn"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"groupName")," but not multiple."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--groupName [groupName]"),"\n: enter group name of Azure AD or SharePoint group. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"principalId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upn"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"groupName")," but not multiple."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--roleDefinitionId [roleDefinitionId]"),"\n: ID of role definition. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"roleDefinitionId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"roleDefinitionName")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--roleDefinitionName [roleDefinitionName]"),"\n: enter the name of a role definition, like 'Contribute', 'Read', etc. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"roleDefinitionId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"roleDefinitionName")," but not both."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"add role assignment to site ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x_for"},"https://contoso.sharepoint.com/sites/project-x_for")," principal id _11")," and role definition id ",(0,r.kt)("em",{parentName:"p"},"1073741829")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo web roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --principalId 11 --roleDefinitionId 1073741829\n')),(0,r.kt)("p",null,"add role assignment to site ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x_for"},"https://contoso.sharepoint.com/sites/project-x_for")," upn ",(0,r.kt)("a",{parentName:"em",href:"mailto:_someaccount@tenant.onmicrosoft.com"},"_someaccount@tenant.onmicrosoft.com"))," and role definition id ",(0,r.kt)("em",{parentName:"p"},"1073741829")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo web roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --upn "someaccount@tenant.onmicrosoft.com" --roleDefinitionId 1073741829\n')),(0,r.kt)("p",null,"add role assignment to site ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x_for"},"https://contoso.sharepoint.com/sites/project-x_for")," group _someGroup")," and role definition id ",(0,r.kt)("em",{parentName:"p"},"1073741829")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo web roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --groupName "someGroup" --roleDefinitionId 1073741829\n')),(0,r.kt)("p",null,"add role assignment to site ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x_for"},"https://contoso.sharepoint.com/sites/project-x_for")," principal id _11")," and role definition name ",(0,r.kt)("em",{parentName:"p"},"Full Control")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo web roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --principalId 11 --roleDefinitionName "Full Control"\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}c.isMDXComponent=!0}}]);