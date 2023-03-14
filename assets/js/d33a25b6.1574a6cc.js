"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[69017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?l.createElement(k,a(a({ref:t},c),{},{components:n})):l.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37884:(e,t,n)=>{n.d(t,{ZP:()=>i});var l=n(87462),r=(n(67294),n(3905));const o={toc:[]},a="wrapper";function i(e){let{components:t,...n}=e;return(0,r.kt)(a,(0,l.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-h, --help [help]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",null,"options"),", ",(0,r.kt)("code",null,"examples"),", ",(0,r.kt)("code",null,"remarks"),", ",(0,r.kt)("code",null,"response"),", ",(0,r.kt)("code",null,"full"),". Default is ",(0,r.kt)("code",null,"full"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--query [query]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"JMESPath query string. See ",(0,r.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"-o, --output [output]"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Output type. ",(0,r.kt)("code",null,"json"),", ",(0,r.kt)("code",null,"text"),", ",(0,r.kt)("code",null,"csv"),", ",(0,r.kt)("code",null,"md"),". Default is ",(0,r.kt)("code",null,"json"),".")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--verbose"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with verbose logging.")),(0,r.kt)("dt",null,(0,r.kt)("p",null,(0,r.kt)("code",null,"--debug"))),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Runs command with debug logging."))))}i.isMDXComponent=!0},32487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var l=n(87462),r=(n(67294),n(3905)),o=n(37884);const a={},i="spo site list",s={unversionedId:"cmd/spo/site/site-list",id:"cmd/spo/site/site-list",title:"spo site list",description:"Lists modern sites of the given type",source:"@site/docs/cmd/spo/site/site-list.mdx",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo site inplacerecordsmanagement set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-inplacerecordsmanagement-set"},next:{title:"spo site recyclebinitem list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-recyclebinitem-list"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-site-list"},"spo site list"),(0,r.kt)("p",null,"Lists modern sites of the given type"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-t, --type [type]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"convenience option for type of sites to list. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"TeamSite,CommunicationSite"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--webTemplate [webTemplate]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"type of sites to list. To be used with values like ",(0,r.kt)("code",{parentName:"p"},"GROUP#0")," and ",(0,r.kt)("code",{parentName:"p"},"SITEPAGEPUBLISHING#0"),". Specify either ",(0,r.kt)("code",{parentName:"p"},"type")," or ",(0,r.kt)("code",{parentName:"p"},"webTemplate"),", but not both.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-f, --filter [filter]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"filter to apply when retrieving sites")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--includeOneDriveSites"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"use this switch to include OneDrive sites in the result when retrieving sites. Do not specify the ",(0,r.kt)("code",{parentName:"p"},"type")," or ",(0,r.kt)("code",{parentName:"p"},"webTemplate")," options when using this.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--deleted"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"use this switch to only return deleted sites"))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f, --filter")," option you can specify which sites you want to retrieve. For example, to get sites with ",(0,r.kt)("em",{parentName:"p"},"project")," in their URL, use ",(0,r.kt)("inlineCode",{parentName:"p"},"Url -like 'project'")," as the filter."),(0,r.kt)("p",null,"When using the text output type, the command lists only the values of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Title"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Url")," properties of the site. When setting the output type to JSON, all available properties are included in the command output."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To use this command you have to have permissions to access the tenant admin site.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"List all sites in the currently connected tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list\n")),(0,r.kt)("p",null,"List all group connected team sites in the currently connected tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list --type TeamSite\n")),(0,r.kt)("p",null,"List all communication sites in the currently connected tenant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list --type CommunicationSite\n")),(0,r.kt)("p",null,"List all group connected team sites that contain ",(0,r.kt)("em",{parentName:"p"},"project")," in the URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list --type TeamSite --filter \"Url -like 'project'\"\n")),(0,r.kt)("p",null,"List all sites in the currently connected tenant including OneDrive sites"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list --includeOneDriveSites\n")),(0,r.kt)("p",null,"List all deleted sites in the tenant you're logged in to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site list --deleted\n")))}m.isMDXComponent=!0}}]);