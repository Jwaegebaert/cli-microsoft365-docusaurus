"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[28530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return n?l.createElement(f,s(s({ref:t},c),{},{components:n})):l.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>o});var l=n(87462),a=(n(67294),n(3905));const r={toc:[]},s="wrapper";function o(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,l.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-h, --help [help]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",null,"options"),", ",(0,a.kt)("code",null,"examples"),", ",(0,a.kt)("code",null,"remarks"),", ",(0,a.kt)("code",null,"response"),", ",(0,a.kt)("code",null,"full"),". Default is ",(0,a.kt)("code",null,"full"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--query [query]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"JMESPath query string. See ",(0,a.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-o, --output [output]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output type. ",(0,a.kt)("code",null,"json"),", ",(0,a.kt)("code",null,"text"),", ",(0,a.kt)("code",null,"csv"),", ",(0,a.kt)("code",null,"md"),". Default is ",(0,a.kt)("code",null,"json"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--verbose"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with verbose logging.")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--debug"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with debug logging."))))}o.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(67294),a=n(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var l=n(87462),a=n(67294),r=n(86010),s=n(12466),o=n(56697),i=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:a}}=e;return{value:t,label:n,attributes:l,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const l=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,r=d(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[i,u]=f({queryString:n,groupId:l}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,c.Nk)(n);return[l,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),h=(()=>{const e=i??p;return m({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var h=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),l=u[n].value;l!==o&&(p(t),i(l))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,r.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:l}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function v(e){const t=b(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},a.createElement(k,(0,l.Z)({},e,t)),a.createElement(y,(0,l.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return a.createElement(v,(0,l.Z)({key:String(t)},e))}},94933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var l=n(87462),a=(n(67294),n(3905)),r=n(37884),s=n(74866),o=n(85162);const i={},u="spo list list",c={unversionedId:"cmd/spo/list/list-list",id:"cmd/spo/list/list-list",title:"spo list list",description:"Gets all lists within the specified site",source:"@site/docs/cmd/spo/list/list-list.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo list get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-get"},next:{title:"spo list remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-remove"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2},{value:"Response",id:"response",level:2}],m={toc:d},f="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-list-list"},"spo list list"),(0,a.kt)("p",null,"Gets all lists within the specified site"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"URL of the site where the lists to retrieve are located."))),(0,a.kt)(r.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Return all lists located in in a specific site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list list --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"List REST API resources: ",(0,a.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/office/dn531433.aspx#bk_ListEndpoint"},"https://msdn.microsoft.com/en-us/library/office/dn531433.aspx#bk_ListEndpoint"))),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "RootFolder": {\n      "ServerRelativeUrl": "/_catalogs/theme"\n    },\n    "AllowContentTypes": true,\n    "BaseTemplate": 123,\n    "BaseType": 1,\n    "ContentTypesEnabled": false,\n    "CrawlNonDefaultViews": false,\n    "Created": "2020-01-12T01:03:13Z",\n    "CurrentChangeToken": {\n      "StringValue": "1;3;66e5148c-7060-4479-88e7-636d79579148;638042267256930000;564174226"\n    },\n    "DefaultContentApprovalWorkflowId": "00000000-0000-0000-0000-000000000000",\n    "DefaultItemOpenUseListSetting": false,\n    "Description": "Use the theme gallery to store themes. The themes in this gallery can be used by this site or any of its subsites.",\n    "Direction": "none",\n    "DisableCommenting": false,\n    "DisableGridEditing": false,\n    "DocumentTemplateUrl": null,\n    "DraftVersionVisibility": 0,\n    "EnableAttachments": false,\n    "EnableFolderCreation": false,\n    "EnableMinorVersions": false,\n    "EnableModeration": false,\n    "EnableRequestSignOff": true,\n    "EnableVersioning": false,\n    "EntityTypeName": "OData__x005f_catalogs_x002f_theme",\n    "ExemptFromBlockDownloadOfNonViewableFiles": false,\n    "FileSavePostProcessingEnabled": false,\n    "ForceCheckout": false,\n    "HasExternalDataSource": false,\n    "Hidden": true,\n    "Id": "66e5148c-7060-4479-88e7-636d79579148",\n    "ImagePath": {\n      "DecodedUrl": "/_layouts/15/images/itdl.png?rev=47"\n    },\n    "ImageUrl": "/_layouts/15/images/itdl.png?rev=47",\n    "DefaultSensitivityLabelForLibrary": "",\n    "IrmEnabled": false,\n    "IrmExpire": false,\n    "IrmReject": false,\n    "IsApplicationList": false,\n    "IsCatalog": true,\n    "IsPrivate": false,\n    "ItemCount": 41,\n    "LastItemDeletedDate": "2020-01-12T01:03:13Z",\n    "LastItemModifiedDate": "2020-01-12T01:03:18Z",\n    "LastItemUserModifiedDate": "2020-01-12T01:03:18Z",\n    "ListExperienceOptions": 0,\n    "ListItemEntityTypeFullName": "SP.Data.OData__x005f_catalogs_x002f_themeItem",\n    "MajorVersionLimit": 0,\n    "MajorWithMinorVersionsLimit": 0,\n    "MultipleDataList": false,\n    "NoCrawl": true,\n    "ParentWebPath": {\n      "DecodedUrl": "/"\n    },\n    "ParentWebUrl": "/",\n    "ParserDisabled": false,\n    "ServerTemplateCanCreateFolders": false,\n    "TemplateFeatureId": "00000000-0000-0000-0000-000000000000",\n    "Title": "Theme Gallery",\n    "Url": "/_catalogs/theme"\n  }\n]\n'))),(0,a.kt)(o.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Id                                    Url\n------------------------------------  ----------------\n66e5148c-7060-4479-88e7-636d79579148  /_catalogs/theme\n"))),(0,a.kt)(o.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"Id,Url\nTheme Gallery,/_catalogs/theme,66e5148c-7060-4479-88e7-636d79579148\n"))),(0,a.kt)(o.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'# spo list list --webUrl "https://contoso.sharepoint.com"\n\nDate: 2/20/2023\n\n## _catalogs/theme (66e5148c-7060-4479-88e7-636d79579148)\n\nProperty | Value\n---------|-------\nAllowContentTypes | true\nBaseTemplate | 123\nBaseType | 1\nContentTypesEnabled | false\nCrawlNonDefaultViews | false\nCreated | 2020-01-12T01:03:13Z\nCurrentChangeToken | {"StringValue":"1;3;66e5148c-7060-4479-88e7-636d79579148;638042267256930000;564174226"}\nDefaultContentApprovalWorkflowId | 00000000-0000-0000-0000-000000000000\nDefaultItemOpenUseListSetting | false\nDescription | Use the theme gallery to store themes. The themes in this gallery can be used by this site or any of its subsites.\nDirection | none\nDisableCommenting | false\nDisableGridEditing | false\nDocumentTemplateUrl | null\nDraftVersionVisibility | 0\nEnableAttachments | false\nEnableFolderCreation | false\nEnableMinorVersions | false\nEnableModeration | false\nEnableRequestSignOff | true\nEnableVersioning | false\nEntityTypeName | OData\\_\\_x005f\\_catalogs\\_x002f\\_theme\nExemptFromBlockDownloadOfNonViewableFiles | false\nFileSavePostProcessingEnabled | false\nForceCheckout | false\nHasExternalDataSource | false\nHidden | true\nId | 66e5148c-7060-4479-88e7-636d79579148\nImagePath | {"DecodedUrl":"/\\_layouts/15/images/itdl.png?rev=47"}\nImageUrl | /\\_layouts/15/images/itdl.png?rev=47\nDefaultSensitivityLabelForLibrary |\nIrmEnabled | false\nIrmExpire | false\nIrmReject | false\nIsApplicationList | false\nIsCatalog | true\nIsPrivate | false\nItemCount | 41\nLastItemDeletedDate | 2020-01-12T01:03:13Z\nLastItemModifiedDate | 2020-01-12T01:03:18Z\nLastItemUserModifiedDate | 2020-01-12T01:03:18Z\nListExperienceOptions | 0\nListItemEntityTypeFullName | SP.Data.OData\\_\\_x005f\\_catalogs\\_x002f\\_themeItem\nMajorVersionLimit | 0\nMajorWithMinorVersionsLimit | 0\nMultipleDataList | false\nNoCrawl | false\nParentWebPath | {"DecodedUrl":"/"}\nParentWebUrl | /\nParserDisabled | false\nServerTemplateCanCreateFolders | true\nTemplateFeatureId | 00000000-0000-0000-0000-000000000000\nTitle | Theme Gallery\nRootFolder | {"ServerRelativeUrl":"//\\_catalogs/theme"}\nUrl | //\\_catalogs/theme\n')))))}b.isMDXComponent=!0}}]);