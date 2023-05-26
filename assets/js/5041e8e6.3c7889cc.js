"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[56497],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,f=u["".concat(l,".").concat(m)]||u[m]||i[m]||r;return a?n.createElement(f,p(p({ref:t},c),{},{components:a})):n.createElement(f,p({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,p=new Array(r);p[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,p[1]=s;for(var d=2;d<r;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),o=a(86010);const r={tabItem:"tabItem_Ymn6"};function p(e){let{children:t,hidden:a,className:p}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,p),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),o=a(67294),r=a(86010),p=a(12466),s=a(56697),l=a(91980),d=a(67392),c=a(50012);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function i(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=i(e),[p,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,d]=f({queryString:a,groupId:n}),[u,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=l??u;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:p,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var k=a(72389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,p.o5)(),i=e=>{const t=e.currentTarget,a=c.indexOf(t),n=d[a].value;n!==s&&(u(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:p}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:i},p,{className:(0,r.Z)("tabs__item",N.tabItem,p?.className,{"tabs__item--active":s===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",N.tabList)},o.createElement(g,(0,n.Z)({},e,t)),o.createElement(h,(0,n.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return o.createElement(y,(0,n.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={toc:[]},p="wrapper";function s(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",{parentName:"p"},"options"),", ",(0,o.kt)("code",{parentName:"p"},"examples"),", ",(0,o.kt)("code",{parentName:"p"},"remarks"),", ",(0,o.kt)("code",{parentName:"p"},"response"),", ",(0,o.kt)("code",{parentName:"p"},"full"),". Default is ",(0,o.kt)("code",{parentName:"p"},"full"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--query [query]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,o.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output type. ",(0,o.kt)("code",{parentName:"p"},"json"),", ",(0,o.kt)("code",{parentName:"p"},"text"),", ",(0,o.kt)("code",{parentName:"p"},"csv"),", ",(0,o.kt)("code",{parentName:"p"},"md"),". Default ",(0,o.kt)("code",{parentName:"p"},"json"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--verbose"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--debug"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}s.isMDXComponent=!0},33676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=a(87462),o=(a(67294),a(3905)),r=a(26054),p=a(74866),s=a(85162);const l={},d="onenote page list",c={unversionedId:"cmd/onenote/page/page-list",id:"cmd/onenote/page/page-list",title:"onenote page list",description:"Retrieve a list of OneNote pages.",source:"@site/docs/cmd/onenote/page/page-list.mdx",sourceDirName:"cmd/onenote/page",slug:"/cmd/onenote/page/page-list",permalink:"/cli-microsoft365-docusaurus/cmd/onenote/page/page-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/onenote/page/page-list.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"onenote notebook list",permalink:"/cli-microsoft365-docusaurus/cmd/onenote/notebook/notebook-list"},next:{title:"outlook mail send",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/mail/mail-send"}},u={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:i},f="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"onenote-page-list"},"onenote page list"),(0,o.kt)("p",null,"Retrieve a list of OneNote pages."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote page list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--userId [userId]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Id of the user. Use either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"groupId"),", ",(0,o.kt)("code",{parentName:"p"},"groupName")," or ",(0,o.kt)("code",{parentName:"p"},"webUrl")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--userName [userName]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Name of the user. Use either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"groupId"),", ",(0,o.kt)("code",{parentName:"p"},"groupName")," or ",(0,o.kt)("code",{parentName:"p"},"webUrl")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--groupId [groupId]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Id of the SharePoint group. Use either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"groupId"),", ",(0,o.kt)("code",{parentName:"p"},"groupName")," or ",(0,o.kt)("code",{parentName:"p"},"webUrl")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--groupName [groupName]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Name of the SharePoint group. Use either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"groupId"),", ",(0,o.kt)("code",{parentName:"p"},"groupName")," or ",(0,o.kt)("code",{parentName:"p"},"webUrl")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --webUrl [webUrl]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"URL of the SharePoint site. Use either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"groupId"),", ",(0,o.kt)("code",{parentName:"p"},"groupName")," or ",(0,o.kt)("code",{parentName:"p"},"webUrl")," but not multiple."))),(0,o.kt)(r.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"When we don't specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"groupId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"groupName")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"webUrl"),", the OneNote pages will be retrieved of the currently logged in user."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"List Microsoft OneNote pages for the currently logged in user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote page list\n")),(0,o.kt)("p",null,"List Microsoft OneNote pages in a specific group specified by id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote page list --groupId 233e43d0-dc6a-482e-9b4e-0de7a7bce9b4\n")),(0,o.kt)("p",null,"List Microsoft OneNote pages in a specific group specified by name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 onenote page list --groupName "MyGroup"\n')),(0,o.kt)("p",null,"List Microsoft OneNote pages for a specific user specified by name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote page list --userName user1@contoso.onmicrosoft.com\n")),(0,o.kt)("p",null,"List Microsoft OneNote pages for a specific user specified by id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote page list --userId 2609af39-7775-4f94-a3dc-0dd67657e900\n")),(0,o.kt)("p",null,"List Microsoft OneNote pages for a specific site"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote page list --webUrl https://contoso.sharepoint.com/sites/testsite\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)(p.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678",\n    "self": "https://graph.microsoft.com/v1.0/users/john@contoso.com/onenote/pages/1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678",\n    "createdDateTime": "2023-01-07T10:57:15Z",\n    "title": "Page B",\n    "createdByAppId": "",\n    "contentUrl": "https://graph.microsoft.com/v1.0/users/john@contoso.com/onenote/pages/1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678/content",\n    "lastModifiedDateTime": "2023-01-07T10:57:17Z",\n    "links": {\n      "oneNoteClientUrl": {\n        "href": "onenote:https://contoso-my.sharepoint.com/personal/john_contoso_com/Documents/Notitieblokken/My%20OneNote/Test.one#Page%20B&section-id=94cacaca-d6b5-428d-b967-d3cf01b95c28&page-id=46a1b220-7ffd-4512-a571-55322097c08d&end"\n      },\n      "oneNoteWebUrl": {\n        "href": "https://contoso-my.sharepoint.com/personal/john_contoso_com/Documents/Notitieblokken/My%20OneNote?wd=target%28Test.one%7C94cacaca-d6b5-428d-b967-d3cf01b95c28%2FPage%20B%7C46a1b220-7ffd-4512-a571-55322097c08d%2F%29"\n      }\n    },\n    "parentSection": {\n      "id": "1-3eb21088-b613-4698-98df-92a7d34e0678",\n      "displayName": "Test",\n      "self": "https://graph.microsoft.com/v1.0/users/john@contoso.com/onenote/sections/1-3eb21088-b613-4698-98df-92a7d34e0678"\n    }\n  }\n]\n'))),(0,o.kt)(s.Z,{value:"Text",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"createdDateTime       title   id\n--------------------  ------  --------------------------------------------------------------------------\n2023-01-07T10:57:15Z  Page B  1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678\n"))),(0,o.kt)(s.Z,{value:"CSV",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"createdDateTime,title,id\n2023-01-07T10:57:15Z,Page B,1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678\n"))),(0,o.kt)(s.Z,{value:"Markdown",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'# onenote page list --userName "john.doe@contoso.onmicrosoft.com"\n\nDate: 07/01/2023\n\n## Page A (1-a26aaec43ed348bd82edf4eb44e73d6c!14-3eb21088-b613-4698-98df-92a7d34e0678)\n\n## Page B (1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678)\n\nProperty | Value\n---------|-------\nid | 1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678\nself | https://graph.microsoft.com/v1.0/users/john@contoso.com/onenote/pages/1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678\ncreatedDateTime | 2023-01-07T10:57:15Z\ntitle | Page B\ncreatedByAppId |\ncontentUrl | https://graph.microsoft.com/v1.0/users/john@contoso.com/onenote/pages/1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678/content\nlastModifiedDateTime | 2023-01-07T10:57:17Z\nlinks | { "oneNoteClientUrl": { "href": "onenote:https://contoso-my.sharepoint.com/personal/john_contoso_com/Documents/Notitieblokken/My%20OneNote/Test.one#Page%20B& -id=94cacaca-d6b5-428d-b967-d3cf01b95c28&page-id=46a1b220-7ffd-4512-a571-55322097c08d&end" }, "oneNoteWebUrl": { "href": "https://contoso-my.sharepoint.com/personal/john_contoso_com/Documents/Notitieblokken/My%20OneNote?wd=target%28Test.one%7C94cacaca-d6b5-428d-b967-d3cf01b95c28%2FPage%20B%7C46a1b220-7ffd-4512-a571-55322097c08d%2F%29"}}\nparentSection | {"id":"1-3eb21088-b613-4698-98df-92a7d34e0678","displayName":"Test","self":"https://graph.microsoft.com/v1.0/users/john@contoso.com/onenote/sections/1-3eb21088-b613-4698-98df-92a7d34e0678"}\n')))))}b.isMDXComponent=!0}}]);