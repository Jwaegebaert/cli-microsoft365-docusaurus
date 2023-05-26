"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[26526],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>b});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),i=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=i(e.components);return n.createElement(d.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=i(t),u=o,b=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return t?n.createElement(b,s(s({ref:a},l),{},{components:t})):n.createElement(b,s({ref:a},l))}));function b(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=u;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=e,p[c]="string"==typeof e?e:o,s[1]=p;for(var i=2;i<r;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),o=t(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,s),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>g});var n=t(87462),o=t(67294),r=t(86010),s=t(12466),p=t(56697),d=t(91980),i=t(67392),l=t(50012);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:o}}=e;return{value:a,label:t,attributes:n,default:o}}))}function m(e){const{values:a,children:t}=e;return(0,o.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,i.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function u(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const n=(0,p.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,d._X)(r),(0,o.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=m(e),[s,p]=(0,o.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[d,i]=b({queryString:t,groupId:n}),[c,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,l.Nk)(t);return[n,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),h=(()=>{const e=d??c;return u({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{h&&p(h)}),[h]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);p(e),i(e),f(e)}),[i,f,r]),tabValues:r}}var h=t(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:t,selectedValue:p,selectValue:d,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const a=e.currentTarget,t=l.indexOf(a),n=i[t].value;n!==p&&(c(a),d(n))},u=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;a=l[t]??l[l.length-1];break}}a?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a)},i.map((e=>{let{value:a,label:t,attributes:s}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:p===a?0:-1,"aria-selected":p===a,key:a,ref:e=>l.push(e),onKeyDown:u,onClick:m},s,{className:(0,r.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":p===a})}),t??a)})))}function k(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function w(e){const a=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},o.createElement(v,(0,n.Z)({},e,a)),o.createElement(k,(0,n.Z)({},e,a)))}function g(e){const a=(0,h.Z)();return o.createElement(w,(0,n.Z)({key:String(a)},e))}},26054:(e,a,t)=>{t.d(a,{ZP:()=>p});var n=t(87462),o=(t(67294),t(3905));const r={toc:[]},s="wrapper";function p(e){let{components:a,...t}=e;return(0,o.kt)(s,(0,n.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",{parentName:"p"},"options"),", ",(0,o.kt)("code",{parentName:"p"},"examples"),", ",(0,o.kt)("code",{parentName:"p"},"remarks"),", ",(0,o.kt)("code",{parentName:"p"},"response"),", ",(0,o.kt)("code",{parentName:"p"},"full"),". Default is ",(0,o.kt)("code",{parentName:"p"},"full"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--query [query]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,o.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output type. ",(0,o.kt)("code",{parentName:"p"},"json,text,csv,md"),". Default ",(0,o.kt)("code",{parentName:"p"},"json"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--verbose"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with verbose logging")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--debug"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with debug logging"))))}p.isMDXComponent=!0},74460:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>m});var n=t(87462),o=(t(67294),t(3905)),r=t(26054),s=t(74866),p=t(85162);const d={},i="pa app list",l={unversionedId:"cmd/pa/app/app-list",id:"cmd/pa/app/app-list",title:"pa app list",description:"Lists all Power Apps apps",source:"@site/docs/cmd/pa/app/app-list.mdx",sourceDirName:"cmd/pa/app",slug:"/cmd/pa/app/app-list",permalink:"/cli-microsoft365-docusaurus/cmd/pa/app/app-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pa/app/app-list.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pa app get",permalink:"/cli-microsoft365-docusaurus/cmd/pa/app/app-get"},next:{title:"pa app remove",permalink:"/cli-microsoft365-docusaurus/cmd/pa/app/app-remove"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:m},b="wrapper";function f(e){let{components:a,...t}=e;return(0,o.kt)(b,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pa-app-list"},"pa app list"),(0,o.kt)("p",null,"Lists all Power Apps apps"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pa app list [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-e, --environment [environment]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The name of the environment for which to retrieve available apps")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--asAdmin"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Set, to list all Power Apps as admin. Otherwise will return only your own apps"))),(0,o.kt)(r.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This command is based on an API that is currently in preview and is subject to change once the API reaches general availability.")),(0,o.kt)("p",null,"If the environment with the name you specified doesn't exist, you will get the ",(0,o.kt)("inlineCode",{parentName:"p"},"Access to the environment 'xyz' is denied.")," error."),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"app list")," command returns only your apps. To list all apps, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"asAdmin")," option and make sure to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," option. You cannot specify only one of the options, when specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," option the ",(0,o.kt)("inlineCode",{parentName:"p"},"asAdmin")," option has to be present as well."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"List all your apps"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa app list\n")),(0,o.kt)("p",null,"List all apps in a given environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pa app list --environment Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --asAdmin\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name":"37ea6004-f07b-46ca-8ef3-a256b67b4dbb",\n    "id":"/providers/Microsoft.PowerApps/apps/37ea6004-f07b-46ca-8ef3-a256b67b4dbb",\n    "type":"Microsoft.PowerApps/apps",\n    "tags":{\n      "primaryDeviceWidth":"1366",\n      "primaryDeviceHeight":"768",\n      "supportsPortrait":"true",\n      "supportsLandscape":"true",\n      "primaryFormFactor":"Tablet",\n      "publisherVersion":"3.22102.32",\n      "minimumRequiredApiVersion":"2.2.0",\n      "hasComponent":"false",\n      "hasUnlockedComponent":"false",\n      "isUnifiedRootApp":"false",\n      "sienaVersion":"20221025T212812Z-3.22102.32.0"\n    },\n    "properties":{\n      "appVersion":"2022-10-25T21:28:12Z",\n      "lastDraftVersion":"2022-10-25T21:28:12Z",\n      "lifeCycleId":"Published",\n      "status":"Ready",\n      "createdByClientVersion":{\n        "major":3,\n        "minor":22102,\n        "build":32,\n        "revision":0,\n        "majorRevision":0,\n        "minorRevision":0\n      },\n      "minClientVersion":{\n        "major":3,\n        "minor":22102,\n        "build":32,\n        "revision":0,\n        "majorRevision":0,\n        "minorRevision":0\n      },\n      "owner":{\n        "id":"fe36f75e-c103-410b-a18a-2bf6df06ac3a",\n        "displayName":"contoso",\n        "email":"user@contoso.onmicrosoft.com",\n        "type":"User",\n        "tenantId":"e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n        "userPrincipalName":"user@contoso.onmicrosoft.com"\n      },\n      "createdBy":{\n        "id":"fe36f75e-c103-410b-a18a-2bf6df06ac3a",\n        "displayName":"contoso",\n        "email":"user@contoso.onmicrosoft.com",\n        "type":"User",\n        "tenantId":"e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n        "userPrincipalName":"user@contoso.onmicrosoft.com"\n      },\n      "lastModifiedBy":{\n        "id":"fe36f75e-c103-410b-a18a-2bf6df06ac3a",\n        "displayName":"contoso",\n        "email":"user@contoso.onmicrosoft.com",\n        "type":"User",\n        "tenantId":"e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n        "userPrincipalName":"user@contoso.onmicrosoft.com"\n      },\n      "lastPublishedBy":{\n        "id":"fe36f75e-c103-410b-a18a-2bf6df06ac3a",\n        "displayName":"contoso",\n        "email":"user@contoso.onmicrosoft.com",\n        "type":"User",\n        "tenantId":"e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n        "userPrincipalName":"user@contoso.onmicrosoft.com"\n      },\n      "backgroundColor":"RGBA(0,176,240,1)",\n      "backgroundImageUri":"https://pafeblobprodam.blob.core.windows.net:443/20221025t000000zddd642012aba4021a4886c8e21a3e1cb/logoSmallFile?sv=2018-03-28&sr=c&sig=cOkbwChyhCO%2BEJpqMDRxrXaxRoPD1TbTy%2B%2BFkdJEOjI%3D&se=2022-12-24T10%3A06%3A27Z&sp=rl",\n      "teamsColorIconUrl":"https://pafeblobprodam.blob.core.windows.net:443/20221025t000000ze297221f3dc643ed9686b72b22d9a414/teamscoloricon.png?sv=2018-03-28&sr=c&sig=Fhk8E0LO4Lw0mHvNawCF5Ld7GHzPHo9l7RxvZbeZY48%3D&se=2022-12-24T10%3A06%3A27Z&sp=rl",\n      "teamsOutlineIconUrl":"https://pafeblobprodam.blob.core.windows.net:443/20221025t000000ze297221f3dc643ed9686b72b22d9a414/teamsoutlineicon.png?sv=2018-03-28&sr=c&sig=Fhk8E0LO4Lw0mHvNawCF5Ld7GHzPHo9l7RxvZbeZY48%3D&se=2022-12-24T10%3A06%3A27Z&sp=rl",\n    "displayName":"Test application",\n      "description":"",\n      "commitMessage":"",\n      "appUris":{\n        "documentUri":{\n          "value":"https://pafeblobprodam.blob.core.windows.net:443/20221025t000000zddd642012aba4021a4886c8e21a3e1cb/document.msapp?sv=2018-03-28&sr=c&sig=laSGdpZL03POyAABXvdsyxv8YDDB8JPZIBccztIe39Q%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl",\n          "readonlyValue":"https://pafeblobprodam-secondary.blob.core.windows.net/20221025t000000zddd642012aba4021a4886c8e21a3e1cb/document.msapp?sv=2018-03-28&sr=c&sig=laSGdpZL03POyAABXvdsyxv8YDDB8JPZIBccztIe39Q%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl"\n        },\n        "imageUris":[],\n        "additionalUris":[]\n      },\n      "createdTime":"2022-10-25T21:28:12.7171469Z",\n      "lastModifiedTime":"2022-10-25T21:28:12.7456297Z",\n      "lastPublishTime":"2022-10-25T21:28:12Z",\n      "sharedGroupsCount":0,\n      "sharedUsersCount":0,\n      "appOpenProtocolUri":"ms-apps:///providers/Microsoft.PowerApps/apps/37ea6004-f07b-46ca-8ef3-a256b67b4dbb",\n      "appOpenUri":"https://apps.powerapps.com/play/e/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/a/37ea6004-f07b-46ca-8ef3-a256b67b4dbb?tenantId=e1dd4023-a656-480a-8a0e-c1b1eec51e1d&hint=296b0ef7-b4d0-4124-b835-f9c220a1f4bc",\n      "appPlayUri":"https://apps.powerapps.com/play/e/default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/a/37ea6004-f07b-46ca-8ef3-a256b67b4dbb?tenantId=e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n      "appPlayEmbeddedUri":"https://apps.powerapps.com/play/e/default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/a/37ea6004-f07b-46ca-8ef3-a256b67b4dbb?tenantId=e1dd4023-a656-480a-8a0e-c1b1eec51e1d&hint=296b0ef7-b4d0-4124-b835-f9c220a1f4bc&telemetryLocation=eu",\n      "appPlayTeamsUri":"https://apps.powerapps.com/play/e/default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/a/37ea6004-f07b-46ca-8ef3-a256b67b4dbb?tenantId=e1dd4023-a656-480a-8a0e-c1b1eec51e1d&source=teamstab&hint=296b0ef7-b4d0-4124-b835-f9c220a1f4bc&telemetryLocation=eu&locale={locale}&channelId={channelId}&channelType={channelType}&chatId={chatId}&groupId={groupId}&hostClientType={hostClientType}&isFullScreen={isFullScreen}&entityId={entityId}&subEntityId={subEntityId}&teamId={teamId}&teamType={teamType}&theme={theme}&userTeamRole={userTeamRole}",\n      "userAppMetadata":{\n        "favorite":"NotSpecified",\n        "includeInAppsList":true\n      },\n      "isFeaturedApp":false,\n      "bypassConsent":false,\n      "isHeroApp":false,\n      "environment":{\n        "id":"/providers/Microsoft.PowerApps/environments/default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d",\n        "name":"default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d"\n      },\n      "appPackageDetails":{\n        "playerPackage":{\n          "value":"https://pafeblobprodam.blob.core.windows.net:443/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/player.msappk?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl",\n          "readonlyValue":"https://pafeblobprodam-secondary.blob.core.windows.net/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/player.msappk?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl"\n        },\n        "webPackage":{\n          "value":"https://pafeblobprodam.blob.core.windows.net:443/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/web/index.web.html?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl",\n          "readonlyValue":"https://pafeblobprodam-secondary.blob.core.windows.net/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/web/index.web.html?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl"\n        },\n        "unauthenticatedWebPackage":{\n          "value":"https://pafeblobprodam.blob.core.windows.net/alt20221025t000000z529d41282a634bf6b94383dde5a8d52c/20221025T212824Z/index.web.html"\n        },\n        "documentServerVersion":{\n          "major":3,\n          "minor":22102,\n          "build":33,\n          "revision":0,\n          "majorRevision":0,\n          "minorRevision":0\n        },\n        "appPackageResourcesKind":"Split",\n        "packagePropertiesJson":"{\\"cdnUrl\\":\\"https://content.powerapps.com/resource/app\\",\\"preLoadIdx\\":\\"https://content.powerapps.com/resource/app/kdfj31mdao7t9/preloadindex.web.html\\",\\"id\\":\\"638023301009567627\\",\\"v\\":2.1}",\n        "id":"20221025t000000zac5237a2672a4782ad5a7d71040c032bhttps://pafeblobprodam.blob.core.windows.net/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/web/index.web.html?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rlhttps://pafeblobprodam.blob.core.windows.net/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/player.msappk?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rlhttps://pafeblobprodam.blob.core.windows.net/alt20221025t000000z529d41282a634bf6b94383dde5a8d52c/20221025T212824Z/index.web.html"\n      },\n      "almMode":"Environment",\n      "performanceOptimizationEnabled":true,\n      "unauthenticatedWebPackageHint":"296b0ef7-b4d0-4124-b835-f9c220a1f4bc",\n      "canConsumeAppPass":true,\n      "enableModernRuntimeMode":false,\n      "executionRestrictions":{\n        "isTeamsOnly":false,\n        "dataLossPreventionEvaluationResult":{\n          "status":"Compliant",\n          "lastEvaluationDate":"2022-10-25T21:28:30.2281817Z",\n          "violations":[],\n          "violationsByPolicy":[],\n          "violationErrorMessage":"De app gebruikt de volgende connectors: ."\n        }\n      },\n      "appPlanClassification":"Standard",\n      "usesPremiumApi":false,\n      "usesOnlyGrandfatheredPremiumApis":true,\n      "usesCustomApi":false,\n      "usesOnPremiseGateway":false,\n      "usesPcfExternalServiceUsage":false,\n      "isCustomizable":true\n    },\n    "appLocation":"europe",\n    "appType":"ClassicCanvasApp",\n    "displayName":"PowerApps Application"\n  }\n]\n'))),(0,o.kt)(p.Z,{value:"Text",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"name                                 displayName\n------------------------------------ ---------------------\n37ea6004-f07b-46ca-8ef3-a256b67b4dbb PowerApps Application   \n"))),(0,o.kt)(p.Z,{value:"CSV",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},'name,displayName\n37ea6004-f07b-46ca-8ef3-a256b67b4dbb,"PowerApps Application"\n'))),(0,o.kt)(p.Z,{value:"Markdown",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'# pa app list\n\nDate: 9/1/2023\n\n## PowerApps Application (/providers/Microsoft.PowerApps/apps/37ea6004-f07b-46ca-8ef3-a256b67b4dbb)\n\nProperty | Value\n---------|-------\nname | 37ea6004-f07b-46ca-8ef3-a256b67b4dbb\nid | /providers/Microsoft.PowerApps/apps/37ea6004-f07b-46ca-8ef3-a256b67b4dbb\ntype | Microsoft.PowerApps/apps\ntags | {"primaryDeviceWidth":"1366","primaryDeviceHeight":"768","supportsPortrait":"true","supportsLandscape":"true","primaryFormFactor":"Tablet","publisherVersion":"3.22102.32","minimumRequiredApiVersion":"2.2.0","hasComponent":"false","hasUnlockedComponent":"false","isUnifiedRootApp":"false","sienaVersion":"20221025T212812Z-3.22102.32.0"}\nproperties | {"appVersion":"2022-10-25T21:28:12Z","lastDraftVersion":"2022-10-25T21:28:12Z","lifeCycleId":"Published","status":"Ready","createdByClientVersion":{"major":3,"minor":22102,"build":32,"revision":0,"majorRevision":0,"minorRevision":0},"minClientVersion":{"major":3,"minor":22102,"build":32,"revision":0,"majorRevision":0,"minorRevision":0},"owner":{"id":"fe36f75e-c103-410b-a18a-2bf6df06ac3a","displayName":"contoso","email":"user@contoso.onmicrosoft.com","type":"User","tenantId":"e1dd4023-a656-480a-8a0e-c1b1eec51e1d","userPrincipalName":"user@contoso.onmicrosoft.com"},"createdBy":{"id":"fe36f75e-c103-410b-a18a-2bf6df06ac3a","displayName":"contoso","email":"user@contoso.onmicrosoft.com","type":"User","tenantId":"e1dd4023-a656-480a-8a0e-c1b1eec51e1d","userPrincipalName":"user@contoso.onmicrosoft.com"},"lastModifiedBy":{"id":"fe36f75e-c103-410b-a18a-2bf6df06ac3a","displayName":"contoso","email":"user@contoso.onmicrosoft.com","type":"User","tenantId":"e1dd4023-a656-480a-8a0e-c1b1eec51e1d","userPrincipalName":"user@contoso.onmicrosoft.com"},"lastPublishedBy":{"id":"fe36f75e-c103-410b-a18a-2bf6df06ac3a","displayName":"contoso","email":"user@contoso.onmicrosoft.com","type":"User","tenantId":"e1dd4023-a656-480a-8a0e-c1b1eec51e1d","userPrincipalName":"user@contoso.onmicrosoft.com"},"backgroundColor":"RGBA(0,176,240,1)","backgroundImageUri":"https://pafeblobprodam.blob.core.windows.net:443/20221025t000000zddd642012aba4021a4886c8e21a3e1cb/logoSmallFile?sv=2018-03-28&sr=c&sig=cOkbwChyhCO%2BEJpqMDRxrXaxRoPD1TbTy%2B%2BFkdJEOjI%3D&se=2022-12-24T10%3A06%3A27Z&sp=rl","teamsColorIconUrl":"https://pafeblobprodam.blob.core.windows.net:443/20221025t000000ze297221f3dc643ed9686b72b22d9a414/teamscoloricon.png?sv=2018-03-28&sr=c&sig=Fhk8E0LO4Lw0mHvNawCF5Ld7GHzPHo9l7RxvZbeZY48%3D&se=2022-12-24T10%3A06%3A27Z&sp=rl","teamsOutlineIconUrl":"https://pafeblobprodam.blob.core.windows.net:443/20221025t000000ze297221f3dc643ed9686b72b22d9a414/teamsoutlineicon.png?sv=2018-03-28&sr=c&sig=Fhk8E0LO4Lw0mHvNawCF5Ld7GHzPHo9l7RxvZbeZY48%3D&se=2022-12-24T10%3A06%3A27Z&sp=rl","displayName":"Test application","description":"","commitMessage":"","appUris":{"documentUri":{"value":"https://pafeblobprodam.blob.core.windows.net:443/20221025t000000zddd642012aba4021a4886c8e21a3e1cb/document.msapp?sv=2018-03-28&sr=c&sig=laSGdpZL03POyAABXvdsyxv8YDDB8JPZIBccztIe39Q%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl","readonlyValue":"https://pafeblobprodam-secondary.blob.core.windows.net/20221025t000000zddd642012aba4021a4886c8e21a3e1cb/document.msapp?sv=2018-03-28&sr=c&sig=laSGdpZL03POyAABXvdsyxv8YDDB8JPZIBccztIe39Q%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl"},"imageUris":[],"additionalUris":[]},"createdTime":"2022-10-25T21:28:12.7171469Z","lastModifiedTime":"2022-10-25T21:28:12.7456297Z","lastPublishTime":"2022-10-25T21:28:12Z","sharedGroupsCount":0,"sharedUsersCount":0,"appOpenProtocolUri":"ms-apps:///providers/Microsoft.PowerApps/apps/37ea6004-f07b-46ca-8ef3-a256b67b4dbb","appOpenUri":"https://apps.powerapps.com/play/e/Default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/a/37ea6004-f07b-46ca-8ef3-a256b67b4dbb?tenantId=e1dd4023-a656-480a-8a0e-c1b1eec51e1d&hint=296b0ef7-b4d0-4124-b835-f9c220a1f4bc","appPlayUri":"https://apps.powerapps.com/play/e/default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/a/37ea6004-f07b-46ca-8ef3-a256b67b4dbb?tenantId=e1dd4023-a656-480a-8a0e-c1b1eec51e1d","appPlayEmbeddedUri":"https://apps.powerapps.com/play/e/default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/a/37ea6004-f07b-46ca-8ef3-a256b67b4dbb?tenantId=e1dd4023-a656-480a-8a0e-c1b1eec51e1d&hint=296b0ef7-b4d0-4124-b835-f9c220a1f4bc&telemetryLocation=eu","appPlayTeamsUri":"https://apps.powerapps.com/play/e/default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d/a/37ea6004-f07b-46ca-8ef3-a256b67b4dbb?tenantId=e1dd4023-a656-480a-8a0e-c1b1eec51e1d&source=teamstab&hint=296b0ef7-b4d0-4124-b835-f9c220a1f4bc&telemetryLocation=eu&locale={locale}&channelId={channelId}&channelType={channelType}&chatId={chatId}&groupId={groupId}&hostClientType={hostClientType}&isFullScreen={isFullScreen}&entityId={entityId}&subEntityId={subEntityId}&teamId={teamId}&teamType={teamType}&theme={theme}&userTeamRole={userTeamRole}","userAppMetadata":{"favorite":"NotSpecified","includeInAppsList":true},"isFeaturedApp":false,"bypassConsent":false,"isHeroApp":false,"environment":{"id":"/providers/Microsoft.PowerApps/environments/default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d","name":"default-e1dd4023-a656-480a-8a0e-c1b1eec51e1d"},"appPackageDetails":{"playerPackage":{"value":"https://pafeblobprodam.blob.core.windows.net:443/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/player.msappk?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl","readonlyValue":"https://pafeblobprodam-secondary.blob.core.windows.net/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/player.msappk?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl"},"webPackage":{"value":"https://pafeblobprodam.blob.core.windows.net:443/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/web/index.web.html?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl","readonlyValue":"https://pafeblobprodam-secondary.blob.core.windows.net/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/web/index.web.html?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rl"},"unauthenticatedWebPackage":{"value":"https://pafeblobprodam.blob.core.windows.net/alt20221025t000000z529d41282a634bf6b94383dde5a8d52c/20221025T212824Z/index.web.html"},"documentServerVersion":{"major":3,"minor":22102,"build":33,"revision":0,"majorRevision":0,"minorRevision":0},"appPackageResourcesKind":"Split","packagePropertiesJson":"{\\"cdnUrl\\":\\"https://content.powerapps.com/resource/app\\",\\"preLoadIdx\\":\\"https://content.powerapps.com/resource/app/kdfj31mdao7t9/preloadindex.web.html\\",\\"id\\":\\"638023301009567627\\",\\"v\\":2.1}","id":"20221025t000000zac5237a2672a4782ad5a7d71040c032bhttps://pafeblobprodam.blob.core.windows.net/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/web/index.web.html?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rlhttps://pafeblobprodam.blob.core.windows.net/20221025t000000zac5237a2672a4782ad5a7d71040c032b/5b38cd68-a930-4a14-be71-c622de887d1a/player.msappk?sv=2018-03-28&sr=c&sig=eztEkTd1pFaFEITA%2Bqqj2XCpxwgeujMC7FahMmEkujA%3D&se=2022-11-04T12%3A00%3A00Z&sp=rlhttps://pafeblobprodam.blob.core.windows.net/alt20221025t000000z529d41282a634bf6b94383dde5a8d52c/20221025T212824Z/index.web.html"},"almMode":"Environment","performanceOptimizationEnabled":true,"unauthenticatedWebPackageHint":"296b0ef7-b4d0-4124-b835-f9c220a1f4bc","canConsumeAppPass":true,"enableModernRuntimeMode":false,"executionRestrictions":{"isTeamsOnly":false,"dataLossPreventionEvaluationResult":{"status":"Compliant","lastEvaluationDate":"2022-10-25T21:28:30.2281817Z","violations":[],"violationsByPolicy":[],"violationErrorMessage":"De app gebruikt de volgende connectors: ."}},"appPlanClassification":"Standard","usesPremiumApi":false,"usesOnlyGrandfatheredPremiumApis":true,"usesCustomApi":false,"usesOnPremiseGateway":false,"usesPcfExternalServiceUsage":false,"isCustomizable":true}\nappLocation | europe\nappType | ClassicCanvasApp\ndisplayName | PowerApps Application\n')))))}f.isMDXComponent=!0}}]);