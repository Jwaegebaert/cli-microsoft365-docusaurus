"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[25812],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:n,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37884:(e,t,r)=>{r.d(t,{ZP:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={toc:[]},l="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-h, --help [help]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",null,"options"),", ",(0,n.kt)("code",null,"examples"),", ",(0,n.kt)("code",null,"remarks"),", ",(0,n.kt)("code",null,"response"),", ",(0,n.kt)("code",null,"full"),". Default is ",(0,n.kt)("code",null,"full"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--query [query]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"JMESPath query string. See ",(0,n.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-o, --output [output]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output type. ",(0,n.kt)("code",null,"json"),", ",(0,n.kt)("code",null,"text"),", ",(0,n.kt)("code",null,"csv"),", ",(0,n.kt)("code",null,"md"),". Default is ",(0,n.kt)("code",null,"json"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--verbose"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with verbose logging.")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--debug"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with debug logging."))))}u.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),u=r(56697),s=r(91980),i=r(67392),c=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,i]=f({queryString:r,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),h=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),k(e)}),[i,k,o]),tabValues:o}}var h=r(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==u&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":u===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=k(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return n.createElement(g,(0,a.Z)({key:String(t)},e))}},73824:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(37884),l=r(74866),u=r(85162);const s={},i="spo report activityuserdetail",c={unversionedId:"cmd/spo/report/report-activityuserdetail",id:"cmd/spo/report/report-activityuserdetail",title:"spo report activityuserdetail",description:"Gets details about SharePoint activity by user.",source:"@site/docs/cmd/spo/report/report-activityuserdetail.mdx",sourceDirName:"cmd/spo/report",slug:"/cmd/spo/report/report-activityuserdetail",permalink:"/cli-microsoft365-docusaurus/cmd/spo/report/report-activityuserdetail",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/report/report-activityuserdetail.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo report activityusercounts",permalink:"/cli-microsoft365-docusaurus/cmd/spo/report/report-activityusercounts"},next:{title:"spo report siteusagedetail",permalink:"/cli-microsoft365-docusaurus/cmd/spo/report/report-siteusagedetail"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:d},f="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-report-activityuserdetail"},"spo report activityuserdetail"),(0,n.kt)("p",null,"Gets details about SharePoint activity by user."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo report activityuserdetail [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-d, --date [date]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The date for which you would like to view the users who performed any activity. Supported date format is ",(0,n.kt)("code",{parentName:"p"},"YYYY-MM-DD"),". Specify either ",(0,n.kt)("code",{parentName:"p"},"date")," or ",(0,n.kt)("code",{parentName:"p"},"period"),", but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-p, --period [period]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The length of time over which the report is aggregated. Supported values ",(0,n.kt)("code",{parentName:"p"},"D7"),", ",(0,n.kt)("code",{parentName:"p"},"D30"),", ",(0,n.kt)("code",{parentName:"p"},"D90"),", ",(0,n.kt)("code",{parentName:"p"},"D180"),". Specify either ",(0,n.kt)("code",{parentName:"p"},"date")," or ",(0,n.kt)("code",{parentName:"p"},"period"),", but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-f, --outputFile [outputFile]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Path to the file where the Microsoft Teams device usage by user report should be stored in."))),(0,n.kt)(o.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"As this report is only available for the past 28 days, date parameter value should be a date from that range."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Gets details about SharePoint activity by user for the last week"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo report activityuserdetail --period D7\n")),(0,n.kt)("p",null,"Gets details about SharePoint activity by user for May 1, 2019"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo report activityuserdetail --date 2019-05-01\n")),(0,n.kt)("p",null,"Gets details about SharePoint activity by user for the last week and exports the report data in the specified path in text format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo report activityuserdetail --period D7 --output text > "activityuserdetail.txt"\n')),(0,n.kt)("p",null,"Gets details about SharePoint activity by user for the last week and exports the report data in the specified path in json format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo report activityuserdetail --period D7 --output json > "activityuserdetail.json"\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Report Refresh Date": "2022-11-26",\n    "User Principal Name": "Amanda.Powell@contoso.onmicrosoft.com",\n    "Is Deleted": "False",\n    "Deleted Date": "",\n    "Last Activity Date": "2022-09-08",\n    "Viewed Or Edited File Count": "0",\n    "Synced File Count": "0",\n    "Shared Internally File Count": "0",\n    "Shared Externally File Count": "0",\n    "Visited Page Count": "0",\n    "Assigned Products": "MICROSOFT 365 E5 DEVELOPER (WITHOUT WINDOWS AND AUDIO CONFERENCING)+MICROSOFT POWER AUTOMATE FREE",\n    "Report Period": "7"\n  }\n]\n'))),(0,n.kt)(u.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Report Refresh Date,User Principal Name,Is Deleted,Deleted Date,Last Activity Date,Viewed Or Edited File Count,Synced File Count,Shared Internally File Count,Shared Externally File Count,Visited Page Count,Assigned Products,Report Period\n2022-11-26,Amanda.Powell@contoso.onmicrosoft.com,False,,2022-09-08,0,0,0,0,0,MICROSOFT 365 E5 DEVELOPER (WITHOUT WINDOWS AND AUDIO CONFERENCING)+MICROSOFT POWER AUTOMATE FREE,7\n"))),(0,n.kt)(u.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"Report Refresh Date,User Principal Name,Is Deleted,Deleted Date,Last Activity Date,Viewed Or Edited File Count,Synced File Count,Shared Internally File Count,Shared Externally File Count,Visited Page Count,Assigned Products,Report Period\n2022-11-26,Amanda.Powell@contoso.onmicrosoft.com,False,,2022-09-08,0,0,0,0,0,MICROSOFT 365 E5 DEVELOPER (WITHOUT WINDOWS AND AUDIO CONFERENCING)+MICROSOFT POWER AUTOMATE FREE,7\n")))))}k.isMDXComponent=!0}}]);