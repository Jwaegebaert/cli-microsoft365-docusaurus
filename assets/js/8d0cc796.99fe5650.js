"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[22927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,p=function(e,t){if(null==e)return{};var r,o,p={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=o.createContext({}),i=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(r),u=p,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return r?o.createElement(g,n(n({ref:t},c),{},{components:r})):o.createElement(g,n({ref:t},c))}));function g(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,n=new Array(a);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:p,n[1]=s;for(var i=2;i<a;i++)n[i]=r[i];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26054:(e,t,r)=>{r.d(t,{ZP:()=>s});var o=r(87462),p=(r(67294),r(3905));const a={toc:[]},n="wrapper";function s(e){let{components:t,...r}=e;return(0,p.kt)(n,(0,o.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("dl",null,(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,p.kt)("code",{parentName:"p"},"options"),", ",(0,p.kt)("code",{parentName:"p"},"examples"),", ",(0,p.kt)("code",{parentName:"p"},"remarks"),", ",(0,p.kt)("code",{parentName:"p"},"response"),", ",(0,p.kt)("code",{parentName:"p"},"full"),". Default is ",(0,p.kt)("code",{parentName:"p"},"full"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--query [query]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,p.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Output type. ",(0,p.kt)("code",{parentName:"p"},"json"),", ",(0,p.kt)("code",{parentName:"p"},"text"),", ",(0,p.kt)("code",{parentName:"p"},"csv"),", ",(0,p.kt)("code",{parentName:"p"},"md"),". Default ",(0,p.kt)("code",{parentName:"p"},"json"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--verbose"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--debug"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}s.isMDXComponent=!0},56297:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(87462),p=(r(67294),r(3905)),a=r(26054);const n={},s="spo group list",l={unversionedId:"cmd/spo/group/group-list",id:"cmd/spo/group/group-list",title:"spo group list",description:"Lists all the groups within specific web",source:"@site/docs/cmd/spo/group/group-list.mdx",sourceDirName:"cmd/spo/group",slug:"/cmd/spo/group/group-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/group/group-list.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo group get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-get"},next:{title:"spo group remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-remove"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,p.kt)(m,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"spo-group-list"},"spo group list"),(0,p.kt)("p",null,"Lists all the groups within specific web"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group list [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("dl",null,(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Url of the web to list the group within")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--associatedGroupsOnly"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Get only the associated visitor, member and owner groups of the site."))),(0,p.kt)(a.ZP,{mdxType:"Global"}),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Lists all the groups within a specific web"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group list --webUrl "https://contoso.sharepoint.com/sites/contoso"\n')),(0,p.kt)("p",null,"Lists the associated groups within a specific web"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group list --webUrl "https://contoso.sharepoint.com/sites/contoso" --associatedGroupsOnly\n')))}u.isMDXComponent=!0}}]);