"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[61147],{79024:(e,t,o)=>{o.d(t,{Z:()=>a});var i=o(67294),n=o(72389);const a=e=>{let{src:t,...a}=e;if((0,n.Z)()){const e=(0,i.useRef)(null),n=o(53911);return(0,i.useEffect)((()=>{const o=e.current;n.create(t,o,a)}),[t]),i.createElement("div",{ref:e})}return i.createElement("div",null)}},84575:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=o(87462),n=(o(67294),o(3905)),a=o(79024);const s={title:"Log in to Microsoft 365",sidebar_position:4},r="Log in to Microsoft 365",c={unversionedId:"user-guide/connecting-microsoft-365",id:"user-guide/connecting-microsoft-365",title:"Log in to Microsoft 365",description:"Before you can use CLI for Microsoft 365 commands to manage your tenant, you have to log in to Microsoft 365. Following section explains how you can log in and check the Microsoft 365 login status.",source:"@site/docs/user-guide/connecting-microsoft-365.mdx",sourceDirName:"user-guide",slug:"/user-guide/connecting-microsoft-365",permalink:"/cli-microsoft365-docusaurus/user-guide/connecting-microsoft-365",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/user-guide/connecting-microsoft-365.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",sidebarPosition:4,frontMatter:{title:"Log in to Microsoft 365",sidebar_position:4},sidebar:"userGuide",previous:{title:"Run CLI in a Docker Container",permalink:"/cli-microsoft365-docusaurus/user-guide/run-cli-in-docker-container"},next:{title:"CLI output mode",permalink:"/cli-microsoft365-docusaurus/user-guide/cli-output-mode"}},l={},u=[{value:"Microsoft 365 services",id:"microsoft-365-services",level:2},{value:"Log in to Microsoft 365",id:"log-in-to-microsoft-365-1",level:3},{value:"Log in using the default device code flow",id:"log-in-using-the-default-device-code-flow",level:4},{value:"Log in using user name and password",id:"log-in-using-user-name-and-password",level:4},{value:"Log in using a certificate",id:"log-in-using-a-certificate",level:4},{value:"Log in using a secret",id:"log-in-using-a-secret",level:4},{value:"Log in using a browser authentication",id:"log-in-using-a-browser-authentication",level:4},{value:"Check login status",id:"check-login-status",level:3},{value:"Log out from Microsoft 365",id:"log-out-from-microsoft-365",level:3},{value:"Working with SharePoint Online",id:"working-with-sharepoint-online",level:3},{value:"Authorize with Microsoft 365",id:"authorize-with-microsoft-365",level:2},{value:"Re-consent the PnP Microsoft 365 Management Shell Azure AD application",id:"re-consent-the-pnp-microsoft-365-management-shell-azure-ad-application",level:2},{value:"Logging in to Microsoft 365 via a proxy",id:"logging-in-to-microsoft-365-via-a-proxy",level:2},{value:"Persisted connections",id:"persisted-connections",level:2}],p={toc:u},h="wrapper";function d(e){let{components:t,...s}=e;return(0,n.kt)(h,(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"log-in-to-microsoft-365"},"Log in to Microsoft 365"),(0,n.kt)("p",null,"Before you can use CLI for Microsoft 365 commands to manage your tenant, you have to log in to Microsoft 365. Following section explains how you can log in and check the Microsoft 365 login status."),(0,n.kt)("h2",{id:"microsoft-365-services"},"Microsoft 365 services"),(0,n.kt)("p",null,"Using the CLI for Microsoft 365 you can manage different areas of an Microsoft 365 tenant. Currently, commands for working with SharePoint Online, Azure Active Directory, Microsoft Graph and the Azure Management Service are available, but more commands for other services will be added in the future."),(0,n.kt)("p",null,"Commands in the CLI for Microsoft 365 are organized into services. For example, all commands that manage SharePoint Online begin with ",(0,n.kt)("inlineCode",{parentName:"p"},"spo")," (",(0,n.kt)("inlineCode",{parentName:"p"},"spo app list"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"spo cdn get"),", etc.) and commands for working with the Azure AD begin with ",(0,n.kt)("inlineCode",{parentName:"p"},"aad"),". After logging in to Microsoft 365, you can communicate with any Microsoft 365 service supported by the CLI for Microsoft 365 and it will automatically retrieve the necessary access token."),(0,n.kt)("h3",{id:"log-in-to-microsoft-365-1"},"Log in to Microsoft 365"),(0,n.kt)("p",null,"CLI for Microsoft 365 offers you a number of ways to log in to Microsoft 365."),(0,n.kt)("h4",{id:"log-in-using-the-default-device-code-flow"},"Log in using the default device code flow"),(0,n.kt)("p",null,"The default way to log in to Microsoft 365 using the CLI for Microsoft 365 is through the device code flow. To log in to Microsoft 365, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"login")," command."),(0,n.kt)("p",null,"After executing the ",(0,n.kt)("inlineCode",{parentName:"p"},"login")," command, you will be prompted to navigate to ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://aka.ms/devicelogin"},"https://aka.ms/devicelogin"))," in your web browser and enter the login code presented to you by the CLI for Microsoft 365 in the command line. After entering the code, you will see the prompt that you are about to authenticate the ",(0,n.kt)("em",{parentName:"p"},"PnP Microsoft 365 Management Shell")," application to access your tenant on your behalf."),(0,n.kt)("p",null,"If you are using the CLI for Microsoft 365 for the first time, you will be also prompted to verify the permissions you are about to grant the CLI for Microsoft 365. This is referred to as ",(0,n.kt)("em",{parentName:"p"},"consent"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:o(73635).Z},(0,n.kt)("img",{alt:"Granting the CLI for Microsoft 365 the necessary permissions",src:o(48034).Z,width:"1704",height:"1360"}))),(0,n.kt)("p",null,"The device code flow is the recommended approach for command-line tools to authenticate with resources secured with Azure AD. Because the authentication process is handled in the browser by Azure AD itself, it allows you to benefit of rich security features such as multi-factor authentication or conditional access. The device code flow is interactive and requires user interaction which might be limiting if you want to use the CLI for Microsoft 365 in your continuous deployment setup which is fully automated and doesn't involve user interaction."),(0,n.kt)("h4",{id:"log-in-using-user-name-and-password"},"Log in using user name and password"),(0,n.kt)("p",null,"An alternative way to log in to Microsoft 365 in the CLI for Microsoft 365 is by using a user name and password. To use this way of authenticating, set the ",(0,n.kt)("inlineCode",{parentName:"p"},"authType")," option to ",(0,n.kt)("inlineCode",{parentName:"p"},"password")," and specify your credentials using the ",(0,n.kt)("inlineCode",{parentName:"p"},"userName")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"password")," options."),(0,n.kt)("p",null,"To log in to Microsoft 365 using your user name and password, execute:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType password --userName user@contoso.com --password pass@word1\n")),(0,n.kt)("p",null,"Using credentials to log in to Microsoft 365 is convenient in automation scenarios where you cannot authenticate interactively. The downside of this way of authenticating is, that it doesn't allow you to use any of the advanced security features that Azure AD offers. If your account for example uses multi-factor authentication, logging in to Microsoft 365 using credentials will fail."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"When logging in to Microsoft 365 using credentials, CLI for Microsoft 365 will persist not only the retrieved access and refresh token, but also the credentials you specified when logging in. This is necessary for the CLI to be able to retrieve a new refresh token, in case the previously retrieved refresh token expired or has been invalidated.")),(0,n.kt)("p",null,"Generally, you should use the default device code flow. If you need to use a non-interactive authentication flow, you can authenticate using a certificate or credentials of an account that has sufficient privileges in your tenant and doesn't have multi-factor authentication or other advanced security features enabled."),(0,n.kt)("h4",{id:"log-in-using-a-certificate"},"Log in using a certificate"),(0,n.kt)("p",null,"Another way to log in to Microsoft 365 in the CLI for Microsoft 365 is by using a certificate. To use this authentication method, set the ",(0,n.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_AADAPPID")," environment variable to the ID of the Azure AD application that you want to use to authenticate the CLI for Microsoft 365 and the ",(0,n.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_TENANT")," environment variable to the ID of your Azure AD directory. When calling the login command, set the ",(0,n.kt)("inlineCode",{parentName:"p"},"authType")," option to ",(0,n.kt)("inlineCode",{parentName:"p"},"certificate")," and specify the path to the certificate private key using the ",(0,n.kt)("inlineCode",{parentName:"p"},"certificateFile")," option. Optionally, you can specify the certificate's thumbprint using the ",(0,n.kt)("inlineCode",{parentName:"p"},"thumbprint")," option. If not specified, CLI will automatically calculate it from the specified certificate."),(0,n.kt)("p",null,"To log in to Microsoft 365 using a Personal Information Exchange (.pfx) file, execute:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType certificate --certificateFile /Users/user/dev/localhost.pfx --password 'pass@word1'\n")),(0,n.kt)("p",null,"To log in to Microsoft 365 using a Privacy Enhanced Mail (PEM) certificate, execute:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType certificate --certificateFile /Users/user/dev/localhost.pem\n")),(0,n.kt)("p",null,"Logging in to Microsoft 365 using a certificate is convenient for automation scenarios where you cannot authenticate interactively but also don't want to use credentials."),(0,n.kt)("p",null,"Because there is no user context when logging in using a certificate, you will typically create a new Azure AD application, specific to your organization and grant it the required permissions."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"You should keep in mind, that because the CLI for Microsoft 365 will be accessing these APIs with app-only context, you need to grant the correct application permissions rather than delegated permissions that would be used in other authentication methods.")),(0,n.kt)("p",null,"Logging in using a certificate gives the CLI for Microsoft 365 app-only access to Microsoft 365 services. Not all operations support app-only access so it is possible, that some CLI commands will fail when executed while logged in to Microsoft 365 using a certificate."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"When logging in to Microsoft 365 using a certificate, CLI for Microsoft 365 will persist not only the retrieved access token but also the contents of the certificate's private key and its thumbprint. This is necessary for the CLI to be able to retrieve a new access token in case of the previously retrieved access token expired or has been invalidated.")),(0,n.kt)("p",null,"Generally, you should use the default device code flow. If you need to use a non-interactive authentication flow, to for example integrate the CLI for Microsoft 365 in your build pipeline, you can login using a certificate or user credentials."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"PFX files exported from a Windows key store will not work as they are protected with either a password or Active Directory account. The private key must either be exported from the protected .pfx or newly created using 3rd party tools like OpenSSL (",(0,n.kt)("a",{parentName:"p",href:"https://www.openssl.org/"},"https://www.openssl.org/"),").")),(0,n.kt)("p",null,"Create a new self signed certificate:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout privateKey.key -out certificate.cer\n")),(0,n.kt)("p",null,"Create a new Personal Information Exchange (.pfx) file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'openssl pkcs12 -export -out protected.pfx -inkey privateKey.key -in certificate.cer -password pass:"pass@word1"\n')),(0,n.kt)("p",null,"At this point the ",(0,n.kt)("inlineCode",{parentName:"p"},"protected.pfx")," file can be used to log in the CLI for Microsoft 365 following the instructions above for logging in using a .pfx file."),(0,n.kt)("p",null,"If login with the .pfx file does not work then extract the private key from a protected .pfx and unprotect it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"openssl pkcs12 -in protected.pfx -out privateKeyWithPassphrase.pem -nodes\n")),(0,n.kt)("p",null,"At this point the ",(0,n.kt)("inlineCode",{parentName:"p"},"privateKeyWithPassphrase.pem")," file can be used to log in the CLI for Microsoft 365 following the instructions above for logging in using a PEM certificate."),(0,n.kt)("h4",{id:"log-in-using-a-secret"},"Log in using a secret"),(0,n.kt)("p",null,"CLI for Microsoft 365 also supports login using a secret. To use this authentication method, set the ",(0,n.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_AADAPPID")," environment variable to the ID of the Azure AD application that you want to use to authenticate the CLI for Microsoft 365 and the ",(0,n.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_TENANT")," environment variable to the ID of your Azure AD directory. When calling the login command, set the ",(0,n.kt)("inlineCode",{parentName:"p"},"authType")," option to ",(0,n.kt)("inlineCode",{parentName:"p"},"secret")," and specify the client secret value. "),(0,n.kt)("p",null,"To log in to Microsoft 365 using a secret, execute:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType secret --secret topSeCr3t@007\n")),(0,n.kt)("p",null,"Logging in to Microsoft 365 using a secret is convenient for automation scenarios where you cannot authenticate interactively but also don't want to use credentials."),(0,n.kt)("p",null,"Because there is no user context when logging in using a secret, you will typically create a new Azure AD application, specific to your organization and grant it the required permissions."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"You should keep in mind, that because the CLI for Microsoft 365 will be accessing these APIs with app-only context, you need to grant the correct application permissions rather than delegated permissions that would be used in other authentication methods.")),(0,n.kt)("p",null,"Logging in using a secret gives the CLI for Microsoft 365 app-only access to Microsoft 365 services. Not all operations support app-only access so it is possible, that some CLI commands will fail when executed while logged in to Microsoft 365 using a secret."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Currently, SharePoint does not support authentication using Azure AD App ID and Secret. CLI for Microsoft 365 commands that call the SharePoint APIs will fail while logged in to Microsoft 365 using a Secret.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"When logging in to Microsoft 365 using a secret, CLI for Microsoft 365 will persist not only the retrieved access token but also the secret. This is necessary for the CLI to be able to retrieve a new access token in case of the previously retrieved access token expired or has been invalidated.")),(0,n.kt)("h4",{id:"log-in-using-a-browser-authentication"},"Log in using a browser authentication"),(0,n.kt)("p",null,"Yet another way to log in to Microsoft 365 in the CLI for Microsoft 365 is by using a an interactive browser authentication. To use this authentication method, call the login command with the ",(0,n.kt)("inlineCode",{parentName:"p"},"authType")," option set to ",(0,n.kt)("inlineCode",{parentName:"p"},"browser"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType browser\n")),(0,n.kt)("p",null,"This option is especially useful if you have conditional access policies configured in your tenant but you can also use it instead of the default device code flow."),(0,n.kt)("h3",{id:"check-login-status"},"Check login status"),(0,n.kt)("p",null,"To see if you're logged in to Microsoft 365 and if so, with which account, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," command."),(0,n.kt)("p",null,"If you're logged in to Microsoft 365 using a certificate, the ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," command will show the name of the Azure AD application used to log in."),(0,n.kt)("h3",{id:"log-out-from-microsoft-365"},"Log out from Microsoft 365"),(0,n.kt)("p",null,"To log out from Microsoft 365, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"logout")," command. Executing the ",(0,n.kt)("inlineCode",{parentName:"p"},"logout")," command removes all connection information such as user name, refresh or access tokens stored on your computer."),(0,n.kt)(a.Z,{src:"https://asciinema.org/a/445658.cast",rows:15,idleTimeLimit:3,preload:!0,loop:!0,autoplay:!0,mdxType:"AsciinemaPlayer"}),(0,n.kt)("h3",{id:"working-with-sharepoint-online"},"Working with SharePoint Online"),(0,n.kt)("p",null,"CLI for Microsoft 365 automatically detects the URL of your SharePoint Online tenant when executing SharePoint commands. All you need to do is to log in to Microsoft 365 with your account. Commands, that operate on specific site collections or sites, allow you to specify the URL of the site on which you want to perform the operation and you can execute them without having to specifically connect or login to the given site. CLI for Microsoft 365 will automatically retrieve the necessary access token to execute the given command."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Some SharePoint commands in the CLI for Microsoft 365 require access to tenant-level resources. To execute these commands, you have to have permissions to access the tenant admin site.")),(0,n.kt)("h2",{id:"authorize-with-microsoft-365"},"Authorize with Microsoft 365"),(0,n.kt)("p",null,"To authorize for communicating with Microsoft 365 API, the CLI for Microsoft 365 uses the OAuth 2.0 protocol. When using the default device code flow, you authenticate with Azure AD in the web browser. After authenticating, CLI for Microsoft 365 will attempt to retrieve a valid access token for the specified Microsoft 365 service. If you have insufficient permissions to access the particular service, authorization will fail with an adequate error."),(0,n.kt)("p",null,"If you authenticate using credentials, the authentication and authorization are a part of the same request that CLI for Microsoft 365 issues towards Azure AD. If either authentication or authorization fails, you will see a corresponding error message explaining what went wrong."),(0,n.kt)("h2",{id:"re-consent-the-pnp-microsoft-365-management-shell-azure-ad-application"},"Re-consent the PnP Microsoft 365 Management Shell Azure AD application"),(0,n.kt)("p",null,"CLI for Microsoft 365 uses the ",(0,n.kt)("em",{parentName:"p"},"PnP Microsoft 365 Management Shell")," Azure AD application to log in to your Microsoft 365 tenant on your behalf. As we add new commands to the CLI, it's possible, that new permissions will be added to the ",(0,n.kt)("em",{parentName:"p"},"PnP Microsoft 365 Management Shell")," Azure AD application. To be able to use the newly added commands which depend on these new permissions, you will have to re-approve the ",(0,n.kt)("em",{parentName:"p"},"PnP Microsoft 365 Management Shell")," Azure AD application in your Azure AD. This process is also known as ",(0,n.kt)("em",{parentName:"p"},"re-consenting the Azure AD application"),"."),(0,n.kt)("p",null,"To re-consent the ",(0,n.kt)("em",{parentName:"p"},"PnP Microsoft 365 Management Shell")," application in your Azure AD, in the command line execute:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 cli reconsent\n")),(0,n.kt)("p",null,"CLI for Microsoft 365 will provide you with a URL that you should open in the web browser and sign in with your organizational account. After authenticating, Azure AD will prompt you to approve the new set of permissions. Once you approved the permissions, you will be redirected to an empty page. You can now use all commands in the CLI for Microsoft 365."),(0,n.kt)("h2",{id:"logging-in-to-microsoft-365-via-a-proxy"},"Logging in to Microsoft 365 via a proxy"),(0,n.kt)("p",null,"All communication between the CLI for Microsoft 365 and Microsoft 365 APIs happens via web requests. If you're behind a proxy, you should set up an environment variable to allow CLI for Microsoft 365 to log in to Microsoft 365. More information about the necessary configuration steps is available at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/request/request#controlling-proxy-behaviour-using-environment-variables"},"https://github.com/request/request#controlling-proxy-behaviour-using-environment-variables"),"."),(0,n.kt)("h2",{id:"persisted-connections"},"Persisted connections"),(0,n.kt)("p",null,"After logging in to Microsoft 365, the CLI for Microsoft 365 will persist that connection information until you explicitly log out from Microsoft 365. This is necessary to support building scripts using the CLI for Microsoft 365, where each command is executed independently of other commands. Persisted connection contains information about the user name used to establish the connection as well as the retrieved refresh- and access tokens. To secure this information from unprivileged access, it's stored securely in the password store specific to the platform on which you're using the CLI. For more information, see the separate article dedicated to ",(0,n.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/concepts/persisting-connection"},"persisting connection information")," in the CLI for Microsoft 365."))}d.isMDXComponent=!0},73635:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/files/consent-1c5eaccf25b556f896114e67fd99fd5c.png"},48034:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/consent-1c5eaccf25b556f896114e67fd99fd5c.png"}}]);