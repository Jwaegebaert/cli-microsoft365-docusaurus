"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[86772],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=p(a),h=o,m=l["".concat(c,".").concat(h)]||l[h]||u[h]||r;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[l]="string"==typeof e?e:o,i[1]=d;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},13738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={},i="v5 Upgrade Guidance",d={unversionedId:"v5-upgrade-guidance",id:"v5-upgrade-guidance",title:"v5 Upgrade Guidance",description:"The v5 of CLI for Microsoft 365 introduces several breaking changes. To help you upgrade to the latest version of CLI for Microsoft 365, we've listed those changes along with any actions you may need to take.",source:"@site/docs/v5-upgrade-guidance.md",sourceDirName:".",slug:"/v5-upgrade-guidance",permalink:"/cli-microsoft365-docusaurus/v5-upgrade-guidance",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/v5-upgrade-guidance.md",tags:[],version:"current",lastUpdatedAt:1645787612,formattedLastUpdatedAt:"Feb 25, 2022",frontMatter:{},sidebar:"home",previous:{title:"v6 Upgrade Guidance",permalink:"/cli-microsoft365-docusaurus/v6-upgrade-guidance"},next:{title:"v4 Upgrade Guidance",permalink:"/cli-microsoft365-docusaurus/v4-upgrade-guidance"}},c={},p=[{value:"Azure-AD related commands migrated to Microsoft Graph",id:"azure-ad-related-commands-migrated-to-microsoft-graph",level:2},{value:"What action do I need to take?",id:"what-action-do-i-need-to-take",level:3},{value:"In <code>aad oauth2grant list</code> renamed <code>clientId</code> to <code>spObjectId</code>",id:"in-aad-oauth2grant-list-renamed-clientid-to-spobjectid",level:2},{value:"What action do I need to take?",id:"what-action-do-i-need-to-take-1",level:3},{value:"Extended <code>aad oauth2grant remove</code> with <code>confirm</code>",id:"extended-aad-oauth2grant-remove-with-confirm",level:2},{value:"What action do I need to take?",id:"what-action-do-i-need-to-take-2",level:3}],s={toc:p},l="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(l,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"v5-upgrade-guidance"},"v5 Upgrade Guidance"),(0,o.kt)("p",null,"The v5 of CLI for Microsoft 365 introduces several breaking changes. To help you upgrade to the latest version of CLI for Microsoft 365, we've listed those changes along with any actions you may need to take."),(0,o.kt)("h2",{id:"azure-ad-related-commands-migrated-to-microsoft-graph"},"Azure-AD related commands migrated to Microsoft Graph"),(0,o.kt)("p",null,"In CLI for Microsoft 365 we have commands that allow you to manage Azure AD apps. Some of these commands were using the Azure AD Graph API, which has been ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/graph/migrate-azure-ad-graph-faq#how-is-microsoft-graph-different-from-azure-ad-graph-and-why-should-i-migrate-my-apps"},"deprecated")," since June 30, 2020 and which will be retired on June 30, 2022. To guarantee that the CLI for Microsoft 365 will keep working, we migrated the affected commands to use the Microsoft Graph. Here's the list of the affected commands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli-microsoft365-docusaurus/cmd/aad/oauth2grant/oauth2grant-list"},"aad oauth2grant list")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli-microsoft365-docusaurus/cmd/aad/sp/sp-get"},"aad sp get"))),(0,o.kt)("h3",{id:"what-action-do-i-need-to-take"},"What action do I need to take?"),(0,o.kt)("p",null,"While the options of the commands haven't changed, the data returned by the command might be different. If you use either command in a script, please verify that the script is working as intended. Here are the differences in the data returned by the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/graph/migrate-azure-ad-graph-property-differences#oauth2permissionsgrant-property-differences"},"aad oauth2grant list")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/graph/migrate-azure-ad-graph-property-differences#serviceprincipal-property-differences"},"aad sp get")," commands."),(0,o.kt)("h2",{id:"in-aad-oauth2grant-list-renamed-clientid-to-spobjectid"},"In ",(0,o.kt)("inlineCode",{parentName:"h2"},"aad oauth2grant list")," renamed ",(0,o.kt)("inlineCode",{parentName:"h2"},"clientId")," to ",(0,o.kt)("inlineCode",{parentName:"h2"},"spObjectId")),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/aad/oauth2grant/oauth2grant-list"},"aad oauth2grant list")," command, we used to have the ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," option to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"objectId")," of the service principal. The name was confusing and not self-explanatory, which is why we decided to rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"spObjectId"),". The value of the option is the same. It's just the name of the property that changed."),(0,o.kt)("h3",{id:"what-action-do-i-need-to-take-1"},"What action do I need to take?"),(0,o.kt)("p",null,"If you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"aad oauth2grant list")," command, replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," option with ",(0,o.kt)("inlineCode",{parentName:"p"},"spObjectId"),"."),(0,o.kt)("h2",{id:"extended-aad-oauth2grant-remove-with-confirm"},"Extended ",(0,o.kt)("inlineCode",{parentName:"h2"},"aad oauth2grant remove")," with ",(0,o.kt)("inlineCode",{parentName:"h2"},"confirm")),(0,o.kt)("p",null,"In CLI for Microsoft 365, removing an object is non-reversible. To prevent accidental removal, all remove commands include a prompt which can be suppressed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"confirm")," option. The ",(0,o.kt)("inlineCode",{parentName:"p"},"aad oauth2grant remove")," command didn't show the prompt and used to delete the grant directly. To align the command with other commands in the CLI, we extended it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"confirm")," option and showing a confirmation prompt when the ",(0,o.kt)("inlineCode",{parentName:"p"},"confirm")," option hasn't been specified."),(0,o.kt)("h3",{id:"what-action-do-i-need-to-take-2"},"What action do I need to take?"),(0,o.kt)("p",null,"If you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"aad oauth2grant remove")," command in your scripts, extend it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--confirm")," option to suppress the prompt and ensure that the script will run without requiring user interaction."))}u.isMDXComponent=!0}}]);