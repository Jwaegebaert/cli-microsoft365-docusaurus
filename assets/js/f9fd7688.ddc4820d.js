"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=p(r),d=o,g=i["".concat(m,".").concat(d)]||i[d]||c[d]||a;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[i]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>i,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},s="yammer group list",l={unversionedId:"cmd/yammer/group/group-list",id:"cmd/yammer/group/group-list",title:"yammer group list",description:"Returns the list of groups in a Yammer network or the groups for a specific user",source:"@site/docs/cmd/yammer/group/group-list.md",sourceDirName:"cmd/yammer/group",slug:"/cmd/yammer/group/group-list",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/group/group-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/group/group-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"Yammer (yammer)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/yammer"},next:{title:"yammer group user add",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/group/group-user-add"}},m={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:p};function i(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"yammer-group-list"},"yammer group list"),(0,o.kt)("p",null,"Returns the list of groups in a Yammer network or the groups for a specific user"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer group list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--userId [userId]"),"\n: Returns the groups for a specific user"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--limit [limit]"),"\n: Limits the groups returned"),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"!!! attention\nIn order to use this command, you need to grant the Azure AD application used by the CLI for Microsoft 365 the permission to the Yammer API. To do this, execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"cli consent --service yammer")," command."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Returns all Yammer network groups"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer group list\n")),(0,o.kt)("p",null,"Returns all Yammer network groups for the user with the ID ",(0,o.kt)("inlineCode",{parentName:"p"},"5611239081")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer group list --userId 5611239081\n")),(0,o.kt)("p",null,"Returns the first 10 Yammer network groups"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer group list --limit 10\n")),(0,o.kt)("p",null,"Returns the first 10 Yammer network groups for the user with the ID ",(0,o.kt)("inlineCode",{parentName:"p"},"5611239081")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer group list --userId 5611239081 --limit 10\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "type": "group",\n    "id": 31158067201,\n    "email": "",\n    "full_name": "Contoso Hub",\n    "network_id": 5897756673,\n    "name": "contosohub",\n    "description": "",\n    "privacy": "public",\n    "url": "https://www.yammer.com/api/v1/groups/31158067201",\n    "web_url": "https://www.yammer.com/contoso.onmicrosoft.com/#/threads/inGroup?type=in_group&feedId=31158067201",\n    "mugshot_url": "https://mugshot0eu-1.assets-yammer.com/mugshot/images/group_profile.png?P1=1668205176&P2=104&P3=1&P4=l98Wk4FkhCqVX1J8bQ_8yZDbK4cfU1lQGgkK0Ak1k2g-tfLV9_ecm6k7FyFApCq3Xnzl7NPKpGLWT2IVD-Ft5q3VSCwzv5c0A1l-SFC5MrfN25BIsR9ux8K-LlYbFUF3yeh-vFk_IxwE-AI2xEVCuq0aoINzHiIW4Gi5IxC6mDDni72sE2LuM3X4LooEowEYrzfz5d-m9hMveU1E8KPPEmq3WTejhJ_Bc3zY3XA3n4jEPDnZ09uPUyVCBpa84Ysh-GGSkFWsPBAldAQAbbzcjip_SzrfKz868BolCLlbM3DwRQfyDH9Of9IYEZpu1U85hBuNoolF68rKPVL6-bxl2w&size=48x48",\n    "mugshot_redirect_url": "https://www.yammer.com/mugshot/images/redirect/48x48/group_profile.png",\n    "mugshot_url_template": "https://mugshot0eu-1.assets-yammer.com/mugshot/images/group_profile.png?P1=1668205176&P2=104&P3=1&P4=l98Wk4FkhCqVX1J8bQ_8yZDbK4cfU1lQGgkK0Ak1k2g-tfLV9_ecm6k7FyFApCq3Xnzl7NPKpGLWT2IVD-Ft5q3VSCwzv5c0A1l-SFC5MrfN25BIsR9ux8K-LlYbFUF3yeh-vFk_IxwE-AI2xEVCuq0aoINzHiIW4Gi5IxC6mDDni72sE2LuM3X4LooEowEYrzfz5d-m9hMveU1E8KPPEmq3WTejhJ_Bc3zY3XA3n4jEPDnZ09uPUyVCBpa84Ysh-GGSkFWsPBAldAQAbbzcjip_SzrfKz868BolCLlbM3DwRQfyDH9Of9IYEZpu1U85hBuNoolF68rKPVL6-bxl2w&size={width}x{height}",\n    "mugshot_redirect_url_template": "https://www.yammer.com/mugshot/images/redirect/{width}x{height}/group_profile.png",\n    "mugshot_id": null,\n    "show_in_directory": "true",\n    "created_at": "2022/11/11 20:54:52 +0000",\n    "aad_guests": 0,\n    "color": "#2c5b85",\n    "external": false,\n    "moderated": false,\n    "header_image_url": "https://mugshot0eu-1.assets-yammer.com/mugshot/images/group-header-coffee.png?P1=1668204451&P2=104&P3=1&P4=hPZP6QJbY1Oj4KQZAodyMQyvjUahlwoqSCMqioVYvDoB-9Fx3qEB3ZTM7I_TF-mceKqGVDtasUIH8ZDYEfjTg9zgWWDpmkREJySioTZ0WcPtHIUkh2GUWJOfr-5aX9QhdpE1Fpp94mltGCtBc_nqlEbgIAYCJtBKgLAgUFZ4L2WSkQNn5Y_JLp5cM9Gnf7Z3MmHniN0Na1oemDhZ1vOsGCtaU09WPB5oNoSUMfwqYSKjF5IqXdd55Y3F2NZuuyTHoZS65BFZR9OJaICXJs6Q2dNExLqMvGQ76_aZsgli-BG67MVwfDsmqpxsjZZOBIZGQOEKc4D_bx8iQUHZD7p2xA",\n    "category": "unclassified",\n    "default_thread_starter_type": "normal",\n    "restricted_posting": false,\n    "company_group": false,\n    "creator_type": "user",\n    "creator_id": 36425097217,\n    "state": "active",\n    "stats": {\n      "members": 1,\n      "aad_guests": 0,\n      "updates": 0,\n      "last_message_id": null,\n      "last_message_at": null\n    }\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\nemail    :\nexternal : false\nid       : 31158067201\nmoderated: false\nname     : contosohub\nprivacy  : public\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nid,name,email,privacy,external,moderated\n31158067201,wombathub,,public,false,false\n```\n")))}i.isMDXComponent=!0}}]);