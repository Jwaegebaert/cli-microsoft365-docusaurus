"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[59846],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={toc:[]},o="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),s=a(56697),c=a(91980),i=a(67392),u=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,i]=f({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=c??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),h(e)}),[i,h,l]),tabValues:l}}var b=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=i[a].value;n!==s&&(d(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},59697:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(37884),o=a(74866),s=a(85162);const c={},i="teams chat get",u={unversionedId:"cmd/teams/chat/chat-get",id:"cmd/teams/chat/chat-get",title:"teams chat get",description:"Get a Microsoft Teams chat conversation by id, participants or chat name.",source:"@site/docs/cmd/teams/chat/chat-get.mdx",sourceDirName:"cmd/teams/chat",slug:"/cmd/teams/chat/chat-get",permalink:"/cli-microsoft365-docusaurus/cmd/teams/chat/chat-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/chat/chat-get.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"teams channel set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-set"},next:{title:"teams chat list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/chat/chat-list"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:p},f="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-chat-get"},"teams chat get"),(0,r.kt)("p",null,"Get a Microsoft Teams chat conversation by id, participants or chat name."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams chat get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the chat conversation. Specify either ",(0,r.kt)("code",{parentName:"p"},"id"),", ",(0,r.kt)("code",{parentName:"p"},"name")," or ",(0,r.kt)("code",{parentName:"p"},"participants"),", but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The display name of the chat conversation. Specify either ",(0,r.kt)("code",{parentName:"p"},"id"),", ",(0,r.kt)("code",{parentName:"p"},"name")," or ",(0,r.kt)("code",{parentName:"p"},"participants"),", but not multiple.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-p, --participants [participants]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"A comma-separated list of one or more e-mail addresses. Specify either ",(0,r.kt)("code",{parentName:"p"},"id"),", ",(0,r.kt)("code",{parentName:"p"},"name")," or ",(0,r.kt)("code",{parentName:"p"},"participants"),", but not multiple."))),(0,r.kt)(l.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"The output will not include the chat conversation members or messages. It will just retrieve the conversation details.\nWhen using the ",(0,r.kt)("inlineCode",{parentName:"p"},"participants")," option, the signed-in user will automatically be included as a participant. There's no need to add it to the list manually."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get a Microsoft Teams chat conversation by id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams chat get --id 19:2da4c29f6d7041eca70b638b43d45437@thread.v2\n")),(0,r.kt)("p",null,"Get a Microsoft Teams one on one chat conversation, finding it by participant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams chat get --participants alexw@contoso.com\n")),(0,r.kt)("p",null,"Get a Microsoft Teams group chat conversation, finding it by participants."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams chat get --participants alexw@contoso.com,meganb@contoso.com\n")),(0,r.kt)("p",null,"Get a Microsoft Teams chat conversation, finding it by display name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams chat get --name "Just a conversation"\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "19:2da4c29f6d7041eca70b638b43d45437@thread.v2",\n  "topic": null,\n  "createdDateTime": "2022-11-05T13:06:25.218Z",\n  "lastUpdatedDateTime": "2022-11-05T13:06:25.218Z",\n  "chatType": "oneOnOne",\n  "webUrl": "https://teams.microsoft.com/l/chat/19%3A2da4c29f6d7041eca70b638b43d45437%40thread.v2/0?tenantId=446355e4-e7e3-43d5-82f8-d7ad8272d55b",\n  "tenantId": "446355e4-e7e3-43d5-82f8-d7ad8272d55b",\n  "onlineMeetingInfo": null,\n  "viewpoint": {\n    "isHidden": false,\n    "lastMessageReadDateTime": "2022-11-05T13:06:30.582Z"\n  }\n}\n'))),(0,r.kt)(s.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'chatType           : oneOnOne\ncreatedDateTime    : 2022-11-05T13:06:25.218Z\nid                 : 19:2da4c29f6d7041eca70b638b43d45437@thread.v2\nlastUpdatedDateTime: 2022-11-05T13:06:25.218Z\nonlineMeetingInfo  : null\ntenantId           : 446355e4-e7e3-43d5-82f8-d7ad8272d55b\ntopic              : null\nviewpoint          : {"isHidden":false,"lastMessageReadDateTime":"2022-11-05T13:06:30.582Z"}\nwebUrl             : https://teams.microsoft.com/l/chat/19%3A2da4c29f6d7041eca70b638b43d45437%40thread.v2/0?tenantId=446355e4-e7e3-43d5-82f8-d7ad8272d55b\n'))),(0,r.kt)(s.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'id,topic,createdDateTime,lastUpdatedDateTime,chatType,webUrl,tenantId,onlineMeetingInfo,viewpoint\n19:2da4c29f6d7041eca70b638b43d45437@thread.v2,,2022-11-05T13:06:25.218Z,2022-11-05T13:06:25.218Z,oneOnOne,https://teams.microsoft.com/l/chat/19%3A2da4c29f6d7041eca70b638b43d45437%40thread.v2/0?tenantId=446355e4-e7e3-43d5-82f8-d7ad8272d55b,446355e4-e7e3-43d5-82f8-d7ad8272d55b,,"{""isHidden"":false,""lastMessageReadDateTime"":""2022-11-05T13:06:30.582Z""}"\n')))))}h.isMDXComponent=!0}}]);