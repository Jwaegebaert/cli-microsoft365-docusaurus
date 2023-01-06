"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[972],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),s=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(a.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,f=m["".concat(a,".").concat(d)]||m[d]||c[d]||i;return t?o.createElement(f,p(p({ref:n},u),{},{components:t})):o.createElement(f,p({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[m]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=t[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const i={},p="pp solution publisher remove",l={unversionedId:"cmd/pp/solution/solution-publisher-remove",id:"cmd/pp/solution/solution-publisher-remove",title:"pp solution publisher remove",description:"Removes the specified publisher in the specified Power Platform environment",source:"@site/docs/cmd/pp/solution/solution-publisher-remove.md",sourceDirName:"cmd/pp/solution",slug:"/cmd/pp/solution/solution-publisher-remove",permalink:"/cli-microsoft365-docusaurus/cmd/pp/solution/solution-publisher-remove",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/solution/solution-publisher-remove.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp solution publisher list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/solution/solution-publisher-list"},next:{title:"pp solution remove",permalink:"/cli-microsoft365-docusaurus/cmd/pp/solution/solution-remove"}},a={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pp-solution-publisher-remove"},"pp solution publisher remove"),(0,r.kt)("p",null,"Removes the specified publisher in the specified Power Platform environment"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp solution publisher remove [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-e, --environment <environment>"),"\n: The name of the environment."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: The id of the solution. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The name of the solution. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Run the command as admin for environments you do not have explicitly assigned permissions to."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--confirm"),"\n: Don't prompt for confirmation"),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Removes the specified publisher based on the name parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp solution publisher remove --environment Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --name "Publisher Name"\n')),(0,r.kt)("p",null,"Removes the specified publisher based on the name parameter without confirmation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp solution publisher remove --environment Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --name "Publisher Name" --confirm\n')),(0,r.kt)("p",null,"Removes the specified publisher based on the name parameter as admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp solution publisher remove --environment Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --name "Publisher Name" --asAdmin\n')),(0,r.kt)("p",null,"Removes the specified publisher owned by the currently signed-in user based on the id parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp solution publisher remove --environment Default-d87a7535-dd31-4437-bfe1-95340acd55c5 --id 00000001-0000-0000-0001-00000000009b\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."))}m.isMDXComponent=!0}}]);