"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[74234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var a=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var d=a.createContext({}),i=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=i(n),f=p,k=m["".concat(d,".").concat(f)]||m[f]||s[f]||o;return n?a.createElement(k,r(r({ref:t},l),{},{components:n})):a.createElement(k,r({ref:t},l))}));function k(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,r=new Array(o);r[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[m]="string"==typeof e?e:p,r[1]=c;for(var i=2;i<o;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26054:(e,t,n)=>{n.d(t,{ZP:()=>c});var a=n(87462),p=(n(67294),n(3905));const o={toc:[]},r="wrapper";function c(e){let{components:t,...n}=e;return(0,p.kt)(r,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("dl",null,(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,p.kt)("code",{parentName:"p"},"options"),", ",(0,p.kt)("code",{parentName:"p"},"examples"),", ",(0,p.kt)("code",{parentName:"p"},"remarks"),", ",(0,p.kt)("code",{parentName:"p"},"response"),", ",(0,p.kt)("code",{parentName:"p"},"full"),". Default is ",(0,p.kt)("code",{parentName:"p"},"full"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--query [query]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,p.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Output type. ",(0,p.kt)("code",{parentName:"p"},"json"),", ",(0,p.kt)("code",{parentName:"p"},"text"),", ",(0,p.kt)("code",{parentName:"p"},"csv"),", ",(0,p.kt)("code",{parentName:"p"},"md"),". Default ",(0,p.kt)("code",{parentName:"p"},"json"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--verbose"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--debug"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}c.isMDXComponent=!0},2962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=n(87462),p=(n(67294),n(3905)),o=n(26054);const r={},c="spo contenttype field remove",d={unversionedId:"cmd/spo/contenttype/contenttype-field-remove",id:"cmd/spo/contenttype/contenttype-field-remove",title:"spo contenttype field remove",description:"Removes a column from a site- or list content type",source:"@site/docs/cmd/spo/contenttype/contenttype-field-remove.mdx",sourceDirName:"cmd/spo/contenttype",slug:"/cmd/spo/contenttype/contenttype-field-remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/contenttype/contenttype-field-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/contenttype/contenttype-field-remove.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo contenttype set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/contenttype/contenttype-set"},next:{title:"spo contenttype field set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/contenttype/contenttype-field-set"}},i={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],m={toc:l},s="wrapper";function f(e){let{components:t,...n}=e;return(0,p.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"spo-contenttype-field-remove"},"spo contenttype field remove"),(0,p.kt)("p",null,"Removes a column from a site- or list content type"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo contenttype field remove [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("dl",null,(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Absolute URL of the site where the content type is located")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-l, --listTitle [listTitle]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Title of the list (if it is a list content type). Specify either ",(0,p.kt)("code",{parentName:"p"},"listTitle"),", ",(0,p.kt)("code",{parentName:"p"},"listId")," or ",(0,p.kt)("code",{parentName:"p"},"listUrl"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--listId [listId]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"ID of the list (if it is a list content type). Specify either ",(0,p.kt)("code",{parentName:"p"},"listTitle"),", ",(0,p.kt)("code",{parentName:"p"},"listId")," or ",(0,p.kt)("code",{parentName:"p"},"listUrl"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--listUrl [listUrl]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Server- or site-relative URL of the list (if it is a list content type). Specify either ",(0,p.kt)("code",{parentName:"p"},"listTitle"),", ",(0,p.kt)("code",{parentName:"p"},"listId")," or ",(0,p.kt)("code",{parentName:"p"},"listUrl"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-i, --contentTypeId <contentTypeId>"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"The ID of the content type to remove the column from")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-f, --fieldLinkId <fieldLinkId>"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"The ID of the column to remove")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-c, --updateChildContentTypes"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Update child content types")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--confirm"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Don't prompt for confirming removal of a column from content type"))),(0,p.kt)(o.ZP,{mdxType:"Global"}),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Remove column with a specific ID from a content type with a specific ID from a specific site."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo contenttype field remove  --contentTypeId "0x0100CA0FA0F5DAEF784494B9C6020C3020A6" --fieldLinkId "880d2f46-fccb-43ca-9def-f88e722cef80" --webUrl https://contoso.sharepoint.com --confirm\n')),(0,p.kt)("p",null,"Remove column with a specific ID from a content type with a specific ID from a specific site and updating the child content types"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo contenttype field remove  --contentTypeId "0x0100CA0FA0F5DAEF784494B9C6020C3020A6" --fieldLinkId "880d2f46-fccb-43ca-9def-f88e722cef80" --webUrl https://contoso.sharepoint.com --updateChildContentTypes\n')),(0,p.kt)("p",null,"Remove fieldLink with a specific ID from a list (obtained by Title) content type with a specific ID on a spefici site."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo contenttype field remove  --contentTypeId "0x0100CA0FA0F5DAEF784494B9C6020C3020A60062F089A38C867747942DB2C3FC50FF6A" --fieldLinkId "880d2f46-fccb-43ca-9def-f88e722cef80" --webUrl https://contoso.sharepoint.com --listTitle "Documents"\n')),(0,p.kt)("p",null,"Remove fieldLink with a specific ID from a list (obtained by ID) content type with a specific ID on a spefici site."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo contenttype field remove  --contentTypeId "0x0100CA0FA0F5DAEF784494B9C6020C3020A60062F089A38C867747942DB2C3FC50FF6A" --fieldLinkId "880d2f46-fccb-43ca-9def-f88e722cef80" --webUrl https://contoso.sharepoint.com --listId "8c7a0fcd-9d64-4634-85ea-ce2b37b2ec0c"\n')),(0,p.kt)("p",null,"Remove fieldLink with a specific ID from a list (obtained by URL) content type with a specific ID on a spefici site."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo contenttype field remove  --contentTypeId "0x0100CA0FA0F5DAEF784494B9C6020C3020A60062F089A38C867747942DB2C3FC50FF6A" --fieldLinkId "880d2f46-fccb-43ca-9def-f88e722cef80" --webUrl https://contoso.sharepoint.com --listUrl "/shared documents"\n')))}f.isMDXComponent=!0}}]);