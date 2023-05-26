"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[56688],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),i=d(a),u=r,f=i["".concat(m,".").concat(u)]||i[u]||c[u]||s;return a?n.createElement(f,o(o({ref:t},l),{},{components:a})):n.createElement(f,o({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[i]="string"==typeof e?e:r,o[1]=p;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={toc:[]},o="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}p.isMDXComponent=!0},59203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var n=a(87462),r=(a(67294),a(3905)),s=a(26054);const o={},p="teams funsettings set",m={unversionedId:"cmd/teams/funsettings/funsettings-set",id:"cmd/teams/funsettings/funsettings-set",title:"teams funsettings set",description:"Updates fun settings of a Microsoft Teams team",source:"@site/docs/cmd/teams/funsettings/funsettings-set.mdx",sourceDirName:"cmd/teams/funsettings",slug:"/cmd/teams/funsettings/funsettings-set",permalink:"/cli-microsoft365-docusaurus/cmd/teams/funsettings/funsettings-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/funsettings/funsettings-set.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams funsettings list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/funsettings/funsettings-list"},next:{title:"teams guestsettings list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/guestsettings/guestsettings-list"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],i={toc:l},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-funsettings-set"},"teams funsettings set"),(0,r.kt)("p",null,"Updates fun settings of a Microsoft Teams team"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams funsettings set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-i, --teamId <teamId>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"The ID of the Teams team for which to update settings")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--allowGiphy [allowGiphy]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Set to ",(0,r.kt)("code",{parentName:"p"},"true")," to allow giphy and to ",(0,r.kt)("code",{parentName:"p"},"false")," to disable it")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--giphyContentRating [giphyContentRating]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Settings to set content rating for giphy. Allowed values ",(0,r.kt)("code",{parentName:"p"},"Strict,Moderate"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--allowStickersAndMemes [allowStickersAndMemes]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Set to ",(0,r.kt)("code",{parentName:"p"},"true")," to allow stickers and memes and to ",(0,r.kt)("code",{parentName:"p"},"false")," to disable them")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--allowCustomMemes [allowCustomMemes]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Set to ",(0,r.kt)("code",{parentName:"p"},"true")," to allow custom memes and to ",(0,r.kt)("code",{parentName:"p"},"false")," to disable them"))),(0,r.kt)(s.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Allow giphy usage within a given Microsoft Teams team, setting the content rating for giphy to Moderate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams funsettings set --teamId 83cece1e-938d-44a1-8b86-918cf6151957 --allowGiphy true --giphyContentRating Moderate\n")),(0,r.kt)("p",null,"Disable usage of giphy within a given Microsoft Teams team"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams funsettings set --teamId 83cece1e-938d-44a1-8b86-918cf6151957 --allowGiphy false\n")),(0,r.kt)("p",null,"Allow usage of stickers and memes within a given Microsoft Teams team"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams funsettings set --teamId 83cece1e-938d-44a1-8b86-918cf6151957 --allowStickersAndMemes true\n")),(0,r.kt)("p",null,"Disable usage custom memes within a given Microsoft Teams team"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams funsettings set --teamId 83cece1e-938d-44a1-8b86-918cf6151957 --allowCustomMemes false\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);