"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29089],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(i),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return i?n.createElement(f,r(r({ref:t},c),{},{components:i})):n.createElement(f,r({ref:t},c))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},10779:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=i(87462),o=(i(67294),i(3905));const a={},r="spo list webhook set",s={unversionedId:"cmd/spo/list/list-webhook-set",id:"cmd/spo/list/list-webhook-set",title:"spo list webhook set",description:"Updates the specified webhook",source:"@site/docs/cmd/spo/list/list-webhook-set.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-webhook-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-webhook-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-webhook-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list webhook remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-webhook-remove"},next:{title:"spo listitem add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-add"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Respone",id:"respone",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-list-webhook-set"},"spo list webhook set"),(0,o.kt)("p",null,"Updates the specified webhook"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list webhook set [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list is located."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-l, --listId [listId]"),"\n: ID of the list. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"listTitle")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: Title of the list. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"listTitle")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"listTitle")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: ID of the webhook to update."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --notificationUrl [notificationUrl]"),"\n: The new notification url."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-e, --expirationDateTime [expirationDateTime]"),"\n: The new expiration date. ",(0,o.kt)("em",{parentName:"p"},"Note: Expiration Time cannot be more than 6 months in future")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-c, --clientState [clientState]"),"\n: A client state information that will be passed through notifications."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," doesn't refer to an existing webhook, you will get a ",(0,o.kt)("inlineCode",{parentName:"p"},'404 - "404 FILE NOT FOUND"')," error."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Update the notification url of a webhook with a specific ID attached to a list with a specific ID in a specific site to a specific URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list webhook set --webUrl https://contoso.sharepoint.com/sites/ninja --listId 0cd891ef-afce-4e55-b836-fce03286cccf --id cc27a922-8224-4296-90a5-ebbc54da2e81 --notificationUrl https://contoso-functions.azurewebsites.net/webhook\n")),(0,o.kt)("p",null,"Update the expiration date of a webhook with a specific ID attached to a list with a specific title in a specific site to a specfic date"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list webhook set --webUrl https://contoso.sharepoint.com/sites/ninja --listTitle Documents --id cc27a922-8224-4296-90a5-ebbc54da2e81 --expirationDateTime 2018-10-09T18:15\n")),(0,o.kt)("p",null,"Update the notification url and clientState of a webhook with a specific ID attached to a list with a specific URL in a specific site to a specific URL and the expiration date to a specific date"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list webhook set --webUrl https://contoso.sharepoint.com/sites/ninja --listUrl '/sites/ninja/Documents' --id cc27a922-8224-4296-90a5-ebbc54da2e81 --notificationUrl https://contoso-functions.azurewebsites.net/webhook --expirationDateTime 2019-03-02 --clientState 'My client state'\n")),(0,o.kt)("h2",{id:"respone"},"Respone"),(0,o.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);