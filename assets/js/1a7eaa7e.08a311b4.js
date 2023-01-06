"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),h=a,u=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},97584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={},i="spo theme set",s={unversionedId:"cmd/spo/theme/theme-set",id:"cmd/spo/theme/theme-set",title:"spo theme set",description:"Add or update a theme",source:"@site/docs/cmd/spo/theme/theme-set.md",sourceDirName:"cmd/spo/theme",slug:"/cmd/spo/theme/theme-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/theme/theme-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/theme/theme-set.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo theme remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/theme/theme-remove"},next:{title:"spo user get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/user/user-get"}},l={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-theme-set"},"spo theme set"),(0,a.kt)("p",null,"Add or update a theme"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo theme set [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: Name of the theme to add or update"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-t, --theme <theme>"),"\n: Theme JSON contents"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--isInverted"),"\n: Set to specify that the theme is inverted"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"To prevent the accidental creation of invalid themes the CLI for Microsoft 365 implements a set of checks. These checks are executed against the provided json file. A valid theme JSON file is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "themePrimary": "#d81e05",\n  "themeLighterAlt": "#fdf5f4",\n  "themeLighter": "#f9d6d2",\n  "themeLight": "#f4b4ac",\n  "themeTertiary": "#e87060",\n  "themeSecondary": "#dd351e",\n  "themeDarkAlt": "#c31a04",\n  "themeDark": "#a51603",\n  "themeDarker": "#791002",\n  "neutralLighterAlt": "#eeeeee",\n  "neutralLighter": "#f5f5f5",\n  "neutralLight": "#e1e1e1",\n  "neutralQuaternaryAlt": "#d1d1d1",\n  "neutralQuaternary": "#c8c8c8",\n  "neutralTertiaryAlt": "#c0c0c0",\n  "neutralTertiary": "#c2c2c2",\n  "neutralSecondary": "#858585",\n  "neutralPrimaryAlt": "#4b4b4b",\n  "neutralPrimary": "#333333",\n  "neutralDark": "#272727",\n  "black": "#1d1d1d",\n  "white": "#f5f5f5"\n}\n')),(0,a.kt)("p",null,"When executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 spo theme set")," command the following checks are executed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Validate if the provided theme is a valid ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON")," string."),(0,a.kt)("li",{parentName:"ul"},"Validate if the provided theme, once deserialized, contains all properties of the sample above."),(0,a.kt)("li",{parentName:"ul"},"Validate if the provided theme, once deserialized, contains only the properties of the sample above."),(0,a.kt)("li",{parentName:"ul"},"Validate if each of the properties contains a valid hex color value prefixed with a ",(0,a.kt)("inlineCode",{parentName:"li"},"#"),".")),(0,a.kt)("p",null,"If any of these checks fails you are presented with a ",(0,a.kt)("inlineCode",{parentName:"p"},"The specified theme is not valid")," error."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Add or update a theme from a theme JSON file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo theme set --name Contoso-Blue --theme @/Users/rjesh/themes/contoso-blue.json\n")),(0,a.kt)("p",null,"Add or update an inverted theme from a theme JSON file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo theme set --name Contoso-Blue --theme @/Users/rjesh/themes/contoso-blue.json --isInverted\n")),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SharePoint site theming: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview"},"https://docs.microsoft.com/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview")),(0,a.kt)("li",{parentName:"ul"},"Theme Generator: ",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/themedesigner"},"https://aka.ms/themedesigner"))))}c.isMDXComponent=!0}}]);