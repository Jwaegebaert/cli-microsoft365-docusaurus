"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[6308],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),u=o,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return t?r.createElement(f,c(c({ref:n},d),{},{components:t})):r.createElement(f,c({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={},c="search externalconnection add",i={unversionedId:"cmd/search/externalconnection/externalconnection-add",id:"cmd/search/externalconnection/externalconnection-add",title:"search externalconnection add",description:"Add a new external connection to be defined for Microsoft Search",source:"@site/docs/cmd/search/externalconnection/externalconnection-add.md",sourceDirName:"cmd/search/externalconnection",slug:"/cmd/search/externalconnection/externalconnection-add",permalink:"/cli-microsoft365-docusaurus/cmd/search/externalconnection/externalconnection-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/search/externalconnection/externalconnection-add.md",tags:[],version:"current",lastUpdatedAt:1670192191,formattedLastUpdatedAt:"Dec 4, 2022",frontMatter:{},sidebar:"commands",previous:{title:"purview retentionlabel set",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentionlabel/retentionlabel-set"},next:{title:"search externalconnection get",permalink:"/cli-microsoft365-docusaurus/cmd/search/externalconnection/externalconnection-get"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"search-externalconnection-add"},"search externalconnection add"),(0,o.kt)("p",null,"Add a new external connection to be defined for Microsoft Search"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 search externalconnection add [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: Developer-provided unique ID of the connection within the Azure Active Directory tenant"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: The display name of the connection to be displayed in the Microsoft 365 admin center. Maximum length of 128 characters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-d, --description <description>"),"\n: Description of the connection displayed in the Microsoft 365 admin center"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--authorizedAppIds [authorizedAppIds]"),"\n: Comma-separated collection of application IDs for registered Azure Active Directory apps that are allowed to manage the external connection and to index content in the external connection."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," must be at least 3 and no more than 32 characters long. It can contain only alphanumeric characters, can't begin with ",(0,o.kt)("em",{parentName:"p"},"Microsoft")," and can be any of the following values: ",(0,o.kt)("em",{parentName:"p"},"None, Directory, Exchange, ExchangeArchive, LinkedIn, Mailbox, OneDriveBusiness, SharePoint, Teams, Yammer, Connectors, TaskFabric, PowerBI, Assistant, TopicEngine, MSFT_All_Connectors"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Adds a new external connection with name and description of test app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 search externalconnection add --id MyApp --name "Test" --description "Test"\n')),(0,o.kt)("p",null,"Adds a new external connection with a limited number of authorized apps"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 search externalconnection add --id MyApp --name "Test" --description "Test" --authorizedAppIds  "00000000-0000-0000-0000-000000000000,00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}m.isMDXComponent=!0}}]);