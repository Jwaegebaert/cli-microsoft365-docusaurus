"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[30470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=i(n),u=o,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return n?r.createElement(k,a(a({ref:t},m),{},{components:n})):r.createElement(k,a({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(87462),o=(n(67294),n(3905));const l={toc:[]},a="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(a,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}p.isMDXComponent=!0},6365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=n(87462),o=(n(67294),n(3905)),l=n(37884);const a={},p="spo list roleassignment remove",s={unversionedId:"cmd/spo/list/list-roleassignment-remove",id:"cmd/spo/list/list-roleassignment-remove",title:"spo list roleassignment remove",description:"Removes a role assignment from list permissions",source:"@site/docs/cmd/spo/list/list-roleassignment-remove.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-roleassignment-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleassignment-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-roleassignment-remove.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo list roleassignment add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleassignment-add"},next:{title:"spo list roleinheritance break",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleinheritance-break"}},i={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-list-roleassignment-remove"},"spo list roleassignment remove"),(0,o.kt)("p",null,"Removes a role assignment from list permissions"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list roleassignment remove [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"URL of the site where the list is located.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-i, --listId [listId]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"ID of the list. Specify either ",(0,o.kt)("code",{parentName:"p"},"listId"),", ",(0,o.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,o.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-t, --listTitle [listTitle]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Title of the list. Specify either ",(0,o.kt)("code",{parentName:"p"},"listId"),", ",(0,o.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,o.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Relative URL of the list. Specify either ",(0,o.kt)("code",{parentName:"p"},"listId"),", ",(0,o.kt)("code",{parentName:"p"},"listTitle"),", or ",(0,o.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--principalId [principalId]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"SharePoint ID of principal it may be either user id or group id you want to remove permissions. Specify either ",(0,o.kt)("code",{parentName:"p"},"principalId"),", ",(0,o.kt)("code",{parentName:"p"},"upn"),", or ",(0,o.kt)("code",{parentName:"p"},"groupName")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--upn [upn]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"upn/email of user. Specify either ",(0,o.kt)("code",{parentName:"p"},"principalId"),", ",(0,o.kt)("code",{parentName:"p"},"upn"),", or ",(0,o.kt)("code",{parentName:"p"},"groupName")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--groupName [groupName]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"enter group name of Azure AD or SharePoint group. Specify either ",(0,o.kt)("code",{parentName:"p"},"principalId"),", ",(0,o.kt)("code",{parentName:"p"},"upn"),", or ",(0,o.kt)("code",{parentName:"p"},"groupName")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--confirm"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Don't prompt for confirming removing the role assignment."))),(0,o.kt)(l.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Remove roleassignment from list by title based on group name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment remove --webUrl "https://contoso.sharepoint.com/sites/contoso-sales" --listTitle "someList" --groupName "saleGroup"\n')),(0,o.kt)("p",null,"Remove roleassignment from list by title based on principal Id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list roleassignment remove --webUrl "https://contoso.sharepoint.com/sites/contoso-sales" --listTitle "Events" --principalId 2\n')),(0,o.kt)("p",null,"Remove roleassignment from list by url based on principal Id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list roleassignment remove --webUrl \"https://contoso.sharepoint.com/sites/contoso-sales\" --listUrl '/sites/contoso-sales/lists/Events' --principalId 2\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);