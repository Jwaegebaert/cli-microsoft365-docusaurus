"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[46229],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),o=r(86010);const a={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,s),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(87462),o=r(67294),a=r(86010),s=r(12466),i=r(56697),u=r(91980),l=r(67392),c=r(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function m(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=m(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,l]=f({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Nk)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),h=(()=>{const e=u??p;return d({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),b(e)}),[l,b,a]),tabValues:a}}var h=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=l[r].value;n!==i&&(p(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},l.map((e=>{let{value:t,label:r,attributes:s}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},s,{className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=b(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",g.tabList)},o.createElement(y,(0,n.Z)({},e,t)),o.createElement(w,(0,n.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return o.createElement(v,(0,n.Z)({key:String(t)},e))}},48945:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(74866),s=r(85162);const i={tags:["groups","users","security"]},u="Change group membership of all SharePoint Online sites",l={unversionedId:"sample-scripts/spo/change-owner-group-membership/index",id:"sample-scripts/spo/change-owner-group-membership/index",title:"Change group membership of all SharePoint Online sites",description:"Author: Arjun Menon, Inspired by Patrick Lamber",source:"@site/docs/sample-scripts/spo/change-owner-group-membership/index.mdx",sourceDirName:"sample-scripts/spo/change-owner-group-membership",slug:"/sample-scripts/spo/change-owner-group-membership/",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/change-owner-group-membership/",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/sample-scripts/spo/change-owner-group-membership/index.mdx",tags:[{label:"groups",permalink:"/cli-microsoft365-docusaurus/tags/groups"},{label:"users",permalink:"/cli-microsoft365-docusaurus/tags/users"},{label:"security",permalink:"/cli-microsoft365-docusaurus/tags/security"}],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{tags:["groups","users","security"]},sidebar:"sampleScripts",previous:{title:"Add users to the Associated SharePoint Groups of a site from a CSV File",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/add-users-associatedspgroup-site-csv-file/"},next:{title:"Copy files to another SharePoint Library in another site",permalink:"/cli-microsoft365-docusaurus/sample-scripts/spo/copy-files-to-another-library/"}},c={},p=[],m={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"change-group-membership-of-all-sharepoint-online-sites"},"Change group membership of all SharePoint Online sites"),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/arjunumenon"},"Arjun Menon"),", Inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://www.nubo.eu/Change-The-Group-Memberships-Of-All-SharePoint-Online-Sites/"},"Patrick Lamber")),(0,o.kt)("p",null,"This is a script which takes a subset or all members of the default owner group and downgrades the permission to the default member group."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The below script filters all the ",(0,o.kt)("inlineCode",{parentName:"em"},"Communication Sites")," from your tenant whose Title contains the keyword ",(0,o.kt)("inlineCode",{parentName:"em"},"Central"),". Based on your use case / requirement, you can modify the script")),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"PowerShell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'$siteFilterKeyword = "Central"\n\n#Getting the Communication Sites whose title contains the the given keyword\n$siteList = m365 spo site list --type CommunicationSite --output json --query "[? contains(Title,\'$siteFilterKeyword\')]" | ConvertFrom-Json\n$TotalSiteCount = $SiteList.Count\nWrite-Host "Total number sites which has the keyword \'$siteFilterKeyword\' in their title are : $TotalSiteCount"\n$SiteCounter = 1\n\nForeach ($site in $siteList){\n    Write-Host "Processing site No : $SiteCounter / $TotalSiteCount."\n    Write-Host "Site URL - $($site.Url)"\n    # Getting only Associated Owner and Member Groups using JMES Query\n    $AssociatedGroups = m365 spo web get --url $site.Url --withGroups --query "{MemberGroup: AssociatedMemberGroup, OwnerGroup: AssociatedOwnerGroup}" --output json | ConvertFrom-Json\n\n    # Getting list of members from the Owner Group\n    $UserList = m365 spo group member list --webUrl $site.Url --groupId $AssociatedGroups.OwnerGroup.Id --query "value" --output json | ConvertFrom-Json\n\n    Write-Host "Total Users available in the Group, $($AssociatedGroups.OwnerGroup.Title) : "$UserList.Count\n    Foreach ($User in $UserList){\n        # Adding the user to Member Group\n        m365 spo group member add --webUrl $site.Url --groupId $AssociatedGroups.MemberGroup.Id --userName "$($User.UserPrincipalName)"\n        \n        # Removing the user from Owner Group\n        m365 spo group member remove --webUrl $site.Url --groupId $AssociatedGroups.OwnerGroup.Id --userName "$($User.UserPrincipalName)" --confirm\n    }\n    $SiteCounter++\n}\n')))))}f.isMDXComponent=!0}}]);