"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[52298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=l,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={},o="spo web retentionlabel list",s={unversionedId:"cmd/spo/web/web-retentionlabel-list",id:"cmd/spo/web/web-retentionlabel-list",title:"spo web retentionlabel list",description:"Get a list of retention labels that are available on a site.",source:"@site/docs/cmd/spo/web/web-retentionlabel-list.md",sourceDirName:"cmd/spo/web",slug:"/cmd/spo/web/web-retentionlabel-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-retentionlabel-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/web/web-retentionlabel-list.md",tags:[],version:"current",lastUpdatedAt:1671258381,formattedLastUpdatedAt:"Dec 17, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo web remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-remove"},next:{title:"spo web roleassignment add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-roleassignment-add"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spo-web-retentionlabel-list"},"spo web retentionlabel list"),(0,l.kt)("p",null,"Get a list of retention labels that are available on a site."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web retentionlabel list [options]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site."),(0,l.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Get a list of retention labels for the ",(0,l.kt)("em",{parentName:"p"},"Sales")," site"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web retentionlabel list --webUrl 'https://contoso.sharepoint.com/sites/sales'\n")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("p",null,'=== "JSON"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "AcceptMessagesOnlyFromSendersOrMembers": false,\n    "AccessType": null,\n    "AllowAccessFromUnmanagedDevice": null,\n    "AutoDelete": true,\n    "BlockDelete": true,\n    "BlockEdit": false,\n    "ComplianceFlags": 1,\n    "ContainsSiteLabel": false,\n    "DisplayName": "",\n    "EncryptionRMSTemplateId": null,\n    "HasRetentionAction": true,\n    "IsEventTag": false,\n    "MultiStageReviewerEmail": null,\n    "NextStageComplianceTag": null,\n    "Notes": null,\n    "RequireSenderAuthenticationEnabled": false,\n    "ReviewerEmail": null,\n    "SharingCapabilities": null,\n    "SuperLock": false,\n    "TagDuration": 2555,\n    "TagId": "def61080-111c-4aea-b72f-5b60e516e36c",\n    "TagName": "Some label",\n    "TagRetentionBasedOn": "CreationAgeInDays",\n    "UnlockedAsDefault": false\n  }\n]\n```\n')),(0,l.kt)("p",null,'=== "Text"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"```text\nTagId                                 TagName\n------------------------------------  --------------\ndef61080-111c-4aea-b72f-5b60e516e36c  Some label\n```\n")),(0,l.kt)("p",null,'=== "CSV"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"```csv\nTagId,TagName\ndef61080-111c-4aea-b72f-5b60e516e36c,Some label,true\n```\n")))}m.isMDXComponent=!0}}]);