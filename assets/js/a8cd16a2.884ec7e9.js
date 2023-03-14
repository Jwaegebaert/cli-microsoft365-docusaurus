"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[5316],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=l(a),u=p,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:p,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),p=(a(67294),a(3905));const r={toc:[]},i="wrapper";function o(e){let{components:t,...a}=e;return(0,p.kt)(i,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("dl",null,(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"-h, --help [help]"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,p.kt)("code",null,"options"),", ",(0,p.kt)("code",null,"examples"),", ",(0,p.kt)("code",null,"remarks"),", ",(0,p.kt)("code",null,"response"),", ",(0,p.kt)("code",null,"full"),". Default is ",(0,p.kt)("code",null,"full"),".")),(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"--query [query]"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"JMESPath query string. See ",(0,p.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"-o, --output [output]"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"Output type. ",(0,p.kt)("code",null,"json"),", ",(0,p.kt)("code",null,"text"),", ",(0,p.kt)("code",null,"csv"),", ",(0,p.kt)("code",null,"md"),". Default is ",(0,p.kt)("code",null,"json"),".")),(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"--verbose"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"Runs command with verbose logging.")),(0,p.kt)("dt",null,(0,p.kt)("p",null,(0,p.kt)("code",null,"--debug"))),(0,p.kt)("dd",null,(0,p.kt)("p",null,"Runs command with debug logging."))))}o.isMDXComponent=!0},67413:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=a(87462),p=(a(67294),a(3905)),r=a(37884);const i={},o="aad app add",d={unversionedId:"cmd/aad/app/app-add",id:"cmd/aad/app/app-add",title:"aad app add",description:"Creates new Azure AD app registration",source:"@site/docs/cmd/aad/app/app-add.mdx",sourceDirName:"cmd/aad/app",slug:"/cmd/aad/app/app-add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/app/app-add.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",next:{title:"aad app get",permalink:"/cli-microsoft365-docusaurus/cmd/aad/app/app-get"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,p.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"aad-app-add"},"aad app add"),(0,p.kt)("p",null,"Creates new Azure AD app registration"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app add [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("dl",null,(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Name of the app. Specify either ",(0,p.kt)("code",{parentName:"p"},"name")," or ",(0,p.kt)("code",{parentName:"p"},"manifest")," but not both.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--multitenant"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Specify, to make the app available to other tenants.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-r, --redirectUris [redirectUris]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Comma-separated list of redirect URIs. Requires ",(0,p.kt)("code",{parentName:"p"},"platform")," to be specified.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-p, --platform [platform]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Platform for which the ",(0,p.kt)("code",{parentName:"p"},"redirectUris")," should be configured. Allowed values ",(0,p.kt)("code",{parentName:"p"},"spa"),", ",(0,p.kt)("code",{parentName:"p"},"web"),", ",(0,p.kt)("code",{parentName:"p"},"publicClient"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--implicitFlow"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Specify, to indicate that the authorization endpoint should return ID and access tokens.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-s, --withSecret"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"When specified, will create a secret named ",(0,p.kt)("code",{parentName:"p"},"Default")," and set it to expire 1 year in the future.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--apisDelegated [apisDelegated]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Comma-separated list of delegated permissions to register with the app.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--apisApplication [apisApplication]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Comma-separated list of application permissions to register with the app.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-u, --uri [uri]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Application ID URI.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--scopeName [scopeName]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Name of the scope to add. Requires ",(0,p.kt)("code",{parentName:"p"},"uri")," to be specified.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--scopeConsentBy [scopeConsentBy]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Specifies if the scope can be consented only by admins or by admins and users. Allowed values ",(0,p.kt)("code",{parentName:"p"},"admins"),", ",(0,p.kt)("code",{parentName:"p"},"adminsAndUsers"),". Default ",(0,p.kt)("code",{parentName:"p"},"admins"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--scopeAdminConsentDisplayName [scopeAdminConsentDisplayName]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Scope admin consent display name.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--scopeAdminConsentDescription [scopeAdminConsentDescription]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Scope admin consent description.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--certificateFile [certificateFile]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Path to the file with certificate public key. Specify either ",(0,p.kt)("code",{parentName:"p"},"certificateFile")," or ",(0,p.kt)("code",{parentName:"p"},"certificateBase64Encoded"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--certificateBase64Encoded [certificateBase64Encoded]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Base64-encoded string with certificate public key. Specify either ",(0,p.kt)("code",{parentName:"p"},"certificateFile")," or ",(0,p.kt)("code",{parentName:"p"},"certificateBase64Encoded"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--certificateDisplayName [certificateDisplayName]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Display name for the certificate. If not given, the displayName will be set to the certificate subject. When specified, also specify either ",(0,p.kt)("code",{parentName:"p"},"certificateFile")," or ",(0,p.kt)("code",{parentName:"p"},"certificateBase64Encoded"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--grantAdminConsent"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"When specified, grants application & delegated permissions through admin consent.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--manifest [manifest]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Azure AD app manifest as retrieved from the Azure Portal to create the app registration from. Specify either ",(0,p.kt)("code",{parentName:"p"},"name")," or ",(0,p.kt)("code",{parentName:"p"},"manifest")," but not both.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--save"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Use to store the information about the created app in a local file."))),(0,p.kt)(r.ZP,{mdxType:"Global"}),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"You can use this command to create a new Azure AD app registration either by specifying the different configuration settings through the corresponding options or by using the manifest."),(0,p.kt)("p",null,"If you don't use the manifest, you must specify the name of the Azure AD app registration using the ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," option. If you use the manifest, you can skip the ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," option assuming the manifest contains the ",(0,p.kt)("inlineCode",{parentName:"p"},"displayName")," property."),(0,p.kt)("p",null,"You can also use the manifest to provision some of the configuration settings of your Azure AD app. All properties specified in the manifest are optional and will set if specified."),(0,p.kt)("p",null,"If you specify the manifest along with some options, values specified in the options will override settings from the manifest. One exception is the name specified in the ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," option which will be overriden by the ",(0,p.kt)("inlineCode",{parentName:"p"},"displayName")," property from the manifest if specified."),(0,p.kt)("p",null,"The following properties specified in the manifest retrieved from Azure AD are not supported by this command:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"accessTokenAcceptedVersion"),(0,p.kt)("li",{parentName:"ul"},"disabledByMicrosoftStatus"),(0,p.kt)("li",{parentName:"ul"},"errorUrl"),(0,p.kt)("li",{parentName:"ul"},"oauth2RequirePostResponse"),(0,p.kt)("li",{parentName:"ul"},"oauth2AllowUrlPathMatching"),(0,p.kt)("li",{parentName:"ul"},"orgRestrictions"),(0,p.kt)("li",{parentName:"ul"},"samlMetadataUrl")),(0,p.kt)("p",null,"When specifying the value for the ",(0,p.kt)("inlineCode",{parentName:"p"},"uri"),", you can use the ",(0,p.kt)("inlineCode",{parentName:"p"},"_appId_")," token, to include the ID of the newly generated Azure AD app registration in the Application ID URI, eg. URI ",(0,p.kt)("inlineCode",{parentName:"p"},"api://caf406b91cd4.ngrok.io/_appId_")," will become ",(0,p.kt)("inlineCode",{parentName:"p"},"api://caf406b91cd4.ngrok.io/ab3bd119-faf7-4db5-ba99-eb7e748f778a")," where the last portion is the app ID of the created Azure AD app registration."),(0,p.kt)("p",null,"When using the ",(0,p.kt)("inlineCode",{parentName:"p"},"withSecret")," option, this command will automatically generate a secret named ",(0,p.kt)("inlineCode",{parentName:"p"},"Default")," and set it to expire 1 year in the future."),(0,p.kt)("p",null,"After creating the Azure AD app registration, this command returns the app ID and object ID of the created app registration. If you used the ",(0,p.kt)("inlineCode",{parentName:"p"},"withSecret")," option, it will also return the generated secret."),(0,p.kt)("p",null,"If you want to store the information about the created Azure AD app registration, use the ",(0,p.kt)("inlineCode",{parentName:"p"},"--save")," option. This is useful when you build solutions connected to Microsoft 365 and want to easily manage app registrations used with your solution. When you use the ",(0,p.kt)("inlineCode",{parentName:"p"},"--save")," option, after you create the app registration, the command will write its ID and name to the ",(0,p.kt)("inlineCode",{parentName:"p"},".m365rc.json")," file in the current directory. If the file already exists, it will add the information about the to it, allowing you to track multiple apps. If the file doesn't exist, the command will create it."),(0,p.kt)("p",null,"When specifying ",(0,p.kt)("inlineCode",{parentName:"p"},"--grantAdminConsent")," option, a service principal will be created for the app registration."),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Create new Azure AD app registration with the specified name"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app add --name 'My AAD app'\n")),(0,p.kt)("p",null,"Create new Azure AD app registration from the manifest retrieved from the Azure Portal stored in a local file named ",(0,p.kt)("em",{parentName:"p"},"manifest.json")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app add --manifest @manifest.json\n")),(0,p.kt)("p",null,"Create new multitenant Azure AD app registration"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app add --name 'My AAD app' --multitenant\n")),(0,p.kt)("p",null,"Create new Azure AD app registration for a web app with the specified redirect URIs"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app add --name 'My AAD app' --redirectUris 'https://myapp.azurewebsites.net,http://localhost:4000' --platform web\n")),(0,p.kt)("p",null,"Create new Azure AD app registration for a desktop app"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app add --name 'My AAD app' --redirectUris 'https://login.microsoftonline.com/common/oauth2/nativeclient' --platform publicClient\n")),(0,p.kt)("p",null,"Create new Azure AD app registration with an auto-generated secret (secret returned in the command output)"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app add --name 'My AAD app' --withSecret\n")),(0,p.kt)("p",null,"Create new Azure AD app registration for a deamon app with specified Microsoft Graph application permissions"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app add --name 'My AAD app' --withSecret --apisApplication 'https://graph.microsoft.com/Group.ReadWrite.All,https://graph.microsoft.com/Directory.Read.All'\n")),(0,p.kt)("p",null,"Create new Azure AD app registration for a single-page app with specified Microsoft Graph delegated permissions"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app add --name 'My AAD app' --platform spa --redirectUris 'https://myspa.azurewebsites.net,http://localhost:8080' --apisDelegated 'https://graph.microsoft.com/Calendars.Read,https://graph.microsoft.com/Directory.Read.All' --implicitFlow\n")),(0,p.kt)("p",null,"Create new Azure AD app registration with Application ID URI set to a fixed value"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app add --name 'My AAD app' --uri https://contoso.onmicrosoft.com/myapp\n")),(0,p.kt)("p",null,"Create new Azure AD app registration with Application ID URI set to a value that contains the ID of the app registration, designated with the ",(0,p.kt)("inlineCode",{parentName:"p"},"_appId_")," token and a custom API scope that can be consented by both admins and users"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app add --name 'My AAD app' --uri api://caf406b91cd4.ngrok.io/_appId_ --scopeName access_as_user --scopeAdminConsentDescription 'Access as a user' --scopeAdminConsentDisplayName 'Access as a user' --scopeConsentBy adminsAndUsers\n")),(0,p.kt)("p",null,"Create new Azure AD app registration for a deamon app with specified Microsoft Graph application permissions, including admin consent"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"}," m365 aad app add --name 'My AAD app' --apisApplication 'https://graph.microsoft.com/Group.ReadWrite.All' --grantAdminConsent\n")),(0,p.kt)("p",null,"Create new Azure AD app registration with the specified name. Store information about the created app registration in the ",(0,p.kt)("em",{parentName:"p"},".m365rc.json")," file in the current directory."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad app add --name 'My AAD app' --save\n")),(0,p.kt)("p",null,"Create new Azure AD app registration with a certificate"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad app add --name \'My AAD app\' --certificateDisplayName "Some certificate name" --certificateFile "c:\\temp\\some-certificate.cer"\n')))}u.isMDXComponent=!0}}]);