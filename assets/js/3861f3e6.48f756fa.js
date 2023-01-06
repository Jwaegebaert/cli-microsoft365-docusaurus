"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52329],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=p(i),u=a,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return i?n.createElement(h,l(l({ref:t},m),{},{components:i})):n.createElement(h,l({ref:t},m))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},61994:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const o={},l="spo listitem add",r={unversionedId:"cmd/spo/listitem/listitem-add",id:"cmd/spo/listitem/listitem-add",title:"spo listitem add",description:"Creates a list item in the specified list",source:"@site/docs/cmd/spo/listitem/listitem-add.md",sourceDirName:"cmd/spo/listitem",slug:"/cmd/spo/listitem/listitem-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/listitem/listitem-add.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo list webhook set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-webhook-set"},next:{title:"spo listitem attachment list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/listitem/listitem-attachment-list"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-listitem-add"},"spo listitem add"),(0,a.kt)("p",null,"Creates a list item in the specified list"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem add [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the item should be added"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-l, --listId [listId]"),"\n: ID of the list where the item should be added. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-t, --listTitle [listTitle]"),"\n: Title of the list where the item should be added. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,a.kt)("inlineCode",{parentName:"p"},"listTitle"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"listId")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"listUrl")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c, --contentType [contentType]"),"\n: The name or the ID of the content type to associate with the new item"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-f, --folder [folder]"),"\n: The list-relative URL of the folder where the item should be created"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Add an item with Title ",(0,a.kt)("em",{parentName:"p"},"Demo Item")," and content type name ",(0,a.kt)("em",{parentName:"p"},"Item")," to list with title ",(0,a.kt)("em",{parentName:"p"},"Demo List")," in site ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem add --contentType Item --listTitle "Demo List" --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo Item"\n')),(0,a.kt)("p",null,"Add an item with Title ",(0,a.kt)("em",{parentName:"p"},"Demo Multi Managed Metadata Field")," and a single-select metadata field named ",(0,a.kt)("em",{parentName:"p"},"SingleMetadataField")," to list with title ",(0,a.kt)("em",{parentName:"p"},"Demo List")," in site ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem add --listTitle "Demo List" --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo Single Managed Metadata Field" --SingleMetadataField "TermLabel1|fa2f6bfd-1fad-4d18-9c89-289fe6941377;"\n')),(0,a.kt)("p",null,"Add an item with Title ",(0,a.kt)("em",{parentName:"p"},"Demo Multi Managed Metadata Field")," and a multi-select metadata field named ",(0,a.kt)("em",{parentName:"p"},"MultiMetadataField")," to list with title ",(0,a.kt)("em",{parentName:"p"},"Demo List")," in site ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem add --listTitle "Demo List" --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo Multi Managed Metadata Field" --MultiMetadataField "TermLabel1|cf8c72a1-0207-40ee-aebd-fca67d20bc8a;TermLabel2|e5cc320f-8b65-4882-afd5-f24d88d52b75;"\n')),(0,a.kt)("p",null,"Add an item with Title ",(0,a.kt)("em",{parentName:"p"},"Demo Single Person Field")," and a single-select people field named ",(0,a.kt)("em",{parentName:"p"},"SinglePeopleField")," to list with title ",(0,a.kt)("em",{parentName:"p"},"Demo List")," in site ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem add --listTitle "Demo List" --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo Single Person Field" --SinglePeopleField "[{\'Key\':\'i:0#.f|membership|markh@conotoso.com\'}]"\n')),(0,a.kt)("p",null,"Add an item with Title ",(0,a.kt)("em",{parentName:"p"},"Demo Multi Person Field")," and a multi-select people field named ",(0,a.kt)("em",{parentName:"p"},"MultiPeopleField")," to list with title ",(0,a.kt)("em",{parentName:"p"},"Demo List")," in site ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo listitem add --listTitle \"Demo List\" --webUrl https://contoso.sharepoint.com/sites/project-x --Title \"Demo Multi Person Field\" --MultiPeopleField \"[{'Key':'i:0#.f|membership|markh@conotoso.com'},{'Key':'i:0#.f|membership|adamb@conotoso.com'}]\"\n")),(0,a.kt)("p",null,"Add an item with Title ",(0,a.kt)("em",{parentName:"p"},"Demo Hyperlink Field")," and a hyperlink field named ",(0,a.kt)("em",{parentName:"p"},"CustomHyperlink")," to list with title ",(0,a.kt)("em",{parentName:"p"},"Demo List")," in site ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem add --listTitle "Demo List" --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo Hyperlink Field" --CustomHyperlink "https://www.bing.com, Bing"\n')),(0,a.kt)("p",null,"Add an item with a specific title to a list retrieved by server-relative URL in a specific site"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem add --contentType Item --listUrl /sites/project-x/Documents --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo Item"\n')),(0,a.kt)("p",null,"Add an item with a specific Title and multi-choice value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo listitem add --listTitle "Demo List" --webUrl https://contoso.sharepoint.com/sites/project-x --Title "Demo Hyperlink Field" --MultiChoiceField "Choice 1;#Choice 2;#Choice 3"\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "FileSystemObjectType": 0,\n  "Id": 234,\n  "ServerRedirectedEmbedUri": null,\n  "ServerRedirectedEmbedUrl": "",\n  "ID": 234,\n  "ContentTypeId": "0x01003CDBEB7138618C47A98D56499135D6EE0004C0F5794DEBCC4BAC981AC4AE1BD803",\n  "Title": "Test",\n  "Modified": "2022-11-16T20:55:45Z",\n  "Created": "2022-11-16T20:55:45Z",\n  "AuthorId": 10,\n  "EditorId": 10,\n  "OData__UIVersionString": "1.0",\n  "Attachments": false,\n  "GUID": "352e3855-56fa-4b68-b6be-4644d6adf204",\n  "ComplianceAssetId": null,\n  "OData__vti_ItemDeclaredRecord": null,\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nAttachments                  : false\nAuthorId                     : 10\nComplianceAssetId            : null\nContentTypeId                : 0x01003CDBEB7138618C47A98D56499135D6EE0004C0F5794DEBCC4BAC981AC4AE1BD803\nCreated                      : 2022-11-16T20:56:31Z\nEditorId                     : 10\nFileSystemObjectType         : 0\nGUID                         : cac57513-e870-4e7a-9f23-f4ea10e14f4e\nID                           : 236\nId                           : 236\nModified                     : 2022-11-16T20:56:31Z\nOData__UIVersionString       : 1.0\nOData__vti_ItemDeclaredRecord: null\nServerRedirectedEmbedUri     : null\nServerRedirectedEmbedUrl     :\nTitle                        : Test\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nFileSystemObjectType,Id,ServerRedirectedEmbedUri,ServerRedirectedEmbedUrl,ID,ContentTypeId,Title,Modified,Created,AuthorId,EditorId,OData__UIVersionString,Attachments,GUID,ComplianceAssetId,OData__vti_ItemDeclaredRecord\n0,235,,,235,0x01003CDBEB7138618C47A98D56499135D6EE0004C0F5794DEBCC4BAC981AC4AE1BD803,Test,2022-11-16T20:56:09Z,2022-11-16T20:56:09Z,10,10,1.0,,7aa8f3bd-a0a2-4974-81c8-2ac7ddc8e2d8,,\n```\n")))}d.isMDXComponent=!0}}]);