"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77074],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(r),g=o,m=l["".concat(p,".").concat(g)]||l[g]||d[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},93668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},i="aad groupsetting set",s={unversionedId:"cmd/aad/groupsetting/groupsetting-set",id:"cmd/aad/groupsetting/groupsetting-set",title:"aad groupsetting set",description:"Updates the particular group setting",source:"@site/docs/cmd/aad/groupsetting/groupsetting-set.md",sourceDirName:"cmd/aad/groupsetting",slug:"/cmd/aad/groupsetting/groupsetting-set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/groupsetting/groupsetting-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/groupsetting/groupsetting-set.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad groupsetting remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/groupsetting/groupsetting-remove"},next:{title:"aad groupsettingtemplate get",permalink:"/cli-microsoft365-docusaurus/cmd/aad/groupsettingtemplate/groupsettingtemplate-get"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aad-groupsetting-set"},"aad groupsetting set"),(0,o.kt)("p",null,"Updates the particular group setting"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad groupsetting set [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: The ID of the group setting to update"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"To update a group setting, you have to specify the ID of the group setting. You can retrieve the ID of the group setting using the ",(0,o.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/aad/groupsetting/groupsetting-list"},"aad groupsetting list")," command."),(0,o.kt)("p",null,"To update values for the different properties specified in the group setting, include additional options that match the property in the group setting. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"--ClassificationList 'HBI, MBI, LBI, GDPR'")," will set the list of classifications to use on modern SharePoint sites."),(0,o.kt)("p",null,"If you don't specify a value for the particular property, it will remain unchanged. To find out which properties are available for the particular group setting, use the ",(0,o.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/aad/groupsetting/groupsetting-get"},"aad groupsetting get")," command."),(0,o.kt)("p",null,"If the specified id doesn't reference a valid group setting, you will get a ",(0,o.kt)("em",{parentName:"p"},"Resource 'xyz' does not exist or one of its queried reference-property objects are not present.")," error."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Configure classification for modern SharePoint sites"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad groupsetting set --id c391b57d-5783-4c53-9236-cefb5c6ef323 --UsageGuidelinesUrl https://contoso.sharepoint.com/sites/compliance --ClassificationList 'HBI, MBI, LBI, GDPR' --DefaultClassification MBI\n")))}l.isMDXComponent=!0}}]);