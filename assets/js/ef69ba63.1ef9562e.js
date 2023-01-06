"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,b=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={},o="purview retentionlabel set",l={unversionedId:"cmd/purview/retentionlabel/retentionlabel-set",id:"cmd/purview/retentionlabel/retentionlabel-set",title:"purview retentionlabel set",description:"Update a retention label",source:"@site/docs/cmd/purview/retentionlabel/retentionlabel-set.md",sourceDirName:"cmd/purview/retentionlabel",slug:"/cmd/purview/retentionlabel/retentionlabel-set",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentionlabel/retentionlabel-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/purview/retentionlabel/retentionlabel-set.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"purview retentionlabel remove",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentionlabel/retentionlabel-remove"},next:{title:"Search (search)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/search"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Response",id:"response",level:2}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"purview-retentionlabel-set"},"purview retentionlabel set"),(0,i.kt)("p",null,"Update a retention label"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentionlabel set [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: The Id of the retention label."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--behaviorDuringRetentionPeriod [behaviorDuringRetentionPeriod]"),"\n: Specifies how the behavior of a document with this label should be during the retention period. Allowed values: ",(0,i.kt)("inlineCode",{parentName:"p"},"doNotRetain"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"retain"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"retainAsRecord"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"retainAsRegulatoryRecord"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--actionAfterRetentionPeriod [actionAfterRetentionPeriod]"),"\n: Specifies the action to take on a document with this label applied after the retention period. Allowed values: ",(0,i.kt)("inlineCode",{parentName:"p"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"startDispositionReview"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--retentionDuration [retentionDuration]"),"\n: The number of days to retain the content."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-t, --retentionTrigger [retentionTrigger]"),"\n: Specifies whether the retention duration is calculated from the content creation date, labeled date, or last modification date. Allowed values: ",(0,i.kt)("inlineCode",{parentName:"p"},"dateLabeled"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dateModified"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dateOfEvent"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--defaultRecordBehavior [defaultRecordBehavior]"),"\n: Specifies the locked or unlocked state of a record label when it is created. Allowed values: ",(0,i.kt)("inlineCode",{parentName:"p"},"startLocked"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"startUnlocked"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--descriptionForUsers [descriptionForUsers]"),"\n: The label information for the user."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--descriptionForAdmins [descriptionForAdmins]"),"\n: The label information for the admin."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--labelToBeApplied [labelToBeApplied]"),"\n: Specifies the replacement label to be applied automatically after the retention period of the current label ends."),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Update a retention label so that it retains documents as records and deletes them after one year."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentionlabel set --id c37d695e-d581-4ae9-82a0-9364eba4291e --behaviorDuringRetentionPeriod retainAsRecord --actionAfterRetentionPeriod delete --retentionDuration 365\n")),(0,i.kt)("p",null,"Update a retention label so that it retains documents as regulatory records and starts a disposition review one year after the last modification date."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentionlabel set --id c37d695e-d581-4ae9-82a0-9364eba4291e --behaviorDuringRetentionPeriod retainAsRegulatoryRecord --actionAfterRetentionPeriod startDispositionReview --retentionDuration 365 --retentionTrigger dateModified\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"!!! attention\nThis command is based on a Microsoft Graph API that is currently in preview and is subject to change once the API reached general availability."),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,"The command won't return a response on success."))}c.isMDXComponent=!0}}]);