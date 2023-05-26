"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[3272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=i.createContext({}),u=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(a.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,f=p["".concat(a,".").concat(d)]||p[d]||m[d]||s;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,r=new Array(s);r[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[p]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<s;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(67294),l=n(86010);const s={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,l.Z)(s.tabItem,r),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var i=n(87462),l=n(67294),s=n(86010),r=n(12466),o=n(56697),a=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:l}}=e;return{value:t,label:n,attributes:i,default:l}}))}function m(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(s),(0,l.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=m(e),[r,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[a,u]=f({queryString:n,groupId:i}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Nk)(n);return[i,(0,l.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),$=(()=>{const e=a??p;return d({value:e,tabValues:s})?e:null})();(0,l.useLayoutEffect)((()=>{$&&o($)}),[$]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var $=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:o,selectValue:a,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),i=u[n].value;i!==o&&(p(t),a(i))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,i.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},r,{className:(0,s.Z)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function g(e){const t=b(e);return l.createElement("div",{className:(0,s.Z)("tabs-container",y.tabList)},l.createElement(h,(0,i.Z)({},e,t)),l.createElement(v,(0,i.Z)({},e,t)))}function w(e){const t=(0,$.Z)();return l.createElement(g,(0,i.Z)({key:String(t)},e))}},18416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var i=n(87462),l=(n(67294),n(3905)),s=n(74866),r=n(85162);const o={tags:["libraries","lists","provisioning","sites"]},a="Setup example site",u={unversionedId:"sample-scripts/spo/setup-example-site/index",id:"sample-scripts/spo/setup-example-site/index",title:"Setup example site",description:"Author: Adam",source:"@site/docs/sample-scripts/spo/setup-example-site/index.mdx",sourceDirName:"sample-scripts/spo/setup-example-site",slug:"/sample-scripts/spo/setup-example-site/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/setup-example-site/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/setup-example-site/index.mdx",tags:[{label:"libraries",permalink:"/cli-microsoft365-docusaurus/tags/libraries"},{label:"lists",permalink:"/cli-microsoft365-docusaurus/tags/lists"},{label:"provisioning",permalink:"/cli-microsoft365-docusaurus/tags/provisioning"},{label:"sites",permalink:"/cli-microsoft365-docusaurus/tags/sites"}],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{tags:["libraries","lists","provisioning","sites"]},sidebar:"sampleScripts",previous:{title:"Replace site collection admin with another user",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/replace-site-collection-admin/"},next:{title:"Sync SharePoint Document Library Documents with Azure Storage Container",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/sync-splib-into-az-storage-container/"}},c={},p=[],m={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"setup-example-site"},"Setup example site"),(0,l.kt)("p",null,"Author: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Adam-it"},"Adam")),(0,l.kt)("p",null,"This script is a good starting point for a setup script to create site with some assets like columns, content types, lists, navigation etc. The given example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"creates a site,"),(0,l.kt)("li",{parentName:"ul"},"adds a site column and a content type,"),(0,l.kt)("li",{parentName:"ul"},"adds list and modifies it's settings (add a content type to it and makes it hidden),"),(0,l.kt)("li",{parentName:"ul"},"adds a document library with a custom column and some folder,"),(0,l.kt)("li",{parentName:"ul"},"modifies the all items view of the document library,"),(0,l.kt)("li",{parentName:"ul"},"modifies the site navigation links")),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"PowerShell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Write-host 'setup script example'\n\nWrite-host 'ensure logged in'\n$m365Status = m365 status --output text\nif ($m365Status -eq \"Logged Out\") {\n  m365 login\n}\n\nWrite-host 'create setup site'\n$siteRelativeUrl = 'sites/setupTestSite'\n$tenantUrl = 'https://contoso.sharepoint.com'\n$siteUrl = \"$tenantUrl/$siteRelativeUrl\"\n$siteTitle = 'setup test site'\n$siteType = 'CommunicationSite'\n$site = m365 spo site get --url $siteUrl --output 'json'\n$site = $site | ConvertFrom-Json\nif ($null -eq $site) {\n  Write-host 'setup site does not exist, I will create it'\n  m365 spo site add --url $siteUrl --type $siteType --title $siteTitle\n}\nelse {\n  Write-host 'setup site already exists'\n}\n\nWrite-host 'add site column'\n$fieldName = 'Sample Text Column'\n$field = m365 spo field get --webUrl $siteUrl --title $fieldName --output 'json'\nif ($null -eq $field) {\n  Write-host 'sample site column does not exist, I will create it'\n  $fieldXml = \"<Field ID='{13AFECC0-2454-41F3-85E6-E194458C861C}' Type='Text' Name='SampleTextColumn' DisplayName='Sample Text Column' Indexed='FALSE' Group='Sample Columns' Required='FALSE' SourceID='{4f118c69-66e0-497c-96ff-d7855ce0713d}' StaticName='SampleTextColumn' FromBaseType='TRUE' ></Field>\"\n  $field = m365 spo field add --webUrl $siteUrl --xml $fieldXml --output 'json'\n}\nelse {\n  Write-host 'sample site column already exists'\n}\n$field = $field | ConvertFrom-Json\n\nWrite-host 'add site content type'\n$contentTypeName = 'sample content type'\n$contentTypeGroup = 'sample content type group'\n$parentId = '0x01007926A45D687BA842B947286090B8F67D' # list item content type\n$contentType = m365 spo contenttype get --webUrl $siteUrl --id $parentId --output 'json'\nif ($null -eq $contentType) {\n  Write-host 'sample site content type does not exist, I will create it'\n  $contentType = m365 spo contenttype add --webUrl $siteUrl --name $contentTypeName --id $parentId --group $contentTypeGroup --output 'json'\n  $contentType = m365 spo contenttype get --webUrl $siteUrl --id $parentId --output 'json'\n}\nelse {\n  Write-host 'sample site content type already exists'\n}\n$contentType = $contentType | ConvertFrom-Json\n\nWrite-host 'add field to content type'\n$fieldId = $field.Id\n$contentTypeId = $contentType.StringId\nm365 spo contenttype field set --webUrl $siteUrl --contentTypeId $contentTypeId --id $fieldId --required false\n\nWrite-host 'create generic list'\n$listName = 'setup test list'\n$list = m365 spo list get --title $listName --webUrl $siteUrl --output 'json'\nif ($null -eq $list) {\n  Write-host 'sample generic list does not exist, I will create it'\n  $list = m365 spo list add --title $listName --baseTemplate 'GenericList' --webUrl $siteUrl --output 'json'\n}\nelse {\n  Write-host 'sample generic list already exists'\n}\n$list = $list | ConvertFrom-Json\n\nWrite-host 'modify list settings to allow content types'\nm365 spo list set --webUrl $siteUrl --id $list.Id --contentTypesEnabled true\n\nWrite-host 'add content type to list'\n$contentTypeAddedToList = m365 spo list contenttype add --webUrl $siteUrl --listId $list.Id --id $contentTypeId\n\nWrite-host 'make list hidden'\nm365 spo list set --webUrl $siteUrl --id $list.Id --hidden true\n\nWrite-host 'create document lib'\n$libName = 'setup test lib'\n$lib = m365 spo list get --title $libName --webUrl $siteUrl --output 'json'\nif ($null -eq $lib) {\n  Write-host 'sample document lib does not exist, I will create it'\n  $lib = m365 spo list add --title $libName --baseTemplate 'DocumentLibrary' --webUrl $siteUrl --output 'json'\n}\nelse {\n  Write-host 'sample document lib already exists'\n}\n$lib = $lib | ConvertFrom-Json\n\nWrite-host 'add sample column'\n$columnName = 'Sample Text Column'\n$column = m365 spo field get --webUrl $siteUrl --listUrl \"Lists/$libName\" --title $columnName --output 'json'\nif ($null -eq $column) {\n  Write-host 'sample column in lib does not exist, I will create it'\n  $columnXml = \"<Field ID='{AC827B0C-8B45-4B4F-927B-CDDC4FEEE79E}' Type='Text' Name='SampleTextColumn' DisplayName='Sample Text Column' Required='FALSE' SourceID='http://schemas.microsoft.com/sharepoint/v3' StaticName='SampleTextColumn' FromBaseType='TRUE' />\"\n  $column = m365 spo field add --webUrl $siteUrl --listTitle $libName --xml $columnXml --output 'json'\n}\nelse {\n  Write-host 'sample column in lib already exists'\n}\n$column = $column | ConvertFrom-Json\n\nWrite-host 'add sample folder'\n$folderName = 'sample Folder'\n$folder = m365 spo folder get --webUrl $siteUrl --url \"/$libName/$folderName\" --output 'json'\nif ($null -eq $folder) {\n  Write-host 'sample folder in lib does not exist, I will create it'\n  $folder = m365 spo folder add --webUrl $siteUrl --parentFolderUrl \"/$libName\" --name $folderName --output 'json'\n}\nelse {\n  Write-host 'sample folder in lib already exists'\n}\n\nWrite-host 'modify list view'\n$views = m365 spo list view list --webUrl $siteUrl --listTitle \"$libName\" --output 'json'\n$views = $views | ConvertFrom-Json\n$viewName = $views[0].Title # all items view\nm365 spo list view field add --webUrl $siteUrl --listTitle \"$libName\" --viewTitle $viewName --title $columnName\n\nWrite-host 'modify site navigation'\n$currentNavigation = m365 spo navigation node list --webUrl $siteUrl --location QuickLaunch --output 'json'\n$currentNavigation = $currentNavigation | ConvertFrom-Json\nWrite-host 'clearing old navigation links'\nforeach ($navigationItem in $currentNavigation) {\n  m365 spo navigation node remove --webUrl $siteUrl --location QuickLaunch --id $navigationItem.Id --confirm\n}\nWrite-host 'adding new navigation'\n$nodeAddedResponse = m365 spo navigation node add --webUrl $siteUrl --location QuickLaunch --title 'Sample Document Library' --url \"/$siteRelativeUrl/$libName/Forms/AllItems.aspx\"\n$nodeAddedResponse = m365 spo navigation node add --webUrl $siteUrl --location QuickLaunch --title 'Hidden Sample List' --url \"/$siteRelativeUrl/Lists/$listName/AllItems.aspx\"\n")))))}f.isMDXComponent=!0}}]);