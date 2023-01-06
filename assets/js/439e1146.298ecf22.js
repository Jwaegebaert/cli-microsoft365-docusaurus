"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87347],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>h});var n=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),m=p(o),d=s,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return o?n.createElement(h,a(a({ref:t},l),{},{components:o})):n.createElement(h,a({ref:t},l))}));function h(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=o.length,a=new Array(i);a[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[m]="string"==typeof e?e:s,a[1]=r;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},72920:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=o(87462),s=(o(67294),o(3905));const i={},a="spo customaction set",r={unversionedId:"cmd/spo/customaction/customaction-set",id:"cmd/spo/customaction/customaction-set",title:"spo customaction set",description:"Updates a user custom action for site or site collection",source:"@site/docs/cmd/spo/customaction/customaction-set.md",sourceDirName:"cmd/spo/customaction",slug:"/cmd/spo/customaction/customaction-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/customaction/customaction-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/customaction/customaction-set.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo customaction remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/customaction/customaction-remove"},next:{title:"spo eventreceiver get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/eventreceiver/eventreceiver-get"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],l={toc:p};function m(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"spo-customaction-set"},"spo customaction set"),(0,s.kt)("p",null,"Updates a user custom action for site or site collection"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo customaction set [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: Url of the site or site collection to update the custom action"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: ID of the custom action to update"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: The name of the custom action"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-t, --title [title]"),"\n: The title of the custom action"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-l, --location [location]"),"\n: The actual location where this custom action need to be added like ",(0,s.kt)("inlineCode",{parentName:"p"},"CommandUI.Ribbon")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-g, --group [group]"),"\n: The group of the custom action like ",(0,s.kt)("inlineCode",{parentName:"p"},"SiteActions")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-d, --description [description]"),"\n: The description of the custom action"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--sequence [sequence]"),"\n: Sequence of this CustomAction being injected. Use when you have a specific sequence with which to have multiple CustomActions being added to the page"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--actionUrl [actionUrl]"),"\n: The URL, URI or JavaScript function associated with the action. URL example ",(0,s.kt)("inlineCode",{parentName:"p"},"~site/_layouts/sampleurl.aspx")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"~sitecollection/_layouts/sampleurl.aspx")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--imageUrl [imageUrl]"),"\n: The URL of the image associated with the custom action"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-e, --commandUIExtension [commandUIExtension]"),"\n: XML fragment that determines user interface properties of the custom action"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--registrationId [registrationId]"),"\n: Specifies the identifier of the list or item content type that this action is associated with, or the file type or programmatic identifier"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--registrationType [registrationType]"),"\n: Specifies the type of object associated with the custom action. Allowed values ",(0,s.kt)("inlineCode",{parentName:"p"},"None,List,ContentType,ProgId,FileType"),". Default ",(0,s.kt)("inlineCode",{parentName:"p"},"None")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--rights [rights]"),"\n: A case-sensitive string array that contain the permissions needed for the custom action. Allowed values ",(0,s.kt)("inlineCode",{parentName:"p"},"EmptyMask,ViewListItems,AddListItems,EditListItems,DeleteListItems,ApproveItems,OpenItems,ViewVersions,DeleteVersions,CancelCheckout,ManagePersonalViews,ManageLists,ViewFormPages,AnonymousSearchAccessList,Open,ViewPages,AddAndCustomizePages,ApplyThemeAndBorder,ApplyStyleSheets,ViewUsageData,CreateSSCSite,ManageSubwebs,CreateGroups,ManagePermissions,BrowseDirectories,BrowseUserInfo,AddDelPrivateWebParts,UpdatePersonalWebParts,ManageWeb,AnonymousSearchAccessWebLists,UseClientIntegration,UseRemoteAPIs,ManageAlerts,CreateAlerts,EditMyUserInfo,EnumeratePermissions,FullMask"),". Default ",(0,s.kt)("inlineCode",{parentName:"p"},"EmptyMask")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-s, --scope [scope]"),"\n: Scope of the existing custom action. Allowed values ",(0,s.kt)("inlineCode",{parentName:"p"},"Site,Web,All"),". Default ",(0,s.kt)("inlineCode",{parentName:"p"},"All"),". Note, this would not update the scope, but might speed up the execution of the scope of the custom action is known."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--scriptBlock [scriptBlock]"),"\n: Specifies a block of script to be executed. This attribute is only applicable when the Location attribute is set to ScriptLink"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--scriptSrc [scriptSrc]"),"\n: Specifies a file that contains script to be executed. This attribute is only applicable when the Location attribute is set to ScriptLink"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-c, --clientSideComponentId [clientSideComponentId]"),"\n: The Client Side Component Id (GUID) of the custom action"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-p, --clientSideComponentProperties [clientSideComponentProperties]"),"\n: The Client Side Component Properties of the custom action. Specify values as a JSON string : ",(0,s.kt)("inlineCode",{parentName:"p"},'\'{"testMessage":"Test message"}\'')),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"Running this command from the Windows Command Shell (cmd.exe) or PowerShell for Windows OS XP, 7, 8, 8.1 without bash installed might require additional formatting for command options that have JSON, XML or JavaScript values because the command shell treat quotes differently. For example, this is how ApplicationCustomizer user custom action can be created from the Windows cmd.exe:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo customaction set --webUrl https://contoso.sharepoint.com/sites/test --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --clientSideComponentProperties \'{\\"testMessage\\":\\"Test message\\"}\'\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"--rights")," option accepts ",(0,s.kt)("strong",{parentName:"p"},"case-sensitive")," values."),(0,s.kt)("p",null,"Note, specifying the scope option might speed up the execution of the command, but would not update the scope. If the scope has to be changed, then the existing custom action should be removed and new should be added with different scope."),(0,s.kt)("p",null,'!!! warning "Escaping JSON in PowerShell"\nWhen using the ',(0,s.kt)("inlineCode",{parentName:"p"},"--clientSideComponentProperties")," option it's possible to enter a JSON string. In PowerShell 5 to 7.2 ",(0,s.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#escaping-double-quotes-in-powershell"},"specific escaping rules")," apply due to an issue. Remember that you can also use ",(0,s.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#passing-complex-content-into-cli-options"},"file tokens")," instead."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Updates tenant-wide SharePoint Framework Application Customizer extension properties in site ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/test"},"https://contoso.sharepoint.com/sites/test"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo customaction set --webUrl https://contoso.sharepoint.com/sites/test --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --clientSideComponentProperties \'{"testMessage":"Test message"}\'\n')),(0,s.kt)("p",null,"Updates tenant-wide SharePoint Framework ",(0,s.kt)("strong",{parentName:"p"},"modern List View")," Command Set extension in site ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/test"},"https://contoso.sharepoint.com/sites/test"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo customaction set --webUrl https://contoso.sharepoint.com/sites/test --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --clientSideComponentProperties \'{"sampleTextOne":"One item is selected in the list.", "sampleTextTwo":"This command is always visible."}\' --sequence 100\n')),(0,s.kt)("p",null,"Updates url custom action in the SiteActions menu in site ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/test"},"https://contoso.sharepoint.com/sites/test"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo customaction set --webUrl https://contoso.sharepoint.com/sites/test --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --actionUrl "~site/SitePages/Home.aspx"\n')),(0,s.kt)("p",null,"Updates ScriptLink custom action with script source in ",(0,s.kt)("strong",{parentName:"p"},"classic pages")," in site collection ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/test"},"https://contoso.sharepoint.com/sites/test"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo customaction set --webUrl https://contoso.sharepoint.com/sites/test --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --scriptSrc "~sitecollection/SiteAssets/YourScript.js"\n')),(0,s.kt)("p",null,"Creates custom action with delegated rights in the SiteActions menu in site ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/test"},"https://contoso.sharepoint.com/sites/test"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo customaction set --webUrl https://contoso.sharepoint.com/sites/test --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --rights "AddListItems,DeleteListItems,ManageLists"\n')),(0,s.kt)("h2",{id:"more-information"},"More information"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"UserCustomAction REST API resources: ",(0,s.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/office/dn531432.aspx#bk_UserCustomAction"},"https://msdn.microsoft.com/en-us/library/office/dn531432.aspx#bk_UserCustomAction")),(0,s.kt)("li",{parentName:"ul"},"UserCustomAction Locations and Group IDs: ",(0,s.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/office/bb802730.aspx"},"https://msdn.microsoft.com/en-us/library/office/bb802730.aspx")),(0,s.kt)("li",{parentName:"ul"},"UserCustomAction Element: ",(0,s.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/office/ms460194.aspx"},"https://msdn.microsoft.com/en-us/library/office/ms460194.aspx")),(0,s.kt)("li",{parentName:"ul"},"UserCustomAction Rights: ",(0,s.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.spbasepermissions.aspx"},"https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.spbasepermissions.aspx"))))}m.isMDXComponent=!0}}]);