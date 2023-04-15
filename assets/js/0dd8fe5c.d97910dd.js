"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[53105],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>g});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),c=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return n?t.createElement(g,o(o({ref:a},d),{},{components:n})):t.createElement(g,o({ref:a},d))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47944:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const l={},o="pp dataverse table get",s={unversionedId:"cmd/pp/dataverse/dataverse-table-get",id:"cmd/pp/dataverse/dataverse-table-get",title:"pp dataverse table get",description:"List a dataverse table in a given environment",source:"@site/docs/cmd/pp/dataverse/dataverse-table-get.md",sourceDirName:"cmd/pp/dataverse",slug:"/cmd/pp/dataverse/dataverse-table-get",permalink:"/cli-microsoft365-docusaurus/cmd/pp/dataverse/dataverse-table-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/dataverse/dataverse-table-get.md",tags:[],version:"current",lastUpdatedAt:1675718504,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp chatbot remove",permalink:"/cli-microsoft365-docusaurus/cmd/pp/chatbot/chatbot-remove"},next:{title:"pp dataverse table list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/dataverse/dataverse-table-list"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:c},p="wrapper";function u(e){let{components:a,...n}=e;return(0,r.kt)(p,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pp-dataverse-table-get"},"pp dataverse table get"),(0,r.kt)("p",null,"List a dataverse table in a given environment"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pp dataverse table get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-e, --environment <environment>"),"\n: The name of the environment to list a table for."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --name<name>"),"\n: The name of the dataverse table to retrieve rows from."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Set, to retrieve the dataverse table as admin for environments you are not a member of."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List a table for the given environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp dataverse table get -e "Default-2ca3eaa5-140f-4175-8261-3272edf9f339" --name "aaduser"\n')),(0,r.kt)("p",null,"List a table for the given environment as Admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp dataverse table get -e "Default-2ca3eaa5-140f-4175-8261-3272edf9f339" --name "aaduser" --asAdmin\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n{\n  "MetadataId": "84f4c125-474d-ed11-bba1-000d3a2caf7f",\n  "IsCustomEntity": true,\n  "IsManaged": false,\n  "SchemaName": "aaduser",\n  "IconVectorName": null,\n  "LogicalName": "aaduser",\n  "EntitySetName": "aadusers",\n  "IsActivity": false,\n  "DataProviderId": null,\n  "IsRenameable": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "isrenameable"\n  },\n  "IsCustomizable": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "iscustomizable"\n  },\n  "CanCreateForms": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "cancreateforms"\n  },\n  "CanCreateViews": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "cancreateviews"\n  },\n  "CanCreateCharts": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "cancreatecharts"\n  },\n  "CanCreateAttributes": {\n    "Value": true,\n    "CanBeChanged": false,\n    "ManagedPropertyLogicalName": "cancreateattributes"\n  },\n  "CanChangeTrackingBeEnabled": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "canchangetrackingbeenabled"\n  },\n  "CanModifyAdditionalSettings": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "canmodifyadditionalsettings"\n  },\n  "CanChangeHierarchicalRelationship": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "canchangehierarchicalrelationship"\n  },\n  "CanEnableSyncToExternalSearchIndex": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "canenablesynctoexternalsearchindex"\n  }\n}\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nEntitySetName: aadusers\nIsManaged    : false\nLogicalName  : aaduser\nSchemaName   : aaduser\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nSchemaName,EntitySetName,LogicalName,IsManaged\naaduser,aadusers,aaduser,\n```\n")),(0,r.kt)("p",null,'=== "Markdown"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```md\n# pp dataverse table get --environment "Default-2ca3eaa5-140f-4175-8261-3272edf9f339" --name "aaduser"\n\nDate: 9/1/2023\n\nProperty | Value\n---------|-------\nMetadataId | "84f4c125-474d-ed11-bba1-000d3a2caf7f\nIsCustomEntity | true\nIsManaged | false\nSchemaName | aaduser\nIconVectorName | null\nLogicalName | aaduser\nEntitySetName | aadusers\nIsActivity | false\nDataProviderId | null\nIsRenameable | {"Value":true,"CanBeChanged":false,"ManagedPropertyLogicalName":"isrenameable"}\nIsCustomizable | {"Value":true,"CanBeChanged":false,"ManagedPropertyLogicalName":"iscustomizable"}\nCanCreateForms | {"Value":true,"CanBeChanged":false,"ManagedPropertyLogicalName":"cancreateforms"}\nCanCreateViews | {"Value":true,"CanBeChanged":false,"ManagedPropertyLogicalName":"cancreateviews"}\nCanCreateCharts | {"Value":false,"CanBeChanged":false,"ManagedPropertyLogicalName":"cancreatecharts"}\nCanCreateAttributes | {"Value":true,"CanBeChanged":false,"ManagedPropertyLogicalName":"cancreateattributes"}\nCanChangeTrackingBeEnabled | {"Value":false,"CanBeChanged":false,"ManagedPropertyLogicalName":"canchangetrackingbeenabled"}\nCanModifyAdditionalSettings | {"Value":true,"CanBeChanged":true,"ManagedPropertyLogicalName":"canmodifyadditionalsettings"}\nCanChangeHierarchicalRelationship | {"Value":true,"CanBeChanged":true,"ManagedPropertyLogicalName":"canchangehierarchicalrelationship"}\nCanEnableSyncToExternalSearchIndex | {"Value":true,"CanBeChanged":true,"ManagedPropertyLogicalName":"canenablesynctoexternalsearchindex"}\n```\n')))}u.isMDXComponent=!0}}]);