"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9265],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,p=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(t),d=s,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||p;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var p=t.length,i=new Array(p);i[0]=d;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a[m]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<p;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var r=t(87462),s=(t(67294),t(3905));const p={},i="app permission list",a={unversionedId:"cmd/app/permission/permission-list",id:"cmd/app/permission/permission-list",title:"app permission list",description:"Lists API permissions for the current AAD app",source:"@site/docs/cmd/app/permission/permission-list.md",sourceDirName:"cmd/app/permission",slug:"/cmd/app/permission/permission-list",permalink:"/cmd/app/permission/permission-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/app/permission/permission-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"app open",permalink:"/cmd/app/app-open"},next:{title:"Microsoft 365 tenant (tenant)",permalink:"/cmd/groups/tenant"}},o={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:l};function m(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"app-permission-list"},"app permission list"),(0,s.kt)("p",null,"Lists API permissions for the current AAD app"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 app permission list [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--appId [appId]"),"\n: Client ID of the Azure AD app registered in the .m365rc.json file to retrieve API permissions for"),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"Use this command to quickly look up API permissions for the Azure AD application registration registered in the .m365rc.json file in your current project (folder)."),(0,s.kt)("p",null,"If you have multiple apps registered in your .m365rc.json file, you can specify the app for which you'd like to retrieve permissions using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--appId")," option. If you don't specify the app using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--appId")," option, you'll be prompted to select one of the applications from your .m365rc.json file."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Retrieve API permissions for your current Azure AD app"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 app permission list\n")),(0,s.kt)("p",null,"Retrieve API permissions for the Azure AD app with client ID ",(0,s.kt)("em",{parentName:"p"},"e23d235c-fcdf-45d1-ac5f-24ab2ee0695d")," specified in the ",(0,s.kt)("em",{parentName:"p"},".m365rc.json")," file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 app permission list --appId e23d235c-fcdf-45d1-ac5f-24ab2ee0695d\n")),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("p",null,'=== "JSON"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "resource": "Microsoft Teams - Teams And Channels Service",\n    "permission": "channels.readwrite",\n    "type": "Application"\n  },\n  {\n    "resource": "Yammer",\n    "permission": "access_as_user",\n    "type": "Delegated"\n  },\n  {\n    "resource": "Yammer",\n    "permission": "user_impersonation",\n    "type": "Delegated"\n  }\n]\n```\n')),(0,s.kt)("p",null,'=== "Text"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```text\nresource                                      permission          type\n--------------------------------------------  ------------------  -----------\nMicrosoft Teams - Teams And Channels Service  channels.readwrite  Application\nYammer                                        access_as_user      Delegated\nYammer                                        user_impersonation  Delegated\n```\n")),(0,s.kt)("p",null,'=== "CSV"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```csv\nresource,permission,type\nMicrosoft Teams - Teams And Channels Service,channels.readwrite,Application\nYammer,access_as_user,Delegated\nYammer,user_impersonation,Delegated\n```\n")))}m.isMDXComponent=!0}}]);