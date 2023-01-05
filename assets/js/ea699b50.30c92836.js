"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25525],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return t?n.createElement(g,s(s({ref:a},d),{},{components:t})):n.createElement(g,s({ref:a},d))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37586:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const l={},s="pp dataverse table list",o={unversionedId:"cmd/pp/dataverse/dataverse-table-list",id:"cmd/pp/dataverse/dataverse-table-list",title:"pp dataverse table list",description:"Lists dataverse tables in a given environment",source:"@site/docs/cmd/pp/dataverse/dataverse-table-list.md",sourceDirName:"cmd/pp/dataverse",slug:"/cmd/pp/dataverse/dataverse-table-list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/dataverse/dataverse-table-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/dataverse/dataverse-table-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp dataverse table get",permalink:"/cli-microsoft365-docusaurus/cmd/pp/dataverse/dataverse-table-get"},next:{title:"pp dataverse table remove",permalink:"/cli-microsoft365-docusaurus/cmd/pp/dataverse/dataverse-table-remove"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:c};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pp-dataverse-table-list"},"pp dataverse table list"),(0,r.kt)("p",null,"Lists dataverse tables in a given environment"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pp dataverse table list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-e, --environment <environment>"),"\n: The name of the environment to list all tables for"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Set, to retrieve the dataverse tables as admin for environments you are not a member of."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List all tables for the given environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp dataverse table list -e "Default-2ca3eaa5-140f-4175-8261-3272edf9f339"\n')),(0,r.kt)("p",null,"List all tables for the given environment as Admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp dataverse table list -e "Default-2ca3eaa5-140f-4175-8261-3272edf9f339" --asAdmin\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "MetadataId":"47a9636e-b7a1-4a8d-858a-ebce7d9b7526",\n    "IsCustomEntity":true,\n    "IsManaged":true,\n    "SchemaName":"aaduser",\n    "IconVectorName":null,\n    "LogicalName":"aaduser",\n    "EntitySetName":"aadusers",\n    "IsActivity":false,\n    "DataProviderId":"54629ed7-0cd3-4c85-9b6c-ea5f8548a9aa",\n    "IsRenameable":{\n      "Value":true,\n      "CanBeChanged":false,\n      "ManagedPropertyLogicalName":"isrenameable"\n    },\n    "IsCustomizable":{\n      "Value":true,\n      "CanBeChanged":false,\n      "ManagedPropertyLogicalName":"iscustomizable"\n    },\n    "CanCreateForms":{\n      "Value":true,\n      "CanBeChanged":false,\n      "ManagedPropertyLogicalName":"cancreateforms"\n    },\n    "CanCreateViews":{\n      "Value":true,\n      "CanBeChanged":false,\n      "ManagedPropertyLogicalName":"cancreateviews"\n    },\n    "CanCreateCharts":{\n      "Value":false,\n      "CanBeChanged":false,\n      "ManagedPropertyLogicalName":"cancreatecharts"\n    },\n    "CanCreateAttributes":{\n      "Value":true,\n      "CanBeChanged":false,\n      "ManagedPropertyLogicalName":"cancreateattributes"\n    },\n    "CanChangeTrackingBeEnabled":{\n      "Value":false,\n      "CanBeChanged":false,\n      "ManagedPropertyLogicalName":"canchangetrackingbeenabled"\n    },\n    "CanModifyAdditionalSettings":{\n      "Value":true,\n      "CanBeChanged":true,\n      "ManagedPropertyLogicalName":"canmodifyadditionalsettings"\n    },\n    "CanChangeHierarchicalRelationship":{\n      "Value":true,\n      "CanBeChanged":true,\n      "ManagedPropertyLogicalName":"canchangehierarchicalrelationship"\n    },\n    "CanEnableSyncToExternalSearchIndex":{\n      "Value":true,\n      "CanBeChanged":true,\n      "ManagedPropertyLogicalName":"canenablesynctoexternalsearchindex"\n    }\n  }\n]\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nSchemaName EntitySetName  LogicalName  IsManaged\n---------- -------------  -----------  ---------\naaduser    aadusers       aaduser      true\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nSchemaName,EntitySetName,LogicalName,IsManaged\naaduser,aadusers,aaduser,1\n```\n")))}p.isMDXComponent=!0}}]);