"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=s,h=p["".concat(i,".").concat(d)]||p[d]||c[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:s,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(87462),s=(n(67294),n(3905));const a={},o="yammer user list",l={unversionedId:"cmd/yammer/user/user-list",id:"cmd/yammer/user/user-list",title:"yammer user list",description:"Returns users from the current network",source:"@site/docs/cmd/yammer/user/user-list.md",sourceDirName:"cmd/yammer/user",slug:"/cmd/yammer/user/user-list",permalink:"/cmd/yammer/user/user-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/user/user-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"yammer user get",permalink:"/cmd/yammer/user/user-get"},next:{title:"yammer search",permalink:"/cmd/yammer/yammer-search"}},i={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:m};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"yammer-user-list"},"yammer user list"),(0,s.kt)("p",null,"Returns users from the current network"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer user list [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-g, --groupId [groupId]"),"\n: Returns users within a given group"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-l, --letter [letter]"),"\n: Returns users with usernames beginning with the given character"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--reverse"),"\n: Returns users in reverse sorting order"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--limit [limit]"),"\n: Limits the users returned"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--sortBy [sortBy]"),"\n: Returns users sorted by a number of messages or followers, instead of the default behavior of sorting alphabetically. Allowed values are ",(0,s.kt)("inlineCode",{parentName:"p"},"messages,followers")),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"!!! attention\nIn order to use this command, you need to grant the Azure AD application used by the CLI for Microsoft 365 the permission to the Yammer API. To do this, execute the ",(0,s.kt)("inlineCode",{parentName:"p"},"cli consent --service yammer")," command."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Returns all Yammer network users"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer user list\n")),(0,s.kt)("p",null,'Returns all Yammer network users with usernames beginning with "a"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer user list --letter a\n")),(0,s.kt)("p",null,"Returns all Yammer network users sorted alphabetically in descending order"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer user list --reverse\n")),(0,s.kt)("p",null,"Returns the first 10 Yammer network users within the group 5785177"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 user list --groupId 5785177 --limit 10\n")),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("p",null,'=== "JSON"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "type": "user",\n    "id": 172006440961,\n    "network_id": 5897756673,\n    "state": "active",\n    "job_title": "",\n    "location": null,\n    "interests": null,\n    "summary": null,\n    "expertise": null,\n    "full_name": "John Doe",\n    "activated_at": "2021/10/08 11:45:32 +0000",\n    "auto_activated": false,\n    "show_ask_for_photo": true,\n    "first_name": "",\n    "last_name": "",\n    "network_name": "Contoso",\n    "network_domains": [\n      "contoso.onmicrosoft.com"\n    ],\n    "url": "https://www.yammer.com/api/v1/users/172006440961",\n    "web_url": "https://www.yammer.com/contoso.onmicrosoft.com/users/172006440961",\n    "name": "johndoe",\n    "mugshot_url": "https://mugshot0eu-1.assets-yammer.com/mugshot/images/no_photo.png?P1=1668205841&P2=104&P3=1&P4=rnM2FPGOQRZja018qxAFshyyDKKH5SoUXkdpCeizRsdD7Ggb9sLSsdEaq-icgk8g-QTHFd0Te4e1gWAZTGEQekSQop6G6zDcipIVbZMJStEzfKKUpSPckcXnRhfiI55yq5AOLhVcH2PP_ZBFF-0KXMaP8Hy4dGDIRzmnUGhFuik0yjNBoGaYL86ltEaDMQdpS6rS3lmIMzLPGEMfr30vethAxRT7SKBbNYxZ9iPxO6TY26cYCfv0VyyMQkGGviPU4__EVjOoklhD_AqFGFGHtRTcsafpKOxCE70Z-nUpIPbYCel3las7w105u4SvPPC00Q5LUMDynUvzPiR4-vbWPg&size=48x48",\n    "mugshot_redirect_url": "https://www.yammer.com/mugshot/images/redirect/48x48/no_photo.png",\n    "mugshot_url_template": "https://mugshot0eu-1.assets-yammer.com/mugshot/images/no_photo.png?P1=1668205841&P2=104&P3=1&P4=rnM2FPGOQRZja018qxAFshyyDKKH5SoUXkdpCeizRsdD7Ggb9sLSsdEaq-icgk8g-QTHFd0Te4e1gWAZTGEQekSQop6G6zDcipIVbZMJStEzfKKUpSPckcXnRhfiI55yq5AOLhVcH2PP_ZBFF-0KXMaP8Hy4dGDIRzmnUGhFuik0yjNBoGaYL86ltEaDMQdpS6rS3lmIMzLPGEMfr30vethAxRT7SKBbNYxZ9iPxO6TY26cYCfv0VyyMQkGGviPU4__EVjOoklhD_AqFGFGHtRTcsafpKOxCE70Z-nUpIPbYCel3las7w105u4SvPPC00Q5LUMDynUvzPiR4-vbWPg&size={width}x{height}",\n    "mugshot_redirect_url_template": "https://www.yammer.com/mugshot/images/redirect/{width}x{height}/no_photo.png",\n    "birth_date": "",\n    "birth_date_complete": "",\n    "timezone": "Pacific Time (US & Canada)",\n    "external_urls": [],\n    "admin": "true",\n    "verified_admin": "true",\n    "m365_yammer_admin": "false",\n    "supervisor_admin": "false",\n    "o365_tenant_admin": "true",\n    "can_broadcast": "true",\n    "department": null,\n    "email": "johndoe@contoso.onmicrosoft.com",\n    "guest": false,\n    "aad_guest": false,\n    "can_view_delegations": false,\n    "can_create_new_network": false,\n    "can_browse_external_networks": false,\n    "reaction_accent_color": "none",\n    "significant_other": "",\n    "kids_names": "",\n    "previous_companies": [],\n    "schools": [],\n    "contact": {\n      "im": {\n        "provider": "",\n        "username": ""\n      },\n      "phone_numbers": [],\n      "email_addresses": [\n        {\n          "type": "primary",\n          "address": "johndoe@contoso.onmicrosoft.com"\n        }\n      ],\n      "has_fake_email": false\n    },\n    "stats": {\n      "updates": 0,\n      "following": 0,\n      "followers": 0\n    },\n    "settings": {\n      "xdr_proxy": ""\n    },\n    "show_invite_lightbox": false\n  }\n]\n```\n')),(0,s.kt)("p",null,'=== "Text"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```text\nid            full_name         email\n------------  ----------------  -------------------------------\n36425097217   John Doe          johndoe@contoso.onmicrosoft.com\n```\n")),(0,s.kt)("p",null,'=== "CSV"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```csv\nid,full_name,email\n36425097217,John Doe,johndoe@contoso.onmicrosoft.com\n```\n")))}p.isMDXComponent=!0}}]);