"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[99896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(87462),o=(n(67294),n(3905));const l={toc:[]},a="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(a,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(86010);const l={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(l.tabItem,a),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),o=n(67294),l=n(86010),a=n(12466),s=n(56697),u=n(91980),i=n(67392),c=n(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[a,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,i]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),h=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),b(e)}),[i,b,l]),tabValues:l}}var h=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,a.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==s&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:a}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},a,{className:(0,l.Z)("tabs__item",k.tabItem,a?.className,{"tabs__item--active":s===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},o.createElement(v,(0,r.Z)({},e,t)),o.createElement(g,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return o.createElement(y,(0,r.Z)({key:String(t)},e))}},55200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),l=n(37884),a=n(74866),s=n(85162);const u={},i="spo user list",c={unversionedId:"cmd/spo/user/user-list",id:"cmd/spo/user/user-list",title:"spo user list",description:"Lists all the users within specific web",source:"@site/docs/cmd/spo/user/user-list.mdx",sourceDirName:"cmd/spo/user",slug:"/cmd/spo/user/user-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/user/user-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/user/user-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo user get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/user/user-get"},next:{title:"spo user remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/user/user-remove"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:d},f="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-user-list"},"spo user list"),(0,o.kt)("p",null,"Lists all the users within specific web"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo user list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"URL of the web to list the users from"))),(0,o.kt)(l.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get list of users in web ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo user list --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Id": 10,\n    "IsHiddenInUI": false,\n    "LoginName": "i:0#.f|membership|johndoe@contoso.onmicrosoft.com",\n    "Title": "John DOe",\n    "PrincipalType": 1,\n    "Email": "johndoe@contoso.onmicrosoft.com",\n    "Expiration": "",\n    "IsEmailAuthenticationGuestUser": false,\n    "IsShareByEmailGuestUser": false,\n    "IsSiteAdmin": false,\n    "UserId": {\n      "NameId": "100320022ec308a7",\n      "NameIdIssuer": "urn:federation:microsoftonline"\n    },\n    "UserPrincipalName": "johndoe@contoso.onmicrosoft.com"\n  }\n]\n'))),(0,o.kt)(s.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Id          Title                           LoginName\n----------  ------------------------------  --------------------------------------------------------------------------\n10          John Doe                        i:0#.f|membership|johndoe@contoso.onmicrosoft.com\n"))),(0,o.kt)(s.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"Id,Title,LoginName\n10,John Doe,i:0#.f|membership|johndoe@contoso.onmicrosoft.com\n")))))}b.isMDXComponent=!0}}]);