"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[85585],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},i=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(a),i=o,h=m["".concat(u,".").concat(i)]||m[i]||c[i]||n;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=i;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[m]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}i.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={toc:[]},l="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(l,(0,r.Z)({},n,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}p.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),o=a(86010);const n={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(n.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),o=a(67294),n=a(86010),l=a(12466),p=a(56697),u=a(91980),s=a(67392),d=a(50012);function m(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:o}}=e;return{value:t,label:a,attributes:r,default:o}}))}function c(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function i(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,p.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(n),(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=c(e),[l,p]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!i({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[u,s]=h({queryString:a,groupId:r}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,d.Nk)(a);return[r,(0,o.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),g=(()=>{const e=u??m;return i({value:e,tabValues:n})?e:null})();(0,o.useLayoutEffect)((()=>{g&&p(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!i({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);p(e),s(e),k(e)}),[s,k,n]),tabValues:n}}var g=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:p,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),r=s[a].value;r!==p&&(m(t),u(r))},i=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>d.push(e),onKeyDown:i,onClick:c},l,{className:(0,n.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":p===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=k(e);return o.createElement("div",{className:(0,n.Z)("tabs-container",b.tabList)},o.createElement(f,(0,r.Z)({},e,t)),o.createElement(N,(0,r.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return o.createElement(v,(0,r.Z)({key:String(t)},e))}},96406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>c});var r=a(87462),o=(a(67294),a(3905)),n=a(37884),l=a(74866),p=a(85162);const u={},s="spo group member add",d={unversionedId:"cmd/spo/group/group-member-add",id:"cmd/spo/group/group-member-add",title:"spo group member add",description:"Add members to a SharePoint Group",source:"@site/docs/cmd/spo/group/group-member-add.mdx",sourceDirName:"cmd/spo/group",slug:"/cmd/spo/group/group-member-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-member-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/group/group-member-add.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo group list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-list"},next:{title:"spo group member list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-member-list"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],i={toc:c},h="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-group-member-add"},"spo group member add"),(0,o.kt)("p",null,"Add members to a SharePoint Group"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group member add [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"URL of the site where the SharePoint group is available")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--groupId [groupId]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Id of the SharePoint Group to which the user needs to be added, specify either ",(0,o.kt)("code",{parentName:"p"},"groupId")," or ",(0,o.kt)("code",{parentName:"p"},"groupName"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--groupName [groupName]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Name of the SharePoint Group to which the user needs to be added, specify either ",(0,o.kt)("code",{parentName:"p"},"groupId")," or ",(0,o.kt)("code",{parentName:"p"},"groupName"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--userName [userName]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"User's UPN (user principal name, eg. megan.bowen@contoso.com). If multiple users need to be added, they have to be comma-separated (e.g. megan.bowen@contoso.com,alex.wilber@contoso.com). Specify either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"email"),", ",(0,o.kt)("code",{parentName:"p"},"aadGroupId")," or ",(0,o.kt)("code",{parentName:"p"},"aadGroupName"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--email [email]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"User's email (eg. megan.bowen@contoso.com). If multiple users need to be added, they have to be comma-separated (e.g. megan.bowen@contoso.com,alex.wilber@contoso.com). Specify either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"email"),", ",(0,o.kt)("code",{parentName:"p"},"aadGroupId")," or ",(0,o.kt)("code",{parentName:"p"},"aadGroupName"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--userId [userId]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The user Id of the user to add as a member. (Id of the site user, for example: 14) If multiple users need to be added, the Ids have to be comma-separated. Specify either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"email"),", ",(0,o.kt)("code",{parentName:"p"},"aadGroupId")," or ",(0,o.kt)("code",{parentName:"p"},"aadGroupName"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--aadGroupId [aadGroupId]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The object Id of the Azure AD group to add as a member. If multiple groups need to be added, the Ids have to be comma-separated. Specify either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"email"),", ",(0,o.kt)("code",{parentName:"p"},"aadGroupId")," or ",(0,o.kt)("code",{parentName:"p"},"aadGroupName"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--aadGroupName [aadGroupName]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The name of the Azure AD group to add as a member. Specify either ",(0,o.kt)("code",{parentName:"p"},"userId"),", ",(0,o.kt)("code",{parentName:"p"},"userName"),", ",(0,o.kt)("code",{parentName:"p"},"email"),", ",(0,o.kt)("code",{parentName:"p"},"aadGroupId")," or ",(0,o.kt)("code",{parentName:"p"},"aadGroupName")))),(0,o.kt)(n.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"aadGroupId")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"aadGroupName")," options you can specify multiple values by separating them with a comma. If one of the specified entries is not valid, the command will fail with an error message showing the list of invalid values."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Add a user with the userName parameter to a SharePoint group with the groupId parameter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupId 5 --userName "Alex.Wilber@contoso.com"\n')),(0,o.kt)("p",null,"Add multiple users with the userName parameter to a SharePoint group with the groupId parameter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupId 5 --userName "Alex.Wilber@contoso.com, Adele.Vance@contoso.com"\n')),(0,o.kt)("p",null,"Add a user with the email parameter to a SharePoint group with the groupName parameter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupName "Contoso Site Owners" --email "Alex.Wilber@contoso.com"\n')),(0,o.kt)("p",null,"Add multiple users with the email parameter to a SharePoint group with the groupName parameter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupName "Contoso Site Owners" --email "Alex.Wilber@contoso.com, Adele.Vance@contoso.com"\n')),(0,o.kt)("p",null,"Add a user with the userId parameter to a SharePoint group with the groupId parameter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupId 5 --userId 5\n")),(0,o.kt)("p",null,"Add multiple users with the userId parameter to a SharePoint group with the groupId parameter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupId 5 --userId "5,12"\n')),(0,o.kt)("p",null,"Add multiple users with the aadUserId parameter to a SharePoint group with the groupId parameter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupId 5 --aadUserId "56ca9023-3449-4e98-a96a-69e81a6f4983,a96c1755-8aec-4f4d-955f-08504510dc56"\n')),(0,o.kt)("p",null,"Add multiple users with the aadUserName parameter to a SharePoint group with the groupId parameter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group member add --webUrl https://contoso.sharepoint.com/sites/SiteA --groupId 5 --aadUserName "Azure group one, Azure group two"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "AllowedRoles": [\n      0\n    ],\n    "CurrentRole": 0,\n    "DisplayName": "John Doe",\n    "Email": "john.doe@contoso.onmicrosoft.com",\n    "InvitationLink": null,\n    "IsUserKnown": true,\n    "Message": null,\n    "Status": true,\n    "User": "i:0#.f|membership|john.doe@contoso.onmicrosoft.com"\n  }\n]\n'))),(0,o.kt)(p.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"DisplayName  Email\n-----------  ---------------------------------\nJohn Doe     john.doe@contoso.onmicrosoft.com\n"))),(0,o.kt)(p.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"DisplayName,Email\nJohn Doe,john.doe@contoso.onmicrosoft.com\n"))),(0,o.kt)(p.Z,{value:"md",label:"Markdown",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'# spo group member add --webUrl "https://contoso.sharepoint.com" --groupId "5" --aadGroupId "f2fb2f10-cfd2-4054-8ffd-64533657a5ab"\n\nDate: 13/2/2023\n\n## All Company Members\n\nProperty | Value\n---------|-------\nAllowedRoles | [0]\nCurrentRole | 0\nDisplayName | All Company Members\nEmail | allcompany@contoso.onmicrosoft.com\nInvitationLink | null\nIsUserKnown | true\nMessage | null\nStatus | true\nUser | c:0o.c\\|federateddirectoryclaimprovider\\|f2fb2f10-cfd2-4054-8ffd-64533657a5ab\n')))))}k.isMDXComponent=!0}}]);