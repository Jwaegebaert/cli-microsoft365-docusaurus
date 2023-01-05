"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53105],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return t?n.createElement(g,o(o({ref:a},p),{},{components:t})):n.createElement(g,o({ref:a},p))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47944:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const l={},o="pp dataverse table get",s={unversionedId:"cmd/pp/dataverse/dataverse-table-get",id:"cmd/pp/dataverse/dataverse-table-get",title:"pp dataverse table get",description:"List a dataverse table in a given environment",source:"@site/docs/cmd/pp/dataverse/dataverse-table-get.md",sourceDirName:"cmd/pp/dataverse",slug:"/cmd/pp/dataverse/dataverse-table-get",permalink:"/cli-microsoft365-docusaurus/cmd/pp/dataverse/dataverse-table-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/dataverse/dataverse-table-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp chatbot remove",permalink:"/cli-microsoft365-docusaurus/cmd/pp/chatbot/chatbot-remove"},next:{title:"pp dataverse table list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/dataverse/dataverse-table-list"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:c};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pp-dataverse-table-get"},"pp dataverse table get"),(0,r.kt)("p",null,"List a dataverse table in a given environment"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pp dataverse table get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-e, --environment <environment>"),"\n: The name of the environment to list a table for."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --name<name>"),"\n: The name of the dataverse table to retrieve rows from."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Set, to retrieve the dataverse table as admin for environments you are not a member of."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List a table for the given environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp dataverse table get -e "Default-2ca3eaa5-140f-4175-8261-3272edf9f339" --name "aaduser"\n')),(0,r.kt)("p",null,"List a table for the given environment as Admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp dataverse table get -e "Default-2ca3eaa5-140f-4175-8261-3272edf9f339" --name "aaduser" --asAdmin\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n{\n  "MetadataId": "84f4c125-474d-ed11-bba1-000d3a2caf7f",\n  "IsCustomEntity": true,\n  "IsManaged": false,\n  "SchemaName": "aaduser",\n  "IconVectorName": null,\n  "LogicalName": "aaduser",\n  "EntitySetName": "aadusers",\n  "IsActivity": false,\n  "DataProviderId": null,\n  "IsRenameable": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "isrenameable"\n  },\n  "IsCustomizable": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "iscustomizable"\n  },\n  "CanCreateForms": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "cancreateforms"\n  },\n  "CanCreateViews": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "cancreateviews"\n  },\n  "CanCreateCharts": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "cancreatecharts"\n  },\n  "CanCreateAttributes": {\n    "Value": true,\n    "CanBeChanged": false,\n    "ManagedPropertyLogicalName": "cancreateattributes"\n  },\n  "CanChangeTrackingBeEnabled": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "canchangetrackingbeenabled"\n  },\n  "CanModifyAdditionalSettings": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "canmodifyadditionalsettings"\n  },\n  "CanChangeHierarchicalRelationship": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "canchangehierarchicalrelationship"\n  },\n  "CanEnableSyncToExternalSearchIndex": {\n    "Value": true,\n    "CanBeChanged": true,\n    "ManagedPropertyLogicalName": "canenablesynctoexternalsearchindex"\n  }\n}\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nEntitySetName: aadusers\nIsManaged    : false\nLogicalName  : aaduser\nSchemaName   : aaduser\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nSchemaName,EntitySetName,LogicalName,IsManaged\naaduser,aadusers,aaduser,\n```\n")))}d.isMDXComponent=!0}}]);