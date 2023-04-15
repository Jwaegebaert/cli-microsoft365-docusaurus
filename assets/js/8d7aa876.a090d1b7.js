"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[53158],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(o),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return o?n.createElement(f,r(r({ref:t},l),{},{components:o})):n.createElement(f,r({ref:t},l))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:a,r[1]=p;for(var s=2;s<i;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},97610:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=o(87462),a=(o(67294),o(3905));const i={},r="viva connections app create",p={unversionedId:"cmd/viva/connections/connections-app-create",id:"cmd/viva/connections/connections-app-create",title:"viva connections app create",description:"Creates a Viva Connections desktop app package to upload to Microsoft Teams",source:"@site/docs/cmd/viva/connections/connections-app-create.md",sourceDirName:"cmd/viva/connections",slug:"/cmd/viva/connections/connections-app-create",permalink:"/cli-microsoft365-docusaurus/cmd/viva/connections/connections-app-create",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/viva/connections/connections-app-create.md",tags:[],version:"current",lastUpdatedAt:1667518590,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{},sidebar:"commands",previous:{title:"todo task set",permalink:"/cli-microsoft365-docusaurus/cmd/todo/task/task-set"},next:{title:"yammer group list",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/group/group-list"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],l={toc:s},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"viva-connections-app-create"},"viva connections app create"),(0,a.kt)("p",null,"Creates a Viva Connections desktop app package to upload to Microsoft Teams"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 viva connections app create [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--portalUrl <portalUrl>"),"\n: The URL of the site to pin in Microsoft Teams. Must be a Communication site"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--name <name>"),"\n: Name of the app to create, eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"Contoso"),". No longer than 30 characters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--description <description>"),"\n: Short description of the app. Displayed in the app's ",(0,a.kt)("em",{parentName:"p"},"About")," dialog. No longer than 80 characters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--longDescription <longDescription>"),"\n: Long description of the app. Displayed in the app's ",(0,a.kt)("em",{parentName:"p"},"About")," dialog. No longer than 4000 characters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--privacyPolicyUrl [privacyPolicyUrl]"),"\n: URL to your organization's privacy policy. Displayed in the app's ",(0,a.kt)("em",{parentName:"p"},"About")," dialog. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://privacy.microsoft.com/en-us/privacystatement")," if not specified"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--termsOfUseUrl [termsOfUseUrl]"),"\n: URL to your organization's terms of use. Displayed in the app's ",(0,a.kt)("em",{parentName:"p"},"About")," dialog. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://go.microsoft.com/fwlink/?linkid=2039674")," if not specified"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--companyName <companyName>"),"\n: Your organization's name. Displayed in the app's ",(0,a.kt)("em",{parentName:"p"},"About")," dialog"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--companyWebsiteUrl <companyWebsiteUrl>"),"\n: Your organization's website URL. Displayed in the app's ",(0,a.kt)("em",{parentName:"p"},"About")," dialog"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--coloredIconPath <coloredIconPath>"),"\n: Absolute or relative path to the color icon for your app"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--outlineIconPath <outlineIconPath>"),"\n: Absolute or relative path to the outline icon for your app"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--accentColor [accentColor]"),"\n: A HEX color to use in conjunction with and as a background for your outline icon. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"#40497E")," if not specified"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--force"),"\n: Specify, to overwrite the existing package file on disk"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If the specified portal URL doesn't exist, the command will a ",(0,a.kt)("inlineCode",{parentName:"p"},"404 - FILE NOT FOUND")," error."),(0,a.kt)("p",null,"The specified portal URL must point to a valid Communication site. To get the list of Communication sites in your tenant, execute: ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 spo site list --type CommunicationSite"),"."),(0,a.kt)("p",null,"The command generates a Microsoft Teams app package. App packages must meet specific requirements to be uploaded to Microsoft Teams. Specified attributes must not exceed their maximum length and the specified color and outline icons must be respectively 192x192px and 32x32px. For the latest list of requirements, see the links in the ",(0,a.kt)("strong",{parentName:"p"},"More information")," section at the end of this page. The generated app package will be written in the current working folder."),(0,a.kt)("p",null,"After creating the Viva Connections desktop app package, you need to upload it to your Microsoft Teams app catalog. You can do it either manually, or using the CLI by executing ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 teams app publish --filePath ./contoso.zip"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Create a Viva Connections desktop app package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 viva connections app create --portalUrl https://contoso.sharepoint.com --name Contoso --description "Contoso company app" --longDescription "Stay on top of what\'s happening at Contoso" --companyName Contoso --companyWebsiteUrl https://contoso.com --coloredIconPath icon-color.png --outlineIconPath icon-outline.png\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add Viva Connections for Microsoft Teams desktop: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/sharepoint/viva-connections?WT.mc_id=m365-15896-cxa"},"https://docs.microsoft.com/sharepoint/viva-connections")),(0,a.kt)("li",{parentName:"ul"},"App manifest checklist: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/app-manifest-checklist?WT.mc_id=m365-15896-cxa"},"https://docs.microsoft.com/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/app-manifest-checklist")),(0,a.kt)("li",{parentName:"ul"},"Reference: Manifest schema for Microsoft Teams: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/microsoftteams/platform/resources/schema/manifest-schema?WT.mc_id=m365-15896-cxa"},"https://docs.microsoft.com/microsoftteams/platform/resources/schema/manifest-schema"))))}u.isMDXComponent=!0}}]);