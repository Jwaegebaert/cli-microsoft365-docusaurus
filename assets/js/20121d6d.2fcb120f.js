"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),i=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<r;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var o=n(87462),a=(n(67294),n(3905));const r={},s="spo web set",l={unversionedId:"cmd/spo/web/web-set",id:"cmd/spo/web/web-set",title:"spo web set",description:"Updates subsite properties",source:"@site/docs/cmd/spo/web/web-set.md",sourceDirName:"cmd/spo/web",slug:"/cmd/spo/web/web-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/web/web-set.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo web roleinheritance reset",permalink:"/cli-microsoft365-docusaurus/cmd/spo/web/web-roleinheritance-reset"},next:{title:"Teams (teams)",permalink:"/cli-microsoft365-docusaurus/cmd/groups/teams"}},p={},i=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"More information",id:"more-information",level:2}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spo-web-set"},"spo web set"),(0,a.kt)("p",null,"Updates subsite properties"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u, --url <url>"),"\n: URL of the subsite to update"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-t, --title [title]"),"\n: New title for the subsite"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-d, --description [description]"),"\n: New description for the subsite"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--siteLogoUrl [siteLogoUrl]"),"\n: New site logo URL for the subsite. Set to empty string to reset to default."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--quickLaunchEnabled [quickLaunchEnabled]"),"\n: Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to enable quick launch and to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to disable it"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--headerLayout [headerLayout]"),"\n: Configures the site header. Allowed values ",(0,a.kt)("inlineCode",{parentName:"p"},"standard,compact")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--headerEmphasis [headerEmphasis]"),"\n: Configures the site header background. Allowed values ",(0,a.kt)("inlineCode",{parentName:"p"},"0,1,2,3")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--megaMenuEnabled [megaMenuEnabled]"),"\n: Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to change the menu style to megamenu. Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to use the cascading menu style"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--footerEnabled [footerEnabled]"),"\n: Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to enable footer and to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to disable it"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--searchScope [searchScope]"),"\n: Search scope to set in the site. Allowed values ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultScope,Tenant,Hub,Site")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--welcomePage [welcomePage]"),"\n: Site-relative URL of the welcome page for the site"),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Next to updating web properties corresponding to the options of this command, you can update the value of any other web property using its CSOM name, eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"--AllowAutomaticASPXPageIndexing"),". At this moment, the CLI supports properties of types ",(0,a.kt)("inlineCode",{parentName:"p"},"Boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Int32"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Update subsite title"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --title Team-a\n")),(0,a.kt)("p",null,"Hide quick launch on the subsite"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --quickLaunchEnabled false\n")),(0,a.kt)("p",null,"Set site header layout to compact"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --headerLayout compact\n")),(0,a.kt)("p",null,"Set site header color to primary theme background color"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --headerEmphasis 0\n")),(0,a.kt)("p",null,"Enable megamenu in the site"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --megaMenuEnabled true\n")),(0,a.kt)("p",null,"Hide footer in the site"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --footerEnabled false\n")),(0,a.kt)("p",null,"Set search scope to tenant scope"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo web set --url https://contoso.sharepoint.com/sites/team-a --searchScope tenant\n")),(0,a.kt)("p",null,"Set welcome page for the web"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo web set  --url https://contoso.sharepoint.com/sites/team-a --welcomePage "SitePages/new-home.aspx"\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"The command won't return a response on success."),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Web properties: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/previous-versions/office/sharepoint-server/ee545886(v=office.15)"},"https://docs.microsoft.com/en-us/previous-versions/office/sharepoint-server/ee545886(v=office.15)"))))}u.isMDXComponent=!0}}]);