"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[12819],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>b});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),c=p(a),d=o,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||n;return a?r.createElement(b,l(l({ref:t},i),{},{components:a})):r.createElement(b,l({ref:t},i))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:o,l[1]=u;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),o=a(86010);const n={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(n.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(87462),o=a(67294),n=a(86010),l=a(12466),u=a(56697),s=a(91980),p=a(67392),i=a(50012);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:o}}=e;return{value:t,label:a,attributes:r,default:o}}))}function m(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(n),(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=m(e),[l,u]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[s,p]=b({queryString:a,groupId:r}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,i.Nk)(a);return[r,(0,o.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),k=(()=>{const e=s??c;return d({value:e,tabValues:n})?e:null})();(0,o.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),p(e),f(e)}),[p,f,n]),tabValues:n}}var k=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:u,selectValue:s,tabValues:p}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=i.indexOf(t),r=p[a].value;r!==u&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>i.push(e),onKeyDown:d,onClick:m},l,{className:(0,n.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":u===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return o.createElement("div",{className:(0,n.Z)("tabs-container",h.tabList)},o.createElement(g,(0,r.Z)({},e,t)),o.createElement(v,(0,r.Z)({},e,t)))}function x(e){const t=(0,k.Z)();return o.createElement(y,(0,r.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>u});var r=a(87462),o=(a(67294),a(3905));const n={toc:[]},l="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(l,(0,r.Z)({},n,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",{parentName:"p"},"options"),", ",(0,o.kt)("code",{parentName:"p"},"examples"),", ",(0,o.kt)("code",{parentName:"p"},"remarks"),", ",(0,o.kt)("code",{parentName:"p"},"response"),", ",(0,o.kt)("code",{parentName:"p"},"full"),". Default is ",(0,o.kt)("code",{parentName:"p"},"full"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--query [query]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,o.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output type. ",(0,o.kt)("code",{parentName:"p"},"json"),", ",(0,o.kt)("code",{parentName:"p"},"text"),", ",(0,o.kt)("code",{parentName:"p"},"csv"),", ",(0,o.kt)("code",{parentName:"p"},"md"),". Default ",(0,o.kt)("code",{parentName:"p"},"json"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--verbose"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--debug"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}u.isMDXComponent=!0},41695:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var r=a(87462),o=(a(67294),a(3905)),n=a(26054),l=a(74866),u=a(85162);const s={},p="outlook report mailboxusagemailboxcount",i={unversionedId:"cmd/outlook/report/report-mailboxusagemailboxcount",id:"cmd/outlook/report/report-mailboxusagemailboxcount",title:"outlook report mailboxusagemailboxcount",description:"Gets the total number of user mailboxes in your organization and how many are active each day of the reporting period.",source:"@site/docs/cmd/outlook/report/report-mailboxusagemailboxcount.mdx",sourceDirName:"cmd/outlook/report",slug:"/cmd/outlook/report/report-mailboxusagemailboxcount",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/report/report-mailboxusagemailboxcount",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/outlook/report/report-mailboxusagemailboxcount.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"outlook report mailboxusagedetail",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/report/report-mailboxusagedetail"},next:{title:"outlook report mailboxusagequotastatusmailboxcounts",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/report/report-mailboxusagequotastatusmailboxcounts"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:m},b="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outlook-report-mailboxusagemailboxcount"},"outlook report mailboxusagemailboxcount"),(0,o.kt)("p",null,"Gets the total number of user mailboxes in your organization and how many are active each day of the reporting period."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook report mailboxusagemailboxcount [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-p, --period <period>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The length of time over which the report is aggregated. Supported values ",(0,o.kt)("code",{parentName:"p"},"D7"),", ",(0,o.kt)("code",{parentName:"p"},"D30"),", ",(0,o.kt)("code",{parentName:"p"},"D90"),", ",(0,o.kt)("code",{parentName:"p"},"D180"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-f, --outputFile [outputFile]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Path to the file where the report should be stored in"))),(0,o.kt)(n.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"A mailbox is considered active if the user sent or read any email."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Gets the total number of user mailboxes in your organization and how many are active each day for the last week."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook report mailboxusagemailboxcount --period D7\n")),(0,o.kt)("p",null,"Gets the total number of user mailboxes in your organization and how many are active each day for the last week and exports the report data in the specified path in text format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook report mailboxusagemailboxcount --period D7 --output text > "mailboxusagemailboxcount.txt"\n')),(0,o.kt)("p",null,"Gets the total number of user mailboxes in your organization and how many are active each day for the last week and exports the report data in the specified path in json format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook report mailboxusagemailboxcount --period D7 --output json > "mailboxusagemailboxcount.json"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Report Refresh Date": "2023-01-24",\n    "Total": "146",\n    "Active": "131",\n    "Report Date": "2023-01-18",\n    "Report Period": "7"\n  }\n]\n'))),(0,o.kt)(u.Z,{value:"Text",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Report Refresh Date,Total,Active,Report Date,Report Period\n2023-01-24,146,131,2023-01-18,7\n"))),(0,o.kt)(u.Z,{value:"CSV",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"Report Refresh Date,Total,Active,Report Date,Report Period\n2023-01-24,146,131,2023-01-18,7\n"))),(0,o.kt)(u.Z,{value:"Markdown",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"Report Refresh Date,Total,Active,Report Date,Report Period\n2023-01-24,146,131,2023-01-18,7\n")))))}f.isMDXComponent=!0}}]);