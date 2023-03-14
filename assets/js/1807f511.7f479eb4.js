"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[92312],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||l;return a?n.createElement(f,s(s({ref:t},i),{},{components:a})):n.createElement(f,s({ref:t},i))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={toc:[]},s="wrapper";function o(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}o.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),l=a(86010),s=a(12466),o=a(56697),u=a(91980),c=a(67392),i=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,c]=f({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,i.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=u??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var g=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=i.indexOf(t),n=c[a].value;n!==o&&(d(t),u(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>i.push(e),onKeyDown:p,onClick:m},s,{className:(0,l.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},24587:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(37884),s=a(74866),o=a(85162);const u={},c="teams message reply list",i={unversionedId:"cmd/teams/message/message-reply-list",id:"cmd/teams/message/message-reply-list",title:"teams message reply list",description:"Retrieves replies to a message from a channel in a Microsoft Teams team",source:"@site/docs/cmd/teams/message/message-reply-list.mdx",sourceDirName:"cmd/teams/message",slug:"/cmd/teams/message/message-reply-list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/message/message-reply-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/message/message-reply-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"teams message list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/message/message-list"},next:{title:"teams message send",permalink:"/cli-microsoft365-docusaurus/cmd/teams/message/message-send"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:m},f="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-message-reply-list"},"teams message reply list"),(0,r.kt)("p",null,"Retrieves replies to a message from a channel in a Microsoft Teams team"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams message reply list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --teamId <teamId>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the team where the channel is located.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-c, --channelId <channelId>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the channel that contains the message.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-m, --messageId <messageId>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the message to retrieve replies for."))),(0,r.kt)(l.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"You can only retrieve replies to a message from a Microsoft Teams team if you are a member of that team."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Retrieve the replies from a specified message from a channel of the Microsoft Teams team."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams message reply list --teamId 5f5d7b71-1161-44d8-bcc1-3da710eb4171 --channelId 19:88f7e66a8dfe42be92db19505ae912a8@thread.skype --messageId 1540747442203\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "1540747442203",\n    "replyToId": "1666799520731",\n    "etag": "1540747442203",\n    "messageType": "message",\n    "createdDateTime": "2022-10-26T15:57:13.162Z",\n    "lastModifiedDateTime": "2022-10-26T15:57:13.162Z",\n    "lastEditedDateTime": null,\n    "deletedDateTime": null,\n    "subject": null,\n    "summary": null,\n    "chatId": null,\n    "importance": "normal",\n    "locale": "en-us",\n    "webUrl": "https://teams.microsoft.com/l/message/19%388f7e66a8dfe42be92db19505ae912a8%40thread.tacv2/1540747442203?groupId=5f5d7b71-1161-44d8-bcc1-3da710eb4171&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba&createdTime=1540747442203&parentMessageId=1666799520731",\n    "policyViolation": null,\n    "eventDetail": null,\n    "from": {\n      "application": null,\n      "device": null,\n      "user": {\n        "id": "78ccf530-bbf0-47e4-aae6-da5f8c6fb142",\n        "displayName": "John Doe",\n        "userIdentityType": "aadUser",\n        "tenantId": "92e59666-257b-49c3-b1fa-1bae8107f6ba"\n      }\n    },\n    "body": {\n      "contentType": "text",\n      "content": "First reply"\n    },\n    "channelIdentity": {\n      "teamId": "5f5d7b71-1161-44d8-bcc1-3da710eb4171",\n      "channelId": "19:88f7e66a8dfe42be92db19505ae912a8@thread.tacv2"\n    },\n    "attachments": [],\n    "mentions": [],\n    "reactions": []\n  }\n]\n'))),(0,r.kt)(o.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"id             body\n-------------  -----------\n1540747442203  First reply\n"))),(0,r.kt)(o.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"id,body\n1540747442203,First reply\n"))),(0,r.kt)(o.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# teams message reply list --teamId "5f5d7b71-1161-44d8-bcc1-3da710eb4171" --channelId "19:88f7e66a8dfe42be92db19505ae912a8@thread.skype" --messageId "1540747442203"\n\nDate: 1/3/2023\n\n## undefined (1672744052534)\n\nProperty | Value\n---------|-------\nid | 1540747442203\nreplyToId | 1666799520731\netag | 1540747442203\nmessageType | message\ncreatedDateTime | 2022-10-26T15:57:13.162Z\nlastModifiedDateTime | 2022-10-26T15:57:13.162Z\nlastEditedDateTime | null\ndeletedDateTime | null\nsubject | null\nsummary | null\nchatId | null\nimportance | normal\nlocale | en-us\nwebUrl | https://teams.microsoft.com/l/message/19%388f7e66a8dfe42be92db19505ae912a8%40thread.tacv2/1540747442203?groupId=5f5d7b71-1161-44d8-bcc1-3da710eb4171&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba&createdTime=1540747442203&parentMessageId=1666799520731\npolicyViolation | null\neventDetail | null\nfrom | {"application":null,"device":null,"user":{"id":"78ccf530-bbf0-47e4-aae6-da5f8c6fb142","displayName":"John Doe","userIdentityType":"aadUser","tenantId":"92e59666-257b-49c3-b1fa-1bae8107f6ba"}}\nbody | First reply\nchannelIdentity | {"teamId":"5f5d7b71-1161-44d8-bcc1-3da710eb4171","channelId":"19:88f7e66a8dfe42be92db19505ae912a8@thread.skype"}\nattachments | []\nmentions | []\nreactions | []\n')))))}b.isMDXComponent=!0}}]);