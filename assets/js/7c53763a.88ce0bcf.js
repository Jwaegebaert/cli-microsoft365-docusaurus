"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[67031],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=s,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),s=(n(67294),n(3905));const r={},o="aad user guest add",i={unversionedId:"cmd/aad/user/user-guest-add",id:"cmd/aad/user/user-guest-add",title:"aad user guest add",description:"Invite an external user to the organization",source:"@site/docs/cmd/aad/user/user-guest-add.md",sourceDirName:"cmd/aad/user",slug:"/cmd/aad/user/user-guest-add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-guest-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/user/user-guest-add.md",tags:[],version:"current",lastUpdatedAt:1668819648,formattedLastUpdatedAt:"Nov 19, 2022",frontMatter:{},sidebar:"commands",previous:{title:"aad user get",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-get"},next:{title:"aad user hibp",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-hibp"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"aad-user-guest-add"},"aad user guest add"),(0,s.kt)("p",null,"Invite an external user to the organization"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user guest add [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--emailAddress <emailAddress>"),"\n: The email address of the user."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--displayName [displayName]"),"\n: The display name of the user."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--inviteRedirectUrl [inviteRedirectUrl]"),"\n: The URL the user should be redirected to once the invitation is redeemed. If not specified, default URL ",(0,s.kt)("a",{parentName:"p",href:"https://myapplications.microsoft.com"},"https://myapplications.microsoft.com")," will be set."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--welcomeMessage [welcomeMessage]"),"\n: Personal welcome message which will be added to the email along with the default email."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--ccRecipients [ccRecipients]"),"\n: Additional recipients the invitation message should be sent to. Currently only 1 additional recipient is supported."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--messageLanguage [messageLanguage]"),"\n: The language you want to send the default message in. The language format should be in ",(0,s.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/openspecs/office_standards/ms-oi29500/ed06cf15-306c-43be-9053-ca81ca51e656"},"ISO 639"),". The default is ",(0,s.kt)("inlineCode",{parentName:"p"},"en-US"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--sendInvitationMessage"),"\n: Indicates whether an email should be sent to the user."),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Invite a user via email and set the display name"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad user guest add --emailAddress john.doe@contoso.com --displayName "John Doe" --sendInvitationMessage\n')),(0,s.kt)("p",null,"Invite a user with a custom email and custom redirect url"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad user guest add --emailAddress john.doe@contoso.com --welcomeMessage "Hi John, welcome to the organization!" --inviteRedirectUrl https://contoso.sharepoint.com --sendInvitationMessage\n')),(0,s.kt)("p",null,"Invite a user and send an invitation mail in Dutch"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user guest add --emailAddress john.doe@contoso.com --messageLanguage nl-BE --sendInvitationMessage\n")),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("p",null,'=== "JSON"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```json\n{\n  "id": "35f7f726-c541-4aef-a64e-a7b6868fe47f",\n  "inviteRedeemUrl": "https://login.microsoftonline.com/redeem?rd=https%3a%2f%2finvitations.microsoft.com%2fredeem%2f%3ftenant%3db373bc30-03b3-49bc-be72-9dd3e9027da8%26user%3d35f7f726-c541-4aef-a64e-a7b6868fe47f%26ticket%3dCjO3u3ZpQF2uthfZETfZ8gURzod5egvYI0uhaSN1Loo%25253d%26ver%3d2.0",\n  "invitedUserDisplayName": "John Doe",\n  "invitedUserType": "Guest",\n  "invitedUserEmailAddress": "john.doe@contoso.com",\n  "sendInvitationMessage": true,\n  "resetRedemption": false,\n  "inviteRedirectUrl": "https://myapplications.microsoft.com/",\n  "status": "PendingAcceptance",\n  "invitedUserMessageInfo": {\n    "messageLanguage": "en-US",\n    "customizedMessageBody": "Hi John, welcome to the organization!",\n    "ccRecipients": [\n      {\n        "emailAddress": {\n          "name": null,\n          "address": "maria.jones@contoso.com"\n        }\n      }\n    ]\n  },\n  "invitedUser": {\n    "id": "5257b5b2-4056-4a45-a05e-df5c92d53e6e"\n  }\n}\n```\n')),(0,s.kt)("p",null,'=== "Text"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```text\nid                     : 35f7f726-c541-4aef-a64e-a7b6868fe47f\ninviteRedeemUrl        : https://login.microsoftonline.com/redeem?rd=https%3a%2f%2finvitations.microsoft.com%2fredeem%2f%3ftenant%3db373bc30-03b3-49bc-be72-9dd3e9027da8%26user%3d35f7f726-c541-4aef-a64e-a7b6868fe47f%26ticket%3dCjO3u3ZpQF2uthfZETfZ8gURzod5egvYI0uhaSN1Loo%25253d%26ver%3d2.0\ninvitedUserDisplayName : John Doe\ninvitedUserEmailAddress: liwidit556@adroh.com\ninvitedUserType        : Guest\nresetRedemption        : false\nsendInvitationMessage  : true\nstatus                 : PendingAcceptance\n```\n")),(0,s.kt)("p",null,'=== "CSV"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```csv\nid,inviteRedeemUrl,invitedUserDisplayName,invitedUserEmailAddress,invitedUserType,resetRedemption,sendInvitationMessage,status\n35f7f726-c541-4aef-a64e-a7b6868fe47f,https://login.microsoftonline.com/redeem?rd=https%3a%2f%2finvitations.microsoft.com%2fredeem%2f%3ftenant%3db373bc30-03b3-49bc-be72-9dd3e9027da8%26user%3d35f7f726-c541-4aef-a64e-a7b6868fe47f%26ticket%3dCjO3u3ZpQF2uthfZETfZ8gURzod5egvYI0uhaSN1Loo%25253d%26ver%3d2.0,John Doe,liwidit556@adroh.com,Guest,,1,PendingAcceptance\n```\n")))}p.isMDXComponent=!0}}]);