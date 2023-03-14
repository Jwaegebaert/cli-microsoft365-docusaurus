"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[87728],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>k});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(l),u=a,k=c["".concat(i,".").concat(u)]||c[u]||m[u]||r;return l?n.createElement(k,o(o({ref:t},d),{},{components:l})):n.createElement(k,o({ref:t},d))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}u.displayName="MDXCreateElement"},37884:(e,t,l)=>{l.d(t,{ZP:()=>s});var n=l(87462),a=(l(67294),l(3905));const r={toc:[]},o="wrapper";function s(e){let{components:t,...l}=e;return(0,a.kt)(o,(0,n.Z)({},r,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-h, --help [help]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",null,"options"),", ",(0,a.kt)("code",null,"examples"),", ",(0,a.kt)("code",null,"remarks"),", ",(0,a.kt)("code",null,"response"),", ",(0,a.kt)("code",null,"full"),". Default is ",(0,a.kt)("code",null,"full"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--query [query]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"JMESPath query string. See ",(0,a.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-o, --output [output]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output type. ",(0,a.kt)("code",null,"json"),", ",(0,a.kt)("code",null,"text"),", ",(0,a.kt)("code",null,"csv"),", ",(0,a.kt)("code",null,"md"),". Default is ",(0,a.kt)("code",null,"json"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--verbose"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with verbose logging.")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--debug"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},21121:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=l(87462),a=(l(67294),l(3905)),r=l(37884);const o={},s="spo list retentionlabel ensure",i={unversionedId:"cmd/spo/list/list-retentionlabel-ensure",id:"cmd/spo/list/list-retentionlabel-ensure",title:"spo list retentionlabel ensure",description:"Sets a default retention label on the specified list or library.",source:"@site/docs/cmd/spo/list/list-retentionlabel-ensure.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-retentionlabel-ensure",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-retentionlabel-ensure",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-retentionlabel-ensure.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo list remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-remove"},next:{title:"spo list retentionlabel get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-retentionlabel-get"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Alias",id:"alias",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:d},m="wrapper";function u(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-list-retentionlabel-ensure"},"spo list retentionlabel ensure"),(0,a.kt)("p",null,"Sets a default retention label on the specified list or library."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list retentionlabel ensure [options]\n")),(0,a.kt)("h2",{id:"alias"},"Alias"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list label set [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The URL of the site where the list is located.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--name <name>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The label name to set on the list.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--label <label>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"(deprecated. Use ",(0,a.kt)("code",{parentName:"p"},"name")," instead) The label name to set on the list.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-t, --listTitle [listTitle]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The title of the list on which to set the label. Specify either ",(0,a.kt)("code",{parentName:"p"},"listTitle"),", ",(0,a.kt)("code",{parentName:"p"},"listId"),", or ",(0,a.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-l, --listId [listId]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The ID of the list on which to set the label. Specify either ",(0,a.kt)("code",{parentName:"p"},"listTitle"),", ",(0,a.kt)("code",{parentName:"p"},"listId"),", or ",(0,a.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Server- or web-relative URL of the list on which to set the label. Specify either ",(0,a.kt)("code",{parentName:"p"},"listTitle"),", ",(0,a.kt)("code",{parentName:"p"},"listId"),", or ",(0,a.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--syncToItems"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Specify, to set the label on all existing items in the list.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--blockDelete"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"(deprecated) Specify, to disallow deleting items in the list.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--blockEdit"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"(deprecated) Specify, to disallow editing items in the list."))),(0,a.kt)(r.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"A list retention label is a default label that will be applied to all new items in the list. If you specify ",(0,a.kt)("inlineCode",{parentName:"p"},"syncToItems"),", it is also synced to existing items. "),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Sets a retention label by name on a given list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list retentionlabel ensure --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl 'Shared Documents' --name 'Some label'\n")),(0,a.kt)("p",null,"Sets a retention label by name and disables editing and deleting items on the list and all existing items for a given list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list retentionlabel ensure --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle 'Documents' --name 'Some label' --blockEdit --blockDelete --syncToItems\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);