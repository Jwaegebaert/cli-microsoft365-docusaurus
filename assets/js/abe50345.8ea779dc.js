"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[9925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:s,a[1]=r;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=n(87462),s=(n(67294),n(3905));const i={},a="spo site set",r={unversionedId:"cmd/spo/site/site-set",id:"cmd/spo/site/site-set",title:"spo site set",description:"Updates properties of the specified site",source:"@site/docs/cmd/spo/site/site-set.md",sourceDirName:"cmd/spo/site",slug:"/cmd/spo/site/site-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/site/site-set.md",tags:[],version:"current",lastUpdatedAt:1658271108,formattedLastUpdatedAt:"Jul 19, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo site rename",permalink:"/cli-microsoft365-docusaurus/cmd/spo/site/site-rename"},next:{title:"spo sitedesign add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/sitedesign/sitedesign-add"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"spo-site-set"},"spo site set"),(0,s.kt)("p",null,"Updates properties of the specified site"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site set [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-u, --url <url>"),"\n: The URL of the site collection to update"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-t, --title [title]"),"\n: The new title for the site collection"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-d, --description [description]"),"\n: The site description"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--classification [classification]"),"\n: The new classification for the site collection"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--disableFlows [disableFlows]"),"\n: Set to ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," to disable using Microsoft Flow in this site collection"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--isPublic [isPublic]"),"\n: Set to ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," to make the group linked to the site public or to ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," to make it private"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--owners [owners]"),"\n: Comma-separated list of users to add as site collection administrators"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--shareByEmailEnabled [shareByEmailEnabled]"),"\n: Set to true to allow to share files with guests and to false to disallow it"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--siteDesignId [siteDesignId]"),"\n: Id of the custom site design to apply to the site"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--sharingCapability [sharingCapability]"),"\n: The sharing capability for the site. Allowed values:  ",(0,s.kt)("inlineCode",{parentName:"p"},"Disabled"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ExternalUserSharingOnly"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ExternalUserAndGuestSharing"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ExistingExternalUserSharingOnly"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--siteLogoUrl [siteLogoUrl]"),"\n: Set the logo for the site collection. This can be an absolute or relative URL to a file on the current site collection."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--resourceQuota [resourceQuota]"),"\n: The quota for this site collection in Sandboxed Solutions units"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--resourceQuotaWarningLevel [resourceQuotaWarningLevel]"),"\n: The warning level for the resource quota"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--storageQuota [storageQuota]"),"\n: The storage quota for this site collection in megabytes"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--storageQuotaWarningLevel [storageQuotaWarningLevel]"),"\n: The warning level for the storage quota in megabytes"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--allowSelfServiceUpgrade [allowSelfServiceUpgrade]"),"\n: Set to allow tenant administrators to upgrade the site collection"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--lockState [lockState]"),"\n: Sets site's lock state. Allowed values ",(0,s.kt)("inlineCode",{parentName:"p"},"Unlock,NoAdditions,ReadOnly,NoAccess")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--noScriptSite [noScriptSite]"),"\n: Specifies if the site allows custom script or not"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--wait"),"\n: Wait for the settings to be applied before completing the command"),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("p",null,"!!! important\nTo use this command you have to have permissions to access the tenant admin site."),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"If the specified url doesn't refer to an existing site collection, you will get a ",(0,s.kt)("inlineCode",{parentName:"p"},'404 - "404 FILE NOT FOUND"')," error."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"isPublic")," property can be set only on groupified site collections. If you try to set it on a site collection without a group, you will get an error."),(0,s.kt)("p",null,"When setting owners, the specified owners will be added to the already configured owners. Existing owners will not be removed."),(0,s.kt)("p",null,"The value of the ",(0,s.kt)("inlineCode",{parentName:"p"},"--resourceQuota")," option must not exceed the company's aggregate available Sandboxed Solutions quota. For more information, see Resource Usage Limits on Sandboxed Solutions in SharePoint 2010: ",(0,s.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/gg615462.aspx"},"http://msdn.microsoft.com/en-us/library/gg615462.aspx"),"."),(0,s.kt)("p",null,"The value of the ",(0,s.kt)("inlineCode",{parentName:"p"},"--resourceQuotaWarningLevel")," option must not exceed the value of the ",(0,s.kt)("inlineCode",{parentName:"p"},"--resourceQuota")," option or the current value of the ",(0,s.kt)("em",{parentName:"p"},"UserCodeMaximumLevel")," property."),(0,s.kt)("p",null,"The value of the ",(0,s.kt)("inlineCode",{parentName:"p"},"--storageQuota")," option must not exceed the company's available quota."),(0,s.kt)("p",null,"The value of the ",(0,s.kt)("inlineCode",{parentName:"p"},"--storageQuotaWarningLevel")," option must not exceed the the value of the ",(0,s.kt)("inlineCode",{parentName:"p"},"--storageQuota")," option or the current value of the ",(0,s.kt)("em",{parentName:"p"},"StorageMaximumLevel")," property."),(0,s.kt)("p",null,"For more information on locking sites see ",(0,s.kt)("a",{parentName:"p",href:"https://technet.microsoft.com/en-us/library/cc263238.aspx"},"https://technet.microsoft.com/en-us/library/cc263238.aspx"),"."),(0,s.kt)("p",null,"For more information on configuring no script sites see ",(0,s.kt)("a",{parentName:"p",href:"https://support.office.com/en-us/article/Turn-scripting-capabilities-on-or-off-1f2c515f-5d7e-448a-9fd7-835da935584f"},"https://support.office.com/en-us/article/Turn-scripting-capabilities-on-or-off-1f2c515f-5d7e-448a-9fd7-835da935584f"),"."),(0,s.kt)("p",null,"Setting site properties is by default asynchronous and depending on the current state of Microsoft 365, might take up to few minutes. If you're building a script with steps that require the site to be fully configured, you should use the ",(0,s.kt)("inlineCode",{parentName:"p"},"--wait")," flag. When using this flag, the ",(0,s.kt)("inlineCode",{parentName:"p"},"spo site set")," command will keep running until it received confirmation from Microsoft 365 that the site has been fully configured."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Update site collection's classification"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site set --url https://contoso.sharepoint.com/sites/sales --classification MBI\n")),(0,s.kt)("p",null,"Reset site collection's classification."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site set --url https://contoso.sharepoint.com/sites/sales --classification\n")),(0,s.kt)("p",null,"Disable using Microsoft Flow on the site collection"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site set --url https://contoso.sharepoint.com/sites/sales --disableFlows true\n")),(0,s.kt)("p",null,"Update the visibility of the Microsoft 365 group behind the specified groupified site collection to public"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site set --url https://contoso.sharepoint.com/sites/sales --isPublic true\n")),(0,s.kt)("p",null,"Update site collection's owners"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site set --url https://contoso.sharepoint.com/sites/sales --owners "john@contoso.onmicrosoft.com,steve@contoso.onmicrosoft.com"\n')),(0,s.kt)("p",null,"Allow sharing files in the site collection with guests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site set --url https://contoso.sharepoint.com/sites/sales --shareByEmailEnabled true\n")),(0,s.kt)("p",null,"Apply the specified site ID to the site collection"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site set --url https://contoso.sharepoint.com/sites/sales --siteDesignId "eb2f31da-9461-4fbf-9ea1-9959b134b89e"\n')),(0,s.kt)("p",null,"Update site collection's title"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site set --url https://contoso.sharepoint.com/sites/sales --title "My new site"\n')),(0,s.kt)("p",null,"Update site collection's description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site set --url https://contoso.sharepoint.com/sites/sales --description "my description"\n')),(0,s.kt)("p",null,"Restrict external sharing to already available external users only"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site set --url https://contoso.sharepoint.com/sites/sales --sharingCapability ExistingExternalUserSharingOnly\n")),(0,s.kt)("p",null,"Set the logo on the site"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site set --url https://estruyfdev2.sharepoint.com/sites/sales --siteLogoUrl "/sites/sales/SiteAssets/parker-ms-1200.png"\n')),(0,s.kt)("p",null,"Unset the logo on the site"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo site set --url https://estruyfdev2.sharepoint.com/sites/sales --siteLogoUrl ""\n')),(0,s.kt)("p",null,"Lock the site preventing users from accessing it. Wait for the configuration to complete"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo site set --url https://contoso.sharepoint.com/sites/team --LockState NoAccess --wait\n")))}m.isMDXComponent=!0}}]);