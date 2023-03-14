"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[93313],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=o,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(k,p(p({ref:t},i),{},{components:a})):n.createElement(k,p({ref:t},i))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,p=new Array(r);p[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,p[1]=l;for(var d=2;d<r;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37884:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={toc:[]},p="wrapper";function l(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-h, --help [help]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",null,"options"),", ",(0,o.kt)("code",null,"examples"),", ",(0,o.kt)("code",null,"remarks"),", ",(0,o.kt)("code",null,"response"),", ",(0,o.kt)("code",null,"full"),". Default is ",(0,o.kt)("code",null,"full"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--query [query]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"JMESPath query string. See ",(0,o.kt)("a",{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"},"http://jmespath.org/")," for more information and examples")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"-o, --output [output]"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Output type. ",(0,o.kt)("code",null,"json"),", ",(0,o.kt)("code",null,"text"),", ",(0,o.kt)("code",null,"csv"),", ",(0,o.kt)("code",null,"md"),". Default is ",(0,o.kt)("code",null,"json"),".")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--verbose"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with verbose logging.")),(0,o.kt)("dt",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"--debug"))),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Runs command with debug logging."))))}l.isMDXComponent=!0},4936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var n=a(87462),o=(a(67294),a(3905)),r=a(37884);const p={},l="spo web set",s={unversionedId:"cmd/spo/web/web-set",id:"cmd/spo/web/web-set",title:"spo web set",description:"Updates subsite properties",source:"@site/docs/cmd/spo/web/web-set.mdx",sourceDirName:"cmd/spo/web",slug:"/cmd/spo/web/web-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/web/web-set.mdx",tags:[],version:"current",frontMatter:{},sidebar:"commands",previous:{title:"spo web roleinheritance reset",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-roleinheritance-reset"},next:{title:"teams app install",permalink:"/cli-microsoft365-docusaurus/cmd/teams/app/app-install"}},d={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],c={toc:i},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spo-web-set"},"spo web set"),(0,o.kt)("p",null,"Updates subsite properties"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-u, --url <url>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"URL of the subsite to update")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-t, --title [title]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"New title for the subsite")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-d, --description [description]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"New description for the subsite")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--siteLogoUrl [siteLogoUrl]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"New site logo URL for the subsite. Set to empty string to reset to default.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--quickLaunchEnabled [quickLaunchEnabled]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Set to ",(0,o.kt)("code",{parentName:"p"},"true")," to enable quick launch and to ",(0,o.kt)("code",{parentName:"p"},"false")," to disable it")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--headerLayout [headerLayout]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Configures the site header. Allowed values ",(0,o.kt)("code",{parentName:"p"},"standard,compact"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--headerEmphasis [headerEmphasis]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Configures the site header background. Allowed values ",(0,o.kt)("code",{parentName:"p"},"0,1,2,3"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--megaMenuEnabled [megaMenuEnabled]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Set to ",(0,o.kt)("code",{parentName:"p"},"true")," to change the menu style to megamenu. Set to ",(0,o.kt)("code",{parentName:"p"},"false")," to use the cascading menu style")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--footerEnabled [footerEnabled]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Set to ",(0,o.kt)("code",{parentName:"p"},"true")," to enable footer and to ",(0,o.kt)("code",{parentName:"p"},"false")," to disable it")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--navAudienceTargetingEnabled [navAudienceTargetingEnabled]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Enable or disable site navigation audience targeting. Allowed values: ",(0,o.kt)("code",{parentName:"p"},"true")," or ",(0,o.kt)("code",{parentName:"p"},"false"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--searchScope [searchScope]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Search scope to set in the site. Allowed values ",(0,o.kt)("code",{parentName:"p"},"DefaultScope,Tenant,Hub,Site"))),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--welcomePage [welcomePage]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Site-relative URL of the welcome page for the site"))),(0,o.kt)(r.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Next to updating web properties corresponding to the options of this command, you can update the value of any other web property using its CSOM name, eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"--AllowAutomaticASPXPageIndexing"),". At this moment, the CLI supports properties of types ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Int32"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Update subsite title"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --title Team-a\n")),(0,o.kt)("p",null,"Hide quick launch on the subsite"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --quickLaunchEnabled false\n")),(0,o.kt)("p",null,"Set site header layout to compact"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --headerLayout compact\n")),(0,o.kt)("p",null,"Set site header color to primary theme background color"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --headerEmphasis 0\n")),(0,o.kt)("p",null,"Enable megamenu in the site"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --megaMenuEnabled true\n")),(0,o.kt)("p",null,"Hide footer in the site"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --footerEnabled false\n")),(0,o.kt)("p",null,"Enable navigation audience targetting in the site"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --navAudienceTargetingEnabled true\n")),(0,o.kt)("p",null,"Set search scope to tenant scope"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --searchScope tenant\n")),(0,o.kt)("p",null,"Set welcome page for the web"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo web set  --url https://contoso.sharepoint.com/sites/team-a --welcomePage "SitePages/new-home.aspx"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Web properties: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/previous-versions/office/sharepoint-server/ee545886(v=office.15)"},"https://docs.microsoft.com/en-us/previous-versions/office/sharepoint-server/ee545886(v=office.15)"))))}u.isMDXComponent=!0}}]);