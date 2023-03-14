"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[56497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||i[m]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={toc:[]},l="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),o=n(67294),r=n(86010),l=n(12466),s=n(56697),c=n(91980),p=n(67392),d=n(50012);function u(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function i(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=i(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,p]=f({queryString:n,groupId:a}),[u,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),k=(()=>{const e=c??u;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),b(e)}),[p,b,r]),tabValues:r}}var k=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),i=e=>{const t=e.currentTarget,n=d.indexOf(t),a=p[n].value;a!==s&&(u(t),c(a))},m=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:i},l,{className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(h,(0,a.Z)({},e,t)),o.createElement(N,(0,a.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},33676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var a=n(87462),o=(n(67294),n(3905)),r=n(37884),l=n(74866),s=n(85162);const c={},p="onenote page list",d={unversionedId:"cmd/onenote/page/page-list",id:"cmd/onenote/page/page-list",title:"onenote page list",description:"Retrieve a list of OneNote pages.",source:"@site/docs/cmd/onenote/page/page-list.mdx",sourceDirName:"cmd/onenote/page",slug:"/cmd/onenote/page/page-list",permalink:"/cli-microsoft365-docusaurus/cmd/onenote/page/page-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/onenote/page/page-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"onenote notebook list",permalink:"/cli-microsoft365-docusaurus/cmd/onenote/notebook/notebook-list"},next:{title:"outlook mail send",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/mail/mail-send"}},u={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:i},f="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"onenote-page-list"},"onenote page list"),(0,o.kt)("p",null,"Retrieve a list of OneNote pages."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote page list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--userId [userId]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Id of the user. Use either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"groupId"),", ",(0,o.kt)("code",{parentName:"p"},"groupName")," or ",(0,o.kt)("code",{parentName:"p"},"webUrl")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--userName [userName]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Name of the user. Use either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"groupId"),", ",(0,o.kt)("code",{parentName:"p"},"groupName")," or ",(0,o.kt)("code",{parentName:"p"},"webUrl")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--groupId [groupId]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Id of the SharePoint group. Use either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"groupId"),", ",(0,o.kt)("code",{parentName:"p"},"groupName")," or ",(0,o.kt)("code",{parentName:"p"},"webUrl")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--groupName [groupName]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Name of the SharePoint group. Use either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"groupId"),", ",(0,o.kt)("code",{parentName:"p"},"groupName")," or ",(0,o.kt)("code",{parentName:"p"},"webUrl")," but not multiple.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --webUrl [webUrl]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"URL of the SharePoint site. Use either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"groupId"),", ",(0,o.kt)("code",{parentName:"p"},"groupName")," or ",(0,o.kt)("code",{parentName:"p"},"webUrl")," but not multiple."))),(0,o.kt)(r.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"When we don't specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"groupId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"groupName")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"webUrl"),", the OneNote pages will be retrieved of the currently logged in user."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"List Microsoft OneNote pages for the currently logged in user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote page list\n")),(0,o.kt)("p",null,"List Microsoft OneNote pages in a specific group specified by id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote page list --groupId 233e43d0-dc6a-482e-9b4e-0de7a7bce9b4\n")),(0,o.kt)("p",null,"List Microsoft OneNote pages in a specific group specified by name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 onenote page list --groupName "MyGroup"\n')),(0,o.kt)("p",null,"List Microsoft OneNote pages for a specific user specified by name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote page list --userName user1@contoso.onmicrosoft.com\n")),(0,o.kt)("p",null,"List Microsoft OneNote pages for a specific user specified by id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote page list --userId 2609af39-7775-4f94-a3dc-0dd67657e900\n")),(0,o.kt)("p",null,"List Microsoft OneNote pages for a specific site"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 onenote page list --webUrl https://contoso.sharepoint.com/sites/testsite\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678",\n    "self": "https://graph.microsoft.com/v1.0/users/john@contoso.com/onenote/pages/1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678",\n    "createdDateTime": "2023-01-07T10:57:15Z",\n    "title": "Page B",\n    "createdByAppId": "",\n    "contentUrl": "https://graph.microsoft.com/v1.0/users/john@contoso.com/onenote/pages/1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678/content",\n    "lastModifiedDateTime": "2023-01-07T10:57:17Z",\n    "links": {\n      "oneNoteClientUrl": {\n        "href": "onenote:https://contoso-my.sharepoint.com/personal/john_contoso_com/Documents/Notitieblokken/My%20OneNote/Test.one#Page%20B&section-id=94cacaca-d6b5-428d-b967-d3cf01b95c28&page-id=46a1b220-7ffd-4512-a571-55322097c08d&end"\n      },\n      "oneNoteWebUrl": {\n        "href": "https://contoso-my.sharepoint.com/personal/john_contoso_com/Documents/Notitieblokken/My%20OneNote?wd=target%28Test.one%7C94cacaca-d6b5-428d-b967-d3cf01b95c28%2FPage%20B%7C46a1b220-7ffd-4512-a571-55322097c08d%2F%29"\n      }\n    },\n    "parentSection": {\n      "id": "1-3eb21088-b613-4698-98df-92a7d34e0678",\n      "displayName": "Test",\n      "self": "https://graph.microsoft.com/v1.0/users/john@contoso.com/onenote/sections/1-3eb21088-b613-4698-98df-92a7d34e0678"\n    }\n  }\n]\n'))),(0,o.kt)(s.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"createdDateTime       title   id\n--------------------  ------  --------------------------------------------------------------------------\n2023-01-07T10:57:15Z  Page B  1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678\n"))),(0,o.kt)(s.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"createdDateTime,title,id\n2023-01-07T10:57:15Z,Page B,1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678\n"))),(0,o.kt)(s.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'# onenote page list --userName "john.doe@contoso.onmicrosoft.com"\n\nDate: 07/01/2023\n\n## Page A (1-a26aaec43ed348bd82edf4eb44e73d6c!14-3eb21088-b613-4698-98df-92a7d34e0678)\n\n## Page B (1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678)\n\nProperty | Value\n---------|-------\nid | 1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678\nself | https://graph.microsoft.com/v1.0/users/john@contoso.com/onenote/pages/1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678\ncreatedDateTime | 2023-01-07T10:57:15Z\ntitle | Page B\ncreatedByAppId |\ncontentUrl | https://graph.microsoft.com/v1.0/users/john@contoso.com/onenote/pages/1-a26aaec43ed348bd82edf4eb44e73d6c!68-3eb21088-b613-4698-98df-92a7d34e0678/content\nlastModifiedDateTime | 2023-01-07T10:57:17Z\nlinks | { "oneNoteClientUrl": { "href": "onenote:https://contoso-my.sharepoint.com/personal/john_contoso_com/Documents/Notitieblokken/My%20OneNote/Test.one#Page%20B& -id=94cacaca-d6b5-428d-b967-d3cf01b95c28&page-id=46a1b220-7ffd-4512-a571-55322097c08d&end" }, "oneNoteWebUrl": { "href": "https://contoso-my.sharepoint.com/personal/john_contoso_com/Documents/Notitieblokken/My%20OneNote?wd=target%28Test.one%7C94cacaca-d6b5-428d-b967-d3cf01b95c28%2FPage%20B%7C46a1b220-7ffd-4512-a571-55322097c08d%2F%29"}}\nparentSection | {"id":"1-3eb21088-b613-4698-98df-92a7d34e0678","displayName":"Test","self":"https://graph.microsoft.com/v1.0/users/john@contoso.com/onenote/sections/1-3eb21088-b613-4698-98df-92a7d34e0678"}\n')))))}b.isMDXComponent=!0}}]);