"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[54253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>_});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,_=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(_,s(s({ref:t},c),{},{components:n})):r.createElement(_,s({ref:t},c))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),o=n(86010),s=n(12466),l=n(56697),i=n(91980),u=n(67392),c=n(50012);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function _(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,u]=_({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=i??m;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(m(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},s,{className:(0,o.Z)("tabs__item",k.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(g,(0,r.Z)({key:String(t)},e))}},26054:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},s="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",{parentName:"p"},"options"),", ",(0,a.kt)("code",{parentName:"p"},"examples"),", ",(0,a.kt)("code",{parentName:"p"},"remarks"),", ",(0,a.kt)("code",{parentName:"p"},"response"),", ",(0,a.kt)("code",{parentName:"p"},"full"),". Default is ",(0,a.kt)("code",{parentName:"p"},"full"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--query [query]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,a.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Output type. ",(0,a.kt)("code",{parentName:"p"},"json"),", ",(0,a.kt)("code",{parentName:"p"},"text"),", ",(0,a.kt)("code",{parentName:"p"},"csv"),", ",(0,a.kt)("code",{parentName:"p"},"md"),". Default ",(0,a.kt)("code",{parentName:"p"},"json"),".")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--verbose"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--debug"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}l.isMDXComponent=!0},43155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(26054),s=n(74866),l=n(85162);const i={},u="Yammer network list",c={unversionedId:"cmd/yammer/network/network-list",id:"cmd/yammer/network/network-list",title:"Yammer network list",description:"Returns a list of networks to which the current user has access",source:"@site/docs/cmd/yammer/network/network-list.mdx",sourceDirName:"cmd/yammer/network",slug:"/cmd/yammer/network/network-list",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/network/network-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/network/network-list.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"yammer message like set",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/message/message-like-set"},next:{title:"yammer report activitycounts",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/report/report-activitycounts"}},m={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],d={toc:p},_="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(_,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"yammer-network-list"},"Yammer network list"),(0,a.kt)("p",null,"Returns a list of networks to which the current user has access"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer network list [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--includeSuspended"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Include the networks in which the user is suspended"))),(0,a.kt)(o.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In order to use this command, you need to grant the Azure AD application used by the CLI for Microsoft 365 the permission to the Yammer API. To do this, execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"cli consent --service yammer")," command.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Returns the current user's networks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer network list\n")),(0,a.kt)("p",null,"Returns the current user's networks including the networks in which the user is suspended"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer network list --includeSuspended\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "type": "network",\n    "id": 5897756673,\n    "email": "",\n    "name": "Contoso",\n    "community": false,\n    "permalink": "contoso.onmicrosoft.com",\n    "web_url": "https://www.yammer.com/contoso.onmicrosoft.com",\n    "show_upgrade_banner": false,\n    "header_background_color": "#396B9A",\n    "header_text_color": "#FFFFFF",\n    "navigation_background_color": "#38699F",\n    "navigation_text_color": "#FFFFFF",\n    "paid": true,\n    "moderated": false,\n    "is_freemium": false,\n    "is_org_chart_enabled": false,\n    "is_group_enabled": true,\n    "is_chat_enabled": true,\n    "is_translation_enabled": false,\n    "created_at": "2020/02/26 10:33:56 +0000",\n    "is_storyline_enabled": true,\n    "is_storyline_preview_enabled": false,\n    "is_stories_enabled": true,\n    "is_stories_preview_enabled": false,\n    "is_premium_preview_enabled": false,\n    "profile_fields_config": {\n      "enable_work_history": true,\n      "enable_education": true,\n      "enable_job_title": true,\n      "enable_work_phone": true,\n      "enable_mobile_phone": true,\n      "enable_summary": true,\n      "enable_interests": true,\n      "enable_expertise": true,\n      "enable_location": true,\n      "enable_im": true,\n      "enable_skype": true,\n      "enable_websites": true\n    },\n    "browser_deprecation_url": null,\n    "external_messaging_state": "disabled",\n    "state": "enabled",\n    "enforce_office_authentication": true,\n    "office_authentication_committed": true,\n    "is_gif_shortcut_enabled": true,\n    "is_link_preview_enabled": true,\n    "attachments_in_private_messages": false,\n    "secret_groups": false,\n    "force_connected_groups": true,\n    "force_spo_files": false,\n    "connected_all_company": true,\n    "m365_native_mode": true,\n    "force_optin_modern_client": false,\n    "admin_modern_client_flexible_optin": false,\n    "aad_guests_enabled": false,\n    "all_company_group_creation_state": null,\n    "unseen_message_count": -1,\n    "preferred_unseen_message_count": -1,\n    "private_unseen_thread_count": 0,\n    "inbox_unseen_thread_count": 0,\n    "private_unread_thread_count": 0,\n    "unseen_notification_count": 0,\n    "has_fake_email": false,\n    "is_primary": true,\n    "allow_attachments": true,\n    "attachment_types_allowed": "ALL",\n    "privacy_link": "https://go.microsoft.com/fwlink/p/?linkid=857875"\n  }\n]\n'))),(0,a.kt)(l.Z,{value:"Text",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"community: false\nemail    :\nid       : 5897756673\nname     : Contoso\npermalink: contoso.onmicrosoft.com\nweb_url  : https://www.yammer.com/contoso.onmicrosoft.com\n"))),(0,a.kt)(l.Z,{value:"CSV",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,email,community,permalink,web_url\n5897756673,Contoso,,,contoso.onmicrosoft.com,https://www.yammer.com/contoso.onmicrosoft.com\n"))),(0,a.kt)(l.Z,{value:"Markdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"# yammer network list\n\nDate: 2023-05-16\n\n## Contoso (98327945216)\n\nProperty | Value\n---------|-------\ntype | network\nid | 98327945216\nemail | contoso.onmicrosoft.com@yammer.com\nname | Contoso\ncommunity | false\npermalink | contoso.onmicrosoft.com\nweb\\_url | https://www.yammer.com/contoso.onmicrosoft.com\nshow\\_upgrade\\_banner | false\nheader\\_background\\_color | #396B9A\nheader\\_text\\_color | #FFFFFF\nnavigation\\_background\\_color | #38699F\nnavigation\\_text\\_color | #FFFFFF\npaid | true\nmoderated | false\nis\\_freemium | false\nis\\_org\\_chart\\_enabled | false\nis\\_group\\_enabled | true\nis\\_chat\\_enabled | true\nis\\_translation\\_enabled | false\ncreated\\_at | 2022/12/08 07:38:34 +0000\nis\\_storyline\\_enabled | true\nis\\_storyline\\_preview\\_enabled | false\nis\\_storyline\\_per\\_user\\_control\\_enabled | false\nis\\_stories\\_enabled | true\nis\\_stories\\_preview\\_enabled | false\nis\\_premium\\_preview\\_enabled | false\nis\\_leadership\\_corner\\_enabled | true\nexternal\\_messaging\\_state | inbound\\_only\nstate | enabled\nenforce\\_office\\_authentication | true\noffice\\_authentication\\_committed | true\nis\\_gif\\_shortcut\\_enabled | true\nis\\_link\\_preview\\_enabled | true\nattachments\\_in\\_private\\_messages | false\nsecret\\_groups | false\nforce\\_connected\\_groups | true\nforce\\_spo\\_files | true\nconnected\\_all\\_company | true\nm365\\_native\\_mode | true\nforce\\_optin\\_modern\\_client | true\nadmin\\_modern\\_client\\_flexible\\_optin | false\naad\\_guests\\_enabled | true\nall\\_company\\_group\\_creation\\_state | 3\nis\\_network\\_questions\\_enabled | true\nis\\_network\\_questions\\_only\\_mode\\_enabled | false\nunseen\\_message\\_count | -1\npreferred\\_unseen\\_message\\_count | -1\nprivate\\_unseen\\_thread\\_count | 0\ninbox\\_unseen\\_thread\\_count | 0\nprivate\\_unread\\_thread\\_count | 0\nunseen\\_notification\\_count | 2\nhas\\_fake\\_email | false\nis\\_primary | true\nallow\\_attachments | true\nattachment\\_types\\_allowed | ALL\nprivacy\\_link | https://go.microsoft.com/fwlink/p/?linkid=857875\nuser\\_state | active\n")))))}f.isMDXComponent=!0}}]);