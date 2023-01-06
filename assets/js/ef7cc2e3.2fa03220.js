"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},s="spo search",l={unversionedId:"cmd/spo/spo-search",id:"cmd/spo/spo-search",title:"spo search",description:"Executes a search query",source:"@site/docs/cmd/spo/spo-search.md",sourceDirName:"cmd/spo",slug:"/cmd/spo/spo-search",permalink:"/cli-microsoft365-docusaurus/cmd/spo/spo-search",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/spo-search.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo get",permalink:"/cli-microsoft365-docusaurus/cmd/spo/spo-get"},next:{title:"spo set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/spo-set"}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-search"},"spo search"),(0,o.kt)("p",null,"Executes a search query"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo search [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-q, --queryText <queryText>"),"\n: Query to be executed in KQL format"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-p, --selectProperties [selectProperties]"),"\n: Comma-separated list of properties to retrieve. Will retrieve all properties if not specified and json output is requested."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --webUrl [webUrl]"),"\n: The web against which we want to execute the query. If the parameter is not defined, the query is executed against the web that's used when logging in to the SPO environment."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--allResults"),"\n: Set, to get all results of the search query, instead of the number specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"rowlimit")," (default: 10)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--rowLimit [rowLimit]"),"\n: The number of rows to be returned. When the ",(0,o.kt)("inlineCode",{parentName:"p"},"allResults")," option is used, the specified value will define the size of retrieved batches"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--sourceId [sourceId]"),"\n: The identifier (GUID) of the result source to be used to run the query."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--trimDuplicates"),"\n: Set, to remove near duplicate items from the search results."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--enableStemming"),"\n: Set, to enable stemming."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--culture [culture]"),"\n: The locale for the query."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--refinementFilters [refinementFilters]"),"\n: The set of refinement filters used when issuing a refinement query."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--queryTemplate [queryTemplate]"),"\n: A string that contains the text that replaces the query text, as part of a query transformation."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--sortList [sortList]"),"\n: The list of properties by which the search results are ordered."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--rankingModelId [rankingModelId]"),"\n: The ID of the ranking model to use for the query."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--startRow [startRow]"),"\n: The first row that is included in the search results that are returned. You use this parameter when you want to implement paging for search results."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--properties [properties]"),"\n: Additional properties for the query."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--sourceName [sourceName]"),"\n: Specified the name of the result source to be used to run the query."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--refiners [refiners]"),"\n: The set of refiners to return in a search result."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--hiddenConstraints [hiddenConstraints]"),"\n: The additional query terms to append to the query."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--clientType [clientType]"),"\n: The type of the client that issued the query."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--enablePhonetic"),"\n: Set, to use the phonetic forms of the query terms to find matches. (Default = ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--processBestBets"),"\n: Set, to return best bet results for the query."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--enableQueryRules"),"\n: Set, to enable query rules for the query."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--processPersonalFavorites"),"\n: Set, to return personal favorites with the search results."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--rawOutput"),"\n: Set, to return the unparsed, raw results of the REST call to the search API."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Execute search query to retrieve all Document Sets (ContentTypeId = ",(0,o.kt)("em",{parentName:"p"},"0x0120D520"),") for the English locale"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo search --queryText "ContentTypeId:0x0120D520" --culture 1033\n')),(0,o.kt)("p",null,"Retrieve all documents. For each document, retrieve the ",(0,o.kt)("em",{parentName:"p"},"Path"),", ",(0,o.kt)("em",{parentName:"p"},"Author")," and ",(0,o.kt)("em",{parentName:"p"},"FileType"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo search --queryText "IsDocument:1" --selectProperties "Path,Author,FileType" --allResults\n')),(0,o.kt)("p",null,"Return the top 50 items of which the title starts with ",(0,o.kt)("em",{parentName:"p"},"Marketing")," while trimming duplicates."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo search --queryText "Title:Marketing*" --rowLimit=50 --trimDuplicates\n')),(0,o.kt)("p",null,"Return only items from a specific result source (using the source id)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo search --queryText "*" --sourceId "6e71030e-5e16-4406-9bff-9c1829843083"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "Title": "Document",\n    "OriginalPath": "https://contoso.sharepoint.com/Shared Documents/Document.docx"\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```text\nTitle                    OriginalPath\n-----------------------  --------------------------------------------------------------------------------------------------------\nDocument                 https://contoso.sharepoint.com/Shared Documents/Document.docx\n```\n")),(0,o.kt)("p",null,'=== "CSV"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```csv\nTitle,OriginalPath\nDocument,https://contoso.sharepoint.com/Shared Documents/Document.docx\n```\n")))}c.isMDXComponent=!0}}]);