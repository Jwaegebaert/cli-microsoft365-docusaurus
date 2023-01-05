"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99664],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>_});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,_=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return t?r.createElement(_,s(s({ref:n},m),{},{components:t})):r.createElement(_,s({ref:n},m))}));function _(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11949:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={},s="Yammer network list",i={unversionedId:"cmd/yammer/network/network-list",id:"cmd/yammer/network/network-list",title:"Yammer network list",description:"Returns a list of networks to which the current user has access",source:"@site/docs/cmd/yammer/network/network-list.md",sourceDirName:"cmd/yammer/network",slug:"/cmd/yammer/network/network-list",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/network/network-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/network/network-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"yammer message remove",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/message/message-remove"},next:{title:"yammer report activitycounts",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/report/report-activitycounts"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"yammer-network-list"},"Yammer network list"),(0,o.kt)("p",null,"Returns a list of networks to which the current user has access"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer network list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--includeSuspended"),"\n: Include the networks in which the user is suspended"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"!!! attention\nIn order to use this command, you need to grant the Azure AD application used by the CLI for Microsoft 365 the permission to the Yammer API. To do this, execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"cli consent --service yammer")," command."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Returns the current user's networks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer network list\n")),(0,o.kt)("p",null,"Returns the current user's networks including the networks in which the user is suspended"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer network list --includeSuspended\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "type": "network",\n    "id": 5897756673,\n    "email": "",\n    "name": "Contoso",\n    "community": false,\n    "permalink": "contoso.onmicrosoft.com",\n    "web_url": "https://www.yammer.com/contoso.onmicrosoft.com",\n    "show_upgrade_banner": false,\n    "header_background_color": "#396B9A",\n    "header_text_color": "#FFFFFF",\n    "navigation_background_color": "#38699F",\n    "navigation_text_color": "#FFFFFF",\n    "paid": true,\n    "moderated": false,\n    "is_freemium": false,\n    "is_org_chart_enabled": false,\n    "is_group_enabled": true,\n    "is_chat_enabled": true,\n    "is_translation_enabled": false,\n    "created_at": "2020/02/26 10:33:56 +0000",\n    "is_storyline_enabled": true,\n    "is_storyline_preview_enabled": false,\n    "is_stories_enabled": true,\n    "is_stories_preview_enabled": false,\n    "is_premium_preview_enabled": false,\n    "profile_fields_config": {\n      "enable_work_history": true,\n      "enable_education": true,\n      "enable_job_title": true,\n      "enable_work_phone": true,\n      "enable_mobile_phone": true,\n      "enable_summary": true,\n      "enable_interests": true,\n      "enable_expertise": true,\n      "enable_location": true,\n      "enable_im": true,\n      "enable_skype": true,\n      "enable_websites": true\n    },\n    "browser_deprecation_url": null,\n    "external_messaging_state": "disabled",\n    "state": "enabled",\n    "enforce_office_authentication": true,\n    "office_authentication_committed": true,\n    "is_gif_shortcut_enabled": true,\n    "is_link_preview_enabled": true,\n    "attachments_in_private_messages": false,\n    "secret_groups": false,\n    "force_connected_groups": true,\n    "force_spo_files": false,\n    "connected_all_company": true,\n    "m365_native_mode": true,\n    "force_optin_modern_client": false,\n    "admin_modern_client_flexible_optin": false,\n    "aad_guests_enabled": false,\n    "all_company_group_creation_state": null,\n    "unseen_message_count": -1,\n    "preferred_unseen_message_count": -1,\n    "private_unseen_thread_count": 0,\n    "inbox_unseen_thread_count": 0,\n    "private_unread_thread_count": 0,\n    "unseen_notification_count": 0,\n    "has_fake_email": false,\n    "is_primary": true,\n    "allow_attachments": true,\n    "attachment_types_allowed": "ALL",\n    "privacy_link": "https://go.microsoft.com/fwlink/p/?linkid=857875"\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\ncommunity: false\nemail    :\nid       : 5897756673\nname     : Contoso\npermalink: contoso.onmicrosoft.com\nweb_url  : https://www.yammer.com/contoso.onmicrosoft.com\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nid,name,email,community,permalink,web_url\n5897756673,Contoso,,,contoso.onmicrosoft.com,https://www.yammer.com/contoso.onmicrosoft.com\n```\n")))}u.isMDXComponent=!0}}]);