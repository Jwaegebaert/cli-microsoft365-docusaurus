"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[81974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),p=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(r.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(r,".").concat(u)]||c[u]||m[u]||l;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const l={},o="spo list set",s={unversionedId:"cmd/spo/list/list-set",id:"cmd/spo/list/list-set",title:"spo list set",description:"Updates the settings of the specified list",source:"@site/docs/cmd/spo/list/list-set.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-set.md",tags:[],version:"current",lastUpdatedAt:1674322724,formattedLastUpdatedAt:"Jan 21, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list roleinheritance reset",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-roleinheritance-reset"},next:{title:"spo list sitescript get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-sitescript-get"}},r={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-list-set"},"spo list set"),(0,a.kt)("p",null,"Updates the settings of the specified list"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list set [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--id [id]"),"\n: ID of the list. Specify either id, title or url but not multiple."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--title [title]"),"\n: Title of the list. Specify either id, title or url but not multiple."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--url [url]"),"\n: Relative URL of the list. Specify either id, title or url but not multiple."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--newTitle [newTitle]"),"\n: New title for the list"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--allowDeletion [allowDeletion]"),"\n: Boolean value specifying whether the list can be deleted. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--allowEveryoneViewItems [allowEveryoneViewItems]"),"\n: Boolean value specifying whether everyone can view documents in the documentlibrary or attachments to items in the list. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--allowMultiResponses [allowMultiResponses]"),"\n: Boolean value specifying whether users are allowed to give multiple responses to the survey. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--contentTypesEnabled [contentTypesEnabled]"),"\n: Boolean value specifying whether content types are enabled for the list. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--crawlNonDefaultViews [crawlNonDefaultViews]"),"\n: Boolean value specifying whether to crawl non default views. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--defaultContentApprovalWorkflowId [defaultContentApprovalWorkflowId]"),"\n: Value that specifies the default workflow identifier for content approval on the list (GUID)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--defaultDisplayFormUrl [defaultDisplayFormUrl]"),"\n: Value that specifies the location of the default display form for the list"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--defaultEditFormUrl [defaultEditFormUrl]"),"\n: Value that specifies the URL of the edit form to use for list items in the list"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--description [description]"),"\n: The description for the list"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--direction [direction]"),"\n: Value that specifies the reading order of the list. Valid values are NONE,LTR,RTL"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--disableGridEditing [disableGridEditing]"),"\n: Property for assigning or retrieving grid editing on the list. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--draftVersionVisibility [draftVersionVisibility]"),"\n: Value that specifies the minimum permission required to view minor versions and drafts within the list. Allowed values Reader,Author,Approver. Default Reader"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--emailAlias [emailAlias]"),"\n: If e-mail notification is enabled, gets or sets the e-mail address to use tonotify to the owner of an item when an assignment has changed or the item has been updated."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enableAssignToEmail [enableAssignToEmail]"),"\n: Boolean value specifying whether e-mail notification is enabled for the list. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enableAttachments [enableAttachments]"),"\n: Boolean value that specifies whether attachments can be added to items in the list. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enableDeployWithDependentList [enableDeployWithDependentList]"),"\n: Boolean value that specifies whether the list can be deployed with a dependent list. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enableFolderCreation [enableFolderCreation]"),"\n: Boolean value that specifies whether folders can be created for the list. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enableMinorVersions [enableMinorVersions]"),"\n: Boolean value that specifies whether minor versions are enabled when versioning is enabled for the document library. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enableModeration [enableModeration]"),"\n: Boolean value that specifies whether Content Approval is enabled for the list. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enablePeopleSelector [enablePeopleSelector]"),"\n: Enable user selector on event list. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enableResourceSelector [enableResourceSelector]"),"\n: Enables resource selector on an event list. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enableSchemaCaching [enableSchemaCaching]"),"\n: Boolean value specifying whether schema caching is enabled for the list. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enableSyndication [enableSyndication]"),"\n: Boolean value that specifies whether RSS syndication is enabled for the list. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enableThrottling [enableThrottling]"),"\n: Indicates whether throttling for this list is enabled or not. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enableVersioning [enableVersioning]"),"\n: Boolean value that specifies whether versioning is enabled for the document library. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enforceDataValidation [enforceDataValidation]"),"\n: Value that indicates whether certain field properties are enforced when an item is added or updated. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--excludeFromOfflineClient [excludeFromOfflineClient]"),"\n: Value that indicates whether the list should be downloaded to the client during offline synchronization. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--fetchPropertyBagForListView [fetchPropertyBagForListView]"),"\n: Specifies whether property bag information, as part of the list schema JSON,is retrieved when the list is being rendered on the client. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--followable [followable]"),"\n: Can a list be followed in an activity feed?. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--forceCheckout [forceCheckout]"),"\n: Boolean value that specifies whether forced checkout is enabled for the document library. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--forceDefaultContentType [forceDefaultContentType]"),"\n: Specifies whether we want to return the default Document root content type. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--hidden [hidden]"),"\n: Boolean value that specifies whether the list is hidden. Valid values are ",(0,a.kt)("inlineCode",{parentName:"p"},"true,false")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--includedInMyFilesScope [includedInMyFilesScope]"),"\n: Specifies whether this list is accessible to an app principal that has been granted an OAuth scope that contains the string \u201cmyfiles\u201d by a case-insensitive comparison when the current user is a site collection administrator of the personal site that contains the list"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--irmEnabled [irmEnabled]"),"\n: Gets or sets a Boolean value that specifies whether Information Rights Management (IRM) is enabled for the list"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--irmExpire [irmExpire]"),"\n: Gets or sets a Boolean value that specifies whether Information Rights Management (IRM) expiration is enabled for the list"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--irmReject [irmReject]"),"\n: Gets or sets a Boolean value that specifies whether Information Rights Management (IRM) rejection is enabled for the list"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--isApplicationList [isApplicationList]"),"\n: Indicates whether this list should be treated as a top level navigation object or not"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--listExperienceOptions [listExperienceOptions]"),"\n: Gets or sets the list experience for the list. Allowed values Auto,NewExperience,ClassicExperience. Default Auto"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--majorVersionLimit [majorVersionLimit]"),"\n: Gets or sets the maximum number of major versions allowed for an item in a document library that uses version control with major versions only."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--majorWithMinorVersionsLimit [majorWithMinorVersionsLimit]"),"\n: Gets or sets the maximum number of major versions that are allowed for an item in a document library that uses version control with both major and minor versions."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--multipleDataList [multipleDataList]"),"\n: Gets or sets a Boolean value that specifies whether the list in a Meeting Workspace sitecontains data for multiple meeting instances within the site"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--navigateForFormsPages [navigateForFormsPages]"),"\n: Indicates whether to navigate for forms pages or use a modal dialog"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--needUpdateSiteClientTag [needUpdateSiteClientTag]"),"\n: A boolean value that determines whether to editing documents in this list should increment the ClientTag for the site. The tag is used to allow clients to cache JS/CSS/resources that are retrieved from the Content DB, including custom CSR templates."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--noCrawl [noCrawl]"),"\n: Gets or sets a Boolean value specifying whether crawling is enabled for the list"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--onQuickLaunch [onQuickLaunch]"),"\n: Gets or sets a Boolean value that specifies whether the list appears on the Quick Launch area of the home page"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--ordered [ordered]"),"\n: Gets or sets a Boolean value that specifies whether the option to allow users to reorder items in the list is available on the Edit View page for the list"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--parserDisabled [parserDisabled]"),"\n: Gets or sets a Boolean value that specifies whether the parser should be disabled"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--readOnlyUI [readOnlyUI]"),"\n: A boolean value that indicates whether the UI for this list should be presented in a read-only fashion. This will not affect security nor will it actually prevent changes to the list from occurring - it only affects the way the UI is displayed"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--readSecurity [readSecurity]"),"\n: Gets or sets the Read security setting for the list. Valid values are 1 (All users have Read access to all items)|2 (Users have Read access only to items that they create)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--requestAccessEnabled [requestAccessEnabled]"),"\n: Gets or sets a Boolean value that specifies whether the option to allow users to request access to the list is available"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--restrictUserUpdates [restrictUserUpdates]"),"\n: A boolean value that indicates whether the this list is a restricted one or not The value can't be changed if there are existing items in the list"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--sendToLocationName [sendToLocationName]"),"\n: Gets or sets a file name to use when copying an item in the list to another document library."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--sendToLocationUrl [sendToLocationUrl]"),"\n: Gets or sets a URL to use when copying an item in the list to another document library"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--showUser [showUser]"),"\n: Gets or sets a Boolean value that specifies whether names of users are shown in the results of the survey"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--templateFeatureId [templateFeatureId]"),"\n: The globally unique identifier (GUID) of a template feature that is associated with the list"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--useFormsForDisplay [useFormsForDisplay]"),"\n: Indicates whether forms should be considered for display context or not"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--validationFormula [validationFormula]"),"\n: Gets or sets a formula that is evaluated each time that a list item is added or updated."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--validationMessage [validationMessage]"),"\n: Gets or sets the message that is displayed when validation fails for a list item."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--writeSecurity [writeSecurity]"),"\n: Gets or sets the Write security setting for the list. Valid values are 1 (All users can modify all items)|2 (Users can modify only items that they create)|4 (Users cannot modify any list item)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--schemaXml [schemaXml]"),"\n: (deprecated) The schema in Collaborative Application Markup Language (CAML) schemas that defines the list"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Update the ",(0,a.kt)("em",{parentName:"p"},"contentTypesEnabled")," property of the list with id ",(0,a.kt)("em",{parentName:"p"},"3EA5A977-315E-4E25-8B0F-E4F949BF6B8F")," located in site ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list set --webUrl https://contoso.sharepoint.com/sites/project-x --id 3EA5A977-315E-4E25-8B0F-E4F949BF6B8F --contentTypesEnabled true\n")),(0,a.kt)("p",null,"Enable versioning and set the number of major versions to keep on the list with id ",(0,a.kt)("em",{parentName:"p"},"3EA5A977-315E-4E25-8B0F-E4F949BF6B8F")," located in site ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list set --webUrl https://contoso.sharepoint.com/sites/project-x --id 3EA5A977-315E-4E25-8B0F-E4F949BF6B8F --enableVersioning true --majorVersionLimit 50\n")),(0,a.kt)("p",null,"Enable content types and versioning in the list with id ",(0,a.kt)("em",{parentName:"p"},"3EA5A977-315E-4E25-8B0F-E4F949BF6B8F")," located in site ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list set --webUrl https://contoso.sharepoint.com/sites/project-x --id 3EA5A977-315E-4E25-8B0F-E4F949BF6B8F --contentTypesEnabled true --enableVersioning true --majorVersionLimit 50 --majorWithMinorVersionsLimit 100\n")),(0,a.kt)("p",null,"Update the Title of a list retrieved by it's original Title"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list set --webUrl https://contoso.sharepoint.com/sites/project-x --title Documents --newTitle 'Different Title'\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SPList Class Members information: ",(0,a.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.list_members.aspx"},"https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.list_members.aspx")),(0,a.kt)("li",{parentName:"ul"},"ListTemplateType enum information: ",(0,a.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.listtemplatetype.aspx"},"https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.listtemplatetype.aspx")),(0,a.kt)("li",{parentName:"ul"},"DraftVersionVisibilityType enum information: ",(0,a.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.draftvisibilitytype.aspx"},"https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.draftvisibilitytype.aspx")),(0,a.kt)("li",{parentName:"ul"},"ListExperience enum information: ",(0,a.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.listexperience.aspx"},"https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.listexperience.aspx"))))}m.isMDXComponent=!0}}]);