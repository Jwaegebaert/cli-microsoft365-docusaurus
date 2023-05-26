"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[93313],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),i=l(a),u=r,k=i["".concat(d,".").concat(u)]||i[u]||c[u]||o;return a?n.createElement(k,p(p({ref:t},m),{},{components:a})):n.createElement(k,p({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[i]="string"==typeof e?e:r,p[1]=s;for(var l=2;l<o;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]},p="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,r.kt)("code",{parentName:"p"},"options"),", ",(0,r.kt)("code",{parentName:"p"},"examples"),", ",(0,r.kt)("code",{parentName:"p"},"remarks"),", ",(0,r.kt)("code",{parentName:"p"},"response"),", ",(0,r.kt)("code",{parentName:"p"},"full"),". Default is ",(0,r.kt)("code",{parentName:"p"},"full"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--query [query]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,r.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Output type. ",(0,r.kt)("code",{parentName:"p"},"json,text,csv,md"),". Default ",(0,r.kt)("code",{parentName:"p"},"json"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--verbose"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with verbose logging")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--debug"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Runs command with debug logging"))))}s.isMDXComponent=!0},4936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(26054);const p={},s="spo web set",d={unversionedId:"cmd/spo/web/web-set",id:"cmd/spo/web/web-set",title:"spo web set",description:"Updates subsite properties",source:"@site/docs/cmd/spo/web/web-set.mdx",sourceDirName:"cmd/spo/web",slug:"/cmd/spo/web/web-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/web/web-set.mdx",tags:[],version:"current",lastUpdatedAt:1685025201,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo web remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-remove"},next:{title:"spo web clientsidewebpart list",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-clientsidewebpart-list"}},l={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],i={toc:m},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-web-set"},"spo web set"),(0,r.kt)("p",null,"Updates subsite properties"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("dl",null,(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-u, --url <url>"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"URL of the subsite to update")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-t, --title [title]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"New title for the subsite")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"-d, --description [description]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"New description for the subsite")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--siteLogoUrl [siteLogoUrl]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"New site logo URL for the subsite. Set to empty string to reset to default.")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--quickLaunchEnabled [quickLaunchEnabled]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Set to ",(0,r.kt)("code",{parentName:"p"},"true")," to enable quick launch and to ",(0,r.kt)("code",{parentName:"p"},"false")," to disable it")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--headerLayout [headerLayout]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Configures the site header. Allowed values ",(0,r.kt)("code",{parentName:"p"},"standard,compact"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--headerEmphasis [headerEmphasis]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Configures the site header background. Allowed values ",(0,r.kt)("code",{parentName:"p"},"0,1,2,3"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--megaMenuEnabled [megaMenuEnabled]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Set to ",(0,r.kt)("code",{parentName:"p"},"true")," to change the menu style to megamenu. Set to ",(0,r.kt)("code",{parentName:"p"},"false")," to use the cascading menu style")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--footerEnabled [footerEnabled]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Set to ",(0,r.kt)("code",{parentName:"p"},"true")," to enable footer and to ",(0,r.kt)("code",{parentName:"p"},"false")," to disable it")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--navAudienceTargetingEnabled [navAudienceTargetingEnabled]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Enable or disable site navigation audience targeting. Allowed values: ",(0,r.kt)("code",{parentName:"p"},"true")," or ",(0,r.kt)("code",{parentName:"p"},"false"),".")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--searchScope [searchScope]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Search scope to set in the site. Allowed values ",(0,r.kt)("code",{parentName:"p"},"DefaultScope,Tenant,Hub,Site"))),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("p",{parentName:"dt"},(0,r.kt)("code",{parentName:"p"},"--welcomePage [welcomePage]"))),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("p",{parentName:"dd"},"Site-relative URL of the welcome page for the site"))),(0,r.kt)(o.ZP,{mdxType:"Global"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"Next to updating web properties corresponding to the options of this command, you can update the value of any other web property using its CSOM name, eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"--AllowAutomaticASPXPageIndexing"),". At this moment, the CLI supports properties of types ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Int32"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Update subsite title"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --title Team-a\n")),(0,r.kt)("p",null,"Hide quick launch on the subsite"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --quickLaunchEnabled false\n")),(0,r.kt)("p",null,"Set site header layout to compact"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --headerLayout compact\n")),(0,r.kt)("p",null,"Set site header color to primary theme background color"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --headerEmphasis 0\n")),(0,r.kt)("p",null,"Enable megamenu in the site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --megaMenuEnabled true\n")),(0,r.kt)("p",null,"Hide footer in the site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --footerEnabled false\n")),(0,r.kt)("p",null,"Enable navigation audience targetting in the site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --navAudienceTargetingEnabled true\n")),(0,r.kt)("p",null,"Set search scope to tenant scope"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --searchScope tenant\n")),(0,r.kt)("p",null,"Set welcome page for the web"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo web set  --url https://contoso.sharepoint.com/sites/team-a --welcomePage "SitePages/new-home.aspx"\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The command won't return a response on success."),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Web properties: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/previous-versions/office/sharepoint-server/ee545886(v=office.15)"},"https://docs.microsoft.com/en-us/previous-versions/office/sharepoint-server/ee545886(v=office.15)"))))}u.isMDXComponent=!0}}]);