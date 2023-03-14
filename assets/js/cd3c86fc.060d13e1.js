"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[57732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),g=o,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={toc:[]},l="wrapper";function i(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}i.isMDXComponent=!0},22438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(37884);const l={},i="aad groupsetting set",s={unversionedId:"cmd/aad/groupsetting/groupsetting-set",id:"cmd/aad/groupsetting/groupsetting-set",title:"aad groupsetting set",description:"Updates the particular group setting",source:"@site/docs/cmd/aad/groupsetting/groupsetting-set.mdx",sourceDirName:"cmd/aad/groupsetting",slug:"/cmd/aad/groupsetting/groupsetting-set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/groupsetting/groupsetting-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/groupsetting/groupsetting-set.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"aad groupsetting remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/groupsetting/groupsetting-remove"},next:{title:"aad groupsettingtemplate get",permalink:"/cli-microsoft365-docusaurus/cmd/aad/groupsettingtemplate/groupsettingtemplate-get"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aad-groupsetting-set"},"aad groupsetting set"),(0,o.kt)("p",null,"Updates the particular group setting"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad groupsetting set [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The ID of the group setting to update"))),(0,o.kt)(a.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"To update a group setting, you have to specify the ID of the group setting. You can retrieve the ID of the group setting using the ",(0,o.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/aad/groupsetting/groupsetting-list"},"aad groupsetting list")," command."),(0,o.kt)("p",null,"To update values for the different properties specified in the group setting, include additional options that match the property in the group setting. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"--ClassificationList 'HBI, MBI, LBI, GDPR'")," will set the list of classifications to use on modern SharePoint sites."),(0,o.kt)("p",null,"If you don't specify a value for the particular property, it will remain unchanged. To find out which properties are available for the particular group setting, use the ",(0,o.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/aad/groupsetting/groupsetting-get"},"aad groupsetting get")," command."),(0,o.kt)("p",null,"If the specified id doesn't reference a valid group setting, you will get a ",(0,o.kt)("em",{parentName:"p"},"Resource 'xyz' does not exist or one of its queried reference-property objects are not present.")," error."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Configure classification for modern SharePoint sites"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad groupsetting set --id c391b57d-5783-4c53-9236-cefb5c6ef323 --UsageGuidelinesUrl https://contoso.sharepoint.com/sites/compliance --ClassificationList 'HBI, MBI, LBI, GDPR' --DefaultClassification MBI\n")))}g.isMDXComponent=!0}}]);