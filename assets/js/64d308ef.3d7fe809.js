"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[65979],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>f});var n=l(67294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,n,o=function(e,t){if(null==e)return{};var l,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(l),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return l?n.createElement(f,i(i({ref:t},d),{},{components:l})):n.createElement(f,i({ref:t},d))}));function f(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=l.length,i=new Array(r);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<r;p++)i[p]=l[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},37884:(e,t,l)=>{l.d(t,{ZP:()=>a});var n=l(87462),o=(l(67294),l(3905));const r={toc:[]},i="wrapper";function a(e){let{components:t,...l}=e;return(0,o.kt)(i,(0,n.Z)({},r,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}a.isMDXComponent=!0},64007:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=l(87462),o=(l(67294),l(3905)),r=l(37884);const i={},a="spo field set",s={unversionedId:"cmd/spo/field/field-set",id:"cmd/spo/field/field-set",title:"spo field set",description:"Updates existing list or site column",source:"@site/docs/cmd/spo/field/field-set.mdx",sourceDirName:"cmd/spo/field",slug:"/cmd/spo/field/field-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/field/field-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/field/field-set.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo field remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/field/field-remove"},next:{title:"spo file add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-add"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:d},u="wrapper";function m(e){let{components:t,...l}=e;return(0,o.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-field-set"},"spo field set"),(0,o.kt)("p",null,"Updates existing list or site column"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo field set [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Absolute URL of the site where the field is located")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--listId [listId]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"ID of the list where the field is located (if list column). Specify either ",(0,o.kt)("code",{parentName:"p"},"listTitle"),", ",(0,o.kt)("code",{parentName:"p"},"listId")," or ",(0,o.kt)("code",{parentName:"p"},"listUrl"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--listTitle [listTitle]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Title of the list where the field is located (if list column). Specify either ",(0,o.kt)("code",{parentName:"p"},"listTitle"),", ",(0,o.kt)("code",{parentName:"p"},"listId")," or ",(0,o.kt)("code",{parentName:"p"},"listUrl"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Server- or site-relative URL of the list where the field is located (if list column). Specify either ",(0,o.kt)("code",{parentName:"p"},"listTitle"),", ",(0,o.kt)("code",{parentName:"p"},"listId")," or ",(0,o.kt)("code",{parentName:"p"},"listUrl"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"ID of the field to update. Specify ",(0,o.kt)("code",{parentName:"p"},"id")," or ",(0,o.kt)("code",{parentName:"p"},"title")," but not both")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-t, --title [title]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Title or internal name of the field to update. Specify ",(0,o.kt)("code",{parentName:"p"},"id")," or ",(0,o.kt)("code",{parentName:"p"},"title")," but not both")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--updateExistingLists"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Set, to push the update to existing lists. Otherwise, the changes will apply to new lists only"))),(0,o.kt)(r.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Specify properties to update using their names, eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"--Title 'New Title' --JSLink jslink.js"),"."),(0,o.kt)("admonition",{title:'"Escaping JSON in PowerShell"',type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"When updating column formatting for a field with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--CustomFormatter")," option, it's possible to enter a JSON string. In PowerShell 5 to 7.2 ",(0,o.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#escaping-double-quotes-in-powershell"},"specific escaping rules")," apply due to an issue. Remember that you can also use ",(0,o.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#passing-complex-content-into-cli-options"},"file tokens")," instead.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Update the title of the site column specified by its internal name and push changes to existing lists"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo field set --webUrl https://contoso.sharepoint.com/sites/project-x --title 'MyColumn' --updateExistingLists --Title 'My column'\n")),(0,o.kt)("p",null,"Update the title of the list column specified by its ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo field set --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle 'My List' --id 330f29c5-5c4c-465f-9f4b-7903020ae1ce --Title 'My column'\n")),(0,o.kt)("p",null,"Update the description of a column specified by the ID on a list retrieved by the URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo field set --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl '/sites/project-x/Lists/My List' --id 330f29c5-5c4c-465f-9f4b-7903020ae1ce --Description 'My column Description'\n")),(0,o.kt)("p",null,"Update column formatting of the specified list column"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo field set --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle \'My List\' --title \'MyColumn\' --CustomFormatter \'{"schema":"https://developer.microsoft.com/json-schemas/sp/column-formatting.schema.json", "elmType": "div", "txtContent": "@currentField"}\'\n')))}m.isMDXComponent=!0}}]);