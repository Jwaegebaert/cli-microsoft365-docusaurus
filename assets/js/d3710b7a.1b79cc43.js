"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[33883],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),i=a(86010),l=a(12466),o=a(56697),s=a(91980),p=a(67392),d=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=c(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,p]=k({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),f=(()=>{const e=s??m;return u({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),h(e)}),[p,h,i]),tabValues:i}}var f=a(72389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==o&&(m(t),s(n))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:u,onClick:c},l,{className:(0,i.Z)("tabs__item",N.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",N.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={toc:[]},l="wrapper";function o(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}o.isMDXComponent=!0},46889:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(26054),l=a(74866),o=a(85162);const s={},p="spo listitem set",d={unversionedId:"cmd/spo/listitem/listitem-set",id:"cmd/spo/listitem/listitem-set",title:"spo listitem set",description:"Updates a list item in the specified list",source:"@site/docs/cmd/spo/listitem/listitem-set.mdx",sourceDirName:"cmd/spo/listitem",slug:"/cmd/spo/listitem/listitem-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/listitem/listitem-set.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo listitem list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-list"},next:{title:"spo listitem remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-remove"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:c},k="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-listitem-set"},"spo listitem set"),(0,r.kt)("p",null,"Updates a list item in the specified list"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"URL of the site where the item should be updated")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the list item to update.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-l, --listId [listId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the list where the item should be updated. Specify either ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", ",(0,r.kt)("code",{parentName:"p"},"listId")," or ",(0,r.kt)("code",{parentName:"p"},"listUrl"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-t, --listTitle [listTitle]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Title of the list where the item should be updated. Specify either ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", ",(0,r.kt)("code",{parentName:"p"},"listId")," or ",(0,r.kt)("code",{parentName:"p"},"listUrl"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Server- or site-relative URL of the list where the item should be updated. Specify either ",(0,r.kt)("code",{parentName:"p"},"listTitle"),", ",(0,r.kt)("code",{parentName:"p"},"listId")," or ",(0,r.kt)("code",{parentName:"p"},"listUrl"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-c, --contentType [contentType]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The name or the ID of the content type to associate with the updated item")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-s, --systemUpdate"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Update the item without updating the modified date and modified by fields"))),(0,r.kt)(i.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("admonition",{title:"When using DateTime fields",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When updating a list item with a DateTime field, use the timezone and the format that the site expects, based on its regional settings. Alternatively, a format which works on all regions is the following: ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyy-MM-dd HH:mm:ss"),". However, you should use the local timezone in all situations. UTC date/time or ISO 8601 formatted date/time is not supported.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Update an item with id ",(0,r.kt)("em",{parentName:"p"},"147")," with title ",(0,r.kt)("em",{parentName:"p"},"Demo Item")," and content type name ",(0,r.kt)("em",{parentName:"p"},"Item")," in list with title ",(0,r.kt)("em",{parentName:"p"},"Demo List")," in a site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem set --contentType Item --listTitle "Demo List" --id 147 --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo Item"\n')),(0,r.kt)("p",null,"Update an item with id ",(0,r.kt)("em",{parentName:"p"},"147")," with title ",(0,r.kt)("em",{parentName:"p"},"Demo Multi Managed Metadata Field")," and a single-select metadata field named ",(0,r.kt)("em",{parentName:"p"},"SingleMetadataField")," in list with title ",(0,r.kt)("em",{parentName:"p"},"Demo List")," in a site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem set --listTitle "Demo List" --id 147 --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo Single Managed Metadata Field" --SingleMetadataField "TermLabel1|fa2f6bfd-1fad-4d18-9c89-289fe6941377;"\n')),(0,r.kt)("p",null,"Update an item with id ",(0,r.kt)("em",{parentName:"p"},"147")," with Title ",(0,r.kt)("em",{parentName:"p"},"Demo Multi Managed Metadata Field")," and a multi-select metadata field named ",(0,r.kt)("em",{parentName:"p"},"MultiMetadataField")," in list with title ",(0,r.kt)("em",{parentName:"p"},"Demo List")," in a site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem set --listTitle "Demo List" --id 147 --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo Multi Managed Metadata Field" --MultiMetadataField "TermLabel1|cf8c72a1-0207-40ee-aebd-fca67d20bc8a;TermLabel2|e5cc320f-8b65-4882-afd5-f24d88d52b75;"\n')),(0,r.kt)("p",null,"Update an item with id 147 with Title ",(0,r.kt)("em",{parentName:"p"},"Demo Single Person Field")," and a single-select people field named ",(0,r.kt)("em",{parentName:"p"},"SinglePeopleField")," to list with title ",(0,r.kt)("em",{parentName:"p"},"Demo List")," in a site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem set --listTitle "Demo List" --id 147 --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo Single Person Field" --SinglePeopleField "[{\'Key\':\'i:0#.f|membership|markh@conotoso.com\'}]"\n')),(0,r.kt)("p",null,"Update an item with id ",(0,r.kt)("em",{parentName:"p"},"147")," with Title ",(0,r.kt)("em",{parentName:"p"},"Demo Multi Person Field")," and a multi-select people field named ",(0,r.kt)("em",{parentName:"p"},"MultiPeopleField")," to list with title ",(0,r.kt)("em",{parentName:"p"},"Demo List")," in a site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem set --listTitle \"Demo List\" --id 147 --webUrl https://contoso.sharepoint.com/sites/project-x --Title \"Demo Multi Person Field\" --MultiPeopleField \"[{'Key':'i:0#.f|membership|markh@conotoso.com'},{'Key':'i:0#.f|membership|john.doe@conotoso.com'}]\"\n")),(0,r.kt)("p",null,"Update the field ",(0,r.kt)("em",{parentName:"p"},"Title")," and ",(0,r.kt)("em",{parentName:"p"},"CustomHyperlink")," of an item with a specific id in a list retrieved by server-relative URL in a specific site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem set --listUrl \'/sites/project-x/lists/Demo List\' --id 147 --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo Hyperlink Field" --CustomHyperlink "https://www.bing.com, Bing"\n')),(0,r.kt)("p",null,"Update an item with a specific Title and multi-choice value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem set --listTitle "Demo List" --id 147 --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo multi-choice Field" --MultiChoiceField "Choice 1;#Choice 2;#Choice 3"\n')),(0,r.kt)("p",null,"Update an item with a specific Title and DateTime value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem set --listTitle "Demo List" --id 147 --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo DateTime Field" --SomeDateTimeField "2023-01-16 15:30:00"\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "FileSystemObjectType": 0,\n  "Id": 236,\n  "ServerRedirectedEmbedUri": null,\n  "ServerRedirectedEmbedUrl": "",\n  "ID": 236,\n  "ContentTypeId": "0x01003CDBEB7138618C47A98D56499135D6EE0004C0F5794DEBCC4BAC981AC4AE1BD803",\n  "Title": "Updated Title",\n  "Modified": "2022-11-16T21:10:06Z",\n  "Created": "2022-11-16T20:56:31Z",\n  "AuthorId": 10,\n  "EditorId": 10,\n  "OData__UIVersionString": "7.0",\n  "Attachments": true,\n  "GUID": "cac57513-e870-4e7a-9f23-f4ea10e14f4e",\n  "ComplianceAssetId": null,\n  "OData__vti_ItemDeclaredRecord": null\n}\n'))),(0,r.kt)(o.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Attachments                  : true\nAuthorId                     : 10\nComplianceAssetId            : null\nContentTypeId                : 0x01003CDBEB7138618C47A98D56499135D6EE0004C0F5794DEBCC4BAC981AC4AE1BD803\nCreated                      : 2022-11-16T20:56:31Z\nEditorId                     : 10\nFileSystemObjectType         : 0\nGUID                         : cac57513-e870-4e7a-9f23-f4ea10e14f4e\nID                           : 236\nId                           : 236\nModified                     : 2022-11-16T21:10:37Z\nOData__UIVersionString       : 8.0\nOData__vti_ItemDeclaredRecord: null\nServerRedirectedEmbedUri     : null\nServerRedirectedEmbedUrl     :\nTitle                        : Updated Title\n"))),(0,r.kt)(o.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"FileSystemObjectType,Id,ServerRedirectedEmbedUri,ServerRedirectedEmbedUrl,ID,ContentTypeId,Title,Modified,Created,AuthorId,EditorId,OData__UIVersionString,Attachments,GUID,ComplianceAssetId,OData__vti_ItemDeclaredRecord\n0,236,,,236,0x01003CDBEB7138618C47A98D56499135D6EE0004C0F5794DEBCC4BAC981AC4AE1BD803,Updated Title,2022-11-16T21:10:55Z,2022-11-16T20:56:31Z,10,10,9.0,1,cac57513-e870-4e7a-9f23-f4ea10e14f4e,,\n"))),(0,r.kt)(o.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# spo listitem set --listTitle "My List" --id "236" --webUrl "https://contoso.sharepoint.com" --Title "Updated Title"\n\nDate: 2/20/2023\n\n## Updated Title (236)\n\nProperty | Value\n---------|-------\nFileSystemObjectType | 0\nId | 236\nServerRedirectedEmbedUri | null\nServerRedirectedEmbedUrl |\nContentTypeId | 0x01003CDBEB7138618C47A98D56499135D6EE0004C0F5794DEBCC4BAC981AC4AE1BD803\nTitle | Updated Title\nComplianceAssetId | null\nFieldName1 | null\nID | 236\nModified | 2022-11-16T21:10:06Z\nCreated | 2022-11-16T20:56:31Z\nAuthorId | 10\nEditorId | 10\nOData\\_\\_UIVersionString | 7.0\nAttachments | true\nGUID | cac57513-e870-4e7a-9f23-f4ea10e14f4e\nOData__vti_ItemDeclaredRecord | null\n')))))}h.isMDXComponent=!0}}]);