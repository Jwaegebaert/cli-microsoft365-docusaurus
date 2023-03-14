"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[96446],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),m=l(a),k=n,f=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return a?r.createElement(f,p(p({ref:t},i),{},{components:a})):r.createElement(f,p({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=k;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:n,p[1]=d;for(var l=2;l<o;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},42753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={},p="spfx package generate",d={unversionedId:"cmd/spfx/package/package-generate",id:"cmd/spfx/package/package-generate",title:"spfx package generate",description:"Generates SharePoint Framework solution package with a no-framework web part rendering the specified HTML snippet",source:"@site/docs/cmd/spfx/package/package-generate.md",sourceDirName:"cmd/spfx/package",slug:"/cmd/spfx/package/package-generate",permalink:"/cli-microsoft365-docusaurus/cmd/spfx/package/package-generate",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spfx/package/package-generate.md",tags:[],version:"current",lastUpdatedAt:1668980733,formattedLastUpdatedAt:"Nov 20, 2022",frontMatter:{},sidebar:"commands",previous:{title:"skype report activityuserdetail",permalink:"/cli-microsoft365-docusaurus/cmd/skype/report/report-activityuserdetail"},next:{title:"spfx project doctor",permalink:"/cli-microsoft365-docusaurus/cmd/spfx/project/project-doctor"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Response",id:"response",level:2}],i={toc:l},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spfx-package-generate"},"spfx package generate"),(0,n.kt)("p",null,"Generates SharePoint Framework solution package with a no-framework web part rendering the specified HTML snippet"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx package generate\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-t, --webPartTitle <webPartTitle>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Title of the web part to generate. Displayed in the tool box when adding web part to page")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-d, --webPartDescription <webPartDescription>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Description of the web part to generate. Displayed in the tool box when adding web part to page")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-n, --name <name>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Name of the package to generate. Used among others for the .sppkg file. Must be unique in the app catalog to avoid collisions with other solutions.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--html <html>"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"HTML snippet to embed in the web part. Can contain ",(0,n.kt)("code",{parentName:"p"},"<script>")," and ",(0,n.kt)("code",{parentName:"p"},"<style>")," tags.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--enableForTeams [enableForTeams]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Specify, to make the generated web part available in Microsoft Teams. Specify ",(0,n.kt)("code",{parentName:"p"},"tab")," to make the web part available as a configurable tab, ",(0,n.kt)("code",{parentName:"p"},"personalTab")," to make it available as a personal tab or ",(0,n.kt)("code",{parentName:"p"},"all")," to make it available both as a configurable and personal tab. By default the web part will not be available in Microsoft Teams.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--exposePageContextGlobally"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Set, to make the ",(0,n.kt)("code",{parentName:"p"},"legacyPageContext")," exposed by SharePoint Framework available at ",(0,n.kt)("code",{parentName:"p"},"window._spPageContextInfo")," for use in the HTML snippet of the web part")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--exposeTeamsContextGlobally"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Set, to make the Microsoft Teams context exposed by SharePoint Framework available at ",(0,n.kt)("code",{parentName:"p"},"window._teamsContextInfo")," for use in the HTML snippet of the web part")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--allowTenantWideDeployment"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Set, to allow the solution package to be deployed globally to all sites")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--developerName [developerName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Name of your organization. Displayed in Microsoft Teams when adding the solution as a (personal) tab. If not specified set to ",(0,n.kt)("code",{parentName:"p"},"Contoso"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--developerPrivacyUrl [developerPrivacyUrl]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"URL of the privacy policy for this solution. Displayed in Microsoft Teams when adding the solution as a (personal) tab. If not specified, set to ",(0,n.kt)("code",{parentName:"p"},"https://contoso.com/privacy"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--developerTermsOfUseUrl [developerTermsOfUseUrl]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"URL of the terms of use for this solution. Displayed in Microsoft Teams when adding the solution as a (personal) tab. If not specified, set to ",(0,n.kt)("code",{parentName:"p"},"https://contoso.com/terms-of-use"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--developerWebsiteUrl [developerWebsiteUrl]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"URL of your organization's website. Displayed in Microsoft Teams when adding the solution as a (personal) tab. If not specified, set to ",(0,n.kt)("code",{parentName:"p"},"https://contoso.com/my-app"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--developerMpnId [developerMpnId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Microsoft Partner Network ID of your organization. If not specified, set to ",(0,n.kt)("code",{parentName:"p"},"000000"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("h2",{parentName:"dt"},"Examples")),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"nerate a web part that shows the weather for Amsterdam. Load web part contents from a local file. Allow the web part to be deployed to all sites. Expose the web part in Teams as a personal tab.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("pre",{parentName:"dt"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"}))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},'65 spfx package generate --webPartTitle "Amsterdam weather" --webPartDescription "Shows weather in Amsterdam" --name amsterdam-weather --html @amsterdam-weather.html --allowTenantWideDeployment --enableForTeams all'))),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}c.isMDXComponent=!0}}]);