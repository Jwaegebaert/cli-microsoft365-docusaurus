"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[97055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(r),c=n,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||o;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},37884:(e,t,r)=>{r.d(t,{ZP:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={toc:[]},l="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-h, --help [help]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",null,"options"),", ",(0,n.kt)("code",null,"examples"),", ",(0,n.kt)("code",null,"remarks"),", ",(0,n.kt)("code",null,"response"),", ",(0,n.kt)("code",null,"full"),". Default is ",(0,n.kt)("code",null,"full"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--query [query]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"JMESPath query string. See ",(0,n.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"-o, --output [output]"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Output type. ",(0,n.kt)("code",null,"json"),", ",(0,n.kt)("code",null,"text"),", ",(0,n.kt)("code",null,"csv"),", ",(0,n.kt)("code",null,"md"),". Default is ",(0,n.kt)("code",null,"json"),".")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--verbose"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with verbose logging.")),(0,n.kt)("dt",null,(0,n.kt)("p",null,(0,n.kt)("code",null,"--debug"))),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Runs command with debug logging."))))}s.isMDXComponent=!0},95675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(37884);const l={},s="aad user get",u={unversionedId:"cmd/aad/user/user-get",id:"cmd/aad/user/user-get",title:"aad user get",description:"Gets information about the specified user",source:"@site/docs/cmd/aad/user/user-get.mdx",sourceDirName:"cmd/aad/user",slug:"/cmd/aad/user/user-get",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/user/user-get.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"aad user add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-add"},next:{title:"aad user guest add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-guest-add"}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-user-get"},"aad user get"),(0,n.kt)("p",null,"Gets information about the specified user"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user get [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The ID of the user to retrieve information for. Use either ",(0,n.kt)("code",{parentName:"p"},"id"),", ",(0,n.kt)("code",{parentName:"p"},"userName")," or ",(0,n.kt)("code",{parentName:"p"},"email"),", but not all.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-n, --userName [userName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The name of the user to retrieve information for. Use either ",(0,n.kt)("code",{parentName:"p"},"id"),", ",(0,n.kt)("code",{parentName:"p"},"userName")," or ",(0,n.kt)("code",{parentName:"p"},"email"),", but not all.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--email [email]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The email of the user to retrieve information for. Use either ",(0,n.kt)("code",{parentName:"p"},"id"),", ",(0,n.kt)("code",{parentName:"p"},"userName")," or ",(0,n.kt)("code",{parentName:"p"},"email"),", but not all.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-p, --properties [properties]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Comma-separated list of properties to retrieve"))),(0,n.kt)(o.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"You can retrieve information about a user, either by specifying that user's id, user name (",(0,n.kt)("inlineCode",{parentName:"p"},"userPrincipalName"),"), or email (",(0,n.kt)("inlineCode",{parentName:"p"},"mail"),"), but not all."),(0,n.kt)("p",null,"If the user with the specified id, user name, or email doesn't exist, you will get a ",(0,n.kt)("inlineCode",{parentName:"p"},"Resource 'xyz' does not exist or one of its queried reference-property objects are not present.")," error."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Get information about the user with id ",(0,n.kt)("em",{parentName:"p"},"1caf7dcd-7e83-4c3a-94f7-932a1299c844")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user get --id 1caf7dcd-7e83-4c3a-94f7-932a1299c844\n")),(0,n.kt)("p",null,"Get information about the user with user name ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"mailto:AarifS@contoso.onmicrosoft.com"},"AarifS@contoso.onmicrosoft.com"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user get --userName AarifS@contoso.onmicrosoft.com\n")),(0,n.kt)("p",null,"Get information about the user with email ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"mailto:AarifS@contoso.onmicrosoft.com"},"AarifS@contoso.onmicrosoft.com"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user get --email AarifS@contoso.onmicrosoft.com\n")),(0,n.kt)("p",null,"For the user with id ",(0,n.kt)("em",{parentName:"p"},"1caf7dcd-7e83-4c3a-94f7-932a1299c844")," retrieve the user name, e-mail address and full name"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad user get --id 1caf7dcd-7e83-4c3a-94f7-932a1299c844 --properties "userPrincipalName,mail,displayName"\n')),(0,n.kt)("p",null,"Get information about the currently logged user using the Id token"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad user get --id "@meId"\n')),(0,n.kt)("p",null,"Get information about the currently logged in user using the UserName token"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad user get --userName "@meUserName"\n')),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Microsoft Graph User properties: ",(0,n.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user#properties"},"https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user#properties"))))}c.isMDXComponent=!0}}]);