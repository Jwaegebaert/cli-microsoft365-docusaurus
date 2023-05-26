"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[21508],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(f,s(s({ref:t},d),{},{components:a})):n.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),s=a(12466),o=a(56697),i=a(91980),p=a(67392),d=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=u(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,p]=f({queryString:a,groupId:n}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=i??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),b(e)}),[p,b,l]),tabValues:l}}var k=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==o&&(c(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:u},s,{className:(0,l.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={toc:[]},s="wrapper";function o(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}o.isMDXComponent=!0},53567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(26054),s=a(74866),o=a(85162);const i={},p="spo list get",d={unversionedId:"cmd/spo/list/list-get",id:"cmd/spo/list/list-get",title:"spo list get",description:"Gets information about the specific list",source:"@site/docs/cmd/spo/list/list-get.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-get.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-add"},next:{title:"spo list list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-list"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2},{value:"Response",id:"response",level:2}],m={toc:u},f="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-list-get"},"spo list get"),(0,r.kt)("p",null,"Gets information about the specific list"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"URL of the site where the list to retrieve is located.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the list to retrieve information for. Specify either ",(0,r.kt)("code",{parentName:"p"},"id"),", ",(0,r.kt)("code",{parentName:"p"},"title"),", or ",(0,r.kt)("code",{parentName:"p"},"url")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-t, --title [title]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Title of the list to retrieve information for. Specify either ",(0,r.kt)("code",{parentName:"p"},"id"),", ",(0,r.kt)("code",{parentName:"p"},"title"),", or ",(0,r.kt)("code",{parentName:"p"},"url")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--url [url]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Server- or site-relative URL of the list. Specify either ",(0,r.kt)("code",{parentName:"p"},"id"),", ",(0,r.kt)("code",{parentName:"p"},"title"),", or ",(0,r.kt)("code",{parentName:"p"},"url")," but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-p, --properties [properties]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Comma-separated list of properties to retrieve from the list. Will retrieve all properties possible from default response, if not specified.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--withPermissions"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Set if you want to return associated roles and permissions of the list."))),(0,r.kt)(l.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," option includes values with a ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItemAllFields/Id"),", an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"$expand")," query parameter will be included on ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItemAllFields"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get information about a list with specified ID located in the specified site."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list get --id 0cd891ef-afce-4e55-b836-fce03286cccf --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,r.kt)("p",null,"Get information about a list with specified title located in the specified site."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list get --title Documents --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,r.kt)("p",null,"Get information about a list with specified server relative url located in the specified site."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list get --url 'sites/project-x/Documents' --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,r.kt)("p",null,"Get information about a list with specified site-relative URL located in the specified site."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list get --url 'Shared Documents' --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,r.kt)("p",null,"Get information about a list returning the specified list properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list get --title Documents --webUrl https://contoso.sharepoint.com/sites/project-x --properties "Title,Id,HasUniqueRoleAssignments,AllowContentTypes"\n')),(0,r.kt)("p",null,"Get information about a list returning the list Id, Title and ServerRelativeUrl properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo list get --title Documents --webUrl https://contoso.sharepoint.com/sites/project-x --properties "Title,Id,RootFolder/ServerRelativeUrl"\n')),(0,r.kt)("p",null,"Get information about a list along with the roles and permissions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list get --title Documents --webUrl https://contoso.sharepoint.com/sites/project-x --withPermissions\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"List REST API resources: ",(0,r.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/office/dn531433.aspx#bk_ListEndpoint"},"https://msdn.microsoft.com/en-us/library/office/dn531433.aspx#bk_ListEndpoint"))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "AllowContentTypes": true,\n  "BaseTemplate": 100,\n  "BaseType": 0,\n  "ContentTypesEnabled": true,\n  "CrawlNonDefaultViews": false,\n  "Created": "2022-10-23T09:30:00Z",\n  "CurrentChangeToken": {\n    "StringValue": "1;3;97d19285-b8a6-4c7f-9c6c-d6b850a6561a;638042258222730000;564169620"\n  },\n  "DefaultContentApprovalWorkflowId": "00000000-0000-0000-0000-000000000000",\n  "DefaultItemOpenUseListSetting": false,\n  "Description": "",\n  "Direction": "none",\n  "DisableCommenting": false,\n  "DisableGridEditing": false,\n  "DocumentTemplateUrl": null,\n  "DraftVersionVisibility": 0,\n  "EnableAttachments": true,\n  "EnableFolderCreation": false,\n  "EnableMinorVersions": false,\n  "EnableModeration": false,\n  "EnableRequestSignOff": true,\n  "EnableVersioning": true,\n  "EntityTypeName": "TestList",\n  "ExemptFromBlockDownloadOfNonViewableFiles": false,\n  "FileSavePostProcessingEnabled": false,\n  "ForceCheckout": false,\n  "HasExternalDataSource": false,\n  "Hidden": false,\n  "Id": "97d19285-b8a6-4c7f-9c6c-d6b850a6561a",\n  "ImagePath": {\n    "DecodedUrl": "/_layouts/15/images/itgen.png?rev=47"\n  },\n  "ImageUrl": "/_layouts/15/images/itgen.png?rev=47",\n  "DefaultSensitivityLabelForLibrary": "",\n  "IrmEnabled": false,\n  "IrmExpire": false,\n  "IrmReject": false,\n  "IsApplicationList": false,\n  "IsCatalog": false,\n  "IsPrivate": false,\n  "ItemCount": 0,\n  "LastItemDeletedDate": "2022-11-16T19:55:37Z",\n  "LastItemModifiedDate": "2022-11-16T19:55:39Z",\n  "LastItemUserModifiedDate": "2022-11-16T19:55:37Z",\n  "ListExperienceOptions": 0,\n  "ListItemEntityTypeFullName": "SP.Data.TestListItem",\n  "MajorVersionLimit": 50,\n  "MajorWithMinorVersionsLimit": 0,\n  "MultipleDataList": false,\n  "NoCrawl": false,\n  "ParentWebPath": {\n    "DecodedUrl": "/"\n  },\n  "ParentWebUrl": "/",\n  "ParserDisabled": false,\n  "ServerTemplateCanCreateFolders": true,\n  "TemplateFeatureId": "00bfea71-de22-43b2-a848-c05709900100",\n  "Title": "Test"\n}\n'))),(0,r.kt)(o.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'AllowContentTypes                        : true\nBaseTemplate                             : 100\nBaseType                                 : 0\nContentTypesEnabled                      : true\nCrawlNonDefaultViews                     : false\nCreated                                  : 2022-10-23T09:30:00Z\nCurrentChangeToken                       : {"StringValue":"1;3;97d19285-b8a6-4c7f-9c6c-d6b850a6561a;638042258464070000;564169707"}\nDefaultContentApprovalWorkflowId         : 00000000-0000-0000-0000-000000000000\nDefaultItemOpenUseListSetting            : false\nDefaultSensitivityLabelForLibrary        :\nDescription                              :\nDirection                                : none\nDisableCommenting                        : false\nDisableGridEditing                       : false\nDocumentTemplateUrl                      : null\nDraftVersionVisibility                   : 0\nEnableAttachments                        : true\nEnableFolderCreation                     : false\nEnableMinorVersions                      : false\nEnableModeration                         : false\nEnableRequestSignOff                     : true\nEnableVersioning                         : true\nEntityTypeName                           : TestList\nExemptFromBlockDownloadOfNonViewableFiles: false\nFileSavePostProcessingEnabled            : false\nForceCheckout                            : false\nHasExternalDataSource                    : false\nHidden                                   : false\nId                                       : 97d19285-b8a6-4c7f-9c6c-d6b850a6561a\nImagePath                                : {"DecodedUrl":"/_layouts/15/images/itgen.png?rev=47"}\nImageUrl                                 : /_layouts/15/images/itgen.png?rev=47\nIrmEnabled                               : false\nIrmExpire                                : false\nIrmReject                                : false\nIsApplicationList                        : false\nIsCatalog                                : false\nIsPrivate                                : false\nItemCount                                : 0\nLastItemDeletedDate                      : 2022-11-16T19:55:37Z\nLastItemModifiedDate                     : 2022-11-16T19:55:39Z\nLastItemUserModifiedDate                 : 2022-11-16T19:55:37Z\nListExperienceOptions                    : 0\nListItemEntityTypeFullName               : SP.Data.TestListItem\nMajorVersionLimit                        : 50\nMajorWithMinorVersionsLimit              : 0\nMultipleDataList                         : false\nNoCrawl                                  : false\nParentWebPath                            : {"DecodedUrl":"/"}\nParentWebUrl                             : /\nParserDisabled                           : false\nServerTemplateCanCreateFolders           : true\nTemplateFeatureId                        : 00bfea71-de22-43b2-a848-c05709900100\nTitle                                    : Test\n'))),(0,r.kt)(o.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'AllowContentTypes,BaseTemplate,BaseType,ContentTypesEnabled,CrawlNonDefaultViews,Created,CurrentChangeToken,DefaultContentApprovalWorkflowId,DefaultItemOpenUseListSetting,Description,Direction,DisableCommenting,DisableGridEditing,DocumentTemplateUrl,DraftVersionVisibility,EnableAttachments,EnableFolderCreation,EnableMinorVersions,EnableModeration,EnableRequestSignOff,EnableVersioning,EntityTypeName,ExemptFromBlockDownloadOfNonViewableFiles,FileSavePostProcessingEnabled,ForceCheckout,HasExternalDataSource,Hidden,Id,ImagePath,ImageUrl,DefaultSensitivityLabelForLibrary,IrmEnabled,IrmExpire,IrmReject,IsApplicationList,IsCatalog,IsPrivate,ItemCount,LastItemDeletedDate,LastItemModifiedDate,LastItemUserModifiedDate,ListExperienceOptions,ListItemEntityTypeFullName,MajorVersionLimit,MajorWithMinorVersionsLimit,MultipleDataList,NoCrawl,ParentWebPath,ParentWebUrl,ParserDisabled,ServerTemplateCanCreateFolders,TemplateFeatureId,Title\n1,100,0,1,,2022-10-23T09:30:00Z,"{""StringValue"":""1;3;97d19285-b8a6-4c7f-9c6c-d6b850a6561a;638042258543870000;564169743""}",00000000-0000-0000-0000-000000000000,,,none,,,,0,1,,,,1,1,TestList,,,,,,97d19285-b8a6-4c7f-9c6c-d6b850a6561a,"{""DecodedUrl"":""/_layouts/15/images/itgen.png?rev=47""}",/_layouts/15/images/itgen.png?rev=47,,,,,,,,0,2022-11-16T19:55:37Z,2022-11-16T19:55:39Z,2022-11-16T19:55:37Z,0,SP.Data.TestListItem,50,0,,,"{""DecodedUrl"":""/""}",/,,1,00bfea71-de22-43b2-a848-c05709900100,Test\n'))),(0,r.kt)(o.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# spo list get --title "Test" --webUrl "https://contoso.sharepoint.com"\n\nDate: 2/20/2023\n\n## Test (97d19285-b8a6-4c7f-9c6c-d6b850a6561a)\n\nProperty | Value\n---------|-------\nAllowContentTypes | true\nBaseTemplate | 100\nBaseType | 0\nContentTypesEnabled | false\nCrawlNonDefaultViews | false\nCreated | 2022-10-23T09:30:00Z\nCurrentChangeToken | {"StringValue":"1;3;97d19285-b8a6-4c7f-9c6c-d6b850a6561a;638042258222730000;564169620"}\nDefaultContentApprovalWorkflowId | 00000000-0000-0000-0000-000000000000\nDefaultItemOpenUseListSetting | false\nDescription |\nDirection | none\nDisableCommenting | false\nDisableGridEditing | false\nDocumentTemplateUrl | \nDraftVersionVisibility | 0\nEnableAttachments | true\nEnableFolderCreation | false\nEnableMinorVersions | false\nEnableModeration | false\nEnableRequestSignOff | true\nEnableVersioning | true\nEntityTypeName | TestList\nExemptFromBlockDownloadOfNonViewableFiles | false\nFileSavePostProcessingEnabled | false\nForceCheckout | false\nHasExternalDataSource | false\nHidden | false\nId | 97d19285-b8a6-4c7f-9c6c-d6b850a6561a\nImagePath | {"DecodedUrl":"/\\_layouts/15/images/itgen.png?rev=47"}\nImageUrl | /\\_layouts/15/images/itgen.png?rev=47\nDefaultSensitivityLabelForLibrary |\nIrmEnabled | false\nIrmExpire | false\nIrmReject | false\nIsApplicationList | false\nIsCatalog | false\nIsPrivate | false\nItemCount | 0\nLastItemDeletedDate | 2022-11-16T19:55:37Z\nLastItemModifiedDate | 2022-11-16T19:55:39Z\nLastItemUserModifiedDate | 2022-11-16T19:55:37Z\nListExperienceOptions | 0\nListItemEntityTypeFullName | SP.Data.TestListItem\nMajorVersionLimit | 50\nMajorWithMinorVersionsLimit | 0\nMultipleDataList | false\nNoCrawl | false\nParentWebPath | {"DecodedUrl":"/"}\nParentWebUrl | /\nParserDisabled | false\nServerTemplateCanCreateFolders | true\nTemplateFeatureId | 00bfea71-de22-43b2-a848-c05709900100\nTitle | Test\n')))))}b.isMDXComponent=!0}}]);