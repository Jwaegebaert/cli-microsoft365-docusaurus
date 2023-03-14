"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[83415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(87462),l=(n(67294),n(3905));const a={toc:[]},o="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(o,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-h, --help [help]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,l.kt)("code",null,"options"),", ",(0,l.kt)("code",null,"examples"),", ",(0,l.kt)("code",null,"remarks"),", ",(0,l.kt)("code",null,"response"),", ",(0,l.kt)("code",null,"full"),". Default is ",(0,l.kt)("code",null,"full"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--query [query]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"JMESPath query string. See ",(0,l.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"-o, --output [output]"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Output type. ",(0,l.kt)("code",null,"json"),", ",(0,l.kt)("code",null,"text"),", ",(0,l.kt)("code",null,"csv"),", ",(0,l.kt)("code",null,"md"),". Default is ",(0,l.kt)("code",null,"json"),".")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--verbose"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with verbose logging.")),(0,l.kt)("dt",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"--debug"))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),l=n(86010);const a={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),l=n(67294),a=n(86010),o=n(12466),s=n(56697),i=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[i,u]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(n);return[r,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),k=(()=>{const e=i??p;return m({value:e,tabValues:a})?e:null})();(0,l.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var k=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(p(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,a.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return l.createElement("div",{className:(0,a.Z)("tabs-container",h.tabList)},l.createElement(v,(0,r.Z)({},e,t)),l.createElement(g,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return l.createElement(y,(0,r.Z)({key:String(t)},e))}},26031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),l=(n(67294),n(3905)),a=n(37884),o=n(74866),s=n(85162);const i={},u="spo file version get",c={unversionedId:"cmd/spo/file/file-version-get",id:"cmd/spo/file/file-version-get",title:"spo file version get",description:"Gets information about a specific version of a specified file",source:"@site/docs/cmd/spo/file/file-version-get.mdx",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-version-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-version-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-version-get.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo file version clear",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-version-clear"},next:{title:"spo file version list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-version-list"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:d},f="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spo-file-version-get"},"spo file version get"),(0,l.kt)("p",null,"Gets information about a specific version of a specified file"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version get [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("dl",null,(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-w, --webUrl <webUrl>"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"The URL of the site where the file is located")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"--label <label>"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"Label of version which will be retrieved")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-u, --fileUrl [fileUrl]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"The server-relative URL of the file to retrieve. Specify either ",(0,l.kt)("code",{parentName:"p"},"fileUrl")," or ",(0,l.kt)("code",{parentName:"p"},"fileId")," but not both")),(0,l.kt)("dt",{parentName:"dl"},(0,l.kt)("p",{parentName:"dt"},(0,l.kt)("code",{parentName:"p"},"-i, --fileId [fileId]"))),(0,l.kt)("dd",{parentName:"dl"},(0,l.kt)("p",{parentName:"dd"},"The UniqueId (GUID) of the file to retrieve. Specify either ",(0,l.kt)("code",{parentName:"p"},"fileUrl")," or ",(0,l.kt)("code",{parentName:"p"},"fileId")," but not both"))),(0,l.kt)(a.ZP,{mdxType:"Global"}),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Get file version in a specific site based on fileId"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version get --webUrl https://contoso.sharepoint.com --label \"1.0\" --fileId 'b2307a39-e878-458b-bc90-03bc578531d6'\n")),(0,l.kt)("p",null,"Get file in a specific site based on fileUrl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file version get --webUrl https://contoso.sharepoint.com --label \"1.0\" --fileUrl '/Shared Documents/Document.docx'\n")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "CheckInComment": "",\n  "Created": "2022-10-30T12:03:06Z",\n  "ID": 512,\n  "IsCurrentVersion": false,\n  "Length": "18898",\n  "Size": 18898,\n  "Url": "_vti_history/512/Shared Documents/Document.docx",\n  "VersionLabel": "1.0"\n}\n'))),(0,l.kt)(s.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"CheckInComment  :\nCreated         : 2022-10-30T12:03:06Z\nID              : 512\nIsCurrentVersion: false\nLength          : 18898\nSize            : 18898\nUrl             : _vti_history/512/Shared Documents/Document.docx\nVersionLabel    : 1.0\n"))),(0,l.kt)(s.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"CheckInComment,Created,ID,IsCurrentVersion,Length,Size,Url,VersionLabel\n,2022-10-30T12:03:06Z,512,,18898,18898,_vti_history/512/Shared Documents/Document.docx,1.0\n")))))}b.isMDXComponent=!0}}]);