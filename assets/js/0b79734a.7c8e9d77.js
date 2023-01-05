"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[u]="string"==typeof e?e:o,s[1]=m;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},s="yammer user get",m={unversionedId:"cmd/yammer/user/user-get",id:"cmd/yammer/user/user-get",title:"yammer user get",description:"Retrieves the current user or searches for a user by ID or e-mail",source:"@site/docs/cmd/yammer/user/user-get.md",sourceDirName:"cmd/yammer/user",slug:"/cmd/yammer/user/user-get",permalink:"/cmd/yammer/user/user-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/user/user-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"yammer report groupsactivitygroupcounts",permalink:"/cmd/yammer/report/report-groupsactivitygroupcounts"},next:{title:"yammer user list",permalink:"/cmd/yammer/user/user-list"}},i={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"yammer-user-get"},"yammer user get"),(0,o.kt)("p",null,"Retrieves the current user or searches for a user by ID or e-mail"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer user get [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: Retrieve a user by ID"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--email [email]"),"\n: Retrieve a user by e-mail"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"!!! attention\nIn order to use this command, you need to grant the Azure AD application used by the CLI for Microsoft 365 the permission to the Yammer API. To do this, execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"cli consent --service yammer")," command."),(0,o.kt)("p",null,"All operations return a single user object. Operations executed with the ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," parameter return an array of user objects."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Returns the current user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer user get\n")),(0,o.kt)("p",null,"Returns the user with the ID 1496550697"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer user get --id 1496550697\n")),(0,o.kt)("p",null,"Returns an array of users matching the e-mail ",(0,o.kt)("a",{parentName:"p",href:"mailto:john.smith@contoso.com"},"john.smith@contoso.com")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer user get --email john.smith@contoso.com\n")),(0,o.kt)("p",null,"Returns an array of users matching the e-mail ",(0,o.kt)("a",{parentName:"p",href:"mailto:john.smith@contoso.com"},"john.smith@contoso.com")," in JSON. The JSON output returns a full user object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer user get --email john.smith@contoso.com --output json\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n{\n  "type": "user",\n  "id": 172006440961,\n  "network_id": 5897756673,\n  "state": "active",\n  "job_title": "",\n  "location": null,\n  "interests": null,\n  "summary": null,\n  "expertise": null,\n  "full_name": "johndoe",\n  "activated_at": "2021/10/08 11:45:32 +0000",\n  "auto_activated": false,\n  "show_ask_for_photo": true,\n  "first_name": "",\n  "last_name": "",\n  "network_name": "Contoso",\n  "network_domains": [\n    "contoso.onmicrosoft.com"\n  ],\n  "url": "https://www.yammer.com/api/v1/users/172006440961",\n  "web_url": "https://www.yammer.com/contoso.onmicrosoft.com/users/172006440961",\n  "name": "admvalo",\n  "mugshot_url": "https://mugshot0eu-1.assets-yammer.com/mugshot/images/no_photo.png?P1=1668205841&P2=104&P3=1&P4=rnM2FPGOQRZja018qxAFshyyDKKH5SoUXkdpCeizRsdD7Ggb9sLSsdEaq-icgk8g-QTHFd0Te4e1gWAZTGEQekSQop6G6zDcipIVbZMJStEzfKKUpSPckcXnRhfiI55yq5AOLhVcH2PP_ZBFF-0KXMaP8Hy4dGDIRzmnUGhFuik0yjNBoGaYL86ltEaDMQdpS6rS3lmIMzLPGEMfr30vethAxRT7SKBbNYxZ9iPxO6TY26cYCfv0VyyMQkGGviPU4__EVjOoklhD_AqFGFGHtRTcsafpKOxCE70Z-nUpIPbYCel3las7w105u4SvPPC00Q5LUMDynUvzPiR4-vbWPg&size=48x48",\n  "mugshot_redirect_url": "https://www.yammer.com/mugshot/images/redirect/48x48/no_photo.png",\n  "mugshot_url_template": "https://mugshot0eu-1.assets-yammer.com/mugshot/images/no_photo.png?P1=1668205841&P2=104&P3=1&P4=rnM2FPGOQRZja018qxAFshyyDKKH5SoUXkdpCeizRsdD7Ggb9sLSsdEaq-icgk8g-QTHFd0Te4e1gWAZTGEQekSQop6G6zDcipIVbZMJStEzfKKUpSPckcXnRhfiI55yq5AOLhVcH2PP_ZBFF-0KXMaP8Hy4dGDIRzmnUGhFuik0yjNBoGaYL86ltEaDMQdpS6rS3lmIMzLPGEMfr30vethAxRT7SKBbNYxZ9iPxO6TY26cYCfv0VyyMQkGGviPU4__EVjOoklhD_AqFGFGHtRTcsafpKOxCE70Z-nUpIPbYCel3las7w105u4SvPPC00Q5LUMDynUvzPiR4-vbWPg&size={width}x{height}",\n  "mugshot_redirect_url_template": "https://www.yammer.com/mugshot/images/redirect/{width}x{height}/no_photo.png",\n  "birth_date": "",\n  "birth_date_complete": "",\n  "timezone": "Pacific Time (US & Canada)",\n  "external_urls": [],\n  "admin": "true",\n  "verified_admin": "true",\n  "m365_yammer_admin": "false",\n  "supervisor_admin": "false",\n  "o365_tenant_admin": "true",\n  "can_broadcast": "true",\n  "department": null,\n  "email": "johndoe@contoso.onmicrosoft.com",\n  "guest": false,\n  "aad_guest": false,\n  "can_view_delegations": false,\n  "can_create_new_network": false,\n  "can_browse_external_networks": false,\n  "reaction_accent_color": "none",\n  "significant_other": "",\n  "kids_names": "",\n  "previous_companies": [],\n  "schools": [],\n  "contact": {\n    "im": {\n      "provider": "",\n      "username": ""\n    },\n    "phone_numbers": [],\n    "email_addresses": [\n      {\n        "type": "primary",\n        "address": "johndoe@contoso.onmicrosoft.com"\n      }\n    ],\n    "has_fake_email": false\n  },\n  "stats": {\n    "updates": 0,\n    "following": 0,\n    "followers": 0\n  },\n  "settings": {\n    "xdr_proxy": ""\n  },\n  "show_invite_lightbox": false,\n  "age_bucket": "notSet"\n}\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\nemail    : johndoe@contoso.onmicrosoft.com\nfull_name: johndoe\nid       : 172006440961\njob_title:\nstate    : active\nurl      : https://www.yammer.com/api/v1/users/172006440961\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nid,full_name,email,job_title,state,url\n172006440961,admvalo,johndoe@contoso.onmicrosoft.com,,active,https://www.yammer.com/api/v1/users/172006440961\n```\n")))}u.isMDXComponent=!0}}]);