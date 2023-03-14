"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[63292],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),p=r,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||l;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={toc:[]},s="wrapper";function o(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}o.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(87462),r=a(67294),l=a(86010),s=a(12466),o=a(56697),i=a(91980),u=a(67392),c=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,u]=f({queryString:a,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=i??m;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var g=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(m(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},s,{className:(0,l.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},65973:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(37884),s=a(74866),o=a(85162);const i={},u="teams team get",c={unversionedId:"cmd/teams/team/team-get",id:"cmd/teams/team/team-get",title:"teams team get",description:"Gets information about the specified Microsoft Teams team",source:"@site/docs/cmd/teams/team/team-get.mdx",sourceDirName:"cmd/teams/team",slug:"/cmd/teams/team/team-get",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/team/team-get.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"teams team clone",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-clone"},next:{title:"teams team list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/team/team-list"}},m={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:d},f="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-team-get"},"teams team get"),(0,r.kt)("p",null,"Gets information about the specified Microsoft Teams team"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams team get\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the Microsoft Teams team to retrieve information for. Specify either ",(0,r.kt)("code",{parentName:"p"},"id")," or ",(0,r.kt)("code",{parentName:"p"},"name")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The display name of the Microsoft Teams team to retrieve information for. Specify either ",(0,r.kt)("code",{parentName:"p"},"id")," or ",(0,r.kt)("code",{parentName:"p"},"name")," but not both."))),(0,r.kt)(l.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get information about the Microsoft Teams team by id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams team get --id 2eaf7dcd-7e83-4c3a-94f7-932a1299c844\n")),(0,r.kt)("p",null,"Get information about Microsoft Teams team by name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams team get --name "Team Name"\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "2eaf7dcd-7e83-4c3a-94f7-932a1299c844",\n  "createdDateTime": "2022-10-31T12:50:42.819Z",\n  "displayName": "Team Name",\n  "description": "Team Name Discussion",\n  "internalId": "19:2soiTJiLJmUrSi94Hr23ZwcN9uWFWjE3EGYb5bFsyy41@thread.tacv2",\n  "classification": null,\n  "specialization": "none",\n  "visibility": "public",\n  "webUrl": "https://teams.microsoft.com/l/team/19%3a2soiTJiLJmUrSi94Hr23ZwcN9uWFWjE3EGYb5bFsyy41%40thread.tacv2/conversations?groupId=2eaf7dcd-7e83-4c3a-94f7-932a1299c844&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba",\n  "isArchived": false,\n  "isMembershipLimitedToOwners": false,\n  "discoverySettings": {\n    "showInTeamsSearchAndSuggestions": true\n  },\n  "summary": null,\n  "memberSettings": {\n    "allowCreateUpdateChannels": true,\n    "allowCreatePrivateChannels": true,\n    "allowDeleteChannels": true,\n    "allowAddRemoveApps": true,\n    "allowCreateUpdateRemoveTabs": true,\n    "allowCreateUpdateRemoveConnectors": true\n  },\n  "guestSettings": {\n    "allowCreateUpdateChannels": false,\n    "allowDeleteChannels": false\n  },\n  "messagingSettings": {\n    "allowUserEditMessages": true,\n    "allowUserDeleteMessages": true,\n    "allowOwnerDeleteMessages": true,\n    "allowTeamMentions": true,\n    "allowChannelMentions": true\n  },\n  "funSettings": {\n    "allowGiphy": true,\n    "giphyContentRating": "moderate",\n    "allowStickersAndMemes": true,\n    "allowCustomMemes": true\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'classification             : null\ncreatedDateTime            : 2022-10-31T12:50:42.819Z\ndescription                : Team Name Discussion\ndiscoverySettings          : {"showInTeamsSearchAndSuggestions":true}\ndisplayName                : Team Name\nfunSettings                : {"allowGiphy":true,"giphyContentRating":"moderate","allowStickersAndMemes":true,"allowCustomMemes":true}\nguestSettings              : {"allowCreateUpdateChannels":false,"allowDeleteChannels":false}\nid                         : 2eaf7dcd-7e83-4c3a-94f7-932a1299c844\ninternalId                 : 19:2soiTJiLJmUrSi94Hr23ZwcN9uWFWjE3EGYb5bFsyy41@thread.tacv2\nisArchived                 : false\nisMembershipLimitedToOwners: false\nmemberSettings             : {"allowCreateUpdateChannels":true,"allowCreatePrivateChannels":true,"allowDeleteChannels":true,"allowAddRemoveApps":true,"allowCreateUpdateRemoveTabs":true,"allowCreateUpdateRemoveConnectors":true}\nmessagingSettings          : {"allowUserEditMessages":true,"allowUserDeleteMessages":true,"allowOwnerDeleteMessages":true,"allowTeamMentions":true,"allowChannelMentions":true}\nspecialization             : none\nsummary                    : null\nvisibility                 : public\nwebUrl                     : https://teams.microsoft.com/l/team/19%3a2soiTJiLJmUrSi94Hr23ZwcN9uWFWjE3EGYb5bFsyy41%40thread.tacv2/conversations?groupId=2eaf7dcd-7e83-4c3a-94f7-932a1299c844&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba\n'))),(0,r.kt)(o.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'id,createdDateTime,displayName,description,internalId,classification,specialization,visibility,webUrl,isArchived,isMembershipLimitedToOwners,discoverySettings,summary,memberSettings,guestSettings,messagingSettings,funSettings\n2eaf7dcd-7e83-4c3a-94f7-932a1299c844,2022-10-31T12:50:42.819Z,Team Name,Team Name Discussion,19:2soiTJiLJmUrSi94Hr23ZwcN9uWFWjE3EGYb5bFsyy41@thread.tacv2,,none,public,https://teams.microsoft.com/l/team/19%3a2soiTJiLJmUrSi94Hr23ZwcN9uWFWjE3EGYb5bFsyy41%40thread.tacv2/conversations?groupId=2eaf7dcd-7e83-4c3a-94f7-932a1299c844&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba,,,"{""showInTeamsSearchAndSuggestions"":true}",,"{""allowCreateUpdateChannels"":true,""allowCreatePrivateChannels"":true,""allowDeleteChannels"":true,""allowAddRemoveApps"":true,""allowCreateUpdateRemoveTabs"":true,""allowCreateUpdateRemoveConnectors"":true}","{""allowCreateUpdateChannels"":false,""allowDeleteChannels"":false}","{""allowUserEditMessages"":true,""allowUserDeleteMessages"":true,""allowOwnerDeleteMessages"":true,""allowTeamMentions"":true,""allowChannelMentions"":true}","{""allowGiphy"":true,""giphyContentRating"":""moderate"",""allowStickersAndMemes"":true,""allowCustomMemes"":true}"\n'))),(0,r.kt)(o.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# teams team get --name "Team Name"\n\nDate: 1/3/2023\n\n## Team Name (2eaf7dcd-7e83-4c3a-94f7-932a1299c844)\n\nProperty | Value\n---------|-------\nid | 2eaf7dcd-7e83-4c3a-94f7-932a1299c844\ncreatedDateTime | 2022-06-17T08:49:40.953Z\ndisplayName | Team Name\ndescription | Team Name Discussion\ninternalId | 19:2soiTJiLJmUrSi94Hr23ZwcN9uWFWjE3EGYb5bFsyy41@thread.tacv2\nclassification | null\nspecialization | none\nvisibility | public\nwebUrl | https://teams.microsoft.com/l/team/19%3a2soiTJiLJmUrSi94Hr23ZwcN9uWFWjE3EGYb5bFsyy41%40thread.tacv2/conversations?groupId=2eaf7dcd-7e83-4c3a-94f7-932a1299c844&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba\nisArchived | false\nisMembershipLimitedToOwners | false\ndiscoverySettings | {"showInTeamsSearchAndSuggestions":true}\nmemberSettings | {"allowCreateUpdateChannels":true,"allowCreatePrivateChannels":true,"allowDeleteChannels":true,"allowAddRemoveApps":true,"allowCreateUpdateRemoveTabs":true,"allowCreateUpdateRemoveConnectors":true}\nguestSettings | {"allowCreateUpdateChannels":false,"allowDeleteChannels":false}\nmessagingSettings | {"allowUserEditMessages":true,"allowUserDeleteMessages":true,"allowOwnerDeleteMessages":true,"allowTeamMentions":true,"allowChannelMentions":true}\nfunSettings | {"allowGiphy":true,"giphyContentRating":"strict","allowStickersAndMemes":true,"allowCustomMemes":true}\nsummary | null\n')))))}b.isMDXComponent=!0}}]);