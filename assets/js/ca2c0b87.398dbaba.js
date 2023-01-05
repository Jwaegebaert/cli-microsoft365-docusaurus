"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:0},r="login",l={unversionedId:"cmd/login",id:"cmd/login",title:"login",description:"Log in to Microsoft 365",source:"@site/docs/cmd/login.md",sourceDirName:"cmd",slug:"/cmd/login",permalink:"/cmd/login",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/login.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"commands",next:{title:"logout",permalink:"/cmd/logout"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"login"},"login"),(0,i.kt)("p",null,"Log in to Microsoft 365"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login [options]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-t, --authType [authType]"),"\n: The type of authentication to use. Allowed values ",(0,i.kt)("inlineCode",{parentName:"p"},"certificate,deviceCode,password,identity,browser,secret"),". Default ",(0,i.kt)("inlineCode",{parentName:"p"},"deviceCode")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-u, --userName [userName]"),"\n: Name of the user to authenticate. Required when ",(0,i.kt)("inlineCode",{parentName:"p"},"authType")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"password")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-p, --password [password]"),"\n: Password for the user or the certificate. Required when ",(0,i.kt)("inlineCode",{parentName:"p"},"authType")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),", or when ",(0,i.kt)("inlineCode",{parentName:"p"},"authType")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"certificate")," and the provided certificate requires a password to open"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-c, --certificateFile [certificateFile]"),"\n: Path to the file with certificate private key. When ",(0,i.kt)("inlineCode",{parentName:"p"},"authType")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"certificate"),", specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"certificateFile")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"certificateBase64Encoded")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--certificateBase64Encoded [certificateBase64Encoded]"),"\n: Base64-encoded string with certificate private key. When ",(0,i.kt)("inlineCode",{parentName:"p"},"authType")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"certificate"),", specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"certificateFile")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"certificateBase64Encoded")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--thumbprint [thumbprint]"),"\n: Certificate thumbprint. If not specified, and ",(0,i.kt)("inlineCode",{parentName:"p"},"authType")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"certificate"),", it will be automatically calculated based on the specified certificate"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-s, --secret [secret]"),"\n: Client Secret of the Azure AD application to use for authentication. Required when ",(0,i.kt)("inlineCode",{parentName:"p"},"authType")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"secret"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--appId [appId]"),"\n: App ID of the Azure AD application to use for authentication. If not specified, use the app specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_AADAPPID")," environment variable. If the environment variable is not defined, use the multitenant PnP Management Shell app"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--tenant [tenant]"),"\n: ID of the tenant from which accounts should be able to authenticate. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"common")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"organization")," if the app is multitenant. If not specified, use the tenant specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_TENANT")," environment variable. If the environment variable is not defined, use ",(0,i.kt)("inlineCode",{parentName:"p"},"common")," as the tenant identifier"),(0,i.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," command you can log in to Microsoft 365."),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," command uses device code OAuth flow to log in to Microsoft 365. Alternatively, you can authenticate using a user name and password or certificate, which are convenient for CI/CD scenarios, but which come with their own ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/connecting-office-365"},"limitations"),"."),(0,i.kt)("p",null,"When logging in to Microsoft 365, the ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," command stores in memory the access token and the refresh token. Both tokens are cleared from memory after exiting the CLI or by calling the ",(0,i.kt)("a",{parentName:"p",href:"/cmd/logout"},"logout")," command."),(0,i.kt)("p",null,"When logging in to Microsoft 365 using the user name and password, next to the access and refresh token, the CLI for Microsoft 365 will store the user credentials so that it can automatically re-authenticate if necessary. Similarly to the tokens, the credentials are removed by re-authenticating using the device code or by calling the ",(0,i.kt)("a",{parentName:"p",href:"/cmd/logout"},"logout")," command."),(0,i.kt)("p",null,"When logging in to Microsoft 365 using a certificate, the CLI for Microsoft 365 will store the contents of the certificate so that it can automatically re-authenticate if necessary. The contents of the certificate are removed by re-authenticating using the device code or by calling the ",(0,i.kt)("a",{parentName:"p",href:"/cmd/logout"},"logout")," command.  "),(0,i.kt)("p",null,"To log in to Microsoft 365 using a certificate or secret, you will typically ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/using-own-identity"},"create a custom Azure AD application"),". To use this application with the CLI for Microsoft 365, you will set the ",(0,i.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_AADAPPID")," environment variable to the application's ID and the ",(0,i.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_TENANT")," environment variable to the ID of the Azure AD tenant, where you created the Azure AD application. Also, please make sure to read about ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/cli-certificate-caveats"},"the caveats when using the certificate login option"),"."),(0,i.kt)("p",null,"Managed identity in Azure Cloud Shell is the identity of the user. It is neither system- nor user-assigned and it can't be configured. To log in to Microsoft 365 using managed identity in Azure Cloud Shell, set ",(0,i.kt)("inlineCode",{parentName:"p"},"authType")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"identity")," and don't specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"userName")," option."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Log in to Microsoft 365 using the device code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using the device code in debug mode including detailed debug information in the console output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --debug\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using a user name and password"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType password --userName user@contoso.com --password pass@word1\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using a PEM certificate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType certificate --certificateFile /Users/user/dev/localhost.pem\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using a PEM certificate. Use the specified thumbprint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType certificate --certificateFile /Users/user/dev/localhost.pem  --thumbprint 47C4885736C624E90491F32B98855AA8A7562AF1\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using a personal information exchange (.pfx) file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType certificate --certificateFile /Users/user/dev/localhost.pfx --password 'pass@word1'\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using a personal information exchange (.pfx) file protected with an empty password"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType certificate --certificateFile /Users/user/dev/localhost.pfx --password\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using a personal information exchange (.pfx) file not protected with a password"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType certificate --certificateFile /Users/user/dev/localhost.pfx\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using a personal information exchange (.pfx) file. Use the specified thumbprint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType certificate --certificateFile /Users/user/dev/localhost.pfx --thumbprint 47C4885736C624E90491F32B98855AA8A7562AF1 --password 'pass@word1'\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using a certificate from a base64-encoded string"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType certificate --certificateBase64Encoded MIII2QIBAzCCCJ8GCSqGSIb3DQEHAaCCCJAEg...eX1N5AgIIAA== --thumbprint D0C9B442DE249F55D10CDA1A2418952DC7D407A3\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using a system assigned managed identity. Applies to Azure resources with managed identity enabled,\nsuch as Azure Virtual Machines, Azure App Service or Azure Functions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType identity\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using managed identity in Azure Cloud Shell. Uses the identity of the current user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType identity\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using a user-assigned managed identity. Client id or principal id also known as object id value can be specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"userName")," option. Applies to Azure resources with managed identity enabled, such as Azure Virtual Machines, Azure App Service or Azure Functions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType identity --userName ac9fbed5-804c-4362-a369-21a4ec51109e\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using your own multitenant Azure AD application"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --appId 31359c7f-bd7e-475c-86db-fdb8c937548c\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using your own Azure AD application that's restricted only to allow accounts from the specific tenant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --appId 31359c7f-bd7e-475c-86db-fdb8c937548c --tenant 31359c7f-bd7e-475c-86db-fdb8c937548a\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using the interactive browser authentication. Uses the identity of the current user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType browser\n")),(0,i.kt)("p",null,"Log in to Microsoft 365 using a client secret."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType secret --secret topSeCr3t@007\n")))}u.isMDXComponent=!0}}]);