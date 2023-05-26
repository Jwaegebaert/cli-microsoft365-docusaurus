"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[11753],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=l(a),f=r,u=s["".concat(d,".").concat(f)]||s[f]||c[f]||o;return a?n.createElement(u,p(p({ref:t},m),{},{components:a})):n.createElement(u,p({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]},p="wrapper";function i(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json,text,csv,md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging"))))}i.isMDXComponent=!0},49908:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(26054);const p={},i="spo file roleassignment add",d={unversionedId:"cmd/spo/file/file-roleassignment-add",id:"cmd/spo/file/file-roleassignment-add",title:"spo file roleassignment add",description:"Adds a role assignment to the specified file.",source:"@site/docs/cmd/spo/file/file-roleassignment-add.mdx",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-roleassignment-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-roleassignment-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-roleassignment-add.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo file retentionlabel remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-retentionlabel-remove"},next:{title:"spo file roleassignment remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-roleassignment-remove"}},l={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],s={toc:m},c="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-file-roleassignment-add"},"spo file roleassignment add"),(0,r.kt)("p",null,"Adds a role assignment to the specified file."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file roleassignment add [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"URL of the site where the file is located.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--fileUrl [fileUrl]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The server- or site-relative URL of the file to retrieve. Specify either ",(0,r.kt)("code",{parentName:"p"},"fileUrl")," or ",(0,r.kt)("code",{parentName:"p"},"fileId")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"i, --fileId [fileId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The UniqueId (GUID) of the file to retrieve. Specify either ",(0,r.kt)("code",{parentName:"p"},"fileUrl")," or ",(0,r.kt)("code",{parentName:"p"},"fileId")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--principalId [principalId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The SharePoint Id of the principal. It may be either a user id or group id to add a role assignment for. Specify either ",(0,r.kt)("code",{parentName:"p"},"upn"),", ",(0,r.kt)("code",{parentName:"p"},"groupName"),", or ",(0,r.kt)("code",{parentName:"p"},"principalId")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--upn [upn]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"upn/email of user to assign role to. Specify either ",(0,r.kt)("code",{parentName:"p"},"upn"),", ",(0,r.kt)("code",{parentName:"p"},"groupName"),", or ",(0,r.kt)("code",{parentName:"p"},"principalId")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--groupName [groupName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The group name of Azure AD or SharePoint group. Specify either ",(0,r.kt)("code",{parentName:"p"},"upn"),", ",(0,r.kt)("code",{parentName:"p"},"groupName"),", or ",(0,r.kt)("code",{parentName:"p"},"principalId")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--roleDefinitionId [roleDefinitionId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of role definition. Specify either ",(0,r.kt)("code",{parentName:"p"},"roleDefinitionId")," or ",(0,r.kt)("code",{parentName:"p"},"roleDefinitionName")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--roleDefinitionName [roleDefinitionName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Enter the name of a role definition, like 'Contribute', 'Read', etc. Specify either ",(0,r.kt)("code",{parentName:"p"},"roleDefinitionId")," or ",(0,r.kt)("code",{parentName:"p"},"roleDefinitionName")," but not both."))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Adds a role assignment to a file with a specified id. It will use a principal id and a specific role definition id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo file roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --fileId "b2307a39-e878-458b-bc90-03bc578531d6" --principalId 11 --roleDefinitionId 1073741829\n')),(0,r.kt)("p",null,"Adds a role assignment to a file with a specified site-relative URL for a specific upn and a role definition name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo file roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --fileUrl "Shared Documents/Test1.docx" --upn "testuser@tenant.onmicrosoft.com" --roleDefinitionName "Full Control"\n')),(0,r.kt)("p",null,"Adds a role assignment to a file with a specified server-relative URL the for a specific group  and a role definition name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo file roleassignment add --webUrl "https://contoso.sharepoint.com/sites/project-x" --fileUrl "/sites/project-x/documents/Test1.docx" --upn "testuser@tenant.onmicrosoft.com" --roleDefinitionName "Read"\n')))}f.isMDXComponent=!0}}]);