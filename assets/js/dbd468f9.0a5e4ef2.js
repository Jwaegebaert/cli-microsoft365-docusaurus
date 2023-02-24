"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[13532],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),m=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=m(e.components);return n.createElement(d.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(t),s=o,f=c["".concat(d,".").concat(s)]||c[s]||u[s]||i;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=t[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},12953:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=t(87462),o=(t(67294),t(3905));const i={},a="pp aibuildermodel remove",l={unversionedId:"cmd/pp/aibuildermodel/aibuildermodel-remove",id:"cmd/pp/aibuildermodel/aibuildermodel-remove",title:"pp aibuildermodel remove",description:"Removes the specified Microsoft Power Platform aibuildermodel in the specified Power Platform environment",source:"@site/docs/cmd/pp/aibuildermodel/aibuildermodel-remove.md",sourceDirName:"cmd/pp/aibuildermodel",slug:"/cmd/pp/aibuildermodel/aibuildermodel-remove",permalink:"/cli-microsoft365-docusaurus/cmd/pp/aibuildermodel/aibuildermodel-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/aibuildermodel/aibuildermodel-remove.md",tags:[],version:"current",lastUpdatedAt:1674194987,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp aibuildermodel list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/aibuildermodel/aibuildermodel-list"},next:{title:"pp card clone",permalink:"/cli-microsoft365-docusaurus/cmd/pp/card/card-clone"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],p={toc:m},c="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(c,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pp-aibuildermodel-remove"},"pp aibuildermodel remove"),(0,o.kt)("p",null,"Removes the specified Microsoft Power Platform aibuildermodel in the specified Power Platform environment"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp aibuildermodel remove [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-e, --environment <environment>"),"\n: The name of the environment."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The id of the AI builder model. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The name of the AI builder model. Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Run the command as admin for environments you do not have explicitly assigned permissions to."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Removes the AI builder model owned by the currently signed-in user based on the name parameter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp aibuildermodel remove --environment Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --name "AI Builder Model Name"\n')),(0,o.kt)("p",null,"Removes the AI builder model owned by the currently signed-in user based on the name parameter without confirmation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp aibuildermodel remove --environment Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --name "AI Builder Model Name" --confirm\n')),(0,o.kt)("p",null,"Removes the AI builder model owned by another user based on the id parameter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp aibuildermodel remove --environment Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --id 9d9a13d0-6255-ed11-bba2-000d3adf774e  --asAdmin\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);