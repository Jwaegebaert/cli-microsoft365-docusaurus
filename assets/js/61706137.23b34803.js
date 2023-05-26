"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[23077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,y=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(y,i(i({ref:t},m),{},{components:n})):a.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(56697),s=n(91980),p=n(67392),m=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=y({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,m.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),T=(()=>{const e=s??d;return u({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{T&&l(T)}),[T]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var T=n(72389);const F={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=m.indexOf(t),a=p[n].value;a!==l&&(d(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>m.push(e),onKeyDown:u,onClick:c},i,{className:(0,o.Z)("tabs__item",F.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function D(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",F.tabList)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(D,(0,a.Z)({},e,t)))}function b(e){const t=(0,T.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},26054:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json,text,csv,md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging"))))}l.isMDXComponent=!0},18251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(26054),i=n(74866),l=n(85162);const s={},p="spo list contenttype add",m={unversionedId:"cmd/spo/list/list-contenttype-add",id:"cmd/spo/list/list-contenttype-add",title:"spo list contenttype add",description:"Adds content type to list",source:"@site/docs/cmd/spo/list/list-contenttype-add.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-contenttype-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-contenttype-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-contenttype-add.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-set"},next:{title:"spo list contenttype list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-contenttype-list"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:c},y="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-list-contenttype-add"},"spo list contenttype add"),(0,r.kt)("p",null,"Adds content type to list"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype add [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"URL of the site where the list is located.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-l, --listId [listId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the list. Specify either ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", ",(0,r.kt)("code",{parentName:"p"},"listId"),", or ",(0,r.kt)("code",{parentName:"p"},"listUrl"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-t, --listTitle [listTitle]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Title of the list. Specify either ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", ",(0,r.kt)("code",{parentName:"p"},"listId"),", or ",(0,r.kt)("code",{parentName:"p"},"listUrl"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Server- or site-relative URL of the list. Specify either ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", ",(0,r.kt)("code",{parentName:"p"},"listId"),", or ",(0,r.kt)("code",{parentName:"p"},"listUrl"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the content type to add to the list."))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Adds a specific existing content type to a list retrieved by id in a specific site."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype add --webUrl https://contoso.sharepoint.com/sites/project-x --listId 0cd891ef-afce-4e55-b836-fce03286cccf --id 0x0120\n")),(0,r.kt)("p",null,"Adds a specific existing content type to a list retrieved by title in a specific site."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype add --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle Documents --id 0x0120\n")),(0,r.kt)("p",null,"Adds a specific existing content type to a list retrieved by server relative URL in a specific site."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype add --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl 'sites/project-x/Documents' --id 0x0120\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ClientFormCustomFormatter": "",\n  "Description": "Create a new list item.",\n  "DisplayFormClientSideComponentId": "",\n  "DisplayFormClientSideComponentProperties": "",\n  "DisplayFormTarget": 0,\n  "DisplayFormTemplateName": "ListForm",\n  "DisplayFormUrl": "",\n  "DocumentTemplate": "",\n  "DocumentTemplateUrl": "",\n  "EditFormClientSideComponentId": "",\n  "EditFormClientSideComponentProperties": "",\n  "EditFormTarget": 0,\n  "EditFormTemplateName": "ListForm",\n  "EditFormUrl": "",\n  "Group": "List Content Types",\n  "Hidden": false,\n  "Id": {\n    "StringValue": "0x01000B1208C5D23DF44B9F1AEE7373DE9D5E"\n  },\n  "JSLink": "",\n  "MobileDisplayFormUrl": "",\n  "MobileEditFormUrl": "",\n  "MobileNewFormUrl": "",\n  "Name": "Item",\n  "NewFormClientSideComponentId": null,\n  "NewFormClientSideComponentProperties": "",\n  "NewFormTarget": 0,\n  "NewFormTemplateName": "ListForm",\n  "NewFormUrl": "",\n  "ReadOnly": false,\n  "SchemaXml": "<ContentType ID=\\"0x01000B1208C5D23DF44B9F1AEE7373DE9D5E\\" Name=\\"Item\\" Group=\\"List Content Types\\" Description=\\"Create a new list item.\\" Version=\\"0\\" FeatureId=\\"{695b6570-a48b-4a8e-8ea5-26ea7fc1d162}\\" FeatureIds=\\"{695b6570-a48b-4a8e-8ea5-26ea7fc1d162};{c94c1702-30a7-454c-be15-5a895223428d}\\"><Folder TargetName=\\"Item\\"/><Fields><Field ID=\\"{c042a256-787d-4a6f-8a8a-cf6ab767f12d}\\" Type=\\"Computed\\" DisplayName=\\"Content Type\\" Name=\\"ContentType\\" DisplaceOnUpgrade=\\"TRUE\\" RenderXMLUsingPattern=\\"TRUE\\" Sortable=\\"FALSE\\" SourceID=\\"http://schemas.microsoft.com/sharepoint/v3\\" StaticName=\\"ContentType\\" Group=\\"_Hidden\\" PITarget=\\"MicrosoftWindowsSharePointServices\\" PIAttribute=\\"ContentTypeID\\" FromBaseType=\\"TRUE\\"><FieldRefs><FieldRef Name=\\"ContentTypeId\\"/></FieldRefs><DisplayPattern><MapToContentType><Column Name=\\"ContentTypeId\\"/></MapToContentType></DisplayPattern></Field><Field ID=\\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\\" Type=\\"Text\\" Name=\\"Title\\" DisplayName=\\"Title\\" Required=\\"TRUE\\" SourceID=\\"http://schemas.microsoft.com/sharepoint/v3\\" StaticName=\\"Title\\" FromBaseType=\\"TRUE\\" ColName=\\"nvarchar1\\" ShowInNewForm=\\"TRUE\\" ShowInEditForm=\\"TRUE\\"/></Fields><XmlDocuments><XmlDocument NamespaceURI=\\"http://schemas.microsoft.com/sharepoint/v3/contenttype/forms\\"><FormTemplates xmlns=\\"http://schemas.microsoft.com/sharepoint/v3/contenttype/forms\\"><Display>ListForm</Display><Edit>ListForm</Edit><New>ListForm</New></FormTemplates></XmlDocument></XmlDocuments></ContentType>",\n  "Scope": "/Lists/Test",\n  "Sealed": false,\n  "StringId": "0x01000B1208C5D23DF44B9F1AEE7373DE9D5E"\n}\n'))),(0,r.kt)(l.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'ClientFormCustomFormatter               :\nDescription                             : Create a new list item.\nDisplayFormClientSideComponentId        :\nDisplayFormClientSideComponentProperties:\nDisplayFormTarget                       : 0\nDisplayFormTemplateName                 : ListForm\nDisplayFormUrl                          :\nDocumentTemplate                        :\nDocumentTemplateUrl                     :\nEditFormClientSideComponentId           :\nEditFormClientSideComponentProperties   :\nEditFormTarget                          : 0\nEditFormTemplateName                    : ListForm\nEditFormUrl                             :\nGroup                                   : List Content Types\nHidden                                  : false\nId                                      : {"StringValue":"0x01006510BD288ADEDD4AB8AC500FA0B356E4"}\nJSLink                                  :\nMobileDisplayFormUrl                    :\nMobileEditFormUrl                       :\nMobileNewFormUrl                        :\nName                                    : Item\nNewFormClientSideComponentId            : null\nNewFormClientSideComponentProperties    :\nNewFormTarget                           : 0\nNewFormTemplateName                     : ListForm\nNewFormUrl                              :\nReadOnly                                : false\nSchemaXml                               : <ContentType ID="0x01006510BD288ADEDD4AB8AC500FA0B356E4" Name="Item" Group="List Content Types" Description="Create a new list item." Version="0" FeatureId="{695b6570-a48b-4a8e-8ea5-26ea7fc1d162}" FeatureIds="{695b6570-a48b-4a8e-8ea5-26ea7fc1d162};{c94c1702-30a7-454c-be15-5a895223428d}"><Folder TargetName="Item"/><Fields><Field ID="{c042a256-787d-4a6f-8a8a-cf6ab767f12d}" Type="Computed" DisplayName="Content Type" Name="ContentType" DisplaceOnUpgrade="TRUE" RenderXMLUsingPattern="TRUE" Sortable="FALSE" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="ContentType" Group="_Hidden" PITarget="MicrosoftWindowsSharePointServices" PIAttribute="ContentTypeID" FromBaseType="TRUE"><FieldRefs><FieldRef Name="ContentTypeId"/></FieldRefs><DisplayPattern><MapToContentType><Column Name="ContentTypeId"/></MapToContentType></DisplayPattern></Field><Field ID="{fa564e0f-0c70-4ab9-b863-0177e6ddd247}" Type="Text" Name="Title" DisplayName="Title" Required="TRUE" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="Title" FromBaseType="TRUE" ColName="nvarchar1" ShowInNewForm="TRUE" ShowInEditForm="TRUE"/></Fields><XmlDocuments><XmlDocument NamespaceURI="http://schemas.microsoft.com/sharepoint/v3/contenttype/forms"><FormTemplates xmlns="http://schemas.microsoft.com/sharepoint/v3/contenttype/forms"><Display>ListForm</Display><Edit>ListForm</Edit><New>ListForm</New></FormTemplates></XmlDocument></XmlDocuments></ContentType>\nScope                                   : /Lists/Test\nSealed                                  : false\nStringId                                : 0x01006510BD288ADEDD4AB8AC500FA0B356E4\n'))),(0,r.kt)(l.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'ClientFormCustomFormatter,Description,DisplayFormClientSideComponentId,DisplayFormClientSideComponentProperties,DisplayFormTarget,DisplayFormTemplateName,DisplayFormUrl,DocumentTemplate,DocumentTemplateUrl,EditFormClientSideComponentId,EditFormClientSideComponentProperties,EditFormTarget,EditFormTemplateName,EditFormUrl,Group,Hidden,Id,JSLink,MobileDisplayFormUrl,MobileEditFormUrl,MobileNewFormUrl,Name,NewFormClientSideComponentId,NewFormClientSideComponentProperties,NewFormTarget,NewFormTemplateName,NewFormUrl,ReadOnly,SchemaXml,Scope,Sealed,StringId\n,Create a new list item.,,,0,ListForm,,,,,,0,ListForm,,List Content Types,,"{""StringValue"":""0x01006D9EF01B2D22B3428279F8CF918B5EE0""}",,,,,Item,,,0,ListForm,,,"<ContentType ID=""0x01006D9EF01B2D22B3428279F8CF918B5EE0"" Name=""Item"" Group=""List Content Types"" Description=""Create a new list item."" Version=""0"" FeatureId=""{695b6570-a48b-4a8e-8ea5-26ea7fc1d162}"" FeatureIds=""{695b6570-a48b-4a8e-8ea5-26ea7fc1d162};{c94c1702-30a7-454c-be15-5a895223428d}""><Folder TargetName=""Item""/><Fields><Field ID=""{c042a256-787d-4a6f-8a8a-cf6ab767f12d}"" Type=""Computed"" DisplayName=""Content Type"" Name=""ContentType"" DisplaceOnUpgrade=""TRUE"" RenderXMLUsingPattern=""TRUE"" Sortable=""FALSE"" SourceID=""http://schemas.microsoft.com/sharepoint/v3"" StaticName=""ContentType"" Group=""_Hidden"" PITarget=""MicrosoftWindowsSharePointServices"" PIAttribute=""ContentTypeID"" FromBaseType=""TRUE""><FieldRefs><FieldRef Name=""ContentTypeId""/></FieldRefs><DisplayPattern><MapToContentType><Column Name=""ContentTypeId""/></MapToContentType></DisplayPattern></Field><Field ID=""{fa564e0f-0c70-4ab9-b863-0177e6ddd247}"" Type=""Text"" Name=""Title"" DisplayName=""Title"" Required=""TRUE"" SourceID=""http://schemas.microsoft.com/sharepoint/v3"" StaticName=""Title"" FromBaseType=""TRUE"" ColName=""nvarchar1"" ShowInNewForm=""TRUE"" ShowInEditForm=""TRUE""/></Fields><XmlDocuments><XmlDocument NamespaceURI=""http://schemas.microsoft.com/sharepoint/v3/contenttype/forms""><FormTemplates xmlns=""http://schemas.microsoft.com/sharepoint/v3/contenttype/forms""><Display>ListForm</Display><Edit>ListForm</Edit><New>ListForm</New></FormTemplates></XmlDocument></XmlDocuments></ContentType>",/Lists/Test,,0x01006D9EF01B2D22B3428279F8CF918B5EE0\n'))),(0,r.kt)(l.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# spo list contenttype add --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "Documents" --id "0x0103"\n\nDate: 2/20/2023\n\n## Item ([object Object])\n\nProperty | Value\n---------|-------\nClientFormCustomFormatter |\nDescription | Create a new list item.\nDisplayFormClientSideComponentId |\nDisplayFormClientSideComponentProperties |\nDisplayFormTarget | 0\nDisplayFormTemplateName | ListForm\nDisplayFormUrl |\nDocumentTemplate | \nDocumentTemplateUrl | \nEditFormClientSideComponentId |\nEditFormClientSideComponentProperties |\nEditFormTarget | 0\nEditFormTemplateName | ListForm\nEditFormUrl |\nGroup | List Content Types\nHidden | false\nId | {"StringValue":"0x01000B1208C5D23DF44B9F1AEE7373DE9D5E"}\nJSLink |\nMobileDisplayFormUrl |\nMobileEditFormUrl |\nMobileNewFormUrl |\nName | Issue\nNewFormClientSideComponentId | null\nNewFormClientSideComponentProperties |\nNewFormTarget | 0\nNewFormTemplateName | ListForm\nNewFormUrl |\nReadOnly | false\nSchemaXml | <ContentType ID="0x01000B1208C5D23DF44B9F1AEE7373DE9D5E" Name="Item" Group="List Content Types" Description="Create a new list item." Version="0" FeatureId="{695b6570-a48b-4a8e-8ea5-26ea7fc1d162}" FeatureIds="{695b6570-a48b-4a8e-8ea5-26ea7fc1d162};{c94c1702-30a7-454c-be15-5a895223428d}"><Folder TargetName="Item"/><Fields><Field ID="{c042a256-787d-4a6f-8a8a-cf6ab767f12d}" Type="Computed" DisplayName="Content Type" Name="ContentType" DisplaceOnUpgrade="TRUE" RenderXMLUsingPattern="TRUE" Sortable="FALSE" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="ContentType" Group="_Hidden" PITarget="MicrosoftWindowsSharePointServices" PIAttribute="ContentTypeID" FromBaseType="TRUE"><FieldRefs><FieldRef Name="ContentTypeId"/></FieldRefs><DisplayPattern><MapToContentType><Column Name="ContentTypeId"/></MapToContentType></DisplayPattern></Field><Field ID="{fa564e0f-0c70-4ab9-b863-0177e6ddd247}" Type="Text" Name="Title" DisplayName="Title" Required="TRUE" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="Title" FromBaseType="TRUE" ColName="nvarchar1" ShowInNewForm="TRUE" ShowInEditForm="TRUE"/></Fields><XmlDocuments><XmlDocument NamespaceURI="http://schemas.microsoft.com/sharepoint/v3/contenttype/forms"><FormTemplates xmlns="http://schemas.microsoft.com/sharepoint/v3/contenttype/forms"><Display>ListForm</Display><Edit>ListForm</Edit><New>ListForm</New></FormTemplates></XmlDocument></XmlDocuments></ContentType>\nScope | /Lists/Test\nSealed | false\nStringId | 0x01000B1208C5D23DF44B9F1AEE7373DE9D5E\n')))))}f.isMDXComponent=!0}}]);