"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[99869],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,k=d["".concat(i,".").concat(u)]||d[u]||l[u]||s;return a?o.createElement(k,r(r({ref:t},m),{},{components:a})):o.createElement(k,r({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:n,r[1]=p;for(var c=2;c<s;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>p});var o=a(87462),n=(a(67294),a(3905));const s={toc:[]},r="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(r,(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",{parentName:"p"},"options"),", ",(0,n.kt)("code",{parentName:"p"},"examples"),", ",(0,n.kt)("code",{parentName:"p"},"remarks"),", ",(0,n.kt)("code",{parentName:"p"},"response"),", ",(0,n.kt)("code",{parentName:"p"},"full"),". Default is ",(0,n.kt)("code",{parentName:"p"},"full"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--query [query]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,n.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output type. ",(0,n.kt)("code",{parentName:"p"},"json,text,csv,md"),". Default ",(0,n.kt)("code",{parentName:"p"},"json"))),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--verbose"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with verbose logging")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--debug"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with debug logging"))))}p.isMDXComponent=!0},90889:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=a(87462),n=(a(67294),a(3905)),s=a(26054);const r={},p="spo customaction set",i={unversionedId:"cmd/spo/customaction/customaction-set",id:"cmd/spo/customaction/customaction-set",title:"spo customaction set",description:"Updates a user custom action for site or site collection",source:"@site/docs/cmd/spo/customaction/customaction-set.mdx",sourceDirName:"cmd/spo/customaction",slug:"/cmd/spo/customaction/customaction-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/customaction/customaction-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/customaction/customaction-set.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo customaction remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/customaction/customaction-remove"},next:{title:"spo eventreceiver get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/eventreceiver/eventreceiver-get"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],d={toc:m},l="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(l,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spo-customaction-set"},"spo customaction set"),(0,n.kt)("p",null,"Updates a user custom action for site or site collection"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo customaction set [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Url of the site or site collection to update the custom action")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-i, --id <id>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"ID of the custom action to update")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The name of the custom action")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-t, --title [title]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The title of the custom action")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-l, --location [location]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The actual location where this custom action need to be added like ",(0,n.kt)("code",{parentName:"p"},"CommandUI.Ribbon"))),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-g, --group [group]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The group of the custom action like ",(0,n.kt)("code",{parentName:"p"},"SiteActions"))),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-d, --description [description]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The description of the custom action")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--sequence [sequence]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Sequence of this CustomAction being injected. Use when you have a specific sequence with which to have multiple CustomActions being added to the page")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--actionUrl [actionUrl]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The URL, URI or JavaScript function associated with the action. URL example ",(0,n.kt)("code",{parentName:"p"},"~site/_layouts/sampleurl.aspx")," or ",(0,n.kt)("code",{parentName:"p"},"~sitecollection/_layouts/sampleurl.aspx"))),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--imageUrl [imageUrl]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The URL of the image associated with the custom action")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-e, --commandUIExtension [commandUIExtension]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"XML fragment that determines user interface properties of the custom action")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--registrationId [registrationId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Specifies the identifier of the list or item content type that this action is associated with, or the file type or programmatic identifier")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--registrationType [registrationType]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Specifies the type of object associated with the custom action. Allowed values ",(0,n.kt)("code",{parentName:"p"},"None,List,ContentType,ProgId,FileType"),". Default ",(0,n.kt)("code",{parentName:"p"},"None"))),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--rights [rights]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"A case-sensitive string array that contain the permissions needed for the custom action. Allowed values ",(0,n.kt)("code",{parentName:"p"},"EmptyMask,ViewListItems,AddListItems,EditListItems,DeleteListItems,ApproveItems,OpenItems,ViewVersions,DeleteVersions,CancelCheckout,ManagePersonalViews,ManageLists,ViewFormPages,AnonymousSearchAccessList,Open,ViewPages,AddAndCustomizePages,ApplyThemeAndBorder,ApplyStyleSheets,ViewUsageData,CreateSSCSite,ManageSubwebs,CreateGroups,ManagePermissions,BrowseDirectories,BrowseUserInfo,AddDelPrivateWebParts,UpdatePersonalWebParts,ManageWeb,AnonymousSearchAccessWebLists,UseClientIntegration,UseRemoteAPIs,ManageAlerts,CreateAlerts,EditMyUserInfo,EnumeratePermissions,FullMask"),". Default ",(0,n.kt)("code",{parentName:"p"},"EmptyMask"))),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-s, --scope [scope]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Scope of the existing custom action. Allowed values ",(0,n.kt)("code",{parentName:"p"},"Site,Web,All"),". Default ",(0,n.kt)("code",{parentName:"p"},"All"),". Note, this would not update the scope, but might speed up the execution of the scope of the custom action is known.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--scriptBlock [scriptBlock]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Specifies a block of script to be executed. This attribute is only applicable when the Location attribute is set to ScriptLink")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--scriptSrc [scriptSrc]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Specifies a file that contains script to be executed. This attribute is only applicable when the Location attribute is set to ScriptLink")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-c, --clientSideComponentId [clientSideComponentId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The Client Side Component Id (GUID) of the custom action")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-p, --clientSideComponentProperties [clientSideComponentProperties]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The Client Side Component Properties of the custom action. Specify values as a JSON string : ",(0,n.kt)("code",{parentName:"p"},'\'{"testMessage":"Test message"}\'')))),(0,n.kt)(s.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Running this command from the Windows Command Shell (cmd.exe) or PowerShell for Windows OS XP, 7, 8, 8.1 without bash installed might require additional formatting for command options that have JSON, XML or JavaScript values because the command shell treats quotes differently. For example, this is how ApplicationCustomizer user custom action can be created from the Windows cmd.exe:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo customaction set --webUrl https://contoso.sharepoint.com/sites/test --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --clientSideComponentProperties \'{\\"testMessage\\":\\"Test message\\"}\'\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"--rights")," option accepts ",(0,n.kt)("strong",{parentName:"p"},"case-sensitive")," values."),(0,n.kt)("p",null,"Note, specifying the scope option might speed up the execution of the command, but would not update the scope. If the scope has to be changed, then the existing custom action should be removed and new should be added with different scope."),(0,n.kt)("admonition",{title:"Escaping JSON in PowerShell",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"When using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--clientSideComponentProperties")," option it's possible to enter a JSON string. In PowerShell 5 to 7.2 ",(0,n.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#escaping-double-quotes-in-powershell"},"specific escaping rules")," apply due to an issue. Remember that you can also use ",(0,n.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#passing-complex-content-into-cli-options"},"file tokens")," instead.")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Updates tenant-wide SharePoint Framework Application Customizer extension properties in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/test"},"https://contoso.sharepoint.com/sites/test"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo customaction set --webUrl https://contoso.sharepoint.com/sites/test --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --clientSideComponentProperties \'{"testMessage":"Test message"}\'\n')),(0,n.kt)("p",null,"Updates tenant-wide SharePoint Framework ",(0,n.kt)("strong",{parentName:"p"},"modern List View")," Command Set extension in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/test"},"https://contoso.sharepoint.com/sites/test"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo customaction set --webUrl https://contoso.sharepoint.com/sites/test --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --clientSideComponentProperties \'{"sampleTextOne":"One item is selected in the list.", "sampleTextTwo":"This command is always visible."}\' --sequence 100\n')),(0,n.kt)("p",null,"Updates url custom action in the SiteActions menu in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/test"},"https://contoso.sharepoint.com/sites/test"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo customaction set --webUrl https://contoso.sharepoint.com/sites/test --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --actionUrl "~site/SitePages/Home.aspx"\n')),(0,n.kt)("p",null,"Updates ScriptLink custom action with script source in ",(0,n.kt)("strong",{parentName:"p"},"classic pages")," in site collection ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/test"},"https://contoso.sharepoint.com/sites/test"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo customaction set --webUrl https://contoso.sharepoint.com/sites/test --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --scriptSrc "~sitecollection/SiteAssets/YourScript.js"\n')),(0,n.kt)("p",null,"Creates custom action with delegated rights in the SiteActions menu in site ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/test"},"https://contoso.sharepoint.com/sites/test"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo customaction set --webUrl https://contoso.sharepoint.com/sites/test --id 058140e3-0e37-44fc-a1d3-79c487d371a3 --rights "AddListItems,DeleteListItems,ManageLists"\n')),(0,n.kt)("h2",{id:"more-information"},"More information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"UserCustomAction REST API resources: ",(0,n.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/office/dn531432.aspx#bk_UserCustomAction"},"https://msdn.microsoft.com/en-us/library/office/dn531432.aspx#bk_UserCustomAction")),(0,n.kt)("li",{parentName:"ul"},"UserCustomAction Locations and Group IDs: ",(0,n.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/office/bb802730.aspx"},"https://msdn.microsoft.com/en-us/library/office/bb802730.aspx")),(0,n.kt)("li",{parentName:"ul"},"UserCustomAction Element: ",(0,n.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/office/ms460194.aspx"},"https://msdn.microsoft.com/en-us/library/office/ms460194.aspx")),(0,n.kt)("li",{parentName:"ul"},"UserCustomAction Rights: ",(0,n.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.spbasepermissions.aspx"},"https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.spbasepermissions.aspx"))))}u.isMDXComponent=!0}}]);