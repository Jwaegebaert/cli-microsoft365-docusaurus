"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[76490],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>k});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(l),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return l?n.createElement(k,a(a({ref:t},c),{},{components:l})):n.createElement(k,a({ref:t},c))}));function k(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=l.length,a=new Array(o);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=l[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}u.displayName="MDXCreateElement"},37884:(e,t,l)=>{l.d(t,{ZP:()=>i});var n=l(87462),r=(l(67294),l(3905));const o={toc:[]},a="wrapper";function i(e){let{components:t,...l}=e;return(0,r.kt)(a,(0,n.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}i.isMDXComponent=!0},29491:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=l(87462),r=(l(67294),l(3905)),o=l(37884);const a={},i="spo list retentionlabel remove",s={unversionedId:"cmd/spo/list/list-retentionlabel-remove",id:"cmd/spo/list/list-retentionlabel-remove",title:"spo list retentionlabel remove",description:"Clears the retention label on the specified list or library.",source:"@site/docs/cmd/spo/list/list-retentionlabel-remove.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-retentionlabel-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-retentionlabel-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-retentionlabel-remove.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo list retentionlabel get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-retentionlabel-get"},next:{title:"spo list roleassignment add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleassignment-add"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-list-retentionlabel-remove"},"spo list retentionlabel remove"),(0,r.kt)("p",null,"Clears the retention label on the specified list or library."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list retentionlabel remove [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The URL of the site where the list is located.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-t, --listTitle [listTitle]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The title of the list on which to remove the label. Specify either ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", ",(0,r.kt)("code",{parentName:"p"},"listId"),", or ",(0,r.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --listId [listId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the list on which to remove the label. Specify either ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", ",(0,r.kt)("code",{parentName:"p"},"listId"),", or ",(0,r.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-l, --listUrl [listUrl]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Server- or web-relative URL of the list on which to remove the label. Specify either ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", ",(0,r.kt)("code",{parentName:"p"},"listId"),", or ",(0,r.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--confirm"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Don't prompt for confirmation."))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Clears the retention label on a given list by URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list retentionlabel remove --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl 'Shared Documents'\n")),(0,r.kt)("p",null,"Clears the retention label on a given list by title."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list retentionlabel remove --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle 'Documents'\n")),(0,r.kt)("p",null,"Clears the retention label on a given list by ID without confirmation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list retentionlabel remove --webUrl https://contoso.sharepoint.com/sites/project-x --listId 'Documents' --confirm\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);