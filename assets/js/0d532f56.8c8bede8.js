"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[70984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),o=n(86010),s=n(12466),i=n(56697),l=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=f({queryString:n,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var b=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==i&&(p(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function $(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement($,(0,r.Z)({key:String(t)},e))}},98113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),s=n(85162);const i={tags:["files","libraries","ai"]},l="Create sample documents in SharePoint with OpenAI",c={unversionedId:"sample-scripts/spo/create-sample-documents-with-openai/index",id:"sample-scripts/spo/create-sample-documents-with-openai/index",title:"Create sample documents in SharePoint with OpenAI",description:"Author: Nanddeep Nachan",source:"@site/docs/sample-scripts/spo/create-sample-documents-with-openai/index.mdx",sourceDirName:"sample-scripts/spo/create-sample-documents-with-openai",slug:"/sample-scripts/spo/create-sample-documents-with-openai/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/create-sample-documents-with-openai/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/create-sample-documents-with-openai/index.mdx",tags:[{label:"files",permalink:"/cli-microsoft365-docusaurus/tags/files"},{label:"libraries",permalink:"/cli-microsoft365-docusaurus/tags/libraries"},{label:"ai",permalink:"/cli-microsoft365-docusaurus/tags/ai"}],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{tags:["files","libraries","ai"]},sidebar:"sampleScripts",previous:{title:"Copy list items between SharePoint lists",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/copy-listitems-sharepointlist/"},next:{title:"Delete custom color themes from SharePoint",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/delete-custom-themes/"}},u={},p=[],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-sample-documents-in-sharepoint-with-openai"},"Create sample documents in SharePoint with OpenAI"),(0,a.kt)("p",null,"Author: ",(0,a.kt)("a",{parentName:"p",href:"https://nanddeepnachanblogs.com/posts/2023-02-12-test-docs-spo-openai-power-Automate/"},"Nanddeep Nachan")),(0,a.kt)("p",null,"While working with SharePoint, we most times need to create test content related to a specific topic. OpenAI is the best fit in this case to generate content related to any topic."),(0,a.kt)("p",null,"The below script shows how OpenAI can be combined with CLI for Microsoft 365 to generate test documents in SharePoint."),(0,a.kt)("p",null,"Prerequisites:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OpenAI API key."),(0,a.kt)("li",{parentName:"ul"},"Document library should be available in the destination SharePoint site.")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"PowerShell",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'param\n(\n    [Parameter(Mandatory = $true, HelpMessage="The URL of the site where the files should be uploaded to")][string] $SiteURL,\n    [Parameter(Mandatory = $true, HelpMessage="Site-relative or server-relative URL to the folder where the files should be uploaded")][string] $Folder,\n    [Parameter(Mandatory = $true, HelpMessage="The OpenAI API key")][string] $OpenAiApiKey,\n    [Parameter(Mandatory = $true, HelpMessage="Number of test files to generate")][int] $NumberOfDocuments\n)\n\nfunction New-WordFile {\n  param(\n      [string]$FileName,\n      [string]$Content\n  )\n\n  # Load Word application\n  $word = New-Object -ComObject Word.Application\n\n  # Create new document\n  $doc = $word.Documents.Add()\n\n  # Add content to document\n  $selection = $word.Selection\n  $selection.TypeText($Content)\n\n  # Save document\n  $path = Join-Path (Get-Location).Path $FileName\n  $doc.SaveAs("$path")\n  $doc.Close()\n\n  # Close Word application\n  $word.Quit()\n\n  # Clean up\n  $null = [System.Runtime.InteropServices.Marshal]::ReleaseComObject([System.__ComObject]$word)\n  [gc]::Collect()\n  [gc]::WaitForPendingFinalizers()\n  Remove-Variable word\n}\n\ntry {\n  $m365Status = m365 status\n  if ($m365Status -eq "Logged Out") {\n    Write-Host "Logging in the User!"\n    m365 login --authType browser\n  }\n\n  $apiEndpoint = "https://api.openai.com/v1/completions"\n\n  $headers = @{\n    "Content-Type" = "application/json"\n    "Authorization" = "Bearer $OpenAiApiKey"\n  }\n\n  $requestBody = @{\n    prompt = "Generate $NumberOfDocuments comma-separated distinct random nouns without spaces"\n    model = "text-davinci-003"        \n    temperature = 0.7\n    max_tokens = 256\n  }\n\n  $response = Invoke-WebRequest -Uri $apiEndpoint -Method POST -Headers $headers -Body (ConvertTo-Json $requestBody)\n  $randomGeneratedWordsContent = $response.Content | ConvertFrom-Json\n  $randomGeneratedWords = $randomGeneratedWordsContent.choices.text -replace "`n","" -replace "`r",""\n  Write-Host "$NumberOfDocuments random generated words are: $randomGeneratedWords"\n  $randomWords = $randomGeneratedWords.Split(\',\')\n\n  $counter = 1\n  Foreach ($randomWord in $randomWords) {\n    $requestBody = @{\n      prompt = "Write essay about $randomWord"\n      model = "text-davinci-003"        \n      temperature = 1\n      max_tokens = 256\n    }\n\n    $response = Invoke-WebRequest -Uri $apiEndpoint -Method POST -Headers $headers -Body (ConvertTo-Json $requestBody)\n    $essayContent = $response.Content | ConvertFrom-Json\n    $essay = $essayContent.choices.text\n\n    Write-Host "Generating document ($counter / $($randomWords.count)): $randomWord.docx"\n    New-WordFile -FileName "$randomWord.docx" -Content $essay\n\n    Write-Host "Uploading file $randomWord.docx..."\n    $path = Join-Path (Get-Location).Path "$randomWord.docx"\n    m365 spo file add --webUrl $SiteURL --folder $Folder --path $path\n\n    Remove-Item -Path $path -Force\n\n    $counter++\n  }\n}\ncatch {\n    Write-Host -f Red "Error generating test documents: " $_.Exception.Message\n}\n\nWrite-Host "Finished"\n')))))}f.isMDXComponent=!0}}]);