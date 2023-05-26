"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[61791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),o=n(86010),s=n(12466),i=n(56697),l=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=b({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},26054:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},s="wrapper";function i(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",{parentName:"p"},"options"),", ",(0,a.kt)("code",{parentName:"p"},"examples"),", ",(0,a.kt)("code",{parentName:"p"},"remarks"),", ",(0,a.kt)("code",{parentName:"p"},"response"),", ",(0,a.kt)("code",{parentName:"p"},"full"),". Default is ",(0,a.kt)("code",{parentName:"p"},"full"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--query [query]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,a.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output type. ",(0,a.kt)("code",{parentName:"p"},"json"),", ",(0,a.kt)("code",{parentName:"p"},"text"),", ",(0,a.kt)("code",{parentName:"p"},"csv"),", ",(0,a.kt)("code",{parentName:"p"},"md"),". Default ",(0,a.kt)("code",{parentName:"p"},"json"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--verbose"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--debug"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}i.isMDXComponent=!0},47170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(26054),s=n(74866),i=n(85162);const l={},u="spo hubsite register",c={unversionedId:"cmd/spo/hubsite/hubsite-register",id:"cmd/spo/hubsite/hubsite-register",title:"spo hubsite register",description:"Registers the specified site collection as a hub site",source:"@site/docs/cmd/spo/hubsite/hubsite-register.mdx",sourceDirName:"cmd/spo/hubsite",slug:"/cmd/spo/hubsite/hubsite-register",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-register",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/hubsite/hubsite-register.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo hubsite list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-list"},next:{title:"spo hubsite set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-set"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],m={toc:d},b="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-hubsite-register"},"spo hubsite register"),(0,a.kt)("p",null,"Registers the specified site collection as a hub site"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite register [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-u, --siteUrl <siteUrl>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"URL of the site collection to register as a hub site."))),(0,a.kt)(o.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To use this command you must be a Global or SharePoint administrator.")),(0,a.kt)("p",null,"If the specified site collection is already registered as a hub site, you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"This site is already a HubSite.")," error."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Register the site collection with URL ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/sales"},"https://contoso.sharepoint.com/sites/sales"))," as a hub site"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite register --siteUrl https://contoso.sharepoint.com/sites/sales\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Description": "",\n  "EnablePermissionsSync": false,\n  "EnforcedECTs": null,\n  "EnforcedECTsVersion": 0,\n  "HideNameInNavigation": false,\n  "ID": "0f9b8f4f-0e8e-4630-bb0a-501442db9b64",\n  "LogoUrl": null,\n  "ParentHubSiteId": "00000000-0000-0000-0000-000000000000",\n  "PermissionsSyncTag": 0,\n  "RequiresJoinApproval": false,\n  "SiteDesignId": "00000000-0000-0000-0000-000000000000",\n  "SiteId": "0f9b8f4f-0e8e-4630-bb0a-501442db9b64",\n  "SiteUrl": "https://contoso.sharepoint.com/sites/newHubSite",\n  "Targets": null,\n  "TenantInstanceId": "4d128b52-7228-46b5-8765-5b338476054d",\n  "Title": "New Hub Site"\n}\n'))),(0,a.kt)(i.Z,{value:"Text",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Description          : null\nEnablePermissionsSync: false\nEnforcedECTs         : null\nEnforcedECTsVersion  : 0\nHideNameInNavigation : false\nID                   : 0f9b8f4f-0e8e-4630-bb0a-501442db9b64\nLogoUrl              : null\nParentHubSiteId      : 00000000-0000-0000-0000-000000000000\nPermissionsSyncTag   : 0\nRequiresJoinApproval : false\nSiteDesignId         : 00000000-0000-0000-0000-000000000000\nSiteId               : 0f9b8f4f-0e8e-4630-bb0a-501442db9b64\nSiteUrl              : https://contoso.sharepoint.com/sites/newHubsite\nTargets              : null\nTenantInstanceId     : 4d128b52-7228-46b5-8765-5b338476054d\nTitle                : New Hub Site\n"))),(0,a.kt)(i.Z,{value:"CSV",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"Description,EnablePermissionsSync,EnforcedECTs,EnforcedECTsVersion,HideNameInNavigation,ID,LogoUrl,ParentHubSiteId,PermissionsSyncTag,RequiresJoinApproval,SiteDesignId,SiteId,SiteUrl,Targets,TenantInstanceId,Title\n,,,0,,0f9b8f4f-0e8e-4630-bb0a-501442db9b64,,00000000-0000-0000-0000-000000000000,0,,00000000-0000-0000-0000-000000000000,0f9b8f4f-0e8e-4630-bb0a-501442db9b64,https://contoso.sharepoint.com/sites/newHubSite,,4d128b52-7228-46b5-8765-5b338476054d,New Hub Site\n"))),(0,a.kt)(i.Z,{value:"Markdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'# spo hubsite register --siteUrl "https://contoso.sharepoint.com/sites/newHubSite"\n\nDate: 2/20/2023\n\n## New Hub Site (0f9b8f4f-0e8e-4630-bb0a-501442db9b64)\n\nProperty | Value\n---------|-------\nDescription | null\nEnablePermissionsSync | false\nEnforcedECTs | null\nEnforcedECTsVersion | 0\nHideNameInNavigation | false\nID | 0f9b8f4f-0e8e-4630-bb0a-501442db9b64\nLogoUrl | null\nParentHubSiteId | 00000000-0000-0000-0000-000000000000\nPermissionsSyncTag | 0\nRequiresJoinApproval | false\nSiteDesignId | 00000000-0000-0000-0000-000000000000\nSiteId | 0f9b8f4f-0e8e-4630-bb0a-501442db9b64\nSiteUrl | https://contoso.sharepoint.com/sites/newHubSite\nTargets | null\nTenantInstanceId | 4d128b52-7228-46b5-8765-5b338476054d\nTitle | New Hub Site\n')))),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SharePoint hub sites new in Microsoft 365: ",(0,a.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"},"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"))))}f.isMDXComponent=!0}}]);