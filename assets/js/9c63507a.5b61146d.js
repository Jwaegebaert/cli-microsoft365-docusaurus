"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49232],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),m=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(t),k=a,d=u["".concat(i,".").concat(k)]||u[k]||s[k]||o;return t?r.createElement(d,p(p({ref:n},c),{},{components:t})):r.createElement(d,p({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=k;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:a,p[1]=l;for(var m=2;m<o;m++)p[m]=t[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},46040:(e,n,t)=>{t.d(n,{ZP:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={toc:[]};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-h, --help [help]"),"\n: Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"examples"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"remarks"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"response"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"full"),". Default is ",(0,a.kt)("inlineCode",{parentName:"p"},"full"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--query [query]"),"\n: JMESPath query string. See ",(0,a.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-o, --output [output]"),"\n: Output type. ",(0,a.kt)("inlineCode",{parentName:"p"},"json,text,csv,md"),". Default ",(0,a.kt)("inlineCode",{parentName:"p"},"json")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--verbose"),"\n: Runs command with verbose logging"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--debug"),"\n: Runs command with debug logging"))}p.isMDXComponent=!0},79034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905)),o=t(46040);const p={},l="planner bucket remove",i={unversionedId:"cmd/planner/bucket/bucket-remove",id:"cmd/planner/bucket/bucket-remove",title:"planner bucket remove",description:"",source:"@site/docs/cmd/planner/bucket/bucket-remove.md",sourceDirName:"cmd/planner/bucket",slug:"/cmd/planner/bucket/bucket-remove",permalink:"/cmd/planner/bucket/bucket-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/bucket/bucket-remove.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"planner bucket list",permalink:"/cmd/planner/bucket/bucket-list"},next:{title:"planner bucket set",permalink:"/cmd/planner/bucket/bucket-set"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:c};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"planner-bucket-remove"},"planner bucket remove"),(0,a.kt)("p",null,"Removes the Microsoft Planner bucket from a plan"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner bucket remove [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: ID of the bucket to remove. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: Name of the bucket to remove. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--planId [planId]"),"\n: ID of the plan to which the bucket to remove belongs. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"planId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"planTitle")," when using ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--planTitle [planTitle]"),"\n: Title of the plan to which the bucket to remove belongs. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"planId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"planTitle")," when using ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ownerGroupId [ownerGroupId]"),"\n: ID of the group to which the plan belongs. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," when using ",(0,a.kt)("inlineCode",{parentName:"p"},"planTitle"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ownerGroupName [ownerGroupName]"),"\n: Name of the group to which the plan belongs. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerGroupId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerGroupName")," when using ",(0,a.kt)("inlineCode",{parentName:"p"},"planTitle"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation"),(0,a.kt)(o.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Removes the Microsoft Planner bucket by ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket remove --id "vncYUXCRBke28qMLB-d4xJcACtNz"\n')),(0,a.kt)("p",null,"Removes the Microsoft Planner bucket by ID without confirmation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket remove --id "vncYUXCRBke28qMLB-d4xJcACtNz" --confirm\n')),(0,a.kt)("p",null,"Removes the Microsoft Planner bucket with name ",(0,a.kt)("em",{parentName:"p"},"My Bucket")," in the Plan with ID ",(0,a.kt)("em",{parentName:"p"},"oUHpnKBFekqfGE_PS6GGUZcAFY7b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket remove --name "My Bucket" --planId "oUHpnKBFekqfGE_PS6GGUZcAFY7b"\n')),(0,a.kt)("p",null,"Removes the Microsoft Planner bucket with name ",(0,a.kt)("em",{parentName:"p"},"My Bucket")," in the Plan ",(0,a.kt)("em",{parentName:"p"},"My Plan")," owned by group ",(0,a.kt)("em",{parentName:"p"},"My Group")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket remove --name "My Bucket" --planTitle "My Plan" --ownerGroupName "My Group"\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."))}s.isMDXComponent=!0}}]);