"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[65502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),i=n(86010),s=n(12466),o=n(56697),l=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,c]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),v=(()=>{const e=l??p;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,i]),tabValues:i}}var v=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==o&&(p(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},s,{className:(0,i.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},26054:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={toc:[]},s="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}o.isMDXComponent=!0},47418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(26054),s=n(74866),o=n(85162);const l={},c="tenant serviceannouncement healthissue get",u={unversionedId:"cmd/tenant/serviceannouncement/serviceannouncement-healthissue-get",id:"cmd/tenant/serviceannouncement/serviceannouncement-healthissue-get",title:"tenant serviceannouncement healthissue get",description:"Gets a specified service health issue for tenant.",source:"@site/docs/cmd/tenant/serviceannouncement/serviceannouncement-healthissue-get.mdx",sourceDirName:"cmd/tenant/serviceannouncement",slug:"/cmd/tenant/serviceannouncement/serviceannouncement-healthissue-get",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/serviceannouncement/serviceannouncement-healthissue-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/tenant/serviceannouncement/serviceannouncement-healthissue-get.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"tenant serviceannouncement health list",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/serviceannouncement/serviceannouncement-health-list"},next:{title:"tenant serviceannouncement healthissue list",permalink:"/cli-microsoft365-docusaurus/cmd/tenant/serviceannouncement/serviceannouncement-healthissue-list"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:m},h="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tenant-serviceannouncement-healthissue-get"},"tenant serviceannouncement healthissue get"),(0,r.kt)("p",null,"Gets a specified service health issue for tenant."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 tenant serviceannouncement healthissue get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The issue id to get details for"))),(0,r.kt)(i.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Gets information about issue with ID ",(0,r.kt)("em",{parentName:"p"},"MO226784")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 tenant serviceannouncement healthissue get --id MO226784\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "startDateTime": "2022-05-24T16:00:00Z",\n  "endDateTime": "2022-05-24T22:20:00Z",\n  "lastModifiedDateTime": "2022-05-24T22:27:18.63Z",\n  "title": "Installation delays within the Power Platform admin center",\n  "id": "CR384241",\n  "impactDescription": "Users may have experienced delays when installing applications within the Power Platform admin center.",\n  "classification": "advisory",\n  "origin": "microsoft",\n  "status": "serviceRestored",\n  "service": "Dynamics 365 Apps",\n  "feature": "Other",\n  "featureGroup": "Other",\n  "isResolved": true,\n  "highImpact": null,\n  "details": [],\n  "posts": [\n    {\n      "createdDateTime": "2022-05-24T21:22:56.817Z",\n      "postType": "regular",\n      "description": {\n        "contentType": "html",\n        "content": "Title: Installation delays within the Power Platform admin center\\\\\\n\\nUser Impact: Users may experience delays when installing applications within the Power Platform admin center.\\\\\\n\\nWe are aware of an emerging issue where users are experiencing delays when installing applications through the Power Platform admin center. We are investigating the issue and will provide another update within the next 30 minutes.\\\\\\n\\nThis information is preliminary and may be subject to changes, corrections, and updates."\n      }\n    }\n  ]\n}\n'))),(0,r.kt)(o.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'classification      : advisory\ndetails             : []\nendDateTime         : 2022-05-24T22:20:00Z\nfeature             : Other\nfeatureGroup        : Other\nhighImpact          : null\nid                  : CR384241\nimpactDescription   : Users may have experienced delays when installing applications within the Power Platform admin center.\nisResolved          : true\nlastModifiedDateTime: 2022-05-24T22:27:18.63Z\norigin              : microsoft\nposts               : [{"createdDateTime":"2022-05-24T21:22:56.817Z","postType":"regular","description":{"contentType":"html","content":"Title: Installation delays within the Power Platform admin center\\n\\nUser Impact: Users may experience delays when installing applications within the Power Platform admin center.\\n\\nWe are aware of an emerging issue where users are experiencing delays when installing applications through the Power Platform admin center. We are investigating the issue and will provide another update within the next 30 minutes.\\n\\nThis information is preliminary and may be subject to changes, corrections, and updates."}}]\nservice             : Dynamics 365 Apps\nstartDateTime       : 2022-05-24T16:00:00Z\nstatus              : serviceRestored\ntitle               : Installation delays within the Power Platform admin center\n'))),(0,r.kt)(o.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'startDateTime,endDateTime,lastModifiedDateTime,title,id,impactDescription,classification,origin,status,service,feature,featureGroup,isResolved,highImpact,details,posts\n2022-05-24T16:00:00Z,2022-05-24T22:20:00Z,2022-05-24T22:27:18.63Z,Installation delays within the Power Platform admin center,CR384241,Users may have experienced delays when installing applications within the Power Platform admin center.,advisory,microsoft,serviceRestored,Dynamics 365 Apps,Other,Other,1,,[],"[{""createdDateTime"":""2022-05-24T21:22:56.817Z"",""postType"":""regular"",""description"":{""contentType"":""html"",""content"":""Title: Installation delays within the Power Platform admin center\\n\\nUser Impact: Users may experience delays when installing applications within the Power Platform admin center.\\n\\nWe are aware of an emerging issue where users are experiencing delays when installing applications through the Power Platform admin center. We are investigating the issue and will provide another update within the next 30 minutes.\\n\\nThis information is preliminary and may be subject to changes, corrections, and updates.""}}]"\n'))),(0,r.kt)(o.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# tenant serviceannouncement healthissue get --id "MO226784"\n\nDate: 5/24/2022\n\n## Installation delays within the Power Platform admin center (MO226784)\n\nProperty | Value\n---------|-------\nstartDateTime | 2022-05-24T16:00:00Z\nendDateTime | 2022-05-24T22:20:00Z\nlastModifiedDateTime | 2022-05-24T22:27:18.63Z\ntitle | Installation delays within the Power Platform admin center\nid | CR384241\nimpactDescription | Users may have experienced delays when installing applications within the Power Platform admin center.\nclassification | advisory\norigin | microsoft\nstatus | serviceRestored\nservice | Dynamics 365 Apps\nfeature | Other\nfeatureGroup | Other\nisResolved | true\n')))))}f.isMDXComponent=!0}}]);