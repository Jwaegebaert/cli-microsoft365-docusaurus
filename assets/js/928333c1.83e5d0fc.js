"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96446],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),f=o,u=d["".concat(l,".").concat(f)]||d[f]||m[f]||r;return a?n.createElement(u,p(p({ref:t},c),{},{components:a})):n.createElement(u,p({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,p=new Array(r);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},42753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={},p="spfx package generate",i={unversionedId:"cmd/spfx/package/package-generate",id:"cmd/spfx/package/package-generate",title:"spfx package generate",description:"Generates SharePoint Framework solution package with a no-framework web part rendering the specified HTML snippet",source:"@site/docs/cmd/spfx/package/package-generate.md",sourceDirName:"cmd/spfx/package",slug:"/cmd/spfx/package/package-generate",permalink:"/cmd/spfx/package/package-generate",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spfx/package/package-generate.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"SharePoint Framework (spfx)",permalink:"/cmd/groups/spfx"},next:{title:"spfx project doctor",permalink:"/cmd/spfx/project/project-doctor"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spfx-package-generate"},"spfx package generate"),(0,o.kt)("p",null,"Generates SharePoint Framework solution package with a no-framework web part rendering the specified HTML snippet"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx package generate\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-t, --webPartTitle <webPartTitle>"),"\n: Title of the web part to generate. Displayed in the tool box when adding web part to page"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-d, --webPartDescription <webPartDescription>"),"\n: Description of the web part to generate. Displayed in the tool box when adding web part to page"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-n, --name <name>"),"\n: Name of the package to generate. Used among others for the .sppkg file. Must be unique in the app catalog to avoid collisions with other solutions."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--html <html>"),"\n: HTML snippet to embed in the web part. Can contain ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<style>")," tags."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--enableForTeams [enableForTeams]"),"\n: Specify, to make the generated web part available in Microsoft Teams. Specify ",(0,o.kt)("inlineCode",{parentName:"p"},"tab")," to make the web part available as a configurable tab, ",(0,o.kt)("inlineCode",{parentName:"p"},"personalTab")," to make it available as a personal tab or ",(0,o.kt)("inlineCode",{parentName:"p"},"all")," to make it available both as a configurable and personal tab. By default the web part will not be available in Microsoft Teams."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--exposePageContextGlobally"),"\n: Set, to make the ",(0,o.kt)("inlineCode",{parentName:"p"},"legacyPageContext")," exposed by SharePoint Framework available at ",(0,o.kt)("inlineCode",{parentName:"p"},"window._spPageContextInfo")," for use in the HTML snippet of the web part"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--exposeTeamsContextGlobally"),"\n: Set, to make the Microsoft Teams context exposed by SharePoint Framework available at ",(0,o.kt)("inlineCode",{parentName:"p"},"window._teamsContextInfo")," for use in the HTML snippet of the web part"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--allowTenantWideDeployment"),"\n: Set, to allow the solution package to be deployed globally to all sites"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--developerName [developerName]"),"\n: Name of your organization. Displayed in Microsoft Teams when adding the solution as a (personal) tab. If not specified set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Contoso"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--developerPrivacyUrl [developerPrivacyUrl]"),"\n: URL of the privacy policy for this solution. Displayed in Microsoft Teams when adding the solution as a (personal) tab. If not specified, set to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://contoso.com/privacy"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--developerTermsOfUseUrl [developerTermsOfUseUrl]"),"\n: URL of the terms of use for this solution. Displayed in Microsoft Teams when adding the solution as a (personal) tab. If not specified, set to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://contoso.com/terms-of-use"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--developerWebsiteUrl [developerWebsiteUrl]"),"\n: URL of your organization's website. Displayed in Microsoft Teams when adding the solution as a (personal) tab. If not specified, set to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://contoso.com/my-app"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--developerMpnId [developerMpnId]"),"\n: Microsoft Partner Network ID of your organization. If not specified, set to ",(0,o.kt)("inlineCode",{parentName:"p"},"000000"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Generate a web part that shows the weather for Amsterdam. Load web part contents from a local file. Allow the web part to be deployed to all sites. Expose the web part in Teams as a personal tab."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spfx package generate --webPartTitle "Amsterdam weather" --webPartDescription "Shows weather in Amsterdam" --name amsterdam-weather --html @amsterdam-weather.html --allowTenantWideDeployment --enableForTeams all\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}d.isMDXComponent=!0}}]);