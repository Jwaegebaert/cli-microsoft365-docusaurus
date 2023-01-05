"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39223],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>u});var o=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,o,n=function(e,t){if(null==e)return{};var s,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)s=l[o],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)s=l[o],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var a=o.createContext({}),p=function(e){var t=o.useContext(a),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},c=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var s=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(s),f=n,u=d["".concat(a,".").concat(f)]||d[f]||m[f]||l;return s?o.createElement(u,r(r({ref:t},c),{},{components:s})):o.createElement(u,r({ref:t},c))}));function u(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=s.length,r=new Array(l);r[0]=f;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[d]="string"==typeof e?e:n,r[1]=i;for(var p=2;p<l;p++)r[p]=s[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,s)}f.displayName="MDXCreateElement"},90614:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=s(87462),n=(s(67294),s(3905));const l={},r="spo field list",i={unversionedId:"cmd/spo/field/field-list",id:"cmd/spo/field/field-list",title:"spo field list",description:"Retrieves columns for the specified list or site",source:"@site/docs/cmd/spo/field/field-list.md",sourceDirName:"cmd/spo/field",slug:"/cmd/spo/field/field-list",permalink:"/cmd/spo/field/field-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/field/field-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo field get",permalink:"/cmd/spo/field/field-get"},next:{title:"spo field remove",permalink:"/cmd/spo/field/field-remove"}},a={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function d(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-field-list"},"spo field list"),(0,n.kt)("p",null,"Retrieves columns for the specified list or site"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo field list [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: Absolute URL of the site where fields are located"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: Title of the list where fields are located. Specify ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-i --listId [listId]"),"\n: ID of the list where fields are located. Specify ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or web-relative URL of the list where fields are located. Specify ",(0,n.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Retrieves site columns for site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/contoso-sales"},"https://contoso.sharepoint.com/sites/contoso-sales")),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo field list --webUrl https://contoso.sharepoint.com/sites/contoso-sales\n")),(0,n.kt)("p",null,"Retrieves list columns for list ",(0,n.kt)("em",{parentName:"p"},"Events")," in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/contoso-sales"},"https://contoso.sharepoint.com/sites/contoso-sales"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo field list --webUrl https://contoso.sharepoint.com/sites/contoso-sales --listTitle Events\n")),(0,n.kt)("p",null,"Retrieves list columns for list ",(0,n.kt)("em",{parentName:"p"},"202b8199-b9de-43fd-9737-7f213f51c991")," in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/contoso-sales"},"https://contoso.sharepoint.com/sites/contoso-sales"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo field list --webUrl https://contoso.sharepoint.com/sites/contoso-sales --listId '202b8199-b9de-43fd-9737-7f213f51c991'\n")),(0,n.kt)("p",null,"Retrieves list columns for list ",(0,n.kt)("em",{parentName:"p"},"/sites/contoso-sales/lists/Events")," in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/contoso-sales"},"https://contoso.sharepoint.com/sites/contoso-sales"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo field list --webUrl https://contoso.sharepoint.com/sites/contoso-sales --listUrl '/sites/contoso-sales/lists/Events'\n")))}d.isMDXComponent=!0}}]);