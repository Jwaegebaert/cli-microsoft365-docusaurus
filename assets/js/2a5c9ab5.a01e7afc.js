"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[52985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,h=s["".concat(c,".").concat(u)]||s[u]||i[u]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m[s]="string"==typeof e?e:r,l[1]=m;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]},l="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}m.isMDXComponent=!0},91204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(37884);const l={},m="teams channel remove",c={unversionedId:"cmd/teams/channel/channel-remove",id:"cmd/teams/channel/channel-remove",title:"teams channel remove",description:"Removes the specified channel in the Microsoft Teams team",source:"@site/docs/cmd/teams/channel/channel-remove.mdx",sourceDirName:"cmd/teams/channel",slug:"/cmd/teams/channel/channel-remove",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/channel/channel-remove.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"teams channel member set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-member-set"},next:{title:"teams channel set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/channel/channel-set"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],s={toc:d},i="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-channel-remove"},"teams channel remove"),(0,r.kt)("p",null,"Removes the specified channel in the Microsoft Teams team"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel remove [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--teamId [teamId]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the team to which the channel to remove belongs. Specify either ",(0,r.kt)("code",{parentName:"p"},"teamId")," or ",(0,r.kt)("code",{parentName:"p"},"teamName")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--teamName [teamName]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The display name of the team to which the channel to remove belongs. Specify either ",(0,r.kt)("code",{parentName:"p"},"teamId")," or ",(0,r.kt)("code",{parentName:"p"},"teamName")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the channel to remove. Specify ",(0,r.kt)("code",{parentName:"p"},"id")," or ",(0,r.kt)("code",{parentName:"p"},"name")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The name of the channel to remove. Specify ",(0,r.kt)("code",{parentName:"p"},"id")," or ",(0,r.kt)("code",{parentName:"p"},"name")," but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--confirm"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Don't prompt for confirmation."))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"When deleted, Microsoft Teams channels are moved to a recycle bin and can be restored within 30 days. After that time, they are permanently deleted."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Remove the specified Microsoft Teams channel by Id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel remove --id 19:f3dcbb1674574677abcae89cb626f1e6@thread.skype --teamId d66b8110-fcad-49e8-8159-0d488ddb7656\n")),(0,r.kt)("p",null,"Remove the specified Microsoft Teams channel by Id without confirmation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel remove --id 19:f3dcbb1674574677abcae89cb626f1e6@thread.skype --teamId d66b8110-fcad-49e8-8159-0d488ddb7656 --confirm\n")),(0,r.kt)("p",null,"Remove the specified Microsoft Teams channel by Name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel remove --name 'name' --teamName \"Team Name\"\n")),(0,r.kt)("p",null,"Remove the specified Microsoft Teams channel by Name without confirmation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams channel remove --name 'name' --teamName \"Team Name\" --confirm \n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"directory resource type (deleted items): ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/resources/directory?view=graph-rest-1.0"},"https://docs.microsoft.com/en-us/graph/api/resources/directory?view=graph-rest-1.0"))))}u.isMDXComponent=!0}}]);