"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60833],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4430:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={},i="aad user list",l={unversionedId:"cmd/aad/user/user-list",id:"cmd/aad/user/user-list",title:"aad user list",description:"Lists users matching specified criteria",source:"@site/docs/cmd/aad/user/user-list.md",sourceDirName:"cmd/aad/user",slug:"/cmd/aad/user/user-list",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-list",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/user/user-list.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad user hibp",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-hibp"},next:{title:"aad user password validate",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-password-validate"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-user-list"},"aad user list"),(0,n.kt)("p",null,"Lists users matching specified criteria"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user list [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-p, --properties [properties]"),"\n: Comma-separated list of properties to retrieve"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-d, --deleted"),"\n: Use to retrieve deleted users"),(0,n.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--properties")," option, you can specify a comma-separated list of user properties to retrieve from the Microsoft Graph. If you don't specify any properties, the command will retrieve user's display name and account name."),(0,n.kt)("p",null,"To filter the list of users, include additional options that match the user property that you want to filter with. For example ",(0,n.kt)("inlineCode",{parentName:"p"},"--displayName Patt")," will return all users whose ",(0,n.kt)("inlineCode",{parentName:"p"},"displayName")," starts with ",(0,n.kt)("inlineCode",{parentName:"p"},"Patt"),". Multiple filters will be combined using the ",(0,n.kt)("inlineCode",{parentName:"p"},"and")," operator."),(0,n.kt)("p",null,"Certain properties cannot be returned within a user collection. The following properties are only supported when retrieving an single user using: ",(0,n.kt)("inlineCode",{parentName:"p"},"aboutMe, birthday, hireDate, interests, mySite, pastProjects, preferredName, responsibilities, schools, skills, mailboxSettings"),"."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"List all users in the tenant"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user list\n")),(0,n.kt)("p",null,"List all recently deleted users in the tenant"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user list --deleted\n")),(0,n.kt)("p",null,"List all users in the tenant. For each one return the display name and e-mail address"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad user list --properties "displayName,mail"\n')),(0,n.kt)("p",null,"Show users whose display name starts with ",(0,n.kt)("em",{parentName:"p"},"Patt")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user list --displayName Patt\n")),(0,n.kt)("p",null,"Show all account managers whose display name starts with ",(0,n.kt)("em",{parentName:"p"},"Patt")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user list --displayName Patt --jobTitle 'Account manager'\n")),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Microsoft Graph User properties: ",(0,n.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user#properties"},"https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user#properties"))))}c.isMDXComponent=!0}}]);