"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[78728],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=l(i),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return i?n.createElement(f,o(o({ref:t},c),{},{components:i})):n.createElement(f,o({ref:t},c))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,o=new Array(s);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[m]="string"==typeof e?e:a,o[1]=r;for(var l=2;l<s;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},45391:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=i(87462),a=(i(67294),i(3905));const s={},o="spo site ensure",r={unversionedId:"cmd/spo/site/site-ensure",id:"cmd/spo/site/site-ensure",title:"spo site ensure",description:"Ensures that the particular site collection exists and updates its properties if necessary.",source:"@site/docs/cmd/spo/site/site-ensure.md",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-ensure",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-ensure",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-ensure.md",tags:[],version:"current",lastUpdatedAt:1612432134,formattedLastUpdatedAt:"Feb 4, 2021",frontMatter:{},sidebar:"commands",previous:{title:"spo site commsite enable",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-commsite-enable"},next:{title:"spo site get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-get"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-site-ensure"},"spo site ensure"),(0,a.kt)("p",null,"Ensures that the particular site collection exists and updates its properties if necessary."),(0,a.kt)("p",null,"The command is a combination of ",(0,a.kt)("inlineCode",{parentName:"p"},"spo web get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"spo site add")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"spo site set"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site ensure [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --url <url>"),"\n: URL of the site to ensure"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--type [type]"),"\n: Expected type of the site. Allowed values ",(0,a.kt)("inlineCode",{parentName:"p"},"TeamSite,CommunicationSite,ClassicSite"),". If not specified, will not check the type of the site if one exists at the specified URL."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-t, --title <title>"),"\n: Site title"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-a, --alias [alias]"),"\n: Site alias, used in the URL and in the team site group e-mail (applies to type ",(0,a.kt)("inlineCode",{parentName:"p"},"TeamSite"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-z, --timeZone [timeZone]"),"\n: Integer representing time zone to use for the site (applies to type ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassicSite"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-d, --description [description]"),"\n: Site description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-l, --lcid [lcid]"),"\n: Site language in the LCID format, eg. ",(0,a.kt)("em",{parentName:"p"},"1033")," for ",(0,a.kt)("em",{parentName:"p"},"en-US"),". See ",(0,a.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/office/languages-supported-by-sharepoint-dfbf3652-2902-4809-be21-9080b6512fff"},"SharePoint documentation")," for the list of supported languages"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--owners [owners]"),"\n: Comma-separated list of users to set as site owners (applies to type TeamSite, ClassicSite)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--isPublic"),"\n: Determines if the associated group is public or not (applies to type ",(0,a.kt)("inlineCode",{parentName:"p"},"TeamSite"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c, --classification [classification]"),"\n: Site classification (applies to type ",(0,a.kt)("inlineCode",{parentName:"p"},"TeamSite"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CommunicationSite"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--siteDesign [siteDesign]"),"\n: Type of communication site to create. Allowed values ",(0,a.kt)("inlineCode",{parentName:"p"},"Topic,Showcase,Blank"),", default ",(0,a.kt)("inlineCode",{parentName:"p"},"Topic"),". Used only for creating site when one doesn't exist."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--siteDesignId [siteDesignId]"),"\n: Id of the custom site design to use to create the site. When creating a communication site, specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"siteDesign")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"siteDesignId")," (applies to type ",(0,a.kt)("inlineCode",{parentName:"p"},"CommunicationSite"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--shareByEmailEnabled"),"\n: Determines whether it's allowed to share file with guests (applies to type ",(0,a.kt)("inlineCode",{parentName:"p"},"CommunicationSite"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-w, --webTemplate [webTemplate]"),"\n: Template to use for creating the site. Default ",(0,a.kt)("inlineCode",{parentName:"p"},"STS#0"),"  (applies to type ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassicSite"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--resourceQuota [resourceQuota]"),"\n: The quota for this site collection in Sandboxed Solutions units. Default ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"  (applies to type ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassicSite"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--resourceQuotaWarningLevel [resourceQuotaWarningLevel]"),"\n: The warning level for the resource quota. Default ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"  (applies to type ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassicSite"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--storageQuota [storageQuota]"),"\n: The storage quota for this site collection in megabytes. Default ",(0,a.kt)("inlineCode",{parentName:"p"},"100"),"  (applies to type ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassicSite"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--storageQuotaWarningLevel [storageQuotaWarningLevel]"),"\n: The warning level for the storage quota in megabytes. Default ",(0,a.kt)("inlineCode",{parentName:"p"},"100"),"  (applies to type ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassicSite"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--removeDeletedSite"),"\n: Set, to remove existing deleted site with the same URL from the Recycle Bin  (applies to type ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassicSite"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--wait"),"\n: Wait for the site to be provisioned before completing the command  (applies to type ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassicSite"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--disableFlows [disableFlows]"),"\n: Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to disable using Microsoft Flow in this site collection"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--sharingCapability [sharingCapability]"),"\n: The sharing capability for the site. Allowed values:  ",(0,a.kt)("inlineCode",{parentName:"p"},"Disabled"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ExternalUserSharingOnly"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ExternalUserAndGuestSharing"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ExistingExternalUserSharingOnly"),"."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"This command checks if a site collection exists at the specified URL."),(0,a.kt)("p",null,"If no site is found, this command will create one using the specified options. For more information about creating site collections and things that you should into account, see the ",(0,a.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/spo/site/site-add"},(0,a.kt)("inlineCode",{parentName:"a"},"spo site add"))," command."),(0,a.kt)("p",null,"If a site is found at the specified URL, this command will update its properties using the specified values. For more information about updating site collections and things that you should take into account see the ",(0,a.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/spo/site/site-set"},(0,a.kt)("inlineCode",{parentName:"a"},"spo site set"))," command."),(0,a.kt)("p",null,"If another site exists at the specified URL and you haven't specified the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," option, this command will proceed with updating its properties. If you specified the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and it doesn't match the type of the existing site, this command will return an error."),(0,a.kt)("p",null,"If you set the type to ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassicSite"),", you should also set a value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"webTemplate")," option. If you don't, checking the type of existing site will be skipped. If no site exists at the specified URL, creating the site will fail."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Ensure that a site exists at the specified URL. Create a modern team site if no site exists. If a site is found, don't check its type and update its title."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site ensure --url https://contoso.sharepoint.com/sites/team1 --alias team1 --title "Team 1"\n')),(0,a.kt)("p",null,"Ensure that a communication site exists at the specified URL. Create a communication site if no site exists. If a site of different type is found, return an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site ensure --url https://contoso.sharepoint.com/sites/comms --title Comms --type CommunicationSite\n")),(0,a.kt)("p",null,"Ensure that a classic site exists at the specified URL. Create a classic team site if no site exists. If a site of different type is found, return an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site ensure --url https://contoso.sharepoint.com/sites/classic --title Classic --type ClassicSite\n")),(0,a.kt)("p",null,"Ensure that a site exists at the specified URL. Create a modern team site if no site exists. If a site is found, don't check its type and update its title and properties."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site ensure --url https://contoso.sharepoint.com/sites/team1 --alias team1 --title "Team 1" --isPublic --shareByEmailEnabled\n')),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-microsoft365-docusaurus/cmd/spo/site/site-add"},(0,a.kt)("inlineCode",{parentName:"a"},"spo site add"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-microsoft365-docusaurus/cmd/spo/site/site-set"},(0,a.kt)("inlineCode",{parentName:"a"},"spo site set")))))}u.isMDXComponent=!0}}]);