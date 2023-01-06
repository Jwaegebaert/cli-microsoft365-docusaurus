"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26888],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(f,d(d({ref:n},s),{},{components:t})):r.createElement(f,d({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,d=new Array(o);d[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:a,d[1]=i;for(var c=2;c<o;c++)d[c]=t[c];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16825:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={},d="pp card list",i={unversionedId:"cmd/pp/card/card-list",id:"cmd/pp/card/card-list",title:"pp card list",description:"Lists Microsoft Power Platform cards in the specified Power Platform environment.",source:"@site/docs/cmd/pp/card/card-list.md",sourceDirName:"cmd/pp/card",slug:"/cmd/pp/card/card-list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/card/card-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/card/card-list.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp card get",permalink:"/cli-microsoft365-docusaurus/cmd/pp/card/card-get"},next:{title:"pp card remove",permalink:"/cli-microsoft365-docusaurus/cmd/pp/card/card-remove"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],s={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pp-card-list"},"pp card list"),(0,a.kt)("p",null,"Lists Microsoft Power Platform cards in the specified Power Platform environment."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pp card list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e, --environment <environment>"),"\n: The name of the environment."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Run the command as admin for environments you do not have explicitly assigned permissions to."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"List cards in a specific environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp card list --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5"\n')),(0,a.kt)("p",null,"List cards in a specific environment as admin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp card list --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --asAdmin\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "solutionid":"fd140aae-4df4-11dd-bd17-0019b9312238",\n    "modifiedon":"2022-10-25T14:44:48Z",\n    "_owninguser_value":"4f175d04-b952-ed11-bba2-000d3adf774e",\n    "overriddencreatedon":null,\n    "ismanaged":false,\n    "schemaversion":null,\n    "importsequencenumber":null,\n    "tags":null,\n    "componentidunique":"24205370-bc43-4c5e-b095-16da18f0b1a3",\n    "_modifiedonbehalfby_value":null,\n    "componentstate":0,\n    "statecode":0,\n    "name":"Tasks List",\n    "versionnumber":4451230,\n    "utcconversiontimezonecode":null,\n    "cardid":"0eab9392-7354-ed11-bba2-000d3adf774e",\n    "publishdate":null,\n    "_createdonbehalfby_value":null,\n    "_modifiedby_value":"4f175d04-b952-ed11-bba2-000d3adf774e",\n    "createdon":"2022-10-25T14:44:48Z",\n    "overwritetime":"1900-01-01T00:00:00Z",\n    "_owningbusinessunit_value":"b419f090-fe22-ec11-b6e5-000d3ab596a1",\n    "hiddentags":null,\n    "description":" ",\n    "appdefinition":"{\\"screens\\":{\\"main\\":{\\"template\\":{\\"type\\":\\"AdaptiveCard\\",\\"body\\":[{\\"type\\":\\"TextBlock\\",\\"size\\":\\"Medium\\",\\"weight\\":\\"bolder\\",\\"text\\":\\"Your card title goes here\\"},{\\"type\\":\\"TextBlock\\",\\"text\\":\\"Add and remove element to customize your new card.\\",\\"wrap\\":true}],\\"actions\\":[],\\"$schema\\":\\"http://adaptivecards.io/schemas/1.4.0/adaptive-card.json\\",\\"version\\":\\"1.4\\"},\\"verbs\\":{\\"submit\\":\\"echo\\"}}},\\"sampleData\\":{\\"main\\":{}},\\"connections\\":{},\\"variables\\":{},\\"flows\\":{}}",\n    "statuscode":1,\n    "remixsourceid":null,\n    "sizes":null,\n    "coowners":null,\n    "_owningteam_value":null,\n    "_createdby_value":"4f175d04-b952-ed11-bba2-000d3adf774e",\n    "_ownerid_value":"4f175d04-b952-ed11-bba2-000d3adf774e",\n    "publishsourceid":null,\n    "timezoneruleversionnumber":null,\n    "iscustomizable":{\n      "Value":true,\n      "CanBeChanged":true,\n      "ManagedPropertyLogicalName":"iscustomizableanddeletable"\n    },\n    "owninguser":{\n      "azureactivedirectoryobjectid":"78637d62-e872-4dc9-b7c1-bd161e631682",\n      "fullname":"# Nico",\n      "systemuserid":"4f175d04-b952-ed11-bba2-000d3adf774e",\n      "ownerid":"4f175d04-b952-ed11-bba2-000d3adf774e"\n    }\n  }\n]\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nname        cardid                                publishdate          createdon             modifiedon\n----------  ------------------------------------  -----------          --------------------  --------------------\nTasks List  0eab9392-7354-ed11-bba2-000d3adf774e  2022-10-30T16:00:00Z 2022-10-25T14:44:48Z  2022-10-25T14:44:48Z\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nname,cardid,publishdate,createdon,modifiedon\nTasks List,0eab9392-7354-ed11-bba2-000d3adf774e,2022-10-30T16:00:00Z,2022-10-25T14:44:48Z,2022-10-25T14:44:48Z\n```\n")))}p.isMDXComponent=!0}}]);