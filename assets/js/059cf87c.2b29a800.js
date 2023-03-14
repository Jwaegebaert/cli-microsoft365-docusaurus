"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[56688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=i(n),c=s,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[m]="string"==typeof e?e:s,o[1]=r;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),s=(n(67294),n(3905));const l={toc:[]},o="wrapper";function r(e){let{components:t,...n}=e;return(0,s.kt)(o,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("dl",null,(0,s.kt)("dt",null,(0,s.kt)("p",null,(0,s.kt)("code",null,"-h, --help [help]"))),(0,s.kt)("dd",null,(0,s.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,s.kt)("code",null,"options"),", ",(0,s.kt)("code",null,"examples"),", ",(0,s.kt)("code",null,"remarks"),", ",(0,s.kt)("code",null,"response"),", ",(0,s.kt)("code",null,"full"),". Default is ",(0,s.kt)("code",null,"full"),".")),(0,s.kt)("dt",null,(0,s.kt)("p",null,(0,s.kt)("code",null,"--query [query]"))),(0,s.kt)("dd",null,(0,s.kt)("p",null,"JMESPath query string. See ",(0,s.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,s.kt)("dt",null,(0,s.kt)("p",null,(0,s.kt)("code",null,"-o, --output [output]"))),(0,s.kt)("dd",null,(0,s.kt)("p",null,"Output type. ",(0,s.kt)("code",null,"json"),", ",(0,s.kt)("code",null,"text"),", ",(0,s.kt)("code",null,"csv"),", ",(0,s.kt)("code",null,"md"),". Default is ",(0,s.kt)("code",null,"json"),".")),(0,s.kt)("dt",null,(0,s.kt)("p",null,(0,s.kt)("code",null,"--verbose"))),(0,s.kt)("dd",null,(0,s.kt)("p",null,"Runs command with verbose logging.")),(0,s.kt)("dt",null,(0,s.kt)("p",null,(0,s.kt)("code",null,"--debug"))),(0,s.kt)("dd",null,(0,s.kt)("p",null,"Runs command with debug logging."))))}r.isMDXComponent=!0},59203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),s=(n(67294),n(3905)),l=n(37884);const o={},r="teams funsettings set",p={unversionedId:"cmd/teams/funsettings/funsettings-set",id:"cmd/teams/funsettings/funsettings-set",title:"teams funsettings set",description:"Updates fun settings of a Microsoft Teams team",source:"@site/docs/cmd/teams/funsettings/funsettings-set.mdx",sourceDirName:"cmd/teams/funsettings",slug:"/cmd/teams/funsettings/funsettings-set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/funsettings/funsettings-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/funsettings/funsettings-set.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"teams funsettings list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/funsettings/funsettings-list"},next:{title:"teams guestsettings list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/guestsettings/guestsettings-list"}},i={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"teams-funsettings-set"},"teams funsettings set"),(0,s.kt)("p",null,"Updates fun settings of a Microsoft Teams team"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams funsettings set [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("dl",null,(0,s.kt)("dt",{parentName:"dl"},(0,s.kt)("p",{parentName:"dt"},(0,s.kt)("code",{parentName:"p"},"-i, --teamId <teamId>"))),(0,s.kt)("dd",{parentName:"dl"},(0,s.kt)("p",{parentName:"dd"},"The ID of the Teams team for which to update settings")),(0,s.kt)("dt",{parentName:"dl"},(0,s.kt)("p",{parentName:"dt"},(0,s.kt)("code",{parentName:"p"},"--allowGiphy [allowGiphy]"))),(0,s.kt)("dd",{parentName:"dl"},(0,s.kt)("p",{parentName:"dd"},"Set to ",(0,s.kt)("code",{parentName:"p"},"true")," to allow giphy and to ",(0,s.kt)("code",{parentName:"p"},"false")," to disable it")),(0,s.kt)("dt",{parentName:"dl"},(0,s.kt)("p",{parentName:"dt"},(0,s.kt)("code",{parentName:"p"},"--giphyContentRating [giphyContentRating]"))),(0,s.kt)("dd",{parentName:"dl"},(0,s.kt)("p",{parentName:"dd"},"Settings to set content rating for giphy. Allowed values ",(0,s.kt)("code",{parentName:"p"},"Strict,Moderate"))),(0,s.kt)("dt",{parentName:"dl"},(0,s.kt)("p",{parentName:"dt"},(0,s.kt)("code",{parentName:"p"},"--allowStickersAndMemes [allowStickersAndMemes]"))),(0,s.kt)("dd",{parentName:"dl"},(0,s.kt)("p",{parentName:"dd"},"Set to ",(0,s.kt)("code",{parentName:"p"},"true")," to allow stickers and memes and to ",(0,s.kt)("code",{parentName:"p"},"false")," to disable them")),(0,s.kt)("dt",{parentName:"dl"},(0,s.kt)("p",{parentName:"dt"},(0,s.kt)("code",{parentName:"p"},"--allowCustomMemes [allowCustomMemes]"))),(0,s.kt)("dd",{parentName:"dl"},(0,s.kt)("p",{parentName:"dd"},"Set to ",(0,s.kt)("code",{parentName:"p"},"true")," to allow custom memes and to ",(0,s.kt)("code",{parentName:"p"},"false")," to disable them"))),(0,s.kt)(l.ZP,{mdxType:"Global"}),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Allow giphy usage within a given Microsoft Teams team, setting the content rating for giphy to Moderate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams funsettings set --teamId 83cece1e-938d-44a1-8b86-918cf6151957 --allowGiphy true --giphyContentRating Moderate\n")),(0,s.kt)("p",null,"Disable usage of giphy within a given Microsoft Teams team"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams funsettings set --teamId 83cece1e-938d-44a1-8b86-918cf6151957 --allowGiphy false\n")),(0,s.kt)("p",null,"Allow usage of stickers and memes within a given Microsoft Teams team"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams funsettings set --teamId 83cece1e-938d-44a1-8b86-918cf6151957 --allowStickersAndMemes true\n")),(0,s.kt)("p",null,"Disable usage custom memes within a given Microsoft Teams team"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams funsettings set --teamId 83cece1e-938d-44a1-8b86-918cf6151957 --allowCustomMemes false\n")),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("p",null,"The command won't return a response on success."))}c.isMDXComponent=!0}}]);