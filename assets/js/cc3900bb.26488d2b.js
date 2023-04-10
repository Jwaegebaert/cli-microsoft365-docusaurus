"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[49706],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,k=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return t?r.createElement(k,l(l({ref:n},d),{},{components:t})):r.createElement(k,l({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={},l="planner bucket add",p={unversionedId:"cmd/planner/bucket/bucket-add",id:"cmd/planner/bucket/bucket-add",title:"planner bucket add",description:"Adds a new Microsoft Planner bucket",source:"@site/docs/cmd/planner/bucket/bucket-add.md",sourceDirName:"cmd/planner/bucket",slug:"/cmd/planner/bucket/bucket-add",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/bucket/bucket-add.md",tags:[],version:"current",lastUpdatedAt:1672585967,formattedLastUpdatedAt:"Jan 1, 2023",frontMatter:{},sidebar:"commands",previous:{title:"outlook roomlist list",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/roomlist/roomlist-list"},next:{title:"planner bucket get",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-get"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:c},u="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"planner-bucket-add"},"planner bucket add"),(0,a.kt)("p",null,"Adds a new Microsoft Planner bucket"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner bucket add [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: Name of the bucket to add."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--planId [planId]"),"\n: ID of the plan to which the bucket belongs. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"planId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"planTitle")," but not both."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--planTitle [planTitle]"),"\n: Title of the plan to which the bucket belongs. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"planId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"planTitle")," but not both."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ownerGroupId [ownerGroupId]"),"\n: ID of the group to which the plan belongs. Specify ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," when using ",(0,a.kt)("inlineCode",{parentName:"p"},"planTitle"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ownerGroupName [ownerGroupName]"),"\n: Name of the group to which the plan belongs. Specify ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," when using ",(0,a.kt)("inlineCode",{parentName:"p"},"planTitle"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--orderHint [orderHint]"),"\n: Hint used to order items of this type in a list view. The format is defined as outlined ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/api/resources/planner-order-hint-format?view=graph-rest-1.0"},"here"),"."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Adds a Microsoft Planner bucket with the name ",(0,a.kt)("em",{parentName:"p"},"My Planner Bucket")," for plan with the ID ",(0,a.kt)("em",{parentName:"p"},"xqQg5FS2LkCp935s-FIFm2QAFkHM")," with order hint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket add --name "My Planner Bucket" --planId "xqQg5FS2LkCp935s-FIFm2QAFkHM" --orderHint " !"\n')),(0,a.kt)("p",null,"Adds a Microsoft Planner bucket with the name ",(0,a.kt)("em",{parentName:"p"},"My Planner Bucket")," for plan with the title ",(0,a.kt)("em",{parentName:"p"},"My Planner Plan")," owned by group ",(0,a.kt)("em",{parentName:"p"},"My Planner Group")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket add --name "My Planner Bucket" --planTitle "My Planner Plan" --ownerGroupName "My Planner Group"\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "name": "My Planner Bucket",\n  "planId": "xqQg5FS2LkCp935s-FIFm2QAFkHM",\n  "orderHint": "8585363889524958496",\n  "id": "ttEB_Uj690STdR3GC1MIDZgANq1U"\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nid       : ttEB_Uj690STdR3GC1MIDZgANq1U\nname     : My Planner Bucket\norderHint: 8585363889524958496\nplanId   : xqQg5FS2LkCp935s-FIFm2QAFkHM\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nid,name,planId,orderHint\nttEB_Uj690STdR3GC1MIDZgANq1U,My Planner Bucket,xqQg5FS2LkCp935s-FIFm2QAFkHM,8585363889524958496\n```\n")),(0,a.kt)("p",null,'=== "Markdown"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```md\n# planner bucket add  --name "My Planner Bucket" --planId "xqQg5FS2LkCp935s-FIFm2QAFkHM"\n\nDate: 27/12/2022\n\n## My Planner Bucket (ttEB_Uj690STdR3GC1MIDZgANq1U)\n\nProperty | Value\n---------|-------\nname | My Planner Bucket\nplanId | xqQg5FS2LkCp935s-FIFm2QAFkHM\norderHint | 8585363889524958496\nid | ttEB_Uj690STdR3GC1MIDZgANq1U\n```\n')))}s.isMDXComponent=!0}}]);