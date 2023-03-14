"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[84694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||a;return n?o.createElement(k,p(p({ref:t},i),{},{components:n})):o.createElement(k,p({ref:t},i))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,p[1]=l;for(var d=2;d<a;d++)p[d]=n[d];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={toc:[]},p="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}l.isMDXComponent=!0},88718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var o=n(87462),r=(n(67294),n(3905)),a=n(37884);const p={},l="spo contenttype add",s={unversionedId:"cmd/spo/contenttype/contenttype-add",id:"cmd/spo/contenttype/contenttype-add",title:"spo contenttype add",description:"Adds a new list or site content type",source:"@site/docs/cmd/spo/contenttype/contenttype-add.mdx",sourceDirName:"cmd/spo/contenttype",slug:"/cmd/spo/contenttype/contenttype-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/contenttype/contenttype-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/contenttype/contenttype-add.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo cdn set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/cdn/cdn-set"},next:{title:"spo contenttype field remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/contenttype/contenttype-field-remove"}},d={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],c={toc:i},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-contenttype-add"},"spo contenttype add"),(0,r.kt)("p",null,"Adds a new list or site content type"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttype add [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Absolute URL of the site where the content type should be created")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-l, --listTitle [listTitle]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Title of the list (if it is a list content type). Specify either ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", ",(0,r.kt)("code",{parentName:"p"},"listId")," or ",(0,r.kt)("code",{parentName:"p"},"listUrl"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--listId [listId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the list (if it is a list content type). Specify either ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", ",(0,r.kt)("code",{parentName:"p"},"listId")," or ",(0,r.kt)("code",{parentName:"p"},"listUrl"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Server- or site-relative URL of the list (if it is a list content type). Specify either ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", ",(0,r.kt)("code",{parentName:"p"},"listId")," or ",(0,r.kt)("code",{parentName:"p"},"listUrl"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the content type. Determines the parent content type")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-n, --name <name>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The name of the content type")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-d, --description [description]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The description of the content type")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-g, --group [group]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The group with which the content type should be associated"))),(0,r.kt)(a.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"If the specified content type already exists, you will get a ",(0,r.kt)("em",{parentName:"p"},'A duplicate content type "Your Content Type" was found.')," error."),(0,r.kt)("p",null,"The ID of the content type specifies the parent content type from which this content type inherits."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Create a site content type that inherits from the List item content type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttype add --webUrl https://contoso.sharepoint.com/sites/contoso-sales --name 'PnP Alert' --id 0x01007926A45D687BA842B947286090B8F67D --group 'PnP Content Types'\n")),(0,r.kt)("p",null,"Create a list (retrieved by Title) content type that inherits from the List item content type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttype add --webUrl https://contoso.sharepoint.com/sites/contoso-sales --listTitle Alerts --name 'PnP Alert' --id 0x01007926A45D687BA842B947286090B8F67D\n")),(0,r.kt)("p",null,"Create a list (retrieved by ID) content type that inherits from the List item content type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttype add --webUrl https://contoso.sharepoint.com/sites/contoso-sales --listId '8c7a0fcd-9d64-4634-85ea-ce2b37b2ec0c' --name 'PnP Alert' --id 0x01007926A45D687BA842B947286090B8F67D\n")),(0,r.kt)("p",null,"Create a list (retrieved by URL) content type that inherits from the List item content type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttype add --webUrl https://contoso.sharepoint.com/sites/contoso-sales --listUrl '/Shared Documents' --name 'PnP Alert' --id 0x01007926A45D687BA842B947286090B8F67D\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Content Type IDs: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/previous-versions/office/developer/sharepoint-2010/aa543822(v%3Doffice.14)"},"https://docs.microsoft.com/en-us/previous-versions/office/developer/sharepoint-2010/aa543822(v%3Doffice.14)"))))}u.isMDXComponent=!0}}]);