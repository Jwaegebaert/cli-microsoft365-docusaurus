"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[12116],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>b});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function d(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?d(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},d=Object.keys(e);for(t=0;t<d.length;t++)a=d[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)a=d[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,d=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||d;return a?t.createElement(b,i(i({ref:n},s),{},{components:a})):t.createElement(b,i({ref:n},s))}));function b(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var d=a.length,i=new Array(d);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<d;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49936:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var t=a(87462),r=(a(67294),a(3905));const d={},i="pp card get",o={unversionedId:"cmd/pp/card/card-get",id:"cmd/pp/card/card-get",title:"pp card get",description:"Gets a specific Microsoft Power Platform card in the specified Power Platform environment",source:"@site/docs/cmd/pp/card/card-get.md",sourceDirName:"cmd/pp/card",slug:"/cmd/pp/card/card-get",permalink:"/cli-microsoft365-docusaurus/cmd/pp/card/card-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/card/card-get.md",tags:[],version:"current",lastUpdatedAt:1678542080,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp card clone",permalink:"/cli-microsoft365-docusaurus/cmd/pp/card/card-clone"},next:{title:"pp card list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/card/card-list"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],s={toc:l},p="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pp-card-get"},"pp card get"),(0,r.kt)("p",null,"Gets a specific Microsoft Power Platform card in the specified Power Platform environment"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pp card get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-e, --environment <environment>"),"\n: The name of the environment."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The id of the card. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The name of the card. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Run the command as admin for environments you do not have explicitly assigned permissions to."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get a specific card in a specific environment based on name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp card get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --name "CLI 365 Card"\n')),(0,r.kt)("p",null,"Get a specific card in a specific environment based on name as admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp card get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --name "CLI 365 Card" --asAdmin\n')),(0,r.kt)("p",null,"Get a specific card in a specific environment based on id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp card get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --id "408e3f42-4c9e-4c93-8aaf-3cbdea9179aa"\n')),(0,r.kt)("p",null,"Get a specific card in a specific environment based on id as admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp card get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --id "408e3f42-4c9e-4c93-8aaf-3cbdea9179aa" --asAdmin\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n{\n  "solutionid":"fd140aae-4df4-11dd-bd17-0019b9312238",\n  "modifiedon":"2022-10-25T14:44:48Z",\n  "_owninguser_value":"4f175d04-b952-ed11-bba2-000d3adf774e",\n  "overriddencreatedon":null,\n  "ismanaged":false,\n  "schemaversion":null,\n  "importsequencenumber":null,\n  "tags":null,\n  "componentidunique":"24205370-bc43-4c5e-b095-16da18f0b1a3",\n  "_modifiedonbehalfby_value":null,\n  "componentstate":0,\n  "statecode":0,\n  "name":"Tasks List",\n  "versionnumber":4451230,\n  "utcconversiontimezonecode":null,\n  "cardid":"0eab9392-7354-ed11-bba2-000d3adf774e",\n  "publishdate":null,\n  "_createdonbehalfby_value":null,\n  "_modifiedby_value":"4f175d04-b952-ed11-bba2-000d3adf774e",\n  "createdon":"2022-10-25T14:44:48Z",\n  "overwritetime":"1900-01-01T00:00:00Z",\n  "_owningbusinessunit_value":"b419f090-fe22-ec11-b6e5-000d3ab596a1",\n  "hiddentags":null,\n  "description":" ",\n  "appdefinition":"{\\"screens\\":{\\"main\\":{\\"template\\":{\\"type\\":\\"AdaptiveCard\\",\\"body\\":[{\\"type\\":\\"TextBlock\\",\\"size\\":\\"Medium\\",\\"weight\\":\\"bolder\\",\\"text\\":\\"Your card title goes here\\"},{\\"type\\":\\"TextBlock\\",\\"text\\":\\"Add and remove element to customize your new card.\\",\\"wrap\\":true}],\\"actions\\":[],\\"$schema\\":\\"http://adaptivecards.io/schemas/1.4.0/adaptive-card.json\\",\\"version\\":\\"1.4\\"},\\"verbs\\":{\\"submit\\":\\"echo\\"}}},\\"sampleData\\":{\\"main\\":{}},\\"connections\\":{},\\"variables\\":{},\\"flows\\":{}}",\n  "statuscode":1,\n  "remixsourceid":null,\n  "sizes":null,\n  "coowners":null,\n  "_owningteam_value":null,\n  "_createdby_value":"4f175d04-b952-ed11-bba2-000d3adf774e",\n  "_ownerid_value":"4f175d04-b952-ed11-bba2-000d3adf774e",\n  "publishsourceid":null,\n  "timezoneruleversionnumber":null,\n  "iscustomizable":{\n    "Value":true,\n    "CanBeChanged":true,\n    "ManagedPropertyLogicalName":"iscustomizableanddeletable"\n  },\n  "owninguser":{\n    "azureactivedirectoryobjectid":"78637d62-e872-4dc9-b7c1-bd161e631682",\n    "fullname":"# John Doe",\n    "systemuserid":"4f175d04-b952-ed11-bba2-000d3adf774e",\n    "ownerid":"4f175d04-b952-ed11-bba2-000d3adf774e"\n  }\n}\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\ncardid     : 0eab9392-7354-ed11-bba2-000d3adf774e\ncreatedon  : 2022-10-25T14:44:48Z\nmodifiedon : 2022-10-25T14:44:48Z\nname       : Tasks List\npublishdate: 2022-10-30T16:00:00Z\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nname,cardid,publishdate,createdon,modifiedon\nTasks List,0eab9392-7354-ed11-bba2-000d3adf774e,2022-10-30T16:00:00Z,2022-10-25T14:44:48Z,2022-10-25T14:44:48Z\n```\n")),(0,r.kt)("p",null,'=== "Markdown"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```md\n# pp card get --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --id "0eab9392-7354-ed11-bba2-000d3adf774e"\n\nDate: 9/1/2023\n\n## Tasks List\n\nProperty | Value\n---------|-------\nsolutionid | fd140aae-4df4-11dd-bd17-0019b9312238\nmodifiedon | 2022-10-25T14:44:48Z\n\\_owninguser\\_value | 4f175d04-b952-ed11-bba2-000d3adf774e\noverriddencreatedon | null\nismanaged | false\nschemaversion | null\ntags | null\nimportsequencenumber | null\ncomponentidunique | 24205370-bc43-4c5e-b095-16da18f0b1a3\n\\_modifiedonbehalfby\\_value | null\ncomponentstate | 0\nstatecode | 0\nname | Tasks List\nversionnumber | 4451230\nutcconversiontimezonecode | null\ncardid | 0eab9392-7354-ed11-bba2-000d3adf774e\npublishdate | null\n\\_createdonbehalfby\\_value | null\n\\_modifiedby\\_value | 4f175d04-b952-ed11-bba2-000d3adf774e\ncreatedon | 2022-10-25T14:44:48Z\noverwritetime | 1900-01-01T00:00:00Z\n\\_owningbusinessunit\\_value | b419f090-fe22-ec11-b6e5-000d3ab596a1\nhiddentags | null\ndescription |\nappdefinition | {"screens":{"main":{"template":{"type":"AdaptiveCard","body":[{"type":"TextBlock","size":"Medium","weight":"bolder","text":"Your card title goes here"},{"type":"TextBlock","text":"Add and remove element to customize your new card.","wrap":true}],"actions":[],"$schema":"http://adaptivecards.io/schemas/1.4.0/adaptive-card.json","version":"1.4"},"verbs":{"submit":"echo"}}},"sampleData":{"main":{}},"connections":{},"variables":{},"flows":{}}\nstatuscode | 1\nremixsourceid | null\nsizes | null\n\\_createdby\\_value | 4f175d04-b952-ed11-bba2-000d3adf774e\n\\_owningteam\\_value | null\ncoowners | null\n\\_ownerid\\_value | 4f175d04-b952-ed11-bba2-000d3adf774e\npublishsourceid | null\ntimezoneruleversionnumber | null\niscustomizable | {"Value":true,"CanBeChanged":true,"ManagedPropertyLogicalName":"iscustomizableanddeletable"}\nowninguser | {"azureactivedirectoryobjectid":"78ccf530-bbf0-47e4-aae6-da5f8c6fb142","fullname":"# John Doe","systemuserid":"4f175d04-b952-ed11-bba2-000d3adf774e","ownerid":"4f175d04-b952-ed11-bba2-000d3adf774e"}\n```\n')))}u.isMDXComponent=!0}}]);