"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[89204],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),l=s(a),u=r,h=l["".concat(i,".").concat(u)]||l[u]||c[u]||o;return a?n.createElement(h,p(p({ref:t},d),{},{components:a})):n.createElement(h,p({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=u;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[l]="string"==typeof e?e:r,p[1]=m;for(var s=2;s<o;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>m});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json"),", ",(0,r.kt)("code",{parentName:"p"},"text"),", ",(0,r.kt)("code",{parentName:"p"},"csv"),", ",(0,r.kt)("code",{parentName:"p"},"md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}m.isMDXComponent=!0},31648:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(26054);const p={},m="spo theme set",i={unversionedId:"cmd/spo/theme/theme-set",id:"cmd/spo/theme/theme-set",title:"spo theme set",description:"Add or update a theme",source:"@site/docs/cmd/spo/theme/theme-set.mdx",sourceDirName:"cmd/spo/theme",slug:"/cmd/spo/theme/theme-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/theme/theme-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/theme/theme-set.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo theme remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/theme/theme-remove"},next:{title:"spo user ensure",permalink:"/cli-microsoft365-docusaurus/cmd/spo/user/user-ensure"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],l={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-theme-set"},"spo theme set"),(0,r.kt)("p",null,"Add or update a theme"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo theme set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-n, --name <name>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Name of the theme to add or update")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-t, --theme <theme>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Theme JSON contents")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--isInverted"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Set to specify that the theme is inverted"))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"To prevent the accidental creation of invalid themes the CLI for Microsoft 365 implements a set of checks. These checks are executed against the provided json file. A valid theme JSON file is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "themePrimary": "#d81e05",\n  "themeLighterAlt": "#fdf5f4",\n  "themeLighter": "#f9d6d2",\n  "themeLight": "#f4b4ac",\n  "themeTertiary": "#e87060",\n  "themeSecondary": "#dd351e",\n  "themeDarkAlt": "#c31a04",\n  "themeDark": "#a51603",\n  "themeDarker": "#791002",\n  "neutralLighterAlt": "#eeeeee",\n  "neutralLighter": "#f5f5f5",\n  "neutralLight": "#e1e1e1",\n  "neutralQuaternaryAlt": "#d1d1d1",\n  "neutralQuaternary": "#c8c8c8",\n  "neutralTertiaryAlt": "#c0c0c0",\n  "neutralTertiary": "#c2c2c2",\n  "neutralSecondary": "#858585",\n  "neutralPrimaryAlt": "#4b4b4b",\n  "neutralPrimary": "#333333",\n  "neutralDark": "#272727",\n  "black": "#1d1d1d",\n  "white": "#f5f5f5"\n}\n')),(0,r.kt)("p",null,"When executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"m365 spo theme set")," command the following checks are executed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Validate if the provided theme is a valid ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON")," string."),(0,r.kt)("li",{parentName:"ul"},"Validate if the provided theme, once deserialized, contains all properties of the sample above."),(0,r.kt)("li",{parentName:"ul"},"Validate if the provided theme, once deserialized, contains only the properties of the sample above."),(0,r.kt)("li",{parentName:"ul"},"Validate if each of the properties contains a valid hex color value prefixed with a ",(0,r.kt)("inlineCode",{parentName:"li"},"#"),".")),(0,r.kt)("p",null,"If any of these checks fails you are presented with a ",(0,r.kt)("inlineCode",{parentName:"p"},"The specified theme is not valid")," error."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To use this command you have to have permissions to access the tenant admin site.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Add or update a theme from a theme JSON file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo theme set --name Contoso-Blue --theme @/Users/rjesh/themes/contoso-blue.json\n")),(0,r.kt)("p",null,"Add or update an inverted theme from a theme JSON file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo theme set --name Contoso-Blue --theme @/Users/rjesh/themes/contoso-blue.json --isInverted\n")),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SharePoint site theming: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview"},"https://docs.microsoft.com/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview")),(0,r.kt)("li",{parentName:"ul"},"Theme Generator: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/themedesigner"},"https://aka.ms/themedesigner"))))}u.isMDXComponent=!0}}]);