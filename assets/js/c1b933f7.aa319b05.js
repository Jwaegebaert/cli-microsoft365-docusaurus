"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[30470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=i(r),u=n,k=d["".concat(l,".").concat(u)]||d[u]||c[u]||p;return r?a.createElement(k,o(o({ref:t},m),{},{components:r})):a.createElement(k,o({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var i=2;i<p;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26054:(e,t,r)=>{r.d(t,{ZP:()=>s});var a=r(87462),n=(r(67294),r(3905));const p={toc:[]},o="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(o,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",{parentName:"p"},"options"),", ",(0,n.kt)("code",{parentName:"p"},"examples"),", ",(0,n.kt)("code",{parentName:"p"},"remarks"),", ",(0,n.kt)("code",{parentName:"p"},"response"),", ",(0,n.kt)("code",{parentName:"p"},"full"),". Default is ",(0,n.kt)("code",{parentName:"p"},"full"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--query [query]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,n.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output type. ",(0,n.kt)("code",{parentName:"p"},"json"),", ",(0,n.kt)("code",{parentName:"p"},"text"),", ",(0,n.kt)("code",{parentName:"p"},"csv"),", ",(0,n.kt)("code",{parentName:"p"},"md"),". Default ",(0,n.kt)("code",{parentName:"p"},"json"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--verbose"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--debug"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}s.isMDXComponent=!0},6365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),p=r(26054);const o={},s="spo list roleassignment remove",l={unversionedId:"cmd/spo/list/list-roleassignment-remove",id:"cmd/spo/list/list-roleassignment-remove",title:"spo list roleassignment remove",description:"Removes a role assignment from list permissions",source:"@site/docs/cmd/spo/list/list-roleassignment-remove.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-roleassignment-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleassignment-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-roleassignment-remove.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list roleassignment add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleassignment-add"},next:{title:"spo list roleinheritance break",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleinheritance-break"}},i={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:m},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-list-roleassignment-remove"},"spo list roleassignment remove"),(0,n.kt)("p",null,"Removes a role assignment from list permissions"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list roleassignment remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"URL of the site where the list is located.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-i, --listId [listId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"ID of the list. Specify either ",(0,n.kt)("code",{parentName:"p"},"listId"),", ",(0,n.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,n.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-t, --listTitle [listTitle]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Title of the list. Specify either ",(0,n.kt)("code",{parentName:"p"},"listId"),", ",(0,n.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,n.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Relative URL of the list. Specify either ",(0,n.kt)("code",{parentName:"p"},"listId"),", ",(0,n.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,n.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--principalId [principalId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"SharePoint ID of principal it may be either user id or group id you want to remove permissions. Specify either ",(0,n.kt)("code",{parentName:"p"},"principalId"),", ",(0,n.kt)("code",{parentName:"p"},"upn"),", or ",(0,n.kt)("code",{parentName:"p"},"groupName")," but not multiple.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--upn [upn]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"upn/email of user. Specify either ",(0,n.kt)("code",{parentName:"p"},"principalId"),", ",(0,n.kt)("code",{parentName:"p"},"upn"),", or ",(0,n.kt)("code",{parentName:"p"},"groupName")," but not multiple.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--groupName [groupName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"enter group name of Azure AD or SharePoint group. Specify either ",(0,n.kt)("code",{parentName:"p"},"principalId"),", ",(0,n.kt)("code",{parentName:"p"},"upn"),", or ",(0,n.kt)("code",{parentName:"p"},"groupName")," but not multiple.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--confirm"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Don't prompt for confirming removing the role assignment."))),(0,n.kt)(p.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Remove roleassignment from list by title based on group name."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment remove --webUrl "https://contoso.sharepoint.com/sites/contoso-sales" --listTitle "someList" --groupName "saleGroup"\n')),(0,n.kt)("p",null,"Remove roleassignment from list by title based on principal Id."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment remove --webUrl "https://contoso.sharepoint.com/sites/contoso-sales" --listTitle "Events" --principalId 2\n')),(0,n.kt)("p",null,"Remove roleassignment from list by url based on principal Id."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list roleassignment remove --webUrl \"https://contoso.sharepoint.com/sites/contoso-sales\" --listUrl '/sites/contoso-sales/lists/Events' --principalId 2\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);