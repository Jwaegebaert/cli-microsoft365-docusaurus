"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[68645],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var o=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,p=function(e,t){if(null==e)return{};var a,o,p={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var m=o.createContext({}),d=function(e){var t=o.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=d(e.components);return o.createElement(m.Provider,{value:t},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),i=d(a),h=p,k=i["".concat(m,".").concat(h)]||i[h]||c[h]||n;return a?o.createElement(k,r(r({ref:t},l),{},{components:a})):o.createElement(k,r({ref:t},l))}));function k(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,r=new Array(n);r[0]=h;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[i]="string"==typeof e?e:p,r[1]=s;for(var d=2;d<n;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>s});var o=a(87462),p=(a(67294),a(3905));const n={toc:[]},r="wrapper";function s(e){let{components:t,...a}=e;return(0,p.kt)(r,(0,o.Z)({},n,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("dl",null,(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,p.kt)("code",{parentName:"p"},"options"),", ",(0,p.kt)("code",{parentName:"p"},"examples"),", ",(0,p.kt)("code",{parentName:"p"},"remarks"),", ",(0,p.kt)("code",{parentName:"p"},"response"),", ",(0,p.kt)("code",{parentName:"p"},"full"),". Default is ",(0,p.kt)("code",{parentName:"p"},"full"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--query [query]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,p.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Output type. ",(0,p.kt)("code",{parentName:"p"},"json"),", ",(0,p.kt)("code",{parentName:"p"},"text"),", ",(0,p.kt)("code",{parentName:"p"},"csv"),", ",(0,p.kt)("code",{parentName:"p"},"md"),". Default ",(0,p.kt)("code",{parentName:"p"},"json"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--verbose"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--debug"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}s.isMDXComponent=!0},53325:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>m,toc:()=>l});var o=a(87462),p=(a(67294),a(3905)),n=a(26054);const r={},s="spo file add",m={unversionedId:"cmd/spo/file/file-add",id:"cmd/spo/file/file-add",title:"spo file add",description:"Uploads file to the specified folder",source:"@site/docs/cmd/spo/file/file-add.mdx",sourceDirName:"cmd/spo/file",slug:"/cmd/spo/file/file-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/file/file-add.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo field set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/field/field-set"},next:{title:"spo file checkin",permalink:"/cli-microsoft365-docusaurus/cmd/spo/file/file-checkin"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"More information",id:"more-information",level:2}],i={toc:l},c="wrapper";function h(e){let{components:t,...a}=e;return(0,p.kt)(c,(0,o.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"spo-file-add"},"spo file add"),(0,p.kt)("p",null,"Uploads file to the specified folder"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("dl",null,(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"The URL of the site where the file should be uploaded to")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-f, --folder <folder>"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"The server- or site-relative URL to the folder where the file should be uploaded")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-p, --path <path>"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Local path to the file to upload")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-c, --contentType [contentType]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Content type name or ID to assign to the file")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--checkOut [checkOut]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"If versioning is enabled, this will check out the file first if it exists, upload the file, then check it in again")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--checkInComment [checkInComment]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Comment to set when checking the file in")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--approve [approve]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Will automatically approve the uploaded file")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--approveComment [approveComment]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Comment to set when approving the file")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--publish [publish]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Will automatically publish the uploaded file")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--publishComment [publishComment]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Comment to set when publishing the file"))),(0,p.kt)(n.ZP,{mdxType:"Global"}),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"This command allows using unknown properties. Each property corresponds to the list item field that should be set when uploading the file."),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg'\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in sub folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents/Sub Folder 1")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents/Sub Folder 1' --path 'C:\\MS365.jpg'\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," specifying server-relative folder url"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder '/sites/project-x/Shared Documents' --path 'C:\\MS365.jpg'\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," with specified content type"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --contentType 'Picture'\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents"),", but checks out existing file before the upload"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --checkOut --checkInComment 'check in comment x'\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," and approves it (when list moderation is enabled)"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --approve --approveComment 'approve comment x'\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," and publishes it"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --publish --publishComment 'publish comment x'\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," and changes single text field value of the list item"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --Title \"New Title\"\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," and changes person/group field and DateTime field values"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --Editor \"[{'Key':'i:0#.f|membership|john.smith@contoso.com'}]\" --Modified '6/23/2018 10:15 PM'\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," and changes hyperlink or picture field"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --URL 'https://contoso.com, Contoso'\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," and changes taxonomy field"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --Topic \"HR services|c17baaeb-67cd-4378-9389-9d97a945c701\"\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," and changes taxonomy multi-value field"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --Topic \"HR services|c17baaeb-67cd-4378-9389-9d97a945c701;Inclusion \uff06 Diversity|66a67671-ed89-44a7-9be4-e80c06b41f35\"\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," and changes choice field and multi-choice field"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --ChoiceField1 'Option3' --MultiChoiceField1 'Option2;#Option3'\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," and changes person/group field that allows multi-user selection"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --AllowedUsers \"[{'Key':'i:0#.f|membership|john.smith@contoso.com'},{'Key':'i:0#.f|membership|velin.georgiev@contoso.com'}]\"\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," and changes yes/no field"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --HasCar true\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," and changes number field and currency field"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --NumberField 100 --CurrencyField 20\n")),(0,p.kt)("p",null,"Adds file ",(0,p.kt)("em",{parentName:"p"},"MS365.jpg")," to site ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"https://contoso.sharepoint.com/sites/project-x"},"https://contoso.sharepoint.com/sites/project-x"))," in folder ",(0,p.kt)("em",{parentName:"p"},"Shared Documents")," and changes lookup field and multi-lookup field"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo file add --webUrl https://contoso.sharepoint.com/sites/project-x --folder 'Shared Documents' --path 'C:\\MS365.jpg' --LookupField 1 --MultiLookupField \"2;#;#3;#;#4;#\"\n")),(0,p.kt)("h2",{id:"more-information"},"More information"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Update file metadata with REST API using ValidateUpdateListItem method: ",(0,p.kt)("a",{parentName:"li",href:"https://robertschouten.com/2018/04/30/update-file-metadata-with-rest-api-using-validateupdatelistitem-method/"},"https://robertschouten.com/2018/04/30/update-file-metadata-with-rest-api-using-validateupdatelistitem-method/")),(0,p.kt)("li",{parentName:"ul"},"List Items System Update options in SharePoint Online: ",(0,p.kt)("a",{parentName:"li",href:"https://www.linkedin.com/pulse/list-items-system-update-options-sharepoint-online-andrew-koltyakov/"},"https://www.linkedin.com/pulse/list-items-system-update-options-sharepoint-online-andrew-koltyakov/"))))}h.isMDXComponent=!0}}]);