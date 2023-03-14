"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[15094],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),d=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(a),p=n,k=c["".concat(u,".").concat(p)]||c[p]||i[p]||o;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={toc:[]},l="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(l,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-h, --help [help]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",null,"options"),", ",(0,n.kt)("code",null,"examples"),", ",(0,n.kt)("code",null,"remarks"),", ",(0,n.kt)("code",null,"response"),", ",(0,n.kt)("code",null,"full"),". Default is ",(0,n.kt)("code",null,"full"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--query [query]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"JMESPath query string. See ",(0,n.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-o, --output [output]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output type. ",(0,n.kt)("code",null,"json"),", ",(0,n.kt)("code",null,"text"),", ",(0,n.kt)("code",null,"csv"),", ",(0,n.kt)("code",null,"md"),". Default is ",(0,n.kt)("code",null,"json"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--verbose"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with verbose logging.")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--debug"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),s=a(56697),u=a(91980),d=a(67392),m=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function i(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=i(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=k({queryString:a,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,m.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=u??c;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var f=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:u,tabValues:d}=e;const m=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),i=e=>{const t=e.currentTarget,a=m.indexOf(t),r=d[a].value;r!==s&&(c(t),u(r))},p=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:p,onClick:i},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(b,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},33145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>i});var r=a(87462),n=(a(67294),a(3905)),o=a(37884),l=a(74866),s=a(85162);const u={},d="yammer message add",m={unversionedId:"cmd/yammer/message/message-add",id:"cmd/yammer/message/message-add",title:"yammer message add",description:"Posts a Yammer network message on behalf of the current user",source:"@site/docs/cmd/yammer/message/message-add.mdx",sourceDirName:"cmd/yammer/message",slug:"/cmd/yammer/message/message-add",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/message/message-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/yammer/message/message-add.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"yammer group user remove",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/group/group-user-remove"},next:{title:"yammer message get",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/message/message-get"}},c={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:i},k="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yammer-message-add"},"yammer message add"),(0,n.kt)("p",null,"Posts a Yammer network message on behalf of the current user"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 yammer message add [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-b, --body <body>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The text of the message body")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--groupId [groupId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Post the message to this group, specified by ID. If this is set then the networkId is inferred from it. You must either specify ",(0,n.kt)("code",{parentName:"p"},"groupId"),", ",(0,n.kt)("code",{parentName:"p"},"repliedToId"),", or ",(0,n.kt)("code",{parentName:"p"},"directToUserIds")," to send the message")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-r, --repliedToId [repliedToId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The message ID this message is in reply to. If this is set then groupId and networkId are inferred from it. You must either specify ",(0,n.kt)("code",{parentName:"p"},"groupId"),", ",(0,n.kt)("code",{parentName:"p"},"repliedToId"),", or ",(0,n.kt)("code",{parentName:"p"},"directToUserIds")," to send the message")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-d, --directToUserIds [directToUserIds]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Send a private message to one or more users, specified by ID. Alternatively, you can use the Yammer network e-mail addresses instead of the IDs. You must either specify ",(0,n.kt)("code",{parentName:"p"},"groupId"),", ",(0,n.kt)("code",{parentName:"p"},"repliedToId"),", or ",(0,n.kt)("code",{parentName:"p"},"directToUserIds")," to send the message")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--networkId [networkId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Specify the network to post a message"))),(0,n.kt)(o.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"In order to use this command, you need to grant the Azure AD application used by the CLI for Microsoft 365 the permission to the Yammer API. To do this, execute the ",(0,n.kt)("inlineCode",{parentName:"p"},"cli consent --service yammer")," command.")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Replies to a message with the ID 1231231231"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer message add --body "Hello everyone!" --repliedToId 1231231231\n')),(0,n.kt)("p",null,"Sends a private conversation to the user with the ID 1231231231"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer message add --body "Hello everyone!" --directToUserIds 1231231231\n')),(0,n.kt)("p",null,"Sends a private conversation to multiple users by ID"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer message add --body "Hello everyone!" --directToUserIds "1231231231,1121312"\n')),(0,n.kt)("p",null,"Sends a private conversation to the user with the e-mail ",(0,n.kt)("a",{parentName:"p",href:"mailto:pl@nubo.eu"},"pl@nubo.eu")," and ",(0,n.kt)("a",{parentName:"p",href:"mailto:sc@nubo.eu"},"sc@nubo.eu")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer message add --body "Hello everyone!" --directToUserIds "pl@nubo.eu,sc@nubo.eu"\n')),(0,n.kt)("p",null,"Posts a message to the group with the ID 12312312312"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer message add --body "Hello everyone!" --groupId 12312312312\n')),(0,n.kt)("p",null,"Posts a message to the group with the ID 12312312312 in the network 11112312"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 yammer message add --body "Hello everyone!" --groupId 12312312312 --networkId 11112312\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 2000337346863105,\n  "sender_id": 36425097217,\n  "delegate_id": null,\n  "replied_to_id": null,\n  "created_at": "2022/11/11 20:59:56 +0000",\n  "network_id": 5897756673,\n  "message_type": "update",\n  "sender_type": "user",\n  "url": "https://www.yammer.com/api/v1/messages/2000337346863105",\n  "web_url": "https://www.yammer.com/contoso.onmicrosoft.com/messages/2000337346863105",\n  "group_id": 31158067201,\n  "body": {\n    "parsed": "Hello everyone!",\n    "plain": "Hello everyone!",\n    "rich": "Hello everyone!"\n  },\n  "thread_id": 2000337346863105,\n  "client_type": "O365 Api Auth",\n  "client_url": "https://api.yammer.com",\n  "system_message": false,\n  "direct_message": false,\n  "chat_client_sequence": null,\n  "language": null,\n  "notified_user_ids": [],\n  "privacy": "public",\n  "attachments": [],\n  "liked_by": {\n    "count": 0,\n    "names": []\n  },\n  "supplemental_reply": false,\n  "content_excerpt": "Hello everyone!",\n  "group_created_id": 31158067201\n}\n'))),(0,n.kt)(s.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"id: 2000337648877569\n"))),(0,n.kt)(s.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"id\n2000337749565441\n")))))}g.isMDXComponent=!0}}]);