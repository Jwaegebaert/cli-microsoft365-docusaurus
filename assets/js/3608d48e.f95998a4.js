"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[76698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(k,p(p({ref:t},d),{},{components:n})):a.createElement(k,p({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26054:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]},p="wrapper";function i(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}i.isMDXComponent=!0},77239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(26054);const p={},i="spo list roleassignment add",l={unversionedId:"cmd/spo/list/list-roleassignment-add",id:"cmd/spo/list/list-roleassignment-add",title:"spo list roleassignment add",description:"Adds a role assignment to list permissions",source:"@site/docs/cmd/spo/list/list-roleassignment-add.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-roleassignment-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleassignment-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-roleassignment-add.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list retentionlabel remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-retentionlabel-remove"},next:{title:"spo list roleassignment remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleassignment-remove"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-list-roleassignment-add"},"spo list roleassignment add"),(0,r.kt)("p",null,"Adds a role assignment to list permissions"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list roleassignment add [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"URL of the site where the list is located.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --listId [listId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the list. Specify either ",(0,r.kt)("code",{parentName:"p"},"listId"),", ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,r.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-t, --listTitle [listTitle]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Title of the list. Specify either ",(0,r.kt)("code",{parentName:"p"},"listId"),", ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,r.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Relative URL of the list. Specify either ",(0,r.kt)("code",{parentName:"p"},"listId"),", ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,r.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--principalId [principalId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"SharePoint ID of principal it may be either user id or group id we want to add permissions to. Specify either ",(0,r.kt)("code",{parentName:"p"},"principalId"),", ",(0,r.kt)("code",{parentName:"p"},"upn"),", or ",(0,r.kt)("code",{parentName:"p"},"groupName")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--upn [upn]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Upn/email of user to assign role to. Specify either ",(0,r.kt)("code",{parentName:"p"},"principalId"),", ",(0,r.kt)("code",{parentName:"p"},"upn"),", or ",(0,r.kt)("code",{parentName:"p"},"groupName")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--groupName [groupName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Enter group name of Azure AD or SharePoint group. Specify either ",(0,r.kt)("code",{parentName:"p"},"principalId"),", ",(0,r.kt)("code",{parentName:"p"},"upn"),", or ",(0,r.kt)("code",{parentName:"p"},"groupName")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--roleDefinitionId [roleDefinitionId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of role definition. Specify either ",(0,r.kt)("code",{parentName:"p"},"roleDefinitionId")," or ",(0,r.kt)("code",{parentName:"p"},"roleDefinitionName")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--roleDefinitionName [roleDefinitionName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Enter the name of a role definition, like 'Contribute', 'Read', etc. Specify either ",(0,r.kt)("code",{parentName:"p"},"roleDefinitionId")," or ",(0,r.kt)("code",{parentName:"p"},"roleDefinitionName")," but not both."))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Adds role assignment to a list by title located in a specific site for given principal id and role definition id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "someList" --principalId 11 --roleDefinitionId 1073741829\n')),(0,r.kt)("p",null,"Adds role assignment to list by id located in a specific site for given principal id and role definition id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --listId "0CD891EF-AFCE-4E55-B836-FCE03286CCCF" --principalId 11 --roleDefinitionId 1073741829\n')),(0,r.kt)("p",null,"Adds role assignment to list by url located in a specific site for given principal id and role definition id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --listUrl "sites/documents" --principalId 11 --roleDefinitionId 1073741829\n')),(0,r.kt)("p",null,"Adds role assignment to list by title located in a specific site for given upn and role definition id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "someList" --upn "someaccount@tenant.onmicrosoft.com" --roleDefinitionId 1073741829\n')),(0,r.kt)("p",null,"Adds role assignment to list by title located in a specific site for given group and role definition id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "someList" --groupName "someGroup" --roleDefinitionId 1073741829\n')),(0,r.kt)("p",null,"Adds role assignment to list by title located in a specific site for given principal id and role definition name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "someList" --principalId 11 --roleDefinitionName "Full Control"\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);