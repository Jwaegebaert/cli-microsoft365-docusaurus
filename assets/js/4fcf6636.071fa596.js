"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const i={},r="v3 Upgrade Guidance",p={unversionedId:"v3-upgrade-guidance",id:"v3-upgrade-guidance",title:"v3 Upgrade Guidance",description:"We recently announced that the next version of the Office 365 CLI will be v3 and is planned to be released on September 6, 2020.",source:"@site/docs/v3-upgrade-guidance.md",sourceDirName:".",slug:"/v3-upgrade-guidance",permalink:"/cli-microsoft365-docusaurus/v3-upgrade-guidance",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/v3-upgrade-guidance.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672784370,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{},sidebar:"home",previous:{title:"v4 Upgrade Guidance",permalink:"/cli-microsoft365-docusaurus/v4-upgrade-guidance"}},l={},s=[{value:"New package name",id:"new-package-name",level:2},{value:"Why <code>CLI for Microsoft 365</code> and not <code>Microsoft 365 CLI</code>?",id:"why-cli-for-microsoft-365-and-not-microsoft-365-cli",level:3},{value:"Removal of the o365 command alias",id:"removal-of-the-o365-command-alias",level:2},{value:"Renaming of CLI environment variables",id:"renaming-of-cli-environment-variables",level:2},{value:"Removal of the global <code>--pretty</code> option",id:"removal-of-the-global---pretty-option",level:2},{value:"Removal of immersive mode",id:"removal-of-immersive-mode",level:2},{value:"Removal of <code>--outputFile</code> option",id:"removal-of---outputfile-option",level:2},{value:"Removal of deprecated aliases",id:"removal-of-deprecated-aliases",level:2},{value:"Deprecation of support for options with spaces without quotes",id:"deprecation-of-support-for-options-with-spaces-without-quotes",level:2},{value:"Renaming of <code>--query</code> option on <code>spo search</code> command",id:"renaming-of---query-option-on-spo-search-command",level:2},{value:"Removal of <code>-h</code> short option on <code>spo contenttype field set</code> and <code>spo hidedefaultthemes set</code> commands",id:"removal-of--h-short-option-on-spo-contenttype-field-set-and-spo-hidedefaultthemes-set-commands",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"v3-upgrade-guidance"},"v3 Upgrade Guidance"),(0,a.kt)("p",null,"We recently announced that the next version of the Office 365 CLI will be v3 and is planned to be released on September 6, 2020."),(0,a.kt)("p",null,"With this release there are a number of breaking changes, so to help you make the transition from ",(0,a.kt)("inlineCode",{parentName:"p"},"Office 365 CLI v2")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"CLI for Microsoft 365 v3"),", we have listed those changes, why they have been made and what action you may need to take."),(0,a.kt)("h2",{id:"new-package-name"},"New package name"),(0,a.kt)("p",null,"With the move to the new name, a new package has been published to npm with the name, ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/cli-microsoft365")),(0,a.kt)("p",null,"As with v2, we will still provide a few variations of package."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/cli-microsoft365@next")," for the latest beta version, we release beta versions on a regular basis, for you to try new features and fixes before the monthly stable release."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/cli-microsoft365")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/cli-microsoft365@latest")," for the latest stable version, which we release every month."),(0,a.kt)("h3",{id:"why-cli-for-microsoft-365-and-not-microsoft-365-cli"},"Why ",(0,a.kt)("inlineCode",{parentName:"h3"},"CLI for Microsoft 365")," and not ",(0,a.kt)("inlineCode",{parentName:"h3"},"Microsoft 365 CLI"),"?"),(0,a.kt)("p",null,"This is a community-owned product, as Microsoft uses product names that begin with ",(0,a.kt)("em",{parentName:"p"},"Microsoft")," and ",(0,a.kt)("em",{parentName:"p"},"Microsoft 365")," for products they own, we did not want to cause confusion between the two."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"What action do I need to take?"))),(0,a.kt)("p",null,"If you have scripts using ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/office365-cli")," then we would encourage you to update your installed package to use the new package name, ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/cli-microsoft365"),", this will ensure that you get all the latest updates and patches."),(0,a.kt)("p",null,"!!! attention\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/office365-cli")," package will still remain on npm, but will be deprecated following the release of v3. It will not receive any updates or fixes, therefore we would strongly recommend that you should plan to upgrade to the new package."),(0,a.kt)("h2",{id:"removal-of-the-o365-command-alias"},"Removal of the o365 command alias"),(0,a.kt)("p",null,"In Office 365 CLI v2, we provided two command aliases, ",(0,a.kt)("inlineCode",{parentName:"p"},"o365")," and later, ",(0,a.kt)("inlineCode",{parentName:"p"},"m365"),". With the release of v3, we will be removing the ",(0,a.kt)("inlineCode",{parentName:"p"},"o365")," command alias."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"What action do I need to take?"))),(0,a.kt)("p",null,"After upgrading to v3, ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/cli-microsoft365"),", any scripts that use the ",(0,a.kt)("inlineCode",{parentName:"p"},"o365")," alias will need to be updated to use ",(0,a.kt)("inlineCode",{parentName:"p"},"m365")," alias instead."),(0,a.kt)("h2",{id:"renaming-of-cli-environment-variables"},"Renaming of CLI environment variables"),(0,a.kt)("p",null,"In Office 365 CLI v2, we provided two environment variables, ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFICE365CLI_AADAPPID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFICE365CLI_TENANT"),". These environment variable could be updated to point the CLI to your own custom Azure Active Directory identity to use for logging into your Microsoft 365 tenant instead of using the multi-tenant PnP Management Shell identity used as the default identity."),(0,a.kt)("p",null,"Find out more about this feature: ",(0,a.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/user-guide/using-own-identity"},"Using your own Azure AD identity")),(0,a.kt)("p",null,"These environment variables have been renamed following the rename of the package."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"What action do I need to take?"))),(0,a.kt)("p",null,"After upgrading to v3, ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/cli-microsoft365"),", any scripts that make use of a custom Azure AD identity for authentication will need to update the setting of the environment variables to use the new names, ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_AADAPPID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIMICROSOFT365_TENANT"),"."),(0,a.kt)("h2",{id:"removal-of-the-global---pretty-option"},"Removal of the global ",(0,a.kt)("inlineCode",{parentName:"h2"},"--pretty")," option"),(0,a.kt)("p",null,"In Office 365 CLI v2, we introduced a global option to prettify the JSON output, this helped to make the output more readable when working with large JSON responses. Rather than having this feature as an explicit option, we have decided to remove this option and make the default JSON output prettified."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"What action do I need to take?"))),(0,a.kt)("p",null,"After upgrading to v3, ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/cli-microsoft365"),", any scripts that use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--pretty")," option will need to be updated and you should remove the option from the command to ensure the it works as expected."),(0,a.kt)("h2",{id:"removal-of-immersive-mode"},"Removal of immersive mode"),(0,a.kt)("p",null,"In Office 365 CLI v2, we provided an immersive mode, which you could enter by executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"o365")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"m365")," command with no options passed, however we made the decision to remove the immersive mode from the CLI."),(0,a.kt)("p",null,"For a couple of reasons, the first being that the usage of this mode was very low, secondly, removing this mode simplifies our code base and removes a dependency on the Vorpal library which the CLI uses behind the scenes, making the CLI much more maintainable going forwards."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"What action do I need to take?"))),(0,a.kt)("p",null,"There is no action for you to take."),(0,a.kt)("h2",{id:"removal-of---outputfile-option"},"Removal of ",(0,a.kt)("inlineCode",{parentName:"h2"},"--outputFile")," option"),(0,a.kt)("p",null,"In Office 365 CLI v2, we provided an option called ",(0,a.kt)("inlineCode",{parentName:"p"},"--outputFile")," on certain commands. This option provided a way of saving the output of the command to a local file, this was particularly useful when using the immersive mode where it was not possible to use any shell commands. As we have removed the immersive mode in v3, the requirement for a specific option is no longer required and it is more convenient to use shell commands for this purpose."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"What action do I need to take?"))),(0,a.kt)("p",null,"After upgrading to v3, ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/cli-microsoft365"),", any scripts that use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--outputFile")," option should be updated. Remove the option and replace with a shell command to send the output to a file, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},'m365 aad o365group report activitycounts --period D7 --output json --outputFile "o365groupactivitycounts.json"')," becomes ",(0,a.kt)("inlineCode",{parentName:"p"},'m365 aad o365group report activitycounts --period D7 --output json > "o365groupactivitycounts.json"')),(0,a.kt)("h2",{id:"removal-of-deprecated-aliases"},"Removal of deprecated aliases"),(0,a.kt)("p",null,"In Office 365 CLI v2, we had a number of aliases that had been deprecated but remained within the CLI for backwards compatibility. In v3, we have taken the decision to remove these aliases, they are listed below with their replacement aliases."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"consent")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"m365 cli consent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--reconsent")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"m365 cli reconsent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--completion:clink:generate")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"m365 cli completion clink update")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--completion:sh:generate")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"m365 cli completion sh update")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--completion:sh:setup")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"m365 cli completion sh setup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accesstoken get")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"m365 util accesstoken get"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"What action do I need to take?"))),(0,a.kt)("p",null,"After upgrading to v3, ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/cli-microsoft365"),", any scripts that use any of the deprecated aliases option should be updated to use their replacement aliases."),(0,a.kt)("h2",{id:"deprecation-of-support-for-options-with-spaces-without-quotes"},"Deprecation of support for options with spaces without quotes"),(0,a.kt)("p",null,"In Office 365 CLI v2, it was possible to specify options with spaces without quotes. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 spo site add --title My new site"),", going forwards into v3 we will not support this."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"What action do I need to take?"))),(0,a.kt)("p",null,"After upgrading to v3, ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/cli-microsoft365"),", any scripts that use option values containing spaces, must be  updated to wrap the option value in quotes, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"m365 spo site add --title My new site")," will become ",(0,a.kt)("inlineCode",{parentName:"p"},'m365 spo site add --title "My new site"'),", this will ensure that the command works as expected."),(0,a.kt)("h2",{id:"renaming-of---query-option-on-spo-search-command"},"Renaming of ",(0,a.kt)("inlineCode",{parentName:"h2"},"--query")," option on ",(0,a.kt)("inlineCode",{parentName:"h2"},"spo search")," command"),(0,a.kt)("p",null,"In Office 365 CLI v2, we identified that on the ",(0,a.kt)("inlineCode",{parentName:"p"},"spo search")," command the option used to pass in the search query was called ",(0,a.kt)("inlineCode",{parentName:"p"},"--query"),", unfortunately when we introduced the ability to use JMESPath queries we introduced a global option with the same name and this caused the command to break."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"What action do I need to take?"))),(0,a.kt)("p",null,"After upgrading to v3, ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/cli-microsoft365"),", rename the ",(0,a.kt)("inlineCode",{parentName:"p"},"--query")," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"--queryText")," when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"spo search")," command."),(0,a.kt)("h2",{id:"removal-of--h-short-option-on-spo-contenttype-field-set-and-spo-hidedefaultthemes-set-commands"},"Removal of ",(0,a.kt)("inlineCode",{parentName:"h2"},"-h")," short option on ",(0,a.kt)("inlineCode",{parentName:"h2"},"spo contenttype field set")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"spo hidedefaultthemes set")," commands"),(0,a.kt)("p",null,"In Office 365 CLI v2, to return usage examples of a command in your shell, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," option. We wanted to introduce a short version of this option however we had identified that two commands already had the ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," short option implemented."),(0,a.kt)("p",null,"We have taken the step to make ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," short option a reserved global option in v3, which makes the CLI consistent with other CLIs such as the Azure CLI."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"What action do I need to take?"))),(0,a.kt)("p",null,"After upgrading to v3, ",(0,a.kt)("inlineCode",{parentName:"p"},"@pnp/cli-microsoft365"),", any scripts that use the the short options on spo contenttype field set and spo hidedefaultthemes set commands should be updated to use their longer named options, ",(0,a.kt)("inlineCode",{parentName:"p"},"--hidden")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--hideDefaultTheme"),", respectively."))}m.isMDXComponent=!0}}]);