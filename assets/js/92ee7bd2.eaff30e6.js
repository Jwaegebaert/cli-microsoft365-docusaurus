"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[55770],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=m(a),c=n,f=u["".concat(p,".").concat(c)]||u[c]||d[c]||o;return a?r.createElement(f,s(s({ref:t},i),{},{components:a})):r.createElement(f,s({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var m=2;m<o;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),o=a(86010),s=a(12466),l=a(56697),p=a(91980),m=a(67392),i=a(50012);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[p,m]=f({queryString:a,groupId:r}),[u,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),k=(()=>{const e=p??u;return c({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),b(e)}),[m,b,o]),tabValues:o}}var k=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:l,selectValue:p,tabValues:m}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=i.indexOf(t),r=m[a].value;r!==l&&(u(t),p(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},m.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>i.push(e),onKeyDown:c,onClick:d},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={toc:[]},s="wrapper";function l(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",{parentName:"p"},"options"),", ",(0,n.kt)("code",{parentName:"p"},"examples"),", ",(0,n.kt)("code",{parentName:"p"},"remarks"),", ",(0,n.kt)("code",{parentName:"p"},"response"),", ",(0,n.kt)("code",{parentName:"p"},"full"),". Default is ",(0,n.kt)("code",{parentName:"p"},"full"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--query [query]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,n.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output type. ",(0,n.kt)("code",{parentName:"p"},"json"),", ",(0,n.kt)("code",{parentName:"p"},"text"),", ",(0,n.kt)("code",{parentName:"p"},"csv"),", ",(0,n.kt)("code",{parentName:"p"},"md"),". Default ",(0,n.kt)("code",{parentName:"p"},"json"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--verbose"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--debug"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}l.isMDXComponent=!0},11143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(26054),s=a(74866),l=a(85162);const p={},m="spo term set get",i={unversionedId:"cmd/spo/term/term-set-get",id:"cmd/spo/term/term-set-get",title:"spo term set get",description:"Gets information about the specified taxonomy term set",source:"@site/docs/cmd/spo/term/term-set-get.mdx",sourceDirName:"cmd/spo/term",slug:"/cmd/spo/term/term-set-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/term/term-set-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/term/term-set-get.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo term set add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/term/term-set-add"},next:{title:"spo term set list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/term/term-set-list"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:d},f="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-term-set-get"},"spo term set get"),(0,n.kt)("p",null,"Gets information about the specified taxonomy term set"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term set get [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-u, --webUrl [webUrl]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"If specified, allows you to get a term set from the tenant term store as well as the sitecollection specific term store. Defaults to the tenant admin site.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"ID of the term set to retrieve. Specify ",(0,n.kt)("code",{parentName:"p"},"name")," or ",(0,n.kt)("code",{parentName:"p"},"id")," but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Name of the term set to retrieve. Specify ",(0,n.kt)("code",{parentName:"p"},"name")," or ",(0,n.kt)("code",{parentName:"p"},"id")," but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--termGroupId [termGroupId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"ID of the term group to which the term set belongs. Specify ",(0,n.kt)("code",{parentName:"p"},"termGroupId")," or ",(0,n.kt)("code",{parentName:"p"},"termGroupName")," but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--termGroupName [termGroupName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Name of the term group to which the term set belongs. Specify ",(0,n.kt)("code",{parentName:"p"},"termGroupId")," or ",(0,n.kt)("code",{parentName:"p"},"termGroupName")," but not both."))),(0,n.kt)(o.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To use this command without the --webUrl option you have to have permissions to access the tenant admin site.")),(0,n.kt)("p",null,"When using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--webUrl")," option you can connect to the term store with limited permissions, and do not need the SharePoint Administrator role. You need to be a site visitor or more. It allows you to get a term set from the tenant term store as well as a term set from the sitecollection term store."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Get information about a taxonomy term set using its ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term set get --id 0e8f395e-ff58-4d45-9ff7-e331ab728beb --termGroupName PnPTermSets\n")),(0,n.kt)("p",null,"Get information about a taxonomy term set using its name."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term set get --name PnP-Organizations --termGroupId 0a099ee9-e231-4ae9-a5b6-d7f94a0d241d\n")),(0,n.kt)("p",null,"Get information about a taxonomy term set using its ID from the specified sitecollection."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo term set get --id 0e8f395e-ff58-4d45-9ff7-e331ab728beb --termGroupName PnPTermSets --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"JSON",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "CreatedDate": "2019-09-03T06:41:32.110Z",\n  "Id": "0e8f395e-ff58-4d45-9ff7-e331ab728beb",\n  "LastModifiedDate": "2019-09-03T06:41:32.260Z",\n  "Name": "PnP-Organizations",\n  "CustomProperties": {\n    "SearchCenterNavVer": "15"\n  },\n  "CustomSortOrder": null,\n  "IsAvailableForTagging": true,\n  "Owner": "",\n  "Contact": "",\n  "Description": "",\n  "IsOpenForTermCreation": true,\n  "Names": {\n    "1033": "PnP-Organizations"\n  },\n  "Stakeholders": []\n}\n'))),(0,n.kt)(l.Z,{value:"Text",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'Contact              :\nCreatedDate          : 2019-09-03T06:41:32.110Z\nCustomProperties     : {"SearchCenterNavVer":"15"}\nCustomSortOrder      : null\nDescription          :\nId                   : 0e8f395e-ff58-4d45-9ff7-e331ab728beb\nIsAvailableForTagging: true\nIsOpenForTermCreation: true\nLastModifiedDate     : 2019-09-03T06:41:32.260Z\nName                 : PnP-Organizations\nNames                : {"1033":"PnP-Organizations"}\nOwner                :\nStakeholders         : []\n'))),(0,n.kt)(l.Z,{value:"CSV",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"CreatedDate,Id,LastModifiedDate,Name,IsAvailableForTagging,Owner,Contact,Description,IsOpenForTermCreation\n2019-09-03T06:41:32.110Z,0e8f395e-ff58-4d45-9ff7-e331ab728beb,2019-09-03T06:41:32.260Z,PnP-Organizations,1,,,,1\n"))),(0,n.kt)(l.Z,{value:"Markdown",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},'# spo term set get --name "PnP-Organizations" --termGroupName "PnPTermSets"\n\nDate: 5/9/2023\n\n## PnP-Organizations (0e8f395e-ff58-4d45-9ff7-e331ab728beb)\n\nProperty | Value\n---------|-------\nCreatedDate | 2019-09-03T06:41:32.110Z\nId | 0e8f395e-ff58-4d45-9ff7-e331ab728beb\nLastModifiedDate | 2019-09-03T06:41:32.260Z\nName | PnP-Organizations\nIsAvailableForTagging | true\nOwner |\nContact |\nDescription |\nIsOpenForTermCreation | true\n')))))}b.isMDXComponent=!0}}]);