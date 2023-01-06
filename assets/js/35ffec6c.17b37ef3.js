"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?o.createElement(f,s(s({ref:t},m),{},{components:n})):o.createElement(f,s({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={},s="spo mail send",i={unversionedId:"cmd/spo/mail/mail-send",id:"cmd/spo/mail/mail-send",title:"spo mail send",description:"Sends an e-mail from SharePoint",source:"@site/docs/cmd/spo/mail/mail-send.md",sourceDirName:"cmd/spo/mail",slug:"/cmd/spo/mail/mail-send",permalink:"/cli-microsoft365-docusaurus/cmd/spo/mail/mail-send",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/mail/mail-send.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo listitem set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-set"},next:{title:"spo navigation node add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/navigation/navigation-node-add"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-mail-send"},"spo mail send"),(0,a.kt)("p",null,"Sends an e-mail from SharePoint"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo mail send [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: Absolute URL of the site from which the email will be sent"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--to <to>"),"\n: Comma-separated list of recipients' e-mail addresses"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--subject <subject>"),"\n: Subject of the e-mail"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--body <body>"),"\n: Content of the e-mail"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--from [from]"),"\n: Sender's e-mail address"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--cc [cc]"),"\n: Comma-separated list of CC recipients"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--bcc [bcc]"),"\n: Comma-separated list of BCC recipients"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--additionalHeaders [additionalHeaders]"),"\n: JSON string with additional headers"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"All recipients (internal and external) have to have access to the target SharePoint site."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Send an e-mail to ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"mailto:user@contoso.com"},"user@contoso.com"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo mail send --webUrl https://contoso.sharepoint.com/sites/project-x --to "user@contoso.com" --subject "Email sent via CLI for Microsoft 365" --body "<h1>CLI for Microsoft 365</h1>Email sent via <b>command</b>."\n')),(0,a.kt)("p",null,"Send an e-mail to multiples addresses"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo mail send --webUrl https://contoso.sharepoint.com/sites/project-x --to "user1@contoso.com,user2@contoso.com" --subject "Email sent via CLI for Microsoft 365" --body "<h1>CLI for Microsoft 365</h1>Email sent via <b>command</b>." --cc "user3@contoso.com" --bcc "user4@contoso.com"\n')),(0,a.kt)("p",null,"Send an e-mail to ",(0,a.kt)("a",{parentName:"p",href:"mailto:_user@contoso.com_"},"_user@contoso.com_")," with additional headers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo mail send --webUrl https://contoso.sharepoint.com/sites/project-x --to "user@contoso.com" --subject "Email sent via CLI for Microsoft 365" --body "<h1>CLI for Microsoft 365</h1>Email sent via <b>command</b>." --additionalHeaders "\'{\\"X-MC-Tags\\":\\"CLI for Microsoft 365\\"}\'"\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."))}p.isMDXComponent=!0}}]);