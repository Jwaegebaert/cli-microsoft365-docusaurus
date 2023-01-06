"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},o="graph subscription add",s={unversionedId:"cmd/graph/subscription/subscription-add",id:"cmd/graph/subscription/subscription-add",title:"graph subscription add",description:"Creates a Microsoft Graph subscription",source:"@site/docs/cmd/graph/subscription/subscription-add.md",sourceDirName:"cmd/graph/subscription",slug:"/cmd/graph/subscription/subscription-add",permalink:"/cli-microsoft365-docusaurus/cmd/graph/subscription/subscription-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/graph/subscription/subscription-add.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"graph schemaextension set",permalink:"/cli-microsoft365-docusaurus/cmd/graph/schemaextension/schemaextension-set"},next:{title:"OneDrive (onedrive)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/onedrive"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graph-subscription-add"},"graph subscription add"),(0,i.kt)("p",null,"Creates a Microsoft Graph subscription"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 graph subscription add [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-r, --resource <resource>"),"\n: The resource that will be monitored for changes"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-c, --changeType <changeType>"),"\n: The type of change in the subscribed resource that will raise a notification. The supported values are: ",(0,i.kt)("inlineCode",{parentName:"p"},"created"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"updated"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"deleted"),". Multiple values can be combined using a comma-separated list"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-u, --notificationUrl <notificationUrl>"),"\n: The URL of the endpoint that will receive the notifications. This URL must use the HTTPS protocol"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-e, --expirationDateTime [expirationDateTime]"),"\n: The date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to. If not specified, the maximum allowed expiration for the specified resource will be used"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-s, --clientState [clientState]"),"\n: The value of the clientState property sent by the service in each notification. The maximum length is 128 characters"),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"On personal OneDrive, you can subscribe to the root folder or any subfolder in that drive. On OneDrive for Business, you can subscribe to only the root folder."),(0,i.kt)("p",null,"Notifications are sent for the requested types of changes on the subscribed folder, or any file, folder, or other ",(0,i.kt)("inlineCode",{parentName:"p"},"driveItem")," instances in its hierarchy. You cannot subscribe to ",(0,i.kt)("inlineCode",{parentName:"p"},"drive")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"driveItem")," instances that are not folders, such as individual files."),(0,i.kt)("p",null,"In Outlook, delegated permission supports subscribing to items in folders in only the signed-in user's mailbox.\nThat means, for example, you cannot use the delegated permission Calendars.Read to subscribe to events in another user\u2019s mailbox."),(0,i.kt)("p",null,"To subscribe to change notifications of Outlook contacts, events, or messages in shared or delegated folders:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the corresponding application permission to subscribe to changes of items in a folder or mailbox of any user in the tenant."),(0,i.kt)("li",{parentName:"ul"},"Do not use the Outlook sharing permissions (Contacts.Read.Shared, Calendars.Read.Shared, Mail.Read.Shared, and their read/write counterparts), as they do not support subscribing to change notifications on items in shared or delegated folders.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Create a subscription"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 graph subscription add --resource "me/mailFolders(\'Inbox\')/messages" --changeType "updated" --notificationUrl "https://webhook.azurewebsites.net/api/send/myNotifyClient" --expirationDateTime "2016-11-20T18:23:45.935Z" --clientState "secretClientState"\n\n')),(0,i.kt)("p",null,"Create a subscription on multiple change types"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 graph subscription add --resource groups --changeType updated,deleted --notificationUrl "https://webhook.azurewebsites.net/api/send/myNotifyClient" --expirationDateTime "2016-11-20T18:23:45.935Z" --clientState "secretClientState"\n\n')),(0,i.kt)("p",null,"Create a subscription using the maximum allowed expiration for Group resources"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 graph subscription add --resource groups --changeType "updated" --notificationUrl "https://webhook.azurewebsites.net/api/send/myNotifyClient"\n')))}u.isMDXComponent=!0}}]);