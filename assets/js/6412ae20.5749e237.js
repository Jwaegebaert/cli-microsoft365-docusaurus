"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12116],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,d=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=l(t),u=r,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||d;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var d=t.length,i=new Array(d);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<d;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const d={},i="pp card get",o={unversionedId:"cmd/pp/card/card-get",id:"cmd/pp/card/card-get",title:"pp card get",description:"Gets a specific Microsoft Power Platform card in the specified Power Platform environment",source:"@site/docs/cmd/pp/card/card-get.md",sourceDirName:"cmd/pp/card",slug:"/cmd/pp/card/card-get",permalink:"/cmd/pp/card/card-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/card/card-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp card clone",permalink:"/cmd/pp/card/card-clone"},next:{title:"pp card list",permalink:"/cmd/pp/card/card-list"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:l};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pp-card-get"},"pp card get"),(0,r.kt)("p",null,"Gets a specific Microsoft Power Platform card in the specified Power Platform environment"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pp card get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-e, --environment <environment>"),"\n: The name of the environment."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The id of the card. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The name of the card. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Run the command as admin for environments you do not have explicitly assigned permissions to."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get a specific card in a specific environment based on name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp card get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --name "CLI 365 Card"\n')),(0,r.kt)("p",null,"Get a specific card in a specific environment based on name as admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp card get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --name "CLI 365 Card" --asAdmin\n')),(0,r.kt)("p",null,"Get a specific card in a specific environment based on id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp card get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --id "408e3f42-4c9e-4c93-8aaf-3cbdea9179aa"\n')),(0,r.kt)("p",null,"Get a specific card in a specific environment based on id as admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp card get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --id "408e3f42-4c9e-4c93-8aaf-3cbdea9179aa" --asAdmin\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n{\n  "solutionid":"fd140aae-4df4-11dd-bd17-0019b9312238",\n  "modifiedon":"2022-10-25T14:44:48Z",\n  "_owninguser_value":"4f175d04-b952-ed11-bba2-000d3adf774e",\n  "overriddencreatedon":null,\n  "ismanaged":false,\n  "schemaversion":null,\n  "importsequencenumber":null,\n  "tags":null,\n  "componentidunique":"24205370-bc43-4c5e-b095-16da18f0b1a3",\n  "_modifiedonbehalfby_value":null,\n  "componentstate":0,\n  "statecode":0,\n  "name":"Tasks List",\n  "versionnumber":4451230,\n  "utcconversiontimezonecode":null,\n  "cardid":"0eab9392-7354-ed11-bba2-000d3adf774e",\n  "publishdate":null,\n  "_createdonbehalfby_value":null,\n  "_modifiedby_value":"4f175d04-b952-ed11-bba2-000d3adf774e",\n  "createdon":"2022-10-25T14:44:48Z",\n  "overwritetime":"1900-01-01T00:00:00Z",\n  "_owningbusinessunit_value":"b419f090-fe22-ec11-b6e5-000d3ab596a1",\n  "hiddentags":null,\n  "description":" ",\n  "appdefinition":"{\\"screens\\":{\\"main\\":{\\"template\\":{\\"type\\":\\"AdaptiveCard\\",\\"body\\":[{\\"type\\":\\"TextBlock\\",\\"size\\":\\"Medium\\",\\"weight\\":\\"bolder\\",\\"text\\":\\"Your card title goes here\\"},{\\"type\\":\\"TextBlock\\",\\"text\\":\\"Add and remove element to customize your new card.\\",\\"wrap\\":true}],\\"actions\\":[],\\"$schema\\":\\"http://adaptivecards.io/schemas/1.4.0/adaptive-card.json\\",\\"version\\":\\"1.4\\"},\\"verbs\\":{\\"submit\\":\\"echo\\"}}},\\"sampleData\\":{\\"main\\":{}},\\"connections\\":{},\\"variables\\":{},\\"flows\\":{}}",\n  "statuscode":1,\n  "remixsourceid":null,\n  "sizes":null,\n  "coowners":null,\n  "_owningteam_value":null,\n  "_createdby_value":"4f175d04-b952-ed11-bba2-000d3adf774e",\n  "_ownerid_value":"4f175d04-b952-ed11-bba2-000d3adf774e",\n  "publishsourceid":null,\n  "timezoneruleversionnumber":null,\n  "iscustomizable":{\n    "Value":true,\n    "CanBeChanged":true,\n    "ManagedPropertyLogicalName":"iscustomizableanddeletable"\n  },\n  "owninguser":{\n    "azureactivedirectoryobjectid":"78637d62-e872-4dc9-b7c1-bd161e631682",\n    "fullname":"# Nico",\n    "systemuserid":"4f175d04-b952-ed11-bba2-000d3adf774e",\n    "ownerid":"4f175d04-b952-ed11-bba2-000d3adf774e"\n  }\n}\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\ncardid     : 0eab9392-7354-ed11-bba2-000d3adf774e\ncreatedon  : 2022-10-25T14:44:48Z\nmodifiedon : 2022-10-25T14:44:48Z\nname       : Tasks List\npublishdate: 2022-10-30T16:00:00Z\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nname,cardid,publishdate,createdon,modifiedon\nTasks List,0eab9392-7354-ed11-bba2-000d3adf774e,2022-10-30T16:00:00Z,2022-10-25T14:44:48Z,2022-10-25T14:44:48Z\n```\n")))}s.isMDXComponent=!0}}]);