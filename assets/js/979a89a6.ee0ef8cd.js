"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[84136],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(i),u=n,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return i?a.createElement(h,r(r({ref:t},d),{},{components:i})):a.createElement(h,r({ref:t},d))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,r[1]=s;for(var l=2;l<o;l++)r[l]=i[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},54428:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=i(87462),n=(i(67294),i(3905));const o={title:"Caveats when working with the CLI and certificate login",sidebar_position:10},r="Caveats when working with the CLI and certificate login",s={unversionedId:"user-guide/cli-certificate-caveats",id:"user-guide/cli-certificate-caveats",title:"Caveats when working with the CLI and certificate login",description:'I get error "AADSTS700027 Client assertion contains an invalid signature" when I login the CLI with certificate, what am I doing wrong',source:"@site/docs/user-guide/cli-certificate-caveats.md",sourceDirName:"user-guide",slug:"/user-guide/cli-certificate-caveats",permalink:"/cli-microsoft365-docusaurus/user-guide/cli-certificate-caveats",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/user-guide/cli-certificate-caveats.md",tags:[],version:"current",lastUpdatedAt:1678571673,formattedLastUpdatedAt:"Mar 11, 2023",sidebarPosition:10,frontMatter:{title:"Caveats when working with the CLI and certificate login",sidebar_position:10},sidebar:"userGuide",previous:{title:"Use your own Azure AD identity",permalink:"/cli-microsoft365-docusaurus/user-guide/using-own-identity"},next:{title:"Automate your CI/CD workflow using CLI for Microsoft 365 GitHub Actions",permalink:"/cli-microsoft365-docusaurus/user-guide/github-actions"}},c={},l=[{value:"I get error &quot;AADSTS700027 Client assertion contains an invalid signature&quot; when I login the CLI with certificate, what am I doing wrong",id:"i-get-error-aadsts700027-client-assertion-contains-an-invalid-signature-when-i-login-the-cli-with-certificate-what-am-i-doing-wrong",level:2},{value:"I get &quot;Error: AADSTS700025: Client is public so &#39;client_assertion&#39; should not be presented&quot;",id:"i-get-error-aadsts700025-client-is-public-so-client_assertion-should-not-be-presented",level:2},{value:"What is the minimum set of Azure AD app permissions to execute SharePoint commands with a certificate CLI login",id:"what-is-the-minimum-set-of-azure-ad-app-permissions-to-execute-sharepoint-commands-with-a-certificate-cli-login",level:2},{value:"I get an error: 403, &quot;AccessDenied Either scp or roles claim need to be present in the token&quot; when executing a CLI for Microsoft 365 SharePoint command. What does it mean",id:"i-get-an-error-403-accessdenied-either-scp-or-roles-claim-need-to-be-present-in-the-token-when-executing-a-cli-for-microsoft-365-sharepoint-command-what-does-it-mean",level:2},{value:"I am using CLI with a certificate, but when I execute the <code>spo site add</code> I get error &quot;Insufficient privileges to complete the operation.&quot;",id:"i-am-using-cli-with-a-certificate-but-when-i-execute-the-spo-site-add-i-get-error-insufficient-privileges-to-complete-the-operation",level:2},{value:"What are the minimum permissions required to use the <code>m365 aad o365group add</code> command",id:"what-are-the-minimum-permissions-required-to-use-the-m365-aad-o365group-add-command",level:3},{value:"What are the minimum permissions required to use the <code>m365 aad o365group add</code> command and the <code>m365 spo site set</code> command",id:"what-are-the-minimum-permissions-required-to-use-the-m365-aad-o365group-add-command-and-the-m365-spo-site-set-command",level:3},{value:"Will the <code>spo site add</code> command and CLI certificate login work for creating Communication sites and Classic sites",id:"will-the-spo-site-add-command-and-cli-certificate-login-work-for-creating-communication-sites-and-classic-sites",level:3},{value:"Why not make the Team Sites being created by just executing <code>spo site add</code>",id:"why-not-make-the-team-sites-being-created-by-just-executing-spo-site-add",level:3},{value:"There is a well-documented API from Microsoft. Why does the CLI not use it to create the modern Team Sites",id:"there-is-a-well-documented-api-from-microsoft-why-does-the-cli-not-use-it-to-create-the-modern-team-sites",level:3}],d={toc:l},m="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"caveats-when-working-with-the-cli-and-certificate-login"},"Caveats when working with the CLI and certificate login"),(0,n.kt)("h2",{id:"i-get-error-aadsts700027-client-assertion-contains-an-invalid-signature-when-i-login-the-cli-with-certificate-what-am-i-doing-wrong"},'I get error "AADSTS700027 Client assertion contains an invalid signature" when I login the CLI with certificate, what am I doing wrong'),(0,n.kt)("p",null,"There is an article ",(0,n.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-own-identity"},'"Using your own Azure AD identity"')," dedicated to using the CLI with your own identity, and you should have a look at it and see if it can help you. Many of the cases we've seen in the Github issues list are that people forget to set the ",(0,n.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_AADAPPID")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_TENANT")," environment variables. Setting these variables could be as easy as adding them before your command on the bash command line like ",(0,n.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_AADAPPID=value1 CLIMICROSOFT365_TENANT=value2 m365 command")," (see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pnp/cli-microsoft365/issues/1532"},"#1532")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pnp/cli-microsoft365/issues/1496#issuecomment-625549739"},"#1496"),"). If you are Windows user the syntax should be like ",(0,n.kt)("inlineCode",{parentName:"p"},"set CLIMICROSOFT365_AADAPPID=value1")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"set CLIMICROSOFT365_TENANT=value2")," then your cli command (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pnp/cli-microsoft365/issues/1121#issuecomment-533609882"},"#1121"),")."),(0,n.kt)("h2",{id:"i-get-error-aadsts700025-client-is-public-so-client_assertion-should-not-be-presented"},"I get \"Error: AADSTS700025: Client is public so 'client_assertion' should not be presented\""),(0,n.kt)("p",null,'If you want to authenticate the CLI using and certificate, you shouldn\'t treat the application as a public client. You should set the default client type your Azure AD application to "NO." More information can be found in this issue ',(0,n.kt)("a",{parentName:"p",href:"https://github.com/pnp/cli-microsoft365/issues/948#issuecomment-487145809"},"#948"),"."),(0,n.kt)("h2",{id:"what-is-the-minimum-set-of-azure-ad-app-permissions-to-execute-sharepoint-commands-with-a-certificate-cli-login"},"What is the minimum set of Azure AD app permissions to execute SharePoint commands with a certificate CLI login"),(0,n.kt)("p",null,"When you decide to use the CLI with your own Azure AD app to execute SharePoint CLI commands, you need to grant it at least the  Microsoft Graph ",(0,n.kt)("inlineCode",{parentName:"p"},"Sites.Read.All")," permission, and then any other scopes required by the commands you'd like to execute. For example, if you'd like to list all the sites within your tenant using the ",(0,n.kt)("inlineCode",{parentName:"p"},"m365 spo site list")," command, then the minimum permissions for your app would be Microsoft Graph ",(0,n.kt)("inlineCode",{parentName:"p"},"Sites.Read.All")," and SharePoint ",(0,n.kt)("inlineCode",{parentName:"p"},"Sites.Manage.All"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"your application requires the Microsoft Graph ",(0,n.kt)("inlineCode",{parentName:"li"},"Sites.Read.All")," permission because the ",(0,n.kt)("inlineCode",{parentName:"li"},"m365 login")," command is using ",(0,n.kt)("inlineCode",{parentName:"li"},"https://graph.microsoft.com/v1.0/sites/root?$select=webUrl")," API to dynamically find the root SharePoint site URL and use it to get a token for the SharePoint resource from Microsoft Identity dynamically."),(0,n.kt)("li",{parentName:"ul"},"your application requires the SharePoint ",(0,n.kt)("inlineCode",{parentName:"li"},"Sites.Manage.All")," permission to list the sites since the CLI uses SharePoint APIs to do that from the ",(0,n.kt)("inlineCode",{parentName:"li"},"spo site list")," command, and the minimum permissions to list sites is ",(0,n.kt)("inlineCode",{parentName:"li"},"Sites.Manage.All"),".")),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:i(1966).Z},(0,n.kt)("img",{alt:"Azure AD application permissions highlighted in Azure AD",src:i(45715).Z,width:"1048",height:"423"}))),(0,n.kt)("h2",{id:"i-get-an-error-403-accessdenied-either-scp-or-roles-claim-need-to-be-present-in-the-token-when-executing-a-cli-for-microsoft-365-sharepoint-command-what-does-it-mean"},'I get an error: 403, "AccessDenied Either scp or roles claim need to be present in the token" when executing a CLI for Microsoft 365 SharePoint command. What does it mean'),(0,n.kt)("p",null,"It means that the Azure AD application that the CLI is running under does not have Microsoft Graph ",(0,n.kt)("inlineCode",{parentName:"p"},"Sites.Read.All")," application permission granted. If you are trying to use the CLI with a certificate login and SharePoint, you would have to allow Microsoft Graph ",(0,n.kt)("inlineCode",{parentName:"p"},"Sites.Read.All")," application permissions to the Azure AD app."),(0,n.kt)("h2",{id:"i-am-using-cli-with-a-certificate-but-when-i-execute-the-spo-site-add-i-get-error-insufficient-privileges-to-complete-the-operation"},"I am using CLI with a certificate, but when I execute the ",(0,n.kt)("inlineCode",{parentName:"h2"},"spo site add"),' I get error "Insufficient privileges to complete the operation."'),(0,n.kt)("p",null,"This error can occur when you use the CLI with a certificate login and try to create a new SharePoint Team site that uses Microsoft 365 group (WebTemplate: #GROUP). Getting this error is a known issue with the CLI and the SharePoint APIs, but there is a workaround. The workaround is to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"m365 aad o365group add")," command to create Team Sites."),(0,n.kt)("p",null,"If your goal is to create team sites, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"m365 aad o365group add")," command. The command is calling a Microsoft API that creates a Microsoft 365 group with a SharePoint site collection associated with the group. When creating a Microsoft 365 Group, the Microsoft 365 APIs create a site collection with it. The ",(0,n.kt)("inlineCode",{parentName:"p"},"mailNickname")," property is the last portion of the site URL of the SharePoint Online site collection (",(0,n.kt)("a",{parentName:"p",href:"https://yourtentantName.sharepoint.com/sites/mailNickname%7D"},"https://yourtentantName.sharepoint.com/sites/mailNickname}"),"). You can combine the ",(0,n.kt)("inlineCode",{parentName:"p"},"m365 aad o365group add")," command with ",(0,n.kt)("inlineCode",{parentName:"p"},"m365 spo site set")," to change additional properties of the site not available in the ",(0,n.kt)("inlineCode",{parentName:"p"},"m365 aad o365group add")," command. "),(0,n.kt)("h3",{id:"what-are-the-minimum-permissions-required-to-use-the-m365-aad-o365group-add-command"},"What are the minimum permissions required to use the ",(0,n.kt)("inlineCode",{parentName:"h3"},"m365 aad o365group add")," command"),(0,n.kt)("p",null,"You would need the Microsoft Graph ",(0,n.kt)("inlineCode",{parentName:"p"},"Group.Create")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"User.Read.All")," application permissions."),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:i(45788).Z},(0,n.kt)("img",{alt:"Azure AD application permissions",src:i(73983).Z,width:"1038",height:"313"}))),(0,n.kt)("h3",{id:"what-are-the-minimum-permissions-required-to-use-the-m365-aad-o365group-add-command-and-the-m365-spo-site-set-command"},"What are the minimum permissions required to use the ",(0,n.kt)("inlineCode",{parentName:"h3"},"m365 aad o365group add")," command and the ",(0,n.kt)("inlineCode",{parentName:"h3"},"m365 spo site set")," command"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:i(58734).Z},(0,n.kt)("img",{alt:"Azure AD application permissions",src:i(83210).Z,width:"1023",height:"339"}))),(0,n.kt)("p",null,"You would need the Microsoft Graph ",(0,n.kt)("inlineCode",{parentName:"p"},"Group.Create")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"User.Read.All")," application permissions together with SharePoint ",(0,n.kt)("inlineCode",{parentName:"p"},"Sites.FullControl.All")," application permission."),(0,n.kt)("h3",{id:"will-the-spo-site-add-command-and-cli-certificate-login-work-for-creating-communication-sites-and-classic-sites"},"Will the ",(0,n.kt)("inlineCode",{parentName:"h3"},"spo site add")," command and CLI certificate login work for creating Communication sites and Classic sites"),(0,n.kt)("p",null,"Yes, it will. There is a known issue with creating modern Team sites, but the workaround above should sort that as well."),(0,n.kt)("h3",{id:"why-not-make-the-team-sites-being-created-by-just-executing-spo-site-add"},"Why not make the Team Sites being created by just executing ",(0,n.kt)("inlineCode",{parentName:"h3"},"spo site add")),(0,n.kt)("p",null,"We are discussing this with the rest of the CLI team, and we might implement a fallback to the Microsoft Graph Group APIs to create the site in case of a CLI certificate login. So, it will use the same APIs as the ",(0,n.kt)("inlineCode",{parentName:"p"},"aad o365group add")," command uses. Until this is implemented in the CLI we recommend to use the workaround described earlier."),(0,n.kt)("h3",{id:"there-is-a-well-documented-api-from-microsoft-why-does-the-cli-not-use-it-to-create-the-modern-team-sites"},"There is a well-documented API from Microsoft. Why does the CLI not use it to create the modern Team Sites"),(0,n.kt)("p",null,"There is a well-documented API for the creation of modern sites indeed. Unfortunately, the document mentions that we cannot create a new Team site based on Microsoft 365 Group."),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:i(28072).Z},(0,n.kt)("img",{alt:"API limitations highlighted in the API docs",src:i(49502).Z,width:"963",height:"267"}))))}p.isMDXComponent=!0},28072:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/files/doc-not-apply-to-team-sites-702b7feb9f029298d14c99299fa834d4.png"},45788:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/files/min-app-permissions-create-m365group-b40f68d8b96af5dbe336a698b93e5261.png"},1966:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/files/min-app-permissions-to-list-SP-sites-c021252b0ed92483a48464e605bf4aea.png"},58734:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/files/min-permissions-team-site-049038bb5de9512fa88454414d9ab550.png"},49502:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/doc-not-apply-to-team-sites-702b7feb9f029298d14c99299fa834d4.png"},73983:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/min-app-permissions-create-m365group-b40f68d8b96af5dbe336a698b93e5261.png"},45715:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/min-app-permissions-to-list-SP-sites-c021252b0ed92483a48464e605bf4aea.png"},83210:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/min-permissions-team-site-049038bb5de9512fa88454414d9ab550.png"}}]);