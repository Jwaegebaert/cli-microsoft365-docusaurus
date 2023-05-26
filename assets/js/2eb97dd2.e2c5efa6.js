"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[3102],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),i=c(a),p=r,b=i["".concat(d,".").concat(p)]||i[p]||u[p]||s;return a?n.createElement(b,l(l({ref:t},m),{},{components:a})):n.createElement(b,l({ref:t},m))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[i]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),s=a(86010),l=a(12466),o=a(56697),d=a(91980),c=a(67392),m=a(50012);function i(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??i(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,d._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=u(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[d,c]=b({queryString:a,groupId:n}),[i,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=d??i;return p({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,s]),tabValues:s}}var g=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:d,tabValues:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=m.indexOf(t),n=c[a].value;n!==o&&(i(t),d(n))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:p,onClick:u},l,{className:(0,s.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",h.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},26054:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),r=(a(67294),a(3905));const s={toc:[]},l="wrapper";function o(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}o.isMDXComponent=!0},22435:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),s=a(26054),l=a(74866),o=a(85162);const d={},c="teams message get",m={unversionedId:"cmd/teams/message/message-get",id:"cmd/teams/message/message-get",title:"teams message get",description:"Retrieves a message from a channel in a Microsoft Teams team",source:"@site/docs/cmd/teams/message/message-get.mdx",sourceDirName:"cmd/teams/message",slug:"/cmd/teams/message/message-get",permalink:"/cli-microsoft365-docusaurus/cmd/teams/message/message-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/message/message-get.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams membersettings set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/membersettings/membersettings-set"},next:{title:"teams message list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/message/message-list"}},i={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:u},b="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-message-get"},"teams message get"),(0,r.kt)("p",null,"Retrieves a message from a channel in a Microsoft Teams team"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams message get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-t, --teamId <teamId>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the team where the channel is located.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-c, --channelId <channelId>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the channel that contains the message.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the message to retrieve."))),(0,r.kt)(s.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"You can only retrieve a message from a Microsoft Teams team if you are a member of that team."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Retrieve the specified message from a channel of the Microsoft Teams team."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams message get --teamId 5f5d7b71-1161-44d8-bcc1-3da710eb4171 --channelId 19:88f7e66a8dfe42be92db19505ae912a8@thread.skype --id 1540747442203\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "1540747442203",\n  "replyToId": null,\n  "etag": "1666799582385",\n  "messageType": "message",\n  "createdDateTime": "2022-10-26T15:52:00.731Z",\n  "lastModifiedDateTime": "2022-10-26T15:53:02.385Z",\n  "lastEditedDateTime": "2022-10-26T15:53:02.288Z",\n  "deletedDateTime": null,\n  "subject": "Second message Title",\n  "summary": null,\n  "chatId": null,\n  "importance": "normal",\n  "locale": "en-us",\n  "webUrl": "https://teams.microsoft.com/l/message/19%388f7e66a8dfe42be92db19505ae912a8%40thread.tacv2/1540747442203?groupId=5f5d7b71-1161-44d8-bcc1-3da710eb4171&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba&createdTime=1540747442203&parentMessageId=1540747442203",\n  "policyViolation": null,\n  "eventDetail": null,\n  "from": {\n    "application": null,\n    "device": null,\n    "user": {\n      "id": "78ccf530-bbf0-47e4-aae6-da5f8c6fb142",\n      "displayName": "John Doe",\n      "userIdentityType": "aadUser",\n      "tenantId": "92e59666-257b-49c3-b1fa-1bae8107f6ba"\n    }\n  },\n  "body": {\n    "contentType": "text",\n    "content": "second message!"\n  },\n  "channelIdentity": {\n    "teamId": "5f5d7b71-1161-44d8-bcc1-3da710eb4171",\n    "channelId": "19:e2916df2b11046beba42d22da898383f@thread.tacv2"\n  },\n  "attachments": [],\n  "mentions": [],\n  "reactions": []\n}\n'))),(0,r.kt)(o.Z,{value:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'attachments         : []\nbody                : {"contentType":"text","content":"second message!"}\nchannelIdentity     : {"teamId":"5f5d7b71-1161-44d8-bcc1-3da710eb4171","channelId":"19:e2916df2b11046beba42d22da898383f@thread.tacv2"}\nchatId              : null\ncreatedDateTime     : 2022-10-26T15:52:00.731Z\ndeletedDateTime     : null\netag                : 1666799582385\neventDetail         : null\nfrom                : {"application":null,"device":null,"user":{"id":"78ccf530-bbf0-47e4-aae6-da5f8c6fb142","displayName":"John Doe","userIdentityType":"aadUser","tenantId":"92e59666-257b-49c3-b1fa-1bae8107f6ba"}}\nid                  : 1540747442203\nimportance          : normal\nlastEditedDateTime  : 2022-10-26T15:53:02.288Z\nlastModifiedDateTime: 2022-10-26T15:53:02.385Z\nlocale              : en-us\nmentions            : []\nmessageType         : message\npolicyViolation     : null\nreactions           : []\nreplyToId           : null\nsubject             : Second message Title\nsummary             : null\nwebUrl              : https://teams.microsoft.com/l/message/19%388f7e66a8dfe42be92db19505ae912a8%40thread.tacv2/1540747442203?groupId=5f5d7b71-1161-44d8-bcc1-3da710eb4171&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba&createdTime=1540747442203&parentMessageId=1540747442203\n'))),(0,r.kt)(o.Z,{value:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'id,replyToId,etag,messageType,createdDateTime,lastModifiedDateTime,lastEditedDateTime,deletedDateTime,subject,summary,chatId,importance,locale,webUrl,policyViolation,eventDetail,from,body,channelIdentity,attachments,mentions,reactions\n1540747442203,,1666799582385,message,2022-10-26T15:52:00.731Z,2022-10-26T15:53:02.385Z,2022-10-26T15:53:02.288Z,,Second message Title,,,normal,en-us,https://teams.microsoft.com/l/message/19%388f7e66a8dfe42be92db19505ae912a8%40thread.tacv2/1540747442203?groupId=5f5d7b71-1161-44d8-bcc1-3da710eb4171&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba&createdTime=1540747442203&parentMessageId=1540747442203,,,"{""application"":null,""device"":null,""user"":{""id"":""78ccf530-bbf0-47e4-aae6-da5f8c6fb142"",""displayName"":""John Doe"",""userIdentityType"":""aadUser"",""tenantId"":""92e59666-257b-49c3-b1fa-1bae8107f6ba""}}","{""contentType"":""text"",""content"":""second message!""}","{""teamId"":""5f5d7b71-1161-44d8-bcc1-3da710eb4171"",""channelId"":""19:e2916df2b11046beba42d22da898383f@thread.tacv2""}",[],[],[]\n'))),(0,r.kt)(o.Z,{value:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# teams message get --teamId "5f5d7b71-1161-44d8-bcc1-3da710eb4171" --channelId "19:e2916df2b11046beba42d22da898383f@thread.tacv2" --id "1540747442203"\n\nDate: 1/3/2023\n\n## undefined (1540747442203)\n\nProperty | Value\n---------|-------\nid | 1540747442203\nreplyToId | null\netag | 1666799582385\nmessageType | message\ncreatedDateTime | 2022-10-26T15:52:00.731Z\nlastModifiedDateTime | 2022-10-26T15:53:02.385Z\nlastEditedDateTime | 2022-10-26T15:53:02.288Z\ndeletedDateTime | null\nsubject | Second message Title\nsummary | null\nchatId | null\nimportance | normal\nlocale | en-us\nwebUrl | https://teams.microsoft.com/l/message/19%388f7e66a8dfe42be92db19505ae912a8%40thread.tacv2/1540747442203?groupId=5f5d7b71-1161-44d8-bcc1-3da710eb4171&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba&createdTime=1540747442203&parentMessageId=1540747442203\npolicyViolation | null\neventDetail | null\nfrom | {"application":null,"device":null,"user":{"id":"78ccf530-bbf0-47e4-aae6-da5f8c6fb142","displayName":"John Doe","userIdentityType":"aadUser","tenantId":"92e59666-257b-49c3-b1fa-1bae8107f6ba"}}\nbody | {"contentType":"text","content":"second message!"}\nchannelIdentity | {"teamId":"5f5d7b71-1161-44d8-bcc1-3da710eb4171","channelId":"19:e2916df2b11046beba42d22da898383f@thread.tacv2"}\nattachments | []\nmentions | []\nreactions | []\n')))))}f.isMDXComponent=!0}}]);