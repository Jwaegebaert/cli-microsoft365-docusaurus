"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[67609],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),c=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,b=u["".concat(m,".").concat(p)]||u[p]||i[p]||o;return a?n.createElement(b,l(l({ref:t},d),{},{components:a})):n.createElement(b,l({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]},l="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),s=a(56697),m=a(91980),c=a(67392),d=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function i(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,m._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=i(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[m,c]=b({queryString:a,groupId:n}),[u,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=m??u;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var h=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:m,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),i=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==s&&(u(t),m(n))},p=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:i},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},81830:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>m,metadata:()=>d,toc:()=>i});var n=a(87462),r=(a(67294),a(3905)),o=a(37884),l=a(74866),s=a(85162);const m={},c="teams tab get",d={unversionedId:"cmd/teams/tab/tab-get",id:"cmd/teams/tab/tab-get",title:"teams tab get",description:"Gets information about the specified Microsoft Teams tab",source:"@site/docs/cmd/teams/tab/tab-get.mdx",sourceDirName:"cmd/teams/tab",slug:"/cmd/teams/tab/tab-get",permalink:"/cli-microsoft365-docusaurus/cmd/teams/tab/tab-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/tab/tab-get.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"teams tab add",permalink:"/cli-microsoft365-docusaurus/cmd/teams/tab/tab-add"},next:{title:"teams tab list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/tab/tab-list"}},u={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:i},b="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-tab-get"},"teams tab get"),(0,r.kt)("p",null,"Gets information about the specified Microsoft Teams tab"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams tab get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--teamId [teamId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the Microsoft Teams team where the tab is located. Specify either teamId or teamName but not both")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--teamName [teamName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The display name of the Microsoft Teams team where the tab is located. Specify either teamId or teamName but not both")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--channelId [channelId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the Microsoft Teams channel where the tab is located. Specify either channelId or channelName but not both")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--channelName [channelName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The display name of the Microsoft Teams channel where the tab is located. Specify either channelId or channelName but not both")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the Microsoft Teams tab. Specify either ",(0,r.kt)("code",{parentName:"p"},"id")," or ",(0,r.kt)("code",{parentName:"p"},"name")," but not both")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The display name of the Microsoft Teams tab. Specify either ",(0,r.kt)("code",{parentName:"p"},"id")," or ",(0,r.kt)("code",{parentName:"p"},"name")," but not both"))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"You can only retrieve tabs for teams of which you are a member."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get a Microsoft Teams Tab with ID ",(0,r.kt)("em",{parentName:"p"},"1432c9da-8b9c-4602-9248-e0800f3e3f07")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams tab get --teamId 00000000-0000-0000-0000-000000000000 --channelId 19:00000000000000000000000000000000@thread.skype --id 1432c9da-8b9c-4602-9248-e0800f3e3f07\n")),(0,r.kt)("p",null,"Get a Microsoft Teams Tab with name ",(0,r.kt)("em",{parentName:"p"},"Tab Name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 teams tab get --teamName "Team Name" --channelName "Channel Name" --name "Tab Name"\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "34991fbf-59f4-48d9-b094-b9d64d550e23",\n  "displayName": "Tab Name",\n  "webUrl": "https://teams.microsoft.com/l/entity/1542629c-01b3-4a6d-8f76-1938b779e48d/_djb2_msteams_prefix_34991fbf-59f4-48d9-b094-b9d64d550e23?webUrl=https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d&label=My%20Contoso%20Tab&context=%7b%0d%0a++%22canvasUrl%22%3a+%22https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d%22%2c%0d%0a++%22channelId%22%3a+%2219%3aB3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1%40thread.tacv2%22%2c%0d%0a++%22subEntityId%22%3a+null%0d%0a%7d&groupId=aee5a2c9-b1df-45ac-9964-c708e760a045&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba",\n  "configuration": {\n    "entityId": "surveys_list:19:B3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1@thread.tacv2:ps67c9jyf3a30j2j5eum72",\n    "contentUrl": "https://teams.contoso.ai/msteams/content/tab/team?theme={theme}",\n    "removeUrl": "https://teams.contoso.ai/msteams/content/tabdelete?theme={theme}",\n    "websiteUrl": "https://teams.contoso.ai/msteams/content/tab/team?theme={theme}",\n    "dateAdded": "2022-10-31T12:17:58.632Z"\n  }\n}\n'))),(0,r.kt)(s.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'configuration: {"entityId":"surveys_list:19:B3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1@thread.tacv2:ps67c9jyf3a30j2j5eum72","contentUrl":"https://teams.contoso.ai/msteams/content/tab/team?theme={theme}","removeUrl":"https://teams.contoso.ai/msteams/content/tabdelete?theme={theme}","websiteUrl":"https://teams.contoso.ai/msteams/content/tab/team?theme={theme}","dateAdded":"2022-10-31T12:17:58.632Z"}\ndisplayName  : Tab Name\nid           : 34991fbf-59f4-48d9-b094-b9d64d550e23\nwebUrl       : https://teams.microsoft.com/l/entity/1542629c-01b3-4a6d-8f76-1938b779e48d/_djb2_msteams_prefix_34991fbf-59f4-48d9-b094-b9d64d550e23?webUrl=https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d&label=contoso&context=%7b%0d%0a++%22canvasUrl%22%3a+%22https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d%22%2c%0d%0a++%22channelId%22%3a+%2219%3aB3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1%40thread.tacv2%22%2c%0d%0a++%22subEntityId%22%3a+null%0d%0a%7d&groupId=aee5a2c9-b1df-45ac-9964-c708e760a045&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba\n'))),(0,r.kt)(s.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'id,displayName,webUrl,configuration\n34991fbf-59f4-48d9-b094-b9d64d550e23,Tab Name,https://teams.microsoft.com/l/entity/1542629c-01b3-4a6d-8f76-1938b779e48d/_djb2_msteams_prefix_34991fbf-59f4-48d9-b094-b9d64d550e23?webUrl=https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d&label=My%20Contoso%20Tab&context=%7b%0d%0a++%22canvasUrl%22%3a+%22https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d%22%2c%0d%0a++%22channelId%22%3a+%2219%3aB3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1%40thread.tacv2%22%2c%0d%0a++%22subEntityId%22%3a+null%0d%0a%7d&groupId=aee5a2c9-b1df-45ac-9964-c708e760a045&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba,"{""entityId"":""surveys_list:19:B3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1@thread.tacv2:ps67c9jyf3a30j2j5eum72"",""contentUrl"":""https://teams.contoso.ai/msteams/content/tab/team?theme={theme}"",""removeUrl"":""https://teams.contoso.ai/msteams/content/tabdelete?theme={theme}"",""websiteUrl"":""https://teams.contoso.ai/msteams/content/tab/team?theme={theme}"",""dateAdded"":""2022-10-31T12:17:58.632Z""}"\n'))),(0,r.kt)(s.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'# teams tab get --teamId "aee5a2c9-b1df-45ac-9964-c708e760a045" --channelId "19:B3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1@thread.tacv2" --id "34991fbf-59f4-48d9-b094-b9d64d550e23"\n\nDate: 1/3/2023\n\n## Tab Name (34991fbf-59f4-48d9-b094-b9d64d550e23)\n\nProperty | Value\n---------|-------\nid | 34991fbf-59f4-48d9-b094-b9d64d550e23\ndisplayName | Tab Name\nwebUrl | https://teams.microsoft.com/l/entity/1542629c-01b3-4a6d-8f76-1938b779e48d/_djb2_msteams_prefix_34991fbf-59f4-48d9-b094-b9d64d550e23?webUrl=https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d&label=My%20Contoso%20Tab&context=%7b%0d%0a++%22canvasUrl%22%3a+%22https%3a%2f%2fteams.contoso.ai%2fmsteams%2fcontent%2ftab%2fteam%3ftheme%3d%7btheme%7d%22%2c%0d%0a++%22channelId%22%3a+%2219%3aB3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1%40thread.tacv2%22%2c%0d%0a++%22subEntityId%22%3a+null%0d%0a%7d&groupId=aee5a2c9-b1df-45ac-9964-c708e760a045&tenantId=92e59666-257b-49c3-b1fa-1bae8107f6ba\nconfiguration | {"entityId":surveys_list:19:B3nCnLKwwCoGDEADyUgQ5kJ5Pkekujyjmwxp7uhQeAE1@thread.tacv2:ps67c9jyf3a30j2j5eum72,"contentUrl":https://teams.contoso.ai/msteams/content/tab/team?theme={theme},"removeUrl":https://teams.contoso.ai/msteams/content/tabdelete?theme={theme},"websiteUrl":https://teams.contoso.ai/msteams/content/tab/team?theme={theme},"dateAdded":2022-10-31T12:17:58.632Z}\n')))))}f.isMDXComponent=!0}}]);