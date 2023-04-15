"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[47936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,d=m["".concat(p,".").concat(u)]||m[u]||f[u]||o;return r?n.createElement(d,l(l({ref:t},i),{},{components:r})):n.createElement(d,l({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11639:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},l="planner task reference remove",s={unversionedId:"cmd/planner/task/task-reference-remove",id:"cmd/planner/task/task-reference-remove",title:"planner task reference remove",description:"Removes the reference from the Planner task.",source:"@site/docs/cmd/planner/task/task-reference-remove.md",sourceDirName:"cmd/planner/task",slug:"/cmd/planner/task/task-reference-remove",permalink:"/cli-microsoft365-docusaurus/cmd/planner/task/task-reference-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/task/task-reference-remove.md",tags:[],version:"current",lastUpdatedAt:1678540853,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{},sidebar:"commands",previous:{title:"planner task reference list",permalink:"/cli-microsoft365-docusaurus/cmd/planner/task/task-reference-list"},next:{title:"planner task remove",permalink:"/cli-microsoft365-docusaurus/cmd/planner/task/task-remove"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],i={toc:c},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"planner-task-reference-remove"},"planner task reference remove"),(0,a.kt)("p",null,"Removes the reference from the Planner task."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner task reference remove [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --url [url]"),"\n: URL location of the reference. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"alias")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," but not both."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--alias [alias]"),"\n: The alias of the reference. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"alias")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," but not both."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --taskId <taskId>"),"\n: ID of the task."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Removes a reference with the url ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://www.microsoft.com"},"https://www.microsoft.com"))," from the Planner task with the id ",(0,a.kt)("em",{parentName:"p"},"2Vf8JHgsBUiIf-nuvBtv-ZgAAYw2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner task reference remove --url "https://www.microsoft.com" --taskId "2Vf8JHgsBUiIf-nuvBtv-ZgAAYw2" \n')),(0,a.kt)("p",null,"Removes a reference with the alias ",(0,a.kt)("em",{parentName:"p"},"Parker")," from the Planner task with the id ",(0,a.kt)("em",{parentName:"p"},"2Vf8JHgsBUiIf-nuvBtv-ZgAAYw2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner task reference remove --alias "Parker" --taskId "2Vf8JHgsBUiIf-nuvBtv-ZgAAYw2"\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."))}f.isMDXComponent=!0}}]);