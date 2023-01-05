"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,u=d["".concat(s,".").concat(f)]||d[f]||m[f]||l;return n?r.createElement(u,o(o({ref:t},i),{},{components:n})):r.createElement(u,o({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},o="planner task reference add",p={unversionedId:"cmd/planner/task/task-reference-add",id:"cmd/planner/task/task-reference-add",title:"planner task reference add",description:"Adds a new reference to a Planner task.",source:"@site/docs/cmd/planner/task/task-reference-add.md",sourceDirName:"cmd/planner/task",slug:"/cmd/planner/task/task-reference-add",permalink:"/cmd/planner/task/task-reference-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/planner/task/task-reference-add.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"planner task list",permalink:"/cmd/planner/task/task-list"},next:{title:"planner task reference list",permalink:"/cmd/planner/task/task-reference-list"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],i={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"planner-task-reference-add"},"planner task reference add"),(0,a.kt)("p",null,"Adds a new reference to a Planner task."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 planner task reference add [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i, --taskId <taskId>"),"\n: ID of the task."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --url <url>"),"\n: URL location of the reference."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--alias [alias]"),"\n: A name alias to describe the reference."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--type [type]"),"\n: Used to describe the type of the reference. Types include: ",(0,a.kt)("inlineCode",{parentName:"p"},"PowerPoint"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Word"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Excel"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Other"),"."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Add a new reference with the url ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://www.microsoft.com"},"https://www.microsoft.com"))," to a Planner task with the id ",(0,a.kt)("em",{parentName:"p"},"2Vf8JHgsBUiIf-nuvBtv-ZgAAYw2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner task reference add --taskId "2Vf8JHgsBUiIf-nuvBtv-ZgAAYw2" --url "https://www.microsoft.com"\n')),(0,a.kt)("p",null,"Add a new reference with the url ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://www.microsoft.com"},"https://www.microsoft.com"))," and with the alias ",(0,a.kt)("em",{parentName:"p"},"Parker")," to a Planner task with the id ",(0,a.kt)("em",{parentName:"p"},"2Vf8JHgsBUiIf-nuvBtv-ZgAAYw2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner task reference add --taskId "2Vf8JHgsBUiIf-nuvBtv-ZgAAYw2" --url "https://www.microsoft.com" --alias "Parker"\n')),(0,a.kt)("p",null,"Add a new reference with the url ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://www.microsoft.com"},"https://www.microsoft.com"))," and with the type Excel to a Planner task with the id ",(0,a.kt)("em",{parentName:"p"},"2Vf8JHgsBUiIf-nuvBtv-ZgAAYw2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 planner task reference add --taskId "2Vf8JHgsBUiIf-nuvBtv-ZgAAYw2" --url "https://www.microsoft.com" --type "Excel"\n')))}d.isMDXComponent=!0}}]);