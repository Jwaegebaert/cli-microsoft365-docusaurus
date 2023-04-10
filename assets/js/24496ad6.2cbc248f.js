"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[40486],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=i(a),u=p,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return a?n.createElement(g,r(r({ref:t},m),{},{components:a})):n.createElement(g,r({ref:t},m))}));function g(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:p,r[1]=s;for(var i=2;i<o;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98955:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(87462),p=(a(67294),a(3905));const o={},r="spo page add",s={unversionedId:"cmd/spo/page/page-add",id:"cmd/spo/page/page-add",title:"spo page add",description:"Creates modern page",source:"@site/docs/cmd/spo/page/page-add.md",sourceDirName:"cmd/spo/page",slug:"/cmd/spo/page/page-add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/page/page-add.md",tags:[],version:"current",lastUpdatedAt:1671253082,formattedLastUpdatedAt:"Dec 17, 2022",frontMatter:{},sidebar:"commands",previous:{title:"spo orgnewssite set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/orgnewssite/orgnewssite-set"},next:{title:"spo page clientsidewebpart add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/page/page-clientsidewebpart-add"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:i},c="wrapper";function d(e){let{components:t,...a}=e;return(0,p.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"spo-page-add"},"spo page add"),(0,p.kt)("p",null,"Creates modern page"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page add [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: Name of the page to create."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the page should be created."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-t, --title [title]"),"\n: Title of the page to create. If not specified, will use the page name as its title."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-l, --layoutType [layoutType]"),"\n: Layout of the page. Allowed values ",(0,p.kt)("inlineCode",{parentName:"p"},"Article"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"SingleWebPartAppPage"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"RepostPage"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"HeaderlessSearchResults"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"Spaces"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"Topic"),". Default ",(0,p.kt)("inlineCode",{parentName:"p"},"Article"),"."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-p, --promoteAs [promoteAs]"),"\n: Create the page for a specific purpose. Allowed values ",(0,p.kt)("inlineCode",{parentName:"p"},"HomePage"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"NewsPage"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"Template"),"."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--commentsEnabled"),"\n: Set to enable comments on the page."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--publish"),"\n: Set to publish the page."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--publishMessage [publishMessage]"),"\n: Message to set when publishing the page."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--description [description]"),"\n: The description to set for the page."),(0,p.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"If you try to create a page with a name of a page that already exists, you will get a ",(0,p.kt)("inlineCode",{parentName:"p"},"The file exists")," error."),(0,p.kt)("p",null,"If you choose to promote the page using the ",(0,p.kt)("inlineCode",{parentName:"p"},"promoteAs")," option or enable page comments, you will see the result only after publishing the page."),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Create new modern page. Use the Article layout"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page add --name new-page.aspx --webUrl https://contoso.sharepoint.com/sites/a-team\n")),(0,p.kt)("p",null,"Create new modern page and set its title"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page add --name new-page.aspx --title 'My page' --webUrl https://contoso.sharepoint.com/sites/a-team\n")),(0,p.kt)("p",null,"Create new modern page. Use the Home page layout and include the default set of web parts"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page add --name new-page.aspx --webUrl https://contoso.sharepoint.com/sites/a-team --layoutType Home\n")),(0,p.kt)("p",null,"Create new article page and promote it as a news article"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page add --name new-page.aspx --webUrl https://contoso.sharepoint.com/sites/a-team --promoteAs NewsPage\n")),(0,p.kt)("p",null,"Create new page and set it as the site's home page"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page add --name new-page.aspx --webUrl https://contoso.sharepoint.com/sites/a-team --layoutType Home --promoteAs HomePage\n")),(0,p.kt)("p",null,"Create new article page and promote it as a template"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page add --name page.aspx --webUrl https://contoso.sharepoint.com/sites/a-team --promoteAs Template\n")),(0,p.kt)("p",null,"Create new article page and enable comments on the page"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page add --name new-page.aspx --webUrl https://contoso.sharepoint.com/sites/a-team --commentsEnabled\n")),(0,p.kt)("p",null,"Create new article page and publish it"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo page add --name new-page.aspx --webUrl https://contoso.sharepoint.com/sites/a-team --publish\n")),(0,p.kt)("p",null,"Create new article page with description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo page add --name page.aspx --webUrl https://contoso.sharepoint.com/sites/a-team --description "Description to add for the page"\n')),(0,p.kt)("h2",{id:"response"},"Response"),(0,p.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);