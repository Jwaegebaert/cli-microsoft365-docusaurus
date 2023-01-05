"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82886],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||l;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const l={},i="pp aibuildermodel list",o={unversionedId:"cmd/pp/aibuildermodel/aibuildermodel-list",id:"cmd/pp/aibuildermodel/aibuildermodel-list",title:"pp aibuildermodel list",description:"List available AI builder models in the specified Power Platform environment",source:"@site/docs/cmd/pp/aibuildermodel/aibuildermodel-list.md",sourceDirName:"cmd/pp/aibuildermodel",slug:"/cmd/pp/aibuildermodel/aibuildermodel-list",permalink:"/cmd/pp/aibuildermodel/aibuildermodel-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/aibuildermodel/aibuildermodel-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"Power Platform (pp)",permalink:"/cmd/groups/pp"},next:{title:"pp card clone",permalink:"/cmd/pp/card/card-clone"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],s={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pp-aibuildermodel-list"},"pp aibuildermodel list"),(0,r.kt)("p",null,"List available AI builder models in the specified Power Platform environment"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pp aibuildermodel list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-e, --environment <environment>"),"\n: The name of the environment"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Run the command as admin for environments you do not have explicitly assigned permissions to"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List all AI Builder models in a specific environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp aibuildermodel list --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5"\n')),(0,r.kt)("p",null,"List all AI Builder models in a specific environment as admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp aibuildermodel list --environment "Default-d87a7535-dd31-4437-bfe1-95340acd55c5" --asAdmin\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "statecode": 0,\n    "_msdyn_templateid_value": "10707e4e-1d56-e911-8194-000d3a6cd5a5",\n    "msdyn_modelcreationcontext": "{}",\n    "createdon": "2022-11-29T11:58:45Z",\n    "_ownerid_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "modifiedon": "2022-11-29T11:58:45Z",\n    "msdyn_sharewithorganizationoncreate": false,\n    "msdyn_aimodelidunique": "b0328b67-47e2-4202-8189-e617ec9a88bd",\n    "solutionid": "fd140aae-4df4-11dd-bd17-0019b9312238",\n    "ismanaged": false,\n    "versionnumber": 1458121,\n    "msdyn_name": "Document Processing 11/29/2022, 12:58:43 PM",\n    "introducedversion": "1.0",\n    "statuscode": 0,\n    "_modifiedby_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "overwritetime": "1900-01-01T00:00:00Z",\n    "componentstate": 0,\n    "_createdby_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "_owningbusinessunit_value": "6da087c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "_owninguser_value": "5fa787c1-1c4d-ed11-bba1-000d3a2caf7f",\n    "msdyn_aimodelid": "08ffffbe-ec1c-4e64-b64b-dd1db926c613",\n    "_msdyn_activerunconfigurationid_value": null,\n    "overriddencreatedon": null,\n    "_msdyn_retrainworkflowid_value": null,\n    "importsequencenumber": null,\n    "_msdyn_scheduleinferenceworkflowid_value": null,\n    "_modifiedonbehalfby_value": null,\n    "utcconversiontimezonecode": null,\n    "_createdonbehalfby_value": null,\n    "_owningteam_value": null,\n    "timezoneruleversionnumber": null,\n    "iscustomizable": {\n      "Value": true,\n      "CanBeChanged": true,\n      "ManagedPropertyLogicalName": "iscustomizableanddeletable"\n    }\n  }\n]\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\ncreatedon             modifiedon            msdyn_aimodelid                       msdyn_name\n--------------------  --------------------  ------------------------------------  -------------------------------------------\n2022-10-25T14:44:48Z  2022-10-25T14:44:48Z  08ffffbe-ec1c-4e64-b64b-dd1db926c613  Document Processing 11/29/2022, 12:58:43 PM\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```csv\nmsdyn_name,msdyn_aimodelid,createdon,modifiedon\n"Document Processing 11/29/2022, 12:58:43 PM",08ffffbe-ec1c-4e64-b64b-dd1db926c613,2022-11-29T11:58:45Z,2022-11-29T11:58:45Z\n```\n')))}m.isMDXComponent=!0}}]);