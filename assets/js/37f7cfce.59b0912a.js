"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[5604],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),s=a(86010),i=a(12466),o=a(56697),c=a(91980),l=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=d(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,l]=f({queryString:a,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),k=(()=>{const e=c??p;return m({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),l(e),v(e)}),[l,v,s]),tabValues:s}}var k=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function D(e){let{className:t,block:a,selectedValue:o,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),r=l[a].value;r!==o&&(p(t),c(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},l.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,s.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=v(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",h.tabList)},n.createElement(D,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>o});var r=a(87462),n=(a(67294),a(3905));const s={toc:[]},i="wrapper";function o(e){let{components:t,...a}=e;return(0,n.kt)(i,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",{parentName:"p"},"options"),", ",(0,n.kt)("code",{parentName:"p"},"examples"),", ",(0,n.kt)("code",{parentName:"p"},"remarks"),", ",(0,n.kt)("code",{parentName:"p"},"response"),", ",(0,n.kt)("code",{parentName:"p"},"full"),". Default is ",(0,n.kt)("code",{parentName:"p"},"full"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--query [query]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,n.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output type. ",(0,n.kt)("code",{parentName:"p"},"json"),", ",(0,n.kt)("code",{parentName:"p"},"text"),", ",(0,n.kt)("code",{parentName:"p"},"csv"),", ",(0,n.kt)("code",{parentName:"p"},"md"),". Default ",(0,n.kt)("code",{parentName:"p"},"json"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--verbose"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--debug"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}o.isMDXComponent=!0},4518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),s=a(26054),i=a(74866),o=a(85162);const c={},l="tenant report activeuserdetail",u={unversionedId:"cmd/tenant/report/report-activeuserdetail",id:"cmd/tenant/report/report-activeuserdetail",title:"tenant report activeuserdetail",description:"Gets details about Microsoft 365 active users",source:"@site/docs/cmd/tenant/report/report-activeuserdetail.mdx",sourceDirName:"cmd/tenant/report",slug:"/cmd/tenant/report/report-activeuserdetail",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/report/report-activeuserdetail",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/tenant/report/report-activeuserdetail.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"tenant report activeusercounts",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/report/report-activeusercounts"},next:{title:"tenant report office365activationcounts",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/report/report-office365activationcounts"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:d},f="wrapper";function v(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tenant-report-activeuserdetail"},"tenant report activeuserdetail"),(0,n.kt)("p",null,"Gets details about Microsoft 365 active users"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 tenant report activeuserdetail [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-d, --date [date]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The date for which you would like to view the users who performed any activity. Supported date format is ",(0,n.kt)("code",{parentName:"p"},"YYYY-MM-DD"),". Specify the date or period, but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-p, --period [period]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The length of time over which the report is aggregated. Supported values ",(0,n.kt)("code",{parentName:"p"},"D7"),", ",(0,n.kt)("code",{parentName:"p"},"D30"),", ",(0,n.kt)("code",{parentName:"p"},"D90"),", ",(0,n.kt)("code",{parentName:"p"},"D180"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-f, --outputFile [outputFile]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Path to the file where the report should be stored in."))),(0,n.kt)(s.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"As this report is only available for the past 28 days, date parameter value should be a date from that range."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Gets details about Microsoft 365 active users for the last week"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 tenant report activeuserdetail --period D7\n")),(0,n.kt)("p",null,"Gets details about Microsoft 365 active users for May 1, 2019"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 tenant report activeuserdetail --date 2019-05-01\n")),(0,n.kt)("p",null,"Gets details about Microsoft 365 active users for the last week and exports the report data in the specified path in text format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 tenant report activeuserdetail --period D7 --output text > "activeuserdetail.txt"\n')),(0,n.kt)("p",null,"Gets details about Microsoft 365 active users for the last week and exports the report data in the specified path in json format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 tenant report activeuserdetail --period D7 --output json > "activeuserdetail.json"\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Report Refresh Date": "2022-10-23",\n    "User Principal Name": "0439A166C614C2E8C7B4075DC4752054",\n    "Display Name": "2236A6E43D08F619FE695DF3B163A32F",\n    "Is Deleted": "False",\n    "Deleted Date": "",\n    "Has Exchange License": "True",\n    "Has OneDrive License": "True",\n    "Has SharePoint License": "True",\n    "Has Skype For Business License": "True",\n    "Has Yammer License": "True",\n    "Has Teams License": "True",\n    "Exchange Last Activity Date": "2020-03-27",\n    "OneDrive Last Activity Date": "2020-03-27",\n    "SharePoint Last Activity Date": "2020-04-30",\n    "Skype For Business Last Activity Date": "2020-05-10",\n    "Yammer Last Activity Date": "2020-05-10",\n    "Teams Last Activity Date": "2020-05-10",\n    "Exchange License Assign Date": "2020-02-26",\n    "OneDrive License Assign Date": "2020-02-26",\n    "SharePoint License Assign Date": "2020-02-26",\n    "Skype For Business License Assign Date": "2020-02-26",\n    "Yammer License Assign Date": "2020-02-26",\n    "Teams License Assign Date": "2020-02-26",\n    "Assigned Products": "MICROSOFT 365 E5 DEVELOPER (WITHOUT WINDOWS AND AUDIO CONFERENCING)"\n  }\n]\n'))),(0,n.kt)(o.Z,{value:"Text",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Report Refresh Date,User Principal Name,Display Name,Is Deleted,Deleted Date,Has Exchange License,Has OneDrive License,Has SharePoint License,Has Skype For Business License,Has Yammer License,Has Teams License,Exchange Last Activity Date,OneDrive Last Activity Date,SharePoint Last Activity Date,Skype For Business Last Activity Date,Yammer Last Activity Date,Teams Last Activity Date,Exchange License Assign Date,OneDrive License Assign Date,SharePoint License Assign Date,Skype For Business License Assign Date,Yammer License Assign Date,Teams License Assign Date,Assigned Products\n2022-10-23,77E5979DD60BA6EAA53E814DBEEEFA5F,4291DA7C39EE3263E97336B42734A667,False,,True,True,True,True,True,True,2020-09-12,2022-09-12,2021-10-30,2020-10-30,2019-04-21,2017-09-20,2021-01-10,2021-01-10,2021-01-10,2021-01-10,2021-01-10,2021-01-10,MICROSOFT 365 E5 DEVELOPER (WITHOUT WINDOWS AND AUDIO CONFERENCING)\n"))),(0,n.kt)(o.Z,{value:"CSV",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"Report Refresh Date,User Principal Name,Display Name,Is Deleted,Deleted Date,Has Exchange License,Has OneDrive License,Has SharePoint License,Has Skype For Business License,Has Yammer License,Has Teams License,Exchange Last Activity Date,OneDrive Last Activity Date,SharePoint Last Activity Date,Skype For Business Last Activity Date,Yammer Last Activity Date,Teams Last Activity Date,Exchange License Assign Date,OneDrive License Assign Date,SharePoint License Assign Date,Skype For Business License Assign Date,Yammer License Assign Date,Teams License Assign Date,Assigned Products\n2022-10-23,77E5979DD60BA6EAA53E814DBEEEFA5F,4291DA7C39EE3263E97336B42734A667,False,,True,True,True,True,True,True,,2022-09-12,2020-09-12,2022-09-12,2021-10-30,2020-10-30,2019-04-21,2017-09-20,2021-01-10,2021-01-10,2021-01-10,2021-01-10,2021-01-10,2021-01-10,MICROSOFT 365 E5 DEVELOPER (WITHOUT WINDOWS AND AUDIO CONFERENCING)\n"))),(0,n.kt)(o.Z,{value:"Markdown",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"Report Refresh Date,User Principal Name,Display Name,Is Deleted,Deleted Date,Has Exchange License,Has OneDrive License,Has SharePoint License,Has Skype For Business License,Has Yammer License,Has Teams License,Exchange Last Activity Date,OneDrive Last Activity Date,SharePoint Last Activity Date,Skype For Business Last Activity Date,Yammer Last Activity Date,Teams Last Activity Date,Exchange License Assign Date,OneDrive License Assign Date,SharePoint License Assign Date,Skype For Business License Assign Date,Yammer License Assign Date,Teams License Assign Date,Assigned Products\n2022-10-23,77E5979DD60BA6EAA53E814DBEEEFA5F,4291DA7C39EE3263E97336B42734A667,False,,True,True,True,True,True,True,,2022-09-12,2020-09-12,2022-09-12,2021-10-30,2020-10-30,2019-04-21,2017-09-20,2021-01-10,2021-01-10,2021-01-10,2021-01-10,2021-01-10,2021-01-10,MICROSOFT 365 E5 DEVELOPER (WITHOUT WINDOWS AND AUDIO CONFERENCING)\n")))))}v.isMDXComponent=!0}}]);