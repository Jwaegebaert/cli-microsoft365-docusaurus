"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2238],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return t?o.createElement(f,r(r({ref:n},u),{},{components:t})):o.createElement(f,r({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(87462),a=(t(67294),t(3905));const i={},r="pp solution get",l={unversionedId:"cmd/pp/solution/solution-get",id:"cmd/pp/solution/solution-get",title:"pp solution get",description:"Gets a specific solution in a given environment.",source:"@site/docs/cmd/pp/solution/solution-get.md",sourceDirName:"cmd/pp/solution",slug:"/cmd/pp/solution/solution-get",permalink:"/cli-microsoft365-docusaurus/cmd/pp/solution/solution-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/solution/solution-get.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp managementapp list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/managementapp/managementapp-list"},next:{title:"pp solution list",permalink:"/cli-microsoft365-docusaurus/cmd/pp/solution/solution-list"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pp-solution-get"},"pp solution get"),(0,a.kt)("p",null,"Gets a specific solution in a given environment."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp solution get [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-e, --environment <environment>"),"\n: The name of the environment."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i --id [id]"),"\n: The ID of the solution. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The unique name (not the display name) of the solution. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--asAdmin"),"\n: Run the command as admin for environments you do not have explicitly assigned permissions to."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Gets a specific solution in a specific environment based on name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp solution get --environment "Default-2ca3eaa5-140f-4175-8261-3272edf9f339" --name "Default"\n')),(0,a.kt)("p",null,"Gets a specific solution in a specific environment based on name as Admin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp solution get --environment "Default-2ca3eaa5-140f-4175-8261-3272edf9f339" --name "Default" --asAdmin\n')),(0,a.kt)("p",null,"Gets a specific solution in a specific environment based on id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp solution get --environment "Default-2ca3eaa5-140f-4175-8261-3272edf9f339" --id "ee62fd63-e49e-4c09-80de-8fae1b9a427e"\n')),(0,a.kt)("p",null,"Gets a specific solution in a specific environment based on id as Admin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 pp solution get --environment "Default-2ca3eaa5-140f-4175-8261-3272edf9f339" --id "ee62fd63-e49e-4c09-80de-8fae1b9a427e" --asAdmin\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "solutionid": "fd140aaf-4df4-11dd-bd17-0019b9312238",\n  "uniquename": "Default",\n  "version": "1.0",\n  "installedon": "2021-10-01T21:29:10Z",\n  "solutionpackageversion": null,\n  "friendlyname": "Default Solution",\n  "versionnumber": 860055,\n  "publisherid": {\n    "friendlyname": "Default Publisher for org6633049a",\n    "publisherid": "d21aab71-79e7-11dd-8874-00188b01e34f"\n  }\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\npublisher : Default Publisher for org6633049a\nuniquename: Default\nversion   : 1.0\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nuniquename,version,publisher\nDefault,1.0,Default Publisher for org6633049a\n```\n")))}c.isMDXComponent=!0}}]);