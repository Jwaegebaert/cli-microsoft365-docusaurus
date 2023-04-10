"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[80048],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>q});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=a,q=d["".concat(s,".").concat(m)]||d[m]||c[m]||n;return o?r.createElement(q,i(i({ref:t},u),{},{components:o})):r.createElement(q,i({ref:t},u))}));function q(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},34647:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=o(87462),a=(o(67294),o(3905));const n={},i="spo list sitescript get",l={unversionedId:"cmd/spo/list/list-sitescript-get",id:"cmd/spo/list/list-sitescript-get",title:"spo list sitescript get",description:"Extracts a site script from a SharePoint list",source:"@site/docs/cmd/spo/list/list-sitescript-get.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-sitescript-get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-sitescript-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-sitescript-get.md",tags:[],version:"current",lastUpdatedAt:1677283761,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-set"},next:{title:"spo list view add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-add"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-list-sitescript-get"},"spo list sitescript get"),(0,a.kt)("p",null,"Extracts a site script from a SharePoint list"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list sitescript get [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list to extract the site script from is located."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-l, --listId [listId]"),"\n: ID of the list to extract the site script from. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"listUrl")," but not multiple."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: Title of the list to extract the site script from. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"listUrl")," but not multiple."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"listUrl")," but not multiple."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Extract a site script from an existing SharePoint list with specified title located in the specified site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list sitescript get --listTitle ContosoList --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,a.kt)("p",null,"Extract a site script from an existing SharePoint list with specified id located in the specified site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list sitescript get --listId cc27a922-8224-4296-90a5-ebbc54da2e85 --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,a.kt)("p",null,"Extract a site script from an existing SharePoint list with specified server relative url located in the specified site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list sitescript get --listUrl 'sites/project-x/Documents' --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,a.kt)("p",null,"Extract a site script from an existing SharePoint list with specified site-relative URL located in the specified site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list sitescript get --listUrl 'Shared Documents' --webUrl https://contoso.sharepoint.com/sites/project-x\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n"{\\r\\\\\\n  \\"$schema\\": \\"https://developer.microsoft.com/json-schemas/sp/site-design-script-actions.schema.json\\",\\r\\\\\\n  \\"actions\\": [\\r\\\\\\n    {\\r\\\\\\n      \\"verb\\": \\"createSPList\\",\\r\\\\\\n      \\"listName\\": \\"Test\\",\\r\\\\\\n      \\"templateType\\": 100,\\r\\\\\\n      \\"color\\": \\"0\\",\\r\\\\\\n      \\"icon\\": \\"3\\",\\r\\\\\\n      \\"subactions\\": [\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field ID=\\\\\\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\\\\\\" Type=\\\\\\"Text\\\\\\" Name=\\\\\\"Title\\\\\\" DisplayName=\\\\\\"Title\\\\\\" Required=\\\\\\"TRUE\\\\\\" SourceID=\\\\\\"http://schemas.microsoft.com/sharepoint/v3\\\\\\" StaticName=\\\\\\"Title\\\\\\" FromBaseType=\\\\\\"TRUE\\\\\\" MaxLength=\\\\\\"255\\\\\\" />\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field ID=\\\\\\"{b77cdbcf-5dce-4937-85a7-9fc202705c91}\\\\\\" Group=\\\\\\"_Hidden\\\\\\" SourceID=\\\\\\"http://schemas.microsoft.com/sharepoint/v4\\\\\\" Name=\\\\\\"IconOverlay\\\\\\" StaticName=\\\\\\"IconOverlay\\\\\\" DisplayName=\\\\\\"IconOverlay\\\\\\" Type=\\\\\\"Text\\\\\\" Required=\\\\\\"FALSE\\\\\\" Hidden=\\\\\\"TRUE\\\\\\" />\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field CustomFormatter=\\\\\\"{&quot;elmType&quot;:&quot;div&quot;,&quot;style&quot;:{&quot;flex-wrap&quot;:&quot;wrap&quot;,&quot;display&quot;:&quot;flex&quot;},&quot;children&quot;:[{&quot;elmType&quot;:&quot;div&quot;,&quot;style&quot;:{&quot;box-sizing&quot;:&quot;border-box&quot;,&quot;padding&quot;:&quot;4px 8px 5px 8px&quot;,&quot;overflow&quot;:&quot;hidden&quot;,&quot;text-overflow&quot;:&quot;ellipsis&quot;,&quot;display&quot;:&quot;flex&quot;,&quot;border-radius&quot;:&quot;16px&quot;,&quot;height&quot;:&quot;24px&quot;,&quot;align-items&quot;:&quot;center&quot;,&quot;white-space&quot;:&quot;nowrap&quot;,&quot;margin&quot;:&quot;4px 4px 4px 4px&quot;},&quot;attributes&quot;:{&quot;class&quot;:{&quot;operator&quot;:&quot;:&quot;,&quot;operands&quot;:[{&quot;operator&quot;:&quot;==&quot;,&quot;operands&quot;:[&quot;@currentField&quot;,&quot;Choice 1&quot;]},&quot;sp-css-backgroundColor-BgCornflowerBlue sp-field-fontSizeSmall sp-css-color-CornflowerBlueFont&quot;,{&quot;operator&quot;:&quot;:&quot;,&quot;operands&quot;:[{&quot;operator&quot;:&quot;==&quot;,&quot;operands&quot;:[&quot;@currentField&quot;,&quot;Choice 2&quot;]},&quot;sp-css-backgroundColor-BgMintGreen sp-field-fontSizeSmall sp-css-color-MintGreenFont&quot;,{&quot;operator&quot;:&quot;:&quot;,&quot;operands&quot;:[{&quot;operator&quot;:&quot;==&quot;,&quot;operands&quot;:[&quot;@currentField&quot;,&quot;Keuze 3&quot;]},&quot;sp-css-backgroundColor-BgGold sp-field-fontSizeSmall sp-css-color-GoldFont&quot;,{&quot;operator&quot;:&quot;:&quot;,&quot;operands&quot;:[{&quot;operator&quot;:&quot;==&quot;,&quot;operands&quot;:[&quot;@currentField&quot;,&quot;&quot;]},&quot;&quot;,&quot;sp-field-borderAllRegular sp-field-borderAllSolid sp-css-borderColor-neutralSecondary&quot;]}]}]}]}},&quot;txtContent&quot;:&quot;@currentField&quot;}],&quot;templateId&quot;:&quot;BgColorChoicePill&quot;}\\\\\\" DisplayName=\\\\\\"SingleChoiceField\\\\\\" FillInChoice=\\\\\\"FALSE\\\\\\" Format=\\\\\\"Dropdown\\\\\\" IsModern=\\\\\\"TRUE\\\\\\" Name=\\\\\\"SingleChoiceField\\\\\\" Title=\\\\\\"SingleChoiceField\\\\\\" Type=\\\\\\"Choice\\\\\\" ID=\\\\\\"{9a802215-bf97-4a0d-8268-45785f054711}\\\\\\" StaticName=\\\\\\"SingleChoiceField\\\\\\"><CHOICES><CHOICE>Choice 1</CHOICE><CHOICE>Choice 2</CHOICE><CHOICE>Keuze 3</CHOICE></CHOICES></Field>\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field CustomFormatter=\\\\\\"{&quot;elmType&quot;:&quot;div&quot;,&quot;style&quot;:{&quot;flex-wrap&quot;:&quot;wrap&quot;,&quot;display&quot;:&quot;flex&quot;},&quot;children&quot;:[{&quot;forEach&quot;:&quot;__INTERNAL__ in @currentField&quot;,&quot;elmType&quot;:&quot;div&quot;,&quot;style&quot;:{&quot;box-sizing&quot;:&quot;border-box&quot;,&quot;padding&quot;:&quot;4px 8px 5px 8px&quot;,&quot;overflow&quot;:&quot;hidden&quot;,&quot;text-overflow&quot;:&quot;ellipsis&quot;,&quot;display&quot;:&quot;flex&quot;,&quot;border-radius&quot;:&quot;16px&quot;,&quot;height&quot;:&quot;24px&quot;,&quot;align-items&quot;:&quot;center&quot;,&quot;white-space&quot;:&quot;nowrap&quot;,&quot;margin&quot;:&quot;4px 4px 4px 4px&quot;},&quot;attributes&quot;:{&quot;class&quot;:{&quot;operator&quot;:&quot;:&quot;,&quot;operands&quot;:[{&quot;operator&quot;:&quot;==&quot;,&quot;operands&quot;:[&quot;[$__INTERNAL__]&quot;,&quot;Choice 1&quot;]},&quot;sp-css-backgroundColor-BgCornflowerBlue sp-css-color-CornflowerBlueFont&quot;,{&quot;operator&quot;:&quot;:&quot;,&quot;operands&quot;:[{&quot;operator&quot;:&quot;==&quot;,&quot;operands&quot;:[&quot;[$__INTERNAL__]&quot;,&quot;Choice 2&quot;]},&quot;sp-css-backgroundColor-BgMintGreen sp-css-color-MintGreenFont&quot;,{&quot;operator&quot;:&quot;:&quot;,&quot;operands&quot;:[{&quot;operator&quot;:&quot;==&quot;,&quot;operands&quot;:[&quot;[$__INTERNAL__]&quot;,&quot;Keuze 3&quot;]},&quot;sp-css-backgroundColor-BgGold sp-css-color-GoldFont&quot;,&quot;sp-field-borderAllRegular sp-field-borderAllSolid sp-css-borderColor-neutralSecondary&quot;]}]}]}},&quot;txtContent&quot;:&quot;[$__INTERNAL__]&quot;}],&quot;templateId&quot;:&quot;BgColorChoicePill&quot;}\\\\\\" DisplayName=\\\\\\"MultiChoiceField\\\\\\" FillInChoice=\\\\\\"FALSE\\\\\\" Format=\\\\\\"Dropdown\\\\\\" IsModern=\\\\\\"TRUE\\\\\\" Name=\\\\\\"MultiChoiceField\\\\\\" Title=\\\\\\"MultiChoiceField\\\\\\" Type=\\\\\\"MultiChoice\\\\\\" ID=\\\\\\"{c4d18d33-4785-4e28-8fe4-fca269d7318d}\\\\\\" StaticName=\\\\\\"MultiChoiceField\\\\\\"><CHOICES><CHOICE>Choice 1</CHOICE><CHOICE>Choice 2</CHOICE><CHOICE>Keuze 3</CHOICE></CHOICES></Field>\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field Type=\\\\\\"TaxonomyFieldType\\\\\\" DisplayName=\\\\\\"SingleMetadataField\\\\\\" ShowField=\\\\\\"Term1033\\\\\\" ID=\\\\\\"{29b00c9c-acd6-4ef4-b1b8-84e4e557092b}\\\\\\" StaticName=\\\\\\"SingleMetadataField\\\\\\" Name=\\\\\\"SingleMetadataField\\\\\\" CustomFormatter=\\\\\\"\\\\\\" EnforceUniqueValues=\\\\\\"FALSE\\\\\\" Required=\\\\\\"FALSE\\\\\\" Group=\\\\\\"\\\\\\" Hidden=\\\\\\"FALSE\\\\\\" ReadOnly=\\\\\\"FALSE\\\\\\" PITarget=\\\\\\"\\\\\\" PrimaryPITarget=\\\\\\"\\\\\\" PIAttribute=\\\\\\"\\\\\\" PrimaryPIAttribute=\\\\\\"\\\\\\" Aggregation=\\\\\\"\\\\\\" Node=\\\\\\"\\\\\\"><Default /><Customization><ArrayOfProperty><Property><Name>SspId</Name><Value xmlns:q1=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q1:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">5eb73991-e926-4819-84e6-7c41b553137f</Value></Property><Property><Name>GroupId</Name></Property><Property><Name>TermSetId</Name><Value xmlns:q2=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q2:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">8ed8c9ea-7052-4c1d-a4d7-b9c10bffea6f</Value></Property><Property><Name>AnchorId</Name><Value xmlns:q3=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q3:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">00000000-0000-0000-0000-000000000000</Value></Property><Property><Name>UserCreated</Name><Value xmlns:q4=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q4:boolean\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">false</Value></Property><Property><Name>Open</Name><Value xmlns:q5=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q5:boolean\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">true</Value></Property><Property><Name>IsPathRendered</Name><Value xmlns:q7=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q7:boolean\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">false</Value></Property><Property><Name>IsKeyword</Name><Value xmlns:q8=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q8:boolean\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">false</Value></Property><Property><Name>TargetTemplate</Name></Property><Property><Name>CreateValuesInEditForm</Name><Value xmlns:q9=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q9:boolean\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">false</Value></Property><Property><Name>IsDocTagsEnabled</Name></Property><Property><Name>FilterAssemblyStrongName</Name><Value xmlns:q10=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q10:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">Microsoft.SharePoint.Taxonomy, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c</Value></Property><Property><Name>FilterClassName</Name><Value xmlns:q11=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q11:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">Microsoft.SharePoint.Taxonomy.TaxonomyField</Value></Property><Property><Name>FilterMethodName</Name><Value xmlns:q12=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q12:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">GetFilteringHtml</Value></Property><Property><Name>FilterJavascriptProperty</Name><Value xmlns:q13=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q13:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">FilteringJavascript</Value></Property></ArrayOfProperty></Customization></Field>\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field Type=\\\\\\"TaxonomyFieldTypeMulti\\\\\\" DisplayName=\\\\\\"MultiMetadataField\\\\\\" ShowField=\\\\\\"Term1033\\\\\\" ID=\\\\\\"{b1841001-0027-4934-899c-d69a928f35f6}\\\\\\" StaticName=\\\\\\"MultiMetadataField\\\\\\" Name=\\\\\\"MultiMetadataField\\\\\\" CustomFormatter=\\\\\\"\\\\\\" EnforceUniqueValues=\\\\\\"FALSE\\\\\\" Required=\\\\\\"FALSE\\\\\\" Mult=\\\\\\"TRUE\\\\\\" Sortable=\\\\\\"FALSE\\\\\\"><Default /><Customization><ArrayOfProperty><Property><Name>SspId</Name><Value xmlns:q1=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q1:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">5eb73991-e926-4819-84e6-7c41b553137f</Value></Property><Property><Name>GroupId</Name></Property><Property><Name>TermSetId</Name><Value xmlns:q2=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q2:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">8ed8c9ea-7052-4c1d-a4d7-b9c10bffea6f</Value></Property><Property><Name>AnchorId</Name><Value xmlns:q3=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q3:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">00000000-0000-0000-0000-000000000000</Value></Property><Property><Name>UserCreated</Name><Value xmlns:q4=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q4:boolean\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">false</Value></Property><Property><Name>Open</Name><Value xmlns:q5=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q5:boolean\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">true</Value></Property><Property><Name>IsPathRendered</Name><Value xmlns:q7=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q7:boolean\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">false</Value></Property><Property><Name>IsKeyword</Name><Value xmlns:q8=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q8:boolean\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">false</Value></Property><Property><Name>TargetTemplate</Name></Property><Property><Name>CreateValuesInEditForm</Name><Value xmlns:q9=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q9:boolean\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">false</Value></Property><Property><Name>IsDocTagsEnabled</Name></Property><Property><Name>FilterAssemblyStrongName</Name><Value xmlns:q10=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q10:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">Microsoft.SharePoint.Taxonomy, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c</Value></Property><Property><Name>FilterClassName</Name><Value xmlns:q11=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q11:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">Microsoft.SharePoint.Taxonomy.TaxonomyField</Value></Property><Property><Name>FilterMethodName</Name><Value xmlns:q12=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q12:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">GetFilteringHtml</Value></Property><Property><Name>FilterJavascriptProperty</Name><Value xmlns:q13=\\\\\\"http://www.w3.org/2001/XMLSchema\\\\\\" p4:type=\\\\\\"q13:string\\\\\\" xmlns:p4=\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\">FilteringJavascript</Value></Property></ArrayOfProperty></Customization></Field>\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field DisplayName=\\\\\\"SinglePeopleField\\\\\\" Format=\\\\\\"Dropdown\\\\\\" IsModern=\\\\\\"TRUE\\\\\\" List=\\\\\\"UserInfo\\\\\\" Name=\\\\\\"SinglePeopleField\\\\\\" Title=\\\\\\"SinglePeopleField\\\\\\" Type=\\\\\\"User\\\\\\" UserSelectionMode=\\\\\\"0\\\\\\" UserSelectionScope=\\\\\\"0\\\\\\" ID=\\\\\\"{992ba361-cf48-4c97-bf1e-c396db955e83}\\\\\\" StaticName=\\\\\\"SinglePeopleField\\\\\\" />\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field DisplayName=\\\\\\"MultiPeopleField\\\\\\" Format=\\\\\\"Dropdown\\\\\\" IsModern=\\\\\\"TRUE\\\\\\" List=\\\\\\"UserInfo\\\\\\" Mult=\\\\\\"TRUE\\\\\\" Name=\\\\\\"MultiPeopleField\\\\\\" Title=\\\\\\"MultiPeopleField\\\\\\" Type=\\\\\\"UserMulti\\\\\\" UserSelectionMode=\\\\\\"0\\\\\\" UserSelectionScope=\\\\\\"0\\\\\\" ID=\\\\\\"{a0472ca6-203b-49c0-8fef-92777426e501}\\\\\\" StaticName=\\\\\\"MultiPeopleField\\\\\\" />\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field DisplayName=\\\\\\"CustomHyperlink\\\\\\" Format=\\\\\\"Hyperlink\\\\\\" IsModern=\\\\\\"TRUE\\\\\\" Name=\\\\\\"CustomHyperlink\\\\\\" Title=\\\\\\"CustomHyperlink\\\\\\" Type=\\\\\\"URL\\\\\\" ID=\\\\\\"{9a9d8ba3-bbdc-467c-9a5d-9e8c3c73d85b}\\\\\\" StaticName=\\\\\\"CustomHyperlink\\\\\\" />\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field CommaSeparator=\\\\\\"TRUE\\\\\\" CustomUnitOnRight=\\\\\\"TRUE\\\\\\" DisplayName=\\\\\\"NumberField\\\\\\" Format=\\\\\\"Dropdown\\\\\\" IsModern=\\\\\\"TRUE\\\\\\" Name=\\\\\\"NumberField\\\\\\" Percentage=\\\\\\"FALSE\\\\\\" Title=\\\\\\"NumberField\\\\\\" Type=\\\\\\"Number\\\\\\" Unit=\\\\\\"None\\\\\\" ID=\\\\\\"{57b7fd13-0d94-4c76-a57b-3b3224461f70}\\\\\\" StaticName=\\\\\\"NumberField\\\\\\" />\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field ID=\\\\\\"{82642ec8-ef9b-478f-acf9-31f7d45fbc31}\\\\\\" ReadOnly=\\\\\\"TRUE\\\\\\" Type=\\\\\\"Computed\\\\\\" Name=\\\\\\"LinkTitle\\\\\\" DisplayName=\\\\\\"Titel\\\\\\" DisplayNameSrcField=\\\\\\"Title\\\\\\" ClassInfo=\\\\\\"Menu\\\\\\" AuthoringInfo=\\\\\\"(linked to item with edit menu)\\\\\\" ListItemMenuAllowed=\\\\\\"Required\\\\\\" LinkToItemAllowed=\\\\\\"Prohibited\\\\\\" SourceID=\\\\\\"http://schemas.microsoft.com/sharepoint/v3\\\\\\" StaticName=\\\\\\"LinkTitle\\\\\\" FromBaseType=\\\\\\"TRUE\\\\\\"><FieldRefs><FieldRef Name=\\\\\\"Title\\\\\\" /><FieldRef Name=\\\\\\"LinkTitleNoMenu\\\\\\" /><FieldRef Name=\\\\\\"_EditMenuTableStart2\\\\\\" /><FieldRef Name=\\\\\\"_EditMenuTableEnd\\\\\\" /></FieldRefs><DisplayPattern><FieldSwitch><Expr><GetVar Name=\\\\\\"FreeForm\\\\\\" /></Expr><Case Value=\\\\\\"TRUE\\\\\\"><Field Name=\\\\\\"LinkTitleNoMenu\\\\\\" /></Case><Default><HTML><![CDATA[<div class=\\\\\\"ms-vb itx\\\\\\" onmouseover=\\\\\\"OnItem(this)\\\\\\" CTXName=\\\\\\"ctx]]></HTML><Field Name=\\\\\\"_EditMenuTableStart2\\\\\\" /><HTML><![CDATA[\\\\\\">]]></HTML><Field Name=\\\\\\"LinkTitleNoMenu\\\\\\" /><HTML><![CDATA[</div>]]></HTML><HTML><![CDATA[<div class=\\\\\\"s4-ctx\\\\\\" onmouseover=\\\\\\"OnChildItem(this.parentNode); return false;\\\\\\">]]></HTML><HTML><![CDATA[<span>&nbsp;</span>]]></HTML><HTML><![CDATA[<a onfocus=\\\\\\"OnChildItem(this.parentNode.parentNode); return false;\\\\\\" onclick=\\\\\\"PopMenuFromChevron(event); return false;\\\\\\" href=\\\\\\"javascript:;\\\\\\" title=\\\\\\"Open Menu\\\\\\"></a>]]></HTML><HTML><![CDATA[<span>&nbsp;</span>]]></HTML><HTML><![CDATA[</div>]]></HTML></Default></FieldSwitch></DisplayPattern></Field>\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field ID=\\\\\\"{f9a44731-84eb-43a4-9973-cd2953ad8646}\\\\\\" Name=\\\\\\"_vti_ItemDeclaredRecord\\\\\\" StaticName=\\\\\\"_vti_ItemDeclaredRecord\\\\\\" DisplayName=\\\\\\"Declared Record\\\\\\" SourceID=\\\\\\"http://schemas.microsoft.com/sharepoint/v3\\\\\\" Group=\\\\\\"Document and Record Management Columns\\\\\\" Type=\\\\\\"DateTime\\\\\\" Indexed=\\\\\\"FALSE\\\\\\" Hidden=\\\\\\"FALSE\\\\\\" CanToggleHidden=\\\\\\"TRUE\\\\\\" ShowInNewForm=\\\\\\"FALSE\\\\\\" ShowInEditForm=\\\\\\"FALSE\\\\\\" ShowInFileDlg=\\\\\\"FALSE\\\\\\" ShowInDisplayForm=\\\\\\"TRUE\\\\\\" Required=\\\\\\"FALSE\\\\\\" Sealed=\\\\\\"TRUE\\\\\\" ReadOnly=\\\\\\"TRUE\\\\\\" />\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field ID=\\\\\\"{3afcc5c7-c6ef-44f8-9479-3561d72f9e8e}\\\\\\" Name=\\\\\\"_vti_ItemHoldRecordStatus\\\\\\" StaticName=\\\\\\"_vti_ItemHoldRecordStatus\\\\\\" DisplayName=\\\\\\"Hold and Record Status\\\\\\" SourceID=\\\\\\"http://schemas.microsoft.com/sharepoint/v3\\\\\\" Group=\\\\\\"Document and Record Management Columns\\\\\\" Type=\\\\\\"Integer\\\\\\" Min=\\\\\\"0\\\\\\" Max=\\\\\\"32\\\\\\" Decimals=\\\\\\"0\\\\\\" Indexed=\\\\\\"TRUE\\\\\\" Hidden=\\\\\\"TRUE\\\\\\" CanToggleHidden=\\\\\\"FALSE\\\\\\" ShowInNewForm=\\\\\\"FALSE\\\\\\" ShowInEditForm=\\\\\\"FALSE\\\\\\" ShowInFileDlg=\\\\\\"FALSE\\\\\\" ShowInDisplayForm=\\\\\\"FALSE\\\\\\" Required=\\\\\\"FALSE\\\\\\" Sealed=\\\\\\"TRUE\\\\\\" ReadOnly=\\\\\\"TRUE\\\\\\" Description=\\\\\\"\\\\\\" />\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field Type=\\\\\\"Note\\\\\\" DisplayName=\\\\\\"SingleMetadataField_0\\\\\\" StaticName=\\\\\\"i9b00c9cacd64ef4b1b884e4e557092b\\\\\\" Name=\\\\\\"i9b00c9cacd64ef4b1b884e4e557092b\\\\\\" ID=\\\\\\"{655fadc8-4d62-49d8-bd3f-8c25ea0c2cce}\\\\\\" ShowInViewForms=\\\\\\"FALSE\\\\\\" Required=\\\\\\"FALSE\\\\\\" Hidden=\\\\\\"TRUE\\\\\\" CanToggleHidden=\\\\\\"TRUE\\\\\\" />\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPLookupFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field Type=\\\\\\"LookupMulti\\\\\\" DisplayName=\\\\\\"Taxonomy Catch All Column\\\\\\" StaticName=\\\\\\"TaxCatchAll\\\\\\" Name=\\\\\\"TaxCatchAll\\\\\\" ID=\\\\\\"{f3b0adf9-c1a2-4b02-920d-943fba4b3611}\\\\\\" ShowInViewForms=\\\\\\"FALSE\\\\\\" Required=\\\\\\"FALSE\\\\\\" Hidden=\\\\\\"TRUE\\\\\\" CanToggleHidden=\\\\\\"TRUE\\\\\\" ShowField=\\\\\\"CatchAllData\\\\\\" Mult=\\\\\\"TRUE\\\\\\" Sortable=\\\\\\"FALSE\\\\\\" AllowDeletion=\\\\\\"TRUE\\\\\\" Sealed=\\\\\\"TRUE\\\\\\" />\\",\\r\\\\\\n          \\"targetListName\\": \\"TaxonomyHiddenList\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPFieldXml\\",\\r\\\\\\n          \\"schemaXml\\": \\"<Field Type=\\\\\\"Note\\\\\\" DisplayName=\\\\\\"MultiMetadataField_0\\\\\\" StaticName=\\\\\\"b184100100274934899cd69a928f35f6\\\\\\" Name=\\\\\\"b184100100274934899cd69a928f35f6\\\\\\" ID=\\\\\\"{c46e453f-0142-4231-8a29-e15df0832c39}\\\\\\" ShowInViewForms=\\\\\\"FALSE\\\\\\" Required=\\\\\\"FALSE\\\\\\" Hidden=\\\\\\"TRUE\\\\\\" CanToggleHidden=\\\\\\"TRUE\\\\\\" />\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addContentType\\",\\r\\\\\\n          \\"name\\": \\"Item\\",\\r\\\\\\n          \\"id\\": \\"0x01\\",\\r\\\\\\n          \\"fieldRefsXml\\": [\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\\\\\\" Name=\\\\\\"Title\\\\\\" />\\",\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{82642ec8-ef9b-478f-acf9-31f7d45fbc31}\\\\\\" Name=\\\\\\"LinkTitle\\\\\\" DisplayName=\\\\\\"Titel\\\\\\" ReadOnly=\\\\\\"TRUE\\\\\\" />\\",\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{b77cdbcf-5dce-4937-85a7-9fc202705c91}\\\\\\" Name=\\\\\\"IconOverlay\\\\\\" Required=\\\\\\"FALSE\\\\\\" />\\",\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{f9a44731-84eb-43a4-9973-cd2953ad8646}\\\\\\" Name=\\\\\\"_vti_ItemDeclaredRecord\\\\\\" Required=\\\\\\"FALSE\\\\\\" ReadOnly=\\\\\\"TRUE\\\\\\" />\\",\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{3afcc5c7-c6ef-44f8-9479-3561d72f9e8e}\\\\\\" Name=\\\\\\"_vti_ItemHoldRecordStatus\\\\\\" DisplayName=\\\\\\"Hold and Record Status\\\\\\" Required=\\\\\\"FALSE\\\\\\" Hidden=\\\\\\"TRUE\\\\\\" ShowInNewForm=\\\\\\"FALSE\\\\\\" ShowInEditForm=\\\\\\"FALSE\\\\\\" ShowInDisplayForm=\\\\\\"FALSE\\\\\\" ShowInFileDlg=\\\\\\"FALSE\\\\\\" ReadOnly=\\\\\\"TRUE\\\\\\" />\\",\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{9a802215-bf97-4a0d-8268-45785f054711}\\\\\\" Name=\\\\\\"SingleChoiceField\\\\\\" />\\",\\r\\\\\\n\\"<FieldRef ID=\\\\\\"{c4d18d33-4785-4e28-8fe4-fca269d7318d}\\\\\\" Name=\\\\\\"MultiChoiceField\\\\\\" />\\",\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{29b00c9c-acd6-4ef4-b1b8-84e4e557092b}\\\\\\" Name=\\\\\\"SingleMetadataField\\\\\\" DisplayName=\\\\\\"SingleMetadataField\\\\\\" Required=\\\\\\"FALSE\\\\\\" Hidden=\\\\\\"FALSE\\\\\\" ReadOnly=\\\\\\"FALSE\\\\\\" PITarget=\\\\\\"\\\\\\" PrimaryPITarget=\\\\\\"\\\\\\" PIAttribute=\\\\\\"\\\\\\" PrimaryPIAttribute=\\\\\\"\\\\\\" Aggregation=\\\\\\"\\\\\\" Node=\\\\\\"\\\\\\" />\\",\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{655fadc8-4d62-49d8-bd3f-8c25ea0c2cce}\\\\\\" Name=\\\\\\"i9b00c9cacd64ef4b1b884e4e557092b\\\\\\" Required=\\\\\\"FALSE\\\\\\" />\\",\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{f3b0adf9-c1a2-4b02-920d-943fba4b3611}\\\\\\" Name=\\\\\\"TaxCatchAll\\\\\\" Required=\\\\\\"FALSE\\\\\\" />\\",\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{b1841001-0027-4934-899c-d69a928f35f6}\\\\\\" Name=\\\\\\"MultiMetadataField\\\\\\" DisplayName=\\\\\\"MultiMetadataField\\\\\\" Required=\\\\\\"FALSE\\\\\\" />\\",\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{c46e453f-0142-4231-8a29-e15df0832c39}\\\\\\" Name=\\\\\\"b184100100274934899cd69a928f35f6\\\\\\" Required=\\\\\\"FALSE\\\\\\" />\\",\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{992ba361-cf48-4c97-bf1e-c396db955e83}\\\\\\" Name=\\\\\\"SinglePeopleField\\\\\\" />\\",\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{a0472ca6-203b-49c0-8fef-92777426e501}\\\\\\" Name=\\\\\\"MultiPeopleField\\\\\\" />\\",\\r\\\\\\n\\"<FieldRef ID=\\\\\\"{9a9d8ba3-bbdc-467c-9a5d-9e8c3c73d85b}\\\\\\" Name=\\\\\\"CustomHyperlink\\\\\\" />\\",\\r\\\\\\n            \\"<FieldRef ID=\\\\\\"{57b7fd13-0d94-4c76-a57b-3b3224461f70}\\\\\\" Name=\\\\\\"NumberField\\\\\\" />\\"\\r\\\\\\n          ]\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addContentType\\",\\r\\\\\\n          \\"name\\": \\"Folder\\",\\r\\\\\\n          \\"id\\": \\"0x0120\\"\\r\\\\\\n        },\\r\\\\\\n        {\\r\\\\\\n          \\"verb\\": \\"addSPView\\",\\r\\\\\\n          \\"name\\": \\"Alle items\\",\\r\\\\\\n          \\"viewFields\\": [\\r\\\\\\n            \\"ID\\",\\r\\\\\\n            \\"LinkTitle\\",\\r\\\\\\n            \\"SingleChoiceField\\",\\r\\\\\\n            \\"MultiChoiceField\\",\\r\\\\\\n            \\"SingleMetadataField\\",\\r\\\\\\n            \\"MultiMetadataField\\",\\r\\\\\\n            \\"SinglePeopleField\\",\\r\\\\\\n            \\"MultiPeopleField\\",\\r\\\\\\n            \\"CustomHyperlink\\",\\r\\\\\\n            \\"NumberField\\"\\r\\\\\\n          ],\\r\\\\\\n          \\"query\\": \\"\\",\\r\\\\\\n          \\"rowLimit\\": 30,\\r\\\\\\n          \\"isPaged\\": true,\\r\\\\\\n          \\"makeDefault\\": true,\\r\\\\\\n          \\"formatterJSON\\": \\"\\",\\r\\\\\\n          \\"replaceViewFields\\": true\\r\\\\\\n        }\\r\\\\\\n      ]\\r\\\\\\n    }\\r\\\\\\n  ]\\r\\\\\\n}"\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```text\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/sp/site-design-script-actions.schema.json",\n  "actions": [\n    {\n      "verb": "createSPList",\n      "listName": "Test",\n      "templateType": 100,\n      "color": "0",\n      "icon": "3",\n      "subactions": [\n        {\n          "verb": "addSPView",\n          "name": "Alle items",\n          "viewFields": [\n            "ID"\n          ],\n          "query": "",\n          "rowLimit": 30,\n          "isPaged": true,\n          "makeDefault": true,\n          "formatterJSON": "",\n          "replaceViewFields": true\n        }\n      ]\n    }\n  ]\n}\n```\n')),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```csv\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/sp/site-design-script-actions.schema.json",\n  "actions": [\n    {\n      "verb": "createSPList",\n      "listName": "Test",\n      "templateType": 100,\n      "color": "0",\n      "icon": "3",\n      "subactions": [\n        {\n          "verb": "addSPView",\n          "name": "Alle items",\n          "viewFields": [\n            "ID"\n          ],\n          "query": "",\n          "rowLimit": 30,\n          "isPaged": true,\n          "makeDefault": true,\n          "formatterJSON": "",\n          "replaceViewFields": true\n        }\n      ]\n    }\n  ]\n}\n```\n')),(0,a.kt)("p",null,'=== "Markdown"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```md\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/sp/site-design-script-actions.schema.json",\n  "actions": [\n    {\n      "verb": "createSPList",\n      "listName": "Test",\n      "templateType": 100,\n      "color": "0",\n      "icon": "3",\n      "subactions": [\n        {\n          "verb": "addSPView",\n          "name": "Alle items",\n          "viewFields": [\n            "ID"\n          ],\n          "query": "",\n          "rowLimit": 30,\n          "isPaged": true,\n          "makeDefault": true,\n          "formatterJSON": "",\n          "replaceViewFields": true\n        }\n      ]\n    }\n  ]\n}\n```\n')))}c.isMDXComponent=!0}}]);