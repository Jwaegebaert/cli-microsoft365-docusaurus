"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[51693],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(o),u=n,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return o?r.createElement(f,l(l({ref:t},p),{},{components:o})):r.createElement(f,l({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,l=new Array(i);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:n,l[1]=a;for(var c=2;c<i;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},70944:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={},l="todo list remove",a={unversionedId:"cmd/todo/list/list-remove",id:"cmd/todo/list/list-remove",title:"todo list remove",description:"Removes a Microsoft To Do task list",source:"@site/docs/cmd/todo/list/list-remove.md",sourceDirName:"cmd/todo/list",slug:"/cmd/todo/list/list-remove",permalink:"/cli-microsoft365-docusaurus/cmd/todo/list/list-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/todo/list/list-remove.md",tags:[],version:"current",lastUpdatedAt:1667518590,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{},sidebar:"commands",previous:{title:"todo list list",permalink:"/cli-microsoft365-docusaurus/cmd/todo/list/list-list"},next:{title:"todo list set",permalink:"/cli-microsoft365-docusaurus/cmd/todo/list/list-set"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"todo-list-remove"},"todo list remove"),(0,n.kt)("p",null,"Removes a Microsoft To Do task list"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 todo list remove [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The name of the task list to remove. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),", but not both."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The ID of the task list to remove. Specify either ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),", but not both."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirming removing the task list."),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Remove a task list with specific name"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 todo list remove --name "My task list"\n')),(0,n.kt)("p",null,"Remove a task list with the ID without confirmation prompt"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 todo list remove --id "AAMkAGI3NDhlZmQzLWQxYjAtNGJjNy04NmYwLWQ0M2IzZTNlMDUwNAAuAAAAAACQ1l2jfH6VSZraktP8Z7auAQCbV93BagWITZhL3J6BMqhjAAD9pHIhAAA=" --confirm\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);