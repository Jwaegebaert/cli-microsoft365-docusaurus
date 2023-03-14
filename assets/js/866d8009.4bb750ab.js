"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[60720],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=l(a),u=o,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(k,s(s({ref:t},d),{},{components:a})):n.createElement(k,s({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[m]="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>r});var n=a(87462),o=(a(67294),a(3905));const i={toc:[]},s="wrapper";function r(e){let{components:t,...a}=e;return(0,o.kt)(s,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}r.isMDXComponent=!0},60954:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(87462),o=(a(67294),a(3905)),i=a(37884);const s={},r="spo site add",p={unversionedId:"cmd/spo/site/site-add",id:"cmd/spo/site/site-add",title:"spo site add",description:"Creates new SharePoint Online site",source:"@site/docs/cmd/spo/site/site-add.mdx",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-add.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo serviceprincipal set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/serviceprincipal/serviceprincipal-set"},next:{title:"spo site appcatalog add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-appcatalog-add"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks for classic sites",id:"remarks-for-classic-sites",level:2},{value:"Remarks for modern sites",id:"remarks-for-modern-sites",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],m={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-site-add"},"spo site add"),(0,o.kt)("p",null,"Creates new SharePoint Online site"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site add [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--type [type]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Type of sites to add. Allowed values ",(0,o.kt)("code",{parentName:"p"},"TeamSite,CommunicationSite,ClassicSite"),", default ",(0,o.kt)("code",{parentName:"p"},"TeamSite"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-t, --title <title>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Site title")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-a, --alias [alias]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Site alias, used in the URL and in the team site group e-mail (applies to type TeamSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --url [url]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Site URL  (applies to type CommunicationSite, ClassicSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-z, --timeZone [timeZone]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Integer representing time zone to use for the site (applies to type ClassicSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-d, --description [description]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Site description")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-l, --lcid [lcid]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Site language in the LCID format, eg. ",(0,o.kt)("em",{parentName:"p"},"1033")," for ",(0,o.kt)("em",{parentName:"p"},"en-US"),". See ",(0,o.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/office/languages-supported-by-sharepoint-dfbf3652-2902-4809-be21-9080b6512fff"},"SharePoint documentation")," for the list of supported languages")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--owners [owners]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Comma-separated list of users to set as site owners (applies to type TeamSite, ClassicSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--isPublic"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Determines if the associated group is public or not (applies to type TeamSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-c, --classification [classification]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Site classification (applies to type TeamSite, CommunicationSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--siteDesign [siteDesign]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Type of communication site to create. Allowed values ",(0,o.kt)("code",{parentName:"p"},"Topic,Showcase,Blank"),", default ",(0,o.kt)("code",{parentName:"p"},"Topic"),". When creating a communication site, specify either ",(0,o.kt)("code",{parentName:"p"},"siteDesign")," or ",(0,o.kt)("code",{parentName:"p"},"siteDesignId")," (applies to type CommunicationSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--siteDesignId [siteDesignId]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Id of the custom site design to use to create the site. When creating a communication site, specify either ",(0,o.kt)("code",{parentName:"p"},"siteDesign")," or ",(0,o.kt)("code",{parentName:"p"},"siteDesignId")," (applies to type CommunicationSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--shareByEmailEnabled"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Determines whether it's allowed to share file with guests (applies to type CommunicationSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-w, --webTemplate [webTemplate]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Template to use for creating the site. Default ",(0,o.kt)("code",{parentName:"p"},"STS#0"),"  (applies to type ClassicSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--resourceQuota [resourceQuota]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The quota for this site collection in Sandboxed Solutions units. Default ",(0,o.kt)("code",{parentName:"p"},"0"),"  (applies to type ClassicSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--resourceQuotaWarningLevel [resourceQuotaWarningLevel]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The warning level for the resource quota. Default ",(0,o.kt)("code",{parentName:"p"},"0"),"  (applies to type ClassicSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--storageQuota [storageQuota]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The storage quota for this site collection in megabytes. Default ",(0,o.kt)("code",{parentName:"p"},"100"),"  (applies to type ClassicSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--storageQuotaWarningLevel [storageQuotaWarningLevel]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The warning level for the storage quota in megabytes. Default ",(0,o.kt)("code",{parentName:"p"},"100"),"  (applies to type ClassicSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--removeDeletedSite"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Set, to remove existing deleted site with the same URL from the Recycle Bin  (applies to type ClassicSite)")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--wait"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Wait for the site to be provisioned before completing the command  (applies to type ClassicSite)"))),(0,o.kt)(i.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks-for-classic-sites"},"Remarks for classic sites"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-z, --timeZone")," option you have to specify the time zone of the site. For more information about the valid values see ",(0,o.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/library/microsoft.sharepoint.spregionalsettings.timezones.aspx"},"https://msdn.microsoft.com/library/microsoft.sharepoint.spregionalsettings.timezones.aspx"),"."),(0,o.kt)("p",null,"The value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--resourceQuota")," option must not exceed the company's aggregate available Sandboxed Solutions quota. For more information, see Resource Usage Limits on Sandboxed Solutions in SharePoint 2010: ",(0,o.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/gg615462.aspx"},"http://msdn.microsoft.com/en-us/library/gg615462.aspx"),"."),(0,o.kt)("p",null,"The value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--resourceQuotaWarningLevel")," option must not exceed the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--resourceQuota")," option."),(0,o.kt)("p",null,"The value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--storageQuota")," option must not exceed the company's available quota."),(0,o.kt)("p",null,"The value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--storageQuotaWarningLevel")," option must not exceed the the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--storageQuota")," option."),(0,o.kt)("p",null,"If you try to create a site with the same URL as a site that has been previously moved to the recycle bin, you will get an error. To avoid this error, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--removeDeletedSite")," option. Prior to creating the site, the spo site add command will check if the site with the specified URL has been previously moved to the recycle bin and if so, will remove it. Because removing sites from the recycle bin might take a moment, it should be used in conjunction with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--wait")," option so that the new site is not created before the old site is fully removed."),(0,o.kt)("p",null,"Deleting and creating classic site collections is by default asynchronous and depending on the current state of Office 365, might take up to few minutes. If you're building a script with steps that require the site to be fully provisioned, you should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--wait")," flag. When using this flag, the spo site add command will keep running until it received confirmation from Office 365 that the site has been fully provisioned."),(0,o.kt)("h2",{id:"remarks-for-modern-sites"},"Remarks for modern sites"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--owners")," option is mandatory for creating ",(0,o.kt)("inlineCode",{parentName:"p"},"CommunicationSite")," sites with app-only permissions."),(0,o.kt)("p",null,"When trying to create a team site using app-only permissions, you will get an ",(0,o.kt)("em",{parentName:"p"},"Insufficient privileges to complete the operation.")," error. As a workaround, you can use the ",(0,o.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/aad/o365group/o365group-add"},(0,o.kt)("inlineCode",{parentName:"a"},"aad o365group add"))," command, followed by ",(0,o.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/spo/site/site-set"},(0,o.kt)("inlineCode",{parentName:"a"},"spo site set"))," to further configure the Team site."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Create modern team site with private group"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site add --alias team1 --title "Team 1"\n')),(0,o.kt)("p",null,"Create modern team site with description and classification"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site add --type TeamSite --alias team1 --title "Team 1" --description "Site of team 1" --classification LBI\n')),(0,o.kt)("p",null,"Create modern team site with public group"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site add --type TeamSite --alias team1 --title "Team 1" --isPublic\n')),(0,o.kt)("p",null,"Create modern team site using the Dutch language"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site add --alias team1 --title "Team 1" --lcid 1043\n')),(0,o.kt)("p",null,"Create modern team site with the specified users as owners"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site add --alias team1 --title "Team 1" --owners "steve@contoso.com, bob@contoso.com"\n')),(0,o.kt)("p",null,"Create communication site using the Topic design"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site add --type CommunicationSite --url https://contoso.sharepoint.com/sites/marketing --title Marketing\n")),(0,o.kt)("p",null,"Create communication site using app-only permissions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site add --type CommunicationSite --url https://contoso.sharepoint.com/sites/marketing --title Marketing --owners "john.smith@contoso.com"\n')),(0,o.kt)("p",null,"Create communication site using the Showcase design"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site add --type CommunicationSite --url https://contoso.sharepoint.com/sites/marketing --title Marketing --siteDesign Showcase\n")),(0,o.kt)("p",null,"Create communication site using a custom site design"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site add --type CommunicationSite --url https://contoso.sharepoint.com/sites/marketing --title Marketing --siteDesignId 99f410fe-dd79-4b9d-8531-f2270c9c621c\n")),(0,o.kt)("p",null,"Create communication site using the Blank design with description and classification"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site add --type CommunicationSite --url https://contoso.sharepoint.com/sites/marketing --title Marketing --description Site of the marketing department --classification MBI --siteDesign Blank\n")),(0,o.kt)("p",null,"Create new classic site collection using the Team site template. Set time zone to ",(0,o.kt)("inlineCode",{parentName:"p"},"UTC+01:00"),". Don't wait for the site provisioning to complete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site add --type ClassicSite --url https://contoso.sharepoint.com/sites/team --title Team --owners admin@contoso.onmicrosoft.com --timeZone 4\n")),(0,o.kt)("p",null,"Create new classic site collection using the Team site template. Set time zone to ",(0,o.kt)("inlineCode",{parentName:"p"},"UTC+01:00"),". Wait for the site provisioning to complete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site add --type ClassicSite --url https://contoso.sharepoint.com/sites/team --title Team --owners admin@contoso.onmicrosoft.com --timeZone 4 --webTemplate STS#0 --wait\n")),(0,o.kt)("p",null,"Create new classic site collection using the Team site template. Set time zone to ",(0,o.kt)("inlineCode",{parentName:"p"},"UTC+01:00"),". If a site with the same URL is in the recycle bin, delete it. Wait for the site provisioning to complete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site add --type ClassicSite --url https://contoso.sharepoint.com/sites/team --title Team --owners admin@contoso.onmicrosoft.com --timeZone 4 --webTemplate STS#0 --removeDeletedSite --wait\n")),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating SharePoint Communication Site using REST: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/apis/communication-site-creation-rest"},"https://docs.microsoft.com/en-us/sharepoint/dev/apis/communication-site-creation-rest"))))}u.isMDXComponent=!0}}]);