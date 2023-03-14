"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[37399],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||n;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>o});var r=a(87462),l=(a(67294),a(3905));const n={toc:[]},i="wrapper";function o(e){let{components:t,...a}=e;return(0,l.kt)(i,(0,r.Z)({},n,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-h, --help [help]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,l.kt)("code",null,"options"),", ",(0,l.kt)("code",null,"examples"),", ",(0,l.kt)("code",null,"remarks"),", ",(0,l.kt)("code",null,"response"),", ",(0,l.kt)("code",null,"full"),". Default is ",(0,l.kt)("code",null,"full"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--query [query]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"JMESPath query string. See ",(0,l.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-o, --output [output]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output type. ",(0,l.kt)("code",null,"json"),", ",(0,l.kt)("code",null,"text"),", ",(0,l.kt)("code",null,"csv"),", ",(0,l.kt)("code",null,"md"),". Default is ",(0,l.kt)("code",null,"json"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--verbose"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with verbose logging.")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--debug"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with debug logging."))))}o.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),l=a(86010);const n={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(n.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(87462),l=a(67294),n=a(86010),i=a(12466),o=a(56697),s=a(91980),p=a(67392),m=a(50012);function u(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:l}}=e;return{value:t,label:a,attributes:r,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(n),(0,l.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=d(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[s,p]=k({queryString:a,groupId:r}),[u,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,m.Nk)(a);return[r,(0,l.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),h=(()=>{const e=s??u;return c({value:e,tabValues:n})?e:null})();(0,l.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,n]),tabValues:n}}var h=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=m.indexOf(t),r=p[a].value;r!==o&&(u(t),s(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:d},i,{className:(0,n.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return l.createElement("div",{className:(0,n.Z)("tabs-container",b.tabList)},l.createElement(N,(0,r.Z)({},e,t)),l.createElement(g,(0,r.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return l.createElement(y,(0,r.Z)({key:String(t)},e))}},7744:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var r=a(87462),l=(a(67294),a(3905)),n=a(37884),i=a(74866),o=a(85162);const s={},p="spo listitem list",m={unversionedId:"cmd/spo/listitem/listitem-list",id:"cmd/spo/listitem/listitem-list",title:"spo listitem list",description:"Gets a list of items from the specified list",source:"@site/docs/cmd/spo/listitem/listitem-list.mdx",sourceDirName:"cmd/spo/listitem",slug:"/cmd/spo/listitem/listitem-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/listitem/listitem-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo listitem isrecord",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-isrecord"},next:{title:"spo listitem record declare",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-record-declare"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:d},k="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spo-listitem-list"},"spo listitem list"),(0,l.kt)("p",null,"Gets a list of items from the specified list"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem list [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("dl",null,(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"URL of the site from which the item should be retrieved.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-l, --listId [listId]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"ID of the list. Specify either ",(0,l.kt)("code",{parentName:"p"},"listTitle"),", ",(0,l.kt)("code",{parentName:"p"},"listId"),", or ",(0,l.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-t, --listTitle [listTitle]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Title of the list. Specify either ",(0,l.kt)("code",{parentName:"p"},"listTitle"),", ",(0,l.kt)("code",{parentName:"p"},"listId"),", or ",(0,l.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Server- or site-relative URL of the list. Specify either ",(0,l.kt)("code",{parentName:"p"},"listTitle"),", ",(0,l.kt)("code",{parentName:"p"},"listId"),", or ",(0,l.kt)("code",{parentName:"p"},"listUrl")," but not multiple.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-q, --camlQuery [camlQuery]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"CAML query to use to query the list of items with.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-f, --fields [fields]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Comma-separated list of fields to retrieve. Will retrieve all fields if not specified and json output is requested. Specify ",(0,l.kt)("code",{parentName:"p"},"camlQuery")," or ",(0,l.kt)("code",{parentName:"p"},"fields")," but not both.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-l, --filter [filter]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"OData filter to use to query the list of items with. Specify ",(0,l.kt)("code",{parentName:"p"},"camlQuery")," or ",(0,l.kt)("code",{parentName:"p"},"filter")," but not both.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-p, --pageSize [pageSize]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Number of list items to return. Specify ",(0,l.kt)("code",{parentName:"p"},"camlQuery")," or ",(0,l.kt)("code",{parentName:"p"},"pageSize")," but not both.")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-n, --pageNumber [pageNumber]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Page number to return if ",(0,l.kt)("code",{parentName:"p"},"pageSize")," is specified (first page is indexed as value of 0)."))),(0,l.kt)(n.ZP,{mdxType:"Global"}),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pageNumber")," is specified as a 0-based index. A value of ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," returns the third page of items."),(0,l.kt)("p",null,"If you want to specify a lookup type in the ",(0,l.kt)("inlineCode",{parentName:"p"},"properties")," option, define which columns from the related list should be returned."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Get all items from a list named Demo List"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem list --listTitle "Demo List" --webUrl https://contoso.sharepoint.com/sites/project-x\n')),(0,l.kt)("p",null,"From a list named ",(0,l.kt)("em",{parentName:"p"},"Demo List")," get all items with title ",(0,l.kt)("em",{parentName:"p"},"Demo list item")," using a CAML query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem list --listTitle \"Demo List\" --webUrl https://contoso.sharepoint.com/sites/project-x --camlQuery \"<View><Query><Where><Eq><FieldRef Name='Title' /><Value Type='Text'>Demo list item</Value></Eq></Where></Query></View>\"\n")),(0,l.kt)("p",null,"Get all items from a list with ID ",(0,l.kt)("em",{parentName:"p"},"935c13a0-cc53-4103-8b48-c1d0828eaa7f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem list --listId 935c13a0-cc53-4103-8b48-c1d0828eaa7f --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,l.kt)("p",null,"Get all items from list named ",(0,l.kt)("em",{parentName:"p"},"Demo List"),". For each item, retrieve the value of the ",(0,l.kt)("em",{parentName:"p"},"ID"),", ",(0,l.kt)("em",{parentName:"p"},"Title")," and ",(0,l.kt)("em",{parentName:"p"},"Modified")," fields"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem list --listTitle "Demo List" --webUrl https://contoso.sharepoint.com/sites/project-x --fields "ID,Title,Modified"\n')),(0,l.kt)("p",null,"Get all items from list named ",(0,l.kt)("em",{parentName:"p"},"Demo List"),". For each item, retrieve the value of the ",(0,l.kt)("em",{parentName:"p"},"ID"),", ",(0,l.kt)("em",{parentName:"p"},"Title"),", ",(0,l.kt)("em",{parentName:"p"},"Modified")," fields, and the value of lookup field ",(0,l.kt)("em",{parentName:"p"},"Company")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem list --listTitle "Demo List" --webUrl https://contoso.sharepoint.com/sites/project-x --fields "ID,Title,Modified,Company/Title"\n')),(0,l.kt)("p",null,"From a list named ",(0,l.kt)("em",{parentName:"p"},"Demo List")," get all items with title ",(0,l.kt)("em",{parentName:"p"},"Demo list item")," using an OData filter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem list --listTitle "Demo List" --webUrl https://contoso.sharepoint.com/sites/project-x --filter "Title eq \'Demo list item\'"\n')),(0,l.kt)("p",null,"From a list named ",(0,l.kt)("em",{parentName:"p"},"Demo List")," get the second batch of 10 items"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem list --listTitle "Demo List" --webUrl https://contoso.sharepoint.com/sites/project-x --pageSize 10 --pageNumber 2\n')),(0,l.kt)("p",null,"Get all items from a list by server-relative URL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem list --listUrl /sites/project-x/documents --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "FileSystemObjectType": 0,\n    "Id": 236,\n    "ServerRedirectedEmbedUri": null,\n    "ServerRedirectedEmbedUrl": "",\n    "ContentTypeId": "0x01003CDBEB7138618C47A98D56499135D6EE0004C0F5794DEBCC4BAC981AC4AE1BD803",\n    "Title": "Test",\n    "Modified": "2022-11-16T21:00:03Z",\n    "Created": "2022-11-16T20:56:31Z",\n    "AuthorId": 10,\n    "EditorId": 10,\n    "OData__UIVersionString": "6.0",\n    "Attachments": true,\n    "GUID": "cac57513-e870-4e7a-9f23-f4ea10e14f4e",\n    "ComplianceAssetId": null,\n    "OData__vti_ItemDeclaredRecord": null\n  }\n]\n'))),(0,l.kt)(o.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Id   Title\n---  -----\n236  Test\n"))),(0,l.kt)(o.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"FileSystemObjectType,Id,ServerRedirectedEmbedUri,ServerRedirectedEmbedUrl,ContentTypeId,Title,Modified,Created,AuthorId,EditorId,OData__UIVersionString,Attachments,GUID,ComplianceAssetId,OData__vti_ItemDeclaredRecord\n0,236,,,0x01003CDBEB7138618C47A98D56499135D6EE0004C0F5794DEBCC4BAC981AC4AE1BD803,Test,2022-11-16T21:00:03Z,2022-11-16T20:56:31Z,10,10,6.0,1,cac57513-e870-4e7a-9f23-f4ea10e14f4e,,\n"))),(0,l.kt)(o.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},'# spo listitem list --webUrl "https://contoso.sharepoint.com" --listTitle "My List"\n\nDate: 2/20/2023\n\n## Demo Item (147)\n\nProperty | Value\n---------|-------\nFileSystemObjectType | 0\nId | 236\nServerRedirectedEmbedUri | null\nServerRedirectedEmbedUrl |\nContentTypeId | 0x01003CDBEB7138618C47A98D56499135D6EE0004C0F5794DEBCC4BAC981AC4AE1BD803\nTitle | Test\nComplianceAssetId | null\nModified | 2022-11-16T21:00:03Z\nCreated | 2022-11-16T20:56:31Z\nAuthorId | 10\nEditorId | 10\nOData\\_\\_UIVersionString | 6.0\nAttachments | false\nGUID | cac57513-e870-4e7a-9f23-f4ea10e14f4e\nOData__vti_ItemDeclaredRecord | null\n')))))}f.isMDXComponent=!0}}]);