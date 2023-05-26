"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[62092],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(87462),n=r(67294),l=r(86010),o=r(12466),s=r(56697),i=r(91980),p=r(67392),d=r(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=u(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,p]=f({queryString:r,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),h=(()=>{const e=i??c;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),k(e)}),[p,k,l]),tabValues:l}}var h=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,r=d.indexOf(t),a=p[r].value;a!==s&&(c(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},p.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:u},o,{className:(0,l.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},n.createElement(N,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return n.createElement(g,(0,a.Z)({key:String(t)},e))}},26054:(e,t,r)=>{r.d(t,{ZP:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={toc:[]},o="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(o,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",{parentName:"p"},"options"),", ",(0,n.kt)("code",{parentName:"p"},"examples"),", ",(0,n.kt)("code",{parentName:"p"},"remarks"),", ",(0,n.kt)("code",{parentName:"p"},"response"),", ",(0,n.kt)("code",{parentName:"p"},"full"),". Default is ",(0,n.kt)("code",{parentName:"p"},"full"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--query [query]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,n.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output type. ",(0,n.kt)("code",{parentName:"p"},"json"),", ",(0,n.kt)("code",{parentName:"p"},"text"),", ",(0,n.kt)("code",{parentName:"p"},"csv"),", ",(0,n.kt)("code",{parentName:"p"},"md"),". Default ",(0,n.kt)("code",{parentName:"p"},"json"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--verbose"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--debug"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}s.isMDXComponent=!0},15289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),l=r(26054),o=r(74866),s=r(85162);const i={},p="spo file list",d={unversionedId:"cmd/spo/file/file-list",id:"cmd/spo/file/file-list",title:"spo file list",description:"Gets all files within the specified folder and site",source:"@site/docs/cmd/spo/file/file-list.mdx",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-list.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo file get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-get"},next:{title:"spo file move",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-move"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:u},f="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-file-list"},"spo file list"),(0,n.kt)("p",null,"Gets all files within the specified folder and site"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file list [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The URL of the site where the folder from which to retrieve files is located")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-f, --folderUrl <folderUrl>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The server- or site-relative URL of the parent folder from which to retrieve files")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-f, --folder <folder>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"(deprecated. Use ",(0,n.kt)("code",{parentName:"p"},"folderUrl")," instead) The server- or site-relative URL of the folder from which to retrieve files")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--fields [fields]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Comma-separated list of fields to retrieve. Will retrieve all fields if not specified.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--filter [filter]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"OData filter to use to query the list of items with")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-r, --recursive"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Set to retrieve files from subfolders"))),(0,n.kt)(l.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"When the ",(0,n.kt)("inlineCode",{parentName:"p"},"fields")," option includes values with a ",(0,n.kt)("inlineCode",{parentName:"p"},"/"),", for example: ",(0,n.kt)("inlineCode",{parentName:"p"},"ListItemAllFields/Id"),", an additional ",(0,n.kt)("inlineCode",{parentName:"p"},"$expand")," query parameter will be included on ",(0,n.kt)("inlineCode",{parentName:"p"},"ListItemAllFields"),"."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Return all files from a folder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file list --webUrl https://contoso.sharepoint.com/sites/project-x --folderUrl 'Shared Documents'\n")),(0,n.kt)("p",null,"Return all files from a folder and all the sub-folders"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file list --webUrl https://contoso.sharepoint.com/sites/project-x --folderUrl 'Shared Documents' --recursive\n")),(0,n.kt)("p",null,"Return the files from a folder with specific fields which will be expanded"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file list --webUrl https://contoso.sharepoint.com/sites/project-x --folderUrl 'Shared Documents' --fields \"Title,Length\"\n")),(0,n.kt)("p",null,"Return the files from a folder that meet the criteria of the filter with specific fields which will be expanded"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file list --webUrl https://contoso.sharepoint.com/sites/project-x --folderUrl 'Shared Documents' --fields ListItemAllFields/Id --filter \"Name eq 'document.docx'\"\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "CheckInComment": "",\n    "CheckOutType": 2,\n    "ContentTag": "{F09C4EFE-B8C0-4E89-A166-03418661B89B},9,12",\n    "CustomizedPageStatus": 0,\n    "ETag": "\\"{F09C4EFE-B8C0-4E89-A166-03418661B89B},9\\"",\n    "Exists": true,\n    "IrmEnabled": false,\n    "Length": 331673,\n    "Level": 1,\n    "LinkingUri": "https://contoso.sharepoint.com/sites/project-x/Shared Documents/Document.docx?d=wf09c4efeb8c04e89a16603418661b89b",\n    "LinkingUrl": "https://contoso.sharepoint.com/sites/project-x/Shared Documents/Document.docx?d=wf09c4efeb8c04e89a16603418661b89b",\n    "MajorVersion": 3,\n    "MinorVersion": 0,\n    "Name": "Document.docx",\n    "ServerRelativeUrl": "/sites/project-x/Shared Documents/Document.docx",\n    "TimeCreated": "2018-02-05T08:42:36Z",\n    "TimeLastModified": "2018-02-05T08:44:03Z",\n    "Title": "",\n    "UIVersion": 1536,\n    "UIVersionLabel": "3.0",\n    "UniqueId": "f09c4efe-b8c0-4e89-a166-03418661b89b"\n  }\n]\n'))),(0,n.kt)(s.Z,{value:"Text",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Name                               ServerRelativeUrl                                UniqueId\n---------------------------------  -----------------------------------------------  ------------------------------------\nDocument.docx                      /sites/project-x/Shared Documents/Document.docx  5eb97525-2167-4d26-94b8-092a97d65716\n"))),(0,n.kt)(s.Z,{value:"CSV",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"Name,ServerRelativeUrl,UniqueId\nDocument.docx,/sites/project-x/Shared Documents/Document.docx,5eb97525-2167-4d26-94b8-092a97d65716\n"))),(0,n.kt)(s.Z,{value:"Markdown",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},'# spo file list --webUrl "https://contoso.sharepoint.com" --folderUrl "Shared Documents"\n\nDate: 23/3/2023\n\n## Document.docx (5eb97525-2167-4d26-94b8-092a97d65716)\n\nProperty | Value\n---------|-------\nName | Document.docx\nServerRelativeUrl | /sites/project-x/Shared Documents/Document.docx\nUniqueId | 5eb97525-2167-4d26-94b8-092a97d65716\n')))))}k.isMDXComponent=!0}}]);