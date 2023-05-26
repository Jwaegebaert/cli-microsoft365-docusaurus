"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[5153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),s=n(86010);const o={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(o.tabItem,a),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),s=n(67294),o=n(86010),a=n(12466),i=n(56697),l=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[a,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=f({queryString:n,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,s.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var b=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(d(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:a}=e;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},a,{className:(0,o.Z)("tabs__item",h.tabItem,a?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=g(e);return s.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},s.createElement(v,(0,r.Z)({},e,t)),s.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return s.createElement(k,(0,r.Z)({key:String(t)},e))}},73301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(87462),s=(n(67294),n(3905)),o=n(74866),a=n(85162);const i={tags:["cleanup"]},l="Delete custom SharePoint site designs",u={unversionedId:"sample-scripts/spo/delete-site-designs/index",id:"sample-scripts/spo/delete-site-designs/index",title:"Delete custom SharePoint site designs",description:"Author: Laura Kokkarinen",source:"@site/docs/sample-scripts/spo/delete-site-designs/index.mdx",sourceDirName:"sample-scripts/spo/delete-site-designs",slug:"/sample-scripts/spo/delete-site-designs/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/delete-site-designs/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/delete-site-designs/index.mdx",tags:[{label:"cleanup",permalink:"/cli-microsoft365-docusaurus/tags/cleanup"}],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{tags:["cleanup"]},sidebar:"sampleScripts",previous:{title:"Delete all (non-group connected) modern SharePoint sites",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/delete-non-group-connected-modern-sites/"},next:{title:"Delete custom SharePoint site scripts",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/delete-site-scripts/"}},c={},d=[],p={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"delete-custom-sharepoint-site-designs"},"Delete custom SharePoint site designs"),(0,s.kt)("p",null,"Author: ",(0,s.kt)("a",{parentName:"p",href:"https://laurakokkarinen.com/does-it-spark-joy-powershell-scripts-for-keeping-your-development-environment-tidy-and-spotless/#delete-all-sharepoint-site-designs-and-site-scripts"},"Laura Kokkarinen")),(0,s.kt)("p",null,"Site designs and especially site scripts can be something that ends up just hanging around in your tenant for a long time even though you no longer need them for anything. Use the scripts below to get rid of them. You might also find some site scripts that are not linked to any site design and hence never get executed!"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"PowerShell",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},'$sparksjoy = "Cat Lovers United", "Multicolored theme"\n$sitedesigns = m365 spo sitedesign list -o json | ConvertFrom-Json\n$sitedesigns = $sitedesigns | where {-not ($sparksjoy -contains $_.Title)}\n$sitedesigns | Format-Table Title, SiteScriptIds, Description\nif ($sitedesigns.Count -eq 0) { break }\nRead-Host -Prompt "Press Enter to start deleting (CTRL + C to exit)"\n$progress = 0\n$total = $sitedesigns.Count\nforeach ($sitedesign in $sitedesigns)\n{\n  $progress++\n  write-host $progress / $total":" $sitedesign.Title\n  m365 spo sitedesign remove --id "$($sitedesign.Id)" --confirm\n}\n'))),(0,s.kt)(a.Z,{value:"Bash",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# requires jq: https://stedolan.github.io/jq/\n\nsparksjoy=("Cat Lovers United" "Multicolored theme")\nsitedesignstoremove=()\nwhile read sitedesign; do\n  exists=false\n  designinfo=(${sitedesign//;/ })\n  for keep in "${sparksjoy[@]}"; do\n    if [ "$keep" == "${designinfo[0]}" ] ; then\n      exists=true\n      break\n    fi\n  done\n  if [ "$exists" = false ]; then\n    sitedesignstoremove+=("$sitedesign")\n  fi\ndone < <(m365 spo sitedesign list -o json | jq -r \'.[].Title + ";" + .[].Id\')\n\nif [ ${#sitedesignstoremove[@]} = 0 ]; then\n  exit 1\nfi\n\nprintf \'%s\\n\' "${sitedesignstoremove[@]}"\necho "Press Enter to start deleting (CTRL + C to exit)"\nread foo\n\nfor sitedesign in "${sitedesignstoremove[@]}"; do\n  designinfo=(${sitedesign//;/ })\n  echo "Deleting ${designinfo[0]}..."\n  m365 spo sitedesign remove --id "${designinfo[1]}" --confirm\ndone\n')))))}f.isMDXComponent=!0}}]);