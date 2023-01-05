"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(n),d=a,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={},s="spo search",l={unversionedId:"cmd/spo/spo-search",id:"cmd/spo/spo-search",title:"spo search",description:"Executes a search query",source:"@site/docs/cmd/spo/spo-search.md",sourceDirName:"cmd/spo",slug:"/cmd/spo/spo-search",permalink:"/cmd/spo/spo-search",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/spo-search.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo get",permalink:"/cmd/spo/spo-get"},next:{title:"spo set",permalink:"/cmd/spo/spo-set"}},p={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],u={toc:i};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-search"},"spo search"),(0,a.kt)("p",null,"Executes a search query"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo search [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-q, --queryText <queryText>"),"\n: Query to be executed in KQL format"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p, --selectProperties [selectProperties]"),"\n: Comma-separated list of properties to retrieve. Will retrieve all properties if not specified and json output is requested."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --webUrl [webUrl]"),"\n: The web against which we want to execute the query. If the parameter is not defined, the query is executed against the web that's used when logging in to the SPO environment."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--allResults"),"\n: Set, to get all results of the search query, instead of the number specified by the ",(0,a.kt)("inlineCode",{parentName:"p"},"rowlimit")," (default: 10)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--rowLimit [rowLimit]"),"\n: The number of rows to be returned. When the ",(0,a.kt)("inlineCode",{parentName:"p"},"allResults")," option is used, the specified value will define the size of retrieved batches"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--sourceId [sourceId]"),"\n: The identifier (GUID) of the result source to be used to run the query."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--trimDuplicates"),"\n: Set, to remove near duplicate items from the search results."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enableStemming"),"\n: Set, to enable stemming."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--culture [culture]"),"\n: The locale for the query."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--refinementFilters [refinementFilters]"),"\n: The set of refinement filters used when issuing a refinement query."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--queryTemplate [queryTemplate]"),"\n: A string that contains the text that replaces the query text, as part of a query transformation."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--sortList [sortList]"),"\n: The list of properties by which the search results are ordered."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--rankingModelId [rankingModelId]"),"\n: The ID of the ranking model to use for the query."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--startRow [startRow]"),"\n: The first row that is included in the search results that are returned. You use this parameter when you want to implement paging for search results."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--properties [properties]"),"\n: Additional properties for the query."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--sourceName [sourceName]"),"\n: Specified the name of the result source to be used to run the query."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--refiners [refiners]"),"\n: The set of refiners to return in a search result."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--hiddenConstraints [hiddenConstraints]"),"\n: The additional query terms to append to the query."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--clientType [clientType]"),"\n: The type of the client that issued the query."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enablePhonetic"),"\n: Set, to use the phonetic forms of the query terms to find matches. (Default = ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--processBestBets"),"\n: Set, to return best bet results for the query."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enableQueryRules"),"\n: Set, to enable query rules for the query."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--processPersonalFavorites"),"\n: Set, to return personal favorites with the search results."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--rawOutput"),"\n: Set, to return the unparsed, raw results of the REST call to the search API."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Execute search query to retrieve all Document Sets (ContentTypeId = ",(0,a.kt)("em",{parentName:"p"},"0x0120D520"),") for the English locale"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo search --queryText "ContentTypeId:0x0120D520" --culture 1033\n')),(0,a.kt)("p",null,"Retrieve all documents. For each document, retrieve the ",(0,a.kt)("em",{parentName:"p"},"Path"),", ",(0,a.kt)("em",{parentName:"p"},"Author")," and ",(0,a.kt)("em",{parentName:"p"},"FileType"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo search --queryText "IsDocument:1" --selectProperties "Path,Author,FileType" --allResults\n')),(0,a.kt)("p",null,"Return the top 50 items of which the title starts with ",(0,a.kt)("em",{parentName:"p"},"Marketing")," while trimming duplicates."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo search --queryText "Title:Marketing*" --rowLimit=50 --trimDuplicates\n')),(0,a.kt)("p",null,"Return only items from a specific result source (using the source id)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo search --queryText "*" --sourceId "6e71030e-5e16-4406-9bff-9c1829843083"\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "Title": "Document",\n    "OriginalPath": "https://contoso.sharepoint.com/Shared Documents/Document.docx"\n  }\n]\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nTitle                    OriginalPath\n-----------------------  --------------------------------------------------------------------------------------------------------\nDocument                 https://contoso.sharepoint.com/Shared Documents/Document.docx\n```\n")),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```csv\nTitle,OriginalPath\nDocument,https://contoso.sharepoint.com/Shared Documents/Document.docx\n```\n")))}c.isMDXComponent=!0}}]);