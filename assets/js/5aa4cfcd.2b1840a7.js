"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[69850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),s=n(86010),o=n(12466),i=n(56697),l=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,u]=b({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),h=(()=>{const e=l??p;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var h=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},26054:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const s={toc:[]},o="wrapper";function i(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}i.isMDXComponent=!0},95611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),s=n(26054),o=n(74866),i=n(85162);const l={},u="spo hubsite list",c={unversionedId:"cmd/spo/hubsite/hubsite-list",id:"cmd/spo/hubsite/hubsite-list",title:"spo hubsite list",description:"Lists hub sites in the current tenant",source:"@site/docs/cmd/spo/hubsite/hubsite-list.mdx",sourceDirName:"cmd/spo/hubsite",slug:"/cmd/spo/hubsite/hubsite-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/hubsite/hubsite-list.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo hubsite get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-get"},next:{title:"spo hubsite register",permalink:"/cli-microsoft365-docusaurus/cmd/spo/hubsite/hubsite-register"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Standard response",id:"standard-response",level:3},{value:"<code>includeAssociatedSites</code> response",id:"includeassociatedsites-response",level:3},{value:"More information",id:"more-information",level:2}],m={toc:d},b="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-hubsite-list"},"spo hubsite list"),(0,r.kt)("p",null,"Lists hub sites in the current tenant"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --includeAssociatedSites"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Include the associated sites in the result (only in JSON output)."))),(0,r.kt)(s.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"When using the text or csv output type, the command lists only the values of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SiteUrl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Title")," properties of the hub site. With the output type as JSON, all available properties are included in the command output."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List hub sites in the current tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite list\n")),(0,r.kt)("p",null,"List hub sites, including their associated sites, in the current tenant. Associated site info is only shown in JSON output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo hubsite list --includeAssociatedSites --output json\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("h3",{id:"standard-response"},"Standard response"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Description": "Intranet Hub Site",\n    "EnablePermissionsSync": false,\n    "EnforcedECTs": null,\n    "EnforcedECTsVersion": 0,\n    "HideNameInNavigation": false,\n    "ID": "af80c11f-0138-4d72-bb37-514542c3aabb",\n    "LogoUrl": "https://contoso.sharepoint.com/sites/intra/SiteAssets/work.png",\n    "ParentHubSiteId": "ec78f3aa-5a74-4f16-be49-3396df045f34",\n    "PermissionsSyncTag": 0,\n    "RequiresJoinApproval": false,\n    "SiteDesignId": "184644fb-90ed-4841-a7ad-6930cf819060",\n    "SiteId": "af80c11f-0138-4d72-bb37-514542c3aabb",\n    "SiteUrl": "https://contoso.sharepoint.com/sites/intra",\n    "Targets": null,\n    "TenantInstanceId": "5d128b52-7228-46b5-8765-5b338476054d",\n    "Title": "Intranet"\n  }\n]\n'))),(0,r.kt)(i.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ID                                    SiteUrl                                     Title\n------------------------------------  ------------------------------------------  --------\naf80c11f-0138-4d72-bb37-514542c3aabb  https://contoso.sharepoint.com/sites/intra  Intranet\n"))),(0,r.kt)(i.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"ID,SiteUrl,Title\naf80c11f-0138-4d72-bb37-514542c3aabb,https://contoso.sharepoint.com/sites/intra,Intranet\n"))),(0,r.kt)(i.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"# spo hubsite list\n\nDate: 2/20/2023\n\n## Intranet (af80c11f-0138-4d72-bb37-514542c3aabb)\n\nProperty | Value\n---------|-------\nDescription | Intranet Hub Site\nEnablePermissionsSync | false\nEnforcedECTs | null\nEnforcedECTsVersion | 0\nHideNameInNavigation | false\nID | af80c11f-0138-4d72-bb37-514542c3aabb\nLogoUrl | https://contoso.sharepoint.com/sites/intra/SiteAssets/work.png\nParentHubSiteId | ec78f3aa-5a74-4f16-be49-3396df045f34\nPermissionsSyncTag | 0\nRequiresJoinApproval | false\nSiteDesignId | 184644fb-90ed-4841-a7ad-6930cf819060\nSiteId | af80c11f-0138-4d72-bb37-514542c3aabb\nSiteUrl | https://contoso.sharepoint.com/sites/intra\nTargets | null\nTenantInstanceId | 5d128b52-7228-46b5-8765-5b338476054d\nTitle | Intranet\n")))),(0,r.kt)("h3",{id:"includeassociatedsites-response"},(0,r.kt)("inlineCode",{parentName:"h3"},"includeAssociatedSites")," response"),(0,r.kt)("p",null,"When we make use of the option ",(0,r.kt)("inlineCode",{parentName:"p"},"includeAssociatedSites")," the response will differ. "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Description": "Intranet Hub Site",\n    "EnablePermissionsSync": false,\n    "EnforcedECTs": null,\n    "EnforcedECTsVersion": 0,\n    "HideNameInNavigation": false,\n    "ID": "af80c11f-0138-4d72-bb37-514542c3aabb",\n    "LogoUrl": "https://contoso.sharepoint.com/sites/intra/SiteAssets/work.png",\n    "ParentHubSiteId": "ec78f3aa-5a74-4f16-be49-3396df045f34",\n    "PermissionsSyncTag": 0,\n    "RequiresJoinApproval": false,\n    "SiteDesignId": "184644fb-90ed-4841-a7ad-6930cf819060",\n    "SiteId": "af80c11f-0138-4d72-bb37-514542c3aabb",\n    "SiteUrl": "https://contoso.sharepoint.com/sites/intra",\n    "Targets": null,\n    "TenantInstanceId": "5d128b52-7228-46b5-8765-5b338476054d",\n    "Title": "Intranet",\n    "AssociatedSites": [\n      {\n        "Title": "About Us",\n        "SiteUrl": "https://contoso.sharepoint.com/sites/about-us"\n      }\n    ]\n  }\n]\n'))),(0,r.kt)(i.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ID                                    SiteUrl                                     Title\n------------------------------------  ------------------------------------------  --------\naf80c11f-0138-4d72-bb37-514542c3aabb  https://contoso.sharepoint.com/sites/intra  Intranet\n"))),(0,r.kt)(i.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"ID,SiteUrl,Title\naf80c11f-0138-4d72-bb37-514542c3aabb,https://contoso.sharepoint.com/sites/intra,Intranet\n"))),(0,r.kt)(i.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# spo hubsite list --includeAssociatedSites "true"\n\nDate: 2/20/2023\n\n## Intranet (af80c11f-0138-4d72-bb37-514542c3aabb)\n\nProperty | Value\n---------|-------\nDescription | Intranet Hub Site\nEnablePermissionsSync | false\nEnforcedECTs | null\nEnforcedECTsVersion | 0\nHideNameInNavigation | false\nID | af80c11f-0138-4d72-bb37-514542c3aabb\nLogoUrl | https://contoso.sharepoint.com/sites/intra/SiteAssets/work.png\nParentHubSiteId | ec78f3aa-5a74-4f16-be49-3396df045f34\nPermissionsSyncTag | 0\nRequiresJoinApproval | false\nSiteDesignId | 184644fb-90ed-4841-a7ad-6930cf819060\nSiteId | af80c11f-0138-4d72-bb37-514542c3aabb\nSiteUrl | https://contoso.sharepoint.com/sites/intra\nTargets | null\nTenantInstanceId | 5d128b52-7228-46b5-8765-5b338476054d\nTitle | Intranet\n')))),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SharePoint hub sites new in Microsoft 365: ",(0,r.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"},"https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547"))))}f.isMDXComponent=!0}}]);