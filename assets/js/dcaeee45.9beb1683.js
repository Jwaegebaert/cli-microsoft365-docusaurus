"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[30932],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,v=d["".concat(i,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},37884:(e,t,r)=>{r.d(t,{ZP:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={toc:[]},l="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}p.isMDXComponent=!0},62246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(37884);const l={},p="spo eventreceiver remove",i={unversionedId:"cmd/spo/eventreceiver/eventreceiver-remove",id:"cmd/spo/eventreceiver/eventreceiver-remove",title:"spo eventreceiver remove",description:"Removes event receivers for the specified web, site, or list.",source:"@site/docs/cmd/spo/eventreceiver/eventreceiver-remove.mdx",sourceDirName:"cmd/spo/eventreceiver",slug:"/cmd/spo/eventreceiver/eventreceiver-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/eventreceiver/eventreceiver-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/eventreceiver/eventreceiver-remove.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo eventreceiver list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/eventreceiver/eventreceiver-list"},next:{title:"spo externaluser list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/externaluser/externaluser-list"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-eventreceiver-remove"},"spo eventreceiver remove"),(0,o.kt)("p",null,"Removes event receivers for the specified web, site, or list."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo eventreceiver remove [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The URL of the web.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--listTitle [listTitle]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The title of the list, ",(0,o.kt)("em",{parentName:"p"},"if the event receiver should be removed from a list"),". Specify either ",(0,o.kt)("code",{parentName:"p"},"listTitle"),", ",(0,o.kt)("code",{parentName:"p"},"listId")," or ",(0,o.kt)("code",{parentName:"p"},"listUrl"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--listId [listId]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The id of the list, ",(0,o.kt)("em",{parentName:"p"},"if the event receiver should be retrieved from a list"),". Specify either ",(0,o.kt)("code",{parentName:"p"},"listTitle"),", ",(0,o.kt)("code",{parentName:"p"},"listId")," or ",(0,o.kt)("code",{parentName:"p"},"listUrl"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The url of the list, ",(0,o.kt)("em",{parentName:"p"},"if the event receiver should be retrieved from a list"),". Specify either ",(0,o.kt)("code",{parentName:"p"},"listTitle"),", ",(0,o.kt)("code",{parentName:"p"},"listId")," or ",(0,o.kt)("code",{parentName:"p"},"listUrl"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The name. Specify either ",(0,o.kt)("code",{parentName:"p"},"name")," or ",(0,o.kt)("code",{parentName:"p"},"id")," but not both.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The id. Specify either ",(0,o.kt)("code",{parentName:"p"},"name")," or ",(0,o.kt)("code",{parentName:"p"},"id")," but not both.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-s, --scope [scope]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},'The scope. Can be either "site" or "web". Defaults to "web". Only applicable when not specifying any of the list properties.')),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--confirm"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Don't prompt for confirmation."))),(0,o.kt)(a.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You can only remove an event receiver if it has been registered by an app with the same ID.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Remove event receiver in a specific web by name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo eventreceiver remove --webUrl https://contoso.sharepoint.com/sites/contoso-sales --name 'PnP Test Receiver'\n")),(0,o.kt)("p",null,"Remove event receiver in a specific site by id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo eventreceiver remove --webUrl https://contoso.sharepoint.com/sites/contoso-sales --scope site --id c5a6444a-9c7f-4a0d-9e29-fc6fe30e34ec\n")),(0,o.kt)("p",null,"Remove event receiver in a specific list retrieved by title by name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo eventreceiver remove --webUrl https://contoso.sharepoint.com/sites/contoso-sales --listTitle Events --name 'PnP Test Receiver'\n")),(0,o.kt)("p",null,"Remove event receiver in a specific list retrieved by list id by id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo eventreceiver remove --webUrl https://contoso.sharepoint.com/sites/contoso-sales --listId '202b8199-b9de-43fd-9737-7f213f51c991' --id c5a6444a-9c7f-4a0d-9e29-fc6fe30e34ec\n")),(0,o.kt)("p",null,"Remove event receiver in a specific list retrieved by list url by name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo eventreceiver remove --webUrl https://contoso.sharepoint.com/sites/contoso-sales --listUrl '/sites/contoso-sales/lists/Events' --name 'PnP Test Receiver'\n")))}u.isMDXComponent=!0}}]);