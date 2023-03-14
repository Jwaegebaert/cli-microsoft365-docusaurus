"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[10642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},l="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-h, --help [help]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",null,"options"),", ",(0,a.kt)("code",null,"examples"),", ",(0,a.kt)("code",null,"remarks"),", ",(0,a.kt)("code",null,"response"),", ",(0,a.kt)("code",null,"full"),". Default is ",(0,a.kt)("code",null,"full"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--query [query]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"JMESPath query string. See ",(0,a.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-o, --output [output]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output type. ",(0,a.kt)("code",null,"json"),", ",(0,a.kt)("code",null,"text"),", ",(0,a.kt)("code",null,"csv"),", ",(0,a.kt)("code",null,"md"),". Default is ",(0,a.kt)("code",null,"json"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--verbose"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with verbose logging.")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--debug"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),s=n(56697),i=n(91980),p=n(67392),c=n(50012);function m(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=u(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,p]=f({queryString:n,groupId:r}),[m,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=i??m;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),y(e)}),[p,y,o]),tabValues:o}}var b=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),r=p[n].value;r!==s&&(m(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:u},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function T(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=y(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(T,(0,r.Z)({},e,t)))}function D(e){const t=(0,b.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},19073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(37884),l=n(74866),s=n(85162);const i={},p="spo list contenttype list",c={unversionedId:"cmd/spo/list/list-contenttype-list",id:"cmd/spo/list/list-contenttype-list",title:"spo list contenttype list",description:"Lists content types configured on the list",source:"@site/docs/cmd/spo/list/list-contenttype-list.mdx",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-contenttype-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-contenttype-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-contenttype-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo list contenttype default set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-contenttype-default-set"},next:{title:"spo list contenttype remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-contenttype-remove"}},m={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:u},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-list-contenttype-list"},"spo list contenttype list"),(0,a.kt)("p",null,"Lists content types configured on the list"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"URL of the site where the list is located.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-l, --listId [listId]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"ID of the list. Specify either ",(0,a.kt)("code",{parentName:"p"},"listTitle"),", ",(0,a.kt)("code",{parentName:"p"},"listId"),", or ",(0,a.kt)("code",{parentName:"p"},"listUrl"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-t, --listTitle [listTitle]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Title of the list. Specify either ",(0,a.kt)("code",{parentName:"p"},"listTitle"),", ",(0,a.kt)("code",{parentName:"p"},"listId"),", or ",(0,a.kt)("code",{parentName:"p"},"listUrl"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Server- or site-relative URL of the list. Specify either ",(0,a.kt)("code",{parentName:"p"},"listTitle"),", ",(0,a.kt)("code",{parentName:"p"},"listId"),", or ",(0,a.kt)("code",{parentName:"p"},"listUrl"),"."))),(0,a.kt)(o.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"List all content types configured on a specific list retrieved by id in a specific site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype list --webUrl https://contoso.sharepoint.com/sites/project-x --listId 0cd891ef-afce-4e55-b836-fce03286cccf\n")),(0,a.kt)("p",null,"List all content types configured on a specific list retrieved by title in a specific site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype list --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle Documents\n")),(0,a.kt)("p",null,"List all content types configured on a specific list retrieved by server relative URL in a specific site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list contenttype list --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl 'sites/project-x/Documents'\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "ClientFormCustomFormatter": "",\n    "Description": "Create a new list item.",\n    "DisplayFormClientSideComponentId": "",\n    "DisplayFormClientSideComponentProperties": "",\n    "DisplayFormTarget": 0,\n    "DisplayFormTemplateName": "ListForm",\n    "DisplayFormUrl": "",\n    "DocumentTemplate": "",\n    "DocumentTemplateUrl": "",\n    "EditFormClientSideComponentId": "",\n    "EditFormClientSideComponentProperties": "",\n    "EditFormTarget": 0,\n    "EditFormTemplateName": "ListForm",\n    "EditFormUrl": "",\n    "Group": "List Content Types",\n    "Hidden": false,\n    "Id": {\n      "StringValue": "0x01000B1208C5D23DF44B9F1AEE7373DE9D5E"\n    },\n    "JSLink": "",\n    "MobileDisplayFormUrl": "",\n    "MobileEditFormUrl": "",\n    "MobileNewFormUrl": "",\n    "Name": "Item",\n    "NewFormClientSideComponentId": null,\n    "NewFormClientSideComponentProperties": "",\n    "NewFormTarget": 0,\n    "NewFormTemplateName": "ListForm",\n    "NewFormUrl": "",\n    "ReadOnly": false,\n    "SchemaXml": "<ContentType ID=\\"0x01000B1208C5D23DF44B9F1AEE7373DE9D5E\\" Name=\\"Item\\" Group=\\"List Content Types\\" Description=\\"Create a new list item.\\" Version=\\"0\\" FeatureId=\\"{695b6570-a48b-4a8e-8ea5-26ea7fc1d162}\\" FeatureIds=\\"{695b6570-a48b-4a8e-8ea5-26ea7fc1d162};{c94c1702-30a7-454c-be15-5a895223428d}\\"><Folder TargetName=\\"Item\\"/><Fields><Field ID=\\"{c042a256-787d-4a6f-8a8a-cf6ab767f12d}\\" Type=\\"Computed\\" DisplayName=\\"Content Type\\" Name=\\"ContentType\\" DisplaceOnUpgrade=\\"TRUE\\" RenderXMLUsingPattern=\\"TRUE\\" Sortable=\\"FALSE\\" SourceID=\\"http://schemas.microsoft.com/sharepoint/v3\\" StaticName=\\"ContentType\\" Group=\\"_Hidden\\" PITarget=\\"MicrosoftWindowsSharePointServices\\" PIAttribute=\\"ContentTypeID\\" FromBaseType=\\"TRUE\\"><FieldRefs><FieldRef Name=\\"ContentTypeId\\"/></FieldRefs><DisplayPattern><MapToContentType><Column Name=\\"ContentTypeId\\"/></MapToContentType></DisplayPattern></Field><Field ID=\\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\\" Type=\\"Text\\" Name=\\"Title\\" DisplayName=\\"Title\\" Required=\\"TRUE\\" SourceID=\\"http://schemas.microsoft.com/sharepoint/v3\\" StaticName=\\"Title\\" FromBaseType=\\"TRUE\\" ColName=\\"nvarchar1\\" ShowInNewForm=\\"TRUE\\" ShowInEditForm=\\"TRUE\\"/></Fields><XmlDocuments><XmlDocument NamespaceURI=\\"http://schemas.microsoft.com/sharepoint/v3/contenttype/forms\\"><FormTemplates xmlns=\\"http://schemas.microsoft.com/sharepoint/v3/contenttype/forms\\"><Display>ListForm</Display><Edit>ListForm</Edit><New>ListForm</New></FormTemplates></XmlDocument></XmlDocuments></ContentType>",\n    "Scope": "/Lists/Test",\n    "Sealed": false,\n    "StringId": "0x01000B1208C5D23DF44B9F1AEE7373DE9D5E"\n  }\n]\n'))),(0,a.kt)(s.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"StringId                                Name  Hidden  ReadOnly  Sealed\n--------------------------------------  ----  ------  --------  ------\n0x01000B1208C5D23DF44B9F1AEE7373DE9D5E  Item  false   false     false\n"))),(0,a.kt)(s.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"StringId,Name,Hidden,ReadOnly,Sealed\n0x01000B1208C5D23DF44B9F1AEE7373DE9D5E,Item,,,\n"))),(0,a.kt)(s.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'# spo list contenttype list --webUrl "https://contoso.sharepoint.com/sites/project-x" --listTitle "Documents"\n\nDate: 2/20/2023\n\n## Document ([object Object])\n\nProperty | Value\n---------|-------\nClientFormCustomFormatter |\nDescription | Create a new list item.\nDisplayFormClientSideComponentId |\nDisplayFormClientSideComponentProperties |\nDisplayFormTarget | 0\nDisplayFormTemplateName | ListForm\nDisplayFormUrl |\nDocumentTemplate | \nDocumentTemplateUrl | \nEditFormClientSideComponentId |\nEditFormClientSideComponentProperties |\nEditFormTarget | 0\nEditFormTemplateName | ListForm\nEditFormUrl |\nGroup | List Content Types\nHidden | false\nId | {"StringValue":"0x01000B1208C5D23DF44B9F1AEE7373DE9D5E"}\nJSLink |\nMobileDisplayFormUrl |\nMobileEditFormUrl |\nMobileNewFormUrl |\nName | Item\nNewFormClientSideComponentId | null\nNewFormClientSideComponentProperties |\nNewFormTarget | 0\nNewFormTemplateName | ListForm\nNewFormUrl |\nReadOnly | false\nSchemaXml | <ContentType ID="0x01000B1208C5D23DF44B9F1AEE7373DE9D5E" Name="Item" Group="List Content Types" Description="Create a new list item." Version="0" FeatureId="{695b6570-a48b-4a8e-8ea5-26ea7fc1d162}" FeatureIds="{695b6570-a48b-4a8e-8ea5-26ea7fc1d162};{c94c1702-30a7-454c-be15-5a895223428d}"><Folder TargetName="Item"/><Fields><Field ID="{c042a256-787d-4a6f-8a8a-cf6ab767f12d}" Type="Computed" DisplayName="Content Type" Name="ContentType" DisplaceOnUpgrade="TRUE" RenderXMLUsingPattern="TRUE" Sortable="FALSE" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="ContentType" Group="_Hidden" PITarget="MicrosoftWindowsSharePointServices" PIAttribute="ContentTypeID" FromBaseType="TRUE"><FieldRefs><FieldRef Name="ContentTypeId"/></FieldRefs><DisplayPattern><MapToContentType><Column Name="ContentTypeId"/></MapToContentType></DisplayPattern></Field><Field ID="{fa564e0f-0c70-4ab9-b863-0177e6ddd247}" Type="Text" Name="Title" DisplayName="Title" Required="TRUE" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="Title" FromBaseType="TRUE" ColName="nvarchar1" ShowInNewForm="TRUE" ShowInEditForm="TRUE"/></Fields><XmlDocuments><XmlDocument NamespaceURI="http://schemas.microsoft.com/sharepoint/v3/contenttype/forms"><FormTemplates xmlns="http://schemas.microsoft.com/sharepoint/v3/contenttype/forms"><Display>ListForm</Display><Edit>ListForm</Edit><New>ListForm</New></FormTemplates></XmlDocument></XmlDocuments></ContentType>\nScope | /Lists/Test\nSealed | false\nStringId | 0x01000B1208C5D23DF44B9F1AEE7373DE9D5E\n')))))}y.isMDXComponent=!0}}]);