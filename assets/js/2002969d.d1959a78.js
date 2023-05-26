"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[30325],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(87462),a=r(67294),o=r(86010),s=r(12466),i=r(56697),l=r(91980),u=r(67392),p=r(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=f({queryString:r,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),k=(()=>{const e=l??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var k=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==i&&(c(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":i===t})}),r??t)})))}function b(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(b,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return a.createElement(g,(0,n.Z)({key:String(t)},e))}},94053:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(74866),s=r(85162);const i={},l="spfx doctor",u={unversionedId:"cmd/spfx/spfx-doctor",id:"cmd/spfx/spfx-doctor",title:"spfx doctor",description:"Verifies environment configuration for using the specific version of the SharePoint Framework",source:"@site/docs/cmd/spfx/spfx-doctor.mdx",sourceDirName:"cmd/spfx",slug:"/cmd/spfx/spfx-doctor",permalink:"/cli-microsoft365-docusaurus/cmd/spfx/spfx-doctor",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spfx/spfx-doctor.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"skype report activityuserdetail",permalink:"/cli-microsoft365-docusaurus/cmd/skype/report/report-activityuserdetail"},next:{title:"spfx package generate",permalink:"/cli-microsoft365-docusaurus/cmd/spfx/package/package-generate"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Response with no issues",id:"response-with-no-issues",level:3},{value:"Response with issues reported",id:"response-with-issues-reported",level:3}],d={toc:c},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spfx-doctor"},"spfx doctor"),(0,a.kt)("p",null,"Verifies environment configuration for using the specific version of the SharePoint Framework"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx doctor [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-e, --env [env]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Version of SharePoint for which to check compatibility: ",(0,a.kt)("code",{parentName:"p"},"sp2016|sp2019|spo"))),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-v, --spfxVersion [spfxVersion]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Version of the SharePoint Framework Yeoman generator to check compatibility for without ",(0,a.kt)("code",{parentName:"p"},"v"),", eg. ",(0,a.kt)("code",{parentName:"p"},"1.11.0"))),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-h, --help"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"output usage information")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--query [query]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,a.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output type. ",(0,a.kt)("code",{parentName:"p"},"text"),". Default ",(0,a.kt)("code",{parentName:"p"},"text"))),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--verbose"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with verbose logging")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--debug"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with debug logging"))),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"This commands helps you to verify if your environment meets all prerequisites for building solutions using a particular version of the SharePoint Framework."),(0,a.kt)("p",null,"The command starts by detecting the version of SharePoint Framework that you want to use. First, it looks at the current project. If you didn't run the command in the context of a SharePoint Framework project, the command will try to determine the SharePoint Framework version based on the SharePoint Framework Yeoman generator that you have installed either in the current directory or globally."),(0,a.kt)("p",null,"Based on the determined version of the SharePoint Framework, the command will look at other dependencies such as Node.js, npm, Yeoman, Gulp CLI and TypeScript to verify if their meet the requirements of that particular version of the SharePoint Framework."),(0,a.kt)("p",null,"If you miss any required tools or use a version that doesn't meet the SharePoint Framework requirements, the command will give you a list of recommendation how to address these issues."),(0,a.kt)("p",null,"Next to verifying the readiness of your environment to use a particular version of the SharePoint Framework, you can also check if the version of the SharePoint Framework that you use is compatible with the specific version of SharePoint. Supported versions are ",(0,a.kt)("inlineCode",{parentName:"p"},"sp2016"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sp2019")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"spo"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Checks ran by this command are based on what is officially supported by Microsoft. It's possible that using different package managers or packages versions will work just fine.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This command supports only text output.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Verify if your environment meets the requirements to work with SharePoint Framework based on the globally installed version of the SharePoint Framework Yeoman generator or the current project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx doctor --output text\n")),(0,a.kt)("p",null,"Verify if your environment meets the requirements to work with the SharePoint Framework and also if the version of the SharePoint Framework that you're using is compatible with SharePoint 2019"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx doctor --env sp2019 --output text\n")),(0,a.kt)("p",null,"Verify if your environment meets the requirements to work with SharePoint Framework v1.11.0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx doctor --spfxVersion 1.11.0 --output text\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("h3",{id:"response-with-no-issues"},"Response with no issues"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Text",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"CLI for Microsoft 365 SharePoint Framework doctor\nVerifying configuration of your system for working with the SharePoint Framework\n\n\u221a SharePoint Framework v1.15.0\n\u221a Node v16.13.0    \n\u221a yo v4.3.0\n\u221a gulp-cli v2.3.0\n\u221a bundled typescript used\n")))),(0,a.kt)("h3",{id:"response-with-issues-reported"},"Response with issues reported"),(0,a.kt)("p",null,"When the installed version of Yeoman is lower than expected to run SharePoint Framework v1.15.0"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Text",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"CLI for Microsoft 365 SharePoint Framework doctor\nVerifying configuration of your system for working with the SharePoint Framework\n\n\u221a SharePoint Framework v1.15.0\n\u221a Node v16.16.0\n\xd7 yo v3.1.1 found, v^4 required\n\u221a gulp-cli v2.3.0\n\u221a bundled typescript used\n\nRecommended fixes:\n\n- npm i -g yo@4\n")))))}f.isMDXComponent=!0}}]);