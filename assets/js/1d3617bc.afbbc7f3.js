"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18999],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(t),m=o,b=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return t?a.createElement(b,i(i({ref:n},p),{},{components:t})):a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const r={},i="pp chatbot get",c={unversionedId:"cmd/pp/chatbot/chatbot-get",id:"cmd/pp/chatbot/chatbot-get",title:"pp chatbot get",description:"Get information about the specified chatbot",source:"@site/docs/cmd/pp/chatbot/chatbot-get.md",sourceDirName:"cmd/pp/chatbot",slug:"/cmd/pp/chatbot/chatbot-get",permalink:"/cli-microsoft365-docusaurus/cmd/pp/chatbot/chatbot-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/chatbot/chatbot-get.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp card remove",permalink:"/cli-microsoft365-docusaurus/cmd/pp/card/card-remove"},next:{title:"pp chatbot list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/chatbot/chatbot-list"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:d};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pp-chatbot-get"},"pp chatbot get"),(0,o.kt)("p",null,"Get information about the specified chatbot"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pp chatbot get [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-e, --environment <environment>"),"\n: The name of the environment."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The id of the chatbot. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The name of the chatbot. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Run the command as admin for environments you do not have explicitly assigned permissions to."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get a specific chatbot in a specific environment based on name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp chatbot get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --name "CLI 365 Chatbot"\n')),(0,o.kt)("p",null,"Get a specific chatbot in a specific environment based on name as admin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp chatbot get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --name "CLI 365 Chatbot" --asAdmin\n')),(0,o.kt)("p",null,"Get a specific chatbot in a specific environment based on id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp chatbot get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --id "3a081d91-5ea8-40a7-8ac9-abbaa3fcb893"\n')),(0,o.kt)("p",null,"Get a specific chatbot in a specific environment based on id as admin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp chatbot get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --id "3a081d91-5ea8-40a7-8ac9-abbaa3fcb893" --asAdmin\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n{\n  "authenticationtrigger": 0,\n  "_owningbusinessunit_value": "6da087c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "statuscode": 1,\n  "createdon": "2022-11-19T10:42:22Z",\n  "statecode": 0,\n  "schemaname": "new_bot_23f5f58697fd43d595eb451c9797a53d",\n  "_ownerid_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "overwritetime": "1900-01-01T00:00:00Z",\n  "name": "CLI 365 Chatbot",\n  "solutionid": "fd140aae-4df4-11dd-bd17-0019b9312238",\n  "ismanaged": false,\n  "versionnumber": 1421457,\n  "language": 1033,\n  "_modifiedby_value": "5f91d7a7-5f46-494a-80fa-5c18b0221351",\n  "_modifiedonbehalfby_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "modifiedon": "2022-11-19T10:42:24Z",\n  "componentstate": 0,\n  "botid": "3a081d91-5ea8-40a7-8ac9-abbaa3fcb893",\n  "_createdby_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "componentidunique": "cdcd6496-e25d-4ad1-91cf-3f4d547fdd23",\n  "authenticationmode": 1,\n  "_owninguser_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n  "accesscontrolpolicy": 0,\n  "runtimeprovider": 0,\n  "_publishedby_value": "John Doe",\n  "authenticationconfiguration": null,\n  "authorizedsecuritygroupids": null,\n  "overriddencreatedon": null,\n  "applicationmanifestinformation": null,\n  "importsequencenumber": null,\n  "synchronizationstatus": null,\n  "template": null,\n  "_providerconnectionreferenceid_value": null,\n  "configuration": null,\n  "utcconversiontimezonecode": null,\n  "publishedon": "2022-11-19T10:43:24Z",\n  "_createdonbehalfby_value": null,\n  "iconbase64": null,\n  "supportedlanguages": null,\n  "_owningteam_value": null,\n  "timezoneruleversionnumber": null,\n  "iscustomizable": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "iscustomizableanddeletable"\n  }\n}\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\nbotid      : 3a081d91-5ea8-40a7-8ac9-abbaa3fcb893\ncreatedon  : 2022-11-19T10:42:22Z\nmodifiedon : 2022-11-19T10:42:24Z\nname       : CLI 365 Chatbot\npublishedon: 2022-11-19T10:43:24Z\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nname,botid,publishedon,createdon,modifiedon\nCLI 365 Chatbot,3a081d91-5ea8-40a7-8ac9-abbaa3fcb893,2022-11-19T10:43:24Z,2022-11-19T10:42:22Z,2022-11-19T10:42:24Z\n```\n")))}s.isMDXComponent=!0}}]);