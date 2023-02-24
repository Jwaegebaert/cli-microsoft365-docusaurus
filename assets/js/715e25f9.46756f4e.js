"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[21648],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var n=i(67294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var a=n.createContext({}),p=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,s=e.mdxType,l=e.originalType,a=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(i),u=s,f=m["".concat(a,".").concat(u)]||m[u]||d[u]||l;return i?n.createElement(f,o(o({ref:t},c),{},{components:i})):n.createElement(f,o({ref:t},c))}));function f(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=i.length,o=new Array(l);o[0]=u;var r={};for(var a in t)hasOwnProperty.call(t,a)&&(r[a]=t[a]);r.originalType=e,r[m]="string"==typeof e?e:s,o[1]=r;for(var p=2;p<l;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},23430:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=i(87462),s=(i(67294),i(3905));const l={},o="spo list view set",r={unversionedId:"cmd/spo/list/list-view-set",id:"cmd/spo/list/list-view-set",title:"spo list view set",description:"Updates existing list view",source:"@site/docs/cmd/spo/list/list-view-set.md",sourceDirName:"cmd/spo/list",slug:"/cmd/spo/list/list-view-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/list/list-view-set.md",tags:[],version:"current",lastUpdatedAt:1668983469,formattedLastUpdatedAt:"Nov 20, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo list view remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-view-remove"},next:{title:"spo list webhook add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/list/list-webhook-add"}},a={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...i}=e;return(0,s.kt)(m,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"spo-list-view-set"},"spo list view set"),(0,s.kt)("p",null,"Updates existing list view"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view set [options]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the list is located"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--listId [listId]"),"\n: ID of the list where the view is located. Specify either ",(0,s.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--listTitle [listTitle]"),"\n: Title of the list where the view is located. Specify either ",(0,s.kt)("inlineCode",{parentName:"p"},"listId"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"listTitle"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,s.kt)("p",null," ",(0,s.kt)("inlineCode",{parentName:"p"},"--listUrl [listUrl]"),"\n: Server- or site-relative URL of the list. Specify either ",(0,s.kt)("inlineCode",{parentName:"p"},"listId")," , ",(0,s.kt)("inlineCode",{parentName:"p"},"listTitle")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"listUrl"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--id [id]"),"\n: ID of the view to update. Specify ",(0,s.kt)("inlineCode",{parentName:"p"},"title")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," but not both"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--title [title]"),"\n: Title of the view to update. Specify ",(0,s.kt)("inlineCode",{parentName:"p"},"title")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," but not both"),(0,s.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"Specify properties to update using their names, eg. ",(0,s.kt)("inlineCode",{parentName:"p"},"--Title 'New Title' --JSLink jslink.js")),(0,s.kt)("p",null,"When updating list formatting, the value of the CustomFormatter property must be XML-escaped, eg. ",(0,s.kt)("inlineCode",{parentName:"p"},"&lt;")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"<"),"."),(0,s.kt)("p",null,'!!! warning "Escaping JSON in PowerShell"\nWhen updating list view formatting for a view with the ',(0,s.kt)("inlineCode",{parentName:"p"},"--CustomFormatter")," option, it's possible to enter a JSON string. In PowerShell 5 to 7.2 ",(0,s.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#escaping-double-quotes-in-powershell"},"specific escaping rules")," apply due to an issue. Remember that you can also use ",(0,s.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-cli#passing-complex-content-into-cli-options"},"file tokens")," instead."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Update the title of the list view specified by its name"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view set --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle 'My List' --title 'All items' --Title 'All events'\n")),(0,s.kt)("p",null,"Update the title of the list view specified by its ID"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo list view set --webUrl https://contoso.sharepoint.com/sites/project-x --listUrl '/sites/project-x/lists/Events' --id 330f29c5-5c4c-465f-9f4b-7903020ae1ce --Title 'All events'\n")),(0,s.kt)("p",null,"Update view formatting of the specified list view"),(0,s.kt)("p",null,'=== "PowerShell"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"```sh\nm365 spo list view set --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle 'My List' --viewTitle 'All items' --CustomFormatter '{\\\"schema\\\":\\\"https://developer.microsoft.com/json-schemas/sp/view-formatting.schema.json\\\",\\\"additionalRowClass\\\": \\\"=if([$DueDate] &lt;= @now, ''sp-field-severity--severeWarning'', '''')\\\"}'\n```\n")),(0,s.kt)("p",null,'=== "Bash"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```sh\nm365 spo list view set --webUrl https://contoso.sharepoint.com/sites/project-x --listTitle \'My List\' --viewTitle \'All items\' --CustomFormatter "{\\"schema\\":\\"https://developer.microsoft.com/json-schemas/sp/view-formatting.schema.json\\",\\"additionalRowClass\\": \\"=if([$DueDate] &lt;= @now, \'sp-field-severity--severeWarning\', \'\')\\"}"\n```\n')),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);