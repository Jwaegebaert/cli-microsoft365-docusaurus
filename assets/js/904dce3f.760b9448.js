"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67136],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=r.createContext({}),l=function(e){var t=r.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},i=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(o),c=n,h=u["".concat(m,".").concat(c)]||u[c]||d[c]||a;return o?r.createElement(h,p(p({ref:t},i),{},{components:o})):r.createElement(h,p({ref:t},i))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,p=new Array(a);p[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[u]="string"==typeof e?e:n,p[1]=s;for(var l=2;l<a;l++)p[l]=o[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},38310:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const a={},p="spo group member add",s={unversionedId:"cmd/spo/group/group-member-add",id:"cmd/spo/group/group-member-add",title:"spo group member add",description:"Add members to a SharePoint Group",source:"@site/docs/cmd/spo/group/group-member-add.md",sourceDirName:"cmd/spo/group",slug:"/cmd/spo/group/group-member-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-member-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/group/group-member-add.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo group list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-list"},next:{title:"spo group member list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-member-list"}},m={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],i={toc:l};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-group-member-add"},"spo group member add"),(0,n.kt)("p",null,"Add members to a SharePoint Group"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group member add [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the SharePoint group is available"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--groupId [groupId]"),"\n: Id of the SharePoint Group to which the user needs to be added, specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"groupName")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--groupName [groupName]"),"\n: Name of the SharePoint Group to which the user needs to be added, specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"groupName")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--userName [userName]"),"\n: User's UPN (user principal name, eg. ",(0,n.kt)("a",{parentName:"p",href:"mailto:megan.bowen@contoso.com"},"megan.bowen@contoso.com"),"). If multiple users need to be added, they have to be comma separated (ex. ",(0,n.kt)("a",{parentName:"p",href:"mailto:megan.bowen@contoso.com"},"megan.bowen@contoso.com"),",",(0,n.kt)("a",{parentName:"p",href:"mailto:alex.wilber@contoso.com"},"alex.wilber@contoso.com"),"), specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"email")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"userId")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--email [email]"),"\n: User's email (eg. ",(0,n.kt)("a",{parentName:"p",href:"mailto:megan.bowen@contoso.com"},"megan.bowen@contoso.com"),"). If multiple users need to be added, they have to be comma separated (ex. ",(0,n.kt)("a",{parentName:"p",href:"mailto:megan.bowen@contoso.com"},"megan.bowen@contoso.com"),",",(0,n.kt)("a",{parentName:"p",href:"mailto:alex.wilber@contoso.com"},"alex.wilber@contoso.com"),"), specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"email")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"userId")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--userId [userId]"),"\n: The user Id of the user to add as a member. (Id of the site user, for example: 14) If multiple users need to be added, the Id's have to be comma separated. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"email")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"userId")),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"For the ",(0,n.kt)("inlineCode",{parentName:"p"},"--userName")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"--email")," options you can specify multiple values by separating them with a comma. If one of the specified entries is not valid, the command will fail with an error message showing the list invalid values."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Add a user with the userName parameter to a SharePoint group with the groupId parameter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupId 5 --userName "Alex.Wilber@contoso.com"\n')),(0,n.kt)("p",null,"Add multiple users with the userName parameter to a SharePoint group with the groupId parameter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupId 5 --userName "Alex.Wilber@contoso.com, Adele.Vance@contoso.com"\n')),(0,n.kt)("p",null,"Add a user with the email parameter to a SharePoint group with the groupName parameter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupName "Contoso Site Owners" --email "Alex.Wilber@contoso.com"\n')),(0,n.kt)("p",null,"Add multiple users with the email parameter to a SharePoint group with the groupName parameter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupName "Contoso Site Owners" --email "Alex.Wilber@contoso.com, Adele.Vance@contoso.com"\n')),(0,n.kt)("p",null,"Add a user with the userId parameter to a SharePoint group with the groupId parameter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupId 5 --userId 5\n")),(0,n.kt)("p",null,"Add multiple users with the userId parameter to a SharePoint group with the groupId parameter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupId 5 --userId "5,12"\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,'=== "JSON"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "AllowedRoles": [\n      0\n    ],\n    "CurrentRole": 0,\n    "DisplayName": "John Doe",\n    "Email": "john.doe@contoso.onmicrosoft.com",\n    "InvitationLink": null,\n    "IsUserKnown": true,\n    "Message": null,\n    "Status": true,\n    "User": "i:0#.f|membership|john.doe@contoso.onmicrosoft.com"\n  }\n]\n```\n')),(0,n.kt)("p",null,'=== "Text"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```text\nDisplayName  Email\n-----------  ---------------------------------\nJohn Doe     john.doe@contoso.onmicrosoft.com\n```\n")),(0,n.kt)("p",null,'=== "CSV"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```csv\nDisplayName,Email\nJohn Doe,john.doe@contoso.onmicrosoft.com\n```\n")))}u.isMDXComponent=!0}}]);