"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[5053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),s=n(86010),o=n(12466),i=n(56697),l=n(91980),p=n(67392),u=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,p]=f({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=l??c;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,s]),tabValues:s}}var b=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(c(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function $(e){const t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",y.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement($,(0,a.Z)({key:String(t)},e))}},47410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),s=n(74866),o=n(85162);const i={tags:["apps","provisioning","users"]},l="Deploy Microsoft Teams personal app and add it to users",p={unversionedId:"sample-scripts/teams/deploy-personal-app/index",id:"sample-scripts/teams/deploy-personal-app/index",title:"Deploy Microsoft Teams personal app and add it to users",description:"Author: S\xe9bastien Levert",source:"@site/docs/sample-scripts/teams/deploy-personal-app/index.mdx",sourceDirName:"sample-scripts/teams/deploy-personal-app",slug:"/sample-scripts/teams/deploy-personal-app/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/deploy-personal-app/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/teams/deploy-personal-app/index.mdx",tags:[{label:"apps",permalink:"/cli-microsoft365-docusaurus/tags/apps"},{label:"provisioning",permalink:"/cli-microsoft365-docusaurus/tags/provisioning"},{label:"users",permalink:"/cli-microsoft365-docusaurus/tags/users"}],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{tags:["apps","provisioning","users"]},sidebar:"sampleScripts",previous:{title:"Create a Microsoft Team with channels from a Microsoft 365 Group",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/create-team-from-group/"},next:{title:"Deploy Microsoft Teams app from Azure DevOps",permalink:"/cli-microsoft365-docusaurus/sample-scripts/teams/deploy-teams-app/"}},u={},c=[],d={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-microsoft-teams-personal-app-and-add-it-to-users"},"Deploy Microsoft Teams personal app and add it to users"),(0,r.kt)("p",null,"Author: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sebastienlevert"},"S\xe9bastien Levert")),(0,r.kt)("p",null,"Installs or updates a Microsoft Teams app from a provided zipped manifest and then, based on the parameters, add it to the current users and / or to a set of users."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"PowerShell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'<#\n  .SYNOPSIS\n    Installs an app to Microsoft Teams and potentially to a set of users\n  .EXAMPLE\n    .\\Install-PersonalApp.ps1 -AppManifestPath "C:\\_\\Manifest.zip" -AppId "2dbace6f-3f3b-4779-9e3f-bb4d27c403fe" -Publish -Install -CurrentUser\n  .EXAMPLE\n    .\\Install-PersonalApp.ps1 -AppManifestPath "C:\\_\\Manifest.zip" -AppId "2dbace6f-3f3b-4779-9e3f-bb4d27c403fe" -Publish -Update -Install -Users @("user1@contoso.com", "user2@contoso.com")\n  .PARAMETER AppManifestPath\n    Valid Path to an zipped App Manifest representing the Microsoft Teams app\n  .PARAMETER AppId\n    GUID of the Microsoft Teams app. Is the same "id" you can find in the manifest.json from your Microsoft Teams app.\n  .PARAMETER Users\n    Array of string representing the usernames of the users to deploy the Microsoft Teams app to.\n  .PARAMETER Publish\n    Switch allowing to Publish (make available) the application to the tenant app catalog\n  .PARAMETER Update\n    Switch allowing to Update an existing application in the tenant app catalog\n  .PARAMETER Install\n    Switch allowing to Install the app for the specified Users or Current User\n  .PARAMETER CurrentUser\n    Switch allowing to Install the app for the current user\n#>\nParam(\n  [ValidateScript( {\n      if (-not ($_ | Test-Path) ) {\n        throw "File or folder does not exist"\n      }\n      if (-not ($_ | Test-Path -PathType Leaf) ) {\n        throw "The Path argument must be a file. Folder paths are not allowed."\n      }\n      if ($_ -notmatch ".zip") {\n        throw "The file specified in the path argument must be a zip"\n      }\n      return $true\n    })]\n  [System.IO.FileInfo]$AppManifestPath,\n  [string]$AppId,\n  [string[]]$Users,\n  [switch]$Publish,\n  [switch]$Update,\n  [switch]$Install,\n  [switch]$CurrentUser\n)\n\n$m365Status = m365 status --output text\n\nif ($m365Status -eq "Logged Out") {\n  # Connection to Microsoft 365\n  m365 login\n}\n\n# Validating that the app is not already in the store\n$app = m365 teams app list --query "[?externalId == \'$AppId\']" -o json | ConvertFrom-Json\n\nif ($app.Length -gt 0) {\n  if ($Update) {\n    # Updating the app with the provided manifest\n    m365 teams app update --id $app.id --filePath $AppManifestPath\n    $app = m365 teams app list --query "[?externalId == \'$AppId\']" -o json | ConvertFrom-Json\n    Write-Host "The App \'$($app.displayName)\' with ID \'$($app.id)\' and ExternalID \'$($app.externalId)\' was updated."\n  }\n}\nelse {\n  if ($Publish) {\n    # Publishing the app with the provided manifest\n    m365 teams app publish --filePath $AppManifestPath\n    $app = m365 teams app list --query "[?externalId == \'$AppId\']" -o json | ConvertFrom-Json\n    Write-Host "The App \'$($app.displayName)\' with ID \'$($app.id)\' and ExternalID \'$($app.externalId)\' was published."\n  }\n}\n\nif ($CurrentUser) {\n  # Getting the reference of the currently connected user\n  $user = m365 aad user get --id "@meId" -o json | ConvertFrom-Json\n\n  if ($user) {\n    $Users += $user.userPrincipalName\n  }\n}  \n\n$user = $null\nif ($Users.Length -gt 0 -and $Install) {\n  $Users | ForEach-Object {\n    # Getting the specified user\n    $user = m365 aad user get --userName $_ -o json | ConvertFrom-Json\n  \n    if ($user) {\n      $userApp = m365 teams user app list --userId $user.id --query "[?appId == \'$($app.id)\']" -o json | ConvertFrom-Json\n\n      if ($userApp.Length -eq 0) {\n        # Adding the app to the personal apps of the specified user\n        m365 teams user app add --id $app.id --userId $user.id\n        Write-Host "The App \'$($app.displayName)\' with ID \'$($app.id)\' was deployed to user \'$($user.userPrincipalName)\'."\n\n      }\n      else {\n        Write-Warning "The App \'$($app.displayName)\' with ID \'$($app.id)\' is already deployed to user \'$($user.userPrincipalName)\'."\n      }\n    }\n    else {\n      Write-Warning "The user \'$_\' was not found"\n    }\n  }\n}\n')))))}f.isMDXComponent=!0}}]);