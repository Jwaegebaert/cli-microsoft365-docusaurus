"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,b=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(b,l(l({ref:t},d),{},{components:n})):r.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},l="spo web add",o={unversionedId:"cmd/spo/web/web-add",id:"cmd/spo/web/web-add",title:"spo web add",description:"Create new subsite",source:"@site/docs/cmd/spo/web/web-add.md",sourceDirName:"cmd/spo/web",slug:"/cmd/spo/web/web-add",permalink:"/cmd/spo/web/web-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/web/web-add.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo userprofile set",permalink:"/cmd/spo/userprofile/userprofile-set"},next:{title:"spo web clientsidewebpart list",permalink:"/cmd/spo/web/web-clientsidewebpart-list"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-web-add"},"spo web add"),(0,a.kt)("p",null,"Create new subsite"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web add [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-t, --title <title>"),"\n: Subsite title"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-d, --description [description]"),"\n: Subsite description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --url <url>"),"\n: Subsite relative url"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-w, --webTemplate <webTemplate>"),"\n: Subsite template, eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"STS#0")," (Classic team site)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p, --parentWebUrl <parentWebUrl>"),"\n: URL of the parent site under which to create the subsite"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-l, --locale [locale]"),"\n: Subsite locale LCID, eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"1033")," for en-US. Default ",(0,a.kt)("inlineCode",{parentName:"p"},"1033")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--breakInheritance"),"\n: Set to not inherit permissions from the parent site"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--inheritNavigation"),"\n: Set to inherit the navigation from the parent site"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Create subsite using the ",(0,a.kt)("em",{parentName:"p"},"Team site")," template in the ",(0,a.kt)("em",{parentName:"p"},"en-US")," locale"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web add --title Subsite --description Subsite --url subsite --webTemplate STS#0 --parentWebUrl https://contoso.sharepoint.com --locale 1033\n")),(0,a.kt)("p",null,"Create subsite with unique permissions using the default ",(0,a.kt)("em",{parentName:"p"},"en-US")," locale"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web add --title Subsite --url subsite --webTemplate STS#0 --parentWebUrl https://contoso.sharepoint.com --breakInheritance\n")),(0,a.kt)("p",null,"Create subsite with the same navigation as the parent site"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web add --title Subsite --url subsite --webTemplate STS#0 --parentWebUrl https://contoso.sharepoint.com --inheritNavigation\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "Configuration": 0,\n  "Created": "2022-11-05T14:07:51",\n  "Description": "Subsite",\n  "Id": "b60137df-c3dc-4984-9def-8edcf7c98ab9",\n  "Language": 1033,\n  "LastItemModifiedDate": "2022-11-05T14:08:03Z",\n  "LastItemUserModifiedDate": "2022-11-05T14:08:03Z",\n  "ServerRelativeUrl": "/subsite",\n  "Title": "Subsite",\n  "WebTemplate": "STS",\n  "WebTemplateId": 0\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nConfiguration           : 0\nCreated                 : 2022-11-05T14:08:35\nDescription             : Subsite\nId                      : 1f2db405-394d-470e-b820-cd5182883b45\nLanguage                : 1033\nLastItemModifiedDate    : 2022-11-05T14:08:47Z\nLastItemUserModifiedDate: 2022-11-05T14:08:47Z\nServerRelativeUrl       : /subsite\nTitle                   : Subsite\nWebTemplate             : STS\nWebTemplateId           : 0\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nConfiguration,Created,Description,Id,Language,LastItemModifiedDate,LastItemUserModifiedDate,ServerRelativeUrl,Title,WebTemplate,WebTemplateId\n0,2022-11-05T14:09:11,Subsite,0cbf2896-bac2-4244-b871-68b413ee7b2f,1033,2022-11-05T14:09:22Z,2022-11-05T14:09:22Z,/subsite,Subsite,STS,0\n```\n")))}u.isMDXComponent=!0}}]);