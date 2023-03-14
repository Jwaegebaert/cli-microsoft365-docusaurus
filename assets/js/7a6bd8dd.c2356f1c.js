"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[31881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>i});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),s=r,i=m["".concat(d,".").concat(s)]||m[s]||k[s]||p;return n?a.createElement(i,o(o({ref:t},u),{},{components:n})):a.createElement(i,o({ref:t},u))}));function i(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<p;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const p={toc:[]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}l.isMDXComponent=!0},37577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),p=n(37884);const o={},l="planner bucket set",d={unversionedId:"cmd/planner/bucket/bucket-set",id:"cmd/planner/bucket/bucket-set",title:"planner bucket set",description:"Updates a Microsoft Planner bucket",source:"@site/docs/cmd/planner/bucket/bucket-set.mdx",sourceDirName:"cmd/planner/bucket",slug:"/cmd/planner/bucket/bucket-set",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/bucket/bucket-set.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"planner bucket remove",permalink:"/cli-microsoft365-docusaurus/cmd/planner/bucket/bucket-remove"},next:{title:"planner plan add",permalink:"/cli-microsoft365-docusaurus/cmd/planner/plan/plan-add"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:u},k="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planner-bucket-set"},"planner bucket set"),(0,r.kt)("p",null,"Updates a Microsoft Planner bucket"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner bucket set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the bucket. Specify either ",(0,r.kt)("code",{parentName:"p"},"id")," or ",(0,r.kt)("code",{parentName:"p"},"name")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Name of the bucket. Specify either ",(0,r.kt)("code",{parentName:"p"},"id")," or ",(0,r.kt)("code",{parentName:"p"},"name")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--planId [planId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the plan to update the bucket of. Specify either ",(0,r.kt)("code",{parentName:"p"},"planId")," or ",(0,r.kt)("code",{parentName:"p"},"planTitle")," when using ",(0,r.kt)("code",{parentName:"p"},"name"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--planTitle [planTitle]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Title of the plan to update the bucket of. Specify either ",(0,r.kt)("code",{parentName:"p"},"planId")," or ",(0,r.kt)("code",{parentName:"p"},"planTitle")," when using ",(0,r.kt)("code",{parentName:"p"},"name"),". Always use in combination with either ",(0,r.kt)("code",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("code",{parentName:"p"},"ownerGroupName"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--ownerGroupId [ownerGroupId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"ID of the group to which the plan belongs. Specify ",(0,r.kt)("code",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("code",{parentName:"p"},"ownerGroupName")," when using ",(0,r.kt)("code",{parentName:"p"},"planTitle"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--ownerGroupName [ownerGroupName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Name of the group to which the plan belongs. Specify ",(0,r.kt)("code",{parentName:"p"},"ownerGroupId")," or ",(0,r.kt)("code",{parentName:"p"},"ownerGroupName")," when using ",(0,r.kt)("code",{parentName:"p"},"planTitle"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--newName [newName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"New name of the bucket.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--orderHint [orderHint]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Hint used to order items of this type in a list view. The format is defined as outlined ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/api/resources/planner-order-hint-format?view=graph-rest-1.0"},"here"),"."))),(0,r.kt)(p.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Updates the Microsoft Planner bucket with ID ",(0,r.kt)("em",{parentName:"p"},"vncYUXCRBke28qMLB-d4xJcACtNz")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket set --id "vncYUXCRBke28qMLB-d4xJcACtNz" --newName "New bucket name"\n')),(0,r.kt)("p",null,"Updates the Microsoft Planner bucket named ",(0,r.kt)("em",{parentName:"p"},"My Bucket")," in the Plan ",(0,r.kt)("em",{parentName:"p"},"My Plan")," owned by group ",(0,r.kt)("em",{parentName:"p"},"My Group")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket set --name "My Bucket" --planTitle "My Plan" --ownerGroupName "My Group" --newName "New bucket name"\n')),(0,r.kt)("p",null,"Updates the Microsoft Planner bucket named ",(0,r.kt)("em",{parentName:"p"},"My Bucket")," in the Plan ",(0,r.kt)("em",{parentName:"p"},"My Plan")," owned by group with ID ",(0,r.kt)("em",{parentName:"p"},"00000000-0000-0000-0000-000000000000")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner bucket set --name "My Bucket" --planTitle "My Plan" --ownerGroupId 00000000-0000-0000-0000-000000000000 --newName "New bucket name"\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}s.isMDXComponent=!0}}]);