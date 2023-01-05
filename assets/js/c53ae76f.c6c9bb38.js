"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=l.createContext({}),p=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return n?l.createElement(f,s(s({ref:t},c),{},{components:n})):l.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<a;p++)s[p]=n[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var l=n(87462),i=(n(67294),n(3905));const a={},s="spo list retentionlabel get",r={unversionedId:"cmd/spo/list/list-retentionlabel-get",id:"cmd/spo/list/list-retentionlabel-get",title:"spo list retentionlabel get",description:"Gets the default retention label set on the specified list or library.",source:"@site/docs/cmd/spo/list/list-retentionlabel-get.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-retentionlabel-get",permalink:"/cmd/spo/list/list-retentionlabel-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-retentionlabel-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list retentionlabel ensure",permalink:"/cmd/spo/list/list-retentionlabel-ensure"},next:{title:"spo list roleassignment add",permalink:"/cmd/spo/list/list-roleassignment-add"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Alias",id:"alias",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spo-list-retentionlabel-get"},"spo list retentionlabel get"),(0,i.kt)("p",null,"Gets the default retention label set on the specified list or library."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list retentionlabel get [options]\n")),(0,i.kt)("h2",{id:"alias"},"Alias"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list label get [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list to get the label from is located."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-l, --listId [listId]"),"\n: ID of the list to get the label from. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl")," but not multiple."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: Title of the list to get the label from. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl")," but not multiple."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listTitle")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl")," but not multiple."),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Gets retention label set on the list with specified title located in the specified site."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list retentionlabel get --listTitle ContosoList --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,i.kt)("p",null,"Gets retention label set on the list with specified id located in the specified site."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list retentionlabel get --listId cc27a922-8224-4296-90a5-ebbc54da2e85 --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,i.kt)("p",null,"Gets retention label set on the list with specified server relative url located in the specified site."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list retentionlabel get --listUrl 'sites/project-x/Documents' --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,i.kt)("p",null,"Gets retention label set on the list with specified site-relative URL located in the specified site."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list retentionlabel get --listUrl 'Shared Documents' --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,'=== "JSON"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```json\n{\n  "AcceptMessagesOnlyFromSendersOrMembers": false,\n  "AccessType": null,\n  "AllowAccessFromUnmanagedDevice": null,\n  "AutoDelete": false,\n  "BlockDelete": false,\n  "BlockEdit": false,\n  "ContainsSiteLabel": false,\n  "DisplayName": "Label A",\n  "EncryptionRMSTemplateId": null,\n  "HasRetentionAction": false,\n  "IsEventTag": false,\n  "Notes": null,\n  "RequireSenderAuthenticationEnabled": false,\n  "ReviewerEmail": null,\n  "SharingCapabilities": null,\n  "SuperLock": false,\n  "TagDuration": 0,\n  "TagId": "4d535433-2a7b-40b0-9dad-8f0f8f3b3841",\n  "TagName": "Sensitive",\n  "TagRetentionBasedOn": null\n}\n```\n')),(0,i.kt)("p",null,'=== "Text"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```text\nAcceptMessagesOnlyFromSendersOrMembers: false\nAccessType                            : null\nAllowAccessFromUnmanagedDevice        : null\nAutoDelete                            : false\nBlockDelete                           : false\nBlockEdit                             : false\nContainsSiteLabel                     : false\nDisplayName                           : Label A\nEncryptionRMSTemplateId               : null\nHasRetentionAction                    : false\nIsEventTag                            : false\nNotes                                 : null\nRequireSenderAuthenticationEnabled    : false\nReviewerEmail                         : null\nSharingCapabilities                   : null\nSuperLock                             : false\nTagDuration                           : 0\nTagId                                 : 4d535433-2a7b-40b0-9dad-8f0f8f3b3841\nTagName                               : Sensitive\nTagRetentionBasedOn                   : null\n```\n")),(0,i.kt)("p",null,'=== "CSV"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```csv\nAcceptMessagesOnlyFromSendersOrMembers,AccessType,AllowAccessFromUnmanagedDevice,AutoDelete,BlockDelete,BlockEdit,ContainsSiteLabel,DisplayName,EncryptionRMSTemplateId,HasRetentionAction,IsEventTag,Notes,RequireSenderAuthenticationEnabled,ReviewerEmail,SharingCapabilities,SuperLock,TagDuration,TagId,TagName,TagRetentionBasedOn\nfalse,,,false,false,false,false,Label A,,false,false,,false,,,false,0,4d535433-2a7b-40b0-9dad-8f0f8f3b3841,Sensitive,\n```\n")))}d.isMDXComponent=!0}}]);