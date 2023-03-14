"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[31782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),i=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=i(r),s=n,k=u["".concat(c,".").concat(s)]||u[s]||d[s]||a;return r?o.createElement(k,l(l({ref:t},m),{},{components:r})):o.createElement(k,l({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<a;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},37884:(e,t,r)=>{r.d(t,{ZP:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={toc:[]},l="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,o.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-h, --help [help]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",null,"options"),", ",(0,n.kt)("code",null,"examples"),", ",(0,n.kt)("code",null,"remarks"),", ",(0,n.kt)("code",null,"response"),", ",(0,n.kt)("code",null,"full"),". Default is ",(0,n.kt)("code",null,"full"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--query [query]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"JMESPath query string. See ",(0,n.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-o, --output [output]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output type. ",(0,n.kt)("code",null,"json"),", ",(0,n.kt)("code",null,"text"),", ",(0,n.kt)("code",null,"csv"),", ",(0,n.kt)("code",null,"md"),". Default is ",(0,n.kt)("code",null,"json"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--verbose"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with verbose logging.")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--debug"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with debug logging."))))}p.isMDXComponent=!0},11383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var o=r(87462),n=(r(67294),r(3905)),a=r(37884);const l={},p="aad o365group recyclebinitem remove",c={unversionedId:"cmd/aad/o365group/o365group-recyclebinitem-remove",id:"cmd/aad/o365group/o365group-recyclebinitem-remove",title:"aad o365group recyclebinitem remove",description:"Permanently deletes a Microsoft 365 Group from the recycle bin in the current tenant",source:"@site/docs/cmd/aad/o365group/o365group-recyclebinitem-remove.mdx",sourceDirName:"cmd/aad/o365group",slug:"/cmd/aad/o365group/o365group-recyclebinitem-remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-recyclebinitem-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/o365group/o365group-recyclebinitem-remove.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"aad o365group recyclebinitem list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-recyclebinitem-list"},next:{title:"aad o365group recyclebinitem restore",permalink:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-recyclebinitem-restore"}},i={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],u={toc:m},d="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-o365group-recyclebinitem-remove"},"aad o365group recyclebinitem remove"),(0,n.kt)("p",null,"Permanently deletes a Microsoft 365 Group from the recycle bin in the current tenant"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad o365group recyclebinitem remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The ID of the Microsoft 365 Group to remove. Specify either ",(0,n.kt)("code",{parentName:"p"},"id"),", ",(0,n.kt)("code",{parentName:"p"},"displayName")," or ",(0,n.kt)("code",{parentName:"p"},"mailNickname")," but not multiple.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-d, --displayName [displayName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Display name for the Microsoft 365 Group to remove. Specify either ",(0,n.kt)("code",{parentName:"p"},"id"),", ",(0,n.kt)("code",{parentName:"p"},"displayName")," or ",(0,n.kt)("code",{parentName:"p"},"mailNickname")," but not multiple.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-m, --mailNickname [mailNickname]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Name of the group e-mail (part before the @). Specify either ",(0,n.kt)("code",{parentName:"p"},"id"),", ",(0,n.kt)("code",{parentName:"p"},"displayName")," or ",(0,n.kt)("code",{parentName:"p"},"mailNickname")," but not multiple.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--confirm"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Don't prompt for confirmation."))),(0,n.kt)(a.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Removes the Microsoft 365 Group with specific ID"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group recyclebinitem remove --id "00000000-0000-0000-0000-000000000000"\n')),(0,n.kt)("p",null,"Removes the Microsoft 365 Group with specific name"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group recyclebinitem remove --displayName "My Group"\n')),(0,n.kt)("p",null,"Remove the Microsoft 365 Group with specific mail nickname without confirmation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad o365group recyclebinitem remove --mailNickname "Mygroup" --confirm\n')))}s.isMDXComponent=!0}}]);