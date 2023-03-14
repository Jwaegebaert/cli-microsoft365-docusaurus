"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[65286],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>k});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(o),u=a,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return o?n.createElement(k,p(p({ref:t},s),{},{components:o})):n.createElement(k,p({ref:t},s))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,p=new Array(r);p[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<r;l++)p[l]=o[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},37884:(e,t,o)=>{o.d(t,{ZP:()=>i});var n=o(87462),a=(o(67294),o(3905));const r={toc:[]},p="wrapper";function i(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},r,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-h, --help [help]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,a.kt)("code",null,"options"),", ",(0,a.kt)("code",null,"examples"),", ",(0,a.kt)("code",null,"remarks"),", ",(0,a.kt)("code",null,"response"),", ",(0,a.kt)("code",null,"full"),". Default is ",(0,a.kt)("code",null,"full"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--query [query]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"JMESPath query string. See ",(0,a.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"-o, --output [output]"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Output type. ",(0,a.kt)("code",null,"json"),", ",(0,a.kt)("code",null,"text"),", ",(0,a.kt)("code",null,"csv"),", ",(0,a.kt)("code",null,"md"),". Default is ",(0,a.kt)("code",null,"json"),".")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--verbose"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with verbose logging.")),(0,a.kt)("dt",null,(0,a.kt)("p",null,(0,a.kt)("code",null,"--debug"))),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Runs command with debug logging."))))}i.isMDXComponent=!0},66626:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var n=o(87462),a=(o(67294),o(3905)),r=o(37884);const p={},i="viva connections app create",c={unversionedId:"cmd/viva/connections/connections-app-create",id:"cmd/viva/connections/connections-app-create",title:"viva connections app create",description:"Creates a Viva Connections desktop app package to upload to Microsoft Teams",source:"@site/docs/cmd/viva/connections/connections-app-create.mdx",sourceDirName:"cmd/viva/connections",slug:"/cmd/viva/connections/connections-app-create",permalink:"/cli-microsoft365-docusaurus/cmd/viva/connections/connections-app-create",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/viva/connections/connections-app-create.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"todo task set",permalink:"/cli-microsoft365-docusaurus/cmd/todo/task/task-set"},next:{title:"yammer group list",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/group/group-list"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"viva-connections-app-create"},"viva connections app create"),(0,a.kt)("p",null,"Creates a Viva Connections desktop app package to upload to Microsoft Teams"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 viva connections app create [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--portalUrl <portalUrl>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"The URL of the site to pin in Microsoft Teams. Must be a Communication site")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--name <name>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Name of the app to create, eg. ",(0,a.kt)("code",{parentName:"p"},"Contoso"),". No longer than 30 characters")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--description <description>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Short description of the app. Displayed in the app's ",(0,a.kt)("em",{parentName:"p"},"About")," dialog. No longer than 80 characters")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--longDescription <longDescription>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Long description of the app. Displayed in the app's ",(0,a.kt)("em",{parentName:"p"},"About")," dialog. No longer than 4000 characters")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--privacyPolicyUrl [privacyPolicyUrl]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"URL to your organization's privacy policy. Displayed in the app's ",(0,a.kt)("em",{parentName:"p"},"About")," dialog. Defaults to ",(0,a.kt)("code",{parentName:"p"},"https://privacy.microsoft.com/en-us/privacystatement")," if not specified")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--termsOfUseUrl [termsOfUseUrl]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"URL to your organization's terms of use. Displayed in the app's ",(0,a.kt)("em",{parentName:"p"},"About")," dialog. Defaults to ",(0,a.kt)("code",{parentName:"p"},"https://go.microsoft.com/fwlink/?linkid=2039674")," if not specified")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--companyName <companyName>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Your organization's name. Displayed in the app's ",(0,a.kt)("em",{parentName:"p"},"About")," dialog")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--companyWebsiteUrl <companyWebsiteUrl>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Your organization's website URL. Displayed in the app's ",(0,a.kt)("em",{parentName:"p"},"About")," dialog")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--coloredIconPath <coloredIconPath>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Absolute or relative path to the color icon for your app")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--outlineIconPath <outlineIconPath>"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Absolute or relative path to the outline icon for your app")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--accentColor [accentColor]"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"A HEX color to use in conjunction with and as a background for your outline icon. Defaults to ",(0,a.kt)("code",{parentName:"p"},"#40497E")," if not specified")),(0,a.kt)("dt",{parentName:"dl"},(0,a.kt)("p",{parentName:"dt"},(0,a.kt)("code",{parentName:"p"},"--force"))),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("p",{parentName:"dd"},"Specify, to overwrite the existing package file on disk"))),(0,a.kt)(r.ZP,{mdxType:"Global"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If the specified portal URL doesn't exist, the command will a ",(0,a.kt)("inlineCode",{parentName:"p"},"404 - FILE NOT FOUND")," error."),(0,a.kt)("p",null,"The specified portal URL must point to a valid Communication site. To get the list of Communication sites in your tenant, execute: ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 spo site list --type CommunicationSite"),"."),(0,a.kt)("p",null,"The command generates a Microsoft Teams app package. App packages must meet specific requirements to be uploaded to Microsoft Teams. Specified attributes must not exceed their maximum length and the specified color and outline icons must be respectively 192x192px and 32x32px. For the latest list of requirements, see the links in the ",(0,a.kt)("strong",{parentName:"p"},"More information")," section at the end of this page. The generated app package will be written in the current working folder."),(0,a.kt)("p",null,"After creating the Viva Connections desktop app package, you need to upload it to your Microsoft Teams app catalog. You can do it either manually, or using the CLI by executing ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 teams app publish --filePath ./contoso.zip"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Create a Viva Connections desktop app package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 viva connections app create --portalUrl https://contoso.sharepoint.com --name Contoso --description "Contoso company app" --longDescription "Stay on top of what\'s happening at Contoso" --companyName Contoso --companyWebsiteUrl https://contoso.com --coloredIconPath icon-color.png --outlineIconPath icon-outline.png\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add Viva Connections for Microsoft Teams desktop: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/sharepoint/viva-connections?WT.mc_id=m365-15896-cxa"},"https://docs.microsoft.com/sharepoint/viva-connections")),(0,a.kt)("li",{parentName:"ul"},"App manifest checklist: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/app-manifest-checklist?WT.mc_id=m365-15896-cxa"},"https://docs.microsoft.com/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/app-manifest-checklist")),(0,a.kt)("li",{parentName:"ul"},"Reference: Manifest schema for Microsoft Teams: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/microsoftteams/platform/resources/schema/manifest-schema?WT.mc_id=m365-15896-cxa"},"https://docs.microsoft.com/microsoftteams/platform/resources/schema/manifest-schema"))))}u.isMDXComponent=!0}}]);