"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[6e3],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return t?o.createElement(f,l(l({ref:n},u),{},{components:t})):o.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[c]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88016:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=t(87462),i=(t(67294),t(3905));const r={},l="pp solution publish",a={unversionedId:"cmd/pp/solution/solution-publish",id:"cmd/pp/solution/solution-publish",title:"pp solution publish",description:"Publishes the components of a solution in a given Power Platform environment",source:"@site/docs/cmd/pp/solution/solution-publish.md",sourceDirName:"cmd/pp/solution",slug:"/cmd/pp/solution/solution-publish",permalink:"/cli-microsoft365-docusaurus/cmd/pp/solution/solution-publish",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/solution/solution-publish.md",tags:[],version:"current",lastUpdatedAt:1674480020,formattedLastUpdatedAt:"Jan 23, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp solution list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/solution/solution-list"},next:{title:"pp solution publisher add",permalink:"/cli-microsoft365-docusaurus/cmd/pp/solution/solution-publisher-add"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pp-solution-publish"},"pp solution publish"),(0,i.kt)("p",null,"Publishes the components of a solution in a given Power Platform environment"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp solution publish [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-e, --environment <environment>"),"\n: The name of the environment."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The id of the solution. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The unique name (not the display name) of the solution. Specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Run the command as admin for environments you do not have explicitly assigned permissions to."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--wait"),"\n: Wait for the job to complete"),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Publishes the components of a specified solution with a specific name, owned by the currently signed-in user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp solution publish --environment Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --name "Solution Name"\n')),(0,i.kt)("p",null,"Publishes the components of a specified solution owned by the currently signed-in user based on the id parameter and waits for completion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp solution publish --environment Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --id 00000001-0000-0000-0001-00000000009b --wait\n")),(0,i.kt)("p",null,"Publishes the components of a specified solution owned by another user based on the name parameter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp solution publish --environment Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --name "Solution Name" --asAdmin\n')),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,"The command won't return a response on success."))}m.isMDXComponent=!0}}]);