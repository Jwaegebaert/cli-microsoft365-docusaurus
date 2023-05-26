"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[26165],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||s;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(67294),o=t(86010);const s={tabItem:"tabItem_Ymn6"};function a(e){let{children:r,hidden:t,className:a}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(s.tabItem,a),hidden:t},r)}},74866:(e,r,t)=>{t.d(r,{Z:()=>k});var n=t(87462),o=t(67294),s=t(86010),a=t(12466),i=t(56697),u=t(91980),l=t(67392),c=t(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:o}}=e;return{value:r,label:t,attributes:n,default:o}}))}function m(e){const{values:r,children:t}=e;return(0,o.useMemo)((()=>{const e=r??p(t);return function(e){const r=(0,l.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function d(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const n=(0,i.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u._X)(s),(0,o.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})}),[s,n])]}function h(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=m(e),[a,i]=(0,o.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[u,l]=f({queryString:t,groupId:n}),[p,h]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,c.Nk)(t);return[n,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),g=(()=>{const e=u??p;return d({value:e,tabValues:s})?e:null})();(0,o.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),h(e)}),[l,h,s]),tabValues:s}}var g=t(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:r,block:t,selectedValue:i,selectValue:u,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,a.o5)(),m=e=>{const r=e.currentTarget,t=c.indexOf(r),n=l[t].value;n!==i&&(p(r),u(n))},d=e=>{let r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r)},l.map((e=>{let{value:r,label:t,attributes:a}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,key:r,ref:e=>c.push(e),onKeyDown:d,onClick:m},a,{className:(0,s.Z)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":i===r})}),t??r)})))}function $(e){let{lazy:r,children:t,selectedValue:n}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},s.map(((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==n}))))}function v(e){const r=h(e);return o.createElement("div",{className:(0,s.Z)("tabs-container",y.tabList)},o.createElement(b,(0,n.Z)({},e,r)),o.createElement($,(0,n.Z)({},e,r)))}function k(e){const r=(0,g.Z)();return o.createElement(v,(0,n.Z)({key:String(r)},e))}},1581:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(87462),o=(t(67294),t(3905)),s=t(74866),a=t(85162);const i={tags:["security"]},u="Grant API permissions to SharePoint Azure AD Application",l={unversionedId:"sample-scripts/spo/grant-api-permissions-aad/index",id:"sample-scripts/spo/grant-api-permissions-aad/index",title:"Grant API permissions to SharePoint Azure AD Application",description:"Author: Micha\xebl Maillot",source:"@site/docs/sample-scripts/spo/grant-api-permissions-aad/index.mdx",sourceDirName:"sample-scripts/spo/grant-api-permissions-aad",slug:"/sample-scripts/spo/grant-api-permissions-aad/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/grant-api-permissions-aad/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/grant-api-permissions-aad/index.mdx",tags:[{label:"security",permalink:"/cli-microsoft365-docusaurus/tags/security"}],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{tags:["security"]},sidebar:"sampleScripts",previous:{title:"Export Configurations of Tenant Wide Extensions",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/export-configs-tenant-wide-extensions/"},next:{title:"Hide SharePoint list from Site Contents",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/hide-list-from-site-contents/"}},c={},p=[],m={toc:p},d="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"grant-api-permissions-to-sharepoint-azure-ad-application"},"Grant API permissions to SharePoint Azure AD Application"),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://michaelmaillot.github.io"},"Micha\xebl Maillot")),(0,o.kt)("p",null,"When developing your SPFx components, you usually first run them locally before deploying them (really ?)."),(0,o.kt)("p",null,"And then comes the time to work with API such as Microsoft Graph."),(0,o.kt)("p",null,"If you never use those permissions before in your SPFx projects (and the tenant with which you're working), you realize that you have to:"),(0,o.kt)("p",null,"Add required API permissions in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package-solution.json")," file"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bundle / Ship your project"),(0,o.kt)("li",{parentName:"ul"},"Publish it"),(0,o.kt)("li",{parentName:"ul"},"Go to the SharePoint Admin Center Web API Permissions page"),(0,o.kt)("li",{parentName:"ul"},"Approve those permissions")),(0,o.kt)("p",null,"All of this, just to play with the API as you didn't plan to release your package in a production environment."),(0,o.kt)("p",null,"So what if you could bypass all these steps for both Graph and owned API?"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This trick is just for development purposes. In Production environment, you should update your ",(0,o.kt)("inlineCode",{parentName:"p"},"package-solution.json")," file to add required permissions and allow them (or ask for validation) in the ",(0,o.kt)("em",{parentName:"p"},"API access")," page.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"These permissions will be granted on the whole tenant and could be used by any script running in your tenant. More info ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sharepoint/dev/spfx/use-aadhttpclient#considerations"},"here"),".")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"PowerShell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'$m365Status = m365 status --output text\nif ($m365Status -eq "Logged Out") {\n  m365 login\n}\n\n# Granting Microsoft Graph permissions\n$resourceName = "Microsoft Graph"\n$msGraphPermissions = @(\n  "Mail.Read",\n  "People.Read",\n  "User.ReadWrite"\n)\n\n$progress = 0\n$total = $msGraphPermissions.Count\n\nForEach ($permission in $msGraphPermissions) {\n  $progress++\n  Write-Host $progress / $total":" $permission\n    \n  # If permission already granted, you\'ll face an OAuth permission issue\n  # So you can test the presence of the scope for the requested resource to prevent the error\n  $scopeToAdd = m365 spo serviceprincipal grant list --query "[?Resource == \'${resourceName}\' && Scope == \'${permission}\']"\n  if ($scopeToAdd -eq "") {\n    m365 spo serviceprincipal grant add --resource "$resourceName" --scope "$permission"\n    Write-Host "Permission \'${permission}\' for Resource \'${resourceName}\' granted" -ForegroundColor Green\n  }\n  else {\n    Write-Host "Permission \'${permission}\' for Resource \'${resourceName}\' already granted" -ForegroundColor Yellow \n  }\n}\n\n# Granting custom permissions\n$resourceName = "contoso-api"\n$customPermissions = @(\n  "user_impersonation",\n  "random_permission"\n)\n\n$progress = 0\n$total = $customPermissions.Count\n\nForEach ($permission in $customPermissions) {\n  $progress++\n  Write-Host $progress / $total":" $permission\n\n  # If permission already granted, you\'ll face an OAuth permission issue\n  # So you can test the presence of the scope for the requested resource to prevent the error\n  $scopeToAdd = m365 spo serviceprincipal grant list --query "[?Resource == \'${resourceName}\' && Scope == \'${permission}\']"\n  if ($scopeToAdd -eq "") {\n    m365 spo serviceprincipal grant add --resource "$resourceName" --scope "$permission"\n    Write-Host "Permission \'${permission}\' for Resource \'${resourceName}\' granted" -ForegroundColor Green\n  }\n  else {\n    Write-Host "Permission \'${permission}\' for Resource \'${resourceName}\' already granted" -ForegroundColor Yellow \n  }\n}\n'))),(0,o.kt)(a.Z,{value:"Bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# color formatting for echo\nNOCOLOR=\'\\033[0m\'\nYELLOW=\'\\033[1;33m\'\nGREEN=\'\\033[0;32m\'\n\nm365 login # Don\'t execute that command if you\'re already logged in\n\n# Granting Microsoft Graph permissions\nresourceName="Microsoft Graph"\nmsGraphPermissions=("Mail.Read" "People.Read" "User.ReadWrite")\n\nprogress=0\ntotal=${#msGraphPermissions[@]}\n\nfor permission in "${msGraphPermissions[@]}"; do\n  ((progress++))\n  printf \'%s / %s:%s\\n\' "$progress" "$total" "$permission"\n\n  # If permission already granted, you\'ll face an OAuth permission issue\n  # So you can test the presence of the scope for the requested resource to prevent the error\n  scopeToAdd=$( m365 spo serviceprincipal grant list --query "[?Resource == \'$resourceName\' && Scope == \'${permission}\']" )\n  if [ "$( [ -z "$scopeToAdd" ] && echo "Empty" )" == "Empty" ]; then\n    m365 spo serviceprincipal grant add --resource "$resourceName" --scope "$permission"\n    echo -e "${GREEN}Permission \'${permission}\' for Resource \'${resourceName}\' granted${NOCOLOR}"\n  else\n    echo -e "${YELLOW}Permission \'${permission}\' for Resource \'${resourceName}\' already granted${NOCOLOR}"\n  fi\ndone\n\n# Granting custom permissions\nresourceName="contoso-api"\ncustomPermissions=("user_impersonation" "random_permission")\n\nprogress=0\ntotal=${#customPermissions[@]}\n\nfor permission in "${customPermissions[@]}"; do\n  ((progress++))\n  printf \'%s / %s:%s\\n\' "$progress" "$total" "$permission"\n  \n  # If permission already granted, you\'ll face an OAuth permission issue\n  # So you can test the presence of the scope for the requested resource to prevent the error\n  scopeToAdd=$( m365 spo serviceprincipal grant list --query "[?Resource == \'$resourceName\' && Scope == \'${permission}\']" )\n  if [ "$( [ -z "$scopeToAdd" ] && echo "Empty" )" == "Empty" ]; then\n    m365 spo serviceprincipal grant add --resource "$resourceName" --scope "$permission"\n    echo -e "${GREEN}Permission \'${permission}\' for Resource \'${resourceName}\' granted${NOCOLOR}"\n  else\n    echo -e "${YELLOW}Permission \'${permission}\' for Resource \'${resourceName}\' already granted${NOCOLOR}"\n  fi\ndone\n')))))}f.isMDXComponent=!0}}]);