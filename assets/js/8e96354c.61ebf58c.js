"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[77694],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[d]="string"==typeof e?e:n,s[1]=u;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>$});var a=r(87462),n=r(67294),o=r(86010),s=r(12466),u=r(56697),l=r(91980),i=r(67392),c=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,i]=f({queryString:r,groupId:a}),[d,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),y(e)}),[i,y,o]),tabValues:o}}var b=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:r,selectedValue:u,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==u&&(d(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":u===t})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=y(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(w,(0,a.Z)({},e,t)),n.createElement(h,(0,a.Z)({},e,t)))}function $(e){const t=(0,b.Z)();return n.createElement(g,(0,a.Z)({key:String(t)},e))}},80364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),s=r(85162);const u={tags:["adaptivecards","flows","reports"]},l="Flow runs day summary report",i={unversionedId:"sample-scripts/flow/flow-runs-day-summary/index",id:"sample-scripts/flow/flow-runs-day-summary/index",title:"Flow runs day summary report",description:"Author: Adam",source:"@site/docs/sample-scripts/flow/flow-runs-day-summary/index.mdx",sourceDirName:"sample-scripts/flow/flow-runs-day-summary",slug:"/sample-scripts/flow/flow-runs-day-summary/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/flow-runs-day-summary/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/flow/flow-runs-day-summary/index.mdx",tags:[{label:"adaptivecards",permalink:"/cli-microsoft365-docusaurus/tags/adaptivecards"},{label:"flows",permalink:"/cli-microsoft365-docusaurus/tags/flows"},{label:"reports",permalink:"/cli-microsoft365-docusaurus/tags/reports"}],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{tags:["adaptivecards","flows","reports"]},sidebar:"sampleScripts",previous:{title:"Export a single flow to a Logic App",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/export-flow-logicapp/"},next:{title:"Inventory Flows By Creator",permalink:"/cli-microsoft365-docusaurus/sample-scripts/flow/inventory-flows-by-author/"}},c={},d=[],p={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"flow-runs-day-summary-report"},"Flow runs day summary report"),(0,n.kt)("p",null,"Author: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Adam-it"},"Adam")),(0,n.kt)("p",null,"This script creates a report of all flow runs from current day and sends the report as an adaptive card to the provided url"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"PowerShell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'$m365Status = m365 status --output text\nif ($m365Status -eq "Logged Out") {\n    m365 login\n}\n\n$environment = \'Default-2942bb31-1d49-4da6-8d3d-d0f9e1141234\'\n$adaptiveCard = \'{\\"type\\":\\"AdaptiveCard\\",\\"body\\":[{\\"type\\":\\"TextBlock\\",\\"size\\":\\"Medium\\",\\"weight\\":\\"Bolder\\",\\"text\\":\\"${title}\\"},{\\"type\\":\\"TextBlock\\",\\"text\\":\\"${description}\\",\\"wrap\\":true}],\\"$schema\\":\\"http://adaptivecards.io/schemas/adaptive-card.json\\",\\"version\\":\\"1.3\\"}\'\n$webhook = \'https://contoso.webhook.office.com/webhookb2/1204eba2-061c-4442-9696-2a725cb2d094@2942bb31-1d49-4da6-8d3d-d0f9e1141486/IncomingWebhook/6e54c3958bde444e96fec9ecad356993/be11f523-2a4d-4eae-9d42-277410893c41\'\n\n$flows = m365 flow list --environmentName $environment --output json\n$flows = $flows | ConvertFrom-Json\n$currentDayDate = (Get-Date).ToUniversalTime().ToString("o")\n$previousDayDate = (Get-Date).AddDays(-1).ToUniversalTime().ToString("o")\n\n$adaptiveCardDescription = ""\nforeach ($flow in $flows) \n{\n    $todayRuns = m365 flow run list --environmentName $environment --flowName $flow.name --triggerStartTime $previousDayDate --triggerEndTime $currentDayDate --output json | ConvertFrom-Json\n\n    $displayName = $flow.displayName\n    $id = $flow.name\n    \n    $todayRunsCount = 0\n    $todaySuccessRunsCount = 0\n    $todayFailedRunsCount = 0\n    if($todayRuns.Count -gt 0)\n    {\n        $todaySuccessRuns = $todayRuns.Where({$_.status -eq \'Succeeded\'})\n        $todaySuccessRunsCount = $todaySuccessRuns.Count\n\n        $todayFailedRuns = $todayRuns.Where({$_.status -eq \'Failed\'})\n        $todayFailedRunsCount = $todayFailedRuns.Count\n\n        $todayRunsCount = $todayRuns.Count\n    }\n\n    Write-Host "$displayName -> Runs: $todayRunsCount , Succeeded: $todaySuccessRunsCount , Failed: $todayFailedRunsCount"\n    $adaptiveCardDescription = $adaptiveCardDescription + "\\r- [$displayName](https://us.flow.microsoft.com/manage/environments/$environment/flows/$id/details) -> Runs: $todayRunsCount , Succeeded: $todaySuccessRunsCount , Failed: $todayFailedRunsCount"\n}\n\n$today = Get-Date -Format "MM/dd/yyyy"\n$cardData = \'{\\"title\\": \\"Flows summary - \' + $today + \'\\" ,\\"description\\":\\"\' + $adaptiveCardDescription + \'\\"}\'\n\nm365 adaptivecard send --url $webhook --card $adaptiveCard --cardData $cardData\n')))))}f.isMDXComponent=!0}}]);