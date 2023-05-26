"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[21306],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(f,l(l({ref:t},i),{},{components:r})):a.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>v});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),s=r(56697),p=r(91980),u=r(67392),i=r(50012);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function c(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,p._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=c(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[p,u]=f({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,i.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=p??m;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var g=r(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:s,selectValue:p,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=u[r].value;a!==s&&(m(t),p(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>i.push(e),onKeyDown:d,onClick:c},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},n.createElement(h,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return n.createElement(N,(0,a.Z)({key:String(t)},e))}},26054:(e,t,r)=>{r.d(t,{ZP:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={toc:[]},l="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",{parentName:"p"},"options"),", ",(0,n.kt)("code",{parentName:"p"},"examples"),", ",(0,n.kt)("code",{parentName:"p"},"remarks"),", ",(0,n.kt)("code",{parentName:"p"},"response"),", ",(0,n.kt)("code",{parentName:"p"},"full"),". Default is ",(0,n.kt)("code",{parentName:"p"},"full"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--query [query]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,n.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output type. ",(0,n.kt)("code",{parentName:"p"},"json,text,csv,md"),". Default ",(0,n.kt)("code",{parentName:"p"},"json"))),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--verbose"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with verbose logging")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--debug"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with debug logging"))))}s.isMDXComponent=!0},77689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(26054),l=r(74866),s=r(85162);const p={},u="spo term group get",i={unversionedId:"cmd/spo/term/term-group-get",id:"cmd/spo/term/term-group-get",title:"spo term group get",description:"Gets information about the specified taxonomy term group",source:"@site/docs/cmd/spo/term/term-group-get.mdx",sourceDirName:"cmd/spo/term",slug:"/cmd/spo/term/term-group-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/term/term-group-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/term/term-group-get.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo term group add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/term/term-group-add"},next:{title:"spo term group list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/term/term-group-list"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:c},f="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-term-group-get"},"spo term group get"),(0,n.kt)("p",null,"Gets information about the specified taxonomy term group"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term group get [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-u, --webUrl [webUrl]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"If specified, allows you to get a term group from the tenant term store as well as the sitecollection specific term store. Defaults to the tenant admin site.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"ID of the term group to retrieve. Specify ",(0,n.kt)("code",{parentName:"p"},"name")," or ",(0,n.kt)("code",{parentName:"p"},"id")," but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Name of the term group to retrieve. Specify ",(0,n.kt)("code",{parentName:"p"},"name")," or ",(0,n.kt)("code",{parentName:"p"},"id")," but not both."))),(0,n.kt)(o.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To use this command without the ",(0,n.kt)("inlineCode",{parentName:"p"},"--webUrl")," option you have to have permissions to access the tenant admin site.")),(0,n.kt)("p",null,"When using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--webUrl")," option you can connect to the term store with limited permissions, and do not need the SharePoint Administrator role. You need to be a site visitor or more. It allows you to get a term group from the tenant term store as well as a term group from the sitecollection term store."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Get information about a taxonomy term group using its ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term group get --id 0e8f395e-ff58-4d45-9ff7-e331ab728beb\n")),(0,n.kt)("p",null,"Get information about a taxonomy term group using its name."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term group get --name PnPTermSets\n")),(0,n.kt)("p",null,"Get information about a taxonomy term group from the specified sitecollection using its ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term group get --id 0e8f395e-ff58-4d45-9ff7-e331ab728beb --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "CreatedDate": "2019-09-03T06:41:32.070Z",\n  "Id": "0e8f395e-ff58-4d45-9ff7-e331ab728beb",\n  "LastModifiedDate": "2019-09-03T06:41:32.070Z",\n  "Name": "PnPTermSets",\n  "Description": "",\n  "IsSiteCollectionGroup": false,\n  "IsSystemGroup": false\n}\n'))),(0,n.kt)(s.Z,{value:"Text",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"CreatedDate          : 2019-09-03T06:41:32.070Z\nDescription          :\nId                   : 0e8f395e-ff58-4d45-9ff7-e331ab728beb\nIsSiteCollectionGroup: false\nIsSystemGroup        : false\nLastModifiedDate     : 2019-09-03T06:41:32.070Z\nName                 : PnPTermSets\n"))),(0,n.kt)(s.Z,{value:"CSV",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"CreatedDate,Id,LastModifiedDate,Name,Description,IsSiteCollectionGroup,IsSystemGroup\n2019-09-03T06:41:32.070Z,0e8f395e-ff58-4d45-9ff7-e331ab728beb,2019-09-03T06:41:32.070Z,PnPTermSets,,,\n"))),(0,n.kt)(s.Z,{value:"Markdown",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},'# spo term group get --id "0e8f395e-ff58-4d45-9ff7-e331ab728beb"\n\nDate: 5/14/2023\n\n## PnPTermSets (0e8f395e-ff58-4d45-9ff7-e331ab728beb)\n\nProperty | Value\n---------|-------\nCreatedDate | 2019-09-03T06:41:32.070Z\nId | 0e8f395e-ff58-4d45-9ff7-e331ab728beb\nLastModifiedDate | 2019-09-03T06:41:32.070Z\nName | PnPTermSets\nDescription |\nIsSiteCollectionGroup | false\nIsSystemGroup | false\n')))))}b.isMDXComponent=!0}}]);