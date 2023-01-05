"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70198],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||p;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<p;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1726:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const p={},o="teams app publish",s={unversionedId:"cmd/teams/app/app-publish",id:"cmd/teams/app/app-publish",title:"teams app publish",description:"Publishes Teams app to the organization's app catalog",source:"@site/docs/cmd/teams/app/app-publish.md",sourceDirName:"cmd/teams/app",slug:"/cmd/teams/app/app-publish",permalink:"/cli-microsoft365-docusaurus/cmd/teams/app/app-publish",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/teams/app/app-publish.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"teams app list",permalink:"/cli-microsoft365-docusaurus/cmd/teams/app/app-list"},next:{title:"teams app remove",permalink:"/cli-microsoft365-docusaurus/cmd/teams/app/app-remove"}},i={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:l};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teams-app-publish"},"teams app publish"),(0,r.kt)("p",null,"Publishes Teams app to the organization's app catalog"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams app publish [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-p, --filePath <filePath>"),"\n: Absolute or relative path to the Teams manifest zip file to add to the app catalog"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"!!! important\nTo use this command you must be a Global administrator."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Add the ",(0,r.kt)("em",{parentName:"p"},"teams-manifest.zip")," file to the organization's app catalog"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 teams app publish --filePath ./teams-manifest.zip\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n{\n    "id": "e3e29acb-8c79-412b-b746-e6c39ff4cd22",\n    "externalId": "b5561ec9-8cab-4aa3-8aa2-d8d7172e4311",\n    "displayName": "Test App",\n    "distributionMethod": "organization"\n}\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\ndisplayName       : Test App\ndistributionMethod: organization\nexternalId        : b5561ec9-8cab-4aa3-8aa2-d8d7172e4311\nid                : e3e29acb-8c79-412b-b746-e6c39ff4cd22\n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nid,externalId,displayName,distributionMethod\ne3e29acb-8c79-412b-b746-e6c39ff4cd22,b5561ec9-8cab-4aa3-8aa2-d8d7172e4311,Test App,organization\n```\n")))}m.isMDXComponent=!0}}]);