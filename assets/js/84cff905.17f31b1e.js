"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[49795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=i.createContext({}),p=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(a.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(a,".").concat(u)]||m[u]||c[u]||l;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<l;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const l={},r="spo list roleassignment add",s={unversionedId:"cmd/spo/list/list-roleassignment-add",id:"cmd/spo/list/list-roleassignment-add",title:"spo list roleassignment add",description:"Adds a role assignment to list permissions",source:"@site/docs/cmd/spo/list/list-roleassignment-add.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-roleassignment-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleassignment-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-roleassignment-add.md",tags:[],version:"current",lastUpdatedAt:1677283761,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list retentionlabel remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-retentionlabel-remove"},next:{title:"spo list roleassignment remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleassignment-remove"}},a={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-list-roleassignment-add"},"spo list roleassignment add"),(0,o.kt)("p",null,"Adds a role assignment to list permissions"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list roleassignment add [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list is located."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --listId [listId]"),"\n: ID of the list. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"listUrl")," but not multiple."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: Title of the list. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"listUrl")," but not multiple."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Relative URL of the list. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"listUrl")," but not multiple."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--principalId [principalId]"),"\n: SharePoint ID of principal it may be either user id or group id we want to add permissions to. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"principalId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"upn"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"groupName")," but not multiple."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--upn [upn]"),"\n: Upn/email of user to assign role to. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"principalId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"upn"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"groupName")," but not multiple."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--groupName [groupName]"),"\n: Enter group name of Azure AD or SharePoint group. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"principalId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"upn"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"groupName")," but not multiple."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--roleDefinitionId [roleDefinitionId]"),"\n: ID of role definition. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"roleDefinitionId")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"roleDefinitionName")," but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--roleDefinitionName [roleDefinitionName]"),"\n: Enter the name of a role definition, like 'Contribute', 'Read', etc. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"roleDefinitionId")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"roleDefinitionName")," but not both."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Adds role assignment to a list by title located in a specific site for given principal id and role definition id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "someList" --principalId 11 --roleDefinitionId 1073741829\n')),(0,o.kt)("p",null,"Adds role assignment to list by id located in a specific site for given principal id and role definition id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --listId "0CD891EF-AFCE-4E55-B836-FCE03286CCCF" --principalId 11 --roleDefinitionId 1073741829\n')),(0,o.kt)("p",null,"Adds role assignment to list by url located in a specific site for given principal id and role definition id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --listUrl "sites/documents" --principalId 11 --roleDefinitionId 1073741829\n')),(0,o.kt)("p",null,"Adds role assignment to list by title located in a specific site for given upn and role definition id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "someList" --upn "someaccount@tenant.onmicrosoft.com" --roleDefinitionId 1073741829\n')),(0,o.kt)("p",null,"Adds role assignment to list by title located in a specific site for given group and role definition id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "someList" --groupName "someGroup" --roleDefinitionId 1073741829\n')),(0,o.kt)("p",null,"Adds role assignment to list by title located in a specific site for given principal id and role definition name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "someList" --principalId 11 --roleDefinitionName "Full Control"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}c.isMDXComponent=!0}}]);