"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[49199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),o=(n(67294),n(3905));const r={toc:[]},s="wrapper";function i(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}i.isMDXComponent=!0},96062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),r=n(37884);const s={},i="graph schemaextension add",p={unversionedId:"cmd/graph/schemaextension/schemaextension-add",id:"cmd/graph/schemaextension/schemaextension-add",title:"graph schemaextension add",description:"Creates a Microsoft Graph schema extension",source:"@site/docs/cmd/graph/schemaextension/schemaextension-add.mdx",sourceDirName:"cmd/graph/schemaextension",slug:"/cmd/graph/schemaextension/schemaextension-add",permalink:"/cli-microsoft365-docusaurus/cmd/graph/schemaextension/schemaextension-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/graph/schemaextension/schemaextension-add.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"graph changelog list",permalink:"/cli-microsoft365-docusaurus/cmd/graph/changelog/changelog-list"},next:{title:"graph schemaextension get",permalink:"/cli-microsoft365-docusaurus/cmd/graph/schemaextension/schemaextension-get"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"graph-schemaextension-add"},"graph schemaextension add"),(0,o.kt)("p",null,"Creates a Microsoft Graph schema extension"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph schemaextension add [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The unique identifier for the schema extension definition")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-d, --description [description]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Description of the schema extension")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--owner <owner>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The Id ID the Azure AD application that is the owner of the schema extension")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-t, --targetTypes <targetTypes>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Comma-separated list of Microsoft Graph resource types the schema extension targets")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-p, --properties"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The collection of property names and types that make up the schema extension definition formatted as a JSON string"))),(0,o.kt)(r.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"To create a schema extension, you have to specify a unique ID for the schema extension. You can assign a value in one of two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"concatenate the name of one of your verified domains with a name for the schema extension to form a unique string in this format, ",(0,o.kt)("inlineCode",{parentName:"p"},"{domainName}_{schemaName}"),", eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"contoso_mySchema"),"."),(0,o.kt)("p",{parentName:"li"},"  NOTE: Only verified domains under the following top-level domains are supported: .com, .net, .gov, .edu or .org.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Provide a schema name, and let Microsoft Graph use that schema name to complete the id assignment in this format: ",(0,o.kt)("inlineCode",{parentName:"p"},"ext{8-random-alphanumeric-chars}_{schema-name}"),", eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"extkvbmkofy_mySchema"),"."))),(0,o.kt)("p",null,"The schema extension ID cannot be changed after creation."),(0,o.kt)("p",null,"The schema extension owner is the ID of the Azure AD application that is the owner of the schema extension. Once set, this property is read-only and cannot be changed."),(0,o.kt)("p",null,"The target types are the set of Microsoft Graph resource types (that support schema extensions) that this schema extension definition can be applied to. This option is specified as a comma-separated list"),(0,o.kt)("admonition",{title:'"Escaping JSON in PowerShell"',type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"When using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--properties")," option it's possible to enter a JSON string. In PowerShell 5 to 7.2 ",(0,o.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#escaping-double-quotes-in-powershell"},"specific escaping rules")," apply due to an issue. Remember that you can also use ",(0,o.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#passing-complex-content-into-cli-options"},"file tokens")," instead.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Create a schema extension"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 graph schemaextension add --id MySchemaExtension --description "My Schema Extension" --targetTypes Group --owner 62375ab9-6b52-47ed-826b-58e47e0e304b --properties \'[{"name":"myProp1","type":"Integer"},{"name":"myProp2","type":"String"}]\'\n')),(0,o.kt)("p",null,"Create a schema extension with a verified domain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 graph schemaextension add --id contoso_MySchemaExtension --description "My Schema Extension" --targetTypes Group --owner 62375ab9-6b52-47ed-826b-58e47e0e304b --properties \'[{"name":"myProp1","type":"Integer"},{"name":"myProp2","type":"String"}]\'\n')))}u.isMDXComponent=!0}}]);